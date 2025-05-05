// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SeradataRadarPayload extends APIResource {
  /**
   * Service operation to take a single SeradataRadarPayload as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: SeradataRadarPayloadCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/seradataradarpayload', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an SeradataRadarPayload. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  update(pathID: string, body: SeradataRadarPayloadUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/seradataradarpayload/${pathID}`, {
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
    query: SeradataRadarPayloadListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SeradataRadarPayloadListResponsesOffsetPage, SeradataRadarPayloadListResponse> {
    return this._client.getAPIList(
      '/udl/seradataradarpayload',
      OffsetPage<SeradataRadarPayloadListResponse>,
      { query, ...options },
    );
  }

  /**
   * Service operation to delete an SeradataRadarPayload specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/seradataradarpayload/${id}`, {
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
   */
  count(
    query: SeradataRadarPayloadCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/seradataradarpayload/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SeradataRadarPayload by its unique ID passed
   * as a path parameter.
   */
  get(
    id: string,
    query: SeradataRadarPayloadGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeradataRadarPayloadGetResponse> {
    return this._client.get(path`/udl/seradataradarpayload/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/seradataradarpayload/queryhelp', {
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
    query: SeradataRadarPayloadTupleParams,
    options?: RequestOptions,
  ): APIPromise<SeradataRadarPayloadTupleResponse> {
    return this._client.get('/udl/seradataradarpayload/tuple', { query, ...options });
  }
}

export type SeradataRadarPayloadListResponsesOffsetPage = OffsetPage<SeradataRadarPayloadListResponse>;

/**
 * Details for an radar payload from Seradata.
 */
export interface SeradataRadarPayloadListResponse {
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Radar bandwidth in mega hertz.
   */
  bandwidth?: number;

  /**
   * Best resolution in meters.
   */
  bestResolution?: number;

  /**
   * Radar category, e.g. SAR, Surface Search, etc.
   */
  category?: string;

  /**
   * Constellation interferometric capability.
   */
  constellationInterferometricCapability?: string;

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
   * Duty cycle.
   */
  dutyCycle?: string;

  /**
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

  /**
   * Frequency in giga hertz.
   */
  frequency?: number;

  /**
   * Name of the band of this RF range (e.g.
   * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
   * details and descriptions of each band name.
   */
  frequencyBand?: string;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. ALT (Radar Altimeter), COSI (Corea SAR
   * Instrument), etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

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
   * Partner seradata-spacecraft.
   */
  partnerSpacecraft?: string;

  /**
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Receive polarization, e.g. Lin Dual, Lin vert, etc.
   */
  receivePolarization?: string;

  /**
   * Recorder size, e.g. 256.
   */
  recorderSize?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;

  /**
   * Transmit polarization, e.g. Lin Dual, Lin vert, etc.
   */
  transmitPolarization?: string;

  /**
   * Wave length in meters.
   */
  waveLength?: number;
}

export type SeradataRadarPayloadCountResponse = string;

/**
 * Details for an radar payload from Seradata.
 */
export interface SeradataRadarPayloadGetResponse {
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Radar bandwidth in mega hertz.
   */
  bandwidth?: number;

  /**
   * Best resolution in meters.
   */
  bestResolution?: number;

  /**
   * Radar category, e.g. SAR, Surface Search, etc.
   */
  category?: string;

  /**
   * Constellation interferometric capability.
   */
  constellationInterferometricCapability?: string;

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
   * Duty cycle.
   */
  dutyCycle?: string;

  /**
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

  /**
   * Frequency in giga hertz.
   */
  frequency?: number;

  /**
   * Name of the band of this RF range (e.g.
   * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
   * details and descriptions of each band name.
   */
  frequencyBand?: string;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. ALT (Radar Altimeter), COSI (Corea SAR
   * Instrument), etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

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
   * Partner seradata-spacecraft.
   */
  partnerSpacecraft?: string;

  /**
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Receive polarization, e.g. Lin Dual, Lin vert, etc.
   */
  receivePolarization?: string;

  /**
   * Recorder size, e.g. 256.
   */
  recorderSize?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;

  /**
   * Transmit polarization, e.g. Lin Dual, Lin vert, etc.
   */
  transmitPolarization?: string;

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
   * Wave length in meters.
   */
  waveLength?: number;
}

export type SeradataRadarPayloadTupleResponse =
  Array<SeradataRadarPayloadTupleResponse.SeradataRadarPayloadTupleResponseItem>;

export namespace SeradataRadarPayloadTupleResponse {
  /**
   * Details for an radar payload from Seradata.
   */
  export interface SeradataRadarPayloadTupleResponseItem {
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Radar bandwidth in mega hertz.
     */
    bandwidth?: number;

    /**
     * Best resolution in meters.
     */
    bestResolution?: number;

    /**
     * Radar category, e.g. SAR, Surface Search, etc.
     */
    category?: string;

    /**
     * Constellation interferometric capability.
     */
    constellationInterferometricCapability?: string;

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
     * Duty cycle.
     */
    dutyCycle?: string;

    /**
     * Field of regard of this radar in degrees.
     */
    fieldOfRegard?: number;

    /**
     * Field of view of this radar in kilometers.
     */
    fieldOfView?: number;

    /**
     * Frequency in giga hertz.
     */
    frequency?: number;

    /**
     * Name of the band of this RF range (e.g.
     * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
     * details and descriptions of each band name.
     */
    frequencyBand?: string;

    /**
     * Ground Station Locations for this payload.
     */
    groundStationLocations?: string;

    /**
     * Ground Station info for this payload.
     */
    groundStations?: string;

    /**
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the Sensor record.
     */
    idSensor?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Sensor name from Seradata, e.g. ALT (Radar Altimeter), COSI (Corea SAR
     * Instrument), etc.
     */
    name?: string;

    /**
     * Payload notes.
     */
    notes?: string;

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
     * Partner seradata-spacecraft.
     */
    partnerSpacecraft?: string;

    /**
     * Point method for this radar, e.g. Spacecraft.
     */
    pointingMethod?: string;

    /**
     * Receive polarization, e.g. Lin Dual, Lin vert, etc.
     */
    receivePolarization?: string;

    /**
     * Recorder size, e.g. 256.
     */
    recorderSize?: string;

    /**
     * Swath width in kilometers.
     */
    swathWidth?: number;

    /**
     * Transmit polarization, e.g. Lin Dual, Lin vert, etc.
     */
    transmitPolarization?: string;

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
     * Wave length in meters.
     */
    waveLength?: number;
  }
}

export interface SeradataRadarPayloadCreateParams {
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Radar bandwidth in mega hertz.
   */
  bandwidth?: number;

  /**
   * Best resolution in meters.
   */
  bestResolution?: number;

  /**
   * Radar category, e.g. SAR, Surface Search, etc.
   */
  category?: string;

  /**
   * Constellation interferometric capability.
   */
  constellationInterferometricCapability?: string;

  /**
   * Duty cycle.
   */
  dutyCycle?: string;

  /**
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

  /**
   * Frequency in giga hertz.
   */
  frequency?: number;

  /**
   * Name of the band of this RF range (e.g.
   * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
   * details and descriptions of each band name.
   */
  frequencyBand?: string;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. ALT (Radar Altimeter), COSI (Corea SAR
   * Instrument), etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Partner seradata-spacecraft.
   */
  partnerSpacecraft?: string;

  /**
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Receive polarization, e.g. Lin Dual, Lin vert, etc.
   */
  receivePolarization?: string;

  /**
   * Recorder size, e.g. 256.
   */
  recorderSize?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;

  /**
   * Transmit polarization, e.g. Lin Dual, Lin vert, etc.
   */
  transmitPolarization?: string;

  /**
   * Wave length in meters.
   */
  waveLength?: number;
}

export interface SeradataRadarPayloadUpdateParams {
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Radar bandwidth in mega hertz.
   */
  bandwidth?: number;

  /**
   * Best resolution in meters.
   */
  bestResolution?: number;

  /**
   * Radar category, e.g. SAR, Surface Search, etc.
   */
  category?: string;

  /**
   * Constellation interferometric capability.
   */
  constellationInterferometricCapability?: string;

  /**
   * Duty cycle.
   */
  dutyCycle?: string;

  /**
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

  /**
   * Frequency in giga hertz.
   */
  frequency?: number;

  /**
   * Name of the band of this RF range (e.g.
   * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
   * details and descriptions of each band name.
   */
  frequencyBand?: string;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. ALT (Radar Altimeter), COSI (Corea SAR
   * Instrument), etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Partner seradata-spacecraft.
   */
  partnerSpacecraft?: string;

  /**
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Receive polarization, e.g. Lin Dual, Lin vert, etc.
   */
  receivePolarization?: string;

  /**
   * Recorder size, e.g. 256.
   */
  recorderSize?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;

  /**
   * Transmit polarization, e.g. Lin Dual, Lin vert, etc.
   */
  transmitPolarization?: string;

  /**
   * Wave length in meters.
   */
  waveLength?: number;
}

export interface SeradataRadarPayloadListParams extends OffsetPageParams {}

export interface SeradataRadarPayloadCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataRadarPayloadGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataRadarPayloadTupleParams {
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

export declare namespace SeradataRadarPayload {
  export {
    type SeradataRadarPayloadListResponse as SeradataRadarPayloadListResponse,
    type SeradataRadarPayloadCountResponse as SeradataRadarPayloadCountResponse,
    type SeradataRadarPayloadGetResponse as SeradataRadarPayloadGetResponse,
    type SeradataRadarPayloadTupleResponse as SeradataRadarPayloadTupleResponse,
    type SeradataRadarPayloadListResponsesOffsetPage as SeradataRadarPayloadListResponsesOffsetPage,
    type SeradataRadarPayloadCreateParams as SeradataRadarPayloadCreateParams,
    type SeradataRadarPayloadUpdateParams as SeradataRadarPayloadUpdateParams,
    type SeradataRadarPayloadListParams as SeradataRadarPayloadListParams,
    type SeradataRadarPayloadCountParams as SeradataRadarPayloadCountParams,
    type SeradataRadarPayloadGetParams as SeradataRadarPayloadGetParams,
    type SeradataRadarPayloadTupleParams as SeradataRadarPayloadTupleParams,
  };
}
