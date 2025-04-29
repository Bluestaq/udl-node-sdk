// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Launchevent extends APIResource {
  /**
   * Service operation to take a single LaunchEvent as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  create(body: LauncheventCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/launchevent', {
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
  list(query: LauncheventListParams, options?: RequestOptions): APIPromise<LauncheventListResponse> {
    return this._client.get('/udl/launchevent', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: LauncheventCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/launchevent/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * LaunchEvent as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   */
  createBulk(params: LauncheventCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/launchevent/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single LaunchEvent record by its unique ID passed as
   * a path parameter.
   */
  get(
    id: string,
    query: LauncheventGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LauncheventGetResponse> {
    return this._client.get(path`/udl/launchevent/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/launchevent/queryhelp', {
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
  tuple(query: LauncheventTupleParams, options?: RequestOptions): APIPromise<LauncheventTupleResponse> {
    return this._client.get('/udl/launchevent/tuple', { query, ...options });
  }

  /**
   * Service operation to take LaunchEvent entries as a POST body and ingest into the
   * database. This operation is intended to be used for automated feeds into UDL. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   */
  unvalidatedPublish(
    params: LauncheventUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-launchevent', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type LauncheventListResponse = Array<LauncheventListResponse.LauncheventListResponseItem>;

export namespace LauncheventListResponse {
  /**
   * Information on known launch events.
   */
  export interface LauncheventListResponseItem {
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
     * Timestamp of the originating message in ISO8601 UTC format.
     */
    msgCreateDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The Basic Encyclopedia Number, if applicable.
     */
    beNumber?: string;

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
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * The launch date, in ISO8601 UTC format.
     */
    launchDate?: string;

    /**
     * The Launch facility name.
     */
    launchFacilityName?: string;

    /**
     * The DISOB launch Failure Code, if applicable.
     */
    launchFailureCode?: string;

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
     * Optional target-id, if missing in UDL.
     */
    origObjectId?: string;

    /**
     * The OSuffix, if applicable.
     */
    oSuffix?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;
  }
}

export type LauncheventCountResponse = string;

/**
 * Information on known launch events.
 */
export interface LauncheventGetResponse {
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
   * Timestamp of the originating message in ISO8601 UTC format.
   */
  msgCreateDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The Basic Encyclopedia Number, if applicable.
   */
  beNumber?: string;

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
   * Unique identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * The launch date, in ISO8601 UTC format.
   */
  launchDate?: string;

  /**
   * The Launch facility name.
   */
  launchFacilityName?: string;

  /**
   * The DISOB launch Failure Code, if applicable.
   */
  launchFailureCode?: string;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.OnorbitFull;

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
   * Optional target-id, if missing in UDL.
   */
  origObjectId?: string;

  /**
   * The OSuffix, if applicable.
   */
  oSuffix?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;
}

export type LauncheventTupleResponse = Array<LauncheventTupleResponse.LauncheventTupleResponseItem>;

export namespace LauncheventTupleResponse {
  /**
   * Information on known launch events.
   */
  export interface LauncheventTupleResponseItem {
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
     * Timestamp of the originating message in ISO8601 UTC format.
     */
    msgCreateDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The Basic Encyclopedia Number, if applicable.
     */
    beNumber?: string;

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
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * The launch date, in ISO8601 UTC format.
     */
    launchDate?: string;

    /**
     * The Launch facility name.
     */
    launchFacilityName?: string;

    /**
     * The DISOB launch Failure Code, if applicable.
     */
    launchFailureCode?: string;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Shared.OnorbitFull;

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
     * Optional target-id, if missing in UDL.
     */
    origObjectId?: string;

    /**
     * The OSuffix, if applicable.
     */
    oSuffix?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;
  }
}

export interface LauncheventCreateParams {
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
   * Timestamp of the originating message in ISO8601 UTC format.
   */
  msgCreateDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The Basic Encyclopedia Number, if applicable.
   */
  beNumber?: string;

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
   * The launch date, in ISO8601 UTC format.
   */
  launchDate?: string;

  /**
   * The Launch facility name.
   */
  launchFacilityName?: string;

  /**
   * The DISOB launch Failure Code, if applicable.
   */
  launchFailureCode?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional target-id, if missing in UDL.
   */
  origObjectId?: string;

  /**
   * The OSuffix, if applicable.
   */
  oSuffix?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;
}

export interface LauncheventListParams {
  /**
   * Timestamp of the originating message in ISO8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgCreateDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface LauncheventCountParams {
  /**
   * Timestamp of the originating message in ISO8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgCreateDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface LauncheventCreateBulkParams {
  body: Array<LauncheventCreateBulkParams.Body>;
}

export namespace LauncheventCreateBulkParams {
  /**
   * Information on known launch events.
   */
  export interface Body {
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
     * Timestamp of the originating message in ISO8601 UTC format.
     */
    msgCreateDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The Basic Encyclopedia Number, if applicable.
     */
    beNumber?: string;

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
     * The launch date, in ISO8601 UTC format.
     */
    launchDate?: string;

    /**
     * The Launch facility name.
     */
    launchFacilityName?: string;

    /**
     * The DISOB launch Failure Code, if applicable.
     */
    launchFailureCode?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional target-id, if missing in UDL.
     */
    origObjectId?: string;

    /**
     * The OSuffix, if applicable.
     */
    oSuffix?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;
  }
}

export interface LauncheventGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LauncheventTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Timestamp of the originating message in ISO8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgCreateDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface LauncheventUnvalidatedPublishParams {
  body: Array<LauncheventUnvalidatedPublishParams.Body>;
}

export namespace LauncheventUnvalidatedPublishParams {
  /**
   * Information on known launch events.
   */
  export interface Body {
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
     * Timestamp of the originating message in ISO8601 UTC format.
     */
    msgCreateDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The Basic Encyclopedia Number, if applicable.
     */
    beNumber?: string;

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
     * The launch date, in ISO8601 UTC format.
     */
    launchDate?: string;

    /**
     * The Launch facility name.
     */
    launchFacilityName?: string;

    /**
     * The DISOB launch Failure Code, if applicable.
     */
    launchFailureCode?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional target-id, if missing in UDL.
     */
    origObjectId?: string;

    /**
     * The OSuffix, if applicable.
     */
    oSuffix?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;
  }
}

export declare namespace Launchevent {
  export {
    type LauncheventListResponse as LauncheventListResponse,
    type LauncheventCountResponse as LauncheventCountResponse,
    type LauncheventGetResponse as LauncheventGetResponse,
    type LauncheventTupleResponse as LauncheventTupleResponse,
    type LauncheventCreateParams as LauncheventCreateParams,
    type LauncheventListParams as LauncheventListParams,
    type LauncheventCountParams as LauncheventCountParams,
    type LauncheventCreateBulkParams as LauncheventCreateBulkParams,
    type LauncheventGetParams as LauncheventGetParams,
    type LauncheventTupleParams as LauncheventTupleParams,
    type LauncheventUnvalidatedPublishParams as LauncheventUnvalidatedPublishParams,
  };
}
