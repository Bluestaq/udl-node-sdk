// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import { History, HistoryCountParams, HistoryCountResponse } from './history';
import * as RfobservationHistoryAPI from '../udl/rfobservation/history';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rfobservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single RF observation as a POST body and ingest into
   * the database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   */
  create(body: RfobservationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/rfobservation', {
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
   */
  list(query: RfobservationListParams, options?: RequestOptions): APIPromise<RfobservationListResponse> {
    return this._client.get('/udl/rfobservation', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: RfobservationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/rfobservation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of RF
   * observations as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   */
  createBulk(params: RfobservationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/rfobservation/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single RF observation by its unique ID passed as a
   * path parameter.
   */
  get(id: string, options?: RequestOptions): APIPromise<RfobservationHistoryAPI.RfobservationdetailsFull> {
    return this._client.get(path`/udl/rfobservation/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/rfobservation/queryhelp', {
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
  tuple(query: RfobservationTupleParams, options?: RequestOptions): APIPromise<RfobservationTupleResponse> {
    return this._client.get('/udl/rfobservation/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple RF observations as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: RfobservationUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-rf', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type RfobservationListResponse = Array<RfobservationListResponse.RfobservationListResponseItem>;

export namespace RfobservationListResponse {
  /**
   * Model representation of observation data for active/passive radio frequency (RF)
   * based sensor phenomenologies. J2000 is the preferred coordinate frame for all
   * observations, but in some cases observations may be in another frame depending
   * on the provider. Please see the 'Discover' tab in the storefront to confirm
   * coordinate frames by data provider. RF observations include several optional
   * ordered arrays which are used to provide detailed information on recorded
   * signals such as power spectral density lists or active signals (code taps/fills,
   * etc). In these cases, the sizes of the arrays must match and can be assumed to
   * have consistent indexing across arrays (e.g. powers[0] is the measured power at
   * frequencies[0]).
   */
  export interface RfobservationListResponseItem {
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
     * Type of RF ob (e.g. RF, RF-SOSI, PSD, RFI, SPOOF, etc).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Antenna name of the RFObservation record.
     */
    antennaName?: string;

    /**
     * azimuth angle in degrees and J2000 coordinate frame.
     */
    azimuth?: number;

    /**
     * Optional flag indicating whether the azimuth value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    azimuthMeasured?: boolean;

    /**
     * Rate of change of the azimuth in degrees per second.
     */
    azimuthRate?: number;

    /**
     * One sigma uncertainty in the azimuth angle measurement, in degrees.
     */
    azimuthUnc?: number;

    /**
     * Measured bandwidth in Hz.
     */
    bandwidth?: number;

    /**
     * Baud rate is the number of symbol changes, waveform changes, or signaling
     * events, across the transmission medium per second.
     */
    baudRate?: number;

    /**
     * The ratio of bit errors per number of received bits.
     */
    bitErrorRate?: number;

    /**
     * Carrier standard (e.g. DVB-S2, 802.11g, etc.).
     */
    carrierStandard?: string;

    /**
     * Channel of the RFObservation record.
     */
    channel?: number;

    /**
     * Collection mode (e.g. SURVEY, SPOT_SEARCH, NEIGHBORHOOD_WATCH, DIRECTED_SEARCH,
     * MANUAL, etc).
     */
    collectionMode?: string;

    /**
     * Confidence in the signal and its measurements and characterization.
     */
    confidence?: number;

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
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Detection status (e.g. DETECTED, CARRIER_ACQUIRING, CARRIER_DETECTED,
     * NOT_DETECTED, etc).
     */
    detectionStatus?: string;

    /**
     * Measured Equivalent Isotopically Radiated Power in dBW.
     */
    eirp?: number;

    /**
     * elevation in degrees and J2000 coordinate frame.
     */
    elevation?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the elevation angle measurement, in degrees.
     */
    elevationUnc?: number;

    /**
     * ELINT notation.
     */
    elnot?: string;

    /**
     * End carrier frequency in Hz.
     */
    endFrequency?: number;

    /**
     * Center carrier frequency in Hz.
     */
    frequency?: number;

    /**
     * Frequency Shift of the RFObservation record.
     */
    frequencyShift?: number;

    /**
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * True if the signal is incoming, false if outgoing.
     */
    incoming?: boolean;

    /**
     * Inner forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
     * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    innerCodingRate?: number;

    /**
     * Maximum measured PSD value of the trace in dBW.
     */
    maxPSD?: number;

    /**
     * Minimum measured PSD value of the trace in dBW.
     */
    minPSD?: number;

    /**
     * Transponder modulation (e.g. Auto, QPSK, 8PSK, etc).
     */
    modulation?: string;

    /**
     * Noise power density, in dBW-Hz.
     */
    noisePwrDensity?: number;

    /**
     * Expected bandwidth in Hz.
     */
    nominalBandwidth?: number;

    /**
     * Expected Equivalent Isotopically Radiated Power in dBW.
     */
    nominalEirp?: number;

    /**
     * Nominal or expected center carrier frequency in Hz.
     */
    nominalFrequency?: number;

    /**
     * Expected carrier power over noise (dBW/Hz).
     */
    nominalPowerOverNoise?: number;

    /**
     * Nominal or expected signal to noise ratio, in dB.
     */
    nominalSnr?: number;

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
     * Outer forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
     * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    outerCodingRate?: number;

    /**
     * Peak of the RFObservation record.
     */
    peak?: boolean;

    /**
     * A pulse group repetition interval (PGRI) is a pulse train in which there are
     * groups of closely spaced pulses separated by much longer times between these
     * pulse groups.
     */
    pgri?: number;

    /**
     * The antenna pointing dependent polarizer angle, in degrees.
     */
    polarity?: number;

    /**
     * Transponder polarization e.g. H - (Horizontally Polarized) Perpendicular to
     * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
     * (Left Hand Circularly Polarized) Rotating left relative to the earth's surface,
     * R - (Right Hand Circularly Polarized) Rotating right relative to the earth's
     * surface.
     */
    polarityType?: 'H' | 'V' | 'R' | 'L';

    /**
     * Measured carrier power over noise (dBW/Hz).
     */
    powerOverNoise?: number;

    /**
     * Target range in km.
     */
    range?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Rate of change of the range in km/sec.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the range rate measurement, in kilometers/second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the range measurement, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Reference signal level, in dBW.
     */
    referenceLevel?: number;

    /**
     * Measured power of the center carrier frequency in dBW.
     */
    relativeCarrierPower?: number;

    /**
     * The measure of the signal created from the sum of all the noise sources and
     * unwanted signals within the measurement system, in dBW.
     */
    relativeNoiseFloor?: number;

    /**
     * Resolution bandwidth in Hz.
     */
    resolutionBandwidth?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
     * from sensor info.
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
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Measured spectrum analyzer power of the center carrier frequency in dBW.
     */
    spectrumAnalyzerPower?: number;

    /**
     * Start carrier frequency in Hz.
     */
    startFrequency?: number;

    /**
     * Switch Point of the RFObservation record.
     */
    switchPoint?: number;

    /**
     * Symbol to noise ratio, in dB.
     */
    symbolToNoiseRatio?: number;

    /**
     * Optional identifier to indicate the specific tasking which produced this
     * observation.
     */
    taskId?: string;

    /**
     * Optional identifier of the track to which this observation belongs.
     */
    trackId?: string;

    /**
     * Target track or apparent range in km.
     */
    trackRange?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Transmit pulse shaping filter roll-off value.
     */
    transmitFilterRollOff?: number;

    /**
     * Transmit pulse shaping filter typ (e.g. RRC).
     */
    transmitFilterType?: string;

    /**
     * Optional identifier provided by observation source to indicate the transponder
     * used for this measurement.
     */
    transponder?: string;

    /**
     * Boolean indicating this observation is part of an uncorrelated track or was
     * unable to be correlated to a known object. This flag should only be set to true
     * by data providers after an attempt to correlate to an on-orbit object was made
     * and failed. If unable to correlate, the 'origObjectId' field may be populated
     * with an internal data provider specific identifier.
     */
    uct?: boolean;

    /**
     * Optional URL containing additional information on this observation.
     */
    url?: string;

    /**
     * Video bandwidth in Hz.
     */
    videoBandwidth?: number;
  }
}

export type RfobservationCountResponse = string;

export type RfobservationTupleResponse = Array<RfobservationTupleResponse.RfobservationTupleResponseItem>;

export namespace RfobservationTupleResponse {
  /**
   * Model representation of observation data for active/passive radio frequency (RF)
   * based sensor phenomenologies. J2000 is the preferred coordinate frame for all
   * observations, but in some cases observations may be in another frame depending
   * on the provider. Please see the 'Discover' tab in the storefront to confirm
   * coordinate frames by data provider. RF observations include several optional
   * ordered arrays which are used to provide detailed information on recorded
   * signals such as power spectral density lists or active signals (code taps/fills,
   * etc). In these cases, the sizes of the arrays must match and can be assumed to
   * have consistent indexing across arrays (e.g. powers[0] is the measured power at
   * frequencies[0]).
   */
  export interface RfobservationTupleResponseItem {
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
     * Type of RF ob (e.g. RF, RF-SOSI, PSD, RFI, SPOOF, etc).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Antenna name of the RFObservation record.
     */
    antennaName?: string;

    /**
     * azimuth angle in degrees and J2000 coordinate frame.
     */
    azimuth?: number;

    /**
     * Optional flag indicating whether the azimuth value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    azimuthMeasured?: boolean;

    /**
     * Rate of change of the azimuth in degrees per second.
     */
    azimuthRate?: number;

    /**
     * One sigma uncertainty in the azimuth angle measurement, in degrees.
     */
    azimuthUnc?: number;

    /**
     * Measured bandwidth in Hz.
     */
    bandwidth?: number;

    /**
     * Baud rate is the number of symbol changes, waveform changes, or signaling
     * events, across the transmission medium per second.
     */
    baudRate?: number;

    /**
     * The ratio of bit errors per number of received bits.
     */
    bitErrorRate?: number;

    /**
     * Carrier standard (e.g. DVB-S2, 802.11g, etc.).
     */
    carrierStandard?: string;

    /**
     * Channel of the RFObservation record.
     */
    channel?: number;

    /**
     * Collection mode (e.g. SURVEY, SPOT_SEARCH, NEIGHBORHOOD_WATCH, DIRECTED_SEARCH,
     * MANUAL, etc).
     */
    collectionMode?: string;

    /**
     * Confidence in the signal and its measurements and characterization.
     */
    confidence?: number;

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
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Detection status (e.g. DETECTED, CARRIER_ACQUIRING, CARRIER_DETECTED,
     * NOT_DETECTED, etc).
     */
    detectionStatus?: string;

    /**
     * Measured Equivalent Isotopically Radiated Power in dBW.
     */
    eirp?: number;

    /**
     * elevation in degrees and J2000 coordinate frame.
     */
    elevation?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the elevation angle measurement, in degrees.
     */
    elevationUnc?: number;

    /**
     * ELINT notation.
     */
    elnot?: string;

    /**
     * End carrier frequency in Hz.
     */
    endFrequency?: number;

    /**
     * Center carrier frequency in Hz.
     */
    frequency?: number;

    /**
     * Frequency Shift of the RFObservation record.
     */
    frequencyShift?: number;

    /**
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * True if the signal is incoming, false if outgoing.
     */
    incoming?: boolean;

    /**
     * Inner forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
     * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    innerCodingRate?: number;

    /**
     * Maximum measured PSD value of the trace in dBW.
     */
    maxPSD?: number;

    /**
     * Minimum measured PSD value of the trace in dBW.
     */
    minPSD?: number;

    /**
     * Transponder modulation (e.g. Auto, QPSK, 8PSK, etc).
     */
    modulation?: string;

    /**
     * Noise power density, in dBW-Hz.
     */
    noisePwrDensity?: number;

    /**
     * Expected bandwidth in Hz.
     */
    nominalBandwidth?: number;

    /**
     * Expected Equivalent Isotopically Radiated Power in dBW.
     */
    nominalEirp?: number;

    /**
     * Nominal or expected center carrier frequency in Hz.
     */
    nominalFrequency?: number;

    /**
     * Expected carrier power over noise (dBW/Hz).
     */
    nominalPowerOverNoise?: number;

    /**
     * Nominal or expected signal to noise ratio, in dB.
     */
    nominalSnr?: number;

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
     * Outer forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
     * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    outerCodingRate?: number;

    /**
     * Peak of the RFObservation record.
     */
    peak?: boolean;

    /**
     * A pulse group repetition interval (PGRI) is a pulse train in which there are
     * groups of closely spaced pulses separated by much longer times between these
     * pulse groups.
     */
    pgri?: number;

    /**
     * The antenna pointing dependent polarizer angle, in degrees.
     */
    polarity?: number;

    /**
     * Transponder polarization e.g. H - (Horizontally Polarized) Perpendicular to
     * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
     * (Left Hand Circularly Polarized) Rotating left relative to the earth's surface,
     * R - (Right Hand Circularly Polarized) Rotating right relative to the earth's
     * surface.
     */
    polarityType?: 'H' | 'V' | 'R' | 'L';

    /**
     * Measured carrier power over noise (dBW/Hz).
     */
    powerOverNoise?: number;

    /**
     * Target range in km.
     */
    range?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Rate of change of the range in km/sec.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the range rate measurement, in kilometers/second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the range measurement, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Reference signal level, in dBW.
     */
    referenceLevel?: number;

    /**
     * Measured power of the center carrier frequency in dBW.
     */
    relativeCarrierPower?: number;

    /**
     * The measure of the signal created from the sum of all the noise sources and
     * unwanted signals within the measurement system, in dBW.
     */
    relativeNoiseFloor?: number;

    /**
     * Resolution bandwidth in Hz.
     */
    resolutionBandwidth?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
     * from sensor info.
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
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Measured spectrum analyzer power of the center carrier frequency in dBW.
     */
    spectrumAnalyzerPower?: number;

    /**
     * Start carrier frequency in Hz.
     */
    startFrequency?: number;

    /**
     * Switch Point of the RFObservation record.
     */
    switchPoint?: number;

    /**
     * Symbol to noise ratio, in dB.
     */
    symbolToNoiseRatio?: number;

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
     * Optional identifier of the track to which this observation belongs.
     */
    trackId?: string;

    /**
     * Target track or apparent range in km.
     */
    trackRange?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Transmit pulse shaping filter roll-off value.
     */
    transmitFilterRollOff?: number;

    /**
     * Transmit pulse shaping filter typ (e.g. RRC).
     */
    transmitFilterType?: string;

    /**
     * Optional identifier provided by observation source to indicate the transponder
     * used for this measurement.
     */
    transponder?: string;

    /**
     * Boolean indicating this observation is part of an uncorrelated track or was
     * unable to be correlated to a known object. This flag should only be set to true
     * by data providers after an attempt to correlate to an on-orbit object was made
     * and failed. If unable to correlate, the 'origObjectId' field may be populated
     * with an internal data provider specific identifier.
     */
    uct?: boolean;

    /**
     * Optional URL containing additional information on this observation.
     */
    url?: string;

    /**
     * Video bandwidth in Hz.
     */
    videoBandwidth?: number;
  }
}

export interface RfobservationCreateParams {
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
   * Type of RF ob (e.g. RF, RF-SOSI, PSD, RFI, SPOOF, etc).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Antenna name of the RFObservation record.
   */
  antennaName?: string;

  /**
   * azimuth angle in degrees and J2000 coordinate frame.
   */
  azimuth?: number;

  /**
   * Optional flag indicating whether the azimuth value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  azimuthMeasured?: boolean;

  /**
   * Rate of change of the azimuth in degrees per second.
   */
  azimuthRate?: number;

  /**
   * One sigma uncertainty in the azimuth angle measurement, in degrees.
   */
  azimuthUnc?: number;

  /**
   * Measured bandwidth in Hz.
   */
  bandwidth?: number;

  /**
   * Baud rate is the number of symbol changes, waveform changes, or signaling
   * events, across the transmission medium per second.
   */
  baudRate?: number;

  /**
   * Array of measured signal baud rates.
   */
  baudRates?: Array<number>;

  /**
   * The ratio of bit errors per number of received bits.
   */
  bitErrorRate?: number;

  /**
   * Carrier standard (e.g. DVB-S2, 802.11g, etc.).
   */
  carrierStandard?: string;

  /**
   * Channel of the RFObservation record.
   */
  channel?: number;

  /**
   * Array of chipRates.
   */
  chipRates?: Array<number>;

  /**
   * Array of code fills.
   */
  codeFills?: Array<string>;

  /**
   * Array of code lengths.
   */
  codeLengths?: Array<number>;

  /**
   * Array of code taps.
   */
  codeTaps?: Array<string>;

  /**
   * Collection mode (e.g. SURVEY, SPOT_SEARCH, NEIGHBORHOOD_WATCH, DIRECTED_SEARCH,
   * MANUAL, etc).
   */
  collectionMode?: string;

  /**
   * Confidence in the signal and its measurements and characterization.
   */
  confidence?: number;

  /**
   * Array of measurement confidences.
   */
  confidences?: Array<number>;

  /**
   * Array of individual x-coordinates for demodulated signal constellation. This
   * array should correspond with the same-sized array of constellationYPoints.
   */
  constellationXPoints?: Array<number>;

  /**
   * Array of individual y-coordinates for demodulated signal constellation. This
   * array should correspond with the same-sized array of constellationXPoints.
   */
  constellationYPoints?: Array<number>;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Detection status (e.g. DETECTED, CARRIER_ACQUIRING, CARRIER_DETECTED,
   * NOT_DETECTED, etc).
   */
  detectionStatus?: string;

  /**
   * Array of detection statuses (e.g. DETECTED, CARRIER_DETECTED, NOT_DETECTED) for
   * each measured signal.
   */
  detectionStatuses?: Array<string>;

  /**
   * Measured Equivalent Isotopically Radiated Power in dBW.
   */
  eirp?: number;

  /**
   * elevation in degrees and J2000 coordinate frame.
   */
  elevation?: number;

  /**
   * Optional flag indicating whether the elevation value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  elevationMeasured?: boolean;

  /**
   * Rate of change of the elevation in degrees per second.
   */
  elevationRate?: number;

  /**
   * One sigma uncertainty in the elevation angle measurement, in degrees.
   */
  elevationUnc?: number;

  /**
   * ELINT notation.
   */
  elnot?: string;

  /**
   * End carrier frequency in Hz.
   */
  endFrequency?: number;

  /**
   * Array of individual PSD frequencies of the signal in Hz. This array should
   * correspond with the same-sized array of powers.
   */
  frequencies?: Array<number>;

  /**
   * Center carrier frequency in Hz.
   */
  frequency?: number;

  /**
   * Frequency Shift of the RFObservation record.
   */
  frequencyShift?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * True if the signal is incoming, false if outgoing.
   */
  incoming?: boolean;

  /**
   * Inner forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
   * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
   */
  innerCodingRate?: number;

  /**
   * Maximum measured PSD value of the trace in dBW.
   */
  maxPSD?: number;

  /**
   * Minimum measured PSD value of the trace in dBW.
   */
  minPSD?: number;

  /**
   * Transponder modulation (e.g. Auto, QPSK, 8PSK, etc).
   */
  modulation?: string;

  /**
   * Noise power density, in dBW-Hz.
   */
  noisePwrDensity?: number;

  /**
   * Expected bandwidth in Hz.
   */
  nominalBandwidth?: number;

  /**
   * Expected Equivalent Isotopically Radiated Power in dBW.
   */
  nominalEirp?: number;

  /**
   * Nominal or expected center carrier frequency in Hz.
   */
  nominalFrequency?: number;

  /**
   * Expected carrier power over noise (dBW/Hz).
   */
  nominalPowerOverNoise?: number;

  /**
   * Nominal or expected signal to noise ratio, in dB.
   */
  nominalSnr?: number;

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
   * Outer forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
   * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
   */
  outerCodingRate?: number;

  /**
   * Peak of the RFObservation record.
   */
  peak?: boolean;

  /**
   * A pulse group repetition interval (PGRI) is a pulse train in which there are
   * groups of closely spaced pulses separated by much longer times between these
   * pulse groups.
   */
  pgri?: number;

  /**
   * Array of pnOrder.
   */
  pnOrders?: Array<number>;

  /**
   * The antenna pointing dependent polarizer angle, in degrees.
   */
  polarity?: number;

  /**
   * Transponder polarization e.g. H - (Horizontally Polarized) Perpendicular to
   * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
   * (Left Hand Circularly Polarized) Rotating left relative to the earth's surface,
   * R - (Right Hand Circularly Polarized) Rotating right relative to the earth's
   * surface.
   */
  polarityType?: 'H' | 'V' | 'R' | 'L';

  /**
   * Measured carrier power over noise (dBW/Hz).
   */
  powerOverNoise?: number;

  /**
   * Array of individual measured PSD powers of the signal in dBW. This array should
   * correspond with the same-sized array of frequencies.
   */
  powers?: Array<number>;

  /**
   * Target range in km.
   */
  range?: number;

  /**
   * Optional flag indicating whether the range value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  rangeMeasured?: boolean;

  /**
   * Rate of change of the range in km/sec.
   */
  rangeRate?: number;

  /**
   * Optional flag indicating whether the rangeRate value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  rangeRateMeasured?: boolean;

  /**
   * One sigma uncertainty in the range rate measurement, in kilometers/second.
   */
  rangeRateUnc?: number;

  /**
   * One sigma uncertainty in the range measurement, in kilometers.
   */
  rangeUnc?: number;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Reference signal level, in dBW.
   */
  referenceLevel?: number;

  /**
   * Measured power of the center carrier frequency in dBW.
   */
  relativeCarrierPower?: number;

  /**
   * The measure of the signal created from the sum of all the noise sources and
   * unwanted signals within the measurement system, in dBW.
   */
  relativeNoiseFloor?: number;

  /**
   * Resolution bandwidth in Hz.
   */
  resolutionBandwidth?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sensor altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
   * from sensor info.
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
   * Array of optional source provided identifiers of the measurements/signals.
   */
  signalIds?: Array<string>;

  /**
   * Signal to noise ratio, in dB.
   */
  snr?: number;

  /**
   * Array of signal to noise ratios of the signals, in dB.
   */
  snrs?: Array<number>;

  /**
   * Measured spectrum analyzer power of the center carrier frequency in dBW.
   */
  spectrumAnalyzerPower?: number;

  /**
   * Start carrier frequency in Hz.
   */
  startFrequency?: number;

  /**
   * Switch Point of the RFObservation record.
   */
  switchPoint?: number;

  /**
   * Symbol to noise ratio, in dB.
   */
  symbolToNoiseRatio?: number;

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
   * Array of optional source provided telemetry identifiers of the
   * measurements/signals.
   */
  telemetryIds?: Array<string>;

  /**
   * Optional identifier of the track to which this observation belongs.
   */
  trackId?: string;

  /**
   * Target track or apparent range in km.
   */
  trackRange?: number;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Transmit pulse shaping filter roll-off value.
   */
  transmitFilterRollOff?: number;

  /**
   * Transmit pulse shaping filter typ (e.g. RRC).
   */
  transmitFilterType?: string;

  /**
   * Optional identifier provided by observation source to indicate the transponder
   * used for this measurement.
   */
  transponder?: string;

  /**
   * Boolean indicating this observation is part of an uncorrelated track or was
   * unable to be correlated to a known object. This flag should only be set to true
   * by data providers after an attempt to correlate to an on-orbit object was made
   * and failed. If unable to correlate, the 'origObjectId' field may be populated
   * with an internal data provider specific identifier.
   */
  uct?: boolean;

  /**
   * Optional URL containing additional information on this observation.
   */
  url?: string;

  /**
   * Video bandwidth in Hz.
   */
  videoBandwidth?: number;
}

export interface RfobservationListParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface RfobservationCountParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface RfobservationCreateBulkParams {
  body: Array<RfobservationCreateBulkParams.Body>;
}

export namespace RfobservationCreateBulkParams {
  /**
   * Model representation of observation data for active/passive radio frequency (RF)
   * based sensor phenomenologies. J2000 is the preferred coordinate frame for all
   * observations, but in some cases observations may be in another frame depending
   * on the provider. Please see the 'Discover' tab in the storefront to confirm
   * coordinate frames by data provider. RF observations include several optional
   * ordered arrays which are used to provide detailed information on recorded
   * signals such as power spectral density lists or active signals (code taps/fills,
   * etc). In these cases, the sizes of the arrays must match and can be assumed to
   * have consistent indexing across arrays (e.g. powers[0] is the measured power at
   * frequencies[0]).
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
     * Ob detection time in ISO 8601 UTC with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Type of RF ob (e.g. RF, RF-SOSI, PSD, RFI, SPOOF, etc).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Antenna name of the RFObservation record.
     */
    antennaName?: string;

    /**
     * azimuth angle in degrees and J2000 coordinate frame.
     */
    azimuth?: number;

    /**
     * Optional flag indicating whether the azimuth value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    azimuthMeasured?: boolean;

    /**
     * Rate of change of the azimuth in degrees per second.
     */
    azimuthRate?: number;

    /**
     * One sigma uncertainty in the azimuth angle measurement, in degrees.
     */
    azimuthUnc?: number;

    /**
     * Measured bandwidth in Hz.
     */
    bandwidth?: number;

    /**
     * Baud rate is the number of symbol changes, waveform changes, or signaling
     * events, across the transmission medium per second.
     */
    baudRate?: number;

    /**
     * Array of measured signal baud rates.
     */
    baudRates?: Array<number>;

    /**
     * The ratio of bit errors per number of received bits.
     */
    bitErrorRate?: number;

    /**
     * Carrier standard (e.g. DVB-S2, 802.11g, etc.).
     */
    carrierStandard?: string;

    /**
     * Channel of the RFObservation record.
     */
    channel?: number;

    /**
     * Array of chipRates.
     */
    chipRates?: Array<number>;

    /**
     * Array of code fills.
     */
    codeFills?: Array<string>;

    /**
     * Array of code lengths.
     */
    codeLengths?: Array<number>;

    /**
     * Array of code taps.
     */
    codeTaps?: Array<string>;

    /**
     * Collection mode (e.g. SURVEY, SPOT_SEARCH, NEIGHBORHOOD_WATCH, DIRECTED_SEARCH,
     * MANUAL, etc).
     */
    collectionMode?: string;

    /**
     * Confidence in the signal and its measurements and characterization.
     */
    confidence?: number;

    /**
     * Array of measurement confidences.
     */
    confidences?: Array<number>;

    /**
     * Array of individual x-coordinates for demodulated signal constellation. This
     * array should correspond with the same-sized array of constellationYPoints.
     */
    constellationXPoints?: Array<number>;

    /**
     * Array of individual y-coordinates for demodulated signal constellation. This
     * array should correspond with the same-sized array of constellationXPoints.
     */
    constellationYPoints?: Array<number>;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Detection status (e.g. DETECTED, CARRIER_ACQUIRING, CARRIER_DETECTED,
     * NOT_DETECTED, etc).
     */
    detectionStatus?: string;

    /**
     * Array of detection statuses (e.g. DETECTED, CARRIER_DETECTED, NOT_DETECTED) for
     * each measured signal.
     */
    detectionStatuses?: Array<string>;

    /**
     * Measured Equivalent Isotopically Radiated Power in dBW.
     */
    eirp?: number;

    /**
     * elevation in degrees and J2000 coordinate frame.
     */
    elevation?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the elevation angle measurement, in degrees.
     */
    elevationUnc?: number;

    /**
     * ELINT notation.
     */
    elnot?: string;

    /**
     * End carrier frequency in Hz.
     */
    endFrequency?: number;

    /**
     * Array of individual PSD frequencies of the signal in Hz. This array should
     * correspond with the same-sized array of powers.
     */
    frequencies?: Array<number>;

    /**
     * Center carrier frequency in Hz.
     */
    frequency?: number;

    /**
     * Frequency Shift of the RFObservation record.
     */
    frequencyShift?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * True if the signal is incoming, false if outgoing.
     */
    incoming?: boolean;

    /**
     * Inner forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
     * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    innerCodingRate?: number;

    /**
     * Maximum measured PSD value of the trace in dBW.
     */
    maxPSD?: number;

    /**
     * Minimum measured PSD value of the trace in dBW.
     */
    minPSD?: number;

    /**
     * Transponder modulation (e.g. Auto, QPSK, 8PSK, etc).
     */
    modulation?: string;

    /**
     * Noise power density, in dBW-Hz.
     */
    noisePwrDensity?: number;

    /**
     * Expected bandwidth in Hz.
     */
    nominalBandwidth?: number;

    /**
     * Expected Equivalent Isotopically Radiated Power in dBW.
     */
    nominalEirp?: number;

    /**
     * Nominal or expected center carrier frequency in Hz.
     */
    nominalFrequency?: number;

    /**
     * Expected carrier power over noise (dBW/Hz).
     */
    nominalPowerOverNoise?: number;

    /**
     * Nominal or expected signal to noise ratio, in dB.
     */
    nominalSnr?: number;

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
     * Outer forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
     * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    outerCodingRate?: number;

    /**
     * Peak of the RFObservation record.
     */
    peak?: boolean;

    /**
     * A pulse group repetition interval (PGRI) is a pulse train in which there are
     * groups of closely spaced pulses separated by much longer times between these
     * pulse groups.
     */
    pgri?: number;

    /**
     * Array of pnOrder.
     */
    pnOrders?: Array<number>;

    /**
     * The antenna pointing dependent polarizer angle, in degrees.
     */
    polarity?: number;

    /**
     * Transponder polarization e.g. H - (Horizontally Polarized) Perpendicular to
     * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
     * (Left Hand Circularly Polarized) Rotating left relative to the earth's surface,
     * R - (Right Hand Circularly Polarized) Rotating right relative to the earth's
     * surface.
     */
    polarityType?: 'H' | 'V' | 'R' | 'L';

    /**
     * Measured carrier power over noise (dBW/Hz).
     */
    powerOverNoise?: number;

    /**
     * Array of individual measured PSD powers of the signal in dBW. This array should
     * correspond with the same-sized array of frequencies.
     */
    powers?: Array<number>;

    /**
     * Target range in km.
     */
    range?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Rate of change of the range in km/sec.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the range rate measurement, in kilometers/second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the range measurement, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Reference signal level, in dBW.
     */
    referenceLevel?: number;

    /**
     * Measured power of the center carrier frequency in dBW.
     */
    relativeCarrierPower?: number;

    /**
     * The measure of the signal created from the sum of all the noise sources and
     * unwanted signals within the measurement system, in dBW.
     */
    relativeNoiseFloor?: number;

    /**
     * Resolution bandwidth in Hz.
     */
    resolutionBandwidth?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
     * from sensor info.
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
     * Array of optional source provided identifiers of the measurements/signals.
     */
    signalIds?: Array<string>;

    /**
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * Array of signal to noise ratios of the signals, in dB.
     */
    snrs?: Array<number>;

    /**
     * Measured spectrum analyzer power of the center carrier frequency in dBW.
     */
    spectrumAnalyzerPower?: number;

    /**
     * Start carrier frequency in Hz.
     */
    startFrequency?: number;

    /**
     * Switch Point of the RFObservation record.
     */
    switchPoint?: number;

    /**
     * Symbol to noise ratio, in dB.
     */
    symbolToNoiseRatio?: number;

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
     * Array of optional source provided telemetry identifiers of the
     * measurements/signals.
     */
    telemetryIds?: Array<string>;

    /**
     * Optional identifier of the track to which this observation belongs.
     */
    trackId?: string;

    /**
     * Target track or apparent range in km.
     */
    trackRange?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Transmit pulse shaping filter roll-off value.
     */
    transmitFilterRollOff?: number;

    /**
     * Transmit pulse shaping filter typ (e.g. RRC).
     */
    transmitFilterType?: string;

    /**
     * Optional identifier provided by observation source to indicate the transponder
     * used for this measurement.
     */
    transponder?: string;

    /**
     * Boolean indicating this observation is part of an uncorrelated track or was
     * unable to be correlated to a known object. This flag should only be set to true
     * by data providers after an attempt to correlate to an on-orbit object was made
     * and failed. If unable to correlate, the 'origObjectId' field may be populated
     * with an internal data provider specific identifier.
     */
    uct?: boolean;

    /**
     * Optional URL containing additional information on this observation.
     */
    url?: string;

    /**
     * Video bandwidth in Hz.
     */
    videoBandwidth?: number;
  }
}

export interface RfobservationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface RfobservationUnvalidatedPublishParams {
  body: Array<RfobservationUnvalidatedPublishParams.Body>;
}

export namespace RfobservationUnvalidatedPublishParams {
  /**
   * Model representation of observation data for active/passive radio frequency (RF)
   * based sensor phenomenologies. J2000 is the preferred coordinate frame for all
   * observations, but in some cases observations may be in another frame depending
   * on the provider. Please see the 'Discover' tab in the storefront to confirm
   * coordinate frames by data provider. RF observations include several optional
   * ordered arrays which are used to provide detailed information on recorded
   * signals such as power spectral density lists or active signals (code taps/fills,
   * etc). In these cases, the sizes of the arrays must match and can be assumed to
   * have consistent indexing across arrays (e.g. powers[0] is the measured power at
   * frequencies[0]).
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
     * Ob detection time in ISO 8601 UTC with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Type of RF ob (e.g. RF, RF-SOSI, PSD, RFI, SPOOF, etc).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Antenna name of the RFObservation record.
     */
    antennaName?: string;

    /**
     * azimuth angle in degrees and J2000 coordinate frame.
     */
    azimuth?: number;

    /**
     * Optional flag indicating whether the azimuth value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    azimuthMeasured?: boolean;

    /**
     * Rate of change of the azimuth in degrees per second.
     */
    azimuthRate?: number;

    /**
     * One sigma uncertainty in the azimuth angle measurement, in degrees.
     */
    azimuthUnc?: number;

    /**
     * Measured bandwidth in Hz.
     */
    bandwidth?: number;

    /**
     * Baud rate is the number of symbol changes, waveform changes, or signaling
     * events, across the transmission medium per second.
     */
    baudRate?: number;

    /**
     * Array of measured signal baud rates.
     */
    baudRates?: Array<number>;

    /**
     * The ratio of bit errors per number of received bits.
     */
    bitErrorRate?: number;

    /**
     * Carrier standard (e.g. DVB-S2, 802.11g, etc.).
     */
    carrierStandard?: string;

    /**
     * Channel of the RFObservation record.
     */
    channel?: number;

    /**
     * Array of chipRates.
     */
    chipRates?: Array<number>;

    /**
     * Array of code fills.
     */
    codeFills?: Array<string>;

    /**
     * Array of code lengths.
     */
    codeLengths?: Array<number>;

    /**
     * Array of code taps.
     */
    codeTaps?: Array<string>;

    /**
     * Collection mode (e.g. SURVEY, SPOT_SEARCH, NEIGHBORHOOD_WATCH, DIRECTED_SEARCH,
     * MANUAL, etc).
     */
    collectionMode?: string;

    /**
     * Confidence in the signal and its measurements and characterization.
     */
    confidence?: number;

    /**
     * Array of measurement confidences.
     */
    confidences?: Array<number>;

    /**
     * Array of individual x-coordinates for demodulated signal constellation. This
     * array should correspond with the same-sized array of constellationYPoints.
     */
    constellationXPoints?: Array<number>;

    /**
     * Array of individual y-coordinates for demodulated signal constellation. This
     * array should correspond with the same-sized array of constellationXPoints.
     */
    constellationYPoints?: Array<number>;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Detection status (e.g. DETECTED, CARRIER_ACQUIRING, CARRIER_DETECTED,
     * NOT_DETECTED, etc).
     */
    detectionStatus?: string;

    /**
     * Array of detection statuses (e.g. DETECTED, CARRIER_DETECTED, NOT_DETECTED) for
     * each measured signal.
     */
    detectionStatuses?: Array<string>;

    /**
     * Measured Equivalent Isotopically Radiated Power in dBW.
     */
    eirp?: number;

    /**
     * elevation in degrees and J2000 coordinate frame.
     */
    elevation?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the elevation angle measurement, in degrees.
     */
    elevationUnc?: number;

    /**
     * ELINT notation.
     */
    elnot?: string;

    /**
     * End carrier frequency in Hz.
     */
    endFrequency?: number;

    /**
     * Array of individual PSD frequencies of the signal in Hz. This array should
     * correspond with the same-sized array of powers.
     */
    frequencies?: Array<number>;

    /**
     * Center carrier frequency in Hz.
     */
    frequency?: number;

    /**
     * Frequency Shift of the RFObservation record.
     */
    frequencyShift?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * True if the signal is incoming, false if outgoing.
     */
    incoming?: boolean;

    /**
     * Inner forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
     * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    innerCodingRate?: number;

    /**
     * Maximum measured PSD value of the trace in dBW.
     */
    maxPSD?: number;

    /**
     * Minimum measured PSD value of the trace in dBW.
     */
    minPSD?: number;

    /**
     * Transponder modulation (e.g. Auto, QPSK, 8PSK, etc).
     */
    modulation?: string;

    /**
     * Noise power density, in dBW-Hz.
     */
    noisePwrDensity?: number;

    /**
     * Expected bandwidth in Hz.
     */
    nominalBandwidth?: number;

    /**
     * Expected Equivalent Isotopically Radiated Power in dBW.
     */
    nominalEirp?: number;

    /**
     * Nominal or expected center carrier frequency in Hz.
     */
    nominalFrequency?: number;

    /**
     * Expected carrier power over noise (dBW/Hz).
     */
    nominalPowerOverNoise?: number;

    /**
     * Nominal or expected signal to noise ratio, in dB.
     */
    nominalSnr?: number;

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
     * Outer forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
     * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    outerCodingRate?: number;

    /**
     * Peak of the RFObservation record.
     */
    peak?: boolean;

    /**
     * A pulse group repetition interval (PGRI) is a pulse train in which there are
     * groups of closely spaced pulses separated by much longer times between these
     * pulse groups.
     */
    pgri?: number;

    /**
     * Array of pnOrder.
     */
    pnOrders?: Array<number>;

    /**
     * The antenna pointing dependent polarizer angle, in degrees.
     */
    polarity?: number;

    /**
     * Transponder polarization e.g. H - (Horizontally Polarized) Perpendicular to
     * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
     * (Left Hand Circularly Polarized) Rotating left relative to the earth's surface,
     * R - (Right Hand Circularly Polarized) Rotating right relative to the earth's
     * surface.
     */
    polarityType?: 'H' | 'V' | 'R' | 'L';

    /**
     * Measured carrier power over noise (dBW/Hz).
     */
    powerOverNoise?: number;

    /**
     * Array of individual measured PSD powers of the signal in dBW. This array should
     * correspond with the same-sized array of frequencies.
     */
    powers?: Array<number>;

    /**
     * Target range in km.
     */
    range?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Rate of change of the range in km/sec.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the range rate measurement, in kilometers/second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the range measurement, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Reference signal level, in dBW.
     */
    referenceLevel?: number;

    /**
     * Measured power of the center carrier frequency in dBW.
     */
    relativeCarrierPower?: number;

    /**
     * The measure of the signal created from the sum of all the noise sources and
     * unwanted signals within the measurement system, in dBW.
     */
    relativeNoiseFloor?: number;

    /**
     * Resolution bandwidth in Hz.
     */
    resolutionBandwidth?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
     * from sensor info.
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
     * Array of optional source provided identifiers of the measurements/signals.
     */
    signalIds?: Array<string>;

    /**
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * Array of signal to noise ratios of the signals, in dB.
     */
    snrs?: Array<number>;

    /**
     * Measured spectrum analyzer power of the center carrier frequency in dBW.
     */
    spectrumAnalyzerPower?: number;

    /**
     * Start carrier frequency in Hz.
     */
    startFrequency?: number;

    /**
     * Switch Point of the RFObservation record.
     */
    switchPoint?: number;

    /**
     * Symbol to noise ratio, in dB.
     */
    symbolToNoiseRatio?: number;

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
     * Array of optional source provided telemetry identifiers of the
     * measurements/signals.
     */
    telemetryIds?: Array<string>;

    /**
     * Optional identifier of the track to which this observation belongs.
     */
    trackId?: string;

    /**
     * Target track or apparent range in km.
     */
    trackRange?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Transmit pulse shaping filter roll-off value.
     */
    transmitFilterRollOff?: number;

    /**
     * Transmit pulse shaping filter typ (e.g. RRC).
     */
    transmitFilterType?: string;

    /**
     * Optional identifier provided by observation source to indicate the transponder
     * used for this measurement.
     */
    transponder?: string;

    /**
     * Boolean indicating this observation is part of an uncorrelated track or was
     * unable to be correlated to a known object. This flag should only be set to true
     * by data providers after an attempt to correlate to an on-orbit object was made
     * and failed. If unable to correlate, the 'origObjectId' field may be populated
     * with an internal data provider specific identifier.
     */
    uct?: boolean;

    /**
     * Optional URL containing additional information on this observation.
     */
    url?: string;

    /**
     * Video bandwidth in Hz.
     */
    videoBandwidth?: number;
  }
}

Rfobservation.History = History;

export declare namespace Rfobservation {
  export {
    type RfobservationListResponse as RfobservationListResponse,
    type RfobservationCountResponse as RfobservationCountResponse,
    type RfobservationTupleResponse as RfobservationTupleResponse,
    type RfobservationCreateParams as RfobservationCreateParams,
    type RfobservationListParams as RfobservationListParams,
    type RfobservationCountParams as RfobservationCountParams,
    type RfobservationCreateBulkParams as RfobservationCreateBulkParams,
    type RfobservationTupleParams as RfobservationTupleParams,
    type RfobservationUnvalidatedPublishParams as RfobservationUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryCountParams as HistoryCountParams,
  };
}
