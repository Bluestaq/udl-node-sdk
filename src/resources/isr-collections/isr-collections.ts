// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/isr-collections/history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from 'bluestaq@unified-data-library/resources/isr-collections/history';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';

export class IsrCollections extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: IsrCollectionListParams,
    options?: RequestOptions,
  ): PagePromise<IsrCollectionListResponsesOffsetPage, IsrCollectionListResponse> {
    return this._client.getAPIList('/udl/isrcollection', OffsetPage<IsrCollectionListResponse>, {
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
   */
  count(query: IsrCollectionCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/isrcollection/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * ISRCollection records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(params: IsrCollectionCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/isrcollection/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<IsrCollectionQueryhelpResponse> {
    return this._client.get('/udl/isrcollection/queryhelp', options);
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
  tuple(query: IsrCollectionTupleParams, options?: RequestOptions): APIPromise<IsrCollectionTupleResponse> {
    return this._client.get('/udl/isrcollection/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple ISR Collections as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: IsrCollectionUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-isrcollection', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type IsrCollectionListResponsesOffsetPage = OffsetPage<IsrCollectionListResponse>;

/**
 * ISR Collection data.
 */
export interface IsrCollectionListResponse {
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
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Mission desired collection requirements.
   */
  collectionRequirements?: Array<IsrCollectionListResponse.CollectionRequirement>;

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
   * Version of the IDEX software the request came from for compatibility.
   */
  idexVersion?: number;

  /**
   * Designation of mission Area Of Responsibility.
   */
  missionAOR?: string;

  /**
   * Mission geographical collection area.
   */
  missionCollectionArea?: string;

  /**
   * Country code of the mission. A Country may represent countries, multi-national
   * consortiums, and international organizations.
   */
  missionCountry?: string;

  /**
   * Text version of what we are emphasizing in this mission.
   */
  missionEmphasis?: string;

  /**
   * Mission Identifier.
   */
  missionId?: string;

  /**
   * Joint Operations Area.
   */
  missionJoa?: string;

  /**
   * Mission operation name.
   */
  missionOperation?: string;

  /**
   * Primary type of intelligence to be collected during the mission.
   */
  missionPrimaryIntelDiscipline?: string;

  /**
   * Sub category of primary intelligence to be collected.
   */
  missionPrimarySubCategory?: string;

  /**
   * Mission Priority (1-n).
   */
  missionPriority?: number;

  /**
   * Region of the mission.
   */
  missionRegion?: string;

  /**
   * What is the primary objective(Role) of this mission.
   */
  missionRole?: string;

  /**
   * Type of intelligence to be collected second.
   */
  missionSecondaryIntelDiscipline?: string;

  /**
   * Mission sub category for secondary intelligence discipline to be collected.
   */
  missionSecondarySubCategory?: string;

  /**
   * WGS-84 latitude of the start position, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  missionStartPointLat?: number;

  /**
   * WGS-84 longitude of the start position, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  missionStartPointLong?: number;

  /**
   * Subregion of the mission.
   */
  missionSubRegion?: string;

  /**
   * Name of the Supporting unit/Location that is performing this mission.
   */
  missionSupportedUnit?: string;

  /**
   * A synchronization matrix is used to organize the logistics synchronization
   * process during a mission.
   */
  missionSyncMatrixBin?: string;

  /**
   * Human readable Mission Name.
   */
  name?: string;

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
   * Individual taskings to complete the mission.
   */
  taskings?: Array<IsrCollectionListResponse.Tasking>;

  /**
   * Object for data dissemination.
   */
  transit?: Array<IsrCollectionListResponse.Transit>;

  /**
   * Time the row was updated in the database, auto-populated by the system, example
   * = 2018-01-01T16:00:00.123Z.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export namespace IsrCollectionListResponse {
  export interface CollectionRequirement {
    /**
     * Collection Requirement Unique Identifier.
     */
    id?: string;

    /**
     * Country code of the collection requirement. A Country may represent countries,
     * multi-national consortiums, and international organizations.
     */
    country?: string;

    /**
     * Collection Requirement Unique Identifier.
     */
    cridNumbers?: string;

    criticalTimes?: CollectionRequirement.CriticalTimes;

    /**
     * Is this collection requirement an emphasized/critical requirement.
     */
    emphasized?: boolean;

    exploitationRequirement?: CollectionRequirement.ExploitationRequirement;

    /**
     * Encryption hashing algorithm.
     */
    hash?: string;

    /**
     * Primary type of intelligence to be collected for this requirement.
     */
    intelDiscipline?: string;

    /**
     * Is this collection request for the Prism system?.
     */
    isPrismCr?: boolean;

    /**
     * Human readable name for this operation.
     */
    operation?: string;

    /**
     * 1-n priority for this collection requirement.
     */
    priority?: number;

    /**
     * Reconnaissance Survey information the operator needs.
     */
    reconSurvey?: string;

    /**
     * Record id.
     */
    recordId?: string;

    /**
     * Region of the collection requirement.
     */
    region?: string;

    /**
     * Sub category of primary intelligence to be collected for this requirement.
     */
    secondary?: boolean;

    /**
     * Free text field for the user to specify special instructions needed for this
     * collection.
     */
    specialComGuidance?: string;

    /**
     * Start time for this requirement, should be within the mission time window.
     */
    start?: string;

    /**
     * Stop time for this requirement, should be within the mission time window.
     */
    stop?: string;

    /**
     * Subregion of the collection requirement.
     */
    subregion?: string;

    /**
     * The name of the military unit that this assigned collection requirement will
     * support.
     */
    supportedUnit?: string;

    /**
     * Array of POI Id's for the targets being tasked.
     */
    targetList?: Array<string>;

    /**
     * Type collection this requirement applies to.
     */
    type?: string;
  }

  export namespace CollectionRequirement {
    export interface CriticalTimes {
      /**
       * Critical start time to collect an image for this requirement.
       */
      earliestImagingTime: string;

      /**
       * Critical stop time to collect an image for this requirement.
       */
      latestImagingTime: string;
    }

    export interface ExploitationRequirement {
      /**
       * Exploitation requirement id.
       */
      id?: string;

      /**
       * Amplifying data for the exploitation requirement.
       */
      amplification?: string;

      /**
       * List of e-mails to disseminate collection verification information.
       */
      dissemination?: string;

      /**
       * Essential Elements of Information.
       */
      eei?: string;

      poc?: ExploitationRequirement.Poc;

      /**
       * The reporting criteria of the collection requirement.
       */
      reportingCriteria?: string;
    }

    export namespace ExploitationRequirement {
      export interface Poc {
        /**
         * Unique identifier of the collection requirement POC.
         */
        id?: string;

        /**
         * Callsign of the POC.
         */
        callsign?: string;

        /**
         * Chat name of the POC.
         */
        chatName?: string;

        /**
         * Chat system the POC is accessing.
         */
        chatSystem?: string;

        /**
         * Email address of the POC.
         */
        email?: string;

        /**
         * Name of the POC.
         */
        name?: string;

        /**
         * Amplifying notes about the POC.
         */
        notes?: string;

        /**
         * Phone number of the POC.
         */
        phone?: string;

        /**
         * Radio Frequency the POC is on.
         */
        radioFrequency?: number;

        /**
         * Unit the POC belongs to.
         */
        unit?: string;
      }
    }
  }

  export interface Tasking {
    /**
     * Tasking Unique Identifier.
     */
    id?: string;

    collectionPeriods?: Tasking.CollectionPeriods;

    /**
     * Type of collection tasked.
     */
    collectionType?: 'Simultaneous' | 'Sequential' | 'Operationally' | 'Driven' | 'Priority' | 'Order';

    /**
     * Eight line.
     */
    eightLine?: string;

    /**
     * Free text field for the user to specify special instructions needed for this
     * collection.
     */
    specialComGuidance?: string;

    /**
     * Value of the Sensitive Reconnaissance Operations Track.
     */
    sroTrack?: string;

    /**
     * Human readable definition of this taskings Area Of Responsibility.
     */
    taskingAOR?: string;

    /**
     * Tasking geographical collection area.
     */
    taskingCollectionArea?: string;

    /**
     * Tasking desired collection requirements.
     */
    taskingCollectionRequirements?: Array<Tasking.TaskingCollectionRequirement>;

    /**
     * Country code of the tasking. A Country may represent countries, multi-national
     * consortiums, and international organizations.
     */
    taskingCountry?: string;

    /**
     * Tasking emphasis.
     */
    taskingEmphasis?: string;

    /**
     * Joint Operations Area.
     */
    taskingJoa?: string;

    /**
     * Tasking operation name.
     */
    taskingOperation?: string;

    /**
     * Primary type of intelligence to be collected during the mission.
     */
    taskingPrimaryIntelDiscipline?: string;

    /**
     * Sub category of primary intelligence to be collected.
     */
    taskingPrimarySubCategory?: string;

    /**
     * Tasking Priority (1-n).
     */
    taskingPriority?: number;

    /**
     * Region of the tasking.
     */
    taskingRegion?: string;

    /**
     * Time of retasking, in ISO 8601 UTC format.
     */
    taskingRetaskTime?: string;

    /**
     * What is the primary objective (role) of this task.
     */
    taskingRole?: string;

    /**
     * Type of tasking intelligence to be collected second.
     */
    taskingSecondaryIntelDiscipline?: string;

    /**
     * Mission sub category for secondary intelligence discipline to be collected.
     */
    taskingSecondarySubCategory?: string;

    /**
     * WGS-84 latitude of the start position, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    taskingStartPointLat?: number;

    /**
     * WGS-84 longitude of the start position, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    taskingStartPointLong?: number;

    /**
     * Subregion of the tasking.
     */
    taskingSubRegion?: string;

    /**
     * Military Base to transmit the dissemination of this data.
     */
    taskingSupportedUnit?: string;

    /**
     * A synchronization matrix is used to organize the logistics synchronization
     * process during a mission.
     */
    taskingSyncMatrixBin?: string;

    /**
     * Type of tasking.
     */
    type?: 'Deliberate' | 'Dynamic' | 'Training' | 'Transit';
  }

  export namespace Tasking {
    export interface CollectionPeriods {
      /**
       * Actual start and stop for the collection.
       */
      actual?: Array<CollectionPeriods.Actual>;

      planned?: CollectionPeriods.Planned;
    }

    export namespace CollectionPeriods {
      export interface Actual {
        /**
         * Unique Identifier of actual collection period for historical archive.
         */
        id?: string;

        /**
         * Start time the collection actually occurred, in ISO 8601 UTC format.
         */
        start?: string;

        /**
         * Stop time the collection actually occurred, in ISO 8601 UTC format.
         */
        stop?: string;
      }

      export interface Planned {
        /**
         * Additional start and stop for the collection.
         */
        additional?: Array<Planned.Additional>;

        /**
         * Start time of collection, in ISO 8601 UTC format.
         */
        start?: string;

        /**
         * Stop time of collection, in ISO 8601 UTC format.
         */
        stop?: string;
      }

      export namespace Planned {
        export interface Additional {
          /**
           * Unique Identifier of additional collection period.
           */
          id?: string;

          /**
           * Start time of collection, in ISO 8601 UTC format.
           */
          start?: string;

          /**
           * Stop time of collection, in ISO 8601 UTC format.
           */
          stop?: string;
        }
      }
    }

    export interface TaskingCollectionRequirement {
      /**
       * Collection Requirement Unique Identifier.
       */
      id?: string;

      /**
       * Country code of the collection requirement. A Country may represent countries,
       * multi-national consortiums, and international organizations.
       */
      country?: string;

      /**
       * Collection Requirement Unique Identifier.
       */
      cridNumbers?: string;

      criticalTimes?: TaskingCollectionRequirement.CriticalTimes;

      /**
       * Is this collection requirement an emphasized/critical requirement.
       */
      emphasized?: boolean;

      exploitationRequirement?: TaskingCollectionRequirement.ExploitationRequirement;

      /**
       * Encryption hashing algorithm.
       */
      hash?: string;

      /**
       * Primary type of intelligence to be collected for this requirement.
       */
      intelDiscipline?: string;

      /**
       * Is this collection request for the Prism system?.
       */
      isPrismCr?: boolean;

      /**
       * Human readable name for this operation.
       */
      operation?: string;

      /**
       * 1-n priority for this collection requirement.
       */
      priority?: number;

      /**
       * Reconnaissance Survey information the operator needs.
       */
      reconSurvey?: string;

      /**
       * Record id.
       */
      recordId?: string;

      /**
       * Region of the collection requirement.
       */
      region?: string;

      /**
       * Sub category of primary intelligence to be collected for this requirement.
       */
      secondary?: boolean;

      /**
       * Free text field for the user to specify special instructions needed for this
       * collection.
       */
      specialComGuidance?: string;

      /**
       * Start time for this requirement, should be within the mission time window.
       */
      start?: string;

      /**
       * Stop time for this requirement, should be within the mission time window.
       */
      stop?: string;

      /**
       * Subregion of the collection requirement.
       */
      subregion?: string;

      /**
       * The name of the military unit that this assigned collection requirement will
       * support.
       */
      supportedUnit?: string;

      /**
       * Array of POI Id's for the targets being tasked.
       */
      targetList?: Array<string>;

      /**
       * Type collection this requirement applies to.
       */
      type?: string;
    }

    export namespace TaskingCollectionRequirement {
      export interface CriticalTimes {
        /**
         * Critical start time to collect an image for this requirement.
         */
        earliestImagingTime: string;

        /**
         * Critical stop time to collect an image for this requirement.
         */
        latestImagingTime: string;
      }

      export interface ExploitationRequirement {
        /**
         * Exploitation requirement id.
         */
        id?: string;

        /**
         * Amplifying data for the exploitation requirement.
         */
        amplification?: string;

        /**
         * List of e-mails to disseminate collection verification information.
         */
        dissemination?: string;

        /**
         * Essential Elements of Information.
         */
        eei?: string;

        poc?: ExploitationRequirement.Poc;

        /**
         * The reporting criteria of the collection requirement.
         */
        reportingCriteria?: string;
      }

      export namespace ExploitationRequirement {
        export interface Poc {
          /**
           * Unique identifier of the collection requirement POC.
           */
          id?: string;

          /**
           * Callsign of the POC.
           */
          callsign?: string;

          /**
           * Chat name of the POC.
           */
          chatName?: string;

          /**
           * Chat system the POC is accessing.
           */
          chatSystem?: string;

          /**
           * Email address of the POC.
           */
          email?: string;

          /**
           * Name of the POC.
           */
          name?: string;

          /**
           * Amplifying notes about the POC.
           */
          notes?: string;

          /**
           * Phone number of the POC.
           */
          phone?: string;

          /**
           * Radio Frequency the POC is on.
           */
          radioFrequency?: number;

          /**
           * Unit the POC belongs to.
           */
          unit?: string;
        }
      }
    }
  }

  export interface Transit {
    /**
     * Transit Unique Identifier.
     */
    id?: string;

    /**
     * Military Base to transmit the dissemination of this data.
     */
    base?: string;

    /**
     * Length of mission in milliseconds.
     */
    duration?: number;
  }
}

export type IsrCollectionCountResponse = string;

export interface IsrCollectionQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<IsrCollectionQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace IsrCollectionQueryhelpResponse {
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

export type IsrCollectionTupleResponse = Array<IsrCollectionTupleResponse.IsrCollectionTupleResponseItem>;

export namespace IsrCollectionTupleResponse {
  /**
   * ISR Collection data.
   */
  export interface IsrCollectionTupleResponseItem {
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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Mission desired collection requirements.
     */
    collectionRequirements?: Array<IsrCollectionTupleResponseItem.CollectionRequirement>;

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
     * Version of the IDEX software the request came from for compatibility.
     */
    idexVersion?: number;

    /**
     * Designation of mission Area Of Responsibility.
     */
    missionAOR?: string;

    /**
     * Mission geographical collection area.
     */
    missionCollectionArea?: string;

    /**
     * Country code of the mission. A Country may represent countries, multi-national
     * consortiums, and international organizations.
     */
    missionCountry?: string;

    /**
     * Text version of what we are emphasizing in this mission.
     */
    missionEmphasis?: string;

    /**
     * Mission Identifier.
     */
    missionId?: string;

    /**
     * Joint Operations Area.
     */
    missionJoa?: string;

    /**
     * Mission operation name.
     */
    missionOperation?: string;

    /**
     * Primary type of intelligence to be collected during the mission.
     */
    missionPrimaryIntelDiscipline?: string;

    /**
     * Sub category of primary intelligence to be collected.
     */
    missionPrimarySubCategory?: string;

    /**
     * Mission Priority (1-n).
     */
    missionPriority?: number;

    /**
     * Region of the mission.
     */
    missionRegion?: string;

    /**
     * What is the primary objective(Role) of this mission.
     */
    missionRole?: string;

    /**
     * Type of intelligence to be collected second.
     */
    missionSecondaryIntelDiscipline?: string;

    /**
     * Mission sub category for secondary intelligence discipline to be collected.
     */
    missionSecondarySubCategory?: string;

    /**
     * WGS-84 latitude of the start position, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    missionStartPointLat?: number;

    /**
     * WGS-84 longitude of the start position, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    missionStartPointLong?: number;

    /**
     * Subregion of the mission.
     */
    missionSubRegion?: string;

    /**
     * Name of the Supporting unit/Location that is performing this mission.
     */
    missionSupportedUnit?: string;

    /**
     * A synchronization matrix is used to organize the logistics synchronization
     * process during a mission.
     */
    missionSyncMatrixBin?: string;

    /**
     * Human readable Mission Name.
     */
    name?: string;

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
     * Individual taskings to complete the mission.
     */
    taskings?: Array<IsrCollectionTupleResponseItem.Tasking>;

    /**
     * Object for data dissemination.
     */
    transit?: Array<IsrCollectionTupleResponseItem.Transit>;

    /**
     * Time the row was updated in the database, auto-populated by the system, example
     * = 2018-01-01T16:00:00.123Z.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  export namespace IsrCollectionTupleResponseItem {
    export interface CollectionRequirement {
      /**
       * Collection Requirement Unique Identifier.
       */
      id?: string;

      /**
       * Country code of the collection requirement. A Country may represent countries,
       * multi-national consortiums, and international organizations.
       */
      country?: string;

      /**
       * Collection Requirement Unique Identifier.
       */
      cridNumbers?: string;

      criticalTimes?: CollectionRequirement.CriticalTimes;

      /**
       * Is this collection requirement an emphasized/critical requirement.
       */
      emphasized?: boolean;

      exploitationRequirement?: CollectionRequirement.ExploitationRequirement;

      /**
       * Encryption hashing algorithm.
       */
      hash?: string;

      /**
       * Primary type of intelligence to be collected for this requirement.
       */
      intelDiscipline?: string;

      /**
       * Is this collection request for the Prism system?.
       */
      isPrismCr?: boolean;

      /**
       * Human readable name for this operation.
       */
      operation?: string;

      /**
       * 1-n priority for this collection requirement.
       */
      priority?: number;

      /**
       * Reconnaissance Survey information the operator needs.
       */
      reconSurvey?: string;

      /**
       * Record id.
       */
      recordId?: string;

      /**
       * Region of the collection requirement.
       */
      region?: string;

      /**
       * Sub category of primary intelligence to be collected for this requirement.
       */
      secondary?: boolean;

      /**
       * Free text field for the user to specify special instructions needed for this
       * collection.
       */
      specialComGuidance?: string;

      /**
       * Start time for this requirement, should be within the mission time window.
       */
      start?: string;

      /**
       * Stop time for this requirement, should be within the mission time window.
       */
      stop?: string;

      /**
       * Subregion of the collection requirement.
       */
      subregion?: string;

      /**
       * The name of the military unit that this assigned collection requirement will
       * support.
       */
      supportedUnit?: string;

      /**
       * Array of POI Id's for the targets being tasked.
       */
      targetList?: Array<string>;

      /**
       * Type collection this requirement applies to.
       */
      type?: string;
    }

    export namespace CollectionRequirement {
      export interface CriticalTimes {
        /**
         * Critical start time to collect an image for this requirement.
         */
        earliestImagingTime: string;

        /**
         * Critical stop time to collect an image for this requirement.
         */
        latestImagingTime: string;
      }

      export interface ExploitationRequirement {
        /**
         * Exploitation requirement id.
         */
        id?: string;

        /**
         * Amplifying data for the exploitation requirement.
         */
        amplification?: string;

        /**
         * List of e-mails to disseminate collection verification information.
         */
        dissemination?: string;

        /**
         * Essential Elements of Information.
         */
        eei?: string;

        poc?: ExploitationRequirement.Poc;

        /**
         * The reporting criteria of the collection requirement.
         */
        reportingCriteria?: string;
      }

      export namespace ExploitationRequirement {
        export interface Poc {
          /**
           * Unique identifier of the collection requirement POC.
           */
          id?: string;

          /**
           * Callsign of the POC.
           */
          callsign?: string;

          /**
           * Chat name of the POC.
           */
          chatName?: string;

          /**
           * Chat system the POC is accessing.
           */
          chatSystem?: string;

          /**
           * Email address of the POC.
           */
          email?: string;

          /**
           * Name of the POC.
           */
          name?: string;

          /**
           * Amplifying notes about the POC.
           */
          notes?: string;

          /**
           * Phone number of the POC.
           */
          phone?: string;

          /**
           * Radio Frequency the POC is on.
           */
          radioFrequency?: number;

          /**
           * Unit the POC belongs to.
           */
          unit?: string;
        }
      }
    }

    export interface Tasking {
      /**
       * Tasking Unique Identifier.
       */
      id?: string;

      collectionPeriods?: Tasking.CollectionPeriods;

      /**
       * Type of collection tasked.
       */
      collectionType?: 'Simultaneous' | 'Sequential' | 'Operationally' | 'Driven' | 'Priority' | 'Order';

      /**
       * Eight line.
       */
      eightLine?: string;

      /**
       * Free text field for the user to specify special instructions needed for this
       * collection.
       */
      specialComGuidance?: string;

      /**
       * Value of the Sensitive Reconnaissance Operations Track.
       */
      sroTrack?: string;

      /**
       * Human readable definition of this taskings Area Of Responsibility.
       */
      taskingAOR?: string;

      /**
       * Tasking geographical collection area.
       */
      taskingCollectionArea?: string;

      /**
       * Tasking desired collection requirements.
       */
      taskingCollectionRequirements?: Array<Tasking.TaskingCollectionRequirement>;

      /**
       * Country code of the tasking. A Country may represent countries, multi-national
       * consortiums, and international organizations.
       */
      taskingCountry?: string;

      /**
       * Tasking emphasis.
       */
      taskingEmphasis?: string;

      /**
       * Joint Operations Area.
       */
      taskingJoa?: string;

      /**
       * Tasking operation name.
       */
      taskingOperation?: string;

      /**
       * Primary type of intelligence to be collected during the mission.
       */
      taskingPrimaryIntelDiscipline?: string;

      /**
       * Sub category of primary intelligence to be collected.
       */
      taskingPrimarySubCategory?: string;

      /**
       * Tasking Priority (1-n).
       */
      taskingPriority?: number;

      /**
       * Region of the tasking.
       */
      taskingRegion?: string;

      /**
       * Time of retasking, in ISO 8601 UTC format.
       */
      taskingRetaskTime?: string;

      /**
       * What is the primary objective (role) of this task.
       */
      taskingRole?: string;

      /**
       * Type of tasking intelligence to be collected second.
       */
      taskingSecondaryIntelDiscipline?: string;

      /**
       * Mission sub category for secondary intelligence discipline to be collected.
       */
      taskingSecondarySubCategory?: string;

      /**
       * WGS-84 latitude of the start position, in degrees. -90 to 90 degrees (negative
       * values south of equator).
       */
      taskingStartPointLat?: number;

      /**
       * WGS-84 longitude of the start position, in degrees. -180 to 180 degrees
       * (negative values west of Prime Meridian).
       */
      taskingStartPointLong?: number;

      /**
       * Subregion of the tasking.
       */
      taskingSubRegion?: string;

      /**
       * Military Base to transmit the dissemination of this data.
       */
      taskingSupportedUnit?: string;

      /**
       * A synchronization matrix is used to organize the logistics synchronization
       * process during a mission.
       */
      taskingSyncMatrixBin?: string;

      /**
       * Type of tasking.
       */
      type?: 'Deliberate' | 'Dynamic' | 'Training' | 'Transit';
    }

    export namespace Tasking {
      export interface CollectionPeriods {
        /**
         * Actual start and stop for the collection.
         */
        actual?: Array<CollectionPeriods.Actual>;

        planned?: CollectionPeriods.Planned;
      }

      export namespace CollectionPeriods {
        export interface Actual {
          /**
           * Unique Identifier of actual collection period for historical archive.
           */
          id?: string;

          /**
           * Start time the collection actually occurred, in ISO 8601 UTC format.
           */
          start?: string;

          /**
           * Stop time the collection actually occurred, in ISO 8601 UTC format.
           */
          stop?: string;
        }

        export interface Planned {
          /**
           * Additional start and stop for the collection.
           */
          additional?: Array<Planned.Additional>;

          /**
           * Start time of collection, in ISO 8601 UTC format.
           */
          start?: string;

          /**
           * Stop time of collection, in ISO 8601 UTC format.
           */
          stop?: string;
        }

        export namespace Planned {
          export interface Additional {
            /**
             * Unique Identifier of additional collection period.
             */
            id?: string;

            /**
             * Start time of collection, in ISO 8601 UTC format.
             */
            start?: string;

            /**
             * Stop time of collection, in ISO 8601 UTC format.
             */
            stop?: string;
          }
        }
      }

      export interface TaskingCollectionRequirement {
        /**
         * Collection Requirement Unique Identifier.
         */
        id?: string;

        /**
         * Country code of the collection requirement. A Country may represent countries,
         * multi-national consortiums, and international organizations.
         */
        country?: string;

        /**
         * Collection Requirement Unique Identifier.
         */
        cridNumbers?: string;

        criticalTimes?: TaskingCollectionRequirement.CriticalTimes;

        /**
         * Is this collection requirement an emphasized/critical requirement.
         */
        emphasized?: boolean;

        exploitationRequirement?: TaskingCollectionRequirement.ExploitationRequirement;

        /**
         * Encryption hashing algorithm.
         */
        hash?: string;

        /**
         * Primary type of intelligence to be collected for this requirement.
         */
        intelDiscipline?: string;

        /**
         * Is this collection request for the Prism system?.
         */
        isPrismCr?: boolean;

        /**
         * Human readable name for this operation.
         */
        operation?: string;

        /**
         * 1-n priority for this collection requirement.
         */
        priority?: number;

        /**
         * Reconnaissance Survey information the operator needs.
         */
        reconSurvey?: string;

        /**
         * Record id.
         */
        recordId?: string;

        /**
         * Region of the collection requirement.
         */
        region?: string;

        /**
         * Sub category of primary intelligence to be collected for this requirement.
         */
        secondary?: boolean;

        /**
         * Free text field for the user to specify special instructions needed for this
         * collection.
         */
        specialComGuidance?: string;

        /**
         * Start time for this requirement, should be within the mission time window.
         */
        start?: string;

        /**
         * Stop time for this requirement, should be within the mission time window.
         */
        stop?: string;

        /**
         * Subregion of the collection requirement.
         */
        subregion?: string;

        /**
         * The name of the military unit that this assigned collection requirement will
         * support.
         */
        supportedUnit?: string;

        /**
         * Array of POI Id's for the targets being tasked.
         */
        targetList?: Array<string>;

        /**
         * Type collection this requirement applies to.
         */
        type?: string;
      }

      export namespace TaskingCollectionRequirement {
        export interface CriticalTimes {
          /**
           * Critical start time to collect an image for this requirement.
           */
          earliestImagingTime: string;

          /**
           * Critical stop time to collect an image for this requirement.
           */
          latestImagingTime: string;
        }

        export interface ExploitationRequirement {
          /**
           * Exploitation requirement id.
           */
          id?: string;

          /**
           * Amplifying data for the exploitation requirement.
           */
          amplification?: string;

          /**
           * List of e-mails to disseminate collection verification information.
           */
          dissemination?: string;

          /**
           * Essential Elements of Information.
           */
          eei?: string;

          poc?: ExploitationRequirement.Poc;

          /**
           * The reporting criteria of the collection requirement.
           */
          reportingCriteria?: string;
        }

        export namespace ExploitationRequirement {
          export interface Poc {
            /**
             * Unique identifier of the collection requirement POC.
             */
            id?: string;

            /**
             * Callsign of the POC.
             */
            callsign?: string;

            /**
             * Chat name of the POC.
             */
            chatName?: string;

            /**
             * Chat system the POC is accessing.
             */
            chatSystem?: string;

            /**
             * Email address of the POC.
             */
            email?: string;

            /**
             * Name of the POC.
             */
            name?: string;

            /**
             * Amplifying notes about the POC.
             */
            notes?: string;

            /**
             * Phone number of the POC.
             */
            phone?: string;

            /**
             * Radio Frequency the POC is on.
             */
            radioFrequency?: number;

            /**
             * Unit the POC belongs to.
             */
            unit?: string;
          }
        }
      }
    }

    export interface Transit {
      /**
       * Transit Unique Identifier.
       */
      id?: string;

      /**
       * Military Base to transmit the dissemination of this data.
       */
      base?: string;

      /**
       * Length of mission in milliseconds.
       */
      duration?: number;
    }
  }
}

export interface IsrCollectionListParams extends OffsetPageParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export interface IsrCollectionCountParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;

  firstResult?: number;

  maxResults?: number;
}

export interface IsrCollectionCreateBulkParams {
  body: Array<IsrCollectionCreateBulkParams.Body>;
}

export namespace IsrCollectionCreateBulkParams {
  /**
   * ISR Collection data.
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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Mission desired collection requirements.
     */
    collectionRequirements?: Array<Body.CollectionRequirement>;

    /**
     * Version of the IDEX software the request came from for compatibility.
     */
    idexVersion?: number;

    /**
     * Designation of mission Area Of Responsibility.
     */
    missionAOR?: string;

    /**
     * Mission geographical collection area.
     */
    missionCollectionArea?: string;

    /**
     * Country code of the mission. A Country may represent countries, multi-national
     * consortiums, and international organizations.
     */
    missionCountry?: string;

    /**
     * Text version of what we are emphasizing in this mission.
     */
    missionEmphasis?: string;

    /**
     * Mission Identifier.
     */
    missionId?: string;

    /**
     * Joint Operations Area.
     */
    missionJoa?: string;

    /**
     * Mission operation name.
     */
    missionOperation?: string;

    /**
     * Primary type of intelligence to be collected during the mission.
     */
    missionPrimaryIntelDiscipline?: string;

    /**
     * Sub category of primary intelligence to be collected.
     */
    missionPrimarySubCategory?: string;

    /**
     * Mission Priority (1-n).
     */
    missionPriority?: number;

    /**
     * Region of the mission.
     */
    missionRegion?: string;

    /**
     * What is the primary objective(Role) of this mission.
     */
    missionRole?: string;

    /**
     * Type of intelligence to be collected second.
     */
    missionSecondaryIntelDiscipline?: string;

    /**
     * Mission sub category for secondary intelligence discipline to be collected.
     */
    missionSecondarySubCategory?: string;

    /**
     * WGS-84 latitude of the start position, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    missionStartPointLat?: number;

    /**
     * WGS-84 longitude of the start position, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    missionStartPointLong?: number;

    /**
     * Subregion of the mission.
     */
    missionSubRegion?: string;

    /**
     * Name of the Supporting unit/Location that is performing this mission.
     */
    missionSupportedUnit?: string;

    /**
     * A synchronization matrix is used to organize the logistics synchronization
     * process during a mission.
     */
    missionSyncMatrixBin?: string;

    /**
     * Human readable Mission Name.
     */
    name?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Individual taskings to complete the mission.
     */
    taskings?: Array<Body.Tasking>;

    /**
     * Object for data dissemination.
     */
    transit?: Array<Body.Transit>;
  }

  export namespace Body {
    export interface CollectionRequirement {
      /**
       * Collection Requirement Unique Identifier.
       */
      id?: string;

      /**
       * Country code of the collection requirement. A Country may represent countries,
       * multi-national consortiums, and international organizations.
       */
      country?: string;

      /**
       * Collection Requirement Unique Identifier.
       */
      cridNumbers?: string;

      criticalTimes?: CollectionRequirement.CriticalTimes;

      /**
       * Is this collection requirement an emphasized/critical requirement.
       */
      emphasized?: boolean;

      exploitationRequirement?: CollectionRequirement.ExploitationRequirement;

      /**
       * Encryption hashing algorithm.
       */
      hash?: string;

      /**
       * Primary type of intelligence to be collected for this requirement.
       */
      intelDiscipline?: string;

      /**
       * Is this collection request for the Prism system?.
       */
      isPrismCr?: boolean;

      /**
       * Human readable name for this operation.
       */
      operation?: string;

      /**
       * 1-n priority for this collection requirement.
       */
      priority?: number;

      /**
       * Reconnaissance Survey information the operator needs.
       */
      reconSurvey?: string;

      /**
       * Record id.
       */
      recordId?: string;

      /**
       * Region of the collection requirement.
       */
      region?: string;

      /**
       * Sub category of primary intelligence to be collected for this requirement.
       */
      secondary?: boolean;

      /**
       * Free text field for the user to specify special instructions needed for this
       * collection.
       */
      specialComGuidance?: string;

      /**
       * Start time for this requirement, should be within the mission time window.
       */
      start?: string;

      /**
       * Stop time for this requirement, should be within the mission time window.
       */
      stop?: string;

      /**
       * Subregion of the collection requirement.
       */
      subregion?: string;

      /**
       * The name of the military unit that this assigned collection requirement will
       * support.
       */
      supportedUnit?: string;

      /**
       * Array of POI Id's for the targets being tasked.
       */
      targetList?: Array<string>;

      /**
       * Type collection this requirement applies to.
       */
      type?: string;
    }

    export namespace CollectionRequirement {
      export interface CriticalTimes {
        /**
         * Critical start time to collect an image for this requirement.
         */
        earliestImagingTime: string;

        /**
         * Critical stop time to collect an image for this requirement.
         */
        latestImagingTime: string;
      }

      export interface ExploitationRequirement {
        /**
         * Exploitation requirement id.
         */
        id?: string;

        /**
         * Amplifying data for the exploitation requirement.
         */
        amplification?: string;

        /**
         * List of e-mails to disseminate collection verification information.
         */
        dissemination?: string;

        /**
         * Essential Elements of Information.
         */
        eei?: string;

        poc?: ExploitationRequirement.Poc;

        /**
         * The reporting criteria of the collection requirement.
         */
        reportingCriteria?: string;
      }

      export namespace ExploitationRequirement {
        export interface Poc {
          /**
           * Unique identifier of the collection requirement POC.
           */
          id?: string;

          /**
           * Callsign of the POC.
           */
          callsign?: string;

          /**
           * Chat name of the POC.
           */
          chatName?: string;

          /**
           * Chat system the POC is accessing.
           */
          chatSystem?: string;

          /**
           * Email address of the POC.
           */
          email?: string;

          /**
           * Name of the POC.
           */
          name?: string;

          /**
           * Amplifying notes about the POC.
           */
          notes?: string;

          /**
           * Phone number of the POC.
           */
          phone?: string;

          /**
           * Radio Frequency the POC is on.
           */
          radioFrequency?: number;

          /**
           * Unit the POC belongs to.
           */
          unit?: string;
        }
      }
    }

    export interface Tasking {
      /**
       * Tasking Unique Identifier.
       */
      id?: string;

      collectionPeriods?: Tasking.CollectionPeriods;

      /**
       * Type of collection tasked.
       */
      collectionType?: 'Simultaneous' | 'Sequential' | 'Operationally' | 'Driven' | 'Priority' | 'Order';

      /**
       * Eight line.
       */
      eightLine?: string;

      /**
       * Free text field for the user to specify special instructions needed for this
       * collection.
       */
      specialComGuidance?: string;

      /**
       * Value of the Sensitive Reconnaissance Operations Track.
       */
      sroTrack?: string;

      /**
       * Human readable definition of this taskings Area Of Responsibility.
       */
      taskingAOR?: string;

      /**
       * Tasking geographical collection area.
       */
      taskingCollectionArea?: string;

      /**
       * Tasking desired collection requirements.
       */
      taskingCollectionRequirements?: Array<Tasking.TaskingCollectionRequirement>;

      /**
       * Country code of the tasking. A Country may represent countries, multi-national
       * consortiums, and international organizations.
       */
      taskingCountry?: string;

      /**
       * Tasking emphasis.
       */
      taskingEmphasis?: string;

      /**
       * Joint Operations Area.
       */
      taskingJoa?: string;

      /**
       * Tasking operation name.
       */
      taskingOperation?: string;

      /**
       * Primary type of intelligence to be collected during the mission.
       */
      taskingPrimaryIntelDiscipline?: string;

      /**
       * Sub category of primary intelligence to be collected.
       */
      taskingPrimarySubCategory?: string;

      /**
       * Tasking Priority (1-n).
       */
      taskingPriority?: number;

      /**
       * Region of the tasking.
       */
      taskingRegion?: string;

      /**
       * Time of retasking, in ISO 8601 UTC format.
       */
      taskingRetaskTime?: string;

      /**
       * What is the primary objective (role) of this task.
       */
      taskingRole?: string;

      /**
       * Type of tasking intelligence to be collected second.
       */
      taskingSecondaryIntelDiscipline?: string;

      /**
       * Mission sub category for secondary intelligence discipline to be collected.
       */
      taskingSecondarySubCategory?: string;

      /**
       * WGS-84 latitude of the start position, in degrees. -90 to 90 degrees (negative
       * values south of equator).
       */
      taskingStartPointLat?: number;

      /**
       * WGS-84 longitude of the start position, in degrees. -180 to 180 degrees
       * (negative values west of Prime Meridian).
       */
      taskingStartPointLong?: number;

      /**
       * Subregion of the tasking.
       */
      taskingSubRegion?: string;

      /**
       * Military Base to transmit the dissemination of this data.
       */
      taskingSupportedUnit?: string;

      /**
       * A synchronization matrix is used to organize the logistics synchronization
       * process during a mission.
       */
      taskingSyncMatrixBin?: string;

      /**
       * Type of tasking.
       */
      type?: 'Deliberate' | 'Dynamic' | 'Training' | 'Transit';
    }

    export namespace Tasking {
      export interface CollectionPeriods {
        /**
         * Actual start and stop for the collection.
         */
        actual?: Array<CollectionPeriods.Actual>;

        planned?: CollectionPeriods.Planned;
      }

      export namespace CollectionPeriods {
        export interface Actual {
          /**
           * Unique Identifier of actual collection period for historical archive.
           */
          id?: string;

          /**
           * Start time the collection actually occurred, in ISO 8601 UTC format.
           */
          start?: string;

          /**
           * Stop time the collection actually occurred, in ISO 8601 UTC format.
           */
          stop?: string;
        }

        export interface Planned {
          /**
           * Additional start and stop for the collection.
           */
          additional?: Array<Planned.Additional>;

          /**
           * Start time of collection, in ISO 8601 UTC format.
           */
          start?: string;

          /**
           * Stop time of collection, in ISO 8601 UTC format.
           */
          stop?: string;
        }

        export namespace Planned {
          export interface Additional {
            /**
             * Unique Identifier of additional collection period.
             */
            id?: string;

            /**
             * Start time of collection, in ISO 8601 UTC format.
             */
            start?: string;

            /**
             * Stop time of collection, in ISO 8601 UTC format.
             */
            stop?: string;
          }
        }
      }

      export interface TaskingCollectionRequirement {
        /**
         * Collection Requirement Unique Identifier.
         */
        id?: string;

        /**
         * Country code of the collection requirement. A Country may represent countries,
         * multi-national consortiums, and international organizations.
         */
        country?: string;

        /**
         * Collection Requirement Unique Identifier.
         */
        cridNumbers?: string;

        criticalTimes?: TaskingCollectionRequirement.CriticalTimes;

        /**
         * Is this collection requirement an emphasized/critical requirement.
         */
        emphasized?: boolean;

        exploitationRequirement?: TaskingCollectionRequirement.ExploitationRequirement;

        /**
         * Encryption hashing algorithm.
         */
        hash?: string;

        /**
         * Primary type of intelligence to be collected for this requirement.
         */
        intelDiscipline?: string;

        /**
         * Is this collection request for the Prism system?.
         */
        isPrismCr?: boolean;

        /**
         * Human readable name for this operation.
         */
        operation?: string;

        /**
         * 1-n priority for this collection requirement.
         */
        priority?: number;

        /**
         * Reconnaissance Survey information the operator needs.
         */
        reconSurvey?: string;

        /**
         * Record id.
         */
        recordId?: string;

        /**
         * Region of the collection requirement.
         */
        region?: string;

        /**
         * Sub category of primary intelligence to be collected for this requirement.
         */
        secondary?: boolean;

        /**
         * Free text field for the user to specify special instructions needed for this
         * collection.
         */
        specialComGuidance?: string;

        /**
         * Start time for this requirement, should be within the mission time window.
         */
        start?: string;

        /**
         * Stop time for this requirement, should be within the mission time window.
         */
        stop?: string;

        /**
         * Subregion of the collection requirement.
         */
        subregion?: string;

        /**
         * The name of the military unit that this assigned collection requirement will
         * support.
         */
        supportedUnit?: string;

        /**
         * Array of POI Id's for the targets being tasked.
         */
        targetList?: Array<string>;

        /**
         * Type collection this requirement applies to.
         */
        type?: string;
      }

      export namespace TaskingCollectionRequirement {
        export interface CriticalTimes {
          /**
           * Critical start time to collect an image for this requirement.
           */
          earliestImagingTime: string;

          /**
           * Critical stop time to collect an image for this requirement.
           */
          latestImagingTime: string;
        }

        export interface ExploitationRequirement {
          /**
           * Exploitation requirement id.
           */
          id?: string;

          /**
           * Amplifying data for the exploitation requirement.
           */
          amplification?: string;

          /**
           * List of e-mails to disseminate collection verification information.
           */
          dissemination?: string;

          /**
           * Essential Elements of Information.
           */
          eei?: string;

          poc?: ExploitationRequirement.Poc;

          /**
           * The reporting criteria of the collection requirement.
           */
          reportingCriteria?: string;
        }

        export namespace ExploitationRequirement {
          export interface Poc {
            /**
             * Unique identifier of the collection requirement POC.
             */
            id?: string;

            /**
             * Callsign of the POC.
             */
            callsign?: string;

            /**
             * Chat name of the POC.
             */
            chatName?: string;

            /**
             * Chat system the POC is accessing.
             */
            chatSystem?: string;

            /**
             * Email address of the POC.
             */
            email?: string;

            /**
             * Name of the POC.
             */
            name?: string;

            /**
             * Amplifying notes about the POC.
             */
            notes?: string;

            /**
             * Phone number of the POC.
             */
            phone?: string;

            /**
             * Radio Frequency the POC is on.
             */
            radioFrequency?: number;

            /**
             * Unit the POC belongs to.
             */
            unit?: string;
          }
        }
      }
    }

    export interface Transit {
      /**
       * Transit Unique Identifier.
       */
      id?: string;

      /**
       * Military Base to transmit the dissemination of this data.
       */
      base?: string;

      /**
       * Length of mission in milliseconds.
       */
      duration?: number;
    }
  }
}

export interface IsrCollectionTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;

  firstResult?: number;

  maxResults?: number;
}

export interface IsrCollectionUnvalidatedPublishParams {
  body: Array<IsrCollectionUnvalidatedPublishParams.Body>;
}

export namespace IsrCollectionUnvalidatedPublishParams {
  /**
   * ISR Collection data.
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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Mission desired collection requirements.
     */
    collectionRequirements?: Array<Body.CollectionRequirement>;

    /**
     * Version of the IDEX software the request came from for compatibility.
     */
    idexVersion?: number;

    /**
     * Designation of mission Area Of Responsibility.
     */
    missionAOR?: string;

    /**
     * Mission geographical collection area.
     */
    missionCollectionArea?: string;

    /**
     * Country code of the mission. A Country may represent countries, multi-national
     * consortiums, and international organizations.
     */
    missionCountry?: string;

    /**
     * Text version of what we are emphasizing in this mission.
     */
    missionEmphasis?: string;

    /**
     * Mission Identifier.
     */
    missionId?: string;

    /**
     * Joint Operations Area.
     */
    missionJoa?: string;

    /**
     * Mission operation name.
     */
    missionOperation?: string;

    /**
     * Primary type of intelligence to be collected during the mission.
     */
    missionPrimaryIntelDiscipline?: string;

    /**
     * Sub category of primary intelligence to be collected.
     */
    missionPrimarySubCategory?: string;

    /**
     * Mission Priority (1-n).
     */
    missionPriority?: number;

    /**
     * Region of the mission.
     */
    missionRegion?: string;

    /**
     * What is the primary objective(Role) of this mission.
     */
    missionRole?: string;

    /**
     * Type of intelligence to be collected second.
     */
    missionSecondaryIntelDiscipline?: string;

    /**
     * Mission sub category for secondary intelligence discipline to be collected.
     */
    missionSecondarySubCategory?: string;

    /**
     * WGS-84 latitude of the start position, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    missionStartPointLat?: number;

    /**
     * WGS-84 longitude of the start position, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    missionStartPointLong?: number;

    /**
     * Subregion of the mission.
     */
    missionSubRegion?: string;

    /**
     * Name of the Supporting unit/Location that is performing this mission.
     */
    missionSupportedUnit?: string;

    /**
     * A synchronization matrix is used to organize the logistics synchronization
     * process during a mission.
     */
    missionSyncMatrixBin?: string;

    /**
     * Human readable Mission Name.
     */
    name?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Individual taskings to complete the mission.
     */
    taskings?: Array<Body.Tasking>;

    /**
     * Object for data dissemination.
     */
    transit?: Array<Body.Transit>;
  }

  export namespace Body {
    export interface CollectionRequirement {
      /**
       * Collection Requirement Unique Identifier.
       */
      id?: string;

      /**
       * Country code of the collection requirement. A Country may represent countries,
       * multi-national consortiums, and international organizations.
       */
      country?: string;

      /**
       * Collection Requirement Unique Identifier.
       */
      cridNumbers?: string;

      criticalTimes?: CollectionRequirement.CriticalTimes;

      /**
       * Is this collection requirement an emphasized/critical requirement.
       */
      emphasized?: boolean;

      exploitationRequirement?: CollectionRequirement.ExploitationRequirement;

      /**
       * Encryption hashing algorithm.
       */
      hash?: string;

      /**
       * Primary type of intelligence to be collected for this requirement.
       */
      intelDiscipline?: string;

      /**
       * Is this collection request for the Prism system?.
       */
      isPrismCr?: boolean;

      /**
       * Human readable name for this operation.
       */
      operation?: string;

      /**
       * 1-n priority for this collection requirement.
       */
      priority?: number;

      /**
       * Reconnaissance Survey information the operator needs.
       */
      reconSurvey?: string;

      /**
       * Record id.
       */
      recordId?: string;

      /**
       * Region of the collection requirement.
       */
      region?: string;

      /**
       * Sub category of primary intelligence to be collected for this requirement.
       */
      secondary?: boolean;

      /**
       * Free text field for the user to specify special instructions needed for this
       * collection.
       */
      specialComGuidance?: string;

      /**
       * Start time for this requirement, should be within the mission time window.
       */
      start?: string;

      /**
       * Stop time for this requirement, should be within the mission time window.
       */
      stop?: string;

      /**
       * Subregion of the collection requirement.
       */
      subregion?: string;

      /**
       * The name of the military unit that this assigned collection requirement will
       * support.
       */
      supportedUnit?: string;

      /**
       * Array of POI Id's for the targets being tasked.
       */
      targetList?: Array<string>;

      /**
       * Type collection this requirement applies to.
       */
      type?: string;
    }

    export namespace CollectionRequirement {
      export interface CriticalTimes {
        /**
         * Critical start time to collect an image for this requirement.
         */
        earliestImagingTime: string;

        /**
         * Critical stop time to collect an image for this requirement.
         */
        latestImagingTime: string;
      }

      export interface ExploitationRequirement {
        /**
         * Exploitation requirement id.
         */
        id?: string;

        /**
         * Amplifying data for the exploitation requirement.
         */
        amplification?: string;

        /**
         * List of e-mails to disseminate collection verification information.
         */
        dissemination?: string;

        /**
         * Essential Elements of Information.
         */
        eei?: string;

        poc?: ExploitationRequirement.Poc;

        /**
         * The reporting criteria of the collection requirement.
         */
        reportingCriteria?: string;
      }

      export namespace ExploitationRequirement {
        export interface Poc {
          /**
           * Unique identifier of the collection requirement POC.
           */
          id?: string;

          /**
           * Callsign of the POC.
           */
          callsign?: string;

          /**
           * Chat name of the POC.
           */
          chatName?: string;

          /**
           * Chat system the POC is accessing.
           */
          chatSystem?: string;

          /**
           * Email address of the POC.
           */
          email?: string;

          /**
           * Name of the POC.
           */
          name?: string;

          /**
           * Amplifying notes about the POC.
           */
          notes?: string;

          /**
           * Phone number of the POC.
           */
          phone?: string;

          /**
           * Radio Frequency the POC is on.
           */
          radioFrequency?: number;

          /**
           * Unit the POC belongs to.
           */
          unit?: string;
        }
      }
    }

    export interface Tasking {
      /**
       * Tasking Unique Identifier.
       */
      id?: string;

      collectionPeriods?: Tasking.CollectionPeriods;

      /**
       * Type of collection tasked.
       */
      collectionType?: 'Simultaneous' | 'Sequential' | 'Operationally' | 'Driven' | 'Priority' | 'Order';

      /**
       * Eight line.
       */
      eightLine?: string;

      /**
       * Free text field for the user to specify special instructions needed for this
       * collection.
       */
      specialComGuidance?: string;

      /**
       * Value of the Sensitive Reconnaissance Operations Track.
       */
      sroTrack?: string;

      /**
       * Human readable definition of this taskings Area Of Responsibility.
       */
      taskingAOR?: string;

      /**
       * Tasking geographical collection area.
       */
      taskingCollectionArea?: string;

      /**
       * Tasking desired collection requirements.
       */
      taskingCollectionRequirements?: Array<Tasking.TaskingCollectionRequirement>;

      /**
       * Country code of the tasking. A Country may represent countries, multi-national
       * consortiums, and international organizations.
       */
      taskingCountry?: string;

      /**
       * Tasking emphasis.
       */
      taskingEmphasis?: string;

      /**
       * Joint Operations Area.
       */
      taskingJoa?: string;

      /**
       * Tasking operation name.
       */
      taskingOperation?: string;

      /**
       * Primary type of intelligence to be collected during the mission.
       */
      taskingPrimaryIntelDiscipline?: string;

      /**
       * Sub category of primary intelligence to be collected.
       */
      taskingPrimarySubCategory?: string;

      /**
       * Tasking Priority (1-n).
       */
      taskingPriority?: number;

      /**
       * Region of the tasking.
       */
      taskingRegion?: string;

      /**
       * Time of retasking, in ISO 8601 UTC format.
       */
      taskingRetaskTime?: string;

      /**
       * What is the primary objective (role) of this task.
       */
      taskingRole?: string;

      /**
       * Type of tasking intelligence to be collected second.
       */
      taskingSecondaryIntelDiscipline?: string;

      /**
       * Mission sub category for secondary intelligence discipline to be collected.
       */
      taskingSecondarySubCategory?: string;

      /**
       * WGS-84 latitude of the start position, in degrees. -90 to 90 degrees (negative
       * values south of equator).
       */
      taskingStartPointLat?: number;

      /**
       * WGS-84 longitude of the start position, in degrees. -180 to 180 degrees
       * (negative values west of Prime Meridian).
       */
      taskingStartPointLong?: number;

      /**
       * Subregion of the tasking.
       */
      taskingSubRegion?: string;

      /**
       * Military Base to transmit the dissemination of this data.
       */
      taskingSupportedUnit?: string;

      /**
       * A synchronization matrix is used to organize the logistics synchronization
       * process during a mission.
       */
      taskingSyncMatrixBin?: string;

      /**
       * Type of tasking.
       */
      type?: 'Deliberate' | 'Dynamic' | 'Training' | 'Transit';
    }

    export namespace Tasking {
      export interface CollectionPeriods {
        /**
         * Actual start and stop for the collection.
         */
        actual?: Array<CollectionPeriods.Actual>;

        planned?: CollectionPeriods.Planned;
      }

      export namespace CollectionPeriods {
        export interface Actual {
          /**
           * Unique Identifier of actual collection period for historical archive.
           */
          id?: string;

          /**
           * Start time the collection actually occurred, in ISO 8601 UTC format.
           */
          start?: string;

          /**
           * Stop time the collection actually occurred, in ISO 8601 UTC format.
           */
          stop?: string;
        }

        export interface Planned {
          /**
           * Additional start and stop for the collection.
           */
          additional?: Array<Planned.Additional>;

          /**
           * Start time of collection, in ISO 8601 UTC format.
           */
          start?: string;

          /**
           * Stop time of collection, in ISO 8601 UTC format.
           */
          stop?: string;
        }

        export namespace Planned {
          export interface Additional {
            /**
             * Unique Identifier of additional collection period.
             */
            id?: string;

            /**
             * Start time of collection, in ISO 8601 UTC format.
             */
            start?: string;

            /**
             * Stop time of collection, in ISO 8601 UTC format.
             */
            stop?: string;
          }
        }
      }

      export interface TaskingCollectionRequirement {
        /**
         * Collection Requirement Unique Identifier.
         */
        id?: string;

        /**
         * Country code of the collection requirement. A Country may represent countries,
         * multi-national consortiums, and international organizations.
         */
        country?: string;

        /**
         * Collection Requirement Unique Identifier.
         */
        cridNumbers?: string;

        criticalTimes?: TaskingCollectionRequirement.CriticalTimes;

        /**
         * Is this collection requirement an emphasized/critical requirement.
         */
        emphasized?: boolean;

        exploitationRequirement?: TaskingCollectionRequirement.ExploitationRequirement;

        /**
         * Encryption hashing algorithm.
         */
        hash?: string;

        /**
         * Primary type of intelligence to be collected for this requirement.
         */
        intelDiscipline?: string;

        /**
         * Is this collection request for the Prism system?.
         */
        isPrismCr?: boolean;

        /**
         * Human readable name for this operation.
         */
        operation?: string;

        /**
         * 1-n priority for this collection requirement.
         */
        priority?: number;

        /**
         * Reconnaissance Survey information the operator needs.
         */
        reconSurvey?: string;

        /**
         * Record id.
         */
        recordId?: string;

        /**
         * Region of the collection requirement.
         */
        region?: string;

        /**
         * Sub category of primary intelligence to be collected for this requirement.
         */
        secondary?: boolean;

        /**
         * Free text field for the user to specify special instructions needed for this
         * collection.
         */
        specialComGuidance?: string;

        /**
         * Start time for this requirement, should be within the mission time window.
         */
        start?: string;

        /**
         * Stop time for this requirement, should be within the mission time window.
         */
        stop?: string;

        /**
         * Subregion of the collection requirement.
         */
        subregion?: string;

        /**
         * The name of the military unit that this assigned collection requirement will
         * support.
         */
        supportedUnit?: string;

        /**
         * Array of POI Id's for the targets being tasked.
         */
        targetList?: Array<string>;

        /**
         * Type collection this requirement applies to.
         */
        type?: string;
      }

      export namespace TaskingCollectionRequirement {
        export interface CriticalTimes {
          /**
           * Critical start time to collect an image for this requirement.
           */
          earliestImagingTime: string;

          /**
           * Critical stop time to collect an image for this requirement.
           */
          latestImagingTime: string;
        }

        export interface ExploitationRequirement {
          /**
           * Exploitation requirement id.
           */
          id?: string;

          /**
           * Amplifying data for the exploitation requirement.
           */
          amplification?: string;

          /**
           * List of e-mails to disseminate collection verification information.
           */
          dissemination?: string;

          /**
           * Essential Elements of Information.
           */
          eei?: string;

          poc?: ExploitationRequirement.Poc;

          /**
           * The reporting criteria of the collection requirement.
           */
          reportingCriteria?: string;
        }

        export namespace ExploitationRequirement {
          export interface Poc {
            /**
             * Unique identifier of the collection requirement POC.
             */
            id?: string;

            /**
             * Callsign of the POC.
             */
            callsign?: string;

            /**
             * Chat name of the POC.
             */
            chatName?: string;

            /**
             * Chat system the POC is accessing.
             */
            chatSystem?: string;

            /**
             * Email address of the POC.
             */
            email?: string;

            /**
             * Name of the POC.
             */
            name?: string;

            /**
             * Amplifying notes about the POC.
             */
            notes?: string;

            /**
             * Phone number of the POC.
             */
            phone?: string;

            /**
             * Radio Frequency the POC is on.
             */
            radioFrequency?: number;

            /**
             * Unit the POC belongs to.
             */
            unit?: string;
          }
        }
      }
    }

    export interface Transit {
      /**
       * Transit Unique Identifier.
       */
      id?: string;

      /**
       * Military Base to transmit the dissemination of this data.
       */
      base?: string;

      /**
       * Length of mission in milliseconds.
       */
      duration?: number;
    }
  }
}

IsrCollections.History = History;

export declare namespace IsrCollections {
  export {
    type IsrCollectionListResponse as IsrCollectionListResponse,
    type IsrCollectionCountResponse as IsrCollectionCountResponse,
    type IsrCollectionQueryhelpResponse as IsrCollectionQueryhelpResponse,
    type IsrCollectionTupleResponse as IsrCollectionTupleResponse,
    type IsrCollectionListResponsesOffsetPage as IsrCollectionListResponsesOffsetPage,
    type IsrCollectionListParams as IsrCollectionListParams,
    type IsrCollectionCountParams as IsrCollectionCountParams,
    type IsrCollectionCreateBulkParams as IsrCollectionCreateBulkParams,
    type IsrCollectionTupleParams as IsrCollectionTupleParams,
    type IsrCollectionUnvalidatedPublishParams as IsrCollectionUnvalidatedPublishParams,
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
