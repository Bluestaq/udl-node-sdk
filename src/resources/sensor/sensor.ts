// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LocationAPI from '../location';
import * as Shared from '../shared';
import * as CalibrationAPI from './calibration/calibration';
import {
  Calibration,
  CalibrationCountParams,
  CalibrationCountResponse,
  CalibrationCreateBulkParams,
  CalibrationCreateParams,
  CalibrationQueryHelpResponse,
  CalibrationQueryParams,
  CalibrationQueryResponse,
  CalibrationRetrieveParams,
  CalibrationRetrieveResponse,
  CalibrationTupleParams,
  CalibrationTupleResponse,
  CalibrationUnvalidatedPublishParams,
} from './calibration/calibration';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sensor extends APIResource {
  calibration: CalibrationAPI.Calibration = new CalibrationAPI.Calibration(this._client);

  /**
   * Service operation to take a single sensor as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sensor.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   sensorName: 'SENSOR_NAME',
   *   source: 'some.user',
   * });
   * ```
   */
  create(body: SensorCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/sensor', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single Sensor. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sensor.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   sensorName: 'SENSOR_NAME',
   *   source: 'some.user',
   * });
   * ```
   */
  update(id: string, body: SensorUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/sensor/${id}`, {
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
   * for await (const sensorListResponse of client.sensor.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SensorListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SensorListResponsesOffsetPage, SensorListResponse> {
    return this._client.getAPIList('/udl/sensor', OffsetPage<SensorListResponse>, { query, ...options });
  }

  /**
   * Service operation to delete a Sensor specified by the passed ID path parameter.
   * A specific role is required to perform this service operation. Please contact
   * the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sensor.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/sensor/${id}`, {
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
   * const response = await client.sensor.count();
   * ```
   */
  count(query: SensorCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/sensor/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Sensor by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const sensor = await client.sensor.get('id');
   * ```
   */
  get(
    id: string,
    query: SensorGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SensorGetResponse> {
    return this._client.get(path`/udl/sensor/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.sensor.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SensorQueryhelpResponse> {
    return this._client.get('/udl/sensor/queryhelp', options);
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
   * const response = await client.sensor.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: SensorTupleParams, options?: RequestOptions): APIPromise<SensorTupleResponse> {
    return this._client.get('/udl/sensor/tuple', { query, ...options });
  }
}

export type SensorListResponsesOffsetPage = OffsetPage<SensorListResponse>;

/**
 * Model representation of observation data for electro-optical based sensor
 * phenomenologies.
 */
export interface SensorListResponse {
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
   * Unique name of this sensor.
   */
  sensorName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Optional flag indicating if the sensor is active.
   */
  active?: boolean;

  /**
   * Optional US Air Force identifier for the sensor/ASR site, typically for air
   * surveillance radar (ASR) sensors.
   */
  afId?: string;

  /**
   * The sensor type at the site. Optional field, intended primarily for ASRs.
   */
  asrType?: string;

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
   * Optional dissemination control required for accessing data (e.g observations)
   * produced by this sensor. This is typically a proprietary data owner control for
   * commercial sensors.
   */
  dataControl?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: SensorListResponse.Entity;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idSensor?: string;

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
   * Collection of Sensorcharacteristics which define characteristics and
   * capabilities of a sensor.
   */
  sensorcharacteristics?: Array<SensorListResponse.Sensorcharacteristic>;

  /**
   * Sensorlimits define 0 to many limits of a particular sensor in terms of
   * observation coverage of on-orbit objects.
   */
  sensorlimitsCollection?: Array<SensorListResponse.SensorlimitsCollection>;

  /**
   * Number assigned to this sensor. Since there is no authoritative numbering
   * scheme, these numbers sometimes collide across sensors (especially commercial
   * sensors). It is therefore not a unique identifier.
   */
  sensorNumber?: number;

  sensorObservationType?: SensorListResponse.SensorObservationType;

  /**
   * Collection of SensorStats which contain statistics of a sensor.
   */
  sensorStats?: Array<SensorListResponse.SensorStat>;

  sensorType?: SensorListResponse.SensorType;

  /**
   * Optional short name for the sensor.
   */
  shortName?: string;
}

export namespace SensorListResponse {
  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  export interface Entity {
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
     * Unique entity name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
     * LASEREMITTER, NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
     */
    type:
      | 'AIRCRAFT'
      | 'BUS'
      | 'COMM'
      | 'IR'
      | 'LASEREMITTER'
      | 'NAVIGATION'
      | 'ONORBIT'
      | 'RFEMITTER'
      | 'SCIENTIFIC'
      | 'SENSOR'
      | 'SITE'
      | 'VESSEL';

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

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
     * Unique identifier of the record.
     */
    idEntity?: string;

    /**
     * Unique identifier of the entity location, if terrestrial/fixed.
     */
    idLocation?: string;

    /**
     * Onorbit identifier if this entity is part of an on-orbit object. For the public
     * catalog, the idOnOrbit is typically the satellite number as a string, but may be
     * a UUID for analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the associated operating unit object.
     */
    idOperatingUnit?: string;

    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    location?: Shared.LocationAbridged;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Entity.OnOrbit;

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
     * Type of organization which owns this entity (e.g. Commercial, Government,
     * Academic, Consortium, etc).
     */
    ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

    /**
     * Boolean indicating if this entity is taskable.
     */
    taskable?: boolean;

    /**
     * Terrestrial identifier of this entity, if applicable.
     */
    terrestrialId?: string;
  }

  export namespace Entity {
    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    export interface OnOrbit {
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
       * Satellite/Catalog number of the target on-orbit object.
       */
      satNo: number;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Alternate name of the on-orbit object.
       */
      altName?: string;

      /**
       * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
       * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
       * Heliocentric, Interplanetary, Lagrangian, Docked).
       */
      category?:
        | 'Unknown'
        | 'On-Orbit'
        | 'Decayed'
        | 'Cataloged Without State'
        | 'Launch Nominal'
        | 'Analyst Satellite'
        | 'Cislunar'
        | 'Lunar'
        | 'Hyperbolic'
        | 'Heliocentric'
        | 'Interplanetary'
        | 'Lagrangian'
        | 'Docked';

      /**
       * Common name of the on-orbit object.
       */
      commonName?: string;

      /**
       * Constellation to which this satellite belongs.
       */
      constellation?: string;

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

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
       * Date of decay.
       */
      decayDate?: string;

      /**
       * For the public catalog, the idOnOrbit is typically the satellite number as a
       * string, but may be a UUID for analyst or other unknown or untracked satellites,
       * auto-generated by the system.
       */
      idOnOrbit?: string;

      /**
       * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
       * launch year, LLL is the sequential launch number of that year, and AAA is an
       * optional launch piece designator for the launch.
       */
      intlDes?: string;

      /**
       * Date of launch.
       */
      launchDate?: string;

      /**
       * Id of the associated launchSite entity.
       */
      launchSiteId?: string;

      /**
       * Estimated lifetime of the on-orbit payload, if known.
       */
      lifetimeYears?: number;

      /**
       * Mission number of the on-orbit object.
       */
      missionNumber?: string;

      /**
       * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
       * UNKNOWN.
       */
      objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

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
    }
  }

  /**
   * Model representation of characteristics and capabilities of a sensor.
   */
  export interface Sensorcharacteristic {
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
     * Unique identifier of the parent sensor.
     */
    idSensor: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of measurement range(s) where radar samples must fall to be acceptable. If
     * this field is populated, the associated beam(s) must be provided in the
     * beamOrder field.
     */
    acceptSampleRanges?: Array<number>;

    /**
     * Number of bits used in the conversion from analog electrons in a pixel well to a
     * digital number. The digital number has a maximum value of 2^N, where N is the
     * number of bits.
     */
    analogToDigitalBitSize?: number;

    /**
     * Optical sensor camera aperture.
     */
    aperture?: number;

    /**
     * For ASR (Air Surveillance Radar) sensors, the scan (360 deg sweep) rate of the
     * radar, in scans/minute.
     */
    asrScanRate?: number;

    /**
     * One-way radar receiver loss factor due to atmospheric effects. This value will
     * often be the same as the corresponding transmission factor but may be different
     * for bistatic systems.
     */
    atmosReceiverLoss?: number;

    /**
     * One-way radar transmission loss factor due to atmospheric effects.
     */
    atmosTransmissionLoss?: number;

    /**
     * Average atmospheric angular width with no distortion from turbulence at an
     * optical sensor site in arcseconds.
     */
    avgAtmosSeeingConditions?: number;

    /**
     * Array of azimuth angles of a radar beam, in degrees. If this field is populated,
     * the associated beam(s) must be provided in the beamOrder field.
     */
    azAngs?: Array<number>;

    /**
     * Azimuth rate acquisition limit (radians/minute).
     */
    azimuthRate?: number;

    /**
     * Average background sky brightness at an optical sensor site during new moon
     * conditions. This field uses units of watts per square meter per steradian
     * (W/(m^2 str)) consistent with sensor detection bands.
     */
    backgroundSkyRadiance?: number;

    /**
     * Average background sky brightness at an optical sensor site during new moon
     * conditions. This field uses units of visual magnitude consistent with sensor
     * detection bands.
     */
    backgroundSkyVisMag?: number;

    /**
     * Sensor band.
     */
    band?: string;

    /**
     * The total bandwidth, in megahertz, about the radar center frequency.
     */
    bandwidth?: number;

    /**
     * Array designating the beam order of provided values (e.g. vb1 for vertical beam
     * 1, ob1 for oblique beam 1, etc.). Required if any of the following array fields
     * are populated: azAngs, elAngs, radarPulseWidths, pulseRepPeriods, delayGates,
     * rangeGates, rangeSpacings, vertGateSpacings, vertGateWidths, specAvgSpectraNums,
     * tempMedFiltCodes, runMeanCodes, totRecNums, reqRecords, acceptSampleRanges.
     */
    beamOrder?: Array<string>;

    /**
     * Number of radar beams used by the sensor.
     */
    beamQty?: number;

    /**
     * The angle of the center of a phased array sensor.
     */
    boresight?: number;

    /**
     * The number of degrees off of the boresight for the sensor.
     */
    boresightOffAngle?: number;

    /**
     * Weighted center wavelength for an optical sensor bandpass in micrometers. It is
     * the center wavelength in a weighted integral sense, accounting for the
     * sensitivity vs. wavelength curve for the sensor focal plane array.
     */
    centerWavelength?: number;

    /**
     * Collapsing loss in decibels. Collapsing losses occur when two or more sources of
     * noise are added to the target signal. Examples include receiver bandwidth
     * mismatch with filtering bandwidth and elevation or azimuth beam collapse onto
     * position/height indicator displays.
     */
    collapsingLoss?: number;

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
     * Threshold shear value beyond which one of the radial velocity values will be
     * rejected, measured in units of inverse second.
     */
    critShear?: number;

    /**
     * Current flowing through optical sensor focal plane electronics with a closed
     * shutter in electrons per second.
     */
    darkCurrent?: number;

    /**
     * Array of time delay(s) for pulses from a radar beam to get to the first range
     * gate, in nanoseconds. If this field is populated, the associated beam(s) must be
     * provided in the beamOrder field.
     */
    delayGates?: Array<number>;

    /**
     * Description of the equipment and data source.
     */
    description?: string;

    /**
     * Detection signal-to-noise ratio (SNR) threshold in decibels. This value is
     * typically lower than trackSNR.
     */
    detectSNR?: number;

    /**
     * Sensor duty cycle as a fraction of 1. Duty cycle is the fraction of time a
     * sensor is actively transmitting.
     */
    dutyCycle?: number;

    /**
     * Sensor Earth limb exclusion height in kilometers and is generally only applied
     * to space-based sensors. Some models used an earth exclusion angle instead, but
     * this assumes the sensor is in a circular orbit with constant altitude relative
     * to the earth. The limb exclusion height can be used for space-based sensors in
     * any orbit (assuming it is constant with sensor altitude). The limb height is
     * defined to be 0 at the surface of the earth.
     */
    earthLimbExclHgt?: number;

    /**
     * Array of elevation angles of a radar beam, in degrees. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    elAngs?: Array<number>;

    /**
     * Elevation rate acquisition limit (radians/minute).
     */
    elevationRateGeolm?: number;

    /**
     * Type of equipment used to take measurements.
     */
    equipmentType?: string;

    /**
     * The beam width of a Sensor's Fan (range). The values for this range from (0.0 to
     * PI).
     */
    fanBeamWidth?: number;

    /**
     * Number of Fast Fourier Transform (FFT) points used to convert time varying
     * signals into the frequency domain.
     */
    fft?: number;

    /**
     * Maximum number of times the first guess was propagated in each gate before
     * failing the first guess check.
     */
    fgpCrit?: number;

    /**
     * Noise term, in decibels, that arises when a radar receiver filter has a
     * non-optimal bandwidth for an incoming signal (i.e., when it does not match the
     * pulse width).
     */
    filterMismatchFactor?: number;

    /**
     * F-number for an optical telescope. It is dimensionless and is defined as the
     * ratio of the focal length to the aperture width.
     */
    fNum?: number;

    /**
     * For radar based sensors, the focal point elevation of the radar at the site, in
     * meters.
     */
    focalPoint?: number;

    /**
     * Horizontal field of view, in degrees.
     */
    hFOV?: number;

    /**
     * Horizontal pixel resolution.
     */
    hResPixels?: number;

    /**
     * For radar based sensors, K-factor is a relative indicator of refractivity that
     * infers the amount of radar beam bending due to atmosphere. (1<K<2).
     */
    k?: number;

    /**
     * For Orbiting Sensors, First Card Azimuth limit #1 (left, degrees).
     */
    leftClockAngle?: number;

    /**
     * Leftmost GEO belt longitude limit for this sensor (if applicable).
     */
    leftGeoBeltLimit?: number;

    /**
     * Site where measurement is taken.
     */
    location?: string;

    /**
     * Aggregated radar range equation gain in decibels for maximum sensitivity. It is
     * a roll-up value for low fidelity modeling and is often the only sensitivity
     * value available for a radar system without access to detailed performance
     * parameters.
     */
    loopGain?: number;

    /**
     * Lowest aspect angle of the full moon in degrees at which the sensor can achieve
     * full performance.
     */
    lunarExclAngle?: number;

    /**
     * Angle between magnetic north and true north at the sensor site, in degrees.
     */
    magDec?: number;

    /**
     * Absolute magnitude acquisition limit for optical sensors.
     */
    magnitudeLimit?: number;

    /**
     * Max deviation angle of the sensor in degrees.
     */
    maxDeviationAngle?: number;

    /**
     * Maximum integration time per image frame in seconds for an optical sensor.
     */
    maxIntegrationTime?: number;

    /**
     * Maximum observable sensor range, in kilometers.
     */
    maxObservableRange?: number;

    /**
     * Maximum observable range limit in kilometers -- sensor cannot acquire beyond
     * this range.
     */
    maxRangeLimit?: number;

    /**
     * Maximum wavelength detectable by an optical sensor in micrometers.
     */
    maxWavelength?: number;

    /**
     * Minimum integration time per image frame in seconds for an optical sensor.
     */
    minIntegrationTime?: number;

    /**
     * Minimum range measurement capability of the sensor, in kilometers.
     */
    minRangeLimit?: number;

    /**
     * Signal to Noise Ratio, in decibels. The values for this range from 0.0 - + 99.99
     * dB.
     */
    minSignalNoiseRatio?: number;

    /**
     * Minimum wavelength detectable by an optical sensor in micrometers.
     */
    minWavelength?: number;

    /**
     * Negative Range-rate/relative velocity limit (kilometers/second).
     */
    negativeRangeRateLimit?: number;

    /**
     * Noise figure for a radar system in decibels. This value may be used to compute
     * system noise when the system temperature is unavailable.
     */
    noiseFigure?: number;

    /**
     * Number of pulses that are non-coherently integrated during detection processing.
     */
    nonCoherentIntegratedPulses?: number;

    /**
     * For radar based sensors, number of integrated pulses in a transmit cycle.
     */
    numIntegratedPulses?: number;

    /**
     * Number of integration frames for an optical sensor.
     */
    numIntegrationFrames?: number;

    /**
     * The number of optical integration mode characteristics provided in this record.
     * If provided, the numOpticalIntegrationModes value indicates the number of
     * elements in each of the opticalIntegrationTimes, opticalIntegrationAngularRates,
     * opticalIntegrationFrames, opticalIntegrationPixelBinnings, and
     * opticalIntegrationSNRs arrays.
     */
    numOpticalIntegrationModes?: number;

    /**
     * The number of waveforms characteristics provided in this record. If provided,
     * the numWaveforms value indicates the number of elements in each of the
     * waveformPulseWidths, waveformBandWidths, waveformMinRanges, waveformMaxRanges,
     * and waveformLoopGains arrays.
     */
    numWaveforms?: number;

    /**
     * Array containing the angular rate, in arcsec/sec, for each provided optical
     * integration mode. The number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationAngularRates?: Array<number>;

    /**
     * Array containing the number of frames, for each optical integration mode. The
     * number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationFrames?: Array<number>;

    /**
     * Array containing the pixel binning, for each optical integration mode. The
     * number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationPixelBinnings?: Array<number>;

    /**
     * Array of optical integration modes signal to noise ratios. The number of
     * elements must be equal to the value indicated in numOpticalIntegrationModes.
     */
    opticalIntegrationSNRs?: Array<number>;

    /**
     * Array containing the time, in seconds, for each provided optical integration
     * mode. The number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationTimes?: Array<number>;

    /**
     * Fraction of incident light transmitted to an optical sensor focal plane array.
     * The value is given as a fraction of 1, not as a percent.
     */
    opticalTransmission?: number;

    /**
     * The originating source network on which this record was created, auto-populated
     * by the system.
     */
    origNetwork?: string;

    /**
     * Two-way pattern absorption/propagation loss due to medium in decibels.
     */
    patternAbsorptionLoss?: number;

    /**
     * Losses from the beam shape, scanning, and pattern factor in decibels. These
     * losses occur when targets are not directly in line with a beam center. For space
     * surveillance, this will occur most often during sensor scanning.
     */
    patternScanLoss?: number;

    /**
     * Maximum instantaneous radar transmit power in watts for use in the radar range
     * equation.
     */
    peakPower?: number;

    /**
     * Angular field-of-view covered by one pixel in a focal plane array in
     * microradians. The pixel is assumed to be a perfect square so that only a single
     * value is required.
     */
    pixelInstantaneousFOV?: number;

    /**
     * Maximum number of electrons that can be collected in a single pixel on an
     * optical sensor focal plane array.
     */
    pixelWellDepth?: number;

    /**
     * Positive Range-rate/relative velocity limit (kilometers/second).
     */
    positiveRangeRateLimit?: number;

    /**
     * For radar based sensors, pulse repetition frequency (PRF), in hertz. Number of
     * new pulses transmitted per second.
     */
    prf?: number;

    /**
     * Designated probability of detection at the signal-to-noise detection threshold.
     */
    probDetectSNR?: number;

    /**
     * For radar based sensors, probability of the indication of the presence of a
     * radar target due to noise or interference.
     */
    probFalseAlarm?: number;

    /**
     * Array of interval(s) between the start of one radar pulse and the start of
     * another for a radar beam, in microseconds. If this field is populated, the
     * associated beam(s) must be provided in the beamOrder field.
     */
    pulseRepPeriods?: Array<number>;

    /**
     * Fraction of incident photons converted to electrons at the focal plane array.
     * This value is a decimal number between 0 and 1, inclusive.
     */
    quantumEff?: number;

    /**
     * Radar frequency in hertz, of the sensor (if a radar sensor).
     */
    radarFrequency?: number;

    /**
     * Message data format transmitted by the sensor digitizer.
     */
    radarMessageFormat?: string;

    /**
     * For radar based sensors, radar maximum unambiguous range, in kilometers.
     */
    radarMUR?: number;

    /**
     * Array of transmit time(s) for a radar beam pulse, in microseconds. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    radarPulseWidths?: Array<number>;

    /**
     * Radio frequency (if sensor is RF).
     */
    radioFrequency?: number;

    /**
     * Losses due to the presence of a protective radome surrounding a radar sensor, in
     * decibels.
     */
    radomeLoss?: number;

    /**
     * Array of the number(s) of discrete altitudes where return signals are sampled by
     * a radar beam. If this field is populated, the associated beam(s) must be
     * provided in the beamOrder field.
     */
    rangeGates?: Array<number>;

    /**
     * Array of range gate spacing(s) for a radar beam, in nanoseconds. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    rangeSpacings?: Array<number>;

    /**
     * Number of false-signal electrons generated by optical sensor focal plane
     * read-out electronics from photon-to-electron conversion during frame
     * integration. The units are in electrons RMS.
     */
    readNoise?: number;

    /**
     * Radar receive gain in decibels.
     */
    receiveGain?: number;

    /**
     * Horizontal/azimuthal receive beamwidth for a radar in degrees.
     */
    receiveHorizBeamWidth?: number;

    /**
     * Aggregate radar receive loss, in decibels.
     */
    receiveLoss?: number;

    /**
     * Vertical/elevation receive beamwidth for a radar in degrees.
     */
    receiveVertBeamWidth?: number;

    /**
     * Reference temperature for radar noise in Kelvin. A reference temperature is used
     * when the radar system temperature is unknown and is combined with the system
     * noise figure to estimate signal loss.
     */
    refTemp?: number;

    /**
     * Array of the total number(s) of records required to meet consensus for a radar
     * beam. If this field is populated, the associated beam(s) must be provided in the
     * beamOrder field.
     */
    reqRecords?: Array<number>;

    /**
     * For Orbiting Sensors, First Card Azimuth limit #3 (right, degrees).
     */
    rightClockAngle?: number;

    /**
     * Rightmost GEO belt longitude limit for this sensor (if applicable).
     */
    rightGeoBeltLimit?: number;

    /**
     * Array of running mean code(s) used by radar data processing. The running mean
     * method involves taking a series of averages of different selections of the full
     * data set to smooth out short-term fluctuations in the data. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    runMeanCodes?: Array<number>;

    /**
     * Radar signal processing losses, in decibels.
     */
    signalProcessingLoss?: number;

    /**
     * Site code of the sensor.
     */
    siteCode?: string;

    /**
     * Sensor and target position vector origins are at the center of the earth. The
     * sun vector origin is at the target position and points toward the sun. Any value
     * between 0 and 180 degrees is acceptable and is assumed to apply in both
     * directions (i.e., a solar exclusion angle of 30 degrees is understood to mean no
     * viewing for any angle between -30 deg and +30 deg).
     */
    solarExclAngle?: number;

    /**
     * Array of the number(s) of Doppler spectra used to process measurements from
     * radar. Spectral averaging involves combining multiple Doppler spectra acquired
     * to obtain a more accurate and representative spectrum. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    specAvgSpectraNums?: Array<number>;

    /**
     * For radar based sensors, expression of the radar system noise, aggregated as an
     * equivalent thermal noise value, in degrees Kelvin.
     */
    systemNoiseTemperature?: number;

    /**
     * Maximum taskable range of the sensor, in kilometers.
     */
    taskableRange?: number;

    /**
     * Array of temporal median filter code(s) of a radar beam. Temporal median
     * filtering is a noise-reducing algorithm which involves replacing each data point
     * with the median value of a window of neighboring points over time. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    tempMedFiltCodes?: Array<number>;

    /**
     * Test number for the observed measurement.
     */
    testNumber?: string;

    /**
     * Array of the total number(s) of records for a radar beam. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    totRecNums?: Array<number>;

    /**
     * For tower sensors, the physical height of the sensor tower, in meters.
     */
    towerHeight?: number;

    /**
     * Beginning track angle limit, in radians. Track angle is the angle between the
     * camera axis and the gimbal plane. Values range from 0 - PI/2.
     */
    trackAngle?: number;

    /**
     * Track signal-to-noise ratio (SNR) threshold in decibels. This value is typically
     * higher than detectSNR.
     */
    trackSNR?: number;

    /**
     * Radar transmit gain in decibels.
     */
    transmitGain?: number;

    /**
     * Horizontal/azimuthal transmit beamwidth for a radar in degrees.
     */
    transmitHorizBeamWidth?: number;

    /**
     * Aggregate radar transmit loss, in decibels.
     */
    transmitLoss?: number;

    /**
     * Radar transmit power in Watts.
     */
    transmitPower?: number;

    /**
     * Vertical/elevation transmit beamwidth for a radar in degrees.
     */
    transmitVertBeamWidth?: number;

    /**
     * True North correction for the sensor, in ACP (Azimunth Change Pulse) count.
     */
    trueNorthCorrector?: number;

    /**
     * Antenna true tilt, in degrees.
     */
    trueTilt?: number;

    /**
     * Twilight angle for ground-based optical sensors in degrees. A sensor cannot view
     * targets until the sun is below the twilight angle relative to the local horizon.
     * The sign of the angle is positive despite the sun elevation being negative after
     * local sunset. Typical values for the twilight angle are civil twilight (6
     * degrees), nautical twilight (12 degrees), and astronomical twilight (18
     * degrees).
     */
    twilightAngle?: number;

    /**
     * Flag indicating if a vertical radar beam was used in the wind calculation.
     */
    vertBeamFlag?: boolean;

    /**
     * Array of vertical distance(s) between points where radar measurements are taken,
     * in meters. If this field is populated, the associated beam(s) must be provided
     * in the beamOrder field.
     */
    vertGateSpacings?: Array<number>;

    /**
     * Array of width(s) of each location where radar measurements are taken, in
     * meters. If this field is populated, the associated beam(s) must be provided in
     * the beamOrder field.
     */
    vertGateWidths?: Array<number>;

    /**
     * Vertical field of view, in degrees.
     */
    vFOV?: number;

    /**
     * Vertical pixel resolution.
     */
    vResPixels?: number;

    /**
     * Array containing the bandwidth, in megahertz, for each provided waveform. The
     * number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformBandwidths?: Array<number>;

    /**
     * Array containing the loop gain, in decibels, for each provided waveform. The
     * number of elements in this array must be equal to the value indicated in the
     * numWaveforms field (10 SNR vs. 1 dBsm at 1000 km).
     */
    waveformLoopGains?: Array<number>;

    /**
     * Array containing the maximum range, in kilometers, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformMaxRanges?: Array<number>;

    /**
     * Array containing the minimum range, in kilometers, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformMinRanges?: Array<number>;

    /**
     * Array containing the pulse width, in microseconds, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformPulseWidths?: Array<number>;

    /**
     * Peformance zone-1 maximum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z1MaxRange?: number;

    /**
     * Peformance zone-1 minimum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z1MinRange?: number;

    /**
     * Peformance zone-2 maximum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z2MaxRange?: number;

    /**
     * Peformance zone-2 minimum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z2MinRange?: number;
  }

  /**
   * Sensorlimits define 0 to many limits of a particular sensor in terms of
   * observation coverage of on-orbit objects.
   */
  export interface SensorlimitsCollection {
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
     * Time the row was created in the database, auto-populated by the system.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database, auto-populated by the
     * system.
     */
    createdBy?: string;

    /**
     * Unique identifier of the target sensor object.
     */
    idSensor?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idSensorLimits?: string;

    /**
     * Leftmost or minimum lower azimuth within this limit. Interpreted according to
     * site types as lower left azimuth limit elevation angle of axis of conical
     * observation pattern. If the limit rectangle is parallel to the horizon, the
     * upper and lower left azimuth limits would be equal. (degrees).
     */
    lowerLeftAzimuthLimit?: number;

    /**
     * Minimum or lower elevation within this limit. Interpreted according to site
     * types as minimum elevation angle, constant elevation or fan beam centerline.
     * (Degrees).
     */
    lowerLeftElevationLimit?: number;

    /**
     * Rightmost or maximum lower azimuth within this limit. Interpreted according to
     * site types as 2nd lower azimuth limit elevation angle of axis of conical
     * observation pattern. If the limit rectangle is parallel to the horizon, the
     * upper and lower right azimuth limits would be equal. (degrees).
     */
    lowerRightAzimuthLimit?: number;

    /**
     * Minimum or lower right elevation within this limit. Interpreted according to
     * site types as minimum right elevation angle, constant elevation or fan beam
     * centerline. If the limit rectangle is parallel to the horizon, the left and
     * right lower elevation limits would be equal. (Degrees).
     */
    lowerRightElevationLimit?: number;

    /**
     * The originating source network on which this record was created, auto-populated
     * by the system.
     */
    origNetwork?: string;

    /**
     * Leftmost or minimum upper azimuth within this sensor limit. Interpreted
     * according to site types as beginning upper azimuth limit, left-hand upper
     * boundary limit. If the limit rectangle is parallel to the horizon, the upper and
     * lower left azimuth limits would be equal. (in degrees).
     */
    upperLeftAzimuthLimit?: number;

    /**
     * Maximum or upper elevation within this limit. Interpreted according to site
     * types as maximum elevation angle, half the apex of conical observation pattern
     * or star. (Degrees).
     */
    upperLeftElevationLimit?: number;

    /**
     * Rightmost or maximum upper azimuth within this limit. Interpreted according to
     * site types as 2nd azimuth limit elevation angle of axis of conical observation
     * pattern. If the limit rectangle is parallel to the horizon, the upper and lower
     * right azimuth limits would be equal. (degrees).
     */
    upperRightAzimuthLimit?: number;

    /**
     * Maximum or upper right elevation within this limit. Interpreted according to
     * site types as maximum rightmost elevation angle, half the apex of conical
     * observation pattern or star. If the limit rectangle is parallel to the horizon,
     * the left and right upper elevation limits would be equal. (Degrees).
     */
    upperRightElevationLimit?: number;
  }

  export interface SensorObservationType {
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
     * The originating source network on which this record was created, auto-populated
     * by the system.
     */
    origNetwork?: string;

    /**
     * The observation measurement type produced by a sensor.
     */
    type?: string;
  }

  /**
   * SensorStats contain statistics on sensors related to observation production such
   * as last reported observation time.
   */
  export interface SensorStat {
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
     * Unique ID of the parent sensor.
     */
    idSensor: string;

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
     * Time of last reported observation in ISO 8601 UTC with microsecond precision.
     */
    lastObTime?: string;

    /**
     * Read-only time the row was updated in the database, set automatically by the
     * system on update.
     */
    updatedAt?: string;

    /**
     * Application user who last updated the row in the database, set by the system
     * automatically and ignored on create/edit operations.
     */
    updatedBy?: string;
  }

  export interface SensorType {
    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: number;

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
     * The originating source network on which this record was created, auto-populated
     * by the system.
     */
    origNetwork?: string;

    /**
     * The specific sensor type and/or surveillance capability of this sensor.
     */
    type?: string;
  }
}

export type SensorCountResponse = string;

/**
 * Model representation of observation data for electro-optical based sensor
 * phenomenologies.
 */
export interface SensorGetResponse {
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
   * Unique name of this sensor.
   */
  sensorName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Optional flag indicating if the sensor is active.
   */
  active?: boolean;

  /**
   * Optional US Air Force identifier for the sensor/ASR site, typically for air
   * surveillance radar (ASR) sensors.
   */
  afId?: string;

  /**
   * The sensor type at the site. Optional field, intended primarily for ASRs.
   */
  asrType?: string;

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
   * Optional dissemination control required for accessing data (e.g observations)
   * produced by this sensor. This is typically a proprietary data owner control for
   * commercial sensors.
   */
  dataControl?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: SensorGetResponse.Entity;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idSensor?: string;

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
   * Collection of Sensorcharacteristics which define characteristics and
   * capabilities of a sensor.
   */
  sensorcharacteristics?: Array<SensorGetResponse.Sensorcharacteristic>;

  /**
   * Sensorlimits define 0 to many limits of a particular sensor in terms of
   * observation coverage of on-orbit objects.
   */
  sensorlimitsCollection?: Array<SensorGetResponse.SensorlimitsCollection>;

  /**
   * Number assigned to this sensor. Since there is no authoritative numbering
   * scheme, these numbers sometimes collide across sensors (especially commercial
   * sensors). It is therefore not a unique identifier.
   */
  sensorNumber?: number;

  sensorObservationType?: SensorGetResponse.SensorObservationType;

  /**
   * Collection of SensorStats which contain statistics of a sensor.
   */
  sensorStats?: Array<SensorGetResponse.SensorStat>;

  sensorType?: SensorGetResponse.SensorType;

  /**
   * Optional short name for the sensor.
   */
  shortName?: string;

  /**
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export namespace SensorGetResponse {
  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  export interface Entity {
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
     * Unique entity name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
     * LASEREMITTER, NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
     */
    type:
      | 'AIRCRAFT'
      | 'BUS'
      | 'COMM'
      | 'IR'
      | 'LASEREMITTER'
      | 'NAVIGATION'
      | 'ONORBIT'
      | 'RFEMITTER'
      | 'SCIENTIFIC'
      | 'SENSOR'
      | 'SITE'
      | 'VESSEL';

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

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
     * Unique identifier of the record.
     */
    idEntity?: string;

    /**
     * Unique identifier of the entity location, if terrestrial/fixed.
     */
    idLocation?: string;

    /**
     * Onorbit identifier if this entity is part of an on-orbit object. For the public
     * catalog, the idOnOrbit is typically the satellite number as a string, but may be
     * a UUID for analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the associated operating unit object.
     */
    idOperatingUnit?: string;

    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    location?: Shared.LocationFull;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Entity.OnOrbit;

    /**
     * Model representation of a unit or organization which operates or controls a
     * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
     * belong to an organization.
     */
    operatingUnit?: Shared.OperatingunitFull;

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
     * Type of organization which owns this entity (e.g. Commercial, Government,
     * Academic, Consortium, etc).
     */
    ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

    /**
     * Read-only collection of RF bands utilized by this entity for communication
     * and/or operation.
     */
    rfBands?: Array<Shared.RfBandFull>;

    /**
     * Read-only collection of statuses which can be collected by multiple sources.
     */
    statusCollection?: Array<Shared.StatusFull>;

    /**
     * Boolean indicating if this entity is taskable.
     */
    taskable?: boolean;

    /**
     * Terrestrial identifier of this entity, if applicable.
     */
    terrestrialId?: string;

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
     * List of URLs to additional details/documents for this entity.
     */
    urls?: Array<string>;
  }

  export namespace Entity {
    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    export interface OnOrbit {
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
       * Satellite/Catalog number of the target on-orbit object.
       */
      satNo: number;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Alternate name of the on-orbit object.
       */
      altName?: string;

      /**
       * Read-only collection of antennas on this on-orbit object.
       */
      antennas?: Array<Shared.OnorbitAntennaFull>;

      /**
       * Read-only collection of batteries on this on-orbit object.
       */
      batteries?: Array<Shared.OnorbitBatteryFull>;

      /**
       * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
       * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
       * Heliocentric, Interplanetary, Lagrangian, Docked).
       */
      category?:
        | 'Unknown'
        | 'On-Orbit'
        | 'Decayed'
        | 'Cataloged Without State'
        | 'Launch Nominal'
        | 'Analyst Satellite'
        | 'Cislunar'
        | 'Lunar'
        | 'Hyperbolic'
        | 'Heliocentric'
        | 'Interplanetary'
        | 'Lagrangian'
        | 'Docked';

      /**
       * Common name of the on-orbit object.
       */
      commonName?: string;

      /**
       * Constellation to which this satellite belongs.
       */
      constellation?: string;

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

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
       * Date of decay.
       */
      decayDate?: string;

      /**
       * For the public catalog, the idOnOrbit is typically the satellite number as a
       * string, but may be a UUID for analyst or other unknown or untracked satellites,
       * auto-generated by the system.
       */
      idOnOrbit?: string;

      /**
       * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
       * launch year, LLL is the sequential launch number of that year, and AAA is an
       * optional launch piece designator for the launch.
       */
      intlDes?: string;

      /**
       * Date of launch.
       */
      launchDate?: string;

      /**
       * Id of the associated launchSite entity.
       */
      launchSiteId?: string;

      /**
       * Estimated lifetime of the on-orbit payload, if known.
       */
      lifetimeYears?: number;

      /**
       * Mission number of the on-orbit object.
       */
      missionNumber?: string;

      /**
       * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
       * UNKNOWN.
       */
      objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

      /**
       * Read-only collection of details for this on-orbit object.
       */
      onorbitDetails?: Array<Shared.OnorbitDetailsFull>;

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
       * Read-only collection of solar arrays on this on-orbit object.
       */
      solarArrays?: Array<Shared.OnorbitSolarArrayFull>;

      /**
       * Read-only collection of thrusters (engines) on this on-orbit object.
       */
      thrusters?: Array<Shared.OnorbitThrusterFull>;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }
  }

  /**
   * Model representation of characteristics and capabilities of a sensor.
   */
  export interface Sensorcharacteristic {
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
     * Unique identifier of the parent sensor.
     */
    idSensor: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of measurement range(s) where radar samples must fall to be acceptable. If
     * this field is populated, the associated beam(s) must be provided in the
     * beamOrder field.
     */
    acceptSampleRanges?: Array<number>;

    /**
     * Number of bits used in the conversion from analog electrons in a pixel well to a
     * digital number. The digital number has a maximum value of 2^N, where N is the
     * number of bits.
     */
    analogToDigitalBitSize?: number;

    /**
     * Optical sensor camera aperture.
     */
    aperture?: number;

    /**
     * For ASR (Air Surveillance Radar) sensors, the scan (360 deg sweep) rate of the
     * radar, in scans/minute.
     */
    asrScanRate?: number;

    /**
     * One-way radar receiver loss factor due to atmospheric effects. This value will
     * often be the same as the corresponding transmission factor but may be different
     * for bistatic systems.
     */
    atmosReceiverLoss?: number;

    /**
     * One-way radar transmission loss factor due to atmospheric effects.
     */
    atmosTransmissionLoss?: number;

    /**
     * Average atmospheric angular width with no distortion from turbulence at an
     * optical sensor site in arcseconds.
     */
    avgAtmosSeeingConditions?: number;

    /**
     * Array of azimuth angles of a radar beam, in degrees. If this field is populated,
     * the associated beam(s) must be provided in the beamOrder field.
     */
    azAngs?: Array<number>;

    /**
     * Azimuth rate acquisition limit (radians/minute).
     */
    azimuthRate?: number;

    /**
     * Average background sky brightness at an optical sensor site during new moon
     * conditions. This field uses units of watts per square meter per steradian
     * (W/(m^2 str)) consistent with sensor detection bands.
     */
    backgroundSkyRadiance?: number;

    /**
     * Average background sky brightness at an optical sensor site during new moon
     * conditions. This field uses units of visual magnitude consistent with sensor
     * detection bands.
     */
    backgroundSkyVisMag?: number;

    /**
     * Sensor band.
     */
    band?: string;

    /**
     * The total bandwidth, in megahertz, about the radar center frequency.
     */
    bandwidth?: number;

    /**
     * Array designating the beam order of provided values (e.g. vb1 for vertical beam
     * 1, ob1 for oblique beam 1, etc.). Required if any of the following array fields
     * are populated: azAngs, elAngs, radarPulseWidths, pulseRepPeriods, delayGates,
     * rangeGates, rangeSpacings, vertGateSpacings, vertGateWidths, specAvgSpectraNums,
     * tempMedFiltCodes, runMeanCodes, totRecNums, reqRecords, acceptSampleRanges.
     */
    beamOrder?: Array<string>;

    /**
     * Number of radar beams used by the sensor.
     */
    beamQty?: number;

    /**
     * The angle of the center of a phased array sensor.
     */
    boresight?: number;

    /**
     * The number of degrees off of the boresight for the sensor.
     */
    boresightOffAngle?: number;

    /**
     * Weighted center wavelength for an optical sensor bandpass in micrometers. It is
     * the center wavelength in a weighted integral sense, accounting for the
     * sensitivity vs. wavelength curve for the sensor focal plane array.
     */
    centerWavelength?: number;

    /**
     * Collapsing loss in decibels. Collapsing losses occur when two or more sources of
     * noise are added to the target signal. Examples include receiver bandwidth
     * mismatch with filtering bandwidth and elevation or azimuth beam collapse onto
     * position/height indicator displays.
     */
    collapsingLoss?: number;

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
     * Threshold shear value beyond which one of the radial velocity values will be
     * rejected, measured in units of inverse second.
     */
    critShear?: number;

    /**
     * Current flowing through optical sensor focal plane electronics with a closed
     * shutter in electrons per second.
     */
    darkCurrent?: number;

    /**
     * Array of time delay(s) for pulses from a radar beam to get to the first range
     * gate, in nanoseconds. If this field is populated, the associated beam(s) must be
     * provided in the beamOrder field.
     */
    delayGates?: Array<number>;

    /**
     * Description of the equipment and data source.
     */
    description?: string;

    /**
     * Detection signal-to-noise ratio (SNR) threshold in decibels. This value is
     * typically lower than trackSNR.
     */
    detectSNR?: number;

    /**
     * Sensor duty cycle as a fraction of 1. Duty cycle is the fraction of time a
     * sensor is actively transmitting.
     */
    dutyCycle?: number;

    /**
     * Sensor Earth limb exclusion height in kilometers and is generally only applied
     * to space-based sensors. Some models used an earth exclusion angle instead, but
     * this assumes the sensor is in a circular orbit with constant altitude relative
     * to the earth. The limb exclusion height can be used for space-based sensors in
     * any orbit (assuming it is constant with sensor altitude). The limb height is
     * defined to be 0 at the surface of the earth.
     */
    earthLimbExclHgt?: number;

    /**
     * Array of elevation angles of a radar beam, in degrees. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    elAngs?: Array<number>;

    /**
     * Elevation rate acquisition limit (radians/minute).
     */
    elevationRateGeolm?: number;

    /**
     * Type of equipment used to take measurements.
     */
    equipmentType?: string;

    /**
     * The beam width of a Sensor's Fan (range). The values for this range from (0.0 to
     * PI).
     */
    fanBeamWidth?: number;

    /**
     * Number of Fast Fourier Transform (FFT) points used to convert time varying
     * signals into the frequency domain.
     */
    fft?: number;

    /**
     * Maximum number of times the first guess was propagated in each gate before
     * failing the first guess check.
     */
    fgpCrit?: number;

    /**
     * Noise term, in decibels, that arises when a radar receiver filter has a
     * non-optimal bandwidth for an incoming signal (i.e., when it does not match the
     * pulse width).
     */
    filterMismatchFactor?: number;

    /**
     * F-number for an optical telescope. It is dimensionless and is defined as the
     * ratio of the focal length to the aperture width.
     */
    fNum?: number;

    /**
     * For radar based sensors, the focal point elevation of the radar at the site, in
     * meters.
     */
    focalPoint?: number;

    /**
     * Horizontal field of view, in degrees.
     */
    hFOV?: number;

    /**
     * Horizontal pixel resolution.
     */
    hResPixels?: number;

    /**
     * For radar based sensors, K-factor is a relative indicator of refractivity that
     * infers the amount of radar beam bending due to atmosphere. (1<K<2).
     */
    k?: number;

    /**
     * For Orbiting Sensors, First Card Azimuth limit #1 (left, degrees).
     */
    leftClockAngle?: number;

    /**
     * Leftmost GEO belt longitude limit for this sensor (if applicable).
     */
    leftGeoBeltLimit?: number;

    /**
     * Site where measurement is taken.
     */
    location?: string;

    /**
     * Aggregated radar range equation gain in decibels for maximum sensitivity. It is
     * a roll-up value for low fidelity modeling and is often the only sensitivity
     * value available for a radar system without access to detailed performance
     * parameters.
     */
    loopGain?: number;

    /**
     * Lowest aspect angle of the full moon in degrees at which the sensor can achieve
     * full performance.
     */
    lunarExclAngle?: number;

    /**
     * Angle between magnetic north and true north at the sensor site, in degrees.
     */
    magDec?: number;

    /**
     * Absolute magnitude acquisition limit for optical sensors.
     */
    magnitudeLimit?: number;

    /**
     * Max deviation angle of the sensor in degrees.
     */
    maxDeviationAngle?: number;

    /**
     * Maximum integration time per image frame in seconds for an optical sensor.
     */
    maxIntegrationTime?: number;

    /**
     * Maximum observable sensor range, in kilometers.
     */
    maxObservableRange?: number;

    /**
     * Maximum observable range limit in kilometers -- sensor cannot acquire beyond
     * this range.
     */
    maxRangeLimit?: number;

    /**
     * Maximum wavelength detectable by an optical sensor in micrometers.
     */
    maxWavelength?: number;

    /**
     * Minimum integration time per image frame in seconds for an optical sensor.
     */
    minIntegrationTime?: number;

    /**
     * Minimum range measurement capability of the sensor, in kilometers.
     */
    minRangeLimit?: number;

    /**
     * Signal to Noise Ratio, in decibels. The values for this range from 0.0 - + 99.99
     * dB.
     */
    minSignalNoiseRatio?: number;

    /**
     * Minimum wavelength detectable by an optical sensor in micrometers.
     */
    minWavelength?: number;

    /**
     * Negative Range-rate/relative velocity limit (kilometers/second).
     */
    negativeRangeRateLimit?: number;

    /**
     * Noise figure for a radar system in decibels. This value may be used to compute
     * system noise when the system temperature is unavailable.
     */
    noiseFigure?: number;

    /**
     * Number of pulses that are non-coherently integrated during detection processing.
     */
    nonCoherentIntegratedPulses?: number;

    /**
     * For radar based sensors, number of integrated pulses in a transmit cycle.
     */
    numIntegratedPulses?: number;

    /**
     * Number of integration frames for an optical sensor.
     */
    numIntegrationFrames?: number;

    /**
     * The number of optical integration mode characteristics provided in this record.
     * If provided, the numOpticalIntegrationModes value indicates the number of
     * elements in each of the opticalIntegrationTimes, opticalIntegrationAngularRates,
     * opticalIntegrationFrames, opticalIntegrationPixelBinnings, and
     * opticalIntegrationSNRs arrays.
     */
    numOpticalIntegrationModes?: number;

    /**
     * The number of waveforms characteristics provided in this record. If provided,
     * the numWaveforms value indicates the number of elements in each of the
     * waveformPulseWidths, waveformBandWidths, waveformMinRanges, waveformMaxRanges,
     * and waveformLoopGains arrays.
     */
    numWaveforms?: number;

    /**
     * Array containing the angular rate, in arcsec/sec, for each provided optical
     * integration mode. The number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationAngularRates?: Array<number>;

    /**
     * Array containing the number of frames, for each optical integration mode. The
     * number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationFrames?: Array<number>;

    /**
     * Array containing the pixel binning, for each optical integration mode. The
     * number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationPixelBinnings?: Array<number>;

    /**
     * Array of optical integration modes signal to noise ratios. The number of
     * elements must be equal to the value indicated in numOpticalIntegrationModes.
     */
    opticalIntegrationSNRs?: Array<number>;

    /**
     * Array containing the time, in seconds, for each provided optical integration
     * mode. The number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationTimes?: Array<number>;

    /**
     * Fraction of incident light transmitted to an optical sensor focal plane array.
     * The value is given as a fraction of 1, not as a percent.
     */
    opticalTransmission?: number;

    /**
     * The originating source network on which this record was created, auto-populated
     * by the system.
     */
    origNetwork?: string;

    /**
     * Two-way pattern absorption/propagation loss due to medium in decibels.
     */
    patternAbsorptionLoss?: number;

    /**
     * Losses from the beam shape, scanning, and pattern factor in decibels. These
     * losses occur when targets are not directly in line with a beam center. For space
     * surveillance, this will occur most often during sensor scanning.
     */
    patternScanLoss?: number;

    /**
     * Maximum instantaneous radar transmit power in watts for use in the radar range
     * equation.
     */
    peakPower?: number;

    /**
     * Angular field-of-view covered by one pixel in a focal plane array in
     * microradians. The pixel is assumed to be a perfect square so that only a single
     * value is required.
     */
    pixelInstantaneousFOV?: number;

    /**
     * Maximum number of electrons that can be collected in a single pixel on an
     * optical sensor focal plane array.
     */
    pixelWellDepth?: number;

    /**
     * Positive Range-rate/relative velocity limit (kilometers/second).
     */
    positiveRangeRateLimit?: number;

    /**
     * For radar based sensors, pulse repetition frequency (PRF), in hertz. Number of
     * new pulses transmitted per second.
     */
    prf?: number;

    /**
     * Designated probability of detection at the signal-to-noise detection threshold.
     */
    probDetectSNR?: number;

    /**
     * For radar based sensors, probability of the indication of the presence of a
     * radar target due to noise or interference.
     */
    probFalseAlarm?: number;

    /**
     * Array of interval(s) between the start of one radar pulse and the start of
     * another for a radar beam, in microseconds. If this field is populated, the
     * associated beam(s) must be provided in the beamOrder field.
     */
    pulseRepPeriods?: Array<number>;

    /**
     * Fraction of incident photons converted to electrons at the focal plane array.
     * This value is a decimal number between 0 and 1, inclusive.
     */
    quantumEff?: number;

    /**
     * Radar frequency in hertz, of the sensor (if a radar sensor).
     */
    radarFrequency?: number;

    /**
     * Message data format transmitted by the sensor digitizer.
     */
    radarMessageFormat?: string;

    /**
     * For radar based sensors, radar maximum unambiguous range, in kilometers.
     */
    radarMUR?: number;

    /**
     * Array of transmit time(s) for a radar beam pulse, in microseconds. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    radarPulseWidths?: Array<number>;

    /**
     * Radio frequency (if sensor is RF).
     */
    radioFrequency?: number;

    /**
     * Losses due to the presence of a protective radome surrounding a radar sensor, in
     * decibels.
     */
    radomeLoss?: number;

    /**
     * Array of the number(s) of discrete altitudes where return signals are sampled by
     * a radar beam. If this field is populated, the associated beam(s) must be
     * provided in the beamOrder field.
     */
    rangeGates?: Array<number>;

    /**
     * Array of range gate spacing(s) for a radar beam, in nanoseconds. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    rangeSpacings?: Array<number>;

    /**
     * Number of false-signal electrons generated by optical sensor focal plane
     * read-out electronics from photon-to-electron conversion during frame
     * integration. The units are in electrons RMS.
     */
    readNoise?: number;

    /**
     * Radar receive gain in decibels.
     */
    receiveGain?: number;

    /**
     * Horizontal/azimuthal receive beamwidth for a radar in degrees.
     */
    receiveHorizBeamWidth?: number;

    /**
     * Aggregate radar receive loss, in decibels.
     */
    receiveLoss?: number;

    /**
     * Vertical/elevation receive beamwidth for a radar in degrees.
     */
    receiveVertBeamWidth?: number;

    /**
     * Reference temperature for radar noise in Kelvin. A reference temperature is used
     * when the radar system temperature is unknown and is combined with the system
     * noise figure to estimate signal loss.
     */
    refTemp?: number;

    /**
     * Array of the total number(s) of records required to meet consensus for a radar
     * beam. If this field is populated, the associated beam(s) must be provided in the
     * beamOrder field.
     */
    reqRecords?: Array<number>;

    /**
     * For Orbiting Sensors, First Card Azimuth limit #3 (right, degrees).
     */
    rightClockAngle?: number;

    /**
     * Rightmost GEO belt longitude limit for this sensor (if applicable).
     */
    rightGeoBeltLimit?: number;

    /**
     * Array of running mean code(s) used by radar data processing. The running mean
     * method involves taking a series of averages of different selections of the full
     * data set to smooth out short-term fluctuations in the data. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    runMeanCodes?: Array<number>;

    /**
     * Radar signal processing losses, in decibels.
     */
    signalProcessingLoss?: number;

    /**
     * Site code of the sensor.
     */
    siteCode?: string;

    /**
     * Sensor and target position vector origins are at the center of the earth. The
     * sun vector origin is at the target position and points toward the sun. Any value
     * between 0 and 180 degrees is acceptable and is assumed to apply in both
     * directions (i.e., a solar exclusion angle of 30 degrees is understood to mean no
     * viewing for any angle between -30 deg and +30 deg).
     */
    solarExclAngle?: number;

    /**
     * Array of the number(s) of Doppler spectra used to process measurements from
     * radar. Spectral averaging involves combining multiple Doppler spectra acquired
     * to obtain a more accurate and representative spectrum. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    specAvgSpectraNums?: Array<number>;

    /**
     * For radar based sensors, expression of the radar system noise, aggregated as an
     * equivalent thermal noise value, in degrees Kelvin.
     */
    systemNoiseTemperature?: number;

    /**
     * Maximum taskable range of the sensor, in kilometers.
     */
    taskableRange?: number;

    /**
     * Array of temporal median filter code(s) of a radar beam. Temporal median
     * filtering is a noise-reducing algorithm which involves replacing each data point
     * with the median value of a window of neighboring points over time. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    tempMedFiltCodes?: Array<number>;

    /**
     * Test number for the observed measurement.
     */
    testNumber?: string;

    /**
     * Array of the total number(s) of records for a radar beam. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    totRecNums?: Array<number>;

    /**
     * For tower sensors, the physical height of the sensor tower, in meters.
     */
    towerHeight?: number;

    /**
     * Beginning track angle limit, in radians. Track angle is the angle between the
     * camera axis and the gimbal plane. Values range from 0 - PI/2.
     */
    trackAngle?: number;

    /**
     * Track signal-to-noise ratio (SNR) threshold in decibels. This value is typically
     * higher than detectSNR.
     */
    trackSNR?: number;

    /**
     * Radar transmit gain in decibels.
     */
    transmitGain?: number;

    /**
     * Horizontal/azimuthal transmit beamwidth for a radar in degrees.
     */
    transmitHorizBeamWidth?: number;

    /**
     * Aggregate radar transmit loss, in decibels.
     */
    transmitLoss?: number;

    /**
     * Radar transmit power in Watts.
     */
    transmitPower?: number;

    /**
     * Vertical/elevation transmit beamwidth for a radar in degrees.
     */
    transmitVertBeamWidth?: number;

    /**
     * True North correction for the sensor, in ACP (Azimunth Change Pulse) count.
     */
    trueNorthCorrector?: number;

    /**
     * Antenna true tilt, in degrees.
     */
    trueTilt?: number;

    /**
     * Twilight angle for ground-based optical sensors in degrees. A sensor cannot view
     * targets until the sun is below the twilight angle relative to the local horizon.
     * The sign of the angle is positive despite the sun elevation being negative after
     * local sunset. Typical values for the twilight angle are civil twilight (6
     * degrees), nautical twilight (12 degrees), and astronomical twilight (18
     * degrees).
     */
    twilightAngle?: number;

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
     * Flag indicating if a vertical radar beam was used in the wind calculation.
     */
    vertBeamFlag?: boolean;

    /**
     * Array of vertical distance(s) between points where radar measurements are taken,
     * in meters. If this field is populated, the associated beam(s) must be provided
     * in the beamOrder field.
     */
    vertGateSpacings?: Array<number>;

    /**
     * Array of width(s) of each location where radar measurements are taken, in
     * meters. If this field is populated, the associated beam(s) must be provided in
     * the beamOrder field.
     */
    vertGateWidths?: Array<number>;

    /**
     * Vertical field of view, in degrees.
     */
    vFOV?: number;

    /**
     * Vertical pixel resolution.
     */
    vResPixels?: number;

    /**
     * Array containing the bandwidth, in megahertz, for each provided waveform. The
     * number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformBandwidths?: Array<number>;

    /**
     * Array containing the loop gain, in decibels, for each provided waveform. The
     * number of elements in this array must be equal to the value indicated in the
     * numWaveforms field (10 SNR vs. 1 dBsm at 1000 km).
     */
    waveformLoopGains?: Array<number>;

    /**
     * Array containing the maximum range, in kilometers, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformMaxRanges?: Array<number>;

    /**
     * Array containing the minimum range, in kilometers, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformMinRanges?: Array<number>;

    /**
     * Array containing the pulse width, in microseconds, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformPulseWidths?: Array<number>;

    /**
     * Peformance zone-1 maximum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z1MaxRange?: number;

    /**
     * Peformance zone-1 minimum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z1MinRange?: number;

    /**
     * Peformance zone-2 maximum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z2MaxRange?: number;

    /**
     * Peformance zone-2 minimum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z2MinRange?: number;
  }

  /**
   * Sensorlimits define 0 to many limits of a particular sensor in terms of
   * observation coverage of on-orbit objects.
   */
  export interface SensorlimitsCollection {
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
     * Time the row was created in the database, auto-populated by the system.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database, auto-populated by the
     * system.
     */
    createdBy?: string;

    /**
     * Unique identifier of the target sensor object.
     */
    idSensor?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idSensorLimits?: string;

    /**
     * Leftmost or minimum lower azimuth within this limit. Interpreted according to
     * site types as lower left azimuth limit elevation angle of axis of conical
     * observation pattern. If the limit rectangle is parallel to the horizon, the
     * upper and lower left azimuth limits would be equal. (degrees).
     */
    lowerLeftAzimuthLimit?: number;

    /**
     * Minimum or lower elevation within this limit. Interpreted according to site
     * types as minimum elevation angle, constant elevation or fan beam centerline.
     * (Degrees).
     */
    lowerLeftElevationLimit?: number;

    /**
     * Rightmost or maximum lower azimuth within this limit. Interpreted according to
     * site types as 2nd lower azimuth limit elevation angle of axis of conical
     * observation pattern. If the limit rectangle is parallel to the horizon, the
     * upper and lower right azimuth limits would be equal. (degrees).
     */
    lowerRightAzimuthLimit?: number;

    /**
     * Minimum or lower right elevation within this limit. Interpreted according to
     * site types as minimum right elevation angle, constant elevation or fan beam
     * centerline. If the limit rectangle is parallel to the horizon, the left and
     * right lower elevation limits would be equal. (Degrees).
     */
    lowerRightElevationLimit?: number;

    /**
     * The originating source network on which this record was created, auto-populated
     * by the system.
     */
    origNetwork?: string;

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
     * Leftmost or minimum upper azimuth within this sensor limit. Interpreted
     * according to site types as beginning upper azimuth limit, left-hand upper
     * boundary limit. If the limit rectangle is parallel to the horizon, the upper and
     * lower left azimuth limits would be equal. (in degrees).
     */
    upperLeftAzimuthLimit?: number;

    /**
     * Maximum or upper elevation within this limit. Interpreted according to site
     * types as maximum elevation angle, half the apex of conical observation pattern
     * or star. (Degrees).
     */
    upperLeftElevationLimit?: number;

    /**
     * Rightmost or maximum upper azimuth within this limit. Interpreted according to
     * site types as 2nd azimuth limit elevation angle of axis of conical observation
     * pattern. If the limit rectangle is parallel to the horizon, the upper and lower
     * right azimuth limits would be equal. (degrees).
     */
    upperRightAzimuthLimit?: number;

    /**
     * Maximum or upper right elevation within this limit. Interpreted according to
     * site types as maximum rightmost elevation angle, half the apex of conical
     * observation pattern or star. If the limit rectangle is parallel to the horizon,
     * the left and right upper elevation limits would be equal. (Degrees).
     */
    upperRightElevationLimit?: number;
  }

  export interface SensorObservationType {
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
     * The originating source network on which this record was created, auto-populated
     * by the system.
     */
    origNetwork?: string;

    /**
     * The observation measurement type produced by a sensor.
     */
    type?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  /**
   * SensorStats contain statistics on sensors related to observation production such
   * as last reported observation time.
   */
  export interface SensorStat {
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
     * Unique ID of the parent sensor.
     */
    idSensor: string;

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
     * Time of last reported observation in ISO 8601 UTC with microsecond precision.
     */
    lastObTime?: string;

    /**
     * Read-only time the row was updated in the database, set automatically by the
     * system on update.
     */
    updatedAt?: string;

    /**
     * Application user who last updated the row in the database, set by the system
     * automatically and ignored on create/edit operations.
     */
    updatedBy?: string;
  }

  export interface SensorType {
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
    id?: number;

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
     * The originating source network on which this record was created, auto-populated
     * by the system.
     */
    origNetwork?: string;

    /**
     * The specific sensor type and/or surveillance capability of this sensor.
     */
    type?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }
}

export interface SensorQueryhelpResponse {
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

export type SensorTupleResponse = Array<SensorTupleResponse.SensorTupleResponseItem>;

export namespace SensorTupleResponse {
  /**
   * Model representation of observation data for electro-optical based sensor
   * phenomenologies.
   */
  export interface SensorTupleResponseItem {
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
     * Unique name of this sensor.
     */
    sensorName: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Optional flag indicating if the sensor is active.
     */
    active?: boolean;

    /**
     * Optional US Air Force identifier for the sensor/ASR site, typically for air
     * surveillance radar (ASR) sensors.
     */
    afId?: string;

    /**
     * The sensor type at the site. Optional field, intended primarily for ASRs.
     */
    asrType?: string;

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
     * Optional dissemination control required for accessing data (e.g observations)
     * produced by this sensor. This is typically a proprietary data owner control for
     * commercial sensors.
     */
    dataControl?: string;

    /**
     * An entity is a generic representation of any object within a space/SSA system
     * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
     * entity can have an operating unit, a location (if terrestrial), and statuses.
     */
    entity?: SensorTupleResponseItem.Entity;

    /**
     * Unique identifier of the parent entity. idEntity is required for Put.
     */
    idEntity?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idSensor?: string;

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
     * Collection of Sensorcharacteristics which define characteristics and
     * capabilities of a sensor.
     */
    sensorcharacteristics?: Array<SensorTupleResponseItem.Sensorcharacteristic>;

    /**
     * Sensorlimits define 0 to many limits of a particular sensor in terms of
     * observation coverage of on-orbit objects.
     */
    sensorlimitsCollection?: Array<SensorTupleResponseItem.SensorlimitsCollection>;

    /**
     * Number assigned to this sensor. Since there is no authoritative numbering
     * scheme, these numbers sometimes collide across sensors (especially commercial
     * sensors). It is therefore not a unique identifier.
     */
    sensorNumber?: number;

    sensorObservationType?: SensorTupleResponseItem.SensorObservationType;

    /**
     * Collection of SensorStats which contain statistics of a sensor.
     */
    sensorStats?: Array<SensorTupleResponseItem.SensorStat>;

    sensorType?: SensorTupleResponseItem.SensorType;

    /**
     * Optional short name for the sensor.
     */
    shortName?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  export namespace SensorTupleResponseItem {
    /**
     * An entity is a generic representation of any object within a space/SSA system
     * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
     * entity can have an operating unit, a location (if terrestrial), and statuses.
     */
    export interface Entity {
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
       * Unique entity name.
       */
      name: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
       * LASEREMITTER, NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
       */
      type:
        | 'AIRCRAFT'
        | 'BUS'
        | 'COMM'
        | 'IR'
        | 'LASEREMITTER'
        | 'NAVIGATION'
        | 'ONORBIT'
        | 'RFEMITTER'
        | 'SCIENTIFIC'
        | 'SENSOR'
        | 'SITE'
        | 'VESSEL';

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

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
       * Unique identifier of the record.
       */
      idEntity?: string;

      /**
       * Unique identifier of the entity location, if terrestrial/fixed.
       */
      idLocation?: string;

      /**
       * Onorbit identifier if this entity is part of an on-orbit object. For the public
       * catalog, the idOnOrbit is typically the satellite number as a string, but may be
       * a UUID for analyst or other unknown or untracked satellites.
       */
      idOnOrbit?: string;

      /**
       * Unique identifier of the associated operating unit object.
       */
      idOperatingUnit?: string;

      /**
       * Model representation of a location, which is a specific fixed point on the earth
       * and is used to denote the locations of fixed sensors, operating units, etc.
       */
      location?: Shared.LocationFull;

      /**
       * Model object representing on-orbit objects or satellites in the system.
       */
      onOrbit?: Entity.OnOrbit;

      /**
       * Model representation of a unit or organization which operates or controls a
       * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
       * belong to an organization.
       */
      operatingUnit?: Shared.OperatingunitFull;

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
       * Type of organization which owns this entity (e.g. Commercial, Government,
       * Academic, Consortium, etc).
       */
      ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

      /**
       * Read-only collection of RF bands utilized by this entity for communication
       * and/or operation.
       */
      rfBands?: Array<Shared.RfBandFull>;

      /**
       * Read-only collection of statuses which can be collected by multiple sources.
       */
      statusCollection?: Array<Shared.StatusFull>;

      /**
       * Boolean indicating if this entity is taskable.
       */
      taskable?: boolean;

      /**
       * Terrestrial identifier of this entity, if applicable.
       */
      terrestrialId?: string;

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
       * List of URLs to additional details/documents for this entity.
       */
      urls?: Array<string>;
    }

    export namespace Entity {
      /**
       * Model object representing on-orbit objects or satellites in the system.
       */
      export interface OnOrbit {
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
         * Satellite/Catalog number of the target on-orbit object.
         */
        satNo: number;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Alternate name of the on-orbit object.
         */
        altName?: string;

        /**
         * Read-only collection of antennas on this on-orbit object.
         */
        antennas?: Array<Shared.OnorbitAntennaFull>;

        /**
         * Read-only collection of batteries on this on-orbit object.
         */
        batteries?: Array<Shared.OnorbitBatteryFull>;

        /**
         * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
         * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
         * Heliocentric, Interplanetary, Lagrangian, Docked).
         */
        category?:
          | 'Unknown'
          | 'On-Orbit'
          | 'Decayed'
          | 'Cataloged Without State'
          | 'Launch Nominal'
          | 'Analyst Satellite'
          | 'Cislunar'
          | 'Lunar'
          | 'Hyperbolic'
          | 'Heliocentric'
          | 'Interplanetary'
          | 'Lagrangian'
          | 'Docked';

        /**
         * Common name of the on-orbit object.
         */
        commonName?: string;

        /**
         * Constellation to which this satellite belongs.
         */
        constellation?: string;

        /**
         * The country code. This value is typically the ISO 3166 Alpha-2 two-character
         * country code, however it can also represent various consortiums that do not
         * appear in the ISO document. The code must correspond to an existing country in
         * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
         * ISO Alpha-3 code, or alternate code values that exist for the specified country
         * code.
         */
        countryCode?: string;

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
         * Date of decay.
         */
        decayDate?: string;

        /**
         * For the public catalog, the idOnOrbit is typically the satellite number as a
         * string, but may be a UUID for analyst or other unknown or untracked satellites,
         * auto-generated by the system.
         */
        idOnOrbit?: string;

        /**
         * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
         * launch year, LLL is the sequential launch number of that year, and AAA is an
         * optional launch piece designator for the launch.
         */
        intlDes?: string;

        /**
         * Date of launch.
         */
        launchDate?: string;

        /**
         * Id of the associated launchSite entity.
         */
        launchSiteId?: string;

        /**
         * Estimated lifetime of the on-orbit payload, if known.
         */
        lifetimeYears?: number;

        /**
         * Mission number of the on-orbit object.
         */
        missionNumber?: string;

        /**
         * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
         * UNKNOWN.
         */
        objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

        /**
         * Read-only collection of details for this on-orbit object.
         */
        onorbitDetails?: Array<Shared.OnorbitDetailsFull>;

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
         * Read-only collection of solar arrays on this on-orbit object.
         */
        solarArrays?: Array<Shared.OnorbitSolarArrayFull>;

        /**
         * Read-only collection of thrusters (engines) on this on-orbit object.
         */
        thrusters?: Array<Shared.OnorbitThrusterFull>;

        /**
         * Time the row was last updated in the database, auto-populated by the system.
         */
        updatedAt?: string;

        /**
         * Application user who updated the row in the database, auto-populated by the
         * system.
         */
        updatedBy?: string;
      }
    }

    /**
     * Model representation of characteristics and capabilities of a sensor.
     */
    export interface Sensorcharacteristic {
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
       * Unique identifier of the parent sensor.
       */
      idSensor: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Array of measurement range(s) where radar samples must fall to be acceptable. If
       * this field is populated, the associated beam(s) must be provided in the
       * beamOrder field.
       */
      acceptSampleRanges?: Array<number>;

      /**
       * Number of bits used in the conversion from analog electrons in a pixel well to a
       * digital number. The digital number has a maximum value of 2^N, where N is the
       * number of bits.
       */
      analogToDigitalBitSize?: number;

      /**
       * Optical sensor camera aperture.
       */
      aperture?: number;

      /**
       * For ASR (Air Surveillance Radar) sensors, the scan (360 deg sweep) rate of the
       * radar, in scans/minute.
       */
      asrScanRate?: number;

      /**
       * One-way radar receiver loss factor due to atmospheric effects. This value will
       * often be the same as the corresponding transmission factor but may be different
       * for bistatic systems.
       */
      atmosReceiverLoss?: number;

      /**
       * One-way radar transmission loss factor due to atmospheric effects.
       */
      atmosTransmissionLoss?: number;

      /**
       * Average atmospheric angular width with no distortion from turbulence at an
       * optical sensor site in arcseconds.
       */
      avgAtmosSeeingConditions?: number;

      /**
       * Array of azimuth angles of a radar beam, in degrees. If this field is populated,
       * the associated beam(s) must be provided in the beamOrder field.
       */
      azAngs?: Array<number>;

      /**
       * Azimuth rate acquisition limit (radians/minute).
       */
      azimuthRate?: number;

      /**
       * Average background sky brightness at an optical sensor site during new moon
       * conditions. This field uses units of watts per square meter per steradian
       * (W/(m^2 str)) consistent with sensor detection bands.
       */
      backgroundSkyRadiance?: number;

      /**
       * Average background sky brightness at an optical sensor site during new moon
       * conditions. This field uses units of visual magnitude consistent with sensor
       * detection bands.
       */
      backgroundSkyVisMag?: number;

      /**
       * Sensor band.
       */
      band?: string;

      /**
       * The total bandwidth, in megahertz, about the radar center frequency.
       */
      bandwidth?: number;

      /**
       * Array designating the beam order of provided values (e.g. vb1 for vertical beam
       * 1, ob1 for oblique beam 1, etc.). Required if any of the following array fields
       * are populated: azAngs, elAngs, radarPulseWidths, pulseRepPeriods, delayGates,
       * rangeGates, rangeSpacings, vertGateSpacings, vertGateWidths, specAvgSpectraNums,
       * tempMedFiltCodes, runMeanCodes, totRecNums, reqRecords, acceptSampleRanges.
       */
      beamOrder?: Array<string>;

      /**
       * Number of radar beams used by the sensor.
       */
      beamQty?: number;

      /**
       * The angle of the center of a phased array sensor.
       */
      boresight?: number;

      /**
       * The number of degrees off of the boresight for the sensor.
       */
      boresightOffAngle?: number;

      /**
       * Weighted center wavelength for an optical sensor bandpass in micrometers. It is
       * the center wavelength in a weighted integral sense, accounting for the
       * sensitivity vs. wavelength curve for the sensor focal plane array.
       */
      centerWavelength?: number;

      /**
       * Collapsing loss in decibels. Collapsing losses occur when two or more sources of
       * noise are added to the target signal. Examples include receiver bandwidth
       * mismatch with filtering bandwidth and elevation or azimuth beam collapse onto
       * position/height indicator displays.
       */
      collapsingLoss?: number;

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
       * Threshold shear value beyond which one of the radial velocity values will be
       * rejected, measured in units of inverse second.
       */
      critShear?: number;

      /**
       * Current flowing through optical sensor focal plane electronics with a closed
       * shutter in electrons per second.
       */
      darkCurrent?: number;

      /**
       * Array of time delay(s) for pulses from a radar beam to get to the first range
       * gate, in nanoseconds. If this field is populated, the associated beam(s) must be
       * provided in the beamOrder field.
       */
      delayGates?: Array<number>;

      /**
       * Description of the equipment and data source.
       */
      description?: string;

      /**
       * Detection signal-to-noise ratio (SNR) threshold in decibels. This value is
       * typically lower than trackSNR.
       */
      detectSNR?: number;

      /**
       * Sensor duty cycle as a fraction of 1. Duty cycle is the fraction of time a
       * sensor is actively transmitting.
       */
      dutyCycle?: number;

      /**
       * Sensor Earth limb exclusion height in kilometers and is generally only applied
       * to space-based sensors. Some models used an earth exclusion angle instead, but
       * this assumes the sensor is in a circular orbit with constant altitude relative
       * to the earth. The limb exclusion height can be used for space-based sensors in
       * any orbit (assuming it is constant with sensor altitude). The limb height is
       * defined to be 0 at the surface of the earth.
       */
      earthLimbExclHgt?: number;

      /**
       * Array of elevation angles of a radar beam, in degrees. If this field is
       * populated, the associated beam(s) must be provided in the beamOrder field.
       */
      elAngs?: Array<number>;

      /**
       * Elevation rate acquisition limit (radians/minute).
       */
      elevationRateGeolm?: number;

      /**
       * Type of equipment used to take measurements.
       */
      equipmentType?: string;

      /**
       * The beam width of a Sensor's Fan (range). The values for this range from (0.0 to
       * PI).
       */
      fanBeamWidth?: number;

      /**
       * Number of Fast Fourier Transform (FFT) points used to convert time varying
       * signals into the frequency domain.
       */
      fft?: number;

      /**
       * Maximum number of times the first guess was propagated in each gate before
       * failing the first guess check.
       */
      fgpCrit?: number;

      /**
       * Noise term, in decibels, that arises when a radar receiver filter has a
       * non-optimal bandwidth for an incoming signal (i.e., when it does not match the
       * pulse width).
       */
      filterMismatchFactor?: number;

      /**
       * F-number for an optical telescope. It is dimensionless and is defined as the
       * ratio of the focal length to the aperture width.
       */
      fNum?: number;

      /**
       * For radar based sensors, the focal point elevation of the radar at the site, in
       * meters.
       */
      focalPoint?: number;

      /**
       * Horizontal field of view, in degrees.
       */
      hFOV?: number;

      /**
       * Horizontal pixel resolution.
       */
      hResPixels?: number;

      /**
       * For radar based sensors, K-factor is a relative indicator of refractivity that
       * infers the amount of radar beam bending due to atmosphere. (1<K<2).
       */
      k?: number;

      /**
       * For Orbiting Sensors, First Card Azimuth limit #1 (left, degrees).
       */
      leftClockAngle?: number;

      /**
       * Leftmost GEO belt longitude limit for this sensor (if applicable).
       */
      leftGeoBeltLimit?: number;

      /**
       * Site where measurement is taken.
       */
      location?: string;

      /**
       * Aggregated radar range equation gain in decibels for maximum sensitivity. It is
       * a roll-up value for low fidelity modeling and is often the only sensitivity
       * value available for a radar system without access to detailed performance
       * parameters.
       */
      loopGain?: number;

      /**
       * Lowest aspect angle of the full moon in degrees at which the sensor can achieve
       * full performance.
       */
      lunarExclAngle?: number;

      /**
       * Angle between magnetic north and true north at the sensor site, in degrees.
       */
      magDec?: number;

      /**
       * Absolute magnitude acquisition limit for optical sensors.
       */
      magnitudeLimit?: number;

      /**
       * Max deviation angle of the sensor in degrees.
       */
      maxDeviationAngle?: number;

      /**
       * Maximum integration time per image frame in seconds for an optical sensor.
       */
      maxIntegrationTime?: number;

      /**
       * Maximum observable sensor range, in kilometers.
       */
      maxObservableRange?: number;

      /**
       * Maximum observable range limit in kilometers -- sensor cannot acquire beyond
       * this range.
       */
      maxRangeLimit?: number;

      /**
       * Maximum wavelength detectable by an optical sensor in micrometers.
       */
      maxWavelength?: number;

      /**
       * Minimum integration time per image frame in seconds for an optical sensor.
       */
      minIntegrationTime?: number;

      /**
       * Minimum range measurement capability of the sensor, in kilometers.
       */
      minRangeLimit?: number;

      /**
       * Signal to Noise Ratio, in decibels. The values for this range from 0.0 - + 99.99
       * dB.
       */
      minSignalNoiseRatio?: number;

      /**
       * Minimum wavelength detectable by an optical sensor in micrometers.
       */
      minWavelength?: number;

      /**
       * Negative Range-rate/relative velocity limit (kilometers/second).
       */
      negativeRangeRateLimit?: number;

      /**
       * Noise figure for a radar system in decibels. This value may be used to compute
       * system noise when the system temperature is unavailable.
       */
      noiseFigure?: number;

      /**
       * Number of pulses that are non-coherently integrated during detection processing.
       */
      nonCoherentIntegratedPulses?: number;

      /**
       * For radar based sensors, number of integrated pulses in a transmit cycle.
       */
      numIntegratedPulses?: number;

      /**
       * Number of integration frames for an optical sensor.
       */
      numIntegrationFrames?: number;

      /**
       * The number of optical integration mode characteristics provided in this record.
       * If provided, the numOpticalIntegrationModes value indicates the number of
       * elements in each of the opticalIntegrationTimes, opticalIntegrationAngularRates,
       * opticalIntegrationFrames, opticalIntegrationPixelBinnings, and
       * opticalIntegrationSNRs arrays.
       */
      numOpticalIntegrationModes?: number;

      /**
       * The number of waveforms characteristics provided in this record. If provided,
       * the numWaveforms value indicates the number of elements in each of the
       * waveformPulseWidths, waveformBandWidths, waveformMinRanges, waveformMaxRanges,
       * and waveformLoopGains arrays.
       */
      numWaveforms?: number;

      /**
       * Array containing the angular rate, in arcsec/sec, for each provided optical
       * integration mode. The number of elements must be equal to the value indicated in
       * numOpticalIntegrationModes.
       */
      opticalIntegrationAngularRates?: Array<number>;

      /**
       * Array containing the number of frames, for each optical integration mode. The
       * number of elements must be equal to the value indicated in
       * numOpticalIntegrationModes.
       */
      opticalIntegrationFrames?: Array<number>;

      /**
       * Array containing the pixel binning, for each optical integration mode. The
       * number of elements must be equal to the value indicated in
       * numOpticalIntegrationModes.
       */
      opticalIntegrationPixelBinnings?: Array<number>;

      /**
       * Array of optical integration modes signal to noise ratios. The number of
       * elements must be equal to the value indicated in numOpticalIntegrationModes.
       */
      opticalIntegrationSNRs?: Array<number>;

      /**
       * Array containing the time, in seconds, for each provided optical integration
       * mode. The number of elements must be equal to the value indicated in
       * numOpticalIntegrationModes.
       */
      opticalIntegrationTimes?: Array<number>;

      /**
       * Fraction of incident light transmitted to an optical sensor focal plane array.
       * The value is given as a fraction of 1, not as a percent.
       */
      opticalTransmission?: number;

      /**
       * The originating source network on which this record was created, auto-populated
       * by the system.
       */
      origNetwork?: string;

      /**
       * Two-way pattern absorption/propagation loss due to medium in decibels.
       */
      patternAbsorptionLoss?: number;

      /**
       * Losses from the beam shape, scanning, and pattern factor in decibels. These
       * losses occur when targets are not directly in line with a beam center. For space
       * surveillance, this will occur most often during sensor scanning.
       */
      patternScanLoss?: number;

      /**
       * Maximum instantaneous radar transmit power in watts for use in the radar range
       * equation.
       */
      peakPower?: number;

      /**
       * Angular field-of-view covered by one pixel in a focal plane array in
       * microradians. The pixel is assumed to be a perfect square so that only a single
       * value is required.
       */
      pixelInstantaneousFOV?: number;

      /**
       * Maximum number of electrons that can be collected in a single pixel on an
       * optical sensor focal plane array.
       */
      pixelWellDepth?: number;

      /**
       * Positive Range-rate/relative velocity limit (kilometers/second).
       */
      positiveRangeRateLimit?: number;

      /**
       * For radar based sensors, pulse repetition frequency (PRF), in hertz. Number of
       * new pulses transmitted per second.
       */
      prf?: number;

      /**
       * Designated probability of detection at the signal-to-noise detection threshold.
       */
      probDetectSNR?: number;

      /**
       * For radar based sensors, probability of the indication of the presence of a
       * radar target due to noise or interference.
       */
      probFalseAlarm?: number;

      /**
       * Array of interval(s) between the start of one radar pulse and the start of
       * another for a radar beam, in microseconds. If this field is populated, the
       * associated beam(s) must be provided in the beamOrder field.
       */
      pulseRepPeriods?: Array<number>;

      /**
       * Fraction of incident photons converted to electrons at the focal plane array.
       * This value is a decimal number between 0 and 1, inclusive.
       */
      quantumEff?: number;

      /**
       * Radar frequency in hertz, of the sensor (if a radar sensor).
       */
      radarFrequency?: number;

      /**
       * Message data format transmitted by the sensor digitizer.
       */
      radarMessageFormat?: string;

      /**
       * For radar based sensors, radar maximum unambiguous range, in kilometers.
       */
      radarMUR?: number;

      /**
       * Array of transmit time(s) for a radar beam pulse, in microseconds. If this field
       * is populated, the associated beam(s) must be provided in the beamOrder field.
       */
      radarPulseWidths?: Array<number>;

      /**
       * Radio frequency (if sensor is RF).
       */
      radioFrequency?: number;

      /**
       * Losses due to the presence of a protective radome surrounding a radar sensor, in
       * decibels.
       */
      radomeLoss?: number;

      /**
       * Array of the number(s) of discrete altitudes where return signals are sampled by
       * a radar beam. If this field is populated, the associated beam(s) must be
       * provided in the beamOrder field.
       */
      rangeGates?: Array<number>;

      /**
       * Array of range gate spacing(s) for a radar beam, in nanoseconds. If this field
       * is populated, the associated beam(s) must be provided in the beamOrder field.
       */
      rangeSpacings?: Array<number>;

      /**
       * Number of false-signal electrons generated by optical sensor focal plane
       * read-out electronics from photon-to-electron conversion during frame
       * integration. The units are in electrons RMS.
       */
      readNoise?: number;

      /**
       * Radar receive gain in decibels.
       */
      receiveGain?: number;

      /**
       * Horizontal/azimuthal receive beamwidth for a radar in degrees.
       */
      receiveHorizBeamWidth?: number;

      /**
       * Aggregate radar receive loss, in decibels.
       */
      receiveLoss?: number;

      /**
       * Vertical/elevation receive beamwidth for a radar in degrees.
       */
      receiveVertBeamWidth?: number;

      /**
       * Reference temperature for radar noise in Kelvin. A reference temperature is used
       * when the radar system temperature is unknown and is combined with the system
       * noise figure to estimate signal loss.
       */
      refTemp?: number;

      /**
       * Array of the total number(s) of records required to meet consensus for a radar
       * beam. If this field is populated, the associated beam(s) must be provided in the
       * beamOrder field.
       */
      reqRecords?: Array<number>;

      /**
       * For Orbiting Sensors, First Card Azimuth limit #3 (right, degrees).
       */
      rightClockAngle?: number;

      /**
       * Rightmost GEO belt longitude limit for this sensor (if applicable).
       */
      rightGeoBeltLimit?: number;

      /**
       * Array of running mean code(s) used by radar data processing. The running mean
       * method involves taking a series of averages of different selections of the full
       * data set to smooth out short-term fluctuations in the data. If this field is
       * populated, the associated beam(s) must be provided in the beamOrder field.
       */
      runMeanCodes?: Array<number>;

      /**
       * Radar signal processing losses, in decibels.
       */
      signalProcessingLoss?: number;

      /**
       * Site code of the sensor.
       */
      siteCode?: string;

      /**
       * Sensor and target position vector origins are at the center of the earth. The
       * sun vector origin is at the target position and points toward the sun. Any value
       * between 0 and 180 degrees is acceptable and is assumed to apply in both
       * directions (i.e., a solar exclusion angle of 30 degrees is understood to mean no
       * viewing for any angle between -30 deg and +30 deg).
       */
      solarExclAngle?: number;

      /**
       * Array of the number(s) of Doppler spectra used to process measurements from
       * radar. Spectral averaging involves combining multiple Doppler spectra acquired
       * to obtain a more accurate and representative spectrum. If this field is
       * populated, the associated beam(s) must be provided in the beamOrder field.
       */
      specAvgSpectraNums?: Array<number>;

      /**
       * For radar based sensors, expression of the radar system noise, aggregated as an
       * equivalent thermal noise value, in degrees Kelvin.
       */
      systemNoiseTemperature?: number;

      /**
       * Maximum taskable range of the sensor, in kilometers.
       */
      taskableRange?: number;

      /**
       * Array of temporal median filter code(s) of a radar beam. Temporal median
       * filtering is a noise-reducing algorithm which involves replacing each data point
       * with the median value of a window of neighboring points over time. If this field
       * is populated, the associated beam(s) must be provided in the beamOrder field.
       */
      tempMedFiltCodes?: Array<number>;

      /**
       * Test number for the observed measurement.
       */
      testNumber?: string;

      /**
       * Array of the total number(s) of records for a radar beam. If this field is
       * populated, the associated beam(s) must be provided in the beamOrder field.
       */
      totRecNums?: Array<number>;

      /**
       * For tower sensors, the physical height of the sensor tower, in meters.
       */
      towerHeight?: number;

      /**
       * Beginning track angle limit, in radians. Track angle is the angle between the
       * camera axis and the gimbal plane. Values range from 0 - PI/2.
       */
      trackAngle?: number;

      /**
       * Track signal-to-noise ratio (SNR) threshold in decibels. This value is typically
       * higher than detectSNR.
       */
      trackSNR?: number;

      /**
       * Radar transmit gain in decibels.
       */
      transmitGain?: number;

      /**
       * Horizontal/azimuthal transmit beamwidth for a radar in degrees.
       */
      transmitHorizBeamWidth?: number;

      /**
       * Aggregate radar transmit loss, in decibels.
       */
      transmitLoss?: number;

      /**
       * Radar transmit power in Watts.
       */
      transmitPower?: number;

      /**
       * Vertical/elevation transmit beamwidth for a radar in degrees.
       */
      transmitVertBeamWidth?: number;

      /**
       * True North correction for the sensor, in ACP (Azimunth Change Pulse) count.
       */
      trueNorthCorrector?: number;

      /**
       * Antenna true tilt, in degrees.
       */
      trueTilt?: number;

      /**
       * Twilight angle for ground-based optical sensors in degrees. A sensor cannot view
       * targets until the sun is below the twilight angle relative to the local horizon.
       * The sign of the angle is positive despite the sun elevation being negative after
       * local sunset. Typical values for the twilight angle are civil twilight (6
       * degrees), nautical twilight (12 degrees), and astronomical twilight (18
       * degrees).
       */
      twilightAngle?: number;

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
       * Flag indicating if a vertical radar beam was used in the wind calculation.
       */
      vertBeamFlag?: boolean;

      /**
       * Array of vertical distance(s) between points where radar measurements are taken,
       * in meters. If this field is populated, the associated beam(s) must be provided
       * in the beamOrder field.
       */
      vertGateSpacings?: Array<number>;

      /**
       * Array of width(s) of each location where radar measurements are taken, in
       * meters. If this field is populated, the associated beam(s) must be provided in
       * the beamOrder field.
       */
      vertGateWidths?: Array<number>;

      /**
       * Vertical field of view, in degrees.
       */
      vFOV?: number;

      /**
       * Vertical pixel resolution.
       */
      vResPixels?: number;

      /**
       * Array containing the bandwidth, in megahertz, for each provided waveform. The
       * number of elements in this array must be equal to the value indicated in the
       * numWaveforms field.
       */
      waveformBandwidths?: Array<number>;

      /**
       * Array containing the loop gain, in decibels, for each provided waveform. The
       * number of elements in this array must be equal to the value indicated in the
       * numWaveforms field (10 SNR vs. 1 dBsm at 1000 km).
       */
      waveformLoopGains?: Array<number>;

      /**
       * Array containing the maximum range, in kilometers, for each provided waveform.
       * The number of elements in this array must be equal to the value indicated in the
       * numWaveforms field.
       */
      waveformMaxRanges?: Array<number>;

      /**
       * Array containing the minimum range, in kilometers, for each provided waveform.
       * The number of elements in this array must be equal to the value indicated in the
       * numWaveforms field.
       */
      waveformMinRanges?: Array<number>;

      /**
       * Array containing the pulse width, in microseconds, for each provided waveform.
       * The number of elements in this array must be equal to the value indicated in the
       * numWaveforms field.
       */
      waveformPulseWidths?: Array<number>;

      /**
       * Peformance zone-1 maximum range, in kilometers. Note that the zones apply only
       * to the PSR/Search radars.
       */
      z1MaxRange?: number;

      /**
       * Peformance zone-1 minimum range, in kilometers. Note that the zones apply only
       * to the PSR/Search radars.
       */
      z1MinRange?: number;

      /**
       * Peformance zone-2 maximum range, in kilometers. Note that the zones apply only
       * to the PSR/Search radars.
       */
      z2MaxRange?: number;

      /**
       * Peformance zone-2 minimum range, in kilometers. Note that the zones apply only
       * to the PSR/Search radars.
       */
      z2MinRange?: number;
    }

    /**
     * Sensorlimits define 0 to many limits of a particular sensor in terms of
     * observation coverage of on-orbit objects.
     */
    export interface SensorlimitsCollection {
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
       * Time the row was created in the database, auto-populated by the system.
       */
      createdAt?: string;

      /**
       * Application user who created the row in the database, auto-populated by the
       * system.
       */
      createdBy?: string;

      /**
       * Unique identifier of the target sensor object.
       */
      idSensor?: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      idSensorLimits?: string;

      /**
       * Leftmost or minimum lower azimuth within this limit. Interpreted according to
       * site types as lower left azimuth limit elevation angle of axis of conical
       * observation pattern. If the limit rectangle is parallel to the horizon, the
       * upper and lower left azimuth limits would be equal. (degrees).
       */
      lowerLeftAzimuthLimit?: number;

      /**
       * Minimum or lower elevation within this limit. Interpreted according to site
       * types as minimum elevation angle, constant elevation or fan beam centerline.
       * (Degrees).
       */
      lowerLeftElevationLimit?: number;

      /**
       * Rightmost or maximum lower azimuth within this limit. Interpreted according to
       * site types as 2nd lower azimuth limit elevation angle of axis of conical
       * observation pattern. If the limit rectangle is parallel to the horizon, the
       * upper and lower right azimuth limits would be equal. (degrees).
       */
      lowerRightAzimuthLimit?: number;

      /**
       * Minimum or lower right elevation within this limit. Interpreted according to
       * site types as minimum right elevation angle, constant elevation or fan beam
       * centerline. If the limit rectangle is parallel to the horizon, the left and
       * right lower elevation limits would be equal. (Degrees).
       */
      lowerRightElevationLimit?: number;

      /**
       * The originating source network on which this record was created, auto-populated
       * by the system.
       */
      origNetwork?: string;

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
       * Leftmost or minimum upper azimuth within this sensor limit. Interpreted
       * according to site types as beginning upper azimuth limit, left-hand upper
       * boundary limit. If the limit rectangle is parallel to the horizon, the upper and
       * lower left azimuth limits would be equal. (in degrees).
       */
      upperLeftAzimuthLimit?: number;

      /**
       * Maximum or upper elevation within this limit. Interpreted according to site
       * types as maximum elevation angle, half the apex of conical observation pattern
       * or star. (Degrees).
       */
      upperLeftElevationLimit?: number;

      /**
       * Rightmost or maximum upper azimuth within this limit. Interpreted according to
       * site types as 2nd azimuth limit elevation angle of axis of conical observation
       * pattern. If the limit rectangle is parallel to the horizon, the upper and lower
       * right azimuth limits would be equal. (degrees).
       */
      upperRightAzimuthLimit?: number;

      /**
       * Maximum or upper right elevation within this limit. Interpreted according to
       * site types as maximum rightmost elevation angle, half the apex of conical
       * observation pattern or star. If the limit rectangle is parallel to the horizon,
       * the left and right upper elevation limits would be equal. (Degrees).
       */
      upperRightElevationLimit?: number;
    }

    export interface SensorObservationType {
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
       * The originating source network on which this record was created, auto-populated
       * by the system.
       */
      origNetwork?: string;

      /**
       * The observation measurement type produced by a sensor.
       */
      type?: string;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    /**
     * SensorStats contain statistics on sensors related to observation production such
     * as last reported observation time.
     */
    export interface SensorStat {
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
       * Unique ID of the parent sensor.
       */
      idSensor: string;

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
       * Time of last reported observation in ISO 8601 UTC with microsecond precision.
       */
      lastObTime?: string;

      /**
       * Read-only time the row was updated in the database, set automatically by the
       * system on update.
       */
      updatedAt?: string;

      /**
       * Application user who last updated the row in the database, set by the system
       * automatically and ignored on create/edit operations.
       */
      updatedBy?: string;
    }

    export interface SensorType {
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
      id?: number;

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
       * The originating source network on which this record was created, auto-populated
       * by the system.
       */
      origNetwork?: string;

      /**
       * The specific sensor type and/or surveillance capability of this sensor.
       */
      type?: string;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }
  }
}

export interface SensorCreateParams {
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
   * Unique name of this sensor.
   */
  sensorName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Optional flag indicating if the sensor is active.
   */
  active?: boolean;

  /**
   * Optional US Air Force identifier for the sensor/ASR site, typically for air
   * surveillance radar (ASR) sensors.
   */
  afId?: string;

  /**
   * The sensor type at the site. Optional field, intended primarily for ASRs.
   */
  asrType?: string;

  /**
   * Optional dissemination control required for accessing data (e.g observations)
   * produced by this sensor. This is typically a proprietary data owner control for
   * commercial sensors.
   */
  dataControl?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: SensorCreateParams.Entity;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idSensor?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Collection of Sensorcharacteristics which define characteristics and
   * capabilities of a sensor.
   */
  sensorcharacteristics?: Array<SensorCreateParams.Sensorcharacteristic>;

  /**
   * Sensorlimits define 0 to many limits of a particular sensor in terms of
   * observation coverage of on-orbit objects.
   */
  sensorlimitsCollection?: Array<SensorCreateParams.SensorlimitsCollection>;

  /**
   * Number assigned to this sensor. Since there is no authoritative numbering
   * scheme, these numbers sometimes collide across sensors (especially commercial
   * sensors). It is therefore not a unique identifier.
   */
  sensorNumber?: number;

  sensorObservationType?: SensorCreateParams.SensorObservationType;

  /**
   * Collection of SensorStats which contain statistics of a sensor.
   */
  sensorStats?: Array<SensorCreateParams.SensorStat>;

  sensorType?: SensorCreateParams.SensorType;

  /**
   * Optional short name for the sensor.
   */
  shortName?: string;
}

export namespace SensorCreateParams {
  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  export interface Entity {
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
     * Unique entity name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
     * LASEREMITTER, NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
     */
    type:
      | 'AIRCRAFT'
      | 'BUS'
      | 'COMM'
      | 'IR'
      | 'LASEREMITTER'
      | 'NAVIGATION'
      | 'ONORBIT'
      | 'RFEMITTER'
      | 'SCIENTIFIC'
      | 'SENSOR'
      | 'SITE'
      | 'VESSEL';

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

    /**
     * Unique identifier of the record.
     */
    idEntity?: string;

    /**
     * Unique identifier of the entity location, if terrestrial/fixed.
     */
    idLocation?: string;

    /**
     * Onorbit identifier if this entity is part of an on-orbit object. For the public
     * catalog, the idOnOrbit is typically the satellite number as a string, but may be
     * a UUID for analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the associated operating unit object.
     */
    idOperatingUnit?: string;

    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    location?: LocationAPI.LocationIngest;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Entity.OnOrbit;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Type of organization which owns this entity (e.g. Commercial, Government,
     * Academic, Consortium, etc).
     */
    ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

    /**
     * Boolean indicating if this entity is taskable.
     */
    taskable?: boolean;

    /**
     * Terrestrial identifier of this entity, if applicable.
     */
    terrestrialId?: string;

    /**
     * List of URLs to additional details/documents for this entity.
     */
    urls?: Array<string>;
  }

  export namespace Entity {
    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    export interface OnOrbit {
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
       * Satellite/Catalog number of the target on-orbit object.
       */
      satNo: number;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Alternate name of the on-orbit object.
       */
      altName?: string;

      /**
       * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
       * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
       * Heliocentric, Interplanetary, Lagrangian, Docked).
       */
      category?:
        | 'Unknown'
        | 'On-Orbit'
        | 'Decayed'
        | 'Cataloged Without State'
        | 'Launch Nominal'
        | 'Analyst Satellite'
        | 'Cislunar'
        | 'Lunar'
        | 'Hyperbolic'
        | 'Heliocentric'
        | 'Interplanetary'
        | 'Lagrangian'
        | 'Docked';

      /**
       * Common name of the on-orbit object.
       */
      commonName?: string;

      /**
       * Constellation to which this satellite belongs.
       */
      constellation?: string;

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

      /**
       * Date of decay.
       */
      decayDate?: string;

      /**
       * For the public catalog, the idOnOrbit is typically the satellite number as a
       * string, but may be a UUID for analyst or other unknown or untracked satellites,
       * auto-generated by the system.
       */
      idOnOrbit?: string;

      /**
       * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
       * launch year, LLL is the sequential launch number of that year, and AAA is an
       * optional launch piece designator for the launch.
       */
      intlDes?: string;

      /**
       * Date of launch.
       */
      launchDate?: string;

      /**
       * Id of the associated launchSite entity.
       */
      launchSiteId?: string;

      /**
       * Estimated lifetime of the on-orbit payload, if known.
       */
      lifetimeYears?: number;

      /**
       * Mission number of the on-orbit object.
       */
      missionNumber?: string;

      /**
       * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
       * UNKNOWN.
       */
      objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;
    }
  }

  /**
   * Model representation of characteristics and capabilities of a sensor.
   */
  export interface Sensorcharacteristic {
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
     * Unique identifier of the parent sensor.
     */
    idSensor: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of measurement range(s) where radar samples must fall to be acceptable. If
     * this field is populated, the associated beam(s) must be provided in the
     * beamOrder field.
     */
    acceptSampleRanges?: Array<number>;

    /**
     * Number of bits used in the conversion from analog electrons in a pixel well to a
     * digital number. The digital number has a maximum value of 2^N, where N is the
     * number of bits.
     */
    analogToDigitalBitSize?: number;

    /**
     * Optical sensor camera aperture.
     */
    aperture?: number;

    /**
     * For ASR (Air Surveillance Radar) sensors, the scan (360 deg sweep) rate of the
     * radar, in scans/minute.
     */
    asrScanRate?: number;

    /**
     * One-way radar receiver loss factor due to atmospheric effects. This value will
     * often be the same as the corresponding transmission factor but may be different
     * for bistatic systems.
     */
    atmosReceiverLoss?: number;

    /**
     * One-way radar transmission loss factor due to atmospheric effects.
     */
    atmosTransmissionLoss?: number;

    /**
     * Average atmospheric angular width with no distortion from turbulence at an
     * optical sensor site in arcseconds.
     */
    avgAtmosSeeingConditions?: number;

    /**
     * Array of azimuth angles of a radar beam, in degrees. If this field is populated,
     * the associated beam(s) must be provided in the beamOrder field.
     */
    azAngs?: Array<number>;

    /**
     * Azimuth rate acquisition limit (radians/minute).
     */
    azimuthRate?: number;

    /**
     * Average background sky brightness at an optical sensor site during new moon
     * conditions. This field uses units of watts per square meter per steradian
     * (W/(m^2 str)) consistent with sensor detection bands.
     */
    backgroundSkyRadiance?: number;

    /**
     * Average background sky brightness at an optical sensor site during new moon
     * conditions. This field uses units of visual magnitude consistent with sensor
     * detection bands.
     */
    backgroundSkyVisMag?: number;

    /**
     * Sensor band.
     */
    band?: string;

    /**
     * The total bandwidth, in megahertz, about the radar center frequency.
     */
    bandwidth?: number;

    /**
     * Array designating the beam order of provided values (e.g. vb1 for vertical beam
     * 1, ob1 for oblique beam 1, etc.). Required if any of the following array fields
     * are populated: azAngs, elAngs, radarPulseWidths, pulseRepPeriods, delayGates,
     * rangeGates, rangeSpacings, vertGateSpacings, vertGateWidths, specAvgSpectraNums,
     * tempMedFiltCodes, runMeanCodes, totRecNums, reqRecords, acceptSampleRanges.
     */
    beamOrder?: Array<string>;

    /**
     * Number of radar beams used by the sensor.
     */
    beamQty?: number;

    /**
     * The angle of the center of a phased array sensor.
     */
    boresight?: number;

    /**
     * The number of degrees off of the boresight for the sensor.
     */
    boresightOffAngle?: number;

    /**
     * Weighted center wavelength for an optical sensor bandpass in micrometers. It is
     * the center wavelength in a weighted integral sense, accounting for the
     * sensitivity vs. wavelength curve for the sensor focal plane array.
     */
    centerWavelength?: number;

    /**
     * Collapsing loss in decibels. Collapsing losses occur when two or more sources of
     * noise are added to the target signal. Examples include receiver bandwidth
     * mismatch with filtering bandwidth and elevation or azimuth beam collapse onto
     * position/height indicator displays.
     */
    collapsingLoss?: number;

    /**
     * Threshold shear value beyond which one of the radial velocity values will be
     * rejected, measured in units of inverse second.
     */
    critShear?: number;

    /**
     * Current flowing through optical sensor focal plane electronics with a closed
     * shutter in electrons per second.
     */
    darkCurrent?: number;

    /**
     * Array of time delay(s) for pulses from a radar beam to get to the first range
     * gate, in nanoseconds. If this field is populated, the associated beam(s) must be
     * provided in the beamOrder field.
     */
    delayGates?: Array<number>;

    /**
     * Description of the equipment and data source.
     */
    description?: string;

    /**
     * Detection signal-to-noise ratio (SNR) threshold in decibels. This value is
     * typically lower than trackSNR.
     */
    detectSNR?: number;

    /**
     * Sensor duty cycle as a fraction of 1. Duty cycle is the fraction of time a
     * sensor is actively transmitting.
     */
    dutyCycle?: number;

    /**
     * Sensor Earth limb exclusion height in kilometers and is generally only applied
     * to space-based sensors. Some models used an earth exclusion angle instead, but
     * this assumes the sensor is in a circular orbit with constant altitude relative
     * to the earth. The limb exclusion height can be used for space-based sensors in
     * any orbit (assuming it is constant with sensor altitude). The limb height is
     * defined to be 0 at the surface of the earth.
     */
    earthLimbExclHgt?: number;

    /**
     * Array of elevation angles of a radar beam, in degrees. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    elAngs?: Array<number>;

    /**
     * Elevation rate acquisition limit (radians/minute).
     */
    elevationRateGeolm?: number;

    /**
     * Type of equipment used to take measurements.
     */
    equipmentType?: string;

    /**
     * The beam width of a Sensor's Fan (range). The values for this range from (0.0 to
     * PI).
     */
    fanBeamWidth?: number;

    /**
     * Number of Fast Fourier Transform (FFT) points used to convert time varying
     * signals into the frequency domain.
     */
    fft?: number;

    /**
     * Maximum number of times the first guess was propagated in each gate before
     * failing the first guess check.
     */
    fgpCrit?: number;

    /**
     * Noise term, in decibels, that arises when a radar receiver filter has a
     * non-optimal bandwidth for an incoming signal (i.e., when it does not match the
     * pulse width).
     */
    filterMismatchFactor?: number;

    /**
     * F-number for an optical telescope. It is dimensionless and is defined as the
     * ratio of the focal length to the aperture width.
     */
    fNum?: number;

    /**
     * For radar based sensors, the focal point elevation of the radar at the site, in
     * meters.
     */
    focalPoint?: number;

    /**
     * Horizontal field of view, in degrees.
     */
    hFOV?: number;

    /**
     * Horizontal pixel resolution.
     */
    hResPixels?: number;

    /**
     * For radar based sensors, K-factor is a relative indicator of refractivity that
     * infers the amount of radar beam bending due to atmosphere. (1<K<2).
     */
    k?: number;

    /**
     * For Orbiting Sensors, First Card Azimuth limit #1 (left, degrees).
     */
    leftClockAngle?: number;

    /**
     * Leftmost GEO belt longitude limit for this sensor (if applicable).
     */
    leftGeoBeltLimit?: number;

    /**
     * Site where measurement is taken.
     */
    location?: string;

    /**
     * Aggregated radar range equation gain in decibels for maximum sensitivity. It is
     * a roll-up value for low fidelity modeling and is often the only sensitivity
     * value available for a radar system without access to detailed performance
     * parameters.
     */
    loopGain?: number;

    /**
     * Lowest aspect angle of the full moon in degrees at which the sensor can achieve
     * full performance.
     */
    lunarExclAngle?: number;

    /**
     * Angle between magnetic north and true north at the sensor site, in degrees.
     */
    magDec?: number;

    /**
     * Absolute magnitude acquisition limit for optical sensors.
     */
    magnitudeLimit?: number;

    /**
     * Max deviation angle of the sensor in degrees.
     */
    maxDeviationAngle?: number;

    /**
     * Maximum integration time per image frame in seconds for an optical sensor.
     */
    maxIntegrationTime?: number;

    /**
     * Maximum observable sensor range, in kilometers.
     */
    maxObservableRange?: number;

    /**
     * Maximum observable range limit in kilometers -- sensor cannot acquire beyond
     * this range.
     */
    maxRangeLimit?: number;

    /**
     * Maximum wavelength detectable by an optical sensor in micrometers.
     */
    maxWavelength?: number;

    /**
     * Minimum integration time per image frame in seconds for an optical sensor.
     */
    minIntegrationTime?: number;

    /**
     * Minimum range measurement capability of the sensor, in kilometers.
     */
    minRangeLimit?: number;

    /**
     * Signal to Noise Ratio, in decibels. The values for this range from 0.0 - + 99.99
     * dB.
     */
    minSignalNoiseRatio?: number;

    /**
     * Minimum wavelength detectable by an optical sensor in micrometers.
     */
    minWavelength?: number;

    /**
     * Negative Range-rate/relative velocity limit (kilometers/second).
     */
    negativeRangeRateLimit?: number;

    /**
     * Noise figure for a radar system in decibels. This value may be used to compute
     * system noise when the system temperature is unavailable.
     */
    noiseFigure?: number;

    /**
     * Number of pulses that are non-coherently integrated during detection processing.
     */
    nonCoherentIntegratedPulses?: number;

    /**
     * For radar based sensors, number of integrated pulses in a transmit cycle.
     */
    numIntegratedPulses?: number;

    /**
     * Number of integration frames for an optical sensor.
     */
    numIntegrationFrames?: number;

    /**
     * The number of optical integration mode characteristics provided in this record.
     * If provided, the numOpticalIntegrationModes value indicates the number of
     * elements in each of the opticalIntegrationTimes, opticalIntegrationAngularRates,
     * opticalIntegrationFrames, opticalIntegrationPixelBinnings, and
     * opticalIntegrationSNRs arrays.
     */
    numOpticalIntegrationModes?: number;

    /**
     * The number of waveforms characteristics provided in this record. If provided,
     * the numWaveforms value indicates the number of elements in each of the
     * waveformPulseWidths, waveformBandWidths, waveformMinRanges, waveformMaxRanges,
     * and waveformLoopGains arrays.
     */
    numWaveforms?: number;

    /**
     * Array containing the angular rate, in arcsec/sec, for each provided optical
     * integration mode. The number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationAngularRates?: Array<number>;

    /**
     * Array containing the number of frames, for each optical integration mode. The
     * number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationFrames?: Array<number>;

    /**
     * Array containing the pixel binning, for each optical integration mode. The
     * number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationPixelBinnings?: Array<number>;

    /**
     * Array of optical integration modes signal to noise ratios. The number of
     * elements must be equal to the value indicated in numOpticalIntegrationModes.
     */
    opticalIntegrationSNRs?: Array<number>;

    /**
     * Array containing the time, in seconds, for each provided optical integration
     * mode. The number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationTimes?: Array<number>;

    /**
     * Fraction of incident light transmitted to an optical sensor focal plane array.
     * The value is given as a fraction of 1, not as a percent.
     */
    opticalTransmission?: number;

    /**
     * Two-way pattern absorption/propagation loss due to medium in decibels.
     */
    patternAbsorptionLoss?: number;

    /**
     * Losses from the beam shape, scanning, and pattern factor in decibels. These
     * losses occur when targets are not directly in line with a beam center. For space
     * surveillance, this will occur most often during sensor scanning.
     */
    patternScanLoss?: number;

    /**
     * Maximum instantaneous radar transmit power in watts for use in the radar range
     * equation.
     */
    peakPower?: number;

    /**
     * Angular field-of-view covered by one pixel in a focal plane array in
     * microradians. The pixel is assumed to be a perfect square so that only a single
     * value is required.
     */
    pixelInstantaneousFOV?: number;

    /**
     * Maximum number of electrons that can be collected in a single pixel on an
     * optical sensor focal plane array.
     */
    pixelWellDepth?: number;

    /**
     * Positive Range-rate/relative velocity limit (kilometers/second).
     */
    positiveRangeRateLimit?: number;

    /**
     * For radar based sensors, pulse repetition frequency (PRF), in hertz. Number of
     * new pulses transmitted per second.
     */
    prf?: number;

    /**
     * Designated probability of detection at the signal-to-noise detection threshold.
     */
    probDetectSNR?: number;

    /**
     * For radar based sensors, probability of the indication of the presence of a
     * radar target due to noise or interference.
     */
    probFalseAlarm?: number;

    /**
     * Array of interval(s) between the start of one radar pulse and the start of
     * another for a radar beam, in microseconds. If this field is populated, the
     * associated beam(s) must be provided in the beamOrder field.
     */
    pulseRepPeriods?: Array<number>;

    /**
     * Fraction of incident photons converted to electrons at the focal plane array.
     * This value is a decimal number between 0 and 1, inclusive.
     */
    quantumEff?: number;

    /**
     * Radar frequency in hertz, of the sensor (if a radar sensor).
     */
    radarFrequency?: number;

    /**
     * Message data format transmitted by the sensor digitizer.
     */
    radarMessageFormat?: string;

    /**
     * For radar based sensors, radar maximum unambiguous range, in kilometers.
     */
    radarMUR?: number;

    /**
     * Array of transmit time(s) for a radar beam pulse, in microseconds. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    radarPulseWidths?: Array<number>;

    /**
     * Radio frequency (if sensor is RF).
     */
    radioFrequency?: number;

    /**
     * Losses due to the presence of a protective radome surrounding a radar sensor, in
     * decibels.
     */
    radomeLoss?: number;

    /**
     * Array of the number(s) of discrete altitudes where return signals are sampled by
     * a radar beam. If this field is populated, the associated beam(s) must be
     * provided in the beamOrder field.
     */
    rangeGates?: Array<number>;

    /**
     * Array of range gate spacing(s) for a radar beam, in nanoseconds. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    rangeSpacings?: Array<number>;

    /**
     * Number of false-signal electrons generated by optical sensor focal plane
     * read-out electronics from photon-to-electron conversion during frame
     * integration. The units are in electrons RMS.
     */
    readNoise?: number;

    /**
     * Radar receive gain in decibels.
     */
    receiveGain?: number;

    /**
     * Horizontal/azimuthal receive beamwidth for a radar in degrees.
     */
    receiveHorizBeamWidth?: number;

    /**
     * Aggregate radar receive loss, in decibels.
     */
    receiveLoss?: number;

    /**
     * Vertical/elevation receive beamwidth for a radar in degrees.
     */
    receiveVertBeamWidth?: number;

    /**
     * Reference temperature for radar noise in Kelvin. A reference temperature is used
     * when the radar system temperature is unknown and is combined with the system
     * noise figure to estimate signal loss.
     */
    refTemp?: number;

    /**
     * Array of the total number(s) of records required to meet consensus for a radar
     * beam. If this field is populated, the associated beam(s) must be provided in the
     * beamOrder field.
     */
    reqRecords?: Array<number>;

    /**
     * For Orbiting Sensors, First Card Azimuth limit #3 (right, degrees).
     */
    rightClockAngle?: number;

    /**
     * Rightmost GEO belt longitude limit for this sensor (if applicable).
     */
    rightGeoBeltLimit?: number;

    /**
     * Array of running mean code(s) used by radar data processing. The running mean
     * method involves taking a series of averages of different selections of the full
     * data set to smooth out short-term fluctuations in the data. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    runMeanCodes?: Array<number>;

    /**
     * Radar signal processing losses, in decibels.
     */
    signalProcessingLoss?: number;

    /**
     * Site code of the sensor.
     */
    siteCode?: string;

    /**
     * Sensor and target position vector origins are at the center of the earth. The
     * sun vector origin is at the target position and points toward the sun. Any value
     * between 0 and 180 degrees is acceptable and is assumed to apply in both
     * directions (i.e., a solar exclusion angle of 30 degrees is understood to mean no
     * viewing for any angle between -30 deg and +30 deg).
     */
    solarExclAngle?: number;

    /**
     * Array of the number(s) of Doppler spectra used to process measurements from
     * radar. Spectral averaging involves combining multiple Doppler spectra acquired
     * to obtain a more accurate and representative spectrum. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    specAvgSpectraNums?: Array<number>;

    /**
     * For radar based sensors, expression of the radar system noise, aggregated as an
     * equivalent thermal noise value, in degrees Kelvin.
     */
    systemNoiseTemperature?: number;

    /**
     * Maximum taskable range of the sensor, in kilometers.
     */
    taskableRange?: number;

    /**
     * Array of temporal median filter code(s) of a radar beam. Temporal median
     * filtering is a noise-reducing algorithm which involves replacing each data point
     * with the median value of a window of neighboring points over time. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    tempMedFiltCodes?: Array<number>;

    /**
     * Test number for the observed measurement.
     */
    testNumber?: string;

    /**
     * Array of the total number(s) of records for a radar beam. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    totRecNums?: Array<number>;

    /**
     * For tower sensors, the physical height of the sensor tower, in meters.
     */
    towerHeight?: number;

    /**
     * Beginning track angle limit, in radians. Track angle is the angle between the
     * camera axis and the gimbal plane. Values range from 0 - PI/2.
     */
    trackAngle?: number;

    /**
     * Track signal-to-noise ratio (SNR) threshold in decibels. This value is typically
     * higher than detectSNR.
     */
    trackSNR?: number;

    /**
     * Radar transmit gain in decibels.
     */
    transmitGain?: number;

    /**
     * Horizontal/azimuthal transmit beamwidth for a radar in degrees.
     */
    transmitHorizBeamWidth?: number;

    /**
     * Aggregate radar transmit loss, in decibels.
     */
    transmitLoss?: number;

    /**
     * Radar transmit power in Watts.
     */
    transmitPower?: number;

    /**
     * Vertical/elevation transmit beamwidth for a radar in degrees.
     */
    transmitVertBeamWidth?: number;

    /**
     * True North correction for the sensor, in ACP (Azimunth Change Pulse) count.
     */
    trueNorthCorrector?: number;

    /**
     * Antenna true tilt, in degrees.
     */
    trueTilt?: number;

    /**
     * Twilight angle for ground-based optical sensors in degrees. A sensor cannot view
     * targets until the sun is below the twilight angle relative to the local horizon.
     * The sign of the angle is positive despite the sun elevation being negative after
     * local sunset. Typical values for the twilight angle are civil twilight (6
     * degrees), nautical twilight (12 degrees), and astronomical twilight (18
     * degrees).
     */
    twilightAngle?: number;

    /**
     * Flag indicating if a vertical radar beam was used in the wind calculation.
     */
    vertBeamFlag?: boolean;

    /**
     * Array of vertical distance(s) between points where radar measurements are taken,
     * in meters. If this field is populated, the associated beam(s) must be provided
     * in the beamOrder field.
     */
    vertGateSpacings?: Array<number>;

    /**
     * Array of width(s) of each location where radar measurements are taken, in
     * meters. If this field is populated, the associated beam(s) must be provided in
     * the beamOrder field.
     */
    vertGateWidths?: Array<number>;

    /**
     * Vertical field of view, in degrees.
     */
    vFOV?: number;

    /**
     * Vertical pixel resolution.
     */
    vResPixels?: number;

    /**
     * Array containing the bandwidth, in megahertz, for each provided waveform. The
     * number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformBandwidths?: Array<number>;

    /**
     * Array containing the loop gain, in decibels, for each provided waveform. The
     * number of elements in this array must be equal to the value indicated in the
     * numWaveforms field (10 SNR vs. 1 dBsm at 1000 km).
     */
    waveformLoopGains?: Array<number>;

    /**
     * Array containing the maximum range, in kilometers, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformMaxRanges?: Array<number>;

    /**
     * Array containing the minimum range, in kilometers, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformMinRanges?: Array<number>;

    /**
     * Array containing the pulse width, in microseconds, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformPulseWidths?: Array<number>;

    /**
     * Peformance zone-1 maximum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z1MaxRange?: number;

    /**
     * Peformance zone-1 minimum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z1MinRange?: number;

    /**
     * Peformance zone-2 maximum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z2MaxRange?: number;

    /**
     * Peformance zone-2 minimum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z2MinRange?: number;
  }

  /**
   * Sensorlimits define 0 to many limits of a particular sensor in terms of
   * observation coverage of on-orbit objects.
   */
  export interface SensorlimitsCollection {
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
     * Unique identifier of the target sensor object.
     */
    idSensor?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idSensorLimits?: string;

    /**
     * Leftmost or minimum lower azimuth within this limit. Interpreted according to
     * site types as lower left azimuth limit elevation angle of axis of conical
     * observation pattern. If the limit rectangle is parallel to the horizon, the
     * upper and lower left azimuth limits would be equal. (degrees).
     */
    lowerLeftAzimuthLimit?: number;

    /**
     * Minimum or lower elevation within this limit. Interpreted according to site
     * types as minimum elevation angle, constant elevation or fan beam centerline.
     * (Degrees).
     */
    lowerLeftElevationLimit?: number;

    /**
     * Rightmost or maximum lower azimuth within this limit. Interpreted according to
     * site types as 2nd lower azimuth limit elevation angle of axis of conical
     * observation pattern. If the limit rectangle is parallel to the horizon, the
     * upper and lower right azimuth limits would be equal. (degrees).
     */
    lowerRightAzimuthLimit?: number;

    /**
     * Minimum or lower right elevation within this limit. Interpreted according to
     * site types as minimum right elevation angle, constant elevation or fan beam
     * centerline. If the limit rectangle is parallel to the horizon, the left and
     * right lower elevation limits would be equal. (Degrees).
     */
    lowerRightElevationLimit?: number;

    /**
     * Leftmost or minimum upper azimuth within this sensor limit. Interpreted
     * according to site types as beginning upper azimuth limit, left-hand upper
     * boundary limit. If the limit rectangle is parallel to the horizon, the upper and
     * lower left azimuth limits would be equal. (in degrees).
     */
    upperLeftAzimuthLimit?: number;

    /**
     * Maximum or upper elevation within this limit. Interpreted according to site
     * types as maximum elevation angle, half the apex of conical observation pattern
     * or star. (Degrees).
     */
    upperLeftElevationLimit?: number;

    /**
     * Rightmost or maximum upper azimuth within this limit. Interpreted according to
     * site types as 2nd azimuth limit elevation angle of axis of conical observation
     * pattern. If the limit rectangle is parallel to the horizon, the upper and lower
     * right azimuth limits would be equal. (degrees).
     */
    upperRightAzimuthLimit?: number;

    /**
     * Maximum or upper right elevation within this limit. Interpreted according to
     * site types as maximum rightmost elevation angle, half the apex of conical
     * observation pattern or star. If the limit rectangle is parallel to the horizon,
     * the left and right upper elevation limits would be equal. (Degrees).
     */
    upperRightElevationLimit?: number;
  }

  export interface SensorObservationType {
    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The observation measurement type produced by a sensor.
     */
    type?: string;
  }

  /**
   * SensorStats contain statistics on sensors related to observation production such
   * as last reported observation time.
   */
  export interface SensorStat {
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
     * Unique ID of the parent sensor.
     */
    idSensor: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Time of last reported observation in ISO 8601 UTC with microsecond precision.
     */
    lastObTime?: string;
  }

  export interface SensorType {
    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: number;

    /**
     * The specific sensor type and/or surveillance capability of this sensor.
     */
    type?: string;
  }
}

export interface SensorUpdateParams {
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
   * Unique name of this sensor.
   */
  sensorName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Optional flag indicating if the sensor is active.
   */
  active?: boolean;

  /**
   * Optional US Air Force identifier for the sensor/ASR site, typically for air
   * surveillance radar (ASR) sensors.
   */
  afId?: string;

  /**
   * The sensor type at the site. Optional field, intended primarily for ASRs.
   */
  asrType?: string;

  /**
   * Optional dissemination control required for accessing data (e.g observations)
   * produced by this sensor. This is typically a proprietary data owner control for
   * commercial sensors.
   */
  dataControl?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: SensorUpdateParams.Entity;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idSensor?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Collection of Sensorcharacteristics which define characteristics and
   * capabilities of a sensor.
   */
  sensorcharacteristics?: Array<SensorUpdateParams.Sensorcharacteristic>;

  /**
   * Sensorlimits define 0 to many limits of a particular sensor in terms of
   * observation coverage of on-orbit objects.
   */
  sensorlimitsCollection?: Array<SensorUpdateParams.SensorlimitsCollection>;

  /**
   * Number assigned to this sensor. Since there is no authoritative numbering
   * scheme, these numbers sometimes collide across sensors (especially commercial
   * sensors). It is therefore not a unique identifier.
   */
  sensorNumber?: number;

  sensorObservationType?: SensorUpdateParams.SensorObservationType;

  /**
   * Collection of SensorStats which contain statistics of a sensor.
   */
  sensorStats?: Array<SensorUpdateParams.SensorStat>;

  sensorType?: SensorUpdateParams.SensorType;

  /**
   * Optional short name for the sensor.
   */
  shortName?: string;
}

export namespace SensorUpdateParams {
  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  export interface Entity {
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
     * Unique entity name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
     * LASEREMITTER, NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
     */
    type:
      | 'AIRCRAFT'
      | 'BUS'
      | 'COMM'
      | 'IR'
      | 'LASEREMITTER'
      | 'NAVIGATION'
      | 'ONORBIT'
      | 'RFEMITTER'
      | 'SCIENTIFIC'
      | 'SENSOR'
      | 'SITE'
      | 'VESSEL';

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

    /**
     * Unique identifier of the record.
     */
    idEntity?: string;

    /**
     * Unique identifier of the entity location, if terrestrial/fixed.
     */
    idLocation?: string;

    /**
     * Onorbit identifier if this entity is part of an on-orbit object. For the public
     * catalog, the idOnOrbit is typically the satellite number as a string, but may be
     * a UUID for analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the associated operating unit object.
     */
    idOperatingUnit?: string;

    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    location?: LocationAPI.LocationIngest;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Entity.OnOrbit;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Type of organization which owns this entity (e.g. Commercial, Government,
     * Academic, Consortium, etc).
     */
    ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

    /**
     * Boolean indicating if this entity is taskable.
     */
    taskable?: boolean;

    /**
     * Terrestrial identifier of this entity, if applicable.
     */
    terrestrialId?: string;

    /**
     * List of URLs to additional details/documents for this entity.
     */
    urls?: Array<string>;
  }

  export namespace Entity {
    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    export interface OnOrbit {
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
       * Satellite/Catalog number of the target on-orbit object.
       */
      satNo: number;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Alternate name of the on-orbit object.
       */
      altName?: string;

      /**
       * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
       * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
       * Heliocentric, Interplanetary, Lagrangian, Docked).
       */
      category?:
        | 'Unknown'
        | 'On-Orbit'
        | 'Decayed'
        | 'Cataloged Without State'
        | 'Launch Nominal'
        | 'Analyst Satellite'
        | 'Cislunar'
        | 'Lunar'
        | 'Hyperbolic'
        | 'Heliocentric'
        | 'Interplanetary'
        | 'Lagrangian'
        | 'Docked';

      /**
       * Common name of the on-orbit object.
       */
      commonName?: string;

      /**
       * Constellation to which this satellite belongs.
       */
      constellation?: string;

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

      /**
       * Date of decay.
       */
      decayDate?: string;

      /**
       * For the public catalog, the idOnOrbit is typically the satellite number as a
       * string, but may be a UUID for analyst or other unknown or untracked satellites,
       * auto-generated by the system.
       */
      idOnOrbit?: string;

      /**
       * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
       * launch year, LLL is the sequential launch number of that year, and AAA is an
       * optional launch piece designator for the launch.
       */
      intlDes?: string;

      /**
       * Date of launch.
       */
      launchDate?: string;

      /**
       * Id of the associated launchSite entity.
       */
      launchSiteId?: string;

      /**
       * Estimated lifetime of the on-orbit payload, if known.
       */
      lifetimeYears?: number;

      /**
       * Mission number of the on-orbit object.
       */
      missionNumber?: string;

      /**
       * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
       * UNKNOWN.
       */
      objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;
    }
  }

  /**
   * Model representation of characteristics and capabilities of a sensor.
   */
  export interface Sensorcharacteristic {
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
     * Unique identifier of the parent sensor.
     */
    idSensor: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of measurement range(s) where radar samples must fall to be acceptable. If
     * this field is populated, the associated beam(s) must be provided in the
     * beamOrder field.
     */
    acceptSampleRanges?: Array<number>;

    /**
     * Number of bits used in the conversion from analog electrons in a pixel well to a
     * digital number. The digital number has a maximum value of 2^N, where N is the
     * number of bits.
     */
    analogToDigitalBitSize?: number;

    /**
     * Optical sensor camera aperture.
     */
    aperture?: number;

    /**
     * For ASR (Air Surveillance Radar) sensors, the scan (360 deg sweep) rate of the
     * radar, in scans/minute.
     */
    asrScanRate?: number;

    /**
     * One-way radar receiver loss factor due to atmospheric effects. This value will
     * often be the same as the corresponding transmission factor but may be different
     * for bistatic systems.
     */
    atmosReceiverLoss?: number;

    /**
     * One-way radar transmission loss factor due to atmospheric effects.
     */
    atmosTransmissionLoss?: number;

    /**
     * Average atmospheric angular width with no distortion from turbulence at an
     * optical sensor site in arcseconds.
     */
    avgAtmosSeeingConditions?: number;

    /**
     * Array of azimuth angles of a radar beam, in degrees. If this field is populated,
     * the associated beam(s) must be provided in the beamOrder field.
     */
    azAngs?: Array<number>;

    /**
     * Azimuth rate acquisition limit (radians/minute).
     */
    azimuthRate?: number;

    /**
     * Average background sky brightness at an optical sensor site during new moon
     * conditions. This field uses units of watts per square meter per steradian
     * (W/(m^2 str)) consistent with sensor detection bands.
     */
    backgroundSkyRadiance?: number;

    /**
     * Average background sky brightness at an optical sensor site during new moon
     * conditions. This field uses units of visual magnitude consistent with sensor
     * detection bands.
     */
    backgroundSkyVisMag?: number;

    /**
     * Sensor band.
     */
    band?: string;

    /**
     * The total bandwidth, in megahertz, about the radar center frequency.
     */
    bandwidth?: number;

    /**
     * Array designating the beam order of provided values (e.g. vb1 for vertical beam
     * 1, ob1 for oblique beam 1, etc.). Required if any of the following array fields
     * are populated: azAngs, elAngs, radarPulseWidths, pulseRepPeriods, delayGates,
     * rangeGates, rangeSpacings, vertGateSpacings, vertGateWidths, specAvgSpectraNums,
     * tempMedFiltCodes, runMeanCodes, totRecNums, reqRecords, acceptSampleRanges.
     */
    beamOrder?: Array<string>;

    /**
     * Number of radar beams used by the sensor.
     */
    beamQty?: number;

    /**
     * The angle of the center of a phased array sensor.
     */
    boresight?: number;

    /**
     * The number of degrees off of the boresight for the sensor.
     */
    boresightOffAngle?: number;

    /**
     * Weighted center wavelength for an optical sensor bandpass in micrometers. It is
     * the center wavelength in a weighted integral sense, accounting for the
     * sensitivity vs. wavelength curve for the sensor focal plane array.
     */
    centerWavelength?: number;

    /**
     * Collapsing loss in decibels. Collapsing losses occur when two or more sources of
     * noise are added to the target signal. Examples include receiver bandwidth
     * mismatch with filtering bandwidth and elevation or azimuth beam collapse onto
     * position/height indicator displays.
     */
    collapsingLoss?: number;

    /**
     * Threshold shear value beyond which one of the radial velocity values will be
     * rejected, measured in units of inverse second.
     */
    critShear?: number;

    /**
     * Current flowing through optical sensor focal plane electronics with a closed
     * shutter in electrons per second.
     */
    darkCurrent?: number;

    /**
     * Array of time delay(s) for pulses from a radar beam to get to the first range
     * gate, in nanoseconds. If this field is populated, the associated beam(s) must be
     * provided in the beamOrder field.
     */
    delayGates?: Array<number>;

    /**
     * Description of the equipment and data source.
     */
    description?: string;

    /**
     * Detection signal-to-noise ratio (SNR) threshold in decibels. This value is
     * typically lower than trackSNR.
     */
    detectSNR?: number;

    /**
     * Sensor duty cycle as a fraction of 1. Duty cycle is the fraction of time a
     * sensor is actively transmitting.
     */
    dutyCycle?: number;

    /**
     * Sensor Earth limb exclusion height in kilometers and is generally only applied
     * to space-based sensors. Some models used an earth exclusion angle instead, but
     * this assumes the sensor is in a circular orbit with constant altitude relative
     * to the earth. The limb exclusion height can be used for space-based sensors in
     * any orbit (assuming it is constant with sensor altitude). The limb height is
     * defined to be 0 at the surface of the earth.
     */
    earthLimbExclHgt?: number;

    /**
     * Array of elevation angles of a radar beam, in degrees. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    elAngs?: Array<number>;

    /**
     * Elevation rate acquisition limit (radians/minute).
     */
    elevationRateGeolm?: number;

    /**
     * Type of equipment used to take measurements.
     */
    equipmentType?: string;

    /**
     * The beam width of a Sensor's Fan (range). The values for this range from (0.0 to
     * PI).
     */
    fanBeamWidth?: number;

    /**
     * Number of Fast Fourier Transform (FFT) points used to convert time varying
     * signals into the frequency domain.
     */
    fft?: number;

    /**
     * Maximum number of times the first guess was propagated in each gate before
     * failing the first guess check.
     */
    fgpCrit?: number;

    /**
     * Noise term, in decibels, that arises when a radar receiver filter has a
     * non-optimal bandwidth for an incoming signal (i.e., when it does not match the
     * pulse width).
     */
    filterMismatchFactor?: number;

    /**
     * F-number for an optical telescope. It is dimensionless and is defined as the
     * ratio of the focal length to the aperture width.
     */
    fNum?: number;

    /**
     * For radar based sensors, the focal point elevation of the radar at the site, in
     * meters.
     */
    focalPoint?: number;

    /**
     * Horizontal field of view, in degrees.
     */
    hFOV?: number;

    /**
     * Horizontal pixel resolution.
     */
    hResPixels?: number;

    /**
     * For radar based sensors, K-factor is a relative indicator of refractivity that
     * infers the amount of radar beam bending due to atmosphere. (1<K<2).
     */
    k?: number;

    /**
     * For Orbiting Sensors, First Card Azimuth limit #1 (left, degrees).
     */
    leftClockAngle?: number;

    /**
     * Leftmost GEO belt longitude limit for this sensor (if applicable).
     */
    leftGeoBeltLimit?: number;

    /**
     * Site where measurement is taken.
     */
    location?: string;

    /**
     * Aggregated radar range equation gain in decibels for maximum sensitivity. It is
     * a roll-up value for low fidelity modeling and is often the only sensitivity
     * value available for a radar system without access to detailed performance
     * parameters.
     */
    loopGain?: number;

    /**
     * Lowest aspect angle of the full moon in degrees at which the sensor can achieve
     * full performance.
     */
    lunarExclAngle?: number;

    /**
     * Angle between magnetic north and true north at the sensor site, in degrees.
     */
    magDec?: number;

    /**
     * Absolute magnitude acquisition limit for optical sensors.
     */
    magnitudeLimit?: number;

    /**
     * Max deviation angle of the sensor in degrees.
     */
    maxDeviationAngle?: number;

    /**
     * Maximum integration time per image frame in seconds for an optical sensor.
     */
    maxIntegrationTime?: number;

    /**
     * Maximum observable sensor range, in kilometers.
     */
    maxObservableRange?: number;

    /**
     * Maximum observable range limit in kilometers -- sensor cannot acquire beyond
     * this range.
     */
    maxRangeLimit?: number;

    /**
     * Maximum wavelength detectable by an optical sensor in micrometers.
     */
    maxWavelength?: number;

    /**
     * Minimum integration time per image frame in seconds for an optical sensor.
     */
    minIntegrationTime?: number;

    /**
     * Minimum range measurement capability of the sensor, in kilometers.
     */
    minRangeLimit?: number;

    /**
     * Signal to Noise Ratio, in decibels. The values for this range from 0.0 - + 99.99
     * dB.
     */
    minSignalNoiseRatio?: number;

    /**
     * Minimum wavelength detectable by an optical sensor in micrometers.
     */
    minWavelength?: number;

    /**
     * Negative Range-rate/relative velocity limit (kilometers/second).
     */
    negativeRangeRateLimit?: number;

    /**
     * Noise figure for a radar system in decibels. This value may be used to compute
     * system noise when the system temperature is unavailable.
     */
    noiseFigure?: number;

    /**
     * Number of pulses that are non-coherently integrated during detection processing.
     */
    nonCoherentIntegratedPulses?: number;

    /**
     * For radar based sensors, number of integrated pulses in a transmit cycle.
     */
    numIntegratedPulses?: number;

    /**
     * Number of integration frames for an optical sensor.
     */
    numIntegrationFrames?: number;

    /**
     * The number of optical integration mode characteristics provided in this record.
     * If provided, the numOpticalIntegrationModes value indicates the number of
     * elements in each of the opticalIntegrationTimes, opticalIntegrationAngularRates,
     * opticalIntegrationFrames, opticalIntegrationPixelBinnings, and
     * opticalIntegrationSNRs arrays.
     */
    numOpticalIntegrationModes?: number;

    /**
     * The number of waveforms characteristics provided in this record. If provided,
     * the numWaveforms value indicates the number of elements in each of the
     * waveformPulseWidths, waveformBandWidths, waveformMinRanges, waveformMaxRanges,
     * and waveformLoopGains arrays.
     */
    numWaveforms?: number;

    /**
     * Array containing the angular rate, in arcsec/sec, for each provided optical
     * integration mode. The number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationAngularRates?: Array<number>;

    /**
     * Array containing the number of frames, for each optical integration mode. The
     * number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationFrames?: Array<number>;

    /**
     * Array containing the pixel binning, for each optical integration mode. The
     * number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationPixelBinnings?: Array<number>;

    /**
     * Array of optical integration modes signal to noise ratios. The number of
     * elements must be equal to the value indicated in numOpticalIntegrationModes.
     */
    opticalIntegrationSNRs?: Array<number>;

    /**
     * Array containing the time, in seconds, for each provided optical integration
     * mode. The number of elements must be equal to the value indicated in
     * numOpticalIntegrationModes.
     */
    opticalIntegrationTimes?: Array<number>;

    /**
     * Fraction of incident light transmitted to an optical sensor focal plane array.
     * The value is given as a fraction of 1, not as a percent.
     */
    opticalTransmission?: number;

    /**
     * Two-way pattern absorption/propagation loss due to medium in decibels.
     */
    patternAbsorptionLoss?: number;

    /**
     * Losses from the beam shape, scanning, and pattern factor in decibels. These
     * losses occur when targets are not directly in line with a beam center. For space
     * surveillance, this will occur most often during sensor scanning.
     */
    patternScanLoss?: number;

    /**
     * Maximum instantaneous radar transmit power in watts for use in the radar range
     * equation.
     */
    peakPower?: number;

    /**
     * Angular field-of-view covered by one pixel in a focal plane array in
     * microradians. The pixel is assumed to be a perfect square so that only a single
     * value is required.
     */
    pixelInstantaneousFOV?: number;

    /**
     * Maximum number of electrons that can be collected in a single pixel on an
     * optical sensor focal plane array.
     */
    pixelWellDepth?: number;

    /**
     * Positive Range-rate/relative velocity limit (kilometers/second).
     */
    positiveRangeRateLimit?: number;

    /**
     * For radar based sensors, pulse repetition frequency (PRF), in hertz. Number of
     * new pulses transmitted per second.
     */
    prf?: number;

    /**
     * Designated probability of detection at the signal-to-noise detection threshold.
     */
    probDetectSNR?: number;

    /**
     * For radar based sensors, probability of the indication of the presence of a
     * radar target due to noise or interference.
     */
    probFalseAlarm?: number;

    /**
     * Array of interval(s) between the start of one radar pulse and the start of
     * another for a radar beam, in microseconds. If this field is populated, the
     * associated beam(s) must be provided in the beamOrder field.
     */
    pulseRepPeriods?: Array<number>;

    /**
     * Fraction of incident photons converted to electrons at the focal plane array.
     * This value is a decimal number between 0 and 1, inclusive.
     */
    quantumEff?: number;

    /**
     * Radar frequency in hertz, of the sensor (if a radar sensor).
     */
    radarFrequency?: number;

    /**
     * Message data format transmitted by the sensor digitizer.
     */
    radarMessageFormat?: string;

    /**
     * For radar based sensors, radar maximum unambiguous range, in kilometers.
     */
    radarMUR?: number;

    /**
     * Array of transmit time(s) for a radar beam pulse, in microseconds. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    radarPulseWidths?: Array<number>;

    /**
     * Radio frequency (if sensor is RF).
     */
    radioFrequency?: number;

    /**
     * Losses due to the presence of a protective radome surrounding a radar sensor, in
     * decibels.
     */
    radomeLoss?: number;

    /**
     * Array of the number(s) of discrete altitudes where return signals are sampled by
     * a radar beam. If this field is populated, the associated beam(s) must be
     * provided in the beamOrder field.
     */
    rangeGates?: Array<number>;

    /**
     * Array of range gate spacing(s) for a radar beam, in nanoseconds. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    rangeSpacings?: Array<number>;

    /**
     * Number of false-signal electrons generated by optical sensor focal plane
     * read-out electronics from photon-to-electron conversion during frame
     * integration. The units are in electrons RMS.
     */
    readNoise?: number;

    /**
     * Radar receive gain in decibels.
     */
    receiveGain?: number;

    /**
     * Horizontal/azimuthal receive beamwidth for a radar in degrees.
     */
    receiveHorizBeamWidth?: number;

    /**
     * Aggregate radar receive loss, in decibels.
     */
    receiveLoss?: number;

    /**
     * Vertical/elevation receive beamwidth for a radar in degrees.
     */
    receiveVertBeamWidth?: number;

    /**
     * Reference temperature for radar noise in Kelvin. A reference temperature is used
     * when the radar system temperature is unknown and is combined with the system
     * noise figure to estimate signal loss.
     */
    refTemp?: number;

    /**
     * Array of the total number(s) of records required to meet consensus for a radar
     * beam. If this field is populated, the associated beam(s) must be provided in the
     * beamOrder field.
     */
    reqRecords?: Array<number>;

    /**
     * For Orbiting Sensors, First Card Azimuth limit #3 (right, degrees).
     */
    rightClockAngle?: number;

    /**
     * Rightmost GEO belt longitude limit for this sensor (if applicable).
     */
    rightGeoBeltLimit?: number;

    /**
     * Array of running mean code(s) used by radar data processing. The running mean
     * method involves taking a series of averages of different selections of the full
     * data set to smooth out short-term fluctuations in the data. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    runMeanCodes?: Array<number>;

    /**
     * Radar signal processing losses, in decibels.
     */
    signalProcessingLoss?: number;

    /**
     * Site code of the sensor.
     */
    siteCode?: string;

    /**
     * Sensor and target position vector origins are at the center of the earth. The
     * sun vector origin is at the target position and points toward the sun. Any value
     * between 0 and 180 degrees is acceptable and is assumed to apply in both
     * directions (i.e., a solar exclusion angle of 30 degrees is understood to mean no
     * viewing for any angle between -30 deg and +30 deg).
     */
    solarExclAngle?: number;

    /**
     * Array of the number(s) of Doppler spectra used to process measurements from
     * radar. Spectral averaging involves combining multiple Doppler spectra acquired
     * to obtain a more accurate and representative spectrum. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    specAvgSpectraNums?: Array<number>;

    /**
     * For radar based sensors, expression of the radar system noise, aggregated as an
     * equivalent thermal noise value, in degrees Kelvin.
     */
    systemNoiseTemperature?: number;

    /**
     * Maximum taskable range of the sensor, in kilometers.
     */
    taskableRange?: number;

    /**
     * Array of temporal median filter code(s) of a radar beam. Temporal median
     * filtering is a noise-reducing algorithm which involves replacing each data point
     * with the median value of a window of neighboring points over time. If this field
     * is populated, the associated beam(s) must be provided in the beamOrder field.
     */
    tempMedFiltCodes?: Array<number>;

    /**
     * Test number for the observed measurement.
     */
    testNumber?: string;

    /**
     * Array of the total number(s) of records for a radar beam. If this field is
     * populated, the associated beam(s) must be provided in the beamOrder field.
     */
    totRecNums?: Array<number>;

    /**
     * For tower sensors, the physical height of the sensor tower, in meters.
     */
    towerHeight?: number;

    /**
     * Beginning track angle limit, in radians. Track angle is the angle between the
     * camera axis and the gimbal plane. Values range from 0 - PI/2.
     */
    trackAngle?: number;

    /**
     * Track signal-to-noise ratio (SNR) threshold in decibels. This value is typically
     * higher than detectSNR.
     */
    trackSNR?: number;

    /**
     * Radar transmit gain in decibels.
     */
    transmitGain?: number;

    /**
     * Horizontal/azimuthal transmit beamwidth for a radar in degrees.
     */
    transmitHorizBeamWidth?: number;

    /**
     * Aggregate radar transmit loss, in decibels.
     */
    transmitLoss?: number;

    /**
     * Radar transmit power in Watts.
     */
    transmitPower?: number;

    /**
     * Vertical/elevation transmit beamwidth for a radar in degrees.
     */
    transmitVertBeamWidth?: number;

    /**
     * True North correction for the sensor, in ACP (Azimunth Change Pulse) count.
     */
    trueNorthCorrector?: number;

    /**
     * Antenna true tilt, in degrees.
     */
    trueTilt?: number;

    /**
     * Twilight angle for ground-based optical sensors in degrees. A sensor cannot view
     * targets until the sun is below the twilight angle relative to the local horizon.
     * The sign of the angle is positive despite the sun elevation being negative after
     * local sunset. Typical values for the twilight angle are civil twilight (6
     * degrees), nautical twilight (12 degrees), and astronomical twilight (18
     * degrees).
     */
    twilightAngle?: number;

    /**
     * Flag indicating if a vertical radar beam was used in the wind calculation.
     */
    vertBeamFlag?: boolean;

    /**
     * Array of vertical distance(s) between points where radar measurements are taken,
     * in meters. If this field is populated, the associated beam(s) must be provided
     * in the beamOrder field.
     */
    vertGateSpacings?: Array<number>;

    /**
     * Array of width(s) of each location where radar measurements are taken, in
     * meters. If this field is populated, the associated beam(s) must be provided in
     * the beamOrder field.
     */
    vertGateWidths?: Array<number>;

    /**
     * Vertical field of view, in degrees.
     */
    vFOV?: number;

    /**
     * Vertical pixel resolution.
     */
    vResPixels?: number;

    /**
     * Array containing the bandwidth, in megahertz, for each provided waveform. The
     * number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformBandwidths?: Array<number>;

    /**
     * Array containing the loop gain, in decibels, for each provided waveform. The
     * number of elements in this array must be equal to the value indicated in the
     * numWaveforms field (10 SNR vs. 1 dBsm at 1000 km).
     */
    waveformLoopGains?: Array<number>;

    /**
     * Array containing the maximum range, in kilometers, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformMaxRanges?: Array<number>;

    /**
     * Array containing the minimum range, in kilometers, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformMinRanges?: Array<number>;

    /**
     * Array containing the pulse width, in microseconds, for each provided waveform.
     * The number of elements in this array must be equal to the value indicated in the
     * numWaveforms field.
     */
    waveformPulseWidths?: Array<number>;

    /**
     * Peformance zone-1 maximum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z1MaxRange?: number;

    /**
     * Peformance zone-1 minimum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z1MinRange?: number;

    /**
     * Peformance zone-2 maximum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z2MaxRange?: number;

    /**
     * Peformance zone-2 minimum range, in kilometers. Note that the zones apply only
     * to the PSR/Search radars.
     */
    z2MinRange?: number;
  }

  /**
   * Sensorlimits define 0 to many limits of a particular sensor in terms of
   * observation coverage of on-orbit objects.
   */
  export interface SensorlimitsCollection {
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
     * Unique identifier of the target sensor object.
     */
    idSensor?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idSensorLimits?: string;

    /**
     * Leftmost or minimum lower azimuth within this limit. Interpreted according to
     * site types as lower left azimuth limit elevation angle of axis of conical
     * observation pattern. If the limit rectangle is parallel to the horizon, the
     * upper and lower left azimuth limits would be equal. (degrees).
     */
    lowerLeftAzimuthLimit?: number;

    /**
     * Minimum or lower elevation within this limit. Interpreted according to site
     * types as minimum elevation angle, constant elevation or fan beam centerline.
     * (Degrees).
     */
    lowerLeftElevationLimit?: number;

    /**
     * Rightmost or maximum lower azimuth within this limit. Interpreted according to
     * site types as 2nd lower azimuth limit elevation angle of axis of conical
     * observation pattern. If the limit rectangle is parallel to the horizon, the
     * upper and lower right azimuth limits would be equal. (degrees).
     */
    lowerRightAzimuthLimit?: number;

    /**
     * Minimum or lower right elevation within this limit. Interpreted according to
     * site types as minimum right elevation angle, constant elevation or fan beam
     * centerline. If the limit rectangle is parallel to the horizon, the left and
     * right lower elevation limits would be equal. (Degrees).
     */
    lowerRightElevationLimit?: number;

    /**
     * Leftmost or minimum upper azimuth within this sensor limit. Interpreted
     * according to site types as beginning upper azimuth limit, left-hand upper
     * boundary limit. If the limit rectangle is parallel to the horizon, the upper and
     * lower left azimuth limits would be equal. (in degrees).
     */
    upperLeftAzimuthLimit?: number;

    /**
     * Maximum or upper elevation within this limit. Interpreted according to site
     * types as maximum elevation angle, half the apex of conical observation pattern
     * or star. (Degrees).
     */
    upperLeftElevationLimit?: number;

    /**
     * Rightmost or maximum upper azimuth within this limit. Interpreted according to
     * site types as 2nd azimuth limit elevation angle of axis of conical observation
     * pattern. If the limit rectangle is parallel to the horizon, the upper and lower
     * right azimuth limits would be equal. (degrees).
     */
    upperRightAzimuthLimit?: number;

    /**
     * Maximum or upper right elevation within this limit. Interpreted according to
     * site types as maximum rightmost elevation angle, half the apex of conical
     * observation pattern or star. If the limit rectangle is parallel to the horizon,
     * the left and right upper elevation limits would be equal. (Degrees).
     */
    upperRightElevationLimit?: number;
  }

  export interface SensorObservationType {
    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The observation measurement type produced by a sensor.
     */
    type?: string;
  }

  /**
   * SensorStats contain statistics on sensors related to observation production such
   * as last reported observation time.
   */
  export interface SensorStat {
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
     * Unique ID of the parent sensor.
     */
    idSensor: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Time of last reported observation in ISO 8601 UTC with microsecond precision.
     */
    lastObTime?: string;
  }

  export interface SensorType {
    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: number;

    /**
     * The specific sensor type and/or surveillance capability of this sensor.
     */
    type?: string;
  }
}

export interface SensorListParams extends OffsetPageParams {}

export interface SensorCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SensorGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SensorTupleParams {
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

Sensor.Calibration = Calibration;

export declare namespace Sensor {
  export {
    type SensorListResponse as SensorListResponse,
    type SensorCountResponse as SensorCountResponse,
    type SensorGetResponse as SensorGetResponse,
    type SensorQueryhelpResponse as SensorQueryhelpResponse,
    type SensorTupleResponse as SensorTupleResponse,
    type SensorListResponsesOffsetPage as SensorListResponsesOffsetPage,
    type SensorCreateParams as SensorCreateParams,
    type SensorUpdateParams as SensorUpdateParams,
    type SensorListParams as SensorListParams,
    type SensorCountParams as SensorCountParams,
    type SensorGetParams as SensorGetParams,
    type SensorTupleParams as SensorTupleParams,
  };

  export {
    Calibration as Calibration,
    type CalibrationRetrieveResponse as CalibrationRetrieveResponse,
    type CalibrationCountResponse as CalibrationCountResponse,
    type CalibrationQueryResponse as CalibrationQueryResponse,
    type CalibrationQueryHelpResponse as CalibrationQueryHelpResponse,
    type CalibrationTupleResponse as CalibrationTupleResponse,
    type CalibrationCreateParams as CalibrationCreateParams,
    type CalibrationRetrieveParams as CalibrationRetrieveParams,
    type CalibrationCountParams as CalibrationCountParams,
    type CalibrationCreateBulkParams as CalibrationCreateBulkParams,
    type CalibrationQueryParams as CalibrationQueryParams,
    type CalibrationTupleParams as CalibrationTupleParams,
    type CalibrationUnvalidatedPublishParams as CalibrationUnvalidatedPublishParams,
  };
}
