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

export class Channels extends APIResource {
  /**
   * Service operation to take a single Channel as a POST body and ingest into the
   * database. A Comm payload may have multiple transponders and a transponder may
   * have many channels. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.channels.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idTransponder: 'REF-TRANSPONDER-ID',
   *   name: 'Example name',
   *   source: 'system.source',
   * });
   * ```
   */
  create(body: ChannelCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/channel', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Channel record by its unique ID passed as a
   * path parameter. A Comm payload may have multiple transponders and a transponder
   * may have many channels.
   *
   * @example
   * ```ts
   * const channelFull = await client.channels.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ChannelRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.ChannelFull> {
    return this._client.get(path`/udl/channel/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Channel. A Comm payload may have multiple
   * transponders and a transponder may have many channels. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.channels.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idTransponder: 'REF-TRANSPONDER-ID',
   *   name: 'Example name',
   *   source: 'system.source',
   * });
   * ```
   */
  update(pathID: string, body: ChannelUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/channel/${pathID}`, {
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
   * for await (const channelAbridged of client.channels.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ChannelListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ChannelAbridgedsOffsetPage, ChannelAbridged> {
    return this._client.getAPIList('/udl/channel', OffsetPage<ChannelAbridged>, { query, ...options });
  }

  /**
   * Service operation to delete a Channel object specified by the passed ID path
   * parameter. A Comm payload may have multiple transponders and a transponder may
   * have many channels. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.channels.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/channel/${id}`, {
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
   * const response = await client.channels.count();
   * ```
   */
  count(query: ChannelCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/channel/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.channels.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<ChannelQueryhelpResponse> {
    return this._client.get('/udl/channel/queryhelp', options);
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
   * const channelFulls = await client.channels.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: ChannelTupleParams, options?: RequestOptions): APIPromise<ChannelTupleResponse> {
    return this._client.get('/udl/channel/tuple', { query, ...options });
  }
}

export type ChannelAbridgedsOffsetPage = OffsetPage<ChannelAbridged>;

/**
 * Channel information on a particular transponder.
 */
export interface ChannelAbridged {
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
   * ID of the parent transponder object for this Channel.
   */
  idTransponder: string;

  /**
   * Channel name.
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
   * Channel aPid.
   */
  apid?: string;

  /**
   * The antenna beam ID of the particular beam for this channel. beamName is not
   * unique across payloads.
   */
  beamName?: string;

  /**
   * Channel compression.
   */
  compression?: string;

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
   * Channel encryption.
   */
  encryption?: string;

  /**
   * Identifier of the particular beam for this channel.
   */
  idBeam?: string;

  /**
   * ID of the RF Band object for this channel.
   */
  idRFBand?: string;

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
   * Owner.
   */
  owner?: string;

  /**
   * Pkg.
   */
  pkg?: string;

  /**
   * Res.
   */
  res?: string;

  /**
   * SID.
   */
  sid?: string;

  /**
   * Channel type.
   */
  type?: string;

  /**
   * Channel vPid.
   */
  vpid?: string;
}

export type ChannelCountResponse = string;

export interface ChannelQueryhelpResponse {
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

export type ChannelTupleResponse = Array<Shared.ChannelFull>;

export interface ChannelCreateParams {
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
   * ID of the parent transponder object for this Channel.
   */
  idTransponder: string;

  /**
   * Channel name.
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
   * Channel aPid.
   */
  apid?: string;

  /**
   * The antenna beam ID of the particular beam for this channel. beamName is not
   * unique across payloads.
   */
  beamName?: string;

  /**
   * Channel compression.
   */
  compression?: string;

  /**
   * Channel encryption.
   */
  encryption?: string;

  /**
   * Identifier of the particular beam for this channel.
   */
  idBeam?: string;

  /**
   * ID of the RF Band object for this channel.
   */
  idRFBand?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Owner.
   */
  owner?: string;

  /**
   * Pkg.
   */
  pkg?: string;

  /**
   * Res.
   */
  res?: string;

  /**
   * SID.
   */
  sid?: string;

  /**
   * Channel type.
   */
  type?: string;

  /**
   * Channel vPid.
   */
  vpid?: string;
}

export interface ChannelRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface ChannelUpdateParams {
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
   * ID of the parent transponder object for this Channel.
   */
  idTransponder: string;

  /**
   * Channel name.
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
   * Channel aPid.
   */
  apid?: string;

  /**
   * The antenna beam ID of the particular beam for this channel. beamName is not
   * unique across payloads.
   */
  beamName?: string;

  /**
   * Channel compression.
   */
  compression?: string;

  /**
   * Channel encryption.
   */
  encryption?: string;

  /**
   * Identifier of the particular beam for this channel.
   */
  idBeam?: string;

  /**
   * ID of the RF Band object for this channel.
   */
  idRFBand?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Owner.
   */
  owner?: string;

  /**
   * Pkg.
   */
  pkg?: string;

  /**
   * Res.
   */
  res?: string;

  /**
   * SID.
   */
  sid?: string;

  /**
   * Channel type.
   */
  type?: string;

  /**
   * Channel vPid.
   */
  vpid?: string;
}

export interface ChannelListParams extends OffsetPageParams {}

export interface ChannelCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface ChannelTupleParams {
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

export declare namespace Channels {
  export {
    type ChannelAbridged as ChannelAbridged,
    type ChannelCountResponse as ChannelCountResponse,
    type ChannelQueryhelpResponse as ChannelQueryhelpResponse,
    type ChannelTupleResponse as ChannelTupleResponse,
    type ChannelAbridgedsOffsetPage as ChannelAbridgedsOffsetPage,
    type ChannelCreateParams as ChannelCreateParams,
    type ChannelRetrieveParams as ChannelRetrieveParams,
    type ChannelUpdateParams as ChannelUpdateParams,
    type ChannelListParams as ChannelListParams,
    type ChannelCountParams as ChannelCountParams,
    type ChannelTupleParams as ChannelTupleParams,
  };
}
