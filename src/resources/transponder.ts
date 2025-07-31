// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class Transponder extends APIResource {
  /**
   * Service operation to take a single Transponder as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance. A Comm payload may have multiple
   * transponders and a transponder may have many channels.
   *
   * @example
   * ```ts
   * await client.transponder.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idComm: 'REF-COMM-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: TransponderCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/transponder', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single Transponder. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance. A
   * Comm payload may have multiple transponders and a transponder may have many
   * channels.
   *
   * @example
   * ```ts
   * await client.transponder.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idComm: 'REF-COMM-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: TransponderUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/transponder/${pathID}`, {
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
   * for await (const transponderListResponse of client.transponder.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TransponderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TransponderListResponsesOffsetPage, TransponderListResponse> {
    return this._client.getAPIList('/udl/transponder', OffsetPage<TransponderListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a Transponder object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance. A Comm payload may have multiple
   * transponders and a transponder may have many channels.
   *
   * @example
   * ```ts
   * await client.transponder.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/transponder/${id}`, {
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
   * const response = await client.transponder.count();
   * ```
   */
  count(query: TransponderCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/transponder/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Transponder record by its unique ID passed as
   * a path parameter. A Comm payload may have multiple transponders and a
   * transponder may have many channels.
   *
   * @example
   * ```ts
   * const transponder = await client.transponder.get('id');
   * ```
   */
  get(
    id: string,
    query: TransponderGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransponderGetResponse> {
    return this._client.get(path`/udl/transponder/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.transponder.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<TransponderQueryhelpResponse> {
    return this._client.get('/udl/transponder/queryhelp', options);
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
   * const response = await client.transponder.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: TransponderTupleParams, options?: RequestOptions): APIPromise<TransponderTupleResponse> {
    return this._client.get('/udl/transponder/tuple', { query, ...options });
  }
}

export type TransponderListResponsesOffsetPage = OffsetPage<TransponderListResponse>;

/**
 * A transponder receives and transmits radio signals at a prescribed frequency
 * range. A communications satellite's transponder is the series of interconnected
 * units that form a communications channel between the receiving and the
 * transmitting antennas. It is mainly used in satellite communication to transfer
 * the received signals.
 */
export interface TransponderListResponse {
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
   * ID of the parent Comm object for this transponder.
   */
  idComm: string;

  /**
   * Source of the data.
   */
  source: string;

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
   * Forward error correction, e.g. 0=Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 = 5/6, 5 =
   * 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
   */
  fec?: number;

  /**
   * Format.
   */
  format?: string;

  /**
   * Transponder modulation, e.g. Auto, QPSK, 8PSK.
   */
  modulation?: string;

  /**
   * Optional name of the transponder.
   */
  name?: string;

  /**
   * Optional external network id as provided data source.
   */
  nid?: string;

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
   * Symbol rate is the number of symbol changes, waveform changes, or signaling
   * events, across the transmission medium per time unit using a digitally modulated
   * signal or a line code. Also measured in Hz.
   */
  symbolRate?: number;

  /**
   * Transponder system, e.g. DVB-S, DVB-S2.
   */
  system?: string;

  /**
   * Optional external transponder id as provided data source.
   */
  tid?: string;

  /**
   * Transponder Translation Factor. This is the frequency difference between the
   * uplink received by a satellite, and the downlink transmitted back. It varies
   * satellite to satellite dependent on the mission.
   */
  ttf?: number;
}

export type TransponderCountResponse = string;

/**
 * A transponder receives and transmits radio signals at a prescribed frequency
 * range. A communications satellite's transponder is the series of interconnected
 * units that form a communications channel between the receiving and the
 * transmitting antennas. It is mainly used in satellite communication to transfer
 * the received signals.
 */
export interface TransponderGetResponse {
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
   * ID of the parent Comm object for this transponder.
   */
  idComm: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Collection of Channels for this Transponder.
   */
  channels?: Array<Shared.ChannelFull>;

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
   * Forward error correction, e.g. 0=Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 = 5/6, 5 =
   * 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
   */
  fec?: number;

  /**
   * Format.
   */
  format?: string;

  /**
   * Transponder modulation, e.g. Auto, QPSK, 8PSK.
   */
  modulation?: string;

  /**
   * Optional name of the transponder.
   */
  name?: string;

  /**
   * Optional external network id as provided data source.
   */
  nid?: string;

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
   * Symbol rate is the number of symbol changes, waveform changes, or signaling
   * events, across the transmission medium per time unit using a digitally modulated
   * signal or a line code. Also measured in Hz.
   */
  symbolRate?: number;

  /**
   * Transponder system, e.g. DVB-S, DVB-S2.
   */
  system?: string;

  /**
   * Optional external transponder id as provided data source.
   */
  tid?: string;

  /**
   * Transponder Translation Factor. This is the frequency difference between the
   * uplink received by a satellite, and the downlink transmitted back. It varies
   * satellite to satellite dependent on the mission.
   */
  ttf?: number;

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

export interface TransponderQueryhelpResponse {
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

export type TransponderTupleResponse = Array<TransponderTupleResponse.TransponderTupleResponseItem>;

export namespace TransponderTupleResponse {
  /**
   * A transponder receives and transmits radio signals at a prescribed frequency
   * range. A communications satellite's transponder is the series of interconnected
   * units that form a communications channel between the receiving and the
   * transmitting antennas. It is mainly used in satellite communication to transfer
   * the received signals.
   */
  export interface TransponderTupleResponseItem {
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
     * ID of the parent Comm object for this transponder.
     */
    idComm: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Collection of Channels for this Transponder.
     */
    channels?: Array<Shared.ChannelFull>;

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
     * Forward error correction, e.g. 0=Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 = 5/6, 5 =
     * 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    fec?: number;

    /**
     * Format.
     */
    format?: string;

    /**
     * Transponder modulation, e.g. Auto, QPSK, 8PSK.
     */
    modulation?: string;

    /**
     * Optional name of the transponder.
     */
    name?: string;

    /**
     * Optional external network id as provided data source.
     */
    nid?: string;

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
     * Symbol rate is the number of symbol changes, waveform changes, or signaling
     * events, across the transmission medium per time unit using a digitally modulated
     * signal or a line code. Also measured in Hz.
     */
    symbolRate?: number;

    /**
     * Transponder system, e.g. DVB-S, DVB-S2.
     */
    system?: string;

    /**
     * Optional external transponder id as provided data source.
     */
    tid?: string;

    /**
     * Transponder Translation Factor. This is the frequency difference between the
     * uplink received by a satellite, and the downlink transmitted back. It varies
     * satellite to satellite dependent on the mission.
     */
    ttf?: number;

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

export interface TransponderCreateParams {
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
   * ID of the parent Comm object for this transponder.
   */
  idComm: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Forward error correction, e.g. 0=Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 = 5/6, 5 =
   * 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
   */
  fec?: number;

  /**
   * Format.
   */
  format?: string;

  /**
   * Transponder modulation, e.g. Auto, QPSK, 8PSK.
   */
  modulation?: string;

  /**
   * Optional name of the transponder.
   */
  name?: string;

  /**
   * Optional external network id as provided data source.
   */
  nid?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Symbol rate is the number of symbol changes, waveform changes, or signaling
   * events, across the transmission medium per time unit using a digitally modulated
   * signal or a line code. Also measured in Hz.
   */
  symbolRate?: number;

  /**
   * Transponder system, e.g. DVB-S, DVB-S2.
   */
  system?: string;

  /**
   * Optional external transponder id as provided data source.
   */
  tid?: string;

  /**
   * Transponder Translation Factor. This is the frequency difference between the
   * uplink received by a satellite, and the downlink transmitted back. It varies
   * satellite to satellite dependent on the mission.
   */
  ttf?: number;
}

export interface TransponderUpdateParams {
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
   * ID of the parent Comm object for this transponder.
   */
  idComm: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Forward error correction, e.g. 0=Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 = 5/6, 5 =
   * 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
   */
  fec?: number;

  /**
   * Format.
   */
  format?: string;

  /**
   * Transponder modulation, e.g. Auto, QPSK, 8PSK.
   */
  modulation?: string;

  /**
   * Optional name of the transponder.
   */
  name?: string;

  /**
   * Optional external network id as provided data source.
   */
  nid?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Symbol rate is the number of symbol changes, waveform changes, or signaling
   * events, across the transmission medium per time unit using a digitally modulated
   * signal or a line code. Also measured in Hz.
   */
  symbolRate?: number;

  /**
   * Transponder system, e.g. DVB-S, DVB-S2.
   */
  system?: string;

  /**
   * Optional external transponder id as provided data source.
   */
  tid?: string;

  /**
   * Transponder Translation Factor. This is the frequency difference between the
   * uplink received by a satellite, and the downlink transmitted back. It varies
   * satellite to satellite dependent on the mission.
   */
  ttf?: number;
}

export interface TransponderListParams extends OffsetPageParams {}

export interface TransponderCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface TransponderGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface TransponderTupleParams {
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

export declare namespace Transponder {
  export {
    type TransponderListResponse as TransponderListResponse,
    type TransponderCountResponse as TransponderCountResponse,
    type TransponderGetResponse as TransponderGetResponse,
    type TransponderQueryhelpResponse as TransponderQueryhelpResponse,
    type TransponderTupleResponse as TransponderTupleResponse,
    type TransponderListResponsesOffsetPage as TransponderListResponsesOffsetPage,
    type TransponderCreateParams as TransponderCreateParams,
    type TransponderUpdateParams as TransponderUpdateParams,
    type TransponderListParams as TransponderListParams,
    type TransponderCountParams as TransponderCountParams,
    type TransponderGetParams as TransponderGetParams,
    type TransponderTupleParams as TransponderTupleParams,
  };
}
