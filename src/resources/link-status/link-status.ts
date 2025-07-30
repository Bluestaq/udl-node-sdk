// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as DatalinkAPI from 'bluestaq@unified-data-library/resources/link-status/datalink';
import {
  Datalink,
  DatalinkCountParams,
  DatalinkCountResponse,
  DatalinkCreateParams,
  DatalinkIngest,
  DatalinkListParams,
  DatalinkListResponse,
  DatalinkListResponsesOffsetPage,
  DatalinkQueryhelpResponse,
  DatalinkTupleParams,
  DatalinkTupleResponse,
  DatalinkUnvalidatedPublishParams,
} from 'bluestaq@unified-data-library/resources/link-status/datalink';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/link-status/history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from 'bluestaq@unified-data-library/resources/link-status/history';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class LinkStatus extends APIResource {
  datalink: DatalinkAPI.Datalink = new DatalinkAPI.Datalink(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single LinkStatus as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.linkStatus.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   endPoint1Lat: 45.23,
   *   endPoint1Lon: 80.23,
   *   endPoint1Name: 'Example endpoint',
   *   endPoint2Lat: 45.23,
   *   endPoint2Lon: 80.23,
   *   endPoint2Name: 'Example description',
   *   linkName: 'Example description',
   *   linkStartTime: '2021-01-01T01:01:01.123456Z',
   *   linkStopTime: '2021-01-01T01:01:01.123456Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: LinkStatusCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/linkstatus', {
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
   * for await (const linkStatusListResponse of client.linkStatus.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LinkStatusListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LinkStatusListResponsesOffsetPage, LinkStatusListResponse> {
    return this._client.getAPIList('/udl/linkstatus', OffsetPage<LinkStatusListResponse>, {
      query,
      ...options,
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
   * const response = await client.linkStatus.count();
   * ```
   */
  count(query: LinkStatusCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/linkstatus/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single LinkStatus record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const linkStatus = await client.linkStatus.get('id');
   * ```
   */
  get(
    id: string,
    query: LinkStatusGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinkStatusGetResponse> {
    return this._client.get(path`/udl/linkstatus/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.linkStatus.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<LinkStatusQueryhelpResponse> {
    return this._client.get('/udl/linkstatus/queryhelp', options);
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
   * const response = await client.linkStatus.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: LinkStatusTupleParams, options?: RequestOptions): APIPromise<LinkStatusTupleResponse> {
    return this._client.get('/udl/linkstatus/tuple', { query, ...options });
  }
}

export type LinkStatusListResponsesOffsetPage = OffsetPage<LinkStatusListResponse>;

/**
 * Captures link status.
 */
export interface LinkStatusListResponse {
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
   * Latitude of link endpoint-1, WGS-84 in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  endPoint1Lat: number;

  /**
   * Longitude of link endpoint-1, WGS-84 longitude in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  endPoint1Lon: number;

  /**
   * The name or description of link endpoint-1, corresponding to beam-1.
   */
  endPoint1Name: string;

  /**
   * Latitude of link endpoint-2, WGS-84 in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  endPoint2Lat: number;

  /**
   * Longitude of link endpoint-2, WGS-84 longitude in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  endPoint2Lon: number;

  /**
   * The name or description of link endpoint-2, corresponding to beam-2.
   */
  endPoint2Name: string;

  /**
   * The name or description of the link.
   */
  linkName: string;

  /**
   * The link establishment time, or the time that the link becomes available for
   * use, in ISO8601 UTC format.
   */
  linkStartTime: string;

  /**
   * The link termination time, or the time that the link becomes unavailable for
   * use, in ISO8601 UTC format.
   */
  linkStopTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The RF band employed by the link (e.g. MIL-KA, COM-KA, X-BAND, C-BAND, etc.).
   */
  band?: string;

  /**
   * The constellation name if the link is established over a LEO/MEO constellation.
   * In this case, idOnOrbit1 and idOnOrbit2 will be null.
   */
  constellation?: string;

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
   * The endpoint-1 to endpoint-2 data rate, in kbps.
   */
  dataRate1To2?: number;

  /**
   * The endpoint-2 to endpoint-1 data rate, in kbps.
   */
  dataRate2To1?: number;

  /**
   * The ID of beam-1 forming the link. In the case of two sat link, beam-1
   * corresponds to Sat-1.
   */
  idBeam1?: string;

  /**
   * The ID of beam-2 forming the link. In the case of two sat link, beam-2
   * corresponds to Sat-2.
   */
  idBeam2?: string;

  /**
   * Unique ID of the on-orbit satellite (Sat-1) forming the link. A null value for
   * idOnOrbit1 indicates that the link is formed over a LEO/MEO constellation.
   */
  idOnOrbit1?: string;

  /**
   * Unique ID of the on-orbit satellite (Sat-2) forming the link. A null value for
   * idOnOrbit2 indicates either a link employing only Sat-1 or a link formed over a
   * LEO/MEO constellation.
   */
  idOnOrbit2?: string;

  /**
   * The state of the link (e.g. OK, DEGRADED-WEATHER, DEGRADED-EMI, etc.).
   */
  linkState?: string;

  /**
   * The type of the link.
   */
  linkType?: string;

  /**
   * The OPSCAP mission status of the system(s) forming the link.
   */
  opsCap?: string;

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
   * Satellite/catalog number of the target on-orbit primary object.
   */
  satNo1?: number;

  /**
   * Satellite/catalog number of the target on-orbit secondary object.
   */
  satNo2?: number;

  /**
   * The SYSCAP mission status of the system(s) forming the link.
   */
  sysCap?: string;
}

export type LinkStatusCountResponse = string;

/**
 * Captures link status.
 */
export interface LinkStatusGetResponse {
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
   * Latitude of link endpoint-1, WGS-84 in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  endPoint1Lat: number;

  /**
   * Longitude of link endpoint-1, WGS-84 longitude in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  endPoint1Lon: number;

  /**
   * The name or description of link endpoint-1, corresponding to beam-1.
   */
  endPoint1Name: string;

  /**
   * Latitude of link endpoint-2, WGS-84 in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  endPoint2Lat: number;

  /**
   * Longitude of link endpoint-2, WGS-84 longitude in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  endPoint2Lon: number;

  /**
   * The name or description of link endpoint-2, corresponding to beam-2.
   */
  endPoint2Name: string;

  /**
   * The name or description of the link.
   */
  linkName: string;

  /**
   * The link establishment time, or the time that the link becomes available for
   * use, in ISO8601 UTC format.
   */
  linkStartTime: string;

  /**
   * The link termination time, or the time that the link becomes unavailable for
   * use, in ISO8601 UTC format.
   */
  linkStopTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The RF band employed by the link (e.g. MIL-KA, COM-KA, X-BAND, C-BAND, etc.).
   */
  band?: string;

  /**
   * The constellation name if the link is established over a LEO/MEO constellation.
   * In this case, idOnOrbit1 and idOnOrbit2 will be null.
   */
  constellation?: string;

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
   * The endpoint-1 to endpoint-2 data rate, in kbps.
   */
  dataRate1To2?: number;

  /**
   * The endpoint-2 to endpoint-1 data rate, in kbps.
   */
  dataRate2To1?: number;

  /**
   * The ID of beam-1 forming the link. In the case of two sat link, beam-1
   * corresponds to Sat-1.
   */
  idBeam1?: string;

  /**
   * The ID of beam-2 forming the link. In the case of two sat link, beam-2
   * corresponds to Sat-2.
   */
  idBeam2?: string;

  /**
   * Unique ID of the on-orbit satellite (Sat-1) forming the link. A null value for
   * idOnOrbit1 indicates that the link is formed over a LEO/MEO constellation.
   */
  idOnOrbit1?: string;

  /**
   * Unique ID of the on-orbit satellite (Sat-2) forming the link. A null value for
   * idOnOrbit2 indicates either a link employing only Sat-1 or a link formed over a
   * LEO/MEO constellation.
   */
  idOnOrbit2?: string;

  /**
   * The state of the link (e.g. OK, DEGRADED-WEATHER, DEGRADED-EMI, etc.).
   */
  linkState?: string;

  /**
   * The type of the link.
   */
  linkType?: string;

  /**
   * The OPSCAP mission status of the system(s) forming the link.
   */
  opsCap?: string;

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
   * Satellite/catalog number of the target on-orbit primary object.
   */
  satNo1?: number;

  /**
   * Satellite/catalog number of the target on-orbit secondary object.
   */
  satNo2?: number;

  /**
   * The SYSCAP mission status of the system(s) forming the link.
   */
  sysCap?: string;
}

export interface LinkStatusQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<LinkStatusQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace LinkStatusQueryhelpResponse {
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

export type LinkStatusTupleResponse = Array<LinkStatusTupleResponse.LinkStatusTupleResponseItem>;

export namespace LinkStatusTupleResponse {
  /**
   * Captures link status.
   */
  export interface LinkStatusTupleResponseItem {
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
     * Latitude of link endpoint-1, WGS-84 in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    endPoint1Lat: number;

    /**
     * Longitude of link endpoint-1, WGS-84 longitude in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    endPoint1Lon: number;

    /**
     * The name or description of link endpoint-1, corresponding to beam-1.
     */
    endPoint1Name: string;

    /**
     * Latitude of link endpoint-2, WGS-84 in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    endPoint2Lat: number;

    /**
     * Longitude of link endpoint-2, WGS-84 longitude in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    endPoint2Lon: number;

    /**
     * The name or description of link endpoint-2, corresponding to beam-2.
     */
    endPoint2Name: string;

    /**
     * The name or description of the link.
     */
    linkName: string;

    /**
     * The link establishment time, or the time that the link becomes available for
     * use, in ISO8601 UTC format.
     */
    linkStartTime: string;

    /**
     * The link termination time, or the time that the link becomes unavailable for
     * use, in ISO8601 UTC format.
     */
    linkStopTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The RF band employed by the link (e.g. MIL-KA, COM-KA, X-BAND, C-BAND, etc.).
     */
    band?: string;

    /**
     * The constellation name if the link is established over a LEO/MEO constellation.
     * In this case, idOnOrbit1 and idOnOrbit2 will be null.
     */
    constellation?: string;

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
     * The endpoint-1 to endpoint-2 data rate, in kbps.
     */
    dataRate1To2?: number;

    /**
     * The endpoint-2 to endpoint-1 data rate, in kbps.
     */
    dataRate2To1?: number;

    /**
     * The ID of beam-1 forming the link. In the case of two sat link, beam-1
     * corresponds to Sat-1.
     */
    idBeam1?: string;

    /**
     * The ID of beam-2 forming the link. In the case of two sat link, beam-2
     * corresponds to Sat-2.
     */
    idBeam2?: string;

    /**
     * Unique ID of the on-orbit satellite (Sat-1) forming the link. A null value for
     * idOnOrbit1 indicates that the link is formed over a LEO/MEO constellation.
     */
    idOnOrbit1?: string;

    /**
     * Unique ID of the on-orbit satellite (Sat-2) forming the link. A null value for
     * idOnOrbit2 indicates either a link employing only Sat-1 or a link formed over a
     * LEO/MEO constellation.
     */
    idOnOrbit2?: string;

    /**
     * The state of the link (e.g. OK, DEGRADED-WEATHER, DEGRADED-EMI, etc.).
     */
    linkState?: string;

    /**
     * The type of the link.
     */
    linkType?: string;

    /**
     * The OPSCAP mission status of the system(s) forming the link.
     */
    opsCap?: string;

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
     * Satellite/catalog number of the target on-orbit primary object.
     */
    satNo1?: number;

    /**
     * Satellite/catalog number of the target on-orbit secondary object.
     */
    satNo2?: number;

    /**
     * The SYSCAP mission status of the system(s) forming the link.
     */
    sysCap?: string;
  }
}

export interface LinkStatusCreateParams {
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
   * Latitude of link endpoint-1, WGS-84 in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  endPoint1Lat: number;

  /**
   * Longitude of link endpoint-1, WGS-84 longitude in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  endPoint1Lon: number;

  /**
   * The name or description of link endpoint-1, corresponding to beam-1.
   */
  endPoint1Name: string;

  /**
   * Latitude of link endpoint-2, WGS-84 in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  endPoint2Lat: number;

  /**
   * Longitude of link endpoint-2, WGS-84 longitude in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  endPoint2Lon: number;

  /**
   * The name or description of link endpoint-2, corresponding to beam-2.
   */
  endPoint2Name: string;

  /**
   * The name or description of the link.
   */
  linkName: string;

  /**
   * The link establishment time, or the time that the link becomes available for
   * use, in ISO8601 UTC format.
   */
  linkStartTime: string;

  /**
   * The link termination time, or the time that the link becomes unavailable for
   * use, in ISO8601 UTC format.
   */
  linkStopTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The RF band employed by the link (e.g. MIL-KA, COM-KA, X-BAND, C-BAND, etc.).
   */
  band?: string;

  /**
   * The constellation name if the link is established over a LEO/MEO constellation.
   * In this case, idOnOrbit1 and idOnOrbit2 will be null.
   */
  constellation?: string;

  /**
   * The endpoint-1 to endpoint-2 data rate, in kbps.
   */
  dataRate1To2?: number;

  /**
   * The endpoint-2 to endpoint-1 data rate, in kbps.
   */
  dataRate2To1?: number;

  /**
   * The ID of beam-1 forming the link. In the case of two sat link, beam-1
   * corresponds to Sat-1.
   */
  idBeam1?: string;

  /**
   * The ID of beam-2 forming the link. In the case of two sat link, beam-2
   * corresponds to Sat-2.
   */
  idBeam2?: string;

  /**
   * The state of the link (e.g. OK, DEGRADED-WEATHER, DEGRADED-EMI, etc.).
   */
  linkState?: string;

  /**
   * The type of the link.
   */
  linkType?: string;

  /**
   * The OPSCAP mission status of the system(s) forming the link.
   */
  opsCap?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Satellite/catalog number of the target on-orbit primary object.
   */
  satNo1?: number;

  /**
   * Satellite/catalog number of the target on-orbit secondary object.
   */
  satNo2?: number;

  /**
   * The SYSCAP mission status of the system(s) forming the link.
   */
  sysCap?: string;
}

export interface LinkStatusListParams extends OffsetPageParams {
  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt?: string;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link establishment time, or the time that the link becomes available for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStartTime?: string;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link termination time, or the time that the link becomes unavailable for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStopTime?: string;
}

export interface LinkStatusCountParams {
  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt?: string;

  firstResult?: number;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link establishment time, or the time that the link becomes available for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStartTime?: string;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link termination time, or the time that the link becomes unavailable for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStopTime?: string;

  maxResults?: number;
}

export interface LinkStatusGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LinkStatusTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt?: string;

  firstResult?: number;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link establishment time, or the time that the link becomes available for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStartTime?: string;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link termination time, or the time that the link becomes unavailable for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStopTime?: string;

  maxResults?: number;
}

LinkStatus.Datalink = Datalink;
LinkStatus.History = History;

export declare namespace LinkStatus {
  export {
    type LinkStatusListResponse as LinkStatusListResponse,
    type LinkStatusCountResponse as LinkStatusCountResponse,
    type LinkStatusGetResponse as LinkStatusGetResponse,
    type LinkStatusQueryhelpResponse as LinkStatusQueryhelpResponse,
    type LinkStatusTupleResponse as LinkStatusTupleResponse,
    type LinkStatusListResponsesOffsetPage as LinkStatusListResponsesOffsetPage,
    type LinkStatusCreateParams as LinkStatusCreateParams,
    type LinkStatusListParams as LinkStatusListParams,
    type LinkStatusCountParams as LinkStatusCountParams,
    type LinkStatusGetParams as LinkStatusGetParams,
    type LinkStatusTupleParams as LinkStatusTupleParams,
  };

  export {
    Datalink as Datalink,
    type DatalinkIngest as DatalinkIngest,
    type DatalinkListResponse as DatalinkListResponse,
    type DatalinkCountResponse as DatalinkCountResponse,
    type DatalinkQueryhelpResponse as DatalinkQueryhelpResponse,
    type DatalinkTupleResponse as DatalinkTupleResponse,
    type DatalinkListResponsesOffsetPage as DatalinkListResponsesOffsetPage,
    type DatalinkCreateParams as DatalinkCreateParams,
    type DatalinkListParams as DatalinkListParams,
    type DatalinkCountParams as DatalinkCountParams,
    type DatalinkTupleParams as DatalinkTupleParams,
    type DatalinkUnvalidatedPublishParams as DatalinkUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
