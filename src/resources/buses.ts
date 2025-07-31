// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as EntitiesAPI from 'bluestaq@unified-data-library/resources/entities';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class Buses extends APIResource {
  /**
   * Service operation to take a single Bus as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.buses.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Example name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: BusCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/bus', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Bus record by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const busFull = await client.buses.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: BusRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.BusFull> {
    return this._client.get(path`/udl/bus/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Bus. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.buses.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Example name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: BusUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/bus/${pathID}`, {
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
   * for await (const busAbridged of client.buses.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BusListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BusAbridgedsOffsetPage, BusAbridged> {
    return this._client.getAPIList('/udl/bus', OffsetPage<BusAbridged>, { query, ...options });
  }

  /**
   * Service operation to delete a Bus object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.buses.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/bus/${id}`, {
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
   * const response = await client.buses.count();
   * ```
   */
  count(query: BusCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/bus/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.buses.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<BusQueryHelpResponse> {
    return this._client.get('/udl/bus/queryhelp', options);
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
   * const busFulls = await client.buses.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: BusTupleParams, options?: RequestOptions): APIPromise<BusTupleResponse> {
    return this._client.get('/udl/bus/tuple', { query, ...options });
  }
}

export type BusAbridgedsOffsetPage = OffsetPage<BusAbridged>;

/**
 * A bus is the physical and software infrastructure backbone to which on-orbit
 * satellite payloads are attached for power, control, and other support functions.
 */
export interface BusAbridged {
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
   * Name of this bus.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Attitude and Orbital Control Notes/description for the bus.
   */
  aocsNotes?: string;

  /**
   * Average mass of this bus without payloads or fuel, in kilograms.
   */
  avgDryMass?: number;

  /**
   * Average mass available on this bus for payloads, in kilograms.
   */
  avgPayloadMass?: number;

  /**
   * Average power available on this bus for payloads, in kilowatts.
   */
  avgPayloadPower?: number;

  /**
   * Average power available on this bus, in kilowatts.
   */
  avgSpacecraftPower?: number;

  /**
   * Average mass of this bus with fuel, but without payloads, in kilograms.
   */
  avgWetMass?: number;

  /**
   * Body dimension in X direction pertaining to length, in meters.
   */
  bodyDimensionX?: number;

  /**
   * Body dimension in Y direction pertaining to height, in meters.
   */
  bodyDimensionY?: number;

  /**
   * Body dimension in Z direction pertaining to width, in meters.
   */
  bodyDimensionZ?: number;

  /**
   * Unique identifier of the organization which designs the bus kit.
   */
  busKitDesignerOrgId?: string;

  /**
   * Country where this bus was manufactured. This value is typically the ISO 3166
   * Alpha-2 two-character country code, however it can also represent various
   * consortiums that do not appear in the ISO document. The code must correspond to
   * an existing country in the UDL’s country API. Call udl/country/{code} to get any
   * associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for
   * the specified country code.
   */
  countryCode?: string;

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
   * Notes/description of the bus.
   */
  description?: string;

  /**
   * Boolean indicating if this bus is generic.
   */
  generic?: boolean;

  /**
   * ID of the parent entity for this bus.
   */
  idEntity?: string;

  /**
   * Launch envelope dimension in X direction, in meters.
   */
  launchEnvelopeDimensionX?: number;

  /**
   * Launch envelope dimension in Y direction, in meters.
   */
  launchEnvelopeDimensionY?: number;

  /**
   * Launch envelope dimension in Z direction, in meters.
   */
  launchEnvelopeDimensionZ?: number;

  /**
   * Unique identifier of the organization which manufactures the main onboard
   * computer for this bus.
   */
  mainComputerManufacturerOrgId?: string;

  /**
   * Unique identifier of the organization which manufactures this bus.
   */
  manufacturerOrgId?: string;

  /**
   * Mass category of this bus (e.g. 1 - 10 kg: Nanosatellite, 10 - 100 kg:
   * Microsatellite, 100 - 500 kg: Minisatellite, 1000 - 2500kg: Medium satellite,
   * etc.).
   */
  massCategory?: string;

  /**
   * Maximum power at beginning of life, lower bounds, in kilowatts.
   */
  maxBOLPowerLower?: number;

  /**
   * Maximum power at beginning of life, upper bounds, in kilowatts.
   */
  maxBOLPowerUpper?: number;

  /**
   * Maximum mass on station at beginning of life, in kilograms.
   */
  maxBOLStationMass?: number;

  /**
   * Maximum mass of this bus without payloads or fuel, in kilograms.
   */
  maxDryMass?: number;

  /**
   * Maximum power at end of life, lower bounds, in kilowatts.
   */
  maxEOLPowerLower?: number;

  /**
   * Maximum power at end of life, upper bounds, in kilowatts.
   */
  maxEOLPowerUpper?: number;

  /**
   * Maximum mass at launch, lower bounds, in kilograms.
   */
  maxLaunchMassLower?: number;

  /**
   * Maximum mass at launch, upper bounds, in kilograms.
   */
  maxLaunchMassUpper?: number;

  /**
   * Maximum payload mass available, in kilograms.
   */
  maxPayloadMass?: number;

  /**
   * Maximum payload power available, in kilowatts.
   */
  maxPayloadPower?: number;

  /**
   * Maximum power available on this bus, in kilowatts.
   */
  maxSpacecraftPower?: number;

  /**
   * Maximum mass of this bus with fuel, but without payloads, in kilograms.
   */
  maxWetMass?: number;

  /**
   * Median mass of this bus without payloads or fuel, in kilograms.
   */
  medianDryMass?: number;

  /**
   * Median mass of this bus with fuel, but without payloads, in kilograms.
   */
  medianWetMass?: number;

  /**
   * Minimum mass of this bus without payloads or fuel, in kilograms.
   */
  minDryMass?: number;

  /**
   * Minimum mass of this bus with fuel, but without payloads, in kilograms.
   */
  minWetMass?: number;

  /**
   * The number of orbit types this bus can support.
   */
  numOrbitType?: number;

  /**
   * Orbit averaged power (the power averaged over one orbit) available on this bus
   * for payloads, in kilowatts.
   */
  oapPayloadPower?: number;

  /**
   * Orbit averaged power (the power averaged over one orbit) available on this bus,
   * in kilowatts.
   */
  oapSpacecraftPower?: number;

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
   * The radial dimension available on this bus for payloads, in meters.
   */
  payloadDimensionX?: number;

  /**
   * The in-track dimension available on this bus for payloads, in meters.
   */
  payloadDimensionY?: number;

  /**
   * The cross-track dimension available on this bus for payloads, in meters.
   */
  payloadDimensionZ?: number;

  /**
   * The volume available on this bus for payloads, in cubic meters.
   */
  payloadVolume?: number;

  /**
   * Power category of this bus (e.g. 0-1kW low power, etc).
   */
  powerCategory?: string;

  /**
   * Unique identifier of the organization which manufactures the telemetry tracking
   * and command subsystem for this bus.
   */
  telemetryTrackingManufacturerOrgId?: string;

  /**
   * Type of this bus.
   */
  type?: string;
}

export type BusCountResponse = string;

export interface BusQueryHelpResponse {
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

export type BusTupleResponse = Array<Shared.BusFull>;

export interface BusCreateParams {
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
   * Name of this bus.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Attitude and Orbital Control Notes/description for the bus.
   */
  aocsNotes?: string;

  /**
   * Average mass of this bus without payloads or fuel, in kilograms.
   */
  avgDryMass?: number;

  /**
   * Average mass available on this bus for payloads, in kilograms.
   */
  avgPayloadMass?: number;

  /**
   * Average power available on this bus for payloads, in kilowatts.
   */
  avgPayloadPower?: number;

  /**
   * Average power available on this bus, in kilowatts.
   */
  avgSpacecraftPower?: number;

  /**
   * Average mass of this bus with fuel, but without payloads, in kilograms.
   */
  avgWetMass?: number;

  /**
   * Body dimension in X direction pertaining to length, in meters.
   */
  bodyDimensionX?: number;

  /**
   * Body dimension in Y direction pertaining to height, in meters.
   */
  bodyDimensionY?: number;

  /**
   * Body dimension in Z direction pertaining to width, in meters.
   */
  bodyDimensionZ?: number;

  /**
   * Unique identifier of the organization which designs the bus kit.
   */
  busKitDesignerOrgId?: string;

  /**
   * Country where this bus was manufactured. This value is typically the ISO 3166
   * Alpha-2 two-character country code, however it can also represent various
   * consortiums that do not appear in the ISO document. The code must correspond to
   * an existing country in the UDL’s country API. Call udl/country/{code} to get any
   * associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for
   * the specified country code.
   */
  countryCode?: string;

  /**
   * Notes/description of the bus.
   */
  description?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * Boolean indicating if this bus is generic.
   */
  generic?: boolean;

  /**
   * ID of the parent entity for this bus.
   */
  idEntity?: string;

  /**
   * Launch envelope dimension in X direction, in meters.
   */
  launchEnvelopeDimensionX?: number;

  /**
   * Launch envelope dimension in Y direction, in meters.
   */
  launchEnvelopeDimensionY?: number;

  /**
   * Launch envelope dimension in Z direction, in meters.
   */
  launchEnvelopeDimensionZ?: number;

  /**
   * Unique identifier of the organization which manufactures the main onboard
   * computer for this bus.
   */
  mainComputerManufacturerOrgId?: string;

  /**
   * Unique identifier of the organization which manufactures this bus.
   */
  manufacturerOrgId?: string;

  /**
   * Mass category of this bus (e.g. 1 - 10 kg: Nanosatellite, 10 - 100 kg:
   * Microsatellite, 100 - 500 kg: Minisatellite, 1000 - 2500kg: Medium satellite,
   * etc.).
   */
  massCategory?: string;

  /**
   * Maximum power at beginning of life, lower bounds, in kilowatts.
   */
  maxBOLPowerLower?: number;

  /**
   * Maximum power at beginning of life, upper bounds, in kilowatts.
   */
  maxBOLPowerUpper?: number;

  /**
   * Maximum mass on station at beginning of life, in kilograms.
   */
  maxBOLStationMass?: number;

  /**
   * Maximum mass of this bus without payloads or fuel, in kilograms.
   */
  maxDryMass?: number;

  /**
   * Maximum power at end of life, lower bounds, in kilowatts.
   */
  maxEOLPowerLower?: number;

  /**
   * Maximum power at end of life, upper bounds, in kilowatts.
   */
  maxEOLPowerUpper?: number;

  /**
   * Maximum mass at launch, lower bounds, in kilograms.
   */
  maxLaunchMassLower?: number;

  /**
   * Maximum mass at launch, upper bounds, in kilograms.
   */
  maxLaunchMassUpper?: number;

  /**
   * Maximum payload mass available, in kilograms.
   */
  maxPayloadMass?: number;

  /**
   * Maximum payload power available, in kilowatts.
   */
  maxPayloadPower?: number;

  /**
   * Maximum power available on this bus, in kilowatts.
   */
  maxSpacecraftPower?: number;

  /**
   * Maximum mass of this bus with fuel, but without payloads, in kilograms.
   */
  maxWetMass?: number;

  /**
   * Median mass of this bus without payloads or fuel, in kilograms.
   */
  medianDryMass?: number;

  /**
   * Median mass of this bus with fuel, but without payloads, in kilograms.
   */
  medianWetMass?: number;

  /**
   * Minimum mass of this bus without payloads or fuel, in kilograms.
   */
  minDryMass?: number;

  /**
   * Minimum mass of this bus with fuel, but without payloads, in kilograms.
   */
  minWetMass?: number;

  /**
   * The number of orbit types this bus can support.
   */
  numOrbitType?: number;

  /**
   * Orbit averaged power (the power averaged over one orbit) available on this bus
   * for payloads, in kilowatts.
   */
  oapPayloadPower?: number;

  /**
   * Orbit averaged power (the power averaged over one orbit) available on this bus,
   * in kilowatts.
   */
  oapSpacecraftPower?: number;

  /**
   * Array of orbit types this bus can support (e.g. GEO, LEO, etc.). Must contain
   * the same number of elements as the value of numOrbitType.
   */
  orbitTypes?: Array<string>;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The radial dimension available on this bus for payloads, in meters.
   */
  payloadDimensionX?: number;

  /**
   * The in-track dimension available on this bus for payloads, in meters.
   */
  payloadDimensionY?: number;

  /**
   * The cross-track dimension available on this bus for payloads, in meters.
   */
  payloadDimensionZ?: number;

  /**
   * The volume available on this bus for payloads, in cubic meters.
   */
  payloadVolume?: number;

  /**
   * Power category of this bus (e.g. 0-1kW low power, etc).
   */
  powerCategory?: string;

  /**
   * Unique identifier of the organization which manufactures the telemetry tracking
   * and command subsystem for this bus.
   */
  telemetryTrackingManufacturerOrgId?: string;

  /**
   * Type of this bus.
   */
  type?: string;
}

export interface BusRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface BusUpdateParams {
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
   * Name of this bus.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Attitude and Orbital Control Notes/description for the bus.
   */
  aocsNotes?: string;

  /**
   * Average mass of this bus without payloads or fuel, in kilograms.
   */
  avgDryMass?: number;

  /**
   * Average mass available on this bus for payloads, in kilograms.
   */
  avgPayloadMass?: number;

  /**
   * Average power available on this bus for payloads, in kilowatts.
   */
  avgPayloadPower?: number;

  /**
   * Average power available on this bus, in kilowatts.
   */
  avgSpacecraftPower?: number;

  /**
   * Average mass of this bus with fuel, but without payloads, in kilograms.
   */
  avgWetMass?: number;

  /**
   * Body dimension in X direction pertaining to length, in meters.
   */
  bodyDimensionX?: number;

  /**
   * Body dimension in Y direction pertaining to height, in meters.
   */
  bodyDimensionY?: number;

  /**
   * Body dimension in Z direction pertaining to width, in meters.
   */
  bodyDimensionZ?: number;

  /**
   * Unique identifier of the organization which designs the bus kit.
   */
  busKitDesignerOrgId?: string;

  /**
   * Country where this bus was manufactured. This value is typically the ISO 3166
   * Alpha-2 two-character country code, however it can also represent various
   * consortiums that do not appear in the ISO document. The code must correspond to
   * an existing country in the UDL’s country API. Call udl/country/{code} to get any
   * associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for
   * the specified country code.
   */
  countryCode?: string;

  /**
   * Notes/description of the bus.
   */
  description?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * Boolean indicating if this bus is generic.
   */
  generic?: boolean;

  /**
   * ID of the parent entity for this bus.
   */
  idEntity?: string;

  /**
   * Launch envelope dimension in X direction, in meters.
   */
  launchEnvelopeDimensionX?: number;

  /**
   * Launch envelope dimension in Y direction, in meters.
   */
  launchEnvelopeDimensionY?: number;

  /**
   * Launch envelope dimension in Z direction, in meters.
   */
  launchEnvelopeDimensionZ?: number;

  /**
   * Unique identifier of the organization which manufactures the main onboard
   * computer for this bus.
   */
  mainComputerManufacturerOrgId?: string;

  /**
   * Unique identifier of the organization which manufactures this bus.
   */
  manufacturerOrgId?: string;

  /**
   * Mass category of this bus (e.g. 1 - 10 kg: Nanosatellite, 10 - 100 kg:
   * Microsatellite, 100 - 500 kg: Minisatellite, 1000 - 2500kg: Medium satellite,
   * etc.).
   */
  massCategory?: string;

  /**
   * Maximum power at beginning of life, lower bounds, in kilowatts.
   */
  maxBOLPowerLower?: number;

  /**
   * Maximum power at beginning of life, upper bounds, in kilowatts.
   */
  maxBOLPowerUpper?: number;

  /**
   * Maximum mass on station at beginning of life, in kilograms.
   */
  maxBOLStationMass?: number;

  /**
   * Maximum mass of this bus without payloads or fuel, in kilograms.
   */
  maxDryMass?: number;

  /**
   * Maximum power at end of life, lower bounds, in kilowatts.
   */
  maxEOLPowerLower?: number;

  /**
   * Maximum power at end of life, upper bounds, in kilowatts.
   */
  maxEOLPowerUpper?: number;

  /**
   * Maximum mass at launch, lower bounds, in kilograms.
   */
  maxLaunchMassLower?: number;

  /**
   * Maximum mass at launch, upper bounds, in kilograms.
   */
  maxLaunchMassUpper?: number;

  /**
   * Maximum payload mass available, in kilograms.
   */
  maxPayloadMass?: number;

  /**
   * Maximum payload power available, in kilowatts.
   */
  maxPayloadPower?: number;

  /**
   * Maximum power available on this bus, in kilowatts.
   */
  maxSpacecraftPower?: number;

  /**
   * Maximum mass of this bus with fuel, but without payloads, in kilograms.
   */
  maxWetMass?: number;

  /**
   * Median mass of this bus without payloads or fuel, in kilograms.
   */
  medianDryMass?: number;

  /**
   * Median mass of this bus with fuel, but without payloads, in kilograms.
   */
  medianWetMass?: number;

  /**
   * Minimum mass of this bus without payloads or fuel, in kilograms.
   */
  minDryMass?: number;

  /**
   * Minimum mass of this bus with fuel, but without payloads, in kilograms.
   */
  minWetMass?: number;

  /**
   * The number of orbit types this bus can support.
   */
  numOrbitType?: number;

  /**
   * Orbit averaged power (the power averaged over one orbit) available on this bus
   * for payloads, in kilowatts.
   */
  oapPayloadPower?: number;

  /**
   * Orbit averaged power (the power averaged over one orbit) available on this bus,
   * in kilowatts.
   */
  oapSpacecraftPower?: number;

  /**
   * Array of orbit types this bus can support (e.g. GEO, LEO, etc.). Must contain
   * the same number of elements as the value of numOrbitType.
   */
  orbitTypes?: Array<string>;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The radial dimension available on this bus for payloads, in meters.
   */
  payloadDimensionX?: number;

  /**
   * The in-track dimension available on this bus for payloads, in meters.
   */
  payloadDimensionY?: number;

  /**
   * The cross-track dimension available on this bus for payloads, in meters.
   */
  payloadDimensionZ?: number;

  /**
   * The volume available on this bus for payloads, in cubic meters.
   */
  payloadVolume?: number;

  /**
   * Power category of this bus (e.g. 0-1kW low power, etc).
   */
  powerCategory?: string;

  /**
   * Unique identifier of the organization which manufactures the telemetry tracking
   * and command subsystem for this bus.
   */
  telemetryTrackingManufacturerOrgId?: string;

  /**
   * Type of this bus.
   */
  type?: string;
}

export interface BusListParams extends OffsetPageParams {}

export interface BusCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface BusTupleParams {
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

export declare namespace Buses {
  export {
    type BusAbridged as BusAbridged,
    type BusCountResponse as BusCountResponse,
    type BusQueryHelpResponse as BusQueryHelpResponse,
    type BusTupleResponse as BusTupleResponse,
    type BusAbridgedsOffsetPage as BusAbridgedsOffsetPage,
    type BusCreateParams as BusCreateParams,
    type BusRetrieveParams as BusRetrieveParams,
    type BusUpdateParams as BusUpdateParams,
    type BusListParams as BusListParams,
    type BusCountParams as BusCountParams,
    type BusTupleParams as BusTupleParams,
  };
}
