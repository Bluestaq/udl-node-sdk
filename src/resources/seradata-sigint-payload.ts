// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SeradataSigintPayload extends APIResource {
  /**
   * Service operation to take a single SeradataSigIntPayload as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: SeradataSigintPayloadCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/seradatasigintpayload', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an SeradataSigIntPayload. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(
    pathID: string,
    body: SeradataSigintPayloadUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/udl/seradatasigintpayload/${pathID}`, {
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
    query: SeradataSigintPayloadListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SeradataSigintPayloadListResponsesOffsetPage, SeradataSigintPayloadListResponse> {
    return this._client.getAPIList(
      '/udl/seradatasigintpayload',
      OffsetPage<SeradataSigintPayloadListResponse>,
      { query, ...options },
    );
  }

  /**
   * Service operation to delete an SeradataSigIntPayload specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/seradatasigintpayload/${id}`, {
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
    query: SeradataSigintPayloadCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/seradatasigintpayload/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SeradataSigIntPayload by its unique ID passed
   * as a path parameter.
   */
  get(
    id: string,
    query: SeradataSigintPayloadGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeradataSigintPayloadGetResponse> {
    return this._client.get(path`/udl/seradatasigintpayload/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/seradatasigintpayload/queryhelp', {
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
    query: SeradataSigintPayloadTupleParams,
    options?: RequestOptions,
  ): APIPromise<SeradataSigintPayloadTupleResponse> {
    return this._client.get('/udl/seradatasigintpayload/tuple', { query, ...options });
  }
}

export type SeradataSigintPayloadListResponsesOffsetPage = OffsetPage<SeradataSigintPayloadListResponse>;

/**
 * Details for an sigint payload from Seradata.
 */
export interface SeradataSigintPayloadListResponse {
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
   * Time the row was created in the database, auto-populated by the system.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * Frequency coverage for this payload.
   */
  frequencyCoverage?: string;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Intercept parameters.
   */
  interceptParameters?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata.
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
   * Positional Accuracy for this payload.
   */
  positionalAccuracy?: string;

  /**
   * Swath Width in kilometers.
   */
  swathWidth?: number;

  /**
   * SIGINT Payload type, e.g. Comint, Elint, etc.
   */
  type?: string;
}

export type SeradataSigintPayloadCountResponse = string;

/**
 * Details for an sigint payload from Seradata.
 */
export interface SeradataSigintPayloadGetResponse {
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
   * Time the row was created in the database, auto-populated by the system.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * Frequency coverage for this payload.
   */
  frequencyCoverage?: string;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Intercept parameters.
   */
  interceptParameters?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata.
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
   * Positional Accuracy for this payload.
   */
  positionalAccuracy?: string;

  /**
   * Swath Width in kilometers.
   */
  swathWidth?: number;

  /**
   * SIGINT Payload type, e.g. Comint, Elint, etc.
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

export type SeradataSigintPayloadTupleResponse =
  Array<SeradataSigintPayloadTupleResponse.SeradataSigintPayloadTupleResponseItem>;

export namespace SeradataSigintPayloadTupleResponse {
  /**
   * Details for an sigint payload from Seradata.
   */
  export interface SeradataSigintPayloadTupleResponseItem {
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
     * Time the row was created in the database, auto-populated by the system.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database, auto-populated by the
     * system.
     */
    createdBy?: string;

    /**
     * Frequency coverage for this payload.
     */
    frequencyCoverage?: string;

    /**
     * Ground Station Locations for this payload.
     */
    groundStationLocations?: string;

    /**
     * Ground Station info for this payload.
     */
    groundStations?: string;

    /**
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the Sensor record.
     */
    idSensor?: string;

    /**
     * Intercept parameters.
     */
    interceptParameters?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Sensor name from Seradata.
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
     * Positional Accuracy for this payload.
     */
    positionalAccuracy?: string;

    /**
     * Swath Width in kilometers.
     */
    swathWidth?: number;

    /**
     * SIGINT Payload type, e.g. Comint, Elint, etc.
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

export interface SeradataSigintPayloadCreateParams {
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
   * Frequency coverage for this payload.
   */
  frequencyCoverage?: string;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Intercept parameters.
   */
  interceptParameters?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata.
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
   * Positional Accuracy for this payload.
   */
  positionalAccuracy?: string;

  /**
   * Swath Width in kilometers.
   */
  swathWidth?: number;

  /**
   * SIGINT Payload type, e.g. Comint, Elint, etc.
   */
  type?: string;
}

export interface SeradataSigintPayloadUpdateParams {
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
   * Frequency coverage for this payload.
   */
  frequencyCoverage?: string;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Intercept parameters.
   */
  interceptParameters?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata.
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
   * Positional Accuracy for this payload.
   */
  positionalAccuracy?: string;

  /**
   * Swath Width in kilometers.
   */
  swathWidth?: number;

  /**
   * SIGINT Payload type, e.g. Comint, Elint, etc.
   */
  type?: string;
}

export interface SeradataSigintPayloadListParams extends OffsetPageParams {}

export interface SeradataSigintPayloadCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataSigintPayloadGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataSigintPayloadTupleParams {
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

export declare namespace SeradataSigintPayload {
  export {
    type SeradataSigintPayloadListResponse as SeradataSigintPayloadListResponse,
    type SeradataSigintPayloadCountResponse as SeradataSigintPayloadCountResponse,
    type SeradataSigintPayloadGetResponse as SeradataSigintPayloadGetResponse,
    type SeradataSigintPayloadTupleResponse as SeradataSigintPayloadTupleResponse,
    type SeradataSigintPayloadListResponsesOffsetPage as SeradataSigintPayloadListResponsesOffsetPage,
    type SeradataSigintPayloadCreateParams as SeradataSigintPayloadCreateParams,
    type SeradataSigintPayloadUpdateParams as SeradataSigintPayloadUpdateParams,
    type SeradataSigintPayloadListParams as SeradataSigintPayloadListParams,
    type SeradataSigintPayloadCountParams as SeradataSigintPayloadCountParams,
    type SeradataSigintPayloadGetParams as SeradataSigintPayloadGetParams,
    type SeradataSigintPayloadTupleParams as SeradataSigintPayloadTupleParams,
  };
}
