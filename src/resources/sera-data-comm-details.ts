// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SeraDataCommDetails extends APIResource {
  /**
   * Service operation to take a single SeradataCommDetails as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.seraDataCommDetails.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: SeraDataCommDetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/seradatacommdetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an SeradataCommDetails. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.seraDataCommDetails.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: SeraDataCommDetailUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/seradatacommdetails/${pathID}`, {
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
   * for await (const seraDataCommDetailListResponse of client.seraDataCommDetails.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SeraDataCommDetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SeraDataCommDetailListResponsesOffsetPage, SeraDataCommDetailListResponse> {
    return this._client.getAPIList('/udl/seradatacommdetails', OffsetPage<SeraDataCommDetailListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete an SeradataCommDetails specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.seraDataCommDetails.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/seradatacommdetails/${id}`, {
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
   * const response = await client.seraDataCommDetails.count();
   * ```
   */
  count(
    query: SeraDataCommDetailCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/seradatacommdetails/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SeradataCommDetails by its unique ID passed as
   * a path parameter.
   *
   * @example
   * ```ts
   * const seraDataCommDetail =
   *   await client.seraDataCommDetails.get('id');
   * ```
   */
  get(
    id: string,
    query: SeraDataCommDetailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeraDataCommDetailGetResponse> {
    return this._client.get(path`/udl/seradatacommdetails/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.seraDataCommDetails.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SeraDataCommDetailQueryhelpResponse> {
    return this._client.get('/udl/seradatacommdetails/queryhelp', options);
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
   * const response = await client.seraDataCommDetails.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(
    query: SeraDataCommDetailTupleParams,
    options?: RequestOptions,
  ): APIPromise<SeraDataCommDetailTupleResponse> {
    return this._client.get('/udl/seradatacommdetails/tuple', { query, ...options });
  }
}

export type SeraDataCommDetailListResponsesOffsetPage = OffsetPage<SeraDataCommDetailListResponse>;

/**
 * Seradata-compiled information on communications payloads.
 */
export interface SeraDataCommDetailListResponse {
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
   * Comm bandwidth in Mhz.
   */
  bandwidth?: number;

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
   * Effective isotropic radiated power in dB.
   */
  eirp?: number;

  /**
   * Comm estimated HtsTotalCapacity in Gbps.
   */
  estHtsTotalCapacity?: number;

  /**
   * Comm estimated HtsTotalUserDownlinkBandwidthPerBeam in Mhz.
   */
  estHtsTotalUserDownlinkBandwidthPerBeam?: number;

  /**
   * Comm estimated HtsTotalUserUplinkBandwidthPerBeam in Mhz.
   */
  estHtsTotalUserUplinkBandwidthPerBeam?: number;

  /**
   * Comm gatewayDownlinkFrom in Ghz.
   */
  gatewayDownlinkFrom?: number;

  /**
   * Comm gatewayDownlinkTo in Ghz.
   */
  gatewayDownlinkTo?: number;

  /**
   * Comm gatewayUplinkFrom in Ghz.
   */
  gatewayUplinkFrom?: number;

  /**
   * Comm gatewayUplinkTo in Ghz.
   */
  gatewayUplinkTo?: number;

  /**
   * Comm hostedForCompanyOrgId.
   */
  hostedForCompanyOrgId?: string;

  /**
   * Comm htsNumUserSpotBeams.
   */
  htsNumUserSpotBeams?: number;

  /**
   * Comm htsUserDownlinkBandwidthPerBeam in Mhz.
   */
  htsUserDownlinkBandwidthPerBeam?: number;

  /**
   * Comm htsUserUplinkBandwidthPerBeam in Mhz.
   */
  htsUserUplinkBandwidthPerBeam?: number;

  /**
   * UUID of the parent Comm record.
   */
  idComm?: string;

  /**
   * Comm manufacturerOrgId.
   */
  manufacturerOrgId?: string;

  /**
   * Comm num36MhzEquivalentTransponders.
   */
  num36MhzEquivalentTransponders?: number;

  /**
   * Comm numOperationalTransponders.
   */
  numOperationalTransponders?: number;

  /**
   * Comm numSpareTransponders.
   */
  numSpareTransponders?: number;

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
   * Payload notes.
   */
  payloadNotes?: string;

  /**
   * Comm polarization.
   */
  polarization?: string;

  /**
   * Solid state power amplifier, in Watts.
   */
  solidStatePowerAmp?: number;

  /**
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId?: string;

  /**
   * Comm tradeLeaseOrgId.
   */
  tradeLeaseOrgId?: string;

  /**
   * Comm travelingWaveTubeAmplifier in Watts.
   */
  travelingWaveTubeAmplifier?: number;

  /**
   * Comm userDownlinkFrom in Ghz.
   */
  userDownlinkFrom?: number;

  /**
   * Comm userDownlinkTo in Ghz.
   */
  userDownlinkTo?: number;

  /**
   * Comm userUplinkFrom in Ghz.
   */
  userUplinkFrom?: number;

  /**
   * Comm userUplinkTo in Ghz.
   */
  userUplinkTo?: number;
}

export type SeraDataCommDetailCountResponse = string;

/**
 * Seradata-compiled information on communications payloads.
 */
export interface SeraDataCommDetailGetResponse {
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
   * Comm bandwidth in Mhz.
   */
  bandwidth?: number;

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
   * Effective isotropic radiated power in dB.
   */
  eirp?: number;

  /**
   * Comm estimated HtsTotalCapacity in Gbps.
   */
  estHtsTotalCapacity?: number;

  /**
   * Comm estimated HtsTotalUserDownlinkBandwidthPerBeam in Mhz.
   */
  estHtsTotalUserDownlinkBandwidthPerBeam?: number;

  /**
   * Comm estimated HtsTotalUserUplinkBandwidthPerBeam in Mhz.
   */
  estHtsTotalUserUplinkBandwidthPerBeam?: number;

  /**
   * Comm gatewayDownlinkFrom in Ghz.
   */
  gatewayDownlinkFrom?: number;

  /**
   * Comm gatewayDownlinkTo in Ghz.
   */
  gatewayDownlinkTo?: number;

  /**
   * Comm gatewayUplinkFrom in Ghz.
   */
  gatewayUplinkFrom?: number;

  /**
   * Comm gatewayUplinkTo in Ghz.
   */
  gatewayUplinkTo?: number;

  /**
   * Comm hostedForCompanyOrgId.
   */
  hostedForCompanyOrgId?: string;

  /**
   * Comm htsNumUserSpotBeams.
   */
  htsNumUserSpotBeams?: number;

  /**
   * Comm htsUserDownlinkBandwidthPerBeam in Mhz.
   */
  htsUserDownlinkBandwidthPerBeam?: number;

  /**
   * Comm htsUserUplinkBandwidthPerBeam in Mhz.
   */
  htsUserUplinkBandwidthPerBeam?: number;

  /**
   * UUID of the parent Comm record.
   */
  idComm?: string;

  /**
   * Comm manufacturerOrgId.
   */
  manufacturerOrgId?: string;

  /**
   * Comm num36MhzEquivalentTransponders.
   */
  num36MhzEquivalentTransponders?: number;

  /**
   * Comm numOperationalTransponders.
   */
  numOperationalTransponders?: number;

  /**
   * Comm numSpareTransponders.
   */
  numSpareTransponders?: number;

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
   * Payload notes.
   */
  payloadNotes?: string;

  /**
   * Comm polarization.
   */
  polarization?: string;

  /**
   * Solid state power amplifier, in Watts.
   */
  solidStatePowerAmp?: number;

  /**
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId?: string;

  /**
   * Comm tradeLeaseOrgId.
   */
  tradeLeaseOrgId?: string;

  /**
   * Comm travelingWaveTubeAmplifier in Watts.
   */
  travelingWaveTubeAmplifier?: number;

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
   * Comm userDownlinkFrom in Ghz.
   */
  userDownlinkFrom?: number;

  /**
   * Comm userDownlinkTo in Ghz.
   */
  userDownlinkTo?: number;

  /**
   * Comm userUplinkFrom in Ghz.
   */
  userUplinkFrom?: number;

  /**
   * Comm userUplinkTo in Ghz.
   */
  userUplinkTo?: number;
}

export interface SeraDataCommDetailQueryhelpResponse {
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

export type SeraDataCommDetailTupleResponse =
  Array<SeraDataCommDetailTupleResponse.SeraDataCommDetailTupleResponseItem>;

export namespace SeraDataCommDetailTupleResponse {
  /**
   * Seradata-compiled information on communications payloads.
   */
  export interface SeraDataCommDetailTupleResponseItem {
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
     * Comm bandwidth in Mhz.
     */
    bandwidth?: number;

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
     * Effective isotropic radiated power in dB.
     */
    eirp?: number;

    /**
     * Comm estimated HtsTotalCapacity in Gbps.
     */
    estHtsTotalCapacity?: number;

    /**
     * Comm estimated HtsTotalUserDownlinkBandwidthPerBeam in Mhz.
     */
    estHtsTotalUserDownlinkBandwidthPerBeam?: number;

    /**
     * Comm estimated HtsTotalUserUplinkBandwidthPerBeam in Mhz.
     */
    estHtsTotalUserUplinkBandwidthPerBeam?: number;

    /**
     * Comm gatewayDownlinkFrom in Ghz.
     */
    gatewayDownlinkFrom?: number;

    /**
     * Comm gatewayDownlinkTo in Ghz.
     */
    gatewayDownlinkTo?: number;

    /**
     * Comm gatewayUplinkFrom in Ghz.
     */
    gatewayUplinkFrom?: number;

    /**
     * Comm gatewayUplinkTo in Ghz.
     */
    gatewayUplinkTo?: number;

    /**
     * Comm hostedForCompanyOrgId.
     */
    hostedForCompanyOrgId?: string;

    /**
     * Comm htsNumUserSpotBeams.
     */
    htsNumUserSpotBeams?: number;

    /**
     * Comm htsUserDownlinkBandwidthPerBeam in Mhz.
     */
    htsUserDownlinkBandwidthPerBeam?: number;

    /**
     * Comm htsUserUplinkBandwidthPerBeam in Mhz.
     */
    htsUserUplinkBandwidthPerBeam?: number;

    /**
     * UUID of the parent Comm record.
     */
    idComm?: string;

    /**
     * Comm manufacturerOrgId.
     */
    manufacturerOrgId?: string;

    /**
     * Comm num36MhzEquivalentTransponders.
     */
    num36MhzEquivalentTransponders?: number;

    /**
     * Comm numOperationalTransponders.
     */
    numOperationalTransponders?: number;

    /**
     * Comm numSpareTransponders.
     */
    numSpareTransponders?: number;

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
     * Payload notes.
     */
    payloadNotes?: string;

    /**
     * Comm polarization.
     */
    polarization?: string;

    /**
     * Solid state power amplifier, in Watts.
     */
    solidStatePowerAmp?: number;

    /**
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId?: string;

    /**
     * Comm tradeLeaseOrgId.
     */
    tradeLeaseOrgId?: string;

    /**
     * Comm travelingWaveTubeAmplifier in Watts.
     */
    travelingWaveTubeAmplifier?: number;

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
     * Comm userDownlinkFrom in Ghz.
     */
    userDownlinkFrom?: number;

    /**
     * Comm userDownlinkTo in Ghz.
     */
    userDownlinkTo?: number;

    /**
     * Comm userUplinkFrom in Ghz.
     */
    userUplinkFrom?: number;

    /**
     * Comm userUplinkTo in Ghz.
     */
    userUplinkTo?: number;
  }
}

export interface SeraDataCommDetailCreateParams {
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
   * Comm bandwidth in Mhz.
   */
  bandwidth?: number;

  /**
   * Effective isotropic radiated power in dB.
   */
  eirp?: number;

  /**
   * Comm estimated HtsTotalCapacity in Gbps.
   */
  estHtsTotalCapacity?: number;

  /**
   * Comm estimated HtsTotalUserDownlinkBandwidthPerBeam in Mhz.
   */
  estHtsTotalUserDownlinkBandwidthPerBeam?: number;

  /**
   * Comm estimated HtsTotalUserUplinkBandwidthPerBeam in Mhz.
   */
  estHtsTotalUserUplinkBandwidthPerBeam?: number;

  /**
   * Comm gatewayDownlinkFrom in Ghz.
   */
  gatewayDownlinkFrom?: number;

  /**
   * Comm gatewayDownlinkTo in Ghz.
   */
  gatewayDownlinkTo?: number;

  /**
   * Comm gatewayUplinkFrom in Ghz.
   */
  gatewayUplinkFrom?: number;

  /**
   * Comm gatewayUplinkTo in Ghz.
   */
  gatewayUplinkTo?: number;

  /**
   * Comm hostedForCompanyOrgId.
   */
  hostedForCompanyOrgId?: string;

  /**
   * Comm htsNumUserSpotBeams.
   */
  htsNumUserSpotBeams?: number;

  /**
   * Comm htsUserDownlinkBandwidthPerBeam in Mhz.
   */
  htsUserDownlinkBandwidthPerBeam?: number;

  /**
   * Comm htsUserUplinkBandwidthPerBeam in Mhz.
   */
  htsUserUplinkBandwidthPerBeam?: number;

  /**
   * UUID of the parent Comm record.
   */
  idComm?: string;

  /**
   * Comm manufacturerOrgId.
   */
  manufacturerOrgId?: string;

  /**
   * Comm num36MhzEquivalentTransponders.
   */
  num36MhzEquivalentTransponders?: number;

  /**
   * Comm numOperationalTransponders.
   */
  numOperationalTransponders?: number;

  /**
   * Comm numSpareTransponders.
   */
  numSpareTransponders?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Payload notes.
   */
  payloadNotes?: string;

  /**
   * Comm polarization.
   */
  polarization?: string;

  /**
   * Solid state power amplifier, in Watts.
   */
  solidStatePowerAmp?: number;

  /**
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId?: string;

  /**
   * Comm tradeLeaseOrgId.
   */
  tradeLeaseOrgId?: string;

  /**
   * Comm travelingWaveTubeAmplifier in Watts.
   */
  travelingWaveTubeAmplifier?: number;

  /**
   * Comm userDownlinkFrom in Ghz.
   */
  userDownlinkFrom?: number;

  /**
   * Comm userDownlinkTo in Ghz.
   */
  userDownlinkTo?: number;

  /**
   * Comm userUplinkFrom in Ghz.
   */
  userUplinkFrom?: number;

  /**
   * Comm userUplinkTo in Ghz.
   */
  userUplinkTo?: number;
}

export interface SeraDataCommDetailUpdateParams {
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
   * Comm bandwidth in Mhz.
   */
  bandwidth?: number;

  /**
   * Effective isotropic radiated power in dB.
   */
  eirp?: number;

  /**
   * Comm estimated HtsTotalCapacity in Gbps.
   */
  estHtsTotalCapacity?: number;

  /**
   * Comm estimated HtsTotalUserDownlinkBandwidthPerBeam in Mhz.
   */
  estHtsTotalUserDownlinkBandwidthPerBeam?: number;

  /**
   * Comm estimated HtsTotalUserUplinkBandwidthPerBeam in Mhz.
   */
  estHtsTotalUserUplinkBandwidthPerBeam?: number;

  /**
   * Comm gatewayDownlinkFrom in Ghz.
   */
  gatewayDownlinkFrom?: number;

  /**
   * Comm gatewayDownlinkTo in Ghz.
   */
  gatewayDownlinkTo?: number;

  /**
   * Comm gatewayUplinkFrom in Ghz.
   */
  gatewayUplinkFrom?: number;

  /**
   * Comm gatewayUplinkTo in Ghz.
   */
  gatewayUplinkTo?: number;

  /**
   * Comm hostedForCompanyOrgId.
   */
  hostedForCompanyOrgId?: string;

  /**
   * Comm htsNumUserSpotBeams.
   */
  htsNumUserSpotBeams?: number;

  /**
   * Comm htsUserDownlinkBandwidthPerBeam in Mhz.
   */
  htsUserDownlinkBandwidthPerBeam?: number;

  /**
   * Comm htsUserUplinkBandwidthPerBeam in Mhz.
   */
  htsUserUplinkBandwidthPerBeam?: number;

  /**
   * UUID of the parent Comm record.
   */
  idComm?: string;

  /**
   * Comm manufacturerOrgId.
   */
  manufacturerOrgId?: string;

  /**
   * Comm num36MhzEquivalentTransponders.
   */
  num36MhzEquivalentTransponders?: number;

  /**
   * Comm numOperationalTransponders.
   */
  numOperationalTransponders?: number;

  /**
   * Comm numSpareTransponders.
   */
  numSpareTransponders?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Payload notes.
   */
  payloadNotes?: string;

  /**
   * Comm polarization.
   */
  polarization?: string;

  /**
   * Solid state power amplifier, in Watts.
   */
  solidStatePowerAmp?: number;

  /**
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId?: string;

  /**
   * Comm tradeLeaseOrgId.
   */
  tradeLeaseOrgId?: string;

  /**
   * Comm travelingWaveTubeAmplifier in Watts.
   */
  travelingWaveTubeAmplifier?: number;

  /**
   * Comm userDownlinkFrom in Ghz.
   */
  userDownlinkFrom?: number;

  /**
   * Comm userDownlinkTo in Ghz.
   */
  userDownlinkTo?: number;

  /**
   * Comm userUplinkFrom in Ghz.
   */
  userUplinkFrom?: number;

  /**
   * Comm userUplinkTo in Ghz.
   */
  userUplinkTo?: number;
}

export interface SeraDataCommDetailListParams extends OffsetPageParams {}

export interface SeraDataCommDetailCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeraDataCommDetailGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeraDataCommDetailTupleParams {
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

export declare namespace SeraDataCommDetails {
  export {
    type SeraDataCommDetailListResponse as SeraDataCommDetailListResponse,
    type SeraDataCommDetailCountResponse as SeraDataCommDetailCountResponse,
    type SeraDataCommDetailGetResponse as SeraDataCommDetailGetResponse,
    type SeraDataCommDetailQueryhelpResponse as SeraDataCommDetailQueryhelpResponse,
    type SeraDataCommDetailTupleResponse as SeraDataCommDetailTupleResponse,
    type SeraDataCommDetailListResponsesOffsetPage as SeraDataCommDetailListResponsesOffsetPage,
    type SeraDataCommDetailCreateParams as SeraDataCommDetailCreateParams,
    type SeraDataCommDetailUpdateParams as SeraDataCommDetailUpdateParams,
    type SeraDataCommDetailListParams as SeraDataCommDetailListParams,
    type SeraDataCommDetailCountParams as SeraDataCommDetailCountParams,
    type SeraDataCommDetailGetParams as SeraDataCommDetailGetParams,
    type SeraDataCommDetailTupleParams as SeraDataCommDetailTupleParams,
  };
}
