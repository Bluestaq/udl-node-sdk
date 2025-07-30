// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as OrganizationAPI from 'bluestaq@unified-data-library/resources/organization';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class AntennaDetails extends APIResource {
  /**
   * Service operation to take a single AntennaDetails as a POST body and ingest into
   * the database. An antenna may have multiple details records compiled by various
   * sources. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbit.antennaDetails.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAntenna: 'ANTENNA-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: AntennaDetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/antennadetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single AntennaDetails record by its unique ID passed
   * as a path parameter. An antenna may have multiple details records compiled by
   * various sources.
   *
   * @example
   * ```ts
   * const antennaDetailsFull =
   *   await client.onorbit.antennaDetails.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AntennaDetailRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AntennaDetailsFull> {
    return this._client.get(path`/udl/antennadetails/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single AntennaDetails. An antenna may have
   * multiple details records compiled by various sources. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.onorbit.antennaDetails.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAntenna: 'ANTENNA-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: AntennaDetailUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/antennadetails/${pathID}`, {
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
   * for await (const antennaDetailsAbridged of client.onorbit.antennaDetails.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AntennaDetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AntennaDetailsAbridgedsOffsetPage, AntennaDetailsAbridged> {
    return this._client.getAPIList('/udl/antennadetails', OffsetPage<AntennaDetailsAbridged>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a AntennaDetails object specified by the passed ID
   * path parameter. An antenna may have multiple details records compiled by various
   * sources. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbit.antennaDetails.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/antennadetails/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type AntennaDetailsAbridgedsOffsetPage = OffsetPage<AntennaDetailsAbridged>;

/**
 * Detailed information for a spacecraft communication antenna. One antenna may
 * have multiple AntennaDetails records, compiled by various sources.
 */
export interface AntennaDetailsAbridged {
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
   * Unique identifier of the parent Antenna.
   */
  idAntenna: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Boolean indicating if this is a beam forming antenna.
   */
  beamForming?: boolean;

  /**
   * Array of angles between the half-power (-3 dB) points of the main lobe of the
   * antenna, in degrees.
   */
  beamwidth?: number;

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
   * Antenna description.
   */
  description?: string;

  /**
   * Antenna diameter in meters.
   */
  diameter?: number;

  /**
   * Antenna end of frequency range in Mhz.
   */
  endFrequency?: number;

  /**
   * Antenna maximum gain in dBi.
   */
  gain?: number;

  /**
   * Antenna gain tolerance in dB.
   */
  gainTolerance?: number;

  /**
   * ID of the organization that manufactures the antenna.
   */
  manufacturerOrgId?: string;

  /**
   * Antenna mode (e.g. TX,RX).
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
   * Antenna polarization in degrees.
   */
  polarization?: number;

  /**
   * Antenna position (e.g. Top, Nadir, Side).
   */
  position?: string;

  /**
   * Array with 1-2 values specifying the length and width (for rectangular) and just
   * length for dipole antennas in meters.
   */
  size?: Array<number>;

  /**
   * Antenna start of frequency range in Mhz.
   */
  startFrequency?: number;

  /**
   * Boolean indicating if this antenna is steerable.
   */
  steerable?: boolean;

  /**
   * Type of antenna (e.g. Reflector, Double Reflector, Shaped Reflector, Horn,
   * Parabolic, etc.).
   */
  type?: string;
}

/**
 * Detailed information for a spacecraft communication antenna. One antenna may
 * have multiple AntennaDetails records, compiled by various sources.
 */
export interface AntennaDetailsFull {
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
   * Unique identifier of the parent Antenna.
   */
  idAntenna: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Boolean indicating if this is a beam forming antenna.
   */
  beamForming?: boolean;

  /**
   * Array of angles between the half-power (-3 dB) points of the main lobe of the
   * antenna, in degrees.
   */
  beamwidth?: number;

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
   * Antenna description.
   */
  description?: string;

  /**
   * Antenna diameter in meters.
   */
  diameter?: number;

  /**
   * Antenna end of frequency range in Mhz.
   */
  endFrequency?: number;

  /**
   * Antenna maximum gain in dBi.
   */
  gain?: number;

  /**
   * Antenna gain tolerance in dB.
   */
  gainTolerance?: number;

  /**
   * An organization such as a corporation, manufacturer, consortium, government,
   * etc. An organization may have parent and child organizations as well as link to
   * a former organization if this org previously existed as another organization.
   */
  manufacturerOrg?: OrganizationAPI.OrganizationFull;

  /**
   * ID of the organization that manufactures the antenna.
   */
  manufacturerOrgId?: string;

  /**
   * Antenna mode (e.g. TX,RX).
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
   * Antenna polarization in degrees.
   */
  polarization?: number;

  /**
   * Antenna position (e.g. Top, Nadir, Side).
   */
  position?: string;

  /**
   * Array with 1-2 values specifying the length and width (for rectangular) and just
   * length for dipole antennas in meters.
   */
  size?: Array<number>;

  /**
   * Antenna start of frequency range in Mhz.
   */
  startFrequency?: number;

  /**
   * Boolean indicating if this antenna is steerable.
   */
  steerable?: boolean;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Type of antenna (e.g. Reflector, Double Reflector, Shaped Reflector, Horn,
   * Parabolic, etc.).
   */
  type?: string;

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

export interface AntennaDetailCreateParams {
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
   * Unique identifier of the parent Antenna.
   */
  idAntenna: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Boolean indicating if this is a beam forming antenna.
   */
  beamForming?: boolean;

  /**
   * Array of angles between the half-power (-3 dB) points of the main lobe of the
   * antenna, in degrees.
   */
  beamwidth?: number;

  /**
   * Antenna description.
   */
  description?: string;

  /**
   * Antenna diameter in meters.
   */
  diameter?: number;

  /**
   * Antenna end of frequency range in Mhz.
   */
  endFrequency?: number;

  /**
   * Antenna maximum gain in dBi.
   */
  gain?: number;

  /**
   * Antenna gain tolerance in dB.
   */
  gainTolerance?: number;

  /**
   * ID of the organization that manufactures the antenna.
   */
  manufacturerOrgId?: string;

  /**
   * Antenna mode (e.g. TX,RX).
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
   * Antenna polarization in degrees.
   */
  polarization?: number;

  /**
   * Antenna position (e.g. Top, Nadir, Side).
   */
  position?: string;

  /**
   * Array with 1-2 values specifying the length and width (for rectangular) and just
   * length for dipole antennas in meters.
   */
  size?: Array<number>;

  /**
   * Antenna start of frequency range in Mhz.
   */
  startFrequency?: number;

  /**
   * Boolean indicating if this antenna is steerable.
   */
  steerable?: boolean;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Type of antenna (e.g. Reflector, Double Reflector, Shaped Reflector, Horn,
   * Parabolic, etc.).
   */
  type?: string;
}

export interface AntennaDetailRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AntennaDetailUpdateParams {
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
   * Unique identifier of the parent Antenna.
   */
  idAntenna: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Boolean indicating if this is a beam forming antenna.
   */
  beamForming?: boolean;

  /**
   * Array of angles between the half-power (-3 dB) points of the main lobe of the
   * antenna, in degrees.
   */
  beamwidth?: number;

  /**
   * Antenna description.
   */
  description?: string;

  /**
   * Antenna diameter in meters.
   */
  diameter?: number;

  /**
   * Antenna end of frequency range in Mhz.
   */
  endFrequency?: number;

  /**
   * Antenna maximum gain in dBi.
   */
  gain?: number;

  /**
   * Antenna gain tolerance in dB.
   */
  gainTolerance?: number;

  /**
   * ID of the organization that manufactures the antenna.
   */
  manufacturerOrgId?: string;

  /**
   * Antenna mode (e.g. TX,RX).
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
   * Antenna polarization in degrees.
   */
  polarization?: number;

  /**
   * Antenna position (e.g. Top, Nadir, Side).
   */
  position?: string;

  /**
   * Array with 1-2 values specifying the length and width (for rectangular) and just
   * length for dipole antennas in meters.
   */
  size?: Array<number>;

  /**
   * Antenna start of frequency range in Mhz.
   */
  startFrequency?: number;

  /**
   * Boolean indicating if this antenna is steerable.
   */
  steerable?: boolean;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Type of antenna (e.g. Reflector, Double Reflector, Shaped Reflector, Horn,
   * Parabolic, etc.).
   */
  type?: string;
}

export interface AntennaDetailListParams extends OffsetPageParams {}

export declare namespace AntennaDetails {
  export {
    type AntennaDetailsAbridged as AntennaDetailsAbridged,
    type AntennaDetailsFull as AntennaDetailsFull,
    type AntennaDetailsAbridgedsOffsetPage as AntennaDetailsAbridgedsOffsetPage,
    type AntennaDetailCreateParams as AntennaDetailCreateParams,
    type AntennaDetailRetrieveParams as AntennaDetailRetrieveParams,
    type AntennaDetailUpdateParams as AntennaDetailUpdateParams,
    type AntennaDetailListParams as AntennaDetailListParams,
  };
}
