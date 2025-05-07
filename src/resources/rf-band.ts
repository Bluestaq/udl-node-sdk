// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RfBand extends APIResource {
  /**
   * Service operation to take a single RFBand as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfBand.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idEntity: 'ENTITY-ID',
   *   name: 'BAND_NAME',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: RfBandCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/rfband', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an RFBand. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfBand.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idEntity: 'ENTITY-ID',
   *   name: 'BAND_NAME',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: RfBandUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/rfband/${pathID}`, {
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
   * for await (const rfBandListResponse of client.rfBand.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RfBandListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RfBandListResponsesOffsetPage, RfBandListResponse> {
    return this._client.getAPIList('/udl/rfband', OffsetPage<RfBandListResponse>, { query, ...options });
  }

  /**
   * Service operation to delete an RFBand specified by the passed ID path parameter.
   * A specific role is required to perform this service operation. Please contact
   * the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfBand.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/rfband/${id}`, {
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
   * const response = await client.rfBand.count();
   * ```
   */
  count(query: RfBandCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/rfband/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single RFBand by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const rfBand = await client.rfBand.get('id');
   * ```
   */
  get(
    id: string,
    query: RfBandGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RfBandGetResponse> {
    return this._client.get(path`/udl/rfband/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * await client.rfBand.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/rfband/queryhelp', {
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
   *
   * @example
   * ```ts
   * const response = await client.rfBand.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: RfBandTupleParams, options?: RequestOptions): APIPromise<RfBandTupleResponse> {
    return this._client.get('/udl/rfband/tuple', { query, ...options });
  }
}

export type RfBandListResponsesOffsetPage = OffsetPage<RfBandListResponse>;

/**
 * Details on a particular Radio Frequency (RF) band, also known as a carrier,
 * which may be in use by any type of Entity for communications or operations.
 */
export interface RfBandListResponse {
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
}

export type RfBandCountResponse = string;

/**
 * Details on a particular Radio Frequency (RF) band, also known as a carrier,
 * which may be in use by any type of Entity for communications or operations.
 */
export interface RfBandGetResponse {
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

export type RfBandTupleResponse = Array<RfBandTupleResponse.RfBandTupleResponseItem>;

export namespace RfBandTupleResponse {
  /**
   * Details on a particular Radio Frequency (RF) band, also known as a carrier,
   * which may be in use by any type of Entity for communications or operations.
   */
  export interface RfBandTupleResponseItem {
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
}

export interface RfBandCreateParams {
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
}

export interface RfBandUpdateParams {
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
  body_id?: string;

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
}

export interface RfBandListParams extends OffsetPageParams {}

export interface RfBandCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RfBandGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RfBandTupleParams {
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

export declare namespace RfBand {
  export {
    type RfBandListResponse as RfBandListResponse,
    type RfBandCountResponse as RfBandCountResponse,
    type RfBandGetResponse as RfBandGetResponse,
    type RfBandTupleResponse as RfBandTupleResponse,
    type RfBandListResponsesOffsetPage as RfBandListResponsesOffsetPage,
    type RfBandCreateParams as RfBandCreateParams,
    type RfBandUpdateParams as RfBandUpdateParams,
    type RfBandListParams as RfBandListParams,
    type RfBandCountParams as RfBandCountParams,
    type RfBandGetParams as RfBandGetParams,
    type RfBandTupleParams as RfBandTupleParams,
  };
}
