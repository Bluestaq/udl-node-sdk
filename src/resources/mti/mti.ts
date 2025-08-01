// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  MtiFull,
  MtiFullsOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Mti extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: MtiListParams,
    options?: RequestOptions,
  ): PagePromise<MtiListResponsesOffsetPage, MtiListResponse> {
    return this._client.getAPIList('/udl/mti', OffsetPage<MtiListResponse>, { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: MtiCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/mti/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * Moving Target Indicator (MTI) records as a POST body and ingest into the
   * database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   */
  createBulk(params: MtiCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/mti/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<MtiQueryhelpResponse> {
    return this._client.get('/udl/mti/queryhelp', options);
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
  tuple(query: MtiTupleParams, options?: RequestOptions): APIPromise<MtiTupleResponse> {
    return this._client.get('/udl/mti/tuple', { query, ...options });
  }

  /**
   * Service operation to take a list of Moving Target Indicator (MTI) formatted data
   * as a POST body and ingest into the database. This operation is intended to be
   * used for automated feeds into UDL. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   */
  unvalidatedPublish(params: MtiUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-mti', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type MtiListResponsesOffsetPage = OffsetPage<MtiListResponse>;

/**
 * Information on the mission and flight plans, the type and configuration of the
 * platform, and the reference time.
 */
export interface MtiListResponse {
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
   * Time the row was created in the database, auto-populated by the system.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * A platform-assigned number identifying the specific request or task that
   * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
   * unique within a mission.
   */
  dwells?: Array<MtiListResponse.Dwell>;

  /**
   * A platform-assigned number identifying the specific request or task that
   * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
   * unique within a mission.
   */
  freeTexts?: Array<MtiListResponse.FreeText>;

  /**
   * A platform-assigned number identifying the specific request or task that
   * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
   * unique within a mission.
   */
  hrrs?: Array<MtiListResponse.Hrr>;

  /**
   * A platform-assigned number identifying the specific request or task that
   * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
   * unique within a mission.
   */
  jobDefs?: Array<MtiListResponse.JobDef>;

  /**
   * A platform-assigned number identifying the specific request or task that
   * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
   * unique within a mission.
   */
  jobRequests?: Array<MtiListResponse.JobRequest>;

  /**
   * A platform-assigned number identifying the specific request or task that
   * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
   * unique within a mission.
   */
  missions?: Array<MtiListResponse.Mission>;

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
   * A platform-assigned number identifying the specific request or task that
   * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
   * unique within a mission.
   */
  p10?: number;

  /**
   * Nationality of the platform providing the data.
   */
  p3?: string;

  /**
   * Control / handling marking.
   */
  p6?: string;

  /**
   * Data record exercise indicator.
   */
  p7?: string;

  /**
   * ID of the platform providing the data (tail number for air platform, name and
   * numerical designator for space-based platforms).
   */
  p8?: string;

  /**
   * Integer field, assigned by the platform, that uniquely identifies the mission
   * for the platform.
   */
  p9?: number;

  /**
   * A platform-assigned number identifying the specific request or task that
   * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
   * unique within a mission.
   */
  platformLocs?: Array<MtiListResponse.PlatformLoc>;
}

export namespace MtiListResponse {
  export interface Dwell {
    /**
     * Factor which modifies the value of the reported target latitude (Delta Latitude,
     * field D32.4).
     */
    d10?: number;

    /**
     * Factor which modifies the value of the reported target longitude (Delta
     * Longitude, field D32.5).
     */
    d11?: number;

    /**
     * Standard deviation in the estimated horizontal sensor location at the time of
     * the dwell, measured along the sensor track direction (field D15), in
     * centimeters.
     */
    d12?: number;

    /**
     * Standard deviation in the estimated horizontal sensor location at the time of
     * the dwell, measured orthogonal to the sensor track direction (field D15), in
     * centimeters.
     */
    d13?: number;

    /**
     * Standard deviation of the sensor altitude estimate (field D9), in centimeters.
     */
    d14?: number;

    /**
     * Ground track of the sensor at the time of the dwell, as the angle in degrees
     * (clockwise) from True North.
     */
    d15?: number;

    /**
     * Ground speed of the sensor at the time of the dwell, in millimeters per second.
     */
    d16?: number;

    /**
     * Velocity of the sensor in the vertical direction, in decimeters per second.
     */
    d17?: number;

    /**
     * Standard deviation of the estimate of the sensor track, in degrees.
     */
    d18?: number;

    /**
     * Standard deviation of estimate of the sensor speed, in millimeters per second.
     */
    d19?: number;

    /**
     * Sequential count of a revisit of the bounding area in the last sent Job
     * Definition Segment, where a Revisit Index of '0' indicates the first revisit.
     */
    d2?: number;

    /**
     * Standard deviation of estimate of the sensor vertical velocity, expressed in
     * centimeters per second.
     */
    d20?: number;

    /**
     * Heading of the platform at the time of the dwell, as the angle in degrees
     * (clockwise) from True North to the roll axis of the platform.
     */
    d21?: number;

    /**
     * Pitch angle of the platform at the time of the dwell, in degrees.
     */
    d22?: number;

    /**
     * Roll angle of the platform at the time of the dwell, in degrees.
     */
    d23?: number;

    /**
     * The North-South position of the center of the dwell area, expressed as degrees
     * North (positive) or South (negative) of the Equator.
     */
    d24?: number;

    /**
     * The East-West position of the center of the dwell area, expressed as degrees
     * East (positive, 0 to 180) or West (negative, 0 to -180) of the Prime Meridian.
     */
    d25?: number;

    /**
     * Distance on the earth surface, expressed in kilometers, from the near edge to
     * the center of the dwell area.
     */
    d26?: number;

    /**
     * For dwell based radars, one-half of the 3-dB beamwidth. For non-dwell based
     * radars, the angle between the beginning of the dwell to the center of the dwell.
     * Measured in degrees.
     */
    d27?: number;

    /**
     * Rotation of the sensor broadside face about the local vertical axis of the
     * platform, in degrees.
     */
    d28?: number;

    /**
     * Rotation angle of the sensor about the transverse axis of the sensor broadside,
     * in degrees.
     */
    d29?: number;

    /**
     * Temporally sequential count of a dwell within the revisit of a particular
     * bounding area for a given job ID.
     */
    d3?: number;

    /**
     * Rotation angle of the sensor about the transverse axis of the sensor broadside,
     * in degrees.
     */
    d30?: number;

    /**
     * Minimum velocity component, along the line of sight, which can be detected by
     * the sensor, in decimeters per second.
     */
    d31?: number;

    /**
     * Minimum velocity component, along the line of sight, which can be detected by
     * the sensor, in decimeters per second.
     */
    d32?: Array<Dwell.D32>;

    /**
     * Flag indicating the last dwell of the revisit.
     */
    d4?: boolean;

    /**
     * Count of the total number of targets reported during this dwell and sent in this
     * Dwell Segment.
     */
    d5?: number;

    /**
     * Elapsed time, expressed in milliseconds, from midnight at the beginning of the
     * day specified in the Reference Time fields (missionRefTime) of the Mission
     * Segment.
     */
    d6?: number;

    /**
     * North-South position of the sensor at the temporal center of the dwell, in
     * degrees.
     */
    d7?: number;

    /**
     * The East-West position of the sensor at the temporal center of the dwell, in
     * degrees East (positive, 0 to 180) or West (negative, 0 to -180) of the Prime
     * Meridian.
     */
    d8?: number;

    /**
     * The altitude of the sensor at temporal center of the dwell, above the WGS 84
     * ellipsoid, expressed in centimeters.
     */
    d9?: number;

    /**
     * Dwell timestamp in ISO8601 UTC format.
     */
    dwellts?: string;
  }

  export namespace Dwell {
    /**
     * A grouping of zero or more target reports for which the sensor provides a single
     * time, sensor position, reference position on the ground with simple estimates
     * for the observed area at the reported time, and other pertinent data.
     */
    export interface D32 {
      /**
       * Sequential count of this MTI report within the dwell.
       */
      d32_1?: number;

      /**
       * The classification of the target (i.e. vehicle, aircraft, …).
       */
      d32_10?: string;

      /**
       * Estimated probability that the target classification field is correctly
       * classified.
       */
      d32_11?: number;

      /**
       * Standard deviation of the estimated slant range of the reported detection, in
       * centimeters.
       */
      d32_12?: number;

      /**
       * Standard deviation of the position estimate, in the cross-range direction, of
       * the reported detection, in decimeters.
       */
      d32_13?: number;

      /**
       * Standard deviation of the estimated geodetic height, in meters.
       */
      d32_14?: number;

      /**
       * Standard deviation of the measured line-of-sight velocity component, in
       * centimeters per second.
       */
      d32_15?: number;

      /**
       * The Truth Tag- Application is the Application Field truncated to 8 bits, from
       * the Entity State Protocol Data Unit (PDU) used to generate the MTI Target.
       */
      d32_16?: number;

      /**
       * The Truth Tag - Entity is the Entity Field from the Entity State PDU used to
       * generate the MTI Target.
       */
      d32_17?: number;

      /**
       * Estimated radar cross section of the target return, in half-decibels.
       */
      d32_18?: number;

      /**
       * The North-South position of the reported detection, expressed as degrees North
       * (positive) or South (negative) of the Equator.
       */
      d32_2?: number;

      /**
       * The East-West position of the reported detection, expressed as degrees East
       * (positive) from the Prime Meridian.
       */
      d32_3?: number;

      /**
       * The North-South position of the reported detection, expressed as degrees North
       * (positive) or South (negative) from the Dwell Area Center Latitude.
       */
      d32_4?: number;

      /**
       * The East-West position of the reported detection, expressed as degrees East
       * (positive, 0 to 180) or West (negative, 0 to -180) of the Prime Meridian from
       * the Dwell Area Center Longitude.
       */
      d32_5?: number;

      /**
       * Height of the reported detection, referenced to its position above the WGS 84
       * ellipsoid, in meters.
       */
      d32_6?: number;

      /**
       * The component of velocity for the reported detection, expressed in centimeters
       * per second, corrected for platform motion, along the line of sight between the
       * sensor and the reported detection, where the positive direction is away from the
       * sensor.
       */
      d32_7?: number;

      /**
       * The target wrap velocity permits trackers to un-wrap velocities for targets with
       * line-of-sight components large enough to exceed the first velocity period.
       * Expressed in centimeters/sec.
       */
      d32_8?: number;

      /**
       * Estimated signal-to-noise ratio (SNR) of the target return, in decibels.
       */
      d32_9?: number;
    }
  }

  export interface FreeText {
    /**
     * The originator of the Free Text message.
     */
    f1?: string;

    /**
     * The recipient for which the Free Text message is intended.
     */
    f2?: string;

    /**
     * Free text data message.
     */
    f3?: string;
  }

  export interface Hrr {
    /**
     * Detection threshold used to isolate significant target scatterer pixels,
     * expressed as power relative to clutter mean in negative quarter-decibels.
     */
    h10?: number;

    /**
     * 3dB range impulse response of the radar, expressed in centimeters.
     */
    h11?: number;

    /**
     * Slant Range pixel spacing after over sampling, expressed in centimeters.
     */
    h12?: number;

    /**
     * 3dB Doppler resolution of the radar, expressed in Hertz.
     */
    h13?: number;

    /**
     * Doppler pixel spacing after over sampling, expressed in Hertz.
     */
    h14?: number;

    /**
     * Center Frequency of the radar in GHz.
     */
    h15?: number;

    /**
     * Enumeration table denoting the compression technique used.
     */
    h16?: string;

    /**
     * Enumeration table indicating the spectral weighting used in the range
     * compression process.
     */
    h17?: string;

    /**
     * Enumeration table indicating the spectral weighting used in the cross-range or
     * Doppler compression process.
     */
    h18?: string;

    /**
     * Initial power of the peak scatterer, expressed in dB.
     */
    h19?: number;

    /**
     * Sequential count of a revisit of the bounding area for a given job ID.
     */
    h2?: number;

    /**
     * RCS of the peak scatterer, expressed in half-decibels (dB/2).
     */
    h20?: number;

    /**
     * When the RDM does not correlate to a single MTI report index or when the center
     * range bin does not correlate to the center of the dwell; provide the range
     * sample offset in meters from Dwell Center (positive is away from the sensor) of
     * the first scatterer record.
     */
    h21?: number;

    /**
     * When the RDM does not correlate to a single MTI report index or the center
     * doppler bin does not correlate to the doppler centroid of the dwell; Doppler
     * sample value in Hz of the first scatterer record.
     */
    h22?: number;

    /**
     * Enumeration field which designates the type of data being delivered.
     */
    h23?: string;

    /**
     * Flag field to indicate the additional signal processing techniques applied to
     * the data.
     */
    h24?: string;

    /**
     * Number of pixels in the range dimension of the chip.
     */
    h27?: number;

    /**
     * Distance from Range Bin to closest edge in the entire chip, expressed in
     * centimeters.
     */
    h28?: number;

    /**
     * Relative velocity to skin line.
     */
    h29?: number;

    /**
     * Sequential count of a dwell within the revisit of a particular bounding area for
     * a given job ID.
     */
    h3?: number;

    /**
     * Computed object length based upon HRR profile, in meters.
     */
    h30?: number;

    /**
     * Standard deviation of estimate of the object length, expressed in meters.
     */
    h31?: number;

    /**
     * Standard deviation of estimate of the object length, expressed in meters.
     */
    h32?: Array<Hrr.H32>;

    /**
     * Flag to indicate the last dwell of the revisit.
     */
    h4?: boolean;

    /**
     * Sequential index of the associated MTI Report.
     */
    h5?: number;

    /**
     * Number of Range Doppler pixels that exceed target scatterer threshold and are
     * reported in this segment.
     */
    h6?: number;

    /**
     * Number of Range Bins/Samples in a Range Doppler Chip.
     */
    h7?: number;

    /**
     * Number of Doppler bins in a Range-Doppler chip.
     */
    h8?: number;

    /**
     * The Peak Scatter returns the maximum power level (e.g. in milliwatts, or dBm)
     * registered by the sensor.
     */
    h9?: number;
  }

  export namespace Hrr {
    /**
     * HRR Scatterer record for a target pixel that exceeds the target detection
     * threshold.
     */
    export interface H32 {
      /**
       * Scatterer’s power magnitude.
       */
      h32_1?: number;

      /**
       * Scatterer’s complex phase, in degrees.
       */
      h32_2?: number;

      /**
       * Scatterer’s Range index relative to Range-Doppler chip, where increasing index
       * equates to increasing range.
       */
      h32_3?: number;

      /**
       * Scatterer’s Doppler index relative to Range-Doppler chip, where increasing index
       * equates to increasing Doppler.
       */
      h32_4?: number;
    }
  }

  /**
   * The means for the platform to pass information pertaining to the sensor job that
   * will be performed and details of the location parameters (terrain elevation
   * model and geoid model) used in the measurement.
   */
  export interface JobDef {
    /**
     * North-South position of the third corner (Point C) defining the area for sensor
     * service, expressed as degrees North (positive) or South (negative) of the
     * Equator.
     */
    j10?: number;

    /**
     * East-West position of the third corner (Point C) defining the area for sensor
     * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
     * -180) of the Prime Meridian.
     */
    j11?: number;

    /**
     * North-South position of the fourth corner (Point D) defining the area for sensor
     * service, expressed as degrees North (positive) or South (negative) of the
     * Equator.
     */
    j12?: number;

    /**
     * East-West position of the fourth corner (Point D) defining the area for sensor
     * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
     * -180) of the Prime Meridian.
     */
    j13?: number;

    /**
     * Mode in which the radar will operate for the given job ID.
     */
    j14?: string;

    /**
     * The nominal revisit interval for the job ID, expressed in deciseconds. Value of
     * zero, indicates that the sensor is not revisiting the previous area.
     */
    j15?: number;

    /**
     * Nominal estimate of the standard deviation in the estimated horizontal (along
     * track) sensor location, expressed in decimeters. measured along the sensor track
     * direction defined in the Dwell segment.
     */
    j16?: number;

    /**
     * Nominal estimate of the standard deviation in the estimated horizontal sensor
     * location, measured orthogonal to the track direction, expressed in decimeters.
     */
    j17?: number;

    /**
     * Nominal estimate of the standard deviation of the measured sensor altitude,
     * expressed in decimeters.
     */
    j18?: number;

    /**
     * Standard deviation of the estimate of sensor track heading, expressed in
     * degrees.
     */
    j19?: number;

    /**
     * The type of sensor or the platform.
     */
    j2?: string;

    /**
     * Nominal standard deviation of the estimate of sensor speed, expressed in
     * millimeters per second.
     */
    j20?: number;

    /**
     * Nominal standard deviation of the slant range of the reported detection,
     * expressed in centimeters.
     */
    j21?: number;

    /**
     * Nominal standard deviation of the measured cross angle to the reported
     * detection, expressed in degrees.
     */
    j22?: number;

    /**
     * Nominal standard deviation of the velocity line-of-sight component, expressed in
     * centimeters per second.
     */
    j23?: number;

    /**
     * Nominal minimum velocity component along the line of sight, which can be
     * detected by the sensor, expressed in decimeters per second.
     */
    j24?: number;

    /**
     * Nominal probability that an unobscured ten square-meter target will be detected
     * within the given area of surveillance.
     */
    j25?: number;

    /**
     * The expected density of False Alarms (FA), expressed as the negative of the
     * decibel value.
     */
    j26?: number;

    /**
     * The terrain elevation model used for developing the target reports.
     */
    j27?: string;

    /**
     * The geoid model used for developing the target reports.
     */
    j28?: string;

    /**
     * Identifier of the particular variant of the sensor type.
     */
    j3?: string;

    /**
     * Flag field indicating whether filtering has been applied to the targets detected
     * within the dwell area.
     */
    j4?: number;

    /**
     * Priority of this tasking request relative to all other active tasking requests
     * scheduled for execution on the specified platform.
     */
    j5?: number;

    /**
     * North-South position of the first corner (Point A) defining the area for sensor
     * service, expressed as degrees North (positive) or South (negative) of the
     * Equator.
     */
    j6?: number;

    /**
     * East-West position of the first corner (Point A) defining the area for sensor
     * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
     * -180) of the Prime Meridian.
     */
    j7?: number;

    /**
     * North-South position of the second corner (Point B) defining the area for sensor
     * service, expressed as degrees North (positive) or South (negative) of the
     * Equator.
     */
    j8?: number;

    /**
     * East-West position of the second corner (Point B) defining the area for sensor
     * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
     * -180) of the Prime Meridian.
     */
    j9?: number;
  }

  export interface JobRequest {
    /**
     * Specifies the Earliest Start Time for which the service is requested. Composite
     * of fields R15-R20.
     */
    jobReqEst?: string;

    /**
     * The requestor of the sensor service.
     */
    r1?: string;

    /**
     * North-South position of the fourth corner (Point D) defining the requested area
     * for service, expressed as degrees North (positive) or South (negative) of the
     * Equator.
     */
    r10?: number;

    /**
     * East-West position of the fourth corner (Point D) defining the requested area
     * for service, expressed as degrees East (positive, 0 to 180) or West (negative, 0
     * to -180) of the Prime Meridian.
     */
    r11?: number;

    /**
     * Identifies the radar mode requested by the requestor.
     */
    r12?: string;

    /**
     * Specifies the radar range resolution requested by the requestor, expressed in
     * centimeters.
     */
    r13?: number;

    /**
     * Specifies the radar cross-range resolution requested by the requestor, expressed
     * in decimeters.
     */
    r14?: number;

    /**
     * Identifier for the tasking message sent by the requesting station.
     */
    r2?: string;

    /**
     * Specifies the maximum time from the requested start time after which the request
     * is to be abandoned, expressed in seconds.
     */
    r21?: number;

    /**
     * Specifies the time duration for the radar job, measured from the actual start of
     * the job, expressed in seconds.
     */
    r22?: number;

    /**
     * Specifies the revisit interval for the radar job, expressed in deciseconds.
     */
    r23?: number;

    /**
     * the type of sensor or the platform.
     */
    r24?: string;

    /**
     * The particular variant of the sensor type.
     */
    r25?: string;

    /**
     * Flag field indicating that it is an initial request (flag = 0) or the desire of
     * the requestor to cancel (flag = 1) the requested job.
     */
    r26?: boolean;

    /**
     * The priority of the request relative to other requests originated by the
     * requesting station.
     */
    r3?: number;

    /**
     * North-South position of the first corner (Point A) defining the requested area
     * for service, expressed as degrees North (positive) or South (negative) of the
     * Equator.
     */
    r4?: number;

    /**
     * East-West position of the first corner (Point A) defining the requested area for
     * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
     * -180) of the Prime Meridian.
     */
    r5?: number;

    /**
     * North-South position of the second corner (Point B) defining the requested area
     * for service, expressed as degrees North (positive) or South (negative) of the
     * Equator.
     */
    r6?: number;

    /**
     * East-West position of the second corner (Point B) defining the requested area
     * for service, expressed as degrees East (positive, 0 to 180) or West (negative, 0
     * to -180) of the Prime Meridian.
     */
    r7?: number;

    /**
     * North-South position of the third corner (Point C) defining the requested area
     * for service, expressed as degrees North (positive) or South (negative) of the
     * Equator.
     */
    r8?: number;

    /**
     * East-West position of the third corner (Point C) defining the requested area for
     * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
     * -180) of the Prime Meridian.
     */
    r9?: number;
  }

  export interface Mission {
    /**
     * The mission plan id.
     */
    m1?: string;

    /**
     * Unique identification of the flight plan.
     */
    m2?: string;

    /**
     * Platform type that originated the data.
     */
    m3?: string;

    /**
     * Identification of the platform variant, modifications, etc.
     */
    m4?: string;

    /**
     * Mission origination date.
     */
    msnRefTs?: string;
  }

  export interface PlatformLoc {
    /**
     * Elapsed time, expressed in milliseconds, from midnight at the beginning of the
     * day specified in the Reference Time fields of the Mission Segment to the time
     * the report is prepared.
     */
    l1?: number;

    /**
     * North-South position of the platform at the time the report is prepared,
     * expressed as degrees North (positive) or South (negative) of the Equator.
     */
    l2?: number;

    /**
     * East-West position of the platform at the time the report is prepared, expressed
     * as degrees East (positive) from the Prime Meridian.
     */
    l3?: number;

    /**
     * Altitude of the platform at the time the report is prepared, referenced to its
     * position above the WGS-84 ellipsoid, in centimeters.
     */
    l4?: number;

    /**
     * Ground track of the platform at the time the report is prepared, expressed as
     * the angle in degrees (clockwise) from True North.
     */
    l5?: number;

    /**
     * Ground speed of the platform at the time the report is prepared, expressed as
     * millimeters per second.
     */
    l6?: number;

    /**
     * Velocity of the platform in the vertical direction, expressed as decimeters per
     * second.
     */
    l7?: number;

    /**
     * Platform location timestamp in ISO8601 UTC format.
     */
    platlocts?: string;
  }
}

export type MtiCountResponse = string;

export interface MtiQueryhelpResponse {
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

export type MtiTupleResponse = Array<HistoryAPI.MtiFull>;

export interface MtiListParams extends OffsetPageParams {
  /**
   * Time the row was created in the database. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export interface MtiCountParams {
  /**
   * Time the row was created in the database. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;

  firstResult?: number;

  maxResults?: number;
}

export interface MtiCreateBulkParams {
  body: Array<MtiCreateBulkParams.Body>;
}

export namespace MtiCreateBulkParams {
  /**
   * Information on the mission and flight plans, the type and configuration of the
   * platform, and the reference time.
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
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    dwells?: Array<Body.Dwell>;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    freeTexts?: Array<Body.FreeText>;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    hrrs?: Array<Body.Hrr>;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    jobDefs?: Array<Body.JobDef>;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    jobRequests?: Array<Body.JobRequest>;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    missions?: Array<Body.Mission>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    p10?: number;

    /**
     * Nationality of the platform providing the data.
     */
    p3?: string;

    /**
     * Control / handling marking.
     */
    p6?: string;

    /**
     * Data record exercise indicator.
     */
    p7?: string;

    /**
     * ID of the platform providing the data (tail number for air platform, name and
     * numerical designator for space-based platforms).
     */
    p8?: string;

    /**
     * Integer field, assigned by the platform, that uniquely identifies the mission
     * for the platform.
     */
    p9?: number;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    platformLocs?: Array<Body.PlatformLoc>;
  }

  export namespace Body {
    export interface Dwell {
      /**
       * Factor which modifies the value of the reported target latitude (Delta Latitude,
       * field D32.4).
       */
      d10?: number;

      /**
       * Factor which modifies the value of the reported target longitude (Delta
       * Longitude, field D32.5).
       */
      d11?: number;

      /**
       * Standard deviation in the estimated horizontal sensor location at the time of
       * the dwell, measured along the sensor track direction (field D15), in
       * centimeters.
       */
      d12?: number;

      /**
       * Standard deviation in the estimated horizontal sensor location at the time of
       * the dwell, measured orthogonal to the sensor track direction (field D15), in
       * centimeters.
       */
      d13?: number;

      /**
       * Standard deviation of the sensor altitude estimate (field D9), in centimeters.
       */
      d14?: number;

      /**
       * Ground track of the sensor at the time of the dwell, as the angle in degrees
       * (clockwise) from True North.
       */
      d15?: number;

      /**
       * Ground speed of the sensor at the time of the dwell, in millimeters per second.
       */
      d16?: number;

      /**
       * Velocity of the sensor in the vertical direction, in decimeters per second.
       */
      d17?: number;

      /**
       * Standard deviation of the estimate of the sensor track, in degrees.
       */
      d18?: number;

      /**
       * Standard deviation of estimate of the sensor speed, in millimeters per second.
       */
      d19?: number;

      /**
       * Sequential count of a revisit of the bounding area in the last sent Job
       * Definition Segment, where a Revisit Index of '0' indicates the first revisit.
       */
      d2?: number;

      /**
       * Standard deviation of estimate of the sensor vertical velocity, expressed in
       * centimeters per second.
       */
      d20?: number;

      /**
       * Heading of the platform at the time of the dwell, as the angle in degrees
       * (clockwise) from True North to the roll axis of the platform.
       */
      d21?: number;

      /**
       * Pitch angle of the platform at the time of the dwell, in degrees.
       */
      d22?: number;

      /**
       * Roll angle of the platform at the time of the dwell, in degrees.
       */
      d23?: number;

      /**
       * The North-South position of the center of the dwell area, expressed as degrees
       * North (positive) or South (negative) of the Equator.
       */
      d24?: number;

      /**
       * The East-West position of the center of the dwell area, expressed as degrees
       * East (positive, 0 to 180) or West (negative, 0 to -180) of the Prime Meridian.
       */
      d25?: number;

      /**
       * Distance on the earth surface, expressed in kilometers, from the near edge to
       * the center of the dwell area.
       */
      d26?: number;

      /**
       * For dwell based radars, one-half of the 3-dB beamwidth. For non-dwell based
       * radars, the angle between the beginning of the dwell to the center of the dwell.
       * Measured in degrees.
       */
      d27?: number;

      /**
       * Rotation of the sensor broadside face about the local vertical axis of the
       * platform, in degrees.
       */
      d28?: number;

      /**
       * Rotation angle of the sensor about the transverse axis of the sensor broadside,
       * in degrees.
       */
      d29?: number;

      /**
       * Temporally sequential count of a dwell within the revisit of a particular
       * bounding area for a given job ID.
       */
      d3?: number;

      /**
       * Rotation angle of the sensor about the transverse axis of the sensor broadside,
       * in degrees.
       */
      d30?: number;

      /**
       * Minimum velocity component, along the line of sight, which can be detected by
       * the sensor, in decimeters per second.
       */
      d31?: number;

      /**
       * Minimum velocity component, along the line of sight, which can be detected by
       * the sensor, in decimeters per second.
       */
      d32?: Array<Dwell.D32>;

      /**
       * Flag indicating the last dwell of the revisit.
       */
      d4?: boolean;

      /**
       * Count of the total number of targets reported during this dwell and sent in this
       * Dwell Segment.
       */
      d5?: number;

      /**
       * Elapsed time, expressed in milliseconds, from midnight at the beginning of the
       * day specified in the Reference Time fields (missionRefTime) of the Mission
       * Segment.
       */
      d6?: number;

      /**
       * North-South position of the sensor at the temporal center of the dwell, in
       * degrees.
       */
      d7?: number;

      /**
       * The East-West position of the sensor at the temporal center of the dwell, in
       * degrees East (positive, 0 to 180) or West (negative, 0 to -180) of the Prime
       * Meridian.
       */
      d8?: number;

      /**
       * The altitude of the sensor at temporal center of the dwell, above the WGS 84
       * ellipsoid, expressed in centimeters.
       */
      d9?: number;

      /**
       * Dwell timestamp in ISO8601 UTC format.
       */
      dwellts?: string;
    }

    export namespace Dwell {
      /**
       * A grouping of zero or more target reports for which the sensor provides a single
       * time, sensor position, reference position on the ground with simple estimates
       * for the observed area at the reported time, and other pertinent data.
       */
      export interface D32 {
        /**
         * Sequential count of this MTI report within the dwell.
         */
        d32_1?: number;

        /**
         * The classification of the target (i.e. vehicle, aircraft, …).
         */
        d32_10?: string;

        /**
         * Estimated probability that the target classification field is correctly
         * classified.
         */
        d32_11?: number;

        /**
         * Standard deviation of the estimated slant range of the reported detection, in
         * centimeters.
         */
        d32_12?: number;

        /**
         * Standard deviation of the position estimate, in the cross-range direction, of
         * the reported detection, in decimeters.
         */
        d32_13?: number;

        /**
         * Standard deviation of the estimated geodetic height, in meters.
         */
        d32_14?: number;

        /**
         * Standard deviation of the measured line-of-sight velocity component, in
         * centimeters per second.
         */
        d32_15?: number;

        /**
         * The Truth Tag- Application is the Application Field truncated to 8 bits, from
         * the Entity State Protocol Data Unit (PDU) used to generate the MTI Target.
         */
        d32_16?: number;

        /**
         * The Truth Tag - Entity is the Entity Field from the Entity State PDU used to
         * generate the MTI Target.
         */
        d32_17?: number;

        /**
         * Estimated radar cross section of the target return, in half-decibels.
         */
        d32_18?: number;

        /**
         * The North-South position of the reported detection, expressed as degrees North
         * (positive) or South (negative) of the Equator.
         */
        d32_2?: number;

        /**
         * The East-West position of the reported detection, expressed as degrees East
         * (positive) from the Prime Meridian.
         */
        d32_3?: number;

        /**
         * The North-South position of the reported detection, expressed as degrees North
         * (positive) or South (negative) from the Dwell Area Center Latitude.
         */
        d32_4?: number;

        /**
         * The East-West position of the reported detection, expressed as degrees East
         * (positive, 0 to 180) or West (negative, 0 to -180) of the Prime Meridian from
         * the Dwell Area Center Longitude.
         */
        d32_5?: number;

        /**
         * Height of the reported detection, referenced to its position above the WGS 84
         * ellipsoid, in meters.
         */
        d32_6?: number;

        /**
         * The component of velocity for the reported detection, expressed in centimeters
         * per second, corrected for platform motion, along the line of sight between the
         * sensor and the reported detection, where the positive direction is away from the
         * sensor.
         */
        d32_7?: number;

        /**
         * The target wrap velocity permits trackers to un-wrap velocities for targets with
         * line-of-sight components large enough to exceed the first velocity period.
         * Expressed in centimeters/sec.
         */
        d32_8?: number;

        /**
         * Estimated signal-to-noise ratio (SNR) of the target return, in decibels.
         */
        d32_9?: number;
      }
    }

    export interface FreeText {
      /**
       * The originator of the Free Text message.
       */
      f1?: string;

      /**
       * The recipient for which the Free Text message is intended.
       */
      f2?: string;

      /**
       * Free text data message.
       */
      f3?: string;
    }

    export interface Hrr {
      /**
       * Detection threshold used to isolate significant target scatterer pixels,
       * expressed as power relative to clutter mean in negative quarter-decibels.
       */
      h10?: number;

      /**
       * 3dB range impulse response of the radar, expressed in centimeters.
       */
      h11?: number;

      /**
       * Slant Range pixel spacing after over sampling, expressed in centimeters.
       */
      h12?: number;

      /**
       * 3dB Doppler resolution of the radar, expressed in Hertz.
       */
      h13?: number;

      /**
       * Doppler pixel spacing after over sampling, expressed in Hertz.
       */
      h14?: number;

      /**
       * Center Frequency of the radar in GHz.
       */
      h15?: number;

      /**
       * Enumeration table denoting the compression technique used.
       */
      h16?: string;

      /**
       * Enumeration table indicating the spectral weighting used in the range
       * compression process.
       */
      h17?: string;

      /**
       * Enumeration table indicating the spectral weighting used in the cross-range or
       * Doppler compression process.
       */
      h18?: string;

      /**
       * Initial power of the peak scatterer, expressed in dB.
       */
      h19?: number;

      /**
       * Sequential count of a revisit of the bounding area for a given job ID.
       */
      h2?: number;

      /**
       * RCS of the peak scatterer, expressed in half-decibels (dB/2).
       */
      h20?: number;

      /**
       * When the RDM does not correlate to a single MTI report index or when the center
       * range bin does not correlate to the center of the dwell; provide the range
       * sample offset in meters from Dwell Center (positive is away from the sensor) of
       * the first scatterer record.
       */
      h21?: number;

      /**
       * When the RDM does not correlate to a single MTI report index or the center
       * doppler bin does not correlate to the doppler centroid of the dwell; Doppler
       * sample value in Hz of the first scatterer record.
       */
      h22?: number;

      /**
       * Enumeration field which designates the type of data being delivered.
       */
      h23?: string;

      /**
       * Flag field to indicate the additional signal processing techniques applied to
       * the data.
       */
      h24?: string;

      /**
       * Number of pixels in the range dimension of the chip.
       */
      h27?: number;

      /**
       * Distance from Range Bin to closest edge in the entire chip, expressed in
       * centimeters.
       */
      h28?: number;

      /**
       * Relative velocity to skin line.
       */
      h29?: number;

      /**
       * Sequential count of a dwell within the revisit of a particular bounding area for
       * a given job ID.
       */
      h3?: number;

      /**
       * Computed object length based upon HRR profile, in meters.
       */
      h30?: number;

      /**
       * Standard deviation of estimate of the object length, expressed in meters.
       */
      h31?: number;

      /**
       * Standard deviation of estimate of the object length, expressed in meters.
       */
      h32?: Array<Hrr.H32>;

      /**
       * Flag to indicate the last dwell of the revisit.
       */
      h4?: boolean;

      /**
       * Sequential index of the associated MTI Report.
       */
      h5?: number;

      /**
       * Number of Range Doppler pixels that exceed target scatterer threshold and are
       * reported in this segment.
       */
      h6?: number;

      /**
       * Number of Range Bins/Samples in a Range Doppler Chip.
       */
      h7?: number;

      /**
       * Number of Doppler bins in a Range-Doppler chip.
       */
      h8?: number;

      /**
       * The Peak Scatter returns the maximum power level (e.g. in milliwatts, or dBm)
       * registered by the sensor.
       */
      h9?: number;
    }

    export namespace Hrr {
      /**
       * HRR Scatterer record for a target pixel that exceeds the target detection
       * threshold.
       */
      export interface H32 {
        /**
         * Scatterer’s power magnitude.
         */
        h32_1?: number;

        /**
         * Scatterer’s complex phase, in degrees.
         */
        h32_2?: number;

        /**
         * Scatterer’s Range index relative to Range-Doppler chip, where increasing index
         * equates to increasing range.
         */
        h32_3?: number;

        /**
         * Scatterer’s Doppler index relative to Range-Doppler chip, where increasing index
         * equates to increasing Doppler.
         */
        h32_4?: number;
      }
    }

    /**
     * The means for the platform to pass information pertaining to the sensor job that
     * will be performed and details of the location parameters (terrain elevation
     * model and geoid model) used in the measurement.
     */
    export interface JobDef {
      /**
       * A platform assigned number identifying the specific request or task to which the
       * specific dwell pertains.
       */
      j1?: number;

      /**
       * North-South position of the third corner (Point C) defining the area for sensor
       * service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      j10?: number;

      /**
       * East-West position of the third corner (Point C) defining the area for sensor
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      j11?: number;

      /**
       * North-South position of the fourth corner (Point D) defining the area for sensor
       * service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      j12?: number;

      /**
       * East-West position of the fourth corner (Point D) defining the area for sensor
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      j13?: number;

      /**
       * Mode in which the radar will operate for the given job ID.
       */
      j14?: string;

      /**
       * The nominal revisit interval for the job ID, expressed in deciseconds. Value of
       * zero, indicates that the sensor is not revisiting the previous area.
       */
      j15?: number;

      /**
       * Nominal estimate of the standard deviation in the estimated horizontal (along
       * track) sensor location, expressed in decimeters. measured along the sensor track
       * direction defined in the Dwell segment.
       */
      j16?: number;

      /**
       * Nominal estimate of the standard deviation in the estimated horizontal sensor
       * location, measured orthogonal to the track direction, expressed in decimeters.
       */
      j17?: number;

      /**
       * Nominal estimate of the standard deviation of the measured sensor altitude,
       * expressed in decimeters.
       */
      j18?: number;

      /**
       * Standard deviation of the estimate of sensor track heading, expressed in
       * degrees.
       */
      j19?: number;

      /**
       * The type of sensor or the platform.
       */
      j2?: string;

      /**
       * Nominal standard deviation of the estimate of sensor speed, expressed in
       * millimeters per second.
       */
      j20?: number;

      /**
       * Nominal standard deviation of the slant range of the reported detection,
       * expressed in centimeters.
       */
      j21?: number;

      /**
       * Nominal standard deviation of the measured cross angle to the reported
       * detection, expressed in degrees.
       */
      j22?: number;

      /**
       * Nominal standard deviation of the velocity line-of-sight component, expressed in
       * centimeters per second.
       */
      j23?: number;

      /**
       * Nominal minimum velocity component along the line of sight, which can be
       * detected by the sensor, expressed in decimeters per second.
       */
      j24?: number;

      /**
       * Nominal probability that an unobscured ten square-meter target will be detected
       * within the given area of surveillance.
       */
      j25?: number;

      /**
       * The expected density of False Alarms (FA), expressed as the negative of the
       * decibel value.
       */
      j26?: number;

      /**
       * The terrain elevation model used for developing the target reports.
       */
      j27?: string;

      /**
       * The geoid model used for developing the target reports.
       */
      j28?: string;

      /**
       * Identifier of the particular variant of the sensor type.
       */
      j3?: string;

      /**
       * Flag field indicating whether filtering has been applied to the targets detected
       * within the dwell area.
       */
      j4?: number;

      /**
       * Priority of this tasking request relative to all other active tasking requests
       * scheduled for execution on the specified platform.
       */
      j5?: number;

      /**
       * North-South position of the first corner (Point A) defining the area for sensor
       * service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      j6?: number;

      /**
       * East-West position of the first corner (Point A) defining the area for sensor
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      j7?: number;

      /**
       * North-South position of the second corner (Point B) defining the area for sensor
       * service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      j8?: number;

      /**
       * East-West position of the second corner (Point B) defining the area for sensor
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      j9?: number;
    }

    export interface JobRequest {
      /**
       * Specifies the Earliest Start Time for which the service is requested. Composite
       * of fields R15-R20.
       */
      jobReqEst?: string;

      /**
       * The requestor of the sensor service.
       */
      r1?: string;

      /**
       * North-South position of the fourth corner (Point D) defining the requested area
       * for service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      r10?: number;

      /**
       * East-West position of the fourth corner (Point D) defining the requested area
       * for service, expressed as degrees East (positive, 0 to 180) or West (negative, 0
       * to -180) of the Prime Meridian.
       */
      r11?: number;

      /**
       * Identifies the radar mode requested by the requestor.
       */
      r12?: string;

      /**
       * Specifies the radar range resolution requested by the requestor, expressed in
       * centimeters.
       */
      r13?: number;

      /**
       * Specifies the radar cross-range resolution requested by the requestor, expressed
       * in decimeters.
       */
      r14?: number;

      /**
       * Identifier for the tasking message sent by the requesting station.
       */
      r2?: string;

      /**
       * Specifies the maximum time from the requested start time after which the request
       * is to be abandoned, expressed in seconds.
       */
      r21?: number;

      /**
       * Specifies the time duration for the radar job, measured from the actual start of
       * the job, expressed in seconds.
       */
      r22?: number;

      /**
       * Specifies the revisit interval for the radar job, expressed in deciseconds.
       */
      r23?: number;

      /**
       * the type of sensor or the platform.
       */
      r24?: string;

      /**
       * The particular variant of the sensor type.
       */
      r25?: string;

      /**
       * Flag field indicating that it is an initial request (flag = 0) or the desire of
       * the requestor to cancel (flag = 1) the requested job.
       */
      r26?: boolean;

      /**
       * The priority of the request relative to other requests originated by the
       * requesting station.
       */
      r3?: number;

      /**
       * North-South position of the first corner (Point A) defining the requested area
       * for service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      r4?: number;

      /**
       * East-West position of the first corner (Point A) defining the requested area for
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      r5?: number;

      /**
       * North-South position of the second corner (Point B) defining the requested area
       * for service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      r6?: number;

      /**
       * East-West position of the second corner (Point B) defining the requested area
       * for service, expressed as degrees East (positive, 0 to 180) or West (negative, 0
       * to -180) of the Prime Meridian.
       */
      r7?: number;

      /**
       * North-South position of the third corner (Point C) defining the requested area
       * for service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      r8?: number;

      /**
       * East-West position of the third corner (Point C) defining the requested area for
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      r9?: number;
    }

    export interface Mission {
      /**
       * The mission plan id.
       */
      m1?: string;

      /**
       * Unique identification of the flight plan.
       */
      m2?: string;

      /**
       * Platform type that originated the data.
       */
      m3?: string;

      /**
       * Identification of the platform variant, modifications, etc.
       */
      m4?: string;

      /**
       * Mission origination date.
       */
      msnRefTs?: string;
    }

    export interface PlatformLoc {
      /**
       * Elapsed time, expressed in milliseconds, from midnight at the beginning of the
       * day specified in the Reference Time fields of the Mission Segment to the time
       * the report is prepared.
       */
      l1?: number;

      /**
       * North-South position of the platform at the time the report is prepared,
       * expressed as degrees North (positive) or South (negative) of the Equator.
       */
      l2?: number;

      /**
       * East-West position of the platform at the time the report is prepared, expressed
       * as degrees East (positive) from the Prime Meridian.
       */
      l3?: number;

      /**
       * Altitude of the platform at the time the report is prepared, referenced to its
       * position above the WGS-84 ellipsoid, in centimeters.
       */
      l4?: number;

      /**
       * Ground track of the platform at the time the report is prepared, expressed as
       * the angle in degrees (clockwise) from True North.
       */
      l5?: number;

      /**
       * Ground speed of the platform at the time the report is prepared, expressed as
       * millimeters per second.
       */
      l6?: number;

      /**
       * Velocity of the platform in the vertical direction, expressed as decimeters per
       * second.
       */
      l7?: number;

      /**
       * Platform location timestamp in ISO8601 UTC format.
       */
      platlocts?: string;
    }
  }
}

export interface MtiTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time the row was created in the database. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;

  firstResult?: number;

  maxResults?: number;
}

export interface MtiUnvalidatedPublishParams {
  body: Array<MtiUnvalidatedPublishParams.Body>;
}

export namespace MtiUnvalidatedPublishParams {
  /**
   * Information on the mission and flight plans, the type and configuration of the
   * platform, and the reference time.
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
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    dwells?: Array<Body.Dwell>;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    freeTexts?: Array<Body.FreeText>;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    hrrs?: Array<Body.Hrr>;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    jobDefs?: Array<Body.JobDef>;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    jobRequests?: Array<Body.JobRequest>;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    missions?: Array<Body.Mission>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    p10?: number;

    /**
     * Nationality of the platform providing the data.
     */
    p3?: string;

    /**
     * Control / handling marking.
     */
    p6?: string;

    /**
     * Data record exercise indicator.
     */
    p7?: string;

    /**
     * ID of the platform providing the data (tail number for air platform, name and
     * numerical designator for space-based platforms).
     */
    p8?: string;

    /**
     * Integer field, assigned by the platform, that uniquely identifies the mission
     * for the platform.
     */
    p9?: number;

    /**
     * A platform-assigned number identifying the specific request or task that
     * pertains to all Dwell, HRR, and Range-Doppler segments in the packet. Job ID is
     * unique within a mission.
     */
    platformLocs?: Array<Body.PlatformLoc>;
  }

  export namespace Body {
    export interface Dwell {
      /**
       * Factor which modifies the value of the reported target latitude (Delta Latitude,
       * field D32.4).
       */
      d10?: number;

      /**
       * Factor which modifies the value of the reported target longitude (Delta
       * Longitude, field D32.5).
       */
      d11?: number;

      /**
       * Standard deviation in the estimated horizontal sensor location at the time of
       * the dwell, measured along the sensor track direction (field D15), in
       * centimeters.
       */
      d12?: number;

      /**
       * Standard deviation in the estimated horizontal sensor location at the time of
       * the dwell, measured orthogonal to the sensor track direction (field D15), in
       * centimeters.
       */
      d13?: number;

      /**
       * Standard deviation of the sensor altitude estimate (field D9), in centimeters.
       */
      d14?: number;

      /**
       * Ground track of the sensor at the time of the dwell, as the angle in degrees
       * (clockwise) from True North.
       */
      d15?: number;

      /**
       * Ground speed of the sensor at the time of the dwell, in millimeters per second.
       */
      d16?: number;

      /**
       * Velocity of the sensor in the vertical direction, in decimeters per second.
       */
      d17?: number;

      /**
       * Standard deviation of the estimate of the sensor track, in degrees.
       */
      d18?: number;

      /**
       * Standard deviation of estimate of the sensor speed, in millimeters per second.
       */
      d19?: number;

      /**
       * Sequential count of a revisit of the bounding area in the last sent Job
       * Definition Segment, where a Revisit Index of '0' indicates the first revisit.
       */
      d2?: number;

      /**
       * Standard deviation of estimate of the sensor vertical velocity, expressed in
       * centimeters per second.
       */
      d20?: number;

      /**
       * Heading of the platform at the time of the dwell, as the angle in degrees
       * (clockwise) from True North to the roll axis of the platform.
       */
      d21?: number;

      /**
       * Pitch angle of the platform at the time of the dwell, in degrees.
       */
      d22?: number;

      /**
       * Roll angle of the platform at the time of the dwell, in degrees.
       */
      d23?: number;

      /**
       * The North-South position of the center of the dwell area, expressed as degrees
       * North (positive) or South (negative) of the Equator.
       */
      d24?: number;

      /**
       * The East-West position of the center of the dwell area, expressed as degrees
       * East (positive, 0 to 180) or West (negative, 0 to -180) of the Prime Meridian.
       */
      d25?: number;

      /**
       * Distance on the earth surface, expressed in kilometers, from the near edge to
       * the center of the dwell area.
       */
      d26?: number;

      /**
       * For dwell based radars, one-half of the 3-dB beamwidth. For non-dwell based
       * radars, the angle between the beginning of the dwell to the center of the dwell.
       * Measured in degrees.
       */
      d27?: number;

      /**
       * Rotation of the sensor broadside face about the local vertical axis of the
       * platform, in degrees.
       */
      d28?: number;

      /**
       * Rotation angle of the sensor about the transverse axis of the sensor broadside,
       * in degrees.
       */
      d29?: number;

      /**
       * Temporally sequential count of a dwell within the revisit of a particular
       * bounding area for a given job ID.
       */
      d3?: number;

      /**
       * Rotation angle of the sensor about the transverse axis of the sensor broadside,
       * in degrees.
       */
      d30?: number;

      /**
       * Minimum velocity component, along the line of sight, which can be detected by
       * the sensor, in decimeters per second.
       */
      d31?: number;

      /**
       * Minimum velocity component, along the line of sight, which can be detected by
       * the sensor, in decimeters per second.
       */
      d32?: Array<Dwell.D32>;

      /**
       * Flag indicating the last dwell of the revisit.
       */
      d4?: boolean;

      /**
       * Count of the total number of targets reported during this dwell and sent in this
       * Dwell Segment.
       */
      d5?: number;

      /**
       * Elapsed time, expressed in milliseconds, from midnight at the beginning of the
       * day specified in the Reference Time fields (missionRefTime) of the Mission
       * Segment.
       */
      d6?: number;

      /**
       * North-South position of the sensor at the temporal center of the dwell, in
       * degrees.
       */
      d7?: number;

      /**
       * The East-West position of the sensor at the temporal center of the dwell, in
       * degrees East (positive, 0 to 180) or West (negative, 0 to -180) of the Prime
       * Meridian.
       */
      d8?: number;

      /**
       * The altitude of the sensor at temporal center of the dwell, above the WGS 84
       * ellipsoid, expressed in centimeters.
       */
      d9?: number;

      /**
       * Dwell timestamp in ISO8601 UTC format.
       */
      dwellts?: string;
    }

    export namespace Dwell {
      /**
       * A grouping of zero or more target reports for which the sensor provides a single
       * time, sensor position, reference position on the ground with simple estimates
       * for the observed area at the reported time, and other pertinent data.
       */
      export interface D32 {
        /**
         * Sequential count of this MTI report within the dwell.
         */
        d32_1?: number;

        /**
         * The classification of the target (i.e. vehicle, aircraft, …).
         */
        d32_10?: string;

        /**
         * Estimated probability that the target classification field is correctly
         * classified.
         */
        d32_11?: number;

        /**
         * Standard deviation of the estimated slant range of the reported detection, in
         * centimeters.
         */
        d32_12?: number;

        /**
         * Standard deviation of the position estimate, in the cross-range direction, of
         * the reported detection, in decimeters.
         */
        d32_13?: number;

        /**
         * Standard deviation of the estimated geodetic height, in meters.
         */
        d32_14?: number;

        /**
         * Standard deviation of the measured line-of-sight velocity component, in
         * centimeters per second.
         */
        d32_15?: number;

        /**
         * The Truth Tag- Application is the Application Field truncated to 8 bits, from
         * the Entity State Protocol Data Unit (PDU) used to generate the MTI Target.
         */
        d32_16?: number;

        /**
         * The Truth Tag - Entity is the Entity Field from the Entity State PDU used to
         * generate the MTI Target.
         */
        d32_17?: number;

        /**
         * Estimated radar cross section of the target return, in half-decibels.
         */
        d32_18?: number;

        /**
         * The North-South position of the reported detection, expressed as degrees North
         * (positive) or South (negative) of the Equator.
         */
        d32_2?: number;

        /**
         * The East-West position of the reported detection, expressed as degrees East
         * (positive) from the Prime Meridian.
         */
        d32_3?: number;

        /**
         * The North-South position of the reported detection, expressed as degrees North
         * (positive) or South (negative) from the Dwell Area Center Latitude.
         */
        d32_4?: number;

        /**
         * The East-West position of the reported detection, expressed as degrees East
         * (positive, 0 to 180) or West (negative, 0 to -180) of the Prime Meridian from
         * the Dwell Area Center Longitude.
         */
        d32_5?: number;

        /**
         * Height of the reported detection, referenced to its position above the WGS 84
         * ellipsoid, in meters.
         */
        d32_6?: number;

        /**
         * The component of velocity for the reported detection, expressed in centimeters
         * per second, corrected for platform motion, along the line of sight between the
         * sensor and the reported detection, where the positive direction is away from the
         * sensor.
         */
        d32_7?: number;

        /**
         * The target wrap velocity permits trackers to un-wrap velocities for targets with
         * line-of-sight components large enough to exceed the first velocity period.
         * Expressed in centimeters/sec.
         */
        d32_8?: number;

        /**
         * Estimated signal-to-noise ratio (SNR) of the target return, in decibels.
         */
        d32_9?: number;
      }
    }

    export interface FreeText {
      /**
       * The originator of the Free Text message.
       */
      f1?: string;

      /**
       * The recipient for which the Free Text message is intended.
       */
      f2?: string;

      /**
       * Free text data message.
       */
      f3?: string;
    }

    export interface Hrr {
      /**
       * Detection threshold used to isolate significant target scatterer pixels,
       * expressed as power relative to clutter mean in negative quarter-decibels.
       */
      h10?: number;

      /**
       * 3dB range impulse response of the radar, expressed in centimeters.
       */
      h11?: number;

      /**
       * Slant Range pixel spacing after over sampling, expressed in centimeters.
       */
      h12?: number;

      /**
       * 3dB Doppler resolution of the radar, expressed in Hertz.
       */
      h13?: number;

      /**
       * Doppler pixel spacing after over sampling, expressed in Hertz.
       */
      h14?: number;

      /**
       * Center Frequency of the radar in GHz.
       */
      h15?: number;

      /**
       * Enumeration table denoting the compression technique used.
       */
      h16?: string;

      /**
       * Enumeration table indicating the spectral weighting used in the range
       * compression process.
       */
      h17?: string;

      /**
       * Enumeration table indicating the spectral weighting used in the cross-range or
       * Doppler compression process.
       */
      h18?: string;

      /**
       * Initial power of the peak scatterer, expressed in dB.
       */
      h19?: number;

      /**
       * Sequential count of a revisit of the bounding area for a given job ID.
       */
      h2?: number;

      /**
       * RCS of the peak scatterer, expressed in half-decibels (dB/2).
       */
      h20?: number;

      /**
       * When the RDM does not correlate to a single MTI report index or when the center
       * range bin does not correlate to the center of the dwell; provide the range
       * sample offset in meters from Dwell Center (positive is away from the sensor) of
       * the first scatterer record.
       */
      h21?: number;

      /**
       * When the RDM does not correlate to a single MTI report index or the center
       * doppler bin does not correlate to the doppler centroid of the dwell; Doppler
       * sample value in Hz of the first scatterer record.
       */
      h22?: number;

      /**
       * Enumeration field which designates the type of data being delivered.
       */
      h23?: string;

      /**
       * Flag field to indicate the additional signal processing techniques applied to
       * the data.
       */
      h24?: string;

      /**
       * Number of pixels in the range dimension of the chip.
       */
      h27?: number;

      /**
       * Distance from Range Bin to closest edge in the entire chip, expressed in
       * centimeters.
       */
      h28?: number;

      /**
       * Relative velocity to skin line.
       */
      h29?: number;

      /**
       * Sequential count of a dwell within the revisit of a particular bounding area for
       * a given job ID.
       */
      h3?: number;

      /**
       * Computed object length based upon HRR profile, in meters.
       */
      h30?: number;

      /**
       * Standard deviation of estimate of the object length, expressed in meters.
       */
      h31?: number;

      /**
       * Standard deviation of estimate of the object length, expressed in meters.
       */
      h32?: Array<Hrr.H32>;

      /**
       * Flag to indicate the last dwell of the revisit.
       */
      h4?: boolean;

      /**
       * Sequential index of the associated MTI Report.
       */
      h5?: number;

      /**
       * Number of Range Doppler pixels that exceed target scatterer threshold and are
       * reported in this segment.
       */
      h6?: number;

      /**
       * Number of Range Bins/Samples in a Range Doppler Chip.
       */
      h7?: number;

      /**
       * Number of Doppler bins in a Range-Doppler chip.
       */
      h8?: number;

      /**
       * The Peak Scatter returns the maximum power level (e.g. in milliwatts, or dBm)
       * registered by the sensor.
       */
      h9?: number;
    }

    export namespace Hrr {
      /**
       * HRR Scatterer record for a target pixel that exceeds the target detection
       * threshold.
       */
      export interface H32 {
        /**
         * Scatterer’s power magnitude.
         */
        h32_1?: number;

        /**
         * Scatterer’s complex phase, in degrees.
         */
        h32_2?: number;

        /**
         * Scatterer’s Range index relative to Range-Doppler chip, where increasing index
         * equates to increasing range.
         */
        h32_3?: number;

        /**
         * Scatterer’s Doppler index relative to Range-Doppler chip, where increasing index
         * equates to increasing Doppler.
         */
        h32_4?: number;
      }
    }

    /**
     * The means for the platform to pass information pertaining to the sensor job that
     * will be performed and details of the location parameters (terrain elevation
     * model and geoid model) used in the measurement.
     */
    export interface JobDef {
      /**
       * A platform assigned number identifying the specific request or task to which the
       * specific dwell pertains.
       */
      j1?: number;

      /**
       * North-South position of the third corner (Point C) defining the area for sensor
       * service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      j10?: number;

      /**
       * East-West position of the third corner (Point C) defining the area for sensor
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      j11?: number;

      /**
       * North-South position of the fourth corner (Point D) defining the area for sensor
       * service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      j12?: number;

      /**
       * East-West position of the fourth corner (Point D) defining the area for sensor
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      j13?: number;

      /**
       * Mode in which the radar will operate for the given job ID.
       */
      j14?: string;

      /**
       * The nominal revisit interval for the job ID, expressed in deciseconds. Value of
       * zero, indicates that the sensor is not revisiting the previous area.
       */
      j15?: number;

      /**
       * Nominal estimate of the standard deviation in the estimated horizontal (along
       * track) sensor location, expressed in decimeters. measured along the sensor track
       * direction defined in the Dwell segment.
       */
      j16?: number;

      /**
       * Nominal estimate of the standard deviation in the estimated horizontal sensor
       * location, measured orthogonal to the track direction, expressed in decimeters.
       */
      j17?: number;

      /**
       * Nominal estimate of the standard deviation of the measured sensor altitude,
       * expressed in decimeters.
       */
      j18?: number;

      /**
       * Standard deviation of the estimate of sensor track heading, expressed in
       * degrees.
       */
      j19?: number;

      /**
       * The type of sensor or the platform.
       */
      j2?: string;

      /**
       * Nominal standard deviation of the estimate of sensor speed, expressed in
       * millimeters per second.
       */
      j20?: number;

      /**
       * Nominal standard deviation of the slant range of the reported detection,
       * expressed in centimeters.
       */
      j21?: number;

      /**
       * Nominal standard deviation of the measured cross angle to the reported
       * detection, expressed in degrees.
       */
      j22?: number;

      /**
       * Nominal standard deviation of the velocity line-of-sight component, expressed in
       * centimeters per second.
       */
      j23?: number;

      /**
       * Nominal minimum velocity component along the line of sight, which can be
       * detected by the sensor, expressed in decimeters per second.
       */
      j24?: number;

      /**
       * Nominal probability that an unobscured ten square-meter target will be detected
       * within the given area of surveillance.
       */
      j25?: number;

      /**
       * The expected density of False Alarms (FA), expressed as the negative of the
       * decibel value.
       */
      j26?: number;

      /**
       * The terrain elevation model used for developing the target reports.
       */
      j27?: string;

      /**
       * The geoid model used for developing the target reports.
       */
      j28?: string;

      /**
       * Identifier of the particular variant of the sensor type.
       */
      j3?: string;

      /**
       * Flag field indicating whether filtering has been applied to the targets detected
       * within the dwell area.
       */
      j4?: number;

      /**
       * Priority of this tasking request relative to all other active tasking requests
       * scheduled for execution on the specified platform.
       */
      j5?: number;

      /**
       * North-South position of the first corner (Point A) defining the area for sensor
       * service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      j6?: number;

      /**
       * East-West position of the first corner (Point A) defining the area for sensor
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      j7?: number;

      /**
       * North-South position of the second corner (Point B) defining the area for sensor
       * service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      j8?: number;

      /**
       * East-West position of the second corner (Point B) defining the area for sensor
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      j9?: number;
    }

    export interface JobRequest {
      /**
       * Specifies the Earliest Start Time for which the service is requested. Composite
       * of fields R15-R20.
       */
      jobReqEst?: string;

      /**
       * The requestor of the sensor service.
       */
      r1?: string;

      /**
       * North-South position of the fourth corner (Point D) defining the requested area
       * for service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      r10?: number;

      /**
       * East-West position of the fourth corner (Point D) defining the requested area
       * for service, expressed as degrees East (positive, 0 to 180) or West (negative, 0
       * to -180) of the Prime Meridian.
       */
      r11?: number;

      /**
       * Identifies the radar mode requested by the requestor.
       */
      r12?: string;

      /**
       * Specifies the radar range resolution requested by the requestor, expressed in
       * centimeters.
       */
      r13?: number;

      /**
       * Specifies the radar cross-range resolution requested by the requestor, expressed
       * in decimeters.
       */
      r14?: number;

      /**
       * Identifier for the tasking message sent by the requesting station.
       */
      r2?: string;

      /**
       * Specifies the maximum time from the requested start time after which the request
       * is to be abandoned, expressed in seconds.
       */
      r21?: number;

      /**
       * Specifies the time duration for the radar job, measured from the actual start of
       * the job, expressed in seconds.
       */
      r22?: number;

      /**
       * Specifies the revisit interval for the radar job, expressed in deciseconds.
       */
      r23?: number;

      /**
       * the type of sensor or the platform.
       */
      r24?: string;

      /**
       * The particular variant of the sensor type.
       */
      r25?: string;

      /**
       * Flag field indicating that it is an initial request (flag = 0) or the desire of
       * the requestor to cancel (flag = 1) the requested job.
       */
      r26?: boolean;

      /**
       * The priority of the request relative to other requests originated by the
       * requesting station.
       */
      r3?: number;

      /**
       * North-South position of the first corner (Point A) defining the requested area
       * for service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      r4?: number;

      /**
       * East-West position of the first corner (Point A) defining the requested area for
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      r5?: number;

      /**
       * North-South position of the second corner (Point B) defining the requested area
       * for service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      r6?: number;

      /**
       * East-West position of the second corner (Point B) defining the requested area
       * for service, expressed as degrees East (positive, 0 to 180) or West (negative, 0
       * to -180) of the Prime Meridian.
       */
      r7?: number;

      /**
       * North-South position of the third corner (Point C) defining the requested area
       * for service, expressed as degrees North (positive) or South (negative) of the
       * Equator.
       */
      r8?: number;

      /**
       * East-West position of the third corner (Point C) defining the requested area for
       * service, expressed as degrees East (positive, 0 to 180) or West (negative, 0 to
       * -180) of the Prime Meridian.
       */
      r9?: number;
    }

    export interface Mission {
      /**
       * The mission plan id.
       */
      m1?: string;

      /**
       * Unique identification of the flight plan.
       */
      m2?: string;

      /**
       * Platform type that originated the data.
       */
      m3?: string;

      /**
       * Identification of the platform variant, modifications, etc.
       */
      m4?: string;

      /**
       * Mission origination date.
       */
      msnRefTs?: string;
    }

    export interface PlatformLoc {
      /**
       * Elapsed time, expressed in milliseconds, from midnight at the beginning of the
       * day specified in the Reference Time fields of the Mission Segment to the time
       * the report is prepared.
       */
      l1?: number;

      /**
       * North-South position of the platform at the time the report is prepared,
       * expressed as degrees North (positive) or South (negative) of the Equator.
       */
      l2?: number;

      /**
       * East-West position of the platform at the time the report is prepared, expressed
       * as degrees East (positive) from the Prime Meridian.
       */
      l3?: number;

      /**
       * Altitude of the platform at the time the report is prepared, referenced to its
       * position above the WGS-84 ellipsoid, in centimeters.
       */
      l4?: number;

      /**
       * Ground track of the platform at the time the report is prepared, expressed as
       * the angle in degrees (clockwise) from True North.
       */
      l5?: number;

      /**
       * Ground speed of the platform at the time the report is prepared, expressed as
       * millimeters per second.
       */
      l6?: number;

      /**
       * Velocity of the platform in the vertical direction, expressed as decimeters per
       * second.
       */
      l7?: number;

      /**
       * Platform location timestamp in ISO8601 UTC format.
       */
      platlocts?: string;
    }
  }
}

Mti.History = History;

export declare namespace Mti {
  export {
    type MtiListResponse as MtiListResponse,
    type MtiCountResponse as MtiCountResponse,
    type MtiQueryhelpResponse as MtiQueryhelpResponse,
    type MtiTupleResponse as MtiTupleResponse,
    type MtiListResponsesOffsetPage as MtiListResponsesOffsetPage,
    type MtiListParams as MtiListParams,
    type MtiCountParams as MtiCountParams,
    type MtiCreateBulkParams as MtiCreateBulkParams,
    type MtiTupleParams as MtiTupleParams,
    type MtiUnvalidatedPublishParams as MtiUnvalidatedPublishParams,
  };

  export {
    History as History,
    type MtiFull as MtiFull,
    type HistoryCountResponse as HistoryCountResponse,
    type MtiFullsOffsetPage as MtiFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
