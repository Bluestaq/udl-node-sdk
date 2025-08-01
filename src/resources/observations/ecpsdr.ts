// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EcpsdrResource extends APIResource {
  /**
   * Service operation to take a single ECPSDR as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.observations.ecpsdr.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   msgTime: '2018-01-01T16:00:00.123Z',
   *   source: 'Bluestaq',
   *   type: 'STANDARD',
   * });
   * ```
   */
  create(body: EcpsdrCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/ecpsdr', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single ECPSDR by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const ecpsdr = await client.observations.ecpsdr.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: EcpsdrRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Ecpsdr> {
    return this._client.get(path`/udl/ecpsdr/${id}`, { query, ...options });
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
   * for await (const ecpsdrAbridged of client.observations.ecpsdr.list(
   *   { msgTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EcpsdrListParams,
    options?: RequestOptions,
  ): PagePromise<EcpsdrAbridgedsOffsetPage, EcpsdrAbridged> {
    return this._client.getAPIList('/udl/ecpsdr', OffsetPage<EcpsdrAbridged>, { query, ...options });
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
   * const response = await client.observations.ecpsdr.count({
   *   msgTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: EcpsdrCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/ecpsdr/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * ECPSDR as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.observations.ecpsdr.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       msgTime: '2018-01-01T16:00:00.123Z',
   *       source: 'Bluestaq',
   *       type: 'STANDARD',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: EcpsdrCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/ecpsdr/createBulk', {
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
   *   await client.observations.ecpsdr.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<EcpsdrQueryHelpResponse> {
    return this._client.get('/udl/ecpsdr/queryhelp', options);
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
   * const ecpsdrs = await client.observations.ecpsdr.tuple({
   *   columns: 'columns',
   *   msgTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: EcpsdrTupleParams, options?: RequestOptions): APIPromise<EcpsdrTupleResponse> {
    return this._client.get('/udl/ecpsdr/tuple', { query, ...options });
  }
}

export type EcpsdrAbridgedsOffsetPage = OffsetPage<EcpsdrAbridged>;

/**
 * Supports Sensor Data Records (SDR) from space-borne Energetic Charged Particle
 * (ECP) Sensors. SDR contains sensor status telemetry and raw dosimeter
 * measurements of the space environment.
 */
export interface Ecpsdr {
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
   * Time stamp of time packet receipt on ground, in ISO 8601 UTC format with
   * millisecond precision.
   */
  msgTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of data associated with this record (STANDARD, TRANSIENT).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Internal 5V current monitor for analog supply line. This is sensor status
   * telemetry. See vRef for conversion factor to Volts.
   */
  asl5VCurrMon?: number;

  /**
   * CDS Charge Plate voltage monitor. See vRef for conversion factor to Volts.
   */
  cdsPlateVMon?: number;

  /**
   * CDS reference voltage monitor. See vRef for conversion factor to Volts.
   */
  cdsRefVMon?: number;

  /**
   * CDS Threshold setting for ESD detection threshold. The CDS Threshold is the
   * adjustable sensitivity of recording/digitizing an ESD as a transient packet.
   */
  cdsThreshold?: number;

  /**
   * CDS throttle number of seconds between CDS transient capture readouts.
   */
  cdsThrottle?: number;

  /**
   * Two byte CRC-16-CCITT checksum (ordered as first byte, second byte).
   */
  checksum?: number;

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
   * Unitless dosimeter detector bias for MedLET and HiLET. MedLET (Linear Energy
   * Transfer) and HiLET subsensors detect particles above LET thresholds, 300keV and
   * 1MeV, respectively.
   */
  dosBias?: number;

  /**
   * Internal 5V current monitor for digital supply line. This is sensor status
   * telemetry. See vRef for conversion factor to Volts.
   */
  dsl5VCurrMon?: number;

  /**
   * Number of ESD triggers, high byte of 2-byte counter.
   */
  esdTrigCountH?: number;

  /**
   * Number of ESD triggers, low byte of 2-byte counter.
   */
  esdTrigCountL?: number;

  /**
   * HiLET dosimeter low range output. Low byte of scaler (HiLET) dosimeter output.
   */
  hiLetL?: number;

  /**
   * Unitless HiLET dosimeter medium range output. Medium byte of (HiLET) dosimeter
   * output.
   */
  hiLetM?: number;

  /**
   * Unique identifier of the on-orbit satellite hosting the sensor.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * LowLET dosimeter low range output. Low byte of (LowLET) dosimeter output.
   */
  lowLetL?: number;

  /**
   * LowLET dosimeter medium range output. Medium byte of (LowLET) dosimeter output.
   */
  lowLetM?: number;

  /**
   * MedLET1 dosimeter low range output. Low byte of the 1st (MedLET) dosimeter
   * output.
   */
  medLet1L?: number;

  /**
   * MedLET1 dosimeter medium range output. Medium byte of the 1st (MedLET) dosimeter
   * output.
   */
  medLet1M?: number;

  /**
   * MedLET2 dosimeter low range output. Low byte of the 2nd (MedLET) dosimeter
   * output.
   */
  medLet2L?: number;

  /**
   * MedLET2 dosimeter medium range output. Medium byte of the 2nd (MedLET) dosimeter
   * output.
   */
  medLet2M?: number;

  /**
   * MedLET3 dosimeter low range output. Low byte of the 3rd (MedLET) dosimeter
   * output.
   */
  medLet3L?: number;

  /**
   * MedLET3 dosimeter medium range output. Medium byte of the 3rd (MedLET) dosimeter
   * output.
   */
  medLet3M?: number;

  /**
   * MedLET4 dosimeter low range output. Low byte of the 4th (MedLET) dosimeter
   * output.
   */
  medLet4L?: number;

  /**
   * MedLET4 dosimeter medium range output. Medium byte of the 4th (MedLET) dosimeter
   * output.
   */
  medLet4M?: number;

  /**
   * Unitless sensor mounting plate temperature.
   */
  mpTemp?: number;

  /**
   * Time of the observation, in ISO 8601 UTC format with millisecond precision.
   */
  obTime?: string;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.OnorbitFull;

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
   * hosting the sensor. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the record source to indicate the sensor
   * identifier which produced this data. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Photodiode 1 signal level.
   */
  pd1SigLev?: number;

  /**
   * Photodiode 2 signal level.
   */
  pd2SigLev?: number;

  /**
   * Power supply temperature monitor. This is sensor status telemetry.
   */
  psTempMon?: number;

  /**
   * Flag indicating whether this record is an original or re-transmitted dataset
   * (TRUE indicates a retransmit from the host).
   */
  retransmit?: boolean;

  /**
   * Satellite/catalog number of the on-orbit satellite hosting the sensor.
   */
  satNo?: number;

  /**
   * The sensor mode associated with this measurements (NORMAL, TEST).
   */
  senMode?: string;

  /**
   * Surface dosimeter charge rate high output (converts to pico-amps/bit). High byte
   * of 2 bytes.
   */
  surfDosChargeH?: number;

  /**
   * Surface dosimeter charge rate low output (converts to pico-amps/bit). Low byte
   * of 2 bytes.
   */
  surfDosChargeL?: number;

  /**
   * Surface dosimeter high range output (converts to pico-coulombs/bit). High byte
   * of 3 bytes.
   */
  surfDosH?: number;

  /**
   * Surface dosimeter low range output (converts to pico-coulombs/bit). Low byte of
   * 3 bytes.
   */
  surfDosL?: number;

  /**
   * Surface dosimeter medium range output (converts to pico-coulombs/bit). Middle
   * byte of 3 bytes.
   */
  surfDosM?: number;

  /**
   * Surface dosimeter status byte.
   */
  surfDosStat?: number;

  /**
   * Array of 144 digitized samples of ESD waveform for transient packets.
   */
  transientData?: Array<number>;

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
   * Reference voltage (volts/bit). Conversion factor used to convert analog V
   * monitor data from bytes to volts.
   */
  vRef?: number;
}

/**
 * Supports Sensor Data Records (SDR) from space-borne Energetic Charged Particle
 * (ECP) Sensors. SDR contains sensor status telemetry and raw dosimeter
 * measurements of the space environment.
 */
export interface EcpsdrAbridged {
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
   * Time stamp of time packet receipt on ground, in ISO 8601 UTC format with
   * millisecond precision.
   */
  msgTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of data associated with this record (STANDARD, TRANSIENT).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Internal 5V current monitor for analog supply line. This is sensor status
   * telemetry. See vRef for conversion factor to Volts.
   */
  asl5VCurrMon?: number;

  /**
   * CDS Charge Plate voltage monitor. See vRef for conversion factor to Volts.
   */
  cdsPlateVMon?: number;

  /**
   * CDS reference voltage monitor. See vRef for conversion factor to Volts.
   */
  cdsRefVMon?: number;

  /**
   * CDS Threshold setting for ESD detection threshold. The CDS Threshold is the
   * adjustable sensitivity of recording/digitizing an ESD as a transient packet.
   */
  cdsThreshold?: number;

  /**
   * CDS throttle number of seconds between CDS transient capture readouts.
   */
  cdsThrottle?: number;

  /**
   * Two byte CRC-16-CCITT checksum (ordered as first byte, second byte).
   */
  checksum?: number;

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
   * Unitless dosimeter detector bias for MedLET and HiLET. MedLET (Linear Energy
   * Transfer) and HiLET subsensors detect particles above LET thresholds, 300keV and
   * 1MeV, respectively.
   */
  dosBias?: number;

  /**
   * Internal 5V current monitor for digital supply line. This is sensor status
   * telemetry. See vRef for conversion factor to Volts.
   */
  dsl5VCurrMon?: number;

  /**
   * Number of ESD triggers, high byte of 2-byte counter.
   */
  esdTrigCountH?: number;

  /**
   * Number of ESD triggers, low byte of 2-byte counter.
   */
  esdTrigCountL?: number;

  /**
   * HiLET dosimeter low range output. Low byte of scaler (HiLET) dosimeter output.
   */
  hiLetL?: number;

  /**
   * Unitless HiLET dosimeter medium range output. Medium byte of (HiLET) dosimeter
   * output.
   */
  hiLetM?: number;

  /**
   * Unique identifier of the on-orbit satellite hosting the sensor.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * LowLET dosimeter low range output. Low byte of (LowLET) dosimeter output.
   */
  lowLetL?: number;

  /**
   * LowLET dosimeter medium range output. Medium byte of (LowLET) dosimeter output.
   */
  lowLetM?: number;

  /**
   * MedLET1 dosimeter low range output. Low byte of the 1st (MedLET) dosimeter
   * output.
   */
  medLet1L?: number;

  /**
   * MedLET1 dosimeter medium range output. Medium byte of the 1st (MedLET) dosimeter
   * output.
   */
  medLet1M?: number;

  /**
   * MedLET2 dosimeter low range output. Low byte of the 2nd (MedLET) dosimeter
   * output.
   */
  medLet2L?: number;

  /**
   * MedLET2 dosimeter medium range output. Medium byte of the 2nd (MedLET) dosimeter
   * output.
   */
  medLet2M?: number;

  /**
   * MedLET3 dosimeter low range output. Low byte of the 3rd (MedLET) dosimeter
   * output.
   */
  medLet3L?: number;

  /**
   * MedLET3 dosimeter medium range output. Medium byte of the 3rd (MedLET) dosimeter
   * output.
   */
  medLet3M?: number;

  /**
   * MedLET4 dosimeter low range output. Low byte of the 4th (MedLET) dosimeter
   * output.
   */
  medLet4L?: number;

  /**
   * MedLET4 dosimeter medium range output. Medium byte of the 4th (MedLET) dosimeter
   * output.
   */
  medLet4M?: number;

  /**
   * Unitless sensor mounting plate temperature.
   */
  mpTemp?: number;

  /**
   * Time of the observation, in ISO 8601 UTC format with millisecond precision.
   */
  obTime?: string;

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
   * hosting the sensor. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the record source to indicate the sensor
   * identifier which produced this data. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Photodiode 1 signal level.
   */
  pd1SigLev?: number;

  /**
   * Photodiode 2 signal level.
   */
  pd2SigLev?: number;

  /**
   * Power supply temperature monitor. This is sensor status telemetry.
   */
  psTempMon?: number;

  /**
   * Flag indicating whether this record is an original or re-transmitted dataset
   * (TRUE indicates a retransmit from the host).
   */
  retransmit?: boolean;

  /**
   * Satellite/catalog number of the on-orbit satellite hosting the sensor.
   */
  satNo?: number;

  /**
   * The sensor mode associated with this measurements (NORMAL, TEST).
   */
  senMode?: string;

  /**
   * Surface dosimeter charge rate high output (converts to pico-amps/bit). High byte
   * of 2 bytes.
   */
  surfDosChargeH?: number;

  /**
   * Surface dosimeter charge rate low output (converts to pico-amps/bit). Low byte
   * of 2 bytes.
   */
  surfDosChargeL?: number;

  /**
   * Surface dosimeter high range output (converts to pico-coulombs/bit). High byte
   * of 3 bytes.
   */
  surfDosH?: number;

  /**
   * Surface dosimeter low range output (converts to pico-coulombs/bit). Low byte of
   * 3 bytes.
   */
  surfDosL?: number;

  /**
   * Surface dosimeter medium range output (converts to pico-coulombs/bit). Middle
   * byte of 3 bytes.
   */
  surfDosM?: number;

  /**
   * Surface dosimeter status byte.
   */
  surfDosStat?: number;

  /**
   * Array of 144 digitized samples of ESD waveform for transient packets.
   */
  transientData?: Array<number>;

  /**
   * Reference voltage (volts/bit). Conversion factor used to convert analog V
   * monitor data from bytes to volts.
   */
  vRef?: number;
}

export type EcpsdrCountResponse = string;

export interface EcpsdrQueryHelpResponse {
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

export type EcpsdrTupleResponse = Array<Ecpsdr>;

export interface EcpsdrCreateParams {
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
   * Time stamp of time packet receipt on ground, in ISO 8601 UTC format with
   * millisecond precision.
   */
  msgTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of data associated with this record (STANDARD, TRANSIENT).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Internal 5V current monitor for analog supply line. This is sensor status
   * telemetry. See vRef for conversion factor to Volts.
   */
  asl5VCurrMon?: number;

  /**
   * CDS Charge Plate voltage monitor. See vRef for conversion factor to Volts.
   */
  cdsPlateVMon?: number;

  /**
   * CDS reference voltage monitor. See vRef for conversion factor to Volts.
   */
  cdsRefVMon?: number;

  /**
   * CDS Threshold setting for ESD detection threshold. The CDS Threshold is the
   * adjustable sensitivity of recording/digitizing an ESD as a transient packet.
   */
  cdsThreshold?: number;

  /**
   * CDS throttle number of seconds between CDS transient capture readouts.
   */
  cdsThrottle?: number;

  /**
   * Two byte CRC-16-CCITT checksum (ordered as first byte, second byte).
   */
  checksum?: number;

  /**
   * Unitless dosimeter detector bias for MedLET and HiLET. MedLET (Linear Energy
   * Transfer) and HiLET subsensors detect particles above LET thresholds, 300keV and
   * 1MeV, respectively.
   */
  dosBias?: number;

  /**
   * Internal 5V current monitor for digital supply line. This is sensor status
   * telemetry. See vRef for conversion factor to Volts.
   */
  dsl5VCurrMon?: number;

  /**
   * Number of ESD triggers, high byte of 2-byte counter.
   */
  esdTrigCountH?: number;

  /**
   * Number of ESD triggers, low byte of 2-byte counter.
   */
  esdTrigCountL?: number;

  /**
   * HiLET dosimeter low range output. Low byte of scaler (HiLET) dosimeter output.
   */
  hiLetL?: number;

  /**
   * Unitless HiLET dosimeter medium range output. Medium byte of (HiLET) dosimeter
   * output.
   */
  hiLetM?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * LowLET dosimeter low range output. Low byte of (LowLET) dosimeter output.
   */
  lowLetL?: number;

  /**
   * LowLET dosimeter medium range output. Medium byte of (LowLET) dosimeter output.
   */
  lowLetM?: number;

  /**
   * MedLET1 dosimeter low range output. Low byte of the 1st (MedLET) dosimeter
   * output.
   */
  medLet1L?: number;

  /**
   * MedLET1 dosimeter medium range output. Medium byte of the 1st (MedLET) dosimeter
   * output.
   */
  medLet1M?: number;

  /**
   * MedLET2 dosimeter low range output. Low byte of the 2nd (MedLET) dosimeter
   * output.
   */
  medLet2L?: number;

  /**
   * MedLET2 dosimeter medium range output. Medium byte of the 2nd (MedLET) dosimeter
   * output.
   */
  medLet2M?: number;

  /**
   * MedLET3 dosimeter low range output. Low byte of the 3rd (MedLET) dosimeter
   * output.
   */
  medLet3L?: number;

  /**
   * MedLET3 dosimeter medium range output. Medium byte of the 3rd (MedLET) dosimeter
   * output.
   */
  medLet3M?: number;

  /**
   * MedLET4 dosimeter low range output. Low byte of the 4th (MedLET) dosimeter
   * output.
   */
  medLet4L?: number;

  /**
   * MedLET4 dosimeter medium range output. Medium byte of the 4th (MedLET) dosimeter
   * output.
   */
  medLet4M?: number;

  /**
   * Unitless sensor mounting plate temperature.
   */
  mpTemp?: number;

  /**
   * Time of the observation, in ISO 8601 UTC format with millisecond precision.
   */
  obTime?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the record source to indicate the satellite
   * hosting the sensor. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the record source to indicate the sensor
   * identifier which produced this data. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Photodiode 1 signal level.
   */
  pd1SigLev?: number;

  /**
   * Photodiode 2 signal level.
   */
  pd2SigLev?: number;

  /**
   * Power supply temperature monitor. This is sensor status telemetry.
   */
  psTempMon?: number;

  /**
   * Flag indicating whether this record is an original or re-transmitted dataset
   * (TRUE indicates a retransmit from the host).
   */
  retransmit?: boolean;

  /**
   * Satellite/catalog number of the on-orbit satellite hosting the sensor.
   */
  satNo?: number;

  /**
   * The sensor mode associated with this measurements (NORMAL, TEST).
   */
  senMode?: string;

  /**
   * Surface dosimeter charge rate high output (converts to pico-amps/bit). High byte
   * of 2 bytes.
   */
  surfDosChargeH?: number;

  /**
   * Surface dosimeter charge rate low output (converts to pico-amps/bit). Low byte
   * of 2 bytes.
   */
  surfDosChargeL?: number;

  /**
   * Surface dosimeter high range output (converts to pico-coulombs/bit). High byte
   * of 3 bytes.
   */
  surfDosH?: number;

  /**
   * Surface dosimeter low range output (converts to pico-coulombs/bit). Low byte of
   * 3 bytes.
   */
  surfDosL?: number;

  /**
   * Surface dosimeter medium range output (converts to pico-coulombs/bit). Middle
   * byte of 3 bytes.
   */
  surfDosM?: number;

  /**
   * Surface dosimeter status byte.
   */
  surfDosStat?: number;

  /**
   * Array of 144 digitized samples of ESD waveform for transient packets.
   */
  transientData?: Array<number>;

  /**
   * Reference voltage (volts/bit). Conversion factor used to convert analog V
   * monitor data from bytes to volts.
   */
  vRef?: number;
}

export interface EcpsdrRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EcpsdrListParams extends OffsetPageParams {
  /**
   * Time stamp of time packet receipt on ground, in ISO 8601 UTC format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;
}

export interface EcpsdrCountParams {
  /**
   * Time stamp of time packet receipt on ground, in ISO 8601 UTC format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface EcpsdrCreateBulkParams {
  body: Array<EcpsdrCreateBulkParams.Body>;
}

export namespace EcpsdrCreateBulkParams {
  /**
   * Supports Sensor Data Records (SDR) from space-borne Energetic Charged Particle
   * (ECP) Sensors. SDR contains sensor status telemetry and raw dosimeter
   * measurements of the space environment.
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
     * Time stamp of time packet receipt on ground, in ISO 8601 UTC format with
     * millisecond precision.
     */
    msgTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of data associated with this record (STANDARD, TRANSIENT).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Internal 5V current monitor for analog supply line. This is sensor status
     * telemetry. See vRef for conversion factor to Volts.
     */
    asl5VCurrMon?: number;

    /**
     * CDS Charge Plate voltage monitor. See vRef for conversion factor to Volts.
     */
    cdsPlateVMon?: number;

    /**
     * CDS reference voltage monitor. See vRef for conversion factor to Volts.
     */
    cdsRefVMon?: number;

    /**
     * CDS Threshold setting for ESD detection threshold. The CDS Threshold is the
     * adjustable sensitivity of recording/digitizing an ESD as a transient packet.
     */
    cdsThreshold?: number;

    /**
     * CDS throttle number of seconds between CDS transient capture readouts.
     */
    cdsThrottle?: number;

    /**
     * Two byte CRC-16-CCITT checksum (ordered as first byte, second byte).
     */
    checksum?: number;

    /**
     * Unitless dosimeter detector bias for MedLET and HiLET. MedLET (Linear Energy
     * Transfer) and HiLET subsensors detect particles above LET thresholds, 300keV and
     * 1MeV, respectively.
     */
    dosBias?: number;

    /**
     * Internal 5V current monitor for digital supply line. This is sensor status
     * telemetry. See vRef for conversion factor to Volts.
     */
    dsl5VCurrMon?: number;

    /**
     * Number of ESD triggers, high byte of 2-byte counter.
     */
    esdTrigCountH?: number;

    /**
     * Number of ESD triggers, low byte of 2-byte counter.
     */
    esdTrigCountL?: number;

    /**
     * HiLET dosimeter low range output. Low byte of scaler (HiLET) dosimeter output.
     */
    hiLetL?: number;

    /**
     * Unitless HiLET dosimeter medium range output. Medium byte of (HiLET) dosimeter
     * output.
     */
    hiLetM?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * LowLET dosimeter low range output. Low byte of (LowLET) dosimeter output.
     */
    lowLetL?: number;

    /**
     * LowLET dosimeter medium range output. Medium byte of (LowLET) dosimeter output.
     */
    lowLetM?: number;

    /**
     * MedLET1 dosimeter low range output. Low byte of the 1st (MedLET) dosimeter
     * output.
     */
    medLet1L?: number;

    /**
     * MedLET1 dosimeter medium range output. Medium byte of the 1st (MedLET) dosimeter
     * output.
     */
    medLet1M?: number;

    /**
     * MedLET2 dosimeter low range output. Low byte of the 2nd (MedLET) dosimeter
     * output.
     */
    medLet2L?: number;

    /**
     * MedLET2 dosimeter medium range output. Medium byte of the 2nd (MedLET) dosimeter
     * output.
     */
    medLet2M?: number;

    /**
     * MedLET3 dosimeter low range output. Low byte of the 3rd (MedLET) dosimeter
     * output.
     */
    medLet3L?: number;

    /**
     * MedLET3 dosimeter medium range output. Medium byte of the 3rd (MedLET) dosimeter
     * output.
     */
    medLet3M?: number;

    /**
     * MedLET4 dosimeter low range output. Low byte of the 4th (MedLET) dosimeter
     * output.
     */
    medLet4L?: number;

    /**
     * MedLET4 dosimeter medium range output. Medium byte of the 4th (MedLET) dosimeter
     * output.
     */
    medLet4M?: number;

    /**
     * Unitless sensor mounting plate temperature.
     */
    mpTemp?: number;

    /**
     * Time of the observation, in ISO 8601 UTC format with millisecond precision.
     */
    obTime?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the record source to indicate the satellite
     * hosting the sensor. This may be an internal identifier and not necessarily map
     * to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the record source to indicate the sensor
     * identifier which produced this data. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Photodiode 1 signal level.
     */
    pd1SigLev?: number;

    /**
     * Photodiode 2 signal level.
     */
    pd2SigLev?: number;

    /**
     * Power supply temperature monitor. This is sensor status telemetry.
     */
    psTempMon?: number;

    /**
     * Flag indicating whether this record is an original or re-transmitted dataset
     * (TRUE indicates a retransmit from the host).
     */
    retransmit?: boolean;

    /**
     * Satellite/catalog number of the on-orbit satellite hosting the sensor.
     */
    satNo?: number;

    /**
     * The sensor mode associated with this measurements (NORMAL, TEST).
     */
    senMode?: string;

    /**
     * Surface dosimeter charge rate high output (converts to pico-amps/bit). High byte
     * of 2 bytes.
     */
    surfDosChargeH?: number;

    /**
     * Surface dosimeter charge rate low output (converts to pico-amps/bit). Low byte
     * of 2 bytes.
     */
    surfDosChargeL?: number;

    /**
     * Surface dosimeter high range output (converts to pico-coulombs/bit). High byte
     * of 3 bytes.
     */
    surfDosH?: number;

    /**
     * Surface dosimeter low range output (converts to pico-coulombs/bit). Low byte of
     * 3 bytes.
     */
    surfDosL?: number;

    /**
     * Surface dosimeter medium range output (converts to pico-coulombs/bit). Middle
     * byte of 3 bytes.
     */
    surfDosM?: number;

    /**
     * Surface dosimeter status byte.
     */
    surfDosStat?: number;

    /**
     * Array of 144 digitized samples of ESD waveform for transient packets.
     */
    transientData?: Array<number>;

    /**
     * Reference voltage (volts/bit). Conversion factor used to convert analog V
     * monitor data from bytes to volts.
     */
    vRef?: number;
  }
}

export interface EcpsdrTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time stamp of time packet receipt on ground, in ISO 8601 UTC format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace EcpsdrResource {
  export {
    type Ecpsdr as Ecpsdr,
    type EcpsdrAbridged as EcpsdrAbridged,
    type EcpsdrCountResponse as EcpsdrCountResponse,
    type EcpsdrQueryHelpResponse as EcpsdrQueryHelpResponse,
    type EcpsdrTupleResponse as EcpsdrTupleResponse,
    type EcpsdrAbridgedsOffsetPage as EcpsdrAbridgedsOffsetPage,
    type EcpsdrCreateParams as EcpsdrCreateParams,
    type EcpsdrRetrieveParams as EcpsdrRetrieveParams,
    type EcpsdrListParams as EcpsdrListParams,
    type EcpsdrCountParams as EcpsdrCountParams,
    type EcpsdrCreateBulkParams as EcpsdrCreateBulkParams,
    type EcpsdrTupleParams as EcpsdrTupleParams,
  };
}
