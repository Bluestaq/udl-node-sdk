// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Datalink extends APIResource {
  /**
   * Service operation to take a single DataLink record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.linkStatus.datalink.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   opExName: 'DESERT WIND',
   *   originator: 'USCENTCOM',
   *   source: 'Bluestaq',
   *   startTime: '2024-01-07T13:55:43.123Z',
   * });
   * ```
   */
  create(body: DatalinkCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/datalink', {
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
   * for await (const datalinkListResponse of client.linkStatus.datalink.list(
   *   { startTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DatalinkListParams,
    options?: RequestOptions,
  ): PagePromise<DatalinkListResponsesOffsetPage, DatalinkListResponse> {
    return this._client.getAPIList('/udl/datalink', OffsetPage<DatalinkListResponse>, { query, ...options });
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
   * const response = await client.linkStatus.datalink.count({
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: DatalinkCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/datalink/count', {
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
   * const response =
   *   await client.linkStatus.datalink.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<DatalinkQueryhelpResponse> {
    return this._client.get('/udl/datalink/queryhelp', options);
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
   * const response = await client.linkStatus.datalink.tuple({
   *   columns: 'columns',
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: DatalinkTupleParams, options?: RequestOptions): APIPromise<DatalinkTupleResponse> {
    return this._client.get('/udl/datalink/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple datalink records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.linkStatus.datalink.unvalidatedPublish({
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
  unvalidatedPublish(params: DatalinkUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-datalink', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type DatalinkListResponsesOffsetPage = OffsetPage<DatalinkListResponse>;

/**
 * Beta Version DataLink: Detailed instructions regarding the operations of data
 * links.
 */
export interface DatalinkIngest {
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
   * The start of the effective time period of this data link message, in ISO 8601
   * UTC format with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Array of instructions for acknowledging and the force or units required to
   * acknowledge the data link message being sent.
   */
  ackInstUnits?: Array<string>;

  /**
   * Flag Indicating if formal acknowledgement is required for the particular data
   * link message being sent.
   */
  ackReq?: boolean;

  /**
   * Maximum altitude difference between two air tracks, in thousands of feet.
   * Required if sysDefaultCode field is "MAN". Allowable entires are 5 to 50 in
   * increments of 5000 feet.
   */
  altDiff?: number;

  /**
   * The identifier for this data link message cancellation.
   */
  canxId?: string;

  /**
   * The originator of this data link message cancellation.
   */
  canxOriginator?: string;

  /**
   * Serial number assigned to this data link message cancellation.
   */
  canxSerialNum?: string;

  /**
   * Array of NATO Subject Indicator Codes (SIC) or filing numbers of this data link
   * message or document being cancelled.
   */
  canxSICs?: Array<string>;

  /**
   * Indicates any special actions, restrictions, guidance, or information relating
   * to this data link message cancellation.
   */
  canxSpecialNotation?: string;

  /**
   * Timestamp of the data link message cancellation, in ISO 8601 UTC format with
   * millisecond precision.
   */
  canxTs?: string;

  /**
   * Array of codes that indicate the reasons material is classified.
   */
  classReasons?: Array<string>;

  /**
   * Markings that define the source material or the original classification
   * authority for this data link message.
   */
  classSource?: string;

  /**
   * Number of consecutive remote track reports that must meet the decorrelation
   * criteria before the decorrelation is executed. Required if sysDefaultCode field
   * is "MAN". Allowable entries are integers from 1 to 5.
   */
  consecDecorr?: number;

  /**
   * Maximum difference between the reported course of the remote track and the
   * calculated course of the local track. Required if sysDefaultCode field is "MAN".
   * Allowable entries are 15 to 90 in increments of 15 degrees.
   */
  courseDiff?: number;

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
   * Array of codes that provide justification for exemption from automatic
   * downgrading or declassification.
   */
  decExemptCodes?: Array<string>;

  /**
   * Array of markings that provide the literal guidance or dates for the downgrading
   * or declassification of this data link message.
   */
  decInstDates?: Array<string>;

  /**
   * Distance between the common and remote track is to exceed the applicable
   * correlation window for the two tracks in order to be decorrelated. Required if
   * sysDefaultCode field is "MAN". Allowable entries are 1.0 to 2.0 in increments of
   * 0.1.
   */
  decorrWinMult?: number;

  /**
   * The code for the point of reference from which the coordinates and networks are
   * computed.
   */
  geoDatum?: string;

  /**
   * Call sign which identifies one or more communications facilities, commands,
   * authorities, or activities for Joint Range Extension (JRE) units.
   */
  jreCallSign?: string;

  /**
   * Joint Range Extension (JRE) unit details.
   */
  jreDetails?: string;

  /**
   * Link-16 octal track number assigned as the primary JTIDS unit address.
   */
  jrePriAdd?: number;

  /**
   * Link-16 octal track number assigned as the secondary JTIDS unit address.
   */
  jreSecAdd?: number;

  /**
   * Designator of the unit for Joint Range Extension (JRE).
   */
  jreUnitDes?: string;

  /**
   * Number used for maximum geodetic position quality. Required if sysDefaultCode
   * field is "MAN". Allowable entires are integers from 1 to 15.
   */
  maxGeoPosQual?: number;

  /**
   * Track quality to prevent correlation windows from being unrealistically small.
   * Required if sysDefaultCode field is "MAN". Allowable entries are integers from 8
   * to 15.
   */
  maxTrackQual?: number;

  /**
   * Data link management code word.
   */
  mgmtCode?: string;

  /**
   * Data link management code word meaning.
   */
  mgmtCodeMeaning?: string;

  /**
   * Number used for minimum geodetic position quality. Required if sysDefaultCode
   * field is "MAN". Allowable entries are integers from 1 to 5.
   */
  minGeoPosQual?: number;

  /**
   * Track quality to prevent correlation windows from being unrealistically large.
   * Required if sysDefaultCode field is "MAN". Allowable entries are integers from 3
   * to 7.
   */
  minTrackQual?: number;

  /**
   * The month in which this message originated.
   */
  month?: string;

  /**
   * Collection of contact and identification information for designated multilink
   * coordinator duty assignments. There can be 0 to many DataLinkMultiDuty
   * collections within the datalink service.
   */
  multiDuty?: Array<DatalinkIngest.MultiDuty>;

  /**
   * Array of non-link specific data unit designators.
   */
  nonLinkUnitDes?: Array<string>;

  /**
   * Provides an additional caveat further identifying the exercise or modifies the
   * exercise nickname.
   */
  opExInfo?: string;

  /**
   * The secondary nickname of the option or the alternative of the operational plan
   * or order.
   */
  opExInfoAlt?: string;

  /**
   * Collection of information describing the establishment and detailed operation of
   * tactical data links. There can be 0 to many DataLinkOps collections within the
   * datalink service.
   */
  ops?: Array<DatalinkIngest.Op>;

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
   * The unit identifier or call sign of the point of contact for this data link
   * message.
   */
  pocCallSign?: string;

  /**
   * WGS84 latitude of the point of contact for this data link message, in degrees.
   * -90 to 90 degrees (negative values south of equator).
   */
  pocLat?: number;

  /**
   * The location name of the point of contact for this data link message.
   */
  pocLocName?: string;

  /**
   * WGS84 longitude of the point of contact for this data link message, in degrees.
   * -180 to 180 degrees (negative values west of Prime Meridian).
   */
  pocLon?: number;

  /**
   * The name of the point of contact for this data link message.
   */
  pocName?: string;

  /**
   * Array of telephone numbers, radio frequency values, or email addresses of the
   * point of contact for this data link message.
   */
  pocNums?: Array<string>;

  /**
   * The rank or position of the point of contact for this data link message in a
   * military or civilian organization.
   */
  pocRank?: string;

  /**
   * The qualifier which caveats the message status such as AMP (Amplification), CHG
   * (Change), etc.
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
   * Collection of reference information. There can be 0 to many DataLinkReferences
   * collections within the datalink service.
   */
  references?: Array<DatalinkIngest.Reference>;

  /**
   * Collection that identifies points of reference used in the establishment of the
   * data links. There can be 1 to many DataLinkRefPoints collections within the
   * datalink service.
   */
  refPoints?: Array<DatalinkIngest.RefPoint>;

  /**
   * Collection of remarks associated with this data link message.
   */
  remarks?: Array<DatalinkIngest.Remark>;

  /**
   * Track quality to enter if too many duals involving low track quality tracks are
   * occurring. Required if sysDefaultCode field is "MAN". Allowable entries are
   * integers from 2 to 6.
   */
  resTrackQual?: number;

  /**
   * The unique message identifier assigned by the originator.
   */
  serialNum?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Collection of special track numbers used on the data links. There can be 0 to
   * many DataLinkSpecTracks collections within the datalink service.
   */
  specTracks?: Array<DatalinkIngest.SpecTrack>;

  /**
   * Maximum percentage the faster track speed may differ from the slower track
   * speed. Required if sysDefaultCode field is "MAN". Allowable entries are 10 to
   * 100 in increments of 10.
   */
  speedDiff?: number;

  /**
   * The end of the effective time period of this data link message, in ISO 8601 UTC
   * format with millisecond precision. This may be a relative stop time if used with
   * stopTimeMod.
   */
  stopTime?: string;

  /**
   * A qualifier for the end of the effective time period of this data link message,
   * such as AFTER, ASOF, NLT, etc. Used with field stopTime to indicate a relative
   * time.
   */
  stopTimeMod?: string;

  /**
   * Indicates the data terminal settings the system defaults to, either automatic
   * correlation/decorrelation (AUTO) or manual (MAN).
   */
  sysDefaultCode?: string;

  /**
   * Array of Link-16 octal track numbers used as the lower limit of a track block.
   */
  trackNumBlockLLs?: Array<number>;

  /**
   * Array of defined ranges of Link-11/11B track numbers assigned to a participating
   * unit or reporting unit.
   */
  trackNumBlocks?: Array<string>;

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
   * Collection of information regarding the function, frequency, and priority of
   * interface control and coordination nets for this data link message. There can be
   * 1 to many DataLinkVoiceCoord collections within the datalink service.
   */
  voiceCoord?: Array<DatalinkIngest.VoiceCoord>;

  /**
   * Number added to the basic window calculated from track qualities to ensure that
   * windows still allow valid correlations. Required if sysDefaultCode field is
   * "MAN". Allowable entries are 0.0 to 2.0 in increments of 0.25.
   */
  winSizeMin?: number;

  /**
   * The correlation window size multiplier to stretch or reduce the window size.
   * Required if sysDefaultCode field is "MAN". Allowable entries are 0.5 to 3.0 in
   * increments of 0.1.
   */
  winSizeMult?: number;
}

export namespace DatalinkIngest {
  /**
   * Collection of contact and identification information for designated multilink
   * coordinator duty assignments. There can be 0 to many DataLinkMultiDuty
   * collections within the datalink service.
   */
  export interface MultiDuty {
    /**
     * Specific duties assigned for multilink coordination (e.g. ICO, RICO, SICO).
     */
    duty?: string;

    /**
     * Array of telephone numbers or the frequency values for radio transmission of the
     * person to be contacted for multilink coordination.
     */
    dutyTeleFreqNums?: Array<string>;

    /**
     * Collection of information regarding the function, frequency, and priority of
     * interface control and coordination nets for multilink coordination. There can be
     * 0 to many DataLinkMultiVoiceCoord collections within a DataLinkMultiDuty
     * collection.
     */
    multiDutyVoiceCoord?: Array<MultiDuty.MultiDutyVoiceCoord>;

    /**
     * The name of the person to be contacted for multilink coordination.
     */
    name?: string;

    /**
     * The rank or position of the person to be contacted for multilink coordination.
     */
    rank?: string;

    /**
     * Designated force of unit specified by ship name, unit call sign, or unit
     * designator.
     */
    unitDes?: string;
  }

  export namespace MultiDuty {
    /**
     * Collection of information regarding the function, frequency, and priority of
     * interface control and coordination nets for multilink coordination. There can be
     * 0 to many DataLinkMultiVoiceCoord collections within a DataLinkMultiDuty
     * collection.
     */
    export interface MultiDutyVoiceCoord {
      /**
       * Priority of a communication circuit, channel or frequency for multilink
       * coordination (e.g. P - Primary, M - Monitor).
       */
      multiCommPri?: string;

      /**
       * Designator used in nonsecure communications to refer to a radio frequency for
       * multilink coordination.
       */
      multiFreqDes?: string;

      /**
       * Array of telephone numbers or contact frequencies used for interface control for
       * multilink coordination.
       */
      multiTeleFreqNums?: Array<string>;

      /**
       * Designator assigned to a voice interface control and coordination net for
       * multilink coordination (e.g. ADCCN, DCN, VPN, etc.).
       */
      multiVoiceNetDes?: string;
    }
  }

  /**
   * Collection of information describing the establishment and detailed operation of
   * tactical data links. There can be 0 to many DataLinkOps collections within the
   * datalink service.
   */
  export interface Op {
    /**
     * Detailed characteristics of the data link.
     */
    linkDetails?: string;

    /**
     * Name of the data link.
     */
    linkName?: string;

    /**
     * The start of the effective time period of the data link, in ISO 8601 UTC format
     * with millisecond precision.
     */
    linkStartTime?: string;

    /**
     * The end of the effective time period of the data link, in ISO 8601 UTC format
     * with millisecond precision.
     */
    linkStopTime?: string;

    /**
     * A qualifier for the end of the effective time period of this data link, such as
     * AFTER, ASOF, NLT, etc. Used with field linkStopTimeMod to indicate a relative
     * time.
     */
    linkStopTimeMod?: string;
  }

  /**
   * Collection of reference information. There can be 0 to many DataLinkReferences
   * collections within the datalink service.
   */
  export interface Reference {
    /**
     * The originator of this reference.
     */
    refOriginator?: string;

    /**
     * Specifies an alphabetic serial identifier a reference pertaining to the data
     * link message.
     */
    refSerialId?: string;

    /**
     * Serial number assigned to this reference.
     */
    refSerialNum?: string;

    /**
     * Array of NATO Subject Indicator Codes (SIC) or filing numbers of the document
     * being referenced.
     */
    refSICs?: Array<string>;

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
     * Specifies the type of document referenced.
     */
    refType?: string;
  }

  /**
   * Collection that identifies points of reference used in the establishment of the
   * data links. There can be 1 to many DataLinkRefPoints collections within the
   * datalink service.
   */
  export interface RefPoint {
    /**
     * Indicates when a particular event or nickname becomes effective or the old event
     * or nickname is deleted, in ISO 8601 UTC format with millisecond precision.
     */
    effEventTime?: string;

    /**
     * Identifier to designate a reference point.
     */
    refDes?: string;

    /**
     * WGS84 latitude of the reference point for this data link message, in degrees.
     * -90 to 90 degrees (negative values south of equator).
     */
    refLat?: number;

    /**
     * The location name of the point of reference for this data link message.
     */
    refLocName?: string;

    /**
     * WGS84 longitude of the reference point for this data link message, in degrees.
     * -90 to 90 degrees (negative values south of equator).
     */
    refLon?: number;

    /**
     * Type of data link reference point or grid origin.
     */
    refPointType?: string;
  }

  /**
   * Collection of remarks associated with this data link message.
   */
  export interface Remark {
    /**
     * Text of the remark.
     */
    text?: string;

    /**
     * Indicates the subject matter of the remark.
     */
    type?: string;
  }

  /**
   * Collection of special track numbers used on the data links. There can be 0 to
   * many DataLinkSpecTracks collections within the datalink service.
   */
  export interface SpecTrack {
    /**
     * The special track number used on the data link entered as an octal reference
     * number. Used to identify a particular type of platform (e.g. MPA, KRESTA) or
     * platform name (e.g. TROMP, MOUNT WHITNEY) which is not included in assigned
     * track blocks.
     */
    specTrackNum?: string;

    /**
     * Description of the special track number.
     */
    specTrackNumDesc?: string;
  }

  /**
   * Collection of information regarding the function, frequency, and priority of
   * interface control and coordination nets for this data link message. There can be
   * 1 to many DataLinkVoiceCoord collections within the datalink service.
   */
  export interface VoiceCoord {
    /**
     * Priority of a communication circuit, channel or frequency for this data link
     * message such as P (Primary), M (Monitor), etc.
     */
    commPri?: string;

    /**
     * Designator used in nonsecure communications to refer to a radio frequency for
     * this data link message.
     */
    freqDes?: string;

    /**
     * Array of telephone numbers or contact frequencies used for interface control for
     * this data link message.
     */
    teleFreqNums?: Array<string>;

    /**
     * Designator assigned to a voice interface control and coordination net for this
     * data link message (e.g. ADCCN, DCN, VPN, etc.).
     */
    voiceNetDes?: string;
  }
}

/**
 * Beta Version DataLink: Detailed instructions regarding the operations of data
 * links.
 */
export interface DatalinkListResponse {
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
   * The start of the effective time period of this data link message, in ISO 8601
   * UTC format with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Array of instructions for acknowledging and the force or units required to
   * acknowledge the data link message being sent.
   */
  ackInstUnits?: Array<string>;

  /**
   * Flag Indicating if formal acknowledgement is required for the particular data
   * link message being sent.
   */
  ackReq?: boolean;

  /**
   * Maximum altitude difference between two air tracks, in thousands of feet.
   * Required if sysDefaultCode field is "MAN". Allowable entires are 5 to 50 in
   * increments of 5000 feet.
   */
  altDiff?: number;

  /**
   * The identifier for this data link message cancellation.
   */
  canxId?: string;

  /**
   * The originator of this data link message cancellation.
   */
  canxOriginator?: string;

  /**
   * Serial number assigned to this data link message cancellation.
   */
  canxSerialNum?: string;

  /**
   * Array of NATO Subject Indicator Codes (SIC) or filing numbers of this data link
   * message or document being cancelled.
   */
  canxSICs?: Array<string>;

  /**
   * Indicates any special actions, restrictions, guidance, or information relating
   * to this data link message cancellation.
   */
  canxSpecialNotation?: string;

  /**
   * Timestamp of the data link message cancellation, in ISO 8601 UTC format with
   * millisecond precision.
   */
  canxTs?: string;

  /**
   * Array of codes that indicate the reasons material is classified.
   */
  classReasons?: Array<string>;

  /**
   * Markings that define the source material or the original classification
   * authority for this data link message.
   */
  classSource?: string;

  /**
   * Number of consecutive remote track reports that must meet the decorrelation
   * criteria before the decorrelation is executed. Required if sysDefaultCode field
   * is "MAN". Allowable entries are integers from 1 to 5.
   */
  consecDecorr?: number;

  /**
   * Maximum difference between the reported course of the remote track and the
   * calculated course of the local track. Required if sysDefaultCode field is "MAN".
   * Allowable entries are 15 to 90 in increments of 15 degrees.
   */
  courseDiff?: number;

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
   * Array of codes that provide justification for exemption from automatic
   * downgrading or declassification.
   */
  decExemptCodes?: Array<string>;

  /**
   * Array of markings that provide the literal guidance or dates for the downgrading
   * or declassification of this data link message.
   */
  decInstDates?: Array<string>;

  /**
   * Distance between the common and remote track is to exceed the applicable
   * correlation window for the two tracks in order to be decorrelated. Required if
   * sysDefaultCode field is "MAN". Allowable entries are 1.0 to 2.0 in increments of
   * 0.1.
   */
  decorrWinMult?: number;

  /**
   * The code for the point of reference from which the coordinates and networks are
   * computed.
   */
  geoDatum?: string;

  /**
   * Call sign which identifies one or more communications facilities, commands,
   * authorities, or activities for Joint Range Extension (JRE) units.
   */
  jreCallSign?: string;

  /**
   * Joint Range Extension (JRE) unit details.
   */
  jreDetails?: string;

  /**
   * Link-16 octal track number assigned as the primary JTIDS unit address.
   */
  jrePriAdd?: number;

  /**
   * Link-16 octal track number assigned as the secondary JTIDS unit address.
   */
  jreSecAdd?: number;

  /**
   * Designator of the unit for Joint Range Extension (JRE).
   */
  jreUnitDes?: string;

  /**
   * Number used for maximum geodetic position quality. Required if sysDefaultCode
   * field is "MAN". Allowable entires are integers from 1 to 15.
   */
  maxGeoPosQual?: number;

  /**
   * Track quality to prevent correlation windows from being unrealistically small.
   * Required if sysDefaultCode field is "MAN". Allowable entries are integers from 8
   * to 15.
   */
  maxTrackQual?: number;

  /**
   * Data link management code word.
   */
  mgmtCode?: string;

  /**
   * Data link management code word meaning.
   */
  mgmtCodeMeaning?: string;

  /**
   * Number used for minimum geodetic position quality. Required if sysDefaultCode
   * field is "MAN". Allowable entries are integers from 1 to 5.
   */
  minGeoPosQual?: number;

  /**
   * Track quality to prevent correlation windows from being unrealistically large.
   * Required if sysDefaultCode field is "MAN". Allowable entries are integers from 3
   * to 7.
   */
  minTrackQual?: number;

  /**
   * The month in which this message originated.
   */
  month?: string;

  /**
   * Collection of contact and identification information for designated multilink
   * coordinator duty assignments. There can be 0 to many DataLinkMultiDuty
   * collections within the datalink service.
   */
  multiDuty?: Array<DatalinkListResponse.MultiDuty>;

  /**
   * Array of non-link specific data unit designators.
   */
  nonLinkUnitDes?: Array<string>;

  /**
   * Provides an additional caveat further identifying the exercise or modifies the
   * exercise nickname.
   */
  opExInfo?: string;

  /**
   * The secondary nickname of the option or the alternative of the operational plan
   * or order.
   */
  opExInfoAlt?: string;

  /**
   * Collection of information describing the establishment and detailed operation of
   * tactical data links. There can be 0 to many DataLinkOps collections within the
   * datalink service.
   */
  ops?: Array<DatalinkListResponse.Op>;

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
   * The unit identifier or call sign of the point of contact for this data link
   * message.
   */
  pocCallSign?: string;

  /**
   * WGS84 latitude of the point of contact for this data link message, in degrees.
   * -90 to 90 degrees (negative values south of equator).
   */
  pocLat?: number;

  /**
   * The location name of the point of contact for this data link message.
   */
  pocLocName?: string;

  /**
   * WGS84 longitude of the point of contact for this data link message, in degrees.
   * -180 to 180 degrees (negative values west of Prime Meridian).
   */
  pocLon?: number;

  /**
   * The name of the point of contact for this data link message.
   */
  pocName?: string;

  /**
   * Array of telephone numbers, radio frequency values, or email addresses of the
   * point of contact for this data link message.
   */
  pocNums?: Array<string>;

  /**
   * The rank or position of the point of contact for this data link message in a
   * military or civilian organization.
   */
  pocRank?: string;

  /**
   * The qualifier which caveats the message status such as AMP (Amplification), CHG
   * (Change), etc.
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
   * Collection of reference information. There can be 0 to many DataLinkReferences
   * collections within the datalink service.
   */
  references?: Array<DatalinkListResponse.Reference>;

  /**
   * Collection that identifies points of reference used in the establishment of the
   * data links. There can be 1 to many DataLinkRefPoints collections within the
   * datalink service.
   */
  refPoints?: Array<DatalinkListResponse.RefPoint>;

  /**
   * Collection of remarks associated with this data link message.
   */
  remarks?: Array<DatalinkListResponse.Remark>;

  /**
   * Track quality to enter if too many duals involving low track quality tracks are
   * occurring. Required if sysDefaultCode field is "MAN". Allowable entries are
   * integers from 2 to 6.
   */
  resTrackQual?: number;

  /**
   * The unique message identifier assigned by the originator.
   */
  serialNum?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Collection of special track numbers used on the data links. There can be 0 to
   * many DataLinkSpecTracks collections within the datalink service.
   */
  specTracks?: Array<DatalinkListResponse.SpecTrack>;

  /**
   * Maximum percentage the faster track speed may differ from the slower track
   * speed. Required if sysDefaultCode field is "MAN". Allowable entries are 10 to
   * 100 in increments of 10.
   */
  speedDiff?: number;

  /**
   * The end of the effective time period of this data link message, in ISO 8601 UTC
   * format with millisecond precision. This may be a relative stop time if used with
   * stopTimeMod.
   */
  stopTime?: string;

  /**
   * A qualifier for the end of the effective time period of this data link message,
   * such as AFTER, ASOF, NLT, etc. Used with field stopTime to indicate a relative
   * time.
   */
  stopTimeMod?: string;

  /**
   * Indicates the data terminal settings the system defaults to, either automatic
   * correlation/decorrelation (AUTO) or manual (MAN).
   */
  sysDefaultCode?: string;

  /**
   * Array of Link-16 octal track numbers used as the lower limit of a track block.
   */
  trackNumBlockLLs?: Array<number>;

  /**
   * Array of defined ranges of Link-11/11B track numbers assigned to a participating
   * unit or reporting unit.
   */
  trackNumBlocks?: Array<string>;

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
   * Collection of information regarding the function, frequency, and priority of
   * interface control and coordination nets for this data link message. There can be
   * 1 to many DataLinkVoiceCoord collections within the datalink service.
   */
  voiceCoord?: Array<DatalinkListResponse.VoiceCoord>;

  /**
   * Number added to the basic window calculated from track qualities to ensure that
   * windows still allow valid correlations. Required if sysDefaultCode field is
   * "MAN". Allowable entries are 0.0 to 2.0 in increments of 0.25.
   */
  winSizeMin?: number;

  /**
   * The correlation window size multiplier to stretch or reduce the window size.
   * Required if sysDefaultCode field is "MAN". Allowable entries are 0.5 to 3.0 in
   * increments of 0.1.
   */
  winSizeMult?: number;
}

export namespace DatalinkListResponse {
  /**
   * Collection of contact and identification information for designated multilink
   * coordinator duty assignments. There can be 0 to many DataLinkMultiDuty
   * collections within the datalink service.
   */
  export interface MultiDuty {
    /**
     * Specific duties assigned for multilink coordination (e.g. ICO, RICO, SICO).
     */
    duty?: string;

    /**
     * Array of telephone numbers or the frequency values for radio transmission of the
     * person to be contacted for multilink coordination.
     */
    dutyTeleFreqNums?: Array<string>;

    /**
     * Collection of information regarding the function, frequency, and priority of
     * interface control and coordination nets for multilink coordination. There can be
     * 0 to many DataLinkMultiVoiceCoord collections within a DataLinkMultiDuty
     * collection.
     */
    multiDutyVoiceCoord?: Array<MultiDuty.MultiDutyVoiceCoord>;

    /**
     * The name of the person to be contacted for multilink coordination.
     */
    name?: string;

    /**
     * The rank or position of the person to be contacted for multilink coordination.
     */
    rank?: string;

    /**
     * Designated force of unit specified by ship name, unit call sign, or unit
     * designator.
     */
    unitDes?: string;
  }

  export namespace MultiDuty {
    /**
     * Collection of information regarding the function, frequency, and priority of
     * interface control and coordination nets for multilink coordination. There can be
     * 0 to many DataLinkMultiVoiceCoord collections within a DataLinkMultiDuty
     * collection.
     */
    export interface MultiDutyVoiceCoord {
      /**
       * Priority of a communication circuit, channel or frequency for multilink
       * coordination (e.g. P - Primary, M - Monitor).
       */
      multiCommPri?: string;

      /**
       * Designator used in nonsecure communications to refer to a radio frequency for
       * multilink coordination.
       */
      multiFreqDes?: string;

      /**
       * Array of telephone numbers or contact frequencies used for interface control for
       * multilink coordination.
       */
      multiTeleFreqNums?: Array<string>;

      /**
       * Designator assigned to a voice interface control and coordination net for
       * multilink coordination (e.g. ADCCN, DCN, VPN, etc.).
       */
      multiVoiceNetDes?: string;
    }
  }

  /**
   * Collection of information describing the establishment and detailed operation of
   * tactical data links. There can be 0 to many DataLinkOps collections within the
   * datalink service.
   */
  export interface Op {
    /**
     * Detailed characteristics of the data link.
     */
    linkDetails?: string;

    /**
     * Name of the data link.
     */
    linkName?: string;

    /**
     * The start of the effective time period of the data link, in ISO 8601 UTC format
     * with millisecond precision.
     */
    linkStartTime?: string;

    /**
     * The end of the effective time period of the data link, in ISO 8601 UTC format
     * with millisecond precision.
     */
    linkStopTime?: string;

    /**
     * A qualifier for the end of the effective time period of this data link, such as
     * AFTER, ASOF, NLT, etc. Used with field linkStopTimeMod to indicate a relative
     * time.
     */
    linkStopTimeMod?: string;
  }

  /**
   * Collection of reference information. There can be 0 to many DataLinkReferences
   * collections within the datalink service.
   */
  export interface Reference {
    /**
     * The originator of this reference.
     */
    refOriginator?: string;

    /**
     * Specifies an alphabetic serial identifier a reference pertaining to the data
     * link message.
     */
    refSerialId?: string;

    /**
     * Serial number assigned to this reference.
     */
    refSerialNum?: string;

    /**
     * Array of NATO Subject Indicator Codes (SIC) or filing numbers of the document
     * being referenced.
     */
    refSICs?: Array<string>;

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
     * Specifies the type of document referenced.
     */
    refType?: string;
  }

  /**
   * Collection that identifies points of reference used in the establishment of the
   * data links. There can be 1 to many DataLinkRefPoints collections within the
   * datalink service.
   */
  export interface RefPoint {
    /**
     * Indicates when a particular event or nickname becomes effective or the old event
     * or nickname is deleted, in ISO 8601 UTC format with millisecond precision.
     */
    effEventTime?: string;

    /**
     * Identifier to designate a reference point.
     */
    refDes?: string;

    /**
     * WGS84 latitude of the reference point for this data link message, in degrees.
     * -90 to 90 degrees (negative values south of equator).
     */
    refLat?: number;

    /**
     * The location name of the point of reference for this data link message.
     */
    refLocName?: string;

    /**
     * WGS84 longitude of the reference point for this data link message, in degrees.
     * -90 to 90 degrees (negative values south of equator).
     */
    refLon?: number;

    /**
     * Type of data link reference point or grid origin.
     */
    refPointType?: string;
  }

  /**
   * Collection of remarks associated with this data link message.
   */
  export interface Remark {
    /**
     * Text of the remark.
     */
    text?: string;

    /**
     * Indicates the subject matter of the remark.
     */
    type?: string;
  }

  /**
   * Collection of special track numbers used on the data links. There can be 0 to
   * many DataLinkSpecTracks collections within the datalink service.
   */
  export interface SpecTrack {
    /**
     * The special track number used on the data link entered as an octal reference
     * number. Used to identify a particular type of platform (e.g. MPA, KRESTA) or
     * platform name (e.g. TROMP, MOUNT WHITNEY) which is not included in assigned
     * track blocks.
     */
    specTrackNum?: string;

    /**
     * Description of the special track number.
     */
    specTrackNumDesc?: string;
  }

  /**
   * Collection of information regarding the function, frequency, and priority of
   * interface control and coordination nets for this data link message. There can be
   * 1 to many DataLinkVoiceCoord collections within the datalink service.
   */
  export interface VoiceCoord {
    /**
     * Priority of a communication circuit, channel or frequency for this data link
     * message such as P (Primary), M (Monitor), etc.
     */
    commPri?: string;

    /**
     * Designator used in nonsecure communications to refer to a radio frequency for
     * this data link message.
     */
    freqDes?: string;

    /**
     * Array of telephone numbers or contact frequencies used for interface control for
     * this data link message.
     */
    teleFreqNums?: Array<string>;

    /**
     * Designator assigned to a voice interface control and coordination net for this
     * data link message (e.g. ADCCN, DCN, VPN, etc.).
     */
    voiceNetDes?: string;
  }
}

export type DatalinkCountResponse = string;

export interface DatalinkQueryhelpResponse {
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

export type DatalinkTupleResponse = Array<DatalinkTupleResponse.DatalinkTupleResponseItem>;

export namespace DatalinkTupleResponse {
  /**
   * Beta Version DataLink: Detailed instructions regarding the operations of data
   * links.
   */
  export interface DatalinkTupleResponseItem {
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
     * The start of the effective time period of this data link message, in ISO 8601
     * UTC format with millisecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Array of instructions for acknowledging and the force or units required to
     * acknowledge the data link message being sent.
     */
    ackInstUnits?: Array<string>;

    /**
     * Flag Indicating if formal acknowledgement is required for the particular data
     * link message being sent.
     */
    ackReq?: boolean;

    /**
     * Maximum altitude difference between two air tracks, in thousands of feet.
     * Required if sysDefaultCode field is "MAN". Allowable entires are 5 to 50 in
     * increments of 5000 feet.
     */
    altDiff?: number;

    /**
     * The identifier for this data link message cancellation.
     */
    canxId?: string;

    /**
     * The originator of this data link message cancellation.
     */
    canxOriginator?: string;

    /**
     * Serial number assigned to this data link message cancellation.
     */
    canxSerialNum?: string;

    /**
     * Array of NATO Subject Indicator Codes (SIC) or filing numbers of this data link
     * message or document being cancelled.
     */
    canxSICs?: Array<string>;

    /**
     * Indicates any special actions, restrictions, guidance, or information relating
     * to this data link message cancellation.
     */
    canxSpecialNotation?: string;

    /**
     * Timestamp of the data link message cancellation, in ISO 8601 UTC format with
     * millisecond precision.
     */
    canxTs?: string;

    /**
     * Array of codes that indicate the reasons material is classified.
     */
    classReasons?: Array<string>;

    /**
     * Markings that define the source material or the original classification
     * authority for this data link message.
     */
    classSource?: string;

    /**
     * Number of consecutive remote track reports that must meet the decorrelation
     * criteria before the decorrelation is executed. Required if sysDefaultCode field
     * is "MAN". Allowable entries are integers from 1 to 5.
     */
    consecDecorr?: number;

    /**
     * Maximum difference between the reported course of the remote track and the
     * calculated course of the local track. Required if sysDefaultCode field is "MAN".
     * Allowable entries are 15 to 90 in increments of 15 degrees.
     */
    courseDiff?: number;

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
     * Array of codes that provide justification for exemption from automatic
     * downgrading or declassification.
     */
    decExemptCodes?: Array<string>;

    /**
     * Array of markings that provide the literal guidance or dates for the downgrading
     * or declassification of this data link message.
     */
    decInstDates?: Array<string>;

    /**
     * Distance between the common and remote track is to exceed the applicable
     * correlation window for the two tracks in order to be decorrelated. Required if
     * sysDefaultCode field is "MAN". Allowable entries are 1.0 to 2.0 in increments of
     * 0.1.
     */
    decorrWinMult?: number;

    /**
     * The code for the point of reference from which the coordinates and networks are
     * computed.
     */
    geoDatum?: string;

    /**
     * Call sign which identifies one or more communications facilities, commands,
     * authorities, or activities for Joint Range Extension (JRE) units.
     */
    jreCallSign?: string;

    /**
     * Joint Range Extension (JRE) unit details.
     */
    jreDetails?: string;

    /**
     * Link-16 octal track number assigned as the primary JTIDS unit address.
     */
    jrePriAdd?: number;

    /**
     * Link-16 octal track number assigned as the secondary JTIDS unit address.
     */
    jreSecAdd?: number;

    /**
     * Designator of the unit for Joint Range Extension (JRE).
     */
    jreUnitDes?: string;

    /**
     * Number used for maximum geodetic position quality. Required if sysDefaultCode
     * field is "MAN". Allowable entires are integers from 1 to 15.
     */
    maxGeoPosQual?: number;

    /**
     * Track quality to prevent correlation windows from being unrealistically small.
     * Required if sysDefaultCode field is "MAN". Allowable entries are integers from 8
     * to 15.
     */
    maxTrackQual?: number;

    /**
     * Data link management code word.
     */
    mgmtCode?: string;

    /**
     * Data link management code word meaning.
     */
    mgmtCodeMeaning?: string;

    /**
     * Number used for minimum geodetic position quality. Required if sysDefaultCode
     * field is "MAN". Allowable entries are integers from 1 to 5.
     */
    minGeoPosQual?: number;

    /**
     * Track quality to prevent correlation windows from being unrealistically large.
     * Required if sysDefaultCode field is "MAN". Allowable entries are integers from 3
     * to 7.
     */
    minTrackQual?: number;

    /**
     * The month in which this message originated.
     */
    month?: string;

    /**
     * Collection of contact and identification information for designated multilink
     * coordinator duty assignments. There can be 0 to many DataLinkMultiDuty
     * collections within the datalink service.
     */
    multiDuty?: Array<DatalinkTupleResponseItem.MultiDuty>;

    /**
     * Array of non-link specific data unit designators.
     */
    nonLinkUnitDes?: Array<string>;

    /**
     * Provides an additional caveat further identifying the exercise or modifies the
     * exercise nickname.
     */
    opExInfo?: string;

    /**
     * The secondary nickname of the option or the alternative of the operational plan
     * or order.
     */
    opExInfoAlt?: string;

    /**
     * Collection of information describing the establishment and detailed operation of
     * tactical data links. There can be 0 to many DataLinkOps collections within the
     * datalink service.
     */
    ops?: Array<DatalinkTupleResponseItem.Op>;

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
     * The unit identifier or call sign of the point of contact for this data link
     * message.
     */
    pocCallSign?: string;

    /**
     * WGS84 latitude of the point of contact for this data link message, in degrees.
     * -90 to 90 degrees (negative values south of equator).
     */
    pocLat?: number;

    /**
     * The location name of the point of contact for this data link message.
     */
    pocLocName?: string;

    /**
     * WGS84 longitude of the point of contact for this data link message, in degrees.
     * -180 to 180 degrees (negative values west of Prime Meridian).
     */
    pocLon?: number;

    /**
     * The name of the point of contact for this data link message.
     */
    pocName?: string;

    /**
     * Array of telephone numbers, radio frequency values, or email addresses of the
     * point of contact for this data link message.
     */
    pocNums?: Array<string>;

    /**
     * The rank or position of the point of contact for this data link message in a
     * military or civilian organization.
     */
    pocRank?: string;

    /**
     * The qualifier which caveats the message status such as AMP (Amplification), CHG
     * (Change), etc.
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
     * Collection of reference information. There can be 0 to many DataLinkReferences
     * collections within the datalink service.
     */
    references?: Array<DatalinkTupleResponseItem.Reference>;

    /**
     * Collection that identifies points of reference used in the establishment of the
     * data links. There can be 1 to many DataLinkRefPoints collections within the
     * datalink service.
     */
    refPoints?: Array<DatalinkTupleResponseItem.RefPoint>;

    /**
     * Collection of remarks associated with this data link message.
     */
    remarks?: Array<DatalinkTupleResponseItem.Remark>;

    /**
     * Track quality to enter if too many duals involving low track quality tracks are
     * occurring. Required if sysDefaultCode field is "MAN". Allowable entries are
     * integers from 2 to 6.
     */
    resTrackQual?: number;

    /**
     * The unique message identifier assigned by the originator.
     */
    serialNum?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Collection of special track numbers used on the data links. There can be 0 to
     * many DataLinkSpecTracks collections within the datalink service.
     */
    specTracks?: Array<DatalinkTupleResponseItem.SpecTrack>;

    /**
     * Maximum percentage the faster track speed may differ from the slower track
     * speed. Required if sysDefaultCode field is "MAN". Allowable entries are 10 to
     * 100 in increments of 10.
     */
    speedDiff?: number;

    /**
     * The end of the effective time period of this data link message, in ISO 8601 UTC
     * format with millisecond precision. This may be a relative stop time if used with
     * stopTimeMod.
     */
    stopTime?: string;

    /**
     * A qualifier for the end of the effective time period of this data link message,
     * such as AFTER, ASOF, NLT, etc. Used with field stopTime to indicate a relative
     * time.
     */
    stopTimeMod?: string;

    /**
     * Indicates the data terminal settings the system defaults to, either automatic
     * correlation/decorrelation (AUTO) or manual (MAN).
     */
    sysDefaultCode?: string;

    /**
     * Array of Link-16 octal track numbers used as the lower limit of a track block.
     */
    trackNumBlockLLs?: Array<number>;

    /**
     * Array of defined ranges of Link-11/11B track numbers assigned to a participating
     * unit or reporting unit.
     */
    trackNumBlocks?: Array<string>;

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
     * Collection of information regarding the function, frequency, and priority of
     * interface control and coordination nets for this data link message. There can be
     * 1 to many DataLinkVoiceCoord collections within the datalink service.
     */
    voiceCoord?: Array<DatalinkTupleResponseItem.VoiceCoord>;

    /**
     * Number added to the basic window calculated from track qualities to ensure that
     * windows still allow valid correlations. Required if sysDefaultCode field is
     * "MAN". Allowable entries are 0.0 to 2.0 in increments of 0.25.
     */
    winSizeMin?: number;

    /**
     * The correlation window size multiplier to stretch or reduce the window size.
     * Required if sysDefaultCode field is "MAN". Allowable entries are 0.5 to 3.0 in
     * increments of 0.1.
     */
    winSizeMult?: number;
  }

  export namespace DatalinkTupleResponseItem {
    /**
     * Collection of contact and identification information for designated multilink
     * coordinator duty assignments. There can be 0 to many DataLinkMultiDuty
     * collections within the datalink service.
     */
    export interface MultiDuty {
      /**
       * Specific duties assigned for multilink coordination (e.g. ICO, RICO, SICO).
       */
      duty?: string;

      /**
       * Array of telephone numbers or the frequency values for radio transmission of the
       * person to be contacted for multilink coordination.
       */
      dutyTeleFreqNums?: Array<string>;

      /**
       * Collection of information regarding the function, frequency, and priority of
       * interface control and coordination nets for multilink coordination. There can be
       * 0 to many DataLinkMultiVoiceCoord collections within a DataLinkMultiDuty
       * collection.
       */
      multiDutyVoiceCoord?: Array<MultiDuty.MultiDutyVoiceCoord>;

      /**
       * The name of the person to be contacted for multilink coordination.
       */
      name?: string;

      /**
       * The rank or position of the person to be contacted for multilink coordination.
       */
      rank?: string;

      /**
       * Designated force of unit specified by ship name, unit call sign, or unit
       * designator.
       */
      unitDes?: string;
    }

    export namespace MultiDuty {
      /**
       * Collection of information regarding the function, frequency, and priority of
       * interface control and coordination nets for multilink coordination. There can be
       * 0 to many DataLinkMultiVoiceCoord collections within a DataLinkMultiDuty
       * collection.
       */
      export interface MultiDutyVoiceCoord {
        /**
         * Priority of a communication circuit, channel or frequency for multilink
         * coordination (e.g. P - Primary, M - Monitor).
         */
        multiCommPri?: string;

        /**
         * Designator used in nonsecure communications to refer to a radio frequency for
         * multilink coordination.
         */
        multiFreqDes?: string;

        /**
         * Array of telephone numbers or contact frequencies used for interface control for
         * multilink coordination.
         */
        multiTeleFreqNums?: Array<string>;

        /**
         * Designator assigned to a voice interface control and coordination net for
         * multilink coordination (e.g. ADCCN, DCN, VPN, etc.).
         */
        multiVoiceNetDes?: string;
      }
    }

    /**
     * Collection of information describing the establishment and detailed operation of
     * tactical data links. There can be 0 to many DataLinkOps collections within the
     * datalink service.
     */
    export interface Op {
      /**
       * Detailed characteristics of the data link.
       */
      linkDetails?: string;

      /**
       * Name of the data link.
       */
      linkName?: string;

      /**
       * The start of the effective time period of the data link, in ISO 8601 UTC format
       * with millisecond precision.
       */
      linkStartTime?: string;

      /**
       * The end of the effective time period of the data link, in ISO 8601 UTC format
       * with millisecond precision.
       */
      linkStopTime?: string;

      /**
       * A qualifier for the end of the effective time period of this data link, such as
       * AFTER, ASOF, NLT, etc. Used with field linkStopTimeMod to indicate a relative
       * time.
       */
      linkStopTimeMod?: string;
    }

    /**
     * Collection of reference information. There can be 0 to many DataLinkReferences
     * collections within the datalink service.
     */
    export interface Reference {
      /**
       * The originator of this reference.
       */
      refOriginator?: string;

      /**
       * Specifies an alphabetic serial identifier a reference pertaining to the data
       * link message.
       */
      refSerialId?: string;

      /**
       * Serial number assigned to this reference.
       */
      refSerialNum?: string;

      /**
       * Array of NATO Subject Indicator Codes (SIC) or filing numbers of the document
       * being referenced.
       */
      refSICs?: Array<string>;

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
       * Specifies the type of document referenced.
       */
      refType?: string;
    }

    /**
     * Collection that identifies points of reference used in the establishment of the
     * data links. There can be 1 to many DataLinkRefPoints collections within the
     * datalink service.
     */
    export interface RefPoint {
      /**
       * Indicates when a particular event or nickname becomes effective or the old event
       * or nickname is deleted, in ISO 8601 UTC format with millisecond precision.
       */
      effEventTime?: string;

      /**
       * Identifier to designate a reference point.
       */
      refDes?: string;

      /**
       * WGS84 latitude of the reference point for this data link message, in degrees.
       * -90 to 90 degrees (negative values south of equator).
       */
      refLat?: number;

      /**
       * The location name of the point of reference for this data link message.
       */
      refLocName?: string;

      /**
       * WGS84 longitude of the reference point for this data link message, in degrees.
       * -90 to 90 degrees (negative values south of equator).
       */
      refLon?: number;

      /**
       * Type of data link reference point or grid origin.
       */
      refPointType?: string;
    }

    /**
     * Collection of remarks associated with this data link message.
     */
    export interface Remark {
      /**
       * Text of the remark.
       */
      text?: string;

      /**
       * Indicates the subject matter of the remark.
       */
      type?: string;
    }

    /**
     * Collection of special track numbers used on the data links. There can be 0 to
     * many DataLinkSpecTracks collections within the datalink service.
     */
    export interface SpecTrack {
      /**
       * The special track number used on the data link entered as an octal reference
       * number. Used to identify a particular type of platform (e.g. MPA, KRESTA) or
       * platform name (e.g. TROMP, MOUNT WHITNEY) which is not included in assigned
       * track blocks.
       */
      specTrackNum?: string;

      /**
       * Description of the special track number.
       */
      specTrackNumDesc?: string;
    }

    /**
     * Collection of information regarding the function, frequency, and priority of
     * interface control and coordination nets for this data link message. There can be
     * 1 to many DataLinkVoiceCoord collections within the datalink service.
     */
    export interface VoiceCoord {
      /**
       * Priority of a communication circuit, channel or frequency for this data link
       * message such as P (Primary), M (Monitor), etc.
       */
      commPri?: string;

      /**
       * Designator used in nonsecure communications to refer to a radio frequency for
       * this data link message.
       */
      freqDes?: string;

      /**
       * Array of telephone numbers or contact frequencies used for interface control for
       * this data link message.
       */
      teleFreqNums?: Array<string>;

      /**
       * Designator assigned to a voice interface control and coordination net for this
       * data link message (e.g. ADCCN, DCN, VPN, etc.).
       */
      voiceNetDes?: string;
    }
  }
}

export interface DatalinkCreateParams {
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
   * The start of the effective time period of this data link message, in ISO 8601
   * UTC format with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Array of instructions for acknowledging and the force or units required to
   * acknowledge the data link message being sent.
   */
  ackInstUnits?: Array<string>;

  /**
   * Flag Indicating if formal acknowledgement is required for the particular data
   * link message being sent.
   */
  ackReq?: boolean;

  /**
   * Maximum altitude difference between two air tracks, in thousands of feet.
   * Required if sysDefaultCode field is "MAN". Allowable entires are 5 to 50 in
   * increments of 5000 feet.
   */
  altDiff?: number;

  /**
   * The identifier for this data link message cancellation.
   */
  canxId?: string;

  /**
   * The originator of this data link message cancellation.
   */
  canxOriginator?: string;

  /**
   * Serial number assigned to this data link message cancellation.
   */
  canxSerialNum?: string;

  /**
   * Array of NATO Subject Indicator Codes (SIC) or filing numbers of this data link
   * message or document being cancelled.
   */
  canxSICs?: Array<string>;

  /**
   * Indicates any special actions, restrictions, guidance, or information relating
   * to this data link message cancellation.
   */
  canxSpecialNotation?: string;

  /**
   * Timestamp of the data link message cancellation, in ISO 8601 UTC format with
   * millisecond precision.
   */
  canxTs?: string;

  /**
   * Array of codes that indicate the reasons material is classified.
   */
  classReasons?: Array<string>;

  /**
   * Markings that define the source material or the original classification
   * authority for this data link message.
   */
  classSource?: string;

  /**
   * Number of consecutive remote track reports that must meet the decorrelation
   * criteria before the decorrelation is executed. Required if sysDefaultCode field
   * is "MAN". Allowable entries are integers from 1 to 5.
   */
  consecDecorr?: number;

  /**
   * Maximum difference between the reported course of the remote track and the
   * calculated course of the local track. Required if sysDefaultCode field is "MAN".
   * Allowable entries are 15 to 90 in increments of 15 degrees.
   */
  courseDiff?: number;

  /**
   * Array of codes that provide justification for exemption from automatic
   * downgrading or declassification.
   */
  decExemptCodes?: Array<string>;

  /**
   * Array of markings that provide the literal guidance or dates for the downgrading
   * or declassification of this data link message.
   */
  decInstDates?: Array<string>;

  /**
   * Distance between the common and remote track is to exceed the applicable
   * correlation window for the two tracks in order to be decorrelated. Required if
   * sysDefaultCode field is "MAN". Allowable entries are 1.0 to 2.0 in increments of
   * 0.1.
   */
  decorrWinMult?: number;

  /**
   * The code for the point of reference from which the coordinates and networks are
   * computed.
   */
  geoDatum?: string;

  /**
   * Call sign which identifies one or more communications facilities, commands,
   * authorities, or activities for Joint Range Extension (JRE) units.
   */
  jreCallSign?: string;

  /**
   * Joint Range Extension (JRE) unit details.
   */
  jreDetails?: string;

  /**
   * Link-16 octal track number assigned as the primary JTIDS unit address.
   */
  jrePriAdd?: number;

  /**
   * Link-16 octal track number assigned as the secondary JTIDS unit address.
   */
  jreSecAdd?: number;

  /**
   * Designator of the unit for Joint Range Extension (JRE).
   */
  jreUnitDes?: string;

  /**
   * Number used for maximum geodetic position quality. Required if sysDefaultCode
   * field is "MAN". Allowable entires are integers from 1 to 15.
   */
  maxGeoPosQual?: number;

  /**
   * Track quality to prevent correlation windows from being unrealistically small.
   * Required if sysDefaultCode field is "MAN". Allowable entries are integers from 8
   * to 15.
   */
  maxTrackQual?: number;

  /**
   * Data link management code word.
   */
  mgmtCode?: string;

  /**
   * Data link management code word meaning.
   */
  mgmtCodeMeaning?: string;

  /**
   * Number used for minimum geodetic position quality. Required if sysDefaultCode
   * field is "MAN". Allowable entries are integers from 1 to 5.
   */
  minGeoPosQual?: number;

  /**
   * Track quality to prevent correlation windows from being unrealistically large.
   * Required if sysDefaultCode field is "MAN". Allowable entries are integers from 3
   * to 7.
   */
  minTrackQual?: number;

  /**
   * The month in which this message originated.
   */
  month?: string;

  /**
   * Collection of contact and identification information for designated multilink
   * coordinator duty assignments. There can be 0 to many DataLinkMultiDuty
   * collections within the datalink service.
   */
  multiDuty?: Array<DatalinkCreateParams.MultiDuty>;

  /**
   * Array of non-link specific data unit designators.
   */
  nonLinkUnitDes?: Array<string>;

  /**
   * Provides an additional caveat further identifying the exercise or modifies the
   * exercise nickname.
   */
  opExInfo?: string;

  /**
   * The secondary nickname of the option or the alternative of the operational plan
   * or order.
   */
  opExInfoAlt?: string;

  /**
   * Collection of information describing the establishment and detailed operation of
   * tactical data links. There can be 0 to many DataLinkOps collections within the
   * datalink service.
   */
  ops?: Array<DatalinkCreateParams.Op>;

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
   * The unit identifier or call sign of the point of contact for this data link
   * message.
   */
  pocCallSign?: string;

  /**
   * WGS84 latitude of the point of contact for this data link message, in degrees.
   * -90 to 90 degrees (negative values south of equator).
   */
  pocLat?: number;

  /**
   * The location name of the point of contact for this data link message.
   */
  pocLocName?: string;

  /**
   * WGS84 longitude of the point of contact for this data link message, in degrees.
   * -180 to 180 degrees (negative values west of Prime Meridian).
   */
  pocLon?: number;

  /**
   * The name of the point of contact for this data link message.
   */
  pocName?: string;

  /**
   * Array of telephone numbers, radio frequency values, or email addresses of the
   * point of contact for this data link message.
   */
  pocNums?: Array<string>;

  /**
   * The rank or position of the point of contact for this data link message in a
   * military or civilian organization.
   */
  pocRank?: string;

  /**
   * The qualifier which caveats the message status such as AMP (Amplification), CHG
   * (Change), etc.
   */
  qualifier?: string;

  /**
   * The serial number associated with the message qualifier.
   */
  qualSN?: number;

  /**
   * Collection of reference information. There can be 0 to many DataLinkReferences
   * collections within the datalink service.
   */
  references?: Array<DatalinkCreateParams.Reference>;

  /**
   * Collection that identifies points of reference used in the establishment of the
   * data links. There can be 1 to many DataLinkRefPoints collections within the
   * datalink service.
   */
  refPoints?: Array<DatalinkCreateParams.RefPoint>;

  /**
   * Collection of remarks associated with this data link message.
   */
  remarks?: Array<DatalinkCreateParams.Remark>;

  /**
   * Track quality to enter if too many duals involving low track quality tracks are
   * occurring. Required if sysDefaultCode field is "MAN". Allowable entries are
   * integers from 2 to 6.
   */
  resTrackQual?: number;

  /**
   * The unique message identifier assigned by the originator.
   */
  serialNum?: string;

  /**
   * Collection of special track numbers used on the data links. There can be 0 to
   * many DataLinkSpecTracks collections within the datalink service.
   */
  specTracks?: Array<DatalinkCreateParams.SpecTrack>;

  /**
   * Maximum percentage the faster track speed may differ from the slower track
   * speed. Required if sysDefaultCode field is "MAN". Allowable entries are 10 to
   * 100 in increments of 10.
   */
  speedDiff?: number;

  /**
   * The end of the effective time period of this data link message, in ISO 8601 UTC
   * format with millisecond precision. This may be a relative stop time if used with
   * stopTimeMod.
   */
  stopTime?: string;

  /**
   * A qualifier for the end of the effective time period of this data link message,
   * such as AFTER, ASOF, NLT, etc. Used with field stopTime to indicate a relative
   * time.
   */
  stopTimeMod?: string;

  /**
   * Indicates the data terminal settings the system defaults to, either automatic
   * correlation/decorrelation (AUTO) or manual (MAN).
   */
  sysDefaultCode?: string;

  /**
   * Array of Link-16 octal track numbers used as the lower limit of a track block.
   */
  trackNumBlockLLs?: Array<number>;

  /**
   * Array of defined ranges of Link-11/11B track numbers assigned to a participating
   * unit or reporting unit.
   */
  trackNumBlocks?: Array<string>;

  /**
   * Collection of information regarding the function, frequency, and priority of
   * interface control and coordination nets for this data link message. There can be
   * 1 to many DataLinkVoiceCoord collections within the datalink service.
   */
  voiceCoord?: Array<DatalinkCreateParams.VoiceCoord>;

  /**
   * Number added to the basic window calculated from track qualities to ensure that
   * windows still allow valid correlations. Required if sysDefaultCode field is
   * "MAN". Allowable entries are 0.0 to 2.0 in increments of 0.25.
   */
  winSizeMin?: number;

  /**
   * The correlation window size multiplier to stretch or reduce the window size.
   * Required if sysDefaultCode field is "MAN". Allowable entries are 0.5 to 3.0 in
   * increments of 0.1.
   */
  winSizeMult?: number;
}

export namespace DatalinkCreateParams {
  /**
   * Collection of contact and identification information for designated multilink
   * coordinator duty assignments. There can be 0 to many DataLinkMultiDuty
   * collections within the datalink service.
   */
  export interface MultiDuty {
    /**
     * Specific duties assigned for multilink coordination (e.g. ICO, RICO, SICO).
     */
    duty?: string;

    /**
     * Array of telephone numbers or the frequency values for radio transmission of the
     * person to be contacted for multilink coordination.
     */
    dutyTeleFreqNums?: Array<string>;

    /**
     * Collection of information regarding the function, frequency, and priority of
     * interface control and coordination nets for multilink coordination. There can be
     * 0 to many DataLinkMultiVoiceCoord collections within a DataLinkMultiDuty
     * collection.
     */
    multiDutyVoiceCoord?: Array<MultiDuty.MultiDutyVoiceCoord>;

    /**
     * The name of the person to be contacted for multilink coordination.
     */
    name?: string;

    /**
     * The rank or position of the person to be contacted for multilink coordination.
     */
    rank?: string;

    /**
     * Designated force of unit specified by ship name, unit call sign, or unit
     * designator.
     */
    unitDes?: string;
  }

  export namespace MultiDuty {
    /**
     * Collection of information regarding the function, frequency, and priority of
     * interface control and coordination nets for multilink coordination. There can be
     * 0 to many DataLinkMultiVoiceCoord collections within a DataLinkMultiDuty
     * collection.
     */
    export interface MultiDutyVoiceCoord {
      /**
       * Priority of a communication circuit, channel or frequency for multilink
       * coordination (e.g. P - Primary, M - Monitor).
       */
      multiCommPri?: string;

      /**
       * Designator used in nonsecure communications to refer to a radio frequency for
       * multilink coordination.
       */
      multiFreqDes?: string;

      /**
       * Array of telephone numbers or contact frequencies used for interface control for
       * multilink coordination.
       */
      multiTeleFreqNums?: Array<string>;

      /**
       * Designator assigned to a voice interface control and coordination net for
       * multilink coordination (e.g. ADCCN, DCN, VPN, etc.).
       */
      multiVoiceNetDes?: string;
    }
  }

  /**
   * Collection of information describing the establishment and detailed operation of
   * tactical data links. There can be 0 to many DataLinkOps collections within the
   * datalink service.
   */
  export interface Op {
    /**
     * Detailed characteristics of the data link.
     */
    linkDetails?: string;

    /**
     * Name of the data link.
     */
    linkName?: string;

    /**
     * The start of the effective time period of the data link, in ISO 8601 UTC format
     * with millisecond precision.
     */
    linkStartTime?: string;

    /**
     * The end of the effective time period of the data link, in ISO 8601 UTC format
     * with millisecond precision.
     */
    linkStopTime?: string;

    /**
     * A qualifier for the end of the effective time period of this data link, such as
     * AFTER, ASOF, NLT, etc. Used with field linkStopTimeMod to indicate a relative
     * time.
     */
    linkStopTimeMod?: string;
  }

  /**
   * Collection of reference information. There can be 0 to many DataLinkReferences
   * collections within the datalink service.
   */
  export interface Reference {
    /**
     * The originator of this reference.
     */
    refOriginator?: string;

    /**
     * Specifies an alphabetic serial identifier a reference pertaining to the data
     * link message.
     */
    refSerialId?: string;

    /**
     * Serial number assigned to this reference.
     */
    refSerialNum?: string;

    /**
     * Array of NATO Subject Indicator Codes (SIC) or filing numbers of the document
     * being referenced.
     */
    refSICs?: Array<string>;

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
     * Specifies the type of document referenced.
     */
    refType?: string;
  }

  /**
   * Collection that identifies points of reference used in the establishment of the
   * data links. There can be 1 to many DataLinkRefPoints collections within the
   * datalink service.
   */
  export interface RefPoint {
    /**
     * Indicates when a particular event or nickname becomes effective or the old event
     * or nickname is deleted, in ISO 8601 UTC format with millisecond precision.
     */
    effEventTime?: string;

    /**
     * Identifier to designate a reference point.
     */
    refDes?: string;

    /**
     * WGS84 latitude of the reference point for this data link message, in degrees.
     * -90 to 90 degrees (negative values south of equator).
     */
    refLat?: number;

    /**
     * The location name of the point of reference for this data link message.
     */
    refLocName?: string;

    /**
     * WGS84 longitude of the reference point for this data link message, in degrees.
     * -90 to 90 degrees (negative values south of equator).
     */
    refLon?: number;

    /**
     * Type of data link reference point or grid origin.
     */
    refPointType?: string;
  }

  /**
   * Collection of remarks associated with this data link message.
   */
  export interface Remark {
    /**
     * Text of the remark.
     */
    text?: string;

    /**
     * Indicates the subject matter of the remark.
     */
    type?: string;
  }

  /**
   * Collection of special track numbers used on the data links. There can be 0 to
   * many DataLinkSpecTracks collections within the datalink service.
   */
  export interface SpecTrack {
    /**
     * The special track number used on the data link entered as an octal reference
     * number. Used to identify a particular type of platform (e.g. MPA, KRESTA) or
     * platform name (e.g. TROMP, MOUNT WHITNEY) which is not included in assigned
     * track blocks.
     */
    specTrackNum?: string;

    /**
     * Description of the special track number.
     */
    specTrackNumDesc?: string;
  }

  /**
   * Collection of information regarding the function, frequency, and priority of
   * interface control and coordination nets for this data link message. There can be
   * 1 to many DataLinkVoiceCoord collections within the datalink service.
   */
  export interface VoiceCoord {
    /**
     * Priority of a communication circuit, channel or frequency for this data link
     * message such as P (Primary), M (Monitor), etc.
     */
    commPri?: string;

    /**
     * Designator used in nonsecure communications to refer to a radio frequency for
     * this data link message.
     */
    freqDes?: string;

    /**
     * Array of telephone numbers or contact frequencies used for interface control for
     * this data link message.
     */
    teleFreqNums?: Array<string>;

    /**
     * Designator assigned to a voice interface control and coordination net for this
     * data link message (e.g. ADCCN, DCN, VPN, etc.).
     */
    voiceNetDes?: string;
  }
}

export interface DatalinkListParams extends OffsetPageParams {
  /**
   * The start of the effective time period of this data link message, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;
}

export interface DatalinkCountParams {
  /**
   * The start of the effective time period of this data link message, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface DatalinkTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The start of the effective time period of this data link message, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface DatalinkUnvalidatedPublishParams {
  body: Array<DatalinkIngest>;
}

export declare namespace Datalink {
  export {
    type DatalinkIngest as DatalinkIngest,
    type DatalinkListResponse as DatalinkListResponse,
    type DatalinkCountResponse as DatalinkCountResponse,
    type DatalinkQueryhelpResponse as DatalinkQueryhelpResponse,
    type DatalinkTupleResponse as DatalinkTupleResponse,
    type DatalinkListResponsesOffsetPage as DatalinkListResponsesOffsetPage,
    type DatalinkCreateParams as DatalinkCreateParams,
    type DatalinkListParams as DatalinkListParams,
    type DatalinkCountParams as DatalinkCountParams,
    type DatalinkTupleParams as DatalinkTupleParams,
    type DatalinkUnvalidatedPublishParams as DatalinkUnvalidatedPublishParams,
  };
}
