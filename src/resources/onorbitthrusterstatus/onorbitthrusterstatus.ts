// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  OnorbitthrusterstatusFull,
  OnorbitthrusterstatusFullsOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Onorbitthrusterstatus extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single OnorbitThrusterStatus record as a POST body
   * and ingest into the database. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitthrusterstatus.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idOnorbitThruster: 'ff7dc909-e8b4-4a54-8529-1963d4e9b353',
   *   source: 'Bluestaq',
   *   statusTime: '2024-01-01T16:00:00.123Z',
   * });
   * ```
   */
  create(body: OnorbitthrusterstatusCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/onorbitthrusterstatus', {
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
   * for await (const onorbitthrusterstatusListResponse of client.onorbitthrusterstatus.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OnorbitthrusterstatusListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OnorbitthrusterstatusListResponsesOffsetPage, OnorbitthrusterstatusListResponse> {
    return this._client.getAPIList(
      '/udl/onorbitthrusterstatus',
      OffsetPage<OnorbitthrusterstatusListResponse>,
      { query, ...options },
    );
  }

  /**
   * Service operation to delete a OnorbitThrusterStatus record specified by the
   * passed ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitthrusterstatus.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/onorbitthrusterstatus/${id}`, {
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
   * const response = await client.onorbitthrusterstatus.count();
   * ```
   */
  count(
    query: OnorbitthrusterstatusCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/onorbitthrusterstatus/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * onorbitthrusterstatus records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.onorbitthrusterstatus.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       idOnorbitThruster:
   *         'ff7dc909-e8b4-4a54-8529-1963d4e9b353',
   *       source: 'Bluestaq',
   *       statusTime: '2024-01-01T16:00:00.123Z',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: OnorbitthrusterstatusCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/onorbitthrusterstatus/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OnorbitThrusterStatus record by its unique ID
   * passed as a path parameter. OnorbitThrusterStatus records are information for
   * OnorbitThruster objects.
   *
   * @example
   * ```ts
   * const onorbitthrusterstatusFull =
   *   await client.onorbitthrusterstatus.get('id');
   * ```
   */
  get(
    id: string,
    query: OnorbitthrusterstatusGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryAPI.OnorbitthrusterstatusFull> {
    return this._client.get(path`/udl/onorbitthrusterstatus/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * await client.onorbitthrusterstatus.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/onorbitthrusterstatus/queryhelp', {
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
   *
   * @example
   * ```ts
   * const onorbitthrusterstatusFulls =
   *   await client.onorbitthrusterstatus.tuple({
   *     columns: 'columns',
   *   });
   * ```
   */
  tuple(
    query: OnorbitthrusterstatusTupleParams,
    options?: RequestOptions,
  ): APIPromise<OnorbitthrusterstatusTupleResponse> {
    return this._client.get('/udl/onorbitthrusterstatus/tuple', { query, ...options });
  }
}

export type OnorbitthrusterstatusListResponsesOffsetPage = OffsetPage<OnorbitthrusterstatusListResponse>;

/**
 * Status information for OnorbitThruster objects.
 */
export interface OnorbitthrusterstatusListResponse {
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
   * ID of the associated OnorbitThruster record. This ID can be used to obtain
   * additional information on an onorbit thruster object using the 'get by ID'
   * operation (e.g. /udl/onorbitthruster/{id}). For example, the OnorbitThruster
   * object with idOnorbitThruster = abc would be queried as
   * /udl/onorbitthruster/abc.
   */
  idOnorbitThruster: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Datetime of the thruster status observation in ISO 8601 UTC datetime format with
   * millisecond precision.
   */
  statusTime: string;

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
   * Estimated available delta-velocity for this thruster, in meters per second.
   */
  estDeltaV?: number;

  /**
   * Total fuel mass available for this thruster's type, in kilograms.
   */
  fuelMass?: number;

  /**
   * 1-sigma uncertainty of the total fuel mass available for this thruster type, in
   * kilograms.
   */
  fuelMassUnc?: number;

  /**
   * Specific impulse for this thruster, in seconds.
   */
  isp?: number;

  /**
   * Maximum available delta-velocity for this thruster, in meters per second.
   */
  maxDeltaV?: number;

  /**
   * Minimum available delta-velocity for this thruster, in meters per second.
   */
  minDeltaV?: number;

  /**
   * Identifier of this thruster.
   */
  name?: string;

  /**
   * Flag indicating if this thruster is operational.
   */
  operational?: boolean;

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
   * Average available propellant mass for this thruster's type, in kilograms.
   */
  propMassAvg?: number;

  /**
   * Maximum available propellant mass for this thruster's type, in kilograms.
   */
  propMassMax?: number;

  /**
   * Median available propellant mass for this thruster's type, in kilograms.
   */
  propMassMedian?: number;

  /**
   * Minimum available propellant mass for this thruster's type, in kilograms.
   */
  propMassMin?: number;

  /**
   * Maximum available thrust for this thruster, in newtons.
   */
  thrustMax?: number;

  /**
   * Total delta-velocity available for this thruster's type, in meters per second.
   */
  totalDeltaV?: number;
}

export type OnorbitthrusterstatusCountResponse = string;

export type OnorbitthrusterstatusTupleResponse = Array<HistoryAPI.OnorbitthrusterstatusFull>;

export interface OnorbitthrusterstatusCreateParams {
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
   * ID of the associated OnorbitThruster record. This ID can be used to obtain
   * additional information on an onorbit thruster object using the 'get by ID'
   * operation (e.g. /udl/onorbitthruster/{id}). For example, the OnorbitThruster
   * object with idOnorbitThruster = abc would be queried as
   * /udl/onorbitthruster/abc.
   */
  idOnorbitThruster: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Datetime of the thruster status observation in ISO 8601 UTC datetime format with
   * millisecond precision.
   */
  statusTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Estimated available delta-velocity for this thruster, in meters per second.
   */
  estDeltaV?: number;

  /**
   * Total fuel mass available for this thruster's type, in kilograms.
   */
  fuelMass?: number;

  /**
   * 1-sigma uncertainty of the total fuel mass available for this thruster type, in
   * kilograms.
   */
  fuelMassUnc?: number;

  /**
   * Specific impulse for this thruster, in seconds.
   */
  isp?: number;

  /**
   * Maximum available delta-velocity for this thruster, in meters per second.
   */
  maxDeltaV?: number;

  /**
   * Minimum available delta-velocity for this thruster, in meters per second.
   */
  minDeltaV?: number;

  /**
   * Identifier of this thruster.
   */
  name?: string;

  /**
   * Flag indicating if this thruster is operational.
   */
  operational?: boolean;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Average available propellant mass for this thruster's type, in kilograms.
   */
  propMassAvg?: number;

  /**
   * Maximum available propellant mass for this thruster's type, in kilograms.
   */
  propMassMax?: number;

  /**
   * Median available propellant mass for this thruster's type, in kilograms.
   */
  propMassMedian?: number;

  /**
   * Minimum available propellant mass for this thruster's type, in kilograms.
   */
  propMassMin?: number;

  /**
   * Maximum available thrust for this thruster, in newtons.
   */
  thrustMax?: number;

  /**
   * Total delta-velocity available for this thruster's type, in meters per second.
   */
  totalDeltaV?: number;
}

export interface OnorbitthrusterstatusListParams extends OffsetPageParams {
  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) ID of the
   * associated OnorbitThruster record. This ID can be used to obtain additional
   * information on an onorbit thruster object using the 'get by ID' operation (e.g.
   * /udl/onorbitthruster/{id}). For example, the OnorbitThruster object with
   * idOnorbitThruster = abc would be queried as /udl/onorbitthruster/abc.
   */
  idOnorbitThruster?: string;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) Datetime
   * of the thruster status observation in ISO 8601 UTC datetime format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  statusTime?: string;
}

export interface OnorbitthrusterstatusCountParams {
  firstResult?: number;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) ID of the
   * associated OnorbitThruster record. This ID can be used to obtain additional
   * information on an onorbit thruster object using the 'get by ID' operation (e.g.
   * /udl/onorbitthruster/{id}). For example, the OnorbitThruster object with
   * idOnorbitThruster = abc would be queried as /udl/onorbitthruster/abc.
   */
  idOnorbitThruster?: string;

  maxResults?: number;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) Datetime
   * of the thruster status observation in ISO 8601 UTC datetime format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  statusTime?: string;
}

export interface OnorbitthrusterstatusCreateBulkParams {
  body: Array<OnorbitthrusterstatusCreateBulkParams.Body>;
}

export namespace OnorbitthrusterstatusCreateBulkParams {
  /**
   * Status information for OnorbitThruster objects.
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
     * ID of the associated OnorbitThruster record. This ID can be used to obtain
     * additional information on an onorbit thruster object using the 'get by ID'
     * operation (e.g. /udl/onorbitthruster/{id}). For example, the OnorbitThruster
     * object with idOnorbitThruster = abc would be queried as
     * /udl/onorbitthruster/abc.
     */
    idOnorbitThruster: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Datetime of the thruster status observation in ISO 8601 UTC datetime format with
     * millisecond precision.
     */
    statusTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Estimated available delta-velocity for this thruster, in meters per second.
     */
    estDeltaV?: number;

    /**
     * Total fuel mass available for this thruster's type, in kilograms.
     */
    fuelMass?: number;

    /**
     * 1-sigma uncertainty of the total fuel mass available for this thruster type, in
     * kilograms.
     */
    fuelMassUnc?: number;

    /**
     * Specific impulse for this thruster, in seconds.
     */
    isp?: number;

    /**
     * Maximum available delta-velocity for this thruster, in meters per second.
     */
    maxDeltaV?: number;

    /**
     * Minimum available delta-velocity for this thruster, in meters per second.
     */
    minDeltaV?: number;

    /**
     * Identifier of this thruster.
     */
    name?: string;

    /**
     * Flag indicating if this thruster is operational.
     */
    operational?: boolean;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Average available propellant mass for this thruster's type, in kilograms.
     */
    propMassAvg?: number;

    /**
     * Maximum available propellant mass for this thruster's type, in kilograms.
     */
    propMassMax?: number;

    /**
     * Median available propellant mass for this thruster's type, in kilograms.
     */
    propMassMedian?: number;

    /**
     * Minimum available propellant mass for this thruster's type, in kilograms.
     */
    propMassMin?: number;

    /**
     * Maximum available thrust for this thruster, in newtons.
     */
    thrustMax?: number;

    /**
     * Total delta-velocity available for this thruster's type, in meters per second.
     */
    totalDeltaV?: number;
  }
}

export interface OnorbitthrusterstatusGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OnorbitthrusterstatusTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  firstResult?: number;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) ID of the
   * associated OnorbitThruster record. This ID can be used to obtain additional
   * information on an onorbit thruster object using the 'get by ID' operation (e.g.
   * /udl/onorbitthruster/{id}). For example, the OnorbitThruster object with
   * idOnorbitThruster = abc would be queried as /udl/onorbitthruster/abc.
   */
  idOnorbitThruster?: string;

  maxResults?: number;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) Datetime
   * of the thruster status observation in ISO 8601 UTC datetime format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  statusTime?: string;
}

Onorbitthrusterstatus.History = History;

export declare namespace Onorbitthrusterstatus {
  export {
    type OnorbitthrusterstatusListResponse as OnorbitthrusterstatusListResponse,
    type OnorbitthrusterstatusCountResponse as OnorbitthrusterstatusCountResponse,
    type OnorbitthrusterstatusTupleResponse as OnorbitthrusterstatusTupleResponse,
    type OnorbitthrusterstatusListResponsesOffsetPage as OnorbitthrusterstatusListResponsesOffsetPage,
    type OnorbitthrusterstatusCreateParams as OnorbitthrusterstatusCreateParams,
    type OnorbitthrusterstatusListParams as OnorbitthrusterstatusListParams,
    type OnorbitthrusterstatusCountParams as OnorbitthrusterstatusCountParams,
    type OnorbitthrusterstatusCreateBulkParams as OnorbitthrusterstatusCreateBulkParams,
    type OnorbitthrusterstatusGetParams as OnorbitthrusterstatusGetParams,
    type OnorbitthrusterstatusTupleParams as OnorbitthrusterstatusTupleParams,
  };

  export {
    History as History,
    type OnorbitthrusterstatusFull as OnorbitthrusterstatusFull,
    type HistoryCountResponse as HistoryCountResponse,
    type OnorbitthrusterstatusFullsOffsetPage as OnorbitthrusterstatusFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
