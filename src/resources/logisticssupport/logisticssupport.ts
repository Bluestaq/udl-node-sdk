// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';

export class Logisticssupport extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single LogisticsSupport record as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: LogisticssupportCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/logisticssupport', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update a single LogisticsSupport record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(
    pathId: string,
    body: LogisticssupportUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/udl/logisticssupport/${pathId}`, {
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
  list(options?: Core.RequestOptions): Core.APIPromise<LogisticssupportListResponse> {
    return this._client.get('/udl/logisticssupport', options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/logisticssupport/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * LogisticsSupport records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(body?: LogisticssupportCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  createBulk(options?: Core.RequestOptions): Core.APIPromise<void>;
  createBulk(
    body?: LogisticssupportCreateBulkParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.createBulk(undefined, body);
    }
    return this._client.post('/udl/logisticssupport/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple logisticssupport records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  fileCreate(body: LogisticssupportFileCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-logisticssupport', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single LogisticsSupport record by its unique ID
   * passed as a path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<LogisticssupportGetResponse> {
    return this._client.get(`/udl/logisticssupport/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/logisticssupport/queryhelp', {
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
    query: LogisticssupportTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogisticssupportTupleResponse> {
    return this._client.get('/udl/logisticssupport/tuple', { query, ...options });
  }
}

export type LogisticssupportListResponse =
  Array<LogisticssupportListResponse.LogisticssupportListResponseItem>;

export namespace LogisticssupportListResponse {
  /**
   * Comprehensive logistical details concerning the planned support of maintenance
   * operations required by an aircraft, including transportation information,
   * supplies coordination, and service personnel.
   */
  export interface LogisticssupportListResponseItem {
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
     * The time this report was created, in ISO 8601 UTC format with millisecond
     * precision.
     */
    rptCreatedTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
     * to, MIL-STD-6016 environment dependent specific type designations.
     */
    aircraftMDS?: string;

    /**
     * Time the row was created in the database.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database.
     */
    createdBy?: string;

    /**
     * The current ICAO of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    currICAO?: string;

    /**
     * The estimated time mission capable for the aircraft, in ISO 8601 UCT format with
     * millisecond precision. This is the estimated time when the aircraft is mission
     * ready.
     */
    etic?: string;

    /**
     * Logistics estimated time mission capable.
     */
    etmc?: string;

    /**
     * Optional system identifier from external systs. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    extSystemId?: string;

    /**
     * This field identifies the pacing event for bringing the aircraft to Mission
     * Capable status. It is used in calculating the Estimated Time Mission Capable
     * (ETMC) value. Acceptable values are WA (Will Advise), INW (In Work), P+hhh.h
     * (where P=parts and hhh.h is the number of hours up to 999 plus tenths of hours),
     * EQ+hhh.h (EQ=equipment), MRT+hhh.h (MRT=maintenance recovery team).
     */
    logisticAction?: string;

    /**
     * Discrepancy information associated with this LogisticsSupport record.
     */
    logisticsDiscrepancyInfos?: Array<LogisticssupportListResponseItem.LogisticsDiscrepancyInfo>;

    /**
     * The identifier that represents a Logistics Master Record.
     */
    logisticsRecordId?: string;

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    logisticsRemarks?: Array<LogisticssupportListResponseItem.LogisticsRemark>;

    /**
     * Support items associated with this LogisticsSupport record.
     */
    logisticsSupportItems?: Array<LogisticssupportListResponseItem.LogisticsSupportItem>;

    /**
     * Transportation plans associated with this LogisticsSupport record, used to
     * coordinate maintenance efforts.
     */
    logisticsTransportationPlans?: Array<LogisticssupportListResponseItem.LogisticsTransportationPlan>;

    /**
     * The maintenance status code of the aircraft which may be based on pilot
     * descriptions or evaluation codes. Contact the source provider for details.
     */
    maintStatusCode?: string;

    /**
     * The time indicating when all mission essential problems with a given aircraft
     * have been fixed and is mission capable. This datetime should be in ISO 8601 UTC
     * format with millisecond precision.
     */
    mcTime?: string;

    /**
     * The time indicating when a given aircraft breaks for a mission essential reason.
     * This datetime should be in ISO 8601 UTC format with millisecond precision.
     */
    meTime?: string;

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
     * The organization that owns this logistics record.
     */
    owner?: string;

    /**
     * This is used to indicate whether a closed master record has been reopened.
     */
    reopenFlag?: boolean;

    /**
     * The time this report was closed, in ISO 8601 UTC format with millisecond
     * precision.
     */
    rptClosedTime?: string;

    /**
     * The supplying ICAO of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    suppICAO?: string;

    /**
     * The tail number of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    tailNumber?: string;

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

  export namespace LogisticssupportListResponseItem {
    /**
     * Discrepancy information associated with this LogisticsSupport record.
     */
    export interface LogisticsDiscrepancyInfo {
      /**
       * The discrepancy closure time, in ISO 8601 UTC format with millisecond precision.
       */
      closureTime?: string;

      /**
       * The aircraft discrepancy description.
       */
      discrepancyInfo?: string;

      /**
       * Job Control Number of the discrepancy.
       */
      jcn?: string;

      /**
       * The job start time, in ISO 8601 UTC format with millisecond precision.
       */
      jobStTime?: string;
    }

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsRemark {
      /**
       * Date the remark was published or updated, in ISO 8601 UTC format, with
       * millisecond precision.
       */
      lastChanged?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * User who published the remark.
       */
      username?: string;
    }

    /**
     * Support items associated with this LogisticsSupport record.
     */
    export interface LogisticsSupportItem {
      /**
       * This element indicates whether or not the supplied item is contained within
       * another item.
       */
      cannibalized?: boolean;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      deployPlanNumber?: string;

      /**
       * The technical order name of the part ordered.
       */
      description?: string;

      /**
       * The last time this supported item was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      itemLastChangedDate?: string;

      /**
       * A number assigned by Job Control to monitor and record maintenance actions
       * required to correct the associated aircraft maintenance discrepancy. It is
       * seven, nine or twelve characters, depending on the base-specific numbering
       * scheme. If seven characters: characters 1-3 are Julian date, 4-7 are sequence
       * numbers. If nine characters: characters 1-2 are last two digits of the year,
       * characters 3-5 are Julian date, 6-9 are sequence numbers. If twelve characters:
       * characters 1-2 are last two digits of the year, 3-5 are Julian date, 6-9 are
       * sequence numbers, and 10-12 are a three-digit supplemental number.
       */
      jobControlNumber?: string;

      /**
       * The parts associated with this support item.
       */
      logisticsParts?: Array<LogisticsSupportItem.LogisticsPart>;

      /**
       * Remarks associated with this support item.
       */
      logisticsRemarks?: Array<LogisticsSupportItem.LogisticsRemark>;

      /**
       * The specialties required to implement this support item.
       */
      logisticsSpecialties?: Array<LogisticsSupportItem.LogisticsSpecialty>;

      /**
       * Military aircraft discrepancy logistics requisition ordered quantity. The
       * quantity of equipment ordered that is required to fix the aircraft.
       */
      quantity?: number;

      /**
       * The time the item is ready, in ISO 8601 UTC format with millisecond precision.
       */
      readyTime?: string;

      /**
       * The time the item is received, in ISO 8601 UTC format with millisecond
       * precision.
       */
      receivedTime?: string;

      /**
       * The type of recovery request needed. Contact the source provider for details.
       */
      recoveryRequestTypeCode?: string;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      redeployPlanNumber?: string;

      /**
       * This is the Redeploy (return) Transportation Control Number/Tracking Reference
       * Number for the selected item.
       */
      redeployShipmentUnitId?: string;

      /**
       * The request or record number for this item type (Equipent, Part, or MRT).
       */
      requestNumber?: string;

      /**
       * This element indicates if the supplied item is characterized as additional
       * support.
       */
      resupportFlag?: boolean;

      /**
       * Shipment Unit Identifier is the Transportation Control Number (TCN) for shipping
       * that piece of equipment being requested.
       */
      shipmentUnitId?: string;

      /**
       * The point of contact is a free text field to add information about the
       * individual(s) with knowledge of the referenced requested or supplied item(s).
       * The default value for this field is the last name, first name, and middle
       * initial of the operator who created the records and/or generated the
       * transaction.
       */
      siPOC?: string;

      /**
       * The code that represents the International Civil Aviation Organization (ICAO)
       * designations of an airport.
       */
      sourceICAO?: string;
    }

    export namespace LogisticsSupportItem {
      /**
       * The parts associated with this support item.
       */
      export interface LogisticsPart {
        /**
         * Technical order manual figure number for the requested / supplied part.
         */
        figureNumber?: string;

        /**
         * Technical order manual index number for the requested part.
         */
        indexNumber?: string;

        /**
         * The person who validated that the sourced location has, and can supply, the
         * requested parts.
         */
        locationVerifier?: string;

        /**
         * The supply stocks for this support item.
         */
        logisticsStocks?: Array<LogisticsPart.LogisticsStock>;

        /**
         * Code for a unit of measurement.
         */
        measurementUnitCode?: string;

        /**
         * The National Stock Number of the part being requested or supplied.
         */
        nationalStockNumber?: string;

        /**
         * Requested or supplied part number.
         */
        partNumber?: string;

        /**
         * The person who validated the request for parts.
         */
        requestVerifier?: string;

        /**
         * The supply document number.
         */
        supplyDocumentNumber?: string;

        /**
         * Indicates the specified Technical Order manual holding the aircraft information
         * for use in diagnosing a problem or condition.
         */
        technicalOrderText?: string;

        /**
         * Work Unit Code (WUC), or for some aircraft types, the Reference Designator.
         */
        workUnitCode?: string;
      }

      export namespace LogisticsPart {
        /**
         * The supply stocks for this support item.
         */
        export interface LogisticsStock {
          /**
           * The quantity of available parts needed from sourceICAO.
           */
          quantity?: number;

          /**
           * The ICAO code for the primary location with available parts.
           */
          sourceICAO?: string;

          /**
           * The datetime when the parts were sourced, in ISO 8601 UTC format with
           * millisecond precision.
           */
          stockCheckTime?: string;

          /**
           * The point of contact at the sourced location.
           */
          stockPOC?: string;
        }
      }

      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsRemark {
        /**
         * Date the remark was published or updated, in ISO 8601 UTC format, with
         * millisecond precision.
         */
        lastChanged?: string;

        /**
         * Text of the remark.
         */
        remark?: string;

        /**
         * User who published the remark.
         */
        username?: string;
      }

      /**
       * The specialties required to implement this support item.
       */
      export interface LogisticsSpecialty {
        /**
         * The first name of the specialist.
         */
        firstName?: string;

        /**
         * The last four digits of the specialist's social security number.
         */
        last4Ssn?: string;

        /**
         * The last name of the specialist.
         */
        lastName?: string;

        /**
         * Military service rank designation.
         */
        rankCode?: string;

        /**
         * Type code that determines role of the mission response team member. TC - Team
         * Chief, TM - Team Member.
         */
        roleTypeCode?: string;

        /**
         * Skill level of the mission response team member.
         */
        skillLevel?: number;

        /**
         * Indicates where the repairs will be performed, or which shop specialty has been
         * assigned responsibility for correcting the discrepancy. Shop specialties are
         * normally listed in abbreviated format.
         */
        specialty?: string;
      }
    }

    /**
     * Transportation plans associated with this LogisticsSupport record, used to
     * coordinate maintenance efforts.
     */
    export interface LogisticsTransportationPlan {
      /**
       * Actual time of departure of first segment, in ISO 8601 UTC format with
       * millisecond precision.
       */
      actDepTime?: string;

      /**
       * These are the initial maintenance values entered based on the pilot descriptions
       * or the official maintenance evaluation code.
       */
      aircraftStatus?: string;

      /**
       * Approximate time of arrival of final segement, in ISO 8601 UTC format with
       * millisecond precision.
       */
      approxArrTime?: string;

      /**
       * GC. LGTP_CANX_DT. GD2: Date when the transportation plan was cancelled, in ISO
       * 8601 UTC format with millisecond precision.
       */
      cancelledDate?: string;

      /**
       * GC. LGTP_CLSD_DT. GD2: Date when the transportation plan was closed, in ISO 8601
       * UTC format with millisecond precision.
       */
      closedDate?: string;

      /**
       * The AMS username of the operator who alters the coordination status.
       * Automatically captured by the system.
       */
      coordinator?: string;

      /**
       * The AMS user unit_id of the operator who alters the coordination status.
       * Automatically captured by the system from table AMS_USER.
       */
      coordinatorUnit?: string;

      /**
       * Destination location ICAO.
       */
      destinationICAO?: string;

      /**
       * Transportation plan duration, expressed in the format MMM:SS.
       */
      duration?: string;

      /**
       * ETA of the final segment, in ISO 8601 UTC format with millisecond precision.
       */
      estArrTime?: string;

      /**
       * ETD of the first segment, in ISO 8601 UTC format with millisecond precision.
       */
      estDepTime?: string;

      /**
       * Last time transportation plan was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      lastChangedDate?: string;

      /**
       * The identifier that represents a Logistics Master Record.
       */
      logisticMasterRecordId?: string;

      /**
       * The transportation segments associated with this transportation plan.
       */
      logisticsSegments?: Array<LogisticsTransportationPlan.LogisticsSegment>;

      /**
       * Remarks associated with this transportation plan.
       */
      logisticsTransportationPlansRemarks?: Array<LogisticsTransportationPlan.LogisticsTransportationPlansRemark>;

      /**
       * The major command for the current unit.
       */
      majcom?: string;

      /**
       * Indicates whether there have been changes to changes to ICAOs, estArrTime, or
       * estDepTime since this Transportation Plan was last edited.
       */
      missionChange?: boolean;

      /**
       * Transportation plan enroute stops.
       */
      numEnrouteStops?: number;

      /**
       * The number of transloads for this Transportation Plan.
       */
      numTransLoads?: number;

      /**
       * The origin location.
       */
      originICAO?: string;

      /**
       * Defines the transporation plan as either a deployment or redeployment.
       */
      planDefinition?: string;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      plansNumber?: string;

      /**
       * GDSS2 uses an 8 character serial number to uniquely identify the aircraft and
       * MDS combination. This is a portion of the full manufacturer serial number.
       */
      serialNumber?: string;

      /**
       * Transporation Coordination status code. Cancel, Send to APCC, working, agree,
       * disapprove or blank.
       */
      statusCode?: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
       * to, MIL-STD-6016 environment dependent specific type designations.
       */
      tpAircraftMDS?: string;

      /**
       * Contains the tail number displayed by GDSS2.
       */
      tpTailNumber?: string;
    }

    export namespace LogisticsTransportationPlan {
      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsSegment {
        /**
         * Airport ICAO arrival code.
         */
        arrivalICAO?: string;

        /**
         * Airport ICAO departure code.
         */
        departureICAO?: string;

        /**
         * The GDSS mission ID for this segment.
         */
        extMissionId?: string;

        /**
         * The unique identifier of the mission to which this logistics record is assigned.
         */
        idMission?: string;

        /**
         * Start air mission itinerary point identifier.
         */
        itin?: number;

        /**
         * The user generated identifier for an air mission subgroup.
         */
        missionNumber?: string;

        /**
         * The type of mission (e.g. SAAM, CHNL, etc.).
         */
        missionType?: string;

        /**
         * Transportation mode. AMC airlift, Commercial airlift, Other, or surface
         * transportation.
         */
        modeCode?: string;

        /**
         * Actual arrival time to segment destination, in ISO 8601 UTC format with
         * millisecond precision.
         */
        segActArrTime?: string;

        /**
         * Actual departure time to the segment destination, in ISO 8601 UTC format with
         * millisecond precision.
         */
        segActDepTime?: string;

        /**
         * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
         * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
         * to, MIL-STD-6016 environment dependent specific type designations.
         */
        segAircraftMDS?: string;

        /**
         * GC. LGTPS_C_DT_EST_ARR. GD2: Estimated arrival time to the segment destination.
         * Only supplied when the segment is not attached to a Mission, otherwise the ETA
         * is derived from the Mission segment destination point. This datetime should be
         * in ISO 8601 UTC format with millisecond precision.
         */
        segEstArrTime?: string;

        /**
         * GC. LGTPS_C_DT_EST_DEP. GD2: Estimated departure time from the segment origin.
         * Only supplied when the segment is not attached to a Mission, otherwise the ETD
         * is derived from the Mission segment origin point. This datetime should be in ISO
         * 8601 UTC format with millisecond precision.
         */
        segEstDepTime?: string;

        /**
         * Used to sequence the segments in the transportation plan.
         */
        segmentNumber?: number;

        /**
         * The identifier that represents a specific aircraft within an aircraft type.
         */
        segTailNumber?: string;
      }

      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsTransportationPlansRemark {
        /**
         * Date the remark was published or updated, in ISO 8601 UTC format, with
         * millisecond precision.
         */
        lastChanged?: string;

        /**
         * Text of the remark.
         */
        remark?: string;

        /**
         * User who published the remark.
         */
        username?: string;
      }
    }
  }
}

export type LogisticssupportCountResponse = string;

/**
 * Comprehensive logistical details concerning the planned support of maintenance
 * operations required by an aircraft, including transportation information,
 * supplies coordination, and service personnel.
 */
export interface LogisticssupportGetResponse {
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
   * The time this report was created, in ISO 8601 UTC format with millisecond
   * precision.
   */
  rptCreatedTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
   * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
   * to, MIL-STD-6016 environment dependent specific type designations.
   */
  aircraftMDS?: string;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * The current ICAO of the aircraft that is the subject of this
   * LogisticsSupportDetails record.
   */
  currICAO?: string;

  /**
   * The estimated time mission capable for the aircraft, in ISO 8601 UCT format with
   * millisecond precision. This is the estimated time when the aircraft is mission
   * ready.
   */
  etic?: string;

  /**
   * Logistics estimated time mission capable.
   */
  etmc?: string;

  /**
   * Optional system identifier from external systs. This field has no meaning within
   * UDL and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  extSystemId?: string;

  /**
   * This field identifies the pacing event for bringing the aircraft to Mission
   * Capable status. It is used in calculating the Estimated Time Mission Capable
   * (ETMC) value. Acceptable values are WA (Will Advise), INW (In Work), P+hhh.h
   * (where P=parts and hhh.h is the number of hours up to 999 plus tenths of hours),
   * EQ+hhh.h (EQ=equipment), MRT+hhh.h (MRT=maintenance recovery team).
   */
  logisticAction?: string;

  /**
   * Discrepancy information associated with this LogisticsSupport record.
   */
  logisticsDiscrepancyInfos?: Array<LogisticssupportGetResponse.LogisticsDiscrepancyInfo>;

  /**
   * The identifier that represents a Logistics Master Record.
   */
  logisticsRecordId?: string;

  /**
   * Remarks associated with this LogisticsSupport record.
   */
  logisticsRemarks?: Array<LogisticssupportGetResponse.LogisticsRemark>;

  /**
   * Support items associated with this LogisticsSupport record.
   */
  logisticsSupportItems?: Array<LogisticssupportGetResponse.LogisticsSupportItem>;

  /**
   * Transportation plans associated with this LogisticsSupport record, used to
   * coordinate maintenance efforts.
   */
  logisticsTransportationPlans?: Array<LogisticssupportGetResponse.LogisticsTransportationPlan>;

  /**
   * The maintenance status code of the aircraft which may be based on pilot
   * descriptions or evaluation codes. Contact the source provider for details.
   */
  maintStatusCode?: string;

  /**
   * The time indicating when all mission essential problems with a given aircraft
   * have been fixed and is mission capable. This datetime should be in ISO 8601 UTC
   * format with millisecond precision.
   */
  mcTime?: string;

  /**
   * The time indicating when a given aircraft breaks for a mission essential reason.
   * This datetime should be in ISO 8601 UTC format with millisecond precision.
   */
  meTime?: string;

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
   * The organization that owns this logistics record.
   */
  owner?: string;

  /**
   * This is used to indicate whether a closed master record has been reopened.
   */
  reopenFlag?: boolean;

  /**
   * The time this report was closed, in ISO 8601 UTC format with millisecond
   * precision.
   */
  rptClosedTime?: string;

  /**
   * The supplying ICAO of the aircraft that is the subject of this
   * LogisticsSupportDetails record.
   */
  suppICAO?: string;

  /**
   * The tail number of the aircraft that is the subject of this
   * LogisticsSupportDetails record.
   */
  tailNumber?: string;

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

export namespace LogisticssupportGetResponse {
  /**
   * Discrepancy information associated with this LogisticsSupport record.
   */
  export interface LogisticsDiscrepancyInfo {
    /**
     * The discrepancy closure time, in ISO 8601 UTC format with millisecond precision.
     */
    closureTime?: string;

    /**
     * The aircraft discrepancy description.
     */
    discrepancyInfo?: string;

    /**
     * Job Control Number of the discrepancy.
     */
    jcn?: string;

    /**
     * The job start time, in ISO 8601 UTC format with millisecond precision.
     */
    jobStTime?: string;
  }

  /**
   * Remarks associated with this LogisticsSupport record.
   */
  export interface LogisticsRemark {
    /**
     * Date the remark was published or updated, in ISO 8601 UTC format, with
     * millisecond precision.
     */
    lastChanged?: string;

    /**
     * Text of the remark.
     */
    remark?: string;

    /**
     * User who published the remark.
     */
    username?: string;
  }

  /**
   * Support items associated with this LogisticsSupport record.
   */
  export interface LogisticsSupportItem {
    /**
     * This element indicates whether or not the supplied item is contained within
     * another item.
     */
    cannibalized?: boolean;

    /**
     * System generated reference id for the transportation plan. Format: TXXXXXNNNN
     * T - Transportation, Sequence Number, Node Id.
     */
    deployPlanNumber?: string;

    /**
     * The technical order name of the part ordered.
     */
    description?: string;

    /**
     * The last time this supported item was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    itemLastChangedDate?: string;

    /**
     * A number assigned by Job Control to monitor and record maintenance actions
     * required to correct the associated aircraft maintenance discrepancy. It is
     * seven, nine or twelve characters, depending on the base-specific numbering
     * scheme. If seven characters: characters 1-3 are Julian date, 4-7 are sequence
     * numbers. If nine characters: characters 1-2 are last two digits of the year,
     * characters 3-5 are Julian date, 6-9 are sequence numbers. If twelve characters:
     * characters 1-2 are last two digits of the year, 3-5 are Julian date, 6-9 are
     * sequence numbers, and 10-12 are a three-digit supplemental number.
     */
    jobControlNumber?: string;

    /**
     * The parts associated with this support item.
     */
    logisticsParts?: Array<LogisticsSupportItem.LogisticsPart>;

    /**
     * Remarks associated with this support item.
     */
    logisticsRemarks?: Array<LogisticsSupportItem.LogisticsRemark>;

    /**
     * The specialties required to implement this support item.
     */
    logisticsSpecialties?: Array<LogisticsSupportItem.LogisticsSpecialty>;

    /**
     * Military aircraft discrepancy logistics requisition ordered quantity. The
     * quantity of equipment ordered that is required to fix the aircraft.
     */
    quantity?: number;

    /**
     * The time the item is ready, in ISO 8601 UTC format with millisecond precision.
     */
    readyTime?: string;

    /**
     * The time the item is received, in ISO 8601 UTC format with millisecond
     * precision.
     */
    receivedTime?: string;

    /**
     * The type of recovery request needed. Contact the source provider for details.
     */
    recoveryRequestTypeCode?: string;

    /**
     * System generated reference id for the transportation plan. Format: TXXXXXNNNN
     * T - Transportation, Sequence Number, Node Id.
     */
    redeployPlanNumber?: string;

    /**
     * This is the Redeploy (return) Transportation Control Number/Tracking Reference
     * Number for the selected item.
     */
    redeployShipmentUnitId?: string;

    /**
     * The request or record number for this item type (Equipent, Part, or MRT).
     */
    requestNumber?: string;

    /**
     * This element indicates if the supplied item is characterized as additional
     * support.
     */
    resupportFlag?: boolean;

    /**
     * Shipment Unit Identifier is the Transportation Control Number (TCN) for shipping
     * that piece of equipment being requested.
     */
    shipmentUnitId?: string;

    /**
     * The point of contact is a free text field to add information about the
     * individual(s) with knowledge of the referenced requested or supplied item(s).
     * The default value for this field is the last name, first name, and middle
     * initial of the operator who created the records and/or generated the
     * transaction.
     */
    siPOC?: string;

    /**
     * The code that represents the International Civil Aviation Organization (ICAO)
     * designations of an airport.
     */
    sourceICAO?: string;
  }

  export namespace LogisticsSupportItem {
    /**
     * The parts associated with this support item.
     */
    export interface LogisticsPart {
      /**
       * Technical order manual figure number for the requested / supplied part.
       */
      figureNumber?: string;

      /**
       * Technical order manual index number for the requested part.
       */
      indexNumber?: string;

      /**
       * The person who validated that the sourced location has, and can supply, the
       * requested parts.
       */
      locationVerifier?: string;

      /**
       * The supply stocks for this support item.
       */
      logisticsStocks?: Array<LogisticsPart.LogisticsStock>;

      /**
       * Code for a unit of measurement.
       */
      measurementUnitCode?: string;

      /**
       * The National Stock Number of the part being requested or supplied.
       */
      nationalStockNumber?: string;

      /**
       * Requested or supplied part number.
       */
      partNumber?: string;

      /**
       * The person who validated the request for parts.
       */
      requestVerifier?: string;

      /**
       * The supply document number.
       */
      supplyDocumentNumber?: string;

      /**
       * Indicates the specified Technical Order manual holding the aircraft information
       * for use in diagnosing a problem or condition.
       */
      technicalOrderText?: string;

      /**
       * Work Unit Code (WUC), or for some aircraft types, the Reference Designator.
       */
      workUnitCode?: string;
    }

    export namespace LogisticsPart {
      /**
       * The supply stocks for this support item.
       */
      export interface LogisticsStock {
        /**
         * The quantity of available parts needed from sourceICAO.
         */
        quantity?: number;

        /**
         * The ICAO code for the primary location with available parts.
         */
        sourceICAO?: string;

        /**
         * The datetime when the parts were sourced, in ISO 8601 UTC format with
         * millisecond precision.
         */
        stockCheckTime?: string;

        /**
         * The point of contact at the sourced location.
         */
        stockPOC?: string;
      }
    }

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsRemark {
      /**
       * Date the remark was published or updated, in ISO 8601 UTC format, with
       * millisecond precision.
       */
      lastChanged?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * User who published the remark.
       */
      username?: string;
    }

    /**
     * The specialties required to implement this support item.
     */
    export interface LogisticsSpecialty {
      /**
       * The first name of the specialist.
       */
      firstName?: string;

      /**
       * The last four digits of the specialist's social security number.
       */
      last4Ssn?: string;

      /**
       * The last name of the specialist.
       */
      lastName?: string;

      /**
       * Military service rank designation.
       */
      rankCode?: string;

      /**
       * Type code that determines role of the mission response team member. TC - Team
       * Chief, TM - Team Member.
       */
      roleTypeCode?: string;

      /**
       * Skill level of the mission response team member.
       */
      skillLevel?: number;

      /**
       * Indicates where the repairs will be performed, or which shop specialty has been
       * assigned responsibility for correcting the discrepancy. Shop specialties are
       * normally listed in abbreviated format.
       */
      specialty?: string;
    }
  }

  /**
   * Transportation plans associated with this LogisticsSupport record, used to
   * coordinate maintenance efforts.
   */
  export interface LogisticsTransportationPlan {
    /**
     * Actual time of departure of first segment, in ISO 8601 UTC format with
     * millisecond precision.
     */
    actDepTime?: string;

    /**
     * These are the initial maintenance values entered based on the pilot descriptions
     * or the official maintenance evaluation code.
     */
    aircraftStatus?: string;

    /**
     * Approximate time of arrival of final segement, in ISO 8601 UTC format with
     * millisecond precision.
     */
    approxArrTime?: string;

    /**
     * GC. LGTP_CANX_DT. GD2: Date when the transportation plan was cancelled, in ISO
     * 8601 UTC format with millisecond precision.
     */
    cancelledDate?: string;

    /**
     * GC. LGTP_CLSD_DT. GD2: Date when the transportation plan was closed, in ISO 8601
     * UTC format with millisecond precision.
     */
    closedDate?: string;

    /**
     * The AMS username of the operator who alters the coordination status.
     * Automatically captured by the system.
     */
    coordinator?: string;

    /**
     * The AMS user unit_id of the operator who alters the coordination status.
     * Automatically captured by the system from table AMS_USER.
     */
    coordinatorUnit?: string;

    /**
     * Destination location ICAO.
     */
    destinationICAO?: string;

    /**
     * Transportation plan duration, expressed in the format MMM:SS.
     */
    duration?: string;

    /**
     * ETA of the final segment, in ISO 8601 UTC format with millisecond precision.
     */
    estArrTime?: string;

    /**
     * ETD of the first segment, in ISO 8601 UTC format with millisecond precision.
     */
    estDepTime?: string;

    /**
     * Last time transportation plan was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastChangedDate?: string;

    /**
     * The identifier that represents a Logistics Master Record.
     */
    logisticMasterRecordId?: string;

    /**
     * The transportation segments associated with this transportation plan.
     */
    logisticsSegments?: Array<LogisticsTransportationPlan.LogisticsSegment>;

    /**
     * Remarks associated with this transportation plan.
     */
    logisticsTransportationPlansRemarks?: Array<LogisticsTransportationPlan.LogisticsTransportationPlansRemark>;

    /**
     * The major command for the current unit.
     */
    majcom?: string;

    /**
     * Indicates whether there have been changes to changes to ICAOs, estArrTime, or
     * estDepTime since this Transportation Plan was last edited.
     */
    missionChange?: boolean;

    /**
     * Transportation plan enroute stops.
     */
    numEnrouteStops?: number;

    /**
     * The number of transloads for this Transportation Plan.
     */
    numTransLoads?: number;

    /**
     * The origin location.
     */
    originICAO?: string;

    /**
     * Defines the transporation plan as either a deployment or redeployment.
     */
    planDefinition?: string;

    /**
     * System generated reference id for the transportation plan. Format: TXXXXXNNNN
     * T - Transportation, Sequence Number, Node Id.
     */
    plansNumber?: string;

    /**
     * GDSS2 uses an 8 character serial number to uniquely identify the aircraft and
     * MDS combination. This is a portion of the full manufacturer serial number.
     */
    serialNumber?: string;

    /**
     * Transporation Coordination status code. Cancel, Send to APCC, working, agree,
     * disapprove or blank.
     */
    statusCode?: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
     * to, MIL-STD-6016 environment dependent specific type designations.
     */
    tpAircraftMDS?: string;

    /**
     * Contains the tail number displayed by GDSS2.
     */
    tpTailNumber?: string;
  }

  export namespace LogisticsTransportationPlan {
    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsSegment {
      /**
       * Airport ICAO arrival code.
       */
      arrivalICAO?: string;

      /**
       * Airport ICAO departure code.
       */
      departureICAO?: string;

      /**
       * The GDSS mission ID for this segment.
       */
      extMissionId?: string;

      /**
       * The unique identifier of the mission to which this logistics record is assigned.
       */
      idMission?: string;

      /**
       * Start air mission itinerary point identifier.
       */
      itin?: number;

      /**
       * The user generated identifier for an air mission subgroup.
       */
      missionNumber?: string;

      /**
       * The type of mission (e.g. SAAM, CHNL, etc.).
       */
      missionType?: string;

      /**
       * Transportation mode. AMC airlift, Commercial airlift, Other, or surface
       * transportation.
       */
      modeCode?: string;

      /**
       * Actual arrival time to segment destination, in ISO 8601 UTC format with
       * millisecond precision.
       */
      segActArrTime?: string;

      /**
       * Actual departure time to the segment destination, in ISO 8601 UTC format with
       * millisecond precision.
       */
      segActDepTime?: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
       * to, MIL-STD-6016 environment dependent specific type designations.
       */
      segAircraftMDS?: string;

      /**
       * GC. LGTPS_C_DT_EST_ARR. GD2: Estimated arrival time to the segment destination.
       * Only supplied when the segment is not attached to a Mission, otherwise the ETA
       * is derived from the Mission segment destination point. This datetime should be
       * in ISO 8601 UTC format with millisecond precision.
       */
      segEstArrTime?: string;

      /**
       * GC. LGTPS_C_DT_EST_DEP. GD2: Estimated departure time from the segment origin.
       * Only supplied when the segment is not attached to a Mission, otherwise the ETD
       * is derived from the Mission segment origin point. This datetime should be in ISO
       * 8601 UTC format with millisecond precision.
       */
      segEstDepTime?: string;

      /**
       * Used to sequence the segments in the transportation plan.
       */
      segmentNumber?: number;

      /**
       * The identifier that represents a specific aircraft within an aircraft type.
       */
      segTailNumber?: string;
    }

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsTransportationPlansRemark {
      /**
       * Date the remark was published or updated, in ISO 8601 UTC format, with
       * millisecond precision.
       */
      lastChanged?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * User who published the remark.
       */
      username?: string;
    }
  }
}

export type LogisticssupportTupleResponse =
  Array<LogisticssupportTupleResponse.LogisticssupportTupleResponseItem>;

export namespace LogisticssupportTupleResponse {
  /**
   * Comprehensive logistical details concerning the planned support of maintenance
   * operations required by an aircraft, including transportation information,
   * supplies coordination, and service personnel.
   */
  export interface LogisticssupportTupleResponseItem {
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
     * The time this report was created, in ISO 8601 UTC format with millisecond
     * precision.
     */
    rptCreatedTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
     * to, MIL-STD-6016 environment dependent specific type designations.
     */
    aircraftMDS?: string;

    /**
     * Time the row was created in the database.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database.
     */
    createdBy?: string;

    /**
     * The current ICAO of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    currICAO?: string;

    /**
     * The estimated time mission capable for the aircraft, in ISO 8601 UCT format with
     * millisecond precision. This is the estimated time when the aircraft is mission
     * ready.
     */
    etic?: string;

    /**
     * Logistics estimated time mission capable.
     */
    etmc?: string;

    /**
     * Optional system identifier from external systs. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    extSystemId?: string;

    /**
     * This field identifies the pacing event for bringing the aircraft to Mission
     * Capable status. It is used in calculating the Estimated Time Mission Capable
     * (ETMC) value. Acceptable values are WA (Will Advise), INW (In Work), P+hhh.h
     * (where P=parts and hhh.h is the number of hours up to 999 plus tenths of hours),
     * EQ+hhh.h (EQ=equipment), MRT+hhh.h (MRT=maintenance recovery team).
     */
    logisticAction?: string;

    /**
     * Discrepancy information associated with this LogisticsSupport record.
     */
    logisticsDiscrepancyInfos?: Array<LogisticssupportTupleResponseItem.LogisticsDiscrepancyInfo>;

    /**
     * The identifier that represents a Logistics Master Record.
     */
    logisticsRecordId?: string;

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    logisticsRemarks?: Array<LogisticssupportTupleResponseItem.LogisticsRemark>;

    /**
     * Support items associated with this LogisticsSupport record.
     */
    logisticsSupportItems?: Array<LogisticssupportTupleResponseItem.LogisticsSupportItem>;

    /**
     * Transportation plans associated with this LogisticsSupport record, used to
     * coordinate maintenance efforts.
     */
    logisticsTransportationPlans?: Array<LogisticssupportTupleResponseItem.LogisticsTransportationPlan>;

    /**
     * The maintenance status code of the aircraft which may be based on pilot
     * descriptions or evaluation codes. Contact the source provider for details.
     */
    maintStatusCode?: string;

    /**
     * The time indicating when all mission essential problems with a given aircraft
     * have been fixed and is mission capable. This datetime should be in ISO 8601 UTC
     * format with millisecond precision.
     */
    mcTime?: string;

    /**
     * The time indicating when a given aircraft breaks for a mission essential reason.
     * This datetime should be in ISO 8601 UTC format with millisecond precision.
     */
    meTime?: string;

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
     * The organization that owns this logistics record.
     */
    owner?: string;

    /**
     * This is used to indicate whether a closed master record has been reopened.
     */
    reopenFlag?: boolean;

    /**
     * The time this report was closed, in ISO 8601 UTC format with millisecond
     * precision.
     */
    rptClosedTime?: string;

    /**
     * The supplying ICAO of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    suppICAO?: string;

    /**
     * The tail number of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    tailNumber?: string;

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

  export namespace LogisticssupportTupleResponseItem {
    /**
     * Discrepancy information associated with this LogisticsSupport record.
     */
    export interface LogisticsDiscrepancyInfo {
      /**
       * The discrepancy closure time, in ISO 8601 UTC format with millisecond precision.
       */
      closureTime?: string;

      /**
       * The aircraft discrepancy description.
       */
      discrepancyInfo?: string;

      /**
       * Job Control Number of the discrepancy.
       */
      jcn?: string;

      /**
       * The job start time, in ISO 8601 UTC format with millisecond precision.
       */
      jobStTime?: string;
    }

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsRemark {
      /**
       * Date the remark was published or updated, in ISO 8601 UTC format, with
       * millisecond precision.
       */
      lastChanged?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * User who published the remark.
       */
      username?: string;
    }

    /**
     * Support items associated with this LogisticsSupport record.
     */
    export interface LogisticsSupportItem {
      /**
       * This element indicates whether or not the supplied item is contained within
       * another item.
       */
      cannibalized?: boolean;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      deployPlanNumber?: string;

      /**
       * The technical order name of the part ordered.
       */
      description?: string;

      /**
       * The last time this supported item was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      itemLastChangedDate?: string;

      /**
       * A number assigned by Job Control to monitor and record maintenance actions
       * required to correct the associated aircraft maintenance discrepancy. It is
       * seven, nine or twelve characters, depending on the base-specific numbering
       * scheme. If seven characters: characters 1-3 are Julian date, 4-7 are sequence
       * numbers. If nine characters: characters 1-2 are last two digits of the year,
       * characters 3-5 are Julian date, 6-9 are sequence numbers. If twelve characters:
       * characters 1-2 are last two digits of the year, 3-5 are Julian date, 6-9 are
       * sequence numbers, and 10-12 are a three-digit supplemental number.
       */
      jobControlNumber?: string;

      /**
       * The parts associated with this support item.
       */
      logisticsParts?: Array<LogisticsSupportItem.LogisticsPart>;

      /**
       * Remarks associated with this support item.
       */
      logisticsRemarks?: Array<LogisticsSupportItem.LogisticsRemark>;

      /**
       * The specialties required to implement this support item.
       */
      logisticsSpecialties?: Array<LogisticsSupportItem.LogisticsSpecialty>;

      /**
       * Military aircraft discrepancy logistics requisition ordered quantity. The
       * quantity of equipment ordered that is required to fix the aircraft.
       */
      quantity?: number;

      /**
       * The time the item is ready, in ISO 8601 UTC format with millisecond precision.
       */
      readyTime?: string;

      /**
       * The time the item is received, in ISO 8601 UTC format with millisecond
       * precision.
       */
      receivedTime?: string;

      /**
       * The type of recovery request needed. Contact the source provider for details.
       */
      recoveryRequestTypeCode?: string;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      redeployPlanNumber?: string;

      /**
       * This is the Redeploy (return) Transportation Control Number/Tracking Reference
       * Number for the selected item.
       */
      redeployShipmentUnitId?: string;

      /**
       * The request or record number for this item type (Equipent, Part, or MRT).
       */
      requestNumber?: string;

      /**
       * This element indicates if the supplied item is characterized as additional
       * support.
       */
      resupportFlag?: boolean;

      /**
       * Shipment Unit Identifier is the Transportation Control Number (TCN) for shipping
       * that piece of equipment being requested.
       */
      shipmentUnitId?: string;

      /**
       * The point of contact is a free text field to add information about the
       * individual(s) with knowledge of the referenced requested or supplied item(s).
       * The default value for this field is the last name, first name, and middle
       * initial of the operator who created the records and/or generated the
       * transaction.
       */
      siPOC?: string;

      /**
       * The code that represents the International Civil Aviation Organization (ICAO)
       * designations of an airport.
       */
      sourceICAO?: string;
    }

    export namespace LogisticsSupportItem {
      /**
       * The parts associated with this support item.
       */
      export interface LogisticsPart {
        /**
         * Technical order manual figure number for the requested / supplied part.
         */
        figureNumber?: string;

        /**
         * Technical order manual index number for the requested part.
         */
        indexNumber?: string;

        /**
         * The person who validated that the sourced location has, and can supply, the
         * requested parts.
         */
        locationVerifier?: string;

        /**
         * The supply stocks for this support item.
         */
        logisticsStocks?: Array<LogisticsPart.LogisticsStock>;

        /**
         * Code for a unit of measurement.
         */
        measurementUnitCode?: string;

        /**
         * The National Stock Number of the part being requested or supplied.
         */
        nationalStockNumber?: string;

        /**
         * Requested or supplied part number.
         */
        partNumber?: string;

        /**
         * The person who validated the request for parts.
         */
        requestVerifier?: string;

        /**
         * The supply document number.
         */
        supplyDocumentNumber?: string;

        /**
         * Indicates the specified Technical Order manual holding the aircraft information
         * for use in diagnosing a problem or condition.
         */
        technicalOrderText?: string;

        /**
         * Work Unit Code (WUC), or for some aircraft types, the Reference Designator.
         */
        workUnitCode?: string;
      }

      export namespace LogisticsPart {
        /**
         * The supply stocks for this support item.
         */
        export interface LogisticsStock {
          /**
           * The quantity of available parts needed from sourceICAO.
           */
          quantity?: number;

          /**
           * The ICAO code for the primary location with available parts.
           */
          sourceICAO?: string;

          /**
           * The datetime when the parts were sourced, in ISO 8601 UTC format with
           * millisecond precision.
           */
          stockCheckTime?: string;

          /**
           * The point of contact at the sourced location.
           */
          stockPOC?: string;
        }
      }

      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsRemark {
        /**
         * Date the remark was published or updated, in ISO 8601 UTC format, with
         * millisecond precision.
         */
        lastChanged?: string;

        /**
         * Text of the remark.
         */
        remark?: string;

        /**
         * User who published the remark.
         */
        username?: string;
      }

      /**
       * The specialties required to implement this support item.
       */
      export interface LogisticsSpecialty {
        /**
         * The first name of the specialist.
         */
        firstName?: string;

        /**
         * The last four digits of the specialist's social security number.
         */
        last4Ssn?: string;

        /**
         * The last name of the specialist.
         */
        lastName?: string;

        /**
         * Military service rank designation.
         */
        rankCode?: string;

        /**
         * Type code that determines role of the mission response team member. TC - Team
         * Chief, TM - Team Member.
         */
        roleTypeCode?: string;

        /**
         * Skill level of the mission response team member.
         */
        skillLevel?: number;

        /**
         * Indicates where the repairs will be performed, or which shop specialty has been
         * assigned responsibility for correcting the discrepancy. Shop specialties are
         * normally listed in abbreviated format.
         */
        specialty?: string;
      }
    }

    /**
     * Transportation plans associated with this LogisticsSupport record, used to
     * coordinate maintenance efforts.
     */
    export interface LogisticsTransportationPlan {
      /**
       * Actual time of departure of first segment, in ISO 8601 UTC format with
       * millisecond precision.
       */
      actDepTime?: string;

      /**
       * These are the initial maintenance values entered based on the pilot descriptions
       * or the official maintenance evaluation code.
       */
      aircraftStatus?: string;

      /**
       * Approximate time of arrival of final segement, in ISO 8601 UTC format with
       * millisecond precision.
       */
      approxArrTime?: string;

      /**
       * GC. LGTP_CANX_DT. GD2: Date when the transportation plan was cancelled, in ISO
       * 8601 UTC format with millisecond precision.
       */
      cancelledDate?: string;

      /**
       * GC. LGTP_CLSD_DT. GD2: Date when the transportation plan was closed, in ISO 8601
       * UTC format with millisecond precision.
       */
      closedDate?: string;

      /**
       * The AMS username of the operator who alters the coordination status.
       * Automatically captured by the system.
       */
      coordinator?: string;

      /**
       * The AMS user unit_id of the operator who alters the coordination status.
       * Automatically captured by the system from table AMS_USER.
       */
      coordinatorUnit?: string;

      /**
       * Destination location ICAO.
       */
      destinationICAO?: string;

      /**
       * Transportation plan duration, expressed in the format MMM:SS.
       */
      duration?: string;

      /**
       * ETA of the final segment, in ISO 8601 UTC format with millisecond precision.
       */
      estArrTime?: string;

      /**
       * ETD of the first segment, in ISO 8601 UTC format with millisecond precision.
       */
      estDepTime?: string;

      /**
       * Last time transportation plan was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      lastChangedDate?: string;

      /**
       * The identifier that represents a Logistics Master Record.
       */
      logisticMasterRecordId?: string;

      /**
       * The transportation segments associated with this transportation plan.
       */
      logisticsSegments?: Array<LogisticsTransportationPlan.LogisticsSegment>;

      /**
       * Remarks associated with this transportation plan.
       */
      logisticsTransportationPlansRemarks?: Array<LogisticsTransportationPlan.LogisticsTransportationPlansRemark>;

      /**
       * The major command for the current unit.
       */
      majcom?: string;

      /**
       * Indicates whether there have been changes to changes to ICAOs, estArrTime, or
       * estDepTime since this Transportation Plan was last edited.
       */
      missionChange?: boolean;

      /**
       * Transportation plan enroute stops.
       */
      numEnrouteStops?: number;

      /**
       * The number of transloads for this Transportation Plan.
       */
      numTransLoads?: number;

      /**
       * The origin location.
       */
      originICAO?: string;

      /**
       * Defines the transporation plan as either a deployment or redeployment.
       */
      planDefinition?: string;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      plansNumber?: string;

      /**
       * GDSS2 uses an 8 character serial number to uniquely identify the aircraft and
       * MDS combination. This is a portion of the full manufacturer serial number.
       */
      serialNumber?: string;

      /**
       * Transporation Coordination status code. Cancel, Send to APCC, working, agree,
       * disapprove or blank.
       */
      statusCode?: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
       * to, MIL-STD-6016 environment dependent specific type designations.
       */
      tpAircraftMDS?: string;

      /**
       * Contains the tail number displayed by GDSS2.
       */
      tpTailNumber?: string;
    }

    export namespace LogisticsTransportationPlan {
      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsSegment {
        /**
         * Airport ICAO arrival code.
         */
        arrivalICAO?: string;

        /**
         * Airport ICAO departure code.
         */
        departureICAO?: string;

        /**
         * The GDSS mission ID for this segment.
         */
        extMissionId?: string;

        /**
         * The unique identifier of the mission to which this logistics record is assigned.
         */
        idMission?: string;

        /**
         * Start air mission itinerary point identifier.
         */
        itin?: number;

        /**
         * The user generated identifier for an air mission subgroup.
         */
        missionNumber?: string;

        /**
         * The type of mission (e.g. SAAM, CHNL, etc.).
         */
        missionType?: string;

        /**
         * Transportation mode. AMC airlift, Commercial airlift, Other, or surface
         * transportation.
         */
        modeCode?: string;

        /**
         * Actual arrival time to segment destination, in ISO 8601 UTC format with
         * millisecond precision.
         */
        segActArrTime?: string;

        /**
         * Actual departure time to the segment destination, in ISO 8601 UTC format with
         * millisecond precision.
         */
        segActDepTime?: string;

        /**
         * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
         * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
         * to, MIL-STD-6016 environment dependent specific type designations.
         */
        segAircraftMDS?: string;

        /**
         * GC. LGTPS_C_DT_EST_ARR. GD2: Estimated arrival time to the segment destination.
         * Only supplied when the segment is not attached to a Mission, otherwise the ETA
         * is derived from the Mission segment destination point. This datetime should be
         * in ISO 8601 UTC format with millisecond precision.
         */
        segEstArrTime?: string;

        /**
         * GC. LGTPS_C_DT_EST_DEP. GD2: Estimated departure time from the segment origin.
         * Only supplied when the segment is not attached to a Mission, otherwise the ETD
         * is derived from the Mission segment origin point. This datetime should be in ISO
         * 8601 UTC format with millisecond precision.
         */
        segEstDepTime?: string;

        /**
         * Used to sequence the segments in the transportation plan.
         */
        segmentNumber?: number;

        /**
         * The identifier that represents a specific aircraft within an aircraft type.
         */
        segTailNumber?: string;
      }

      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsTransportationPlansRemark {
        /**
         * Date the remark was published or updated, in ISO 8601 UTC format, with
         * millisecond precision.
         */
        lastChanged?: string;

        /**
         * Text of the remark.
         */
        remark?: string;

        /**
         * User who published the remark.
         */
        username?: string;
      }
    }
  }
}

export interface LogisticssupportCreateParams {
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
   * The time this report was created, in ISO 8601 UTC format with millisecond
   * precision.
   */
  rptCreatedTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
   * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
   * to, MIL-STD-6016 environment dependent specific type designations.
   */
  aircraftMDS?: string;

  /**
   * The current ICAO of the aircraft that is the subject of this
   * LogisticsSupportDetails record.
   */
  currICAO?: string;

  /**
   * The estimated time mission capable for the aircraft, in ISO 8601 UCT format with
   * millisecond precision. This is the estimated time when the aircraft is mission
   * ready.
   */
  etic?: string;

  /**
   * Logistics estimated time mission capable.
   */
  etmc?: string;

  /**
   * Optional system identifier from external systs. This field has no meaning within
   * UDL and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  extSystemId?: string;

  /**
   * This field identifies the pacing event for bringing the aircraft to Mission
   * Capable status. It is used in calculating the Estimated Time Mission Capable
   * (ETMC) value. Acceptable values are WA (Will Advise), INW (In Work), P+hhh.h
   * (where P=parts and hhh.h is the number of hours up to 999 plus tenths of hours),
   * EQ+hhh.h (EQ=equipment), MRT+hhh.h (MRT=maintenance recovery team).
   */
  logisticAction?: string;

  /**
   * Discrepancy information associated with this LogisticsSupport record.
   */
  logisticsDiscrepancyInfos?: Array<LogisticssupportCreateParams.LogisticsDiscrepancyInfo>;

  /**
   * The identifier that represents a Logistics Master Record.
   */
  logisticsRecordId?: string;

  /**
   * Remarks associated with this LogisticsSupport record.
   */
  logisticsRemarks?: Array<LogisticssupportCreateParams.LogisticsRemark>;

  /**
   * Support items associated with this LogisticsSupport record.
   */
  logisticsSupportItems?: Array<LogisticssupportCreateParams.LogisticsSupportItem>;

  /**
   * Transportation plans associated with this LogisticsSupport record, used to
   * coordinate maintenance efforts.
   */
  logisticsTransportationPlans?: Array<LogisticssupportCreateParams.LogisticsTransportationPlan>;

  /**
   * The maintenance status code of the aircraft which may be based on pilot
   * descriptions or evaluation codes. Contact the source provider for details.
   */
  maintStatusCode?: string;

  /**
   * The time indicating when all mission essential problems with a given aircraft
   * have been fixed and is mission capable. This datetime should be in ISO 8601 UTC
   * format with millisecond precision.
   */
  mcTime?: string;

  /**
   * The time indicating when a given aircraft breaks for a mission essential reason.
   * This datetime should be in ISO 8601 UTC format with millisecond precision.
   */
  meTime?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The organization that owns this logistics record.
   */
  owner?: string;

  /**
   * This is used to indicate whether a closed master record has been reopened.
   */
  reopenFlag?: boolean;

  /**
   * The time this report was closed, in ISO 8601 UTC format with millisecond
   * precision.
   */
  rptClosedTime?: string;

  /**
   * The supplying ICAO of the aircraft that is the subject of this
   * LogisticsSupportDetails record.
   */
  suppICAO?: string;

  /**
   * The tail number of the aircraft that is the subject of this
   * LogisticsSupportDetails record.
   */
  tailNumber?: string;
}

export namespace LogisticssupportCreateParams {
  /**
   * Discrepancy information associated with this LogisticsSupport record.
   */
  export interface LogisticsDiscrepancyInfo {
    /**
     * The discrepancy closure time, in ISO 8601 UTC format with millisecond precision.
     */
    closureTime?: string;

    /**
     * The aircraft discrepancy description.
     */
    discrepancyInfo?: string;

    /**
     * Job Control Number of the discrepancy.
     */
    jcn?: string;

    /**
     * The job start time, in ISO 8601 UTC format with millisecond precision.
     */
    jobStTime?: string;
  }

  /**
   * Remarks associated with this LogisticsSupport record.
   */
  export interface LogisticsRemark {
    /**
     * Date the remark was published or updated, in ISO 8601 UTC format, with
     * millisecond precision.
     */
    lastChanged?: string;

    /**
     * Text of the remark.
     */
    remark?: string;

    /**
     * User who published the remark.
     */
    username?: string;
  }

  /**
   * Support items associated with this LogisticsSupport record.
   */
  export interface LogisticsSupportItem {
    /**
     * This element indicates whether or not the supplied item is contained within
     * another item.
     */
    cannibalized?: boolean;

    /**
     * System generated reference id for the transportation plan. Format: TXXXXXNNNN
     * T - Transportation, Sequence Number, Node Id.
     */
    deployPlanNumber?: string;

    /**
     * The technical order name of the part ordered.
     */
    description?: string;

    /**
     * The last time this supported item was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    itemLastChangedDate?: string;

    /**
     * A number assigned by Job Control to monitor and record maintenance actions
     * required to correct the associated aircraft maintenance discrepancy. It is
     * seven, nine or twelve characters, depending on the base-specific numbering
     * scheme. If seven characters: characters 1-3 are Julian date, 4-7 are sequence
     * numbers. If nine characters: characters 1-2 are last two digits of the year,
     * characters 3-5 are Julian date, 6-9 are sequence numbers. If twelve characters:
     * characters 1-2 are last two digits of the year, 3-5 are Julian date, 6-9 are
     * sequence numbers, and 10-12 are a three-digit supplemental number.
     */
    jobControlNumber?: string;

    /**
     * The parts associated with this support item.
     */
    logisticsParts?: Array<LogisticsSupportItem.LogisticsPart>;

    /**
     * Remarks associated with this support item.
     */
    logisticsRemarks?: Array<LogisticsSupportItem.LogisticsRemark>;

    /**
     * The specialties required to implement this support item.
     */
    logisticsSpecialties?: Array<LogisticsSupportItem.LogisticsSpecialty>;

    /**
     * Military aircraft discrepancy logistics requisition ordered quantity. The
     * quantity of equipment ordered that is required to fix the aircraft.
     */
    quantity?: number;

    /**
     * The time the item is ready, in ISO 8601 UTC format with millisecond precision.
     */
    readyTime?: string;

    /**
     * The time the item is received, in ISO 8601 UTC format with millisecond
     * precision.
     */
    receivedTime?: string;

    /**
     * The type of recovery request needed. Contact the source provider for details.
     */
    recoveryRequestTypeCode?: string;

    /**
     * System generated reference id for the transportation plan. Format: TXXXXXNNNN
     * T - Transportation, Sequence Number, Node Id.
     */
    redeployPlanNumber?: string;

    /**
     * This is the Redeploy (return) Transportation Control Number/Tracking Reference
     * Number for the selected item.
     */
    redeployShipmentUnitId?: string;

    /**
     * The request or record number for this item type (Equipent, Part, or MRT).
     */
    requestNumber?: string;

    /**
     * This element indicates if the supplied item is characterized as additional
     * support.
     */
    resupportFlag?: boolean;

    /**
     * Shipment Unit Identifier is the Transportation Control Number (TCN) for shipping
     * that piece of equipment being requested.
     */
    shipmentUnitId?: string;

    /**
     * The point of contact is a free text field to add information about the
     * individual(s) with knowledge of the referenced requested or supplied item(s).
     * The default value for this field is the last name, first name, and middle
     * initial of the operator who created the records and/or generated the
     * transaction.
     */
    siPOC?: string;

    /**
     * The code that represents the International Civil Aviation Organization (ICAO)
     * designations of an airport.
     */
    sourceICAO?: string;
  }

  export namespace LogisticsSupportItem {
    /**
     * The parts associated with this support item.
     */
    export interface LogisticsPart {
      /**
       * Technical order manual figure number for the requested / supplied part.
       */
      figureNumber?: string;

      /**
       * Technical order manual index number for the requested part.
       */
      indexNumber?: string;

      /**
       * The person who validated that the sourced location has, and can supply, the
       * requested parts.
       */
      locationVerifier?: string;

      /**
       * The supply stocks for this support item.
       */
      logisticsStocks?: Array<LogisticsPart.LogisticsStock>;

      /**
       * Code for a unit of measurement.
       */
      measurementUnitCode?: string;

      /**
       * The National Stock Number of the part being requested or supplied.
       */
      nationalStockNumber?: string;

      /**
       * Requested or supplied part number.
       */
      partNumber?: string;

      /**
       * The person who validated the request for parts.
       */
      requestVerifier?: string;

      /**
       * The supply document number.
       */
      supplyDocumentNumber?: string;

      /**
       * Indicates the specified Technical Order manual holding the aircraft information
       * for use in diagnosing a problem or condition.
       */
      technicalOrderText?: string;

      /**
       * Work Unit Code (WUC), or for some aircraft types, the Reference Designator.
       */
      workUnitCode?: string;
    }

    export namespace LogisticsPart {
      /**
       * The supply stocks for this support item.
       */
      export interface LogisticsStock {
        /**
         * The quantity of available parts needed from sourceICAO.
         */
        quantity?: number;

        /**
         * The ICAO code for the primary location with available parts.
         */
        sourceICAO?: string;

        /**
         * The datetime when the parts were sourced, in ISO 8601 UTC format with
         * millisecond precision.
         */
        stockCheckTime?: string;

        /**
         * The point of contact at the sourced location.
         */
        stockPOC?: string;
      }
    }

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsRemark {
      /**
       * Date the remark was published or updated, in ISO 8601 UTC format, with
       * millisecond precision.
       */
      lastChanged?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * User who published the remark.
       */
      username?: string;
    }

    /**
     * The specialties required to implement this support item.
     */
    export interface LogisticsSpecialty {
      /**
       * The first name of the specialist.
       */
      firstName?: string;

      /**
       * The last four digits of the specialist's social security number.
       */
      last4Ssn?: string;

      /**
       * The last name of the specialist.
       */
      lastName?: string;

      /**
       * Military service rank designation.
       */
      rankCode?: string;

      /**
       * Type code that determines role of the mission response team member. TC - Team
       * Chief, TM - Team Member.
       */
      roleTypeCode?: string;

      /**
       * Skill level of the mission response team member.
       */
      skillLevel?: number;

      /**
       * Indicates where the repairs will be performed, or which shop specialty has been
       * assigned responsibility for correcting the discrepancy. Shop specialties are
       * normally listed in abbreviated format.
       */
      specialty?: string;
    }
  }

  /**
   * Transportation plans associated with this LogisticsSupport record, used to
   * coordinate maintenance efforts.
   */
  export interface LogisticsTransportationPlan {
    /**
     * Actual time of departure of first segment, in ISO 8601 UTC format with
     * millisecond precision.
     */
    actDepTime?: string;

    /**
     * These are the initial maintenance values entered based on the pilot descriptions
     * or the official maintenance evaluation code.
     */
    aircraftStatus?: string;

    /**
     * Approximate time of arrival of final segement, in ISO 8601 UTC format with
     * millisecond precision.
     */
    approxArrTime?: string;

    /**
     * GC. LGTP_CANX_DT. GD2: Date when the transportation plan was cancelled, in ISO
     * 8601 UTC format with millisecond precision.
     */
    cancelledDate?: string;

    /**
     * GC. LGTP_CLSD_DT. GD2: Date when the transportation plan was closed, in ISO 8601
     * UTC format with millisecond precision.
     */
    closedDate?: string;

    /**
     * The AMS username of the operator who alters the coordination status.
     * Automatically captured by the system.
     */
    coordinator?: string;

    /**
     * The AMS user unit_id of the operator who alters the coordination status.
     * Automatically captured by the system from table AMS_USER.
     */
    coordinatorUnit?: string;

    /**
     * Destination location ICAO.
     */
    destinationICAO?: string;

    /**
     * Transportation plan duration, expressed in the format MMM:SS.
     */
    duration?: string;

    /**
     * ETA of the final segment, in ISO 8601 UTC format with millisecond precision.
     */
    estArrTime?: string;

    /**
     * ETD of the first segment, in ISO 8601 UTC format with millisecond precision.
     */
    estDepTime?: string;

    /**
     * Last time transportation plan was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastChangedDate?: string;

    /**
     * The identifier that represents a Logistics Master Record.
     */
    logisticMasterRecordId?: string;

    /**
     * The transportation segments associated with this transportation plan.
     */
    logisticsSegments?: Array<LogisticsTransportationPlan.LogisticsSegment>;

    /**
     * Remarks associated with this transportation plan.
     */
    logisticsTransportationPlansRemarks?: Array<LogisticsTransportationPlan.LogisticsTransportationPlansRemark>;

    /**
     * The major command for the current unit.
     */
    majcom?: string;

    /**
     * Indicates whether there have been changes to changes to ICAOs, estArrTime, or
     * estDepTime since this Transportation Plan was last edited.
     */
    missionChange?: boolean;

    /**
     * Transportation plan enroute stops.
     */
    numEnrouteStops?: number;

    /**
     * The number of transloads for this Transportation Plan.
     */
    numTransLoads?: number;

    /**
     * The origin location.
     */
    originICAO?: string;

    /**
     * Defines the transporation plan as either a deployment or redeployment.
     */
    planDefinition?: string;

    /**
     * System generated reference id for the transportation plan. Format: TXXXXXNNNN
     * T - Transportation, Sequence Number, Node Id.
     */
    plansNumber?: string;

    /**
     * GDSS2 uses an 8 character serial number to uniquely identify the aircraft and
     * MDS combination. This is a portion of the full manufacturer serial number.
     */
    serialNumber?: string;

    /**
     * Transporation Coordination status code. Cancel, Send to APCC, working, agree,
     * disapprove or blank.
     */
    statusCode?: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
     * to, MIL-STD-6016 environment dependent specific type designations.
     */
    tpAircraftMDS?: string;

    /**
     * Contains the tail number displayed by GDSS2.
     */
    tpTailNumber?: string;
  }

  export namespace LogisticsTransportationPlan {
    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsSegment {
      /**
       * Airport ICAO arrival code.
       */
      arrivalICAO?: string;

      /**
       * Airport ICAO departure code.
       */
      departureICAO?: string;

      /**
       * The GDSS mission ID for this segment.
       */
      extMissionId?: string;

      /**
       * The unique identifier of the mission to which this logistics record is assigned.
       */
      idMission?: string;

      /**
       * Start air mission itinerary point identifier.
       */
      itin?: number;

      /**
       * The user generated identifier for an air mission subgroup.
       */
      missionNumber?: string;

      /**
       * The type of mission (e.g. SAAM, CHNL, etc.).
       */
      missionType?: string;

      /**
       * Transportation mode. AMC airlift, Commercial airlift, Other, or surface
       * transportation.
       */
      modeCode?: string;

      /**
       * Actual arrival time to segment destination, in ISO 8601 UTC format with
       * millisecond precision.
       */
      segActArrTime?: string;

      /**
       * Actual departure time to the segment destination, in ISO 8601 UTC format with
       * millisecond precision.
       */
      segActDepTime?: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
       * to, MIL-STD-6016 environment dependent specific type designations.
       */
      segAircraftMDS?: string;

      /**
       * GC. LGTPS_C_DT_EST_ARR. GD2: Estimated arrival time to the segment destination.
       * Only supplied when the segment is not attached to a Mission, otherwise the ETA
       * is derived from the Mission segment destination point. This datetime should be
       * in ISO 8601 UTC format with millisecond precision.
       */
      segEstArrTime?: string;

      /**
       * GC. LGTPS_C_DT_EST_DEP. GD2: Estimated departure time from the segment origin.
       * Only supplied when the segment is not attached to a Mission, otherwise the ETD
       * is derived from the Mission segment origin point. This datetime should be in ISO
       * 8601 UTC format with millisecond precision.
       */
      segEstDepTime?: string;

      /**
       * Used to sequence the segments in the transportation plan.
       */
      segmentNumber?: number;

      /**
       * The identifier that represents a specific aircraft within an aircraft type.
       */
      segTailNumber?: string;
    }

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsTransportationPlansRemark {
      /**
       * Date the remark was published or updated, in ISO 8601 UTC format, with
       * millisecond precision.
       */
      lastChanged?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * User who published the remark.
       */
      username?: string;
    }
  }
}

export interface LogisticssupportUpdateParams {
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
   * The time this report was created, in ISO 8601 UTC format with millisecond
   * precision.
   */
  rptCreatedTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  body_id?: string;

  /**
   * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
   * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
   * to, MIL-STD-6016 environment dependent specific type designations.
   */
  aircraftMDS?: string;

  /**
   * The current ICAO of the aircraft that is the subject of this
   * LogisticsSupportDetails record.
   */
  currICAO?: string;

  /**
   * The estimated time mission capable for the aircraft, in ISO 8601 UCT format with
   * millisecond precision. This is the estimated time when the aircraft is mission
   * ready.
   */
  etic?: string;

  /**
   * Logistics estimated time mission capable.
   */
  etmc?: string;

  /**
   * Optional system identifier from external systs. This field has no meaning within
   * UDL and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  extSystemId?: string;

  /**
   * This field identifies the pacing event for bringing the aircraft to Mission
   * Capable status. It is used in calculating the Estimated Time Mission Capable
   * (ETMC) value. Acceptable values are WA (Will Advise), INW (In Work), P+hhh.h
   * (where P=parts and hhh.h is the number of hours up to 999 plus tenths of hours),
   * EQ+hhh.h (EQ=equipment), MRT+hhh.h (MRT=maintenance recovery team).
   */
  logisticAction?: string;

  /**
   * Discrepancy information associated with this LogisticsSupport record.
   */
  logisticsDiscrepancyInfos?: Array<LogisticssupportUpdateParams.LogisticsDiscrepancyInfo>;

  /**
   * The identifier that represents a Logistics Master Record.
   */
  logisticsRecordId?: string;

  /**
   * Remarks associated with this LogisticsSupport record.
   */
  logisticsRemarks?: Array<LogisticssupportUpdateParams.LogisticsRemark>;

  /**
   * Support items associated with this LogisticsSupport record.
   */
  logisticsSupportItems?: Array<LogisticssupportUpdateParams.LogisticsSupportItem>;

  /**
   * Transportation plans associated with this LogisticsSupport record, used to
   * coordinate maintenance efforts.
   */
  logisticsTransportationPlans?: Array<LogisticssupportUpdateParams.LogisticsTransportationPlan>;

  /**
   * The maintenance status code of the aircraft which may be based on pilot
   * descriptions or evaluation codes. Contact the source provider for details.
   */
  maintStatusCode?: string;

  /**
   * The time indicating when all mission essential problems with a given aircraft
   * have been fixed and is mission capable. This datetime should be in ISO 8601 UTC
   * format with millisecond precision.
   */
  mcTime?: string;

  /**
   * The time indicating when a given aircraft breaks for a mission essential reason.
   * This datetime should be in ISO 8601 UTC format with millisecond precision.
   */
  meTime?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The organization that owns this logistics record.
   */
  owner?: string;

  /**
   * This is used to indicate whether a closed master record has been reopened.
   */
  reopenFlag?: boolean;

  /**
   * The time this report was closed, in ISO 8601 UTC format with millisecond
   * precision.
   */
  rptClosedTime?: string;

  /**
   * The supplying ICAO of the aircraft that is the subject of this
   * LogisticsSupportDetails record.
   */
  suppICAO?: string;

  /**
   * The tail number of the aircraft that is the subject of this
   * LogisticsSupportDetails record.
   */
  tailNumber?: string;
}

export namespace LogisticssupportUpdateParams {
  /**
   * Discrepancy information associated with this LogisticsSupport record.
   */
  export interface LogisticsDiscrepancyInfo {
    /**
     * The discrepancy closure time, in ISO 8601 UTC format with millisecond precision.
     */
    closureTime?: string;

    /**
     * The aircraft discrepancy description.
     */
    discrepancyInfo?: string;

    /**
     * Job Control Number of the discrepancy.
     */
    jcn?: string;

    /**
     * The job start time, in ISO 8601 UTC format with millisecond precision.
     */
    jobStTime?: string;
  }

  /**
   * Remarks associated with this LogisticsSupport record.
   */
  export interface LogisticsRemark {
    /**
     * Date the remark was published or updated, in ISO 8601 UTC format, with
     * millisecond precision.
     */
    lastChanged?: string;

    /**
     * Text of the remark.
     */
    remark?: string;

    /**
     * User who published the remark.
     */
    username?: string;
  }

  /**
   * Support items associated with this LogisticsSupport record.
   */
  export interface LogisticsSupportItem {
    /**
     * This element indicates whether or not the supplied item is contained within
     * another item.
     */
    cannibalized?: boolean;

    /**
     * System generated reference id for the transportation plan. Format: TXXXXXNNNN
     * T - Transportation, Sequence Number, Node Id.
     */
    deployPlanNumber?: string;

    /**
     * The technical order name of the part ordered.
     */
    description?: string;

    /**
     * The last time this supported item was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    itemLastChangedDate?: string;

    /**
     * A number assigned by Job Control to monitor and record maintenance actions
     * required to correct the associated aircraft maintenance discrepancy. It is
     * seven, nine or twelve characters, depending on the base-specific numbering
     * scheme. If seven characters: characters 1-3 are Julian date, 4-7 are sequence
     * numbers. If nine characters: characters 1-2 are last two digits of the year,
     * characters 3-5 are Julian date, 6-9 are sequence numbers. If twelve characters:
     * characters 1-2 are last two digits of the year, 3-5 are Julian date, 6-9 are
     * sequence numbers, and 10-12 are a three-digit supplemental number.
     */
    jobControlNumber?: string;

    /**
     * The parts associated with this support item.
     */
    logisticsParts?: Array<LogisticsSupportItem.LogisticsPart>;

    /**
     * Remarks associated with this support item.
     */
    logisticsRemarks?: Array<LogisticsSupportItem.LogisticsRemark>;

    /**
     * The specialties required to implement this support item.
     */
    logisticsSpecialties?: Array<LogisticsSupportItem.LogisticsSpecialty>;

    /**
     * Military aircraft discrepancy logistics requisition ordered quantity. The
     * quantity of equipment ordered that is required to fix the aircraft.
     */
    quantity?: number;

    /**
     * The time the item is ready, in ISO 8601 UTC format with millisecond precision.
     */
    readyTime?: string;

    /**
     * The time the item is received, in ISO 8601 UTC format with millisecond
     * precision.
     */
    receivedTime?: string;

    /**
     * The type of recovery request needed. Contact the source provider for details.
     */
    recoveryRequestTypeCode?: string;

    /**
     * System generated reference id for the transportation plan. Format: TXXXXXNNNN
     * T - Transportation, Sequence Number, Node Id.
     */
    redeployPlanNumber?: string;

    /**
     * This is the Redeploy (return) Transportation Control Number/Tracking Reference
     * Number for the selected item.
     */
    redeployShipmentUnitId?: string;

    /**
     * The request or record number for this item type (Equipent, Part, or MRT).
     */
    requestNumber?: string;

    /**
     * This element indicates if the supplied item is characterized as additional
     * support.
     */
    resupportFlag?: boolean;

    /**
     * Shipment Unit Identifier is the Transportation Control Number (TCN) for shipping
     * that piece of equipment being requested.
     */
    shipmentUnitId?: string;

    /**
     * The point of contact is a free text field to add information about the
     * individual(s) with knowledge of the referenced requested or supplied item(s).
     * The default value for this field is the last name, first name, and middle
     * initial of the operator who created the records and/or generated the
     * transaction.
     */
    siPOC?: string;

    /**
     * The code that represents the International Civil Aviation Organization (ICAO)
     * designations of an airport.
     */
    sourceICAO?: string;
  }

  export namespace LogisticsSupportItem {
    /**
     * The parts associated with this support item.
     */
    export interface LogisticsPart {
      /**
       * Technical order manual figure number for the requested / supplied part.
       */
      figureNumber?: string;

      /**
       * Technical order manual index number for the requested part.
       */
      indexNumber?: string;

      /**
       * The person who validated that the sourced location has, and can supply, the
       * requested parts.
       */
      locationVerifier?: string;

      /**
       * The supply stocks for this support item.
       */
      logisticsStocks?: Array<LogisticsPart.LogisticsStock>;

      /**
       * Code for a unit of measurement.
       */
      measurementUnitCode?: string;

      /**
       * The National Stock Number of the part being requested or supplied.
       */
      nationalStockNumber?: string;

      /**
       * Requested or supplied part number.
       */
      partNumber?: string;

      /**
       * The person who validated the request for parts.
       */
      requestVerifier?: string;

      /**
       * The supply document number.
       */
      supplyDocumentNumber?: string;

      /**
       * Indicates the specified Technical Order manual holding the aircraft information
       * for use in diagnosing a problem or condition.
       */
      technicalOrderText?: string;

      /**
       * Work Unit Code (WUC), or for some aircraft types, the Reference Designator.
       */
      workUnitCode?: string;
    }

    export namespace LogisticsPart {
      /**
       * The supply stocks for this support item.
       */
      export interface LogisticsStock {
        /**
         * The quantity of available parts needed from sourceICAO.
         */
        quantity?: number;

        /**
         * The ICAO code for the primary location with available parts.
         */
        sourceICAO?: string;

        /**
         * The datetime when the parts were sourced, in ISO 8601 UTC format with
         * millisecond precision.
         */
        stockCheckTime?: string;

        /**
         * The point of contact at the sourced location.
         */
        stockPOC?: string;
      }
    }

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsRemark {
      /**
       * Date the remark was published or updated, in ISO 8601 UTC format, with
       * millisecond precision.
       */
      lastChanged?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * User who published the remark.
       */
      username?: string;
    }

    /**
     * The specialties required to implement this support item.
     */
    export interface LogisticsSpecialty {
      /**
       * The first name of the specialist.
       */
      firstName?: string;

      /**
       * The last four digits of the specialist's social security number.
       */
      last4Ssn?: string;

      /**
       * The last name of the specialist.
       */
      lastName?: string;

      /**
       * Military service rank designation.
       */
      rankCode?: string;

      /**
       * Type code that determines role of the mission response team member. TC - Team
       * Chief, TM - Team Member.
       */
      roleTypeCode?: string;

      /**
       * Skill level of the mission response team member.
       */
      skillLevel?: number;

      /**
       * Indicates where the repairs will be performed, or which shop specialty has been
       * assigned responsibility for correcting the discrepancy. Shop specialties are
       * normally listed in abbreviated format.
       */
      specialty?: string;
    }
  }

  /**
   * Transportation plans associated with this LogisticsSupport record, used to
   * coordinate maintenance efforts.
   */
  export interface LogisticsTransportationPlan {
    /**
     * Actual time of departure of first segment, in ISO 8601 UTC format with
     * millisecond precision.
     */
    actDepTime?: string;

    /**
     * These are the initial maintenance values entered based on the pilot descriptions
     * or the official maintenance evaluation code.
     */
    aircraftStatus?: string;

    /**
     * Approximate time of arrival of final segement, in ISO 8601 UTC format with
     * millisecond precision.
     */
    approxArrTime?: string;

    /**
     * GC. LGTP_CANX_DT. GD2: Date when the transportation plan was cancelled, in ISO
     * 8601 UTC format with millisecond precision.
     */
    cancelledDate?: string;

    /**
     * GC. LGTP_CLSD_DT. GD2: Date when the transportation plan was closed, in ISO 8601
     * UTC format with millisecond precision.
     */
    closedDate?: string;

    /**
     * The AMS username of the operator who alters the coordination status.
     * Automatically captured by the system.
     */
    coordinator?: string;

    /**
     * The AMS user unit_id of the operator who alters the coordination status.
     * Automatically captured by the system from table AMS_USER.
     */
    coordinatorUnit?: string;

    /**
     * Destination location ICAO.
     */
    destinationICAO?: string;

    /**
     * Transportation plan duration, expressed in the format MMM:SS.
     */
    duration?: string;

    /**
     * ETA of the final segment, in ISO 8601 UTC format with millisecond precision.
     */
    estArrTime?: string;

    /**
     * ETD of the first segment, in ISO 8601 UTC format with millisecond precision.
     */
    estDepTime?: string;

    /**
     * Last time transportation plan was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastChangedDate?: string;

    /**
     * The identifier that represents a Logistics Master Record.
     */
    logisticMasterRecordId?: string;

    /**
     * The transportation segments associated with this transportation plan.
     */
    logisticsSegments?: Array<LogisticsTransportationPlan.LogisticsSegment>;

    /**
     * Remarks associated with this transportation plan.
     */
    logisticsTransportationPlansRemarks?: Array<LogisticsTransportationPlan.LogisticsTransportationPlansRemark>;

    /**
     * The major command for the current unit.
     */
    majcom?: string;

    /**
     * Indicates whether there have been changes to changes to ICAOs, estArrTime, or
     * estDepTime since this Transportation Plan was last edited.
     */
    missionChange?: boolean;

    /**
     * Transportation plan enroute stops.
     */
    numEnrouteStops?: number;

    /**
     * The number of transloads for this Transportation Plan.
     */
    numTransLoads?: number;

    /**
     * The origin location.
     */
    originICAO?: string;

    /**
     * Defines the transporation plan as either a deployment or redeployment.
     */
    planDefinition?: string;

    /**
     * System generated reference id for the transportation plan. Format: TXXXXXNNNN
     * T - Transportation, Sequence Number, Node Id.
     */
    plansNumber?: string;

    /**
     * GDSS2 uses an 8 character serial number to uniquely identify the aircraft and
     * MDS combination. This is a portion of the full manufacturer serial number.
     */
    serialNumber?: string;

    /**
     * Transporation Coordination status code. Cancel, Send to APCC, working, agree,
     * disapprove or blank.
     */
    statusCode?: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
     * to, MIL-STD-6016 environment dependent specific type designations.
     */
    tpAircraftMDS?: string;

    /**
     * Contains the tail number displayed by GDSS2.
     */
    tpTailNumber?: string;
  }

  export namespace LogisticsTransportationPlan {
    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsSegment {
      /**
       * Airport ICAO arrival code.
       */
      arrivalICAO?: string;

      /**
       * Airport ICAO departure code.
       */
      departureICAO?: string;

      /**
       * The GDSS mission ID for this segment.
       */
      extMissionId?: string;

      /**
       * The unique identifier of the mission to which this logistics record is assigned.
       */
      idMission?: string;

      /**
       * Start air mission itinerary point identifier.
       */
      itin?: number;

      /**
       * The user generated identifier for an air mission subgroup.
       */
      missionNumber?: string;

      /**
       * The type of mission (e.g. SAAM, CHNL, etc.).
       */
      missionType?: string;

      /**
       * Transportation mode. AMC airlift, Commercial airlift, Other, or surface
       * transportation.
       */
      modeCode?: string;

      /**
       * Actual arrival time to segment destination, in ISO 8601 UTC format with
       * millisecond precision.
       */
      segActArrTime?: string;

      /**
       * Actual departure time to the segment destination, in ISO 8601 UTC format with
       * millisecond precision.
       */
      segActDepTime?: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
       * to, MIL-STD-6016 environment dependent specific type designations.
       */
      segAircraftMDS?: string;

      /**
       * GC. LGTPS_C_DT_EST_ARR. GD2: Estimated arrival time to the segment destination.
       * Only supplied when the segment is not attached to a Mission, otherwise the ETA
       * is derived from the Mission segment destination point. This datetime should be
       * in ISO 8601 UTC format with millisecond precision.
       */
      segEstArrTime?: string;

      /**
       * GC. LGTPS_C_DT_EST_DEP. GD2: Estimated departure time from the segment origin.
       * Only supplied when the segment is not attached to a Mission, otherwise the ETD
       * is derived from the Mission segment origin point. This datetime should be in ISO
       * 8601 UTC format with millisecond precision.
       */
      segEstDepTime?: string;

      /**
       * Used to sequence the segments in the transportation plan.
       */
      segmentNumber?: number;

      /**
       * The identifier that represents a specific aircraft within an aircraft type.
       */
      segTailNumber?: string;
    }

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsTransportationPlansRemark {
      /**
       * Date the remark was published or updated, in ISO 8601 UTC format, with
       * millisecond precision.
       */
      lastChanged?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * User who published the remark.
       */
      username?: string;
    }
  }
}

export type LogisticssupportCreateBulkParams = Array<LogisticssupportCreateBulkParams.Body>;

export namespace LogisticssupportCreateBulkParams {
  /**
   * Comprehensive logistical details concerning the planned support of maintenance
   * operations required by an aircraft, including transportation information,
   * supplies coordination, and service personnel.
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
     * The time this report was created, in ISO 8601 UTC format with millisecond
     * precision.
     */
    rptCreatedTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
     * to, MIL-STD-6016 environment dependent specific type designations.
     */
    aircraftMDS?: string;

    /**
     * The current ICAO of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    currICAO?: string;

    /**
     * The estimated time mission capable for the aircraft, in ISO 8601 UCT format with
     * millisecond precision. This is the estimated time when the aircraft is mission
     * ready.
     */
    etic?: string;

    /**
     * Logistics estimated time mission capable.
     */
    etmc?: string;

    /**
     * Optional system identifier from external systs. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    extSystemId?: string;

    /**
     * This field identifies the pacing event for bringing the aircraft to Mission
     * Capable status. It is used in calculating the Estimated Time Mission Capable
     * (ETMC) value. Acceptable values are WA (Will Advise), INW (In Work), P+hhh.h
     * (where P=parts and hhh.h is the number of hours up to 999 plus tenths of hours),
     * EQ+hhh.h (EQ=equipment), MRT+hhh.h (MRT=maintenance recovery team).
     */
    logisticAction?: string;

    /**
     * Discrepancy information associated with this LogisticsSupport record.
     */
    logisticsDiscrepancyInfos?: Array<Body.LogisticsDiscrepancyInfo>;

    /**
     * The identifier that represents a Logistics Master Record.
     */
    logisticsRecordId?: string;

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    logisticsRemarks?: Array<Body.LogisticsRemark>;

    /**
     * Support items associated with this LogisticsSupport record.
     */
    logisticsSupportItems?: Array<Body.LogisticsSupportItem>;

    /**
     * Transportation plans associated with this LogisticsSupport record, used to
     * coordinate maintenance efforts.
     */
    logisticsTransportationPlans?: Array<Body.LogisticsTransportationPlan>;

    /**
     * The maintenance status code of the aircraft which may be based on pilot
     * descriptions or evaluation codes. Contact the source provider for details.
     */
    maintStatusCode?: string;

    /**
     * The time indicating when all mission essential problems with a given aircraft
     * have been fixed and is mission capable. This datetime should be in ISO 8601 UTC
     * format with millisecond precision.
     */
    mcTime?: string;

    /**
     * The time indicating when a given aircraft breaks for a mission essential reason.
     * This datetime should be in ISO 8601 UTC format with millisecond precision.
     */
    meTime?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The organization that owns this logistics record.
     */
    owner?: string;

    /**
     * This is used to indicate whether a closed master record has been reopened.
     */
    reopenFlag?: boolean;

    /**
     * The time this report was closed, in ISO 8601 UTC format with millisecond
     * precision.
     */
    rptClosedTime?: string;

    /**
     * The supplying ICAO of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    suppICAO?: string;

    /**
     * The tail number of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    tailNumber?: string;
  }

  export namespace Body {
    /**
     * Discrepancy information associated with this LogisticsSupport record.
     */
    export interface LogisticsDiscrepancyInfo {
      /**
       * The discrepancy closure time, in ISO 8601 UTC format with millisecond precision.
       */
      closureTime?: string;

      /**
       * The aircraft discrepancy description.
       */
      discrepancyInfo?: string;

      /**
       * Job Control Number of the discrepancy.
       */
      jcn?: string;

      /**
       * The job start time, in ISO 8601 UTC format with millisecond precision.
       */
      jobStTime?: string;
    }

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsRemark {
      /**
       * Date the remark was published or updated, in ISO 8601 UTC format, with
       * millisecond precision.
       */
      lastChanged?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * User who published the remark.
       */
      username?: string;
    }

    /**
     * Support items associated with this LogisticsSupport record.
     */
    export interface LogisticsSupportItem {
      /**
       * This element indicates whether or not the supplied item is contained within
       * another item.
       */
      cannibalized?: boolean;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      deployPlanNumber?: string;

      /**
       * The technical order name of the part ordered.
       */
      description?: string;

      /**
       * The last time this supported item was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      itemLastChangedDate?: string;

      /**
       * A number assigned by Job Control to monitor and record maintenance actions
       * required to correct the associated aircraft maintenance discrepancy. It is
       * seven, nine or twelve characters, depending on the base-specific numbering
       * scheme. If seven characters: characters 1-3 are Julian date, 4-7 are sequence
       * numbers. If nine characters: characters 1-2 are last two digits of the year,
       * characters 3-5 are Julian date, 6-9 are sequence numbers. If twelve characters:
       * characters 1-2 are last two digits of the year, 3-5 are Julian date, 6-9 are
       * sequence numbers, and 10-12 are a three-digit supplemental number.
       */
      jobControlNumber?: string;

      /**
       * The parts associated with this support item.
       */
      logisticsParts?: Array<LogisticsSupportItem.LogisticsPart>;

      /**
       * Remarks associated with this support item.
       */
      logisticsRemarks?: Array<LogisticsSupportItem.LogisticsRemark>;

      /**
       * The specialties required to implement this support item.
       */
      logisticsSpecialties?: Array<LogisticsSupportItem.LogisticsSpecialty>;

      /**
       * Military aircraft discrepancy logistics requisition ordered quantity. The
       * quantity of equipment ordered that is required to fix the aircraft.
       */
      quantity?: number;

      /**
       * The time the item is ready, in ISO 8601 UTC format with millisecond precision.
       */
      readyTime?: string;

      /**
       * The time the item is received, in ISO 8601 UTC format with millisecond
       * precision.
       */
      receivedTime?: string;

      /**
       * The type of recovery request needed. Contact the source provider for details.
       */
      recoveryRequestTypeCode?: string;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      redeployPlanNumber?: string;

      /**
       * This is the Redeploy (return) Transportation Control Number/Tracking Reference
       * Number for the selected item.
       */
      redeployShipmentUnitId?: string;

      /**
       * The request or record number for this item type (Equipent, Part, or MRT).
       */
      requestNumber?: string;

      /**
       * This element indicates if the supplied item is characterized as additional
       * support.
       */
      resupportFlag?: boolean;

      /**
       * Shipment Unit Identifier is the Transportation Control Number (TCN) for shipping
       * that piece of equipment being requested.
       */
      shipmentUnitId?: string;

      /**
       * The point of contact is a free text field to add information about the
       * individual(s) with knowledge of the referenced requested or supplied item(s).
       * The default value for this field is the last name, first name, and middle
       * initial of the operator who created the records and/or generated the
       * transaction.
       */
      siPOC?: string;

      /**
       * The code that represents the International Civil Aviation Organization (ICAO)
       * designations of an airport.
       */
      sourceICAO?: string;
    }

    export namespace LogisticsSupportItem {
      /**
       * The parts associated with this support item.
       */
      export interface LogisticsPart {
        /**
         * Technical order manual figure number for the requested / supplied part.
         */
        figureNumber?: string;

        /**
         * Technical order manual index number for the requested part.
         */
        indexNumber?: string;

        /**
         * The person who validated that the sourced location has, and can supply, the
         * requested parts.
         */
        locationVerifier?: string;

        /**
         * The supply stocks for this support item.
         */
        logisticsStocks?: Array<LogisticsPart.LogisticsStock>;

        /**
         * Code for a unit of measurement.
         */
        measurementUnitCode?: string;

        /**
         * The National Stock Number of the part being requested or supplied.
         */
        nationalStockNumber?: string;

        /**
         * Requested or supplied part number.
         */
        partNumber?: string;

        /**
         * The person who validated the request for parts.
         */
        requestVerifier?: string;

        /**
         * The supply document number.
         */
        supplyDocumentNumber?: string;

        /**
         * Indicates the specified Technical Order manual holding the aircraft information
         * for use in diagnosing a problem or condition.
         */
        technicalOrderText?: string;

        /**
         * Work Unit Code (WUC), or for some aircraft types, the Reference Designator.
         */
        workUnitCode?: string;
      }

      export namespace LogisticsPart {
        /**
         * The supply stocks for this support item.
         */
        export interface LogisticsStock {
          /**
           * The quantity of available parts needed from sourceICAO.
           */
          quantity?: number;

          /**
           * The ICAO code for the primary location with available parts.
           */
          sourceICAO?: string;

          /**
           * The datetime when the parts were sourced, in ISO 8601 UTC format with
           * millisecond precision.
           */
          stockCheckTime?: string;

          /**
           * The point of contact at the sourced location.
           */
          stockPOC?: string;
        }
      }

      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsRemark {
        /**
         * Date the remark was published or updated, in ISO 8601 UTC format, with
         * millisecond precision.
         */
        lastChanged?: string;

        /**
         * Text of the remark.
         */
        remark?: string;

        /**
         * User who published the remark.
         */
        username?: string;
      }

      /**
       * The specialties required to implement this support item.
       */
      export interface LogisticsSpecialty {
        /**
         * The first name of the specialist.
         */
        firstName?: string;

        /**
         * The last four digits of the specialist's social security number.
         */
        last4Ssn?: string;

        /**
         * The last name of the specialist.
         */
        lastName?: string;

        /**
         * Military service rank designation.
         */
        rankCode?: string;

        /**
         * Type code that determines role of the mission response team member. TC - Team
         * Chief, TM - Team Member.
         */
        roleTypeCode?: string;

        /**
         * Skill level of the mission response team member.
         */
        skillLevel?: number;

        /**
         * Indicates where the repairs will be performed, or which shop specialty has been
         * assigned responsibility for correcting the discrepancy. Shop specialties are
         * normally listed in abbreviated format.
         */
        specialty?: string;
      }
    }

    /**
     * Transportation plans associated with this LogisticsSupport record, used to
     * coordinate maintenance efforts.
     */
    export interface LogisticsTransportationPlan {
      /**
       * Actual time of departure of first segment, in ISO 8601 UTC format with
       * millisecond precision.
       */
      actDepTime?: string;

      /**
       * These are the initial maintenance values entered based on the pilot descriptions
       * or the official maintenance evaluation code.
       */
      aircraftStatus?: string;

      /**
       * Approximate time of arrival of final segement, in ISO 8601 UTC format with
       * millisecond precision.
       */
      approxArrTime?: string;

      /**
       * GC. LGTP_CANX_DT. GD2: Date when the transportation plan was cancelled, in ISO
       * 8601 UTC format with millisecond precision.
       */
      cancelledDate?: string;

      /**
       * GC. LGTP_CLSD_DT. GD2: Date when the transportation plan was closed, in ISO 8601
       * UTC format with millisecond precision.
       */
      closedDate?: string;

      /**
       * The AMS username of the operator who alters the coordination status.
       * Automatically captured by the system.
       */
      coordinator?: string;

      /**
       * The AMS user unit_id of the operator who alters the coordination status.
       * Automatically captured by the system from table AMS_USER.
       */
      coordinatorUnit?: string;

      /**
       * Destination location ICAO.
       */
      destinationICAO?: string;

      /**
       * Transportation plan duration, expressed in the format MMM:SS.
       */
      duration?: string;

      /**
       * ETA of the final segment, in ISO 8601 UTC format with millisecond precision.
       */
      estArrTime?: string;

      /**
       * ETD of the first segment, in ISO 8601 UTC format with millisecond precision.
       */
      estDepTime?: string;

      /**
       * Last time transportation plan was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      lastChangedDate?: string;

      /**
       * The identifier that represents a Logistics Master Record.
       */
      logisticMasterRecordId?: string;

      /**
       * The transportation segments associated with this transportation plan.
       */
      logisticsSegments?: Array<LogisticsTransportationPlan.LogisticsSegment>;

      /**
       * Remarks associated with this transportation plan.
       */
      logisticsTransportationPlansRemarks?: Array<LogisticsTransportationPlan.LogisticsTransportationPlansRemark>;

      /**
       * The major command for the current unit.
       */
      majcom?: string;

      /**
       * Indicates whether there have been changes to changes to ICAOs, estArrTime, or
       * estDepTime since this Transportation Plan was last edited.
       */
      missionChange?: boolean;

      /**
       * Transportation plan enroute stops.
       */
      numEnrouteStops?: number;

      /**
       * The number of transloads for this Transportation Plan.
       */
      numTransLoads?: number;

      /**
       * The origin location.
       */
      originICAO?: string;

      /**
       * Defines the transporation plan as either a deployment or redeployment.
       */
      planDefinition?: string;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      plansNumber?: string;

      /**
       * GDSS2 uses an 8 character serial number to uniquely identify the aircraft and
       * MDS combination. This is a portion of the full manufacturer serial number.
       */
      serialNumber?: string;

      /**
       * Transporation Coordination status code. Cancel, Send to APCC, working, agree,
       * disapprove or blank.
       */
      statusCode?: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
       * to, MIL-STD-6016 environment dependent specific type designations.
       */
      tpAircraftMDS?: string;

      /**
       * Contains the tail number displayed by GDSS2.
       */
      tpTailNumber?: string;
    }

    export namespace LogisticsTransportationPlan {
      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsSegment {
        /**
         * Airport ICAO arrival code.
         */
        arrivalICAO?: string;

        /**
         * Airport ICAO departure code.
         */
        departureICAO?: string;

        /**
         * The GDSS mission ID for this segment.
         */
        extMissionId?: string;

        /**
         * The unique identifier of the mission to which this logistics record is assigned.
         */
        idMission?: string;

        /**
         * Start air mission itinerary point identifier.
         */
        itin?: number;

        /**
         * The user generated identifier for an air mission subgroup.
         */
        missionNumber?: string;

        /**
         * The type of mission (e.g. SAAM, CHNL, etc.).
         */
        missionType?: string;

        /**
         * Transportation mode. AMC airlift, Commercial airlift, Other, or surface
         * transportation.
         */
        modeCode?: string;

        /**
         * Actual arrival time to segment destination, in ISO 8601 UTC format with
         * millisecond precision.
         */
        segActArrTime?: string;

        /**
         * Actual departure time to the segment destination, in ISO 8601 UTC format with
         * millisecond precision.
         */
        segActDepTime?: string;

        /**
         * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
         * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
         * to, MIL-STD-6016 environment dependent specific type designations.
         */
        segAircraftMDS?: string;

        /**
         * GC. LGTPS_C_DT_EST_ARR. GD2: Estimated arrival time to the segment destination.
         * Only supplied when the segment is not attached to a Mission, otherwise the ETA
         * is derived from the Mission segment destination point. This datetime should be
         * in ISO 8601 UTC format with millisecond precision.
         */
        segEstArrTime?: string;

        /**
         * GC. LGTPS_C_DT_EST_DEP. GD2: Estimated departure time from the segment origin.
         * Only supplied when the segment is not attached to a Mission, otherwise the ETD
         * is derived from the Mission segment origin point. This datetime should be in ISO
         * 8601 UTC format with millisecond precision.
         */
        segEstDepTime?: string;

        /**
         * Used to sequence the segments in the transportation plan.
         */
        segmentNumber?: number;

        /**
         * The identifier that represents a specific aircraft within an aircraft type.
         */
        segTailNumber?: string;
      }

      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsTransportationPlansRemark {
        /**
         * Date the remark was published or updated, in ISO 8601 UTC format, with
         * millisecond precision.
         */
        lastChanged?: string;

        /**
         * Text of the remark.
         */
        remark?: string;

        /**
         * User who published the remark.
         */
        username?: string;
      }
    }
  }
}

export type LogisticssupportFileCreateParams = Array<LogisticssupportFileCreateParams.Body>;

export namespace LogisticssupportFileCreateParams {
  /**
   * Comprehensive logistical details concerning the planned support of maintenance
   * operations required by an aircraft, including transportation information,
   * supplies coordination, and service personnel.
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
     * The time this report was created, in ISO 8601 UTC format with millisecond
     * precision.
     */
    rptCreatedTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
     * to, MIL-STD-6016 environment dependent specific type designations.
     */
    aircraftMDS?: string;

    /**
     * The current ICAO of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    currICAO?: string;

    /**
     * The estimated time mission capable for the aircraft, in ISO 8601 UCT format with
     * millisecond precision. This is the estimated time when the aircraft is mission
     * ready.
     */
    etic?: string;

    /**
     * Logistics estimated time mission capable.
     */
    etmc?: string;

    /**
     * Optional system identifier from external systs. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    extSystemId?: string;

    /**
     * This field identifies the pacing event for bringing the aircraft to Mission
     * Capable status. It is used in calculating the Estimated Time Mission Capable
     * (ETMC) value. Acceptable values are WA (Will Advise), INW (In Work), P+hhh.h
     * (where P=parts and hhh.h is the number of hours up to 999 plus tenths of hours),
     * EQ+hhh.h (EQ=equipment), MRT+hhh.h (MRT=maintenance recovery team).
     */
    logisticAction?: string;

    /**
     * Discrepancy information associated with this LogisticsSupport record.
     */
    logisticsDiscrepancyInfos?: Array<Body.LogisticsDiscrepancyInfo>;

    /**
     * The identifier that represents a Logistics Master Record.
     */
    logisticsRecordId?: string;

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    logisticsRemarks?: Array<Body.LogisticsRemark>;

    /**
     * Support items associated with this LogisticsSupport record.
     */
    logisticsSupportItems?: Array<Body.LogisticsSupportItem>;

    /**
     * Transportation plans associated with this LogisticsSupport record, used to
     * coordinate maintenance efforts.
     */
    logisticsTransportationPlans?: Array<Body.LogisticsTransportationPlan>;

    /**
     * The maintenance status code of the aircraft which may be based on pilot
     * descriptions or evaluation codes. Contact the source provider for details.
     */
    maintStatusCode?: string;

    /**
     * The time indicating when all mission essential problems with a given aircraft
     * have been fixed and is mission capable. This datetime should be in ISO 8601 UTC
     * format with millisecond precision.
     */
    mcTime?: string;

    /**
     * The time indicating when a given aircraft breaks for a mission essential reason.
     * This datetime should be in ISO 8601 UTC format with millisecond precision.
     */
    meTime?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The organization that owns this logistics record.
     */
    owner?: string;

    /**
     * This is used to indicate whether a closed master record has been reopened.
     */
    reopenFlag?: boolean;

    /**
     * The time this report was closed, in ISO 8601 UTC format with millisecond
     * precision.
     */
    rptClosedTime?: string;

    /**
     * The supplying ICAO of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    suppICAO?: string;

    /**
     * The tail number of the aircraft that is the subject of this
     * LogisticsSupportDetails record.
     */
    tailNumber?: string;
  }

  export namespace Body {
    /**
     * Discrepancy information associated with this LogisticsSupport record.
     */
    export interface LogisticsDiscrepancyInfo {
      /**
       * The discrepancy closure time, in ISO 8601 UTC format with millisecond precision.
       */
      closureTime?: string;

      /**
       * The aircraft discrepancy description.
       */
      discrepancyInfo?: string;

      /**
       * Job Control Number of the discrepancy.
       */
      jcn?: string;

      /**
       * The job start time, in ISO 8601 UTC format with millisecond precision.
       */
      jobStTime?: string;
    }

    /**
     * Remarks associated with this LogisticsSupport record.
     */
    export interface LogisticsRemark {
      /**
       * Date the remark was published or updated, in ISO 8601 UTC format, with
       * millisecond precision.
       */
      lastChanged?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * User who published the remark.
       */
      username?: string;
    }

    /**
     * Support items associated with this LogisticsSupport record.
     */
    export interface LogisticsSupportItem {
      /**
       * This element indicates whether or not the supplied item is contained within
       * another item.
       */
      cannibalized?: boolean;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      deployPlanNumber?: string;

      /**
       * The technical order name of the part ordered.
       */
      description?: string;

      /**
       * The last time this supported item was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      itemLastChangedDate?: string;

      /**
       * A number assigned by Job Control to monitor and record maintenance actions
       * required to correct the associated aircraft maintenance discrepancy. It is
       * seven, nine or twelve characters, depending on the base-specific numbering
       * scheme. If seven characters: characters 1-3 are Julian date, 4-7 are sequence
       * numbers. If nine characters: characters 1-2 are last two digits of the year,
       * characters 3-5 are Julian date, 6-9 are sequence numbers. If twelve characters:
       * characters 1-2 are last two digits of the year, 3-5 are Julian date, 6-9 are
       * sequence numbers, and 10-12 are a three-digit supplemental number.
       */
      jobControlNumber?: string;

      /**
       * The parts associated with this support item.
       */
      logisticsParts?: Array<LogisticsSupportItem.LogisticsPart>;

      /**
       * Remarks associated with this support item.
       */
      logisticsRemarks?: Array<LogisticsSupportItem.LogisticsRemark>;

      /**
       * The specialties required to implement this support item.
       */
      logisticsSpecialties?: Array<LogisticsSupportItem.LogisticsSpecialty>;

      /**
       * Military aircraft discrepancy logistics requisition ordered quantity. The
       * quantity of equipment ordered that is required to fix the aircraft.
       */
      quantity?: number;

      /**
       * The time the item is ready, in ISO 8601 UTC format with millisecond precision.
       */
      readyTime?: string;

      /**
       * The time the item is received, in ISO 8601 UTC format with millisecond
       * precision.
       */
      receivedTime?: string;

      /**
       * The type of recovery request needed. Contact the source provider for details.
       */
      recoveryRequestTypeCode?: string;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      redeployPlanNumber?: string;

      /**
       * This is the Redeploy (return) Transportation Control Number/Tracking Reference
       * Number for the selected item.
       */
      redeployShipmentUnitId?: string;

      /**
       * The request or record number for this item type (Equipent, Part, or MRT).
       */
      requestNumber?: string;

      /**
       * This element indicates if the supplied item is characterized as additional
       * support.
       */
      resupportFlag?: boolean;

      /**
       * Shipment Unit Identifier is the Transportation Control Number (TCN) for shipping
       * that piece of equipment being requested.
       */
      shipmentUnitId?: string;

      /**
       * The point of contact is a free text field to add information about the
       * individual(s) with knowledge of the referenced requested or supplied item(s).
       * The default value for this field is the last name, first name, and middle
       * initial of the operator who created the records and/or generated the
       * transaction.
       */
      siPOC?: string;

      /**
       * The code that represents the International Civil Aviation Organization (ICAO)
       * designations of an airport.
       */
      sourceICAO?: string;
    }

    export namespace LogisticsSupportItem {
      /**
       * The parts associated with this support item.
       */
      export interface LogisticsPart {
        /**
         * Technical order manual figure number for the requested / supplied part.
         */
        figureNumber?: string;

        /**
         * Technical order manual index number for the requested part.
         */
        indexNumber?: string;

        /**
         * The person who validated that the sourced location has, and can supply, the
         * requested parts.
         */
        locationVerifier?: string;

        /**
         * The supply stocks for this support item.
         */
        logisticsStocks?: Array<LogisticsPart.LogisticsStock>;

        /**
         * Code for a unit of measurement.
         */
        measurementUnitCode?: string;

        /**
         * The National Stock Number of the part being requested or supplied.
         */
        nationalStockNumber?: string;

        /**
         * Requested or supplied part number.
         */
        partNumber?: string;

        /**
         * The person who validated the request for parts.
         */
        requestVerifier?: string;

        /**
         * The supply document number.
         */
        supplyDocumentNumber?: string;

        /**
         * Indicates the specified Technical Order manual holding the aircraft information
         * for use in diagnosing a problem or condition.
         */
        technicalOrderText?: string;

        /**
         * Work Unit Code (WUC), or for some aircraft types, the Reference Designator.
         */
        workUnitCode?: string;
      }

      export namespace LogisticsPart {
        /**
         * The supply stocks for this support item.
         */
        export interface LogisticsStock {
          /**
           * The quantity of available parts needed from sourceICAO.
           */
          quantity?: number;

          /**
           * The ICAO code for the primary location with available parts.
           */
          sourceICAO?: string;

          /**
           * The datetime when the parts were sourced, in ISO 8601 UTC format with
           * millisecond precision.
           */
          stockCheckTime?: string;

          /**
           * The point of contact at the sourced location.
           */
          stockPOC?: string;
        }
      }

      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsRemark {
        /**
         * Date the remark was published or updated, in ISO 8601 UTC format, with
         * millisecond precision.
         */
        lastChanged?: string;

        /**
         * Text of the remark.
         */
        remark?: string;

        /**
         * User who published the remark.
         */
        username?: string;
      }

      /**
       * The specialties required to implement this support item.
       */
      export interface LogisticsSpecialty {
        /**
         * The first name of the specialist.
         */
        firstName?: string;

        /**
         * The last four digits of the specialist's social security number.
         */
        last4Ssn?: string;

        /**
         * The last name of the specialist.
         */
        lastName?: string;

        /**
         * Military service rank designation.
         */
        rankCode?: string;

        /**
         * Type code that determines role of the mission response team member. TC - Team
         * Chief, TM - Team Member.
         */
        roleTypeCode?: string;

        /**
         * Skill level of the mission response team member.
         */
        skillLevel?: number;

        /**
         * Indicates where the repairs will be performed, or which shop specialty has been
         * assigned responsibility for correcting the discrepancy. Shop specialties are
         * normally listed in abbreviated format.
         */
        specialty?: string;
      }
    }

    /**
     * Transportation plans associated with this LogisticsSupport record, used to
     * coordinate maintenance efforts.
     */
    export interface LogisticsTransportationPlan {
      /**
       * Actual time of departure of first segment, in ISO 8601 UTC format with
       * millisecond precision.
       */
      actDepTime?: string;

      /**
       * These are the initial maintenance values entered based on the pilot descriptions
       * or the official maintenance evaluation code.
       */
      aircraftStatus?: string;

      /**
       * Approximate time of arrival of final segement, in ISO 8601 UTC format with
       * millisecond precision.
       */
      approxArrTime?: string;

      /**
       * GC. LGTP_CANX_DT. GD2: Date when the transportation plan was cancelled, in ISO
       * 8601 UTC format with millisecond precision.
       */
      cancelledDate?: string;

      /**
       * GC. LGTP_CLSD_DT. GD2: Date when the transportation plan was closed, in ISO 8601
       * UTC format with millisecond precision.
       */
      closedDate?: string;

      /**
       * The AMS username of the operator who alters the coordination status.
       * Automatically captured by the system.
       */
      coordinator?: string;

      /**
       * The AMS user unit_id of the operator who alters the coordination status.
       * Automatically captured by the system from table AMS_USER.
       */
      coordinatorUnit?: string;

      /**
       * Destination location ICAO.
       */
      destinationICAO?: string;

      /**
       * Transportation plan duration, expressed in the format MMM:SS.
       */
      duration?: string;

      /**
       * ETA of the final segment, in ISO 8601 UTC format with millisecond precision.
       */
      estArrTime?: string;

      /**
       * ETD of the first segment, in ISO 8601 UTC format with millisecond precision.
       */
      estDepTime?: string;

      /**
       * Last time transportation plan was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      lastChangedDate?: string;

      /**
       * The identifier that represents a Logistics Master Record.
       */
      logisticMasterRecordId?: string;

      /**
       * The transportation segments associated with this transportation plan.
       */
      logisticsSegments?: Array<LogisticsTransportationPlan.LogisticsSegment>;

      /**
       * Remarks associated with this transportation plan.
       */
      logisticsTransportationPlansRemarks?: Array<LogisticsTransportationPlan.LogisticsTransportationPlansRemark>;

      /**
       * The major command for the current unit.
       */
      majcom?: string;

      /**
       * Indicates whether there have been changes to changes to ICAOs, estArrTime, or
       * estDepTime since this Transportation Plan was last edited.
       */
      missionChange?: boolean;

      /**
       * Transportation plan enroute stops.
       */
      numEnrouteStops?: number;

      /**
       * The number of transloads for this Transportation Plan.
       */
      numTransLoads?: number;

      /**
       * The origin location.
       */
      originICAO?: string;

      /**
       * Defines the transporation plan as either a deployment or redeployment.
       */
      planDefinition?: string;

      /**
       * System generated reference id for the transportation plan. Format: TXXXXXNNNN
       * T - Transportation, Sequence Number, Node Id.
       */
      plansNumber?: string;

      /**
       * GDSS2 uses an 8 character serial number to uniquely identify the aircraft and
       * MDS combination. This is a portion of the full manufacturer serial number.
       */
      serialNumber?: string;

      /**
       * Transporation Coordination status code. Cancel, Send to APCC, working, agree,
       * disapprove or blank.
       */
      statusCode?: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
       * to, MIL-STD-6016 environment dependent specific type designations.
       */
      tpAircraftMDS?: string;

      /**
       * Contains the tail number displayed by GDSS2.
       */
      tpTailNumber?: string;
    }

    export namespace LogisticsTransportationPlan {
      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsSegment {
        /**
         * Airport ICAO arrival code.
         */
        arrivalICAO?: string;

        /**
         * Airport ICAO departure code.
         */
        departureICAO?: string;

        /**
         * The GDSS mission ID for this segment.
         */
        extMissionId?: string;

        /**
         * The unique identifier of the mission to which this logistics record is assigned.
         */
        idMission?: string;

        /**
         * Start air mission itinerary point identifier.
         */
        itin?: number;

        /**
         * The user generated identifier for an air mission subgroup.
         */
        missionNumber?: string;

        /**
         * The type of mission (e.g. SAAM, CHNL, etc.).
         */
        missionType?: string;

        /**
         * Transportation mode. AMC airlift, Commercial airlift, Other, or surface
         * transportation.
         */
        modeCode?: string;

        /**
         * Actual arrival time to segment destination, in ISO 8601 UTC format with
         * millisecond precision.
         */
        segActArrTime?: string;

        /**
         * Actual departure time to the segment destination, in ISO 8601 UTC format with
         * millisecond precision.
         */
        segActDepTime?: string;

        /**
         * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
         * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
         * to, MIL-STD-6016 environment dependent specific type designations.
         */
        segAircraftMDS?: string;

        /**
         * GC. LGTPS_C_DT_EST_ARR. GD2: Estimated arrival time to the segment destination.
         * Only supplied when the segment is not attached to a Mission, otherwise the ETA
         * is derived from the Mission segment destination point. This datetime should be
         * in ISO 8601 UTC format with millisecond precision.
         */
        segEstArrTime?: string;

        /**
         * GC. LGTPS_C_DT_EST_DEP. GD2: Estimated departure time from the segment origin.
         * Only supplied when the segment is not attached to a Mission, otherwise the ETD
         * is derived from the Mission segment origin point. This datetime should be in ISO
         * 8601 UTC format with millisecond precision.
         */
        segEstDepTime?: string;

        /**
         * Used to sequence the segments in the transportation plan.
         */
        segmentNumber?: number;

        /**
         * The identifier that represents a specific aircraft within an aircraft type.
         */
        segTailNumber?: string;
      }

      /**
       * Remarks associated with this LogisticsSupport record.
       */
      export interface LogisticsTransportationPlansRemark {
        /**
         * Date the remark was published or updated, in ISO 8601 UTC format, with
         * millisecond precision.
         */
        lastChanged?: string;

        /**
         * Text of the remark.
         */
        remark?: string;

        /**
         * User who published the remark.
         */
        username?: string;
      }
    }
  }
}

export interface LogisticssupportTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

Logisticssupport.History = History;

export declare namespace Logisticssupport {
  export {
    type LogisticssupportListResponse as LogisticssupportListResponse,
    type LogisticssupportCountResponse as LogisticssupportCountResponse,
    type LogisticssupportGetResponse as LogisticssupportGetResponse,
    type LogisticssupportTupleResponse as LogisticssupportTupleResponse,
    type LogisticssupportCreateParams as LogisticssupportCreateParams,
    type LogisticssupportUpdateParams as LogisticssupportUpdateParams,
    type LogisticssupportCreateBulkParams as LogisticssupportCreateBulkParams,
    type LogisticssupportFileCreateParams as LogisticssupportFileCreateParams,
    type LogisticssupportTupleParams as LogisticssupportTupleParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
  };
}
