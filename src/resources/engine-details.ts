// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class EngineDetails extends APIResource {
  /**
   * Service operation to take a single EngineDetails as a POST body and ingest into
   * the database. EngineDetails are launch vehicle engine details and performance
   * characteristics/limits compiled by a particular source. A launch vehicle engine
   * may have several details records from multiple sources. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.engineDetails.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idEngine: 'ENGINE-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: EngineDetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/enginedetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single EngineDetails record by its unique ID passed
   * as a path parameter. EngineDetails are launch vehicle engine details and
   * performance characteristics/limits compiled by a particular source. A launch
   * vehicle engine may have several details records from multiple sources.
   *
   * @example
   * ```ts
   * const engineDetailsFull =
   *   await client.engineDetails.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: EngineDetailRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.EngineDetailsFull> {
    return this._client.get(path`/udl/enginedetails/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single EngineDetails. EngineDetails are launch
   * vehicle engine details and performance characteristics/limits compiled by a
   * particular source. A launch vehicle engine may have several details records from
   * multiple sources. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.engineDetails.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idEngine: 'ENGINE-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: EngineDetailUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/enginedetails/${pathID}`, {
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
   * for await (const engineDetailsAbridged of client.engineDetails.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EngineDetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EngineDetailsAbridgedsOffsetPage, EngineDetailsAbridged> {
    return this._client.getAPIList('/udl/enginedetails', OffsetPage<EngineDetailsAbridged>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a EngineDetails object specified by the passed ID
   * path parameter. EngineDetails are launch vehicle engine details and performance
   * characteristics/limits compiled by a particular source. A launch vehicle engine
   * may have several details records from multiple sources. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.engineDetails.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/enginedetails/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EngineDetailsAbridgedsOffsetPage = OffsetPage<EngineDetailsAbridged>;

/**
 * Known launch vehicle engine details and performance characteristics and limits
 * compiled by a particular source. A launch vehicle engine may have several
 * details records from multiple sources.
 */
export interface EngineDetailsAbridged {
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
   * Identifier of the parent engine record.
   */
  idEngine: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Launch engine maximum burn time in seconds.
   */
  burnTime?: number;

  /**
   * Engine chamber pressure in bars.
   */
  chamberPressure?: number;

  /**
   * Engine characteristic type (e.g. Electric, Mono-propellant, Bi-propellant,
   * etc.).
   */
  characteristicType?: string;

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
   * Engine cycle type (e.g. Electrostatic Ion, Pressure Fed, Hall, Catalytic
   * Decomposition, etc.).
   */
  cycleType?: string;

  /**
   * Engine type or family.
   */
  family?: string;

  /**
   * Organization ID of the engine manufacturer.
   */
  manufacturerOrgId?: string;

  /**
   * Engine maximum number of firings.
   */
  maxFirings?: number;

  /**
   * Notes/Description of the engine.
   */
  notes?: string;

  /**
   * Engine nozzle expansion ratio.
   */
  nozzleExpansionRatio?: number;

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
   * Oxidizer type (e.g. Nitrogen Tetroxide, Liquid Oxygen, etc).
   */
  oxidizer?: string;

  /**
   * Propellant/fuel type of the engine (e.g. Liquid Hydrogen, Kerosene, Aerozine,
   * etc).
   */
  propellant?: string;

  /**
   * Engine maximum thrust at sea level in Kilo-Newtons.
   */
  seaLevelThrust?: number;

  /**
   * Launch engine specific impulse in seconds.
   */
  specificImpulse?: number;

  /**
   * Engine maximum thrust in a vacuum in Kilo-Newtons.
   */
  vacuumThrust?: number;
}

export interface EngineDetailCreateParams {
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
   * Identifier of the parent engine record.
   */
  idEngine: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Launch engine maximum burn time in seconds.
   */
  burnTime?: number;

  /**
   * Engine chamber pressure in bars.
   */
  chamberPressure?: number;

  /**
   * Engine characteristic type (e.g. Electric, Mono-propellant, Bi-propellant,
   * etc.).
   */
  characteristicType?: string;

  /**
   * Engine cycle type (e.g. Electrostatic Ion, Pressure Fed, Hall, Catalytic
   * Decomposition, etc.).
   */
  cycleType?: string;

  /**
   * Engine type or family.
   */
  family?: string;

  /**
   * Organization ID of the engine manufacturer.
   */
  manufacturerOrgId?: string;

  /**
   * Engine maximum number of firings.
   */
  maxFirings?: number;

  /**
   * Notes/Description of the engine.
   */
  notes?: string;

  /**
   * Engine nozzle expansion ratio.
   */
  nozzleExpansionRatio?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Oxidizer type (e.g. Nitrogen Tetroxide, Liquid Oxygen, etc).
   */
  oxidizer?: string;

  /**
   * Propellant/fuel type of the engine (e.g. Liquid Hydrogen, Kerosene, Aerozine,
   * etc).
   */
  propellant?: string;

  /**
   * Engine maximum thrust at sea level in Kilo-Newtons.
   */
  seaLevelThrust?: number;

  /**
   * Launch engine specific impulse in seconds.
   */
  specificImpulse?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Engine maximum thrust in a vacuum in Kilo-Newtons.
   */
  vacuumThrust?: number;
}

export interface EngineDetailRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EngineDetailUpdateParams {
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
   * Identifier of the parent engine record.
   */
  idEngine: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Launch engine maximum burn time in seconds.
   */
  burnTime?: number;

  /**
   * Engine chamber pressure in bars.
   */
  chamberPressure?: number;

  /**
   * Engine characteristic type (e.g. Electric, Mono-propellant, Bi-propellant,
   * etc.).
   */
  characteristicType?: string;

  /**
   * Engine cycle type (e.g. Electrostatic Ion, Pressure Fed, Hall, Catalytic
   * Decomposition, etc.).
   */
  cycleType?: string;

  /**
   * Engine type or family.
   */
  family?: string;

  /**
   * Organization ID of the engine manufacturer.
   */
  manufacturerOrgId?: string;

  /**
   * Engine maximum number of firings.
   */
  maxFirings?: number;

  /**
   * Notes/Description of the engine.
   */
  notes?: string;

  /**
   * Engine nozzle expansion ratio.
   */
  nozzleExpansionRatio?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Oxidizer type (e.g. Nitrogen Tetroxide, Liquid Oxygen, etc).
   */
  oxidizer?: string;

  /**
   * Propellant/fuel type of the engine (e.g. Liquid Hydrogen, Kerosene, Aerozine,
   * etc).
   */
  propellant?: string;

  /**
   * Engine maximum thrust at sea level in Kilo-Newtons.
   */
  seaLevelThrust?: number;

  /**
   * Launch engine specific impulse in seconds.
   */
  specificImpulse?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Engine maximum thrust in a vacuum in Kilo-Newtons.
   */
  vacuumThrust?: number;
}

export interface EngineDetailListParams extends OffsetPageParams {}

export declare namespace EngineDetails {
  export {
    type EngineDetailsAbridged as EngineDetailsAbridged,
    type EngineDetailsAbridgedsOffsetPage as EngineDetailsAbridgedsOffsetPage,
    type EngineDetailCreateParams as EngineDetailCreateParams,
    type EngineDetailRetrieveParams as EngineDetailRetrieveParams,
    type EngineDetailUpdateParams as EngineDetailUpdateParams,
    type EngineDetailListParams as EngineDetailListParams,
  };
}
