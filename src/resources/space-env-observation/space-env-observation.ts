// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  SpaceEnvObservationFull,
  SpaceEnvObservationFullsOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class SpaceEnvObservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: SpaceEnvObservationListParams,
    options?: RequestOptions,
  ): PagePromise<SpaceEnvObservationListResponsesOffsetPage, SpaceEnvObservationListResponse> {
    return this._client.getAPIList('/udl/spaceenvobservation', OffsetPage<SpaceEnvObservationListResponse>, {
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
  count(query: SpaceEnvObservationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/spaceenvobservation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * SpaceEnvObservation records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(params: SpaceEnvObservationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/spaceenvobservation/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/spaceenvobservation/queryhelp', {
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
    query: SpaceEnvObservationTupleParams,
    options?: RequestOptions,
  ): APIPromise<SpaceEnvObservationTupleResponse> {
    return this._client.get('/udl/spaceenvobservation/tuple', { query, ...options });
  }

  /**
   * Service operation to accept one or more SpaceEnvObservation(s) as a POST body
   * and ingest into the database. This operation is intended to be used for
   * automated feeds into UDL. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: SpaceEnvObservationUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-spaceenvobs', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type SpaceEnvObservationListResponsesOffsetPage = OffsetPage<SpaceEnvObservationListResponse>;

/**
 * SpaceEnvObservation data.
 */
export interface SpaceEnvObservationListResponse {
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
  seoList?: Array<SpaceEnvObservationListResponse.SeoList>;

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

export namespace SpaceEnvObservationListResponse {
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

export type SpaceEnvObservationCountResponse = string;

export type SpaceEnvObservationTupleResponse = Array<HistoryAPI.SpaceEnvObservationFull>;

export interface SpaceEnvObservationListParams extends OffsetPageParams {
  /**
   * Time of the observation, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  obTime: string;
}

export interface SpaceEnvObservationCountParams {
  /**
   * Time of the observation, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SpaceEnvObservationCreateBulkParams {
  body: Array<SpaceEnvObservationCreateBulkParams.Body>;
}

export namespace SpaceEnvObservationCreateBulkParams {
  /**
   * SpaceEnvObservation data.
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
    seoList?: Array<Body.SeoList>;

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

  export namespace Body {
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
}

export interface SpaceEnvObservationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time of the observation, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SpaceEnvObservationUnvalidatedPublishParams {
  body: Array<SpaceEnvObservationUnvalidatedPublishParams.Body>;
}

export namespace SpaceEnvObservationUnvalidatedPublishParams {
  /**
   * SpaceEnvObservation data.
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
    seoList?: Array<Body.SeoList>;

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

  export namespace Body {
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
}

SpaceEnvObservation.History = History;

export declare namespace SpaceEnvObservation {
  export {
    type SpaceEnvObservationListResponse as SpaceEnvObservationListResponse,
    type SpaceEnvObservationCountResponse as SpaceEnvObservationCountResponse,
    type SpaceEnvObservationTupleResponse as SpaceEnvObservationTupleResponse,
    type SpaceEnvObservationListResponsesOffsetPage as SpaceEnvObservationListResponsesOffsetPage,
    type SpaceEnvObservationListParams as SpaceEnvObservationListParams,
    type SpaceEnvObservationCountParams as SpaceEnvObservationCountParams,
    type SpaceEnvObservationCreateBulkParams as SpaceEnvObservationCreateBulkParams,
    type SpaceEnvObservationTupleParams as SpaceEnvObservationTupleParams,
    type SpaceEnvObservationUnvalidatedPublishParams as SpaceEnvObservationUnvalidatedPublishParams,
  };

  export {
    History as History,
    type SpaceEnvObservationFull as SpaceEnvObservationFull,
    type HistoryCountResponse as HistoryCountResponse,
    type SpaceEnvObservationFullsOffsetPage as SpaceEnvObservationFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
