// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Surface extends APIResource {
  /**
   * Service operation to take a single Surface as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.surface.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'West lot',
   *   source: 'Bluestaq',
   *   type: 'PARKING',
   * });
   * ```
   */
  create(body: SurfaceCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/surface', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single Surface. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.surface.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'West lot',
   *   source: 'Bluestaq',
   *   type: 'PARKING',
   * });
   * ```
   */
  update(pathID: string, body: SurfaceUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/surface/${pathID}`, {
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
   * for await (const surfaceListResponse of client.surface.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SurfaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SurfaceListResponsesOffsetPage, SurfaceListResponse> {
    return this._client.getAPIList('/udl/surface', OffsetPage<SurfaceListResponse>, { query, ...options });
  }

  /**
   * Service operation to delete a Surface object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.surface.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/surface/${id}`, {
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
   * const response = await client.surface.count();
   * ```
   */
  count(query: SurfaceCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/surface/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Surface record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const surface = await client.surface.get('id');
   * ```
   */
  get(
    id: string,
    query: SurfaceGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SurfaceGetResponse> {
    return this._client.get(path`/udl/surface/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.surface.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SurfaceQueryhelpResponse> {
    return this._client.get('/udl/surface/queryhelp', options);
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
   * const response = await client.surface.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: SurfaceTupleParams, options?: RequestOptions): APIPromise<SurfaceTupleResponse> {
    return this._client.get('/udl/surface/tuple', { query, ...options });
  }
}

export type SurfaceListResponsesOffsetPage = OffsetPage<SurfaceListResponse>;

/**
 * Surface information contains properties related to an airfield's runway,
 * taxiway, and parking. The surface types and characteristics can dictate the
 * airfield's capability of hosting a specific aircraft.
 */
export interface SurfaceListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The surface name or identifier.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The surface type of this record (e.g. RUNWAY, TAXIWAY, PARKING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate site identifier provided by the source.
   */
  altSiteId?: string;

  /**
   * The surface condition (e.g. GOOD, FAIR, POOR, SERIOUS, FAILED, CLOSED, UNKNOWN).
   */
  condition?: string;

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
   * The max weight allowable on this surface type for a DDT-type (double dual
   * tandem) landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddtWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a DDT-type (double
   * dual tandem) landing gear configuration, in kilopounds (kip).
   */
  ddtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a DDT-type (double dual
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ddtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a DDT-type (double dual
   * tandem) landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddtWtKN?: number;

  /**
   * The max weight allowable on this surface type for an FAA 2D-type (twin tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an FAA 2D-type (twin
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  ddWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an FAA 2D-type (twin
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ddWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an FAA 2D-type (twin tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddWtKN?: number;

  /**
   * WGS-84 latitude of the coordinate representing the end-point of a surface, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  endLat?: number;

  /**
   * WGS-84 longitude of the coordinate representing the end-point of a surface, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  endLon?: number;

  /**
   * The unique identifier of the Site record that contains location information
   * about this surface.
   */
  idSite?: string;

  /**
   * Load classification number or pavement rating which ranks aircraft on a scale of
   * 1 to 120.
   */
  lcn?: number;

  /**
   * The landing distance available for the runway, in feet. Applicable for runway
   * surface types only.
   */
  ldaFt?: number;

  /**
   * The landing distance available for the runway, in meters. Applicable for runway
   * surface types only.
   */
  ldaM?: number;

  /**
   * The length of the surface type, in feet. Applicable for runway and parking
   * surface types.
   */
  lengthFt?: number;

  /**
   * The length of the surface type, in meters. Applicable for runway and parking
   * surface types.
   */
  lengthM?: number;

  /**
   * Flag indicating the surface has lighting.
   */
  lighting?: boolean;

  /**
   * Flag indicating the runway has approach lights. Applicable for runway surface
   * types only.
   */
  lightsAPRCH?: boolean;

  /**
   * Flag indicating the runway has centerline lights. Applicable for runway surface
   * types only.
   */
  lightsCL?: boolean;

  /**
   * Flag indicating the runway has Optical Landing System (OLS) lights. Applicable
   * for runway surface types only.
   */
  lightsOLS?: boolean;

  /**
   * Flag indicating the runway has Precision Approach Path Indicator (PAPI) lights.
   * Applicable for runway surface types only.
   */
  lightsPAPI?: boolean;

  /**
   * Flag indicating the runway has Runway End Identifier Lights (REIL). Applicable
   * for runway surface types only.
   */
  lightsREIL?: boolean;

  /**
   * Flag indicating the runway has edge lighting. Applicable for runway surface
   * types only.
   */
  lightsRWY?: boolean;

  /**
   * Flag indicating the runway has Sequential Flashing (SEQFL) lights. Applicable
   * for runway surface types only.
   */
  lightsSEQFL?: boolean;

  /**
   * Flag indicating the runway has Touchdown Zone lights. Applicable for runway
   * surface types only.
   */
  lightsTDZL?: boolean;

  /**
   * Flag indicating the runway lighting is unknown. Applicable for runway surface
   * types only.
   */
  lightsUNKN?: boolean;

  /**
   * Flag indicating the runway has Visual Approach Slope Indicator (VASI) lights.
   * Applicable for runway surface types only.
   */
  lightsVASI?: boolean;

  /**
   * The surface material (e.g. Asphalt, Concrete, Dirt).
   */
  material?: string;

  /**
   * Flag indicating that one or more obstacles or obstructions exist in the
   * proximity of this surface.
   */
  obstacle?: boolean;

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
   * Pavement classification number (PCN) and tire pressure code.
   */
  pcn?: string;

  /**
   * Description of the surface and its dimensions or how it is measured or oriented.
   */
  pointReference?: string;

  /**
   * Flag indicating this is the primary runway. Applicable for runway surface types
   * only.
   */
  primary?: boolean;

  /**
   * Raw weight bearing capacity value or pavement strength.
   */
  rawWBC?: string;

  /**
   * The max weight allowable on this surface type for an SBTT-type (single belly
   * twin tandem) landing gear configuration, in kilopounds (kip).Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  sbttWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an SBTT-type (single
   * belly twin tandem) landing gear configuration, in kilopounds (kip).
   */
  sbttWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an SBTT-type (single
   * belly twin tandem) landing gear configuration. For more information, contact the
   * provider source.
   */
  sbttWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an SBTT-type (single belly
   * twin tandem) landing gear configuration, in kilonewtons (kN).Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  sbttWtKN?: number;

  /**
   * WGS-84 latitude of the coordinate representing the start-point of a surface, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  startLat?: number;

  /**
   * WGS-84 longitude of the coordinate representing the start-point of a surface, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  startLon?: number;

  /**
   * The max weight allowable on this surface type for an ST-type (single tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  stWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an ST-type (single
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  stWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an ST-type (single
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  stWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an ST-type (single tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  stWtKN?: number;

  /**
   * The max weight allowable on this surface type for an S-type (single) landing
   * gear configuration, in kilopounds (kip). Note: The corresponding equivalent
   * field is not converted by the UDL and may or may not be supplied by the
   * provider. The provider/consumer is responsible for all unit conversions.
   */
  sWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an S-type (single)
   * landing gear configuration, in kilopounds (kip).
   */
  sWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an S-type (single)
   * landing gear configuration. For more information, contact the provider source.
   */
  sWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an S-type (single) landing
   * gear configuration, in kilonewtons (kN).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  sWtKN?: number;

  /**
   * The max weight allowable on this surface type for a TDT-type (twin delta tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  tdtWtkip?: number;

  /**
   * The modified max weight allowable on this surface type for a TDT-type (twin
   * delta tandem) landing gear configuration, in kilopounds (kip).
   */
  tdtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a TDT-type (twin delta
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  tdtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a TDT-type (twin delta tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  tdtWtKN?: number;

  /**
   * The max weight allowable on this surface type for a TRT-type (triple tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  trtWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a TRT-type (triple
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  trtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a TRT-type (triple
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  trtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a TRT-type (triple tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  trtWtKN?: number;

  /**
   * The max weight allowable on this surface type for a GDSS TT-type (twin tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ttWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a GDSS TT-type (twin
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  ttWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a GDSS TT-type (twin
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ttWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a GDSS TT-type (twin tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ttWtKN?: number;

  /**
   * The max weight allowable on this surface type for a T-type (twin (dual)) landing
   * gear configuration, in kilopounds (kip).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  tWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a T-type (twin
   * (dual)) landing gear configuration, in kilopounds (kip).
   */
  tWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a T-type (twin(dual))
   * landing gear configuration. For more information, contact the provider source.
   */
  tWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a T-type (twin (dual)) landing
   * gear configuration, in kilonewtons (kN).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  tWtKN?: number;

  /**
   * The width of the surface type, in feet.
   */
  widthFt?: number;

  /**
   * The width of the surface type, in meters.
   */
  widthM?: number;
}

export type SurfaceCountResponse = string;

/**
 * Surface information contains properties related to an airfield's runway,
 * taxiway, and parking. The surface types and characteristics can dictate the
 * airfield's capability of hosting a specific aircraft.
 */
export interface SurfaceGetResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The surface name or identifier.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The surface type of this record (e.g. RUNWAY, TAXIWAY, PARKING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate site identifier provided by the source.
   */
  altSiteId?: string;

  /**
   * The surface condition (e.g. GOOD, FAIR, POOR, SERIOUS, FAILED, CLOSED, UNKNOWN).
   */
  condition?: string;

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
   * The max weight allowable on this surface type for a DDT-type (double dual
   * tandem) landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddtWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a DDT-type (double
   * dual tandem) landing gear configuration, in kilopounds (kip).
   */
  ddtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a DDT-type (double dual
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ddtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a DDT-type (double dual
   * tandem) landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddtWtKN?: number;

  /**
   * The max weight allowable on this surface type for an FAA 2D-type (twin tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an FAA 2D-type (twin
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  ddWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an FAA 2D-type (twin
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ddWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an FAA 2D-type (twin tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddWtKN?: number;

  /**
   * WGS-84 latitude of the coordinate representing the end-point of a surface, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  endLat?: number;

  /**
   * WGS-84 longitude of the coordinate representing the end-point of a surface, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  endLon?: number;

  /**
   * The unique identifier of the Site record that contains location information
   * about this surface.
   */
  idSite?: string;

  /**
   * Load classification number or pavement rating which ranks aircraft on a scale of
   * 1 to 120.
   */
  lcn?: number;

  /**
   * The landing distance available for the runway, in feet. Applicable for runway
   * surface types only.
   */
  ldaFt?: number;

  /**
   * The landing distance available for the runway, in meters. Applicable for runway
   * surface types only.
   */
  ldaM?: number;

  /**
   * The length of the surface type, in feet. Applicable for runway and parking
   * surface types.
   */
  lengthFt?: number;

  /**
   * The length of the surface type, in meters. Applicable for runway and parking
   * surface types.
   */
  lengthM?: number;

  /**
   * Flag indicating the surface has lighting.
   */
  lighting?: boolean;

  /**
   * Flag indicating the runway has approach lights. Applicable for runway surface
   * types only.
   */
  lightsAPRCH?: boolean;

  /**
   * Flag indicating the runway has centerline lights. Applicable for runway surface
   * types only.
   */
  lightsCL?: boolean;

  /**
   * Flag indicating the runway has Optical Landing System (OLS) lights. Applicable
   * for runway surface types only.
   */
  lightsOLS?: boolean;

  /**
   * Flag indicating the runway has Precision Approach Path Indicator (PAPI) lights.
   * Applicable for runway surface types only.
   */
  lightsPAPI?: boolean;

  /**
   * Flag indicating the runway has Runway End Identifier Lights (REIL). Applicable
   * for runway surface types only.
   */
  lightsREIL?: boolean;

  /**
   * Flag indicating the runway has edge lighting. Applicable for runway surface
   * types only.
   */
  lightsRWY?: boolean;

  /**
   * Flag indicating the runway has Sequential Flashing (SEQFL) lights. Applicable
   * for runway surface types only.
   */
  lightsSEQFL?: boolean;

  /**
   * Flag indicating the runway has Touchdown Zone lights. Applicable for runway
   * surface types only.
   */
  lightsTDZL?: boolean;

  /**
   * Flag indicating the runway lighting is unknown. Applicable for runway surface
   * types only.
   */
  lightsUNKN?: boolean;

  /**
   * Flag indicating the runway has Visual Approach Slope Indicator (VASI) lights.
   * Applicable for runway surface types only.
   */
  lightsVASI?: boolean;

  /**
   * The surface material (e.g. Asphalt, Concrete, Dirt).
   */
  material?: string;

  /**
   * Flag indicating that one or more obstacles or obstructions exist in the
   * proximity of this surface.
   */
  obstacle?: boolean;

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
   * Pavement classification number (PCN) and tire pressure code.
   */
  pcn?: string;

  /**
   * Description of the surface and its dimensions or how it is measured or oriented.
   */
  pointReference?: string;

  /**
   * Flag indicating this is the primary runway. Applicable for runway surface types
   * only.
   */
  primary?: boolean;

  /**
   * Raw weight bearing capacity value or pavement strength.
   */
  rawWBC?: string;

  /**
   * The max weight allowable on this surface type for an SBTT-type (single belly
   * twin tandem) landing gear configuration, in kilopounds (kip).Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  sbttWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an SBTT-type (single
   * belly twin tandem) landing gear configuration, in kilopounds (kip).
   */
  sbttWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an SBTT-type (single
   * belly twin tandem) landing gear configuration. For more information, contact the
   * provider source.
   */
  sbttWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an SBTT-type (single belly
   * twin tandem) landing gear configuration, in kilonewtons (kN).Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  sbttWtKN?: number;

  /**
   * WGS-84 latitude of the coordinate representing the start-point of a surface, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  startLat?: number;

  /**
   * WGS-84 longitude of the coordinate representing the start-point of a surface, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  startLon?: number;

  /**
   * The max weight allowable on this surface type for an ST-type (single tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  stWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an ST-type (single
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  stWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an ST-type (single
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  stWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an ST-type (single tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  stWtKN?: number;

  /**
   * An array of SurfaceNavigation objects representing information about
   * obstructions proximal to this surface. This is a read-only field that will be
   * populated with any associated SurfaceObstruction objects for queries that return
   * the full schema.
   */
  surfaceObstructions?: Array<SurfaceGetResponse.SurfaceObstruction>;

  /**
   * The max weight allowable on this surface type for an S-type (single) landing
   * gear configuration, in kilopounds (kip). Note: The corresponding equivalent
   * field is not converted by the UDL and may or may not be supplied by the
   * provider. The provider/consumer is responsible for all unit conversions.
   */
  sWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an S-type (single)
   * landing gear configuration, in kilopounds (kip).
   */
  sWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an S-type (single)
   * landing gear configuration. For more information, contact the provider source.
   */
  sWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an S-type (single) landing
   * gear configuration, in kilonewtons (kN).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  sWtKN?: number;

  /**
   * The max weight allowable on this surface type for a TDT-type (twin delta tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  tdtWtkip?: number;

  /**
   * The modified max weight allowable on this surface type for a TDT-type (twin
   * delta tandem) landing gear configuration, in kilopounds (kip).
   */
  tdtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a TDT-type (twin delta
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  tdtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a TDT-type (twin delta tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  tdtWtKN?: number;

  /**
   * The max weight allowable on this surface type for a TRT-type (triple tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  trtWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a TRT-type (triple
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  trtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a TRT-type (triple
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  trtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a TRT-type (triple tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  trtWtKN?: number;

  /**
   * The max weight allowable on this surface type for a GDSS TT-type (twin tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ttWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a GDSS TT-type (twin
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  ttWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a GDSS TT-type (twin
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ttWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a GDSS TT-type (twin tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ttWtKN?: number;

  /**
   * The max weight allowable on this surface type for a T-type (twin (dual)) landing
   * gear configuration, in kilopounds (kip).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  tWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a T-type (twin
   * (dual)) landing gear configuration, in kilopounds (kip).
   */
  tWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a T-type (twin(dual))
   * landing gear configuration. For more information, contact the provider source.
   */
  tWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a T-type (twin (dual)) landing
   * gear configuration, in kilonewtons (kN).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  tWtKN?: number;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;

  /**
   * The width of the surface type, in feet.
   */
  widthFt?: number;

  /**
   * The width of the surface type, in meters.
   */
  widthM?: number;
}

export namespace SurfaceGetResponse {
  export interface SurfaceObstruction {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * The unique identifier of the associated surface record. This field is required
     * when posting, updating, or deleting a SurfaceObstruction record.
     */
    idSurface: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of all vehicles that are affected by this obstruction at the surface
     * end-point, and require an advisory for usage.
     */
    advisoryRequired?: Array<string>;

    /**
     * Array of all vehicles that are affected by this obstruction at the surface
     * end-point, and require an approval for usage.
     */
    approvalRequired?: Array<string>;

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
     * The distance from the surface center line to this obstruction, in feet.
     */
    distanceFromCenterLine?: number;

    /**
     * The distance from the surface edge to this obstruction, in feet.
     */
    distanceFromEdge?: number;

    /**
     * The distance from the surface threshold to this obstruction, in feet.
     */
    distanceFromThreshold?: number;

    /**
     * The unique identifier of the associated NavigationalObstruction record.
     */
    idNavigationalObstruction?: string;

    /**
     * Description of this surface obstruction.
     */
    obstructionDesc?: string;

    /**
     * The height above ground level of the surface obstruction, in feet.
     */
    obstructionHeight?: number;

    /**
     * A code that indicates which side of the surface end is affected by this
     * obstruction.
     */
    obstructionSideCode?: string;

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
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

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

export interface SurfaceQueryhelpResponse {
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

export type SurfaceTupleResponse = Array<SurfaceTupleResponse.SurfaceTupleResponseItem>;

export namespace SurfaceTupleResponse {
  /**
   * Surface information contains properties related to an airfield's runway,
   * taxiway, and parking. The surface types and characteristics can dictate the
   * airfield's capability of hosting a specific aircraft.
   */
  export interface SurfaceTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * The surface name or identifier.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The surface type of this record (e.g. RUNWAY, TAXIWAY, PARKING).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Alternate site identifier provided by the source.
     */
    altSiteId?: string;

    /**
     * The surface condition (e.g. GOOD, FAIR, POOR, SERIOUS, FAILED, CLOSED, UNKNOWN).
     */
    condition?: string;

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
     * The max weight allowable on this surface type for a DDT-type (double dual
     * tandem) landing gear configuration, in kilopounds (kip).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    ddtWtKip?: number;

    /**
     * The modified max weight allowable on this surface type for a DDT-type (double
     * dual tandem) landing gear configuration, in kilopounds (kip).
     */
    ddtWtKipMod?: number;

    /**
     * User input rationale for the manual modification of the prescribed value
     * indicating the max weight allowable on this surface for a DDT-type (double dual
     * tandem) landing gear configuration. For more information, contact the provider
     * source.
     */
    ddtWtKipModNote?: string;

    /**
     * The max weight allowable on this surface type for a DDT-type (double dual
     * tandem) landing gear configuration, in kilonewtons (kN).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    ddtWtKN?: number;

    /**
     * The max weight allowable on this surface type for an FAA 2D-type (twin tandem)
     * landing gear configuration, in kilopounds (kip).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    ddWtKip?: number;

    /**
     * The modified max weight allowable on this surface type for an FAA 2D-type (twin
     * tandem) landing gear configuration, in kilopounds (kip).
     */
    ddWtKipMod?: number;

    /**
     * User input rationale for the manual modification of the prescribed value
     * indicating the max weight allowable on this surface for an FAA 2D-type (twin
     * tandem) landing gear configuration. For more information, contact the provider
     * source.
     */
    ddWtKipModNote?: string;

    /**
     * The max weight allowable on this surface type for an FAA 2D-type (twin tandem)
     * landing gear configuration, in kilonewtons (kN).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    ddWtKN?: number;

    /**
     * WGS-84 latitude of the coordinate representing the end-point of a surface, in
     * degrees. -90 to 90 degrees (negative values south of equator).
     */
    endLat?: number;

    /**
     * WGS-84 longitude of the coordinate representing the end-point of a surface, in
     * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
     */
    endLon?: number;

    /**
     * The unique identifier of the Site record that contains location information
     * about this surface.
     */
    idSite?: string;

    /**
     * Load classification number or pavement rating which ranks aircraft on a scale of
     * 1 to 120.
     */
    lcn?: number;

    /**
     * The landing distance available for the runway, in feet. Applicable for runway
     * surface types only.
     */
    ldaFt?: number;

    /**
     * The landing distance available for the runway, in meters. Applicable for runway
     * surface types only.
     */
    ldaM?: number;

    /**
     * The length of the surface type, in feet. Applicable for runway and parking
     * surface types.
     */
    lengthFt?: number;

    /**
     * The length of the surface type, in meters. Applicable for runway and parking
     * surface types.
     */
    lengthM?: number;

    /**
     * Flag indicating the surface has lighting.
     */
    lighting?: boolean;

    /**
     * Flag indicating the runway has approach lights. Applicable for runway surface
     * types only.
     */
    lightsAPRCH?: boolean;

    /**
     * Flag indicating the runway has centerline lights. Applicable for runway surface
     * types only.
     */
    lightsCL?: boolean;

    /**
     * Flag indicating the runway has Optical Landing System (OLS) lights. Applicable
     * for runway surface types only.
     */
    lightsOLS?: boolean;

    /**
     * Flag indicating the runway has Precision Approach Path Indicator (PAPI) lights.
     * Applicable for runway surface types only.
     */
    lightsPAPI?: boolean;

    /**
     * Flag indicating the runway has Runway End Identifier Lights (REIL). Applicable
     * for runway surface types only.
     */
    lightsREIL?: boolean;

    /**
     * Flag indicating the runway has edge lighting. Applicable for runway surface
     * types only.
     */
    lightsRWY?: boolean;

    /**
     * Flag indicating the runway has Sequential Flashing (SEQFL) lights. Applicable
     * for runway surface types only.
     */
    lightsSEQFL?: boolean;

    /**
     * Flag indicating the runway has Touchdown Zone lights. Applicable for runway
     * surface types only.
     */
    lightsTDZL?: boolean;

    /**
     * Flag indicating the runway lighting is unknown. Applicable for runway surface
     * types only.
     */
    lightsUNKN?: boolean;

    /**
     * Flag indicating the runway has Visual Approach Slope Indicator (VASI) lights.
     * Applicable for runway surface types only.
     */
    lightsVASI?: boolean;

    /**
     * The surface material (e.g. Asphalt, Concrete, Dirt).
     */
    material?: string;

    /**
     * Flag indicating that one or more obstacles or obstructions exist in the
     * proximity of this surface.
     */
    obstacle?: boolean;

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
     * Pavement classification number (PCN) and tire pressure code.
     */
    pcn?: string;

    /**
     * Description of the surface and its dimensions or how it is measured or oriented.
     */
    pointReference?: string;

    /**
     * Flag indicating this is the primary runway. Applicable for runway surface types
     * only.
     */
    primary?: boolean;

    /**
     * Raw weight bearing capacity value or pavement strength.
     */
    rawWBC?: string;

    /**
     * The max weight allowable on this surface type for an SBTT-type (single belly
     * twin tandem) landing gear configuration, in kilopounds (kip).Note: The
     * corresponding equivalent field is not converted by the UDL and may or may not be
     * supplied by the provider. The provider/consumer is responsible for all unit
     * conversions.
     */
    sbttWtKip?: number;

    /**
     * The modified max weight allowable on this surface type for an SBTT-type (single
     * belly twin tandem) landing gear configuration, in kilopounds (kip).
     */
    sbttWtKipMod?: number;

    /**
     * User input rationale for the manual modification of the prescribed value
     * indicating the max weight allowable on this surface for an SBTT-type (single
     * belly twin tandem) landing gear configuration. For more information, contact the
     * provider source.
     */
    sbttWtKipModNote?: string;

    /**
     * The max weight allowable on this surface type for an SBTT-type (single belly
     * twin tandem) landing gear configuration, in kilonewtons (kN).Note: The
     * corresponding equivalent field is not converted by the UDL and may or may not be
     * supplied by the provider. The provider/consumer is responsible for all unit
     * conversions.
     */
    sbttWtKN?: number;

    /**
     * WGS-84 latitude of the coordinate representing the start-point of a surface, in
     * degrees. -90 to 90 degrees (negative values south of equator).
     */
    startLat?: number;

    /**
     * WGS-84 longitude of the coordinate representing the start-point of a surface, in
     * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
     */
    startLon?: number;

    /**
     * The max weight allowable on this surface type for an ST-type (single tandem)
     * landing gear configuration, in kilopounds (kip).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    stWtKip?: number;

    /**
     * The modified max weight allowable on this surface type for an ST-type (single
     * tandem) landing gear configuration, in kilopounds (kip).
     */
    stWtKipMod?: number;

    /**
     * User input rationale for the manual modification of the prescribed value
     * indicating the max weight allowable on this surface for an ST-type (single
     * tandem) landing gear configuration. For more information, contact the provider
     * source.
     */
    stWtKipModNote?: string;

    /**
     * The max weight allowable on this surface type for an ST-type (single tandem)
     * landing gear configuration, in kilonewtons (kN).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    stWtKN?: number;

    /**
     * An array of SurfaceNavigation objects representing information about
     * obstructions proximal to this surface. This is a read-only field that will be
     * populated with any associated SurfaceObstruction objects for queries that return
     * the full schema.
     */
    surfaceObstructions?: Array<SurfaceTupleResponseItem.SurfaceObstruction>;

    /**
     * The max weight allowable on this surface type for an S-type (single) landing
     * gear configuration, in kilopounds (kip). Note: The corresponding equivalent
     * field is not converted by the UDL and may or may not be supplied by the
     * provider. The provider/consumer is responsible for all unit conversions.
     */
    sWtKip?: number;

    /**
     * The modified max weight allowable on this surface type for an S-type (single)
     * landing gear configuration, in kilopounds (kip).
     */
    sWtKipMod?: number;

    /**
     * User input rationale for the manual modification of the prescribed value
     * indicating the max weight allowable on this surface for an S-type (single)
     * landing gear configuration. For more information, contact the provider source.
     */
    sWtKipModNote?: string;

    /**
     * The max weight allowable on this surface type for an S-type (single) landing
     * gear configuration, in kilonewtons (kN).Note: The corresponding equivalent field
     * is not converted by the UDL and may or may not be supplied by the provider. The
     * provider/consumer is responsible for all unit conversions.
     */
    sWtKN?: number;

    /**
     * The max weight allowable on this surface type for a TDT-type (twin delta tandem)
     * landing gear configuration, in kilopounds (kip).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    tdtWtkip?: number;

    /**
     * The modified max weight allowable on this surface type for a TDT-type (twin
     * delta tandem) landing gear configuration, in kilopounds (kip).
     */
    tdtWtKipMod?: number;

    /**
     * User input rationale for the manual modification of the prescribed value
     * indicating the max weight allowable on this surface for a TDT-type (twin delta
     * tandem) landing gear configuration. For more information, contact the provider
     * source.
     */
    tdtWtKipModNote?: string;

    /**
     * The max weight allowable on this surface type for a TDT-type (twin delta tandem)
     * landing gear configuration, in kilonewtons (kN).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    tdtWtKN?: number;

    /**
     * The max weight allowable on this surface type for a TRT-type (triple tandem)
     * landing gear configuration, in kilopounds (kip).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    trtWtKip?: number;

    /**
     * The modified max weight allowable on this surface type for a TRT-type (triple
     * tandem) landing gear configuration, in kilopounds (kip).
     */
    trtWtKipMod?: number;

    /**
     * User input rationale for the manual modification of the prescribed value
     * indicating the max weight allowable on this surface for a TRT-type (triple
     * tandem) landing gear configuration. For more information, contact the provider
     * source.
     */
    trtWtKipModNote?: string;

    /**
     * The max weight allowable on this surface type for a TRT-type (triple tandem)
     * landing gear configuration, in kilonewtons (kN).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    trtWtKN?: number;

    /**
     * The max weight allowable on this surface type for a GDSS TT-type (twin tandem)
     * landing gear configuration, in kilopounds (kip).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    ttWtKip?: number;

    /**
     * The modified max weight allowable on this surface type for a GDSS TT-type (twin
     * tandem) landing gear configuration, in kilopounds (kip).
     */
    ttWtKipMod?: number;

    /**
     * User input rationale for the manual modification of the prescribed value
     * indicating the max weight allowable on this surface for a GDSS TT-type (twin
     * tandem) landing gear configuration. For more information, contact the provider
     * source.
     */
    ttWtKipModNote?: string;

    /**
     * The max weight allowable on this surface type for a GDSS TT-type (twin tandem)
     * landing gear configuration, in kilonewtons (kN).Note: The corresponding
     * equivalent field is not converted by the UDL and may or may not be supplied by
     * the provider. The provider/consumer is responsible for all unit conversions.
     */
    ttWtKN?: number;

    /**
     * The max weight allowable on this surface type for a T-type (twin (dual)) landing
     * gear configuration, in kilopounds (kip).Note: The corresponding equivalent field
     * is not converted by the UDL and may or may not be supplied by the provider. The
     * provider/consumer is responsible for all unit conversions.
     */
    tWtKip?: number;

    /**
     * The modified max weight allowable on this surface type for a T-type (twin
     * (dual)) landing gear configuration, in kilopounds (kip).
     */
    tWtKipMod?: number;

    /**
     * User input rationale for the manual modification of the prescribed value
     * indicating the max weight allowable on this surface for a T-type (twin(dual))
     * landing gear configuration. For more information, contact the provider source.
     */
    tWtKipModNote?: string;

    /**
     * The max weight allowable on this surface type for a T-type (twin (dual)) landing
     * gear configuration, in kilonewtons (kN).Note: The corresponding equivalent field
     * is not converted by the UDL and may or may not be supplied by the provider. The
     * provider/consumer is responsible for all unit conversions.
     */
    tWtKN?: number;

    /**
     * Time the row was updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;

    /**
     * The width of the surface type, in feet.
     */
    widthFt?: number;

    /**
     * The width of the surface type, in meters.
     */
    widthM?: number;
  }

  export namespace SurfaceTupleResponseItem {
    export interface SurfaceObstruction {
      /**
       * Classification marking of the data in IC/CAPCO Portion-marked format.
       */
      classificationMarking: string;

      /**
       * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
       */
      dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

      /**
       * The unique identifier of the associated surface record. This field is required
       * when posting, updating, or deleting a SurfaceObstruction record.
       */
      idSurface: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Array of all vehicles that are affected by this obstruction at the surface
       * end-point, and require an advisory for usage.
       */
      advisoryRequired?: Array<string>;

      /**
       * Array of all vehicles that are affected by this obstruction at the surface
       * end-point, and require an approval for usage.
       */
      approvalRequired?: Array<string>;

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
       * The distance from the surface center line to this obstruction, in feet.
       */
      distanceFromCenterLine?: number;

      /**
       * The distance from the surface edge to this obstruction, in feet.
       */
      distanceFromEdge?: number;

      /**
       * The distance from the surface threshold to this obstruction, in feet.
       */
      distanceFromThreshold?: number;

      /**
       * The unique identifier of the associated NavigationalObstruction record.
       */
      idNavigationalObstruction?: string;

      /**
       * Description of this surface obstruction.
       */
      obstructionDesc?: string;

      /**
       * The height above ground level of the surface obstruction, in feet.
       */
      obstructionHeight?: number;

      /**
       * A code that indicates which side of the surface end is affected by this
       * obstruction.
       */
      obstructionSideCode?: string;

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
       * The source data library from which this record was received. This could be a
       * remote or tactical UDL or another data library. If null, the record should be
       * assumed to have originated from the primary Enterprise UDL.
       */
      sourceDL?: string;

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
}

export interface SurfaceCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The surface name or identifier.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The surface type of this record (e.g. RUNWAY, TAXIWAY, PARKING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate site identifier provided by the source.
   */
  altSiteId?: string;

  /**
   * The surface condition (e.g. GOOD, FAIR, POOR, SERIOUS, FAILED, CLOSED, UNKNOWN).
   */
  condition?: string;

  /**
   * The max weight allowable on this surface type for a DDT-type (double dual
   * tandem) landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddtWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a DDT-type (double
   * dual tandem) landing gear configuration, in kilopounds (kip).
   */
  ddtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a DDT-type (double dual
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ddtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a DDT-type (double dual
   * tandem) landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddtWtKN?: number;

  /**
   * The max weight allowable on this surface type for an FAA 2D-type (twin tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an FAA 2D-type (twin
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  ddWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an FAA 2D-type (twin
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ddWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an FAA 2D-type (twin tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddWtKN?: number;

  /**
   * WGS-84 latitude of the coordinate representing the end-point of a surface, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  endLat?: number;

  /**
   * WGS-84 longitude of the coordinate representing the end-point of a surface, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  endLon?: number;

  /**
   * The unique identifier of the Site record that contains location information
   * about this surface.
   */
  idSite?: string;

  /**
   * Load classification number or pavement rating which ranks aircraft on a scale of
   * 1 to 120.
   */
  lcn?: number;

  /**
   * The landing distance available for the runway, in feet. Applicable for runway
   * surface types only.
   */
  ldaFt?: number;

  /**
   * The landing distance available for the runway, in meters. Applicable for runway
   * surface types only.
   */
  ldaM?: number;

  /**
   * The length of the surface type, in feet. Applicable for runway and parking
   * surface types.
   */
  lengthFt?: number;

  /**
   * The length of the surface type, in meters. Applicable for runway and parking
   * surface types.
   */
  lengthM?: number;

  /**
   * Flag indicating the surface has lighting.
   */
  lighting?: boolean;

  /**
   * Flag indicating the runway has approach lights. Applicable for runway surface
   * types only.
   */
  lightsAPRCH?: boolean;

  /**
   * Flag indicating the runway has centerline lights. Applicable for runway surface
   * types only.
   */
  lightsCL?: boolean;

  /**
   * Flag indicating the runway has Optical Landing System (OLS) lights. Applicable
   * for runway surface types only.
   */
  lightsOLS?: boolean;

  /**
   * Flag indicating the runway has Precision Approach Path Indicator (PAPI) lights.
   * Applicable for runway surface types only.
   */
  lightsPAPI?: boolean;

  /**
   * Flag indicating the runway has Runway End Identifier Lights (REIL). Applicable
   * for runway surface types only.
   */
  lightsREIL?: boolean;

  /**
   * Flag indicating the runway has edge lighting. Applicable for runway surface
   * types only.
   */
  lightsRWY?: boolean;

  /**
   * Flag indicating the runway has Sequential Flashing (SEQFL) lights. Applicable
   * for runway surface types only.
   */
  lightsSEQFL?: boolean;

  /**
   * Flag indicating the runway has Touchdown Zone lights. Applicable for runway
   * surface types only.
   */
  lightsTDZL?: boolean;

  /**
   * Flag indicating the runway lighting is unknown. Applicable for runway surface
   * types only.
   */
  lightsUNKN?: boolean;

  /**
   * Flag indicating the runway has Visual Approach Slope Indicator (VASI) lights.
   * Applicable for runway surface types only.
   */
  lightsVASI?: boolean;

  /**
   * The surface material (e.g. Asphalt, Concrete, Dirt).
   */
  material?: string;

  /**
   * Flag indicating that one or more obstacles or obstructions exist in the
   * proximity of this surface.
   */
  obstacle?: boolean;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Pavement classification number (PCN) and tire pressure code.
   */
  pcn?: string;

  /**
   * Description of the surface and its dimensions or how it is measured or oriented.
   */
  pointReference?: string;

  /**
   * Flag indicating this is the primary runway. Applicable for runway surface types
   * only.
   */
  primary?: boolean;

  /**
   * Raw weight bearing capacity value or pavement strength.
   */
  rawWBC?: string;

  /**
   * The max weight allowable on this surface type for an SBTT-type (single belly
   * twin tandem) landing gear configuration, in kilopounds (kip).Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  sbttWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an SBTT-type (single
   * belly twin tandem) landing gear configuration, in kilopounds (kip).
   */
  sbttWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an SBTT-type (single
   * belly twin tandem) landing gear configuration. For more information, contact the
   * provider source.
   */
  sbttWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an SBTT-type (single belly
   * twin tandem) landing gear configuration, in kilonewtons (kN).Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  sbttWtKN?: number;

  /**
   * WGS-84 latitude of the coordinate representing the start-point of a surface, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  startLat?: number;

  /**
   * WGS-84 longitude of the coordinate representing the start-point of a surface, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  startLon?: number;

  /**
   * The max weight allowable on this surface type for an ST-type (single tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  stWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an ST-type (single
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  stWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an ST-type (single
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  stWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an ST-type (single tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  stWtKN?: number;

  /**
   * The max weight allowable on this surface type for an S-type (single) landing
   * gear configuration, in kilopounds (kip). Note: The corresponding equivalent
   * field is not converted by the UDL and may or may not be supplied by the
   * provider. The provider/consumer is responsible for all unit conversions.
   */
  sWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an S-type (single)
   * landing gear configuration, in kilopounds (kip).
   */
  sWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an S-type (single)
   * landing gear configuration. For more information, contact the provider source.
   */
  sWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an S-type (single) landing
   * gear configuration, in kilonewtons (kN).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  sWtKN?: number;

  /**
   * The max weight allowable on this surface type for a TDT-type (twin delta tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  tdtWtkip?: number;

  /**
   * The modified max weight allowable on this surface type for a TDT-type (twin
   * delta tandem) landing gear configuration, in kilopounds (kip).
   */
  tdtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a TDT-type (twin delta
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  tdtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a TDT-type (twin delta tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  tdtWtKN?: number;

  /**
   * The max weight allowable on this surface type for a TRT-type (triple tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  trtWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a TRT-type (triple
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  trtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a TRT-type (triple
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  trtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a TRT-type (triple tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  trtWtKN?: number;

  /**
   * The max weight allowable on this surface type for a GDSS TT-type (twin tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ttWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a GDSS TT-type (twin
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  ttWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a GDSS TT-type (twin
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ttWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a GDSS TT-type (twin tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ttWtKN?: number;

  /**
   * The max weight allowable on this surface type for a T-type (twin (dual)) landing
   * gear configuration, in kilopounds (kip).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  tWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a T-type (twin
   * (dual)) landing gear configuration, in kilopounds (kip).
   */
  tWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a T-type (twin(dual))
   * landing gear configuration. For more information, contact the provider source.
   */
  tWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a T-type (twin (dual)) landing
   * gear configuration, in kilonewtons (kN).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  tWtKN?: number;

  /**
   * The width of the surface type, in feet.
   */
  widthFt?: number;

  /**
   * The width of the surface type, in meters.
   */
  widthM?: number;
}

export interface SurfaceUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The surface name or identifier.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The surface type of this record (e.g. RUNWAY, TAXIWAY, PARKING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Alternate site identifier provided by the source.
   */
  altSiteId?: string;

  /**
   * The surface condition (e.g. GOOD, FAIR, POOR, SERIOUS, FAILED, CLOSED, UNKNOWN).
   */
  condition?: string;

  /**
   * The max weight allowable on this surface type for a DDT-type (double dual
   * tandem) landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddtWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a DDT-type (double
   * dual tandem) landing gear configuration, in kilopounds (kip).
   */
  ddtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a DDT-type (double dual
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ddtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a DDT-type (double dual
   * tandem) landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddtWtKN?: number;

  /**
   * The max weight allowable on this surface type for an FAA 2D-type (twin tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an FAA 2D-type (twin
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  ddWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an FAA 2D-type (twin
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ddWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an FAA 2D-type (twin tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ddWtKN?: number;

  /**
   * WGS-84 latitude of the coordinate representing the end-point of a surface, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  endLat?: number;

  /**
   * WGS-84 longitude of the coordinate representing the end-point of a surface, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  endLon?: number;

  /**
   * The unique identifier of the Site record that contains location information
   * about this surface.
   */
  idSite?: string;

  /**
   * Load classification number or pavement rating which ranks aircraft on a scale of
   * 1 to 120.
   */
  lcn?: number;

  /**
   * The landing distance available for the runway, in feet. Applicable for runway
   * surface types only.
   */
  ldaFt?: number;

  /**
   * The landing distance available for the runway, in meters. Applicable for runway
   * surface types only.
   */
  ldaM?: number;

  /**
   * The length of the surface type, in feet. Applicable for runway and parking
   * surface types.
   */
  lengthFt?: number;

  /**
   * The length of the surface type, in meters. Applicable for runway and parking
   * surface types.
   */
  lengthM?: number;

  /**
   * Flag indicating the surface has lighting.
   */
  lighting?: boolean;

  /**
   * Flag indicating the runway has approach lights. Applicable for runway surface
   * types only.
   */
  lightsAPRCH?: boolean;

  /**
   * Flag indicating the runway has centerline lights. Applicable for runway surface
   * types only.
   */
  lightsCL?: boolean;

  /**
   * Flag indicating the runway has Optical Landing System (OLS) lights. Applicable
   * for runway surface types only.
   */
  lightsOLS?: boolean;

  /**
   * Flag indicating the runway has Precision Approach Path Indicator (PAPI) lights.
   * Applicable for runway surface types only.
   */
  lightsPAPI?: boolean;

  /**
   * Flag indicating the runway has Runway End Identifier Lights (REIL). Applicable
   * for runway surface types only.
   */
  lightsREIL?: boolean;

  /**
   * Flag indicating the runway has edge lighting. Applicable for runway surface
   * types only.
   */
  lightsRWY?: boolean;

  /**
   * Flag indicating the runway has Sequential Flashing (SEQFL) lights. Applicable
   * for runway surface types only.
   */
  lightsSEQFL?: boolean;

  /**
   * Flag indicating the runway has Touchdown Zone lights. Applicable for runway
   * surface types only.
   */
  lightsTDZL?: boolean;

  /**
   * Flag indicating the runway lighting is unknown. Applicable for runway surface
   * types only.
   */
  lightsUNKN?: boolean;

  /**
   * Flag indicating the runway has Visual Approach Slope Indicator (VASI) lights.
   * Applicable for runway surface types only.
   */
  lightsVASI?: boolean;

  /**
   * The surface material (e.g. Asphalt, Concrete, Dirt).
   */
  material?: string;

  /**
   * Flag indicating that one or more obstacles or obstructions exist in the
   * proximity of this surface.
   */
  obstacle?: boolean;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Pavement classification number (PCN) and tire pressure code.
   */
  pcn?: string;

  /**
   * Description of the surface and its dimensions or how it is measured or oriented.
   */
  pointReference?: string;

  /**
   * Flag indicating this is the primary runway. Applicable for runway surface types
   * only.
   */
  primary?: boolean;

  /**
   * Raw weight bearing capacity value or pavement strength.
   */
  rawWBC?: string;

  /**
   * The max weight allowable on this surface type for an SBTT-type (single belly
   * twin tandem) landing gear configuration, in kilopounds (kip).Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  sbttWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an SBTT-type (single
   * belly twin tandem) landing gear configuration, in kilopounds (kip).
   */
  sbttWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an SBTT-type (single
   * belly twin tandem) landing gear configuration. For more information, contact the
   * provider source.
   */
  sbttWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an SBTT-type (single belly
   * twin tandem) landing gear configuration, in kilonewtons (kN).Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  sbttWtKN?: number;

  /**
   * WGS-84 latitude of the coordinate representing the start-point of a surface, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  startLat?: number;

  /**
   * WGS-84 longitude of the coordinate representing the start-point of a surface, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  startLon?: number;

  /**
   * The max weight allowable on this surface type for an ST-type (single tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  stWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an ST-type (single
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  stWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an ST-type (single
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  stWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an ST-type (single tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  stWtKN?: number;

  /**
   * The max weight allowable on this surface type for an S-type (single) landing
   * gear configuration, in kilopounds (kip). Note: The corresponding equivalent
   * field is not converted by the UDL and may or may not be supplied by the
   * provider. The provider/consumer is responsible for all unit conversions.
   */
  sWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for an S-type (single)
   * landing gear configuration, in kilopounds (kip).
   */
  sWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for an S-type (single)
   * landing gear configuration. For more information, contact the provider source.
   */
  sWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for an S-type (single) landing
   * gear configuration, in kilonewtons (kN).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  sWtKN?: number;

  /**
   * The max weight allowable on this surface type for a TDT-type (twin delta tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  tdtWtkip?: number;

  /**
   * The modified max weight allowable on this surface type for a TDT-type (twin
   * delta tandem) landing gear configuration, in kilopounds (kip).
   */
  tdtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a TDT-type (twin delta
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  tdtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a TDT-type (twin delta tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  tdtWtKN?: number;

  /**
   * The max weight allowable on this surface type for a TRT-type (triple tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  trtWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a TRT-type (triple
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  trtWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a TRT-type (triple
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  trtWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a TRT-type (triple tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  trtWtKN?: number;

  /**
   * The max weight allowable on this surface type for a GDSS TT-type (twin tandem)
   * landing gear configuration, in kilopounds (kip).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ttWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a GDSS TT-type (twin
   * tandem) landing gear configuration, in kilopounds (kip).
   */
  ttWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a GDSS TT-type (twin
   * tandem) landing gear configuration. For more information, contact the provider
   * source.
   */
  ttWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a GDSS TT-type (twin tandem)
   * landing gear configuration, in kilonewtons (kN).Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  ttWtKN?: number;

  /**
   * The max weight allowable on this surface type for a T-type (twin (dual)) landing
   * gear configuration, in kilopounds (kip).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  tWtKip?: number;

  /**
   * The modified max weight allowable on this surface type for a T-type (twin
   * (dual)) landing gear configuration, in kilopounds (kip).
   */
  tWtKipMod?: number;

  /**
   * User input rationale for the manual modification of the prescribed value
   * indicating the max weight allowable on this surface for a T-type (twin(dual))
   * landing gear configuration. For more information, contact the provider source.
   */
  tWtKipModNote?: string;

  /**
   * The max weight allowable on this surface type for a T-type (twin (dual)) landing
   * gear configuration, in kilonewtons (kN).Note: The corresponding equivalent field
   * is not converted by the UDL and may or may not be supplied by the provider. The
   * provider/consumer is responsible for all unit conversions.
   */
  tWtKN?: number;

  /**
   * The width of the surface type, in feet.
   */
  widthFt?: number;

  /**
   * The width of the surface type, in meters.
   */
  widthM?: number;
}

export interface SurfaceListParams extends OffsetPageParams {}

export interface SurfaceCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SurfaceGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SurfaceTupleParams {
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

export declare namespace Surface {
  export {
    type SurfaceListResponse as SurfaceListResponse,
    type SurfaceCountResponse as SurfaceCountResponse,
    type SurfaceGetResponse as SurfaceGetResponse,
    type SurfaceQueryhelpResponse as SurfaceQueryhelpResponse,
    type SurfaceTupleResponse as SurfaceTupleResponse,
    type SurfaceListResponsesOffsetPage as SurfaceListResponsesOffsetPage,
    type SurfaceCreateParams as SurfaceCreateParams,
    type SurfaceUpdateParams as SurfaceUpdateParams,
    type SurfaceListParams as SurfaceListParams,
    type SurfaceCountParams as SurfaceCountParams,
    type SurfaceGetParams as SurfaceGetParams,
    type SurfaceTupleParams as SurfaceTupleParams,
  };
}
