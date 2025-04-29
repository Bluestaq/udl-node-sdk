// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Seradatacommdetails extends APIResource {
  /**
   * Service operation to take a single SeradataCommDetails as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: SeradatacommdetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/seradatacommdetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an SeradataCommDetails. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  update(pathID: string, body: SeradatacommdetailUpdateParams, options?: RequestOptions): APIPromise<void> {
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
   */
  list(
    query: SeradatacommdetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeradatacommdetailListResponse> {
    return this._client.get('/udl/seradatacommdetails', { query, ...options });
  }

  /**
   * Service operation to delete an SeradataCommDetails specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
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
   */
  count(
    query: SeradatacommdetailCountParams | null | undefined = {},
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
   */
  get(
    id: string,
    query: SeradatacommdetailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeradatacommdetailGetResponse> {
    return this._client.get(path`/udl/seradatacommdetails/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/seradatacommdetails/queryhelp', {
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
    query: SeradatacommdetailTupleParams,
    options?: RequestOptions,
  ): APIPromise<SeradatacommdetailTupleResponse> {
    return this._client.get('/udl/seradatacommdetails/tuple', { query, ...options });
  }
}

export type SeradatacommdetailListResponse =
  Array<SeradatacommdetailListResponse.SeradatacommdetailListResponseItem>;

export namespace SeradatacommdetailListResponse {
  /**
   * Seradata-compiled information on communications payloads.
   */
  export interface SeradatacommdetailListResponseItem {
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
}

export type SeradatacommdetailCountResponse = string;

/**
 * Seradata-compiled information on communications payloads.
 */
export interface SeradatacommdetailGetResponse {
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

export type SeradatacommdetailTupleResponse =
  Array<SeradatacommdetailTupleResponse.SeradatacommdetailTupleResponseItem>;

export namespace SeradatacommdetailTupleResponse {
  /**
   * Seradata-compiled information on communications payloads.
   */
  export interface SeradatacommdetailTupleResponseItem {
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

export interface SeradatacommdetailCreateParams {
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

export interface SeradatacommdetailUpdateParams {
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

export interface SeradatacommdetailListParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradatacommdetailCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradatacommdetailGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradatacommdetailTupleParams {
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

export declare namespace Seradatacommdetails {
  export {
    type SeradatacommdetailListResponse as SeradatacommdetailListResponse,
    type SeradatacommdetailCountResponse as SeradatacommdetailCountResponse,
    type SeradatacommdetailGetResponse as SeradatacommdetailGetResponse,
    type SeradatacommdetailTupleResponse as SeradatacommdetailTupleResponse,
    type SeradatacommdetailCreateParams as SeradatacommdetailCreateParams,
    type SeradatacommdetailUpdateParams as SeradatacommdetailUpdateParams,
    type SeradatacommdetailListParams as SeradatacommdetailListParams,
    type SeradatacommdetailCountParams as SeradatacommdetailCountParams,
    type SeradatacommdetailGetParams as SeradatacommdetailGetParams,
    type SeradatacommdetailTupleParams as SeradatacommdetailTupleParams,
  };
}
