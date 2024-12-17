// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Channels extends APIResource {
  /**
   * Service operation to take a single Channel as a POST body and ingest into the
   * database. A Comm payload may have multiple transponders and a transponder may
   * have many channels. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: ChannelCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/channel', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single Channel record by its unique ID passed as a
   * path parameter. A Comm payload may have multiple transponders and a transponder
   * may have many channels.
   */
  retrieve(params: ChannelRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<ChannelFull> {
    const { path_id, body_id } = params;
    return this._client.get(`/udl/channel/${path_id}`, options);
  }

  /**
   * Service operation to update a single Channel. A Comm payload may have multiple
   * transponders and a transponder may have many channels. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(params: ChannelUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id, body_id, ...body } = params;
    return this._client.put(`/udl/channel/${path_id}`, {
      body: { id: body_id, id: body_id, ...body },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ChannelListResponse> {
    return this._client.get('/udl/channel', options);
  }

  /**
   * Service operation to delete a Channel object specified by the passed ID path
   * parameter. A Comm payload may have multiple transponders and a transponder may
   * have many channels. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  delete(params: ChannelDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id } = params;
    return this._client.delete(`/udl/channel/${path_id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/channel/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/channel/queryhelp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
  tuple(params: ChannelTupleParams, options?: Core.RequestOptions): Core.APIPromise<ChannelTupleResponse> {
    const { columns } = params;
    return this._client.get('/udl/channel/tuple', options);
  }
}

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
  dataMode: string;

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

/**
 * Channel information on a particular transponder.
 */
export interface ChannelFull {
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
  dataMode: string;

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
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;

  /**
   * Channel vPid.
   */
  vpid?: string;
}

export type ChannelListResponse = Array<ChannelAbridged>;

export type ChannelCountResponse = string;

export type ChannelTupleResponse = Array<ChannelFull>;

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
  dataMode: string;

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

export interface ChannelRetrieveParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the Channel to find.
   */
  body_id: string;
}

export interface ChannelUpdateParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the Channel to update.
   */
  body_id: string;

  /**
   * Body param: Classification marking of the data in IC/CAPCO Portion-marked
   * format.
   */
  classificationMarking: string;

  /**
   * Body param: Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST
   * data:
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
  dataMode: string;

  /**
   * Body param: ID of the parent transponder object for this Channel.
   */
  idTransponder: string;

  /**
   * Body param: Channel name.
   */
  name: string;

  /**
   * Body param: Source of the data.
   */
  source: string;

  /**
   * Body param: Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Body param: Channel aPid.
   */
  apid?: string;

  /**
   * Body param: The antenna beam ID of the particular beam for this channel.
   * beamName is not unique across payloads.
   */
  beamName?: string;

  /**
   * Body param: Channel compression.
   */
  compression?: string;

  /**
   * Body param: Time the row was created in the database, auto-populated by the
   * system.
   */
  createdAt?: string;

  /**
   * Body param: Application user who created the row in the database, auto-populated
   * by the system.
   */
  createdBy?: string;

  /**
   * Body param: Channel encryption.
   */
  encryption?: string;

  /**
   * Body param: Identifier of the particular beam for this channel.
   */
  idBeam?: string;

  /**
   * Body param: ID of the RF Band object for this channel.
   */
  idRFBand?: string;

  /**
   * Body param: Originating system or organization which produced the data, if
   * different from the source. The origin may be different than the source if the
   * source was a mediating system which forwarded the data on behalf of the origin
   * system. If null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Body param: The originating source network on which this record was created,
   * auto-populated by the system.
   */
  origNetwork?: string;

  /**
   * Body param: Owner.
   */
  owner?: string;

  /**
   * Body param: Pkg.
   */
  pkg?: string;

  /**
   * Body param: Res.
   */
  res?: string;

  /**
   * Body param: SID.
   */
  sid?: string;

  /**
   * Body param: Channel type.
   */
  type?: string;

  /**
   * Body param: Channel vPid.
   */
  vpid?: string;
}

export interface ChannelDeleteParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the Channel to delete.
   */
  body_id: string;
}

export interface ChannelTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the �queryhelp� operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Channels {
  export {
    type ChannelAbridged as ChannelAbridged,
    type ChannelFull as ChannelFull,
    type ChannelListResponse as ChannelListResponse,
    type ChannelCountResponse as ChannelCountResponse,
    type ChannelTupleResponse as ChannelTupleResponse,
    type ChannelCreateParams as ChannelCreateParams,
    type ChannelRetrieveParams as ChannelRetrieveParams,
    type ChannelUpdateParams as ChannelUpdateParams,
    type ChannelDeleteParams as ChannelDeleteParams,
    type ChannelTupleParams as ChannelTupleParams,
  };
}
