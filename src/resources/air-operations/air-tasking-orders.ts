// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AirTaskingOrders extends APIResource {
  /**
   * Service operation to take a single airtaskingorder record as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: AirTaskingOrderCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/airtaskingorder', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single airtaskingorder record by its unique ID passed
   * as a path parameter.
   */
  retrieve(
    id: string,
    query: AirTaskingOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AirTaskingOrderFull> {
    return this._client.get(path`/udl/airtaskingorder/${id}`, { query, ...options });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: AirTaskingOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AirTaskingOrderListResponsesOffsetPage, AirTaskingOrderListResponse> {
    return this._client.getAPIList('/udl/airtaskingorder', OffsetPage<AirTaskingOrderListResponse>, {
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
  count(
    query: AirTaskingOrderCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/airtaskingorder/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/airtaskingorder/queryhelp', {
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
   */
  tuple(
    query: AirTaskingOrderTupleParams,
    options?: RequestOptions,
  ): APIPromise<AirTaskingOrderTupleResponse> {
    return this._client.get('/udl/airtaskingorder/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple airtaskingorder records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: AirTaskingOrderUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-airtaskingorder', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type AirTaskingOrderListResponsesOffsetPage = OffsetPage<AirTaskingOrderListResponse>;

/**
 * Beta Version Air Tasking Order: The ATO is used to task air missions, assign
 * cross force tasking as well as intraservice tasking.
 */
export interface AirTaskingOrderFull {
  /**
   * The effective begin time for this ATO in ISO 8601 UTC format with millisecond
   * precision.
   */
  beginTs: string;

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
   * Specifies the unique operation or exercise name, nickname, or codeword assigned
   * to a joint exercise or operation plan.
   */
  opExerName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The indicator specifying an affirmative or a negatice condition for this
   * message.
   */
  ackReqInd?: string;

  /**
   * Specifies textual data amplifying the data contained in the acknowledgement
   * requirement indicator (ackRedInd) field or the unit required to acknowledge.
   */
  ackUnitInstructions?: string;

  /**
   * A collection that specifies the tasked country, tasked service, unit and mission
   * level tasking for this ATO.
   */
  acMsnTasking?: Array<AirTaskingOrderFull.AcMsnTasking>;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * The effective end time for this ATO in ISO 8601 UTC format with millisecond
   * precision.
   */
  endTs?: string;

  /**
   * A collection that details special instructions, important information, guidance,
   * and amplifying information regarding this ATO.
   */
  genText?: Array<AirTaskingOrderFull.GenText>;

  /**
   * The month in which the message originated.
   */
  msgMonth?: string;

  /**
   * The identifier of the originator of the message.
   */
  msgOriginator?: string;

  /**
   * The qualifier which caveats the message status.
   */
  msgQualifier?: string;

  /**
   * The unique message identifier sequentially assigned by the originator.
   */
  msgSN?: string;

  /**
   * A collection that specifies the naval flight operations for this ATO.
   */
  navalFltOps?: Array<AirTaskingOrderFull.NavalFltOp>;

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
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;
}

export namespace AirTaskingOrderFull {
  /**
   * Collection that specifies the tasked country, tasked service, unit and mission
   * level tasking for this ATO.
   */
  export interface AcMsnTasking {
    /**
     * The country code responsible for conducting this aircraft mission tasking for
     * the exercise or operation.
     */
    countryCode: string;

    /**
     * The service tasked with conducting this aircraft mission tasking for the
     * exercise or operation.
     */
    taskedService: string;

    /**
     * The designator of the unit that is tasked to perform this aircraft mission
     * tasking.
     */
    unitDesignator: string;

    /**
     * A collection of aircraft mission location information for this aircraft mission
     * tasking.
     */
    acMsnLocSeg?: Array<AcMsnTasking.AcMsnLocSeg>;

    /**
     * The readiness status expressed in time (minutes) for an aircraft to be airborne
     * after the launch order is received or the time required for a missile unit to
     * assume battle stations.
     */
    alertStatus?: number;

    /**
     * The AMC number assigned to identify one aircraft from another.
     */
    amcMsnNum?: string;

    /**
     * WGS-84 latitude of the departure location, in degrees. -90 to 90 degrees
     * (negative values south of equator) for this tasked air mission.
     */
    depLocLat?: number;

    /**
     * WGS-84 longitude of the departure location, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian) for this tasked air mission.
     */
    depLocLon?: number;

    /**
     * The location or name specified for the departure of the tasked air mission.
     */
    depLocName?: string;

    /**
     * The departure location specified in UTM (100 meter) coordinates for the tasked
     * air mission.
     */
    depLocUTM?: string;

    /**
     * The time of departure for the tasked air mission in ISO8601 UTC format with
     * millisecond precision.
     */
    depTime?: string;

    /**
     * A collection of the individual aircraft assigned to this aircraft mission
     * tasking.
     */
    indACTasking?: Array<AcMsnTasking.IndAcTasking>;

    /**
     * The commander responsible for the planning and execution of the forces necessary
     * to achieve desired objectives.
     */
    msnCommander?: string;

    /**
     * The mission number assigned to this mission.
     */
    msnNum?: string;

    /**
     * The identifier for the composite set of missions for this operation/exercise.
     */
    pkgId?: string;

    /**
     * The code for the preferred type or designator for a tasked air mission.
     */
    priMsnType?: string;

    /**
     * An array of WGS-84 latitude of the recovery locations, in degrees. -90 to 90
     * degrees (negative values south of equator) for this tasked air mission.
     */
    rcvyLocLat?: Array<number>;

    /**
     * An array of WGS-84 longitude of the recovery locations, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian) for this tasked air mission.
     */
    rcvyLocLon?: Array<number>;

    /**
     * An array of locations specified for the recovery of the tasked air mission
     * represented by varying formats.
     */
    rcvyLocName?: Array<string>;

    /**
     * An array of recovery locations specified in UTM (100 meter) coordinates for the
     * tasked air mission.
     */
    rcvyLocUTM?: Array<string>;

    /**
     * An array of recovery times for the tasked air mission in ISO8601 UTC format with
     * millisecond precision.
     */
    rcvyTime?: Array<string>;

    /**
     * An indicator of whether a mission is or will be a residual mission.
     */
    resMsnInd?: string;

    /**
     * The code for the alternative type of a tasked air mission.
     */
    secMsnType?: string;

    /**
     * The tasked units location expressed as an ICAO or a place name.
     */
    unitLocName?: string;
  }

  export namespace AcMsnTasking {
    /**
     * Collection of aircraft mission location information for this aircraft mission
     * tasking.
     */
    export interface AcMsnLocSeg {
      /**
       * The start time of this mission in ISO 8601 UTC format with millisecond
       * precision.
       */
      startTime: string;

      /**
       * The code for the priority assigned to this mission.
       */
      airMsnPri?: string;

      /**
       * The altitude for this mission represented as hundreds of feet above MSL.
       */
      alt?: number;

      /**
       * The radius of the circle around the location being reported in feet.
       */
      areaGeoRad?: number;

      /**
       * The end time of this mission in ISO 8601 UTC format with millisecond precision.
       */
      endTime?: string;

      /**
       * The name that identifies the location at which this mission is to be performed.
       * This can be the name of a general target area, orbit, cap point, station, etc.
       */
      msnLocName?: string;

      /**
       * The alpha-numeric specified location for this mission specified as a bearing
       * angle in degrees relative to true north and a range in nautical miles (NM).
       */
      msnLocPtBarT?: string;

      /**
       * WGS-84 latitude of the mission location, in degrees. -90 to 90 degrees (negative
       * values south of equator) for this tasked air mission.
       */
      msnLocPtLat?: number;

      /**
       * WGS-84 longitude of the mission location, in degrees. -180 to 180 degrees
       * (negative values west of Prime Meridian) for this tasked air mission.
       */
      msnLocPtLon?: number;

      /**
       * The location name for this mission.
       */
      msnLocPtName?: string;
    }

    /**
     * Collection that specifies the naval flight operations for this ATO.
     */
    export interface IndAcTasking {
      /**
       * The type and model number for the aircraft. The field may specify a value of an
       * aircraft not yet assigned an aircraft code contained in the aircraft codes list.
       */
      acftType: string;

      /**
       * The call sign assigned to this mission aircraft.
       */
      callSign?: string;

      /**
       * The mode 1 and code of the Identification Friend or FOE (IFF) or Selective
       * Identification Feature (SIF).
       */
      iffSifMode1Code?: string;

      /**
       * The mode 2 and code of the Identification Friend or FOE (IFF) or Selective
       * Identification Feature (SIF).
       */
      iffSifMode2Code?: string;

      /**
       * The mode 3 and code of the Identification Friend or FOE (IFF) or Selective
       * Identification Feature (SIF).
       */
      iffSifMode3Code?: string;

      /**
       * An optional array of link 16 octal track numbers assigned as the primary JTIDS
       * Unit (JU) address for the mission aircraft.
       */
      juAddress?: Array<number>;

      /**
       * The Link 16 abbreviated call sign assigned to the ACA. This is normally the
       * first and last letter and the last two numbers of the call sign.
       */
      link16CallSign?: string;

      /**
       * The number of aircraft participating in this mission.
       */
      numAcft?: number;

      /**
       * The code that indicates the ordinance mix carried on this mission aircraft.
       */
      priConfigCode?: string;

      /**
       * The code for the secondary ordinance mix carried on this mission aircraft.
       */
      secConfigCode?: string;

      /**
       * The TACAN channel assigned to this mission aircraft.
       */
      tacanChan?: number;
    }
  }

  /**
   * Collection that details special instructions, important information, guidance,
   * and amplifying information regarding this ATO.
   */
  export interface GenText {
    /**
     * The free text that describes the information specific to the text indicator.
     */
    text?: string;

    /**
     * The indicator for the general text block. Examples include "OPENING REMARKS" and
     * "GENERAL SPINS INFORMATION".
     */
    textInd?: string;
  }

  /**
   * Collection that specifies the naval flight operations for this ATO.
   */
  export interface NavalFltOp {
    /**
     * The name of a ship or maritime vessel. Specify UNKNOWN if name is not known.
     */
    shipName: string;

    /**
     * The time when flight operations begin in ISO8601 UTC format with millisecond
     * precision.
     */
    fltOpStart?: string;

    /**
     * The time when flight operations end in ISO8601 UTC format with millisecond
     * precision.
     */
    fltOpStop?: string;

    /**
     * An array of times at which an aircraft will be launched and/or recovered in
     * ISO8601 UTC format with millisecond precision.
     */
    schdLaunchRcvyTime?: Array<string>;
  }
}

/**
 * Beta Version Air Tasking Order: The ATO is used to task air missions, assign
 * cross force tasking as well as intraservice tasking.
 */
export interface AirTaskingOrderListResponse {
  /**
   * The effective begin time for this ATO in ISO 8601 UTC format with millisecond
   * precision.
   */
  beginTs: string;

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
   * Specifies the unique operation or exercise name, nickname, or codeword assigned
   * to a joint exercise or operation plan.
   */
  opExerName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The indicator specifying an affirmative or a negatice condition for this
   * message.
   */
  ackReqInd?: string;

  /**
   * Specifies textual data amplifying the data contained in the acknowledgement
   * requirement indicator (ackRedInd) field or the unit required to acknowledge.
   */
  ackUnitInstructions?: string;

  /**
   * A collection that specifies the tasked country, tasked service, unit and mission
   * level tasking for this ATO.
   */
  acMsnTasking?: Array<AirTaskingOrderListResponse.AcMsnTasking>;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * The effective end time for this ATO in ISO 8601 UTC format with millisecond
   * precision.
   */
  endTs?: string;

  /**
   * A collection that details special instructions, important information, guidance,
   * and amplifying information regarding this ATO.
   */
  genText?: Array<AirTaskingOrderListResponse.GenText>;

  /**
   * The month in which the message originated.
   */
  msgMonth?: string;

  /**
   * The identifier of the originator of the message.
   */
  msgOriginator?: string;

  /**
   * The qualifier which caveats the message status.
   */
  msgQualifier?: string;

  /**
   * The unique message identifier sequentially assigned by the originator.
   */
  msgSN?: string;

  /**
   * A collection that specifies the naval flight operations for this ATO.
   */
  navalFltOps?: Array<AirTaskingOrderListResponse.NavalFltOp>;

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
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;
}

export namespace AirTaskingOrderListResponse {
  /**
   * Collection that specifies the tasked country, tasked service, unit and mission
   * level tasking for this ATO.
   */
  export interface AcMsnTasking {
    /**
     * The country code responsible for conducting this aircraft mission tasking for
     * the exercise or operation.
     */
    countryCode: string;

    /**
     * The service tasked with conducting this aircraft mission tasking for the
     * exercise or operation.
     */
    taskedService: string;

    /**
     * The designator of the unit that is tasked to perform this aircraft mission
     * tasking.
     */
    unitDesignator: string;

    /**
     * A collection of aircraft mission location information for this aircraft mission
     * tasking.
     */
    acMsnLocSeg?: Array<AcMsnTasking.AcMsnLocSeg>;

    /**
     * The readiness status expressed in time (minutes) for an aircraft to be airborne
     * after the launch order is received or the time required for a missile unit to
     * assume battle stations.
     */
    alertStatus?: number;

    /**
     * The AMC number assigned to identify one aircraft from another.
     */
    amcMsnNum?: string;

    /**
     * WGS-84 latitude of the departure location, in degrees. -90 to 90 degrees
     * (negative values south of equator) for this tasked air mission.
     */
    depLocLat?: number;

    /**
     * WGS-84 longitude of the departure location, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian) for this tasked air mission.
     */
    depLocLon?: number;

    /**
     * The location or name specified for the departure of the tasked air mission.
     */
    depLocName?: string;

    /**
     * The departure location specified in UTM (100 meter) coordinates for the tasked
     * air mission.
     */
    depLocUTM?: string;

    /**
     * The time of departure for the tasked air mission in ISO8601 UTC format with
     * millisecond precision.
     */
    depTime?: string;

    /**
     * A collection of the individual aircraft assigned to this aircraft mission
     * tasking.
     */
    indACTasking?: Array<AcMsnTasking.IndAcTasking>;

    /**
     * The commander responsible for the planning and execution of the forces necessary
     * to achieve desired objectives.
     */
    msnCommander?: string;

    /**
     * The mission number assigned to this mission.
     */
    msnNum?: string;

    /**
     * The identifier for the composite set of missions for this operation/exercise.
     */
    pkgId?: string;

    /**
     * The code for the preferred type or designator for a tasked air mission.
     */
    priMsnType?: string;

    /**
     * An array of WGS-84 latitude of the recovery locations, in degrees. -90 to 90
     * degrees (negative values south of equator) for this tasked air mission.
     */
    rcvyLocLat?: Array<number>;

    /**
     * An array of WGS-84 longitude of the recovery locations, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian) for this tasked air mission.
     */
    rcvyLocLon?: Array<number>;

    /**
     * An array of locations specified for the recovery of the tasked air mission
     * represented by varying formats.
     */
    rcvyLocName?: Array<string>;

    /**
     * An array of recovery locations specified in UTM (100 meter) coordinates for the
     * tasked air mission.
     */
    rcvyLocUTM?: Array<string>;

    /**
     * An array of recovery times for the tasked air mission in ISO8601 UTC format with
     * millisecond precision.
     */
    rcvyTime?: Array<string>;

    /**
     * An indicator of whether a mission is or will be a residual mission.
     */
    resMsnInd?: string;

    /**
     * The code for the alternative type of a tasked air mission.
     */
    secMsnType?: string;

    /**
     * The tasked units location expressed as an ICAO or a place name.
     */
    unitLocName?: string;
  }

  export namespace AcMsnTasking {
    /**
     * Collection of aircraft mission location information for this aircraft mission
     * tasking.
     */
    export interface AcMsnLocSeg {
      /**
       * The start time of this mission in ISO 8601 UTC format with millisecond
       * precision.
       */
      startTime: string;

      /**
       * The code for the priority assigned to this mission.
       */
      airMsnPri?: string;

      /**
       * The altitude for this mission represented as hundreds of feet above MSL.
       */
      alt?: number;

      /**
       * The radius of the circle around the location being reported in feet.
       */
      areaGeoRad?: number;

      /**
       * The end time of this mission in ISO 8601 UTC format with millisecond precision.
       */
      endTime?: string;

      /**
       * The name that identifies the location at which this mission is to be performed.
       * This can be the name of a general target area, orbit, cap point, station, etc.
       */
      msnLocName?: string;

      /**
       * The alpha-numeric specified location for this mission specified as a bearing
       * angle in degrees relative to true north and a range in nautical miles (NM).
       */
      msnLocPtBarT?: string;

      /**
       * WGS-84 latitude of the mission location, in degrees. -90 to 90 degrees (negative
       * values south of equator) for this tasked air mission.
       */
      msnLocPtLat?: number;

      /**
       * WGS-84 longitude of the mission location, in degrees. -180 to 180 degrees
       * (negative values west of Prime Meridian) for this tasked air mission.
       */
      msnLocPtLon?: number;

      /**
       * The location name for this mission.
       */
      msnLocPtName?: string;
    }

    /**
     * Collection that specifies the naval flight operations for this ATO.
     */
    export interface IndAcTasking {
      /**
       * The type and model number for the aircraft. The field may specify a value of an
       * aircraft not yet assigned an aircraft code contained in the aircraft codes list.
       */
      acftType: string;

      /**
       * The call sign assigned to this mission aircraft.
       */
      callSign?: string;

      /**
       * The mode 1 and code of the Identification Friend or FOE (IFF) or Selective
       * Identification Feature (SIF).
       */
      iffSifMode1Code?: string;

      /**
       * The mode 2 and code of the Identification Friend or FOE (IFF) or Selective
       * Identification Feature (SIF).
       */
      iffSifMode2Code?: string;

      /**
       * The mode 3 and code of the Identification Friend or FOE (IFF) or Selective
       * Identification Feature (SIF).
       */
      iffSifMode3Code?: string;

      /**
       * An optional array of link 16 octal track numbers assigned as the primary JTIDS
       * Unit (JU) address for the mission aircraft.
       */
      juAddress?: Array<number>;

      /**
       * The Link 16 abbreviated call sign assigned to the ACA. This is normally the
       * first and last letter and the last two numbers of the call sign.
       */
      link16CallSign?: string;

      /**
       * The number of aircraft participating in this mission.
       */
      numAcft?: number;

      /**
       * The code that indicates the ordinance mix carried on this mission aircraft.
       */
      priConfigCode?: string;

      /**
       * The code for the secondary ordinance mix carried on this mission aircraft.
       */
      secConfigCode?: string;

      /**
       * The TACAN channel assigned to this mission aircraft.
       */
      tacanChan?: number;
    }
  }

  /**
   * Collection that details special instructions, important information, guidance,
   * and amplifying information regarding this ATO.
   */
  export interface GenText {
    /**
     * The free text that describes the information specific to the text indicator.
     */
    text?: string;

    /**
     * The indicator for the general text block. Examples include "OPENING REMARKS" and
     * "GENERAL SPINS INFORMATION".
     */
    textInd?: string;
  }

  /**
   * Collection that specifies the naval flight operations for this ATO.
   */
  export interface NavalFltOp {
    /**
     * The name of a ship or maritime vessel. Specify UNKNOWN if name is not known.
     */
    shipName: string;

    /**
     * The time when flight operations begin in ISO8601 UTC format with millisecond
     * precision.
     */
    fltOpStart?: string;

    /**
     * The time when flight operations end in ISO8601 UTC format with millisecond
     * precision.
     */
    fltOpStop?: string;

    /**
     * An array of times at which an aircraft will be launched and/or recovered in
     * ISO8601 UTC format with millisecond precision.
     */
    schdLaunchRcvyTime?: Array<string>;
  }
}

export type AirTaskingOrderCountResponse = string;

export type AirTaskingOrderTupleResponse = Array<AirTaskingOrderFull>;

export interface AirTaskingOrderCreateParams {
  /**
   * The effective begin time for this ATO in ISO 8601 UTC format with millisecond
   * precision.
   */
  beginTs: string;

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
   * Specifies the unique operation or exercise name, nickname, or codeword assigned
   * to a joint exercise or operation plan.
   */
  opExerName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The indicator specifying an affirmative or a negatice condition for this
   * message.
   */
  ackReqInd?: string;

  /**
   * Specifies textual data amplifying the data contained in the acknowledgement
   * requirement indicator (ackRedInd) field or the unit required to acknowledge.
   */
  ackUnitInstructions?: string;

  /**
   * A collection that specifies the tasked country, tasked service, unit and mission
   * level tasking for this ATO.
   */
  acMsnTasking?: Array<AirTaskingOrderCreateParams.AcMsnTasking>;

  /**
   * The effective end time for this ATO in ISO 8601 UTC format with millisecond
   * precision.
   */
  endTs?: string;

  /**
   * A collection that details special instructions, important information, guidance,
   * and amplifying information regarding this ATO.
   */
  genText?: Array<AirTaskingOrderCreateParams.GenText>;

  /**
   * The month in which the message originated.
   */
  msgMonth?: string;

  /**
   * The identifier of the originator of the message.
   */
  msgOriginator?: string;

  /**
   * The qualifier which caveats the message status.
   */
  msgQualifier?: string;

  /**
   * The unique message identifier sequentially assigned by the originator.
   */
  msgSN?: string;

  /**
   * A collection that specifies the naval flight operations for this ATO.
   */
  navalFltOps?: Array<AirTaskingOrderCreateParams.NavalFltOp>;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export namespace AirTaskingOrderCreateParams {
  /**
   * Collection that specifies the tasked country, tasked service, unit and mission
   * level tasking for this ATO.
   */
  export interface AcMsnTasking {
    /**
     * The country code responsible for conducting this aircraft mission tasking for
     * the exercise or operation.
     */
    countryCode: string;

    /**
     * The service tasked with conducting this aircraft mission tasking for the
     * exercise or operation.
     */
    taskedService: string;

    /**
     * The designator of the unit that is tasked to perform this aircraft mission
     * tasking.
     */
    unitDesignator: string;

    /**
     * A collection of aircraft mission location information for this aircraft mission
     * tasking.
     */
    acMsnLocSeg?: Array<AcMsnTasking.AcMsnLocSeg>;

    /**
     * The readiness status expressed in time (minutes) for an aircraft to be airborne
     * after the launch order is received or the time required for a missile unit to
     * assume battle stations.
     */
    alertStatus?: number;

    /**
     * The AMC number assigned to identify one aircraft from another.
     */
    amcMsnNum?: string;

    /**
     * WGS-84 latitude of the departure location, in degrees. -90 to 90 degrees
     * (negative values south of equator) for this tasked air mission.
     */
    depLocLat?: number;

    /**
     * WGS-84 longitude of the departure location, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian) for this tasked air mission.
     */
    depLocLon?: number;

    /**
     * The location or name specified for the departure of the tasked air mission.
     */
    depLocName?: string;

    /**
     * The departure location specified in UTM (100 meter) coordinates for the tasked
     * air mission.
     */
    depLocUTM?: string;

    /**
     * The time of departure for the tasked air mission in ISO8601 UTC format with
     * millisecond precision.
     */
    depTime?: string;

    /**
     * A collection of the individual aircraft assigned to this aircraft mission
     * tasking.
     */
    indACTasking?: Array<AcMsnTasking.IndAcTasking>;

    /**
     * The commander responsible for the planning and execution of the forces necessary
     * to achieve desired objectives.
     */
    msnCommander?: string;

    /**
     * The mission number assigned to this mission.
     */
    msnNum?: string;

    /**
     * The identifier for the composite set of missions for this operation/exercise.
     */
    pkgId?: string;

    /**
     * The code for the preferred type or designator for a tasked air mission.
     */
    priMsnType?: string;

    /**
     * An array of WGS-84 latitude of the recovery locations, in degrees. -90 to 90
     * degrees (negative values south of equator) for this tasked air mission.
     */
    rcvyLocLat?: Array<number>;

    /**
     * An array of WGS-84 longitude of the recovery locations, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian) for this tasked air mission.
     */
    rcvyLocLon?: Array<number>;

    /**
     * An array of locations specified for the recovery of the tasked air mission
     * represented by varying formats.
     */
    rcvyLocName?: Array<string>;

    /**
     * An array of recovery locations specified in UTM (100 meter) coordinates for the
     * tasked air mission.
     */
    rcvyLocUTM?: Array<string>;

    /**
     * An array of recovery times for the tasked air mission in ISO8601 UTC format with
     * millisecond precision.
     */
    rcvyTime?: Array<string>;

    /**
     * An indicator of whether a mission is or will be a residual mission.
     */
    resMsnInd?: string;

    /**
     * The code for the alternative type of a tasked air mission.
     */
    secMsnType?: string;

    /**
     * The tasked units location expressed as an ICAO or a place name.
     */
    unitLocName?: string;
  }

  export namespace AcMsnTasking {
    /**
     * Collection of aircraft mission location information for this aircraft mission
     * tasking.
     */
    export interface AcMsnLocSeg {
      /**
       * The start time of this mission in ISO 8601 UTC format with millisecond
       * precision.
       */
      startTime: string;

      /**
       * The code for the priority assigned to this mission.
       */
      airMsnPri?: string;

      /**
       * The altitude for this mission represented as hundreds of feet above MSL.
       */
      alt?: number;

      /**
       * The radius of the circle around the location being reported in feet.
       */
      areaGeoRad?: number;

      /**
       * The end time of this mission in ISO 8601 UTC format with millisecond precision.
       */
      endTime?: string;

      /**
       * The name that identifies the location at which this mission is to be performed.
       * This can be the name of a general target area, orbit, cap point, station, etc.
       */
      msnLocName?: string;

      /**
       * The alpha-numeric specified location for this mission specified as a bearing
       * angle in degrees relative to true north and a range in nautical miles (NM).
       */
      msnLocPtBarT?: string;

      /**
       * WGS-84 latitude of the mission location, in degrees. -90 to 90 degrees (negative
       * values south of equator) for this tasked air mission.
       */
      msnLocPtLat?: number;

      /**
       * WGS-84 longitude of the mission location, in degrees. -180 to 180 degrees
       * (negative values west of Prime Meridian) for this tasked air mission.
       */
      msnLocPtLon?: number;

      /**
       * The location name for this mission.
       */
      msnLocPtName?: string;
    }

    /**
     * Collection that specifies the naval flight operations for this ATO.
     */
    export interface IndAcTasking {
      /**
       * The type and model number for the aircraft. The field may specify a value of an
       * aircraft not yet assigned an aircraft code contained in the aircraft codes list.
       */
      acftType: string;

      /**
       * The call sign assigned to this mission aircraft.
       */
      callSign?: string;

      /**
       * The mode 1 and code of the Identification Friend or FOE (IFF) or Selective
       * Identification Feature (SIF).
       */
      iffSifMode1Code?: string;

      /**
       * The mode 2 and code of the Identification Friend or FOE (IFF) or Selective
       * Identification Feature (SIF).
       */
      iffSifMode2Code?: string;

      /**
       * The mode 3 and code of the Identification Friend or FOE (IFF) or Selective
       * Identification Feature (SIF).
       */
      iffSifMode3Code?: string;

      /**
       * An optional array of link 16 octal track numbers assigned as the primary JTIDS
       * Unit (JU) address for the mission aircraft.
       */
      juAddress?: Array<number>;

      /**
       * The Link 16 abbreviated call sign assigned to the ACA. This is normally the
       * first and last letter and the last two numbers of the call sign.
       */
      link16CallSign?: string;

      /**
       * The number of aircraft participating in this mission.
       */
      numAcft?: number;

      /**
       * The code that indicates the ordinance mix carried on this mission aircraft.
       */
      priConfigCode?: string;

      /**
       * The code for the secondary ordinance mix carried on this mission aircraft.
       */
      secConfigCode?: string;

      /**
       * The TACAN channel assigned to this mission aircraft.
       */
      tacanChan?: number;
    }
  }

  /**
   * Collection that details special instructions, important information, guidance,
   * and amplifying information regarding this ATO.
   */
  export interface GenText {
    /**
     * The free text that describes the information specific to the text indicator.
     */
    text?: string;

    /**
     * The indicator for the general text block. Examples include "OPENING REMARKS" and
     * "GENERAL SPINS INFORMATION".
     */
    textInd?: string;
  }

  /**
   * Collection that specifies the naval flight operations for this ATO.
   */
  export interface NavalFltOp {
    /**
     * The name of a ship or maritime vessel. Specify UNKNOWN if name is not known.
     */
    shipName: string;

    /**
     * The time when flight operations begin in ISO8601 UTC format with millisecond
     * precision.
     */
    fltOpStart?: string;

    /**
     * The time when flight operations end in ISO8601 UTC format with millisecond
     * precision.
     */
    fltOpStop?: string;

    /**
     * An array of times at which an aircraft will be launched and/or recovered in
     * ISO8601 UTC format with millisecond precision.
     */
    schdLaunchRcvyTime?: Array<string>;
  }
}

export interface AirTaskingOrderRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirTaskingOrderListParams extends OffsetPageParams {}

export interface AirTaskingOrderCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirTaskingOrderTupleParams {
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

export interface AirTaskingOrderUnvalidatedPublishParams {
  body: Array<AirTaskingOrderUnvalidatedPublishParams.Body>;
}

export namespace AirTaskingOrderUnvalidatedPublishParams {
  /**
   * Beta Version Air Tasking Order: The ATO is used to task air missions, assign
   * cross force tasking as well as intraservice tasking.
   */
  export interface Body {
    /**
     * The effective begin time for this ATO in ISO 8601 UTC format with millisecond
     * precision.
     */
    beginTs: string;

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
     * Specifies the unique operation or exercise name, nickname, or codeword assigned
     * to a joint exercise or operation plan.
     */
    opExerName: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The indicator specifying an affirmative or a negatice condition for this
     * message.
     */
    ackReqInd?: string;

    /**
     * Specifies textual data amplifying the data contained in the acknowledgement
     * requirement indicator (ackRedInd) field or the unit required to acknowledge.
     */
    ackUnitInstructions?: string;

    /**
     * A collection that specifies the tasked country, tasked service, unit and mission
     * level tasking for this ATO.
     */
    acMsnTasking?: Array<Body.AcMsnTasking>;

    /**
     * The effective end time for this ATO in ISO 8601 UTC format with millisecond
     * precision.
     */
    endTs?: string;

    /**
     * A collection that details special instructions, important information, guidance,
     * and amplifying information regarding this ATO.
     */
    genText?: Array<Body.GenText>;

    /**
     * The month in which the message originated.
     */
    msgMonth?: string;

    /**
     * The identifier of the originator of the message.
     */
    msgOriginator?: string;

    /**
     * The qualifier which caveats the message status.
     */
    msgQualifier?: string;

    /**
     * The unique message identifier sequentially assigned by the originator.
     */
    msgSN?: string;

    /**
     * A collection that specifies the naval flight operations for this ATO.
     */
    navalFltOps?: Array<Body.NavalFltOp>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;
  }

  export namespace Body {
    /**
     * Collection that specifies the tasked country, tasked service, unit and mission
     * level tasking for this ATO.
     */
    export interface AcMsnTasking {
      /**
       * The country code responsible for conducting this aircraft mission tasking for
       * the exercise or operation.
       */
      countryCode: string;

      /**
       * The service tasked with conducting this aircraft mission tasking for the
       * exercise or operation.
       */
      taskedService: string;

      /**
       * The designator of the unit that is tasked to perform this aircraft mission
       * tasking.
       */
      unitDesignator: string;

      /**
       * A collection of aircraft mission location information for this aircraft mission
       * tasking.
       */
      acMsnLocSeg?: Array<AcMsnTasking.AcMsnLocSeg>;

      /**
       * The readiness status expressed in time (minutes) for an aircraft to be airborne
       * after the launch order is received or the time required for a missile unit to
       * assume battle stations.
       */
      alertStatus?: number;

      /**
       * The AMC number assigned to identify one aircraft from another.
       */
      amcMsnNum?: string;

      /**
       * WGS-84 latitude of the departure location, in degrees. -90 to 90 degrees
       * (negative values south of equator) for this tasked air mission.
       */
      depLocLat?: number;

      /**
       * WGS-84 longitude of the departure location, in degrees. -180 to 180 degrees
       * (negative values west of Prime Meridian) for this tasked air mission.
       */
      depLocLon?: number;

      /**
       * The location or name specified for the departure of the tasked air mission.
       */
      depLocName?: string;

      /**
       * The departure location specified in UTM (100 meter) coordinates for the tasked
       * air mission.
       */
      depLocUTM?: string;

      /**
       * The time of departure for the tasked air mission in ISO8601 UTC format with
       * millisecond precision.
       */
      depTime?: string;

      /**
       * A collection of the individual aircraft assigned to this aircraft mission
       * tasking.
       */
      indACTasking?: Array<AcMsnTasking.IndAcTasking>;

      /**
       * The commander responsible for the planning and execution of the forces necessary
       * to achieve desired objectives.
       */
      msnCommander?: string;

      /**
       * The mission number assigned to this mission.
       */
      msnNum?: string;

      /**
       * The identifier for the composite set of missions for this operation/exercise.
       */
      pkgId?: string;

      /**
       * The code for the preferred type or designator for a tasked air mission.
       */
      priMsnType?: string;

      /**
       * An array of WGS-84 latitude of the recovery locations, in degrees. -90 to 90
       * degrees (negative values south of equator) for this tasked air mission.
       */
      rcvyLocLat?: Array<number>;

      /**
       * An array of WGS-84 longitude of the recovery locations, in degrees. -180 to 180
       * degrees (negative values west of Prime Meridian) for this tasked air mission.
       */
      rcvyLocLon?: Array<number>;

      /**
       * An array of locations specified for the recovery of the tasked air mission
       * represented by varying formats.
       */
      rcvyLocName?: Array<string>;

      /**
       * An array of recovery locations specified in UTM (100 meter) coordinates for the
       * tasked air mission.
       */
      rcvyLocUTM?: Array<string>;

      /**
       * An array of recovery times for the tasked air mission in ISO8601 UTC format with
       * millisecond precision.
       */
      rcvyTime?: Array<string>;

      /**
       * An indicator of whether a mission is or will be a residual mission.
       */
      resMsnInd?: string;

      /**
       * The code for the alternative type of a tasked air mission.
       */
      secMsnType?: string;

      /**
       * The tasked units location expressed as an ICAO or a place name.
       */
      unitLocName?: string;
    }

    export namespace AcMsnTasking {
      /**
       * Collection of aircraft mission location information for this aircraft mission
       * tasking.
       */
      export interface AcMsnLocSeg {
        /**
         * The start time of this mission in ISO 8601 UTC format with millisecond
         * precision.
         */
        startTime: string;

        /**
         * The code for the priority assigned to this mission.
         */
        airMsnPri?: string;

        /**
         * The altitude for this mission represented as hundreds of feet above MSL.
         */
        alt?: number;

        /**
         * The radius of the circle around the location being reported in feet.
         */
        areaGeoRad?: number;

        /**
         * The end time of this mission in ISO 8601 UTC format with millisecond precision.
         */
        endTime?: string;

        /**
         * The name that identifies the location at which this mission is to be performed.
         * This can be the name of a general target area, orbit, cap point, station, etc.
         */
        msnLocName?: string;

        /**
         * The alpha-numeric specified location for this mission specified as a bearing
         * angle in degrees relative to true north and a range in nautical miles (NM).
         */
        msnLocPtBarT?: string;

        /**
         * WGS-84 latitude of the mission location, in degrees. -90 to 90 degrees (negative
         * values south of equator) for this tasked air mission.
         */
        msnLocPtLat?: number;

        /**
         * WGS-84 longitude of the mission location, in degrees. -180 to 180 degrees
         * (negative values west of Prime Meridian) for this tasked air mission.
         */
        msnLocPtLon?: number;

        /**
         * The location name for this mission.
         */
        msnLocPtName?: string;
      }

      /**
       * Collection that specifies the naval flight operations for this ATO.
       */
      export interface IndAcTasking {
        /**
         * The type and model number for the aircraft. The field may specify a value of an
         * aircraft not yet assigned an aircraft code contained in the aircraft codes list.
         */
        acftType: string;

        /**
         * The call sign assigned to this mission aircraft.
         */
        callSign?: string;

        /**
         * The mode 1 and code of the Identification Friend or FOE (IFF) or Selective
         * Identification Feature (SIF).
         */
        iffSifMode1Code?: string;

        /**
         * The mode 2 and code of the Identification Friend or FOE (IFF) or Selective
         * Identification Feature (SIF).
         */
        iffSifMode2Code?: string;

        /**
         * The mode 3 and code of the Identification Friend or FOE (IFF) or Selective
         * Identification Feature (SIF).
         */
        iffSifMode3Code?: string;

        /**
         * An optional array of link 16 octal track numbers assigned as the primary JTIDS
         * Unit (JU) address for the mission aircraft.
         */
        juAddress?: Array<number>;

        /**
         * The Link 16 abbreviated call sign assigned to the ACA. This is normally the
         * first and last letter and the last two numbers of the call sign.
         */
        link16CallSign?: string;

        /**
         * The number of aircraft participating in this mission.
         */
        numAcft?: number;

        /**
         * The code that indicates the ordinance mix carried on this mission aircraft.
         */
        priConfigCode?: string;

        /**
         * The code for the secondary ordinance mix carried on this mission aircraft.
         */
        secConfigCode?: string;

        /**
         * The TACAN channel assigned to this mission aircraft.
         */
        tacanChan?: number;
      }
    }

    /**
     * Collection that details special instructions, important information, guidance,
     * and amplifying information regarding this ATO.
     */
    export interface GenText {
      /**
       * The free text that describes the information specific to the text indicator.
       */
      text?: string;

      /**
       * The indicator for the general text block. Examples include "OPENING REMARKS" and
       * "GENERAL SPINS INFORMATION".
       */
      textInd?: string;
    }

    /**
     * Collection that specifies the naval flight operations for this ATO.
     */
    export interface NavalFltOp {
      /**
       * The name of a ship or maritime vessel. Specify UNKNOWN if name is not known.
       */
      shipName: string;

      /**
       * The time when flight operations begin in ISO8601 UTC format with millisecond
       * precision.
       */
      fltOpStart?: string;

      /**
       * The time when flight operations end in ISO8601 UTC format with millisecond
       * precision.
       */
      fltOpStop?: string;

      /**
       * An array of times at which an aircraft will be launched and/or recovered in
       * ISO8601 UTC format with millisecond precision.
       */
      schdLaunchRcvyTime?: Array<string>;
    }
  }
}

export declare namespace AirTaskingOrders {
  export {
    type AirTaskingOrderFull as AirTaskingOrderFull,
    type AirTaskingOrderListResponse as AirTaskingOrderListResponse,
    type AirTaskingOrderCountResponse as AirTaskingOrderCountResponse,
    type AirTaskingOrderTupleResponse as AirTaskingOrderTupleResponse,
    type AirTaskingOrderListResponsesOffsetPage as AirTaskingOrderListResponsesOffsetPage,
    type AirTaskingOrderCreateParams as AirTaskingOrderCreateParams,
    type AirTaskingOrderRetrieveParams as AirTaskingOrderRetrieveParams,
    type AirTaskingOrderListParams as AirTaskingOrderListParams,
    type AirTaskingOrderCountParams as AirTaskingOrderCountParams,
    type AirTaskingOrderTupleParams as AirTaskingOrderTupleParams,
    type AirTaskingOrderUnvalidatedPublishParams as AirTaskingOrderUnvalidatedPublishParams,
  };
}
