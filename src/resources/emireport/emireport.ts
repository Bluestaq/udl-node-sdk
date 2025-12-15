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

export class Emireport extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single EMIReport record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.emireport.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   isr: true,
   *   reportId: 'REPORT-ID',
   *   reportTime: '2025-01-07T21:47:40.438Z',
   *   reportType: 'SATCOM',
   *   requestAssist: true,
   *   source: 'Bluestaq',
   *   startTime: '2025-01-07T20:16:03.989Z',
   * });
   * ```
   */
  create(body: EmireportCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/emireport', {
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
   * for await (const emireportListResponse of client.emireport.list(
   *   { reportTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EmireportListParams,
    options?: RequestOptions,
  ): PagePromise<EmireportListResponsesOffsetPage, EmireportListResponse> {
    return this._client.getAPIList('/udl/emireport', OffsetPage<EmireportListResponse>, {
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
   *
   * @example
   * ```ts
   * const response = await client.emireport.count({
   *   reportTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: EmireportCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/emireport/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * EMIReport records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.emireport.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       isr: true,
   *       reportId: 'REPORT-ID',
   *       reportTime: '2025-01-07T21:47:40.438Z',
   *       reportType: 'SATCOM',
   *       requestAssist: true,
   *       source: 'Bluestaq',
   *       startTime: '2025-01-07T20:16:03.989Z',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: EmireportCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/emireport/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single EMIReport record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const emireport = await client.emireport.get('id');
   * ```
   */
  get(
    id: string,
    query: EmireportGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmireportGetResponse> {
    return this._client.get(path`/udl/emireport/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.emireport.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<EmireportQueryhelpResponse> {
    return this._client.get('/udl/emireport/queryhelp', options);
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
   * const response = await client.emireport.tuple({
   *   columns: 'columns',
   *   reportTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: EmireportTupleParams, options?: RequestOptions): APIPromise<EmireportTupleResponse> {
    return this._client.get('/udl/emireport/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple EMIReport records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.emireport.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       isr: true,
   *       reportId: 'REPORT-ID',
   *       reportTime: '2025-01-07T21:47:40.438Z',
   *       reportType: 'SATCOM',
   *       requestAssist: true,
   *       source: 'Bluestaq',
   *       startTime: '2025-01-07T20:16:03.989Z',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: EmireportUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-emireport', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EmireportListResponsesOffsetPage = OffsetPage<EmireportListResponse>;

/**
 * The EMI Report service supports the reporting, response, and
 * resolution/mitigation for spectrum interference, and provides details regarding
 * electromagnetic interference (EMI) detection, characterization, reporting,
 * identification, geo-location, and resolution data for space-based and
 * terrestrial systems.
 */
export interface EmireportListResponse {
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
   * Flag indicating whether the affected mission is an ISR mission.
   */
  isr: boolean;

  /**
   * User generated report identifier. This ID should remain the same on subsequent
   * updates to this report.
   */
  reportId: string;

  /**
   * The reporting time of this EMI Report record, in ISO 8601 UTC format, with
   * millisecond precision.
   */
  reportTime: string;

  /**
   * The type of Electromagnetic Interference (EMI) being reported (GPS, SATCOM,
   * TERRESTRIAL).
   */
  reportType: string;

  /**
   * Flag indicating whether assistance is being requested to address this EMI.
   */
  requestAssist: boolean;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The EMI start time in ISO 8601 UTC format, with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Actions(s) taken to troubleshoot, mitigate, work-around, and/or resolve the EMI
   * impacts.
   */
  actionsTaken?: string;

  /**
   * The specific type of activity affected by the reported EMI (e.g. UPLINK,
   * DOWNLINK, HF COMM, etc.).
   */
  affActivity?: string;

  /**
   * Altitude of the affected receiver, expressed in meters above WGS-84 ellipsoid.
   */
  alt?: number;

  /**
   * The Area Of Responsibility (AOR), Organization, or Combatant Command under which
   * the reported EMI pertains (AFRICOM, CENTCOM, EUCOM, INDOPACOM, NORTHCOM, SOCOM,
   * SOUTHCOM, SPACECOM, STRATCOM, TRANSCOM, UNKNOWN).
   */
  aor?: string;

  /**
   * The band (EHF, SHF, UHF, etc.) affected by the EMI.
   */
  band?: string;

  /**
   * The beam pattern in use.
   */
  beamPattern?: string;

  /**
   * The channel affected by the EMI.
   */
  channel?: string;

  /**
   * Flag indicating whether this interference appears to be illegally passing
   * traffic over a known channel.
   */
  chanPirate?: boolean;

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
   * Text description of the EMI particulars and other supporting information which
   * may be relevant to the cause and/or possible resolution of the issue.
   */
  description?: string;

  /**
   * Duration, Nature, Extent of impact.
   */
  dneImpact?: string;

  /**
   * The type of EMI (i.e. BARRAGE, CARRIER WAVE, etc.), if known.
   */
  emiType?: string;

  /**
   * The EMI end time in ISO 8601 UTC format, with millisecond precision. The endTime
   * may be excluded if EMI is ongoing.
   */
  endTime?: string;

  /**
   * The affected frequency, in MHz.
   */
  frequency?: number;

  /**
   * Confidence ellipse centered about the detection location [semi-major axis (m),
   * semi-minor axis (m), orientation (deg) measured clockwise (0 - 360) from true
   * North].
   */
  geoLocErrEllp?: Array<number>;

  /**
   * Flag indicating whether encryption is in use on the affected GPS frequency.
   */
  gpsEncrypted?: boolean;

  /**
   * The affected GPS Frequency (L1, L2, etc.).
   */
  gpsFreq?: string;

  /**
   * The highest affected frequency, in MHz.
   */
  highAffectedFrequency?: number;

  /**
   * Unique identifier of the affected on-orbit object. For the public catalog, the
   * idOnOrbit is typically the satellite number as a string, but may be a UUID for
   * analyst or other unknown or untracked satellites.
   */
  idOnOrbit?: string;

  /**
   * Flag indicating whether the EMI is a decipherable intercept over the affected
   * receiver. Additional information may be included in the description field
   * content of this record.
   */
  intercept?: boolean;

  /**
   * The language heard over the intercepted source. Applicable when interceptType =
   * VOICE.
   */
  interceptLang?: string;

  /**
   * The type of transmission being intercepted (e.g. VOICE, etc.). Applicable when
   * intercept = TRUE.
   */
  interceptType?: string;

  /**
   * The relative amplitude, in decibels (dB), of the interfering source, if known.
   */
  intSrcAmplitude?: number;

  /**
   * The bandwidth, in MHz, of the interfering source, if known.
   */
  intSrcBandwidth?: number;

  /**
   * The center frequency, in MHz, of the interfering source, if known.
   */
  intSrcCentFreq?: number;

  /**
   * Flag indicating whether the interfering source is encrypted.
   */
  intSrcEncrypted?: boolean;

  /**
   * The modulation method (e.g. AM, FM, FSK, PSK, etc.) of the interfering source,
   * if known.
   */
  intSrcModulation?: string;

  /**
   * Flag indicating whether this EMI is impacting ISR collection.
   */
  isrCollectionImpact?: boolean;

  /**
   * The location of the affected receiver, reported as a kill box.
   */
  killBox?: string;

  /**
   * WGS-84 latitude of the affected receiver, represented as -90 to 90 degrees
   * (negative values south of equator).
   */
  lat?: number;

  /**
   * The name or identifier of the affected link.
   */
  link?: string;

  /**
   * WGS-84 longitude of the affected receiver, represented as -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The Military Grid Reference System (MGRS) location of the affected receiver. The
   * Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of a milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts:
   *
   * 4Q (grid zone designator, GZD) FJ (the 100,000-meter square identifier) 12345678
   * (numerical location; easting is 1234 and northing is 5678, in this case
   * specifying a location with 10 m resolution).
   */
  milGrid?: string;

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
   * Optional identifier provided by the reporting source to indicate the affected
   * object of this report. This may be an internal identifier and not necessarily
   * map to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The persistence status (e.g. CONTINUOUS, INTERMITTENT, RANDOM, etc.) of the EMI.
   */
  persistence?: string;

  /**
   * The name or identifier of the affected platform.
   */
  platform?: string;

  /**
   * The demodulation method (e.g. AM, FM, FSK, PSK, etc.) setting of the affected
   * receiver.
   */
  rcvrDemod?: string;

  /**
   * The gain setting of the affected receiver, in decibels (dB).
   */
  rcvrGain?: number;

  /**
   * Description of the affected receiver location.
   */
  rcvrLocation?: string;

  /**
   * The affected antenna type (e.g. DISH, OMNI, PHASED ARRAY, etc.) experiencing the
   * EMI.
   */
  rcvrType?: string;

  /**
   * The responsible service branch under which this EMI falls (AIR FORCE, ARMY,
   * COAST GUARD, MARINES, NAVY).
   */
  respService?: string;

  /**
   * The priority (LOW, MEDIUM, HIGH) of the affected SATCOM.
   */
  satcomPriority?: string;

  /**
   * The downlink frequency, in MHz, of the impacted link.
   */
  satDownlinkFrequency?: number;

  /**
   * The downlink polarization e.g. H - (Horizontally Polarized), V - (Vertically
   * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
   * Polarized).
   */
  satDownlinkPolarization?: string;

  /**
   * The name of the spacecraft whose link is being affected by the EMI.
   */
  satName?: string;

  /**
   * Satellite/Catalog number of the affected OnOrbit object.
   */
  satNo?: number;

  /**
   * The name or identifier of the affected sat transponder.
   */
  satTransponderId?: string;

  /**
   * The uplink frequency, in MHz, of the impacted link.
   */
  satUplinkFrequency?: number;

  /**
   * The uplink polarization e.g. H - (Horizontally Polarized), V - (Vertically
   * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
   * Polarized).
   */
  satUplinkPolarization?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The reporting status (INITIAL, UPDATE, RESOLVED) of this EMI issue.
   */
  status?: string;

  /**
   * The ISR role of the impacted asset.
   */
  supportedISRRole?: string;

  /**
   * The name or identifier of the affected system.
   */
  system?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * The alternate country identifier in which the EMI occurred or is occurring.
   * Specifies an alternate country code if the data provider code is not part of an
   * official Country Code standard such as ISO-3166 or FIPS.
   */
  victimAltCountry?: string;

  /**
   * The country code in which the EMI occurred or is occurring. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  victimCountryCode?: string;

  /**
   * The victim functional impacts (e.g. C2, COMM DATA LINK, ISR SENSOR, PNT, etc.).
   */
  victimFuncImpacts?: string;

  /**
   * The e-mail contact of the reporting POC.
   */
  victimPOCMail?: string;

  /**
   * The Point of Contact (POC) for this EMI Report.
   */
  victimPOCName?: string;

  /**
   * The phone number of the reporting POC, represented as digits only, no spaces or
   * special characters.
   */
  victimPOCPhone?: string;

  /**
   * The Unit or Organization of the reporting POC.
   */
  victimPOCUnit?: string;

  /**
   * The victim reaction (e.g. LOITER ORBIT, RETASK ASSET, RETURN TO BASE,
   * TROUBLESHOOT, etc.).
   */
  victimReaction?: string;
}

export type EmireportCountResponse = string;

/**
 * The EMI Report service supports the reporting, response, and
 * resolution/mitigation for spectrum interference, and provides details regarding
 * electromagnetic interference (EMI) detection, characterization, reporting,
 * identification, geo-location, and resolution data for space-based and
 * terrestrial systems.
 */
export interface EmireportGetResponse {
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
   * Flag indicating whether the affected mission is an ISR mission.
   */
  isr: boolean;

  /**
   * User generated report identifier. This ID should remain the same on subsequent
   * updates to this report.
   */
  reportId: string;

  /**
   * The reporting time of this EMI Report record, in ISO 8601 UTC format, with
   * millisecond precision.
   */
  reportTime: string;

  /**
   * The type of Electromagnetic Interference (EMI) being reported (GPS, SATCOM,
   * TERRESTRIAL).
   */
  reportType: string;

  /**
   * Flag indicating whether assistance is being requested to address this EMI.
   */
  requestAssist: boolean;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The EMI start time in ISO 8601 UTC format, with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Actions(s) taken to troubleshoot, mitigate, work-around, and/or resolve the EMI
   * impacts.
   */
  actionsTaken?: string;

  /**
   * The specific type of activity affected by the reported EMI (e.g. UPLINK,
   * DOWNLINK, HF COMM, etc.).
   */
  affActivity?: string;

  /**
   * Altitude of the affected receiver, expressed in meters above WGS-84 ellipsoid.
   */
  alt?: number;

  /**
   * The Area Of Responsibility (AOR), Organization, or Combatant Command under which
   * the reported EMI pertains (AFRICOM, CENTCOM, EUCOM, INDOPACOM, NORTHCOM, SOCOM,
   * SOUTHCOM, SPACECOM, STRATCOM, TRANSCOM, UNKNOWN).
   */
  aor?: string;

  /**
   * The band (EHF, SHF, UHF, etc.) affected by the EMI.
   */
  band?: string;

  /**
   * The beam pattern in use.
   */
  beamPattern?: string;

  /**
   * The channel affected by the EMI.
   */
  channel?: string;

  /**
   * Flag indicating whether this interference appears to be illegally passing
   * traffic over a known channel.
   */
  chanPirate?: boolean;

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
   * Text description of the EMI particulars and other supporting information which
   * may be relevant to the cause and/or possible resolution of the issue.
   */
  description?: string;

  /**
   * Duration, Nature, Extent of impact.
   */
  dneImpact?: string;

  /**
   * The type of EMI (i.e. BARRAGE, CARRIER WAVE, etc.), if known.
   */
  emiType?: string;

  /**
   * The EMI end time in ISO 8601 UTC format, with millisecond precision. The endTime
   * may be excluded if EMI is ongoing.
   */
  endTime?: string;

  /**
   * The affected frequency, in MHz.
   */
  frequency?: number;

  /**
   * Confidence ellipse centered about the detection location [semi-major axis (m),
   * semi-minor axis (m), orientation (deg) measured clockwise (0 - 360) from true
   * North].
   */
  geoLocErrEllp?: Array<number>;

  /**
   * Flag indicating whether encryption is in use on the affected GPS frequency.
   */
  gpsEncrypted?: boolean;

  /**
   * The affected GPS Frequency (L1, L2, etc.).
   */
  gpsFreq?: string;

  /**
   * The highest affected frequency, in MHz.
   */
  highAffectedFrequency?: number;

  /**
   * Unique identifier of the affected on-orbit object. For the public catalog, the
   * idOnOrbit is typically the satellite number as a string, but may be a UUID for
   * analyst or other unknown or untracked satellites.
   */
  idOnOrbit?: string;

  /**
   * Flag indicating whether the EMI is a decipherable intercept over the affected
   * receiver. Additional information may be included in the description field
   * content of this record.
   */
  intercept?: boolean;

  /**
   * The language heard over the intercepted source. Applicable when interceptType =
   * VOICE.
   */
  interceptLang?: string;

  /**
   * The type of transmission being intercepted (e.g. VOICE, etc.). Applicable when
   * intercept = TRUE.
   */
  interceptType?: string;

  /**
   * The relative amplitude, in decibels (dB), of the interfering source, if known.
   */
  intSrcAmplitude?: number;

  /**
   * The bandwidth, in MHz, of the interfering source, if known.
   */
  intSrcBandwidth?: number;

  /**
   * The center frequency, in MHz, of the interfering source, if known.
   */
  intSrcCentFreq?: number;

  /**
   * Flag indicating whether the interfering source is encrypted.
   */
  intSrcEncrypted?: boolean;

  /**
   * The modulation method (e.g. AM, FM, FSK, PSK, etc.) of the interfering source,
   * if known.
   */
  intSrcModulation?: string;

  /**
   * Flag indicating whether this EMI is impacting ISR collection.
   */
  isrCollectionImpact?: boolean;

  /**
   * The location of the affected receiver, reported as a kill box.
   */
  killBox?: string;

  /**
   * WGS-84 latitude of the affected receiver, represented as -90 to 90 degrees
   * (negative values south of equator).
   */
  lat?: number;

  /**
   * The name or identifier of the affected link.
   */
  link?: string;

  /**
   * WGS-84 longitude of the affected receiver, represented as -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The Military Grid Reference System (MGRS) location of the affected receiver. The
   * Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of a milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts:
   *
   * 4Q (grid zone designator, GZD) FJ (the 100,000-meter square identifier) 12345678
   * (numerical location; easting is 1234 and northing is 5678, in this case
   * specifying a location with 10 m resolution).
   */
  milGrid?: string;

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
   * Optional identifier provided by the reporting source to indicate the affected
   * object of this report. This may be an internal identifier and not necessarily
   * map to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The persistence status (e.g. CONTINUOUS, INTERMITTENT, RANDOM, etc.) of the EMI.
   */
  persistence?: string;

  /**
   * The name or identifier of the affected platform.
   */
  platform?: string;

  /**
   * The demodulation method (e.g. AM, FM, FSK, PSK, etc.) setting of the affected
   * receiver.
   */
  rcvrDemod?: string;

  /**
   * The gain setting of the affected receiver, in decibels (dB).
   */
  rcvrGain?: number;

  /**
   * Description of the affected receiver location.
   */
  rcvrLocation?: string;

  /**
   * The affected antenna type (e.g. DISH, OMNI, PHASED ARRAY, etc.) experiencing the
   * EMI.
   */
  rcvrType?: string;

  /**
   * The responsible service branch under which this EMI falls (AIR FORCE, ARMY,
   * COAST GUARD, MARINES, NAVY).
   */
  respService?: string;

  /**
   * The priority (LOW, MEDIUM, HIGH) of the affected SATCOM.
   */
  satcomPriority?: string;

  /**
   * The downlink frequency, in MHz, of the impacted link.
   */
  satDownlinkFrequency?: number;

  /**
   * The downlink polarization e.g. H - (Horizontally Polarized), V - (Vertically
   * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
   * Polarized).
   */
  satDownlinkPolarization?: string;

  /**
   * The name of the spacecraft whose link is being affected by the EMI.
   */
  satName?: string;

  /**
   * Satellite/Catalog number of the affected OnOrbit object.
   */
  satNo?: number;

  /**
   * The name or identifier of the affected sat transponder.
   */
  satTransponderId?: string;

  /**
   * The uplink frequency, in MHz, of the impacted link.
   */
  satUplinkFrequency?: number;

  /**
   * The uplink polarization e.g. H - (Horizontally Polarized), V - (Vertically
   * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
   * Polarized).
   */
  satUplinkPolarization?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The reporting status (INITIAL, UPDATE, RESOLVED) of this EMI issue.
   */
  status?: string;

  /**
   * The ISR role of the impacted asset.
   */
  supportedISRRole?: string;

  /**
   * The name or identifier of the affected system.
   */
  system?: string;

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
   * The alternate country identifier in which the EMI occurred or is occurring.
   * Specifies an alternate country code if the data provider code is not part of an
   * official Country Code standard such as ISO-3166 or FIPS.
   */
  victimAltCountry?: string;

  /**
   * The country code in which the EMI occurred or is occurring. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  victimCountryCode?: string;

  /**
   * The victim functional impacts (e.g. C2, COMM DATA LINK, ISR SENSOR, PNT, etc.).
   */
  victimFuncImpacts?: string;

  /**
   * The e-mail contact of the reporting POC.
   */
  victimPOCMail?: string;

  /**
   * The Point of Contact (POC) for this EMI Report.
   */
  victimPOCName?: string;

  /**
   * The phone number of the reporting POC, represented as digits only, no spaces or
   * special characters.
   */
  victimPOCPhone?: string;

  /**
   * The Unit or Organization of the reporting POC.
   */
  victimPOCUnit?: string;

  /**
   * The victim reaction (e.g. LOITER ORBIT, RETASK ASSET, RETURN TO BASE,
   * TROUBLESHOOT, etc.).
   */
  victimReaction?: string;
}

export interface EmireportQueryhelpResponse {
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

export type EmireportTupleResponse = Array<EmireportTupleResponse.EmireportTupleResponseItem>;

export namespace EmireportTupleResponse {
  /**
   * The EMI Report service supports the reporting, response, and
   * resolution/mitigation for spectrum interference, and provides details regarding
   * electromagnetic interference (EMI) detection, characterization, reporting,
   * identification, geo-location, and resolution data for space-based and
   * terrestrial systems.
   */
  export interface EmireportTupleResponseItem {
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
     * Flag indicating whether the affected mission is an ISR mission.
     */
    isr: boolean;

    /**
     * User generated report identifier. This ID should remain the same on subsequent
     * updates to this report.
     */
    reportId: string;

    /**
     * The reporting time of this EMI Report record, in ISO 8601 UTC format, with
     * millisecond precision.
     */
    reportTime: string;

    /**
     * The type of Electromagnetic Interference (EMI) being reported (GPS, SATCOM,
     * TERRESTRIAL).
     */
    reportType: string;

    /**
     * Flag indicating whether assistance is being requested to address this EMI.
     */
    requestAssist: boolean;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The EMI start time in ISO 8601 UTC format, with millisecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Actions(s) taken to troubleshoot, mitigate, work-around, and/or resolve the EMI
     * impacts.
     */
    actionsTaken?: string;

    /**
     * The specific type of activity affected by the reported EMI (e.g. UPLINK,
     * DOWNLINK, HF COMM, etc.).
     */
    affActivity?: string;

    /**
     * Altitude of the affected receiver, expressed in meters above WGS-84 ellipsoid.
     */
    alt?: number;

    /**
     * The Area Of Responsibility (AOR), Organization, or Combatant Command under which
     * the reported EMI pertains (AFRICOM, CENTCOM, EUCOM, INDOPACOM, NORTHCOM, SOCOM,
     * SOUTHCOM, SPACECOM, STRATCOM, TRANSCOM, UNKNOWN).
     */
    aor?: string;

    /**
     * The band (EHF, SHF, UHF, etc.) affected by the EMI.
     */
    band?: string;

    /**
     * The beam pattern in use.
     */
    beamPattern?: string;

    /**
     * The channel affected by the EMI.
     */
    channel?: string;

    /**
     * Flag indicating whether this interference appears to be illegally passing
     * traffic over a known channel.
     */
    chanPirate?: boolean;

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
     * Text description of the EMI particulars and other supporting information which
     * may be relevant to the cause and/or possible resolution of the issue.
     */
    description?: string;

    /**
     * Duration, Nature, Extent of impact.
     */
    dneImpact?: string;

    /**
     * The type of EMI (i.e. BARRAGE, CARRIER WAVE, etc.), if known.
     */
    emiType?: string;

    /**
     * The EMI end time in ISO 8601 UTC format, with millisecond precision. The endTime
     * may be excluded if EMI is ongoing.
     */
    endTime?: string;

    /**
     * The affected frequency, in MHz.
     */
    frequency?: number;

    /**
     * Confidence ellipse centered about the detection location [semi-major axis (m),
     * semi-minor axis (m), orientation (deg) measured clockwise (0 - 360) from true
     * North].
     */
    geoLocErrEllp?: Array<number>;

    /**
     * Flag indicating whether encryption is in use on the affected GPS frequency.
     */
    gpsEncrypted?: boolean;

    /**
     * The affected GPS Frequency (L1, L2, etc.).
     */
    gpsFreq?: string;

    /**
     * The highest affected frequency, in MHz.
     */
    highAffectedFrequency?: number;

    /**
     * Unique identifier of the affected on-orbit object. For the public catalog, the
     * idOnOrbit is typically the satellite number as a string, but may be a UUID for
     * analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Flag indicating whether the EMI is a decipherable intercept over the affected
     * receiver. Additional information may be included in the description field
     * content of this record.
     */
    intercept?: boolean;

    /**
     * The language heard over the intercepted source. Applicable when interceptType =
     * VOICE.
     */
    interceptLang?: string;

    /**
     * The type of transmission being intercepted (e.g. VOICE, etc.). Applicable when
     * intercept = TRUE.
     */
    interceptType?: string;

    /**
     * The relative amplitude, in decibels (dB), of the interfering source, if known.
     */
    intSrcAmplitude?: number;

    /**
     * The bandwidth, in MHz, of the interfering source, if known.
     */
    intSrcBandwidth?: number;

    /**
     * The center frequency, in MHz, of the interfering source, if known.
     */
    intSrcCentFreq?: number;

    /**
     * Flag indicating whether the interfering source is encrypted.
     */
    intSrcEncrypted?: boolean;

    /**
     * The modulation method (e.g. AM, FM, FSK, PSK, etc.) of the interfering source,
     * if known.
     */
    intSrcModulation?: string;

    /**
     * Flag indicating whether this EMI is impacting ISR collection.
     */
    isrCollectionImpact?: boolean;

    /**
     * The location of the affected receiver, reported as a kill box.
     */
    killBox?: string;

    /**
     * WGS-84 latitude of the affected receiver, represented as -90 to 90 degrees
     * (negative values south of equator).
     */
    lat?: number;

    /**
     * The name or identifier of the affected link.
     */
    link?: string;

    /**
     * WGS-84 longitude of the affected receiver, represented as -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    lon?: number;

    /**
     * The Military Grid Reference System (MGRS) location of the affected receiver. The
     * Military Grid Reference System is the geocoordinate standard used by NATO
     * militaries for locating points on Earth. The MGRS is derived from the Universal
     * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
     * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
     * geocode for the entire Earth. Example of a milgrid coordinate, or grid
     * reference, would be 4QFJ12345678, which consists of three parts:
     *
     * 4Q (grid zone designator, GZD) FJ (the 100,000-meter square identifier) 12345678
     * (numerical location; easting is 1234 and northing is 5678, in this case
     * specifying a location with 10 m resolution).
     */
    milGrid?: string;

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
     * Optional identifier provided by the reporting source to indicate the affected
     * object of this report. This may be an internal identifier and not necessarily
     * map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * The persistence status (e.g. CONTINUOUS, INTERMITTENT, RANDOM, etc.) of the EMI.
     */
    persistence?: string;

    /**
     * The name or identifier of the affected platform.
     */
    platform?: string;

    /**
     * The demodulation method (e.g. AM, FM, FSK, PSK, etc.) setting of the affected
     * receiver.
     */
    rcvrDemod?: string;

    /**
     * The gain setting of the affected receiver, in decibels (dB).
     */
    rcvrGain?: number;

    /**
     * Description of the affected receiver location.
     */
    rcvrLocation?: string;

    /**
     * The affected antenna type (e.g. DISH, OMNI, PHASED ARRAY, etc.) experiencing the
     * EMI.
     */
    rcvrType?: string;

    /**
     * The responsible service branch under which this EMI falls (AIR FORCE, ARMY,
     * COAST GUARD, MARINES, NAVY).
     */
    respService?: string;

    /**
     * The priority (LOW, MEDIUM, HIGH) of the affected SATCOM.
     */
    satcomPriority?: string;

    /**
     * The downlink frequency, in MHz, of the impacted link.
     */
    satDownlinkFrequency?: number;

    /**
     * The downlink polarization e.g. H - (Horizontally Polarized), V - (Vertically
     * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
     * Polarized).
     */
    satDownlinkPolarization?: string;

    /**
     * The name of the spacecraft whose link is being affected by the EMI.
     */
    satName?: string;

    /**
     * Satellite/Catalog number of the affected OnOrbit object.
     */
    satNo?: number;

    /**
     * The name or identifier of the affected sat transponder.
     */
    satTransponderId?: string;

    /**
     * The uplink frequency, in MHz, of the impacted link.
     */
    satUplinkFrequency?: number;

    /**
     * The uplink polarization e.g. H - (Horizontally Polarized), V - (Vertically
     * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
     * Polarized).
     */
    satUplinkPolarization?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The reporting status (INITIAL, UPDATE, RESOLVED) of this EMI issue.
     */
    status?: string;

    /**
     * The ISR role of the impacted asset.
     */
    supportedISRRole?: string;

    /**
     * The name or identifier of the affected system.
     */
    system?: string;

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
     * The alternate country identifier in which the EMI occurred or is occurring.
     * Specifies an alternate country code if the data provider code is not part of an
     * official Country Code standard such as ISO-3166 or FIPS.
     */
    victimAltCountry?: string;

    /**
     * The country code in which the EMI occurred or is occurring. This value is
     * typically the ISO 3166 Alpha-2 two-character country code, however it can also
     * represent various consortiums that do not appear in the ISO document. The code
     * must correspond to an existing country in the UDL’s country API. Call
     * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
     * alternate code values that exist for the specified country code.
     */
    victimCountryCode?: string;

    /**
     * The victim functional impacts (e.g. C2, COMM DATA LINK, ISR SENSOR, PNT, etc.).
     */
    victimFuncImpacts?: string;

    /**
     * The e-mail contact of the reporting POC.
     */
    victimPOCMail?: string;

    /**
     * The Point of Contact (POC) for this EMI Report.
     */
    victimPOCName?: string;

    /**
     * The phone number of the reporting POC, represented as digits only, no spaces or
     * special characters.
     */
    victimPOCPhone?: string;

    /**
     * The Unit or Organization of the reporting POC.
     */
    victimPOCUnit?: string;

    /**
     * The victim reaction (e.g. LOITER ORBIT, RETASK ASSET, RETURN TO BASE,
     * TROUBLESHOOT, etc.).
     */
    victimReaction?: string;
  }
}

export interface EmireportCreateParams {
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
   * Flag indicating whether the affected mission is an ISR mission.
   */
  isr: boolean;

  /**
   * User generated report identifier. This ID should remain the same on subsequent
   * updates to this report.
   */
  reportId: string;

  /**
   * The reporting time of this EMI Report record, in ISO 8601 UTC format, with
   * millisecond precision.
   */
  reportTime: string;

  /**
   * The type of Electromagnetic Interference (EMI) being reported (GPS, SATCOM,
   * TERRESTRIAL).
   */
  reportType: string;

  /**
   * Flag indicating whether assistance is being requested to address this EMI.
   */
  requestAssist: boolean;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The EMI start time in ISO 8601 UTC format, with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Actions(s) taken to troubleshoot, mitigate, work-around, and/or resolve the EMI
   * impacts.
   */
  actionsTaken?: string;

  /**
   * The specific type of activity affected by the reported EMI (e.g. UPLINK,
   * DOWNLINK, HF COMM, etc.).
   */
  affActivity?: string;

  /**
   * Altitude of the affected receiver, expressed in meters above WGS-84 ellipsoid.
   */
  alt?: number;

  /**
   * The Area Of Responsibility (AOR), Organization, or Combatant Command under which
   * the reported EMI pertains (AFRICOM, CENTCOM, EUCOM, INDOPACOM, NORTHCOM, SOCOM,
   * SOUTHCOM, SPACECOM, STRATCOM, TRANSCOM, UNKNOWN).
   */
  aor?: string;

  /**
   * The band (EHF, SHF, UHF, etc.) affected by the EMI.
   */
  band?: string;

  /**
   * The beam pattern in use.
   */
  beamPattern?: string;

  /**
   * The channel affected by the EMI.
   */
  channel?: string;

  /**
   * Flag indicating whether this interference appears to be illegally passing
   * traffic over a known channel.
   */
  chanPirate?: boolean;

  /**
   * Text description of the EMI particulars and other supporting information which
   * may be relevant to the cause and/or possible resolution of the issue.
   */
  description?: string;

  /**
   * Duration, Nature, Extent of impact.
   */
  dneImpact?: string;

  /**
   * The type of EMI (i.e. BARRAGE, CARRIER WAVE, etc.), if known.
   */
  emiType?: string;

  /**
   * The EMI end time in ISO 8601 UTC format, with millisecond precision. The endTime
   * may be excluded if EMI is ongoing.
   */
  endTime?: string;

  /**
   * The affected frequency, in MHz.
   */
  frequency?: number;

  /**
   * Confidence ellipse centered about the detection location [semi-major axis (m),
   * semi-minor axis (m), orientation (deg) measured clockwise (0 - 360) from true
   * North].
   */
  geoLocErrEllp?: Array<number>;

  /**
   * Flag indicating whether encryption is in use on the affected GPS frequency.
   */
  gpsEncrypted?: boolean;

  /**
   * The affected GPS Frequency (L1, L2, etc.).
   */
  gpsFreq?: string;

  /**
   * The highest affected frequency, in MHz.
   */
  highAffectedFrequency?: number;

  /**
   * Flag indicating whether the EMI is a decipherable intercept over the affected
   * receiver. Additional information may be included in the description field
   * content of this record.
   */
  intercept?: boolean;

  /**
   * The language heard over the intercepted source. Applicable when interceptType =
   * VOICE.
   */
  interceptLang?: string;

  /**
   * The type of transmission being intercepted (e.g. VOICE, etc.). Applicable when
   * intercept = TRUE.
   */
  interceptType?: string;

  /**
   * The relative amplitude, in decibels (dB), of the interfering source, if known.
   */
  intSrcAmplitude?: number;

  /**
   * The bandwidth, in MHz, of the interfering source, if known.
   */
  intSrcBandwidth?: number;

  /**
   * The center frequency, in MHz, of the interfering source, if known.
   */
  intSrcCentFreq?: number;

  /**
   * Flag indicating whether the interfering source is encrypted.
   */
  intSrcEncrypted?: boolean;

  /**
   * The modulation method (e.g. AM, FM, FSK, PSK, etc.) of the interfering source,
   * if known.
   */
  intSrcModulation?: string;

  /**
   * Flag indicating whether this EMI is impacting ISR collection.
   */
  isrCollectionImpact?: boolean;

  /**
   * The location of the affected receiver, reported as a kill box.
   */
  killBox?: string;

  /**
   * WGS-84 latitude of the affected receiver, represented as -90 to 90 degrees
   * (negative values south of equator).
   */
  lat?: number;

  /**
   * The name or identifier of the affected link.
   */
  link?: string;

  /**
   * WGS-84 longitude of the affected receiver, represented as -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The Military Grid Reference System (MGRS) location of the affected receiver. The
   * Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of a milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts:
   *
   * 4Q (grid zone designator, GZD) FJ (the 100,000-meter square identifier) 12345678
   * (numerical location; easting is 1234 and northing is 5678, in this case
   * specifying a location with 10 m resolution).
   */
  milGrid?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the reporting source to indicate the affected
   * object of this report. This may be an internal identifier and not necessarily
   * map to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The persistence status (e.g. CONTINUOUS, INTERMITTENT, RANDOM, etc.) of the EMI.
   */
  persistence?: string;

  /**
   * The name or identifier of the affected platform.
   */
  platform?: string;

  /**
   * The demodulation method (e.g. AM, FM, FSK, PSK, etc.) setting of the affected
   * receiver.
   */
  rcvrDemod?: string;

  /**
   * The gain setting of the affected receiver, in decibels (dB).
   */
  rcvrGain?: number;

  /**
   * Description of the affected receiver location.
   */
  rcvrLocation?: string;

  /**
   * The affected antenna type (e.g. DISH, OMNI, PHASED ARRAY, etc.) experiencing the
   * EMI.
   */
  rcvrType?: string;

  /**
   * The responsible service branch under which this EMI falls (AIR FORCE, ARMY,
   * COAST GUARD, MARINES, NAVY).
   */
  respService?: string;

  /**
   * The priority (LOW, MEDIUM, HIGH) of the affected SATCOM.
   */
  satcomPriority?: string;

  /**
   * The downlink frequency, in MHz, of the impacted link.
   */
  satDownlinkFrequency?: number;

  /**
   * The downlink polarization e.g. H - (Horizontally Polarized), V - (Vertically
   * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
   * Polarized).
   */
  satDownlinkPolarization?: string;

  /**
   * The name of the spacecraft whose link is being affected by the EMI.
   */
  satName?: string;

  /**
   * Satellite/Catalog number of the affected OnOrbit object.
   */
  satNo?: number;

  /**
   * The name or identifier of the affected sat transponder.
   */
  satTransponderId?: string;

  /**
   * The uplink frequency, in MHz, of the impacted link.
   */
  satUplinkFrequency?: number;

  /**
   * The uplink polarization e.g. H - (Horizontally Polarized), V - (Vertically
   * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
   * Polarized).
   */
  satUplinkPolarization?: string;

  /**
   * The reporting status (INITIAL, UPDATE, RESOLVED) of this EMI issue.
   */
  status?: string;

  /**
   * The ISR role of the impacted asset.
   */
  supportedISRRole?: string;

  /**
   * The name or identifier of the affected system.
   */
  system?: string;

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
   * The alternate country identifier in which the EMI occurred or is occurring.
   * Specifies an alternate country code if the data provider code is not part of an
   * official Country Code standard such as ISO-3166 or FIPS.
   */
  victimAltCountry?: string;

  /**
   * The country code in which the EMI occurred or is occurring. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  victimCountryCode?: string;

  /**
   * The victim functional impacts (e.g. C2, COMM DATA LINK, ISR SENSOR, PNT, etc.).
   */
  victimFuncImpacts?: string;

  /**
   * The e-mail contact of the reporting POC.
   */
  victimPOCMail?: string;

  /**
   * The Point of Contact (POC) for this EMI Report.
   */
  victimPOCName?: string;

  /**
   * The phone number of the reporting POC, represented as digits only, no spaces or
   * special characters.
   */
  victimPOCPhone?: string;

  /**
   * The Unit or Organization of the reporting POC.
   */
  victimPOCUnit?: string;

  /**
   * The victim reaction (e.g. LOITER ORBIT, RETASK ASSET, RETURN TO BASE,
   * TROUBLESHOOT, etc.).
   */
  victimReaction?: string;
}

export interface EmireportListParams extends OffsetPageParams {
  /**
   * The reporting time of this EMI Report record, in ISO 8601 UTC format, with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reportTime: string;
}

export interface EmireportCountParams {
  /**
   * The reporting time of this EMI Report record, in ISO 8601 UTC format, with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reportTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface EmireportCreateBulkParams {
  body: Array<EmireportCreateBulkParams.Body>;
}

export namespace EmireportCreateBulkParams {
  /**
   * The EMI Report service supports the reporting, response, and
   * resolution/mitigation for spectrum interference, and provides details regarding
   * electromagnetic interference (EMI) detection, characterization, reporting,
   * identification, geo-location, and resolution data for space-based and
   * terrestrial systems.
   */
  export interface Body {
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
     * Flag indicating whether the affected mission is an ISR mission.
     */
    isr: boolean;

    /**
     * User generated report identifier. This ID should remain the same on subsequent
     * updates to this report.
     */
    reportId: string;

    /**
     * The reporting time of this EMI Report record, in ISO 8601 UTC format, with
     * millisecond precision.
     */
    reportTime: string;

    /**
     * The type of Electromagnetic Interference (EMI) being reported (GPS, SATCOM,
     * TERRESTRIAL).
     */
    reportType: string;

    /**
     * Flag indicating whether assistance is being requested to address this EMI.
     */
    requestAssist: boolean;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The EMI start time in ISO 8601 UTC format, with millisecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Actions(s) taken to troubleshoot, mitigate, work-around, and/or resolve the EMI
     * impacts.
     */
    actionsTaken?: string;

    /**
     * The specific type of activity affected by the reported EMI (e.g. UPLINK,
     * DOWNLINK, HF COMM, etc.).
     */
    affActivity?: string;

    /**
     * Altitude of the affected receiver, expressed in meters above WGS-84 ellipsoid.
     */
    alt?: number;

    /**
     * The Area Of Responsibility (AOR), Organization, or Combatant Command under which
     * the reported EMI pertains (AFRICOM, CENTCOM, EUCOM, INDOPACOM, NORTHCOM, SOCOM,
     * SOUTHCOM, SPACECOM, STRATCOM, TRANSCOM, UNKNOWN).
     */
    aor?: string;

    /**
     * The band (EHF, SHF, UHF, etc.) affected by the EMI.
     */
    band?: string;

    /**
     * The beam pattern in use.
     */
    beamPattern?: string;

    /**
     * The channel affected by the EMI.
     */
    channel?: string;

    /**
     * Flag indicating whether this interference appears to be illegally passing
     * traffic over a known channel.
     */
    chanPirate?: boolean;

    /**
     * Text description of the EMI particulars and other supporting information which
     * may be relevant to the cause and/or possible resolution of the issue.
     */
    description?: string;

    /**
     * Duration, Nature, Extent of impact.
     */
    dneImpact?: string;

    /**
     * The type of EMI (i.e. BARRAGE, CARRIER WAVE, etc.), if known.
     */
    emiType?: string;

    /**
     * The EMI end time in ISO 8601 UTC format, with millisecond precision. The endTime
     * may be excluded if EMI is ongoing.
     */
    endTime?: string;

    /**
     * The affected frequency, in MHz.
     */
    frequency?: number;

    /**
     * Confidence ellipse centered about the detection location [semi-major axis (m),
     * semi-minor axis (m), orientation (deg) measured clockwise (0 - 360) from true
     * North].
     */
    geoLocErrEllp?: Array<number>;

    /**
     * Flag indicating whether encryption is in use on the affected GPS frequency.
     */
    gpsEncrypted?: boolean;

    /**
     * The affected GPS Frequency (L1, L2, etc.).
     */
    gpsFreq?: string;

    /**
     * The highest affected frequency, in MHz.
     */
    highAffectedFrequency?: number;

    /**
     * Flag indicating whether the EMI is a decipherable intercept over the affected
     * receiver. Additional information may be included in the description field
     * content of this record.
     */
    intercept?: boolean;

    /**
     * The language heard over the intercepted source. Applicable when interceptType =
     * VOICE.
     */
    interceptLang?: string;

    /**
     * The type of transmission being intercepted (e.g. VOICE, etc.). Applicable when
     * intercept = TRUE.
     */
    interceptType?: string;

    /**
     * The relative amplitude, in decibels (dB), of the interfering source, if known.
     */
    intSrcAmplitude?: number;

    /**
     * The bandwidth, in MHz, of the interfering source, if known.
     */
    intSrcBandwidth?: number;

    /**
     * The center frequency, in MHz, of the interfering source, if known.
     */
    intSrcCentFreq?: number;

    /**
     * Flag indicating whether the interfering source is encrypted.
     */
    intSrcEncrypted?: boolean;

    /**
     * The modulation method (e.g. AM, FM, FSK, PSK, etc.) of the interfering source,
     * if known.
     */
    intSrcModulation?: string;

    /**
     * Flag indicating whether this EMI is impacting ISR collection.
     */
    isrCollectionImpact?: boolean;

    /**
     * The location of the affected receiver, reported as a kill box.
     */
    killBox?: string;

    /**
     * WGS-84 latitude of the affected receiver, represented as -90 to 90 degrees
     * (negative values south of equator).
     */
    lat?: number;

    /**
     * The name or identifier of the affected link.
     */
    link?: string;

    /**
     * WGS-84 longitude of the affected receiver, represented as -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    lon?: number;

    /**
     * The Military Grid Reference System (MGRS) location of the affected receiver. The
     * Military Grid Reference System is the geocoordinate standard used by NATO
     * militaries for locating points on Earth. The MGRS is derived from the Universal
     * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
     * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
     * geocode for the entire Earth. Example of a milgrid coordinate, or grid
     * reference, would be 4QFJ12345678, which consists of three parts:
     *
     * 4Q (grid zone designator, GZD) FJ (the 100,000-meter square identifier) 12345678
     * (numerical location; easting is 1234 and northing is 5678, in this case
     * specifying a location with 10 m resolution).
     */
    milGrid?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the reporting source to indicate the affected
     * object of this report. This may be an internal identifier and not necessarily
     * map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * The persistence status (e.g. CONTINUOUS, INTERMITTENT, RANDOM, etc.) of the EMI.
     */
    persistence?: string;

    /**
     * The name or identifier of the affected platform.
     */
    platform?: string;

    /**
     * The demodulation method (e.g. AM, FM, FSK, PSK, etc.) setting of the affected
     * receiver.
     */
    rcvrDemod?: string;

    /**
     * The gain setting of the affected receiver, in decibels (dB).
     */
    rcvrGain?: number;

    /**
     * Description of the affected receiver location.
     */
    rcvrLocation?: string;

    /**
     * The affected antenna type (e.g. DISH, OMNI, PHASED ARRAY, etc.) experiencing the
     * EMI.
     */
    rcvrType?: string;

    /**
     * The responsible service branch under which this EMI falls (AIR FORCE, ARMY,
     * COAST GUARD, MARINES, NAVY).
     */
    respService?: string;

    /**
     * The priority (LOW, MEDIUM, HIGH) of the affected SATCOM.
     */
    satcomPriority?: string;

    /**
     * The downlink frequency, in MHz, of the impacted link.
     */
    satDownlinkFrequency?: number;

    /**
     * The downlink polarization e.g. H - (Horizontally Polarized), V - (Vertically
     * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
     * Polarized).
     */
    satDownlinkPolarization?: string;

    /**
     * The name of the spacecraft whose link is being affected by the EMI.
     */
    satName?: string;

    /**
     * Satellite/Catalog number of the affected OnOrbit object.
     */
    satNo?: number;

    /**
     * The name or identifier of the affected sat transponder.
     */
    satTransponderId?: string;

    /**
     * The uplink frequency, in MHz, of the impacted link.
     */
    satUplinkFrequency?: number;

    /**
     * The uplink polarization e.g. H - (Horizontally Polarized), V - (Vertically
     * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
     * Polarized).
     */
    satUplinkPolarization?: string;

    /**
     * The reporting status (INITIAL, UPDATE, RESOLVED) of this EMI issue.
     */
    status?: string;

    /**
     * The ISR role of the impacted asset.
     */
    supportedISRRole?: string;

    /**
     * The name or identifier of the affected system.
     */
    system?: string;

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
     * The alternate country identifier in which the EMI occurred or is occurring.
     * Specifies an alternate country code if the data provider code is not part of an
     * official Country Code standard such as ISO-3166 or FIPS.
     */
    victimAltCountry?: string;

    /**
     * The country code in which the EMI occurred or is occurring. This value is
     * typically the ISO 3166 Alpha-2 two-character country code, however it can also
     * represent various consortiums that do not appear in the ISO document. The code
     * must correspond to an existing country in the UDL’s country API. Call
     * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
     * alternate code values that exist for the specified country code.
     */
    victimCountryCode?: string;

    /**
     * The victim functional impacts (e.g. C2, COMM DATA LINK, ISR SENSOR, PNT, etc.).
     */
    victimFuncImpacts?: string;

    /**
     * The e-mail contact of the reporting POC.
     */
    victimPOCMail?: string;

    /**
     * The Point of Contact (POC) for this EMI Report.
     */
    victimPOCName?: string;

    /**
     * The phone number of the reporting POC, represented as digits only, no spaces or
     * special characters.
     */
    victimPOCPhone?: string;

    /**
     * The Unit or Organization of the reporting POC.
     */
    victimPOCUnit?: string;

    /**
     * The victim reaction (e.g. LOITER ORBIT, RETASK ASSET, RETURN TO BASE,
     * TROUBLESHOOT, etc.).
     */
    victimReaction?: string;
  }
}

export interface EmireportGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EmireportTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The reporting time of this EMI Report record, in ISO 8601 UTC format, with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reportTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface EmireportUnvalidatedPublishParams {
  body: Array<EmireportUnvalidatedPublishParams.Body>;
}

export namespace EmireportUnvalidatedPublishParams {
  /**
   * The EMI Report service supports the reporting, response, and
   * resolution/mitigation for spectrum interference, and provides details regarding
   * electromagnetic interference (EMI) detection, characterization, reporting,
   * identification, geo-location, and resolution data for space-based and
   * terrestrial systems.
   */
  export interface Body {
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
     * Flag indicating whether the affected mission is an ISR mission.
     */
    isr: boolean;

    /**
     * User generated report identifier. This ID should remain the same on subsequent
     * updates to this report.
     */
    reportId: string;

    /**
     * The reporting time of this EMI Report record, in ISO 8601 UTC format, with
     * millisecond precision.
     */
    reportTime: string;

    /**
     * The type of Electromagnetic Interference (EMI) being reported (GPS, SATCOM,
     * TERRESTRIAL).
     */
    reportType: string;

    /**
     * Flag indicating whether assistance is being requested to address this EMI.
     */
    requestAssist: boolean;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The EMI start time in ISO 8601 UTC format, with millisecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Actions(s) taken to troubleshoot, mitigate, work-around, and/or resolve the EMI
     * impacts.
     */
    actionsTaken?: string;

    /**
     * The specific type of activity affected by the reported EMI (e.g. UPLINK,
     * DOWNLINK, HF COMM, etc.).
     */
    affActivity?: string;

    /**
     * Altitude of the affected receiver, expressed in meters above WGS-84 ellipsoid.
     */
    alt?: number;

    /**
     * The Area Of Responsibility (AOR), Organization, or Combatant Command under which
     * the reported EMI pertains (AFRICOM, CENTCOM, EUCOM, INDOPACOM, NORTHCOM, SOCOM,
     * SOUTHCOM, SPACECOM, STRATCOM, TRANSCOM, UNKNOWN).
     */
    aor?: string;

    /**
     * The band (EHF, SHF, UHF, etc.) affected by the EMI.
     */
    band?: string;

    /**
     * The beam pattern in use.
     */
    beamPattern?: string;

    /**
     * The channel affected by the EMI.
     */
    channel?: string;

    /**
     * Flag indicating whether this interference appears to be illegally passing
     * traffic over a known channel.
     */
    chanPirate?: boolean;

    /**
     * Text description of the EMI particulars and other supporting information which
     * may be relevant to the cause and/or possible resolution of the issue.
     */
    description?: string;

    /**
     * Duration, Nature, Extent of impact.
     */
    dneImpact?: string;

    /**
     * The type of EMI (i.e. BARRAGE, CARRIER WAVE, etc.), if known.
     */
    emiType?: string;

    /**
     * The EMI end time in ISO 8601 UTC format, with millisecond precision. The endTime
     * may be excluded if EMI is ongoing.
     */
    endTime?: string;

    /**
     * The affected frequency, in MHz.
     */
    frequency?: number;

    /**
     * Confidence ellipse centered about the detection location [semi-major axis (m),
     * semi-minor axis (m), orientation (deg) measured clockwise (0 - 360) from true
     * North].
     */
    geoLocErrEllp?: Array<number>;

    /**
     * Flag indicating whether encryption is in use on the affected GPS frequency.
     */
    gpsEncrypted?: boolean;

    /**
     * The affected GPS Frequency (L1, L2, etc.).
     */
    gpsFreq?: string;

    /**
     * The highest affected frequency, in MHz.
     */
    highAffectedFrequency?: number;

    /**
     * Flag indicating whether the EMI is a decipherable intercept over the affected
     * receiver. Additional information may be included in the description field
     * content of this record.
     */
    intercept?: boolean;

    /**
     * The language heard over the intercepted source. Applicable when interceptType =
     * VOICE.
     */
    interceptLang?: string;

    /**
     * The type of transmission being intercepted (e.g. VOICE, etc.). Applicable when
     * intercept = TRUE.
     */
    interceptType?: string;

    /**
     * The relative amplitude, in decibels (dB), of the interfering source, if known.
     */
    intSrcAmplitude?: number;

    /**
     * The bandwidth, in MHz, of the interfering source, if known.
     */
    intSrcBandwidth?: number;

    /**
     * The center frequency, in MHz, of the interfering source, if known.
     */
    intSrcCentFreq?: number;

    /**
     * Flag indicating whether the interfering source is encrypted.
     */
    intSrcEncrypted?: boolean;

    /**
     * The modulation method (e.g. AM, FM, FSK, PSK, etc.) of the interfering source,
     * if known.
     */
    intSrcModulation?: string;

    /**
     * Flag indicating whether this EMI is impacting ISR collection.
     */
    isrCollectionImpact?: boolean;

    /**
     * The location of the affected receiver, reported as a kill box.
     */
    killBox?: string;

    /**
     * WGS-84 latitude of the affected receiver, represented as -90 to 90 degrees
     * (negative values south of equator).
     */
    lat?: number;

    /**
     * The name or identifier of the affected link.
     */
    link?: string;

    /**
     * WGS-84 longitude of the affected receiver, represented as -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    lon?: number;

    /**
     * The Military Grid Reference System (MGRS) location of the affected receiver. The
     * Military Grid Reference System is the geocoordinate standard used by NATO
     * militaries for locating points on Earth. The MGRS is derived from the Universal
     * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
     * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
     * geocode for the entire Earth. Example of a milgrid coordinate, or grid
     * reference, would be 4QFJ12345678, which consists of three parts:
     *
     * 4Q (grid zone designator, GZD) FJ (the 100,000-meter square identifier) 12345678
     * (numerical location; easting is 1234 and northing is 5678, in this case
     * specifying a location with 10 m resolution).
     */
    milGrid?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the reporting source to indicate the affected
     * object of this report. This may be an internal identifier and not necessarily
     * map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * The persistence status (e.g. CONTINUOUS, INTERMITTENT, RANDOM, etc.) of the EMI.
     */
    persistence?: string;

    /**
     * The name or identifier of the affected platform.
     */
    platform?: string;

    /**
     * The demodulation method (e.g. AM, FM, FSK, PSK, etc.) setting of the affected
     * receiver.
     */
    rcvrDemod?: string;

    /**
     * The gain setting of the affected receiver, in decibels (dB).
     */
    rcvrGain?: number;

    /**
     * Description of the affected receiver location.
     */
    rcvrLocation?: string;

    /**
     * The affected antenna type (e.g. DISH, OMNI, PHASED ARRAY, etc.) experiencing the
     * EMI.
     */
    rcvrType?: string;

    /**
     * The responsible service branch under which this EMI falls (AIR FORCE, ARMY,
     * COAST GUARD, MARINES, NAVY).
     */
    respService?: string;

    /**
     * The priority (LOW, MEDIUM, HIGH) of the affected SATCOM.
     */
    satcomPriority?: string;

    /**
     * The downlink frequency, in MHz, of the impacted link.
     */
    satDownlinkFrequency?: number;

    /**
     * The downlink polarization e.g. H - (Horizontally Polarized), V - (Vertically
     * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
     * Polarized).
     */
    satDownlinkPolarization?: string;

    /**
     * The name of the spacecraft whose link is being affected by the EMI.
     */
    satName?: string;

    /**
     * Satellite/Catalog number of the affected OnOrbit object.
     */
    satNo?: number;

    /**
     * The name or identifier of the affected sat transponder.
     */
    satTransponderId?: string;

    /**
     * The uplink frequency, in MHz, of the impacted link.
     */
    satUplinkFrequency?: number;

    /**
     * The uplink polarization e.g. H - (Horizontally Polarized), V - (Vertically
     * Polarized), L - (Left Hand Circularly Polarized), R - (Right Hand Circularly
     * Polarized).
     */
    satUplinkPolarization?: string;

    /**
     * The reporting status (INITIAL, UPDATE, RESOLVED) of this EMI issue.
     */
    status?: string;

    /**
     * The ISR role of the impacted asset.
     */
    supportedISRRole?: string;

    /**
     * The name or identifier of the affected system.
     */
    system?: string;

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
     * The alternate country identifier in which the EMI occurred or is occurring.
     * Specifies an alternate country code if the data provider code is not part of an
     * official Country Code standard such as ISO-3166 or FIPS.
     */
    victimAltCountry?: string;

    /**
     * The country code in which the EMI occurred or is occurring. This value is
     * typically the ISO 3166 Alpha-2 two-character country code, however it can also
     * represent various consortiums that do not appear in the ISO document. The code
     * must correspond to an existing country in the UDL’s country API. Call
     * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
     * alternate code values that exist for the specified country code.
     */
    victimCountryCode?: string;

    /**
     * The victim functional impacts (e.g. C2, COMM DATA LINK, ISR SENSOR, PNT, etc.).
     */
    victimFuncImpacts?: string;

    /**
     * The e-mail contact of the reporting POC.
     */
    victimPOCMail?: string;

    /**
     * The Point of Contact (POC) for this EMI Report.
     */
    victimPOCName?: string;

    /**
     * The phone number of the reporting POC, represented as digits only, no spaces or
     * special characters.
     */
    victimPOCPhone?: string;

    /**
     * The Unit or Organization of the reporting POC.
     */
    victimPOCUnit?: string;

    /**
     * The victim reaction (e.g. LOITER ORBIT, RETASK ASSET, RETURN TO BASE,
     * TROUBLESHOOT, etc.).
     */
    victimReaction?: string;
  }
}

Emireport.History = History;

export declare namespace Emireport {
  export {
    type EmireportListResponse as EmireportListResponse,
    type EmireportCountResponse as EmireportCountResponse,
    type EmireportGetResponse as EmireportGetResponse,
    type EmireportQueryhelpResponse as EmireportQueryhelpResponse,
    type EmireportTupleResponse as EmireportTupleResponse,
    type EmireportListResponsesOffsetPage as EmireportListResponsesOffsetPage,
    type EmireportCreateParams as EmireportCreateParams,
    type EmireportListParams as EmireportListParams,
    type EmireportCountParams as EmireportCountParams,
    type EmireportCreateBulkParams as EmireportCreateBulkParams,
    type EmireportGetParams as EmireportGetParams,
    type EmireportTupleParams as EmireportTupleParams,
    type EmireportUnvalidatedPublishParams as EmireportUnvalidatedPublishParams,
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
