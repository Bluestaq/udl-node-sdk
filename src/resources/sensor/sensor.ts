// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as AntennasAPI from 'bluestaq@unified-data-library/resources/antennas';
import * as BatteriesAPI from 'bluestaq@unified-data-library/resources/batteries';
import * as EnginesAPI from 'bluestaq@unified-data-library/resources/engines';
import * as LocationAPI from 'bluestaq@unified-data-library/resources/location';
import * as OrganizationAPI from 'bluestaq@unified-data-library/resources/organization';
import * as SolarArrayDetailsAPI from 'bluestaq@unified-data-library/resources/solar-array-details';
import * as CalibrationAPI from 'bluestaq@unified-data-library/resources/sensor/calibration/calibration';
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
} from 'bluestaq@unified-data-library/resources/sensor/calibration/calibration';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

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
    location?: Entity.Location;

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
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    export interface Location {
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
       * Location name.
       */
      name: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Altitude of the location, in kilometers.
       */
      altitude?: number;

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
       * Unique identifier of the location, auto-generated by the system.
       */
      idLocation?: string;

      /**
       * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
       * south of equator).
       */
      lat?: number;

      /**
       * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
       * values west of Prime Meridian).
       */
      lon?: number;

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
    location?: LocationAPI.LocationFull;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Entity.OnOrbit;

    /**
     * Model representation of a unit or organization which operates or controls a
     * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
     * belong to an organization.
     */
    operatingUnit?: Entity.OperatingUnit;

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
    rfBands?: Array<Entity.RfBand>;

    /**
     * Read-only collection of statuses which can be collected by multiple sources.
     */
    statusCollection?: Array<Entity.StatusCollection>;

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
      antennas?: Array<OnOrbit.Antenna>;

      /**
       * Read-only collection of batteries on this on-orbit object.
       */
      batteries?: Array<OnOrbit.Battery>;

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
      onorbitDetails?: Array<OnOrbit.OnorbitDetail>;

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
      solarArrays?: Array<OnOrbit.SolarArray>;

      /**
       * Read-only collection of thrusters (engines) on this on-orbit object.
       */
      thrusters?: Array<OnOrbit.Thruster>;

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

    export namespace OnOrbit {
      export interface Antenna {
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
         * ID of the antenna.
         */
        idAntenna: string;

        /**
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Model representation of information on on-orbit/spacecraft communication
         * antennas. A spacecraft may have multiple antennas and each antenna can have
         * multiple 'details' records compiled by different sources.
         */
        antenna?: AntennasAPI.AntennaFull;

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
         * Time the row was last updated in the database, auto-populated by the system.
         */
        updatedAt?: string;

        /**
         * Application user who updated the row in the database, auto-populated by the
         * system.
         */
        updatedBy?: string;
      }

      export interface Battery {
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
         * ID of the battery.
         */
        idBattery: string;

        /**
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Model representation of specific spacecraft battery types.
         */
        battery?: BatteriesAPI.BatteryFull;

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
         * The number of batteries on the spacecraft of the type identified by idBattery.
         */
        quantity?: number;

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
       * Contains details of the OnOrbit object.
       */
      export interface OnorbitDetail {
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
         * UUID of the parent Onorbit record.
         */
        idOnOrbit: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Mass of fuel and disposables at launch time in kilograms.
         */
        additionalMass?: number;

        /**
         * The radius used for long-term debris environment projection analyses that is not
         * as conservative as COLA Radius, in meters.
         */
        adeptRadius?: number;

        /**
         * The total beginning of life delta V of the spacecraft, in meters per second.
         */
        bolDeltaV?: number;

        /**
         * Spacecraft beginning of life fuel mass, in orbit, in kilograms.
         */
        bolFuelMass?: number;

        /**
         * Average cross sectional area of the bus in meters squared.
         */
        busCrossSection?: number;

        /**
         * Type of the bus on the spacecraft.
         */
        busType?: string;

        /**
         * Maximum dimension of the box circumscribing the spacecraft (d = sqrt(a*a + b*b +
         * c\*c) where a is the tip-to-tip dimension, b and c are perpendicular to that.)
         * in meters.
         */
        colaRadius?: number;

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
         * Average cross sectional area in meters squared.
         */
        crossSection?: number;

        /**
         * The estimated total current mass of the spacecraft, in kilograms.
         */
        currentMass?: number;

        /**
         * The 1-sigma uncertainty of the total spacecraft delta V, in meters per second.
         */
        deltaVUnc?: number;

        /**
         * Array of the estimated mass of each deployable object, in kilograms. Must
         * contain the same number of elements as the value of numDeployable.
         */
        depEstMasses?: Array<number>;

        /**
         * Array of the 1-sigma uncertainty of the mass for each deployable object, in
         * kilograms. Must contain the same number of elements as the value of
         * numDeployable.
         */
        depMassUncs?: Array<number>;

        /**
         * Array of satellite deployable objects. Must contain the same number of elements
         * as the value of numDeployable.
         */
        depNames?: Array<string>;

        /**
         * GEO drift rate, if applicable in degrees per day.
         */
        driftRate?: number;

        /**
         * Spacecraft dry mass (without fuel or disposables) in kilograms.
         */
        dryMass?: number;

        /**
         * Estimated maximum burn duration for the object, in seconds.
         */
        estDeltaVDuration?: number;

        /**
         * Estimated remaining fuel for the object in kilograms.
         */
        fuelRemaining?: number;

        /**
         * GEO slot if applicable, in degrees. -180 (West of Prime Meridian) to 180 degrees
         * (East of Prime Meridian). Prime Meridian is 0.
         */
        geoSlot?: number;

        /**
         * The name of the source who last provided an observation for this idOnOrbit.
         */
        lastObSource?: string;

        /**
         * Time of last reported observation for this object in ISO 8601 UTC with
         * microsecond precision.
         */
        lastObTime?: string;

        /**
         * Nominal mass of spacecraft and fuel at launch time, in kilograms.
         */
        launchMass?: number;

        /**
         * Maximum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
         */
        launchMassMax?: number;

        /**
         * Minimum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
         */
        launchMassMin?: number;

        /**
         * Boolean indicating whether a spacecraft is maneuverable. Note that a spacecraft
         * may have propulsion capability but may not be maneuverable due to lack of fuel,
         * anomalous condition, or other operational constraints.
         */
        maneuverable?: boolean;

        /**
         * Maximum delta V available for this on-orbit spacecraft, in meters per second.
         */
        maxDeltaV?: number;

        /**
         * Maximum dimension across the spacecraft (e.g., tip-to-tip across the solar panel
         * arrays) in meters.
         */
        maxRadius?: number;

        /**
         * Array of the type of missions the spacecraft performs. Must contain the same
         * number of elements as the value of numMission.
         */
        missionTypes?: Array<string>;

        /**
         * The number of sub-satellites or deployable objects on the spacecraft.
         */
        numDeployable?: number;

        /**
         * The number of distinct missions the spacecraft performs.
         */
        numMission?: number;

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
         * Current/latest radar cross section in meters squared.
         */
        rcs?: number;

        /**
         * Maximum radar cross section in meters squared.
         */
        rcsMax?: number;

        /**
         * Mean radar cross section in meters squared.
         */
        rcsMean?: number;

        /**
         * Minimum radar cross section in meters squared.
         */
        rcsMin?: number;

        /**
         * The reference source, sources, or URL from which the data in this record was
         * obtained.
         */
        refSource?: string;

        /**
         * Spacecraft deployed area of solar array in meters squared.
         */
        solarArrayArea?: number;

        /**
         * The 1-sigma uncertainty of the total spacecraft mass, in kilograms.
         */
        totalMassUnc?: number;

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
         * Current/latest visual magnitude in M.
         */
        vismag?: number;

        /**
         * Maximum visual magnitude in M.
         */
        vismagMax?: number;

        /**
         * Mean visual magnitude in M.
         */
        vismagMean?: number;

        /**
         * Minimum visual magnitude in M.
         */
        vismagMin?: number;
      }

      export interface SolarArray {
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
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

        /**
         * ID of the SolarArray.
         */
        idSolarArray: string;

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
         * The number of solar arrays on the spacecraft of the type identified by
         * idSolarArray.
         */
        quantity?: number;

        /**
         * Model representation of information on on-orbit/spacecraft solar arrays. A
         * spacecraft may have multiple solar arrays and each solar array can have multiple
         * 'details' records compiled by different sources.
         */
        solarArray?: SolarArray.SolarArray;

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

      export namespace SolarArray {
        /**
         * Model representation of information on on-orbit/spacecraft solar arrays. A
         * spacecraft may have multiple solar arrays and each solar array can have multiple
         * 'details' records compiled by different sources.
         */
        export interface SolarArray {
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
           * Solar Array name.
           */
          name: string;

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
           * Read-only collection of additional SolarArrayDetails by various sources for this
           * organization, ignored on create/update. These details must be created separately
           * via the /udl/solararraydetails operations.
           */
          solarArrayDetails?: Array<SolarArrayDetailsAPI.SolarArrayDetailsFull>;

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

      export interface Thruster {
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
         * ID of the Engine.
         */
        idEngine: string;

        /**
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

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
         * Known launch vehicle engines and their performance characteristics and limits. A
         * launch vehicle has 1 to many engines per stage.
         */
        engine?: EnginesAPI.Engine;

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
         * The number of engines/thrusters on the spacecraft of the type identified by
         * idEngine.
         */
        quantity?: number;

        /**
         * The type of thruster associated with this record (e.g. LAE, Hydrazine REA,
         * etc.).
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

    /**
     * Model representation of a unit or organization which operates or controls a
     * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
     * belong to an organization.
     */
    export interface OperatingUnit {
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
       * Name of the operating unit.
       */
      name: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
       * coordinates reside.
       */
      airDefArea?: string;

      /**
       * The DoD Standard country code designator for the country or political entity to
       * which the operating unit owes its allegiance. This field will be set to "OTHR"
       * if the source value does not match a UDL country code value (ISO-3166-ALPHA-2).
       */
      allegiance?: string;

      /**
       * Specifies an alternate allegiance code if the data provider code is not part of
       * an official Country Code standard such as ISO-3166 or FIPS. This field will be
       * set to the value provided by the source and should be used for all Queries
       * specifying allegiance.
       */
      altAllegiance?: string;

      /**
       * Specifies an alternate country code if the data provider code is not part of an
       * official Country Code standard such as ISO-3166 or FIPS. This field will be set
       * to the value provided by the source and should be used for all Queries
       * specifying a Country Code.
       */
      altCountryCode?: string;

      /**
       * Unique identifier of the operating unit record from the originating system.
       */
      altOperatingUnitId?: string;

      /**
       * Indicates the importance of the operating unit to the OES or MIR system. This
       * data element is restricted to update by DIA (DB-4). Valid values are: 0 - Does
       * not meet criteria above 1 - Primary importance to system 2 - Secondary
       * importance to system 3 - Tertiary importance to system O - Other. Explain in
       * Remarks.
       */
      classRating?: string;

      /**
       * The physical manner of being or state of existence of the operating unit. A
       * physical condition that must be considered in the determining of a course of
       * action. The specific usage and enumerations contained in this field may be found
       * in the documentation provided in the referenceDoc field. If referenceDoc not
       * provided, users may consult the data provider.
       */
      condition?: string;

      /**
       * Availability of the operating unit relative to its condition. Indicates the
       * reason the operating unit is not fully operational. The specific usage and
       * enumerations contained in this field may be found in the documentation provided
       * in the referenceDoc field. If referenceDoc not provided, users may consult the
       * data provider.
       */
      conditionAvail?: string;

      /**
       * Indicates any of the magnitudes that serve to define the position of a point by
       * reference to a fixed figure, system of lines, etc.
       *
       * Pos. 1-2. Latitude Degrees [00-90]
       *
       * Pos. 3-4. Latitude Minutes [00-59]
       *
       * Pos. 5-6. Latitude Seconds [00-59]
       *
       * Pos. 7-9. Latitude Thousandths Of Seconds [000-999]
       *
       * Pos. 10. Latitude Hemisphere [NS]
       *
       * Pos. 11-13. Longitude Degrees [00-180]
       *
       * Pos. 14-15. Longitude Minutes [00-59]
       *
       * Pos. 16-17. Longitude Seconds [00-59]
       *
       * Pos. 18-20. Longitude Thousandths Of Seconds [000-999]
       *
       * Pos. 21. Longitude Hemisphere [EW]
       *
       * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]
       */
      coord?: string;

      /**
       * A mathematical model of the earth used to calculate coordinates on a map. US
       * Forces use the World Geodetic System 1984 (WGS 84), but also use maps by allied
       * countries with local datums. The datum must be specified to ensure accuracy of
       * coordinates. The specific usage and enumerations contained in this field may be
       * found in the documentation provided in the referenceDoc field. If referenceDoc
       * not provided, users may consult the data provider.
       */
      coordDatum?: string;

      /**
       * Indicates the plus or minus error assessed against the method used to derive the
       * coordinate.
       */
      coordDerivAcc?: number;

      /**
       * The DoD Standard country code designator for the country or political entity to
       * which the operating unit geographic coordinates reside . This field will be set
       * to "OTHR" if the source value does not match a UDL country code value
       * (ISO-3166-ALPHA-2).
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
       * A code describing the amount of operating unit participation in a deployment.
       * The specific usage and enumerations contained in this field may be found in the
       * documentation provided in the referenceDoc field. If referenceDoc not provided,
       * users may consult the data provider.
       */
      deployStatus?: string;

      /**
       * Description of the operating unit.
       */
      description?: string;

      /**
       * Combat status of a divisional or equivalent operating unit. Currently, this data
       * element applies only to operating units of the Former Soviet Union. The specific
       * usage and enumerations contained in this field may be found in the documentation
       * provided in the referenceDoc field. If referenceDoc not provided, users may
       * consult the data provider.
       */
      divCat?: string;

      /**
       * Organizational level of the operating unit. The specific usage and enumerations
       * contained in this field may be found in the documentation provided in the
       * referenceDoc field. If referenceDoc not provided, users may consult the data
       * provider.
       */
      echelon?: string;

      /**
       * Indicates the major group or level to which an echelon belongs. The specific
       * usage and enumerations contained in this field may be found in the documentation
       * provided in the referenceDoc field. If referenceDoc not provided, users may
       * consult the data provider.
       */
      echelonTier?: string;

      /**
       * Ground elevation of the geographic coordinates referenced to (above or below)
       * Mean Sea Level (MSL) vertical datum.
       */
      elevMsl?: number;

      /**
       * Indicates the confidence level expressed as a percent that a specific geometric
       * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
       * to within a specified vertical accuracy.
       */
      elevMslConfLvl?: number;

      /**
       * Indicates the plus or minus error assessed against the method used to derive the
       * elevation.
       */
      elevMslDerivAcc?: number;

      /**
       * The Intelligence Confidence Level or the Reliability/degree of confidence that
       * the analyst has assigned to the data within this record. The numerical range is
       * from 1 to 9 with 1 representing the highest confidence level.
       */
      eval?: number;

      /**
       * The country code of the observed flag flown.
       */
      flagFlown?: string;

      /**
       * Naval fleet to which an operating unit is assigned. The specific usage and
       * enumerations contained in this field may be found in the documentation provided
       * in the referenceDoc field. If referenceDoc not provided, users may consult the
       * data provider.
       */
      fleetId?: string;

      /**
       * An aggregation of military units within a single service (i.e., ARMY, AIR FORCE,
       * etc.) which operates under a single authority to accomplish a common mission.
       * The specific usage and enumerations contained in this field may be found in the
       * documentation provided in the referenceDoc field. If referenceDoc not provided,
       * users may consult the data provider.
       */
      force?: string;

      /**
       * The specific name for a given force. For example, Force = ADF (Air Defense
       * Force) and Force Name = Army Air Defense Force.
       */
      forceName?: string;

      /**
       * Functional Production Area (FPA) under the Shared Production Program (SPP).
       * Producers are defined per country per FPA. The specific usage and enumerations
       * contained in this field may be found in the documentation provided in the
       * referenceDoc field. If referenceDoc not provided, users may consult the data
       * provider.
       */
      fpa?: string;

      /**
       * Principal combat-related role that an operating unit is organized, structured
       * and equipped to perform. Or, the specialized military or paramilitary branch in
       * which an individual serves, their specialization. The specific usage and
       * enumerations contained in this field may be found in the documentation provided
       * in the referenceDoc field. If referenceDoc not provided, users may consult the
       * data provider.
       */
      functRole?: string;

      /**
       * The distance between Mean Sea Level and a referenced ellipsoid.
       */
      geoidalMslSep?: number;

      /**
       * Unique identifier of the contact for this operating unit.
       */
      idContact?: string;

      /**
       * Estimated identity of the Site (ASSUMED FRIEND, FRIEND, HOSTILE, FAKER, JOKER,
       * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
       *
       * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
       * behavior, and/or origin.
       *
       * FRIEND: Track object supporting friendly forces and belonging to a declared
       * friendly nation or entity.
       *
       * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
       * deemed to contribute to a threat to friendly forces or their mission due to its
       * behavior, characteristics, nationality, or origin.
       *
       * FAKER: Friendly track, object, or entity acting as an exercise hostile.
       *
       * JOKER: Friendly track, object, or entity acting as an exercise suspect.
       *
       * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
       * origin indicate that it is neither supporting nor opposing friendly forces or
       * their mission.
       *
       * PENDING: Track object which has not been evaluated.
       *
       * SUSPECT: Track object deemed potentially hostile due to the object
       * characteristics, behavior, nationality, and/or origin.
       *
       * UNKNOWN: Track object which has been evaluated and does not meet criteria for
       * any standard identity.
       */
      ident?: string;

      /**
       * Unique identifier of the location record for this operating unit.
       */
      idLocation?: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      idOperatingUnit?: string;

      /**
       * Unique identifier of the organization record for this operating unit.
       */
      idOrganization?: string;

      /**
       * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
       * south of equator).
       */
      lat?: number;

      /**
       * Model representation of a location, which is a specific fixed point on the earth
       * and is used to denote the locations of fixed sensors, operating units, etc.
       */
      location?: LocationAPI.LocationFull;

      /**
       * Location name for the coordinates.
       */
      locName?: string;

      /**
       * Indicates the reason that the operating unit is at that location. The specific
       * usage and enumerations contained in this field may be found in the documentation
       * provided in the referenceDoc field. If referenceDoc not provided, users may
       * consult the data provider.
       */
      locReason?: string;

      /**
       * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
       * values west of Prime Meridian).
       */
      lon?: number;

      /**
       * This field contains a value indicating whether the record is a master unit
       * record (True) or a detail record (False). Master records contain basic
       * information that does not change over time for each unit that has been selected
       * to be projected.
       */
      masterUnit?: boolean;

      /**
       * The Military Grid Reference System is the geocoordinate standard used by NATO
       * militaries for locating points on Earth. The MGRS is derived from the Universal
       * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
       * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
       * geocode for the entire Earth. Example of an milgrid coordinate, or grid
       * reference, would be 4QFJ12345678, which consists of three parts: 4Q (grid zone
       * designator, GZD) FJ (the 100,000-meter square identifier) 12345678 (numerical
       * location; easting is 1234 and northing is 5678, in this case specifying a
       * location with 10 m resolution).
       */
      milGrid?: string;

      /**
       * Indicates the grid system used in the development of the milGrid coordinates.
       * Values are:
       *
       * UPS - Universal Polar System
       *
       * UTM - Universal Transverse Mercator
       */
      milGridSys?: string;

      /**
       * Indicates the principal type of mission that an operating unit is organized and
       * equipped to perform. The specific usage and enumerations contained in this field
       * may be found in the documentation provided in the referenceDoc field. If
       * referenceDoc not provided, users may consult the data provider.
       */
      msnPrimary?: string;

      /**
       * Indicates the principal specialty type of mission that an operating unit is
       * organized and equipped to perform. The specific usage and enumerations contained
       * in this field may be found in the documentation provided in the referenceDoc
       * field. If referenceDoc not provided, users may consult the data provider.
       */
      msnPrimarySpecialty?: string;

      /**
       * Remarks contain amplifying information for a specific service. The information
       * may contain context and interpretations for consumer use.
       */
      operatingUnitRemarks?: Array<OperatingUnit.OperatingUnitRemark>;

      /**
       * The Degree to which an operating unit is ready to perform the overall
       * operational mission(s) for which it was organized and equipped. The specific
       * usage and enumerations contained in this field may be found in the documentation
       * provided in the referenceDoc field. If referenceDoc not provided, users may
       * consult the data provider.
       */
      operStatus?: string;

      /**
       * An organization such as a corporation, manufacturer, consortium, government,
       * etc. An organization may have parent and child organizations as well as link to
       * a former organization if this org previously existed as another organization.
       */
      organization?: OrganizationAPI.OrganizationFull;

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;

      /**
       * Political subdivision in which the geographic coordinates reside. The specific
       * usage and enumerations contained in this field may be found in the documentation
       * provided in the referenceDoc field. If referenceDoc not provided, users may
       * consult the data provider.
       */
      polSubdiv?: string;

      /**
       * Validity and currency of the data in the record to be used in conjunction with
       * the other elements in the record as defined by SOPs. Values are: A - Active I -
       * Inactive K - Acknowledged L - Local Q - A nominated (NOM) or Data Change Request
       * (DCR) record R - Production reduced by CMD decision W - Working Record.
       */
      recStatus?: string;

      /**
       * The reference documentiation that specifies the usage and enumerations contained
       * in this record. If referenceDoc not provided, users may consult the data
       * provider.
       */
      referenceDoc?: string;

      /**
       * Responsible Producer - Organization that is responsible for the maintenance of
       * the record.
       */
      resProd?: string;

      /**
       * Date on which the data in the record was last reviewed by the responsible
       * analyst for accuracy and currency. This date cannot be greater than the current
       * date.
       */
      reviewDate?: string;

      /**
       * This field contains a value indicating whether the record is a stylized
       * operating unit record (True) or a regular operating unit record (False). A
       * stylized operating unit is a type of operating unit with one set of equipment
       * that can be assigned to one or more superiors. A stylized operating unit is
       * generally useful for lower echelon operating units where the number of operating
       * units and types of equipment are equal for multiple organizations. In lieu of
       * creating unique operating unit records for each operating unit, a template is
       * created for the operating unit and its equipment. This template enables the user
       * to assign the operating unit to multiple organizations.
       */
      stylizedUnit?: boolean;

      /**
       * A standard scheme for symbol coding enabling the transfer, display and use of
       * symbols and graphics among information systems, as per MIL-STD 2525B, and
       * supported by the element AFFILIATION.
       */
      symCode?: string;

      /**
       * An optional identifier for this operating unit that may be composed from items
       * such as the originating organization, allegiance, one-up number, etc.
       */
      unitIdentifier?: string;

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
       * Universal Transverse Mercator (UTM) grid coordinates. Pos. 1-2, UTM Zone Column
       * [01-60 Pos. 3, UTM Zone Row [C-HJ-NP-X] Pos. 4, UTM False Easting [0-9] Pos.
       * 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9] Pos. 10-11, UTM False Northing
       * [0-9][0-9] Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
       */
      utm?: string;

      /**
       * World Aeronautical Chart identifier for the area in which a designated operating
       * unit is located.
       */
      wac?: string;
    }

    export namespace OperatingUnit {
      /**
       * Remarks contain amplifying information for a specific service. The information
       * may contain context and interpretations for consumer use.
       */
      export interface OperatingUnitRemark {
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
         * The ID of the operating unit to which this remark applies.
         */
        idOperatingUnit: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * The text of the remark.
         */
        text: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Unique identifier of the unit remark record from the originating system.
         */
        altRmkId?: string;

        /**
         * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
         * code, defined in the Airfield Suitability and Restriction Report (ASRR).
         */
        code?: string;

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
         * The name of the remark.
         */
        name?: string;

        /**
         * Originating system or organization which produced the data, if different from
         * the source. The origin may be different than the source if the source was a
         * mediating system which forwarded the data on behalf of the origin system. If
         * null, the source may be assumed to be the origin.
         */
        origin?: string;

        /**
         * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
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

    /**
     * Details on a particular Radio Frequency (RF) band, also known as a carrier,
     * which may be in use by any type of Entity for communications or operations.
     */
    export interface RfBand {
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
       * Unique identifier of the parent Entity which uses this band.
       */
      idEntity: string;

      /**
       * RF Band name.
       */
      name: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Name of the band of this RF range (e.g.
       * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
       * details and descriptions of each band name.
       */
      band?: string;

      /**
       * RF Band frequency range bandwidth in Mhz.
       */
      bandwidth?: number;

      /**
       * Angle between the half-power (-3 dB) points of the main lobe of the antenna, in
       * degrees.
       */
      beamwidth?: number;

      /**
       * Center frequency of RF frequency range, if applicable, in Mhz.
       */
      centerFreq?: number;

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
       * RF Range edge gain, in dBi.
       */
      edgeGain?: number;

      /**
       * EIRP is defined as the RMS power input in decibel watts required to a lossless
       * half-wave dipole antenna to give the same maximum power density far from the
       * antenna as the actual transmitter. It is equal to the power input to the
       * transmitter's antenna multiplied by the antenna gain relative to a half-wave
       * dipole. Effective radiated power and effective isotropic radiated power both
       * measure the amount of power a radio transmitter and antenna (or other source of
       * electromagnetic waves) radiates in a specific direction: in the direction of
       * maximum signal strength (the "main lobe") of its radiation pattern.
       */
      eirp?: number;

      /**
       * Effective Radiated Power (ERP) is the total power in decibel watts radiated by
       * an actual antenna relative to a half-wave dipole rather than a theoretical
       * isotropic antenna. A half-wave dipole has a gain of 2.15 dB compared to an
       * isotropic antenna. EIRP(dB) = ERP (dB)+2.15 dB or EIRP (W) = 1.64\*ERP(W).
       * Effective radiated power and effective isotropic radiated power both measure the
       * amount of power a radio transmitter and antenna (or other source of
       * electromagnetic waves) radiates in a specific direction: in the direction of
       * maximum signal strength (the "main lobe") of its radiation pattern.
       */
      erp?: number;

      /**
       * End/maximum of transmit RF frequency range, if applicable, in Mhz.
       */
      freqMax?: number;

      /**
       * Start/minimum of transmit RF frequency range, if applicable, in Mhz.
       */
      freqMin?: number;

      /**
       * RF Band mode (e.g. TX, RX).
       */
      mode?: 'TX' | 'RX';

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
       * RF Range maximum gain, in dBi.
       */
      peakGain?: number;

      /**
       * Transponder polarization e.g. H - (Horizontally Polarized) Perpendicular to
       * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
       * (Left Hand Circularly Polarized) Rotating left relative to the Earth's surface,
       * R - (Right Hand Circularly Polarized) Rotating right relative to the Earth's
       * surface.
       */
      polarization?: 'H' | 'V' | 'R' | 'L';

      /**
       * Purpose or use of the RF Band -- COMM = communications, TTC =
       * Telemetry/Tracking/Control, OPS = Operations, OTHER = Other).
       */
      purpose?: 'COMM' | 'TTC' | 'OPS' | 'OTHER';

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
     * Status for a particular Entity. An entity may have multiple status records
     * collected by various sources.
     */
    export interface StatusCollection {
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
       * Unique identifier of the parent entity.
       */
      idEntity: string;

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
       * The declassification date of this data, in ISO 8601 UTC format.
       */
      declassificationDate?: string;

      /**
       * Declassification string of this data.
       */
      declassificationString?: string;

      /**
       * The sources or SCG references from which the classification of this data is
       * derived.
       */
      derivedFrom?: string;

      /**
       * Comments describing the status creation and or updates to an entity.
       */
      notes?: string;

      /**
       * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
       */
      opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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
       * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
       * ACTIVE, STANDBY).
       */
      state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

      subStatusCollection?: Array<StatusCollection.SubStatusCollection>;

      /**
       * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
       */
      sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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

    export namespace StatusCollection {
      /**
       * Additional sub-system or capability status for the parent entity.
       */
      export interface SubStatusCollection {
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
         * Descriptions and/or comments associated with the sub-status.
         */
        notes: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Status of the sub-system/capability, e.g. FMC, NMC, PMC, UNK.
         */
        status: 'FMC' | 'NMC' | 'PMC' | 'UNK';

        /**
         * Id of the parent status.
         */
        statusId: string;

        /**
         * Parent entity's sub-system or capability status: mwCap, mdCap, ssCap, etc.
         */
        type: 'mwCap' | 'ssCap' | 'mdCap';

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
         * Time the row was updated in the database, auto-populated by the system.
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

  parameters?: Array<SensorQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace SensorQueryhelpResponse {
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
      location?: LocationAPI.LocationFull;

      /**
       * Model object representing on-orbit objects or satellites in the system.
       */
      onOrbit?: Entity.OnOrbit;

      /**
       * Model representation of a unit or organization which operates or controls a
       * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
       * belong to an organization.
       */
      operatingUnit?: Entity.OperatingUnit;

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
      rfBands?: Array<Entity.RfBand>;

      /**
       * Read-only collection of statuses which can be collected by multiple sources.
       */
      statusCollection?: Array<Entity.StatusCollection>;

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
        antennas?: Array<OnOrbit.Antenna>;

        /**
         * Read-only collection of batteries on this on-orbit object.
         */
        batteries?: Array<OnOrbit.Battery>;

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
        onorbitDetails?: Array<OnOrbit.OnorbitDetail>;

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
        solarArrays?: Array<OnOrbit.SolarArray>;

        /**
         * Read-only collection of thrusters (engines) on this on-orbit object.
         */
        thrusters?: Array<OnOrbit.Thruster>;

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

      export namespace OnOrbit {
        export interface Antenna {
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
           * ID of the antenna.
           */
          idAntenna: string;

          /**
           * ID of the on-orbit object.
           */
          idOnOrbit: string;

          /**
           * Source of the data.
           */
          source: string;

          /**
           * Unique identifier of the record, auto-generated by the system.
           */
          id?: string;

          /**
           * Model representation of information on on-orbit/spacecraft communication
           * antennas. A spacecraft may have multiple antennas and each antenna can have
           * multiple 'details' records compiled by different sources.
           */
          antenna?: AntennasAPI.AntennaFull;

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
           * Time the row was last updated in the database, auto-populated by the system.
           */
          updatedAt?: string;

          /**
           * Application user who updated the row in the database, auto-populated by the
           * system.
           */
          updatedBy?: string;
        }

        export interface Battery {
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
           * ID of the battery.
           */
          idBattery: string;

          /**
           * ID of the on-orbit object.
           */
          idOnOrbit: string;

          /**
           * Source of the data.
           */
          source: string;

          /**
           * Unique identifier of the record, auto-generated by the system.
           */
          id?: string;

          /**
           * Model representation of specific spacecraft battery types.
           */
          battery?: BatteriesAPI.BatteryFull;

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
           * The number of batteries on the spacecraft of the type identified by idBattery.
           */
          quantity?: number;

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
         * Contains details of the OnOrbit object.
         */
        export interface OnorbitDetail {
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
           * UUID of the parent Onorbit record.
           */
          idOnOrbit: string;

          /**
           * Source of the data.
           */
          source: string;

          /**
           * Unique identifier of the record, auto-generated by the system.
           */
          id?: string;

          /**
           * Mass of fuel and disposables at launch time in kilograms.
           */
          additionalMass?: number;

          /**
           * The radius used for long-term debris environment projection analyses that is not
           * as conservative as COLA Radius, in meters.
           */
          adeptRadius?: number;

          /**
           * The total beginning of life delta V of the spacecraft, in meters per second.
           */
          bolDeltaV?: number;

          /**
           * Spacecraft beginning of life fuel mass, in orbit, in kilograms.
           */
          bolFuelMass?: number;

          /**
           * Average cross sectional area of the bus in meters squared.
           */
          busCrossSection?: number;

          /**
           * Type of the bus on the spacecraft.
           */
          busType?: string;

          /**
           * Maximum dimension of the box circumscribing the spacecraft (d = sqrt(a*a + b*b +
           * c\*c) where a is the tip-to-tip dimension, b and c are perpendicular to that.)
           * in meters.
           */
          colaRadius?: number;

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
           * Average cross sectional area in meters squared.
           */
          crossSection?: number;

          /**
           * The estimated total current mass of the spacecraft, in kilograms.
           */
          currentMass?: number;

          /**
           * The 1-sigma uncertainty of the total spacecraft delta V, in meters per second.
           */
          deltaVUnc?: number;

          /**
           * Array of the estimated mass of each deployable object, in kilograms. Must
           * contain the same number of elements as the value of numDeployable.
           */
          depEstMasses?: Array<number>;

          /**
           * Array of the 1-sigma uncertainty of the mass for each deployable object, in
           * kilograms. Must contain the same number of elements as the value of
           * numDeployable.
           */
          depMassUncs?: Array<number>;

          /**
           * Array of satellite deployable objects. Must contain the same number of elements
           * as the value of numDeployable.
           */
          depNames?: Array<string>;

          /**
           * GEO drift rate, if applicable in degrees per day.
           */
          driftRate?: number;

          /**
           * Spacecraft dry mass (without fuel or disposables) in kilograms.
           */
          dryMass?: number;

          /**
           * Estimated maximum burn duration for the object, in seconds.
           */
          estDeltaVDuration?: number;

          /**
           * Estimated remaining fuel for the object in kilograms.
           */
          fuelRemaining?: number;

          /**
           * GEO slot if applicable, in degrees. -180 (West of Prime Meridian) to 180 degrees
           * (East of Prime Meridian). Prime Meridian is 0.
           */
          geoSlot?: number;

          /**
           * The name of the source who last provided an observation for this idOnOrbit.
           */
          lastObSource?: string;

          /**
           * Time of last reported observation for this object in ISO 8601 UTC with
           * microsecond precision.
           */
          lastObTime?: string;

          /**
           * Nominal mass of spacecraft and fuel at launch time, in kilograms.
           */
          launchMass?: number;

          /**
           * Maximum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
           */
          launchMassMax?: number;

          /**
           * Minimum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
           */
          launchMassMin?: number;

          /**
           * Boolean indicating whether a spacecraft is maneuverable. Note that a spacecraft
           * may have propulsion capability but may not be maneuverable due to lack of fuel,
           * anomalous condition, or other operational constraints.
           */
          maneuverable?: boolean;

          /**
           * Maximum delta V available for this on-orbit spacecraft, in meters per second.
           */
          maxDeltaV?: number;

          /**
           * Maximum dimension across the spacecraft (e.g., tip-to-tip across the solar panel
           * arrays) in meters.
           */
          maxRadius?: number;

          /**
           * Array of the type of missions the spacecraft performs. Must contain the same
           * number of elements as the value of numMission.
           */
          missionTypes?: Array<string>;

          /**
           * The number of sub-satellites or deployable objects on the spacecraft.
           */
          numDeployable?: number;

          /**
           * The number of distinct missions the spacecraft performs.
           */
          numMission?: number;

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
           * Current/latest radar cross section in meters squared.
           */
          rcs?: number;

          /**
           * Maximum radar cross section in meters squared.
           */
          rcsMax?: number;

          /**
           * Mean radar cross section in meters squared.
           */
          rcsMean?: number;

          /**
           * Minimum radar cross section in meters squared.
           */
          rcsMin?: number;

          /**
           * The reference source, sources, or URL from which the data in this record was
           * obtained.
           */
          refSource?: string;

          /**
           * Spacecraft deployed area of solar array in meters squared.
           */
          solarArrayArea?: number;

          /**
           * The 1-sigma uncertainty of the total spacecraft mass, in kilograms.
           */
          totalMassUnc?: number;

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
           * Current/latest visual magnitude in M.
           */
          vismag?: number;

          /**
           * Maximum visual magnitude in M.
           */
          vismagMax?: number;

          /**
           * Mean visual magnitude in M.
           */
          vismagMean?: number;

          /**
           * Minimum visual magnitude in M.
           */
          vismagMin?: number;
        }

        export interface SolarArray {
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
           * ID of the on-orbit object.
           */
          idOnOrbit: string;

          /**
           * ID of the SolarArray.
           */
          idSolarArray: string;

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
           * The number of solar arrays on the spacecraft of the type identified by
           * idSolarArray.
           */
          quantity?: number;

          /**
           * Model representation of information on on-orbit/spacecraft solar arrays. A
           * spacecraft may have multiple solar arrays and each solar array can have multiple
           * 'details' records compiled by different sources.
           */
          solarArray?: SolarArray.SolarArray;

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

        export namespace SolarArray {
          /**
           * Model representation of information on on-orbit/spacecraft solar arrays. A
           * spacecraft may have multiple solar arrays and each solar array can have multiple
           * 'details' records compiled by different sources.
           */
          export interface SolarArray {
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
             * Solar Array name.
             */
            name: string;

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
             * Read-only collection of additional SolarArrayDetails by various sources for this
             * organization, ignored on create/update. These details must be created separately
             * via the /udl/solararraydetails operations.
             */
            solarArrayDetails?: Array<SolarArrayDetailsAPI.SolarArrayDetailsFull>;

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

        export interface Thruster {
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
           * ID of the Engine.
           */
          idEngine: string;

          /**
           * ID of the on-orbit object.
           */
          idOnOrbit: string;

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
           * Known launch vehicle engines and their performance characteristics and limits. A
           * launch vehicle has 1 to many engines per stage.
           */
          engine?: EnginesAPI.Engine;

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
           * The number of engines/thrusters on the spacecraft of the type identified by
           * idEngine.
           */
          quantity?: number;

          /**
           * The type of thruster associated with this record (e.g. LAE, Hydrazine REA,
           * etc.).
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

      /**
       * Model representation of a unit or organization which operates or controls a
       * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
       * belong to an organization.
       */
      export interface OperatingUnit {
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
         * Name of the operating unit.
         */
        name: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
         * coordinates reside.
         */
        airDefArea?: string;

        /**
         * The DoD Standard country code designator for the country or political entity to
         * which the operating unit owes its allegiance. This field will be set to "OTHR"
         * if the source value does not match a UDL country code value (ISO-3166-ALPHA-2).
         */
        allegiance?: string;

        /**
         * Specifies an alternate allegiance code if the data provider code is not part of
         * an official Country Code standard such as ISO-3166 or FIPS. This field will be
         * set to the value provided by the source and should be used for all Queries
         * specifying allegiance.
         */
        altAllegiance?: string;

        /**
         * Specifies an alternate country code if the data provider code is not part of an
         * official Country Code standard such as ISO-3166 or FIPS. This field will be set
         * to the value provided by the source and should be used for all Queries
         * specifying a Country Code.
         */
        altCountryCode?: string;

        /**
         * Unique identifier of the operating unit record from the originating system.
         */
        altOperatingUnitId?: string;

        /**
         * Indicates the importance of the operating unit to the OES or MIR system. This
         * data element is restricted to update by DIA (DB-4). Valid values are: 0 - Does
         * not meet criteria above 1 - Primary importance to system 2 - Secondary
         * importance to system 3 - Tertiary importance to system O - Other. Explain in
         * Remarks.
         */
        classRating?: string;

        /**
         * The physical manner of being or state of existence of the operating unit. A
         * physical condition that must be considered in the determining of a course of
         * action. The specific usage and enumerations contained in this field may be found
         * in the documentation provided in the referenceDoc field. If referenceDoc not
         * provided, users may consult the data provider.
         */
        condition?: string;

        /**
         * Availability of the operating unit relative to its condition. Indicates the
         * reason the operating unit is not fully operational. The specific usage and
         * enumerations contained in this field may be found in the documentation provided
         * in the referenceDoc field. If referenceDoc not provided, users may consult the
         * data provider.
         */
        conditionAvail?: string;

        /**
         * Indicates any of the magnitudes that serve to define the position of a point by
         * reference to a fixed figure, system of lines, etc.
         *
         * Pos. 1-2. Latitude Degrees [00-90]
         *
         * Pos. 3-4. Latitude Minutes [00-59]
         *
         * Pos. 5-6. Latitude Seconds [00-59]
         *
         * Pos. 7-9. Latitude Thousandths Of Seconds [000-999]
         *
         * Pos. 10. Latitude Hemisphere [NS]
         *
         * Pos. 11-13. Longitude Degrees [00-180]
         *
         * Pos. 14-15. Longitude Minutes [00-59]
         *
         * Pos. 16-17. Longitude Seconds [00-59]
         *
         * Pos. 18-20. Longitude Thousandths Of Seconds [000-999]
         *
         * Pos. 21. Longitude Hemisphere [EW]
         *
         * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]
         */
        coord?: string;

        /**
         * A mathematical model of the earth used to calculate coordinates on a map. US
         * Forces use the World Geodetic System 1984 (WGS 84), but also use maps by allied
         * countries with local datums. The datum must be specified to ensure accuracy of
         * coordinates. The specific usage and enumerations contained in this field may be
         * found in the documentation provided in the referenceDoc field. If referenceDoc
         * not provided, users may consult the data provider.
         */
        coordDatum?: string;

        /**
         * Indicates the plus or minus error assessed against the method used to derive the
         * coordinate.
         */
        coordDerivAcc?: number;

        /**
         * The DoD Standard country code designator for the country or political entity to
         * which the operating unit geographic coordinates reside . This field will be set
         * to "OTHR" if the source value does not match a UDL country code value
         * (ISO-3166-ALPHA-2).
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
         * A code describing the amount of operating unit participation in a deployment.
         * The specific usage and enumerations contained in this field may be found in the
         * documentation provided in the referenceDoc field. If referenceDoc not provided,
         * users may consult the data provider.
         */
        deployStatus?: string;

        /**
         * Description of the operating unit.
         */
        description?: string;

        /**
         * Combat status of a divisional or equivalent operating unit. Currently, this data
         * element applies only to operating units of the Former Soviet Union. The specific
         * usage and enumerations contained in this field may be found in the documentation
         * provided in the referenceDoc field. If referenceDoc not provided, users may
         * consult the data provider.
         */
        divCat?: string;

        /**
         * Organizational level of the operating unit. The specific usage and enumerations
         * contained in this field may be found in the documentation provided in the
         * referenceDoc field. If referenceDoc not provided, users may consult the data
         * provider.
         */
        echelon?: string;

        /**
         * Indicates the major group or level to which an echelon belongs. The specific
         * usage and enumerations contained in this field may be found in the documentation
         * provided in the referenceDoc field. If referenceDoc not provided, users may
         * consult the data provider.
         */
        echelonTier?: string;

        /**
         * Ground elevation of the geographic coordinates referenced to (above or below)
         * Mean Sea Level (MSL) vertical datum.
         */
        elevMsl?: number;

        /**
         * Indicates the confidence level expressed as a percent that a specific geometric
         * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
         * to within a specified vertical accuracy.
         */
        elevMslConfLvl?: number;

        /**
         * Indicates the plus or minus error assessed against the method used to derive the
         * elevation.
         */
        elevMslDerivAcc?: number;

        /**
         * The Intelligence Confidence Level or the Reliability/degree of confidence that
         * the analyst has assigned to the data within this record. The numerical range is
         * from 1 to 9 with 1 representing the highest confidence level.
         */
        eval?: number;

        /**
         * The country code of the observed flag flown.
         */
        flagFlown?: string;

        /**
         * Naval fleet to which an operating unit is assigned. The specific usage and
         * enumerations contained in this field may be found in the documentation provided
         * in the referenceDoc field. If referenceDoc not provided, users may consult the
         * data provider.
         */
        fleetId?: string;

        /**
         * An aggregation of military units within a single service (i.e., ARMY, AIR FORCE,
         * etc.) which operates under a single authority to accomplish a common mission.
         * The specific usage and enumerations contained in this field may be found in the
         * documentation provided in the referenceDoc field. If referenceDoc not provided,
         * users may consult the data provider.
         */
        force?: string;

        /**
         * The specific name for a given force. For example, Force = ADF (Air Defense
         * Force) and Force Name = Army Air Defense Force.
         */
        forceName?: string;

        /**
         * Functional Production Area (FPA) under the Shared Production Program (SPP).
         * Producers are defined per country per FPA. The specific usage and enumerations
         * contained in this field may be found in the documentation provided in the
         * referenceDoc field. If referenceDoc not provided, users may consult the data
         * provider.
         */
        fpa?: string;

        /**
         * Principal combat-related role that an operating unit is organized, structured
         * and equipped to perform. Or, the specialized military or paramilitary branch in
         * which an individual serves, their specialization. The specific usage and
         * enumerations contained in this field may be found in the documentation provided
         * in the referenceDoc field. If referenceDoc not provided, users may consult the
         * data provider.
         */
        functRole?: string;

        /**
         * The distance between Mean Sea Level and a referenced ellipsoid.
         */
        geoidalMslSep?: number;

        /**
         * Unique identifier of the contact for this operating unit.
         */
        idContact?: string;

        /**
         * Estimated identity of the Site (ASSUMED FRIEND, FRIEND, HOSTILE, FAKER, JOKER,
         * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
         *
         * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
         * behavior, and/or origin.
         *
         * FRIEND: Track object supporting friendly forces and belonging to a declared
         * friendly nation or entity.
         *
         * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
         * deemed to contribute to a threat to friendly forces or their mission due to its
         * behavior, characteristics, nationality, or origin.
         *
         * FAKER: Friendly track, object, or entity acting as an exercise hostile.
         *
         * JOKER: Friendly track, object, or entity acting as an exercise suspect.
         *
         * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
         * origin indicate that it is neither supporting nor opposing friendly forces or
         * their mission.
         *
         * PENDING: Track object which has not been evaluated.
         *
         * SUSPECT: Track object deemed potentially hostile due to the object
         * characteristics, behavior, nationality, and/or origin.
         *
         * UNKNOWN: Track object which has been evaluated and does not meet criteria for
         * any standard identity.
         */
        ident?: string;

        /**
         * Unique identifier of the location record for this operating unit.
         */
        idLocation?: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        idOperatingUnit?: string;

        /**
         * Unique identifier of the organization record for this operating unit.
         */
        idOrganization?: string;

        /**
         * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
         * south of equator).
         */
        lat?: number;

        /**
         * Model representation of a location, which is a specific fixed point on the earth
         * and is used to denote the locations of fixed sensors, operating units, etc.
         */
        location?: LocationAPI.LocationFull;

        /**
         * Location name for the coordinates.
         */
        locName?: string;

        /**
         * Indicates the reason that the operating unit is at that location. The specific
         * usage and enumerations contained in this field may be found in the documentation
         * provided in the referenceDoc field. If referenceDoc not provided, users may
         * consult the data provider.
         */
        locReason?: string;

        /**
         * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
         * values west of Prime Meridian).
         */
        lon?: number;

        /**
         * This field contains a value indicating whether the record is a master unit
         * record (True) or a detail record (False). Master records contain basic
         * information that does not change over time for each unit that has been selected
         * to be projected.
         */
        masterUnit?: boolean;

        /**
         * The Military Grid Reference System is the geocoordinate standard used by NATO
         * militaries for locating points on Earth. The MGRS is derived from the Universal
         * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
         * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
         * geocode for the entire Earth. Example of an milgrid coordinate, or grid
         * reference, would be 4QFJ12345678, which consists of three parts: 4Q (grid zone
         * designator, GZD) FJ (the 100,000-meter square identifier) 12345678 (numerical
         * location; easting is 1234 and northing is 5678, in this case specifying a
         * location with 10 m resolution).
         */
        milGrid?: string;

        /**
         * Indicates the grid system used in the development of the milGrid coordinates.
         * Values are:
         *
         * UPS - Universal Polar System
         *
         * UTM - Universal Transverse Mercator
         */
        milGridSys?: string;

        /**
         * Indicates the principal type of mission that an operating unit is organized and
         * equipped to perform. The specific usage and enumerations contained in this field
         * may be found in the documentation provided in the referenceDoc field. If
         * referenceDoc not provided, users may consult the data provider.
         */
        msnPrimary?: string;

        /**
         * Indicates the principal specialty type of mission that an operating unit is
         * organized and equipped to perform. The specific usage and enumerations contained
         * in this field may be found in the documentation provided in the referenceDoc
         * field. If referenceDoc not provided, users may consult the data provider.
         */
        msnPrimarySpecialty?: string;

        /**
         * Remarks contain amplifying information for a specific service. The information
         * may contain context and interpretations for consumer use.
         */
        operatingUnitRemarks?: Array<OperatingUnit.OperatingUnitRemark>;

        /**
         * The Degree to which an operating unit is ready to perform the overall
         * operational mission(s) for which it was organized and equipped. The specific
         * usage and enumerations contained in this field may be found in the documentation
         * provided in the referenceDoc field. If referenceDoc not provided, users may
         * consult the data provider.
         */
        operStatus?: string;

        /**
         * An organization such as a corporation, manufacturer, consortium, government,
         * etc. An organization may have parent and child organizations as well as link to
         * a former organization if this org previously existed as another organization.
         */
        organization?: OrganizationAPI.OrganizationFull;

        /**
         * Originating system or organization which produced the data, if different from
         * the source. The origin may be different than the source if the source was a
         * mediating system which forwarded the data on behalf of the origin system. If
         * null, the source may be assumed to be the origin.
         */
        origin?: string;

        /**
         * Political subdivision in which the geographic coordinates reside. The specific
         * usage and enumerations contained in this field may be found in the documentation
         * provided in the referenceDoc field. If referenceDoc not provided, users may
         * consult the data provider.
         */
        polSubdiv?: string;

        /**
         * Validity and currency of the data in the record to be used in conjunction with
         * the other elements in the record as defined by SOPs. Values are: A - Active I -
         * Inactive K - Acknowledged L - Local Q - A nominated (NOM) or Data Change Request
         * (DCR) record R - Production reduced by CMD decision W - Working Record.
         */
        recStatus?: string;

        /**
         * The reference documentiation that specifies the usage and enumerations contained
         * in this record. If referenceDoc not provided, users may consult the data
         * provider.
         */
        referenceDoc?: string;

        /**
         * Responsible Producer - Organization that is responsible for the maintenance of
         * the record.
         */
        resProd?: string;

        /**
         * Date on which the data in the record was last reviewed by the responsible
         * analyst for accuracy and currency. This date cannot be greater than the current
         * date.
         */
        reviewDate?: string;

        /**
         * This field contains a value indicating whether the record is a stylized
         * operating unit record (True) or a regular operating unit record (False). A
         * stylized operating unit is a type of operating unit with one set of equipment
         * that can be assigned to one or more superiors. A stylized operating unit is
         * generally useful for lower echelon operating units where the number of operating
         * units and types of equipment are equal for multiple organizations. In lieu of
         * creating unique operating unit records for each operating unit, a template is
         * created for the operating unit and its equipment. This template enables the user
         * to assign the operating unit to multiple organizations.
         */
        stylizedUnit?: boolean;

        /**
         * A standard scheme for symbol coding enabling the transfer, display and use of
         * symbols and graphics among information systems, as per MIL-STD 2525B, and
         * supported by the element AFFILIATION.
         */
        symCode?: string;

        /**
         * An optional identifier for this operating unit that may be composed from items
         * such as the originating organization, allegiance, one-up number, etc.
         */
        unitIdentifier?: string;

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
         * Universal Transverse Mercator (UTM) grid coordinates. Pos. 1-2, UTM Zone Column
         * [01-60 Pos. 3, UTM Zone Row [C-HJ-NP-X] Pos. 4, UTM False Easting [0-9] Pos.
         * 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9] Pos. 10-11, UTM False Northing
         * [0-9][0-9] Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
         */
        utm?: string;

        /**
         * World Aeronautical Chart identifier for the area in which a designated operating
         * unit is located.
         */
        wac?: string;
      }

      export namespace OperatingUnit {
        /**
         * Remarks contain amplifying information for a specific service. The information
         * may contain context and interpretations for consumer use.
         */
        export interface OperatingUnitRemark {
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
           * The ID of the operating unit to which this remark applies.
           */
          idOperatingUnit: string;

          /**
           * Source of the data.
           */
          source: string;

          /**
           * The text of the remark.
           */
          text: string;

          /**
           * Unique identifier of the record, auto-generated by the system.
           */
          id?: string;

          /**
           * Unique identifier of the unit remark record from the originating system.
           */
          altRmkId?: string;

          /**
           * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
           * code, defined in the Airfield Suitability and Restriction Report (ASRR).
           */
          code?: string;

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
           * The name of the remark.
           */
          name?: string;

          /**
           * Originating system or organization which produced the data, if different from
           * the source. The origin may be different than the source if the source was a
           * mediating system which forwarded the data on behalf of the origin system. If
           * null, the source may be assumed to be the origin.
           */
          origin?: string;

          /**
           * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
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

      /**
       * Details on a particular Radio Frequency (RF) band, also known as a carrier,
       * which may be in use by any type of Entity for communications or operations.
       */
      export interface RfBand {
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
         * Unique identifier of the parent Entity which uses this band.
         */
        idEntity: string;

        /**
         * RF Band name.
         */
        name: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Name of the band of this RF range (e.g.
         * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
         * details and descriptions of each band name.
         */
        band?: string;

        /**
         * RF Band frequency range bandwidth in Mhz.
         */
        bandwidth?: number;

        /**
         * Angle between the half-power (-3 dB) points of the main lobe of the antenna, in
         * degrees.
         */
        beamwidth?: number;

        /**
         * Center frequency of RF frequency range, if applicable, in Mhz.
         */
        centerFreq?: number;

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
         * RF Range edge gain, in dBi.
         */
        edgeGain?: number;

        /**
         * EIRP is defined as the RMS power input in decibel watts required to a lossless
         * half-wave dipole antenna to give the same maximum power density far from the
         * antenna as the actual transmitter. It is equal to the power input to the
         * transmitter's antenna multiplied by the antenna gain relative to a half-wave
         * dipole. Effective radiated power and effective isotropic radiated power both
         * measure the amount of power a radio transmitter and antenna (or other source of
         * electromagnetic waves) radiates in a specific direction: in the direction of
         * maximum signal strength (the "main lobe") of its radiation pattern.
         */
        eirp?: number;

        /**
         * Effective Radiated Power (ERP) is the total power in decibel watts radiated by
         * an actual antenna relative to a half-wave dipole rather than a theoretical
         * isotropic antenna. A half-wave dipole has a gain of 2.15 dB compared to an
         * isotropic antenna. EIRP(dB) = ERP (dB)+2.15 dB or EIRP (W) = 1.64\*ERP(W).
         * Effective radiated power and effective isotropic radiated power both measure the
         * amount of power a radio transmitter and antenna (or other source of
         * electromagnetic waves) radiates in a specific direction: in the direction of
         * maximum signal strength (the "main lobe") of its radiation pattern.
         */
        erp?: number;

        /**
         * End/maximum of transmit RF frequency range, if applicable, in Mhz.
         */
        freqMax?: number;

        /**
         * Start/minimum of transmit RF frequency range, if applicable, in Mhz.
         */
        freqMin?: number;

        /**
         * RF Band mode (e.g. TX, RX).
         */
        mode?: 'TX' | 'RX';

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
         * RF Range maximum gain, in dBi.
         */
        peakGain?: number;

        /**
         * Transponder polarization e.g. H - (Horizontally Polarized) Perpendicular to
         * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
         * (Left Hand Circularly Polarized) Rotating left relative to the Earth's surface,
         * R - (Right Hand Circularly Polarized) Rotating right relative to the Earth's
         * surface.
         */
        polarization?: 'H' | 'V' | 'R' | 'L';

        /**
         * Purpose or use of the RF Band -- COMM = communications, TTC =
         * Telemetry/Tracking/Control, OPS = Operations, OTHER = Other).
         */
        purpose?: 'COMM' | 'TTC' | 'OPS' | 'OTHER';

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
       * Status for a particular Entity. An entity may have multiple status records
       * collected by various sources.
       */
      export interface StatusCollection {
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
         * Unique identifier of the parent entity.
         */
        idEntity: string;

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
         * The declassification date of this data, in ISO 8601 UTC format.
         */
        declassificationDate?: string;

        /**
         * Declassification string of this data.
         */
        declassificationString?: string;

        /**
         * The sources or SCG references from which the classification of this data is
         * derived.
         */
        derivedFrom?: string;

        /**
         * Comments describing the status creation and or updates to an entity.
         */
        notes?: string;

        /**
         * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
         */
        opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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
         * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
         * ACTIVE, STANDBY).
         */
        state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

        subStatusCollection?: Array<StatusCollection.SubStatusCollection>;

        /**
         * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
         */
        sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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

      export namespace StatusCollection {
        /**
         * Additional sub-system or capability status for the parent entity.
         */
        export interface SubStatusCollection {
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
           * Descriptions and/or comments associated with the sub-status.
           */
          notes: string;

          /**
           * Source of the data.
           */
          source: string;

          /**
           * Status of the sub-system/capability, e.g. FMC, NMC, PMC, UNK.
           */
          status: 'FMC' | 'NMC' | 'PMC' | 'UNK';

          /**
           * Id of the parent status.
           */
          statusId: string;

          /**
           * Parent entity's sub-system or capability status: mwCap, mdCap, ssCap, etc.
           */
          type: 'mwCap' | 'ssCap' | 'mdCap';

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
           * Time the row was updated in the database, auto-populated by the system.
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
