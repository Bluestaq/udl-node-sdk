// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class AirspaceControlOrders extends APIResource {
  /**
   * Service operation to take a single AirspaceControlOrder record as a POST body
   * and ingest into the database. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airspaceControlOrders.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   opExName: 'DESERT WIND',
   *   originator: 'USCENTCOM',
   *   source: 'Bluestaq',
   *   startTime: '2024-01-07T13:55:43.123Z',
   * });
   * ```
   */
  create(body: AirspaceControlOrderCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/airspacecontrolorder', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single AirspaceControlOrder record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const airspacecontrolorderFull =
   *   await client.airspaceControlOrders.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AirspaceControlOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AirspacecontrolorderFull> {
    return this._client.get(path`/udl/airspacecontrolorder/${id}`, { query, ...options });
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
   * for await (const airspacecontrolorderAbridged of client.airspaceControlOrders.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AirspaceControlOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AirspacecontrolorderAbridgedsOffsetPage, AirspacecontrolorderAbridged> {
    return this._client.getAPIList('/udl/airspacecontrolorder', OffsetPage<AirspacecontrolorderAbridged>, {
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
   *
   * @example
   * ```ts
   * const response = await client.airspaceControlOrders.count();
   * ```
   */
  count(
    query: AirspaceControlOrderCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/airspacecontrolorder/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * AirspaceControlOrder records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.airspaceControlOrders.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       opExName: 'DESERT WIND',
   *       originator: 'USCENTCOM',
   *       source: 'Bluestaq',
   *       startTime: '2024-01-07T13:55:43.123Z',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: AirspaceControlOrderCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/airspacecontrolorder/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.airspaceControlOrders.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<AirspaceControlOrderQueryHelpResponse> {
    return this._client.get('/udl/airspacecontrolorder/queryhelp', options);
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
   * const airspacecontrolorderFulls =
   *   await client.airspaceControlOrders.tuple({
   *     columns: 'columns',
   *   });
   * ```
   */
  tuple(
    query: AirspaceControlOrderTupleParams,
    options?: RequestOptions,
  ): APIPromise<AirspaceControlOrderTupleResponse> {
    return this._client.get('/udl/airspacecontrolorder/tuple', { query, ...options });
  }
}

export type AirspacecontrolorderAbridgedsOffsetPage = OffsetPage<AirspacecontrolorderAbridged>;

/**
 * Beta Version Airspace Control Order: Contains airspace coordination information
 * and instructions that have been issued by an airspace control authority.
 */
export interface AirspacecontrolorderAbridged {
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
  opExName: string;

  /**
   * The identifier of the originator of this message.
   */
  originator: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start of the effective time period of this airspace control order, in ISO
   * 8601 UTC format with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Free text information expressed in natural language.
   */
  acoComments?: string;

  /**
   * The serial number of this airspace control order.
   */
  acoSerialNum?: string;

  /**
   * Mandatory nested segment to report multiple airspace control means statuses
   * within an ACOID.
   */
  airspaceControlMeansStatus?: Array<AirspacecontrolorderAbridged.AirspaceControlMeansStatus>;

  /**
   * The airspaceControlReferences set provides both USMTF and non-USMTF references
   * for this airspace control order.
   */
  airspaceControlOrderReferences?: Array<AirspacecontrolorderAbridged.AirspaceControlOrderReference>;

  /**
   * Name of the area of the command for which the ACO is valid.
   */
  areaOfValidity?: string;

  /**
   * Mandatory if classSource uses the "IORIG" designator. Must be a REASON FOR
   * CLASSIFICATION code.
   */
  classReasons?: Array<string>;

  /**
   * Markings defining the source material or the original classification authority
   * for the ACO message.
   */
  classSource?: string;

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
   * Coded entries that provide justification for exemption from automatic
   * downgrading or declassification of the airspace control order.
   */
  declassExemptionCodes?: Array<string>;

  /**
   * Markings providing the literal guidance or date for downgrading or declassifying
   * the airspace control order.
   */
  downgradeInsDates?: Array<string>;

  /**
   * Specifies the geodetic datum by which the spatial coordinates of the controlled
   * airspace are calculated.
   */
  geoDatum?: string;

  /**
   * The month in which the message originated.
   */
  month?: string;

  /**
   * Supplementary name that can be used to further identify exercise nicknames, or
   * to provide the primary nickname of the option or the alternative of an
   * operational plan.
   */
  opExInfo?: string;

  /**
   * The secondary supplementary nickname of the option or the alternative of the
   * operational plan or order.
   */
  opExInfoAlt?: string;

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
   * The official identifier of the military establishment responsible for the
   * operation plan and the identification number assigned to this plan.
   */
  planOrigNum?: string;

  /**
   * The qualifier which caveats the message status.
   */
  qualifier?: string;

  /**
   * The serial number associated with the message qualifier.
   */
  qualSN?: number;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The unique message identifier sequentially assigned by the originator.
   */
  serialNum?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * A qualifier for the end of the effective time period of this airspace control
   * order, such as AFTER, ASOF, NLT, etc. Used with field stopTime to indicate a
   * relative time.
   */
  stopQualifier?: string;

  /**
   * The end of the effective time period of this airspace control order, in ISO 8601
   * UTC format with millisecond precision.
   */
  stopTime?: string;

  /**
   * Array of unique link 16 identifiers that will be assigned to a future airspace
   * control means.
   */
  undLnkTrks?: Array<string>;
}

export namespace AirspacecontrolorderAbridged {
  /**
   * Mandatory nested segment to report multiple airspace control means statuses
   * within an ACOID.
   */
  export interface AirspaceControlMeansStatus {
    /**
     * A conditional nested segment to report multiple airspace control means within a
     * particular airspace control means status.
     */
    airspaceControlMeans?: Array<AirspaceControlMeansStatus.AirspaceControlMean>;

    /**
     * Status of Airspace Control Means. Must be ADD, CHANGE, or DELETE.
     */
    cmStat?: string;

    /**
     * Airspace control means name or designator. Mandatory if acmStat equals "DELETE,"
     * otherwise this field is prohibited.
     */
    cmStatId?: Array<string>;
  }

  export namespace AirspaceControlMeansStatus {
    /**
     * A conditional nested segment to report multiple airspace control means within a
     * particular airspace control means status.
     */
    export interface AirspaceControlMean {
      /**
       * The controlPoint set describes any reference/controlling/rendezvous point for a
       * given airspace control means.
       */
      airspaceControlPoint?: Array<AirspaceControlMean.AirspaceControlPoint>;

      /**
       * The timePeriods set describes the effective datetime for a given airspace
       * control means.
       */
      airspaceTimePeriod?: Array<AirspaceControlMean.AirspaceTimePeriod>;

      /**
       * A bearing measured from true North, in angular degrees. If cmShape is set to
       * "POLYARC" or "RADARC", this field is required and is mapped to the "beginning"
       * radial bearing parameter.
       */
      bearing0?: number;

      /**
       * A bearing measured from true North, in angular degrees. If cmShape is set to
       * "POLYARC" or "RADARC", this field is required and is mapped to the "ending"
       * radial bearing parameter.
       */
      bearing1?: number;

      /**
       * Airspace control means name or designator.
       */
      cmId?: string;

      /**
       * Designates the geometric type that defines the airspace shape. One of CIRCLE,
       * CORRIDOR, LINE, ORBIT, etc.
       */
      cmShape?: 'POLYARC' | '1TRACK' | 'POLYGON' | 'CIRCLE' | 'CORRIDOR' | 'APOINT' | 'AORBIT' | 'GEOLINE';

      /**
       * The code for the type of airspace control means.
       */
      cmType?: string;

      /**
       * The commander responsible within a specified geographical area for the airspace
       * control operation assigned to him.
       */
      cntrlAuth?: string;

      /**
       * The frequency for the airspace control authority. Can specify HZ, KHZ, MHZ, GHZ
       * or a DESIG frequency designator code.
       */
      cntrlAuthFreqs?: Array<string>;

      /**
       * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
       * format. The fields coord0 and coord1 should be used in the specification of any
       * airspace control shape that requires exactly one (1) or two (2) reference points
       * for construction. For shapes requiring one reference point, for instance, when
       * cmShape is set to "APOINT", this field is required and singularly defines the
       * shape. Similarly, this field is required to define the center point of a
       * "CIRCLE" shape, or the "origin of bearing" for arcs.
       */
      coord0?: string;

      /**
       * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
       * format. The fields coord0 and coord1 should be used in the specification of any
       * airspace control shape that requires exactly one (1) or two (2) reference points
       * for construction. For shapes requiring one reference point, for instance, when
       * cmShape is set to "APOINT", this field is required and singularly defines the
       * shape. Similarly, this field is required to define the center point of a
       * "CIRCLE" shape, or the "origin of bearing" for arcs.
       */
      coord1?: string;

      /**
       * An array of at least two alphanumeric symbols used to serially identify the
       * corridor waypoints. If cmShape is set to "CORRIDOR", one of either corrWayPoints
       * or polyCoord is required to specify the centerline of the corridor path.
       */
      corrWayPoints?: Array<string>;

      /**
       * Description of the airspace vertical dimension.
       */
      effVDim?: string;

      /**
       * General informat detailing the transit instruction for the airspace control
       * means.
       */
      freeText?: string;

      /**
       * Used to provide transit instructions for the airspace control means.
       */
      genTextInd?: string;

      /**
       * Specifies the geodetic datum by which the spatial coordinates of the controlled
       * airspace are calculated, if different from the top level ACO datum.
       */
      geoDatumAlt?: string;

      /**
       * Unique Link 16 identifier assigned to the airspace control means.
       */
      link16Id?: string;

      /**
       * Orbit alignment look-up code. Can be C=Center, L=Left, R=Right.
       */
      orbitAlignment?: string;

      /**
       * A set of geospatial coordinates specified in DMS (Degrees, Minutes, Seconds)
       * format which determine the vertices of a one or two dimensional geospatial
       * shape. When cmShape is set to "POLYARC" or "POLYGON", this field is required as
       * applied in the construction of the area boundary. If cmShape is set to
       * "CORRIDOR" or "GEOLINE", this field is required and can be interpreted as an
       * ordered set of points along a path in space.
       */
      polyCoord?: Array<string>;

      /**
       * A distance that represents a radial magnitude. If cmShape is set to "CIRCLE" or
       * "POLYARC", one of either fields radMag0 or radMag1 is required. If cmShape is
       * set to "RADARC", this field is required and maps to the "inner" radial magnitude
       * arc limit. If provided, the field radMagUnit is required.
       */
      radMag0?: number;

      /**
       * A distance that represents a radial magnitude. If cmShape is set to "CIRCLE" or
       * "POLYARC", one of either fields radMag0 or radMag1 is required. If cmShape is
       * set to "RADARC", this field is required and maps to the "outer" radial magnitude
       * arc limit. If provided, the field radMagUnit is required.
       */
      radMag1?: number;

      /**
       * Specifies the unit of length in which radial magnitudes are given. Use M for
       * meters, KM for kilometers, or NM for nautical miles.
       */
      radMagUnit?: string;

      /**
       * Index of a segment in an airtrack, which is defined by an ordered set of points.
       */
      trackLeg?: number;

      /**
       * The altitude at or below which the vertical position of an aircraft is
       * controlled by reference to true altitude.
       */
      transAltitude?: string;

      /**
       * Designates the means by which a defined airspace control means is to be used.
       */
      usage?: string;

      /**
       * Used to describe the "side to side" distance of a target, object or area. If
       * cmShape is set to "CORRIDOR" or "AORBIT", this field is required and is mapped
       * to the width parameter. If provided, the field widthUnit is required.
       */
      width?: number;

      /**
       * Given an ordered pair of spatial coordinates (p0, p1), defines a distance
       * extending into the LEFT half-plane relative to the direction of the vector that
       * maps p0 to p1. If cmShape is set to "1TRACK", this field is required to define
       * the width of the airspace track as measured from the left of the track segment
       * line. If provided, the field widthUnit is required.
       */
      widthLeft?: number;

      /**
       * Given an ordered pair of spatial coordinates (p0, p1), defines a distance
       * extending into the RIGHT half-plane relative to the direction of the vector that
       * maps p0 to p1. If cmShape is set to "1TRACK", this field is required to define
       * the width of the airspace track as measured from the right of the track segment
       * line. If provided, the field widthUnit is required.
       */
      widthRight?: number;

      /**
       * Specifies the unit of length for which widths are given. Use M for meters, KM
       * for kilometers, or NM for nautical miles.
       */
      widthUnit?: string;
    }

    export namespace AirspaceControlMean {
      /**
       * The controlPoint set describes any reference/controlling/rendezvous point for a
       * given airspace control means.
       */
      export interface AirspaceControlPoint {
        /**
         * The altitude of the control point.
         */
        ctrlPtAltitude?: string;

        /**
         * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
         * format that represents the location of the control point.
         */
        ctrlPtLocation?: string;

        /**
         * The name applied to the control point, used as a reference.
         */
        ctrlPtName?: string;

        /**
         * One of possible control point type codes, such as CP, ER, OT, etc.
         */
        ctrlPtType?: string;
      }

      /**
       * The timePeriods set describes the effective datetime for a given airspace
       * control means.
       */
      export interface AirspaceTimePeriod {
        /**
         * Mandatory if timeMode is INTERVAL. Can be a numerical multiplier on an interval
         * frequency code, a stop time qualifier code such as AFTER, NET, UFN, etc, or a
         * datetime like string.
         */
        intDur?: Array<string>;

        /**
         * Mandatory if timeMode is INTERVAL. Can be one of the interval frequency codes,
         * such as BIWEEKLY, DAILY, YEARLY, etc.
         */
        intFreq?: Array<string>;

        /**
         * The end time designating that the airspace control order is no longer active.
         * Can contain datetime information or a stop time qualifier code, such as AFTER,
         * NET, UFN, etc.
         */
        timeEnd?: string;

        /**
         * The airspace time code associated with the ACO. Can be DISCRETE, a fixed time
         * block, or INTERVAL, a repeating time block.
         */
        timeMode?: string;

        /**
         * The start time designating that the airspace control order is active.
         */
        timeStart?: string;
      }
    }
  }

  /**
   * The airspaceControlReferences set provides both USMTF and non-USMTF references
   * for this airspace control order.
   */
  export interface AirspaceControlOrderReference {
    /**
     * The originator of this reference.
     */
    refOriginator?: string;

    /**
     * The reference serial number.
     */
    refSerialNum?: string;

    /**
     * Array of NATO Subject Indicator Codes (SIC) or filing numbers of the document
     * being referenced.
     */
    refSICs?: Array<string>;

    /**
     * Specifies an alphabetic serial number identifying a reference pertaining to this
     * message.
     */
    refSId?: string;

    /**
     * Indicates any special actions, restrictions, guidance, or information relating
     * to this reference.
     */
    refSpecialNotation?: string;

    /**
     * Timestamp of the referenced message, in ISO 8601 UTC format with millisecond
     * precision.
     */
    refTs?: string;

    /**
     * Specifies the type for this reference.
     */
    refType?: string;
  }
}

/**
 * Beta Version Airspace Control Order: Contains airspace coordination information
 * and instructions that have been issued by an airspace control authority.
 */
export interface AirspacecontrolorderFull {
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
  opExName: string;

  /**
   * The identifier of the originator of this message.
   */
  originator: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start of the effective time period of this airspace control order, in ISO
   * 8601 UTC format with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Free text information expressed in natural language.
   */
  acoComments?: string;

  /**
   * The serial number of this airspace control order.
   */
  acoSerialNum?: string;

  /**
   * Mandatory nested segment to report multiple airspace control means statuses
   * within an ACOID.
   */
  airspaceControlMeansStatus?: Array<AirspacecontrolorderFull.AirspaceControlMeansStatus>;

  /**
   * The airspaceControlReferences set provides both USMTF and non-USMTF references
   * for this airspace control order.
   */
  airspaceControlOrderReferences?: Array<AirspacecontrolorderFull.AirspaceControlOrderReference>;

  /**
   * Name of the area of the command for which the ACO is valid.
   */
  areaOfValidity?: string;

  /**
   * Mandatory if classSource uses the "IORIG" designator. Must be a REASON FOR
   * CLASSIFICATION code.
   */
  classReasons?: Array<string>;

  /**
   * Markings defining the source material or the original classification authority
   * for the ACO message.
   */
  classSource?: string;

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
   * Coded entries that provide justification for exemption from automatic
   * downgrading or declassification of the airspace control order.
   */
  declassExemptionCodes?: Array<string>;

  /**
   * Markings providing the literal guidance or date for downgrading or declassifying
   * the airspace control order.
   */
  downgradeInsDates?: Array<string>;

  /**
   * Specifies the geodetic datum by which the spatial coordinates of the controlled
   * airspace are calculated.
   */
  geoDatum?: string;

  /**
   * The month in which the message originated.
   */
  month?: string;

  /**
   * Supplementary name that can be used to further identify exercise nicknames, or
   * to provide the primary nickname of the option or the alternative of an
   * operational plan.
   */
  opExInfo?: string;

  /**
   * The secondary supplementary nickname of the option or the alternative of the
   * operational plan or order.
   */
  opExInfoAlt?: string;

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
   * The official identifier of the military establishment responsible for the
   * operation plan and the identification number assigned to this plan.
   */
  planOrigNum?: string;

  /**
   * The qualifier which caveats the message status.
   */
  qualifier?: string;

  /**
   * The serial number associated with the message qualifier.
   */
  qualSN?: number;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The unique message identifier sequentially assigned by the originator.
   */
  serialNum?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * A qualifier for the end of the effective time period of this airspace control
   * order, such as AFTER, ASOF, NLT, etc. Used with field stopTime to indicate a
   * relative time.
   */
  stopQualifier?: string;

  /**
   * The end of the effective time period of this airspace control order, in ISO 8601
   * UTC format with millisecond precision.
   */
  stopTime?: string;

  /**
   * Array of unique link 16 identifiers that will be assigned to a future airspace
   * control means.
   */
  undLnkTrks?: Array<string>;
}

export namespace AirspacecontrolorderFull {
  /**
   * Mandatory nested segment to report multiple airspace control means statuses
   * within an ACOID.
   */
  export interface AirspaceControlMeansStatus {
    /**
     * A conditional nested segment to report multiple airspace control means within a
     * particular airspace control means status.
     */
    airspaceControlMeans?: Array<AirspaceControlMeansStatus.AirspaceControlMean>;

    /**
     * Status of Airspace Control Means. Must be ADD, CHANGE, or DELETE.
     */
    cmStat?: string;

    /**
     * Airspace control means name or designator. Mandatory if acmStat equals "DELETE,"
     * otherwise this field is prohibited.
     */
    cmStatId?: Array<string>;
  }

  export namespace AirspaceControlMeansStatus {
    /**
     * A conditional nested segment to report multiple airspace control means within a
     * particular airspace control means status.
     */
    export interface AirspaceControlMean {
      /**
       * The controlPoint set describes any reference/controlling/rendezvous point for a
       * given airspace control means.
       */
      airspaceControlPoint?: Array<AirspaceControlMean.AirspaceControlPoint>;

      /**
       * The timePeriods set describes the effective datetime for a given airspace
       * control means.
       */
      airspaceTimePeriod?: Array<AirspaceControlMean.AirspaceTimePeriod>;

      /**
       * A bearing measured from true North, in angular degrees. If cmShape is set to
       * "POLYARC" or "RADARC", this field is required and is mapped to the "beginning"
       * radial bearing parameter.
       */
      bearing0?: number;

      /**
       * A bearing measured from true North, in angular degrees. If cmShape is set to
       * "POLYARC" or "RADARC", this field is required and is mapped to the "ending"
       * radial bearing parameter.
       */
      bearing1?: number;

      /**
       * Airspace control means name or designator.
       */
      cmId?: string;

      /**
       * Designates the geometric type that defines the airspace shape. One of CIRCLE,
       * CORRIDOR, LINE, ORBIT, etc.
       */
      cmShape?: 'POLYARC' | '1TRACK' | 'POLYGON' | 'CIRCLE' | 'CORRIDOR' | 'APOINT' | 'AORBIT' | 'GEOLINE';

      /**
       * The code for the type of airspace control means.
       */
      cmType?: string;

      /**
       * The commander responsible within a specified geographical area for the airspace
       * control operation assigned to him.
       */
      cntrlAuth?: string;

      /**
       * The frequency for the airspace control authority. Can specify HZ, KHZ, MHZ, GHZ
       * or a DESIG frequency designator code.
       */
      cntrlAuthFreqs?: Array<string>;

      /**
       * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
       * format. The fields coord0 and coord1 should be used in the specification of any
       * airspace control shape that requires exactly one (1) or two (2) reference points
       * for construction. For shapes requiring one reference point, for instance, when
       * cmShape is set to "APOINT", this field is required and singularly defines the
       * shape. Similarly, this field is required to define the center point of a
       * "CIRCLE" shape, or the "origin of bearing" for arcs.
       */
      coord0?: string;

      /**
       * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
       * format. The fields coord0 and coord1 should be used in the specification of any
       * airspace control shape that requires exactly one (1) or two (2) reference points
       * for construction. For shapes requiring one reference point, for instance, when
       * cmShape is set to "APOINT", this field is required and singularly defines the
       * shape. Similarly, this field is required to define the center point of a
       * "CIRCLE" shape, or the "origin of bearing" for arcs.
       */
      coord1?: string;

      /**
       * An array of at least two alphanumeric symbols used to serially identify the
       * corridor waypoints. If cmShape is set to "CORRIDOR", one of either corrWayPoints
       * or polyCoord is required to specify the centerline of the corridor path.
       */
      corrWayPoints?: Array<string>;

      /**
       * Description of the airspace vertical dimension.
       */
      effVDim?: string;

      /**
       * General informat detailing the transit instruction for the airspace control
       * means.
       */
      freeText?: string;

      /**
       * Used to provide transit instructions for the airspace control means.
       */
      genTextInd?: string;

      /**
       * Specifies the geodetic datum by which the spatial coordinates of the controlled
       * airspace are calculated, if different from the top level ACO datum.
       */
      geoDatumAlt?: string;

      /**
       * Unique Link 16 identifier assigned to the airspace control means.
       */
      link16Id?: string;

      /**
       * Orbit alignment look-up code. Can be C=Center, L=Left, R=Right.
       */
      orbitAlignment?: string;

      /**
       * A set of geospatial coordinates specified in DMS (Degrees, Minutes, Seconds)
       * format which determine the vertices of a one or two dimensional geospatial
       * shape. When cmShape is set to "POLYARC" or "POLYGON", this field is required as
       * applied in the construction of the area boundary. If cmShape is set to
       * "CORRIDOR" or "GEOLINE", this field is required and can be interpreted as an
       * ordered set of points along a path in space.
       */
      polyCoord?: Array<string>;

      /**
       * A distance that represents a radial magnitude. If cmShape is set to "CIRCLE" or
       * "POLYARC", one of either fields radMag0 or radMag1 is required. If cmShape is
       * set to "RADARC", this field is required and maps to the "inner" radial magnitude
       * arc limit. If provided, the field radMagUnit is required.
       */
      radMag0?: number;

      /**
       * A distance that represents a radial magnitude. If cmShape is set to "CIRCLE" or
       * "POLYARC", one of either fields radMag0 or radMag1 is required. If cmShape is
       * set to "RADARC", this field is required and maps to the "outer" radial magnitude
       * arc limit. If provided, the field radMagUnit is required.
       */
      radMag1?: number;

      /**
       * Specifies the unit of length in which radial magnitudes are given. Use M for
       * meters, KM for kilometers, or NM for nautical miles.
       */
      radMagUnit?: string;

      /**
       * Index of a segment in an airtrack, which is defined by an ordered set of points.
       */
      trackLeg?: number;

      /**
       * The altitude at or below which the vertical position of an aircraft is
       * controlled by reference to true altitude.
       */
      transAltitude?: string;

      /**
       * Designates the means by which a defined airspace control means is to be used.
       */
      usage?: string;

      /**
       * Used to describe the "side to side" distance of a target, object or area. If
       * cmShape is set to "CORRIDOR" or "AORBIT", this field is required and is mapped
       * to the width parameter. If provided, the field widthUnit is required.
       */
      width?: number;

      /**
       * Given an ordered pair of spatial coordinates (p0, p1), defines a distance
       * extending into the LEFT half-plane relative to the direction of the vector that
       * maps p0 to p1. If cmShape is set to "1TRACK", this field is required to define
       * the width of the airspace track as measured from the left of the track segment
       * line. If provided, the field widthUnit is required.
       */
      widthLeft?: number;

      /**
       * Given an ordered pair of spatial coordinates (p0, p1), defines a distance
       * extending into the RIGHT half-plane relative to the direction of the vector that
       * maps p0 to p1. If cmShape is set to "1TRACK", this field is required to define
       * the width of the airspace track as measured from the right of the track segment
       * line. If provided, the field widthUnit is required.
       */
      widthRight?: number;

      /**
       * Specifies the unit of length for which widths are given. Use M for meters, KM
       * for kilometers, or NM for nautical miles.
       */
      widthUnit?: string;
    }

    export namespace AirspaceControlMean {
      /**
       * The controlPoint set describes any reference/controlling/rendezvous point for a
       * given airspace control means.
       */
      export interface AirspaceControlPoint {
        /**
         * The altitude of the control point.
         */
        ctrlPtAltitude?: string;

        /**
         * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
         * format that represents the location of the control point.
         */
        ctrlPtLocation?: string;

        /**
         * The name applied to the control point, used as a reference.
         */
        ctrlPtName?: string;

        /**
         * One of possible control point type codes, such as CP, ER, OT, etc.
         */
        ctrlPtType?: string;
      }

      /**
       * The timePeriods set describes the effective datetime for a given airspace
       * control means.
       */
      export interface AirspaceTimePeriod {
        /**
         * Mandatory if timeMode is INTERVAL. Can be a numerical multiplier on an interval
         * frequency code, a stop time qualifier code such as AFTER, NET, UFN, etc, or a
         * datetime like string.
         */
        intDur?: Array<string>;

        /**
         * Mandatory if timeMode is INTERVAL. Can be one of the interval frequency codes,
         * such as BIWEEKLY, DAILY, YEARLY, etc.
         */
        intFreq?: Array<string>;

        /**
         * The end time designating that the airspace control order is no longer active.
         * Can contain datetime information or a stop time qualifier code, such as AFTER,
         * NET, UFN, etc.
         */
        timeEnd?: string;

        /**
         * The airspace time code associated with the ACO. Can be DISCRETE, a fixed time
         * block, or INTERVAL, a repeating time block.
         */
        timeMode?: string;

        /**
         * The start time designating that the airspace control order is active.
         */
        timeStart?: string;
      }
    }
  }

  /**
   * The airspaceControlReferences set provides both USMTF and non-USMTF references
   * for this airspace control order.
   */
  export interface AirspaceControlOrderReference {
    /**
     * The originator of this reference.
     */
    refOriginator?: string;

    /**
     * The reference serial number.
     */
    refSerialNum?: string;

    /**
     * Array of NATO Subject Indicator Codes (SIC) or filing numbers of the document
     * being referenced.
     */
    refSICs?: Array<string>;

    /**
     * Specifies an alphabetic serial number identifying a reference pertaining to this
     * message.
     */
    refSId?: string;

    /**
     * Indicates any special actions, restrictions, guidance, or information relating
     * to this reference.
     */
    refSpecialNotation?: string;

    /**
     * Timestamp of the referenced message, in ISO 8601 UTC format with millisecond
     * precision.
     */
    refTs?: string;

    /**
     * Specifies the type for this reference.
     */
    refType?: string;
  }
}

export type AirspaceControlOrderCountResponse = string;

export interface AirspaceControlOrderQueryHelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<AirspaceControlOrderQueryHelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace AirspaceControlOrderQueryHelpResponse {
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

export type AirspaceControlOrderTupleResponse = Array<AirspacecontrolorderFull>;

export interface AirspaceControlOrderCreateParams {
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
  opExName: string;

  /**
   * The identifier of the originator of this message.
   */
  originator: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start of the effective time period of this airspace control order, in ISO
   * 8601 UTC format with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Free text information expressed in natural language.
   */
  acoComments?: string;

  /**
   * The serial number of this airspace control order.
   */
  acoSerialNum?: string;

  /**
   * Mandatory nested segment to report multiple airspace control means statuses
   * within an ACOID.
   */
  airspaceControlMeansStatus?: Array<AirspaceControlOrderCreateParams.AirspaceControlMeansStatus>;

  /**
   * The airspaceControlReferences set provides both USMTF and non-USMTF references
   * for this airspace control order.
   */
  airspaceControlOrderReferences?: Array<AirspaceControlOrderCreateParams.AirspaceControlOrderReference>;

  /**
   * Name of the area of the command for which the ACO is valid.
   */
  areaOfValidity?: string;

  /**
   * Mandatory if classSource uses the "IORIG" designator. Must be a REASON FOR
   * CLASSIFICATION code.
   */
  classReasons?: Array<string>;

  /**
   * Markings defining the source material or the original classification authority
   * for the ACO message.
   */
  classSource?: string;

  /**
   * Coded entries that provide justification for exemption from automatic
   * downgrading or declassification of the airspace control order.
   */
  declassExemptionCodes?: Array<string>;

  /**
   * Markings providing the literal guidance or date for downgrading or declassifying
   * the airspace control order.
   */
  downgradeInsDates?: Array<string>;

  /**
   * Specifies the geodetic datum by which the spatial coordinates of the controlled
   * airspace are calculated.
   */
  geoDatum?: string;

  /**
   * The month in which the message originated.
   */
  month?: string;

  /**
   * Supplementary name that can be used to further identify exercise nicknames, or
   * to provide the primary nickname of the option or the alternative of an
   * operational plan.
   */
  opExInfo?: string;

  /**
   * The secondary supplementary nickname of the option or the alternative of the
   * operational plan or order.
   */
  opExInfoAlt?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The official identifier of the military establishment responsible for the
   * operation plan and the identification number assigned to this plan.
   */
  planOrigNum?: string;

  /**
   * The qualifier which caveats the message status.
   */
  qualifier?: string;

  /**
   * The serial number associated with the message qualifier.
   */
  qualSN?: number;

  /**
   * The unique message identifier sequentially assigned by the originator.
   */
  serialNum?: string;

  /**
   * A qualifier for the end of the effective time period of this airspace control
   * order, such as AFTER, ASOF, NLT, etc. Used with field stopTime to indicate a
   * relative time.
   */
  stopQualifier?: string;

  /**
   * The end of the effective time period of this airspace control order, in ISO 8601
   * UTC format with millisecond precision.
   */
  stopTime?: string;

  /**
   * Array of unique link 16 identifiers that will be assigned to a future airspace
   * control means.
   */
  undLnkTrks?: Array<string>;
}

export namespace AirspaceControlOrderCreateParams {
  /**
   * Mandatory nested segment to report multiple airspace control means statuses
   * within an ACOID.
   */
  export interface AirspaceControlMeansStatus {
    /**
     * A conditional nested segment to report multiple airspace control means within a
     * particular airspace control means status.
     */
    airspaceControlMeans?: Array<AirspaceControlMeansStatus.AirspaceControlMean>;

    /**
     * Status of Airspace Control Means. Must be ADD, CHANGE, or DELETE.
     */
    cmStat?: string;

    /**
     * Airspace control means name or designator. Mandatory if acmStat equals "DELETE,"
     * otherwise this field is prohibited.
     */
    cmStatId?: Array<string>;
  }

  export namespace AirspaceControlMeansStatus {
    /**
     * A conditional nested segment to report multiple airspace control means within a
     * particular airspace control means status.
     */
    export interface AirspaceControlMean {
      /**
       * The controlPoint set describes any reference/controlling/rendezvous point for a
       * given airspace control means.
       */
      airspaceControlPoint?: Array<AirspaceControlMean.AirspaceControlPoint>;

      /**
       * The timePeriods set describes the effective datetime for a given airspace
       * control means.
       */
      airspaceTimePeriod?: Array<AirspaceControlMean.AirspaceTimePeriod>;

      /**
       * A bearing measured from true North, in angular degrees. If cmShape is set to
       * "POLYARC" or "RADARC", this field is required and is mapped to the "beginning"
       * radial bearing parameter.
       */
      bearing0?: number;

      /**
       * A bearing measured from true North, in angular degrees. If cmShape is set to
       * "POLYARC" or "RADARC", this field is required and is mapped to the "ending"
       * radial bearing parameter.
       */
      bearing1?: number;

      /**
       * Airspace control means name or designator.
       */
      cmId?: string;

      /**
       * Designates the geometric type that defines the airspace shape. One of CIRCLE,
       * CORRIDOR, LINE, ORBIT, etc.
       */
      cmShape?: 'POLYARC' | '1TRACK' | 'POLYGON' | 'CIRCLE' | 'CORRIDOR' | 'APOINT' | 'AORBIT' | 'GEOLINE';

      /**
       * The code for the type of airspace control means.
       */
      cmType?: string;

      /**
       * The commander responsible within a specified geographical area for the airspace
       * control operation assigned to him.
       */
      cntrlAuth?: string;

      /**
       * The frequency for the airspace control authority. Can specify HZ, KHZ, MHZ, GHZ
       * or a DESIG frequency designator code.
       */
      cntrlAuthFreqs?: Array<string>;

      /**
       * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
       * format. The fields coord0 and coord1 should be used in the specification of any
       * airspace control shape that requires exactly one (1) or two (2) reference points
       * for construction. For shapes requiring one reference point, for instance, when
       * cmShape is set to "APOINT", this field is required and singularly defines the
       * shape. Similarly, this field is required to define the center point of a
       * "CIRCLE" shape, or the "origin of bearing" for arcs.
       */
      coord0?: string;

      /**
       * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
       * format. The fields coord0 and coord1 should be used in the specification of any
       * airspace control shape that requires exactly one (1) or two (2) reference points
       * for construction. For shapes requiring one reference point, for instance, when
       * cmShape is set to "APOINT", this field is required and singularly defines the
       * shape. Similarly, this field is required to define the center point of a
       * "CIRCLE" shape, or the "origin of bearing" for arcs.
       */
      coord1?: string;

      /**
       * An array of at least two alphanumeric symbols used to serially identify the
       * corridor waypoints. If cmShape is set to "CORRIDOR", one of either corrWayPoints
       * or polyCoord is required to specify the centerline of the corridor path.
       */
      corrWayPoints?: Array<string>;

      /**
       * Description of the airspace vertical dimension.
       */
      effVDim?: string;

      /**
       * General informat detailing the transit instruction for the airspace control
       * means.
       */
      freeText?: string;

      /**
       * Used to provide transit instructions for the airspace control means.
       */
      genTextInd?: string;

      /**
       * Specifies the geodetic datum by which the spatial coordinates of the controlled
       * airspace are calculated, if different from the top level ACO datum.
       */
      geoDatumAlt?: string;

      /**
       * Unique Link 16 identifier assigned to the airspace control means.
       */
      link16Id?: string;

      /**
       * Orbit alignment look-up code. Can be C=Center, L=Left, R=Right.
       */
      orbitAlignment?: string;

      /**
       * A set of geospatial coordinates specified in DMS (Degrees, Minutes, Seconds)
       * format which determine the vertices of a one or two dimensional geospatial
       * shape. When cmShape is set to "POLYARC" or "POLYGON", this field is required as
       * applied in the construction of the area boundary. If cmShape is set to
       * "CORRIDOR" or "GEOLINE", this field is required and can be interpreted as an
       * ordered set of points along a path in space.
       */
      polyCoord?: Array<string>;

      /**
       * A distance that represents a radial magnitude. If cmShape is set to "CIRCLE" or
       * "POLYARC", one of either fields radMag0 or radMag1 is required. If cmShape is
       * set to "RADARC", this field is required and maps to the "inner" radial magnitude
       * arc limit. If provided, the field radMagUnit is required.
       */
      radMag0?: number;

      /**
       * A distance that represents a radial magnitude. If cmShape is set to "CIRCLE" or
       * "POLYARC", one of either fields radMag0 or radMag1 is required. If cmShape is
       * set to "RADARC", this field is required and maps to the "outer" radial magnitude
       * arc limit. If provided, the field radMagUnit is required.
       */
      radMag1?: number;

      /**
       * Specifies the unit of length in which radial magnitudes are given. Use M for
       * meters, KM for kilometers, or NM for nautical miles.
       */
      radMagUnit?: string;

      /**
       * Index of a segment in an airtrack, which is defined by an ordered set of points.
       */
      trackLeg?: number;

      /**
       * The altitude at or below which the vertical position of an aircraft is
       * controlled by reference to true altitude.
       */
      transAltitude?: string;

      /**
       * Designates the means by which a defined airspace control means is to be used.
       */
      usage?: string;

      /**
       * Used to describe the "side to side" distance of a target, object or area. If
       * cmShape is set to "CORRIDOR" or "AORBIT", this field is required and is mapped
       * to the width parameter. If provided, the field widthUnit is required.
       */
      width?: number;

      /**
       * Given an ordered pair of spatial coordinates (p0, p1), defines a distance
       * extending into the LEFT half-plane relative to the direction of the vector that
       * maps p0 to p1. If cmShape is set to "1TRACK", this field is required to define
       * the width of the airspace track as measured from the left of the track segment
       * line. If provided, the field widthUnit is required.
       */
      widthLeft?: number;

      /**
       * Given an ordered pair of spatial coordinates (p0, p1), defines a distance
       * extending into the RIGHT half-plane relative to the direction of the vector that
       * maps p0 to p1. If cmShape is set to "1TRACK", this field is required to define
       * the width of the airspace track as measured from the right of the track segment
       * line. If provided, the field widthUnit is required.
       */
      widthRight?: number;

      /**
       * Specifies the unit of length for which widths are given. Use M for meters, KM
       * for kilometers, or NM for nautical miles.
       */
      widthUnit?: string;
    }

    export namespace AirspaceControlMean {
      /**
       * The controlPoint set describes any reference/controlling/rendezvous point for a
       * given airspace control means.
       */
      export interface AirspaceControlPoint {
        /**
         * The altitude of the control point.
         */
        ctrlPtAltitude?: string;

        /**
         * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
         * format that represents the location of the control point.
         */
        ctrlPtLocation?: string;

        /**
         * The name applied to the control point, used as a reference.
         */
        ctrlPtName?: string;

        /**
         * One of possible control point type codes, such as CP, ER, OT, etc.
         */
        ctrlPtType?: string;
      }

      /**
       * The timePeriods set describes the effective datetime for a given airspace
       * control means.
       */
      export interface AirspaceTimePeriod {
        /**
         * Mandatory if timeMode is INTERVAL. Can be a numerical multiplier on an interval
         * frequency code, a stop time qualifier code such as AFTER, NET, UFN, etc, or a
         * datetime like string.
         */
        intDur?: Array<string>;

        /**
         * Mandatory if timeMode is INTERVAL. Can be one of the interval frequency codes,
         * such as BIWEEKLY, DAILY, YEARLY, etc.
         */
        intFreq?: Array<string>;

        /**
         * The end time designating that the airspace control order is no longer active.
         * Can contain datetime information or a stop time qualifier code, such as AFTER,
         * NET, UFN, etc.
         */
        timeEnd?: string;

        /**
         * The airspace time code associated with the ACO. Can be DISCRETE, a fixed time
         * block, or INTERVAL, a repeating time block.
         */
        timeMode?: string;

        /**
         * The start time designating that the airspace control order is active.
         */
        timeStart?: string;
      }
    }
  }

  /**
   * The airspaceControlReferences set provides both USMTF and non-USMTF references
   * for this airspace control order.
   */
  export interface AirspaceControlOrderReference {
    /**
     * The originator of this reference.
     */
    refOriginator?: string;

    /**
     * The reference serial number.
     */
    refSerialNum?: string;

    /**
     * Array of NATO Subject Indicator Codes (SIC) or filing numbers of the document
     * being referenced.
     */
    refSICs?: Array<string>;

    /**
     * Specifies an alphabetic serial number identifying a reference pertaining to this
     * message.
     */
    refSId?: string;

    /**
     * Indicates any special actions, restrictions, guidance, or information relating
     * to this reference.
     */
    refSpecialNotation?: string;

    /**
     * Timestamp of the referenced message, in ISO 8601 UTC format with millisecond
     * precision.
     */
    refTs?: string;

    /**
     * Specifies the type for this reference.
     */
    refType?: string;
  }
}

export interface AirspaceControlOrderRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirspaceControlOrderListParams extends OffsetPageParams {}

export interface AirspaceControlOrderCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirspaceControlOrderCreateBulkParams {
  body: Array<AirspaceControlOrderCreateBulkParams.Body>;
}

export namespace AirspaceControlOrderCreateBulkParams {
  /**
   * Beta Version Airspace Control Order: Contains airspace coordination information
   * and instructions that have been issued by an airspace control authority.
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
     * Specifies the unique operation or exercise name, nickname, or codeword assigned
     * to a joint exercise or operation plan.
     */
    opExName: string;

    /**
     * The identifier of the originator of this message.
     */
    originator: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The start of the effective time period of this airspace control order, in ISO
     * 8601 UTC format with millisecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Free text information expressed in natural language.
     */
    acoComments?: string;

    /**
     * The serial number of this airspace control order.
     */
    acoSerialNum?: string;

    /**
     * Mandatory nested segment to report multiple airspace control means statuses
     * within an ACOID.
     */
    airspaceControlMeansStatus?: Array<Body.AirspaceControlMeansStatus>;

    /**
     * The airspaceControlReferences set provides both USMTF and non-USMTF references
     * for this airspace control order.
     */
    airspaceControlOrderReferences?: Array<Body.AirspaceControlOrderReference>;

    /**
     * Name of the area of the command for which the ACO is valid.
     */
    areaOfValidity?: string;

    /**
     * Mandatory if classSource uses the "IORIG" designator. Must be a REASON FOR
     * CLASSIFICATION code.
     */
    classReasons?: Array<string>;

    /**
     * Markings defining the source material or the original classification authority
     * for the ACO message.
     */
    classSource?: string;

    /**
     * Coded entries that provide justification for exemption from automatic
     * downgrading or declassification of the airspace control order.
     */
    declassExemptionCodes?: Array<string>;

    /**
     * Markings providing the literal guidance or date for downgrading or declassifying
     * the airspace control order.
     */
    downgradeInsDates?: Array<string>;

    /**
     * Specifies the geodetic datum by which the spatial coordinates of the controlled
     * airspace are calculated.
     */
    geoDatum?: string;

    /**
     * The month in which the message originated.
     */
    month?: string;

    /**
     * Supplementary name that can be used to further identify exercise nicknames, or
     * to provide the primary nickname of the option or the alternative of an
     * operational plan.
     */
    opExInfo?: string;

    /**
     * The secondary supplementary nickname of the option or the alternative of the
     * operational plan or order.
     */
    opExInfoAlt?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The official identifier of the military establishment responsible for the
     * operation plan and the identification number assigned to this plan.
     */
    planOrigNum?: string;

    /**
     * The qualifier which caveats the message status.
     */
    qualifier?: string;

    /**
     * The serial number associated with the message qualifier.
     */
    qualSN?: number;

    /**
     * The unique message identifier sequentially assigned by the originator.
     */
    serialNum?: string;

    /**
     * A qualifier for the end of the effective time period of this airspace control
     * order, such as AFTER, ASOF, NLT, etc. Used with field stopTime to indicate a
     * relative time.
     */
    stopQualifier?: string;

    /**
     * The end of the effective time period of this airspace control order, in ISO 8601
     * UTC format with millisecond precision.
     */
    stopTime?: string;

    /**
     * Array of unique link 16 identifiers that will be assigned to a future airspace
     * control means.
     */
    undLnkTrks?: Array<string>;
  }

  export namespace Body {
    /**
     * Mandatory nested segment to report multiple airspace control means statuses
     * within an ACOID.
     */
    export interface AirspaceControlMeansStatus {
      /**
       * A conditional nested segment to report multiple airspace control means within a
       * particular airspace control means status.
       */
      airspaceControlMeans?: Array<AirspaceControlMeansStatus.AirspaceControlMean>;

      /**
       * Status of Airspace Control Means. Must be ADD, CHANGE, or DELETE.
       */
      cmStat?: string;

      /**
       * Airspace control means name or designator. Mandatory if acmStat equals "DELETE,"
       * otherwise this field is prohibited.
       */
      cmStatId?: Array<string>;
    }

    export namespace AirspaceControlMeansStatus {
      /**
       * A conditional nested segment to report multiple airspace control means within a
       * particular airspace control means status.
       */
      export interface AirspaceControlMean {
        /**
         * The controlPoint set describes any reference/controlling/rendezvous point for a
         * given airspace control means.
         */
        airspaceControlPoint?: Array<AirspaceControlMean.AirspaceControlPoint>;

        /**
         * The timePeriods set describes the effective datetime for a given airspace
         * control means.
         */
        airspaceTimePeriod?: Array<AirspaceControlMean.AirspaceTimePeriod>;

        /**
         * A bearing measured from true North, in angular degrees. If cmShape is set to
         * "POLYARC" or "RADARC", this field is required and is mapped to the "beginning"
         * radial bearing parameter.
         */
        bearing0?: number;

        /**
         * A bearing measured from true North, in angular degrees. If cmShape is set to
         * "POLYARC" or "RADARC", this field is required and is mapped to the "ending"
         * radial bearing parameter.
         */
        bearing1?: number;

        /**
         * Airspace control means name or designator.
         */
        cmId?: string;

        /**
         * Designates the geometric type that defines the airspace shape. One of CIRCLE,
         * CORRIDOR, LINE, ORBIT, etc.
         */
        cmShape?: 'POLYARC' | '1TRACK' | 'POLYGON' | 'CIRCLE' | 'CORRIDOR' | 'APOINT' | 'AORBIT' | 'GEOLINE';

        /**
         * The code for the type of airspace control means.
         */
        cmType?: string;

        /**
         * The commander responsible within a specified geographical area for the airspace
         * control operation assigned to him.
         */
        cntrlAuth?: string;

        /**
         * The frequency for the airspace control authority. Can specify HZ, KHZ, MHZ, GHZ
         * or a DESIG frequency designator code.
         */
        cntrlAuthFreqs?: Array<string>;

        /**
         * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
         * format. The fields coord0 and coord1 should be used in the specification of any
         * airspace control shape that requires exactly one (1) or two (2) reference points
         * for construction. For shapes requiring one reference point, for instance, when
         * cmShape is set to "APOINT", this field is required and singularly defines the
         * shape. Similarly, this field is required to define the center point of a
         * "CIRCLE" shape, or the "origin of bearing" for arcs.
         */
        coord0?: string;

        /**
         * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
         * format. The fields coord0 and coord1 should be used in the specification of any
         * airspace control shape that requires exactly one (1) or two (2) reference points
         * for construction. For shapes requiring one reference point, for instance, when
         * cmShape is set to "APOINT", this field is required and singularly defines the
         * shape. Similarly, this field is required to define the center point of a
         * "CIRCLE" shape, or the "origin of bearing" for arcs.
         */
        coord1?: string;

        /**
         * An array of at least two alphanumeric symbols used to serially identify the
         * corridor waypoints. If cmShape is set to "CORRIDOR", one of either corrWayPoints
         * or polyCoord is required to specify the centerline of the corridor path.
         */
        corrWayPoints?: Array<string>;

        /**
         * Description of the airspace vertical dimension.
         */
        effVDim?: string;

        /**
         * General informat detailing the transit instruction for the airspace control
         * means.
         */
        freeText?: string;

        /**
         * Used to provide transit instructions for the airspace control means.
         */
        genTextInd?: string;

        /**
         * Specifies the geodetic datum by which the spatial coordinates of the controlled
         * airspace are calculated, if different from the top level ACO datum.
         */
        geoDatumAlt?: string;

        /**
         * Unique Link 16 identifier assigned to the airspace control means.
         */
        link16Id?: string;

        /**
         * Orbit alignment look-up code. Can be C=Center, L=Left, R=Right.
         */
        orbitAlignment?: string;

        /**
         * A set of geospatial coordinates specified in DMS (Degrees, Minutes, Seconds)
         * format which determine the vertices of a one or two dimensional geospatial
         * shape. When cmShape is set to "POLYARC" or "POLYGON", this field is required as
         * applied in the construction of the area boundary. If cmShape is set to
         * "CORRIDOR" or "GEOLINE", this field is required and can be interpreted as an
         * ordered set of points along a path in space.
         */
        polyCoord?: Array<string>;

        /**
         * A distance that represents a radial magnitude. If cmShape is set to "CIRCLE" or
         * "POLYARC", one of either fields radMag0 or radMag1 is required. If cmShape is
         * set to "RADARC", this field is required and maps to the "inner" radial magnitude
         * arc limit. If provided, the field radMagUnit is required.
         */
        radMag0?: number;

        /**
         * A distance that represents a radial magnitude. If cmShape is set to "CIRCLE" or
         * "POLYARC", one of either fields radMag0 or radMag1 is required. If cmShape is
         * set to "RADARC", this field is required and maps to the "outer" radial magnitude
         * arc limit. If provided, the field radMagUnit is required.
         */
        radMag1?: number;

        /**
         * Specifies the unit of length in which radial magnitudes are given. Use M for
         * meters, KM for kilometers, or NM for nautical miles.
         */
        radMagUnit?: string;

        /**
         * Index of a segment in an airtrack, which is defined by an ordered set of points.
         */
        trackLeg?: number;

        /**
         * The altitude at or below which the vertical position of an aircraft is
         * controlled by reference to true altitude.
         */
        transAltitude?: string;

        /**
         * Designates the means by which a defined airspace control means is to be used.
         */
        usage?: string;

        /**
         * Used to describe the "side to side" distance of a target, object or area. If
         * cmShape is set to "CORRIDOR" or "AORBIT", this field is required and is mapped
         * to the width parameter. If provided, the field widthUnit is required.
         */
        width?: number;

        /**
         * Given an ordered pair of spatial coordinates (p0, p1), defines a distance
         * extending into the LEFT half-plane relative to the direction of the vector that
         * maps p0 to p1. If cmShape is set to "1TRACK", this field is required to define
         * the width of the airspace track as measured from the left of the track segment
         * line. If provided, the field widthUnit is required.
         */
        widthLeft?: number;

        /**
         * Given an ordered pair of spatial coordinates (p0, p1), defines a distance
         * extending into the RIGHT half-plane relative to the direction of the vector that
         * maps p0 to p1. If cmShape is set to "1TRACK", this field is required to define
         * the width of the airspace track as measured from the right of the track segment
         * line. If provided, the field widthUnit is required.
         */
        widthRight?: number;

        /**
         * Specifies the unit of length for which widths are given. Use M for meters, KM
         * for kilometers, or NM for nautical miles.
         */
        widthUnit?: string;
      }

      export namespace AirspaceControlMean {
        /**
         * The controlPoint set describes any reference/controlling/rendezvous point for a
         * given airspace control means.
         */
        export interface AirspaceControlPoint {
          /**
           * The altitude of the control point.
           */
          ctrlPtAltitude?: string;

          /**
           * A geospatial point coordinate specified in DMS (Degrees, Minutes, Seconds)
           * format that represents the location of the control point.
           */
          ctrlPtLocation?: string;

          /**
           * The name applied to the control point, used as a reference.
           */
          ctrlPtName?: string;

          /**
           * One of possible control point type codes, such as CP, ER, OT, etc.
           */
          ctrlPtType?: string;
        }

        /**
         * The timePeriods set describes the effective datetime for a given airspace
         * control means.
         */
        export interface AirspaceTimePeriod {
          /**
           * Mandatory if timeMode is INTERVAL. Can be a numerical multiplier on an interval
           * frequency code, a stop time qualifier code such as AFTER, NET, UFN, etc, or a
           * datetime like string.
           */
          intDur?: Array<string>;

          /**
           * Mandatory if timeMode is INTERVAL. Can be one of the interval frequency codes,
           * such as BIWEEKLY, DAILY, YEARLY, etc.
           */
          intFreq?: Array<string>;

          /**
           * The end time designating that the airspace control order is no longer active.
           * Can contain datetime information or a stop time qualifier code, such as AFTER,
           * NET, UFN, etc.
           */
          timeEnd?: string;

          /**
           * The airspace time code associated with the ACO. Can be DISCRETE, a fixed time
           * block, or INTERVAL, a repeating time block.
           */
          timeMode?: string;

          /**
           * The start time designating that the airspace control order is active.
           */
          timeStart?: string;
        }
      }
    }

    /**
     * The airspaceControlReferences set provides both USMTF and non-USMTF references
     * for this airspace control order.
     */
    export interface AirspaceControlOrderReference {
      /**
       * The originator of this reference.
       */
      refOriginator?: string;

      /**
       * The reference serial number.
       */
      refSerialNum?: string;

      /**
       * Array of NATO Subject Indicator Codes (SIC) or filing numbers of the document
       * being referenced.
       */
      refSICs?: Array<string>;

      /**
       * Specifies an alphabetic serial number identifying a reference pertaining to this
       * message.
       */
      refSId?: string;

      /**
       * Indicates any special actions, restrictions, guidance, or information relating
       * to this reference.
       */
      refSpecialNotation?: string;

      /**
       * Timestamp of the referenced message, in ISO 8601 UTC format with millisecond
       * precision.
       */
      refTs?: string;

      /**
       * Specifies the type for this reference.
       */
      refType?: string;
    }
  }
}

export interface AirspaceControlOrderTupleParams {
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

export declare namespace AirspaceControlOrders {
  export {
    type AirspacecontrolorderAbridged as AirspacecontrolorderAbridged,
    type AirspacecontrolorderFull as AirspacecontrolorderFull,
    type AirspaceControlOrderCountResponse as AirspaceControlOrderCountResponse,
    type AirspaceControlOrderQueryHelpResponse as AirspaceControlOrderQueryHelpResponse,
    type AirspaceControlOrderTupleResponse as AirspaceControlOrderTupleResponse,
    type AirspacecontrolorderAbridgedsOffsetPage as AirspacecontrolorderAbridgedsOffsetPage,
    type AirspaceControlOrderCreateParams as AirspaceControlOrderCreateParams,
    type AirspaceControlOrderRetrieveParams as AirspaceControlOrderRetrieveParams,
    type AirspaceControlOrderListParams as AirspaceControlOrderListParams,
    type AirspaceControlOrderCountParams as AirspaceControlOrderCountParams,
    type AirspaceControlOrderCreateBulkParams as AirspaceControlOrderCreateBulkParams,
    type AirspaceControlOrderTupleParams as AirspaceControlOrderTupleParams,
  };
}
