// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AirEvents extends APIResource {
  /**
   * Service operation to take a single airevent object as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airEvents.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   *   type: 'FUEL TRANSFER',
   * });
   * ```
   */
  create(body: AirEventCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/airevent', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single airevent record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.airEvents.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   *   type: 'FUEL TRANSFER',
   * });
   * ```
   */
  update(pathID: string, body: AirEventUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/airevent/${pathID}`, {
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
   * for await (const airEventListResponse of client.airEvents.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AirEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AirEventListResponsesOffsetPage, AirEventListResponse> {
    return this._client.getAPIList('/udl/airevent', OffsetPage<AirEventListResponse>, { query, ...options });
  }

  /**
   * Service operation to delete an airevent record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airEvents.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/airevent/${id}`, {
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
   * const response = await client.airEvents.count();
   * ```
   */
  count(query: AirEventCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/airevent/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list
   * ofService operation intended for initial integration only, to take a list of
   * airevent records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.airEvents.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       source: 'Bluestaq',
   *       type: 'FUEL TRANSFER',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: AirEventCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/airevent/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single airevent record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const airEvent = await client.airEvents.get('id');
   * ```
   */
  get(
    id: string,
    query: AirEventGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AirEventGetResponse> {
    return this._client.get(path`/udl/airevent/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.airEvents.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<AirEventQueryhelpResponse> {
    return this._client.get('/udl/airevent/queryhelp', options);
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
   * const response = await client.airEvents.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: AirEventTupleParams, options?: RequestOptions): APIPromise<AirEventTupleResponse> {
    return this._client.get('/udl/airevent/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple airevent records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airEvents.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       source: 'Bluestaq',
   *       type: 'FUEL TRANSFER',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: AirEventUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-airevent', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type AirEventListResponsesOffsetPage = OffsetPage<AirEventListResponse>;

/**
 * Information related to an air event (e.g. FUEL TRANSFER, AIR DROP) and the
 * associated aircraft.
 */
export interface AirEventListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Type of air event (e.g. FUEL TRANSFER, AIR DROP, etc).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The actual arrival time of the aircraft at the air event, in ISO 8601 UTC format
   * with millisecond precision.
   */
  actualArrTime?: string;

  /**
   * The actual departure time of the aircraft from the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  actualDepTime?: string;

  /**
   * The Air Refueling Control Time is the planned time the tanker aircraft will
   * transfer fuel to the receiver aircraft, in ISO 8601 UTC format, with millisecond
   * precision.
   */
  arct?: string;

  /**
   * Type of process used by AMC to schedule this air refueling event. Possible
   * values are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched
   * Theater Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S
   * (Soft Air Refueling), T (Matched Theater Operation Short Notice (Theater
   * Assets)), V (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short
   * Notice (AMC Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z
   * (Other Air Refueling).
   */
  arEventType?: string;

  /**
   * The purpose of the air event at the arrival location. Can be either descriptive
   * text such as 'fuel onload' or a purpose code specified by the provider, such as
   * 'A'.
   */
  arrPurpose?: string;

  /**
   * Identifier of the air refueling track, if applicable.
   */
  arTrackId?: string;

  /**
   * Name of the air refueling track, if applicable.
   */
  arTrackName?: string;

  /**
   * Altitude of this air event, in feet.
   */
  baseAlt?: number;

  /**
   * Flag indicating that this air refueling event has been cancelled.
   */
  cancelled?: boolean;

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
   * The purpose of the air event at the departure location. Can be either
   * descriptive text such as 'fuel onload' or a purpose code specified by the
   * provider, such as 'A'.
   */
  depPurpose?: string;

  /**
   * The current estimated arrival time of the aircraft at the air event, in ISO 8601
   * UTC format with millisecond precision.
   */
  estArrTime?: string;

  /**
   * The current estimated departure time of the aircraft from the air event, in ISO
   * 8601 UTC format with millisecond precision.
   */
  estDepTime?: string;

  /**
   * Optional air event ID from external systems. This field has no meaning within
   * UDL and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalAirEventId?: string;

  /**
   * Optional air refueling track ID from external systems. This field has no meaning
   * within UDL and is provided as a convenience for systems that require tracking of
   * an internal system generated ID.
   */
  externalARTrackId?: string;

  /**
   * The UDL unique identifier of the mission associated with this air event.
   */
  idMission?: string;

  /**
   * The UDL unique identifier of the sortie associated with this air event.
   */
  idSortie?: string;

  /**
   * Identifies the Itinerary point of a sortie where an air event occurs.
   */
  legNum?: number;

  /**
   * The location representing this air event specified as a feature Id. Locations
   * specified include air refueling track Ids and air drop event locations.
   */
  location?: string;

  /**
   * The number of tankers requested for an air refueling event.
   */
  numTankers?: number;

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
   * The scheduled arrival time of the aircraft at the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  plannedArrTime?: string;

  /**
   * The scheduled departure time of the aircraft from the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  plannedDepTime?: string;

  /**
   * Priority of this air event.
   */
  priority?: string;

  /**
   * Collection of receiver aircraft associated with this Air Event.
   */
  receivers?: Array<AirEventListResponse.Receiver>;

  /**
   * Collection of remarks associated with this Air Event.
   */
  remarks?: Array<AirEventListResponse.Remark>;

  /**
   * Flag indicating if the receiver unit has requested flying an air refueling track
   * in both directions.
   */
  revTrack?: boolean;

  /**
   * The Rendezvous Control Time is the planned time the tanker and receiver aircraft
   * will rendezvous for an en route type air refueling event, in ISO 8601 UTC
   * format, with millisecond precision.
   */
  rzct?: string;

  /**
   * Rendezvous point for the tanker and receiver during this air refueling event.
   * Possible values are AN (Anchor Nav Point), AP (Anchor Pattern), CP (Control
   * Point), ET (Entry Point), EX (Exit Point), IP (Initial Point), NC (Nav Check
   * Point).
   */
  rzPoint?: string;

  /**
   * Type of rendezvous used for this air refueling event. Possible values are BUD
   * (Buddy), EN (Enroute), GCI (Ground Control), PP (Point Parallel).
   */
  rzType?: string;

  /**
   * Flag indicating that the receiver unit has requested flying a short portion of
   * an air refueling track.
   */
  shortTrack?: boolean;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Status of this air refueling event track reservation. Receivers are responsible
   * for scheduling or reserving air refueling tracks. Possible values are A
   * (Altitude Reservation), R (Reserved), or Q (Questionable).
   */
  statusCode?: string;

  /**
   * Collection of tanker aircraft associated with this Air Event.
   */
  tankers?: Array<AirEventListResponse.Tanker>;

  /**
   * Length of time the receiver unit has requested for an air event, in hours.
   */
  trackTime?: number;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export namespace AirEventListResponse {
  /**
   * Collection of receiver aircraft associated with this Air Event.
   */
  export interface Receiver {
    /**
     * Alternate mission identifier of this receiver provided by source.
     */
    altReceiverMissionId?: string;

    /**
     * The Air Mobility Command (AMC) mission identifier of this receiver.
     */
    amcReceiverMissionId?: string;

    /**
     * Optional receiver identifier from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalReceiverId?: string;

    /**
     * Total weight of the fuel transferred to this receiver during an air refueling
     * event, in pounds.
     */
    fuelOn?: number;

    /**
     * The UDL ID of the airfield this receiver is associated with for this event.
     */
    idReceiverAirfield?: string;

    /**
     * The UDL ID of the mission this receiver is associated with for this event.
     */
    idReceiverMission?: string;

    /**
     * The UDL ID of the aircraft sortie this receiver is associated with for this
     * event.
     */
    idReceiverSortie?: string;

    /**
     * Number of aircraft contained within one receiver coordination record for an air
     * refueling event.
     */
    numRecAircraft?: number;

    /**
     * The package identifier for the receiver in an air refueling event.
     */
    packageId?: string;

    /**
     * The call sign assigned to this receiver.
     */
    receiverCallSign?: string;

    /**
     * Position of this receiver within a group of receivers in an air refueling event.
     */
    receiverCellPosition?: number;

    /**
     * Coordination record identifier of this receiver.
     */
    receiverCoord?: string;

    /**
     * Type of fuel delivery method used by the receiver during an air refueling event
     * (BOOM, DROGUE, BOTH).
     */
    receiverDeliveryMethod?: string;

    /**
     * Location the receiver is deployed to for an air refueling event.
     */
    receiverDeployedICAO?: string;

    /**
     * Name of the receiver exercise associated with an air refueling event.
     */
    receiverExercise?: string;

    /**
     * Type of fuel being transferred to the receiver in an air refueling event.
     */
    receiverFuelType?: string;

    /**
     * Identifies the itinerary point of a mission that this receiver is linked to.
     */
    receiverLegNum?: number;

    /**
     * The Model Design Series designation of this receiver.
     */
    receiverMDS?: string;

    /**
     * The wing or unit that owns this receiver.
     */
    receiverOwner?: string;

    /**
     * The name and/or number of the point of contact for this receiver.
     */
    receiverPOC?: string;

    /**
     * The major command level (MAJCOM) or foreign military sales (FMS) name of the
     * receiver's organization. The tanker flying hours used for an air refueling event
     * are logged against the receiver MAJCOM or foreign government being supported.
     */
    recOrg?: string;

    /**
     * Indicates the unique number by Unit ID, which identifies an air refueling event.
     */
    sequenceNum?: string;
  }

  /**
   * Collection of remarks associated with this Air Event.
   */
  export interface Remark {
    /**
     * Date the remark was published, in ISO 8601 UTC format, with millisecond
     * precision.
     */
    date?: string;

    /**
     * Optional remark ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalRemarkId?: string;

    /**
     * Text of the remark.
     */
    text?: string;

    /**
     * User who published the remark.
     */
    user?: string;
  }

  /**
   * Collection of tanker aircraft associated with this Air Event.
   */
  export interface Tanker {
    /**
     * Alternate mission identifier of this tanker provided by source.
     */
    altTankerMissionId?: string;

    /**
     * The Air Mobility Command (AMC) mission identifier of this tanker.
     */
    amcTankerMissionId?: string;

    /**
     * Flag indicating that this tanker is flying a dual role mission in an air
     * refueling event.
     */
    dualRole?: boolean;

    /**
     * Optional tanker identifier from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalTankerId?: string;

    /**
     * Total weight of the fuel transferred from this tanker during an air refueling
     * event, in pounds.
     */
    fuelOff?: number;

    /**
     * The UDL ID of the airfield this tanker is associated with for this event.
     */
    idTankerAirfield?: string;

    /**
     * The UDL ID of the mission this tanker is associated with for this event.
     */
    idTankerMission?: string;

    /**
     * The UDL ID of the aircraft sortie this tanker is associated with for this event.
     */
    idTankerSortie?: string;

    /**
     * The call sign assigned to this tanker.
     */
    tankerCallSign?: string;

    /**
     * Position of this tanker within a group of tankers in an air refueling event.
     */
    tankerCellPosition?: number;

    /**
     * Coordination record identifier of this tanker.
     */
    tankerCoord?: string;

    /**
     * Type of fuel delivery method used by the tanker during an air refueling event
     * (BOOM, DROGUE, BOTH).
     */
    tankerDeliveryMethod?: string;

    /**
     * Location the tanker has been deployed to in preparation for an air refueling
     * event.
     */
    tankerDeployedICAO?: string;

    /**
     * Type of fuel being transferred from the tanker in an air refueling event.
     */
    tankerFuelType?: string;

    /**
     * Identifies the itinerary point of a mission that this tanker is linked to.
     */
    tankerLegNum?: number;

    /**
     * The Model Design Series designation of this tanker.
     */
    tankerMDS?: string;

    /**
     * The wing or unit that owns this tanker.
     */
    tankerOwner?: string;

    /**
     * The name and/or number of the point of contact for this tanker.
     */
    tankerPOC?: string;
  }
}

export type AirEventCountResponse = string;

/**
 * Information related to an air event (e.g. FUEL TRANSFER, AIR DROP) and the
 * associated aircraft.
 */
export interface AirEventGetResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Type of air event (e.g. FUEL TRANSFER, AIR DROP, etc).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The actual arrival time of the aircraft at the air event, in ISO 8601 UTC format
   * with millisecond precision.
   */
  actualArrTime?: string;

  /**
   * The actual departure time of the aircraft from the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  actualDepTime?: string;

  /**
   * The Air Refueling Control Time is the planned time the tanker aircraft will
   * transfer fuel to the receiver aircraft, in ISO 8601 UTC format, with millisecond
   * precision.
   */
  arct?: string;

  /**
   * Type of process used by AMC to schedule this air refueling event. Possible
   * values are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched
   * Theater Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S
   * (Soft Air Refueling), T (Matched Theater Operation Short Notice (Theater
   * Assets)), V (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short
   * Notice (AMC Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z
   * (Other Air Refueling).
   */
  arEventType?: string;

  /**
   * The purpose of the air event at the arrival location. Can be either descriptive
   * text such as 'fuel onload' or a purpose code specified by the provider, such as
   * 'A'.
   */
  arrPurpose?: string;

  /**
   * Identifier of the air refueling track, if applicable.
   */
  arTrackId?: string;

  /**
   * Name of the air refueling track, if applicable.
   */
  arTrackName?: string;

  /**
   * Altitude of this air event, in feet.
   */
  baseAlt?: number;

  /**
   * Flag indicating that this air refueling event has been cancelled.
   */
  cancelled?: boolean;

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
   * The purpose of the air event at the departure location. Can be either
   * descriptive text such as 'fuel onload' or a purpose code specified by the
   * provider, such as 'A'.
   */
  depPurpose?: string;

  /**
   * The current estimated arrival time of the aircraft at the air event, in ISO 8601
   * UTC format with millisecond precision.
   */
  estArrTime?: string;

  /**
   * The current estimated departure time of the aircraft from the air event, in ISO
   * 8601 UTC format with millisecond precision.
   */
  estDepTime?: string;

  /**
   * Optional air event ID from external systems. This field has no meaning within
   * UDL and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalAirEventId?: string;

  /**
   * Optional air refueling track ID from external systems. This field has no meaning
   * within UDL and is provided as a convenience for systems that require tracking of
   * an internal system generated ID.
   */
  externalARTrackId?: string;

  /**
   * The UDL unique identifier of the mission associated with this air event.
   */
  idMission?: string;

  /**
   * The UDL unique identifier of the sortie associated with this air event.
   */
  idSortie?: string;

  /**
   * Identifies the Itinerary point of a sortie where an air event occurs.
   */
  legNum?: number;

  /**
   * The location representing this air event specified as a feature Id. Locations
   * specified include air refueling track Ids and air drop event locations.
   */
  location?: string;

  /**
   * The number of tankers requested for an air refueling event.
   */
  numTankers?: number;

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
   * The scheduled arrival time of the aircraft at the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  plannedArrTime?: string;

  /**
   * The scheduled departure time of the aircraft from the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  plannedDepTime?: string;

  /**
   * Priority of this air event.
   */
  priority?: string;

  /**
   * Collection of receiver aircraft associated with this Air Event.
   */
  receivers?: Array<AirEventGetResponse.Receiver>;

  /**
   * Collection of remarks associated with this Air Event.
   */
  remarks?: Array<AirEventGetResponse.Remark>;

  /**
   * Flag indicating if the receiver unit has requested flying an air refueling track
   * in both directions.
   */
  revTrack?: boolean;

  /**
   * The Rendezvous Control Time is the planned time the tanker and receiver aircraft
   * will rendezvous for an en route type air refueling event, in ISO 8601 UTC
   * format, with millisecond precision.
   */
  rzct?: string;

  /**
   * Rendezvous point for the tanker and receiver during this air refueling event.
   * Possible values are AN (Anchor Nav Point), AP (Anchor Pattern), CP (Control
   * Point), ET (Entry Point), EX (Exit Point), IP (Initial Point), NC (Nav Check
   * Point).
   */
  rzPoint?: string;

  /**
   * Type of rendezvous used for this air refueling event. Possible values are BUD
   * (Buddy), EN (Enroute), GCI (Ground Control), PP (Point Parallel).
   */
  rzType?: string;

  /**
   * Flag indicating that the receiver unit has requested flying a short portion of
   * an air refueling track.
   */
  shortTrack?: boolean;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Status of this air refueling event track reservation. Receivers are responsible
   * for scheduling or reserving air refueling tracks. Possible values are A
   * (Altitude Reservation), R (Reserved), or Q (Questionable).
   */
  statusCode?: string;

  /**
   * Collection of tanker aircraft associated with this Air Event.
   */
  tankers?: Array<AirEventGetResponse.Tanker>;

  /**
   * Length of time the receiver unit has requested for an air event, in hours.
   */
  trackTime?: number;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export namespace AirEventGetResponse {
  /**
   * Collection of receiver aircraft associated with this Air Event.
   */
  export interface Receiver {
    /**
     * Alternate mission identifier of this receiver provided by source.
     */
    altReceiverMissionId?: string;

    /**
     * The Air Mobility Command (AMC) mission identifier of this receiver.
     */
    amcReceiverMissionId?: string;

    /**
     * Optional receiver identifier from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalReceiverId?: string;

    /**
     * Total weight of the fuel transferred to this receiver during an air refueling
     * event, in pounds.
     */
    fuelOn?: number;

    /**
     * The UDL ID of the airfield this receiver is associated with for this event.
     */
    idReceiverAirfield?: string;

    /**
     * The UDL ID of the mission this receiver is associated with for this event.
     */
    idReceiverMission?: string;

    /**
     * The UDL ID of the aircraft sortie this receiver is associated with for this
     * event.
     */
    idReceiverSortie?: string;

    /**
     * Number of aircraft contained within one receiver coordination record for an air
     * refueling event.
     */
    numRecAircraft?: number;

    /**
     * The package identifier for the receiver in an air refueling event.
     */
    packageId?: string;

    /**
     * The call sign assigned to this receiver.
     */
    receiverCallSign?: string;

    /**
     * Position of this receiver within a group of receivers in an air refueling event.
     */
    receiverCellPosition?: number;

    /**
     * Coordination record identifier of this receiver.
     */
    receiverCoord?: string;

    /**
     * Type of fuel delivery method used by the receiver during an air refueling event
     * (BOOM, DROGUE, BOTH).
     */
    receiverDeliveryMethod?: string;

    /**
     * Location the receiver is deployed to for an air refueling event.
     */
    receiverDeployedICAO?: string;

    /**
     * Name of the receiver exercise associated with an air refueling event.
     */
    receiverExercise?: string;

    /**
     * Type of fuel being transferred to the receiver in an air refueling event.
     */
    receiverFuelType?: string;

    /**
     * Identifies the itinerary point of a mission that this receiver is linked to.
     */
    receiverLegNum?: number;

    /**
     * The Model Design Series designation of this receiver.
     */
    receiverMDS?: string;

    /**
     * The wing or unit that owns this receiver.
     */
    receiverOwner?: string;

    /**
     * The name and/or number of the point of contact for this receiver.
     */
    receiverPOC?: string;

    /**
     * The major command level (MAJCOM) or foreign military sales (FMS) name of the
     * receiver's organization. The tanker flying hours used for an air refueling event
     * are logged against the receiver MAJCOM or foreign government being supported.
     */
    recOrg?: string;

    /**
     * Indicates the unique number by Unit ID, which identifies an air refueling event.
     */
    sequenceNum?: string;
  }

  /**
   * Collection of remarks associated with this Air Event.
   */
  export interface Remark {
    /**
     * Date the remark was published, in ISO 8601 UTC format, with millisecond
     * precision.
     */
    date?: string;

    /**
     * Optional remark ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalRemarkId?: string;

    /**
     * Text of the remark.
     */
    text?: string;

    /**
     * User who published the remark.
     */
    user?: string;
  }

  /**
   * Collection of tanker aircraft associated with this Air Event.
   */
  export interface Tanker {
    /**
     * Alternate mission identifier of this tanker provided by source.
     */
    altTankerMissionId?: string;

    /**
     * The Air Mobility Command (AMC) mission identifier of this tanker.
     */
    amcTankerMissionId?: string;

    /**
     * Flag indicating that this tanker is flying a dual role mission in an air
     * refueling event.
     */
    dualRole?: boolean;

    /**
     * Optional tanker identifier from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalTankerId?: string;

    /**
     * Total weight of the fuel transferred from this tanker during an air refueling
     * event, in pounds.
     */
    fuelOff?: number;

    /**
     * The UDL ID of the airfield this tanker is associated with for this event.
     */
    idTankerAirfield?: string;

    /**
     * The UDL ID of the mission this tanker is associated with for this event.
     */
    idTankerMission?: string;

    /**
     * The UDL ID of the aircraft sortie this tanker is associated with for this event.
     */
    idTankerSortie?: string;

    /**
     * The call sign assigned to this tanker.
     */
    tankerCallSign?: string;

    /**
     * Position of this tanker within a group of tankers in an air refueling event.
     */
    tankerCellPosition?: number;

    /**
     * Coordination record identifier of this tanker.
     */
    tankerCoord?: string;

    /**
     * Type of fuel delivery method used by the tanker during an air refueling event
     * (BOOM, DROGUE, BOTH).
     */
    tankerDeliveryMethod?: string;

    /**
     * Location the tanker has been deployed to in preparation for an air refueling
     * event.
     */
    tankerDeployedICAO?: string;

    /**
     * Type of fuel being transferred from the tanker in an air refueling event.
     */
    tankerFuelType?: string;

    /**
     * Identifies the itinerary point of a mission that this tanker is linked to.
     */
    tankerLegNum?: number;

    /**
     * The Model Design Series designation of this tanker.
     */
    tankerMDS?: string;

    /**
     * The wing or unit that owns this tanker.
     */
    tankerOwner?: string;

    /**
     * The name and/or number of the point of contact for this tanker.
     */
    tankerPOC?: string;
  }
}

export interface AirEventQueryhelpResponse {
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

export type AirEventTupleResponse = Array<AirEventTupleResponse.AirEventTupleResponseItem>;

export namespace AirEventTupleResponse {
  /**
   * Information related to an air event (e.g. FUEL TRANSFER, AIR DROP) and the
   * associated aircraft.
   */
  export interface AirEventTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Type of air event (e.g. FUEL TRANSFER, AIR DROP, etc).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The actual arrival time of the aircraft at the air event, in ISO 8601 UTC format
     * with millisecond precision.
     */
    actualArrTime?: string;

    /**
     * The actual departure time of the aircraft from the air event, in ISO 8601 UTC
     * format with millisecond precision.
     */
    actualDepTime?: string;

    /**
     * The Air Refueling Control Time is the planned time the tanker aircraft will
     * transfer fuel to the receiver aircraft, in ISO 8601 UTC format, with millisecond
     * precision.
     */
    arct?: string;

    /**
     * Type of process used by AMC to schedule this air refueling event. Possible
     * values are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched
     * Theater Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S
     * (Soft Air Refueling), T (Matched Theater Operation Short Notice (Theater
     * Assets)), V (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short
     * Notice (AMC Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z
     * (Other Air Refueling).
     */
    arEventType?: string;

    /**
     * The purpose of the air event at the arrival location. Can be either descriptive
     * text such as 'fuel onload' or a purpose code specified by the provider, such as
     * 'A'.
     */
    arrPurpose?: string;

    /**
     * Identifier of the air refueling track, if applicable.
     */
    arTrackId?: string;

    /**
     * Name of the air refueling track, if applicable.
     */
    arTrackName?: string;

    /**
     * Altitude of this air event, in feet.
     */
    baseAlt?: number;

    /**
     * Flag indicating that this air refueling event has been cancelled.
     */
    cancelled?: boolean;

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
     * The purpose of the air event at the departure location. Can be either
     * descriptive text such as 'fuel onload' or a purpose code specified by the
     * provider, such as 'A'.
     */
    depPurpose?: string;

    /**
     * The current estimated arrival time of the aircraft at the air event, in ISO 8601
     * UTC format with millisecond precision.
     */
    estArrTime?: string;

    /**
     * The current estimated departure time of the aircraft from the air event, in ISO
     * 8601 UTC format with millisecond precision.
     */
    estDepTime?: string;

    /**
     * Optional air event ID from external systems. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalAirEventId?: string;

    /**
     * Optional air refueling track ID from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalARTrackId?: string;

    /**
     * The UDL unique identifier of the mission associated with this air event.
     */
    idMission?: string;

    /**
     * The UDL unique identifier of the sortie associated with this air event.
     */
    idSortie?: string;

    /**
     * Identifies the Itinerary point of a sortie where an air event occurs.
     */
    legNum?: number;

    /**
     * The location representing this air event specified as a feature Id. Locations
     * specified include air refueling track Ids and air drop event locations.
     */
    location?: string;

    /**
     * The number of tankers requested for an air refueling event.
     */
    numTankers?: number;

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
     * The scheduled arrival time of the aircraft at the air event, in ISO 8601 UTC
     * format with millisecond precision.
     */
    plannedArrTime?: string;

    /**
     * The scheduled departure time of the aircraft from the air event, in ISO 8601 UTC
     * format with millisecond precision.
     */
    plannedDepTime?: string;

    /**
     * Priority of this air event.
     */
    priority?: string;

    /**
     * Collection of receiver aircraft associated with this Air Event.
     */
    receivers?: Array<AirEventTupleResponseItem.Receiver>;

    /**
     * Collection of remarks associated with this Air Event.
     */
    remarks?: Array<AirEventTupleResponseItem.Remark>;

    /**
     * Flag indicating if the receiver unit has requested flying an air refueling track
     * in both directions.
     */
    revTrack?: boolean;

    /**
     * The Rendezvous Control Time is the planned time the tanker and receiver aircraft
     * will rendezvous for an en route type air refueling event, in ISO 8601 UTC
     * format, with millisecond precision.
     */
    rzct?: string;

    /**
     * Rendezvous point for the tanker and receiver during this air refueling event.
     * Possible values are AN (Anchor Nav Point), AP (Anchor Pattern), CP (Control
     * Point), ET (Entry Point), EX (Exit Point), IP (Initial Point), NC (Nav Check
     * Point).
     */
    rzPoint?: string;

    /**
     * Type of rendezvous used for this air refueling event. Possible values are BUD
     * (Buddy), EN (Enroute), GCI (Ground Control), PP (Point Parallel).
     */
    rzType?: string;

    /**
     * Flag indicating that the receiver unit has requested flying a short portion of
     * an air refueling track.
     */
    shortTrack?: boolean;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Status of this air refueling event track reservation. Receivers are responsible
     * for scheduling or reserving air refueling tracks. Possible values are A
     * (Altitude Reservation), R (Reserved), or Q (Questionable).
     */
    statusCode?: string;

    /**
     * Collection of tanker aircraft associated with this Air Event.
     */
    tankers?: Array<AirEventTupleResponseItem.Tanker>;

    /**
     * Length of time the receiver unit has requested for an air event, in hours.
     */
    trackTime?: number;

    /**
     * Time the row was updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  export namespace AirEventTupleResponseItem {
    /**
     * Collection of receiver aircraft associated with this Air Event.
     */
    export interface Receiver {
      /**
       * Alternate mission identifier of this receiver provided by source.
       */
      altReceiverMissionId?: string;

      /**
       * The Air Mobility Command (AMC) mission identifier of this receiver.
       */
      amcReceiverMissionId?: string;

      /**
       * Optional receiver identifier from external systems. This field has no meaning
       * within UDL and is provided as a convenience for systems that require tracking of
       * an internal system generated ID.
       */
      externalReceiverId?: string;

      /**
       * Total weight of the fuel transferred to this receiver during an air refueling
       * event, in pounds.
       */
      fuelOn?: number;

      /**
       * The UDL ID of the airfield this receiver is associated with for this event.
       */
      idReceiverAirfield?: string;

      /**
       * The UDL ID of the mission this receiver is associated with for this event.
       */
      idReceiverMission?: string;

      /**
       * The UDL ID of the aircraft sortie this receiver is associated with for this
       * event.
       */
      idReceiverSortie?: string;

      /**
       * Number of aircraft contained within one receiver coordination record for an air
       * refueling event.
       */
      numRecAircraft?: number;

      /**
       * The package identifier for the receiver in an air refueling event.
       */
      packageId?: string;

      /**
       * The call sign assigned to this receiver.
       */
      receiverCallSign?: string;

      /**
       * Position of this receiver within a group of receivers in an air refueling event.
       */
      receiverCellPosition?: number;

      /**
       * Coordination record identifier of this receiver.
       */
      receiverCoord?: string;

      /**
       * Type of fuel delivery method used by the receiver during an air refueling event
       * (BOOM, DROGUE, BOTH).
       */
      receiverDeliveryMethod?: string;

      /**
       * Location the receiver is deployed to for an air refueling event.
       */
      receiverDeployedICAO?: string;

      /**
       * Name of the receiver exercise associated with an air refueling event.
       */
      receiverExercise?: string;

      /**
       * Type of fuel being transferred to the receiver in an air refueling event.
       */
      receiverFuelType?: string;

      /**
       * Identifies the itinerary point of a mission that this receiver is linked to.
       */
      receiverLegNum?: number;

      /**
       * The Model Design Series designation of this receiver.
       */
      receiverMDS?: string;

      /**
       * The wing or unit that owns this receiver.
       */
      receiverOwner?: string;

      /**
       * The name and/or number of the point of contact for this receiver.
       */
      receiverPOC?: string;

      /**
       * The major command level (MAJCOM) or foreign military sales (FMS) name of the
       * receiver's organization. The tanker flying hours used for an air refueling event
       * are logged against the receiver MAJCOM or foreign government being supported.
       */
      recOrg?: string;

      /**
       * Indicates the unique number by Unit ID, which identifies an air refueling event.
       */
      sequenceNum?: string;
    }

    /**
     * Collection of remarks associated with this Air Event.
     */
    export interface Remark {
      /**
       * Date the remark was published, in ISO 8601 UTC format, with millisecond
       * precision.
       */
      date?: string;

      /**
       * Optional remark ID from external systems. This field has no meaning within UDL
       * and is provided as a convenience for systems that require tracking of an
       * internal system generated ID.
       */
      externalRemarkId?: string;

      /**
       * Text of the remark.
       */
      text?: string;

      /**
       * User who published the remark.
       */
      user?: string;
    }

    /**
     * Collection of tanker aircraft associated with this Air Event.
     */
    export interface Tanker {
      /**
       * Alternate mission identifier of this tanker provided by source.
       */
      altTankerMissionId?: string;

      /**
       * The Air Mobility Command (AMC) mission identifier of this tanker.
       */
      amcTankerMissionId?: string;

      /**
       * Flag indicating that this tanker is flying a dual role mission in an air
       * refueling event.
       */
      dualRole?: boolean;

      /**
       * Optional tanker identifier from external systems. This field has no meaning
       * within UDL and is provided as a convenience for systems that require tracking of
       * an internal system generated ID.
       */
      externalTankerId?: string;

      /**
       * Total weight of the fuel transferred from this tanker during an air refueling
       * event, in pounds.
       */
      fuelOff?: number;

      /**
       * The UDL ID of the airfield this tanker is associated with for this event.
       */
      idTankerAirfield?: string;

      /**
       * The UDL ID of the mission this tanker is associated with for this event.
       */
      idTankerMission?: string;

      /**
       * The UDL ID of the aircraft sortie this tanker is associated with for this event.
       */
      idTankerSortie?: string;

      /**
       * The call sign assigned to this tanker.
       */
      tankerCallSign?: string;

      /**
       * Position of this tanker within a group of tankers in an air refueling event.
       */
      tankerCellPosition?: number;

      /**
       * Coordination record identifier of this tanker.
       */
      tankerCoord?: string;

      /**
       * Type of fuel delivery method used by the tanker during an air refueling event
       * (BOOM, DROGUE, BOTH).
       */
      tankerDeliveryMethod?: string;

      /**
       * Location the tanker has been deployed to in preparation for an air refueling
       * event.
       */
      tankerDeployedICAO?: string;

      /**
       * Type of fuel being transferred from the tanker in an air refueling event.
       */
      tankerFuelType?: string;

      /**
       * Identifies the itinerary point of a mission that this tanker is linked to.
       */
      tankerLegNum?: number;

      /**
       * The Model Design Series designation of this tanker.
       */
      tankerMDS?: string;

      /**
       * The wing or unit that owns this tanker.
       */
      tankerOwner?: string;

      /**
       * The name and/or number of the point of contact for this tanker.
       */
      tankerPOC?: string;
    }
  }
}

export interface AirEventCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Type of air event (e.g. FUEL TRANSFER, AIR DROP, etc).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The actual arrival time of the aircraft at the air event, in ISO 8601 UTC format
   * with millisecond precision.
   */
  actualArrTime?: string;

  /**
   * The actual departure time of the aircraft from the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  actualDepTime?: string;

  /**
   * The Air Refueling Control Time is the planned time the tanker aircraft will
   * transfer fuel to the receiver aircraft, in ISO 8601 UTC format, with millisecond
   * precision.
   */
  arct?: string;

  /**
   * Type of process used by AMC to schedule this air refueling event. Possible
   * values are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched
   * Theater Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S
   * (Soft Air Refueling), T (Matched Theater Operation Short Notice (Theater
   * Assets)), V (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short
   * Notice (AMC Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z
   * (Other Air Refueling).
   */
  arEventType?: string;

  /**
   * The purpose of the air event at the arrival location. Can be either descriptive
   * text such as 'fuel onload' or a purpose code specified by the provider, such as
   * 'A'.
   */
  arrPurpose?: string;

  /**
   * Identifier of the air refueling track, if applicable.
   */
  arTrackId?: string;

  /**
   * Name of the air refueling track, if applicable.
   */
  arTrackName?: string;

  /**
   * Altitude of this air event, in feet.
   */
  baseAlt?: number;

  /**
   * Flag indicating that this air refueling event has been cancelled.
   */
  cancelled?: boolean;

  /**
   * The purpose of the air event at the departure location. Can be either
   * descriptive text such as 'fuel onload' or a purpose code specified by the
   * provider, such as 'A'.
   */
  depPurpose?: string;

  /**
   * The current estimated arrival time of the aircraft at the air event, in ISO 8601
   * UTC format with millisecond precision.
   */
  estArrTime?: string;

  /**
   * The current estimated departure time of the aircraft from the air event, in ISO
   * 8601 UTC format with millisecond precision.
   */
  estDepTime?: string;

  /**
   * Optional air event ID from external systems. This field has no meaning within
   * UDL and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalAirEventId?: string;

  /**
   * Optional air refueling track ID from external systems. This field has no meaning
   * within UDL and is provided as a convenience for systems that require tracking of
   * an internal system generated ID.
   */
  externalARTrackId?: string;

  /**
   * The UDL unique identifier of the mission associated with this air event.
   */
  idMission?: string;

  /**
   * The UDL unique identifier of the sortie associated with this air event.
   */
  idSortie?: string;

  /**
   * Identifies the Itinerary point of a sortie where an air event occurs.
   */
  legNum?: number;

  /**
   * The location representing this air event specified as a feature Id. Locations
   * specified include air refueling track Ids and air drop event locations.
   */
  location?: string;

  /**
   * The number of tankers requested for an air refueling event.
   */
  numTankers?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The scheduled arrival time of the aircraft at the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  plannedArrTime?: string;

  /**
   * The scheduled departure time of the aircraft from the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  plannedDepTime?: string;

  /**
   * Priority of this air event.
   */
  priority?: string;

  /**
   * Collection of receiver aircraft associated with this Air Event.
   */
  receivers?: Array<AirEventCreateParams.Receiver>;

  /**
   * Collection of remarks associated with this Air Event.
   */
  remarks?: Array<AirEventCreateParams.Remark>;

  /**
   * Flag indicating if the receiver unit has requested flying an air refueling track
   * in both directions.
   */
  revTrack?: boolean;

  /**
   * The Rendezvous Control Time is the planned time the tanker and receiver aircraft
   * will rendezvous for an en route type air refueling event, in ISO 8601 UTC
   * format, with millisecond precision.
   */
  rzct?: string;

  /**
   * Rendezvous point for the tanker and receiver during this air refueling event.
   * Possible values are AN (Anchor Nav Point), AP (Anchor Pattern), CP (Control
   * Point), ET (Entry Point), EX (Exit Point), IP (Initial Point), NC (Nav Check
   * Point).
   */
  rzPoint?: string;

  /**
   * Type of rendezvous used for this air refueling event. Possible values are BUD
   * (Buddy), EN (Enroute), GCI (Ground Control), PP (Point Parallel).
   */
  rzType?: string;

  /**
   * Flag indicating that the receiver unit has requested flying a short portion of
   * an air refueling track.
   */
  shortTrack?: boolean;

  /**
   * Status of this air refueling event track reservation. Receivers are responsible
   * for scheduling or reserving air refueling tracks. Possible values are A
   * (Altitude Reservation), R (Reserved), or Q (Questionable).
   */
  statusCode?: string;

  /**
   * Collection of tanker aircraft associated with this Air Event.
   */
  tankers?: Array<AirEventCreateParams.Tanker>;

  /**
   * Length of time the receiver unit has requested for an air event, in hours.
   */
  trackTime?: number;
}

export namespace AirEventCreateParams {
  /**
   * Collection of receiver aircraft associated with this Air Event.
   */
  export interface Receiver {
    /**
     * Alternate mission identifier of this receiver provided by source.
     */
    altReceiverMissionId?: string;

    /**
     * The Air Mobility Command (AMC) mission identifier of this receiver.
     */
    amcReceiverMissionId?: string;

    /**
     * Optional receiver identifier from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalReceiverId?: string;

    /**
     * Total weight of the fuel transferred to this receiver during an air refueling
     * event, in pounds.
     */
    fuelOn?: number;

    /**
     * The UDL ID of the airfield this receiver is associated with for this event.
     */
    idReceiverAirfield?: string;

    /**
     * The UDL ID of the mission this receiver is associated with for this event.
     */
    idReceiverMission?: string;

    /**
     * The UDL ID of the aircraft sortie this receiver is associated with for this
     * event.
     */
    idReceiverSortie?: string;

    /**
     * Number of aircraft contained within one receiver coordination record for an air
     * refueling event.
     */
    numRecAircraft?: number;

    /**
     * The package identifier for the receiver in an air refueling event.
     */
    packageId?: string;

    /**
     * The call sign assigned to this receiver.
     */
    receiverCallSign?: string;

    /**
     * Position of this receiver within a group of receivers in an air refueling event.
     */
    receiverCellPosition?: number;

    /**
     * Coordination record identifier of this receiver.
     */
    receiverCoord?: string;

    /**
     * Type of fuel delivery method used by the receiver during an air refueling event
     * (BOOM, DROGUE, BOTH).
     */
    receiverDeliveryMethod?: string;

    /**
     * Location the receiver is deployed to for an air refueling event.
     */
    receiverDeployedICAO?: string;

    /**
     * Name of the receiver exercise associated with an air refueling event.
     */
    receiverExercise?: string;

    /**
     * Type of fuel being transferred to the receiver in an air refueling event.
     */
    receiverFuelType?: string;

    /**
     * Identifies the itinerary point of a mission that this receiver is linked to.
     */
    receiverLegNum?: number;

    /**
     * The Model Design Series designation of this receiver.
     */
    receiverMDS?: string;

    /**
     * The wing or unit that owns this receiver.
     */
    receiverOwner?: string;

    /**
     * The name and/or number of the point of contact for this receiver.
     */
    receiverPOC?: string;

    /**
     * The major command level (MAJCOM) or foreign military sales (FMS) name of the
     * receiver's organization. The tanker flying hours used for an air refueling event
     * are logged against the receiver MAJCOM or foreign government being supported.
     */
    recOrg?: string;

    /**
     * Indicates the unique number by Unit ID, which identifies an air refueling event.
     */
    sequenceNum?: string;
  }

  /**
   * Collection of remarks associated with this Air Event.
   */
  export interface Remark {
    /**
     * Date the remark was published, in ISO 8601 UTC format, with millisecond
     * precision.
     */
    date?: string;

    /**
     * Optional remark ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalRemarkId?: string;

    /**
     * Text of the remark.
     */
    text?: string;

    /**
     * User who published the remark.
     */
    user?: string;
  }

  /**
   * Collection of tanker aircraft associated with this Air Event.
   */
  export interface Tanker {
    /**
     * Alternate mission identifier of this tanker provided by source.
     */
    altTankerMissionId?: string;

    /**
     * The Air Mobility Command (AMC) mission identifier of this tanker.
     */
    amcTankerMissionId?: string;

    /**
     * Flag indicating that this tanker is flying a dual role mission in an air
     * refueling event.
     */
    dualRole?: boolean;

    /**
     * Optional tanker identifier from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalTankerId?: string;

    /**
     * Total weight of the fuel transferred from this tanker during an air refueling
     * event, in pounds.
     */
    fuelOff?: number;

    /**
     * The UDL ID of the airfield this tanker is associated with for this event.
     */
    idTankerAirfield?: string;

    /**
     * The UDL ID of the mission this tanker is associated with for this event.
     */
    idTankerMission?: string;

    /**
     * The UDL ID of the aircraft sortie this tanker is associated with for this event.
     */
    idTankerSortie?: string;

    /**
     * The call sign assigned to this tanker.
     */
    tankerCallSign?: string;

    /**
     * Position of this tanker within a group of tankers in an air refueling event.
     */
    tankerCellPosition?: number;

    /**
     * Coordination record identifier of this tanker.
     */
    tankerCoord?: string;

    /**
     * Type of fuel delivery method used by the tanker during an air refueling event
     * (BOOM, DROGUE, BOTH).
     */
    tankerDeliveryMethod?: string;

    /**
     * Location the tanker has been deployed to in preparation for an air refueling
     * event.
     */
    tankerDeployedICAO?: string;

    /**
     * Type of fuel being transferred from the tanker in an air refueling event.
     */
    tankerFuelType?: string;

    /**
     * Identifies the itinerary point of a mission that this tanker is linked to.
     */
    tankerLegNum?: number;

    /**
     * The Model Design Series designation of this tanker.
     */
    tankerMDS?: string;

    /**
     * The wing or unit that owns this tanker.
     */
    tankerOwner?: string;

    /**
     * The name and/or number of the point of contact for this tanker.
     */
    tankerPOC?: string;
  }
}

export interface AirEventUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Type of air event (e.g. FUEL TRANSFER, AIR DROP, etc).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  body_id?: string;

  /**
   * The actual arrival time of the aircraft at the air event, in ISO 8601 UTC format
   * with millisecond precision.
   */
  actualArrTime?: string;

  /**
   * The actual departure time of the aircraft from the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  actualDepTime?: string;

  /**
   * The Air Refueling Control Time is the planned time the tanker aircraft will
   * transfer fuel to the receiver aircraft, in ISO 8601 UTC format, with millisecond
   * precision.
   */
  arct?: string;

  /**
   * Type of process used by AMC to schedule this air refueling event. Possible
   * values are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched
   * Theater Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S
   * (Soft Air Refueling), T (Matched Theater Operation Short Notice (Theater
   * Assets)), V (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short
   * Notice (AMC Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z
   * (Other Air Refueling).
   */
  arEventType?: string;

  /**
   * The purpose of the air event at the arrival location. Can be either descriptive
   * text such as 'fuel onload' or a purpose code specified by the provider, such as
   * 'A'.
   */
  arrPurpose?: string;

  /**
   * Identifier of the air refueling track, if applicable.
   */
  arTrackId?: string;

  /**
   * Name of the air refueling track, if applicable.
   */
  arTrackName?: string;

  /**
   * Altitude of this air event, in feet.
   */
  baseAlt?: number;

  /**
   * Flag indicating that this air refueling event has been cancelled.
   */
  cancelled?: boolean;

  /**
   * The purpose of the air event at the departure location. Can be either
   * descriptive text such as 'fuel onload' or a purpose code specified by the
   * provider, such as 'A'.
   */
  depPurpose?: string;

  /**
   * The current estimated arrival time of the aircraft at the air event, in ISO 8601
   * UTC format with millisecond precision.
   */
  estArrTime?: string;

  /**
   * The current estimated departure time of the aircraft from the air event, in ISO
   * 8601 UTC format with millisecond precision.
   */
  estDepTime?: string;

  /**
   * Optional air event ID from external systems. This field has no meaning within
   * UDL and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalAirEventId?: string;

  /**
   * Optional air refueling track ID from external systems. This field has no meaning
   * within UDL and is provided as a convenience for systems that require tracking of
   * an internal system generated ID.
   */
  externalARTrackId?: string;

  /**
   * The UDL unique identifier of the mission associated with this air event.
   */
  idMission?: string;

  /**
   * The UDL unique identifier of the sortie associated with this air event.
   */
  idSortie?: string;

  /**
   * Identifies the Itinerary point of a sortie where an air event occurs.
   */
  legNum?: number;

  /**
   * The location representing this air event specified as a feature Id. Locations
   * specified include air refueling track Ids and air drop event locations.
   */
  location?: string;

  /**
   * The number of tankers requested for an air refueling event.
   */
  numTankers?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The scheduled arrival time of the aircraft at the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  plannedArrTime?: string;

  /**
   * The scheduled departure time of the aircraft from the air event, in ISO 8601 UTC
   * format with millisecond precision.
   */
  plannedDepTime?: string;

  /**
   * Priority of this air event.
   */
  priority?: string;

  /**
   * Collection of receiver aircraft associated with this Air Event.
   */
  receivers?: Array<AirEventUpdateParams.Receiver>;

  /**
   * Collection of remarks associated with this Air Event.
   */
  remarks?: Array<AirEventUpdateParams.Remark>;

  /**
   * Flag indicating if the receiver unit has requested flying an air refueling track
   * in both directions.
   */
  revTrack?: boolean;

  /**
   * The Rendezvous Control Time is the planned time the tanker and receiver aircraft
   * will rendezvous for an en route type air refueling event, in ISO 8601 UTC
   * format, with millisecond precision.
   */
  rzct?: string;

  /**
   * Rendezvous point for the tanker and receiver during this air refueling event.
   * Possible values are AN (Anchor Nav Point), AP (Anchor Pattern), CP (Control
   * Point), ET (Entry Point), EX (Exit Point), IP (Initial Point), NC (Nav Check
   * Point).
   */
  rzPoint?: string;

  /**
   * Type of rendezvous used for this air refueling event. Possible values are BUD
   * (Buddy), EN (Enroute), GCI (Ground Control), PP (Point Parallel).
   */
  rzType?: string;

  /**
   * Flag indicating that the receiver unit has requested flying a short portion of
   * an air refueling track.
   */
  shortTrack?: boolean;

  /**
   * Status of this air refueling event track reservation. Receivers are responsible
   * for scheduling or reserving air refueling tracks. Possible values are A
   * (Altitude Reservation), R (Reserved), or Q (Questionable).
   */
  statusCode?: string;

  /**
   * Collection of tanker aircraft associated with this Air Event.
   */
  tankers?: Array<AirEventUpdateParams.Tanker>;

  /**
   * Length of time the receiver unit has requested for an air event, in hours.
   */
  trackTime?: number;
}

export namespace AirEventUpdateParams {
  /**
   * Collection of receiver aircraft associated with this Air Event.
   */
  export interface Receiver {
    /**
     * Alternate mission identifier of this receiver provided by source.
     */
    altReceiverMissionId?: string;

    /**
     * The Air Mobility Command (AMC) mission identifier of this receiver.
     */
    amcReceiverMissionId?: string;

    /**
     * Optional receiver identifier from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalReceiverId?: string;

    /**
     * Total weight of the fuel transferred to this receiver during an air refueling
     * event, in pounds.
     */
    fuelOn?: number;

    /**
     * The UDL ID of the airfield this receiver is associated with for this event.
     */
    idReceiverAirfield?: string;

    /**
     * The UDL ID of the mission this receiver is associated with for this event.
     */
    idReceiverMission?: string;

    /**
     * The UDL ID of the aircraft sortie this receiver is associated with for this
     * event.
     */
    idReceiverSortie?: string;

    /**
     * Number of aircraft contained within one receiver coordination record for an air
     * refueling event.
     */
    numRecAircraft?: number;

    /**
     * The package identifier for the receiver in an air refueling event.
     */
    packageId?: string;

    /**
     * The call sign assigned to this receiver.
     */
    receiverCallSign?: string;

    /**
     * Position of this receiver within a group of receivers in an air refueling event.
     */
    receiverCellPosition?: number;

    /**
     * Coordination record identifier of this receiver.
     */
    receiverCoord?: string;

    /**
     * Type of fuel delivery method used by the receiver during an air refueling event
     * (BOOM, DROGUE, BOTH).
     */
    receiverDeliveryMethod?: string;

    /**
     * Location the receiver is deployed to for an air refueling event.
     */
    receiverDeployedICAO?: string;

    /**
     * Name of the receiver exercise associated with an air refueling event.
     */
    receiverExercise?: string;

    /**
     * Type of fuel being transferred to the receiver in an air refueling event.
     */
    receiverFuelType?: string;

    /**
     * Identifies the itinerary point of a mission that this receiver is linked to.
     */
    receiverLegNum?: number;

    /**
     * The Model Design Series designation of this receiver.
     */
    receiverMDS?: string;

    /**
     * The wing or unit that owns this receiver.
     */
    receiverOwner?: string;

    /**
     * The name and/or number of the point of contact for this receiver.
     */
    receiverPOC?: string;

    /**
     * The major command level (MAJCOM) or foreign military sales (FMS) name of the
     * receiver's organization. The tanker flying hours used for an air refueling event
     * are logged against the receiver MAJCOM or foreign government being supported.
     */
    recOrg?: string;

    /**
     * Indicates the unique number by Unit ID, which identifies an air refueling event.
     */
    sequenceNum?: string;
  }

  /**
   * Collection of remarks associated with this Air Event.
   */
  export interface Remark {
    /**
     * Date the remark was published, in ISO 8601 UTC format, with millisecond
     * precision.
     */
    date?: string;

    /**
     * Optional remark ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalRemarkId?: string;

    /**
     * Text of the remark.
     */
    text?: string;

    /**
     * User who published the remark.
     */
    user?: string;
  }

  /**
   * Collection of tanker aircraft associated with this Air Event.
   */
  export interface Tanker {
    /**
     * Alternate mission identifier of this tanker provided by source.
     */
    altTankerMissionId?: string;

    /**
     * The Air Mobility Command (AMC) mission identifier of this tanker.
     */
    amcTankerMissionId?: string;

    /**
     * Flag indicating that this tanker is flying a dual role mission in an air
     * refueling event.
     */
    dualRole?: boolean;

    /**
     * Optional tanker identifier from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalTankerId?: string;

    /**
     * Total weight of the fuel transferred from this tanker during an air refueling
     * event, in pounds.
     */
    fuelOff?: number;

    /**
     * The UDL ID of the airfield this tanker is associated with for this event.
     */
    idTankerAirfield?: string;

    /**
     * The UDL ID of the mission this tanker is associated with for this event.
     */
    idTankerMission?: string;

    /**
     * The UDL ID of the aircraft sortie this tanker is associated with for this event.
     */
    idTankerSortie?: string;

    /**
     * The call sign assigned to this tanker.
     */
    tankerCallSign?: string;

    /**
     * Position of this tanker within a group of tankers in an air refueling event.
     */
    tankerCellPosition?: number;

    /**
     * Coordination record identifier of this tanker.
     */
    tankerCoord?: string;

    /**
     * Type of fuel delivery method used by the tanker during an air refueling event
     * (BOOM, DROGUE, BOTH).
     */
    tankerDeliveryMethod?: string;

    /**
     * Location the tanker has been deployed to in preparation for an air refueling
     * event.
     */
    tankerDeployedICAO?: string;

    /**
     * Type of fuel being transferred from the tanker in an air refueling event.
     */
    tankerFuelType?: string;

    /**
     * Identifies the itinerary point of a mission that this tanker is linked to.
     */
    tankerLegNum?: number;

    /**
     * The Model Design Series designation of this tanker.
     */
    tankerMDS?: string;

    /**
     * The wing or unit that owns this tanker.
     */
    tankerOwner?: string;

    /**
     * The name and/or number of the point of contact for this tanker.
     */
    tankerPOC?: string;
  }
}

export interface AirEventListParams extends OffsetPageParams {}

export interface AirEventCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirEventCreateBulkParams {
  body: Array<AirEventCreateBulkParams.Body>;
}

export namespace AirEventCreateBulkParams {
  /**
   * Information related to an air event (e.g. FUEL TRANSFER, AIR DROP) and the
   * associated aircraft.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Type of air event (e.g. FUEL TRANSFER, AIR DROP, etc).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The actual arrival time of the aircraft at the air event, in ISO 8601 UTC format
     * with millisecond precision.
     */
    actualArrTime?: string;

    /**
     * The actual departure time of the aircraft from the air event, in ISO 8601 UTC
     * format with millisecond precision.
     */
    actualDepTime?: string;

    /**
     * The Air Refueling Control Time is the planned time the tanker aircraft will
     * transfer fuel to the receiver aircraft, in ISO 8601 UTC format, with millisecond
     * precision.
     */
    arct?: string;

    /**
     * Type of process used by AMC to schedule this air refueling event. Possible
     * values are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched
     * Theater Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S
     * (Soft Air Refueling), T (Matched Theater Operation Short Notice (Theater
     * Assets)), V (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short
     * Notice (AMC Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z
     * (Other Air Refueling).
     */
    arEventType?: string;

    /**
     * The purpose of the air event at the arrival location. Can be either descriptive
     * text such as 'fuel onload' or a purpose code specified by the provider, such as
     * 'A'.
     */
    arrPurpose?: string;

    /**
     * Identifier of the air refueling track, if applicable.
     */
    arTrackId?: string;

    /**
     * Name of the air refueling track, if applicable.
     */
    arTrackName?: string;

    /**
     * Altitude of this air event, in feet.
     */
    baseAlt?: number;

    /**
     * Flag indicating that this air refueling event has been cancelled.
     */
    cancelled?: boolean;

    /**
     * The purpose of the air event at the departure location. Can be either
     * descriptive text such as 'fuel onload' or a purpose code specified by the
     * provider, such as 'A'.
     */
    depPurpose?: string;

    /**
     * The current estimated arrival time of the aircraft at the air event, in ISO 8601
     * UTC format with millisecond precision.
     */
    estArrTime?: string;

    /**
     * The current estimated departure time of the aircraft from the air event, in ISO
     * 8601 UTC format with millisecond precision.
     */
    estDepTime?: string;

    /**
     * Optional air event ID from external systems. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalAirEventId?: string;

    /**
     * Optional air refueling track ID from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalARTrackId?: string;

    /**
     * The UDL unique identifier of the mission associated with this air event.
     */
    idMission?: string;

    /**
     * The UDL unique identifier of the sortie associated with this air event.
     */
    idSortie?: string;

    /**
     * Identifies the Itinerary point of a sortie where an air event occurs.
     */
    legNum?: number;

    /**
     * The location representing this air event specified as a feature Id. Locations
     * specified include air refueling track Ids and air drop event locations.
     */
    location?: string;

    /**
     * The number of tankers requested for an air refueling event.
     */
    numTankers?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The scheduled arrival time of the aircraft at the air event, in ISO 8601 UTC
     * format with millisecond precision.
     */
    plannedArrTime?: string;

    /**
     * The scheduled departure time of the aircraft from the air event, in ISO 8601 UTC
     * format with millisecond precision.
     */
    plannedDepTime?: string;

    /**
     * Priority of this air event.
     */
    priority?: string;

    /**
     * Collection of receiver aircraft associated with this Air Event.
     */
    receivers?: Array<Body.Receiver>;

    /**
     * Collection of remarks associated with this Air Event.
     */
    remarks?: Array<Body.Remark>;

    /**
     * Flag indicating if the receiver unit has requested flying an air refueling track
     * in both directions.
     */
    revTrack?: boolean;

    /**
     * The Rendezvous Control Time is the planned time the tanker and receiver aircraft
     * will rendezvous for an en route type air refueling event, in ISO 8601 UTC
     * format, with millisecond precision.
     */
    rzct?: string;

    /**
     * Rendezvous point for the tanker and receiver during this air refueling event.
     * Possible values are AN (Anchor Nav Point), AP (Anchor Pattern), CP (Control
     * Point), ET (Entry Point), EX (Exit Point), IP (Initial Point), NC (Nav Check
     * Point).
     */
    rzPoint?: string;

    /**
     * Type of rendezvous used for this air refueling event. Possible values are BUD
     * (Buddy), EN (Enroute), GCI (Ground Control), PP (Point Parallel).
     */
    rzType?: string;

    /**
     * Flag indicating that the receiver unit has requested flying a short portion of
     * an air refueling track.
     */
    shortTrack?: boolean;

    /**
     * Status of this air refueling event track reservation. Receivers are responsible
     * for scheduling or reserving air refueling tracks. Possible values are A
     * (Altitude Reservation), R (Reserved), or Q (Questionable).
     */
    statusCode?: string;

    /**
     * Collection of tanker aircraft associated with this Air Event.
     */
    tankers?: Array<Body.Tanker>;

    /**
     * Length of time the receiver unit has requested for an air event, in hours.
     */
    trackTime?: number;
  }

  export namespace Body {
    /**
     * Collection of receiver aircraft associated with this Air Event.
     */
    export interface Receiver {
      /**
       * Alternate mission identifier of this receiver provided by source.
       */
      altReceiverMissionId?: string;

      /**
       * The Air Mobility Command (AMC) mission identifier of this receiver.
       */
      amcReceiverMissionId?: string;

      /**
       * Optional receiver identifier from external systems. This field has no meaning
       * within UDL and is provided as a convenience for systems that require tracking of
       * an internal system generated ID.
       */
      externalReceiverId?: string;

      /**
       * Total weight of the fuel transferred to this receiver during an air refueling
       * event, in pounds.
       */
      fuelOn?: number;

      /**
       * The UDL ID of the airfield this receiver is associated with for this event.
       */
      idReceiverAirfield?: string;

      /**
       * The UDL ID of the mission this receiver is associated with for this event.
       */
      idReceiverMission?: string;

      /**
       * The UDL ID of the aircraft sortie this receiver is associated with for this
       * event.
       */
      idReceiverSortie?: string;

      /**
       * Number of aircraft contained within one receiver coordination record for an air
       * refueling event.
       */
      numRecAircraft?: number;

      /**
       * The package identifier for the receiver in an air refueling event.
       */
      packageId?: string;

      /**
       * The call sign assigned to this receiver.
       */
      receiverCallSign?: string;

      /**
       * Position of this receiver within a group of receivers in an air refueling event.
       */
      receiverCellPosition?: number;

      /**
       * Coordination record identifier of this receiver.
       */
      receiverCoord?: string;

      /**
       * Type of fuel delivery method used by the receiver during an air refueling event
       * (BOOM, DROGUE, BOTH).
       */
      receiverDeliveryMethod?: string;

      /**
       * Location the receiver is deployed to for an air refueling event.
       */
      receiverDeployedICAO?: string;

      /**
       * Name of the receiver exercise associated with an air refueling event.
       */
      receiverExercise?: string;

      /**
       * Type of fuel being transferred to the receiver in an air refueling event.
       */
      receiverFuelType?: string;

      /**
       * Identifies the itinerary point of a mission that this receiver is linked to.
       */
      receiverLegNum?: number;

      /**
       * The Model Design Series designation of this receiver.
       */
      receiverMDS?: string;

      /**
       * The wing or unit that owns this receiver.
       */
      receiverOwner?: string;

      /**
       * The name and/or number of the point of contact for this receiver.
       */
      receiverPOC?: string;

      /**
       * The major command level (MAJCOM) or foreign military sales (FMS) name of the
       * receiver's organization. The tanker flying hours used for an air refueling event
       * are logged against the receiver MAJCOM or foreign government being supported.
       */
      recOrg?: string;

      /**
       * Indicates the unique number by Unit ID, which identifies an air refueling event.
       */
      sequenceNum?: string;
    }

    /**
     * Collection of remarks associated with this Air Event.
     */
    export interface Remark {
      /**
       * Date the remark was published, in ISO 8601 UTC format, with millisecond
       * precision.
       */
      date?: string;

      /**
       * Optional remark ID from external systems. This field has no meaning within UDL
       * and is provided as a convenience for systems that require tracking of an
       * internal system generated ID.
       */
      externalRemarkId?: string;

      /**
       * Text of the remark.
       */
      text?: string;

      /**
       * User who published the remark.
       */
      user?: string;
    }

    /**
     * Collection of tanker aircraft associated with this Air Event.
     */
    export interface Tanker {
      /**
       * Alternate mission identifier of this tanker provided by source.
       */
      altTankerMissionId?: string;

      /**
       * The Air Mobility Command (AMC) mission identifier of this tanker.
       */
      amcTankerMissionId?: string;

      /**
       * Flag indicating that this tanker is flying a dual role mission in an air
       * refueling event.
       */
      dualRole?: boolean;

      /**
       * Optional tanker identifier from external systems. This field has no meaning
       * within UDL and is provided as a convenience for systems that require tracking of
       * an internal system generated ID.
       */
      externalTankerId?: string;

      /**
       * Total weight of the fuel transferred from this tanker during an air refueling
       * event, in pounds.
       */
      fuelOff?: number;

      /**
       * The UDL ID of the airfield this tanker is associated with for this event.
       */
      idTankerAirfield?: string;

      /**
       * The UDL ID of the mission this tanker is associated with for this event.
       */
      idTankerMission?: string;

      /**
       * The UDL ID of the aircraft sortie this tanker is associated with for this event.
       */
      idTankerSortie?: string;

      /**
       * The call sign assigned to this tanker.
       */
      tankerCallSign?: string;

      /**
       * Position of this tanker within a group of tankers in an air refueling event.
       */
      tankerCellPosition?: number;

      /**
       * Coordination record identifier of this tanker.
       */
      tankerCoord?: string;

      /**
       * Type of fuel delivery method used by the tanker during an air refueling event
       * (BOOM, DROGUE, BOTH).
       */
      tankerDeliveryMethod?: string;

      /**
       * Location the tanker has been deployed to in preparation for an air refueling
       * event.
       */
      tankerDeployedICAO?: string;

      /**
       * Type of fuel being transferred from the tanker in an air refueling event.
       */
      tankerFuelType?: string;

      /**
       * Identifies the itinerary point of a mission that this tanker is linked to.
       */
      tankerLegNum?: number;

      /**
       * The Model Design Series designation of this tanker.
       */
      tankerMDS?: string;

      /**
       * The wing or unit that owns this tanker.
       */
      tankerOwner?: string;

      /**
       * The name and/or number of the point of contact for this tanker.
       */
      tankerPOC?: string;
    }
  }
}

export interface AirEventGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirEventTupleParams {
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

export interface AirEventUnvalidatedPublishParams {
  body: Array<AirEventUnvalidatedPublishParams.Body>;
}

export namespace AirEventUnvalidatedPublishParams {
  /**
   * Information related to an air event (e.g. FUEL TRANSFER, AIR DROP) and the
   * associated aircraft.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Type of air event (e.g. FUEL TRANSFER, AIR DROP, etc).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The actual arrival time of the aircraft at the air event, in ISO 8601 UTC format
     * with millisecond precision.
     */
    actualArrTime?: string;

    /**
     * The actual departure time of the aircraft from the air event, in ISO 8601 UTC
     * format with millisecond precision.
     */
    actualDepTime?: string;

    /**
     * The Air Refueling Control Time is the planned time the tanker aircraft will
     * transfer fuel to the receiver aircraft, in ISO 8601 UTC format, with millisecond
     * precision.
     */
    arct?: string;

    /**
     * Type of process used by AMC to schedule this air refueling event. Possible
     * values are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched
     * Theater Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S
     * (Soft Air Refueling), T (Matched Theater Operation Short Notice (Theater
     * Assets)), V (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short
     * Notice (AMC Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z
     * (Other Air Refueling).
     */
    arEventType?: string;

    /**
     * The purpose of the air event at the arrival location. Can be either descriptive
     * text such as 'fuel onload' or a purpose code specified by the provider, such as
     * 'A'.
     */
    arrPurpose?: string;

    /**
     * Identifier of the air refueling track, if applicable.
     */
    arTrackId?: string;

    /**
     * Name of the air refueling track, if applicable.
     */
    arTrackName?: string;

    /**
     * Altitude of this air event, in feet.
     */
    baseAlt?: number;

    /**
     * Flag indicating that this air refueling event has been cancelled.
     */
    cancelled?: boolean;

    /**
     * The purpose of the air event at the departure location. Can be either
     * descriptive text such as 'fuel onload' or a purpose code specified by the
     * provider, such as 'A'.
     */
    depPurpose?: string;

    /**
     * The current estimated arrival time of the aircraft at the air event, in ISO 8601
     * UTC format with millisecond precision.
     */
    estArrTime?: string;

    /**
     * The current estimated departure time of the aircraft from the air event, in ISO
     * 8601 UTC format with millisecond precision.
     */
    estDepTime?: string;

    /**
     * Optional air event ID from external systems. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalAirEventId?: string;

    /**
     * Optional air refueling track ID from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalARTrackId?: string;

    /**
     * The UDL unique identifier of the mission associated with this air event.
     */
    idMission?: string;

    /**
     * The UDL unique identifier of the sortie associated with this air event.
     */
    idSortie?: string;

    /**
     * Identifies the Itinerary point of a sortie where an air event occurs.
     */
    legNum?: number;

    /**
     * The location representing this air event specified as a feature Id. Locations
     * specified include air refueling track Ids and air drop event locations.
     */
    location?: string;

    /**
     * The number of tankers requested for an air refueling event.
     */
    numTankers?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The scheduled arrival time of the aircraft at the air event, in ISO 8601 UTC
     * format with millisecond precision.
     */
    plannedArrTime?: string;

    /**
     * The scheduled departure time of the aircraft from the air event, in ISO 8601 UTC
     * format with millisecond precision.
     */
    plannedDepTime?: string;

    /**
     * Priority of this air event.
     */
    priority?: string;

    /**
     * Collection of receiver aircraft associated with this Air Event.
     */
    receivers?: Array<Body.Receiver>;

    /**
     * Collection of remarks associated with this Air Event.
     */
    remarks?: Array<Body.Remark>;

    /**
     * Flag indicating if the receiver unit has requested flying an air refueling track
     * in both directions.
     */
    revTrack?: boolean;

    /**
     * The Rendezvous Control Time is the planned time the tanker and receiver aircraft
     * will rendezvous for an en route type air refueling event, in ISO 8601 UTC
     * format, with millisecond precision.
     */
    rzct?: string;

    /**
     * Rendezvous point for the tanker and receiver during this air refueling event.
     * Possible values are AN (Anchor Nav Point), AP (Anchor Pattern), CP (Control
     * Point), ET (Entry Point), EX (Exit Point), IP (Initial Point), NC (Nav Check
     * Point).
     */
    rzPoint?: string;

    /**
     * Type of rendezvous used for this air refueling event. Possible values are BUD
     * (Buddy), EN (Enroute), GCI (Ground Control), PP (Point Parallel).
     */
    rzType?: string;

    /**
     * Flag indicating that the receiver unit has requested flying a short portion of
     * an air refueling track.
     */
    shortTrack?: boolean;

    /**
     * Status of this air refueling event track reservation. Receivers are responsible
     * for scheduling or reserving air refueling tracks. Possible values are A
     * (Altitude Reservation), R (Reserved), or Q (Questionable).
     */
    statusCode?: string;

    /**
     * Collection of tanker aircraft associated with this Air Event.
     */
    tankers?: Array<Body.Tanker>;

    /**
     * Length of time the receiver unit has requested for an air event, in hours.
     */
    trackTime?: number;
  }

  export namespace Body {
    /**
     * Collection of receiver aircraft associated with this Air Event.
     */
    export interface Receiver {
      /**
       * Alternate mission identifier of this receiver provided by source.
       */
      altReceiverMissionId?: string;

      /**
       * The Air Mobility Command (AMC) mission identifier of this receiver.
       */
      amcReceiverMissionId?: string;

      /**
       * Optional receiver identifier from external systems. This field has no meaning
       * within UDL and is provided as a convenience for systems that require tracking of
       * an internal system generated ID.
       */
      externalReceiverId?: string;

      /**
       * Total weight of the fuel transferred to this receiver during an air refueling
       * event, in pounds.
       */
      fuelOn?: number;

      /**
       * The UDL ID of the airfield this receiver is associated with for this event.
       */
      idReceiverAirfield?: string;

      /**
       * The UDL ID of the mission this receiver is associated with for this event.
       */
      idReceiverMission?: string;

      /**
       * The UDL ID of the aircraft sortie this receiver is associated with for this
       * event.
       */
      idReceiverSortie?: string;

      /**
       * Number of aircraft contained within one receiver coordination record for an air
       * refueling event.
       */
      numRecAircraft?: number;

      /**
       * The package identifier for the receiver in an air refueling event.
       */
      packageId?: string;

      /**
       * The call sign assigned to this receiver.
       */
      receiverCallSign?: string;

      /**
       * Position of this receiver within a group of receivers in an air refueling event.
       */
      receiverCellPosition?: number;

      /**
       * Coordination record identifier of this receiver.
       */
      receiverCoord?: string;

      /**
       * Type of fuel delivery method used by the receiver during an air refueling event
       * (BOOM, DROGUE, BOTH).
       */
      receiverDeliveryMethod?: string;

      /**
       * Location the receiver is deployed to for an air refueling event.
       */
      receiverDeployedICAO?: string;

      /**
       * Name of the receiver exercise associated with an air refueling event.
       */
      receiverExercise?: string;

      /**
       * Type of fuel being transferred to the receiver in an air refueling event.
       */
      receiverFuelType?: string;

      /**
       * Identifies the itinerary point of a mission that this receiver is linked to.
       */
      receiverLegNum?: number;

      /**
       * The Model Design Series designation of this receiver.
       */
      receiverMDS?: string;

      /**
       * The wing or unit that owns this receiver.
       */
      receiverOwner?: string;

      /**
       * The name and/or number of the point of contact for this receiver.
       */
      receiverPOC?: string;

      /**
       * The major command level (MAJCOM) or foreign military sales (FMS) name of the
       * receiver's organization. The tanker flying hours used for an air refueling event
       * are logged against the receiver MAJCOM or foreign government being supported.
       */
      recOrg?: string;

      /**
       * Indicates the unique number by Unit ID, which identifies an air refueling event.
       */
      sequenceNum?: string;
    }

    /**
     * Collection of remarks associated with this Air Event.
     */
    export interface Remark {
      /**
       * Date the remark was published, in ISO 8601 UTC format, with millisecond
       * precision.
       */
      date?: string;

      /**
       * Optional remark ID from external systems. This field has no meaning within UDL
       * and is provided as a convenience for systems that require tracking of an
       * internal system generated ID.
       */
      externalRemarkId?: string;

      /**
       * Text of the remark.
       */
      text?: string;

      /**
       * User who published the remark.
       */
      user?: string;
    }

    /**
     * Collection of tanker aircraft associated with this Air Event.
     */
    export interface Tanker {
      /**
       * Alternate mission identifier of this tanker provided by source.
       */
      altTankerMissionId?: string;

      /**
       * The Air Mobility Command (AMC) mission identifier of this tanker.
       */
      amcTankerMissionId?: string;

      /**
       * Flag indicating that this tanker is flying a dual role mission in an air
       * refueling event.
       */
      dualRole?: boolean;

      /**
       * Optional tanker identifier from external systems. This field has no meaning
       * within UDL and is provided as a convenience for systems that require tracking of
       * an internal system generated ID.
       */
      externalTankerId?: string;

      /**
       * Total weight of the fuel transferred from this tanker during an air refueling
       * event, in pounds.
       */
      fuelOff?: number;

      /**
       * The UDL ID of the airfield this tanker is associated with for this event.
       */
      idTankerAirfield?: string;

      /**
       * The UDL ID of the mission this tanker is associated with for this event.
       */
      idTankerMission?: string;

      /**
       * The UDL ID of the aircraft sortie this tanker is associated with for this event.
       */
      idTankerSortie?: string;

      /**
       * The call sign assigned to this tanker.
       */
      tankerCallSign?: string;

      /**
       * Position of this tanker within a group of tankers in an air refueling event.
       */
      tankerCellPosition?: number;

      /**
       * Coordination record identifier of this tanker.
       */
      tankerCoord?: string;

      /**
       * Type of fuel delivery method used by the tanker during an air refueling event
       * (BOOM, DROGUE, BOTH).
       */
      tankerDeliveryMethod?: string;

      /**
       * Location the tanker has been deployed to in preparation for an air refueling
       * event.
       */
      tankerDeployedICAO?: string;

      /**
       * Type of fuel being transferred from the tanker in an air refueling event.
       */
      tankerFuelType?: string;

      /**
       * Identifies the itinerary point of a mission that this tanker is linked to.
       */
      tankerLegNum?: number;

      /**
       * The Model Design Series designation of this tanker.
       */
      tankerMDS?: string;

      /**
       * The wing or unit that owns this tanker.
       */
      tankerOwner?: string;

      /**
       * The name and/or number of the point of contact for this tanker.
       */
      tankerPOC?: string;
    }
  }
}

export declare namespace AirEvents {
  export {
    type AirEventListResponse as AirEventListResponse,
    type AirEventCountResponse as AirEventCountResponse,
    type AirEventGetResponse as AirEventGetResponse,
    type AirEventQueryhelpResponse as AirEventQueryhelpResponse,
    type AirEventTupleResponse as AirEventTupleResponse,
    type AirEventListResponsesOffsetPage as AirEventListResponsesOffsetPage,
    type AirEventCreateParams as AirEventCreateParams,
    type AirEventUpdateParams as AirEventUpdateParams,
    type AirEventListParams as AirEventListParams,
    type AirEventCountParams as AirEventCountParams,
    type AirEventCreateBulkParams as AirEventCreateBulkParams,
    type AirEventGetParams as AirEventGetParams,
    type AirEventTupleParams as AirEventTupleParams,
    type AirEventUnvalidatedPublishParams as AirEventUnvalidatedPublishParams,
  };
}
