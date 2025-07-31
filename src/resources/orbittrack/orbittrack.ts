// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Orbittrack extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: OrbittrackListParams,
    options?: RequestOptions,
  ): PagePromise<OrbittrackListResponsesOffsetPage, OrbittrackListResponse> {
    return this._client.getAPIList('/udl/orbittrack', OffsetPage<OrbittrackListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: OrbittrackCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/orbittrack/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of orbit
   * track records as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   */
  createBulk(params: OrbittrackCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/orbittrack/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<OrbittrackQueryhelpResponse> {
    return this._client.get('/udl/orbittrack/queryhelp', options);
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
  tuple(query: OrbittrackTupleParams, options?: RequestOptions): APIPromise<OrbittrackTupleResponse> {
    return this._client.get('/udl/orbittrack/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple orbit track records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  unvalidatedPublish(params: OrbittrackUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-orbittrack', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type OrbittrackListResponsesOffsetPage = OffsetPage<OrbittrackListResponse>;

/**
 * Keplerian orbital elements describing an orbit for a particular on-orbit
 * satellite and applicable sensor data aiding in the orbit prediction.
 */
export interface OrbittrackListResponse {
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
   * WGS-84 latitude of the track object subpoint, in degrees. -90 to 90 degrees
   * (negative values south of equator).
   */
  lat: number;

  /**
   * WGS-84 longitude of the track object subpoint, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  lon: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Track timestamp in ISO8601 UTC format, with microsecond precision.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Track point altitude relative to WGS-84 ellipsoid, in meters.
   */
  alt?: number;

  /**
   * Free-form remarks entered for the satellite.
   */
  amplification?: string;

  /**
   * The angle formed between the line of sight of the observer and the horizon at
   * track timestamp, in degrees. The angular range is -90 to 90, with negative
   * values representing angle of depression.
   */
  angElev?: number;

  /**
   * Three element array representing an Area of Uncertainty (AoU). The array element
   * definitions and units are type specific depending on the aouType specified in
   * this record:
   *
   * ELLIPSE:
   *
   * brg - orientation in degrees of the ellipse
   *
   * a1 - semi-major axis in meters
   *
   * a2 - semi-minor axis in meters
   *
   * BEARING (BEARING BOX or MTST BEARING BOX):
   *
   * brg - orientation in degrees of the bearing box
   *
   * a1 - length of bearing box in meters
   *
   * a2 - half-width of bearing box in meters
   *
   * OTHER (All other type values):
   *
   * brg - line of bearing in degrees true
   *
   * a1 - bearing error in degrees
   *
   * a2 - estimated range in meters.
   */
  aouData?: Array<number>;

  /**
   * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
   * type defines the elements of the aouData array and is required if aouData is not
   * null. See the aouData field definition for specific information.
   */
  aouType?: string;

  /**
   * International radio call sign assigned to the track. This is an 8-character
   * alphanumeric code.
   */
  callSign?: string;

  /**
   * One-line Charlie elements set.
   */
  charlieLine?: string;

  /**
   * The cross-reference code of the channel on which this track report was received,
   * if the report came over a comms channel.
   */
  chXRef?: string;

  /**
   * The Area Of Uncertainty (AOU) percentage (0 - 100) containment value. The
   * percentage of time (90%) that the estimated area of uncertainty will cover the
   * true position of the track object.
   */
  cntnmnt?: number;

  /**
   * The country code. This value is typically the ISO 3166 Alpha-2 two-character
   * country code, however it can also represent various consortiums that do not
   * appear in the ISO document. The code must correspond to an existing country in
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
   */
  countryCode?: string;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Predicted change in Mean Motion (velocity) in radians/herg^2. herg is a unit of
   * time measure equal to 806.8120769 seconds, and is the orbital period of an
   * imaginary satellite rotating about the Earth at zero altitude.
   */
  decay?: number;

  /**
   * Flag indicating that this track represents a dummy object or group. Identifies
   * offensive or defensive units, equipment and/or installations intended to draw
   * the enemy's attention away from the area of the main attack. Based on
   * MIL-STD-2525 symbology definitions.
   */
  dummy?: boolean;

  /**
   * Flag indicating that this track represents a feint object or group. Identifies
   * offensive or defensive units, equipment and/or installations intended to draw
   * the enemy's attention away from the area of the main attack. Based on
   * MIL-STD-2525 symbology definitions.
   */
  feint?: boolean;

  /**
   * Flag indicating that this track represents a headquarters object. Based on
   * MIL-STD-2525 symbology definitions.
   */
  hq?: boolean;

  /**
   * Unique identifier of the Elset associated with this object.
   */
  idElset?: string;

  /**
   * Additional track object identity/status information, typically used for EXERCISE
   * identity amplification (FAKER, JOKER, KILO, TRAVELLER, ZOMBIE):
   *
   * FAKER: Friendly track, object, or entity acting as an exercise hostile.
   *
   * JOKER: Friendly track, object, or entity acting as an exercise suspect.
   *
   * KILO: Friendly high-value object.
   *
   * TRAVELLER: Suspect land or surface track following a recognized traffic route.
   *
   * ZOMBIE: Suspect track, object, or entity of special interest.
   */
  identAmp?: string;

  /**
   * Unique identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * A text amplifier displaying IFF/SIF/AIS Identification modes and codes.
   */
  iff?: string;

  /**
   * Flag indicating that this track represents an installation. Based on
   * MIL-STD-2525 symbology definitions.
   */
  installation?: boolean;

  /**
   * The on-orbit category assigned to this track object (DEBRIS, MANNED, PAYLOAD,
   * PLATFORM, ROCKET BODY, UNKNOWN).
   */
  objectType?: 'DEBRIS' | 'MANNED' | 'PAYLOAD' | 'PLATFORM' | 'ROCKET BODY' | 'UNKNOWN';

  /**
   * The estimated identity of the track object (ASSUMED FRIEND, FRIEND, HOSTILE,
   * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
   *
   * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
   * behavior, and/or origin.
   *
   * FRIEND: Track object supporting friendly forces and belonging to a declared
   * friendly nation or entity.
   *
   * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
   * deemed to contribute to a threat to friendly forces or their mission due to its
   * behavior, characteristics, nationality, or origin.
   *
   * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
   * origin indicate that it is neither supporting nor opposing friendly forces or
   * their mission.
   *
   * PENDING: Track object which has not been evaluated.
   *
   * SUSPECT: Track object deemed potentially hostile due to the object
   * characteristics, behavior, nationality, and/or origin.
   *
   * UNKNOWN: Track object which has been evaluated and does not meet criteria for
   * any standard identity.
   */
  objIdent?: 'ASSUMED FRIEND' | 'FRIEND' | 'HOSTILE' | 'NEUTRAL' | 'PENDING' | 'SUSPECT' | 'UNKNOWN';

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
   * Optional identifier provided by observation source to indicate the target
   * on-orbit object of this track. This may be an internal identifier and not
   * necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Radio frequency of the track, measured in megahertz (MHz).
   */
  rdfRF?: number;

  /**
   * Flag indicating that this track represents a reduced object or group. Based on
   * MIL-STD-2525 symbology definitions.
   */
  reduced?: boolean;

  /**
   * Flag indicating that this track represents a reinforced object or group. Based
   * on MIL-STD-2525 symbology definitions.
   */
  reinforced?: boolean;

  /**
   * Report number received from the reporting source for this track.
   */
  rptNum?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Status of the satellite.
   */
  satStatus?: string;

  /**
   * Track object speed, in km/sec.
   */
  spd?: number;

  /**
   * Flag indicating that this track represents a task force. Based on MIL-STD-2525
   * symbology definitions.
   */
  taskForce?: boolean;

  /**
   * TrackSensor Collection.
   */
  trackSensors?: Array<OrbittrackListResponse.TrackSensor>;

  /**
   * UUID identifying the track, which should remain the same on subsequent tracks of
   * the same object.
   */
  trkId?: string;

  /**
   * The type of vehicle with which the device is associated. Based on MIL-STD-2525
   * symbology definitions.
   */
  vehType?: string;

  /**
   * Source cross-reference code for the command that originated the track report.
   */
  xref?: string;
}

export namespace OrbittrackListResponse {
  /**
   * Schema for Track Sensor data.
   */
  export interface TrackSensor {
    /**
     * The observing sensor azimuth angle, in degrees and topocentric frame.
     */
    az: number;

    /**
     * The track object range from the observing sensor, in kilometers.
     */
    range: number;

    /**
     * Minimum range measurement capability of the sensor, in kilometers.
     */
    minRangeLimit?: number;

    /**
     * The mission number which produced this track observation.
     */
    missionNumber?: string;

    /**
     * The field of view (FOV) type (Butterfly, Cone Angular, Cone Distance, Horizon to
     * Horizon, Unknown) employed by the sensor observing this object.
     */
    sensorFOVType?: 'BUTTERFLY' | 'CONE ANGULAR' | 'CONE DISTANCE' | 'HORIZON TO HORIZON' | 'UNKNOWN';

    /**
     * Unique name of this sensor.
     */
    sensorName?: string;

    /**
     * Number assigned to this sensor. Since there is no authoritative numbering
     * scheme, these numbers sometimes collide across sensors (especially commercial
     * sensors). It is therefore not a unique identifier.
     */
    sensorNumber?: number;
  }
}

export type OrbittrackCountResponse = string;

export interface OrbittrackQueryhelpResponse {
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

export type OrbittrackTupleResponse = Array<OrbittrackTupleResponse.OrbittrackTupleResponseItem>;

export namespace OrbittrackTupleResponse {
  /**
   * Keplerian orbital elements describing an orbit for a particular on-orbit
   * satellite and applicable sensor data aiding in the orbit prediction.
   */
  export interface OrbittrackTupleResponseItem {
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
     * WGS-84 latitude of the track object subpoint, in degrees. -90 to 90 degrees
     * (negative values south of equator).
     */
    lat: number;

    /**
     * WGS-84 longitude of the track object subpoint, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    lon: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Track timestamp in ISO8601 UTC format, with microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Track point altitude relative to WGS-84 ellipsoid, in meters.
     */
    alt?: number;

    /**
     * Free-form remarks entered for the satellite.
     */
    amplification?: string;

    /**
     * The angle formed between the line of sight of the observer and the horizon at
     * track timestamp, in degrees. The angular range is -90 to 90, with negative
     * values representing angle of depression.
     */
    angElev?: number;

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * ELLIPSE:
     *
     * brg - orientation in degrees of the ellipse
     *
     * a1 - semi-major axis in meters
     *
     * a2 - semi-minor axis in meters
     *
     * BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * brg - orientation in degrees of the bearing box
     *
     * a1 - length of bearing box in meters
     *
     * a2 - half-width of bearing box in meters
     *
     * OTHER (All other type values):
     *
     * brg - line of bearing in degrees true
     *
     * a1 - bearing error in degrees
     *
     * a2 - estimated range in meters.
     */
    aouData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouData array and is required if aouData is not
     * null. See the aouData field definition for specific information.
     */
    aouType?: string;

    /**
     * International radio call sign assigned to the track. This is an 8-character
     * alphanumeric code.
     */
    callSign?: string;

    /**
     * One-line Charlie elements set.
     */
    charlieLine?: string;

    /**
     * The cross-reference code of the channel on which this track report was received,
     * if the report came over a comms channel.
     */
    chXRef?: string;

    /**
     * The Area Of Uncertainty (AOU) percentage (0 - 100) containment value. The
     * percentage of time (90%) that the estimated area of uncertainty will cover the
     * true position of the track object.
     */
    cntnmnt?: number;

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

    /**
     * Time the row was created in the database.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database.
     */
    createdBy?: string;

    /**
     * Predicted change in Mean Motion (velocity) in radians/herg^2. herg is a unit of
     * time measure equal to 806.8120769 seconds, and is the orbital period of an
     * imaginary satellite rotating about the Earth at zero altitude.
     */
    decay?: number;

    /**
     * Flag indicating that this track represents a dummy object or group. Identifies
     * offensive or defensive units, equipment and/or installations intended to draw
     * the enemy's attention away from the area of the main attack. Based on
     * MIL-STD-2525 symbology definitions.
     */
    dummy?: boolean;

    /**
     * Flag indicating that this track represents a feint object or group. Identifies
     * offensive or defensive units, equipment and/or installations intended to draw
     * the enemy's attention away from the area of the main attack. Based on
     * MIL-STD-2525 symbology definitions.
     */
    feint?: boolean;

    /**
     * Flag indicating that this track represents a headquarters object. Based on
     * MIL-STD-2525 symbology definitions.
     */
    hq?: boolean;

    /**
     * Unique identifier of the Elset associated with this object.
     */
    idElset?: string;

    /**
     * Additional track object identity/status information, typically used for EXERCISE
     * identity amplification (FAKER, JOKER, KILO, TRAVELLER, ZOMBIE):
     *
     * FAKER: Friendly track, object, or entity acting as an exercise hostile.
     *
     * JOKER: Friendly track, object, or entity acting as an exercise suspect.
     *
     * KILO: Friendly high-value object.
     *
     * TRAVELLER: Suspect land or surface track following a recognized traffic route.
     *
     * ZOMBIE: Suspect track, object, or entity of special interest.
     */
    identAmp?: string;

    /**
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * A text amplifier displaying IFF/SIF/AIS Identification modes and codes.
     */
    iff?: string;

    /**
     * Flag indicating that this track represents an installation. Based on
     * MIL-STD-2525 symbology definitions.
     */
    installation?: boolean;

    /**
     * The on-orbit category assigned to this track object (DEBRIS, MANNED, PAYLOAD,
     * PLATFORM, ROCKET BODY, UNKNOWN).
     */
    objectType?: 'DEBRIS' | 'MANNED' | 'PAYLOAD' | 'PLATFORM' | 'ROCKET BODY' | 'UNKNOWN';

    /**
     * The estimated identity of the track object (ASSUMED FRIEND, FRIEND, HOSTILE,
     * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
     *
     * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
     * behavior, and/or origin.
     *
     * FRIEND: Track object supporting friendly forces and belonging to a declared
     * friendly nation or entity.
     *
     * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
     * deemed to contribute to a threat to friendly forces or their mission due to its
     * behavior, characteristics, nationality, or origin.
     *
     * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
     * origin indicate that it is neither supporting nor opposing friendly forces or
     * their mission.
     *
     * PENDING: Track object which has not been evaluated.
     *
     * SUSPECT: Track object deemed potentially hostile due to the object
     * characteristics, behavior, nationality, and/or origin.
     *
     * UNKNOWN: Track object which has been evaluated and does not meet criteria for
     * any standard identity.
     */
    objIdent?: 'ASSUMED FRIEND' | 'FRIEND' | 'HOSTILE' | 'NEUTRAL' | 'PENDING' | 'SUSPECT' | 'UNKNOWN';

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Shared.OnorbitFull;

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
     * Optional identifier provided by observation source to indicate the target
     * on-orbit object of this track. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Radio frequency of the track, measured in megahertz (MHz).
     */
    rdfRF?: number;

    /**
     * Flag indicating that this track represents a reduced object or group. Based on
     * MIL-STD-2525 symbology definitions.
     */
    reduced?: boolean;

    /**
     * Flag indicating that this track represents a reinforced object or group. Based
     * on MIL-STD-2525 symbology definitions.
     */
    reinforced?: boolean;

    /**
     * Report number received from the reporting source for this track.
     */
    rptNum?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Status of the satellite.
     */
    satStatus?: string;

    /**
     * Track object speed, in km/sec.
     */
    spd?: number;

    /**
     * Flag indicating that this track represents a task force. Based on MIL-STD-2525
     * symbology definitions.
     */
    taskForce?: boolean;

    /**
     * TrackSensor Collection.
     */
    trackSensors?: Array<OrbittrackTupleResponseItem.TrackSensor>;

    /**
     * UUID identifying the track, which should remain the same on subsequent tracks of
     * the same object.
     */
    trkId?: string;

    /**
     * The type of vehicle with which the device is associated. Based on MIL-STD-2525
     * symbology definitions.
     */
    vehType?: string;

    /**
     * Source cross-reference code for the command that originated the track report.
     */
    xref?: string;
  }

  export namespace OrbittrackTupleResponseItem {
    /**
     * Schema for Track Sensor data.
     */
    export interface TrackSensor {
      /**
       * The observing sensor azimuth angle, in degrees and topocentric frame.
       */
      az: number;

      /**
       * The track object range from the observing sensor, in kilometers.
       */
      range: number;

      /**
       * Minimum range measurement capability of the sensor, in kilometers.
       */
      minRangeLimit?: number;

      /**
       * The mission number which produced this track observation.
       */
      missionNumber?: string;

      /**
       * The field of view (FOV) type (Butterfly, Cone Angular, Cone Distance, Horizon to
       * Horizon, Unknown) employed by the sensor observing this object.
       */
      sensorFOVType?: 'BUTTERFLY' | 'CONE ANGULAR' | 'CONE DISTANCE' | 'HORIZON TO HORIZON' | 'UNKNOWN';

      /**
       * Unique name of this sensor.
       */
      sensorName?: string;

      /**
       * Number assigned to this sensor. Since there is no authoritative numbering
       * scheme, these numbers sometimes collide across sensors (especially commercial
       * sensors). It is therefore not a unique identifier.
       */
      sensorNumber?: number;
    }
  }
}

export interface OrbittrackListParams extends OffsetPageParams {
  /**
   * Track timestamp in ISO8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export interface OrbittrackCountParams {
  /**
   * Track timestamp in ISO8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface OrbittrackCreateBulkParams {
  body: Array<OrbittrackCreateBulkParams.Body>;
}

export namespace OrbittrackCreateBulkParams {
  /**
   * Keplerian orbital elements describing an orbit for a particular on-orbit
   * satellite and applicable sensor data aiding in the orbit prediction.
   */
  export interface Body {
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
     * WGS-84 latitude of the track object subpoint, in degrees. -90 to 90 degrees
     * (negative values south of equator).
     */
    lat: number;

    /**
     * WGS-84 longitude of the track object subpoint, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    lon: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Track timestamp in ISO8601 UTC format, with microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Track point altitude relative to WGS-84 ellipsoid, in meters.
     */
    alt?: number;

    /**
     * Free-form remarks entered for the satellite.
     */
    amplification?: string;

    /**
     * The angle formed between the line of sight of the observer and the horizon at
     * track timestamp, in degrees. The angular range is -90 to 90, with negative
     * values representing angle of depression.
     */
    angElev?: number;

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * ELLIPSE:
     *
     * brg - orientation in degrees of the ellipse
     *
     * a1 - semi-major axis in meters
     *
     * a2 - semi-minor axis in meters
     *
     * BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * brg - orientation in degrees of the bearing box
     *
     * a1 - length of bearing box in meters
     *
     * a2 - half-width of bearing box in meters
     *
     * OTHER (All other type values):
     *
     * brg - line of bearing in degrees true
     *
     * a1 - bearing error in degrees
     *
     * a2 - estimated range in meters.
     */
    aouData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouData array and is required if aouData is not
     * null. See the aouData field definition for specific information.
     */
    aouType?: string;

    /**
     * International radio call sign assigned to the track. This is an 8-character
     * alphanumeric code.
     */
    callSign?: string;

    /**
     * One-line Charlie elements set.
     */
    charlieLine?: string;

    /**
     * The cross-reference code of the channel on which this track report was received,
     * if the report came over a comms channel.
     */
    chXRef?: string;

    /**
     * The Area Of Uncertainty (AOU) percentage (0 - 100) containment value. The
     * percentage of time (90%) that the estimated area of uncertainty will cover the
     * true position of the track object.
     */
    cntnmnt?: number;

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

    /**
     * Predicted change in Mean Motion (velocity) in radians/herg^2. herg is a unit of
     * time measure equal to 806.8120769 seconds, and is the orbital period of an
     * imaginary satellite rotating about the Earth at zero altitude.
     */
    decay?: number;

    /**
     * Flag indicating that this track represents a dummy object or group. Identifies
     * offensive or defensive units, equipment and/or installations intended to draw
     * the enemy's attention away from the area of the main attack. Based on
     * MIL-STD-2525 symbology definitions.
     */
    dummy?: boolean;

    /**
     * Flag indicating that this track represents a feint object or group. Identifies
     * offensive or defensive units, equipment and/or installations intended to draw
     * the enemy's attention away from the area of the main attack. Based on
     * MIL-STD-2525 symbology definitions.
     */
    feint?: boolean;

    /**
     * Flag indicating that this track represents a headquarters object. Based on
     * MIL-STD-2525 symbology definitions.
     */
    hq?: boolean;

    /**
     * Unique identifier of the Elset associated with this object.
     */
    idElset?: string;

    /**
     * Additional track object identity/status information, typically used for EXERCISE
     * identity amplification (FAKER, JOKER, KILO, TRAVELLER, ZOMBIE):
     *
     * FAKER: Friendly track, object, or entity acting as an exercise hostile.
     *
     * JOKER: Friendly track, object, or entity acting as an exercise suspect.
     *
     * KILO: Friendly high-value object.
     *
     * TRAVELLER: Suspect land or surface track following a recognized traffic route.
     *
     * ZOMBIE: Suspect track, object, or entity of special interest.
     */
    identAmp?: string;

    /**
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * A text amplifier displaying IFF/SIF/AIS Identification modes and codes.
     */
    iff?: string;

    /**
     * Flag indicating that this track represents an installation. Based on
     * MIL-STD-2525 symbology definitions.
     */
    installation?: boolean;

    /**
     * The on-orbit category assigned to this track object (DEBRIS, MANNED, PAYLOAD,
     * PLATFORM, ROCKET BODY, UNKNOWN).
     */
    objectType?: 'DEBRIS' | 'MANNED' | 'PAYLOAD' | 'PLATFORM' | 'ROCKET BODY' | 'UNKNOWN';

    /**
     * The estimated identity of the track object (ASSUMED FRIEND, FRIEND, HOSTILE,
     * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
     *
     * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
     * behavior, and/or origin.
     *
     * FRIEND: Track object supporting friendly forces and belonging to a declared
     * friendly nation or entity.
     *
     * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
     * deemed to contribute to a threat to friendly forces or their mission due to its
     * behavior, characteristics, nationality, or origin.
     *
     * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
     * origin indicate that it is neither supporting nor opposing friendly forces or
     * their mission.
     *
     * PENDING: Track object which has not been evaluated.
     *
     * SUSPECT: Track object deemed potentially hostile due to the object
     * characteristics, behavior, nationality, and/or origin.
     *
     * UNKNOWN: Track object which has been evaluated and does not meet criteria for
     * any standard identity.
     */
    objIdent?: 'ASSUMED FRIEND' | 'FRIEND' | 'HOSTILE' | 'NEUTRAL' | 'PENDING' | 'SUSPECT' | 'UNKNOWN';

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by observation source to indicate the target
     * on-orbit object of this track. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Radio frequency of the track, measured in megahertz (MHz).
     */
    rdfRF?: number;

    /**
     * Flag indicating that this track represents a reduced object or group. Based on
     * MIL-STD-2525 symbology definitions.
     */
    reduced?: boolean;

    /**
     * Flag indicating that this track represents a reinforced object or group. Based
     * on MIL-STD-2525 symbology definitions.
     */
    reinforced?: boolean;

    /**
     * Report number received from the reporting source for this track.
     */
    rptNum?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Status of the satellite.
     */
    satStatus?: string;

    /**
     * Track object speed, in km/sec.
     */
    spd?: number;

    /**
     * Flag indicating that this track represents a task force. Based on MIL-STD-2525
     * symbology definitions.
     */
    taskForce?: boolean;

    /**
     * TrackSensor Collection.
     */
    trackSensors?: Array<Body.TrackSensor>;

    /**
     * UUID identifying the track, which should remain the same on subsequent tracks of
     * the same object.
     */
    trkId?: string;

    /**
     * The type of vehicle with which the device is associated. Based on MIL-STD-2525
     * symbology definitions.
     */
    vehType?: string;

    /**
     * Source cross-reference code for the command that originated the track report.
     */
    xref?: string;
  }

  export namespace Body {
    /**
     * Schema for Track Sensor data.
     */
    export interface TrackSensor {
      /**
       * The observing sensor azimuth angle, in degrees and topocentric frame.
       */
      az: number;

      /**
       * The track object range from the observing sensor, in kilometers.
       */
      range: number;

      /**
       * Minimum range measurement capability of the sensor, in kilometers.
       */
      minRangeLimit?: number;

      /**
       * The mission number which produced this track observation.
       */
      missionNumber?: string;

      /**
       * The field of view (FOV) type (Butterfly, Cone Angular, Cone Distance, Horizon to
       * Horizon, Unknown) employed by the sensor observing this object.
       */
      sensorFOVType?: 'BUTTERFLY' | 'CONE ANGULAR' | 'CONE DISTANCE' | 'HORIZON TO HORIZON' | 'UNKNOWN';

      /**
       * Unique name of this sensor.
       */
      sensorName?: string;

      /**
       * Number assigned to this sensor. Since there is no authoritative numbering
       * scheme, these numbers sometimes collide across sensors (especially commercial
       * sensors). It is therefore not a unique identifier.
       */
      sensorNumber?: number;
    }
  }
}

export interface OrbittrackTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Track timestamp in ISO8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface OrbittrackUnvalidatedPublishParams {
  body: Array<OrbittrackUnvalidatedPublishParams.Body>;
}

export namespace OrbittrackUnvalidatedPublishParams {
  /**
   * Keplerian orbital elements describing an orbit for a particular on-orbit
   * satellite and applicable sensor data aiding in the orbit prediction.
   */
  export interface Body {
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
     * WGS-84 latitude of the track object subpoint, in degrees. -90 to 90 degrees
     * (negative values south of equator).
     */
    lat: number;

    /**
     * WGS-84 longitude of the track object subpoint, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    lon: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Track timestamp in ISO8601 UTC format, with microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Track point altitude relative to WGS-84 ellipsoid, in meters.
     */
    alt?: number;

    /**
     * Free-form remarks entered for the satellite.
     */
    amplification?: string;

    /**
     * The angle formed between the line of sight of the observer and the horizon at
     * track timestamp, in degrees. The angular range is -90 to 90, with negative
     * values representing angle of depression.
     */
    angElev?: number;

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * ELLIPSE:
     *
     * brg - orientation in degrees of the ellipse
     *
     * a1 - semi-major axis in meters
     *
     * a2 - semi-minor axis in meters
     *
     * BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * brg - orientation in degrees of the bearing box
     *
     * a1 - length of bearing box in meters
     *
     * a2 - half-width of bearing box in meters
     *
     * OTHER (All other type values):
     *
     * brg - line of bearing in degrees true
     *
     * a1 - bearing error in degrees
     *
     * a2 - estimated range in meters.
     */
    aouData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouData array and is required if aouData is not
     * null. See the aouData field definition for specific information.
     */
    aouType?: string;

    /**
     * International radio call sign assigned to the track. This is an 8-character
     * alphanumeric code.
     */
    callSign?: string;

    /**
     * One-line Charlie elements set.
     */
    charlieLine?: string;

    /**
     * The cross-reference code of the channel on which this track report was received,
     * if the report came over a comms channel.
     */
    chXRef?: string;

    /**
     * The Area Of Uncertainty (AOU) percentage (0 - 100) containment value. The
     * percentage of time (90%) that the estimated area of uncertainty will cover the
     * true position of the track object.
     */
    cntnmnt?: number;

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

    /**
     * Predicted change in Mean Motion (velocity) in radians/herg^2. herg is a unit of
     * time measure equal to 806.8120769 seconds, and is the orbital period of an
     * imaginary satellite rotating about the Earth at zero altitude.
     */
    decay?: number;

    /**
     * Flag indicating that this track represents a dummy object or group. Identifies
     * offensive or defensive units, equipment and/or installations intended to draw
     * the enemy's attention away from the area of the main attack. Based on
     * MIL-STD-2525 symbology definitions.
     */
    dummy?: boolean;

    /**
     * Flag indicating that this track represents a feint object or group. Identifies
     * offensive or defensive units, equipment and/or installations intended to draw
     * the enemy's attention away from the area of the main attack. Based on
     * MIL-STD-2525 symbology definitions.
     */
    feint?: boolean;

    /**
     * Flag indicating that this track represents a headquarters object. Based on
     * MIL-STD-2525 symbology definitions.
     */
    hq?: boolean;

    /**
     * Unique identifier of the Elset associated with this object.
     */
    idElset?: string;

    /**
     * Additional track object identity/status information, typically used for EXERCISE
     * identity amplification (FAKER, JOKER, KILO, TRAVELLER, ZOMBIE):
     *
     * FAKER: Friendly track, object, or entity acting as an exercise hostile.
     *
     * JOKER: Friendly track, object, or entity acting as an exercise suspect.
     *
     * KILO: Friendly high-value object.
     *
     * TRAVELLER: Suspect land or surface track following a recognized traffic route.
     *
     * ZOMBIE: Suspect track, object, or entity of special interest.
     */
    identAmp?: string;

    /**
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * A text amplifier displaying IFF/SIF/AIS Identification modes and codes.
     */
    iff?: string;

    /**
     * Flag indicating that this track represents an installation. Based on
     * MIL-STD-2525 symbology definitions.
     */
    installation?: boolean;

    /**
     * The on-orbit category assigned to this track object (DEBRIS, MANNED, PAYLOAD,
     * PLATFORM, ROCKET BODY, UNKNOWN).
     */
    objectType?: 'DEBRIS' | 'MANNED' | 'PAYLOAD' | 'PLATFORM' | 'ROCKET BODY' | 'UNKNOWN';

    /**
     * The estimated identity of the track object (ASSUMED FRIEND, FRIEND, HOSTILE,
     * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
     *
     * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
     * behavior, and/or origin.
     *
     * FRIEND: Track object supporting friendly forces and belonging to a declared
     * friendly nation or entity.
     *
     * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
     * deemed to contribute to a threat to friendly forces or their mission due to its
     * behavior, characteristics, nationality, or origin.
     *
     * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
     * origin indicate that it is neither supporting nor opposing friendly forces or
     * their mission.
     *
     * PENDING: Track object which has not been evaluated.
     *
     * SUSPECT: Track object deemed potentially hostile due to the object
     * characteristics, behavior, nationality, and/or origin.
     *
     * UNKNOWN: Track object which has been evaluated and does not meet criteria for
     * any standard identity.
     */
    objIdent?: 'ASSUMED FRIEND' | 'FRIEND' | 'HOSTILE' | 'NEUTRAL' | 'PENDING' | 'SUSPECT' | 'UNKNOWN';

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by observation source to indicate the target
     * on-orbit object of this track. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Radio frequency of the track, measured in megahertz (MHz).
     */
    rdfRF?: number;

    /**
     * Flag indicating that this track represents a reduced object or group. Based on
     * MIL-STD-2525 symbology definitions.
     */
    reduced?: boolean;

    /**
     * Flag indicating that this track represents a reinforced object or group. Based
     * on MIL-STD-2525 symbology definitions.
     */
    reinforced?: boolean;

    /**
     * Report number received from the reporting source for this track.
     */
    rptNum?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Status of the satellite.
     */
    satStatus?: string;

    /**
     * Track object speed, in km/sec.
     */
    spd?: number;

    /**
     * Flag indicating that this track represents a task force. Based on MIL-STD-2525
     * symbology definitions.
     */
    taskForce?: boolean;

    /**
     * TrackSensor Collection.
     */
    trackSensors?: Array<Body.TrackSensor>;

    /**
     * UUID identifying the track, which should remain the same on subsequent tracks of
     * the same object.
     */
    trkId?: string;

    /**
     * The type of vehicle with which the device is associated. Based on MIL-STD-2525
     * symbology definitions.
     */
    vehType?: string;

    /**
     * Source cross-reference code for the command that originated the track report.
     */
    xref?: string;
  }

  export namespace Body {
    /**
     * Schema for Track Sensor data.
     */
    export interface TrackSensor {
      /**
       * The observing sensor azimuth angle, in degrees and topocentric frame.
       */
      az: number;

      /**
       * The track object range from the observing sensor, in kilometers.
       */
      range: number;

      /**
       * Minimum range measurement capability of the sensor, in kilometers.
       */
      minRangeLimit?: number;

      /**
       * The mission number which produced this track observation.
       */
      missionNumber?: string;

      /**
       * The field of view (FOV) type (Butterfly, Cone Angular, Cone Distance, Horizon to
       * Horizon, Unknown) employed by the sensor observing this object.
       */
      sensorFOVType?: 'BUTTERFLY' | 'CONE ANGULAR' | 'CONE DISTANCE' | 'HORIZON TO HORIZON' | 'UNKNOWN';

      /**
       * Unique name of this sensor.
       */
      sensorName?: string;

      /**
       * Number assigned to this sensor. Since there is no authoritative numbering
       * scheme, these numbers sometimes collide across sensors (especially commercial
       * sensors). It is therefore not a unique identifier.
       */
      sensorNumber?: number;
    }
  }
}

Orbittrack.History = History;

export declare namespace Orbittrack {
  export {
    type OrbittrackListResponse as OrbittrackListResponse,
    type OrbittrackCountResponse as OrbittrackCountResponse,
    type OrbittrackQueryhelpResponse as OrbittrackQueryhelpResponse,
    type OrbittrackTupleResponse as OrbittrackTupleResponse,
    type OrbittrackListResponsesOffsetPage as OrbittrackListResponsesOffsetPage,
    type OrbittrackListParams as OrbittrackListParams,
    type OrbittrackCountParams as OrbittrackCountParams,
    type OrbittrackCreateBulkParams as OrbittrackCreateBulkParams,
    type OrbittrackTupleParams as OrbittrackTupleParams,
    type OrbittrackUnvalidatedPublishParams as OrbittrackUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
