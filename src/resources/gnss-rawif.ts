// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class GnssRawif extends APIResource {
  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: GnssRawifListParams,
    options?: RequestOptions,
  ): PagePromise<GnssRawifListResponsesOffsetPage, GnssRawifListResponse> {
    return this._client.getAPIList('/udl/gnssrawif', OffsetPage<GnssRawifListResponse>, {
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
  count(query: GnssRawifCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/gnssrawif/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single GNSSRAWIF hdf5 file by its unique ID passed as
   * a path parameter. The file is returned as an attachment Content-Disposition.
   */
  fileGet(
    id: string,
    query: GnssRawifFileGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/udl/gnssrawif/getFile/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Service operation to get a single GNSSRawIF by its unique ID passed as a path
   * parameter.
   */
  get(
    id: string,
    query: GnssRawifGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GnssRawifGetResponse> {
    return this._client.get(path`/udl/gnssrawif/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<GnssRawifQueryhelpResponse> {
    return this._client.get('/udl/gnssrawif/queryhelp', options);
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
  tuple(query: GnssRawifTupleParams, options?: RequestOptions): APIPromise<GnssRawifTupleResponse> {
    return this._client.get('/udl/gnssrawif/tuple', { query, ...options });
  }

  /**
   * Upload an HDF5 file with its metadata.
   *
   * The request body requires a zip file containing exactly two files:\
   * 1\) A file with the `.json` file extension whose content conforms to the `GNSSRawIF_Ingest`
   * schema.\
   * 2\) A file with the `.hdf5` file extension.
   *
   * The JSON and HDF5 files will be associated with each other via the `id` field.
   * Query the metadata via `GET /udl/gnssrawif` and use
   * `GET /udl/gnssrawif/getFile/{id}` to retrieve the HDF5 file.
   *
   * This operation only accepts application/zip media. The application/json request
   * body is documented to provide a convenient reference to the ingest schema.
   *
   * This operation is intended to be used for automated feeds into UDL. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   */
  uploadZip(body: GnssRawifUploadZipParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/filedrop/udl-gnssrawif',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export type GnssRawifListResponsesOffsetPage = OffsetPage<GnssRawifListResponse>;

/**
 * Global Navigation Satellite System (GNSS) Raw Intermediate Frequency (IF) data
 * are the recorded streams of raw signal samples after down-conversion of the
 * received signal to IF and prior to any processing onboard the receiving
 * spacecraft. These data sets are processed in various geophysical applications
 * and used to characterize Electromagnetic Interference (EMI) in the operating
 * environment.
 */
export interface GnssRawifListResponse {
  /**
   * The center frequency, in MHz, of the observation bands. More than one band may
   * be reported in each binary file, so this is an array of the center frequency of
   * each band (including an array of length 1 if only one band is present).
   */
  centerFreq: Array<number>;

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
   * End time of the data contained in the associated binary file, in ISO 8601 UTC
   * format with microsecond precision.
   */
  endTime: string;

  /**
   * The file name of the Raw IF Binary file. The files should be in the Hierarchical
   * Data Format (HDF5).
   */
  fileName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Start time of the data contained in the associated binary file, in ISO 8601 UTC
   * format with microsecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The number of bits in each datum, for example 2 for 2-bit integers or 8 for
   * 8-bit integers.
   */
  bitDepth?: number;

  /**
   * Unit vector of the outward facing direction of the receiver boresight in a
   * body-fixed coordinate system.
   */
  boresight?: Array<number>;

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
   * The amount of data generated per unit time, expressed in Megabytes/minute.
   */
  dataRate?: number;

  /**
   * Differential Code Biases (DCBs) are the systematic errors, or biases, between
   * two GNSS code observations at the same or different frequencies. If applicable,
   * this field should contain an array of DBC with length equal to the number of
   * frequencies in the binary file. The reference frequency should show DCB equal
   * to 0. If null, it is assumed that there is no DCB (all values are 0).
   */
  diffCodeBias?: Array<number>;

  /**
   * Spacecraft altitude at end time (endTime), expressed in kilometers above WGS-84
   * ellipsoid.
   */
  endAlt?: number;

  /**
   * WGS-84 spacecraft latitude sub-point at end time (endTime), represented as -90
   * to 90 degrees (negative values south of equator).
   */
  endLat?: number;

  /**
   * WGS-84 spacecraft longitude sub-point at end time (endTime), represented as -180
   * to 180 degrees (negative values west of Prime Meridian).
   */
  endLon?: number;

  /**
   * Unique identifier of the parent Ephemeris Set, if this data is correlated with
   * an Ephemeris. If reporting for a spacecraft with multiple onboard GNSS
   * receivers, this ID may be associated with multiple GNSS Raw IF records if each
   * receiver is synced to the ephemeris points.
   */
  esId?: string;

  /**
   * Optional source-provided identifier for this collection event. This field can be
   * used to associate records related to the same event.
   */
  eventId?: string;

  /**
   * The binary file size, in bytes, auto-populated by the system. The maximum file
   * size for this service is 5,000,000 Bytes (5 MB). Files exceeding the maximum
   * size will be rejected.
   */
  fileSize?: number;

  /**
   * Unique identifier of the primary satellite on-orbit object.
   */
  idOnOrbit?: string;

  /**
   * The center frequency, in MHz, after downconversion to intermediate frequency. If
   * provided, this array should have the same length as centerFreqs.
   */
  ifFreq?: Array<number>;

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
   * Optional identifier provided by the data source to indicate the target object of
   * this record. This may be an internal identifier and not necessarily map to a
   * valid satellite number.
   */
  origObjectId?: string;

  /**
   * After converting the raw data in the file, to generate (frequency-space) spectra
   * some sets require an additional transformation or correction based on details of
   * the hardware that recorded it. This field marks any such transformations.
   * Currently supported options are NONE (no correction) and MIRRORED (frequency
   * axis is flipped around the corresponding value of ifFreq). If null, it is
   * assumed that NONE applies to all frequency bands.
   */
  postFourier?: Array<string>;

  /**
   * The quaternion describing the rotation of the body-fixed frame used for this
   * system into the local geodetic frame, at the sample start time (startTime). The
   * array element order convention is scalar component first, followed by the three
   * vector components. For a vector u in the body-fixed frame, the corresponding
   * vector u' in the geodetic frame should satisfy u' = quq\*, where q is this
   * quaternion. The quaternion should be normalized to 1.
   */
  quat?: Array<number>;

  /**
   * The number or ID of the GNSS receiver associated with this data. If reporting
   * for multiple receivers a separate record should be generated for each. If null,
   * it is assumed to indicate that only one receiver is present, or reported.
   */
  receiver?: string;

  /**
   * The number of samples taken per second.
   */
  sampleRate?: Array<number>;

  /**
   * The sample type associated with the IF data. REAL for data with only an
   * I-component or COMPLEX for data with both I & Q components.
   */
  sampleType?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The sequence number of a raw IF record/file within a set. Sequence number should
   * start at 1. If null, then it is assumed that the order of records within a raw
   * IF set is not relevant.
   */
  sequenceID?: number;

  /**
   * User-defined ID of a set or sequence of records/files. Used to associate a set
   * of related raw IF records.
   */
  setId?: string;

  /**
   * The number of raw IF records/files in a set.
   */
  setLength?: number;

  /**
   * Array of UUIDs of the UDL data records associated with this GNSSRawIF record.
   * See the associated 'srcTyps' array for the specific types of data, positionally
   * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
   * match in size. See the corresponding srcTyps array element for the data type of
   * the UUID and use the appropriate API operation to retrieve that object (e.g.
   * /udl/gnssobservationset/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (GNSSSET) associated with this GNSSRawIF record. See
   * the associated 'srcIds' array for the record UUIDs, positionally corresponding
   * to the record types in this array. The 'srcTyps' and 'srcIds' arrays must match
   * in size.
   */
  srcTyps?: Array<string>;

  /**
   * Spacecraft altitude at start time (startTime), expressed in kilometers above
   * WGS-84 ellipsoid.
   */
  startAlt?: number;

  /**
   * The index of the sample within the associated binary file that corresponds to
   * the startTime indicated in this record. This is especially useful on high
   * sample-rate sensors when some samples are less than one microsecond before the
   * value of startTime. This index is 0-based. If null, the startIndex is assumed to
   * be 0.
   */
  startIndex?: number;

  /**
   * WGS-84 spacecraft latitude sub-point at start time (startTime), represented as
   * -90 to 90 degrees (negative values south of equator).
   */
  startLat?: number;

  /**
   * WGS-84 spacecraft longitude sub-point at start time (startTime), represented as
   * -180 to 180 degrees (negative values west of Prime Meridian).
   */
  startLon?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;
}

export type GnssRawifCountResponse = string;

/**
 * Global Navigation Satellite System (GNSS) Raw Intermediate Frequency (IF) data
 * are the recorded streams of raw signal samples after down-conversion of the
 * received signal to IF and prior to any processing onboard the receiving
 * spacecraft. These data sets are processed in various geophysical applications
 * and used to characterize Electromagnetic Interference (EMI) in the operating
 * environment.
 */
export interface GnssRawifGetResponse {
  /**
   * The center frequency, in MHz, of the observation bands. More than one band may
   * be reported in each binary file, so this is an array of the center frequency of
   * each band (including an array of length 1 if only one band is present).
   */
  centerFreq: Array<number>;

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
   * End time of the data contained in the associated binary file, in ISO 8601 UTC
   * format with microsecond precision.
   */
  endTime: string;

  /**
   * The file name of the Raw IF Binary file. The files should be in the Hierarchical
   * Data Format (HDF5).
   */
  fileName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Start time of the data contained in the associated binary file, in ISO 8601 UTC
   * format with microsecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The number of bits in each datum, for example 2 for 2-bit integers or 8 for
   * 8-bit integers.
   */
  bitDepth?: number;

  /**
   * Unit vector of the outward facing direction of the receiver boresight in a
   * body-fixed coordinate system.
   */
  boresight?: Array<number>;

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
   * The amount of data generated per unit time, expressed in Megabytes/minute.
   */
  dataRate?: number;

  /**
   * Differential Code Biases (DCBs) are the systematic errors, or biases, between
   * two GNSS code observations at the same or different frequencies. If applicable,
   * this field should contain an array of DBC with length equal to the number of
   * frequencies in the binary file. The reference frequency should show DCB equal
   * to 0. If null, it is assumed that there is no DCB (all values are 0).
   */
  diffCodeBias?: Array<number>;

  /**
   * Spacecraft altitude at end time (endTime), expressed in kilometers above WGS-84
   * ellipsoid.
   */
  endAlt?: number;

  /**
   * WGS-84 spacecraft latitude sub-point at end time (endTime), represented as -90
   * to 90 degrees (negative values south of equator).
   */
  endLat?: number;

  /**
   * WGS-84 spacecraft longitude sub-point at end time (endTime), represented as -180
   * to 180 degrees (negative values west of Prime Meridian).
   */
  endLon?: number;

  /**
   * Unique identifier of the parent Ephemeris Set, if this data is correlated with
   * an Ephemeris. If reporting for a spacecraft with multiple onboard GNSS
   * receivers, this ID may be associated with multiple GNSS Raw IF records if each
   * receiver is synced to the ephemeris points.
   */
  esId?: string;

  /**
   * Optional source-provided identifier for this collection event. This field can be
   * used to associate records related to the same event.
   */
  eventId?: string;

  /**
   * The binary file size, in bytes, auto-populated by the system. The maximum file
   * size for this service is 5,000,000 Bytes (5 MB). Files exceeding the maximum
   * size will be rejected.
   */
  fileSize?: number;

  /**
   * Unique identifier of the primary satellite on-orbit object.
   */
  idOnOrbit?: string;

  /**
   * The center frequency, in MHz, after downconversion to intermediate frequency. If
   * provided, this array should have the same length as centerFreqs.
   */
  ifFreq?: Array<number>;

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
   * Optional identifier provided by the data source to indicate the target object of
   * this record. This may be an internal identifier and not necessarily map to a
   * valid satellite number.
   */
  origObjectId?: string;

  /**
   * After converting the raw data in the file, to generate (frequency-space) spectra
   * some sets require an additional transformation or correction based on details of
   * the hardware that recorded it. This field marks any such transformations.
   * Currently supported options are NONE (no correction) and MIRRORED (frequency
   * axis is flipped around the corresponding value of ifFreq). If null, it is
   * assumed that NONE applies to all frequency bands.
   */
  postFourier?: Array<string>;

  /**
   * The quaternion describing the rotation of the body-fixed frame used for this
   * system into the local geodetic frame, at the sample start time (startTime). The
   * array element order convention is scalar component first, followed by the three
   * vector components. For a vector u in the body-fixed frame, the corresponding
   * vector u' in the geodetic frame should satisfy u' = quq\*, where q is this
   * quaternion. The quaternion should be normalized to 1.
   */
  quat?: Array<number>;

  /**
   * The number or ID of the GNSS receiver associated with this data. If reporting
   * for multiple receivers a separate record should be generated for each. If null,
   * it is assumed to indicate that only one receiver is present, or reported.
   */
  receiver?: string;

  /**
   * The number of samples taken per second.
   */
  sampleRate?: Array<number>;

  /**
   * The sample type associated with the IF data. REAL for data with only an
   * I-component or COMPLEX for data with both I & Q components.
   */
  sampleType?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The sequence number of a raw IF record/file within a set. Sequence number should
   * start at 1. If null, then it is assumed that the order of records within a raw
   * IF set is not relevant.
   */
  sequenceID?: number;

  /**
   * User-defined ID of a set or sequence of records/files. Used to associate a set
   * of related raw IF records.
   */
  setId?: string;

  /**
   * The number of raw IF records/files in a set.
   */
  setLength?: number;

  /**
   * Array of UUIDs of the UDL data records associated with this GNSSRawIF record.
   * See the associated 'srcTyps' array for the specific types of data, positionally
   * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
   * match in size. See the corresponding srcTyps array element for the data type of
   * the UUID and use the appropriate API operation to retrieve that object (e.g.
   * /udl/gnssobservationset/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (GNSSSET) associated with this GNSSRawIF record. See
   * the associated 'srcIds' array for the record UUIDs, positionally corresponding
   * to the record types in this array. The 'srcTyps' and 'srcIds' arrays must match
   * in size.
   */
  srcTyps?: Array<string>;

  /**
   * Spacecraft altitude at start time (startTime), expressed in kilometers above
   * WGS-84 ellipsoid.
   */
  startAlt?: number;

  /**
   * The index of the sample within the associated binary file that corresponds to
   * the startTime indicated in this record. This is especially useful on high
   * sample-rate sensors when some samples are less than one microsecond before the
   * value of startTime. This index is 0-based. If null, the startIndex is assumed to
   * be 0.
   */
  startIndex?: number;

  /**
   * WGS-84 spacecraft latitude sub-point at start time (startTime), represented as
   * -90 to 90 degrees (negative values south of equator).
   */
  startLat?: number;

  /**
   * WGS-84 spacecraft longitude sub-point at start time (startTime), represented as
   * -180 to 180 degrees (negative values west of Prime Meridian).
   */
  startLon?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;
}

export interface GnssRawifQueryhelpResponse {
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

export type GnssRawifTupleResponse = Array<GnssRawifTupleResponse.GnssRawifTupleResponseItem>;

export namespace GnssRawifTupleResponse {
  /**
   * Global Navigation Satellite System (GNSS) Raw Intermediate Frequency (IF) data
   * are the recorded streams of raw signal samples after down-conversion of the
   * received signal to IF and prior to any processing onboard the receiving
   * spacecraft. These data sets are processed in various geophysical applications
   * and used to characterize Electromagnetic Interference (EMI) in the operating
   * environment.
   */
  export interface GnssRawifTupleResponseItem {
    /**
     * The center frequency, in MHz, of the observation bands. More than one band may
     * be reported in each binary file, so this is an array of the center frequency of
     * each band (including an array of length 1 if only one band is present).
     */
    centerFreq: Array<number>;

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
     * End time of the data contained in the associated binary file, in ISO 8601 UTC
     * format with microsecond precision.
     */
    endTime: string;

    /**
     * The file name of the Raw IF Binary file. The files should be in the Hierarchical
     * Data Format (HDF5).
     */
    fileName: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Start time of the data contained in the associated binary file, in ISO 8601 UTC
     * format with microsecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The number of bits in each datum, for example 2 for 2-bit integers or 8 for
     * 8-bit integers.
     */
    bitDepth?: number;

    /**
     * Unit vector of the outward facing direction of the receiver boresight in a
     * body-fixed coordinate system.
     */
    boresight?: Array<number>;

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
     * The amount of data generated per unit time, expressed in Megabytes/minute.
     */
    dataRate?: number;

    /**
     * Differential Code Biases (DCBs) are the systematic errors, or biases, between
     * two GNSS code observations at the same or different frequencies. If applicable,
     * this field should contain an array of DBC with length equal to the number of
     * frequencies in the binary file. The reference frequency should show DCB equal
     * to 0. If null, it is assumed that there is no DCB (all values are 0).
     */
    diffCodeBias?: Array<number>;

    /**
     * Spacecraft altitude at end time (endTime), expressed in kilometers above WGS-84
     * ellipsoid.
     */
    endAlt?: number;

    /**
     * WGS-84 spacecraft latitude sub-point at end time (endTime), represented as -90
     * to 90 degrees (negative values south of equator).
     */
    endLat?: number;

    /**
     * WGS-84 spacecraft longitude sub-point at end time (endTime), represented as -180
     * to 180 degrees (negative values west of Prime Meridian).
     */
    endLon?: number;

    /**
     * Unique identifier of the parent Ephemeris Set, if this data is correlated with
     * an Ephemeris. If reporting for a spacecraft with multiple onboard GNSS
     * receivers, this ID may be associated with multiple GNSS Raw IF records if each
     * receiver is synced to the ephemeris points.
     */
    esId?: string;

    /**
     * Optional source-provided identifier for this collection event. This field can be
     * used to associate records related to the same event.
     */
    eventId?: string;

    /**
     * The binary file size, in bytes, auto-populated by the system. The maximum file
     * size for this service is 5,000,000 Bytes (5 MB). Files exceeding the maximum
     * size will be rejected.
     */
    fileSize?: number;

    /**
     * Unique identifier of the primary satellite on-orbit object.
     */
    idOnOrbit?: string;

    /**
     * The center frequency, in MHz, after downconversion to intermediate frequency. If
     * provided, this array should have the same length as centerFreqs.
     */
    ifFreq?: Array<number>;

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
     * Optional identifier provided by the data source to indicate the target object of
     * this record. This may be an internal identifier and not necessarily map to a
     * valid satellite number.
     */
    origObjectId?: string;

    /**
     * After converting the raw data in the file, to generate (frequency-space) spectra
     * some sets require an additional transformation or correction based on details of
     * the hardware that recorded it. This field marks any such transformations.
     * Currently supported options are NONE (no correction) and MIRRORED (frequency
     * axis is flipped around the corresponding value of ifFreq). If null, it is
     * assumed that NONE applies to all frequency bands.
     */
    postFourier?: Array<string>;

    /**
     * The quaternion describing the rotation of the body-fixed frame used for this
     * system into the local geodetic frame, at the sample start time (startTime). The
     * array element order convention is scalar component first, followed by the three
     * vector components. For a vector u in the body-fixed frame, the corresponding
     * vector u' in the geodetic frame should satisfy u' = quq\*, where q is this
     * quaternion. The quaternion should be normalized to 1.
     */
    quat?: Array<number>;

    /**
     * The number or ID of the GNSS receiver associated with this data. If reporting
     * for multiple receivers a separate record should be generated for each. If null,
     * it is assumed to indicate that only one receiver is present, or reported.
     */
    receiver?: string;

    /**
     * The number of samples taken per second.
     */
    sampleRate?: Array<number>;

    /**
     * The sample type associated with the IF data. REAL for data with only an
     * I-component or COMPLEX for data with both I & Q components.
     */
    sampleType?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The sequence number of a raw IF record/file within a set. Sequence number should
     * start at 1. If null, then it is assumed that the order of records within a raw
     * IF set is not relevant.
     */
    sequenceID?: number;

    /**
     * User-defined ID of a set or sequence of records/files. Used to associate a set
     * of related raw IF records.
     */
    setId?: string;

    /**
     * The number of raw IF records/files in a set.
     */
    setLength?: number;

    /**
     * Array of UUIDs of the UDL data records associated with this GNSSRawIF record.
     * See the associated 'srcTyps' array for the specific types of data, positionally
     * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
     * match in size. See the corresponding srcTyps array element for the data type of
     * the UUID and use the appropriate API operation to retrieve that object (e.g.
     * /udl/gnssobservationset/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (GNSSSET) associated with this GNSSRawIF record. See
     * the associated 'srcIds' array for the record UUIDs, positionally corresponding
     * to the record types in this array. The 'srcTyps' and 'srcIds' arrays must match
     * in size.
     */
    srcTyps?: Array<string>;

    /**
     * Spacecraft altitude at start time (startTime), expressed in kilometers above
     * WGS-84 ellipsoid.
     */
    startAlt?: number;

    /**
     * The index of the sample within the associated binary file that corresponds to
     * the startTime indicated in this record. This is especially useful on high
     * sample-rate sensors when some samples are less than one microsecond before the
     * value of startTime. This index is 0-based. If null, the startIndex is assumed to
     * be 0.
     */
    startIndex?: number;

    /**
     * WGS-84 spacecraft latitude sub-point at start time (startTime), represented as
     * -90 to 90 degrees (negative values south of equator).
     */
    startLat?: number;

    /**
     * WGS-84 spacecraft longitude sub-point at start time (startTime), represented as
     * -180 to 180 degrees (negative values west of Prime Meridian).
     */
    startLon?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;
  }
}

export interface GnssRawifListParams extends OffsetPageParams {
  /**
   * Start time of the data contained in the associated binary file, in ISO 8601 UTC
   * format with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

export interface GnssRawifCountParams {
  /**
   * Start time of the data contained in the associated binary file, in ISO 8601 UTC
   * format with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface GnssRawifFileGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface GnssRawifGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface GnssRawifTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Start time of the data contained in the associated binary file, in ISO 8601 UTC
   * format with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface GnssRawifUploadZipParams {
  /**
   * Zip file containing files described in the specification
   */
  file: Uploadable;
}

export declare namespace GnssRawif {
  export {
    type GnssRawifListResponse as GnssRawifListResponse,
    type GnssRawifCountResponse as GnssRawifCountResponse,
    type GnssRawifGetResponse as GnssRawifGetResponse,
    type GnssRawifQueryhelpResponse as GnssRawifQueryhelpResponse,
    type GnssRawifTupleResponse as GnssRawifTupleResponse,
    type GnssRawifListResponsesOffsetPage as GnssRawifListResponsesOffsetPage,
    type GnssRawifListParams as GnssRawifListParams,
    type GnssRawifCountParams as GnssRawifCountParams,
    type GnssRawifFileGetParams as GnssRawifFileGetParams,
    type GnssRawifGetParams as GnssRawifGetParams,
    type GnssRawifTupleParams as GnssRawifTupleParams,
    type GnssRawifUploadZipParams as GnssRawifUploadZipParams,
  };
}
