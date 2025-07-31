// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryRetrieveParams,
  HistoryRetrieveResponse,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SensorMaintenance extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single SensorMaintenance as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sensorMaintenance.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   endTime: '2018-01-01T16:00:00.123456Z',
   *   siteCode: 'site01',
   *   source: 'Bluestaq',
   *   startTime: '2018-01-01T16:00:00.123456Z',
   * });
   * ```
   */
  create(body: SensorMaintenanceCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/sensormaintenance', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single SensorMaintenance. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.sensorMaintenance.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   endTime: '2018-01-01T16:00:00.123456Z',
   *   siteCode: 'site01',
   *   source: 'Bluestaq',
   *   startTime: '2018-01-01T16:00:00.123456Z',
   * });
   * ```
   */
  update(pathID: string, body: SensorMaintenanceUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/sensormaintenance/${pathID}`, {
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
   * for await (const sensorMaintenanceListResponse of client.sensorMaintenance.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SensorMaintenanceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SensorMaintenanceListResponsesOffsetPage, SensorMaintenanceListResponse> {
    return this._client.getAPIList('/udl/sensormaintenance', OffsetPage<SensorMaintenanceListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a SensorMaintenance object specified by the passed
   * ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sensorMaintenance.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/sensormaintenance/${id}`, {
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
   * const response = await client.sensorMaintenance.count();
   * ```
   */
  count(
    query: SensorMaintenanceCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/sensormaintenance/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to take multiple SensorMaintenance as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sensorMaintenance.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       endTime: '2018-01-01T16:00:00.123456Z',
   *       siteCode: 'site01',
   *       source: 'Bluestaq',
   *       startTime: '2018-01-01T16:00:00.123456Z',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: SensorMaintenanceCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body, origin, source } = params;
    return this._client.post('/udl/sensormaintenance/createBulk', {
      query: { origin, source },
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get current Sensor Maintenance records using any number of
   * additional parameters.
   *
   * @example
   * ```ts
   * const response = await client.sensorMaintenance.current();
   * ```
   */
  current(
    query: SensorMaintenanceCurrentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SensorMaintenanceCurrentResponse> {
    return this._client.get('/udl/sensormaintenance/current', { query, ...options });
  }

  /**
   * Service operation to get a single SensorMaintenance record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const sensorMaintenance =
   *   await client.sensorMaintenance.get('id');
   * ```
   */
  get(
    id: string,
    query: SensorMaintenanceGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SensorMaintenanceGetResponse> {
    return this._client.get(path`/udl/sensormaintenance/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.sensorMaintenance.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SensorMaintenanceQueryhelpResponse> {
    return this._client.get('/udl/sensormaintenance/queryhelp', options);
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
   * const response = await client.sensorMaintenance.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(
    query: SensorMaintenanceTupleParams,
    options?: RequestOptions,
  ): APIPromise<SensorMaintenanceTupleResponse> {
    return this._client.get('/udl/sensormaintenance/tuple', { query, ...options });
  }
}

export type SensorMaintenanceListResponsesOffsetPage = OffsetPage<SensorMaintenanceListResponse>;

/**
 * Maintenance schedule and operational status of Sensor.
 */
export interface SensorMaintenanceListResponse {
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
   * The planned outage end time in ISO8601 UTC format.
   */
  endTime: string;

  /**
   * The site to which this item applies. NOTE - this site code is COLT specific and
   * may not identically correspond to other UDL site IDs.
   */
  siteCode: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The planned outage start time in ISO8601 UTC format.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Description of the activity taking place during this outage.
   */
  activity?: string;

  /**
   * The name of the approver.
   */
  approver?: string;

  /**
   * The name of the changer, if applicable.
   */
  changer?: string;

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
   * The duration of the planned outage, expressed as ddd:hh:mm.
   */
  duration?: string;

  /**
   * COLT EOWID.
   */
  eowId?: string;

  /**
   * The mission capability status of the equipment (e.g. FMC, NMC, PMC, UNK, etc.).
   */
  equipStatus?: string;

  /**
   * UUID of the sensor.
   */
  idSensor?: string;

  /**
   * The sensor face(s) to which this COLT maintenance item applies, if applicable.
   */
  impactedFaces?: string;

  /**
   * The date that this item became inactive in ISO8601 UTC format.
   */
  inactiveDate?: string;

  /**
   * The internal COLT line number assigned to this item.
   */
  lineNumber?: string;

  /**
   * The Missile Defense operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  mdOpsCap?: string;

  /**
   * The Missile Warning operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  mwOpsCap?: string;

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
   * The priority of this maintenance item.
   */
  priority?: string;

  /**
   * The minimum time required to recall this activity, expressed as ddd:hh:mm.
   */
  recall?: string;

  /**
   * Release.
   */
  rel?: string;

  /**
   * Remarks concerning this outage.
   */
  remark?: string;

  /**
   * The name of the requestor.
   */
  requestor?: string;

  /**
   * The name of the resource(s) affected by this maintenance item.
   */
  resource?: string;

  /**
   * The revision number for this maintenance item.
   */
  rev?: string;

  /**
   * The Space Surveillance operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  ssOpsCap?: string;
}

export type SensorMaintenanceCountResponse = string;

export type SensorMaintenanceCurrentResponse =
  Array<SensorMaintenanceCurrentResponse.SensorMaintenanceCurrentResponseItem>;

export namespace SensorMaintenanceCurrentResponse {
  /**
   * Maintenance schedule and operational status of Sensor.
   */
  export interface SensorMaintenanceCurrentResponseItem {
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
     * The planned outage end time in ISO8601 UTC format.
     */
    endTime: string;

    /**
     * The site to which this item applies. NOTE - this site code is COLT specific and
     * may not identically correspond to other UDL site IDs.
     */
    siteCode: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The planned outage start time in ISO8601 UTC format.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Description of the activity taking place during this outage.
     */
    activity?: string;

    /**
     * The name of the approver.
     */
    approver?: string;

    /**
     * The name of the changer, if applicable.
     */
    changer?: string;

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
     * The duration of the planned outage, expressed as ddd:hh:mm.
     */
    duration?: string;

    /**
     * COLT EOWID.
     */
    eowId?: string;

    /**
     * The mission capability status of the equipment (e.g. FMC, NMC, PMC, UNK, etc.).
     */
    equipStatus?: string;

    /**
     * UUID of the sensor.
     */
    idSensor?: string;

    /**
     * The sensor face(s) to which this COLT maintenance item applies, if applicable.
     */
    impactedFaces?: string;

    /**
     * The date that this item became inactive in ISO8601 UTC format.
     */
    inactiveDate?: string;

    /**
     * The internal COLT line number assigned to this item.
     */
    lineNumber?: string;

    /**
     * The Missile Defense operational capability of this maintenance item. Typical
     * values are G, Y, R, and - for non-applicable sites.
     */
    mdOpsCap?: string;

    /**
     * The Missile Warning operational capability of this maintenance item. Typical
     * values are G, Y, R, and - for non-applicable sites.
     */
    mwOpsCap?: string;

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
     * The priority of this maintenance item.
     */
    priority?: string;

    /**
     * The minimum time required to recall this activity, expressed as ddd:hh:mm.
     */
    recall?: string;

    /**
     * Release.
     */
    rel?: string;

    /**
     * Remarks concerning this outage.
     */
    remark?: string;

    /**
     * The name of the requestor.
     */
    requestor?: string;

    /**
     * The name of the resource(s) affected by this maintenance item.
     */
    resource?: string;

    /**
     * The revision number for this maintenance item.
     */
    rev?: string;

    /**
     * The Space Surveillance operational capability of this maintenance item. Typical
     * values are G, Y, R, and - for non-applicable sites.
     */
    ssOpsCap?: string;

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

/**
 * Maintenance schedule and operational status of Sensor.
 */
export interface SensorMaintenanceGetResponse {
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
   * The planned outage end time in ISO8601 UTC format.
   */
  endTime: string;

  /**
   * The site to which this item applies. NOTE - this site code is COLT specific and
   * may not identically correspond to other UDL site IDs.
   */
  siteCode: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The planned outage start time in ISO8601 UTC format.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Description of the activity taking place during this outage.
   */
  activity?: string;

  /**
   * The name of the approver.
   */
  approver?: string;

  /**
   * The name of the changer, if applicable.
   */
  changer?: string;

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
   * The duration of the planned outage, expressed as ddd:hh:mm.
   */
  duration?: string;

  /**
   * COLT EOWID.
   */
  eowId?: string;

  /**
   * The mission capability status of the equipment (e.g. FMC, NMC, PMC, UNK, etc.).
   */
  equipStatus?: string;

  /**
   * UUID of the sensor.
   */
  idSensor?: string;

  /**
   * The sensor face(s) to which this COLT maintenance item applies, if applicable.
   */
  impactedFaces?: string;

  /**
   * The date that this item became inactive in ISO8601 UTC format.
   */
  inactiveDate?: string;

  /**
   * The internal COLT line number assigned to this item.
   */
  lineNumber?: string;

  /**
   * The Missile Defense operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  mdOpsCap?: string;

  /**
   * The Missile Warning operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  mwOpsCap?: string;

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
   * The priority of this maintenance item.
   */
  priority?: string;

  /**
   * The minimum time required to recall this activity, expressed as ddd:hh:mm.
   */
  recall?: string;

  /**
   * Release.
   */
  rel?: string;

  /**
   * Remarks concerning this outage.
   */
  remark?: string;

  /**
   * The name of the requestor.
   */
  requestor?: string;

  /**
   * The name of the resource(s) affected by this maintenance item.
   */
  resource?: string;

  /**
   * The revision number for this maintenance item.
   */
  rev?: string;

  /**
   * The Space Surveillance operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  ssOpsCap?: string;

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

export interface SensorMaintenanceQueryhelpResponse {
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

export type SensorMaintenanceTupleResponse =
  Array<SensorMaintenanceTupleResponse.SensorMaintenanceTupleResponseItem>;

export namespace SensorMaintenanceTupleResponse {
  /**
   * Maintenance schedule and operational status of Sensor.
   */
  export interface SensorMaintenanceTupleResponseItem {
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
     * The planned outage end time in ISO8601 UTC format.
     */
    endTime: string;

    /**
     * The site to which this item applies. NOTE - this site code is COLT specific and
     * may not identically correspond to other UDL site IDs.
     */
    siteCode: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The planned outage start time in ISO8601 UTC format.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Description of the activity taking place during this outage.
     */
    activity?: string;

    /**
     * The name of the approver.
     */
    approver?: string;

    /**
     * The name of the changer, if applicable.
     */
    changer?: string;

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
     * The duration of the planned outage, expressed as ddd:hh:mm.
     */
    duration?: string;

    /**
     * COLT EOWID.
     */
    eowId?: string;

    /**
     * The mission capability status of the equipment (e.g. FMC, NMC, PMC, UNK, etc.).
     */
    equipStatus?: string;

    /**
     * UUID of the sensor.
     */
    idSensor?: string;

    /**
     * The sensor face(s) to which this COLT maintenance item applies, if applicable.
     */
    impactedFaces?: string;

    /**
     * The date that this item became inactive in ISO8601 UTC format.
     */
    inactiveDate?: string;

    /**
     * The internal COLT line number assigned to this item.
     */
    lineNumber?: string;

    /**
     * The Missile Defense operational capability of this maintenance item. Typical
     * values are G, Y, R, and - for non-applicable sites.
     */
    mdOpsCap?: string;

    /**
     * The Missile Warning operational capability of this maintenance item. Typical
     * values are G, Y, R, and - for non-applicable sites.
     */
    mwOpsCap?: string;

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
     * The priority of this maintenance item.
     */
    priority?: string;

    /**
     * The minimum time required to recall this activity, expressed as ddd:hh:mm.
     */
    recall?: string;

    /**
     * Release.
     */
    rel?: string;

    /**
     * Remarks concerning this outage.
     */
    remark?: string;

    /**
     * The name of the requestor.
     */
    requestor?: string;

    /**
     * The name of the resource(s) affected by this maintenance item.
     */
    resource?: string;

    /**
     * The revision number for this maintenance item.
     */
    rev?: string;

    /**
     * The Space Surveillance operational capability of this maintenance item. Typical
     * values are G, Y, R, and - for non-applicable sites.
     */
    ssOpsCap?: string;

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

export interface SensorMaintenanceCreateParams {
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
   * The planned outage end time in ISO8601 UTC format.
   */
  endTime: string;

  /**
   * The site to which this item applies. NOTE - this site code is COLT specific and
   * may not identically correspond to other UDL site IDs.
   */
  siteCode: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The planned outage start time in ISO8601 UTC format.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Description of the activity taking place during this outage.
   */
  activity?: string;

  /**
   * The name of the approver.
   */
  approver?: string;

  /**
   * The name of the changer, if applicable.
   */
  changer?: string;

  /**
   * The duration of the planned outage, expressed as ddd:hh:mm.
   */
  duration?: string;

  /**
   * COLT EOWID.
   */
  eowId?: string;

  /**
   * The mission capability status of the equipment (e.g. FMC, NMC, PMC, UNK, etc.).
   */
  equipStatus?: string;

  /**
   * UUID of the sensor.
   */
  idSensor?: string;

  /**
   * The sensor face(s) to which this COLT maintenance item applies, if applicable.
   */
  impactedFaces?: string;

  /**
   * The internal COLT line number assigned to this item.
   */
  lineNumber?: string;

  /**
   * The Missile Defense operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  mdOpsCap?: string;

  /**
   * The Missile Warning operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  mwOpsCap?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The priority of this maintenance item.
   */
  priority?: string;

  /**
   * The minimum time required to recall this activity, expressed as ddd:hh:mm.
   */
  recall?: string;

  /**
   * Release.
   */
  rel?: string;

  /**
   * Remarks concerning this outage.
   */
  remark?: string;

  /**
   * The name of the requestor.
   */
  requestor?: string;

  /**
   * The name of the resource(s) affected by this maintenance item.
   */
  resource?: string;

  /**
   * The revision number for this maintenance item.
   */
  rev?: string;

  /**
   * The Space Surveillance operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  ssOpsCap?: string;
}

export interface SensorMaintenanceUpdateParams {
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
   * The planned outage end time in ISO8601 UTC format.
   */
  endTime: string;

  /**
   * The site to which this item applies. NOTE - this site code is COLT specific and
   * may not identically correspond to other UDL site IDs.
   */
  siteCode: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The planned outage start time in ISO8601 UTC format.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Description of the activity taking place during this outage.
   */
  activity?: string;

  /**
   * The name of the approver.
   */
  approver?: string;

  /**
   * The name of the changer, if applicable.
   */
  changer?: string;

  /**
   * The duration of the planned outage, expressed as ddd:hh:mm.
   */
  duration?: string;

  /**
   * COLT EOWID.
   */
  eowId?: string;

  /**
   * The mission capability status of the equipment (e.g. FMC, NMC, PMC, UNK, etc.).
   */
  equipStatus?: string;

  /**
   * UUID of the sensor.
   */
  idSensor?: string;

  /**
   * The sensor face(s) to which this COLT maintenance item applies, if applicable.
   */
  impactedFaces?: string;

  /**
   * The internal COLT line number assigned to this item.
   */
  lineNumber?: string;

  /**
   * The Missile Defense operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  mdOpsCap?: string;

  /**
   * The Missile Warning operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  mwOpsCap?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The priority of this maintenance item.
   */
  priority?: string;

  /**
   * The minimum time required to recall this activity, expressed as ddd:hh:mm.
   */
  recall?: string;

  /**
   * Release.
   */
  rel?: string;

  /**
   * Remarks concerning this outage.
   */
  remark?: string;

  /**
   * The name of the requestor.
   */
  requestor?: string;

  /**
   * The name of the resource(s) affected by this maintenance item.
   */
  resource?: string;

  /**
   * The revision number for this maintenance item.
   */
  rev?: string;

  /**
   * The Space Surveillance operational capability of this maintenance item. Typical
   * values are G, Y, R, and - for non-applicable sites.
   */
  ssOpsCap?: string;
}

export interface SensorMaintenanceListParams extends OffsetPageParams {
  /**
   * (One or more of fields 'endTime, startTime' are required.) The planned outage
   * end time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  endTime?: string;

  /**
   * (One or more of fields 'endTime, startTime' are required.) The planned outage
   * start time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime?: string;
}

export interface SensorMaintenanceCountParams {
  /**
   * (One or more of fields 'endTime, startTime' are required.) The planned outage
   * end time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  endTime?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'endTime, startTime' are required.) The planned outage
   * start time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime?: string;
}

export interface SensorMaintenanceCreateBulkParams {
  /**
   * Body param:
   */
  body: Array<SensorMaintenanceCreateBulkParams.Body>;

  /**
   * Query param: Origin of the SensorMaintenance data.
   */
  origin?: string;

  /**
   * Query param: Source of the SensorMaintenance data.
   */
  source?: string;
}

export namespace SensorMaintenanceCreateBulkParams {
  /**
   * Maintenance schedule and operational status of Sensor.
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
     * The planned outage end time in ISO8601 UTC format.
     */
    endTime: string;

    /**
     * The site to which this item applies. NOTE - this site code is COLT specific and
     * may not identically correspond to other UDL site IDs.
     */
    siteCode: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The planned outage start time in ISO8601 UTC format.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Description of the activity taking place during this outage.
     */
    activity?: string;

    /**
     * The name of the approver.
     */
    approver?: string;

    /**
     * The name of the changer, if applicable.
     */
    changer?: string;

    /**
     * The duration of the planned outage, expressed as ddd:hh:mm.
     */
    duration?: string;

    /**
     * COLT EOWID.
     */
    eowId?: string;

    /**
     * The mission capability status of the equipment (e.g. FMC, NMC, PMC, UNK, etc.).
     */
    equipStatus?: string;

    /**
     * UUID of the sensor.
     */
    idSensor?: string;

    /**
     * The sensor face(s) to which this COLT maintenance item applies, if applicable.
     */
    impactedFaces?: string;

    /**
     * The internal COLT line number assigned to this item.
     */
    lineNumber?: string;

    /**
     * The Missile Defense operational capability of this maintenance item. Typical
     * values are G, Y, R, and - for non-applicable sites.
     */
    mdOpsCap?: string;

    /**
     * The Missile Warning operational capability of this maintenance item. Typical
     * values are G, Y, R, and - for non-applicable sites.
     */
    mwOpsCap?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The priority of this maintenance item.
     */
    priority?: string;

    /**
     * The minimum time required to recall this activity, expressed as ddd:hh:mm.
     */
    recall?: string;

    /**
     * Release.
     */
    rel?: string;

    /**
     * Remarks concerning this outage.
     */
    remark?: string;

    /**
     * The name of the requestor.
     */
    requestor?: string;

    /**
     * The name of the resource(s) affected by this maintenance item.
     */
    resource?: string;

    /**
     * The revision number for this maintenance item.
     */
    rev?: string;

    /**
     * The Space Surveillance operational capability of this maintenance item. Typical
     * values are G, Y, R, and - for non-applicable sites.
     */
    ssOpsCap?: string;
  }
}

export interface SensorMaintenanceCurrentParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SensorMaintenanceGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SensorMaintenanceTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * (One or more of fields 'endTime, startTime' are required.) The planned outage
   * end time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  endTime?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'endTime, startTime' are required.) The planned outage
   * start time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime?: string;
}

SensorMaintenance.History = History;

export declare namespace SensorMaintenance {
  export {
    type SensorMaintenanceListResponse as SensorMaintenanceListResponse,
    type SensorMaintenanceCountResponse as SensorMaintenanceCountResponse,
    type SensorMaintenanceCurrentResponse as SensorMaintenanceCurrentResponse,
    type SensorMaintenanceGetResponse as SensorMaintenanceGetResponse,
    type SensorMaintenanceQueryhelpResponse as SensorMaintenanceQueryhelpResponse,
    type SensorMaintenanceTupleResponse as SensorMaintenanceTupleResponse,
    type SensorMaintenanceListResponsesOffsetPage as SensorMaintenanceListResponsesOffsetPage,
    type SensorMaintenanceCreateParams as SensorMaintenanceCreateParams,
    type SensorMaintenanceUpdateParams as SensorMaintenanceUpdateParams,
    type SensorMaintenanceListParams as SensorMaintenanceListParams,
    type SensorMaintenanceCountParams as SensorMaintenanceCountParams,
    type SensorMaintenanceCreateBulkParams as SensorMaintenanceCreateBulkParams,
    type SensorMaintenanceCurrentParams as SensorMaintenanceCurrentParams,
    type SensorMaintenanceGetParams as SensorMaintenanceGetParams,
    type SensorMaintenanceTupleParams as SensorMaintenanceTupleParams,
  };

  export {
    History as History,
    type HistoryRetrieveResponse as HistoryRetrieveResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryRetrieveParams as HistoryRetrieveParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
