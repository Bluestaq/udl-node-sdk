// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';
import * as SkyimageryHistoryAPI from '../udl/skyimagery/history';
import { type Response } from '../../_shims/index';

export class Skyimagery extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: SkyimageryListParams, options?: Core.RequestOptions): Core.APIPromise<SkyimageryListResponse> {
    return this._client.get('/udl/skyimagery', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: SkyimageryCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/skyimagery/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single SkyImagery binary image by its unique ID
   * passed as a path parameter. The image is returned as an attachment
   * Content-Disposition.
   */
  fileGet(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/udl/skyimagery/getFile/${id}`, {
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Service operation to get a single SkyImagery record by its unique ID passed as a
   * path parameter. SkyImagery represents metadata about a sky image, as well as the
   * actual binary image data.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<SkyimageryHistoryAPI.SkyimageryFull> {
    return this._client.get(`/udl/skyimagery/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/skyimagery/queryhelp', {
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
    query: SkyimageryTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SkyimageryTupleResponse> {
    return this._client.get('/udl/skyimagery/tuple', { query, ...options });
  }

  /**
   * This service operation requires a zip file in the body of the POST request. The
   * zip file must contains exactly two files. 1) A json file with any file name that
   * ends in .json e.g. MyFitsFile.json The contents of the json file must be valid
   * according to the schema for SkyImagery. 2) A binary image file. This can be png,
   * jpeg or fits/eossa file. e.g. MyFitsFile.fits. The metadata and image files will
   * be stored and associated with each other allowing queries of the data retrieval
   * of the binary images. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  uploadZip(body: SkyimageryUploadZipParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-skyimagery', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/zip', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }
}

export type SkyimageryListResponse = Array<SkyimageryListResponse.SkyimageryListResponseItem>;

export namespace SkyimageryListResponse {
  /**
   * Model representation of sky imagery data. Sky imagery is ground or space based
   * telescope imagery of RSO's and includes metadata on the image (time, source,
   * etc) as well as binary image content (e.g. FITS, EOSSA, EOCHIP) . Binary content
   * must be downloaded individually by ID using the 'getFile' operation.
   */
  export interface SkyimageryListResponseItem {
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
     * Start time of the exposure, in ISO 8601 UTC format with microsecond precision.
     */
    expStartTime: string;

    /**
     * The type of image associated with this record (e.g. FITS, EOSSA, EOCHIP).
     */
    imageType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Reference to an annotation document associated with this image.
     */
    annotationKey?: string;

    /**
     * Reference to a calibration document associated with this image.
     */
    calibrationKey?: string;

    /**
     * MD5 value of the file. The ingest/create operation will automatically generate
     * the value.
     */
    checksumValue?: string;

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
     * Optional name/description associated with this image.
     */
    description?: string;

    /**
     * End time of the exposure, in ISO 8601 UTC format with microsecond precision.
     */
    expEndTime?: string;

    /**
     * Name of the uploaded image file.
     */
    filename?: string;

    /**
     * Size of the image file, in bytes.
     */
    filesize?: number;

    /**
     * Field Of View frame height, in degrees.
     */
    frameFOVHeight?: number;

    /**
     * Field Of View frame width, in degrees.
     */
    frameFOVWidth?: number;

    /**
     * Frame height of the image, in number of pixels.
     */
    frameHeightPixels?: number;

    /**
     * Frame width of the image, in number of pixels.
     */
    frameWidthPixels?: number;

    /**
     * Optional identifier of the AttitudeSet data record describing the orientation of
     * an object body.
     */
    idAttitudeSet?: string;

    /**
     * Optional identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * Optional unique identifier of the SOI Observation Set associated with this
     * image.
     */
    idSOISet?: string;

    /**
     * The user-defined set ID of a sequence of images.
     */
    imageSetId?: string;

    /**
     * The number of images in an image set.
     */
    imageSetLength?: number;

    /**
     * String that uniquely identifies the data source.
     */
    imageSourceInfo?: string;

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
     * Optional identifier provided by the imaging source to indicate the target
     * onorbit object of this image. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the imaging source to indicate the sensor
     * identifier which produced this image. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Bit depth of the image, in number of pixels.
     */
    pixelBitDepth?: number;

    /**
     * Field Of View pixel height, in degrees.
     */
    pixelFOVHeight?: number;

    /**
     * Field Of View pixel width, in degrees.
     */
    pixelFOVWidth?: number;

    /**
     * Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at exposure start epoch, in km. If null, can be obtained from
     * sensor info.
     */
    senalt?: number;

    /**
     * Sensor latitude at exposure start epoch, in degrees. If null, can be obtained
     * from sensor info. -90 to 90 degrees (negative values south of equator).
     */
    senlat?: number;

    /**
     * Sensor longitude at exposure start epoch, in degrees. If null, can be obtained
     * from sensor info. -180 to 180 degrees (negative values west of Prime Meridian).
     */
    senlon?: number;

    /**
     * The quaternion describing the rotation of the body-fixed frame used for this
     * system into the local geodetic frame, at exposure start epoch (expStartTime).
     * The array element order convention is scalar component first, followed by the
     * three vector components. For a vector u in the body-fixed frame, the
     * corresponding vector u' in the geodetic frame should satisfy u' = quq\*, where q
     * is this quaternion.
     */
    senQuat?: Array<number>;

    /**
     * The derivative of the quaternion describing the rotation of the body-fixed frame
     * used for this system into the local geodetic frame, exposure start epoch
     * (expStartTime). The array element order convention is scalar component first,
     * followed by the three vector components. For a vector u in the body-fixed frame,
     * the corresponding vector u' in the geodetic frame should satisfy u' = quq\*,
     * where q is this quaternion.
     */
    senQuatDot?: Array<number>;

    /**
     * Sensor x position at exposure start epoch, in km (if mobile/onorbit) in J2000
     * coordinate frame.
     */
    senx?: number;

    /**
     * Sensor y position at exposure start epoch, in km (if mobile/onorbit) in J2000
     * coordinate frame.
     */
    seny?: number;

    /**
     * Sensor z position at exposure start epoch, in km (if mobile/onorbit) in J2000
     * coordinate frame.
     */
    senz?: number;

    /**
     * The sequence ID of an image within an image set.
     */
    sequenceId?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * The telescope pointing azimuth, in degrees, at the exposure start epoch.
     */
    topLeftStartAz?: number;

    /**
     * The telescope pointing elevation, in degrees, at the exposure start epoch.
     */
    topLeftStartEl?: number;

    /**
     * The telescope pointing azimuth, in degrees, at the exposure stop epoch.
     */
    topLeftStopAz?: number;

    /**
     * The telescope pointing elevation, in degrees, at the exposure stop epoch.
     */
    topLeftStopEl?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;
  }
}

export type SkyimageryCountResponse = string;

export type SkyimageryTupleResponse = Array<SkyimageryHistoryAPI.SkyimageryFull>;

export interface SkyimageryListParams {
  /**
   * Start time of the exposure, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  expStartTime: string;
}

export interface SkyimageryCountParams {
  /**
   * Start time of the exposure, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  expStartTime: string;
}

export interface SkyimageryTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Start time of the exposure, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  expStartTime: string;
}

export interface SkyimageryUploadZipParams {
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
   * Start time of the exposure, in ISO 8601 UTC format with microsecond precision.
   */
  expStartTime: string;

  /**
   * The type of image associated with this record (e.g. FITS, EOSSA, EOCHIP).
   */
  imageType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Reference to an annotation document associated with this image.
   */
  annotationKey?: string;

  /**
   * Reference to a calibration document associated with this image.
   */
  calibrationKey?: string;

  /**
   * Optional name/description associated with this image.
   */
  description?: string;

  /**
   * Collection of linked EOObservations.
   */
  eoObservations?: Array<SkyimageryUploadZipParams.EoObservation>;

  /**
   * End time of the exposure, in ISO 8601 UTC format with microsecond precision.
   */
  expEndTime?: string;

  /**
   * Name of the uploaded image file.
   */
  filename?: string;

  /**
   * Size of the image file, in bytes.
   */
  filesize?: number;

  /**
   * Field Of View frame height, in degrees.
   */
  frameFOVHeight?: number;

  /**
   * Field Of View frame width, in degrees.
   */
  frameFOVWidth?: number;

  /**
   * Frame height of the image, in number of pixels.
   */
  frameHeightPixels?: number;

  /**
   * Frame width of the image, in number of pixels.
   */
  frameWidthPixels?: number;

  /**
   * Optional identifier of the AttitudeSet data record describing the orientation of
   * an object body.
   */
  idAttitudeSet?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * Optional unique identifier of the SOI Observation Set associated with this
   * image.
   */
  idSOISet?: string;

  /**
   * The user-defined set ID of a sequence of images.
   */
  imageSetId?: string;

  /**
   * The number of images in an image set.
   */
  imageSetLength?: number;

  /**
   * String that uniquely identifies the data source.
   */
  imageSourceInfo?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the imaging source to indicate the target
   * onorbit object of this image. This may be an internal identifier and not
   * necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the imaging source to indicate the sensor
   * identifier which produced this image. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Bit depth of the image, in number of pixels.
   */
  pixelBitDepth?: number;

  /**
   * Field Of View pixel height, in degrees.
   */
  pixelFOVHeight?: number;

  /**
   * Field Of View pixel width, in degrees.
   */
  pixelFOVWidth?: number;

  /**
   * Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sensor altitude at exposure start epoch, in km. If null, can be obtained from
   * sensor info.
   */
  senalt?: number;

  /**
   * Sensor latitude at exposure start epoch, in degrees. If null, can be obtained
   * from sensor info. -90 to 90 degrees (negative values south of equator).
   */
  senlat?: number;

  /**
   * Sensor longitude at exposure start epoch, in degrees. If null, can be obtained
   * from sensor info. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  senlon?: number;

  /**
   * The quaternion describing the rotation of the body-fixed frame used for this
   * system into the local geodetic frame, at exposure start epoch (expStartTime).
   * The array element order convention is scalar component first, followed by the
   * three vector components. For a vector u in the body-fixed frame, the
   * corresponding vector u' in the geodetic frame should satisfy u' = quq\*, where q
   * is this quaternion.
   */
  senQuat?: Array<number>;

  /**
   * The derivative of the quaternion describing the rotation of the body-fixed frame
   * used for this system into the local geodetic frame, exposure start epoch
   * (expStartTime). The array element order convention is scalar component first,
   * followed by the three vector components. For a vector u in the body-fixed frame,
   * the corresponding vector u' in the geodetic frame should satisfy u' = quq\*,
   * where q is this quaternion.
   */
  senQuatDot?: Array<number>;

  /**
   * Sensor x position at exposure start epoch, in km (if mobile/onorbit) in J2000
   * coordinate frame.
   */
  senx?: number;

  /**
   * Sensor y position at exposure start epoch, in km (if mobile/onorbit) in J2000
   * coordinate frame.
   */
  seny?: number;

  /**
   * Sensor z position at exposure start epoch, in km (if mobile/onorbit) in J2000
   * coordinate frame.
   */
  senz?: number;

  /**
   * The sequence ID of an image within an image set.
   */
  sequenceId?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * The telescope pointing azimuth, in degrees, at the exposure start epoch.
   */
  topLeftStartAz?: number;

  /**
   * The telescope pointing elevation, in degrees, at the exposure start epoch.
   */
  topLeftStartEl?: number;

  /**
   * The telescope pointing azimuth, in degrees, at the exposure stop epoch.
   */
  topLeftStopAz?: number;

  /**
   * The telescope pointing elevation, in degrees, at the exposure stop epoch.
   */
  topLeftStopEl?: number;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

export namespace SkyimageryUploadZipParams {
  /**
   * Model representation of observation data for electro-optical based sensor
   * phenomenologies. ECI J2K is the preferred reference frame for EOObservations,
   * however, several user-specified reference frames are accommodated. Users should
   * check the EOObservation record as well as the 'Discover' tab in the storefront
   * to confirm the coordinate frames used by the data provider.
   */
  export interface EoObservation {
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
     * Ob detection time in ISO 8601 UTC with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Line of sight azimuth angle in degrees and topocentric frame.
     */
    azimuth?: number;

    /**
     * Sensor line of sight azimuth angle bias in degrees.
     */
    azimuthBias?: number;

    /**
     * Rate of change of the line of sight azimuth in degrees per second.
     */
    azimuthRate?: number;

    /**
     * One sigma uncertainty in the line of sight azimuth angle, in degrees.
     */
    azimuthUnc?: number;

    /**
     * Background intensity for IR observations, in kw/sr/um.
     */
    bgIntensity?: number;

    /**
     * Method indicating telescope movement during collection (AUTOTRACK, MANUAL
     * AUTOTRACK, MANUAL RATE TRACK, MANUAL SIDEREAL, SIDEREAL, RATE TRACK).
     */
    collectMethod?: string;

    /**
     * Object Correlation Quality value (non-standardized). Users should consult data
     * providers regarding the expected range of values.
     */
    corrQuality?: number;

    /**
     * Line of sight declination, in degrees, in the specified referenceFrame. If
     * referenceFrame is null then J2K should be assumed.
     */
    declination?: number;

    /**
     * Sensor line of sight declination angle bias in degrees.
     */
    declinationBias?: number;

    /**
     * Line of sight declination rate of change, in degrees/sec, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    declinationRate?: number;

    /**
     * One sigma uncertainty in the line of sight declination angle, in degrees.
     */
    declinationUnc?: number;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Line of sight elevation in degrees and topocentric frame.
     */
    elevation?: number;

    /**
     * Sensor line of sight elevation bias in degrees.
     */
    elevationBias?: number;

    /**
     * Rate of change of the line of sight elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the line of sight elevation angle, in degrees.
     */
    elevationUnc?: number;

    /**
     * Model representation of additional detailed observation data for electro-optical
     * based sensor phenomenologies.
     */
    eoobservationDetails?: EoObservation.EoobservationDetails;

    /**
     * Image exposure duration in seconds.
     */
    expDuration?: number;

    /**
     * The number of RSOs detected in the sensor field of view.
     */
    fovCount?: number;

    /**
     * For GEO detections, the altitude in km.
     */
    geoalt?: number;

    /**
     * For GEO detections, the latitude in degrees north.
     */
    geolat?: number;

    /**
     * For GEO detections, the longitude in degrees east.
     */
    geolon?: number;

    /**
     * For GEO detections, the range in km.
     */
    georange?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * Unique identifier of the Sky Imagery.
     */
    idSkyImagery?: string;

    /**
     * Intensity of the target for IR observations, in kw/sr/um.
     */
    intensity?: number;

    /**
     * One sigma uncertainty in the line of sight pointing in micro-radians.
     */
    losUnc?: number;

    /**
     * Line-of-sight cartesian X position of the target, in km, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losx?: number;

    /**
     * Line-of-sight cartesian X velocity of target, in km/sec, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losxvel?: number;

    /**
     * Line-of-sight cartesian Y position of the target, in km, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losy?: number;

    /**
     * Line-of-sight cartesian Y velocity of target, in km/sec, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losyvel?: number;

    /**
     * Line-of-sight cartesian Z position of the target, in km, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losz?: number;

    /**
     * Line-of-sight cartesian Z velocity of target, in km/sec, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    loszvel?: number;

    /**
     * Calibrated magnitude in units of magnitudes.
     */
    mag?: number;

    /**
     * Formula: mag - 5.0 \* log_10(geo_range / 1000000.0).
     */
    magNormRange?: number;

    /**
     * Uncertainty of calibrated magnitude in units of magnitudes.
     */
    magUnc?: number;

    /**
     * Net object signature = counts / expDuration.
     */
    netObjSig?: number;

    /**
     * Net object signature uncertainty = counts uncertainty / expDuration.
     */
    netObjSigUnc?: number;

    /**
     * The position of this observation within a track (FENCE, FIRST, IN, LAST,
     * SINGLE). This identifier is optional and, if null, no assumption should be made
     * regarding whether other observations may or may not exist to compose a track.
     */
    obPosition?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by observation source to indicate the target
     * onorbit object of this observation. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Boolean indicating that the target object was in a penumbral eclipse at the time
     * of this observation.
     */
    penumbra?: boolean;

    /**
     * Primary Extinction Coefficient, in Magnitudes. Primary Extinction is the
     * coefficient applied to the airmass to determine how much the observed visual
     * magnitude has been attenuated by the atmosphere. Extinction, in general,
     * describes the absorption and scattering of electromagnetic radiation by dust and
     * gas between an emitting astronomical object and the observer. See the
     * EOObservationDetails API for specification of extinction coefficients for
     * multiple spectral filters.
     */
    primaryExtinction?: number;

    /**
     * Primary Extinction Coefficient Uncertainty, in Magnitudes.
     */
    primaryExtinctionUnc?: number;

    /**
     * Line of sight right ascension, in degrees, in the specified referenceFrame. If
     * referenceFrame is null then J2K should be assumed.
     */
    ra?: number;

    /**
     * Sensor line of sight right ascension bias in degrees.
     */
    raBias?: number;

    /**
     * Line of sight range in km.
     */
    range?: number;

    /**
     * Sensor line of sight range bias in km.
     */
    rangeBias?: number;

    /**
     * Rate of change of the line of sight range in km/sec.
     */
    rangeRate?: number;

    /**
     * One sigma uncertainty in the line of sight range rate, in kilometers/second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the line of sight range, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Line of sight right ascension rate of change, in degrees/sec, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    raRate?: number;

    /**
     * One sigma uncertainty in the line of sight right ascension angle, in degrees.
     */
    raUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * The reference frame of the EOObservation measurements. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: 'J2000' | 'GCRF' | 'ITRF' | 'TEME';

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at obTime (if mobile/onorbit) in km.
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude at obTime (if mobile/onorbit) in degrees. If null, can be
     * obtained from sensor info. -90 to 90 degrees (negative values south of equator).
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude at obTime (if mobile/onorbit) in degrees. If null, can be
     * obtained from sensor info. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    senlon?: number;

    /**
     * The quaternion describing the rotation of the sensor in relation to the
     * body-fixed frame used for this system into the local geodetic frame, at
     * observation time (obTime). The array element order convention is scalar
     * component first, followed by the three vector components (qc, q1, q2, q3).
     */
    senQuat?: Array<number>;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Cartesian X velocity of the observing mobile/onorbit sensor at obTime, in
     * km/sec, in the specified senReferenceFrame. If senReferenceFrame is null then
     * J2K should be assumed.
     */
    senvelx?: number;

    /**
     * Cartesian Y velocity of the observing mobile/onorbit sensor at obTime, in
     * km/sec, in the specified senReferenceFrame. If senReferenceFrame is null then
     * J2K should be assumed.
     */
    senvely?: number;

    /**
     * Cartesian Z velocity of the observing mobile/onorbit sensor at obTime, in
     * km/sec, in the specified senReferenceFrame. If senReferenceFrame is null then
     * J2K should be assumed.
     */
    senvelz?: number;

    /**
     * Cartesian X position of the observing mobile/onorbit sensor at obTime, in km, in
     * the specified senReferenceFrame. If senReferenceFrame is null then J2K should be
     * assumed.
     */
    senx?: number;

    /**
     * Cartesian Y position of the observing mobile/onorbit sensor at obTime, in km, in
     * the specified senReferenceFrame. If senReferenceFrame is null then J2K should be
     * assumed.
     */
    seny?: number;

    /**
     * Cartesian Z position of the observing mobile/onorbit sensor at obTime, in km, in
     * the specified senReferenceFrame. If senReferenceFrame is null then J2K should be
     * assumed.
     */
    senz?: number;

    /**
     * Shutter delay in seconds.
     */
    shutterDelay?: number;

    /**
     * Average Sky Background signal, in Magnitudes. Sky Background refers to the
     * incoming light from an apparently empty part of the night sky.
     */
    skyBkgrnd?: number;

    /**
     * Angle from the sun to the equatorial plane.
     */
    solarDecAngle?: number;

    /**
     * The angle, in degrees, between the projections of the target-to-observer vector
     * and the target-to-sun vector onto the equatorial plane. The angle is represented
     * as negative when closing and positive when opening.
     */
    solarEqPhaseAngle?: number;

    /**
     * The angle, in degrees, between the target-to-observer vector and the
     * target-to-sun vector.
     */
    solarPhaseAngle?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to indicate the specific tasking which produced this
     * observation.
     */
    taskId?: string;

    /**
     * Sensor timing bias in seconds.
     */
    timingBias?: number;

    /**
     * Optional identifier of the track to which this observation belongs.
     */
    trackId?: string;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Boolean indicating this observation is part of an uncorrelated track or was
     * unable to be correlated to a known object. This flag should only be set to true
     * by data providers after an attempt to correlate to an on-orbit object was made
     * and failed. If unable to correlate, the 'origObjectId' field may be populated
     * with an internal data provider specific identifier.
     */
    uct?: boolean;

    /**
     * Boolean indicating that the target object was in umbral eclipse at the time of
     * this observation.
     */
    umbra?: boolean;

    /**
     * Formula: 2.5 \* log_10 (zero_mag_counts / expDuration).
     */
    zeroptd?: number;

    /**
     * This is the uncertainty in the zero point for the filter used for this
     * observation/row in units of mag. For use with differential photometry.
     */
    zeroPtdUnc?: number;
  }

  export namespace EoObservation {
    /**
     * Model representation of additional detailed observation data for electro-optical
     * based sensor phenomenologies.
     */
    export interface EoobservationDetails {
      /**
       * World Coordinate System (WCS) X pixel origin in astrometric fit.
       */
      acalCrPixX?: number;

      /**
       * World Coordinate System (WCS) Y pixel origin in astrometric fit.
       */
      acalCrPixY?: number;

      /**
       * World Coordinate System (WCS) equatorial coordinate X origin corresponding to
       * CRPIX in astrometric fit in degrees.
       */
      acalCrValX?: number;

      /**
       * World Coordinate System (WCS) equatorial coordinate Y origin corresponding to
       * CRPIX in astrometric fit in degrees.
       */
      acalCrValY?: number;

      /**
       * Number of stars used in astrometric fit.
       */
      acalNumStars?: number;

      /**
       * This is the background signal at or in the vicinity of the radiometric source
       * position. Specifically, this is the average background count level (DN/pixel)
       * divided by the exposure time in seconds of the background pixels used in the
       * photometric extraction. DN/pixel/sec.
       */
      backgroundSignal?: number;

      /**
       * Estimated 1-sigma uncertainty in the background signal at or in the vicinity of
       * the radiometric source position. DN/pixel/sec.
       */
      backgroundSignalUnc?: number;

      /**
       * The number of pixels binned horizontally.
       */
      binningHoriz?: number;

      /**
       * The number of pixels binned vertically.
       */
      binningVert?: number;

      /**
       * The x centroid position on the CCD of the target object in pixels.
       */
      ccdObjPosX?: number;

      /**
       * The y centroid position on the CCD of the target object in pixels.
       */
      ccdObjPosY?: number;

      /**
       * This is the pixel width of the target. This is either a frame-by-frame
       * measurement or a constant point spread function or synthetic aperture used in
       * the extraction.
       */
      ccdObjWidth?: number;

      /**
       * Operating temperature of CCD recorded during exposure or measured during
       * calibrations in K.
       */
      ccdTemp?: number;

      /**
       * Observed centroid column number on the focal plane in pixels (0 is left edge,
       * 0.5 is center of pixels along left of image).
       */
      centroidColumn?: number;

      /**
       * Observed centroid row number on the focal plane in pixels (0 is top edge, 0.5 is
       * center of pixels along top of image).
       */
      centroidRow?: number;

      /**
       * Classification marking of the data in IC/CAPCO Portion-marked format, will be
       * set to EOObservation classificationMarking if blank.
       */
      classificationMarking?: string;

      /**
       * Color coefficient for filter n for a space-based sensor where there is no
       * atmospheric extinction. Must be present for all values n=1 to
       * numSpectralFilters, in incrementing order of n, and for no other values of n.
       */
      colorCoeffs?: Array<number>;

      /**
       * Spatial variance of image distribution in horizontal direction measured in
       * pixels squared.
       */
      columnVariance?: number;

      /**
       * The reference number n, in neutralDensityFilters for the currently used neutral
       * density filter.
       */
      currentNeutralDensityFilterNum?: number;

      /**
       * The reference number, x, where x ranges from 1 to n, where n is the number
       * specified in spectralFilters that corresponds to the spectral filter given in
       * the corresponding spectralFilterNames.
       */
      currentSpectralFilterNum?: number;

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
       *
       * , will be set to EOObservation dataMode if blank.
       */
      dataMode?: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

      /**
       * Covariance (Y^2) in measured declination (Y) in deg^2.
       */
      declinationCov?: number;

      /**
       * An array of measurements that correspond to the distance from the streak center
       * measured from the optical image in pixels that show change over an interval of
       * time. The array length is dependent on the length of the streak. The
       * distFromStreakCenter, surfBrightness, and surfBrightnessUnc arrays will match in
       * size.
       */
      distFromStreakCenter?: Array<number>;

      /**
       * Degrees Off Element Set.
       */
      does?: number;

      /**
       * The extinction coefficient computed for the nth filter. Must be present for all
       * values n=1 to numSpectralFilters, in incrementing order of n, and for no other
       * values of n. Units = mag/airmass.
       */
      extinctionCoeffs?: Array<number>;

      /**
       * This is the uncertainty in the extinction coefficient for the nth filter. Must
       * be present for all values n=1 to numSpectralFilters, in incrementing order of n,
       * and for no other values of n. -9999 for space-based sensors. Units =
       * mag/airmass.
       */
      extinctionCoeffsUnc?: Array<number>;

      /**
       * Some sensors have gain settings. This value is the gain used during the
       * observation in units e-/ADU. If no gain is used, the value = 1.
       */
      gain?: number;

      /**
       * Unique identifier of the parent EOObservation.
       */
      idEOObservation?: string;

      /**
       * Sensor instantaneous field of view (ratio of pixel pitch to focal length).
       */
      ifov?: number;

      /**
       * Instrumental magnitude of a sensor before corrections are applied for atmosphere
       * or to transform to standard magnitude scale.
       */
      magInstrumental?: number;

      /**
       * Uncertainty in the instrumental magnitude.
       */
      magInstrumentalUnc?: number;

      /**
       * Must be present for all values n=1 to numNeutralDensityFilters, in incrementing
       * order of n, and for no other values of n.
       */
      neutralDensityFilterNames?: Array<string>;

      /**
       * The transmission of the nth neutral density filter. Must be present for all
       * values n=1 to numNeutralDensityFilters, in incrementing order of n, and for no
       * other values of n.
       */
      neutralDensityFilterTransmissions?: Array<number>;

      /**
       * This is the uncertainty in the transmission for the nth filter. Must be present
       * for all values n=1 to numNeutralDensityFilters, in incrementing order of n, and
       * for no other values of n.
       */
      neutralDensityFilterTransmissionsUnc?: Array<number>;

      /**
       * Number of catalog stars in the detector field of view (FOV) with the target
       * object. Can be 0 for narrow FOV sensors.
       */
      numCatalogStars?: number;

      /**
       * Number of correlated stars in the FOV with the target object. Can be 0 for
       * narrow FOV sensors.
       */
      numCorrelatedStars?: number;

      /**
       * Number of detected stars in the FOV with the target object. Helps identify
       * frames with clouds.
       */
      numDetectedStars?: number;

      /**
       * The value is the number of neutral density filters used.
       */
      numNeutralDensityFilters?: number;

      /**
       * The value is the number of spectral filters used.
       */
      numSpectralFilters?: number;

      /**
       * Distance from the target object to the sun during the observation in meters.
       */
      objSunRange?: number;

      /**
       * Ob detection time in ISO 8601 UTC with microsecond precision, will be set to
       * EOObservation obTime if blank.
       */
      obTime?: string;

      /**
       * Optical Cross Section computed in units m(2)/ster.
       */
      opticalCrossSection?: number;

      /**
       * Uncertainty in Optical Cross Section computed in units m(2)/ster.
       */
      opticalCrossSectionUnc?: number;

      /**
       * Number of stars used in photometric fit count.
       */
      pcalNumStars?: number;

      /**
       * Peak Aperture Raw Counts is the value of the peak pixel in the real or synthetic
       * aperture containing the target signal.
       */
      peakApertureCount?: number;

      /**
       * Peak Background Raw Counts is the largest pixel value used in background signal.
       */
      peakBackgroundCount?: number;

      /**
       * Solar phase angle bisector vector. The vector that bisects the solar phase
       * angle. The phase angle bisector is the angle that is << of the value in #48.
       * Then calculate the point on the RA/DEC (ECI J2000.0) sphere that a vector at
       * this angle would intersect.
       */
      phaseAngBisect?: number;

      /**
       * Pixel array size (height) in pixels.
       */
      pixelArrayHeight?: number;

      /**
       * Pixel array size (width) in pixels.
       */
      pixelArrayWidth?: number;

      /**
       * Maximum valid pixel value, this is defined as 2^(number of bits per pixel). For
       * example, a CCD with 8-bitpixels, would have a maximum valid pixel value of 2^8
       * = 256. This can represent the saturation value of the detector, but some sensors
       * will saturate at a value significantly lower than full well depth. This is the
       * analog-to-digital conversion (ADC) saturation value.
       */
      pixelMax?: number;

      /**
       * Minimum valid pixel value, this is typically 0.
       */
      pixelMin?: number;

      /**
       * Predicted Azimuth angle of the target object from a ground -based sensor (no
       * atmospheric refraction correction required). AZ_EL implies apparent topocentric
       * place in true of date reference frame as seen from the observer with aberration
       * due to the observer velocity and light travel time applied.
       */
      predictedAzimuth?: number;

      /**
       * Predicted Declination of the Target object from the frame of reference of the
       * sensor (J2000, geocentric velocity aberration). SGP4 and VCMs produce geocentric
       * origin and velocity aberration and subtracting the sensor geocentric position of
       * the sensor places in its reference frame.
       */
      predictedDeclination?: number;

      /**
       * Uncertainty of Predicted Declination of the Target object from the frame of
       * reference of the sensor (J2000, geocentric velocity aberration). SGP4 and VCMs
       * produce geocentric origin and velocity aberration and subtracting the sensor
       * geocentric position of the sensor places in its reference frame.
       */
      predictedDeclinationUnc?: number;

      /**
       * Predicted elevation angle of the target object from a ground -based sensor (no
       * atmospheric refraction correction required). AZ_EL implies apparent topocentric
       * place in true of date reference frame as seen from the observer with aberration
       * due to the observer velocity and light travel time applied.
       */
      predictedElevation?: number;

      /**
       * Predicted Right Ascension of the Target object from the frame of reference of
       * the sensor (J2000, geocentric velocity aberration). SGP4 and VCMs produce
       * geocentric origin and velocity aberration and subtracting the sensor geocentric
       * position of the sensor places in its reference frame.
       */
      predictedRa?: number;

      /**
       * Uncertainty of predicted Right Ascension of the Target object from the frame of
       * reference of the sensor (J2000, geocentric velocity aberration). SGP4 and VCMs
       * produce geocentric origin and velocity aberration and subtracting the sensor
       * geocentric position of the sensor places in its reference frame.
       */
      predictedRaUnc?: number;

      /**
       * Covariance (x^2) in measured Right Ascension (X) in deg^2.
       */
      raCov?: number;

      /**
       * Covariance (XY) in measured ra/declination (XY) in deg^2.
       */
      raDeclinationCov?: number;

      /**
       * Spatial covariance of image distribution across horizontal and vertical
       * directions measured in pixels squared.
       */
      rowColCov?: number;

      /**
       * Spatial variance of image distribution in vertical direction measured in pixels
       * squared.
       */
      rowVariance?: number;

      /**
       * Estimated signal-to-noise ratio (SNR) for the total radiometric signal. Under
       * some algorithms, this can be a constant per target (not per observation). Note:
       * this SNR applies to the total signal of the radiometric source (i.e.,
       * Net_Obj_Sig with units DN/sec), not to be confused with the SNR of the signal in
       * the peak pixel (i.e., DN/pixel/sec).
       */
      snrEst?: number;

      /**
       * Fraction of the sun that is illuminating the target object. This indicates if
       * the target is in the Earth’s penumbra or umbra. (It is 0 when object is in umbra
       * and 1 when object is fully illuminated.).
       */
      solarDiskFrac?: number;

      /**
       * Source of the data, will be set to EOObservation source if blank.
       */
      source?: string;

      /**
       * Array of the SpectralFilters keywords, must be present for all values n=1 to
       * numSpectralFilters, in incrementing order of n, and for no other values of n.
       */
      spectralFilters?: Array<string>;

      /**
       * This is the in-band solar magnitude at 1 A.U. Must be present for all values n=1
       * to numSpectralFilters, in incrementing order of n, and for no other values of n.
       * Units = mag.
       */
      spectralFilterSolarMag?: Array<number>;

      /**
       * This is the in-band average irradiance of a 0th mag source. Must be present for
       * all values n=1 to numSpectralFilters, in incrementing order of n, and for no
       * other values of n. Units = W/m2/nm.
       */
      spectralZMFL?: Array<number>;

      /**
       * Azimuth angle of the sun from a ground-based telescope (no atmospheric
       * refraction correction required) the observer with aberration due to the observer
       * velocity and light travel time applied.
       */
      sunAzimuth?: number;

      /**
       * Elevation angle of the sun from a ground-based telescope (no atmospheric
       * refraction correction required).
       */
      sunElevation?: number;

      /**
       * Sun state vector in ECI J2000 coordinate frame in km.
       */
      sunStatePosX?: number;

      /**
       * Sun state vector in ECI J2000 coordinate frame in km.
       */
      sunStatePosY?: number;

      /**
       * Sun state vector in ECI J2000 coordinate frame in km.
       */
      sunStatePosZ?: number;

      /**
       * Sun state vector in ECI J2000 coordinate frame in km/sec.
       */
      sunStateVelX?: number;

      /**
       * Sun state vector in ECI J2000 coordinate frame in km/sec.
       */
      sunStateVelY?: number;

      /**
       * Sun state vector in ECI J2000 coordinate frame in km/sec.
       */
      sunStateVelZ?: number;

      /**
       * An array of surface brightness measurements in magnitudes per square arcsecond
       * from the optical image that show change over an interval of time. The array
       * length is dependent on the length of the streak. The distFromStreakCenter,
       * surfBrightness, and surfBrightnessUnc arrays will match in size.
       */
      surfBrightness?: Array<number>;

      /**
       * An array of surface brightness uncertainty measurements in magnitudes per square
       * arcsecond from the optical image that show change over an interval of time. The
       * array length is dependent on the length of the streak. The distFromStreakCenter,
       * surfBrightness, and surfBrightnessUnc arrays will match in size.
       */
      surfBrightnessUnc?: Array<number>;

      /**
       * Uncertainty in the times reported in UTC in seconds.
       */
      timesUnc?: number;

      /**
       * Time off element set.
       */
      toes?: number;

      /**
       * This is the value for the zero-point calculated for each filter denoted in
       * spectralFilters. It is the difference between the catalog mag and instrumental
       * mag for a set of standard stars. For use with All Sky photometry. Must be
       * present for all values n=1 to numSpectralFilters, in incrementing order of n,
       * and for no other values of n.
       */
      zeroPoints?: Array<number>;

      /**
       * This is the uncertainty in the zero point for the filter denoted in
       * spectralFilters. For use with All Sky photometry. Must be present for all values
       * n=1 to numSpectralFilters, in incrementing order of n, and for no other values
       * of n.
       */
      zeroPointsUnc?: Array<number>;
    }
  }
}

Skyimagery.History = History;

export declare namespace Skyimagery {
  export {
    type SkyimageryListResponse as SkyimageryListResponse,
    type SkyimageryCountResponse as SkyimageryCountResponse,
    type SkyimageryTupleResponse as SkyimageryTupleResponse,
    type SkyimageryListParams as SkyimageryListParams,
    type SkyimageryCountParams as SkyimageryCountParams,
    type SkyimageryTupleParams as SkyimageryTupleParams,
    type SkyimageryUploadZipParams as SkyimageryUploadZipParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
