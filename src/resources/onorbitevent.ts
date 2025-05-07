// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Onorbitevent extends APIResource {
  /**
   * Service operation to take a single OnorbitEvent as a POST body and ingest into
   * the database. An OnorbitEvent is an event associated with a particular on-orbit
   * spacecraft including insurance related losses, anomalies and incidents. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitevent.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   eventTime: '2018-01-01T16:00:00.123Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: OnorbiteventCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/onorbitevent', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single OnorbitEvent. An OnorbitEvent is an event
   * associated with a particular on-orbit spacecraft including insurance related
   * losses, anomalies and incidents. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitevent.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   eventTime: '2018-01-01T16:00:00.123Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: OnorbiteventUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/onorbitevent/${pathID}`, {
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
   * for await (const onorbiteventListResponse of client.onorbitevent.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OnorbiteventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OnorbiteventListResponsesOffsetPage, OnorbiteventListResponse> {
    return this._client.getAPIList('/udl/onorbitevent', OffsetPage<OnorbiteventListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a OnorbitEvent object specified by the passed ID
   * path parameter. An OnorbitEvent is an event associated with a particular
   * on-orbit spacecraft including insurance related losses, anomalies and incidents.
   * A specific role is required to perform this service operation. Please contact
   * the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitevent.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/onorbitevent/${id}`, {
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
   * const response = await client.onorbitevent.count();
   * ```
   */
  count(
    query: OnorbiteventCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/onorbitevent/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OnorbitEvent record by its unique ID passed as
   * a path parameter. An OnorbitEvent is an event associated with a particular
   * on-orbit spacecraft including insurance related losses, anomalies and incidents.
   *
   * @example
   * ```ts
   * const onorbitevent = await client.onorbitevent.get('id');
   * ```
   */
  get(
    id: string,
    query: OnorbiteventGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OnorbiteventGetResponse> {
    return this._client.get(path`/udl/onorbitevent/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * await client.onorbitevent.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/onorbitevent/queryhelp', {
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
   * const response = await client.onorbitevent.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: OnorbiteventTupleParams, options?: RequestOptions): APIPromise<OnorbiteventTupleResponse> {
    return this._client.get('/udl/onorbitevent/tuple', { query, ...options });
  }
}

export type OnorbiteventListResponsesOffsetPage = OffsetPage<OnorbiteventListResponse>;

export interface OnorbiteventListResponse {
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
   * Date/Time of the event. See eventTimeNotes for remarks on the accuracy of the
   * date time.
   */
  eventTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Achieved phase of flight prior to the event.
   */
  achievedFlightPhase?: string;

  /**
   * Spacecraft age at the event in years.
   */
  ageAtEvent?: number;

  /**
   * Spacecraft capability loss incurred, as a fraction of 1.
   */
  capabilityLoss?: number;

  /**
   * Notes on capability loss at the time of event.
   */
  capabilityLossNotes?: string;

  /**
   * Spacecraft capacity loss incurred, as a fraction of 1.
   */
  capacityLoss?: number;

  /**
   * Additional equipment which failed as a result of faulty equipment on the
   * spacecraft during the event.
   */
  consequentialEquipmentFailure?: string;

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
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Notes/description of the event.
   */
  description?: string;

  /**
   * Equipment on the spacecraft which caused the event.
   */
  equipmentAtFault?: string;

  /**
   * Additional notes on the equipment causing the event/loss.
   */
  equipmentCausingLossNotes?: string;

  /**
   * Specific part of the equipment on the spacecraft which caused the event.
   */
  equipmentPartAtFault?: string;

  /**
   * Type of the equipment on the spacecraft which caused the event.
   */
  equipmentTypeAtFault?: string;

  /**
   * The result of the reported event.
   */
  eventResult?: string;

  /**
   * Notes/remarks on the validity/accuracy of the eventTime.
   */
  eventTimeNotes?: string;

  /**
   * The type of on-orbit event being reported.
   */
  eventType?: string;

  /**
   * GEO position longitude at event time if applicable. Negative values are west.
   */
  geoPosition?: number;

  /**
   * Unique identifier of the on-orbit object for this event.
   */
  idOnOrbit?: string;

  /**
   * Boolean indicating if the spacecraft is inclined.
   */
  inclined?: boolean;

  /**
   * Number of humans injured in the event.
   */
  injured?: number;

  /**
   * Additional insurance notes on coverages at the time of event.
   */
  insuranceCarriedNotes?: string;

  /**
   * Insurance loss incurred, as a fraction of 1.
   */
  insuranceLoss?: number;

  /**
   * Additional insurance notes if the event is an official loss.
   */
  insuranceLossNotes?: string;

  /**
   * Number of humans killed in the event.
   */
  killed?: number;

  /**
   * Unique identifier of the organization which leases this on-orbit spacecraft.
   */
  lesseeOrgId?: string;

  /**
   * Spacecraft life lost due to the event as a percent/fraction of 1.
   */
  lifeLost?: number;

  /**
   * Net amount of the insurance claim for the event, in USD.
   */
  netAmount?: number;

  /**
   * The status of the on-orbit object.
   */
  objectStatus?: string;

  /**
   * Phase of flight during which the event occurred.
   */
  occurrenceFlightPhase?: string;

  /**
   * Date time of official loss of the spacecraft.
   */
  officialLossDate?: string;

  /**
   * Unique identifier of the organization on whose behalf the on-orbit spacecraft is
   * operated.
   */
  operatedOnBehalfOfOrgId?: string;

  /**
   * Organization ID of the operator of the on-orbit spacecraft at the time of the
   * event.
   */
  operatorOrgId?: string;

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
   * Original object ID or Catalog Number provided by source (may not map to an
   * existing idOnOrbit in UDL).
   */
  origObjectId?: string;

  /**
   * Organization ID of the owner of the on-orbit spacecraft at the time of the
   * event.
   */
  ownerOrgId?: string;

  /**
   * GEO slot plane number/designator of the spacecraft at event time.
   */
  planeNumber?: string;

  /**
   * GEO plane slot of the spacecraft at event time.
   */
  planeSlot?: string;

  /**
   * Position status of the spacecraft at event time (e.g. Stable, Drifting/Tumbling,
   * etc).
   */
  positionStatus?: string;

  /**
   * Additional remarks on the event description.
   */
  remarks?: string;

  /**
   * Description of the satellite orbital position or regime.
   */
  satellitePosition?: string;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Faulty stage of flight for the event.
   */
  stageAtFault?: string;

  /**
   * Insurance loss incurred by 3rd party insurance, in USD.
   */
  thirdPartyInsuranceLoss?: number;

  /**
   * Underlying cause of the event.
   */
  underlyingCause?: string;

  /**
   * Maximum validity time of the event.
   */
  untilTime?: string;
}

export type OnorbiteventCountResponse = string;

export interface OnorbiteventGetResponse {
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
   * Date/Time of the event. See eventTimeNotes for remarks on the accuracy of the
   * date time.
   */
  eventTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Achieved phase of flight prior to the event.
   */
  achievedFlightPhase?: string;

  /**
   * Spacecraft age at the event in years.
   */
  ageAtEvent?: number;

  /**
   * Spacecraft capability loss incurred, as a fraction of 1.
   */
  capabilityLoss?: number;

  /**
   * Notes on capability loss at the time of event.
   */
  capabilityLossNotes?: string;

  /**
   * Spacecraft capacity loss incurred, as a fraction of 1.
   */
  capacityLoss?: number;

  /**
   * Additional equipment which failed as a result of faulty equipment on the
   * spacecraft during the event.
   */
  consequentialEquipmentFailure?: string;

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
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Notes/description of the event.
   */
  description?: string;

  /**
   * Equipment on the spacecraft which caused the event.
   */
  equipmentAtFault?: string;

  /**
   * Additional notes on the equipment causing the event/loss.
   */
  equipmentCausingLossNotes?: string;

  /**
   * Specific part of the equipment on the spacecraft which caused the event.
   */
  equipmentPartAtFault?: string;

  /**
   * Type of the equipment on the spacecraft which caused the event.
   */
  equipmentTypeAtFault?: string;

  /**
   * The result of the reported event.
   */
  eventResult?: string;

  /**
   * Notes/remarks on the validity/accuracy of the eventTime.
   */
  eventTimeNotes?: string;

  /**
   * The type of on-orbit event being reported.
   */
  eventType?: string;

  /**
   * GEO position longitude at event time if applicable. Negative values are west.
   */
  geoPosition?: number;

  /**
   * Unique identifier of the on-orbit object for this event.
   */
  idOnOrbit?: string;

  /**
   * Boolean indicating if the spacecraft is inclined.
   */
  inclined?: boolean;

  /**
   * Number of humans injured in the event.
   */
  injured?: number;

  /**
   * Additional insurance notes on coverages at the time of event.
   */
  insuranceCarriedNotes?: string;

  /**
   * Insurance loss incurred, as a fraction of 1.
   */
  insuranceLoss?: number;

  /**
   * Additional insurance notes if the event is an official loss.
   */
  insuranceLossNotes?: string;

  /**
   * Number of humans killed in the event.
   */
  killed?: number;

  /**
   * Unique identifier of the organization which leases this on-orbit spacecraft.
   */
  lesseeOrgId?: string;

  /**
   * Spacecraft life lost due to the event as a percent/fraction of 1.
   */
  lifeLost?: number;

  /**
   * Net amount of the insurance claim for the event, in USD.
   */
  netAmount?: number;

  /**
   * The status of the on-orbit object.
   */
  objectStatus?: string;

  /**
   * Phase of flight during which the event occurred.
   */
  occurrenceFlightPhase?: string;

  /**
   * Date time of official loss of the spacecraft.
   */
  officialLossDate?: string;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.OnorbitFull;

  /**
   * Unique identifier of the organization on whose behalf the on-orbit spacecraft is
   * operated.
   */
  operatedOnBehalfOfOrgId?: string;

  /**
   * Organization ID of the operator of the on-orbit spacecraft at the time of the
   * event.
   */
  operatorOrgId?: string;

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
   * Original object ID or Catalog Number provided by source (may not map to an
   * existing idOnOrbit in UDL).
   */
  origObjectId?: string;

  /**
   * Organization ID of the owner of the on-orbit spacecraft at the time of the
   * event.
   */
  ownerOrgId?: string;

  /**
   * GEO slot plane number/designator of the spacecraft at event time.
   */
  planeNumber?: string;

  /**
   * GEO plane slot of the spacecraft at event time.
   */
  planeSlot?: string;

  /**
   * Position status of the spacecraft at event time (e.g. Stable, Drifting/Tumbling,
   * etc).
   */
  positionStatus?: string;

  /**
   * Additional remarks on the event description.
   */
  remarks?: string;

  /**
   * Description of the satellite orbital position or regime.
   */
  satellitePosition?: string;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Faulty stage of flight for the event.
   */
  stageAtFault?: string;

  /**
   * Insurance loss incurred by 3rd party insurance, in USD.
   */
  thirdPartyInsuranceLoss?: number;

  /**
   * Underlying cause of the event.
   */
  underlyingCause?: string;

  /**
   * Maximum validity time of the event.
   */
  untilTime?: string;

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

export type OnorbiteventTupleResponse = Array<OnorbiteventTupleResponse.OnorbiteventTupleResponseItem>;

export namespace OnorbiteventTupleResponse {
  export interface OnorbiteventTupleResponseItem {
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
     * Date/Time of the event. See eventTimeNotes for remarks on the accuracy of the
     * date time.
     */
    eventTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Achieved phase of flight prior to the event.
     */
    achievedFlightPhase?: string;

    /**
     * Spacecraft age at the event in years.
     */
    ageAtEvent?: number;

    /**
     * Spacecraft capability loss incurred, as a fraction of 1.
     */
    capabilityLoss?: number;

    /**
     * Notes on capability loss at the time of event.
     */
    capabilityLossNotes?: string;

    /**
     * Spacecraft capacity loss incurred, as a fraction of 1.
     */
    capacityLoss?: number;

    /**
     * Additional equipment which failed as a result of faulty equipment on the
     * spacecraft during the event.
     */
    consequentialEquipmentFailure?: string;

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
     * The declassification date of this data, in ISO 8601 UTC format.
     */
    declassificationDate?: string;

    /**
     * Declassification string of this data.
     */
    declassificationString?: string;

    /**
     * The sources or SCG references from which the classification of this data is
     * derived.
     */
    derivedFrom?: string;

    /**
     * Notes/description of the event.
     */
    description?: string;

    /**
     * Equipment on the spacecraft which caused the event.
     */
    equipmentAtFault?: string;

    /**
     * Additional notes on the equipment causing the event/loss.
     */
    equipmentCausingLossNotes?: string;

    /**
     * Specific part of the equipment on the spacecraft which caused the event.
     */
    equipmentPartAtFault?: string;

    /**
     * Type of the equipment on the spacecraft which caused the event.
     */
    equipmentTypeAtFault?: string;

    /**
     * The result of the reported event.
     */
    eventResult?: string;

    /**
     * Notes/remarks on the validity/accuracy of the eventTime.
     */
    eventTimeNotes?: string;

    /**
     * The type of on-orbit event being reported.
     */
    eventType?: string;

    /**
     * GEO position longitude at event time if applicable. Negative values are west.
     */
    geoPosition?: number;

    /**
     * Unique identifier of the on-orbit object for this event.
     */
    idOnOrbit?: string;

    /**
     * Boolean indicating if the spacecraft is inclined.
     */
    inclined?: boolean;

    /**
     * Number of humans injured in the event.
     */
    injured?: number;

    /**
     * Additional insurance notes on coverages at the time of event.
     */
    insuranceCarriedNotes?: string;

    /**
     * Insurance loss incurred, as a fraction of 1.
     */
    insuranceLoss?: number;

    /**
     * Additional insurance notes if the event is an official loss.
     */
    insuranceLossNotes?: string;

    /**
     * Number of humans killed in the event.
     */
    killed?: number;

    /**
     * Unique identifier of the organization which leases this on-orbit spacecraft.
     */
    lesseeOrgId?: string;

    /**
     * Spacecraft life lost due to the event as a percent/fraction of 1.
     */
    lifeLost?: number;

    /**
     * Net amount of the insurance claim for the event, in USD.
     */
    netAmount?: number;

    /**
     * The status of the on-orbit object.
     */
    objectStatus?: string;

    /**
     * Phase of flight during which the event occurred.
     */
    occurrenceFlightPhase?: string;

    /**
     * Date time of official loss of the spacecraft.
     */
    officialLossDate?: string;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Shared.OnorbitFull;

    /**
     * Unique identifier of the organization on whose behalf the on-orbit spacecraft is
     * operated.
     */
    operatedOnBehalfOfOrgId?: string;

    /**
     * Organization ID of the operator of the on-orbit spacecraft at the time of the
     * event.
     */
    operatorOrgId?: string;

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
     * Original object ID or Catalog Number provided by source (may not map to an
     * existing idOnOrbit in UDL).
     */
    origObjectId?: string;

    /**
     * Organization ID of the owner of the on-orbit spacecraft at the time of the
     * event.
     */
    ownerOrgId?: string;

    /**
     * GEO slot plane number/designator of the spacecraft at event time.
     */
    planeNumber?: string;

    /**
     * GEO plane slot of the spacecraft at event time.
     */
    planeSlot?: string;

    /**
     * Position status of the spacecraft at event time (e.g. Stable, Drifting/Tumbling,
     * etc).
     */
    positionStatus?: string;

    /**
     * Additional remarks on the event description.
     */
    remarks?: string;

    /**
     * Description of the satellite orbital position or regime.
     */
    satellitePosition?: string;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Faulty stage of flight for the event.
     */
    stageAtFault?: string;

    /**
     * Insurance loss incurred by 3rd party insurance, in USD.
     */
    thirdPartyInsuranceLoss?: number;

    /**
     * Underlying cause of the event.
     */
    underlyingCause?: string;

    /**
     * Maximum validity time of the event.
     */
    untilTime?: string;

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

export interface OnorbiteventCreateParams {
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
   * Date/Time of the event. See eventTimeNotes for remarks on the accuracy of the
   * date time.
   */
  eventTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Achieved phase of flight prior to the event.
   */
  achievedFlightPhase?: string;

  /**
   * Spacecraft age at the event in years.
   */
  ageAtEvent?: number;

  /**
   * Spacecraft capability loss incurred, as a fraction of 1.
   */
  capabilityLoss?: number;

  /**
   * Notes on capability loss at the time of event.
   */
  capabilityLossNotes?: string;

  /**
   * Spacecraft capacity loss incurred, as a fraction of 1.
   */
  capacityLoss?: number;

  /**
   * Additional equipment which failed as a result of faulty equipment on the
   * spacecraft during the event.
   */
  consequentialEquipmentFailure?: string;

  /**
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Notes/description of the event.
   */
  description?: string;

  /**
   * Equipment on the spacecraft which caused the event.
   */
  equipmentAtFault?: string;

  /**
   * Additional notes on the equipment causing the event/loss.
   */
  equipmentCausingLossNotes?: string;

  /**
   * Specific part of the equipment on the spacecraft which caused the event.
   */
  equipmentPartAtFault?: string;

  /**
   * Type of the equipment on the spacecraft which caused the event.
   */
  equipmentTypeAtFault?: string;

  /**
   * The result of the reported event.
   */
  eventResult?: string;

  /**
   * Notes/remarks on the validity/accuracy of the eventTime.
   */
  eventTimeNotes?: string;

  /**
   * The type of on-orbit event being reported.
   */
  eventType?: string;

  /**
   * GEO position longitude at event time if applicable. Negative values are west.
   */
  geoPosition?: number;

  /**
   * Unique identifier of the on-orbit object for this event.
   */
  idOnOrbit?: string;

  /**
   * Boolean indicating if the spacecraft is inclined.
   */
  inclined?: boolean;

  /**
   * Number of humans injured in the event.
   */
  injured?: number;

  /**
   * Additional insurance notes on coverages at the time of event.
   */
  insuranceCarriedNotes?: string;

  /**
   * Insurance loss incurred, as a fraction of 1.
   */
  insuranceLoss?: number;

  /**
   * Additional insurance notes if the event is an official loss.
   */
  insuranceLossNotes?: string;

  /**
   * Number of humans killed in the event.
   */
  killed?: number;

  /**
   * Unique identifier of the organization which leases this on-orbit spacecraft.
   */
  lesseeOrgId?: string;

  /**
   * Spacecraft life lost due to the event as a percent/fraction of 1.
   */
  lifeLost?: number;

  /**
   * Net amount of the insurance claim for the event, in USD.
   */
  netAmount?: number;

  /**
   * The status of the on-orbit object.
   */
  objectStatus?: string;

  /**
   * Phase of flight during which the event occurred.
   */
  occurrenceFlightPhase?: string;

  /**
   * Date time of official loss of the spacecraft.
   */
  officialLossDate?: string;

  /**
   * Unique identifier of the organization on whose behalf the on-orbit spacecraft is
   * operated.
   */
  operatedOnBehalfOfOrgId?: string;

  /**
   * Organization ID of the operator of the on-orbit spacecraft at the time of the
   * event.
   */
  operatorOrgId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Original object ID or Catalog Number provided by source (may not map to an
   * existing idOnOrbit in UDL).
   */
  origObjectId?: string;

  /**
   * Organization ID of the owner of the on-orbit spacecraft at the time of the
   * event.
   */
  ownerOrgId?: string;

  /**
   * GEO slot plane number/designator of the spacecraft at event time.
   */
  planeNumber?: string;

  /**
   * GEO plane slot of the spacecraft at event time.
   */
  planeSlot?: string;

  /**
   * Position status of the spacecraft at event time (e.g. Stable, Drifting/Tumbling,
   * etc).
   */
  positionStatus?: string;

  /**
   * Additional remarks on the event description.
   */
  remarks?: string;

  /**
   * Description of the satellite orbital position or regime.
   */
  satellitePosition?: string;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Faulty stage of flight for the event.
   */
  stageAtFault?: string;

  /**
   * Insurance loss incurred by 3rd party insurance, in USD.
   */
  thirdPartyInsuranceLoss?: number;

  /**
   * Underlying cause of the event.
   */
  underlyingCause?: string;

  /**
   * Maximum validity time of the event.
   */
  untilTime?: string;
}

export interface OnorbiteventUpdateParams {
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
   * Date/Time of the event. See eventTimeNotes for remarks on the accuracy of the
   * date time.
   */
  eventTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Achieved phase of flight prior to the event.
   */
  achievedFlightPhase?: string;

  /**
   * Spacecraft age at the event in years.
   */
  ageAtEvent?: number;

  /**
   * Spacecraft capability loss incurred, as a fraction of 1.
   */
  capabilityLoss?: number;

  /**
   * Notes on capability loss at the time of event.
   */
  capabilityLossNotes?: string;

  /**
   * Spacecraft capacity loss incurred, as a fraction of 1.
   */
  capacityLoss?: number;

  /**
   * Additional equipment which failed as a result of faulty equipment on the
   * spacecraft during the event.
   */
  consequentialEquipmentFailure?: string;

  /**
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Notes/description of the event.
   */
  description?: string;

  /**
   * Equipment on the spacecraft which caused the event.
   */
  equipmentAtFault?: string;

  /**
   * Additional notes on the equipment causing the event/loss.
   */
  equipmentCausingLossNotes?: string;

  /**
   * Specific part of the equipment on the spacecraft which caused the event.
   */
  equipmentPartAtFault?: string;

  /**
   * Type of the equipment on the spacecraft which caused the event.
   */
  equipmentTypeAtFault?: string;

  /**
   * The result of the reported event.
   */
  eventResult?: string;

  /**
   * Notes/remarks on the validity/accuracy of the eventTime.
   */
  eventTimeNotes?: string;

  /**
   * The type of on-orbit event being reported.
   */
  eventType?: string;

  /**
   * GEO position longitude at event time if applicable. Negative values are west.
   */
  geoPosition?: number;

  /**
   * Unique identifier of the on-orbit object for this event.
   */
  idOnOrbit?: string;

  /**
   * Boolean indicating if the spacecraft is inclined.
   */
  inclined?: boolean;

  /**
   * Number of humans injured in the event.
   */
  injured?: number;

  /**
   * Additional insurance notes on coverages at the time of event.
   */
  insuranceCarriedNotes?: string;

  /**
   * Insurance loss incurred, as a fraction of 1.
   */
  insuranceLoss?: number;

  /**
   * Additional insurance notes if the event is an official loss.
   */
  insuranceLossNotes?: string;

  /**
   * Number of humans killed in the event.
   */
  killed?: number;

  /**
   * Unique identifier of the organization which leases this on-orbit spacecraft.
   */
  lesseeOrgId?: string;

  /**
   * Spacecraft life lost due to the event as a percent/fraction of 1.
   */
  lifeLost?: number;

  /**
   * Net amount of the insurance claim for the event, in USD.
   */
  netAmount?: number;

  /**
   * The status of the on-orbit object.
   */
  objectStatus?: string;

  /**
   * Phase of flight during which the event occurred.
   */
  occurrenceFlightPhase?: string;

  /**
   * Date time of official loss of the spacecraft.
   */
  officialLossDate?: string;

  /**
   * Unique identifier of the organization on whose behalf the on-orbit spacecraft is
   * operated.
   */
  operatedOnBehalfOfOrgId?: string;

  /**
   * Organization ID of the operator of the on-orbit spacecraft at the time of the
   * event.
   */
  operatorOrgId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Original object ID or Catalog Number provided by source (may not map to an
   * existing idOnOrbit in UDL).
   */
  origObjectId?: string;

  /**
   * Organization ID of the owner of the on-orbit spacecraft at the time of the
   * event.
   */
  ownerOrgId?: string;

  /**
   * GEO slot plane number/designator of the spacecraft at event time.
   */
  planeNumber?: string;

  /**
   * GEO plane slot of the spacecraft at event time.
   */
  planeSlot?: string;

  /**
   * Position status of the spacecraft at event time (e.g. Stable, Drifting/Tumbling,
   * etc).
   */
  positionStatus?: string;

  /**
   * Additional remarks on the event description.
   */
  remarks?: string;

  /**
   * Description of the satellite orbital position or regime.
   */
  satellitePosition?: string;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Faulty stage of flight for the event.
   */
  stageAtFault?: string;

  /**
   * Insurance loss incurred by 3rd party insurance, in USD.
   */
  thirdPartyInsuranceLoss?: number;

  /**
   * Underlying cause of the event.
   */
  underlyingCause?: string;

  /**
   * Maximum validity time of the event.
   */
  untilTime?: string;
}

export interface OnorbiteventListParams extends OffsetPageParams {}

export interface OnorbiteventCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OnorbiteventGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OnorbiteventTupleParams {
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

export declare namespace Onorbitevent {
  export {
    type OnorbiteventListResponse as OnorbiteventListResponse,
    type OnorbiteventCountResponse as OnorbiteventCountResponse,
    type OnorbiteventGetResponse as OnorbiteventGetResponse,
    type OnorbiteventTupleResponse as OnorbiteventTupleResponse,
    type OnorbiteventListResponsesOffsetPage as OnorbiteventListResponsesOffsetPage,
    type OnorbiteventCreateParams as OnorbiteventCreateParams,
    type OnorbiteventUpdateParams as OnorbiteventUpdateParams,
    type OnorbiteventListParams as OnorbiteventListParams,
    type OnorbiteventCountParams as OnorbiteventCountParams,
    type OnorbiteventGetParams as OnorbiteventGetParams,
    type OnorbiteventTupleParams as OnorbiteventTupleParams,
  };
}
