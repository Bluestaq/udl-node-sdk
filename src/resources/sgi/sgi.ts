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
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sgi extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single SGI record as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sgi.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   effectiveDate: '2018-01-01T16:00:00.123Z',
   *   sgiDate: '2018-01-01T16:00:00.123Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: SgiCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/sgi', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single SGI record. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sgi.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   effectiveDate: '2018-01-01T16:00:00.123Z',
   *   sgiDate: '2018-01-01T16:00:00.123Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: SgiUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/sgi/${pathID}`, {
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
   * for await (const sgiListResponse of client.sgi.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SgiListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SgiListResponsesOffsetPage, SgiListResponse> {
    return this._client.getAPIList('/udl/sgi', OffsetPage<SgiListResponse>, { query, ...options });
  }

  /**
   * Service operation to delete a SGI record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sgi.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/sgi/${id}`, {
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
   * const response = await client.sgi.count();
   * ```
   */
  count(query: SgiCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/sgi/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of SGI
   * as a POST body and ingest into the database. This operation is not intended to
   * be used for automated feeds into UDL. Data providers should contact the UDL team
   * for specific role assignments and for instructions on setting up a permanent
   * feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.sgi.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       effectiveDate: '2018-01-01T16:00:00.123Z',
   *       sgiDate: '2018-01-01T16:00:00.123Z',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: SgiCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/sgi/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SGI record by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const sgi = await client.sgi.get('id');
   * ```
   */
  get(
    id: string,
    query: SgiGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SgiGetResponse> {
    return this._client.get(path`/udl/sgi/${id}`, { query, ...options });
  }

  /**
   * Service to return matching SGI records as of the effective date.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sgi.getDataByEffectiveAsOfDate();
   * ```
   */
  getDataByEffectiveAsOfDate(
    query: SgiGetDataByEffectiveAsOfDateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SgiGetDataByEffectiveAsOfDateResponse> {
    return this._client.get('/udl/sgi/getSGIDataByEffectiveAsOfDate', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.sgi.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SgiQueryhelpResponse> {
    return this._client.get('/udl/sgi/queryhelp', options);
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
   * const response = await client.sgi.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: SgiTupleParams, options?: RequestOptions): APIPromise<SgiTupleResponse> {
    return this._client.get('/udl/sgi/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple SGI as a POST body and ingest into the
   * database. This operation is intended to be used for automated feeds into UDL. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sgi.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       effectiveDate: '2018-01-01T16:00:00.123Z',
   *       sgiDate: '2018-01-01T16:00:00.123Z',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: SgiUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-sgi', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type SgiListResponsesOffsetPage = OffsetPage<SgiListResponse>;

/**
 * Model representation of space weather/solar, geomagnetic, and radiation belt
 * indices.
 */
export interface SgiListResponse {
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
   * ISO8601 UTC Time the data was received and processed from the source. Typically
   * a source provides data for a date window with each transmission including past,
   * present, and future predicted values.
   */
  effectiveDate: string;

  /**
   * ISO8601 UTC Time of the index value. This could be a past, current, or future
   * predicted value. Note: sgiDate defines the start time of the time window for
   * this data record.
   */
  sgiDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Signal analyzer's input attenuation level, in decibels. Attenuation is a setting
   * on the hardware that measures the power of a signal.
   */
  analyzerAttenuation?: number;

  /**
   * Ap is the planetary geomagnetic 2 nT index (00-21 UT) for the timespan specified
   * in apDuration. If apDuration is null, a 3 hour duration should be assumed.
   */
  ap?: number;

  /**
   * The time, in hours, for which the Ap index value is valid. If null, a span of 3
   * hours is assumed.
   */
  apDuration?: number;

  /**
   * Array containing the degree of the temperature coefficients. The coeffDegree and
   * coeffOrder arrays must be the same length.
   */
  coeffDegree?: Array<number>;

  /**
   * Array containing the order of the temperature coefficients. The coeffDegree and
   * coeffOrder arrays must be the same length.
   */
  coeffOrder?: Array<number>;

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
   * Array containing the cosine spherical-harmonic coefficients for Exospheric
   * temperature (DTC) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  ctce?: Array<number>;

  /**
   * Array containing the cosine spherical-harmonic coefficients for Inflection
   * temperature (DTX) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  ctci?: Array<number>;

  /**
   * Disturbance Storm Time geomagnetic index in nT.
   */
  dst?: number;

  /**
   * delta exospheric temperature correction in units of K.
   */
  dtc?: number;

  /**
   * Extreme Ultraviolet (EUV) proxy, E10.7, in x10-22 Watts per meter squared per
   * Hertz, is the integrated solar EUV energy flux at the top of atmosphere and
   * normalized to solar flux units.
   */
  e10?: number;

  /**
   * E54 (E10-Bar), in x10-22 Watts per meter squared per Hertz, uses the past
   * 54-days E10 values to determine the E10 average.
   */
  e54?: number;

  /**
   * Daily solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f10?: number;

  /**
   * Daily F10.7 index - high range, in x10-22 Watts per meter squared per Hertz.
   * This field usually applies to forecast values, based on the consensus of the
   * Solar Cycle 24 Prediction Panel.
   */
  f10High?: number;

  /**
   * Daily F10.7 index - low range, in x10-22 Watts per meter squared per Hertz. This
   * field usually applies to forecast values, based on the consensus of the Solar
   * Cycle 24 Prediction Panel.
   */
  f10Low?: number;

  /**
   * 54 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f54?: number;

  /**
   * 81 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f81?: number;

  /**
   * The maximum measured gamma deflection during the kpDuration timespan. If
   * kpDuration is null, a 3 hour duration should be assumed.
   */
  gamma?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The maximum measured K-Index at the associated station during the kpDuration
   * timespan. The K-Index is a unitless measure (0 - 9) of the deviation in the
   * Earth's magnetic field from normal at the station geographic location, with 0
   * indicating the absence of geomagnetic disturbance, and 9 indicating the most
   * significant disturbance. If kpDuration is null, a 3 hour duration should be
   * assumed.
   */
  kIndex?: number;

  /**
   * The Planetary K-index (Kp) over the kpDuration timespan. The Kp-Index is the
   * average K-Index for the entire Earth, utilizing a unitless scale (0-9, in
   * incremenets of 1/3), with 0 indicating the absence of geomagnetic disturbance,
   * and 9 indicating the most significant disturbance. If kpDuration is null, a 3
   * hour duration should be assumed.
   */
  kp?: number;

  /**
   * The time, in hours, over which the K, Kp, and/or gamma index values are
   * measured. If null, a span of 3 hours is assumed.
   */
  kpDuration?: number;

  /**
   * Daily M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  m10?: number;

  /**
   * 54 day M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  m54?: number;

  /**
   * The transmitted DCA mode of the record (1-3).
   */
  mode?: number;

  /**
   * The normalization factor that has already been applied to the index value prior
   * to record ingest. Typically used to normalize the index value to a particular
   * interval. Units of the normalization factor may vary depending on the provider
   * of this data (REACH, POES, CEASE3, etc.).
   */
  normFactor?: number;

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
   * Optional identifier provided by the reporting source to indicate the sensor
   * identifier which produced this data. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * The precedence of data in this record (O = Immediate, P = Priority, R = Routine,
   * Y = Emergency, Z = Flash).
   */
  precedence?: 'O' | 'P' | 'R' | 'Y' | 'Z';

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The timespan over which the associated radiation belt index is factored. If
   * rbDuration is null, a 24 hour duration should be assumed. Note: rbDuration
   * defines the length of the time window for this data record. The time window
   * start time is defined by sgiDate, and the time window end time is defined by
   * sgiDate plus rbDuration.
   */
  rbDuration?: number;

  /**
   * The value of the radiation belt index. This is the ratio of current intensity of
   * a radiation belt to long-term average value. It's long-term average should be
   * close to 1. Depending on the type of belt sensor, this ratio may measure Flux
   * (number of particles / (cm^2 sec energy solid-angle)), dose rate (rad per
   * second), or relative counts of particles per time (counts per second). The index
   * value may also be normalized, the normalization value typically represents an
   * average of the sensor measurements taken within a region over a given time
   * interval. See the normFactor field for the specific normalization factor, if
   * provided.
   */
  rbIndex?: number;

  /**
   * Region code for the associated radiation belt index. This is the code associated
   * with the corresponding radiation belt location. See the provider card for
   * reference to specific region code definitions.
   */
  rbRegionCode?: number;

  /**
   * Daily S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  s10?: number;

  /**
   * 54 day S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  s54?: number;

  /**
   * State indicating Issued (I), Nowcast (N), or Predicted (P) values for this
   * record.
   */
  state?: 'I' | 'N' | 'P';

  /**
   * The name/location of the station that collected the geomagnetic data for this
   * record.
   */
  stationName?: string;

  /**
   * Array containing the sine spherical-harmonic coefficients for Exospheric
   * temperature (DTC) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  stce?: Array<number>;

  /**
   * Array containing the sine spherical harmonic coefficients for Inflection
   * temperature (DTX) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  stci?: Array<number>;

  /**
   * Daily sunspot number.
   */
  sunspotNum?: number;

  /**
   * Daily sunspot number - high range. This field usually applies to forecast
   * values, based on the consensus of the Solar Cycle 24 Prediction Panel.
   */
  sunspotNumHigh?: number;

  /**
   * Daily sunspot number - low range. This field usually applies to forecast values,
   * based on the consensus of the Solar Cycle 24 Prediction Panel.
   */
  sunspotNumLow?: number;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * The type of data contained in this record (e.g. HASDM, JBH09, K-Index, PSD-dB,
   * RBI, RFI-SFU, etc).
   */
  type?: string;

  /**
   * Daily Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
   * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
   */
  y10?: number;

  /**
   * 54 day Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
   * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
   */
  y54?: number;
}

export type SgiCountResponse = string;

/**
 * Model representation of space weather/solar, geomagnetic, and radiation belt
 * indices.
 */
export interface SgiGetResponse {
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
   * ISO8601 UTC Time the data was received and processed from the source. Typically
   * a source provides data for a date window with each transmission including past,
   * present, and future predicted values.
   */
  effectiveDate: string;

  /**
   * ISO8601 UTC Time of the index value. This could be a past, current, or future
   * predicted value. Note: sgiDate defines the start time of the time window for
   * this data record.
   */
  sgiDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Signal analyzer's input attenuation level, in decibels. Attenuation is a setting
   * on the hardware that measures the power of a signal.
   */
  analyzerAttenuation?: number;

  /**
   * Ap is the planetary geomagnetic 2 nT index (00-21 UT) for the timespan specified
   * in apDuration. If apDuration is null, a 3 hour duration should be assumed.
   */
  ap?: number;

  /**
   * The time, in hours, for which the Ap index value is valid. If null, a span of 3
   * hours is assumed.
   */
  apDuration?: number;

  /**
   * Array containing the degree of the temperature coefficients. The coeffDegree and
   * coeffOrder arrays must be the same length.
   */
  coeffDegree?: Array<number>;

  /**
   * Array containing the order of the temperature coefficients. The coeffDegree and
   * coeffOrder arrays must be the same length.
   */
  coeffOrder?: Array<number>;

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
   * Array containing the cosine spherical-harmonic coefficients for Exospheric
   * temperature (DTC) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  ctce?: Array<number>;

  /**
   * Array containing the cosine spherical-harmonic coefficients for Inflection
   * temperature (DTX) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  ctci?: Array<number>;

  /**
   * Disturbance Storm Time geomagnetic index in nT.
   */
  dst?: number;

  /**
   * delta exospheric temperature correction in units of K.
   */
  dtc?: number;

  /**
   * Extreme Ultraviolet (EUV) proxy, E10.7, in x10-22 Watts per meter squared per
   * Hertz, is the integrated solar EUV energy flux at the top of atmosphere and
   * normalized to solar flux units.
   */
  e10?: number;

  /**
   * E54 (E10-Bar), in x10-22 Watts per meter squared per Hertz, uses the past
   * 54-days E10 values to determine the E10 average.
   */
  e54?: number;

  /**
   * Daily solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f10?: number;

  /**
   * Daily F10.7 index - high range, in x10-22 Watts per meter squared per Hertz.
   * This field usually applies to forecast values, based on the consensus of the
   * Solar Cycle 24 Prediction Panel.
   */
  f10High?: number;

  /**
   * Daily F10.7 index - low range, in x10-22 Watts per meter squared per Hertz. This
   * field usually applies to forecast values, based on the consensus of the Solar
   * Cycle 24 Prediction Panel.
   */
  f10Low?: number;

  /**
   * 54 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f54?: number;

  /**
   * 81 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f81?: number;

  /**
   * Array of individual power spectral density (PSD) frequencies of the signal, in
   * megahertz. This array should correspond with the same-sized array of powers.
   */
  frequencies?: Array<number>;

  /**
   * The maximum measured gamma deflection during the kpDuration timespan. If
   * kpDuration is null, a 3 hour duration should be assumed.
   */
  gamma?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The maximum measured K-Index at the associated station during the kpDuration
   * timespan. The K-Index is a unitless measure (0 - 9) of the deviation in the
   * Earth's magnetic field from normal at the station geographic location, with 0
   * indicating the absence of geomagnetic disturbance, and 9 indicating the most
   * significant disturbance. If kpDuration is null, a 3 hour duration should be
   * assumed.
   */
  kIndex?: number;

  /**
   * The Planetary K-index (Kp) over the kpDuration timespan. The Kp-Index is the
   * average K-Index for the entire Earth, utilizing a unitless scale (0-9, in
   * incremenets of 1/3), with 0 indicating the absence of geomagnetic disturbance,
   * and 9 indicating the most significant disturbance. If kpDuration is null, a 3
   * hour duration should be assumed.
   */
  kp?: number;

  /**
   * The time, in hours, over which the K, Kp, and/or gamma index values are
   * measured. If null, a span of 3 hours is assumed.
   */
  kpDuration?: number;

  /**
   * Daily M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  m10?: number;

  /**
   * 54 day M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  m54?: number;

  /**
   * The transmitted DCA mode of the record (1-3).
   */
  mode?: number;

  /**
   * The normalization factor that has already been applied to the index value prior
   * to record ingest. Typically used to normalize the index value to a particular
   * interval. Units of the normalization factor may vary depending on the provider
   * of this data (REACH, POES, CEASE3, etc.).
   */
  normFactor?: number;

  /**
   * Observed baseline values of the frequencies specified in the frequencies field,
   * in solar flux units. The baseline values will be used to help detect abnormal
   * readings from the sun that might indicate a flare or other solar activity.
   */
  observedBaseline?: Array<number>;

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
   * Optional identifier provided by the reporting source to indicate the sensor
   * identifier which produced this data. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Array of individual power spectral density (PSD) powers of the signal, in watts.
   * This array should correspond with the same-sized array of frequencies.
   */
  powers?: Array<number>;

  /**
   * The precedence of data in this record (O = Immediate, P = Priority, R = Routine,
   * Y = Emergency, Z = Flash).
   */
  precedence?: 'O' | 'P' | 'R' | 'Y' | 'Z';

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The timespan over which the associated radiation belt index is factored. If
   * rbDuration is null, a 24 hour duration should be assumed. Note: rbDuration
   * defines the length of the time window for this data record. The time window
   * start time is defined by sgiDate, and the time window end time is defined by
   * sgiDate plus rbDuration.
   */
  rbDuration?: number;

  /**
   * The value of the radiation belt index. This is the ratio of current intensity of
   * a radiation belt to long-term average value. It's long-term average should be
   * close to 1. Depending on the type of belt sensor, this ratio may measure Flux
   * (number of particles / (cm^2 sec energy solid-angle)), dose rate (rad per
   * second), or relative counts of particles per time (counts per second). The index
   * value may also be normalized, the normalization value typically represents an
   * average of the sensor measurements taken within a region over a given time
   * interval. See the normFactor field for the specific normalization factor, if
   * provided.
   */
  rbIndex?: number;

  /**
   * Region code for the associated radiation belt index. This is the code associated
   * with the corresponding radiation belt location. See the provider card for
   * reference to specific region code definitions.
   */
  rbRegionCode?: number;

  /**
   * Daily S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  s10?: number;

  /**
   * 54 day S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  s54?: number;

  /**
   * State indicating Issued (I), Nowcast (N), or Predicted (P) values for this
   * record.
   */
  state?: 'I' | 'N' | 'P';

  /**
   * The name/location of the station that collected the geomagnetic data for this
   * record.
   */
  stationName?: string;

  /**
   * Array containing the sine spherical-harmonic coefficients for Exospheric
   * temperature (DTC) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  stce?: Array<number>;

  /**
   * Array containing the sine spherical harmonic coefficients for Inflection
   * temperature (DTX) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  stci?: Array<number>;

  /**
   * Daily sunspot number.
   */
  sunspotNum?: number;

  /**
   * Daily sunspot number - high range. This field usually applies to forecast
   * values, based on the consensus of the Solar Cycle 24 Prediction Panel.
   */
  sunspotNumHigh?: number;

  /**
   * Daily sunspot number - low range. This field usually applies to forecast values,
   * based on the consensus of the Solar Cycle 24 Prediction Panel.
   */
  sunspotNumLow?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * The type of data contained in this record (e.g. HASDM, JBH09, K-Index, PSD-dB,
   * RBI, RFI-SFU, etc).
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

  /**
   * Daily Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
   * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
   */
  y10?: number;

  /**
   * 54 day Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
   * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
   */
  y54?: number;
}

/**
 * Model representation of space weather/solar, geomagnetic, and radiation belt
 * indices.
 */
export interface SgiGetDataByEffectiveAsOfDateResponse {
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
   * ISO8601 UTC Time the data was received and processed from the source. Typically
   * a source provides data for a date window with each transmission including past,
   * present, and future predicted values.
   */
  effectiveDate: string;

  /**
   * ISO8601 UTC Time of the index value. This could be a past, current, or future
   * predicted value. Note: sgiDate defines the start time of the time window for
   * this data record.
   */
  sgiDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Signal analyzer's input attenuation level, in decibels. Attenuation is a setting
   * on the hardware that measures the power of a signal.
   */
  analyzerAttenuation?: number;

  /**
   * Ap is the planetary geomagnetic 2 nT index (00-21 UT) for the timespan specified
   * in apDuration. If apDuration is null, a 3 hour duration should be assumed.
   */
  ap?: number;

  /**
   * The time, in hours, for which the Ap index value is valid. If null, a span of 3
   * hours is assumed.
   */
  apDuration?: number;

  /**
   * Array containing the degree of the temperature coefficients. The coeffDegree and
   * coeffOrder arrays must be the same length.
   */
  coeffDegree?: Array<number>;

  /**
   * Array containing the order of the temperature coefficients. The coeffDegree and
   * coeffOrder arrays must be the same length.
   */
  coeffOrder?: Array<number>;

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
   * Array containing the cosine spherical-harmonic coefficients for Exospheric
   * temperature (DTC) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  ctce?: Array<number>;

  /**
   * Array containing the cosine spherical-harmonic coefficients for Inflection
   * temperature (DTX) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  ctci?: Array<number>;

  /**
   * Disturbance Storm Time geomagnetic index in nT.
   */
  dst?: number;

  /**
   * delta exospheric temperature correction in units of K.
   */
  dtc?: number;

  /**
   * Extreme Ultraviolet (EUV) proxy, E10.7, in x10-22 Watts per meter squared per
   * Hertz, is the integrated solar EUV energy flux at the top of atmosphere and
   * normalized to solar flux units.
   */
  e10?: number;

  /**
   * E54 (E10-Bar), in x10-22 Watts per meter squared per Hertz, uses the past
   * 54-days E10 values to determine the E10 average.
   */
  e54?: number;

  /**
   * Daily solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f10?: number;

  /**
   * Daily F10.7 index - high range, in x10-22 Watts per meter squared per Hertz.
   * This field usually applies to forecast values, based on the consensus of the
   * Solar Cycle 24 Prediction Panel.
   */
  f10High?: number;

  /**
   * Daily F10.7 index - low range, in x10-22 Watts per meter squared per Hertz. This
   * field usually applies to forecast values, based on the consensus of the Solar
   * Cycle 24 Prediction Panel.
   */
  f10Low?: number;

  /**
   * 54 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f54?: number;

  /**
   * 81 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f81?: number;

  /**
   * Array of individual power spectral density (PSD) frequencies of the signal, in
   * megahertz. This array should correspond with the same-sized array of powers.
   */
  frequencies?: Array<number>;

  /**
   * The maximum measured gamma deflection during the kpDuration timespan. If
   * kpDuration is null, a 3 hour duration should be assumed.
   */
  gamma?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The maximum measured K-Index at the associated station during the kpDuration
   * timespan. The K-Index is a unitless measure (0 - 9) of the deviation in the
   * Earth's magnetic field from normal at the station geographic location, with 0
   * indicating the absence of geomagnetic disturbance, and 9 indicating the most
   * significant disturbance. If kpDuration is null, a 3 hour duration should be
   * assumed.
   */
  kIndex?: number;

  /**
   * The Planetary K-index (Kp) over the kpDuration timespan. The Kp-Index is the
   * average K-Index for the entire Earth, utilizing a unitless scale (0-9, in
   * incremenets of 1/3), with 0 indicating the absence of geomagnetic disturbance,
   * and 9 indicating the most significant disturbance. If kpDuration is null, a 3
   * hour duration should be assumed.
   */
  kp?: number;

  /**
   * The time, in hours, over which the K, Kp, and/or gamma index values are
   * measured. If null, a span of 3 hours is assumed.
   */
  kpDuration?: number;

  /**
   * Daily M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  m10?: number;

  /**
   * 54 day M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  m54?: number;

  /**
   * The transmitted DCA mode of the record (1-3).
   */
  mode?: number;

  /**
   * The normalization factor that has already been applied to the index value prior
   * to record ingest. Typically used to normalize the index value to a particular
   * interval. Units of the normalization factor may vary depending on the provider
   * of this data (REACH, POES, CEASE3, etc.).
   */
  normFactor?: number;

  /**
   * Observed baseline values of the frequencies specified in the frequencies field,
   * in solar flux units. The baseline values will be used to help detect abnormal
   * readings from the sun that might indicate a flare or other solar activity.
   */
  observedBaseline?: Array<number>;

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
   * Optional identifier provided by the reporting source to indicate the sensor
   * identifier which produced this data. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Array of individual power spectral density (PSD) powers of the signal, in watts.
   * This array should correspond with the same-sized array of frequencies.
   */
  powers?: Array<number>;

  /**
   * The precedence of data in this record (O = Immediate, P = Priority, R = Routine,
   * Y = Emergency, Z = Flash).
   */
  precedence?: 'O' | 'P' | 'R' | 'Y' | 'Z';

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The timespan over which the associated radiation belt index is factored. If
   * rbDuration is null, a 24 hour duration should be assumed. Note: rbDuration
   * defines the length of the time window for this data record. The time window
   * start time is defined by sgiDate, and the time window end time is defined by
   * sgiDate plus rbDuration.
   */
  rbDuration?: number;

  /**
   * The value of the radiation belt index. This is the ratio of current intensity of
   * a radiation belt to long-term average value. It's long-term average should be
   * close to 1. Depending on the type of belt sensor, this ratio may measure Flux
   * (number of particles / (cm^2 sec energy solid-angle)), dose rate (rad per
   * second), or relative counts of particles per time (counts per second). The index
   * value may also be normalized, the normalization value typically represents an
   * average of the sensor measurements taken within a region over a given time
   * interval. See the normFactor field for the specific normalization factor, if
   * provided.
   */
  rbIndex?: number;

  /**
   * Region code for the associated radiation belt index. This is the code associated
   * with the corresponding radiation belt location. See the provider card for
   * reference to specific region code definitions.
   */
  rbRegionCode?: number;

  /**
   * Daily S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  s10?: number;

  /**
   * 54 day S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  s54?: number;

  /**
   * State indicating Issued (I), Nowcast (N), or Predicted (P) values for this
   * record.
   */
  state?: 'I' | 'N' | 'P';

  /**
   * The name/location of the station that collected the geomagnetic data for this
   * record.
   */
  stationName?: string;

  /**
   * Array containing the sine spherical-harmonic coefficients for Exospheric
   * temperature (DTC) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  stce?: Array<number>;

  /**
   * Array containing the sine spherical harmonic coefficients for Inflection
   * temperature (DTX) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  stci?: Array<number>;

  /**
   * Daily sunspot number.
   */
  sunspotNum?: number;

  /**
   * Daily sunspot number - high range. This field usually applies to forecast
   * values, based on the consensus of the Solar Cycle 24 Prediction Panel.
   */
  sunspotNumHigh?: number;

  /**
   * Daily sunspot number - low range. This field usually applies to forecast values,
   * based on the consensus of the Solar Cycle 24 Prediction Panel.
   */
  sunspotNumLow?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * The type of data contained in this record (e.g. HASDM, JBH09, K-Index, PSD-dB,
   * RBI, RFI-SFU, etc).
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

  /**
   * Daily Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
   * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
   */
  y10?: number;

  /**
   * 54 day Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
   * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
   */
  y54?: number;
}

export interface SgiQueryhelpResponse {
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

export type SgiTupleResponse = Array<SgiTupleResponse.SgiTupleResponseItem>;

export namespace SgiTupleResponse {
  /**
   * Model representation of space weather/solar, geomagnetic, and radiation belt
   * indices.
   */
  export interface SgiTupleResponseItem {
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
     * ISO8601 UTC Time the data was received and processed from the source. Typically
     * a source provides data for a date window with each transmission including past,
     * present, and future predicted values.
     */
    effectiveDate: string;

    /**
     * ISO8601 UTC Time of the index value. This could be a past, current, or future
     * predicted value. Note: sgiDate defines the start time of the time window for
     * this data record.
     */
    sgiDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Signal analyzer's input attenuation level, in decibels. Attenuation is a setting
     * on the hardware that measures the power of a signal.
     */
    analyzerAttenuation?: number;

    /**
     * Ap is the planetary geomagnetic 2 nT index (00-21 UT) for the timespan specified
     * in apDuration. If apDuration is null, a 3 hour duration should be assumed.
     */
    ap?: number;

    /**
     * The time, in hours, for which the Ap index value is valid. If null, a span of 3
     * hours is assumed.
     */
    apDuration?: number;

    /**
     * Array containing the degree of the temperature coefficients. The coeffDegree and
     * coeffOrder arrays must be the same length.
     */
    coeffDegree?: Array<number>;

    /**
     * Array containing the order of the temperature coefficients. The coeffDegree and
     * coeffOrder arrays must be the same length.
     */
    coeffOrder?: Array<number>;

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
     * Array containing the cosine spherical-harmonic coefficients for Exospheric
     * temperature (DTC) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    ctce?: Array<number>;

    /**
     * Array containing the cosine spherical-harmonic coefficients for Inflection
     * temperature (DTX) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    ctci?: Array<number>;

    /**
     * Disturbance Storm Time geomagnetic index in nT.
     */
    dst?: number;

    /**
     * delta exospheric temperature correction in units of K.
     */
    dtc?: number;

    /**
     * Extreme Ultraviolet (EUV) proxy, E10.7, in x10-22 Watts per meter squared per
     * Hertz, is the integrated solar EUV energy flux at the top of atmosphere and
     * normalized to solar flux units.
     */
    e10?: number;

    /**
     * E54 (E10-Bar), in x10-22 Watts per meter squared per Hertz, uses the past
     * 54-days E10 values to determine the E10 average.
     */
    e54?: number;

    /**
     * Daily solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
     */
    f10?: number;

    /**
     * Daily F10.7 index - high range, in x10-22 Watts per meter squared per Hertz.
     * This field usually applies to forecast values, based on the consensus of the
     * Solar Cycle 24 Prediction Panel.
     */
    f10High?: number;

    /**
     * Daily F10.7 index - low range, in x10-22 Watts per meter squared per Hertz. This
     * field usually applies to forecast values, based on the consensus of the Solar
     * Cycle 24 Prediction Panel.
     */
    f10Low?: number;

    /**
     * 54 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
     */
    f54?: number;

    /**
     * 81 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
     */
    f81?: number;

    /**
     * Array of individual power spectral density (PSD) frequencies of the signal, in
     * megahertz. This array should correspond with the same-sized array of powers.
     */
    frequencies?: Array<number>;

    /**
     * The maximum measured gamma deflection during the kpDuration timespan. If
     * kpDuration is null, a 3 hour duration should be assumed.
     */
    gamma?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * The maximum measured K-Index at the associated station during the kpDuration
     * timespan. The K-Index is a unitless measure (0 - 9) of the deviation in the
     * Earth's magnetic field from normal at the station geographic location, with 0
     * indicating the absence of geomagnetic disturbance, and 9 indicating the most
     * significant disturbance. If kpDuration is null, a 3 hour duration should be
     * assumed.
     */
    kIndex?: number;

    /**
     * The Planetary K-index (Kp) over the kpDuration timespan. The Kp-Index is the
     * average K-Index for the entire Earth, utilizing a unitless scale (0-9, in
     * incremenets of 1/3), with 0 indicating the absence of geomagnetic disturbance,
     * and 9 indicating the most significant disturbance. If kpDuration is null, a 3
     * hour duration should be assumed.
     */
    kp?: number;

    /**
     * The time, in hours, over which the K, Kp, and/or gamma index values are
     * measured. If null, a span of 3 hours is assumed.
     */
    kpDuration?: number;

    /**
     * Daily M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    m10?: number;

    /**
     * 54 day M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    m54?: number;

    /**
     * The transmitted DCA mode of the record (1-3).
     */
    mode?: number;

    /**
     * The normalization factor that has already been applied to the index value prior
     * to record ingest. Typically used to normalize the index value to a particular
     * interval. Units of the normalization factor may vary depending on the provider
     * of this data (REACH, POES, CEASE3, etc.).
     */
    normFactor?: number;

    /**
     * Observed baseline values of the frequencies specified in the frequencies field,
     * in solar flux units. The baseline values will be used to help detect abnormal
     * readings from the sun that might indicate a flare or other solar activity.
     */
    observedBaseline?: Array<number>;

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
     * Optional identifier provided by the reporting source to indicate the sensor
     * identifier which produced this data. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Array of individual power spectral density (PSD) powers of the signal, in watts.
     * This array should correspond with the same-sized array of frequencies.
     */
    powers?: Array<number>;

    /**
     * The precedence of data in this record (O = Immediate, P = Priority, R = Routine,
     * Y = Emergency, Z = Flash).
     */
    precedence?: 'O' | 'P' | 'R' | 'Y' | 'Z';

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * The timespan over which the associated radiation belt index is factored. If
     * rbDuration is null, a 24 hour duration should be assumed. Note: rbDuration
     * defines the length of the time window for this data record. The time window
     * start time is defined by sgiDate, and the time window end time is defined by
     * sgiDate plus rbDuration.
     */
    rbDuration?: number;

    /**
     * The value of the radiation belt index. This is the ratio of current intensity of
     * a radiation belt to long-term average value. It's long-term average should be
     * close to 1. Depending on the type of belt sensor, this ratio may measure Flux
     * (number of particles / (cm^2 sec energy solid-angle)), dose rate (rad per
     * second), or relative counts of particles per time (counts per second). The index
     * value may also be normalized, the normalization value typically represents an
     * average of the sensor measurements taken within a region over a given time
     * interval. See the normFactor field for the specific normalization factor, if
     * provided.
     */
    rbIndex?: number;

    /**
     * Region code for the associated radiation belt index. This is the code associated
     * with the corresponding radiation belt location. See the provider card for
     * reference to specific region code definitions.
     */
    rbRegionCode?: number;

    /**
     * Daily S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    s10?: number;

    /**
     * 54 day S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    s54?: number;

    /**
     * State indicating Issued (I), Nowcast (N), or Predicted (P) values for this
     * record.
     */
    state?: 'I' | 'N' | 'P';

    /**
     * The name/location of the station that collected the geomagnetic data for this
     * record.
     */
    stationName?: string;

    /**
     * Array containing the sine spherical-harmonic coefficients for Exospheric
     * temperature (DTC) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    stce?: Array<number>;

    /**
     * Array containing the sine spherical harmonic coefficients for Inflection
     * temperature (DTX) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    stci?: Array<number>;

    /**
     * Daily sunspot number.
     */
    sunspotNum?: number;

    /**
     * Daily sunspot number - high range. This field usually applies to forecast
     * values, based on the consensus of the Solar Cycle 24 Prediction Panel.
     */
    sunspotNumHigh?: number;

    /**
     * Daily sunspot number - low range. This field usually applies to forecast values,
     * based on the consensus of the Solar Cycle 24 Prediction Panel.
     */
    sunspotNumLow?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * The type of data contained in this record (e.g. HASDM, JBH09, K-Index, PSD-dB,
     * RBI, RFI-SFU, etc).
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

    /**
     * Daily Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
     * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
     */
    y10?: number;

    /**
     * 54 day Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
     * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
     */
    y54?: number;
  }
}

export interface SgiCreateParams {
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
   * ISO8601 UTC Time the data was received and processed from the source. Typically
   * a source provides data for a date window with each transmission including past,
   * present, and future predicted values.
   */
  effectiveDate: string;

  /**
   * ISO8601 UTC Time of the index value. This could be a past, current, or future
   * predicted value. Note: sgiDate defines the start time of the time window for
   * this data record.
   */
  sgiDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Signal analyzer's input attenuation level, in decibels. Attenuation is a setting
   * on the hardware that measures the power of a signal.
   */
  analyzerAttenuation?: number;

  /**
   * Ap is the planetary geomagnetic 2 nT index (00-21 UT) for the timespan specified
   * in apDuration. If apDuration is null, a 3 hour duration should be assumed.
   */
  ap?: number;

  /**
   * The time, in hours, for which the Ap index value is valid. If null, a span of 3
   * hours is assumed.
   */
  apDuration?: number;

  /**
   * Array containing the degree of the temperature coefficients. The coeffDegree and
   * coeffOrder arrays must be the same length.
   */
  coeffDegree?: Array<number>;

  /**
   * Array containing the order of the temperature coefficients. The coeffDegree and
   * coeffOrder arrays must be the same length.
   */
  coeffOrder?: Array<number>;

  /**
   * Array containing the cosine spherical-harmonic coefficients for Exospheric
   * temperature (DTC) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  ctce?: Array<number>;

  /**
   * Array containing the cosine spherical-harmonic coefficients for Inflection
   * temperature (DTX) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  ctci?: Array<number>;

  /**
   * Disturbance Storm Time geomagnetic index in nT.
   */
  dst?: number;

  /**
   * delta exospheric temperature correction in units of K.
   */
  dtc?: number;

  /**
   * Extreme Ultraviolet (EUV) proxy, E10.7, in x10-22 Watts per meter squared per
   * Hertz, is the integrated solar EUV energy flux at the top of atmosphere and
   * normalized to solar flux units.
   */
  e10?: number;

  /**
   * E54 (E10-Bar), in x10-22 Watts per meter squared per Hertz, uses the past
   * 54-days E10 values to determine the E10 average.
   */
  e54?: number;

  /**
   * Daily solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f10?: number;

  /**
   * Daily F10.7 index - high range, in x10-22 Watts per meter squared per Hertz.
   * This field usually applies to forecast values, based on the consensus of the
   * Solar Cycle 24 Prediction Panel.
   */
  f10High?: number;

  /**
   * Daily F10.7 index - low range, in x10-22 Watts per meter squared per Hertz. This
   * field usually applies to forecast values, based on the consensus of the Solar
   * Cycle 24 Prediction Panel.
   */
  f10Low?: number;

  /**
   * 54 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f54?: number;

  /**
   * 81 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f81?: number;

  /**
   * Array of individual power spectral density (PSD) frequencies of the signal, in
   * megahertz. This array should correspond with the same-sized array of powers.
   */
  frequencies?: Array<number>;

  /**
   * The maximum measured gamma deflection during the kpDuration timespan. If
   * kpDuration is null, a 3 hour duration should be assumed.
   */
  gamma?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The maximum measured K-Index at the associated station during the kpDuration
   * timespan. The K-Index is a unitless measure (0 - 9) of the deviation in the
   * Earth's magnetic field from normal at the station geographic location, with 0
   * indicating the absence of geomagnetic disturbance, and 9 indicating the most
   * significant disturbance. If kpDuration is null, a 3 hour duration should be
   * assumed.
   */
  kIndex?: number;

  /**
   * The Planetary K-index (Kp) over the kpDuration timespan. The Kp-Index is the
   * average K-Index for the entire Earth, utilizing a unitless scale (0-9, in
   * incremenets of 1/3), with 0 indicating the absence of geomagnetic disturbance,
   * and 9 indicating the most significant disturbance. If kpDuration is null, a 3
   * hour duration should be assumed.
   */
  kp?: number;

  /**
   * The time, in hours, over which the K, Kp, and/or gamma index values are
   * measured. If null, a span of 3 hours is assumed.
   */
  kpDuration?: number;

  /**
   * Daily M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  m10?: number;

  /**
   * 54 day M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  m54?: number;

  /**
   * The transmitted DCA mode of the record (1-3).
   */
  mode?: number;

  /**
   * The normalization factor that has already been applied to the index value prior
   * to record ingest. Typically used to normalize the index value to a particular
   * interval. Units of the normalization factor may vary depending on the provider
   * of this data (REACH, POES, CEASE3, etc.).
   */
  normFactor?: number;

  /**
   * Observed baseline values of the frequencies specified in the frequencies field,
   * in solar flux units. The baseline values will be used to help detect abnormal
   * readings from the sun that might indicate a flare or other solar activity.
   */
  observedBaseline?: Array<number>;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the reporting source to indicate the sensor
   * identifier which produced this data. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Array of individual power spectral density (PSD) powers of the signal, in watts.
   * This array should correspond with the same-sized array of frequencies.
   */
  powers?: Array<number>;

  /**
   * The precedence of data in this record (O = Immediate, P = Priority, R = Routine,
   * Y = Emergency, Z = Flash).
   */
  precedence?: 'O' | 'P' | 'R' | 'Y' | 'Z';

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The timespan over which the associated radiation belt index is factored. If
   * rbDuration is null, a 24 hour duration should be assumed. Note: rbDuration
   * defines the length of the time window for this data record. The time window
   * start time is defined by sgiDate, and the time window end time is defined by
   * sgiDate plus rbDuration.
   */
  rbDuration?: number;

  /**
   * The value of the radiation belt index. This is the ratio of current intensity of
   * a radiation belt to long-term average value. It's long-term average should be
   * close to 1. Depending on the type of belt sensor, this ratio may measure Flux
   * (number of particles / (cm^2 sec energy solid-angle)), dose rate (rad per
   * second), or relative counts of particles per time (counts per second). The index
   * value may also be normalized, the normalization value typically represents an
   * average of the sensor measurements taken within a region over a given time
   * interval. See the normFactor field for the specific normalization factor, if
   * provided.
   */
  rbIndex?: number;

  /**
   * Region code for the associated radiation belt index. This is the code associated
   * with the corresponding radiation belt location. See the provider card for
   * reference to specific region code definitions.
   */
  rbRegionCode?: number;

  /**
   * Daily S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  s10?: number;

  /**
   * 54 day S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  s54?: number;

  /**
   * State indicating Issued (I), Nowcast (N), or Predicted (P) values for this
   * record.
   */
  state?: 'I' | 'N' | 'P';

  /**
   * The name/location of the station that collected the geomagnetic data for this
   * record.
   */
  stationName?: string;

  /**
   * Array containing the sine spherical-harmonic coefficients for Exospheric
   * temperature (DTC) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  stce?: Array<number>;

  /**
   * Array containing the sine spherical harmonic coefficients for Inflection
   * temperature (DTX) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  stci?: Array<number>;

  /**
   * Daily sunspot number.
   */
  sunspotNum?: number;

  /**
   * Daily sunspot number - high range. This field usually applies to forecast
   * values, based on the consensus of the Solar Cycle 24 Prediction Panel.
   */
  sunspotNumHigh?: number;

  /**
   * Daily sunspot number - low range. This field usually applies to forecast values,
   * based on the consensus of the Solar Cycle 24 Prediction Panel.
   */
  sunspotNumLow?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * The type of data contained in this record (e.g. HASDM, JBH09, K-Index, PSD-dB,
   * RBI, RFI-SFU, etc).
   */
  type?: string;

  /**
   * Daily Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
   * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
   */
  y10?: number;

  /**
   * 54 day Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
   * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
   */
  y54?: number;
}

export interface SgiUpdateParams {
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
   * ISO8601 UTC Time the data was received and processed from the source. Typically
   * a source provides data for a date window with each transmission including past,
   * present, and future predicted values.
   */
  effectiveDate: string;

  /**
   * ISO8601 UTC Time of the index value. This could be a past, current, or future
   * predicted value. Note: sgiDate defines the start time of the time window for
   * this data record.
   */
  sgiDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Signal analyzer's input attenuation level, in decibels. Attenuation is a setting
   * on the hardware that measures the power of a signal.
   */
  analyzerAttenuation?: number;

  /**
   * Ap is the planetary geomagnetic 2 nT index (00-21 UT) for the timespan specified
   * in apDuration. If apDuration is null, a 3 hour duration should be assumed.
   */
  ap?: number;

  /**
   * The time, in hours, for which the Ap index value is valid. If null, a span of 3
   * hours is assumed.
   */
  apDuration?: number;

  /**
   * Array containing the degree of the temperature coefficients. The coeffDegree and
   * coeffOrder arrays must be the same length.
   */
  coeffDegree?: Array<number>;

  /**
   * Array containing the order of the temperature coefficients. The coeffDegree and
   * coeffOrder arrays must be the same length.
   */
  coeffOrder?: Array<number>;

  /**
   * Array containing the cosine spherical-harmonic coefficients for Exospheric
   * temperature (DTC) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  ctce?: Array<number>;

  /**
   * Array containing the cosine spherical-harmonic coefficients for Inflection
   * temperature (DTX) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  ctci?: Array<number>;

  /**
   * Disturbance Storm Time geomagnetic index in nT.
   */
  dst?: number;

  /**
   * delta exospheric temperature correction in units of K.
   */
  dtc?: number;

  /**
   * Extreme Ultraviolet (EUV) proxy, E10.7, in x10-22 Watts per meter squared per
   * Hertz, is the integrated solar EUV energy flux at the top of atmosphere and
   * normalized to solar flux units.
   */
  e10?: number;

  /**
   * E54 (E10-Bar), in x10-22 Watts per meter squared per Hertz, uses the past
   * 54-days E10 values to determine the E10 average.
   */
  e54?: number;

  /**
   * Daily solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f10?: number;

  /**
   * Daily F10.7 index - high range, in x10-22 Watts per meter squared per Hertz.
   * This field usually applies to forecast values, based on the consensus of the
   * Solar Cycle 24 Prediction Panel.
   */
  f10High?: number;

  /**
   * Daily F10.7 index - low range, in x10-22 Watts per meter squared per Hertz. This
   * field usually applies to forecast values, based on the consensus of the Solar
   * Cycle 24 Prediction Panel.
   */
  f10Low?: number;

  /**
   * 54 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f54?: number;

  /**
   * 81 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
   */
  f81?: number;

  /**
   * Array of individual power spectral density (PSD) frequencies of the signal, in
   * megahertz. This array should correspond with the same-sized array of powers.
   */
  frequencies?: Array<number>;

  /**
   * The maximum measured gamma deflection during the kpDuration timespan. If
   * kpDuration is null, a 3 hour duration should be assumed.
   */
  gamma?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The maximum measured K-Index at the associated station during the kpDuration
   * timespan. The K-Index is a unitless measure (0 - 9) of the deviation in the
   * Earth's magnetic field from normal at the station geographic location, with 0
   * indicating the absence of geomagnetic disturbance, and 9 indicating the most
   * significant disturbance. If kpDuration is null, a 3 hour duration should be
   * assumed.
   */
  kIndex?: number;

  /**
   * The Planetary K-index (Kp) over the kpDuration timespan. The Kp-Index is the
   * average K-Index for the entire Earth, utilizing a unitless scale (0-9, in
   * incremenets of 1/3), with 0 indicating the absence of geomagnetic disturbance,
   * and 9 indicating the most significant disturbance. If kpDuration is null, a 3
   * hour duration should be assumed.
   */
  kp?: number;

  /**
   * The time, in hours, over which the K, Kp, and/or gamma index values are
   * measured. If null, a span of 3 hours is assumed.
   */
  kpDuration?: number;

  /**
   * Daily M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  m10?: number;

  /**
   * 54 day M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  m54?: number;

  /**
   * The transmitted DCA mode of the record (1-3).
   */
  mode?: number;

  /**
   * The normalization factor that has already been applied to the index value prior
   * to record ingest. Typically used to normalize the index value to a particular
   * interval. Units of the normalization factor may vary depending on the provider
   * of this data (REACH, POES, CEASE3, etc.).
   */
  normFactor?: number;

  /**
   * Observed baseline values of the frequencies specified in the frequencies field,
   * in solar flux units. The baseline values will be used to help detect abnormal
   * readings from the sun that might indicate a flare or other solar activity.
   */
  observedBaseline?: Array<number>;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the reporting source to indicate the sensor
   * identifier which produced this data. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Array of individual power spectral density (PSD) powers of the signal, in watts.
   * This array should correspond with the same-sized array of frequencies.
   */
  powers?: Array<number>;

  /**
   * The precedence of data in this record (O = Immediate, P = Priority, R = Routine,
   * Y = Emergency, Z = Flash).
   */
  precedence?: 'O' | 'P' | 'R' | 'Y' | 'Z';

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The timespan over which the associated radiation belt index is factored. If
   * rbDuration is null, a 24 hour duration should be assumed. Note: rbDuration
   * defines the length of the time window for this data record. The time window
   * start time is defined by sgiDate, and the time window end time is defined by
   * sgiDate plus rbDuration.
   */
  rbDuration?: number;

  /**
   * The value of the radiation belt index. This is the ratio of current intensity of
   * a radiation belt to long-term average value. It's long-term average should be
   * close to 1. Depending on the type of belt sensor, this ratio may measure Flux
   * (number of particles / (cm^2 sec energy solid-angle)), dose rate (rad per
   * second), or relative counts of particles per time (counts per second). The index
   * value may also be normalized, the normalization value typically represents an
   * average of the sensor measurements taken within a region over a given time
   * interval. See the normFactor field for the specific normalization factor, if
   * provided.
   */
  rbIndex?: number;

  /**
   * Region code for the associated radiation belt index. This is the code associated
   * with the corresponding radiation belt location. See the provider card for
   * reference to specific region code definitions.
   */
  rbRegionCode?: number;

  /**
   * Daily S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  s10?: number;

  /**
   * 54 day S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
   * emissions in x10-22 Watts per meter squared per Hertz.
   */
  s54?: number;

  /**
   * State indicating Issued (I), Nowcast (N), or Predicted (P) values for this
   * record.
   */
  state?: 'I' | 'N' | 'P';

  /**
   * The name/location of the station that collected the geomagnetic data for this
   * record.
   */
  stationName?: string;

  /**
   * Array containing the sine spherical-harmonic coefficients for Exospheric
   * temperature (DTC) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  stce?: Array<number>;

  /**
   * Array containing the sine spherical harmonic coefficients for Inflection
   * temperature (DTX) difference. Each array element corresponds to the positional
   * index of the coeffDegree and coeffOrder arrays.
   */
  stci?: Array<number>;

  /**
   * Daily sunspot number.
   */
  sunspotNum?: number;

  /**
   * Daily sunspot number - high range. This field usually applies to forecast
   * values, based on the consensus of the Solar Cycle 24 Prediction Panel.
   */
  sunspotNumHigh?: number;

  /**
   * Daily sunspot number - low range. This field usually applies to forecast values,
   * based on the consensus of the Solar Cycle 24 Prediction Panel.
   */
  sunspotNumLow?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * The type of data contained in this record (e.g. HASDM, JBH09, K-Index, PSD-dB,
   * RBI, RFI-SFU, etc).
   */
  type?: string;

  /**
   * Daily Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
   * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
   */
  y10?: number;

  /**
   * 54 day Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
   * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
   */
  y54?: number;
}

export interface SgiListParams extends OffsetPageParams {
  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * the data was received and processed from the source. Typically a source provides
   * solar data for a date window with each transmission including past, present, and
   * future predicted values. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  effectiveDate?: string;

  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * of the index value. This could be a past, current, or future predicted value.
   * Note: sgiDate defines the start time of the time window for this data record.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  sgiDate?: string;
}

export interface SgiCountParams {
  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * the data was received and processed from the source. Typically a source provides
   * solar data for a date window with each transmission including past, present, and
   * future predicted values. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  effectiveDate?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * of the index value. This could be a past, current, or future predicted value.
   * Note: sgiDate defines the start time of the time window for this data record.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  sgiDate?: string;
}

export interface SgiCreateBulkParams {
  body: Array<SgiCreateBulkParams.Body>;
}

export namespace SgiCreateBulkParams {
  /**
   * Model representation of space weather/solar, geomagnetic, and radiation belt
   * indices.
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
     * ISO8601 UTC Time the data was received and processed from the source. Typically
     * a source provides data for a date window with each transmission including past,
     * present, and future predicted values.
     */
    effectiveDate: string;

    /**
     * ISO8601 UTC Time of the index value. This could be a past, current, or future
     * predicted value. Note: sgiDate defines the start time of the time window for
     * this data record.
     */
    sgiDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Signal analyzer's input attenuation level, in decibels. Attenuation is a setting
     * on the hardware that measures the power of a signal.
     */
    analyzerAttenuation?: number;

    /**
     * Ap is the planetary geomagnetic 2 nT index (00-21 UT) for the timespan specified
     * in apDuration. If apDuration is null, a 3 hour duration should be assumed.
     */
    ap?: number;

    /**
     * The time, in hours, for which the Ap index value is valid. If null, a span of 3
     * hours is assumed.
     */
    apDuration?: number;

    /**
     * Array containing the degree of the temperature coefficients. The coeffDegree and
     * coeffOrder arrays must be the same length.
     */
    coeffDegree?: Array<number>;

    /**
     * Array containing the order of the temperature coefficients. The coeffDegree and
     * coeffOrder arrays must be the same length.
     */
    coeffOrder?: Array<number>;

    /**
     * Array containing the cosine spherical-harmonic coefficients for Exospheric
     * temperature (DTC) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    ctce?: Array<number>;

    /**
     * Array containing the cosine spherical-harmonic coefficients for Inflection
     * temperature (DTX) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    ctci?: Array<number>;

    /**
     * Disturbance Storm Time geomagnetic index in nT.
     */
    dst?: number;

    /**
     * delta exospheric temperature correction in units of K.
     */
    dtc?: number;

    /**
     * Extreme Ultraviolet (EUV) proxy, E10.7, in x10-22 Watts per meter squared per
     * Hertz, is the integrated solar EUV energy flux at the top of atmosphere and
     * normalized to solar flux units.
     */
    e10?: number;

    /**
     * E54 (E10-Bar), in x10-22 Watts per meter squared per Hertz, uses the past
     * 54-days E10 values to determine the E10 average.
     */
    e54?: number;

    /**
     * Daily solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
     */
    f10?: number;

    /**
     * Daily F10.7 index - high range, in x10-22 Watts per meter squared per Hertz.
     * This field usually applies to forecast values, based on the consensus of the
     * Solar Cycle 24 Prediction Panel.
     */
    f10High?: number;

    /**
     * Daily F10.7 index - low range, in x10-22 Watts per meter squared per Hertz. This
     * field usually applies to forecast values, based on the consensus of the Solar
     * Cycle 24 Prediction Panel.
     */
    f10Low?: number;

    /**
     * 54 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
     */
    f54?: number;

    /**
     * 81 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
     */
    f81?: number;

    /**
     * Array of individual power spectral density (PSD) frequencies of the signal, in
     * megahertz. This array should correspond with the same-sized array of powers.
     */
    frequencies?: Array<number>;

    /**
     * The maximum measured gamma deflection during the kpDuration timespan. If
     * kpDuration is null, a 3 hour duration should be assumed.
     */
    gamma?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * The maximum measured K-Index at the associated station during the kpDuration
     * timespan. The K-Index is a unitless measure (0 - 9) of the deviation in the
     * Earth's magnetic field from normal at the station geographic location, with 0
     * indicating the absence of geomagnetic disturbance, and 9 indicating the most
     * significant disturbance. If kpDuration is null, a 3 hour duration should be
     * assumed.
     */
    kIndex?: number;

    /**
     * The Planetary K-index (Kp) over the kpDuration timespan. The Kp-Index is the
     * average K-Index for the entire Earth, utilizing a unitless scale (0-9, in
     * incremenets of 1/3), with 0 indicating the absence of geomagnetic disturbance,
     * and 9 indicating the most significant disturbance. If kpDuration is null, a 3
     * hour duration should be assumed.
     */
    kp?: number;

    /**
     * The time, in hours, over which the K, Kp, and/or gamma index values are
     * measured. If null, a span of 3 hours is assumed.
     */
    kpDuration?: number;

    /**
     * Daily M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    m10?: number;

    /**
     * 54 day M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    m54?: number;

    /**
     * The transmitted DCA mode of the record (1-3).
     */
    mode?: number;

    /**
     * The normalization factor that has already been applied to the index value prior
     * to record ingest. Typically used to normalize the index value to a particular
     * interval. Units of the normalization factor may vary depending on the provider
     * of this data (REACH, POES, CEASE3, etc.).
     */
    normFactor?: number;

    /**
     * Observed baseline values of the frequencies specified in the frequencies field,
     * in solar flux units. The baseline values will be used to help detect abnormal
     * readings from the sun that might indicate a flare or other solar activity.
     */
    observedBaseline?: Array<number>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the reporting source to indicate the sensor
     * identifier which produced this data. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Array of individual power spectral density (PSD) powers of the signal, in watts.
     * This array should correspond with the same-sized array of frequencies.
     */
    powers?: Array<number>;

    /**
     * The precedence of data in this record (O = Immediate, P = Priority, R = Routine,
     * Y = Emergency, Z = Flash).
     */
    precedence?: 'O' | 'P' | 'R' | 'Y' | 'Z';

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * The timespan over which the associated radiation belt index is factored. If
     * rbDuration is null, a 24 hour duration should be assumed. Note: rbDuration
     * defines the length of the time window for this data record. The time window
     * start time is defined by sgiDate, and the time window end time is defined by
     * sgiDate plus rbDuration.
     */
    rbDuration?: number;

    /**
     * The value of the radiation belt index. This is the ratio of current intensity of
     * a radiation belt to long-term average value. It's long-term average should be
     * close to 1. Depending on the type of belt sensor, this ratio may measure Flux
     * (number of particles / (cm^2 sec energy solid-angle)), dose rate (rad per
     * second), or relative counts of particles per time (counts per second). The index
     * value may also be normalized, the normalization value typically represents an
     * average of the sensor measurements taken within a region over a given time
     * interval. See the normFactor field for the specific normalization factor, if
     * provided.
     */
    rbIndex?: number;

    /**
     * Region code for the associated radiation belt index. This is the code associated
     * with the corresponding radiation belt location. See the provider card for
     * reference to specific region code definitions.
     */
    rbRegionCode?: number;

    /**
     * Daily S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    s10?: number;

    /**
     * 54 day S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    s54?: number;

    /**
     * State indicating Issued (I), Nowcast (N), or Predicted (P) values for this
     * record.
     */
    state?: 'I' | 'N' | 'P';

    /**
     * The name/location of the station that collected the geomagnetic data for this
     * record.
     */
    stationName?: string;

    /**
     * Array containing the sine spherical-harmonic coefficients for Exospheric
     * temperature (DTC) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    stce?: Array<number>;

    /**
     * Array containing the sine spherical harmonic coefficients for Inflection
     * temperature (DTX) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    stci?: Array<number>;

    /**
     * Daily sunspot number.
     */
    sunspotNum?: number;

    /**
     * Daily sunspot number - high range. This field usually applies to forecast
     * values, based on the consensus of the Solar Cycle 24 Prediction Panel.
     */
    sunspotNumHigh?: number;

    /**
     * Daily sunspot number - low range. This field usually applies to forecast values,
     * based on the consensus of the Solar Cycle 24 Prediction Panel.
     */
    sunspotNumLow?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * The type of data contained in this record (e.g. HASDM, JBH09, K-Index, PSD-dB,
     * RBI, RFI-SFU, etc).
     */
    type?: string;

    /**
     * Daily Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
     * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
     */
    y10?: number;

    /**
     * 54 day Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
     * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
     */
    y54?: number;
  }
}

export interface SgiGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SgiGetDataByEffectiveAsOfDateParams {
  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * the data was received and processed from the source. Typically a source provides
   * solar data for a date window with each transmission including past, present, and
   * future predicted values. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  effectiveDate?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * of the index value. This could be a past, current, or future predicted value.
   * Note: sgiDate defines the start time of the time window for this data record.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  sgiDate?: string;
}

export interface SgiTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * the data was received and processed from the source. Typically a source provides
   * solar data for a date window with each transmission including past, present, and
   * future predicted values. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  effectiveDate?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * of the index value. This could be a past, current, or future predicted value.
   * Note: sgiDate defines the start time of the time window for this data record.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  sgiDate?: string;
}

export interface SgiUnvalidatedPublishParams {
  body: Array<SgiUnvalidatedPublishParams.Body>;
}

export namespace SgiUnvalidatedPublishParams {
  /**
   * Model representation of space weather/solar, geomagnetic, and radiation belt
   * indices.
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
     * ISO8601 UTC Time the data was received and processed from the source. Typically
     * a source provides data for a date window with each transmission including past,
     * present, and future predicted values.
     */
    effectiveDate: string;

    /**
     * ISO8601 UTC Time of the index value. This could be a past, current, or future
     * predicted value. Note: sgiDate defines the start time of the time window for
     * this data record.
     */
    sgiDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Signal analyzer's input attenuation level, in decibels. Attenuation is a setting
     * on the hardware that measures the power of a signal.
     */
    analyzerAttenuation?: number;

    /**
     * Ap is the planetary geomagnetic 2 nT index (00-21 UT) for the timespan specified
     * in apDuration. If apDuration is null, a 3 hour duration should be assumed.
     */
    ap?: number;

    /**
     * The time, in hours, for which the Ap index value is valid. If null, a span of 3
     * hours is assumed.
     */
    apDuration?: number;

    /**
     * Array containing the degree of the temperature coefficients. The coeffDegree and
     * coeffOrder arrays must be the same length.
     */
    coeffDegree?: Array<number>;

    /**
     * Array containing the order of the temperature coefficients. The coeffDegree and
     * coeffOrder arrays must be the same length.
     */
    coeffOrder?: Array<number>;

    /**
     * Array containing the cosine spherical-harmonic coefficients for Exospheric
     * temperature (DTC) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    ctce?: Array<number>;

    /**
     * Array containing the cosine spherical-harmonic coefficients for Inflection
     * temperature (DTX) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    ctci?: Array<number>;

    /**
     * Disturbance Storm Time geomagnetic index in nT.
     */
    dst?: number;

    /**
     * delta exospheric temperature correction in units of K.
     */
    dtc?: number;

    /**
     * Extreme Ultraviolet (EUV) proxy, E10.7, in x10-22 Watts per meter squared per
     * Hertz, is the integrated solar EUV energy flux at the top of atmosphere and
     * normalized to solar flux units.
     */
    e10?: number;

    /**
     * E54 (E10-Bar), in x10-22 Watts per meter squared per Hertz, uses the past
     * 54-days E10 values to determine the E10 average.
     */
    e54?: number;

    /**
     * Daily solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
     */
    f10?: number;

    /**
     * Daily F10.7 index - high range, in x10-22 Watts per meter squared per Hertz.
     * This field usually applies to forecast values, based on the consensus of the
     * Solar Cycle 24 Prediction Panel.
     */
    f10High?: number;

    /**
     * Daily F10.7 index - low range, in x10-22 Watts per meter squared per Hertz. This
     * field usually applies to forecast values, based on the consensus of the Solar
     * Cycle 24 Prediction Panel.
     */
    f10Low?: number;

    /**
     * 54 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
     */
    f54?: number;

    /**
     * 81 day solar 10.7 cm radio flux in x10-22 Watts per meter squared per Hertz.
     */
    f81?: number;

    /**
     * Array of individual power spectral density (PSD) frequencies of the signal, in
     * megahertz. This array should correspond with the same-sized array of powers.
     */
    frequencies?: Array<number>;

    /**
     * The maximum measured gamma deflection during the kpDuration timespan. If
     * kpDuration is null, a 3 hour duration should be assumed.
     */
    gamma?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * The maximum measured K-Index at the associated station during the kpDuration
     * timespan. The K-Index is a unitless measure (0 - 9) of the deviation in the
     * Earth's magnetic field from normal at the station geographic location, with 0
     * indicating the absence of geomagnetic disturbance, and 9 indicating the most
     * significant disturbance. If kpDuration is null, a 3 hour duration should be
     * assumed.
     */
    kIndex?: number;

    /**
     * The Planetary K-index (Kp) over the kpDuration timespan. The Kp-Index is the
     * average K-Index for the entire Earth, utilizing a unitless scale (0-9, in
     * incremenets of 1/3), with 0 indicating the absence of geomagnetic disturbance,
     * and 9 indicating the most significant disturbance. If kpDuration is null, a 3
     * hour duration should be assumed.
     */
    kp?: number;

    /**
     * The time, in hours, over which the K, Kp, and/or gamma index values are
     * measured. If null, a span of 3 hours is assumed.
     */
    kpDuration?: number;

    /**
     * Daily M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    m10?: number;

    /**
     * 54 day M10.7 index for 100-110 km heating of O2 by solar photosphere. 160 nm SRC
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    m54?: number;

    /**
     * The transmitted DCA mode of the record (1-3).
     */
    mode?: number;

    /**
     * The normalization factor that has already been applied to the index value prior
     * to record ingest. Typically used to normalize the index value to a particular
     * interval. Units of the normalization factor may vary depending on the provider
     * of this data (REACH, POES, CEASE3, etc.).
     */
    normFactor?: number;

    /**
     * Observed baseline values of the frequencies specified in the frequencies field,
     * in solar flux units. The baseline values will be used to help detect abnormal
     * readings from the sun that might indicate a flare or other solar activity.
     */
    observedBaseline?: Array<number>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the reporting source to indicate the sensor
     * identifier which produced this data. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Array of individual power spectral density (PSD) powers of the signal, in watts.
     * This array should correspond with the same-sized array of frequencies.
     */
    powers?: Array<number>;

    /**
     * The precedence of data in this record (O = Immediate, P = Priority, R = Routine,
     * Y = Emergency, Z = Flash).
     */
    precedence?: 'O' | 'P' | 'R' | 'Y' | 'Z';

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * The timespan over which the associated radiation belt index is factored. If
     * rbDuration is null, a 24 hour duration should be assumed. Note: rbDuration
     * defines the length of the time window for this data record. The time window
     * start time is defined by sgiDate, and the time window end time is defined by
     * sgiDate plus rbDuration.
     */
    rbDuration?: number;

    /**
     * The value of the radiation belt index. This is the ratio of current intensity of
     * a radiation belt to long-term average value. It's long-term average should be
     * close to 1. Depending on the type of belt sensor, this ratio may measure Flux
     * (number of particles / (cm^2 sec energy solid-angle)), dose rate (rad per
     * second), or relative counts of particles per time (counts per second). The index
     * value may also be normalized, the normalization value typically represents an
     * average of the sensor measurements taken within a region over a given time
     * interval. See the normFactor field for the specific normalization factor, if
     * provided.
     */
    rbIndex?: number;

    /**
     * Region code for the associated radiation belt index. This is the code associated
     * with the corresponding radiation belt location. See the provider card for
     * reference to specific region code definitions.
     */
    rbRegionCode?: number;

    /**
     * Daily S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    s10?: number;

    /**
     * 54 day S10.7 index for >200 km heating of O by solar chromosphere. 28.4-30.4 nm
     * emissions in x10-22 Watts per meter squared per Hertz.
     */
    s54?: number;

    /**
     * State indicating Issued (I), Nowcast (N), or Predicted (P) values for this
     * record.
     */
    state?: 'I' | 'N' | 'P';

    /**
     * The name/location of the station that collected the geomagnetic data for this
     * record.
     */
    stationName?: string;

    /**
     * Array containing the sine spherical-harmonic coefficients for Exospheric
     * temperature (DTC) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    stce?: Array<number>;

    /**
     * Array containing the sine spherical harmonic coefficients for Inflection
     * temperature (DTX) difference. Each array element corresponds to the positional
     * index of the coeffDegree and coeffOrder arrays.
     */
    stci?: Array<number>;

    /**
     * Daily sunspot number.
     */
    sunspotNum?: number;

    /**
     * Daily sunspot number - high range. This field usually applies to forecast
     * values, based on the consensus of the Solar Cycle 24 Prediction Panel.
     */
    sunspotNumHigh?: number;

    /**
     * Daily sunspot number - low range. This field usually applies to forecast values,
     * based on the consensus of the Solar Cycle 24 Prediction Panel.
     */
    sunspotNumLow?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * The type of data contained in this record (e.g. HASDM, JBH09, K-Index, PSD-dB,
     * RBI, RFI-SFU, etc).
     */
    type?: string;

    /**
     * Daily Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
     * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
     */
    y10?: number;

    /**
     * 54 day Y10.7 index for 85-90 km heating of N2, O2, H2O, NO by solar coronal.
     * 0.1-0.8 nm and Lya 121 nm emissions in x10-22 Watts per meter squared per Hertz.
     */
    y54?: number;
  }
}

Sgi.History = History;

export declare namespace Sgi {
  export {
    type SgiListResponse as SgiListResponse,
    type SgiCountResponse as SgiCountResponse,
    type SgiGetResponse as SgiGetResponse,
    type SgiGetDataByEffectiveAsOfDateResponse as SgiGetDataByEffectiveAsOfDateResponse,
    type SgiQueryhelpResponse as SgiQueryhelpResponse,
    type SgiTupleResponse as SgiTupleResponse,
    type SgiListResponsesOffsetPage as SgiListResponsesOffsetPage,
    type SgiCreateParams as SgiCreateParams,
    type SgiUpdateParams as SgiUpdateParams,
    type SgiListParams as SgiListParams,
    type SgiCountParams as SgiCountParams,
    type SgiCreateBulkParams as SgiCreateBulkParams,
    type SgiGetParams as SgiGetParams,
    type SgiGetDataByEffectiveAsOfDateParams as SgiGetDataByEffectiveAsOfDateParams,
    type SgiTupleParams as SgiTupleParams,
    type SgiUnvalidatedPublishParams as SgiUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
