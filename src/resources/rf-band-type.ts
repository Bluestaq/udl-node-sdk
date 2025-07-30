// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class RfBandType extends APIResource {
  /**
   * Service operation to take a single RFBandType as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfBandType.create({
   *   id: 'Ku',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   description: 'Example description',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: RfBandTypeCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/rfbandtype', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an RFBandType. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfBandType.update('id', {
   *   body_id: 'Ku',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   description: 'Example description',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: RfBandTypeUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/rfbandtype/${pathID}`, {
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
   * for await (const rfBandTypeListResponse of client.rfBandType.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RfBandTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RfBandTypeListResponsesOffsetPage, RfBandTypeListResponse> {
    return this._client.getAPIList('/udl/rfbandtype', OffsetPage<RfBandTypeListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete an RFBandType specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfBandType.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/rfbandtype/${id}`, {
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
   * const response = await client.rfBandType.count();
   * ```
   */
  count(query: RfBandTypeCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/rfbandtype/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single RFBandType by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const rfBandType = await client.rfBandType.get('id');
   * ```
   */
  get(
    id: string,
    query: RfBandTypeGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RfBandTypeGetResponse> {
    return this._client.get(path`/udl/rfbandtype/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.rfBandType.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<RfBandTypeQueryhelpResponse> {
    return this._client.get('/udl/rfbandtype/queryhelp', options);
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
   * const response = await client.rfBandType.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: RfBandTypeTupleParams, options?: RequestOptions): APIPromise<RfBandTypeTupleResponse> {
    return this._client.get('/udl/rfbandtype/tuple', { query, ...options });
  }
}

export type RfBandTypeListResponsesOffsetPage = OffsetPage<RfBandTypeListResponse>;

/**
 * This table contains descriptions for common satellite RF bands.
 */
export interface RfBandTypeListResponse {
  /**
   * Unique identifier for the RF band (e.g. X, K, Ku, etc).
   */
  id: string;

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
   * Description of the band and common uses.
   */
  description: string;

  /**
   * Source of the data.
   */
  source: string;

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
   * Approximate end of the band frequency range, in Ghz.
   */
  endFreq?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Approximate start of the band frequency range, in Ghz.
   */
  startFreq?: number;
}

export type RfBandTypeCountResponse = string;

/**
 * This table contains descriptions for common satellite RF bands.
 */
export interface RfBandTypeGetResponse {
  /**
   * Unique identifier for the RF band (e.g. X, K, Ku, etc).
   */
  id: string;

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
   * Description of the band and common uses.
   */
  description: string;

  /**
   * Source of the data.
   */
  source: string;

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
   * Approximate end of the band frequency range, in Ghz.
   */
  endFreq?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Approximate start of the band frequency range, in Ghz.
   */
  startFreq?: number;

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

export interface RfBandTypeQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<RfBandTypeQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace RfBandTypeQueryhelpResponse {
  export interface Parameter {
    classificationMarking?: string;

    derived?: boolean;

    description?: string;

    elemMatch?: boolean;

    format?: string;

    histQuerySupported?: boolean;

    histTupleSupported?: boolean;

    name?: string;

    required?: boolean;

    restQuerySupported?: boolean;

    restTupleSupported?: boolean;

    type?: string;

    unitOfMeasure?: string;

    utcDate?: boolean;
  }
}

export type RfBandTypeTupleResponse = Array<RfBandTypeTupleResponse.RfBandTypeTupleResponseItem>;

export namespace RfBandTypeTupleResponse {
  /**
   * This table contains descriptions for common satellite RF bands.
   */
  export interface RfBandTypeTupleResponseItem {
    /**
     * Unique identifier for the RF band (e.g. X, K, Ku, etc).
     */
    id: string;

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
     * Description of the band and common uses.
     */
    description: string;

    /**
     * Source of the data.
     */
    source: string;

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
     * Approximate end of the band frequency range, in Ghz.
     */
    endFreq?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Approximate start of the band frequency range, in Ghz.
     */
    startFreq?: number;

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

export interface RfBandTypeCreateParams {
  /**
   * Unique identifier for the RF band (e.g. X, K, Ku, etc).
   */
  id: string;

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
   * Description of the band and common uses.
   */
  description: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Approximate end of the band frequency range, in Ghz.
   */
  endFreq?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Approximate start of the band frequency range, in Ghz.
   */
  startFreq?: number;
}

export interface RfBandTypeUpdateParams {
  /**
   * Unique identifier for the RF band (e.g. X, K, Ku, etc).
   */
  body_id: string;

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
   * Description of the band and common uses.
   */
  description: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Approximate end of the band frequency range, in Ghz.
   */
  endFreq?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Approximate start of the band frequency range, in Ghz.
   */
  startFreq?: number;
}

export interface RfBandTypeListParams extends OffsetPageParams {}

export interface RfBandTypeCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RfBandTypeGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RfBandTypeTupleParams {
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

export declare namespace RfBandType {
  export {
    type RfBandTypeListResponse as RfBandTypeListResponse,
    type RfBandTypeCountResponse as RfBandTypeCountResponse,
    type RfBandTypeGetResponse as RfBandTypeGetResponse,
    type RfBandTypeQueryhelpResponse as RfBandTypeQueryhelpResponse,
    type RfBandTypeTupleResponse as RfBandTypeTupleResponse,
    type RfBandTypeListResponsesOffsetPage as RfBandTypeListResponsesOffsetPage,
    type RfBandTypeCreateParams as RfBandTypeCreateParams,
    type RfBandTypeUpdateParams as RfBandTypeUpdateParams,
    type RfBandTypeListParams as RfBandTypeListParams,
    type RfBandTypeCountParams as RfBandTypeCountParams,
    type RfBandTypeGetParams as RfBandTypeGetParams,
    type RfBandTypeTupleParams as RfBandTypeTupleParams,
  };
}
