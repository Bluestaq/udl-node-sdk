// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: HistoryListParams,
    options?: RequestOptions,
  ): PagePromise<SpaceEnvObservationFullsOffsetPage, SpaceEnvObservationFull> {
    return this._client.getAPIList('/udl/spaceenvobservation/history', OffsetPage<SpaceEnvObservationFull>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  aodr(query: HistoryAodrParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/spaceenvobservation/history/aodr', {
      query,
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
   */
  count(query: HistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/spaceenvobservation/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type SpaceEnvObservationFullsOffsetPage = OffsetPage<SpaceEnvObservationFull>;

/**
 * SpaceEnvObservation data.
 */
export interface SpaceEnvObservationFull {
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
   * Time of the observation, in ISO 8601 UTC format with millisecond precision.
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
   * Spacecraft/sensor altitude at observation time, expressed in kilometers above
   * WGS-84 ellipsoid.
   */
  alt?: number;

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
   * The data type (e.g. AP, AURORAL FLUX, ECP, KINDEX, PROPAGATED SOLAR WIND, XRAY
   * FLUX, etc.) of observations in this record.
   */
  dataType?: string;

  /**
   * Flag indicating that this record contains derived data.
   */
  derived?: boolean;

  /**
   * Descriptive or additional information associated with this observation record.
   */
  description?: string;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Flag indicating that this record contains forecast data.
   */
  forecast?: boolean;

  /**
   * The external system which generated the message, if applicable.
   */
  genSystem?: string;

  /**
   * The time at which the associated data message was generated, in ISO 8601 UTC
   * format with millisecond precision.
   */
  genTime?: string;

  /**
   * Unique identifier of the on-orbit satellite hosting the sensor which produced
   * this data.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The type of instrument from which this data was collected (e.g. ANTENNA,
   * CHANNELTRON, INTERFEROMETER, MAGNETOMETER, RADIOMETER, etc.).
   */
  instrumentType?: string;

  /**
   * WGS-84 spacecraft/sensor latitude sub-point at observation time, represented as
   * -90 to 90 degrees (negative values south of equator).
   */
  lat?: number;

  /**
   * WGS-84 spacecraft/sensor longitude sub-point at observation time, represented as
   * -180 to 180 degrees (negative values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The sensor measurement type of the observation data contained in this record.
   */
  measType?: string;

  /**
   * The type of message associated with this record.
   */
  msgType?: string;

  /**
   * The name of the observatory from which this data was collected.
   */
  observatoryName?: string;

  /**
   * Additional notes concerning the observatory.
   */
  observatoryNotes?: string;

  /**
   * The type of observatory from which this data was collected (e.g. FACILITY,
   * ONORBIT, NETWORK, etc.).
   */
  observatoryType?: string;

  /**
   * A user-defined name or ID of a set of observations, if applicable. Used for
   * identifying multiple observation records as part of one observation set.
   */
  obSetId?: string;

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
   * Optional identifier provided by the record source to indicate the satellite
   * hosting the sensor which produced this data. This may be an internal identifier
   * and not necessarily map to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the observation source to indicate the sensor
   * which produced this observation. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * The particle type (AEROSOL, ALPHA PARTICLE, ATOM, DUST, ELECTRON, ION, MOLECULE,
   * NEUTRON, POSITRON, PROTON) associated with this measurement.
   */
  particleType?: string;

  /**
   * The quality of the overall data contained in this record. The quality indicator
   * value may vary among providers and may be a generalized statement (BAD, GOOD,
   * UNCERTAIN, UNKNOWN) or a numeric value. Users should consult the data provider
   * to verify the usage of the quality indicator.
   */
  quality?: string;

  /**
   * Satellite/catalog number of the on-orbit satellite hosting the sensor which
   * produced this data.
   */
  satNo?: number;

  /**
   * The energy level bin of the sensor associated with this measurement.
   */
  senEnergyLevel?: string;

  /**
   * Three element array, expressing the observing spacecraft/sensor position vector
   * components at observation time, in kilometers, in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   * The array element order is [xpos, ypos, zpos].
   */
  senPos?: Array<number>;

  /**
   * The reference frame of the observing spacecraft/sensor state. If the
   * senReferenceFrame is null it is assumed to be J2000.
   */
  senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * Three element array, expressing the observing spacecraft/sensor velocity vector
   * components at observation time, in kilometers/second, in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   * The array element order is [xvel, yvel, zvel].
   */
  senVel?: Array<number>;

  /**
   * A collection of individual space environment observations.
   */
  seoList?: Array<SpaceEnvObservationFull.SeoList>;

  /**
   * Array of UUIDs of the UDL data records that are related to this observation
   * record. See the associated 'srcTyps' array for specific types of data,
   * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
   * of the data type of the UUID and use the appropriate API operation to retrieve
   * that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (AIS, CONJUNCTION, DOA, ELSET, EO, ESID, GROUNDIMAGE,
   * POI, MANEUVER, MTI, NOTIFICATION, RADAR, RF, SGI, SIGACT, SKYIMAGE, SPACEENVOB,
   * SV, TRACK) that are related to this observation record. See the associated
   * 'srcIds' array for the record UUIDs, positionally corresponding to the record
   * types in this array. The 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;
}

export namespace SpaceEnvObservationFull {
  /**
   * A single space environment observation.
   */
  export interface SeoList {
    /**
     * The type of observation associated with this record.
     */
    obType: string;

    /**
     * The Unit of Measure associated with this observation. If there are no physical
     * units associated with the measurement, a value of NONE should be specified.
     */
    obUoM: string;

    /**
     * An array of observation values expressed in the specified unit of measure
     * (obUoM). Because of the variability of the Space Environment data types, each
     * record may employ a numeric observation value (obValue), a string observation
     * value (obString), a Boolean observation value (obBool), an array of numeric
     * observation values (obArray), or any combination of these.
     */
    obArray?: Array<number>;

    /**
     * A Boolean observation. Because of the variability of the Space Environment data
     * types, each record may employ a numeric observation value (obValue), a string
     * observation value (obString), a Boolean observation value (obBool), an array of
     * numeric observation values (obArray), or any combination of these.
     */
    obBool?: boolean;

    /**
     * Descriptive or additional information associated with this individual
     * observation.
     */
    obDescription?: string;

    /**
     * The quality of this individual observation. The observation quality indicator
     * value may vary among providers and may be a generalized statement (BAD, GOOD,
     * UNCERTAIN, UNKNOWN) or a numeric value. Users should consult the data provider
     * to verify the usage of the observation.
     */
    obQuality?: string;

    /**
     * A single observation string expressed in the specified unit of measure (obUoM).
     * Because of the variability of the Space Environment data types, each record may
     * employ a numeric observation value (obValue), a string observation value
     * (obString), a Boolean observation value (obBool), an array of numeric
     * observation values (obArray), or any combination of these.
     */
    obString?: string;

    /**
     * A single observation value expressed in the specified unit of measure (obUoM).
     * Because of the variability of the Space Environment data types, each record may
     * employ a numeric observation value (obValue), a string observation value
     * (obString), a Boolean observation value (obBool), an array of numeric
     * observation values (obArray), or any combination of these.
     */
    obValue?: number;
  }
}

export type HistoryCountResponse = string;

export interface HistoryListParams extends OffsetPageParams {
  /**
   * Time of the observation, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  obTime: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryAodrParams {
  /**
   * Time of the observation, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  obTime: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * optional, notification method for the created file link. When omitted, EMAIL is
   * assumed. Current valid values are: EMAIL, SMS.
   */
  notification?: string;

  /**
   * optional, field delimiter when the created file is not JSON. Must be a single
   * character chosen from this set: (',', ';', ':', '|'). When omitted, "," is used.
   * It is strongly encouraged that your field delimiter be a character unlikely to
   * occur within the data.
   */
  outputDelimiter?: string;

  /**
   * optional, output format for the file. When omitted, JSON is assumed. Current
   * valid values are: JSON and CSV.
   */
  outputFormat?: string;
}

export interface HistoryCountParams {
  /**
   * Time of the observation, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace History {
  export {
    type SpaceEnvObservationFull as SpaceEnvObservationFull,
    type HistoryCountResponse as HistoryCountResponse,
    type SpaceEnvObservationFullsOffsetPage as SpaceEnvObservationFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
