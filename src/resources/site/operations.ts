// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Operations extends APIResource {
  /**
   * Service operation to take a single siteoperations object as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: OperationCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/siteoperations', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single siteoperations record by its unique ID passed
   * as a path parameter.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<OperationRetrieveResponse> {
    return this._client.get(`/udl/siteoperations/${id}`, options);
  }

  /**
   * Service operation to update a single siteoperations record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(pathId: string, body: OperationUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/udl/siteoperations/${pathId}`, {
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
  list(query: OperationListParams, options?: Core.RequestOptions): Core.APIPromise<OperationListResponse> {
    return this._client.get('/udl/siteoperations', { query, ...options });
  }

  /**
   * Service operation to delete a siteoperations record specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/siteoperations/${id}`, {
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
  count(query: OperationCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/siteoperations/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * siteoperations records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(body: OperationCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/siteoperations/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple siteoperations records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  createBulkV2(body: OperationCreateBulkV2Params, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-siteoperations', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/siteoperations/queryhelp', {
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
  tuple(query: OperationTupleParams, options?: Core.RequestOptions): Core.APIPromise<OperationTupleResponse> {
    return this._client.get('/udl/siteoperations/tuple', { query, ...options });
  }
}

/**
 * Site operating details concerning the hours of operation, operational
 * limitations, site navigation, and waivers associated with the Site.
 */
export interface OperationRetrieveResponse {
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
   * The ID of the parent site.
   */
  idSite: string;

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
   * Collection providing hours of operation and other information specific to a day
   * of the week.
   */
  dailyOperations?: Array<OperationRetrieveResponse.DailyOperation>;

  /**
   * The name of the person who made the most recent change to data in the
   * DailyOperations collection.
   */
  dopsLastChangedBy?: string;

  /**
   * The datetime of the most recent change made to data in the DailyOperations
   * collection, in ISO 8601 UTC format with millisecond precision.
   */
  dopsLastChangedDate?: string;

  /**
   * The reason for the most recent change to data in the dailyOperations collection.
   */
  dopsLastChangedReason?: string;

  /**
   * Id of the associated launchSite entity.
   */
  idLaunchSite?: string;

  /**
   * Collection providing maximum on ground (MOG) information for specific aircraft
   * at the site associated with this SiteOperations record.
   */
  maximumOnGrounds?: Array<OperationRetrieveResponse.MaximumOnGround>;

  /**
   * The name of the person who made the most recent change to data in the
   * MaximumOnGrounds collection.
   */
  mogsLastChangedBy?: string;

  /**
   * The datetime of the most recent change made to data in the MaximumOnGrounds
   * collection, in ISO 8601 UTC format with millisecond precision.
   */
  mogsLastChangedDate?: string;

  /**
   * The reason for the most recent change to data in the MaximumOnGrounds
   * collection.
   */
  mogsLastChangedReason?: string;

  /**
   * Collection providing relevant information in the event of deviations/exceptions
   * to normal operations.
   */
  operationalDeviations?: Array<OperationRetrieveResponse.OperationalDeviation>;

  /**
   * Collection of planning information associated with this SiteOperations record.
   */
  operationalPlannings?: Array<OperationRetrieveResponse.OperationalPlanning>;

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
   * Collection detailing operational pathways at the Site associated with this
   * SiteOperations record.
   */
  pathways?: Array<OperationRetrieveResponse.Pathway>;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;

  /**
   * Collection documenting operational waivers that have been issued for the Site
   * associated with this record.
   */
  waivers?: Array<OperationRetrieveResponse.Waiver>;
}

export namespace OperationRetrieveResponse {
  /**
   * Collection providing hours of operation and other information specific to a day
   * of the week.
   */
  export interface DailyOperation {
    /**
     * The day of the week to which this operational information pertains.
     */
    dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

    /**
     * A collection containing the operational start and stop times scheduled for the
     * day of the week specified.
     */
    operatingHours?: Array<DailyOperation.OperatingHour>;

    /**
     * The name or type of operation to which this information pertains.
     */
    operationName?: string;

    /**
     * The name of the person who made the most recent change to this DailyOperation
     * data.
     */
    ophrsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this DailyOperation data, in ISO
     * 8601 UTC format with millisecond precision.
     */
    ophrsLastChangedDate?: string;
  }

  export namespace DailyOperation {
    /**
     * A collection containing the operational start and stop times scheduled for the
     * day of the week specified.
     */
    export interface OperatingHour {
      /**
       * The Zulu (UTC) operational start time, expressed in ISO 8601 format as HH:MM.
       */
      opStartTime?: string;

      /**
       * The Zulu (UTC) operational stop time, expressed in ISO 8601 format as HH:MM.
       */
      opStopTime?: string;
    }
  }

  /**
   * Collection providing maximum on ground (MOG) information for specific aircraft
   * at the site associated with this SiteOperations record.
   */
  export interface MaximumOnGround {
    /**
     * The Model Design Series (MDS) designation of the aircraft to which this maximum
     * on ground (MOG) data pertains.
     */
    aircraftMDS?: string;

    /**
     * Maximum on ground (MOG) number of contingent aircraft based on spacing and
     * manpower, for the aircraft type specified.
     */
    contingencyMOG?: number;

    /**
     * The name of the person who made the most recent change to this maximum on ground
     * data.
     */
    mogLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this maximum on ground data, in
     * ISO 8601 UTC format with millisecond precision.
     */
    mogLastChangedDate?: string;

    /**
     * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
     * and manpower, for the aircraft type specified.
     */
    wideParkingMOG?: number;

    /**
     * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
     * and manpower, for the aircraft type specified.
     */
    wideWorkingMOG?: number;
  }

  /**
   * Collection providing relevant information in the event of deviations/exceptions
   * to normal operations.
   */
  export interface OperationalDeviation {
    /**
     * The Model Design Series (MDS) designation of the aircraft affected by this
     * operational deviation.
     */
    affectedAircraftMDS?: string;

    /**
     * The maximum on ground (MOG) number for aircraft affected by this operational
     * deviation.
     */
    affectedMOG?: number;

    /**
     * On ground time for aircraft affected by this operational deviation.
     */
    aircraftOnGroundTime?: string;

    /**
     * Rest time for crew affected by this operational deviation.
     */
    crewRestTime?: string;

    /**
     * The name of the person who made the most recent change to this
     * OperationalDeviation data.
     */
    odLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this OperationalDeviation data,
     * in ISO 8601 UTC format with millisecond precision.
     */
    odLastChangedDate?: string;

    /**
     * Text remark regarding this operational deviation.
     */
    odRemark?: string;
  }

  /**
   * Collection of planning information associated with this SiteOperations record.
   */
  export interface OperationalPlanning {
    /**
     * The end date of this operational planning, in ISO8601 UTC format with
     * millisecond precision.
     */
    opEndDate?: string;

    /**
     * The name of the person who made the most recent change made to this
     * OperationalPlanning data.
     */
    opLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this OperationalPlanning data, in
     * ISO8601 UTC format with millisecond precision.
     */
    opLastChangedDate?: string;

    /**
     * Remark text regarding this operation planning.
     */
    opRemark?: string;

    /**
     * The person, unit, organization, etc. responsible for this operation planning.
     */
    opSource?: string;

    /**
     * The start date of this operational planning, in ISO8601 UTC format with
     * millisecond precision.
     */
    opStartDate?: string;

    /**
     * The status of this operational planning.
     */
    opStatus?: string;
  }

  /**
   * Collection detailing operational pathways at the Site associated with this
   * SiteOperations record.
   */
  export interface Pathway {
    /**
     * Text defining this pathway from its constituent parts.
     */
    pwDefinition?: string;

    /**
     * The name of the person who made the most recent change to this Pathway data.
     */
    pwLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this Pathway data, in ISO 8601
     * UTC format with millisecond precision.
     */
    pwLastChangedDate?: string;

    /**
     * The type of paths that constitute this pathway.
     */
    pwType?: string;

    /**
     * The intended use of this pathway.
     */
    pwUsage?: string;
  }

  /**
   * Collection documenting operational waivers that have been issued for the Site
   * associated with this record.
   */
  export interface Waiver {
    /**
     * The expiration date of this waiver, in ISO8601 UTC format with millisecond
     * precision.
     */
    expirationDate?: string;

    /**
     * Boolean indicating whether or not this waiver has expired.
     */
    hasExpired?: boolean;

    /**
     * The issue date of this waiver, in ISO8601 UTC format with millisecond precision.
     */
    issueDate?: string;

    /**
     * The name of the person who issued this waiver.
     */
    issuerName?: string;

    /**
     * The name of the person requesting this waiver.
     */
    requesterName?: string;

    /**
     * The phone number of the person requesting this waiver.
     */
    requesterPhoneNumber?: string;

    /**
     * The unit requesting this waiver.
     */
    requestingUnit?: string;

    /**
     * Description of the entities to which this waiver applies.
     */
    waiverAppliesTo?: string;

    /**
     * The description of this waiver.
     */
    waiverDescription?: string;

    /**
     * The name of the person who made the most recent change to this Waiver data.
     */
    waiverLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this waiver data, in ISO8601 UTC
     * format with millisecond precision.
     */
    waiverLastChangedDate?: string;
  }
}

export type OperationListResponse = Array<OperationListResponse.OperationListResponseItem>;

export namespace OperationListResponse {
  /**
   * Site operating details concerning the hours of operation, operational
   * limitations, site navigation, and waivers associated with the Site.
   */
  export interface OperationListResponseItem {
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
     * The ID of the parent site.
     */
    idSite: string;

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
     * Collection providing hours of operation and other information specific to a day
     * of the week.
     */
    dailyOperations?: Array<OperationListResponseItem.DailyOperation>;

    /**
     * The name of the person who made the most recent change to data in the
     * DailyOperations collection.
     */
    dopsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to data in the DailyOperations
     * collection, in ISO 8601 UTC format with millisecond precision.
     */
    dopsLastChangedDate?: string;

    /**
     * The reason for the most recent change to data in the dailyOperations collection.
     */
    dopsLastChangedReason?: string;

    /**
     * Id of the associated launchSite entity.
     */
    idLaunchSite?: string;

    /**
     * Collection providing maximum on ground (MOG) information for specific aircraft
     * at the site associated with this SiteOperations record.
     */
    maximumOnGrounds?: Array<OperationListResponseItem.MaximumOnGround>;

    /**
     * The name of the person who made the most recent change to data in the
     * MaximumOnGrounds collection.
     */
    mogsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to data in the MaximumOnGrounds
     * collection, in ISO 8601 UTC format with millisecond precision.
     */
    mogsLastChangedDate?: string;

    /**
     * The reason for the most recent change to data in the MaximumOnGrounds
     * collection.
     */
    mogsLastChangedReason?: string;

    /**
     * Collection providing relevant information in the event of deviations/exceptions
     * to normal operations.
     */
    operationalDeviations?: Array<OperationListResponseItem.OperationalDeviation>;

    /**
     * Collection of planning information associated with this SiteOperations record.
     */
    operationalPlannings?: Array<OperationListResponseItem.OperationalPlanning>;

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
     * Collection detailing operational pathways at the Site associated with this
     * SiteOperations record.
     */
    pathways?: Array<OperationListResponseItem.Pathway>;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Time the row was updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;

    /**
     * Collection documenting operational waivers that have been issued for the Site
     * associated with this record.
     */
    waivers?: Array<OperationListResponseItem.Waiver>;
  }

  export namespace OperationListResponseItem {
    /**
     * Collection providing hours of operation and other information specific to a day
     * of the week.
     */
    export interface DailyOperation {
      /**
       * The day of the week to which this operational information pertains.
       */
      dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

      /**
       * A collection containing the operational start and stop times scheduled for the
       * day of the week specified.
       */
      operatingHours?: Array<DailyOperation.OperatingHour>;

      /**
       * The name or type of operation to which this information pertains.
       */
      operationName?: string;

      /**
       * The name of the person who made the most recent change to this DailyOperation
       * data.
       */
      ophrsLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this DailyOperation data, in ISO
       * 8601 UTC format with millisecond precision.
       */
      ophrsLastChangedDate?: string;
    }

    export namespace DailyOperation {
      /**
       * A collection containing the operational start and stop times scheduled for the
       * day of the week specified.
       */
      export interface OperatingHour {
        /**
         * The Zulu (UTC) operational start time, expressed in ISO 8601 format as HH:MM.
         */
        opStartTime?: string;

        /**
         * The Zulu (UTC) operational stop time, expressed in ISO 8601 format as HH:MM.
         */
        opStopTime?: string;
      }
    }

    /**
     * Collection providing maximum on ground (MOG) information for specific aircraft
     * at the site associated with this SiteOperations record.
     */
    export interface MaximumOnGround {
      /**
       * The Model Design Series (MDS) designation of the aircraft to which this maximum
       * on ground (MOG) data pertains.
       */
      aircraftMDS?: string;

      /**
       * Maximum on ground (MOG) number of contingent aircraft based on spacing and
       * manpower, for the aircraft type specified.
       */
      contingencyMOG?: number;

      /**
       * The name of the person who made the most recent change to this maximum on ground
       * data.
       */
      mogLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this maximum on ground data, in
       * ISO 8601 UTC format with millisecond precision.
       */
      mogLastChangedDate?: string;

      /**
       * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
       * and manpower, for the aircraft type specified.
       */
      wideParkingMOG?: number;

      /**
       * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
       * and manpower, for the aircraft type specified.
       */
      wideWorkingMOG?: number;
    }

    /**
     * Collection providing relevant information in the event of deviations/exceptions
     * to normal operations.
     */
    export interface OperationalDeviation {
      /**
       * The Model Design Series (MDS) designation of the aircraft affected by this
       * operational deviation.
       */
      affectedAircraftMDS?: string;

      /**
       * The maximum on ground (MOG) number for aircraft affected by this operational
       * deviation.
       */
      affectedMOG?: number;

      /**
       * On ground time for aircraft affected by this operational deviation.
       */
      aircraftOnGroundTime?: string;

      /**
       * Rest time for crew affected by this operational deviation.
       */
      crewRestTime?: string;

      /**
       * The name of the person who made the most recent change to this
       * OperationalDeviation data.
       */
      odLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this OperationalDeviation data,
       * in ISO 8601 UTC format with millisecond precision.
       */
      odLastChangedDate?: string;

      /**
       * Text remark regarding this operational deviation.
       */
      odRemark?: string;
    }

    /**
     * Collection of planning information associated with this SiteOperations record.
     */
    export interface OperationalPlanning {
      /**
       * The end date of this operational planning, in ISO8601 UTC format with
       * millisecond precision.
       */
      opEndDate?: string;

      /**
       * The name of the person who made the most recent change made to this
       * OperationalPlanning data.
       */
      opLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this OperationalPlanning data, in
       * ISO8601 UTC format with millisecond precision.
       */
      opLastChangedDate?: string;

      /**
       * Remark text regarding this operation planning.
       */
      opRemark?: string;

      /**
       * The person, unit, organization, etc. responsible for this operation planning.
       */
      opSource?: string;

      /**
       * The start date of this operational planning, in ISO8601 UTC format with
       * millisecond precision.
       */
      opStartDate?: string;

      /**
       * The status of this operational planning.
       */
      opStatus?: string;
    }

    /**
     * Collection detailing operational pathways at the Site associated with this
     * SiteOperations record.
     */
    export interface Pathway {
      /**
       * Text defining this pathway from its constituent parts.
       */
      pwDefinition?: string;

      /**
       * The name of the person who made the most recent change to this Pathway data.
       */
      pwLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this Pathway data, in ISO 8601
       * UTC format with millisecond precision.
       */
      pwLastChangedDate?: string;

      /**
       * The type of paths that constitute this pathway.
       */
      pwType?: string;

      /**
       * The intended use of this pathway.
       */
      pwUsage?: string;
    }

    /**
     * Collection documenting operational waivers that have been issued for the Site
     * associated with this record.
     */
    export interface Waiver {
      /**
       * The expiration date of this waiver, in ISO8601 UTC format with millisecond
       * precision.
       */
      expirationDate?: string;

      /**
       * Boolean indicating whether or not this waiver has expired.
       */
      hasExpired?: boolean;

      /**
       * The issue date of this waiver, in ISO8601 UTC format with millisecond precision.
       */
      issueDate?: string;

      /**
       * The name of the person who issued this waiver.
       */
      issuerName?: string;

      /**
       * The name of the person requesting this waiver.
       */
      requesterName?: string;

      /**
       * The phone number of the person requesting this waiver.
       */
      requesterPhoneNumber?: string;

      /**
       * The unit requesting this waiver.
       */
      requestingUnit?: string;

      /**
       * Description of the entities to which this waiver applies.
       */
      waiverAppliesTo?: string;

      /**
       * The description of this waiver.
       */
      waiverDescription?: string;

      /**
       * The name of the person who made the most recent change to this Waiver data.
       */
      waiverLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this waiver data, in ISO8601 UTC
       * format with millisecond precision.
       */
      waiverLastChangedDate?: string;
    }
  }
}

export type OperationCountResponse = string;

export type OperationTupleResponse = Array<OperationTupleResponse.OperationTupleResponseItem>;

export namespace OperationTupleResponse {
  /**
   * Site operating details concerning the hours of operation, operational
   * limitations, site navigation, and waivers associated with the Site.
   */
  export interface OperationTupleResponseItem {
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
     * The ID of the parent site.
     */
    idSite: string;

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
     * Collection providing hours of operation and other information specific to a day
     * of the week.
     */
    dailyOperations?: Array<OperationTupleResponseItem.DailyOperation>;

    /**
     * The name of the person who made the most recent change to data in the
     * DailyOperations collection.
     */
    dopsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to data in the DailyOperations
     * collection, in ISO 8601 UTC format with millisecond precision.
     */
    dopsLastChangedDate?: string;

    /**
     * The reason for the most recent change to data in the dailyOperations collection.
     */
    dopsLastChangedReason?: string;

    /**
     * Id of the associated launchSite entity.
     */
    idLaunchSite?: string;

    /**
     * Collection providing maximum on ground (MOG) information for specific aircraft
     * at the site associated with this SiteOperations record.
     */
    maximumOnGrounds?: Array<OperationTupleResponseItem.MaximumOnGround>;

    /**
     * The name of the person who made the most recent change to data in the
     * MaximumOnGrounds collection.
     */
    mogsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to data in the MaximumOnGrounds
     * collection, in ISO 8601 UTC format with millisecond precision.
     */
    mogsLastChangedDate?: string;

    /**
     * The reason for the most recent change to data in the MaximumOnGrounds
     * collection.
     */
    mogsLastChangedReason?: string;

    /**
     * Collection providing relevant information in the event of deviations/exceptions
     * to normal operations.
     */
    operationalDeviations?: Array<OperationTupleResponseItem.OperationalDeviation>;

    /**
     * Collection of planning information associated with this SiteOperations record.
     */
    operationalPlannings?: Array<OperationTupleResponseItem.OperationalPlanning>;

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
     * Collection detailing operational pathways at the Site associated with this
     * SiteOperations record.
     */
    pathways?: Array<OperationTupleResponseItem.Pathway>;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Time the row was updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;

    /**
     * Collection documenting operational waivers that have been issued for the Site
     * associated with this record.
     */
    waivers?: Array<OperationTupleResponseItem.Waiver>;
  }

  export namespace OperationTupleResponseItem {
    /**
     * Collection providing hours of operation and other information specific to a day
     * of the week.
     */
    export interface DailyOperation {
      /**
       * The day of the week to which this operational information pertains.
       */
      dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

      /**
       * A collection containing the operational start and stop times scheduled for the
       * day of the week specified.
       */
      operatingHours?: Array<DailyOperation.OperatingHour>;

      /**
       * The name or type of operation to which this information pertains.
       */
      operationName?: string;

      /**
       * The name of the person who made the most recent change to this DailyOperation
       * data.
       */
      ophrsLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this DailyOperation data, in ISO
       * 8601 UTC format with millisecond precision.
       */
      ophrsLastChangedDate?: string;
    }

    export namespace DailyOperation {
      /**
       * A collection containing the operational start and stop times scheduled for the
       * day of the week specified.
       */
      export interface OperatingHour {
        /**
         * The Zulu (UTC) operational start time, expressed in ISO 8601 format as HH:MM.
         */
        opStartTime?: string;

        /**
         * The Zulu (UTC) operational stop time, expressed in ISO 8601 format as HH:MM.
         */
        opStopTime?: string;
      }
    }

    /**
     * Collection providing maximum on ground (MOG) information for specific aircraft
     * at the site associated with this SiteOperations record.
     */
    export interface MaximumOnGround {
      /**
       * The Model Design Series (MDS) designation of the aircraft to which this maximum
       * on ground (MOG) data pertains.
       */
      aircraftMDS?: string;

      /**
       * Maximum on ground (MOG) number of contingent aircraft based on spacing and
       * manpower, for the aircraft type specified.
       */
      contingencyMOG?: number;

      /**
       * The name of the person who made the most recent change to this maximum on ground
       * data.
       */
      mogLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this maximum on ground data, in
       * ISO 8601 UTC format with millisecond precision.
       */
      mogLastChangedDate?: string;

      /**
       * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
       * and manpower, for the aircraft type specified.
       */
      wideParkingMOG?: number;

      /**
       * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
       * and manpower, for the aircraft type specified.
       */
      wideWorkingMOG?: number;
    }

    /**
     * Collection providing relevant information in the event of deviations/exceptions
     * to normal operations.
     */
    export interface OperationalDeviation {
      /**
       * The Model Design Series (MDS) designation of the aircraft affected by this
       * operational deviation.
       */
      affectedAircraftMDS?: string;

      /**
       * The maximum on ground (MOG) number for aircraft affected by this operational
       * deviation.
       */
      affectedMOG?: number;

      /**
       * On ground time for aircraft affected by this operational deviation.
       */
      aircraftOnGroundTime?: string;

      /**
       * Rest time for crew affected by this operational deviation.
       */
      crewRestTime?: string;

      /**
       * The name of the person who made the most recent change to this
       * OperationalDeviation data.
       */
      odLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this OperationalDeviation data,
       * in ISO 8601 UTC format with millisecond precision.
       */
      odLastChangedDate?: string;

      /**
       * Text remark regarding this operational deviation.
       */
      odRemark?: string;
    }

    /**
     * Collection of planning information associated with this SiteOperations record.
     */
    export interface OperationalPlanning {
      /**
       * The end date of this operational planning, in ISO8601 UTC format with
       * millisecond precision.
       */
      opEndDate?: string;

      /**
       * The name of the person who made the most recent change made to this
       * OperationalPlanning data.
       */
      opLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this OperationalPlanning data, in
       * ISO8601 UTC format with millisecond precision.
       */
      opLastChangedDate?: string;

      /**
       * Remark text regarding this operation planning.
       */
      opRemark?: string;

      /**
       * The person, unit, organization, etc. responsible for this operation planning.
       */
      opSource?: string;

      /**
       * The start date of this operational planning, in ISO8601 UTC format with
       * millisecond precision.
       */
      opStartDate?: string;

      /**
       * The status of this operational planning.
       */
      opStatus?: string;
    }

    /**
     * Collection detailing operational pathways at the Site associated with this
     * SiteOperations record.
     */
    export interface Pathway {
      /**
       * Text defining this pathway from its constituent parts.
       */
      pwDefinition?: string;

      /**
       * The name of the person who made the most recent change to this Pathway data.
       */
      pwLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this Pathway data, in ISO 8601
       * UTC format with millisecond precision.
       */
      pwLastChangedDate?: string;

      /**
       * The type of paths that constitute this pathway.
       */
      pwType?: string;

      /**
       * The intended use of this pathway.
       */
      pwUsage?: string;
    }

    /**
     * Collection documenting operational waivers that have been issued for the Site
     * associated with this record.
     */
    export interface Waiver {
      /**
       * The expiration date of this waiver, in ISO8601 UTC format with millisecond
       * precision.
       */
      expirationDate?: string;

      /**
       * Boolean indicating whether or not this waiver has expired.
       */
      hasExpired?: boolean;

      /**
       * The issue date of this waiver, in ISO8601 UTC format with millisecond precision.
       */
      issueDate?: string;

      /**
       * The name of the person who issued this waiver.
       */
      issuerName?: string;

      /**
       * The name of the person requesting this waiver.
       */
      requesterName?: string;

      /**
       * The phone number of the person requesting this waiver.
       */
      requesterPhoneNumber?: string;

      /**
       * The unit requesting this waiver.
       */
      requestingUnit?: string;

      /**
       * Description of the entities to which this waiver applies.
       */
      waiverAppliesTo?: string;

      /**
       * The description of this waiver.
       */
      waiverDescription?: string;

      /**
       * The name of the person who made the most recent change to this Waiver data.
       */
      waiverLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this waiver data, in ISO8601 UTC
       * format with millisecond precision.
       */
      waiverLastChangedDate?: string;
    }
  }
}

export interface OperationCreateParams {
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
   * The ID of the parent site.
   */
  idSite: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Collection providing hours of operation and other information specific to a day
   * of the week.
   */
  dailyOperations?: Array<OperationCreateParams.DailyOperation>;

  /**
   * The name of the person who made the most recent change to data in the
   * DailyOperations collection.
   */
  dopsLastChangedBy?: string;

  /**
   * The datetime of the most recent change made to data in the DailyOperations
   * collection, in ISO 8601 UTC format with millisecond precision.
   */
  dopsLastChangedDate?: string;

  /**
   * The reason for the most recent change to data in the dailyOperations collection.
   */
  dopsLastChangedReason?: string;

  /**
   * Id of the associated launchSite entity.
   */
  idLaunchSite?: string;

  /**
   * Collection providing maximum on ground (MOG) information for specific aircraft
   * at the site associated with this SiteOperations record.
   */
  maximumOnGrounds?: Array<OperationCreateParams.MaximumOnGround>;

  /**
   * The name of the person who made the most recent change to data in the
   * MaximumOnGrounds collection.
   */
  mogsLastChangedBy?: string;

  /**
   * The datetime of the most recent change made to data in the MaximumOnGrounds
   * collection, in ISO 8601 UTC format with millisecond precision.
   */
  mogsLastChangedDate?: string;

  /**
   * The reason for the most recent change to data in the MaximumOnGrounds
   * collection.
   */
  mogsLastChangedReason?: string;

  /**
   * Collection providing relevant information in the event of deviations/exceptions
   * to normal operations.
   */
  operationalDeviations?: Array<OperationCreateParams.OperationalDeviation>;

  /**
   * Collection of planning information associated with this SiteOperations record.
   */
  operationalPlannings?: Array<OperationCreateParams.OperationalPlanning>;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Collection detailing operational pathways at the Site associated with this
   * SiteOperations record.
   */
  pathways?: Array<OperationCreateParams.Pathway>;

  /**
   * Collection documenting operational waivers that have been issued for the Site
   * associated with this record.
   */
  waivers?: Array<OperationCreateParams.Waiver>;
}

export namespace OperationCreateParams {
  /**
   * Collection providing hours of operation and other information specific to a day
   * of the week.
   */
  export interface DailyOperation {
    /**
     * The day of the week to which this operational information pertains.
     */
    dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

    /**
     * A collection containing the operational start and stop times scheduled for the
     * day of the week specified.
     */
    operatingHours?: Array<DailyOperation.OperatingHour>;

    /**
     * The name or type of operation to which this information pertains.
     */
    operationName?: string;

    /**
     * The name of the person who made the most recent change to this DailyOperation
     * data.
     */
    ophrsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this DailyOperation data, in ISO
     * 8601 UTC format with millisecond precision.
     */
    ophrsLastChangedDate?: string;
  }

  export namespace DailyOperation {
    /**
     * A collection containing the operational start and stop times scheduled for the
     * day of the week specified.
     */
    export interface OperatingHour {
      /**
       * The Zulu (UTC) operational start time, expressed in ISO 8601 format as HH:MM.
       */
      opStartTime?: string;

      /**
       * The Zulu (UTC) operational stop time, expressed in ISO 8601 format as HH:MM.
       */
      opStopTime?: string;
    }
  }

  /**
   * Collection providing maximum on ground (MOG) information for specific aircraft
   * at the site associated with this SiteOperations record.
   */
  export interface MaximumOnGround {
    /**
     * The Model Design Series (MDS) designation of the aircraft to which this maximum
     * on ground (MOG) data pertains.
     */
    aircraftMDS?: string;

    /**
     * Maximum on ground (MOG) number of contingent aircraft based on spacing and
     * manpower, for the aircraft type specified.
     */
    contingencyMOG?: number;

    /**
     * The name of the person who made the most recent change to this maximum on ground
     * data.
     */
    mogLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this maximum on ground data, in
     * ISO 8601 UTC format with millisecond precision.
     */
    mogLastChangedDate?: string;

    /**
     * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
     * and manpower, for the aircraft type specified.
     */
    wideParkingMOG?: number;

    /**
     * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
     * and manpower, for the aircraft type specified.
     */
    wideWorkingMOG?: number;
  }

  /**
   * Collection providing relevant information in the event of deviations/exceptions
   * to normal operations.
   */
  export interface OperationalDeviation {
    /**
     * The Model Design Series (MDS) designation of the aircraft affected by this
     * operational deviation.
     */
    affectedAircraftMDS?: string;

    /**
     * The maximum on ground (MOG) number for aircraft affected by this operational
     * deviation.
     */
    affectedMOG?: number;

    /**
     * On ground time for aircraft affected by this operational deviation.
     */
    aircraftOnGroundTime?: string;

    /**
     * Rest time for crew affected by this operational deviation.
     */
    crewRestTime?: string;

    /**
     * The name of the person who made the most recent change to this
     * OperationalDeviation data.
     */
    odLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this OperationalDeviation data,
     * in ISO 8601 UTC format with millisecond precision.
     */
    odLastChangedDate?: string;

    /**
     * Text remark regarding this operational deviation.
     */
    odRemark?: string;
  }

  /**
   * Collection of planning information associated with this SiteOperations record.
   */
  export interface OperationalPlanning {
    /**
     * The end date of this operational planning, in ISO8601 UTC format with
     * millisecond precision.
     */
    opEndDate?: string;

    /**
     * The name of the person who made the most recent change made to this
     * OperationalPlanning data.
     */
    opLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this OperationalPlanning data, in
     * ISO8601 UTC format with millisecond precision.
     */
    opLastChangedDate?: string;

    /**
     * Remark text regarding this operation planning.
     */
    opRemark?: string;

    /**
     * The person, unit, organization, etc. responsible for this operation planning.
     */
    opSource?: string;

    /**
     * The start date of this operational planning, in ISO8601 UTC format with
     * millisecond precision.
     */
    opStartDate?: string;

    /**
     * The status of this operational planning.
     */
    opStatus?: string;
  }

  /**
   * Collection detailing operational pathways at the Site associated with this
   * SiteOperations record.
   */
  export interface Pathway {
    /**
     * Text defining this pathway from its constituent parts.
     */
    pwDefinition?: string;

    /**
     * The name of the person who made the most recent change to this Pathway data.
     */
    pwLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this Pathway data, in ISO 8601
     * UTC format with millisecond precision.
     */
    pwLastChangedDate?: string;

    /**
     * The type of paths that constitute this pathway.
     */
    pwType?: string;

    /**
     * The intended use of this pathway.
     */
    pwUsage?: string;
  }

  /**
   * Collection documenting operational waivers that have been issued for the Site
   * associated with this record.
   */
  export interface Waiver {
    /**
     * The expiration date of this waiver, in ISO8601 UTC format with millisecond
     * precision.
     */
    expirationDate?: string;

    /**
     * Boolean indicating whether or not this waiver has expired.
     */
    hasExpired?: boolean;

    /**
     * The issue date of this waiver, in ISO8601 UTC format with millisecond precision.
     */
    issueDate?: string;

    /**
     * The name of the person who issued this waiver.
     */
    issuerName?: string;

    /**
     * The name of the person requesting this waiver.
     */
    requesterName?: string;

    /**
     * The phone number of the person requesting this waiver.
     */
    requesterPhoneNumber?: string;

    /**
     * The unit requesting this waiver.
     */
    requestingUnit?: string;

    /**
     * Description of the entities to which this waiver applies.
     */
    waiverAppliesTo?: string;

    /**
     * The description of this waiver.
     */
    waiverDescription?: string;

    /**
     * The name of the person who made the most recent change to this Waiver data.
     */
    waiverLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this waiver data, in ISO8601 UTC
     * format with millisecond precision.
     */
    waiverLastChangedDate?: string;
  }
}

export interface OperationUpdateParams {
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
   * The ID of the parent site.
   */
  idSite: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Collection providing hours of operation and other information specific to a day
   * of the week.
   */
  dailyOperations?: Array<OperationUpdateParams.DailyOperation>;

  /**
   * The name of the person who made the most recent change to data in the
   * DailyOperations collection.
   */
  dopsLastChangedBy?: string;

  /**
   * The datetime of the most recent change made to data in the DailyOperations
   * collection, in ISO 8601 UTC format with millisecond precision.
   */
  dopsLastChangedDate?: string;

  /**
   * The reason for the most recent change to data in the dailyOperations collection.
   */
  dopsLastChangedReason?: string;

  /**
   * Id of the associated launchSite entity.
   */
  idLaunchSite?: string;

  /**
   * Collection providing maximum on ground (MOG) information for specific aircraft
   * at the site associated with this SiteOperations record.
   */
  maximumOnGrounds?: Array<OperationUpdateParams.MaximumOnGround>;

  /**
   * The name of the person who made the most recent change to data in the
   * MaximumOnGrounds collection.
   */
  mogsLastChangedBy?: string;

  /**
   * The datetime of the most recent change made to data in the MaximumOnGrounds
   * collection, in ISO 8601 UTC format with millisecond precision.
   */
  mogsLastChangedDate?: string;

  /**
   * The reason for the most recent change to data in the MaximumOnGrounds
   * collection.
   */
  mogsLastChangedReason?: string;

  /**
   * Collection providing relevant information in the event of deviations/exceptions
   * to normal operations.
   */
  operationalDeviations?: Array<OperationUpdateParams.OperationalDeviation>;

  /**
   * Collection of planning information associated with this SiteOperations record.
   */
  operationalPlannings?: Array<OperationUpdateParams.OperationalPlanning>;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Collection detailing operational pathways at the Site associated with this
   * SiteOperations record.
   */
  pathways?: Array<OperationUpdateParams.Pathway>;

  /**
   * Collection documenting operational waivers that have been issued for the Site
   * associated with this record.
   */
  waivers?: Array<OperationUpdateParams.Waiver>;
}

export namespace OperationUpdateParams {
  /**
   * Collection providing hours of operation and other information specific to a day
   * of the week.
   */
  export interface DailyOperation {
    /**
     * The day of the week to which this operational information pertains.
     */
    dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

    /**
     * A collection containing the operational start and stop times scheduled for the
     * day of the week specified.
     */
    operatingHours?: Array<DailyOperation.OperatingHour>;

    /**
     * The name or type of operation to which this information pertains.
     */
    operationName?: string;

    /**
     * The name of the person who made the most recent change to this DailyOperation
     * data.
     */
    ophrsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this DailyOperation data, in ISO
     * 8601 UTC format with millisecond precision.
     */
    ophrsLastChangedDate?: string;
  }

  export namespace DailyOperation {
    /**
     * A collection containing the operational start and stop times scheduled for the
     * day of the week specified.
     */
    export interface OperatingHour {
      /**
       * The Zulu (UTC) operational start time, expressed in ISO 8601 format as HH:MM.
       */
      opStartTime?: string;

      /**
       * The Zulu (UTC) operational stop time, expressed in ISO 8601 format as HH:MM.
       */
      opStopTime?: string;
    }
  }

  /**
   * Collection providing maximum on ground (MOG) information for specific aircraft
   * at the site associated with this SiteOperations record.
   */
  export interface MaximumOnGround {
    /**
     * The Model Design Series (MDS) designation of the aircraft to which this maximum
     * on ground (MOG) data pertains.
     */
    aircraftMDS?: string;

    /**
     * Maximum on ground (MOG) number of contingent aircraft based on spacing and
     * manpower, for the aircraft type specified.
     */
    contingencyMOG?: number;

    /**
     * The name of the person who made the most recent change to this maximum on ground
     * data.
     */
    mogLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this maximum on ground data, in
     * ISO 8601 UTC format with millisecond precision.
     */
    mogLastChangedDate?: string;

    /**
     * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
     * and manpower, for the aircraft type specified.
     */
    wideParkingMOG?: number;

    /**
     * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
     * and manpower, for the aircraft type specified.
     */
    wideWorkingMOG?: number;
  }

  /**
   * Collection providing relevant information in the event of deviations/exceptions
   * to normal operations.
   */
  export interface OperationalDeviation {
    /**
     * The Model Design Series (MDS) designation of the aircraft affected by this
     * operational deviation.
     */
    affectedAircraftMDS?: string;

    /**
     * The maximum on ground (MOG) number for aircraft affected by this operational
     * deviation.
     */
    affectedMOG?: number;

    /**
     * On ground time for aircraft affected by this operational deviation.
     */
    aircraftOnGroundTime?: string;

    /**
     * Rest time for crew affected by this operational deviation.
     */
    crewRestTime?: string;

    /**
     * The name of the person who made the most recent change to this
     * OperationalDeviation data.
     */
    odLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this OperationalDeviation data,
     * in ISO 8601 UTC format with millisecond precision.
     */
    odLastChangedDate?: string;

    /**
     * Text remark regarding this operational deviation.
     */
    odRemark?: string;
  }

  /**
   * Collection of planning information associated with this SiteOperations record.
   */
  export interface OperationalPlanning {
    /**
     * The end date of this operational planning, in ISO8601 UTC format with
     * millisecond precision.
     */
    opEndDate?: string;

    /**
     * The name of the person who made the most recent change made to this
     * OperationalPlanning data.
     */
    opLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this OperationalPlanning data, in
     * ISO8601 UTC format with millisecond precision.
     */
    opLastChangedDate?: string;

    /**
     * Remark text regarding this operation planning.
     */
    opRemark?: string;

    /**
     * The person, unit, organization, etc. responsible for this operation planning.
     */
    opSource?: string;

    /**
     * The start date of this operational planning, in ISO8601 UTC format with
     * millisecond precision.
     */
    opStartDate?: string;

    /**
     * The status of this operational planning.
     */
    opStatus?: string;
  }

  /**
   * Collection detailing operational pathways at the Site associated with this
   * SiteOperations record.
   */
  export interface Pathway {
    /**
     * Text defining this pathway from its constituent parts.
     */
    pwDefinition?: string;

    /**
     * The name of the person who made the most recent change to this Pathway data.
     */
    pwLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this Pathway data, in ISO 8601
     * UTC format with millisecond precision.
     */
    pwLastChangedDate?: string;

    /**
     * The type of paths that constitute this pathway.
     */
    pwType?: string;

    /**
     * The intended use of this pathway.
     */
    pwUsage?: string;
  }

  /**
   * Collection documenting operational waivers that have been issued for the Site
   * associated with this record.
   */
  export interface Waiver {
    /**
     * The expiration date of this waiver, in ISO8601 UTC format with millisecond
     * precision.
     */
    expirationDate?: string;

    /**
     * Boolean indicating whether or not this waiver has expired.
     */
    hasExpired?: boolean;

    /**
     * The issue date of this waiver, in ISO8601 UTC format with millisecond precision.
     */
    issueDate?: string;

    /**
     * The name of the person who issued this waiver.
     */
    issuerName?: string;

    /**
     * The name of the person requesting this waiver.
     */
    requesterName?: string;

    /**
     * The phone number of the person requesting this waiver.
     */
    requesterPhoneNumber?: string;

    /**
     * The unit requesting this waiver.
     */
    requestingUnit?: string;

    /**
     * Description of the entities to which this waiver applies.
     */
    waiverAppliesTo?: string;

    /**
     * The description of this waiver.
     */
    waiverDescription?: string;

    /**
     * The name of the person who made the most recent change to this Waiver data.
     */
    waiverLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to this waiver data, in ISO8601 UTC
     * format with millisecond precision.
     */
    waiverLastChangedDate?: string;
  }
}

export interface OperationListParams {
  /**
   * The ID of the parent site.
   */
  idSite: string;
}

export interface OperationCountParams {
  /**
   * The ID of the parent site.
   */
  idSite: string;
}

export type OperationCreateBulkParams = Array<OperationCreateBulkParams.Body>;

export namespace OperationCreateBulkParams {
  /**
   * Site operating details concerning the hours of operation, operational
   * limitations, site navigation, and waivers associated with the Site.
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
     * The ID of the parent site.
     */
    idSite: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Collection providing hours of operation and other information specific to a day
     * of the week.
     */
    dailyOperations?: Array<Body.DailyOperation>;

    /**
     * The name of the person who made the most recent change to data in the
     * DailyOperations collection.
     */
    dopsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to data in the DailyOperations
     * collection, in ISO 8601 UTC format with millisecond precision.
     */
    dopsLastChangedDate?: string;

    /**
     * The reason for the most recent change to data in the dailyOperations collection.
     */
    dopsLastChangedReason?: string;

    /**
     * Id of the associated launchSite entity.
     */
    idLaunchSite?: string;

    /**
     * Collection providing maximum on ground (MOG) information for specific aircraft
     * at the site associated with this SiteOperations record.
     */
    maximumOnGrounds?: Array<Body.MaximumOnGround>;

    /**
     * The name of the person who made the most recent change to data in the
     * MaximumOnGrounds collection.
     */
    mogsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to data in the MaximumOnGrounds
     * collection, in ISO 8601 UTC format with millisecond precision.
     */
    mogsLastChangedDate?: string;

    /**
     * The reason for the most recent change to data in the MaximumOnGrounds
     * collection.
     */
    mogsLastChangedReason?: string;

    /**
     * Collection providing relevant information in the event of deviations/exceptions
     * to normal operations.
     */
    operationalDeviations?: Array<Body.OperationalDeviation>;

    /**
     * Collection of planning information associated with this SiteOperations record.
     */
    operationalPlannings?: Array<Body.OperationalPlanning>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Collection detailing operational pathways at the Site associated with this
     * SiteOperations record.
     */
    pathways?: Array<Body.Pathway>;

    /**
     * Collection documenting operational waivers that have been issued for the Site
     * associated with this record.
     */
    waivers?: Array<Body.Waiver>;
  }

  export namespace Body {
    /**
     * Collection providing hours of operation and other information specific to a day
     * of the week.
     */
    export interface DailyOperation {
      /**
       * The day of the week to which this operational information pertains.
       */
      dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

      /**
       * A collection containing the operational start and stop times scheduled for the
       * day of the week specified.
       */
      operatingHours?: Array<DailyOperation.OperatingHour>;

      /**
       * The name or type of operation to which this information pertains.
       */
      operationName?: string;

      /**
       * The name of the person who made the most recent change to this DailyOperation
       * data.
       */
      ophrsLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this DailyOperation data, in ISO
       * 8601 UTC format with millisecond precision.
       */
      ophrsLastChangedDate?: string;
    }

    export namespace DailyOperation {
      /**
       * A collection containing the operational start and stop times scheduled for the
       * day of the week specified.
       */
      export interface OperatingHour {
        /**
         * The Zulu (UTC) operational start time, expressed in ISO 8601 format as HH:MM.
         */
        opStartTime?: string;

        /**
         * The Zulu (UTC) operational stop time, expressed in ISO 8601 format as HH:MM.
         */
        opStopTime?: string;
      }
    }

    /**
     * Collection providing maximum on ground (MOG) information for specific aircraft
     * at the site associated with this SiteOperations record.
     */
    export interface MaximumOnGround {
      /**
       * The Model Design Series (MDS) designation of the aircraft to which this maximum
       * on ground (MOG) data pertains.
       */
      aircraftMDS?: string;

      /**
       * Maximum on ground (MOG) number of contingent aircraft based on spacing and
       * manpower, for the aircraft type specified.
       */
      contingencyMOG?: number;

      /**
       * The name of the person who made the most recent change to this maximum on ground
       * data.
       */
      mogLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this maximum on ground data, in
       * ISO 8601 UTC format with millisecond precision.
       */
      mogLastChangedDate?: string;

      /**
       * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
       * and manpower, for the aircraft type specified.
       */
      wideParkingMOG?: number;

      /**
       * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
       * and manpower, for the aircraft type specified.
       */
      wideWorkingMOG?: number;
    }

    /**
     * Collection providing relevant information in the event of deviations/exceptions
     * to normal operations.
     */
    export interface OperationalDeviation {
      /**
       * The Model Design Series (MDS) designation of the aircraft affected by this
       * operational deviation.
       */
      affectedAircraftMDS?: string;

      /**
       * The maximum on ground (MOG) number for aircraft affected by this operational
       * deviation.
       */
      affectedMOG?: number;

      /**
       * On ground time for aircraft affected by this operational deviation.
       */
      aircraftOnGroundTime?: string;

      /**
       * Rest time for crew affected by this operational deviation.
       */
      crewRestTime?: string;

      /**
       * The name of the person who made the most recent change to this
       * OperationalDeviation data.
       */
      odLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this OperationalDeviation data,
       * in ISO 8601 UTC format with millisecond precision.
       */
      odLastChangedDate?: string;

      /**
       * Text remark regarding this operational deviation.
       */
      odRemark?: string;
    }

    /**
     * Collection of planning information associated with this SiteOperations record.
     */
    export interface OperationalPlanning {
      /**
       * The end date of this operational planning, in ISO8601 UTC format with
       * millisecond precision.
       */
      opEndDate?: string;

      /**
       * The name of the person who made the most recent change made to this
       * OperationalPlanning data.
       */
      opLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this OperationalPlanning data, in
       * ISO8601 UTC format with millisecond precision.
       */
      opLastChangedDate?: string;

      /**
       * Remark text regarding this operation planning.
       */
      opRemark?: string;

      /**
       * The person, unit, organization, etc. responsible for this operation planning.
       */
      opSource?: string;

      /**
       * The start date of this operational planning, in ISO8601 UTC format with
       * millisecond precision.
       */
      opStartDate?: string;

      /**
       * The status of this operational planning.
       */
      opStatus?: string;
    }

    /**
     * Collection detailing operational pathways at the Site associated with this
     * SiteOperations record.
     */
    export interface Pathway {
      /**
       * Text defining this pathway from its constituent parts.
       */
      pwDefinition?: string;

      /**
       * The name of the person who made the most recent change to this Pathway data.
       */
      pwLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this Pathway data, in ISO 8601
       * UTC format with millisecond precision.
       */
      pwLastChangedDate?: string;

      /**
       * The type of paths that constitute this pathway.
       */
      pwType?: string;

      /**
       * The intended use of this pathway.
       */
      pwUsage?: string;
    }

    /**
     * Collection documenting operational waivers that have been issued for the Site
     * associated with this record.
     */
    export interface Waiver {
      /**
       * The expiration date of this waiver, in ISO8601 UTC format with millisecond
       * precision.
       */
      expirationDate?: string;

      /**
       * Boolean indicating whether or not this waiver has expired.
       */
      hasExpired?: boolean;

      /**
       * The issue date of this waiver, in ISO8601 UTC format with millisecond precision.
       */
      issueDate?: string;

      /**
       * The name of the person who issued this waiver.
       */
      issuerName?: string;

      /**
       * The name of the person requesting this waiver.
       */
      requesterName?: string;

      /**
       * The phone number of the person requesting this waiver.
       */
      requesterPhoneNumber?: string;

      /**
       * The unit requesting this waiver.
       */
      requestingUnit?: string;

      /**
       * Description of the entities to which this waiver applies.
       */
      waiverAppliesTo?: string;

      /**
       * The description of this waiver.
       */
      waiverDescription?: string;

      /**
       * The name of the person who made the most recent change to this Waiver data.
       */
      waiverLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this waiver data, in ISO8601 UTC
       * format with millisecond precision.
       */
      waiverLastChangedDate?: string;
    }
  }
}

export type OperationCreateBulkV2Params = Array<OperationCreateBulkV2Params.Body>;

export namespace OperationCreateBulkV2Params {
  /**
   * Site operating details concerning the hours of operation, operational
   * limitations, site navigation, and waivers associated with the Site.
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
     * The ID of the parent site.
     */
    idSite: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Collection providing hours of operation and other information specific to a day
     * of the week.
     */
    dailyOperations?: Array<Body.DailyOperation>;

    /**
     * The name of the person who made the most recent change to data in the
     * DailyOperations collection.
     */
    dopsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to data in the DailyOperations
     * collection, in ISO 8601 UTC format with millisecond precision.
     */
    dopsLastChangedDate?: string;

    /**
     * The reason for the most recent change to data in the dailyOperations collection.
     */
    dopsLastChangedReason?: string;

    /**
     * Id of the associated launchSite entity.
     */
    idLaunchSite?: string;

    /**
     * Collection providing maximum on ground (MOG) information for specific aircraft
     * at the site associated with this SiteOperations record.
     */
    maximumOnGrounds?: Array<Body.MaximumOnGround>;

    /**
     * The name of the person who made the most recent change to data in the
     * MaximumOnGrounds collection.
     */
    mogsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to data in the MaximumOnGrounds
     * collection, in ISO 8601 UTC format with millisecond precision.
     */
    mogsLastChangedDate?: string;

    /**
     * The reason for the most recent change to data in the MaximumOnGrounds
     * collection.
     */
    mogsLastChangedReason?: string;

    /**
     * Collection providing relevant information in the event of deviations/exceptions
     * to normal operations.
     */
    operationalDeviations?: Array<Body.OperationalDeviation>;

    /**
     * Collection of planning information associated with this SiteOperations record.
     */
    operationalPlannings?: Array<Body.OperationalPlanning>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Collection detailing operational pathways at the Site associated with this
     * SiteOperations record.
     */
    pathways?: Array<Body.Pathway>;

    /**
     * Collection documenting operational waivers that have been issued for the Site
     * associated with this record.
     */
    waivers?: Array<Body.Waiver>;
  }

  export namespace Body {
    /**
     * Collection providing hours of operation and other information specific to a day
     * of the week.
     */
    export interface DailyOperation {
      /**
       * The day of the week to which this operational information pertains.
       */
      dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

      /**
       * A collection containing the operational start and stop times scheduled for the
       * day of the week specified.
       */
      operatingHours?: Array<DailyOperation.OperatingHour>;

      /**
       * The name or type of operation to which this information pertains.
       */
      operationName?: string;

      /**
       * The name of the person who made the most recent change to this DailyOperation
       * data.
       */
      ophrsLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this DailyOperation data, in ISO
       * 8601 UTC format with millisecond precision.
       */
      ophrsLastChangedDate?: string;
    }

    export namespace DailyOperation {
      /**
       * A collection containing the operational start and stop times scheduled for the
       * day of the week specified.
       */
      export interface OperatingHour {
        /**
         * The Zulu (UTC) operational start time, expressed in ISO 8601 format as HH:MM.
         */
        opStartTime?: string;

        /**
         * The Zulu (UTC) operational stop time, expressed in ISO 8601 format as HH:MM.
         */
        opStopTime?: string;
      }
    }

    /**
     * Collection providing maximum on ground (MOG) information for specific aircraft
     * at the site associated with this SiteOperations record.
     */
    export interface MaximumOnGround {
      /**
       * The Model Design Series (MDS) designation of the aircraft to which this maximum
       * on ground (MOG) data pertains.
       */
      aircraftMDS?: string;

      /**
       * Maximum on ground (MOG) number of contingent aircraft based on spacing and
       * manpower, for the aircraft type specified.
       */
      contingencyMOG?: number;

      /**
       * The name of the person who made the most recent change to this maximum on ground
       * data.
       */
      mogLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this maximum on ground data, in
       * ISO 8601 UTC format with millisecond precision.
       */
      mogLastChangedDate?: string;

      /**
       * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
       * and manpower, for the aircraft type specified.
       */
      wideParkingMOG?: number;

      /**
       * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
       * and manpower, for the aircraft type specified.
       */
      wideWorkingMOG?: number;
    }

    /**
     * Collection providing relevant information in the event of deviations/exceptions
     * to normal operations.
     */
    export interface OperationalDeviation {
      /**
       * The Model Design Series (MDS) designation of the aircraft affected by this
       * operational deviation.
       */
      affectedAircraftMDS?: string;

      /**
       * The maximum on ground (MOG) number for aircraft affected by this operational
       * deviation.
       */
      affectedMOG?: number;

      /**
       * On ground time for aircraft affected by this operational deviation.
       */
      aircraftOnGroundTime?: string;

      /**
       * Rest time for crew affected by this operational deviation.
       */
      crewRestTime?: string;

      /**
       * The name of the person who made the most recent change to this
       * OperationalDeviation data.
       */
      odLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this OperationalDeviation data,
       * in ISO 8601 UTC format with millisecond precision.
       */
      odLastChangedDate?: string;

      /**
       * Text remark regarding this operational deviation.
       */
      odRemark?: string;
    }

    /**
     * Collection of planning information associated with this SiteOperations record.
     */
    export interface OperationalPlanning {
      /**
       * The end date of this operational planning, in ISO8601 UTC format with
       * millisecond precision.
       */
      opEndDate?: string;

      /**
       * The name of the person who made the most recent change made to this
       * OperationalPlanning data.
       */
      opLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this OperationalPlanning data, in
       * ISO8601 UTC format with millisecond precision.
       */
      opLastChangedDate?: string;

      /**
       * Remark text regarding this operation planning.
       */
      opRemark?: string;

      /**
       * The person, unit, organization, etc. responsible for this operation planning.
       */
      opSource?: string;

      /**
       * The start date of this operational planning, in ISO8601 UTC format with
       * millisecond precision.
       */
      opStartDate?: string;

      /**
       * The status of this operational planning.
       */
      opStatus?: string;
    }

    /**
     * Collection detailing operational pathways at the Site associated with this
     * SiteOperations record.
     */
    export interface Pathway {
      /**
       * Text defining this pathway from its constituent parts.
       */
      pwDefinition?: string;

      /**
       * The name of the person who made the most recent change to this Pathway data.
       */
      pwLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this Pathway data, in ISO 8601
       * UTC format with millisecond precision.
       */
      pwLastChangedDate?: string;

      /**
       * The type of paths that constitute this pathway.
       */
      pwType?: string;

      /**
       * The intended use of this pathway.
       */
      pwUsage?: string;
    }

    /**
     * Collection documenting operational waivers that have been issued for the Site
     * associated with this record.
     */
    export interface Waiver {
      /**
       * The expiration date of this waiver, in ISO8601 UTC format with millisecond
       * precision.
       */
      expirationDate?: string;

      /**
       * Boolean indicating whether or not this waiver has expired.
       */
      hasExpired?: boolean;

      /**
       * The issue date of this waiver, in ISO8601 UTC format with millisecond precision.
       */
      issueDate?: string;

      /**
       * The name of the person who issued this waiver.
       */
      issuerName?: string;

      /**
       * The name of the person requesting this waiver.
       */
      requesterName?: string;

      /**
       * The phone number of the person requesting this waiver.
       */
      requesterPhoneNumber?: string;

      /**
       * The unit requesting this waiver.
       */
      requestingUnit?: string;

      /**
       * Description of the entities to which this waiver applies.
       */
      waiverAppliesTo?: string;

      /**
       * The description of this waiver.
       */
      waiverDescription?: string;

      /**
       * The name of the person who made the most recent change to this Waiver data.
       */
      waiverLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this waiver data, in ISO8601 UTC
       * format with millisecond precision.
       */
      waiverLastChangedDate?: string;
    }
  }
}

export interface OperationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The ID of the parent site.
   */
  idSite: string;
}

export declare namespace Operations {
  export {
    type OperationRetrieveResponse as OperationRetrieveResponse,
    type OperationListResponse as OperationListResponse,
    type OperationCountResponse as OperationCountResponse,
    type OperationTupleResponse as OperationTupleResponse,
    type OperationCreateParams as OperationCreateParams,
    type OperationUpdateParams as OperationUpdateParams,
    type OperationListParams as OperationListParams,
    type OperationCountParams as OperationCountParams,
    type OperationCreateBulkParams as OperationCreateBulkParams,
    type OperationCreateBulkV2Params as OperationCreateBulkV2Params,
    type OperationTupleParams as OperationTupleParams,
  };
}
