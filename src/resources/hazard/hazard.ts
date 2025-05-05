// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryQueryParams,
  HistoryQueryResponse,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Hazard extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single hazard as a POST body and ingest into the
   * database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   */
  create(body: HazardCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/hazard', {
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
  list(
    query: HazardListParams,
    options?: RequestOptions,
  ): PagePromise<HazardListResponsesOffsetPage, HazardListResponse> {
    return this._client.getAPIList('/udl/hazard', OffsetPage<HazardListResponse>, { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: HazardCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/hazard/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * hazards as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   */
  createBulk(params: HazardCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/hazard/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Hazard by its unique ID passed as a path
   * parameter.
   */
  get(
    id: string,
    query: HazardGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HazardGetResponse> {
    return this._client.get(path`/udl/hazard/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/hazard/queryhelp', {
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
  tuple(query: HazardTupleParams, options?: RequestOptions): APIPromise<HazardTupleResponse> {
    return this._client.get('/udl/hazard/tuple', { query, ...options });
  }
}

export type HazardListResponsesOffsetPage = OffsetPage<HazardListResponse>;

/**
 * Hazard contains information concerning the exposure of a geographic area to a
 * Chemical, Biological, Radiological, or Nuclear (CBRN) contaminant. The Hazard
 * schema includes the detection time and type of contamination as well as optional
 * information regarding specific material properties, the extent of contamination,
 * and identification of affected regions.
 */
export interface HazardListResponse {
  /**
   * Array of the specific alarms associated with this detection. The alarms and
   * alarmValues arrays must contain the same number of elements.
   */
  alarms: Array<string>;

  /**
   * Array of the values that correspond to each of the alarms contained in alarms.
   * The alarms and alarmValues arrays must contain the same number of elements.
   */
  alarmValues: Array<number>;

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
   * The detect time, in ISO 8601 UTC format, with millisecond precision.
   */
  detectTime: string;

  /**
   * The type of hazard (Chemical, Biological, Radiological, Nuclear) detect
   * associated with this record.
   */
  detectType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The (rounded) Mass Number of the material associated with this detection. The
   * rounded value is the mass number of the most abundant isotope of the element.
   */
  a?: number;

  /**
   * The radioactivity measurement of the material associated with this detection, in
   * becquerels (Bq). One becquerel (Bq) is equal to one nuclear decay per second.
   */
  activity?: number;

  /**
   * The specific bottle ID associated with this detection.
   */
  bottleId?: string;

  /**
   * The CAS Registry Number, also referred to as CAS Number or CAS RN, associated
   * with the this detection. The CAS Number is a unique numerical identifier
   * assigned by the Chemical Abstracts Service (CAS), to every chemical substance
   * described in the open scientific literature. It includes organic and inorganic
   * compounds, minerals, isotopes, alloys, mixtures, and nonstructurable materials
   * (UVCBs, substances of unknown or variable composition, complex reaction
   * products, or biological origin). For further information, reference
   * https://www.cas.org/cas-data/cas-registry.
   */
  casRN?: string;

  /**
   * The applicable channel involved in this biological material detection (e.g.
   * Digestive, Eyes, Respiratory, Skin, etc.) .
   */
  channel?: string;

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
   * The concentration time, in (kg/sec)/m^3, associated with this material
   * detection.
   */
  ctrnTime?: number;

  /**
   * Measure of density of the material associated with this detection, in kg/m^3.
   */
  density?: number;

  /**
   * The deposition measurement of the contaminant to surface area, in kg/m^2.
   */
  dep?: number;

  /**
   * The deposition concentration of the contaminant to surface area, in
   * becquerels/m^2.
   */
  depCtrn?: number;

  /**
   * The dose associated with this detection, in gray. Dose is the measure of the
   * energy deposited in matter by ionizing radiation per unit mass. One gray is
   * defined as one Joule of energy absorbed per kilogram of matter.
   */
  dose?: number;

  /**
   * The dose rate associated with this detection, in gray/sec. One gray is defined
   * as one Joule of energy absorbed per kilogram of matter.
   */
  doseRate?: number;

  /**
   * The known or projected hazard duration, in seconds, associated with this
   * material detection.
   */
  duration?: number;

  /**
   * Chemical Agent Monitor (CAM) G-type agent measurement, in number of display
   * bars. In G-mode, CAMs monitor for G-series nerve agents.
   */
  gBar?: number;

  /**
   * Flag indicating whether this detection is harmful to humans.
   */
  harmful?: boolean;

  /**
   * Chemical Agent Monitor (CAM) H-type agent measurement, in number of display
   * bars. In H-mode, CAMs monitor for blister agents.
   */
  hBar?: number;

  /**
   * ID of the Point of Interest (POI) record related to this hazard record.
   */
  idPOI?: string;

  /**
   * ID of the Track record related to this hazard record.
   */
  idTrack?: string;

  /**
   * Ratio of the chemical substance mass to the total mass of the mixture.
   */
  massFrac?: number;

  /**
   * The Radiological Category (1 - 5) which applies to the material associated with
   * this detection, according to the following definitions:
   *
   * Category 1: If not safely or securely managed, would be likely to cause
   * permanent injury to a person who handled them or was otherwise in contact with
   * them for more than a few minutes. It would probably be fatal to be close to this
   * amount of unshielded material for a period of a few minutes to an hour.
   *
   * Category 2: If not safely or securely managed, could cause permanent injury to a
   * person who handled them or was otherwise in contact with them for a short time
   * (minutes to hours). It could possibly be fatal to be close to this amount of
   * unshielded radioactive material for a period of hours to days.
   *
   * Category 3: If not safely or securely managed, could cause permanent injury to a
   * person who handled them or was otherwise in contact with them for hours. It
   * could possibly - although it is unlikely to be - fatal to be close to this
   * amount of unshielded radioactive material for a period of days to weeks.
   *
   * Category 4: If not safely managed or securely protected, could possibly cause
   * temporary injury to someone who handled them or was otherwise in contact with or
   * close to them for a period of many weeks, though this is unlikely. It is very
   * unlikely anyone would be permanently injured by this amount of radioactive
   * material.
   *
   * Category 5: Cannot cause permanent injury. This category applies to x-ray
   * fluorescence devices and electron capture devices.
   */
  matCat?: number;

  /**
   * The specific Material Class for the material associated with this detect. The
   * material class is generally associated with chemical and biological detections.
   */
  matClass?: string;

  /**
   * The material common name associated with this detection.
   */
  matName?: string;

  /**
   * The specific material type (MT) or MT Code involved in this detection, when
   * applicable. The material type is generally associated with radiological and/or
   * nuclear detections. For further information, reference Nuclear Materials
   * Management and Safeguards System (NMMSS) Users Guide Rev. 2.1.
   */
  matType?: string;

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
   * Measure of the concentration of the material associated with this detection, in
   * parts per million (units of contaminant mass per million parts of total mass).
   */
  ppm?: number;

  /**
   * Measure of radioactive concentration of the material associated with this
   * detection, in becquerels/m^3. One becquerel (Bq) is equal to one nuclear decay
   * per second.
   */
  radCtrn?: number;

  /**
   * Array of the specific readings associated with this detection. The readings,
   * readingUnits, and readingValues arrays must contain the same number of elements.
   */
  readings?: Array<string>;

  /**
   * Array of the units that correspond to each of the readingValues. The readings,
   * readingUnits, and readingValues arrays must contain the same number of elements.
   */
  readingUnits?: Array<string>;

  /**
   * Array of the values that correspond to each of the readings contained in
   * readings. The readings, readingUnits, and readingValues arrays must contain the
   * same number of elements.
   */
  readingValues?: Array<number>;

  /**
   * The Atomic Number of the material associated with this detection.
   */
  z?: number;
}

export type HazardCountResponse = string;

/**
 * Hazard contains information concerning the exposure of a geographic area to a
 * Chemical, Biological, Radiological, or Nuclear (CBRN) contaminant. The Hazard
 * schema includes the detection time and type of contamination as well as optional
 * information regarding specific material properties, the extent of contamination,
 * and identification of affected regions.
 */
export interface HazardGetResponse {
  /**
   * Array of the specific alarms associated with this detection. The alarms and
   * alarmValues arrays must contain the same number of elements.
   */
  alarms: Array<string>;

  /**
   * Array of the values that correspond to each of the alarms contained in alarms.
   * The alarms and alarmValues arrays must contain the same number of elements.
   */
  alarmValues: Array<number>;

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
   * The detect time, in ISO 8601 UTC format, with millisecond precision.
   */
  detectTime: string;

  /**
   * The type of hazard (Chemical, Biological, Radiological, Nuclear) detect
   * associated with this record.
   */
  detectType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The (rounded) Mass Number of the material associated with this detection. The
   * rounded value is the mass number of the most abundant isotope of the element.
   */
  a?: number;

  /**
   * The radioactivity measurement of the material associated with this detection, in
   * becquerels (Bq). One becquerel (Bq) is equal to one nuclear decay per second.
   */
  activity?: number;

  /**
   * The specific bottle ID associated with this detection.
   */
  bottleId?: string;

  /**
   * The CAS Registry Number, also referred to as CAS Number or CAS RN, associated
   * with the this detection. The CAS Number is a unique numerical identifier
   * assigned by the Chemical Abstracts Service (CAS), to every chemical substance
   * described in the open scientific literature. It includes organic and inorganic
   * compounds, minerals, isotopes, alloys, mixtures, and nonstructurable materials
   * (UVCBs, substances of unknown or variable composition, complex reaction
   * products, or biological origin). For further information, reference
   * https://www.cas.org/cas-data/cas-registry.
   */
  casRN?: string;

  /**
   * The applicable channel involved in this biological material detection (e.g.
   * Digestive, Eyes, Respiratory, Skin, etc.) .
   */
  channel?: string;

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
   * The concentration time, in (kg/sec)/m^3, associated with this material
   * detection.
   */
  ctrnTime?: number;

  /**
   * Measure of density of the material associated with this detection, in kg/m^3.
   */
  density?: number;

  /**
   * The deposition measurement of the contaminant to surface area, in kg/m^2.
   */
  dep?: number;

  /**
   * The deposition concentration of the contaminant to surface area, in
   * becquerels/m^2.
   */
  depCtrn?: number;

  /**
   * The dose associated with this detection, in gray. Dose is the measure of the
   * energy deposited in matter by ionizing radiation per unit mass. One gray is
   * defined as one Joule of energy absorbed per kilogram of matter.
   */
  dose?: number;

  /**
   * The dose rate associated with this detection, in gray/sec. One gray is defined
   * as one Joule of energy absorbed per kilogram of matter.
   */
  doseRate?: number;

  /**
   * The known or projected hazard duration, in seconds, associated with this
   * material detection.
   */
  duration?: number;

  /**
   * Chemical Agent Monitor (CAM) G-type agent measurement, in number of display
   * bars. In G-mode, CAMs monitor for G-series nerve agents.
   */
  gBar?: number;

  /**
   * Flag indicating whether this detection is harmful to humans.
   */
  harmful?: boolean;

  /**
   * Chemical Agent Monitor (CAM) H-type agent measurement, in number of display
   * bars. In H-mode, CAMs monitor for blister agents.
   */
  hBar?: number;

  /**
   * ID of the Point of Interest (POI) record related to this hazard record.
   */
  idPOI?: string;

  /**
   * ID of the Track record related to this hazard record.
   */
  idTrack?: string;

  /**
   * Ratio of the chemical substance mass to the total mass of the mixture.
   */
  massFrac?: number;

  /**
   * The Radiological Category (1 - 5) which applies to the material associated with
   * this detection, according to the following definitions:
   *
   * Category 1: If not safely or securely managed, would be likely to cause
   * permanent injury to a person who handled them or was otherwise in contact with
   * them for more than a few minutes. It would probably be fatal to be close to this
   * amount of unshielded material for a period of a few minutes to an hour.
   *
   * Category 2: If not safely or securely managed, could cause permanent injury to a
   * person who handled them or was otherwise in contact with them for a short time
   * (minutes to hours). It could possibly be fatal to be close to this amount of
   * unshielded radioactive material for a period of hours to days.
   *
   * Category 3: If not safely or securely managed, could cause permanent injury to a
   * person who handled them or was otherwise in contact with them for hours. It
   * could possibly - although it is unlikely to be - fatal to be close to this
   * amount of unshielded radioactive material for a period of days to weeks.
   *
   * Category 4: If not safely managed or securely protected, could possibly cause
   * temporary injury to someone who handled them or was otherwise in contact with or
   * close to them for a period of many weeks, though this is unlikely. It is very
   * unlikely anyone would be permanently injured by this amount of radioactive
   * material.
   *
   * Category 5: Cannot cause permanent injury. This category applies to x-ray
   * fluorescence devices and electron capture devices.
   */
  matCat?: number;

  /**
   * The specific Material Class for the material associated with this detect. The
   * material class is generally associated with chemical and biological detections.
   */
  matClass?: string;

  /**
   * The material common name associated with this detection.
   */
  matName?: string;

  /**
   * The specific material type (MT) or MT Code involved in this detection, when
   * applicable. The material type is generally associated with radiological and/or
   * nuclear detections. For further information, reference Nuclear Materials
   * Management and Safeguards System (NMMSS) Users Guide Rev. 2.1.
   */
  matType?: string;

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
   * Measure of the concentration of the material associated with this detection, in
   * parts per million (units of contaminant mass per million parts of total mass).
   */
  ppm?: number;

  /**
   * Measure of radioactive concentration of the material associated with this
   * detection, in becquerels/m^3. One becquerel (Bq) is equal to one nuclear decay
   * per second.
   */
  radCtrn?: number;

  /**
   * Array of the specific readings associated with this detection. The readings,
   * readingUnits, and readingValues arrays must contain the same number of elements.
   */
  readings?: Array<string>;

  /**
   * Array of the units that correspond to each of the readingValues. The readings,
   * readingUnits, and readingValues arrays must contain the same number of elements.
   */
  readingUnits?: Array<string>;

  /**
   * Array of the values that correspond to each of the readings contained in
   * readings. The readings, readingUnits, and readingValues arrays must contain the
   * same number of elements.
   */
  readingValues?: Array<number>;

  /**
   * The Atomic Number of the material associated with this detection.
   */
  z?: number;
}

export type HazardTupleResponse = Array<HazardTupleResponse.HazardTupleResponseItem>;

export namespace HazardTupleResponse {
  /**
   * Hazard contains information concerning the exposure of a geographic area to a
   * Chemical, Biological, Radiological, or Nuclear (CBRN) contaminant. The Hazard
   * schema includes the detection time and type of contamination as well as optional
   * information regarding specific material properties, the extent of contamination,
   * and identification of affected regions.
   */
  export interface HazardTupleResponseItem {
    /**
     * Array of the specific alarms associated with this detection. The alarms and
     * alarmValues arrays must contain the same number of elements.
     */
    alarms: Array<string>;

    /**
     * Array of the values that correspond to each of the alarms contained in alarms.
     * The alarms and alarmValues arrays must contain the same number of elements.
     */
    alarmValues: Array<number>;

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
     * The detect time, in ISO 8601 UTC format, with millisecond precision.
     */
    detectTime: string;

    /**
     * The type of hazard (Chemical, Biological, Radiological, Nuclear) detect
     * associated with this record.
     */
    detectType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The (rounded) Mass Number of the material associated with this detection. The
     * rounded value is the mass number of the most abundant isotope of the element.
     */
    a?: number;

    /**
     * The radioactivity measurement of the material associated with this detection, in
     * becquerels (Bq). One becquerel (Bq) is equal to one nuclear decay per second.
     */
    activity?: number;

    /**
     * The specific bottle ID associated with this detection.
     */
    bottleId?: string;

    /**
     * The CAS Registry Number, also referred to as CAS Number or CAS RN, associated
     * with the this detection. The CAS Number is a unique numerical identifier
     * assigned by the Chemical Abstracts Service (CAS), to every chemical substance
     * described in the open scientific literature. It includes organic and inorganic
     * compounds, minerals, isotopes, alloys, mixtures, and nonstructurable materials
     * (UVCBs, substances of unknown or variable composition, complex reaction
     * products, or biological origin). For further information, reference
     * https://www.cas.org/cas-data/cas-registry.
     */
    casRN?: string;

    /**
     * The applicable channel involved in this biological material detection (e.g.
     * Digestive, Eyes, Respiratory, Skin, etc.) .
     */
    channel?: string;

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
     * The concentration time, in (kg/sec)/m^3, associated with this material
     * detection.
     */
    ctrnTime?: number;

    /**
     * Measure of density of the material associated with this detection, in kg/m^3.
     */
    density?: number;

    /**
     * The deposition measurement of the contaminant to surface area, in kg/m^2.
     */
    dep?: number;

    /**
     * The deposition concentration of the contaminant to surface area, in
     * becquerels/m^2.
     */
    depCtrn?: number;

    /**
     * The dose associated with this detection, in gray. Dose is the measure of the
     * energy deposited in matter by ionizing radiation per unit mass. One gray is
     * defined as one Joule of energy absorbed per kilogram of matter.
     */
    dose?: number;

    /**
     * The dose rate associated with this detection, in gray/sec. One gray is defined
     * as one Joule of energy absorbed per kilogram of matter.
     */
    doseRate?: number;

    /**
     * The known or projected hazard duration, in seconds, associated with this
     * material detection.
     */
    duration?: number;

    /**
     * Chemical Agent Monitor (CAM) G-type agent measurement, in number of display
     * bars. In G-mode, CAMs monitor for G-series nerve agents.
     */
    gBar?: number;

    /**
     * Flag indicating whether this detection is harmful to humans.
     */
    harmful?: boolean;

    /**
     * Chemical Agent Monitor (CAM) H-type agent measurement, in number of display
     * bars. In H-mode, CAMs monitor for blister agents.
     */
    hBar?: number;

    /**
     * ID of the Point of Interest (POI) record related to this hazard record.
     */
    idPOI?: string;

    /**
     * ID of the Track record related to this hazard record.
     */
    idTrack?: string;

    /**
     * Ratio of the chemical substance mass to the total mass of the mixture.
     */
    massFrac?: number;

    /**
     * The Radiological Category (1 - 5) which applies to the material associated with
     * this detection, according to the following definitions:
     *
     * Category 1: If not safely or securely managed, would be likely to cause
     * permanent injury to a person who handled them or was otherwise in contact with
     * them for more than a few minutes. It would probably be fatal to be close to this
     * amount of unshielded material for a period of a few minutes to an hour.
     *
     * Category 2: If not safely or securely managed, could cause permanent injury to a
     * person who handled them or was otherwise in contact with them for a short time
     * (minutes to hours). It could possibly be fatal to be close to this amount of
     * unshielded radioactive material for a period of hours to days.
     *
     * Category 3: If not safely or securely managed, could cause permanent injury to a
     * person who handled them or was otherwise in contact with them for hours. It
     * could possibly - although it is unlikely to be - fatal to be close to this
     * amount of unshielded radioactive material for a period of days to weeks.
     *
     * Category 4: If not safely managed or securely protected, could possibly cause
     * temporary injury to someone who handled them or was otherwise in contact with or
     * close to them for a period of many weeks, though this is unlikely. It is very
     * unlikely anyone would be permanently injured by this amount of radioactive
     * material.
     *
     * Category 5: Cannot cause permanent injury. This category applies to x-ray
     * fluorescence devices and electron capture devices.
     */
    matCat?: number;

    /**
     * The specific Material Class for the material associated with this detect. The
     * material class is generally associated with chemical and biological detections.
     */
    matClass?: string;

    /**
     * The material common name associated with this detection.
     */
    matName?: string;

    /**
     * The specific material type (MT) or MT Code involved in this detection, when
     * applicable. The material type is generally associated with radiological and/or
     * nuclear detections. For further information, reference Nuclear Materials
     * Management and Safeguards System (NMMSS) Users Guide Rev. 2.1.
     */
    matType?: string;

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
     * Measure of the concentration of the material associated with this detection, in
     * parts per million (units of contaminant mass per million parts of total mass).
     */
    ppm?: number;

    /**
     * Measure of radioactive concentration of the material associated with this
     * detection, in becquerels/m^3. One becquerel (Bq) is equal to one nuclear decay
     * per second.
     */
    radCtrn?: number;

    /**
     * Array of the specific readings associated with this detection. The readings,
     * readingUnits, and readingValues arrays must contain the same number of elements.
     */
    readings?: Array<string>;

    /**
     * Array of the units that correspond to each of the readingValues. The readings,
     * readingUnits, and readingValues arrays must contain the same number of elements.
     */
    readingUnits?: Array<string>;

    /**
     * Array of the values that correspond to each of the readings contained in
     * readings. The readings, readingUnits, and readingValues arrays must contain the
     * same number of elements.
     */
    readingValues?: Array<number>;

    /**
     * The Atomic Number of the material associated with this detection.
     */
    z?: number;
  }
}

export interface HazardCreateParams {
  /**
   * Array of the specific alarms associated with this detection. The alarms and
   * alarmValues arrays must contain the same number of elements.
   */
  alarms: Array<string>;

  /**
   * Array of the values that correspond to each of the alarms contained in alarms.
   * The alarms and alarmValues arrays must contain the same number of elements.
   */
  alarmValues: Array<number>;

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
   * The detect time, in ISO 8601 UTC format, with millisecond precision.
   */
  detectTime: string;

  /**
   * The type of hazard (Chemical, Biological, Radiological, Nuclear) detect
   * associated with this record.
   */
  detectType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The (rounded) Mass Number of the material associated with this detection. The
   * rounded value is the mass number of the most abundant isotope of the element.
   */
  a?: number;

  /**
   * The radioactivity measurement of the material associated with this detection, in
   * becquerels (Bq). One becquerel (Bq) is equal to one nuclear decay per second.
   */
  activity?: number;

  /**
   * The specific bottle ID associated with this detection.
   */
  bottleId?: string;

  /**
   * The CAS Registry Number, also referred to as CAS Number or CAS RN, associated
   * with the this detection. The CAS Number is a unique numerical identifier
   * assigned by the Chemical Abstracts Service (CAS), to every chemical substance
   * described in the open scientific literature. It includes organic and inorganic
   * compounds, minerals, isotopes, alloys, mixtures, and nonstructurable materials
   * (UVCBs, substances of unknown or variable composition, complex reaction
   * products, or biological origin). For further information, reference
   * https://www.cas.org/cas-data/cas-registry.
   */
  casRN?: string;

  /**
   * The applicable channel involved in this biological material detection (e.g.
   * Digestive, Eyes, Respiratory, Skin, etc.) .
   */
  channel?: string;

  /**
   * The concentration time, in (kg/sec)/m^3, associated with this material
   * detection.
   */
  ctrnTime?: number;

  /**
   * Measure of density of the material associated with this detection, in kg/m^3.
   */
  density?: number;

  /**
   * The deposition measurement of the contaminant to surface area, in kg/m^2.
   */
  dep?: number;

  /**
   * The deposition concentration of the contaminant to surface area, in
   * becquerels/m^2.
   */
  depCtrn?: number;

  /**
   * The dose associated with this detection, in gray. Dose is the measure of the
   * energy deposited in matter by ionizing radiation per unit mass. One gray is
   * defined as one Joule of energy absorbed per kilogram of matter.
   */
  dose?: number;

  /**
   * The dose rate associated with this detection, in gray/sec. One gray is defined
   * as one Joule of energy absorbed per kilogram of matter.
   */
  doseRate?: number;

  /**
   * The known or projected hazard duration, in seconds, associated with this
   * material detection.
   */
  duration?: number;

  /**
   * Chemical Agent Monitor (CAM) G-type agent measurement, in number of display
   * bars. In G-mode, CAMs monitor for G-series nerve agents.
   */
  gBar?: number;

  /**
   * Flag indicating whether this detection is harmful to humans.
   */
  harmful?: boolean;

  /**
   * Chemical Agent Monitor (CAM) H-type agent measurement, in number of display
   * bars. In H-mode, CAMs monitor for blister agents.
   */
  hBar?: number;

  /**
   * ID of the Point of Interest (POI) record related to this hazard record.
   */
  idPOI?: string;

  /**
   * ID of the Track record related to this hazard record.
   */
  idTrack?: string;

  /**
   * Ratio of the chemical substance mass to the total mass of the mixture.
   */
  massFrac?: number;

  /**
   * The Radiological Category (1 - 5) which applies to the material associated with
   * this detection, according to the following definitions:
   *
   * Category 1: If not safely or securely managed, would be likely to cause
   * permanent injury to a person who handled them or was otherwise in contact with
   * them for more than a few minutes. It would probably be fatal to be close to this
   * amount of unshielded material for a period of a few minutes to an hour.
   *
   * Category 2: If not safely or securely managed, could cause permanent injury to a
   * person who handled them or was otherwise in contact with them for a short time
   * (minutes to hours). It could possibly be fatal to be close to this amount of
   * unshielded radioactive material for a period of hours to days.
   *
   * Category 3: If not safely or securely managed, could cause permanent injury to a
   * person who handled them or was otherwise in contact with them for hours. It
   * could possibly - although it is unlikely to be - fatal to be close to this
   * amount of unshielded radioactive material for a period of days to weeks.
   *
   * Category 4: If not safely managed or securely protected, could possibly cause
   * temporary injury to someone who handled them or was otherwise in contact with or
   * close to them for a period of many weeks, though this is unlikely. It is very
   * unlikely anyone would be permanently injured by this amount of radioactive
   * material.
   *
   * Category 5: Cannot cause permanent injury. This category applies to x-ray
   * fluorescence devices and electron capture devices.
   */
  matCat?: number;

  /**
   * The specific Material Class for the material associated with this detect. The
   * material class is generally associated with chemical and biological detections.
   */
  matClass?: string;

  /**
   * The material common name associated with this detection.
   */
  matName?: string;

  /**
   * The specific material type (MT) or MT Code involved in this detection, when
   * applicable. The material type is generally associated with radiological and/or
   * nuclear detections. For further information, reference Nuclear Materials
   * Management and Safeguards System (NMMSS) Users Guide Rev. 2.1.
   */
  matType?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Measure of the concentration of the material associated with this detection, in
   * parts per million (units of contaminant mass per million parts of total mass).
   */
  ppm?: number;

  /**
   * Measure of radioactive concentration of the material associated with this
   * detection, in becquerels/m^3. One becquerel (Bq) is equal to one nuclear decay
   * per second.
   */
  radCtrn?: number;

  /**
   * Array of the specific readings associated with this detection. The readings,
   * readingUnits, and readingValues arrays must contain the same number of elements.
   */
  readings?: Array<string>;

  /**
   * Array of the units that correspond to each of the readingValues. The readings,
   * readingUnits, and readingValues arrays must contain the same number of elements.
   */
  readingUnits?: Array<string>;

  /**
   * Array of the values that correspond to each of the readings contained in
   * readings. The readings, readingUnits, and readingValues arrays must contain the
   * same number of elements.
   */
  readingValues?: Array<number>;

  /**
   * The Atomic Number of the material associated with this detection.
   */
  z?: number;
}

export interface HazardListParams extends OffsetPageParams {
  /**
   * The detect time, in ISO 8601 UTC format, with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  detectTime: string;
}

export interface HazardCountParams {
  /**
   * The detect time, in ISO 8601 UTC format, with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  detectTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface HazardCreateBulkParams {
  body: Array<HazardCreateBulkParams.Body>;
}

export namespace HazardCreateBulkParams {
  /**
   * Hazard contains information concerning the exposure of a geographic area to a
   * Chemical, Biological, Radiological, or Nuclear (CBRN) contaminant. The Hazard
   * schema includes the detection time and type of contamination as well as optional
   * information regarding specific material properties, the extent of contamination,
   * and identification of affected regions.
   */
  export interface Body {
    /**
     * Array of the specific alarms associated with this detection. The alarms and
     * alarmValues arrays must contain the same number of elements.
     */
    alarms: Array<string>;

    /**
     * Array of the values that correspond to each of the alarms contained in alarms.
     * The alarms and alarmValues arrays must contain the same number of elements.
     */
    alarmValues: Array<number>;

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
     * The detect time, in ISO 8601 UTC format, with millisecond precision.
     */
    detectTime: string;

    /**
     * The type of hazard (Chemical, Biological, Radiological, Nuclear) detect
     * associated with this record.
     */
    detectType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The (rounded) Mass Number of the material associated with this detection. The
     * rounded value is the mass number of the most abundant isotope of the element.
     */
    a?: number;

    /**
     * The radioactivity measurement of the material associated with this detection, in
     * becquerels (Bq). One becquerel (Bq) is equal to one nuclear decay per second.
     */
    activity?: number;

    /**
     * The specific bottle ID associated with this detection.
     */
    bottleId?: string;

    /**
     * The CAS Registry Number, also referred to as CAS Number or CAS RN, associated
     * with the this detection. The CAS Number is a unique numerical identifier
     * assigned by the Chemical Abstracts Service (CAS), to every chemical substance
     * described in the open scientific literature. It includes organic and inorganic
     * compounds, minerals, isotopes, alloys, mixtures, and nonstructurable materials
     * (UVCBs, substances of unknown or variable composition, complex reaction
     * products, or biological origin). For further information, reference
     * https://www.cas.org/cas-data/cas-registry.
     */
    casRN?: string;

    /**
     * The applicable channel involved in this biological material detection (e.g.
     * Digestive, Eyes, Respiratory, Skin, etc.) .
     */
    channel?: string;

    /**
     * The concentration time, in (kg/sec)/m^3, associated with this material
     * detection.
     */
    ctrnTime?: number;

    /**
     * Measure of density of the material associated with this detection, in kg/m^3.
     */
    density?: number;

    /**
     * The deposition measurement of the contaminant to surface area, in kg/m^2.
     */
    dep?: number;

    /**
     * The deposition concentration of the contaminant to surface area, in
     * becquerels/m^2.
     */
    depCtrn?: number;

    /**
     * The dose associated with this detection, in gray. Dose is the measure of the
     * energy deposited in matter by ionizing radiation per unit mass. One gray is
     * defined as one Joule of energy absorbed per kilogram of matter.
     */
    dose?: number;

    /**
     * The dose rate associated with this detection, in gray/sec. One gray is defined
     * as one Joule of energy absorbed per kilogram of matter.
     */
    doseRate?: number;

    /**
     * The known or projected hazard duration, in seconds, associated with this
     * material detection.
     */
    duration?: number;

    /**
     * Chemical Agent Monitor (CAM) G-type agent measurement, in number of display
     * bars. In G-mode, CAMs monitor for G-series nerve agents.
     */
    gBar?: number;

    /**
     * Flag indicating whether this detection is harmful to humans.
     */
    harmful?: boolean;

    /**
     * Chemical Agent Monitor (CAM) H-type agent measurement, in number of display
     * bars. In H-mode, CAMs monitor for blister agents.
     */
    hBar?: number;

    /**
     * ID of the Point of Interest (POI) record related to this hazard record.
     */
    idPOI?: string;

    /**
     * ID of the Track record related to this hazard record.
     */
    idTrack?: string;

    /**
     * Ratio of the chemical substance mass to the total mass of the mixture.
     */
    massFrac?: number;

    /**
     * The Radiological Category (1 - 5) which applies to the material associated with
     * this detection, according to the following definitions:
     *
     * Category 1: If not safely or securely managed, would be likely to cause
     * permanent injury to a person who handled them or was otherwise in contact with
     * them for more than a few minutes. It would probably be fatal to be close to this
     * amount of unshielded material for a period of a few minutes to an hour.
     *
     * Category 2: If not safely or securely managed, could cause permanent injury to a
     * person who handled them or was otherwise in contact with them for a short time
     * (minutes to hours). It could possibly be fatal to be close to this amount of
     * unshielded radioactive material for a period of hours to days.
     *
     * Category 3: If not safely or securely managed, could cause permanent injury to a
     * person who handled them or was otherwise in contact with them for hours. It
     * could possibly - although it is unlikely to be - fatal to be close to this
     * amount of unshielded radioactive material for a period of days to weeks.
     *
     * Category 4: If not safely managed or securely protected, could possibly cause
     * temporary injury to someone who handled them or was otherwise in contact with or
     * close to them for a period of many weeks, though this is unlikely. It is very
     * unlikely anyone would be permanently injured by this amount of radioactive
     * material.
     *
     * Category 5: Cannot cause permanent injury. This category applies to x-ray
     * fluorescence devices and electron capture devices.
     */
    matCat?: number;

    /**
     * The specific Material Class for the material associated with this detect. The
     * material class is generally associated with chemical and biological detections.
     */
    matClass?: string;

    /**
     * The material common name associated with this detection.
     */
    matName?: string;

    /**
     * The specific material type (MT) or MT Code involved in this detection, when
     * applicable. The material type is generally associated with radiological and/or
     * nuclear detections. For further information, reference Nuclear Materials
     * Management and Safeguards System (NMMSS) Users Guide Rev. 2.1.
     */
    matType?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Measure of the concentration of the material associated with this detection, in
     * parts per million (units of contaminant mass per million parts of total mass).
     */
    ppm?: number;

    /**
     * Measure of radioactive concentration of the material associated with this
     * detection, in becquerels/m^3. One becquerel (Bq) is equal to one nuclear decay
     * per second.
     */
    radCtrn?: number;

    /**
     * Array of the specific readings associated with this detection. The readings,
     * readingUnits, and readingValues arrays must contain the same number of elements.
     */
    readings?: Array<string>;

    /**
     * Array of the units that correspond to each of the readingValues. The readings,
     * readingUnits, and readingValues arrays must contain the same number of elements.
     */
    readingUnits?: Array<string>;

    /**
     * Array of the values that correspond to each of the readings contained in
     * readings. The readings, readingUnits, and readingValues arrays must contain the
     * same number of elements.
     */
    readingValues?: Array<number>;

    /**
     * The Atomic Number of the material associated with this detection.
     */
    z?: number;
  }
}

export interface HazardGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface HazardTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The detect time, in ISO 8601 UTC format, with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  detectTime: string;

  firstResult?: number;

  maxResults?: number;
}

Hazard.History = History;

export declare namespace Hazard {
  export {
    type HazardListResponse as HazardListResponse,
    type HazardCountResponse as HazardCountResponse,
    type HazardGetResponse as HazardGetResponse,
    type HazardTupleResponse as HazardTupleResponse,
    type HazardListResponsesOffsetPage as HazardListResponsesOffsetPage,
    type HazardCreateParams as HazardCreateParams,
    type HazardListParams as HazardListParams,
    type HazardCountParams as HazardCountParams,
    type HazardCreateBulkParams as HazardCreateBulkParams,
    type HazardGetParams as HazardGetParams,
    type HazardTupleParams as HazardTupleParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
  };
}
