// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryQueryParams,
  HistoryQueryResponse,
} from './history';
import * as MissionassignmentHistoryAPI from '../udl/missionassignment/history';

export class Missionassignment extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single MissionAssignment as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: MissionassignmentCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/missionassignment', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update a single MissionAssignment. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(
    pathId: string,
    body: MissionassignmentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/udl/missionassignment/${pathId}`, {
      body,
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
  list(
    query: MissionassignmentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MissionassignmentListResponse> {
    return this._client.get('/udl/missionassignment', { query, ...options });
  }

  /**
   * Service operation to delete a MissionAssignment object specified by the passed
   * ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/missionassignment/${id}`, {
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
  count(query: MissionassignmentCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/missionassignment/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple MissionAssignments as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  createBulk(body: MissionassignmentCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/missionassignment/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single MissionAssignment record by its unique ID
   * passed as a path parameter.
   */
  get(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MissionassignmentHistoryAPI.MissionAssignmentFull> {
    return this._client.get(`/udl/missionassignment/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/missionassignment/queryhelp', {
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
  tuple(
    query: MissionassignmentTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MissionassignmentTupleResponse> {
    return this._client.get('/udl/missionassignment/tuple', { query, ...options });
  }
}

export type MissionassignmentListResponse =
  Array<MissionassignmentListResponse.MissionassignmentListResponseItem>;

export namespace MissionassignmentListResponse {
  /**
   * Platform mission assignment data.
   */
  export interface MissionassignmentListResponseItem {
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
     * The mission assignment discrete value.
     */
    mad: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The timestamp of the mission data, in ISO 8601 UTC format.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * TARGET POSITION CONTINUATION WORD - number of associated dmpis.
     */
    c1associateddmpis?: number;

    /**
     * TARGET DATA CONTINUATION WORD - air specific type, see TABLE B-21.
     */
    c2air?: string;

    /**
     * TARGET DATA CONTINUATION WORD - altitude, 100 FT, 2047=NS.
     */
    c2alt?: number;

    /**
     * TARGET DATA CONTINUATION WORD - course in increments of 1 degree.
     */
    c2crs?: number;

    /**
     * TARGET DATA CONTINUATION WORD - exercise indicator.
     */
    c2exerciseindicator?: string;

    /**
     * TARGET DATA CONTINUATION WORD - method of fire.
     */
    c2exercisemof?: string;

    /**
     * TARGET DATA CONTINUATION WORD - identity.
     */
    c2id?: string;

    /**
     * TARGET DATA CONTINUATION WORD - identity amplifying descriptor.
     */
    c2idamplifyingdescriptor?: string;

    /**
     * TARGET DATA CONTINUATION WORD - land specific type, see TABLE B-21.
     */
    c2lnd?: string;

    /**
     * TARGET DATA CONTINUATION WORD - space specific type, see TABLE B-39.
     */
    c2spc?: string;

    /**
     * TARGET DATA CONTINUATION WORD - speed in 2 DM/HR, 2047=NS.
     */
    c2spd?: number;

    /**
     * TARGET DATA CONTINUATION WORD - special interest indicator.
     */
    c2specialinterestindicator?: string;

    /**
     * TARGET DATA CONTINUATION WORD - surface specific type, see TABLE B-21.
     */
    c2sur?: string;

    /**
     * POINT LOCATION CONTINUATION WORD - elevation, 25 FT, 1023=NS.
     */
    c3elv?: number;

    /**
     * POINT LOCATION CONTINUATION WORD - latitude, 0.0013 MINUTE.
     */
    c3lat?: number;

    /**
     * POINT LOCATION CONTINUATION WORD - longitude, 0.0013 MINUTE.
     */
    c3lon?: number;

    /**
     * TARGET DATA CONTINUATION WORD - point type 1.
     */
    c3ptl?: string;

    /**
     * TARGET DATA CONTINUATION WORD - point number.
     */
    c3ptnum?: string;

    /**
     * SURFACE ATTACK CONTINUATION WORD - minute.
     */
    c4colon?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - target defenses.
     */
    c4def?: string;

    /**
     * SURFACE ATTACK CONTINUATION WORD - run in heading, NS=511.
     */
    c4egress?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - mode of delivery.
     */
    c4mod?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - number of stores, NS=63.
     */
    c4numberofstores?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - run in heading, NS=511.
     */
    c4runin?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - target type - see TABLE B-32.
     */
    c4tgt?: string;

    /**
     * SURFACE ATTACK CONTINUATION WORD - time discrete.
     */
    c4timediscrete?: string;

    /**
     * SURFACE ATTACK CONTINUATION WORD - hour.
     */
    c4tm?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - type of stores.
     */
    c4typeofstores?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - seconds in increments of 1 sec.
     */
    c5colon?: number;

    /**
     * CONTINUATION WORD - used with c3_elv to double precision to approx 3 ft.
     */
    c5elevationlsbs?: number;

    /**
     * CONTINUATION WORD - hae adjustment, measured in 3.125 FT.
     */
    c5haeadj?: number;

    /**
     * CONTINUATION WORD - used with c3_lat to double precision to approx 4 ft.
     */
    c5latlsb?: number;

    /**
     * CONTINUATION WORD - used with c3_lon to double precision to approx 4 ft.
     */
    c5lonlsb?: number;

    /**
     * CONTINUATION WORD - target bearing.
     */
    c5tgtbrng?: number;

    /**
     * CONTINUATION WORD - time window.
     */
    c5tw?: number;

    /**
     * TARGETING CONTINUATION WORD - designator/seeker pulse code.
     */
    c6dspc?: string;

    /**
     * TARGETING CONTINUATION WORD - designator/seeker pulse code type.
     */
    c6dspct?: string;

    /**
     * TARGETING CONTINUATION WORD - first pulse/last pulse mode.
     */
    c6fplpm?: string;

    /**
     * TARGETING CONTINUATION WORD - index number, related, 0=NS.
     */
    c6intel?: number;

    /**
     * TARGETING CONTINUATION WORD - laser illuminator code.
     */
    c6laser?: number;

    /**
     * TARGETING CONTINUATION WORD - long pulse mode.
     */
    c6longpm?: string;

    /**
     * TARGETING CONTINUATION WORD - track number, related to 3.
     */
    c6tnr3?: number;

    /**
     * THIRD PARTY CONTINUATION WORD - elevation angle, 2.
     */
    c7elang2?: number;

    /**
     * THIRD PARTY CONTINUATION WORD - index number, third party.
     */
    c7in3p?: number;

    /**
     * THIRD PARTY CONTINUATION WORD - track number, index originator.
     */
    c7tnor?: string;

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
     * Environment.
     */
    env?: string;

    /**
     * Index number.
     */
    index?: number;

    /**
     * WGS84 latitude, in degrees. -90 to 90 degrees (negative values south of
     * equator).
     */
    lat?: number;

    /**
     * WGS84 longitude, in degrees. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    lon?: number;

    /**
     * Origin of index number.
     */
    orginx?: string;

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
     * Receipt/Compliance, values from TABLE B-9.
     */
    rc?: string;

    /**
     * Recurrence rate, receipt/compliance.
     */
    rr?: number;

    /**
     * Strength.
     */
    sz?: string;

    /**
     * Track number objective.
     */
    tno?: string;

    /**
     * The track ID that the status is referencing, addressee.
     */
    trkId?: string;

    /**
     * Threat warning environment.
     */
    twenv?: string;
  }
}

export type MissionassignmentCountResponse = string;

export type MissionassignmentTupleResponse = Array<MissionassignmentHistoryAPI.MissionAssignmentFull>;

export interface MissionassignmentCreateParams {
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
   * The mission assignment discrete value.
   */
  mad: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The timestamp of the mission data, in ISO 8601 UTC format.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * TARGET POSITION CONTINUATION WORD - number of associated dmpis.
   */
  c1associateddmpis?: number;

  /**
   * TARGET DATA CONTINUATION WORD - air specific type, see TABLE B-21.
   */
  c2air?: string;

  /**
   * TARGET DATA CONTINUATION WORD - altitude, 100 FT, 2047=NS.
   */
  c2alt?: number;

  /**
   * TARGET DATA CONTINUATION WORD - course in increments of 1 degree.
   */
  c2crs?: number;

  /**
   * TARGET DATA CONTINUATION WORD - exercise indicator.
   */
  c2exerciseindicator?: string;

  /**
   * TARGET DATA CONTINUATION WORD - method of fire.
   */
  c2exercisemof?: string;

  /**
   * TARGET DATA CONTINUATION WORD - identity.
   */
  c2id?: string;

  /**
   * TARGET DATA CONTINUATION WORD - identity amplifying descriptor.
   */
  c2idamplifyingdescriptor?: string;

  /**
   * TARGET DATA CONTINUATION WORD - land specific type, see TABLE B-21.
   */
  c2lnd?: string;

  /**
   * TARGET DATA CONTINUATION WORD - space specific type, see TABLE B-39.
   */
  c2spc?: string;

  /**
   * TARGET DATA CONTINUATION WORD - speed in 2 DM/HR, 2047=NS.
   */
  c2spd?: number;

  /**
   * TARGET DATA CONTINUATION WORD - special interest indicator.
   */
  c2specialinterestindicator?: string;

  /**
   * TARGET DATA CONTINUATION WORD - surface specific type, see TABLE B-21.
   */
  c2sur?: string;

  /**
   * POINT LOCATION CONTINUATION WORD - elevation, 25 FT, 1023=NS.
   */
  c3elv?: number;

  /**
   * POINT LOCATION CONTINUATION WORD - latitude, 0.0013 MINUTE.
   */
  c3lat?: number;

  /**
   * POINT LOCATION CONTINUATION WORD - longitude, 0.0013 MINUTE.
   */
  c3lon?: number;

  /**
   * TARGET DATA CONTINUATION WORD - point type 1.
   */
  c3ptl?: string;

  /**
   * TARGET DATA CONTINUATION WORD - point number.
   */
  c3ptnum?: string;

  /**
   * SURFACE ATTACK CONTINUATION WORD - minute.
   */
  c4colon?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - target defenses.
   */
  c4def?: string;

  /**
   * SURFACE ATTACK CONTINUATION WORD - run in heading, NS=511.
   */
  c4egress?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - mode of delivery.
   */
  c4mod?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - number of stores, NS=63.
   */
  c4numberofstores?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - run in heading, NS=511.
   */
  c4runin?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - target type - see TABLE B-32.
   */
  c4tgt?: string;

  /**
   * SURFACE ATTACK CONTINUATION WORD - time discrete.
   */
  c4timediscrete?: string;

  /**
   * SURFACE ATTACK CONTINUATION WORD - hour.
   */
  c4tm?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - type of stores.
   */
  c4typeofstores?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - seconds in increments of 1 sec.
   */
  c5colon?: number;

  /**
   * CONTINUATION WORD - used with c3_elv to double precision to approx 3 ft.
   */
  c5elevationlsbs?: number;

  /**
   * CONTINUATION WORD - hae adjustment, measured in 3.125 FT.
   */
  c5haeadj?: number;

  /**
   * CONTINUATION WORD - used with c3_lat to double precision to approx 4 ft.
   */
  c5latlsb?: number;

  /**
   * CONTINUATION WORD - used with c3_lon to double precision to approx 4 ft.
   */
  c5lonlsb?: number;

  /**
   * CONTINUATION WORD - target bearing.
   */
  c5tgtbrng?: number;

  /**
   * CONTINUATION WORD - time window.
   */
  c5tw?: number;

  /**
   * TARGETING CONTINUATION WORD - designator/seeker pulse code.
   */
  c6dspc?: string;

  /**
   * TARGETING CONTINUATION WORD - designator/seeker pulse code type.
   */
  c6dspct?: string;

  /**
   * TARGETING CONTINUATION WORD - first pulse/last pulse mode.
   */
  c6fplpm?: string;

  /**
   * TARGETING CONTINUATION WORD - index number, related, 0=NS.
   */
  c6intel?: number;

  /**
   * TARGETING CONTINUATION WORD - laser illuminator code.
   */
  c6laser?: number;

  /**
   * TARGETING CONTINUATION WORD - long pulse mode.
   */
  c6longpm?: string;

  /**
   * TARGETING CONTINUATION WORD - track number, related to 3.
   */
  c6tnr3?: number;

  /**
   * THIRD PARTY CONTINUATION WORD - elevation angle, 2.
   */
  c7elang2?: number;

  /**
   * THIRD PARTY CONTINUATION WORD - index number, third party.
   */
  c7in3p?: number;

  /**
   * THIRD PARTY CONTINUATION WORD - track number, index originator.
   */
  c7tnor?: string;

  /**
   * Environment.
   */
  env?: string;

  /**
   * Index number.
   */
  index?: number;

  /**
   * WGS84 latitude, in degrees. -90 to 90 degrees (negative values south of
   * equator).
   */
  lat?: number;

  /**
   * WGS84 longitude, in degrees. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  lon?: number;

  /**
   * Origin of index number.
   */
  orginx?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Receipt/Compliance, values from TABLE B-9.
   */
  rc?: string;

  /**
   * Recurrence rate, receipt/compliance.
   */
  rr?: number;

  /**
   * Strength.
   */
  sz?: string;

  /**
   * Track number objective.
   */
  tno?: string;

  /**
   * The track ID that the status is referencing, addressee.
   */
  trkId?: string;

  /**
   * Threat warning environment.
   */
  twenv?: string;
}

export interface MissionassignmentUpdateParams {
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
   * The mission assignment discrete value.
   */
  mad: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The timestamp of the mission data, in ISO 8601 UTC format.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * TARGET POSITION CONTINUATION WORD - number of associated dmpis.
   */
  c1associateddmpis?: number;

  /**
   * TARGET DATA CONTINUATION WORD - air specific type, see TABLE B-21.
   */
  c2air?: string;

  /**
   * TARGET DATA CONTINUATION WORD - altitude, 100 FT, 2047=NS.
   */
  c2alt?: number;

  /**
   * TARGET DATA CONTINUATION WORD - course in increments of 1 degree.
   */
  c2crs?: number;

  /**
   * TARGET DATA CONTINUATION WORD - exercise indicator.
   */
  c2exerciseindicator?: string;

  /**
   * TARGET DATA CONTINUATION WORD - method of fire.
   */
  c2exercisemof?: string;

  /**
   * TARGET DATA CONTINUATION WORD - identity.
   */
  c2id?: string;

  /**
   * TARGET DATA CONTINUATION WORD - identity amplifying descriptor.
   */
  c2idamplifyingdescriptor?: string;

  /**
   * TARGET DATA CONTINUATION WORD - land specific type, see TABLE B-21.
   */
  c2lnd?: string;

  /**
   * TARGET DATA CONTINUATION WORD - space specific type, see TABLE B-39.
   */
  c2spc?: string;

  /**
   * TARGET DATA CONTINUATION WORD - speed in 2 DM/HR, 2047=NS.
   */
  c2spd?: number;

  /**
   * TARGET DATA CONTINUATION WORD - special interest indicator.
   */
  c2specialinterestindicator?: string;

  /**
   * TARGET DATA CONTINUATION WORD - surface specific type, see TABLE B-21.
   */
  c2sur?: string;

  /**
   * POINT LOCATION CONTINUATION WORD - elevation, 25 FT, 1023=NS.
   */
  c3elv?: number;

  /**
   * POINT LOCATION CONTINUATION WORD - latitude, 0.0013 MINUTE.
   */
  c3lat?: number;

  /**
   * POINT LOCATION CONTINUATION WORD - longitude, 0.0013 MINUTE.
   */
  c3lon?: number;

  /**
   * TARGET DATA CONTINUATION WORD - point type 1.
   */
  c3ptl?: string;

  /**
   * TARGET DATA CONTINUATION WORD - point number.
   */
  c3ptnum?: string;

  /**
   * SURFACE ATTACK CONTINUATION WORD - minute.
   */
  c4colon?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - target defenses.
   */
  c4def?: string;

  /**
   * SURFACE ATTACK CONTINUATION WORD - run in heading, NS=511.
   */
  c4egress?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - mode of delivery.
   */
  c4mod?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - number of stores, NS=63.
   */
  c4numberofstores?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - run in heading, NS=511.
   */
  c4runin?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - target type - see TABLE B-32.
   */
  c4tgt?: string;

  /**
   * SURFACE ATTACK CONTINUATION WORD - time discrete.
   */
  c4timediscrete?: string;

  /**
   * SURFACE ATTACK CONTINUATION WORD - hour.
   */
  c4tm?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - type of stores.
   */
  c4typeofstores?: number;

  /**
   * SURFACE ATTACK CONTINUATION WORD - seconds in increments of 1 sec.
   */
  c5colon?: number;

  /**
   * CONTINUATION WORD - used with c3_elv to double precision to approx 3 ft.
   */
  c5elevationlsbs?: number;

  /**
   * CONTINUATION WORD - hae adjustment, measured in 3.125 FT.
   */
  c5haeadj?: number;

  /**
   * CONTINUATION WORD - used with c3_lat to double precision to approx 4 ft.
   */
  c5latlsb?: number;

  /**
   * CONTINUATION WORD - used with c3_lon to double precision to approx 4 ft.
   */
  c5lonlsb?: number;

  /**
   * CONTINUATION WORD - target bearing.
   */
  c5tgtbrng?: number;

  /**
   * CONTINUATION WORD - time window.
   */
  c5tw?: number;

  /**
   * TARGETING CONTINUATION WORD - designator/seeker pulse code.
   */
  c6dspc?: string;

  /**
   * TARGETING CONTINUATION WORD - designator/seeker pulse code type.
   */
  c6dspct?: string;

  /**
   * TARGETING CONTINUATION WORD - first pulse/last pulse mode.
   */
  c6fplpm?: string;

  /**
   * TARGETING CONTINUATION WORD - index number, related, 0=NS.
   */
  c6intel?: number;

  /**
   * TARGETING CONTINUATION WORD - laser illuminator code.
   */
  c6laser?: number;

  /**
   * TARGETING CONTINUATION WORD - long pulse mode.
   */
  c6longpm?: string;

  /**
   * TARGETING CONTINUATION WORD - track number, related to 3.
   */
  c6tnr3?: number;

  /**
   * THIRD PARTY CONTINUATION WORD - elevation angle, 2.
   */
  c7elang2?: number;

  /**
   * THIRD PARTY CONTINUATION WORD - index number, third party.
   */
  c7in3p?: number;

  /**
   * THIRD PARTY CONTINUATION WORD - track number, index originator.
   */
  c7tnor?: string;

  /**
   * Environment.
   */
  env?: string;

  /**
   * Index number.
   */
  index?: number;

  /**
   * WGS84 latitude, in degrees. -90 to 90 degrees (negative values south of
   * equator).
   */
  lat?: number;

  /**
   * WGS84 longitude, in degrees. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  lon?: number;

  /**
   * Origin of index number.
   */
  orginx?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Receipt/Compliance, values from TABLE B-9.
   */
  rc?: string;

  /**
   * Recurrence rate, receipt/compliance.
   */
  rr?: number;

  /**
   * Strength.
   */
  sz?: string;

  /**
   * Track number objective.
   */
  tno?: string;

  /**
   * The track ID that the status is referencing, addressee.
   */
  trkId?: string;

  /**
   * Threat warning environment.
   */
  twenv?: string;
}

export interface MissionassignmentListParams {
  /**
   * the timestamp of the mission data, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export interface MissionassignmentCountParams {
  /**
   * the timestamp of the mission data, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export type MissionassignmentCreateBulkParams = Array<MissionassignmentCreateBulkParams.Body>;

export namespace MissionassignmentCreateBulkParams {
  /**
   * Platform mission assignment data.
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
     * The mission assignment discrete value.
     */
    mad: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The timestamp of the mission data, in ISO 8601 UTC format.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * TARGET POSITION CONTINUATION WORD - number of associated dmpis.
     */
    c1associateddmpis?: number;

    /**
     * TARGET DATA CONTINUATION WORD - air specific type, see TABLE B-21.
     */
    c2air?: string;

    /**
     * TARGET DATA CONTINUATION WORD - altitude, 100 FT, 2047=NS.
     */
    c2alt?: number;

    /**
     * TARGET DATA CONTINUATION WORD - course in increments of 1 degree.
     */
    c2crs?: number;

    /**
     * TARGET DATA CONTINUATION WORD - exercise indicator.
     */
    c2exerciseindicator?: string;

    /**
     * TARGET DATA CONTINUATION WORD - method of fire.
     */
    c2exercisemof?: string;

    /**
     * TARGET DATA CONTINUATION WORD - identity.
     */
    c2id?: string;

    /**
     * TARGET DATA CONTINUATION WORD - identity amplifying descriptor.
     */
    c2idamplifyingdescriptor?: string;

    /**
     * TARGET DATA CONTINUATION WORD - land specific type, see TABLE B-21.
     */
    c2lnd?: string;

    /**
     * TARGET DATA CONTINUATION WORD - space specific type, see TABLE B-39.
     */
    c2spc?: string;

    /**
     * TARGET DATA CONTINUATION WORD - speed in 2 DM/HR, 2047=NS.
     */
    c2spd?: number;

    /**
     * TARGET DATA CONTINUATION WORD - special interest indicator.
     */
    c2specialinterestindicator?: string;

    /**
     * TARGET DATA CONTINUATION WORD - surface specific type, see TABLE B-21.
     */
    c2sur?: string;

    /**
     * POINT LOCATION CONTINUATION WORD - elevation, 25 FT, 1023=NS.
     */
    c3elv?: number;

    /**
     * POINT LOCATION CONTINUATION WORD - latitude, 0.0013 MINUTE.
     */
    c3lat?: number;

    /**
     * POINT LOCATION CONTINUATION WORD - longitude, 0.0013 MINUTE.
     */
    c3lon?: number;

    /**
     * TARGET DATA CONTINUATION WORD - point type 1.
     */
    c3ptl?: string;

    /**
     * TARGET DATA CONTINUATION WORD - point number.
     */
    c3ptnum?: string;

    /**
     * SURFACE ATTACK CONTINUATION WORD - minute.
     */
    c4colon?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - target defenses.
     */
    c4def?: string;

    /**
     * SURFACE ATTACK CONTINUATION WORD - run in heading, NS=511.
     */
    c4egress?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - mode of delivery.
     */
    c4mod?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - number of stores, NS=63.
     */
    c4numberofstores?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - run in heading, NS=511.
     */
    c4runin?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - target type - see TABLE B-32.
     */
    c4tgt?: string;

    /**
     * SURFACE ATTACK CONTINUATION WORD - time discrete.
     */
    c4timediscrete?: string;

    /**
     * SURFACE ATTACK CONTINUATION WORD - hour.
     */
    c4tm?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - type of stores.
     */
    c4typeofstores?: number;

    /**
     * SURFACE ATTACK CONTINUATION WORD - seconds in increments of 1 sec.
     */
    c5colon?: number;

    /**
     * CONTINUATION WORD - used with c3_elv to double precision to approx 3 ft.
     */
    c5elevationlsbs?: number;

    /**
     * CONTINUATION WORD - hae adjustment, measured in 3.125 FT.
     */
    c5haeadj?: number;

    /**
     * CONTINUATION WORD - used with c3_lat to double precision to approx 4 ft.
     */
    c5latlsb?: number;

    /**
     * CONTINUATION WORD - used with c3_lon to double precision to approx 4 ft.
     */
    c5lonlsb?: number;

    /**
     * CONTINUATION WORD - target bearing.
     */
    c5tgtbrng?: number;

    /**
     * CONTINUATION WORD - time window.
     */
    c5tw?: number;

    /**
     * TARGETING CONTINUATION WORD - designator/seeker pulse code.
     */
    c6dspc?: string;

    /**
     * TARGETING CONTINUATION WORD - designator/seeker pulse code type.
     */
    c6dspct?: string;

    /**
     * TARGETING CONTINUATION WORD - first pulse/last pulse mode.
     */
    c6fplpm?: string;

    /**
     * TARGETING CONTINUATION WORD - index number, related, 0=NS.
     */
    c6intel?: number;

    /**
     * TARGETING CONTINUATION WORD - laser illuminator code.
     */
    c6laser?: number;

    /**
     * TARGETING CONTINUATION WORD - long pulse mode.
     */
    c6longpm?: string;

    /**
     * TARGETING CONTINUATION WORD - track number, related to 3.
     */
    c6tnr3?: number;

    /**
     * THIRD PARTY CONTINUATION WORD - elevation angle, 2.
     */
    c7elang2?: number;

    /**
     * THIRD PARTY CONTINUATION WORD - index number, third party.
     */
    c7in3p?: number;

    /**
     * THIRD PARTY CONTINUATION WORD - track number, index originator.
     */
    c7tnor?: string;

    /**
     * Environment.
     */
    env?: string;

    /**
     * Index number.
     */
    index?: number;

    /**
     * WGS84 latitude, in degrees. -90 to 90 degrees (negative values south of
     * equator).
     */
    lat?: number;

    /**
     * WGS84 longitude, in degrees. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    lon?: number;

    /**
     * Origin of index number.
     */
    orginx?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Receipt/Compliance, values from TABLE B-9.
     */
    rc?: string;

    /**
     * Recurrence rate, receipt/compliance.
     */
    rr?: number;

    /**
     * Strength.
     */
    sz?: string;

    /**
     * Track number objective.
     */
    tno?: string;

    /**
     * The track ID that the status is referencing, addressee.
     */
    trkId?: string;

    /**
     * Threat warning environment.
     */
    twenv?: string;
  }
}

export interface MissionassignmentTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * the timestamp of the mission data, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

Missionassignment.History = History;

export declare namespace Missionassignment {
  export {
    type MissionassignmentListResponse as MissionassignmentListResponse,
    type MissionassignmentCountResponse as MissionassignmentCountResponse,
    type MissionassignmentTupleResponse as MissionassignmentTupleResponse,
    type MissionassignmentCreateParams as MissionassignmentCreateParams,
    type MissionassignmentUpdateParams as MissionassignmentUpdateParams,
    type MissionassignmentListParams as MissionassignmentListParams,
    type MissionassignmentCountParams as MissionassignmentCountParams,
    type MissionassignmentCreateBulkParams as MissionassignmentCreateBulkParams,
    type MissionassignmentTupleParams as MissionassignmentTupleParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
  };
}
