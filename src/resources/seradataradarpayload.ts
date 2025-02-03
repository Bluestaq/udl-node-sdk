// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Seradataradarpayload extends APIResource {
  /**
   * Service operation to take a single SeradataRadarPayload as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: SeradataradarpayloadCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/seradataradarpayload', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update an SeradataRadarPayload. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  update(params: SeradataradarpayloadUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/udl/seradataradarpayload/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SeradataradarpayloadListResponse> {
    return this._client.get('/udl/seradataradarpayload', options);
  }

  /**
   * Service operation to delete an SeradataRadarPayload specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/seradataradarpayload/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/seradataradarpayload/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single SeradataRadarPayload by its unique ID passed
   * as a path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<SeradataradarpayloadGetResponse> {
    return this._client.get(`/udl/seradataradarpayload/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/seradataradarpayload/queryhelp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
    query: SeradataradarpayloadTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SeradataradarpayloadTupleResponse> {
    return this._client.get('/udl/seradataradarpayload/tuple', { query, ...options });
  }
}

export type SeradataradarpayloadListResponse =
  Array<SeradataradarpayloadListResponse.SeradataradarpayloadListResponseItem>;

export namespace SeradataradarpayloadListResponse {
  /**
   * Details for an radar payload from Seradata.
   */
  export interface SeradataradarpayloadListResponseItem {
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
}

export type SeradataradarpayloadCountResponse = string;

/**
 * Details for an radar payload from Seradata.
 */
export interface SeradataradarpayloadGetResponse {
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

export type SeradataradarpayloadTupleResponse =
  Array<SeradataradarpayloadTupleResponse.SeradataradarpayloadTupleResponseItem>;

export namespace SeradataradarpayloadTupleResponse {
  /**
   * Details for an radar payload from Seradata.
   */
  export interface SeradataradarpayloadTupleResponseItem {
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

export interface SeradataradarpayloadCreateParams {
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

export interface SeradataradarpayloadUpdateParams {
  /**
   * Path param: The ID of the SeradataRadarPayload to update.
   */
  path_id: string;

  /**
   * Body param: Classification marking of the data in IC/CAPCO Portion-marked
   * format.
   */
  classificationMarking: string;

  /**
   * Body param: Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST
   * data:
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
   * Body param: Source of the data.
   */
  source: string;

  /**
   * Body param: Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Body param: Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Body param: Radar bandwidth in mega hertz.
   */
  bandwidth?: number;

  /**
   * Body param: Best resolution in meters.
   */
  bestResolution?: number;

  /**
   * Body param: Radar category, e.g. SAR, Surface Search, etc.
   */
  category?: string;

  /**
   * Body param: Constellation interferometric capability.
   */
  constellationInterferometricCapability?: string;

  /**
   * Body param: Duty cycle.
   */
  dutyCycle?: string;

  /**
   * Body param: Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Body param: Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

  /**
   * Body param: Frequency in giga hertz.
   */
  frequency?: number;

  /**
   * Body param: Name of the band of this RF range (e.g.
   * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
   * details and descriptions of each band name.
   */
  frequencyBand?: string;

  /**
   * Body param: Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Body param: Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Body param: Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * Body param: UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Body param: Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Body param: Sensor name from Seradata, e.g. ALT (Radar Altimeter), COSI (Corea
   * SAR Instrument), etc.
   */
  name?: string;

  /**
   * Body param: Payload notes.
   */
  notes?: string;

  /**
   * Body param: Originating system or organization which produced the data, if
   * different from the source. The origin may be different than the source if the
   * source was a mediating system which forwarded the data on behalf of the origin
   * system. If null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Body param: Partner seradata-spacecraft.
   */
  partnerSpacecraft?: string;

  /**
   * Body param: Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Body param: Receive polarization, e.g. Lin Dual, Lin vert, etc.
   */
  receivePolarization?: string;

  /**
   * Body param: Recorder size, e.g. 256.
   */
  recorderSize?: string;

  /**
   * Body param: Swath width in kilometers.
   */
  swathWidth?: number;

  /**
   * Body param: Transmit polarization, e.g. Lin Dual, Lin vert, etc.
   */
  transmitPolarization?: string;

  /**
   * Body param: Wave length in meters.
   */
  waveLength?: number;
}

export interface SeradataradarpayloadTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Seradataradarpayload {
  export {
    type SeradataradarpayloadListResponse as SeradataradarpayloadListResponse,
    type SeradataradarpayloadCountResponse as SeradataradarpayloadCountResponse,
    type SeradataradarpayloadGetResponse as SeradataradarpayloadGetResponse,
    type SeradataradarpayloadTupleResponse as SeradataradarpayloadTupleResponse,
    type SeradataradarpayloadCreateParams as SeradataradarpayloadCreateParams,
    type SeradataradarpayloadUpdateParams as SeradataradarpayloadUpdateParams,
    type SeradataradarpayloadTupleParams as SeradataradarpayloadTupleParams,
  };
}
