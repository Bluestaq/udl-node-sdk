// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntitiesAPI from '../entities';
import * as Shared from '../shared';
import * as StagingAPI from './staging';
import {
  Staging,
  StagingCreateBulkParams,
  StagingCreateParams,
  StagingListParams,
  StagingListResponse,
  StagingListResponsesOffsetPage,
  StagingQueryhelpResponse,
  StagingRetrieveParams,
  StagingRetrieveResponse,
  StagingUpdateParams,
} from './staging';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Laseremitter extends APIResource {
  staging: StagingAPI.Staging = new StagingAPI.Staging(this._client);

  /**
   * Service operation to take a single LaserEmitter record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.laseremitter.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   laserName: 'HEL',
   *   laserType: 'PULSED',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: LaseremitterCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/laseremitter', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single LaserEmitter record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.laseremitter.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   laserName: 'HEL',
   *   laserType: 'PULSED',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: LaseremitterUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/laseremitter/${pathID}`, {
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
   * for await (const laseremitterListResponse of client.laseremitter.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LaseremitterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LaseremitterListResponsesOffsetPage, LaseremitterListResponse> {
    return this._client.getAPIList('/udl/laseremitter', OffsetPage<LaseremitterListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a LaserEmitter record specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.laseremitter.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/laseremitter/${id}`, {
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
   *
   * @example
   * ```ts
   * const response = await client.laseremitter.count();
   * ```
   */
  count(
    query: LaseremitterCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/laseremitter/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single LaserEmitter record by its unique ID passed as
   * a path parameter.
   *
   * @example
   * ```ts
   * const laseremitter = await client.laseremitter.get('id');
   * ```
   */
  get(
    id: string,
    query: LaseremitterGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LaseremitterGetResponse> {
    return this._client.get(path`/udl/laseremitter/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.laseremitter.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<LaseremitterQueryhelpResponse> {
    return this._client.get('/udl/laseremitter/queryhelp', options);
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
   * const response = await client.laseremitter.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: LaseremitterTupleParams, options?: RequestOptions): APIPromise<LaseremitterTupleResponse> {
    return this._client.get('/udl/laseremitter/tuple', { query, ...options });
  }
}

export type LaseremitterListResponsesOffsetPage = OffsetPage<LaseremitterListResponse>;

/**
 * Model representation of a laser beam emitter/director which represents a source
 * of directed energy.
 */
export interface LaseremitterListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The name of this laser within the laser system or facility.
   */
  laserName: string;

  /**
   * The type of laser (e.g. CONTINUOUS WAVE, PULSED, etc.).
   */
  laserType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Maximum possible laser-to-space atmospheric transmission (a value between zero
   * and one, usually assumed to be unity for all lasers except for lasers with
   * wavelengths heavily absorbed by the atmosphere).
   */
  atmosphericTransmission?: number;

  /**
   * The beam director aperture average (equivalent CW) output power is the total
   * laser average power that is transmitted away from the final exit aperture of the
   * optical system. For a CW laser, this is equivalent to the laser device CW power
   * multiplied by the throughput of the optical system, including the beam director
   * telescope. For a pulsed laser, this is equivalent to the laser device energy per
   * pulse multiplied by the pulse repetition frequency (PRF) multiplied by the
   * throughput of the optical system including the beam director telescope. Measured
   * in Watts.
   */
  beamOutputPower?: number;

  /**
   * The beam waist (radius) of this laser at the exit aperture, in centimeters.
   */
  beamWaist?: number;

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
   * Minimum possible divergence half-angle of this laser, referenced from the
   * optical axis to the 1/e point of the beam's far field irradiance profile,
   * measured in microradians.
   */
  divergence?: number;

  /**
   * Unique identifier of the parent entity. idEntity is required for PUT.
   */
  idEntity?: string;

  /**
   * A Boolean indicating whether or not this laser emitter is operational. False
   * indicates that the laser specified in this record is no longer available and can
   * be considered defunct. This field is true by default.
   */
  isOperational?: boolean;

  /**
   * The maximum time that the laser would be "on" for a given test(s) for laser
   * activity, in seconds.
   */
  maxDuration?: number;

  /**
   * The maximum possible focus range of this laser, measured in kilometers.
   */
  maxFocusRange?: number;

  /**
   * The minimum possible focus range of this laser, measured in kilometers.
   */
  minFocusRange?: number;

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
   * The amount of energy in each laser pulse exiting from the beam
   * director/telescope, measured in Joules.
   */
  pulseFluence?: number;

  /**
   * The instantaneous single pulse peak power exiting from the laser device,
   * measured in Watts.
   */
  pulsePeakPower?: number;

  /**
   * The pulse repetition frequency of this laser, measured in kilohertz.
   */
  pulseRepFreq?: number;

  /**
   * The pulse shape (waveform) of this laser, e.g. "RECTANGULAR," "SAWTOOTH,"
   * "GAUSSIAN," etc.
   */
  pulseShape?: string;

  /**
   * The laser device pulse duration, measured in seconds.
   */
  pulseWidth?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The center wavelength of this laser, in micrometers.
   */
  wavelength?: number;
}

export type LaseremitterCountResponse = string;

/**
 * Model representation of a laser beam emitter/director which represents a source
 * of directed energy.
 */
export interface LaseremitterGetResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The name of this laser within the laser system or facility.
   */
  laserName: string;

  /**
   * The type of laser (e.g. CONTINUOUS WAVE, PULSED, etc.).
   */
  laserType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Maximum possible laser-to-space atmospheric transmission (a value between zero
   * and one, usually assumed to be unity for all lasers except for lasers with
   * wavelengths heavily absorbed by the atmosphere).
   */
  atmosphericTransmission?: number;

  /**
   * The beam director aperture average (equivalent CW) output power is the total
   * laser average power that is transmitted away from the final exit aperture of the
   * optical system. For a CW laser, this is equivalent to the laser device CW power
   * multiplied by the throughput of the optical system, including the beam director
   * telescope. For a pulsed laser, this is equivalent to the laser device energy per
   * pulse multiplied by the pulse repetition frequency (PRF) multiplied by the
   * throughput of the optical system including the beam director telescope. Measured
   * in Watts.
   */
  beamOutputPower?: number;

  /**
   * The beam waist (radius) of this laser at the exit aperture, in centimeters.
   */
  beamWaist?: number;

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
   * Minimum possible divergence half-angle of this laser, referenced from the
   * optical axis to the 1/e point of the beam's far field irradiance profile,
   * measured in microradians.
   */
  divergence?: number;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: Shared.EntityFull;

  /**
   * Unique identifier of the parent entity. idEntity is required for PUT.
   */
  idEntity?: string;

  /**
   * A Boolean indicating whether or not this laser emitter is operational. False
   * indicates that the laser specified in this record is no longer available and can
   * be considered defunct. This field is true by default.
   */
  isOperational?: boolean;

  /**
   * The maximum time that the laser would be "on" for a given test(s) for laser
   * activity, in seconds.
   */
  maxDuration?: number;

  /**
   * The maximum possible focus range of this laser, measured in kilometers.
   */
  maxFocusRange?: number;

  /**
   * The minimum possible focus range of this laser, measured in kilometers.
   */
  minFocusRange?: number;

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
   * The amount of energy in each laser pulse exiting from the beam
   * director/telescope, measured in Joules.
   */
  pulseFluence?: number;

  /**
   * The instantaneous single pulse peak power exiting from the laser device,
   * measured in Watts.
   */
  pulsePeakPower?: number;

  /**
   * The pulse repetition frequency of this laser, measured in kilohertz.
   */
  pulseRepFreq?: number;

  /**
   * The pulse shape (waveform) of this laser, e.g. "RECTANGULAR," "SAWTOOTH,"
   * "GAUSSIAN," etc.
   */
  pulseShape?: string;

  /**
   * The laser device pulse duration, measured in seconds.
   */
  pulseWidth?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;

  /**
   * The center wavelength of this laser, in micrometers.
   */
  wavelength?: number;
}

export interface LaseremitterQueryhelpResponse {
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

export type LaseremitterTupleResponse = Array<LaseremitterTupleResponse.LaseremitterTupleResponseItem>;

export namespace LaseremitterTupleResponse {
  /**
   * Model representation of a laser beam emitter/director which represents a source
   * of directed energy.
   */
  export interface LaseremitterTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * The name of this laser within the laser system or facility.
     */
    laserName: string;

    /**
     * The type of laser (e.g. CONTINUOUS WAVE, PULSED, etc.).
     */
    laserType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Maximum possible laser-to-space atmospheric transmission (a value between zero
     * and one, usually assumed to be unity for all lasers except for lasers with
     * wavelengths heavily absorbed by the atmosphere).
     */
    atmosphericTransmission?: number;

    /**
     * The beam director aperture average (equivalent CW) output power is the total
     * laser average power that is transmitted away from the final exit aperture of the
     * optical system. For a CW laser, this is equivalent to the laser device CW power
     * multiplied by the throughput of the optical system, including the beam director
     * telescope. For a pulsed laser, this is equivalent to the laser device energy per
     * pulse multiplied by the pulse repetition frequency (PRF) multiplied by the
     * throughput of the optical system including the beam director telescope. Measured
     * in Watts.
     */
    beamOutputPower?: number;

    /**
     * The beam waist (radius) of this laser at the exit aperture, in centimeters.
     */
    beamWaist?: number;

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
     * Minimum possible divergence half-angle of this laser, referenced from the
     * optical axis to the 1/e point of the beam's far field irradiance profile,
     * measured in microradians.
     */
    divergence?: number;

    /**
     * An entity is a generic representation of any object within a space/SSA system
     * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
     * entity can have an operating unit, a location (if terrestrial), and statuses.
     */
    entity?: Shared.EntityFull;

    /**
     * Unique identifier of the parent entity. idEntity is required for PUT.
     */
    idEntity?: string;

    /**
     * A Boolean indicating whether or not this laser emitter is operational. False
     * indicates that the laser specified in this record is no longer available and can
     * be considered defunct. This field is true by default.
     */
    isOperational?: boolean;

    /**
     * The maximum time that the laser would be "on" for a given test(s) for laser
     * activity, in seconds.
     */
    maxDuration?: number;

    /**
     * The maximum possible focus range of this laser, measured in kilometers.
     */
    maxFocusRange?: number;

    /**
     * The minimum possible focus range of this laser, measured in kilometers.
     */
    minFocusRange?: number;

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
     * The amount of energy in each laser pulse exiting from the beam
     * director/telescope, measured in Joules.
     */
    pulseFluence?: number;

    /**
     * The instantaneous single pulse peak power exiting from the laser device,
     * measured in Watts.
     */
    pulsePeakPower?: number;

    /**
     * The pulse repetition frequency of this laser, measured in kilohertz.
     */
    pulseRepFreq?: number;

    /**
     * The pulse shape (waveform) of this laser, e.g. "RECTANGULAR," "SAWTOOTH,"
     * "GAUSSIAN," etc.
     */
    pulseShape?: string;

    /**
     * The laser device pulse duration, measured in seconds.
     */
    pulseWidth?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;

    /**
     * The center wavelength of this laser, in micrometers.
     */
    wavelength?: number;
  }
}

export interface LaseremitterCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The name of this laser within the laser system or facility.
   */
  laserName: string;

  /**
   * The type of laser (e.g. CONTINUOUS WAVE, PULSED, etc.).
   */
  laserType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Maximum possible laser-to-space atmospheric transmission (a value between zero
   * and one, usually assumed to be unity for all lasers except for lasers with
   * wavelengths heavily absorbed by the atmosphere).
   */
  atmosphericTransmission?: number;

  /**
   * The beam director aperture average (equivalent CW) output power is the total
   * laser average power that is transmitted away from the final exit aperture of the
   * optical system. For a CW laser, this is equivalent to the laser device CW power
   * multiplied by the throughput of the optical system, including the beam director
   * telescope. For a pulsed laser, this is equivalent to the laser device energy per
   * pulse multiplied by the pulse repetition frequency (PRF) multiplied by the
   * throughput of the optical system including the beam director telescope. Measured
   * in Watts.
   */
  beamOutputPower?: number;

  /**
   * The beam waist (radius) of this laser at the exit aperture, in centimeters.
   */
  beamWaist?: number;

  /**
   * Minimum possible divergence half-angle of this laser, referenced from the
   * optical axis to the 1/e point of the beam's far field irradiance profile,
   * measured in microradians.
   */
  divergence?: number;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * Unique identifier of the parent entity. idEntity is required for PUT.
   */
  idEntity?: string;

  /**
   * A Boolean indicating whether or not this laser emitter is operational. False
   * indicates that the laser specified in this record is no longer available and can
   * be considered defunct. This field is true by default.
   */
  isOperational?: boolean;

  /**
   * The maximum time that the laser would be "on" for a given test(s) for laser
   * activity, in seconds.
   */
  maxDuration?: number;

  /**
   * The maximum possible focus range of this laser, measured in kilometers.
   */
  maxFocusRange?: number;

  /**
   * The minimum possible focus range of this laser, measured in kilometers.
   */
  minFocusRange?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The amount of energy in each laser pulse exiting from the beam
   * director/telescope, measured in Joules.
   */
  pulseFluence?: number;

  /**
   * The instantaneous single pulse peak power exiting from the laser device,
   * measured in Watts.
   */
  pulsePeakPower?: number;

  /**
   * The pulse repetition frequency of this laser, measured in kilohertz.
   */
  pulseRepFreq?: number;

  /**
   * The pulse shape (waveform) of this laser, e.g. "RECTANGULAR," "SAWTOOTH,"
   * "GAUSSIAN," etc.
   */
  pulseShape?: string;

  /**
   * The laser device pulse duration, measured in seconds.
   */
  pulseWidth?: number;

  /**
   * The center wavelength of this laser, in micrometers.
   */
  wavelength?: number;
}

export interface LaseremitterUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The name of this laser within the laser system or facility.
   */
  laserName: string;

  /**
   * The type of laser (e.g. CONTINUOUS WAVE, PULSED, etc.).
   */
  laserType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  body_id?: string;

  /**
   * Maximum possible laser-to-space atmospheric transmission (a value between zero
   * and one, usually assumed to be unity for all lasers except for lasers with
   * wavelengths heavily absorbed by the atmosphere).
   */
  atmosphericTransmission?: number;

  /**
   * The beam director aperture average (equivalent CW) output power is the total
   * laser average power that is transmitted away from the final exit aperture of the
   * optical system. For a CW laser, this is equivalent to the laser device CW power
   * multiplied by the throughput of the optical system, including the beam director
   * telescope. For a pulsed laser, this is equivalent to the laser device energy per
   * pulse multiplied by the pulse repetition frequency (PRF) multiplied by the
   * throughput of the optical system including the beam director telescope. Measured
   * in Watts.
   */
  beamOutputPower?: number;

  /**
   * The beam waist (radius) of this laser at the exit aperture, in centimeters.
   */
  beamWaist?: number;

  /**
   * Minimum possible divergence half-angle of this laser, referenced from the
   * optical axis to the 1/e point of the beam's far field irradiance profile,
   * measured in microradians.
   */
  divergence?: number;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * Unique identifier of the parent entity. idEntity is required for PUT.
   */
  idEntity?: string;

  /**
   * A Boolean indicating whether or not this laser emitter is operational. False
   * indicates that the laser specified in this record is no longer available and can
   * be considered defunct. This field is true by default.
   */
  isOperational?: boolean;

  /**
   * The maximum time that the laser would be "on" for a given test(s) for laser
   * activity, in seconds.
   */
  maxDuration?: number;

  /**
   * The maximum possible focus range of this laser, measured in kilometers.
   */
  maxFocusRange?: number;

  /**
   * The minimum possible focus range of this laser, measured in kilometers.
   */
  minFocusRange?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The amount of energy in each laser pulse exiting from the beam
   * director/telescope, measured in Joules.
   */
  pulseFluence?: number;

  /**
   * The instantaneous single pulse peak power exiting from the laser device,
   * measured in Watts.
   */
  pulsePeakPower?: number;

  /**
   * The pulse repetition frequency of this laser, measured in kilohertz.
   */
  pulseRepFreq?: number;

  /**
   * The pulse shape (waveform) of this laser, e.g. "RECTANGULAR," "SAWTOOTH,"
   * "GAUSSIAN," etc.
   */
  pulseShape?: string;

  /**
   * The laser device pulse duration, measured in seconds.
   */
  pulseWidth?: number;

  /**
   * The center wavelength of this laser, in micrometers.
   */
  wavelength?: number;
}

export interface LaseremitterListParams extends OffsetPageParams {}

export interface LaseremitterCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LaseremitterGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LaseremitterTupleParams {
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

Laseremitter.Staging = Staging;

export declare namespace Laseremitter {
  export {
    type LaseremitterListResponse as LaseremitterListResponse,
    type LaseremitterCountResponse as LaseremitterCountResponse,
    type LaseremitterGetResponse as LaseremitterGetResponse,
    type LaseremitterQueryhelpResponse as LaseremitterQueryhelpResponse,
    type LaseremitterTupleResponse as LaseremitterTupleResponse,
    type LaseremitterListResponsesOffsetPage as LaseremitterListResponsesOffsetPage,
    type LaseremitterCreateParams as LaseremitterCreateParams,
    type LaseremitterUpdateParams as LaseremitterUpdateParams,
    type LaseremitterListParams as LaseremitterListParams,
    type LaseremitterCountParams as LaseremitterCountParams,
    type LaseremitterGetParams as LaseremitterGetParams,
    type LaseremitterTupleParams as LaseremitterTupleParams,
  };

  export {
    Staging as Staging,
    type StagingRetrieveResponse as StagingRetrieveResponse,
    type StagingListResponse as StagingListResponse,
    type StagingQueryhelpResponse as StagingQueryhelpResponse,
    type StagingListResponsesOffsetPage as StagingListResponsesOffsetPage,
    type StagingCreateParams as StagingCreateParams,
    type StagingRetrieveParams as StagingRetrieveParams,
    type StagingUpdateParams as StagingUpdateParams,
    type StagingListParams as StagingListParams,
    type StagingCreateBulkParams as StagingCreateBulkParams,
  };
}
