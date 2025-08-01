// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LaunchVehicleDetails extends APIResource {
  /**
   * Service operation to take a single LaunchVehicleDetails as a POST body and
   * ingest into the database. LaunchVehicleDetails represents launch vehicle details
   * and characteristics, compiled by a particular source. A vehicle may have
   * multiple details records from various sources. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchVehicleDetails.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idLaunchVehicle: 'LAUNCHVEHICLE-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: LaunchVehicleDetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/launchvehicledetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single LaunchVehicleDetails. LaunchVehicleDetails
   * represents launch vehicle details and characteristics, compiled by a particular
   * source. A vehicle may have multiple details records from various sources. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchVehicleDetails.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idLaunchVehicle: 'LAUNCHVEHICLE-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: LaunchVehicleDetailUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/launchvehicledetails/${pathID}`, {
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
   * for await (const launchVehicleDetailListResponse of client.launchVehicleDetails.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LaunchVehicleDetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LaunchVehicleDetailListResponsesOffsetPage, LaunchVehicleDetailListResponse> {
    return this._client.getAPIList('/udl/launchvehicledetails', OffsetPage<LaunchVehicleDetailListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a LaunchVehicleDetails object specified by the
   * passed ID path parameter. LaunchVehicleDetails represents launch vehicle details
   * and characteristics, compiled by a particular source. A vehicle may have
   * multiple details records from various sources. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchVehicleDetails.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/launchvehicledetails/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single LaunchVehicleDetails record by its unique ID
   * passed as a path parameter. LaunchVehicleDetails represents launch vehicle
   * details and characteristics, compiled by a particular source. A vehicle may have
   * multiple details records from various sources.
   *
   * @example
   * ```ts
   * const launchVehicleDetail =
   *   await client.launchVehicleDetails.get('id');
   * ```
   */
  get(
    id: string,
    query: LaunchVehicleDetailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LaunchVehicleDetailGetResponse> {
    return this._client.get(path`/udl/launchvehicledetails/${id}`, { query, ...options });
  }
}

export type LaunchVehicleDetailListResponsesOffsetPage = OffsetPage<LaunchVehicleDetailListResponse>;

/**
 * Model representation of launch vehicle details and characteristics, compiled by
 * a particular source. A vehicle may have multiple details records from various
 * sources.
 */
export interface LaunchVehicleDetailListResponse {
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
   * Identifier of the parent launch vehicle record.
   */
  idLaunchVehicle: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Launch vehicle attitude accuracy (degrees).
   */
  attitudeAccuracy?: number;

  /**
   * Vehicle category.
   */
  category?: string;

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
   * Launch vehicle deployment rotation rate in RPM.
   */
  deploymentRotationRate?: number;

  /**
   * Vehicle diameter in meters.
   */
  diameter?: number;

  /**
   * Launch vehicle estimated launch price in US dollars.
   */
  estLaunchPrice?: number;

  /**
   * Launch vehicle typical estimated launch price in US dollars.
   */
  estLaunchPriceTypical?: number;

  /**
   * Vehicle fairing maximum external diameter in meters.
   */
  fairingExternalDiameter?: number;

  /**
   * Vehicle fairing maximum internal diameter in meters.
   */
  fairingInternalDiameter?: number;

  /**
   * Vehicle fairing length in meters.
   */
  fairingLength?: number;

  /**
   * Vehicle fairing mass in kg.
   */
  fairingMass?: number;

  /**
   * Fairing material.
   */
  fairingMaterial?: string;

  /**
   * Name of the fairing.
   */
  fairingName?: string;

  /**
   * Notes/Description of the launch vehicle fairing.
   */
  fairingNotes?: string;

  /**
   * Vehicle family.
   */
  family?: string;

  /**
   * Maximum vehicle payload mass to GEO orbit in kg.
   */
  geoPayloadMass?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Margin (degrees).
   */
  gtoInj3SigAccuracyApogeeMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Target (degrees).
   */
  gtoInj3SigAccuracyApogeeTarget?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Margin (degrees).
   */
  gtoInj3SigAccuracyInclinationMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Target (degrees).
   */
  gtoInj3SigAccuracyInclinationTarget?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Margin (degrees).
   */
  gtoInj3SigAccuracyPerigeeMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Target (degrees).
   */
  gtoInj3SigAccuracyPerigeeTarget?: number;

  /**
   * Max vehicle payload mass to Geo-Transfer Orbit in kg.
   */
  gtoPayloadMass?: number;

  /**
   * Vehicle total mass at launch time in kg (including all boosters).
   */
  launchMass?: number;

  /**
   * Vehicle launch prefix.
   */
  launchPrefix?: string;

  /**
   * Vehicle length in meters.
   */
  length?: number;

  /**
   * Max vehicle payload mass to LEO orbit in kg.
   */
  leoPayloadMass?: number;

  /**
   * ID of the organization that manufactures the launch vehicle.
   */
  manufacturerOrgId?: string;

  /**
   * Vehicle maximum acceleration load in g.
   */
  maxAccelLoad?: number;

  /**
   * Vehicle maximum acoustic level in dB.
   */
  maxAcousticLevel?: number;

  /**
   * Vehicle maximum acoustic level range in Hz.
   */
  maxAcousticLevelRange?: number;

  /**
   * Vehicle fairing maximum pressure change in kPa/sec.
   */
  maxFairingPressureChange?: number;

  /**
   * Vehicle maximum flight shock force in g.
   */
  maxFlightShockForce?: number;

  /**
   * Vehicle maximum flight shock frequency in Hz.
   */
  maxFlightShockFreq?: number;

  /**
   * Vehicle maximum payload lateral frequency in Hz.
   */
  maxPayloadFreqLat?: number;

  /**
   * Vehicle maximum payload longitudinal frequency in Hz.
   */
  maxPayloadFreqLon?: number;

  /**
   * Vehicle minor variant.
   */
  minorVariant?: string;

  /**
   * Notes/Description of the launch vehicle.
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
   * Oxidizer type.
   */
  oxidizer?: string;

  /**
   * Notes/Description of the launch vehicle payload.
   */
  payloadNotes?: string;

  /**
   * Launch vehicle payload separation rate in m/s.
   */
  payloadSeparationRate?: number;

  /**
   * Propellant type.
   */
  propellant?: string;

  /**
   * Vehicle overall sound pressure level in dB.
   */
  soundPressureLevel?: number;

  /**
   * Optional URL for additional information on the vehicle.
   */
  sourceURL?: string;

  /**
   * Max vehicle payload mass to Sun-Synchronous Orbit in kg.
   */
  ssoPayloadMass?: number;

  /**
   * Vehicle variant.
   */
  variant?: string;
}

/**
 * Model representation of launch vehicle details and characteristics, compiled by
 * a particular source. A vehicle may have multiple details records from various
 * sources.
 */
export interface LaunchVehicleDetailGetResponse {
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
   * Identifier of the parent launch vehicle record.
   */
  idLaunchVehicle: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Launch vehicle attitude accuracy (degrees).
   */
  attitudeAccuracy?: number;

  /**
   * Vehicle category.
   */
  category?: string;

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
   * Launch vehicle deployment rotation rate in RPM.
   */
  deploymentRotationRate?: number;

  /**
   * Vehicle diameter in meters.
   */
  diameter?: number;

  /**
   * Launch vehicle estimated launch price in US dollars.
   */
  estLaunchPrice?: number;

  /**
   * Launch vehicle typical estimated launch price in US dollars.
   */
  estLaunchPriceTypical?: number;

  /**
   * Vehicle fairing maximum external diameter in meters.
   */
  fairingExternalDiameter?: number;

  /**
   * Vehicle fairing maximum internal diameter in meters.
   */
  fairingInternalDiameter?: number;

  /**
   * Vehicle fairing length in meters.
   */
  fairingLength?: number;

  /**
   * Vehicle fairing mass in kg.
   */
  fairingMass?: number;

  /**
   * Fairing material.
   */
  fairingMaterial?: string;

  /**
   * Name of the fairing.
   */
  fairingName?: string;

  /**
   * Notes/Description of the launch vehicle fairing.
   */
  fairingNotes?: string;

  /**
   * Vehicle family.
   */
  family?: string;

  /**
   * Maximum vehicle payload mass to GEO orbit in kg.
   */
  geoPayloadMass?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Margin (degrees).
   */
  gtoInj3SigAccuracyApogeeMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Target (degrees).
   */
  gtoInj3SigAccuracyApogeeTarget?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Margin (degrees).
   */
  gtoInj3SigAccuracyInclinationMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Target (degrees).
   */
  gtoInj3SigAccuracyInclinationTarget?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Margin (degrees).
   */
  gtoInj3SigAccuracyPerigeeMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Target (degrees).
   */
  gtoInj3SigAccuracyPerigeeTarget?: number;

  /**
   * Max vehicle payload mass to Geo-Transfer Orbit in kg.
   */
  gtoPayloadMass?: number;

  /**
   * Vehicle total mass at launch time in kg (including all boosters).
   */
  launchMass?: number;

  /**
   * Vehicle launch prefix.
   */
  launchPrefix?: string;

  /**
   * Vehicle length in meters.
   */
  length?: number;

  /**
   * Max vehicle payload mass to LEO orbit in kg.
   */
  leoPayloadMass?: number;

  /**
   * An organization such as a corporation, manufacturer, consortium, government,
   * etc. An organization may have parent and child organizations as well as link to
   * a former organization if this org previously existed as another organization.
   */
  manufacturerOrg?: Shared.OrganizationFull;

  /**
   * ID of the organization that manufactures the launch vehicle.
   */
  manufacturerOrgId?: string;

  /**
   * Vehicle maximum acceleration load in g.
   */
  maxAccelLoad?: number;

  /**
   * Vehicle maximum acoustic level in dB.
   */
  maxAcousticLevel?: number;

  /**
   * Vehicle maximum acoustic level range in Hz.
   */
  maxAcousticLevelRange?: number;

  /**
   * Vehicle fairing maximum pressure change in kPa/sec.
   */
  maxFairingPressureChange?: number;

  /**
   * Vehicle maximum flight shock force in g.
   */
  maxFlightShockForce?: number;

  /**
   * Vehicle maximum flight shock frequency in Hz.
   */
  maxFlightShockFreq?: number;

  /**
   * Vehicle maximum payload lateral frequency in Hz.
   */
  maxPayloadFreqLat?: number;

  /**
   * Vehicle maximum payload longitudinal frequency in Hz.
   */
  maxPayloadFreqLon?: number;

  /**
   * Vehicle minor variant.
   */
  minorVariant?: string;

  /**
   * Notes/Description of the launch vehicle.
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
   * Oxidizer type.
   */
  oxidizer?: string;

  /**
   * Notes/Description of the launch vehicle payload.
   */
  payloadNotes?: string;

  /**
   * Launch vehicle payload separation rate in m/s.
   */
  payloadSeparationRate?: number;

  /**
   * Propellant type.
   */
  propellant?: string;

  /**
   * Vehicle overall sound pressure level in dB.
   */
  soundPressureLevel?: number;

  /**
   * Optional URL for additional information on the vehicle.
   */
  sourceURL?: string;

  /**
   * Max vehicle payload mass to Sun-Synchronous Orbit in kg.
   */
  ssoPayloadMass?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

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
   * Vehicle variant.
   */
  variant?: string;
}

export interface LaunchVehicleDetailCreateParams {
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
   * Identifier of the parent launch vehicle record.
   */
  idLaunchVehicle: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Launch vehicle attitude accuracy (degrees).
   */
  attitudeAccuracy?: number;

  /**
   * Vehicle category.
   */
  category?: string;

  /**
   * Launch vehicle deployment rotation rate in RPM.
   */
  deploymentRotationRate?: number;

  /**
   * Vehicle diameter in meters.
   */
  diameter?: number;

  /**
   * Launch vehicle estimated launch price in US dollars.
   */
  estLaunchPrice?: number;

  /**
   * Launch vehicle typical estimated launch price in US dollars.
   */
  estLaunchPriceTypical?: number;

  /**
   * Vehicle fairing maximum external diameter in meters.
   */
  fairingExternalDiameter?: number;

  /**
   * Vehicle fairing maximum internal diameter in meters.
   */
  fairingInternalDiameter?: number;

  /**
   * Vehicle fairing length in meters.
   */
  fairingLength?: number;

  /**
   * Vehicle fairing mass in kg.
   */
  fairingMass?: number;

  /**
   * Fairing material.
   */
  fairingMaterial?: string;

  /**
   * Name of the fairing.
   */
  fairingName?: string;

  /**
   * Notes/Description of the launch vehicle fairing.
   */
  fairingNotes?: string;

  /**
   * Vehicle family.
   */
  family?: string;

  /**
   * Maximum vehicle payload mass to GEO orbit in kg.
   */
  geoPayloadMass?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Margin (degrees).
   */
  gtoInj3SigAccuracyApogeeMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Target (degrees).
   */
  gtoInj3SigAccuracyApogeeTarget?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Margin (degrees).
   */
  gtoInj3SigAccuracyInclinationMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Target (degrees).
   */
  gtoInj3SigAccuracyInclinationTarget?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Margin (degrees).
   */
  gtoInj3SigAccuracyPerigeeMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Target (degrees).
   */
  gtoInj3SigAccuracyPerigeeTarget?: number;

  /**
   * Max vehicle payload mass to Geo-Transfer Orbit in kg.
   */
  gtoPayloadMass?: number;

  /**
   * Vehicle total mass at launch time in kg (including all boosters).
   */
  launchMass?: number;

  /**
   * Vehicle launch prefix.
   */
  launchPrefix?: string;

  /**
   * Vehicle length in meters.
   */
  length?: number;

  /**
   * Max vehicle payload mass to LEO orbit in kg.
   */
  leoPayloadMass?: number;

  /**
   * ID of the organization that manufactures the launch vehicle.
   */
  manufacturerOrgId?: string;

  /**
   * Vehicle maximum acceleration load in g.
   */
  maxAccelLoad?: number;

  /**
   * Vehicle maximum acoustic level in dB.
   */
  maxAcousticLevel?: number;

  /**
   * Vehicle maximum acoustic level range in Hz.
   */
  maxAcousticLevelRange?: number;

  /**
   * Vehicle fairing maximum pressure change in kPa/sec.
   */
  maxFairingPressureChange?: number;

  /**
   * Vehicle maximum flight shock force in g.
   */
  maxFlightShockForce?: number;

  /**
   * Vehicle maximum flight shock frequency in Hz.
   */
  maxFlightShockFreq?: number;

  /**
   * Vehicle maximum payload lateral frequency in Hz.
   */
  maxPayloadFreqLat?: number;

  /**
   * Vehicle maximum payload longitudinal frequency in Hz.
   */
  maxPayloadFreqLon?: number;

  /**
   * Vehicle minor variant.
   */
  minorVariant?: string;

  /**
   * Notes/Description of the launch vehicle.
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
   * Oxidizer type.
   */
  oxidizer?: string;

  /**
   * Notes/Description of the launch vehicle payload.
   */
  payloadNotes?: string;

  /**
   * Launch vehicle payload separation rate in m/s.
   */
  payloadSeparationRate?: number;

  /**
   * Propellant type.
   */
  propellant?: string;

  /**
   * Vehicle overall sound pressure level in dB.
   */
  soundPressureLevel?: number;

  /**
   * Optional URL for additional information on the vehicle.
   */
  sourceURL?: string;

  /**
   * Max vehicle payload mass to Sun-Synchronous Orbit in kg.
   */
  ssoPayloadMass?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Vehicle variant.
   */
  variant?: string;
}

export interface LaunchVehicleDetailUpdateParams {
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
   * Identifier of the parent launch vehicle record.
   */
  idLaunchVehicle: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Launch vehicle attitude accuracy (degrees).
   */
  attitudeAccuracy?: number;

  /**
   * Vehicle category.
   */
  category?: string;

  /**
   * Launch vehicle deployment rotation rate in RPM.
   */
  deploymentRotationRate?: number;

  /**
   * Vehicle diameter in meters.
   */
  diameter?: number;

  /**
   * Launch vehicle estimated launch price in US dollars.
   */
  estLaunchPrice?: number;

  /**
   * Launch vehicle typical estimated launch price in US dollars.
   */
  estLaunchPriceTypical?: number;

  /**
   * Vehicle fairing maximum external diameter in meters.
   */
  fairingExternalDiameter?: number;

  /**
   * Vehicle fairing maximum internal diameter in meters.
   */
  fairingInternalDiameter?: number;

  /**
   * Vehicle fairing length in meters.
   */
  fairingLength?: number;

  /**
   * Vehicle fairing mass in kg.
   */
  fairingMass?: number;

  /**
   * Fairing material.
   */
  fairingMaterial?: string;

  /**
   * Name of the fairing.
   */
  fairingName?: string;

  /**
   * Notes/Description of the launch vehicle fairing.
   */
  fairingNotes?: string;

  /**
   * Vehicle family.
   */
  family?: string;

  /**
   * Maximum vehicle payload mass to GEO orbit in kg.
   */
  geoPayloadMass?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Margin (degrees).
   */
  gtoInj3SigAccuracyApogeeMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Target (degrees).
   */
  gtoInj3SigAccuracyApogeeTarget?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Margin (degrees).
   */
  gtoInj3SigAccuracyInclinationMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Target (degrees).
   */
  gtoInj3SigAccuracyInclinationTarget?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Margin (degrees).
   */
  gtoInj3SigAccuracyPerigeeMargin?: number;

  /**
   * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Target (degrees).
   */
  gtoInj3SigAccuracyPerigeeTarget?: number;

  /**
   * Max vehicle payload mass to Geo-Transfer Orbit in kg.
   */
  gtoPayloadMass?: number;

  /**
   * Vehicle total mass at launch time in kg (including all boosters).
   */
  launchMass?: number;

  /**
   * Vehicle launch prefix.
   */
  launchPrefix?: string;

  /**
   * Vehicle length in meters.
   */
  length?: number;

  /**
   * Max vehicle payload mass to LEO orbit in kg.
   */
  leoPayloadMass?: number;

  /**
   * ID of the organization that manufactures the launch vehicle.
   */
  manufacturerOrgId?: string;

  /**
   * Vehicle maximum acceleration load in g.
   */
  maxAccelLoad?: number;

  /**
   * Vehicle maximum acoustic level in dB.
   */
  maxAcousticLevel?: number;

  /**
   * Vehicle maximum acoustic level range in Hz.
   */
  maxAcousticLevelRange?: number;

  /**
   * Vehicle fairing maximum pressure change in kPa/sec.
   */
  maxFairingPressureChange?: number;

  /**
   * Vehicle maximum flight shock force in g.
   */
  maxFlightShockForce?: number;

  /**
   * Vehicle maximum flight shock frequency in Hz.
   */
  maxFlightShockFreq?: number;

  /**
   * Vehicle maximum payload lateral frequency in Hz.
   */
  maxPayloadFreqLat?: number;

  /**
   * Vehicle maximum payload longitudinal frequency in Hz.
   */
  maxPayloadFreqLon?: number;

  /**
   * Vehicle minor variant.
   */
  minorVariant?: string;

  /**
   * Notes/Description of the launch vehicle.
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
   * Oxidizer type.
   */
  oxidizer?: string;

  /**
   * Notes/Description of the launch vehicle payload.
   */
  payloadNotes?: string;

  /**
   * Launch vehicle payload separation rate in m/s.
   */
  payloadSeparationRate?: number;

  /**
   * Propellant type.
   */
  propellant?: string;

  /**
   * Vehicle overall sound pressure level in dB.
   */
  soundPressureLevel?: number;

  /**
   * Optional URL for additional information on the vehicle.
   */
  sourceURL?: string;

  /**
   * Max vehicle payload mass to Sun-Synchronous Orbit in kg.
   */
  ssoPayloadMass?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Vehicle variant.
   */
  variant?: string;
}

export interface LaunchVehicleDetailListParams extends OffsetPageParams {}

export interface LaunchVehicleDetailGetParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace LaunchVehicleDetails {
  export {
    type LaunchVehicleDetailListResponse as LaunchVehicleDetailListResponse,
    type LaunchVehicleDetailGetResponse as LaunchVehicleDetailGetResponse,
    type LaunchVehicleDetailListResponsesOffsetPage as LaunchVehicleDetailListResponsesOffsetPage,
    type LaunchVehicleDetailCreateParams as LaunchVehicleDetailCreateParams,
    type LaunchVehicleDetailUpdateParams as LaunchVehicleDetailUpdateParams,
    type LaunchVehicleDetailListParams as LaunchVehicleDetailListParams,
    type LaunchVehicleDetailGetParams as LaunchVehicleDetailGetParams,
  };
}
