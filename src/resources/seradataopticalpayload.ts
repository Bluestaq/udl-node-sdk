// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Seradataopticalpayload extends APIResource {
  /**
   * Service operation to take a single SeradataOpticalPayload as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: SeradataopticalpayloadCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/seradataopticalpayload', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update an SeradataOpticalPayload. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(
    id1: string,
    body: SeradataopticalpayloadUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/udl/seradataopticalpayload/${id1}`, {
      body,
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
  list(options?: Core.RequestOptions): Core.APIPromise<SeradataopticalpayloadListResponse> {
    return this._client.get('/udl/seradataopticalpayload', options);
  }

  /**
   * Service operation to delete an SeradataOpticalPayload specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/seradataopticalpayload/${id}`, {
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
    return this._client.get('/udl/seradataopticalpayload/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single SeradataOpticalPayload by its unique ID passed
   * as a path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<SeradataopticalpayloadGetResponse> {
    return this._client.get(`/udl/seradataopticalpayload/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/seradataopticalpayload/queryhelp', {
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
    query: SeradataopticalpayloadTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SeradataopticalpayloadTupleResponse> {
    return this._client.get('/udl/seradataopticalpayload/tuple', { query, ...options });
  }
}

export type SeradataopticalpayloadListResponse =
  Array<SeradataopticalpayloadListResponse.SeradataopticalpayloadListResponseItem>;

export namespace SeradataopticalpayloadListResponse {
  /**
   * Details for an optical payload from Seradata.
   */
  export interface SeradataopticalpayloadListResponseItem {
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
     * Best resolution.
     */
    bestResolution?: number;

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
     * Field of regard of this radar in degrees.
     */
    fieldOfRegard?: number;

    /**
     * Field of view of this radar in kilometers.
     */
    fieldOfView?: number;

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
     * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
     */
    imagingPayloadCategory?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
     * Radiometer), AWFI, etc.
     */
    name?: string;

    /**
     * Payload notes.
     */
    notes?: string;

    /**
     * Number of film return canisters.
     */
    numberOfFilmReturnCanisters?: number;

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
     * Point method for this radar, e.g. Spacecraft.
     */
    pointingMethod?: string;

    /**
     * Recorder size.
     */
    recorderSize?: string;

    /**
     * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
     * etc.
     */
    spectralBand?: string;

    /**
     * Frequency limit for this payload, e.g. 0.51 - 0.59.
     */
    spectralFrequencyLimits?: string;

    /**
     * Swath width in kilometers.
     */
    swathWidth?: number;
  }
}

export type SeradataopticalpayloadCountResponse = string;

/**
 * Details for an optical payload from Seradata.
 */
export interface SeradataopticalpayloadGetResponse {
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
   * Best resolution.
   */
  bestResolution?: number;

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
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

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
   * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
   */
  imagingPayloadCategory?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
   * Radiometer), AWFI, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

  /**
   * Number of film return canisters.
   */
  numberOfFilmReturnCanisters?: number;

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
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Recorder size.
   */
  recorderSize?: string;

  /**
   * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
   * etc.
   */
  spectralBand?: string;

  /**
   * Frequency limit for this payload, e.g. 0.51 - 0.59.
   */
  spectralFrequencyLimits?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;

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

export type SeradataopticalpayloadTupleResponse =
  Array<SeradataopticalpayloadTupleResponse.SeradataopticalpayloadTupleResponseItem>;

export namespace SeradataopticalpayloadTupleResponse {
  /**
   * Details for an optical payload from Seradata.
   */
  export interface SeradataopticalpayloadTupleResponseItem {
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
     * Best resolution.
     */
    bestResolution?: number;

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
     * Field of regard of this radar in degrees.
     */
    fieldOfRegard?: number;

    /**
     * Field of view of this radar in kilometers.
     */
    fieldOfView?: number;

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
     * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
     */
    imagingPayloadCategory?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
     * Radiometer), AWFI, etc.
     */
    name?: string;

    /**
     * Payload notes.
     */
    notes?: string;

    /**
     * Number of film return canisters.
     */
    numberOfFilmReturnCanisters?: number;

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
     * Point method for this radar, e.g. Spacecraft.
     */
    pointingMethod?: string;

    /**
     * Recorder size.
     */
    recorderSize?: string;

    /**
     * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
     * etc.
     */
    spectralBand?: string;

    /**
     * Frequency limit for this payload, e.g. 0.51 - 0.59.
     */
    spectralFrequencyLimits?: string;

    /**
     * Swath width in kilometers.
     */
    swathWidth?: number;

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

export interface SeradataopticalpayloadCreateParams {
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
   * Best resolution.
   */
  bestResolution?: number;

  /**
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

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
   * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
   */
  imagingPayloadCategory?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
   * Radiometer), AWFI, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

  /**
   * Number of film return canisters.
   */
  numberOfFilmReturnCanisters?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Recorder size.
   */
  recorderSize?: string;

  /**
   * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
   * etc.
   */
  spectralBand?: string;

  /**
   * Frequency limit for this payload, e.g. 0.51 - 0.59.
   */
  spectralFrequencyLimits?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;
}

export interface SeradataopticalpayloadUpdateParams {
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
   * Best resolution.
   */
  bestResolution?: number;

  /**
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

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
   * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
   */
  imagingPayloadCategory?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
   * Radiometer), AWFI, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

  /**
   * Number of film return canisters.
   */
  numberOfFilmReturnCanisters?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Recorder size.
   */
  recorderSize?: string;

  /**
   * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
   * etc.
   */
  spectralBand?: string;

  /**
   * Frequency limit for this payload, e.g. 0.51 - 0.59.
   */
  spectralFrequencyLimits?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;
}

export interface SeradataopticalpayloadTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Seradataopticalpayload {
  export {
    type SeradataopticalpayloadListResponse as SeradataopticalpayloadListResponse,
    type SeradataopticalpayloadCountResponse as SeradataopticalpayloadCountResponse,
    type SeradataopticalpayloadGetResponse as SeradataopticalpayloadGetResponse,
    type SeradataopticalpayloadTupleResponse as SeradataopticalpayloadTupleResponse,
    type SeradataopticalpayloadCreateParams as SeradataopticalpayloadCreateParams,
    type SeradataopticalpayloadUpdateParams as SeradataopticalpayloadUpdateParams,
    type SeradataopticalpayloadTupleParams as SeradataopticalpayloadTupleParams,
  };
}
