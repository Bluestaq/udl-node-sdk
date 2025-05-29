// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  WeatherReportFull,
  WeatherReportFullsOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WeatherReport extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single WeatherReport as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.weatherReport.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   lat: 56.12,
   *   lon: -156.6,
   *   obTime: '2018-01-01T16:00:00.123456Z',
   *   reportType: 'FORECAST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: WeatherReportCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/weatherreport', {
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
   * for await (const weatherReportListResponse of client.weatherReport.list(
   *   { obTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WeatherReportListParams,
    options?: RequestOptions,
  ): PagePromise<WeatherReportListResponsesOffsetPage, WeatherReportListResponse> {
    return this._client.getAPIList('/udl/weatherreport', OffsetPage<WeatherReportListResponse>, {
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
   *
   * @example
   * ```ts
   * const response = await client.weatherReport.count({
   *   obTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: WeatherReportCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/weatherreport/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single WeatherReport by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const weatherReportFull = await client.weatherReport.get(
   *   'id',
   * );
   * ```
   */
  get(
    id: string,
    query: WeatherReportGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryAPI.WeatherReportFull> {
    return this._client.get(path`/udl/weatherreport/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.weatherReport.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<WeatherReportQueryhelpResponse> {
    return this._client.get('/udl/weatherreport/queryhelp', options);
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
   * const weatherReportFulls = await client.weatherReport.tuple(
   *   {
   *     columns: 'columns',
   *     obTime: '2019-12-27T18:11:19.117Z',
   *   },
   * );
   * ```
   */
  tuple(query: WeatherReportTupleParams, options?: RequestOptions): APIPromise<WeatherReportTupleResponse> {
    return this._client.get('/udl/weatherreport/tuple', { query, ...options });
  }

  /**
   * Service operation to take a list of WeatherReports as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.weatherReport.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       lat: 56.12,
   *       lon: -156.6,
   *       obTime: '2018-01-01T16:00:00.123456Z',
   *       reportType: 'FORECAST',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: WeatherReportUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-weatherreport', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type WeatherReportListResponsesOffsetPage = OffsetPage<WeatherReportListResponse>;

/**
 * These services provide for posting and querying Weather Over Target information.
 * The information contained within describes the current weather conditions over a
 * target area or region to include navigational considerations such as altimeter
 * settings, visibility, cloud heights etc.
 */
export interface WeatherReportListResponse {
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
   * The central WGS-84 latitude of the weather report, in degrees. -90 to 90 degrees
   * (negative values south of equator).
   */
  lat: number;

  /**
   * The central WGS-84 longitude of the weather report, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  lon: number;

  /**
   * Datetime when a weather observation was made or forecast was issued in ISO 8601
   * UTC datetime format with microsecond precision.
   */
  obTime: string;

  /**
   * Identifies the type of weather report (e.g. OBSERVATION, FORECAST, etc.).
   */
  reportType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Describes the actual weather at position. Intended as, but not constrained to,
   * MIL-STD-6016 actual weather (e.g. NO STATEMENT, NO SIGNIFICANT WEATHER, DRIZZLE,
   * RAIN, SNOW, SNOW GRAINS, DIAMOND DUST, ICE PELLETS, HAIL, SMALL HAIL, MIST, FOG,
   * SMOKE, VOLCANIC ASH, WIDESPREAD DUST, SAND, HAZE, WELL DEVELOPED DUST, SQUALLS,
   * FUNNEL CLOUDS, SANDSTORM, DUSTSTORM, LOW CLOUDS, CLOUDY, GROUND FOG, DUST, HEAVY
   * RAIN, THUNDERSTORMS AWT, HEAVY THUNDERSTORMS, HURRICANE TYPHOON CYCLONE,
   * TROPICAL STORM, TORNADO, HIGH WINDS, LIGHTNING, FREEZING DRIZZLE, FREEZING RAIN,
   * HEAVY SNOW, ICING, SNOW OR RAIN AND SNOW MIXED, SHOWERS, CLEAR).
   */
  actWeather?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * Point height above ellipsoid (WGS-84), in meters.
   */
  alt?: number;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Geographical spatial_ref_sys for region.
   */
  asrid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a POST or PUT request that also specifies a valid 'area' field.
   */
  atext?: string;

  /**
   * Type of region as projected on the ground.
   */
  atype?: string;

  /**
   * The measurement of air pressure in the atmosphere in kilopascals.
   */
  barPress?: number;

  /**
   * Flag indicating detection of a cloud-to-cloud lightning event.
   */
  ccEvent?: boolean;

  /**
   * Array of cloud cover descriptions - each element can be maximum of 16 characters
   * long. Intended as, but not constrained to, MIL-STD-6016 cloud cover designations
   * (e.g. SKY CLEAR, SCATTERED, BROKEN, OVERCAST, SKY OBSCURED). Each element of the
   * array corresponds to the elements in the cloudHght array specified respectively.
   */
  cloudCover?: Array<string>;

  /**
   * Array of cloud base heights in meters described by the cloudHght array. Each
   * element of the array corresponds to the elements in the cloudCover array
   * specified respectively.
   */
  cloudHght?: Array<number>;

  /**
   * Reports the lowest altitude at which contrails are occurring, in meters.
   */
  contrailHghtLower?: number;

  /**
   * Reports the highest altitude at which contrails are occurring, in meters.
   */
  contrailHghtUpper?: number;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Specific pressures or heights where measurements are taken, labeled as either
   * MANDATORY or SIGNIFICANT levels. Mandatory levels are at particular pressures at
   * geopotential heights. Significant levels are at particular geometric heights.
   */
  dataLevel?: string;

  /**
   * The temperature at which air is saturated with water vapor, in degrees C.
   */
  dewPoint?: number;

  /**
   * The amount of radiation that reaches earth's surface after being scattered by
   * the atmosphere, in Watts per square meter.
   */
  difRad?: number;

  /**
   * The difference in wind direction recorded over a period of time, in degrees.
   */
  dirDev?: number;

  /**
   * Describes the flight conditions in route to the target (NO STATEMENT, MAINLY
   * IFR, MAINLY VFR, THUNDERSTORMS).
   *
   * MAINLY IFR:&nbsp;&nbsp;Predominantly Instrument Flight Rules.
   *
   * MAINLY VFR:&nbsp;&nbsp;Predominantly Visual Flight Rules.
   *
   * THUNDERSTORMS:&nbsp;&nbsp;Thunderstorms expected in route.
   */
  enRouteWeather?: string;

  /**
   * Optional observation or forecast ID from external systems. This field has no
   * meaning within UDL and is provided as a convenience for systems that require
   * tracking of an internal system generated ID.
   */
  externalId?: string;

  /**
   * Optional location ID from external systems. This field has no meaning within UDL
   * and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalLocationId?: string;

  /**
   * Valid end time of a weather forecast in ISO 8601 UTC datetime format with
   * millisecond precision.
   */
  forecastEndTime?: string;

  /**
   * Valid start time of a weather forecast in ISO 8601 UTC datetime format with
   * millisecond precision.
   */
  forecastStartTime?: string;

  /**
   * Altitude of a pressure surface in the atmosphere above mean sea level, in
   * meters.
   */
  geoPotentialAlt?: number;

  /**
   * The change in wind speed between two different lateral positions at a given
   * altitude divided by the horizontal distance between them, in units of 1/sec.
   */
  hshear?: number;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield
   * associated with this weather report.
   */
  icao?: string;

  /**
   * Reports the lowest altitude at which icing or freezing rain is occurring, in
   * meters.
   */
  icingLowerLimit?: number;

  /**
   * Reports the highest altitude at which icing or freezing rain is occurring, in
   * meters.
   */
  icingUpperLimit?: number;

  /**
   * Identifier of the Airfield associated with this weather report.
   */
  idAirfield?: string;

  /**
   * Identifier of the ground imagery associated for this weather over target report.
   */
  idGroundImagery?: string;

  /**
   * Unique identifier of the sensor making the weather measurement.
   */
  idSensor?: string;

  /**
   * Identifier of the Site that is associated with this weather report.
   */
  idSite?: string;

  /**
   * An indication of how much the atmosphere refracts light.
   */
  indexRefraction?: number;

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
   * Optional identifier provided by the record source. This may be an internal
   * identifier and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * The speed at which water is being applied to a specific area in millimeters per
   * hour.
   */
  precipRate?: number;

  /**
   * Altimeter set to read zero at mean sea level in kilopascals.
   */
  qnh?: number;

  /**
   * Average radial velocity of wind as measured by radar with multi-beam
   * configurations. Radial velocity is the component of wind velocity moving
   * directly toward or away from a sensor's radar beam, in meters per second. Values
   * can either be positive (wind is moving away from the radar) or negative (wind is
   * moving toward the radar).
   */
  radVel?: number;

  /**
   * Component of wind velocity moving directly toward or away from radar beam 1, in
   * meters per second. Radial velocity values can either be positive (wind is moving
   * away from the radar) or negative (wind is moving toward the radar). The beam
   * number designation is defined by the data source.
   */
  radVelBeam1?: number;

  /**
   * Component of wind velocity moving directly toward or away from radar beam 2, in
   * meters per second. Radial velocity values can either be positive (wind is moving
   * away from the radar) or negative (wind is moving toward the radar). The beam
   * number designation is defined by the data source.
   */
  radVelBeam2?: number;

  /**
   * Component of wind velocity moving directly toward or away from radar beam 3, in
   * meters per second. Radial velocity values can either be positive (wind is moving
   * away from the radar) or negative (wind is moving toward the radar). The beam
   * number designation is defined by the data source.
   */
  radVelBeam3?: number;

  /**
   * Component of wind velocity moving directly toward or away from radar beam 4, in
   * meters per second. Radial velocity values can either be positive (wind is moving
   * away from the radar) or negative (wind is moving toward the radar). The beam
   * number designation is defined by the data source.
   */
  radVelBeam4?: number;

  /**
   * Component of wind velocity moving directly toward or away from radar beam 5, in
   * meters per second. Radial velocity values can either be positive (wind is moving
   * away from the radar) or negative (wind is moving toward the radar). The beam
   * number designation is defined by the data source.
   */
  radVelBeam5?: number;

  /**
   * The amount of rain that has fallen in the past hour, in centimeters.
   */
  rainHour?: number;

  /**
   * The Raw Meteorological Aerodrome Report (METAR) string.
   */
  rawMETAR?: string;

  /**
   * Terminal Aerodrome Forecast (TAF) containing detailed weather predictions for a
   * specific airport or aerodrome.
   */
  rawTAF?: string;

  /**
   * The amount of radiation that changes direction as a function of atmospheric
   * density, in Watts per square meter.
   */
  refRad?: number;

  /**
   * The percentage of water vapor in the atmosphere.
   */
  relHumidity?: number;

  /**
   * Sensor altitude at obTime in km. This includes pilot reports or other means of
   * weather observation.
   */
  senalt?: number;

  /**
   * Sensor WGS84 latitude at obTime in degrees. -90 to 90 degrees (negative values
   * south of equator). This includes pilot reports or other means of weather
   * observation.
   */
  senlat?: number;

  /**
   * Sensor WGS84 longitude at obTime in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian). This includes pilot reports or other means of
   * weather observation.
   */
  senlon?: number;

  /**
   * The volumetric percentage of soil water contained in a given volume of soil.
   */
  soilMoisture?: number;

  /**
   * The measurement of soil temperature in degrees C.
   */
  soilTemp?: number;

  /**
   * The power per unit area received from the Sun in the form of electromagnetic
   * radiation as measured in the wavelength range of the measuring instrument. The
   * solar irradiance is measured in watt per square meter (W/m2).
   */
  solarRad?: number;

  /**
   * Array of UUID(s) of the UDL data record(s) that are related to this
   * WeatherReport record. See the associated 'srcTyps' array for the specific types
   * of data, positionally corresponding to the UUIDs in this array. The 'srcTyps'
   * and 'srcIds' arrays must match in size. See the corresponding srcTyps array
   * element for the data type of the UUID and use the appropriate API operation to
   * retrieve that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (SENSOR, WEATHERDATA) that are related to this
   * WeatherReport record. See the associated 'srcIds' array for the record UUIDs,
   * positionally corresponding to the record types in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Describes in which direction (if any) that better weather conditions exist.
   * Intended as, but not constrained to, MIL-STD-6016 surrounding weather
   * designations (e.g. NO STATEMENT, BETTER TO NORTH, BETTER TO EAST, BETTER TO
   * SOUTH, BETTER TO WEST).
   */
  surroundingWeather?: string;

  /**
   * The measurement of air temperature in degrees C.
   */
  temperature?: number;

  /**
   * Visual distance in meters.
   */
  visibility?: number;

  /**
   * The change in wind speed between two different altitudes divided by the vertical
   * distance between them, in units of 1/sec.
   */
  vshear?: number;

  /**
   * Amplifies the actual weather being reported. Intended as, but not constrained
   * to, MIL-STD-6016 weather amplification designations (e.g. NO STATEMENT, NO
   * SCATTERED BROKEN MEDIUM CLOUD, SCATTERED BROKEN MEDIUM CLOUDS, GUSTY WINDS AT
   * SERVICE, FOG IN VALLEYS, HIGHER TERRAIN OBSCURED, SURFACE CONDITIONS VARIABLE,
   * SURFACE WIND NE, SURFACE WIND SE, SURFACE WIND SW, SURFACE WIND NW, PRESENCE OF
   * CUMULONIMBUS).
   */
  weatherAmp?: string;

  /**
   * Used in conjunction with actWeather and weatherInt. Intended as, but not
   * constrained to, MIL-STD-6016 actual weather descriptor (e.g. NO STATEMENT,
   * SHALLOW, PATCHES, LOW DRIFTING, BLOWING, SHOWERS, THUNDERSTORMS, SUPERCOOLED).
   */
  weatherDesc?: string;

  /**
   * Identifier of the weather over target, which should remain the same on
   * subsequent Weather Over Target records.
   */
  weatherId?: string;

  /**
   * Weather Intensity. Used in conjunction with actWeather and weatherDesc. Intended
   * as, but not constrained to, MIL-STD-6016 weather intensity (e.g. NO STATEMENT,
   * LIGHT, MODERATE, HEAVY, IN VICINITY).
   */
  weatherInt?: string;

  /**
   * The perceived temperature in degrees C.
   */
  windChill?: number;

  /**
   * Covariance matrix, in knots and second based units. The array values represent
   * the lower triangular half of the covariance matrix. The size of the covariance
   * matrix is 2x2. The covariance elements are position dependent within the array
   * with values ordered as follows:
   *
   * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y
   *
   * x&nbsp;&nbsp;&nbsp;&nbsp;1
   *
   * y&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;3
   *
   * The cov array should contain only the lower left triangle values from top left
   * down to bottom right, in order.
   */
  windCov?: Array<number>;

  /**
   * Direction the wind is blowing, in degrees clockwise from true north.
   */
  windDir?: number;

  /**
   * Average wind direction over a 1 minute period, in degrees clockwise from true
   * north.
   */
  windDirAvg?: number;

  /**
   * Wind direction corresponding to the peak wind speed during a 1 minute period, in
   * degrees clockwise from true north.
   */
  windDirPeak?: number;

  /**
   * Wind direction corresponding to the peak wind speed during a 10 minute period,
   * in degrees clockwise from true north.
   */
  windDirPeak10?: number;

  /**
   * Expresses the max gust speed of the wind, in meters/second.
   */
  windGust?: number;

  /**
   * Expresses the max gust speed of the wind recorded in a 10 minute period, in
   * meters/second.
   */
  windGust10?: number;

  /**
   * Expresses the speed of the wind in meters/second.
   */
  windSpd?: number;

  /**
   * Average wind speed over a 1 minute period, in meters/second.
   */
  windSpdAvg?: number;

  /**
   * Boolean describing whether or not the wind direction and/or speed is variable.
   */
  windVar?: boolean;
}

export type WeatherReportCountResponse = string;

export interface WeatherReportQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<WeatherReportQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace WeatherReportQueryhelpResponse {
  export interface Parameter {
    classificationMarking?: string;

    derived?: boolean;

    description?: string;

    elemMatch?: boolean;

    format?: string;

    histQuerySupported?: boolean;

    histTupleSupported?: boolean;

    name?: string;

    required?: boolean;

    restQuerySupported?: boolean;

    restTupleSupported?: boolean;

    type?: string;

    unitOfMeasure?: string;

    utcDate?: boolean;
  }
}

export type WeatherReportTupleResponse = Array<HistoryAPI.WeatherReportFull>;

export interface WeatherReportCreateParams {
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
   * The central WGS-84 latitude of the weather report, in degrees. -90 to 90 degrees
   * (negative values south of equator).
   */
  lat: number;

  /**
   * The central WGS-84 longitude of the weather report, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  lon: number;

  /**
   * Datetime when a weather observation was made or forecast was issued in ISO 8601
   * UTC datetime format with microsecond precision.
   */
  obTime: string;

  /**
   * Identifies the type of weather report (e.g. OBSERVATION, FORECAST, etc.).
   */
  reportType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Describes the actual weather at position. Intended as, but not constrained to,
   * MIL-STD-6016 actual weather (e.g. NO STATEMENT, NO SIGNIFICANT WEATHER, DRIZZLE,
   * RAIN, SNOW, SNOW GRAINS, DIAMOND DUST, ICE PELLETS, HAIL, SMALL HAIL, MIST, FOG,
   * SMOKE, VOLCANIC ASH, WIDESPREAD DUST, SAND, HAZE, WELL DEVELOPED DUST, SQUALLS,
   * FUNNEL CLOUDS, SANDSTORM, DUSTSTORM, LOW CLOUDS, CLOUDY, GROUND FOG, DUST, HEAVY
   * RAIN, THUNDERSTORMS AWT, HEAVY THUNDERSTORMS, HURRICANE TYPHOON CYCLONE,
   * TROPICAL STORM, TORNADO, HIGH WINDS, LIGHTNING, FREEZING DRIZZLE, FREEZING RAIN,
   * HEAVY SNOW, ICING, SNOW OR RAIN AND SNOW MIXED, SHOWERS, CLEAR).
   */
  actWeather?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * Point height above ellipsoid (WGS-84), in meters.
   */
  alt?: number;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
   * the point of interest as projected on the ground.
   */
  area?: string;

  /**
   * Geographical spatial_ref_sys for region.
   */
  asrid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a POST or PUT request that also specifies a valid 'area' field.
   */
  atext?: string;

  /**
   * Type of region as projected on the ground.
   */
  atype?: string;

  /**
   * The measurement of air pressure in the atmosphere in kilopascals.
   */
  barPress?: number;

  /**
   * Flag indicating detection of a cloud-to-cloud lightning event.
   */
  ccEvent?: boolean;

  /**
   * Array of cloud cover descriptions - each element can be maximum of 16 characters
   * long. Intended as, but not constrained to, MIL-STD-6016 cloud cover designations
   * (e.g. SKY CLEAR, SCATTERED, BROKEN, OVERCAST, SKY OBSCURED). Each element of the
   * array corresponds to the elements in the cloudHght array specified respectively.
   */
  cloudCover?: Array<string>;

  /**
   * Array of cloud base heights in meters described by the cloudHght array. Each
   * element of the array corresponds to the elements in the cloudCover array
   * specified respectively.
   */
  cloudHght?: Array<number>;

  /**
   * Reports the lowest altitude at which contrails are occurring, in meters.
   */
  contrailHghtLower?: number;

  /**
   * Reports the highest altitude at which contrails are occurring, in meters.
   */
  contrailHghtUpper?: number;

  /**
   * Specific pressures or heights where measurements are taken, labeled as either
   * MANDATORY or SIGNIFICANT levels. Mandatory levels are at particular pressures at
   * geopotential heights. Significant levels are at particular geometric heights.
   */
  dataLevel?: string;

  /**
   * The temperature at which air is saturated with water vapor, in degrees C.
   */
  dewPoint?: number;

  /**
   * The amount of radiation that reaches earth's surface after being scattered by
   * the atmosphere, in Watts per square meter.
   */
  difRad?: number;

  /**
   * The difference in wind direction recorded over a period of time, in degrees.
   */
  dirDev?: number;

  /**
   * Describes the flight conditions in route to the target (NO STATEMENT, MAINLY
   * IFR, MAINLY VFR, THUNDERSTORMS).
   *
   * MAINLY IFR:&nbsp;&nbsp;Predominantly Instrument Flight Rules.
   *
   * MAINLY VFR:&nbsp;&nbsp;Predominantly Visual Flight Rules.
   *
   * THUNDERSTORMS:&nbsp;&nbsp;Thunderstorms expected in route.
   */
  enRouteWeather?: string;

  /**
   * Optional observation or forecast ID from external systems. This field has no
   * meaning within UDL and is provided as a convenience for systems that require
   * tracking of an internal system generated ID.
   */
  externalId?: string;

  /**
   * Optional location ID from external systems. This field has no meaning within UDL
   * and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalLocationId?: string;

  /**
   * Valid end time of a weather forecast in ISO 8601 UTC datetime format with
   * millisecond precision.
   */
  forecastEndTime?: string;

  /**
   * Valid start time of a weather forecast in ISO 8601 UTC datetime format with
   * millisecond precision.
   */
  forecastStartTime?: string;

  /**
   * Altitude of a pressure surface in the atmosphere above mean sea level, in
   * meters.
   */
  geoPotentialAlt?: number;

  /**
   * The change in wind speed between two different lateral positions at a given
   * altitude divided by the horizontal distance between them, in units of 1/sec.
   */
  hshear?: number;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield
   * associated with this weather report.
   */
  icao?: string;

  /**
   * Reports the lowest altitude at which icing or freezing rain is occurring, in
   * meters.
   */
  icingLowerLimit?: number;

  /**
   * Reports the highest altitude at which icing or freezing rain is occurring, in
   * meters.
   */
  icingUpperLimit?: number;

  /**
   * Identifier of the Airfield associated with this weather report.
   */
  idAirfield?: string;

  /**
   * Identifier of the ground imagery associated for this weather over target report.
   */
  idGroundImagery?: string;

  /**
   * Unique identifier of the sensor making the weather measurement.
   */
  idSensor?: string;

  /**
   * Identifier of the Site that is associated with this weather report.
   */
  idSite?: string;

  /**
   * An indication of how much the atmosphere refracts light.
   */
  indexRefraction?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the record source. This may be an internal
   * identifier and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * The speed at which water is being applied to a specific area in millimeters per
   * hour.
   */
  precipRate?: number;

  /**
   * Altimeter set to read zero at mean sea level in kilopascals.
   */
  qnh?: number;

  /**
   * Average radial velocity of wind as measured by radar with multi-beam
   * configurations. Radial velocity is the component of wind velocity moving
   * directly toward or away from a sensor's radar beam, in meters per second. Values
   * can either be positive (wind is moving away from the radar) or negative (wind is
   * moving toward the radar).
   */
  radVel?: number;

  /**
   * Component of wind velocity moving directly toward or away from radar beam 1, in
   * meters per second. Radial velocity values can either be positive (wind is moving
   * away from the radar) or negative (wind is moving toward the radar). The beam
   * number designation is defined by the data source.
   */
  radVelBeam1?: number;

  /**
   * Component of wind velocity moving directly toward or away from radar beam 2, in
   * meters per second. Radial velocity values can either be positive (wind is moving
   * away from the radar) or negative (wind is moving toward the radar). The beam
   * number designation is defined by the data source.
   */
  radVelBeam2?: number;

  /**
   * Component of wind velocity moving directly toward or away from radar beam 3, in
   * meters per second. Radial velocity values can either be positive (wind is moving
   * away from the radar) or negative (wind is moving toward the radar). The beam
   * number designation is defined by the data source.
   */
  radVelBeam3?: number;

  /**
   * Component of wind velocity moving directly toward or away from radar beam 4, in
   * meters per second. Radial velocity values can either be positive (wind is moving
   * away from the radar) or negative (wind is moving toward the radar). The beam
   * number designation is defined by the data source.
   */
  radVelBeam4?: number;

  /**
   * Component of wind velocity moving directly toward or away from radar beam 5, in
   * meters per second. Radial velocity values can either be positive (wind is moving
   * away from the radar) or negative (wind is moving toward the radar). The beam
   * number designation is defined by the data source.
   */
  radVelBeam5?: number;

  /**
   * The amount of rain that has fallen in the past hour, in centimeters.
   */
  rainHour?: number;

  /**
   * The Raw Meteorological Aerodrome Report (METAR) string.
   */
  rawMETAR?: string;

  /**
   * Terminal Aerodrome Forecast (TAF) containing detailed weather predictions for a
   * specific airport or aerodrome.
   */
  rawTAF?: string;

  /**
   * The amount of radiation that changes direction as a function of atmospheric
   * density, in Watts per square meter.
   */
  refRad?: number;

  /**
   * The percentage of water vapor in the atmosphere.
   */
  relHumidity?: number;

  /**
   * Sensor altitude at obTime in km. This includes pilot reports or other means of
   * weather observation.
   */
  senalt?: number;

  /**
   * Sensor WGS84 latitude at obTime in degrees. -90 to 90 degrees (negative values
   * south of equator). This includes pilot reports or other means of weather
   * observation.
   */
  senlat?: number;

  /**
   * Sensor WGS84 longitude at obTime in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian). This includes pilot reports or other means of
   * weather observation.
   */
  senlon?: number;

  /**
   * The volumetric percentage of soil water contained in a given volume of soil.
   */
  soilMoisture?: number;

  /**
   * The measurement of soil temperature in degrees C.
   */
  soilTemp?: number;

  /**
   * The power per unit area received from the Sun in the form of electromagnetic
   * radiation as measured in the wavelength range of the measuring instrument. The
   * solar irradiance is measured in watt per square meter (W/m2).
   */
  solarRad?: number;

  /**
   * Array of UUID(s) of the UDL data record(s) that are related to this
   * WeatherReport record. See the associated 'srcTyps' array for the specific types
   * of data, positionally corresponding to the UUIDs in this array. The 'srcTyps'
   * and 'srcIds' arrays must match in size. See the corresponding srcTyps array
   * element for the data type of the UUID and use the appropriate API operation to
   * retrieve that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (SENSOR, WEATHERDATA) that are related to this
   * WeatherReport record. See the associated 'srcIds' array for the record UUIDs,
   * positionally corresponding to the record types in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Describes in which direction (if any) that better weather conditions exist.
   * Intended as, but not constrained to, MIL-STD-6016 surrounding weather
   * designations (e.g. NO STATEMENT, BETTER TO NORTH, BETTER TO EAST, BETTER TO
   * SOUTH, BETTER TO WEST).
   */
  surroundingWeather?: string;

  /**
   * The measurement of air temperature in degrees C.
   */
  temperature?: number;

  /**
   * Visual distance in meters.
   */
  visibility?: number;

  /**
   * The change in wind speed between two different altitudes divided by the vertical
   * distance between them, in units of 1/sec.
   */
  vshear?: number;

  /**
   * Amplifies the actual weather being reported. Intended as, but not constrained
   * to, MIL-STD-6016 weather amplification designations (e.g. NO STATEMENT, NO
   * SCATTERED BROKEN MEDIUM CLOUD, SCATTERED BROKEN MEDIUM CLOUDS, GUSTY WINDS AT
   * SERVICE, FOG IN VALLEYS, HIGHER TERRAIN OBSCURED, SURFACE CONDITIONS VARIABLE,
   * SURFACE WIND NE, SURFACE WIND SE, SURFACE WIND SW, SURFACE WIND NW, PRESENCE OF
   * CUMULONIMBUS).
   */
  weatherAmp?: string;

  /**
   * Used in conjunction with actWeather and weatherInt. Intended as, but not
   * constrained to, MIL-STD-6016 actual weather descriptor (e.g. NO STATEMENT,
   * SHALLOW, PATCHES, LOW DRIFTING, BLOWING, SHOWERS, THUNDERSTORMS, SUPERCOOLED).
   */
  weatherDesc?: string;

  /**
   * Identifier of the weather over target, which should remain the same on
   * subsequent Weather Over Target records.
   */
  weatherId?: string;

  /**
   * Weather Intensity. Used in conjunction with actWeather and weatherDesc. Intended
   * as, but not constrained to, MIL-STD-6016 weather intensity (e.g. NO STATEMENT,
   * LIGHT, MODERATE, HEAVY, IN VICINITY).
   */
  weatherInt?: string;

  /**
   * The perceived temperature in degrees C.
   */
  windChill?: number;

  /**
   * Covariance matrix, in knots and second based units. The array values represent
   * the lower triangular half of the covariance matrix. The size of the covariance
   * matrix is 2x2. The covariance elements are position dependent within the array
   * with values ordered as follows:
   *
   * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y
   *
   * x&nbsp;&nbsp;&nbsp;&nbsp;1
   *
   * y&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;3
   *
   * The cov array should contain only the lower left triangle values from top left
   * down to bottom right, in order.
   */
  windCov?: Array<number>;

  /**
   * Direction the wind is blowing, in degrees clockwise from true north.
   */
  windDir?: number;

  /**
   * Average wind direction over a 1 minute period, in degrees clockwise from true
   * north.
   */
  windDirAvg?: number;

  /**
   * Wind direction corresponding to the peak wind speed during a 1 minute period, in
   * degrees clockwise from true north.
   */
  windDirPeak?: number;

  /**
   * Wind direction corresponding to the peak wind speed during a 10 minute period,
   * in degrees clockwise from true north.
   */
  windDirPeak10?: number;

  /**
   * Expresses the max gust speed of the wind, in meters/second.
   */
  windGust?: number;

  /**
   * Expresses the max gust speed of the wind recorded in a 10 minute period, in
   * meters/second.
   */
  windGust10?: number;

  /**
   * Expresses the speed of the wind in meters/second.
   */
  windSpd?: number;

  /**
   * Average wind speed over a 1 minute period, in meters/second.
   */
  windSpdAvg?: number;

  /**
   * Boolean describing whether or not the wind direction and/or speed is variable.
   */
  windVar?: boolean;
}

export interface WeatherReportListParams extends OffsetPageParams {
  /**
   * Datetime when a weather observation was made or forecast was issued in ISO 8601
   * UTC datetime format with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface WeatherReportCountParams {
  /**
   * Datetime when a weather observation was made or forecast was issued in ISO 8601
   * UTC datetime format with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface WeatherReportGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface WeatherReportTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Datetime when a weather observation was made or forecast was issued in ISO 8601
   * UTC datetime format with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface WeatherReportUnvalidatedPublishParams {
  body: Array<WeatherReportUnvalidatedPublishParams.Body>;
}

export namespace WeatherReportUnvalidatedPublishParams {
  /**
   * These services provide for posting and querying Weather Over Target information.
   * The information contained within describes the current weather conditions over a
   * target area or region to include navigational considerations such as altimeter
   * settings, visibility, cloud heights etc.
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
     * The central WGS-84 latitude of the weather report, in degrees. -90 to 90 degrees
     * (negative values south of equator).
     */
    lat: number;

    /**
     * The central WGS-84 longitude of the weather report, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    lon: number;

    /**
     * Datetime when a weather observation was made or forecast was issued in ISO 8601
     * UTC datetime format with microsecond precision.
     */
    obTime: string;

    /**
     * Identifies the type of weather report (e.g. OBSERVATION, FORECAST, etc.).
     */
    reportType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Describes the actual weather at position. Intended as, but not constrained to,
     * MIL-STD-6016 actual weather (e.g. NO STATEMENT, NO SIGNIFICANT WEATHER, DRIZZLE,
     * RAIN, SNOW, SNOW GRAINS, DIAMOND DUST, ICE PELLETS, HAIL, SMALL HAIL, MIST, FOG,
     * SMOKE, VOLCANIC ASH, WIDESPREAD DUST, SAND, HAZE, WELL DEVELOPED DUST, SQUALLS,
     * FUNNEL CLOUDS, SANDSTORM, DUSTSTORM, LOW CLOUDS, CLOUDY, GROUND FOG, DUST, HEAVY
     * RAIN, THUNDERSTORMS AWT, HEAVY THUNDERSTORMS, HURRICANE TYPHOON CYCLONE,
     * TROPICAL STORM, TORNADO, HIGH WINDS, LIGHTNING, FREEZING DRIZZLE, FREEZING RAIN,
     * HEAVY SNOW, ICING, SNOW OR RAIN AND SNOW MIXED, SHOWERS, CLEAR).
     */
    actWeather?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * Point height above ellipsoid (WGS-84), in meters.
     */
    alt?: number;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the point of interest as projected on the ground.
     */
    area?: string;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the image as projected on the
     * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
     * if included with a POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground.
     */
    atype?: string;

    /**
     * The measurement of air pressure in the atmosphere in kilopascals.
     */
    barPress?: number;

    /**
     * Flag indicating detection of a cloud-to-cloud lightning event.
     */
    ccEvent?: boolean;

    /**
     * Array of cloud cover descriptions - each element can be maximum of 16 characters
     * long. Intended as, but not constrained to, MIL-STD-6016 cloud cover designations
     * (e.g. SKY CLEAR, SCATTERED, BROKEN, OVERCAST, SKY OBSCURED). Each element of the
     * array corresponds to the elements in the cloudHght array specified respectively.
     */
    cloudCover?: Array<string>;

    /**
     * Array of cloud base heights in meters described by the cloudHght array. Each
     * element of the array corresponds to the elements in the cloudCover array
     * specified respectively.
     */
    cloudHght?: Array<number>;

    /**
     * Reports the lowest altitude at which contrails are occurring, in meters.
     */
    contrailHghtLower?: number;

    /**
     * Reports the highest altitude at which contrails are occurring, in meters.
     */
    contrailHghtUpper?: number;

    /**
     * Specific pressures or heights where measurements are taken, labeled as either
     * MANDATORY or SIGNIFICANT levels. Mandatory levels are at particular pressures at
     * geopotential heights. Significant levels are at particular geometric heights.
     */
    dataLevel?: string;

    /**
     * The temperature at which air is saturated with water vapor, in degrees C.
     */
    dewPoint?: number;

    /**
     * The amount of radiation that reaches earth's surface after being scattered by
     * the atmosphere, in Watts per square meter.
     */
    difRad?: number;

    /**
     * The difference in wind direction recorded over a period of time, in degrees.
     */
    dirDev?: number;

    /**
     * Describes the flight conditions in route to the target (NO STATEMENT, MAINLY
     * IFR, MAINLY VFR, THUNDERSTORMS).
     *
     * MAINLY IFR:&nbsp;&nbsp;Predominantly Instrument Flight Rules.
     *
     * MAINLY VFR:&nbsp;&nbsp;Predominantly Visual Flight Rules.
     *
     * THUNDERSTORMS:&nbsp;&nbsp;Thunderstorms expected in route.
     */
    enRouteWeather?: string;

    /**
     * Optional observation or forecast ID from external systems. This field has no
     * meaning within UDL and is provided as a convenience for systems that require
     * tracking of an internal system generated ID.
     */
    externalId?: string;

    /**
     * Optional location ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalLocationId?: string;

    /**
     * Valid end time of a weather forecast in ISO 8601 UTC datetime format with
     * millisecond precision.
     */
    forecastEndTime?: string;

    /**
     * Valid start time of a weather forecast in ISO 8601 UTC datetime format with
     * millisecond precision.
     */
    forecastStartTime?: string;

    /**
     * Altitude of a pressure surface in the atmosphere above mean sea level, in
     * meters.
     */
    geoPotentialAlt?: number;

    /**
     * The change in wind speed between two different lateral positions at a given
     * altitude divided by the horizontal distance between them, in units of 1/sec.
     */
    hshear?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the airfield
     * associated with this weather report.
     */
    icao?: string;

    /**
     * Reports the lowest altitude at which icing or freezing rain is occurring, in
     * meters.
     */
    icingLowerLimit?: number;

    /**
     * Reports the highest altitude at which icing or freezing rain is occurring, in
     * meters.
     */
    icingUpperLimit?: number;

    /**
     * Identifier of the Airfield associated with this weather report.
     */
    idAirfield?: string;

    /**
     * Identifier of the ground imagery associated for this weather over target report.
     */
    idGroundImagery?: string;

    /**
     * Unique identifier of the sensor making the weather measurement.
     */
    idSensor?: string;

    /**
     * Identifier of the Site that is associated with this weather report.
     */
    idSite?: string;

    /**
     * An indication of how much the atmosphere refracts light.
     */
    indexRefraction?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the record source. This may be an internal
     * identifier and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * The speed at which water is being applied to a specific area in millimeters per
     * hour.
     */
    precipRate?: number;

    /**
     * Altimeter set to read zero at mean sea level in kilopascals.
     */
    qnh?: number;

    /**
     * Average radial velocity of wind as measured by radar with multi-beam
     * configurations. Radial velocity is the component of wind velocity moving
     * directly toward or away from a sensor's radar beam, in meters per second. Values
     * can either be positive (wind is moving away from the radar) or negative (wind is
     * moving toward the radar).
     */
    radVel?: number;

    /**
     * Component of wind velocity moving directly toward or away from radar beam 1, in
     * meters per second. Radial velocity values can either be positive (wind is moving
     * away from the radar) or negative (wind is moving toward the radar). The beam
     * number designation is defined by the data source.
     */
    radVelBeam1?: number;

    /**
     * Component of wind velocity moving directly toward or away from radar beam 2, in
     * meters per second. Radial velocity values can either be positive (wind is moving
     * away from the radar) or negative (wind is moving toward the radar). The beam
     * number designation is defined by the data source.
     */
    radVelBeam2?: number;

    /**
     * Component of wind velocity moving directly toward or away from radar beam 3, in
     * meters per second. Radial velocity values can either be positive (wind is moving
     * away from the radar) or negative (wind is moving toward the radar). The beam
     * number designation is defined by the data source.
     */
    radVelBeam3?: number;

    /**
     * Component of wind velocity moving directly toward or away from radar beam 4, in
     * meters per second. Radial velocity values can either be positive (wind is moving
     * away from the radar) or negative (wind is moving toward the radar). The beam
     * number designation is defined by the data source.
     */
    radVelBeam4?: number;

    /**
     * Component of wind velocity moving directly toward or away from radar beam 5, in
     * meters per second. Radial velocity values can either be positive (wind is moving
     * away from the radar) or negative (wind is moving toward the radar). The beam
     * number designation is defined by the data source.
     */
    radVelBeam5?: number;

    /**
     * The amount of rain that has fallen in the past hour, in centimeters.
     */
    rainHour?: number;

    /**
     * The Raw Meteorological Aerodrome Report (METAR) string.
     */
    rawMETAR?: string;

    /**
     * Terminal Aerodrome Forecast (TAF) containing detailed weather predictions for a
     * specific airport or aerodrome.
     */
    rawTAF?: string;

    /**
     * The amount of radiation that changes direction as a function of atmospheric
     * density, in Watts per square meter.
     */
    refRad?: number;

    /**
     * The percentage of water vapor in the atmosphere.
     */
    relHumidity?: number;

    /**
     * Sensor altitude at obTime in km. This includes pilot reports or other means of
     * weather observation.
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude at obTime in degrees. -90 to 90 degrees (negative values
     * south of equator). This includes pilot reports or other means of weather
     * observation.
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude at obTime in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian). This includes pilot reports or other means of
     * weather observation.
     */
    senlon?: number;

    /**
     * The volumetric percentage of soil water contained in a given volume of soil.
     */
    soilMoisture?: number;

    /**
     * The measurement of soil temperature in degrees C.
     */
    soilTemp?: number;

    /**
     * The power per unit area received from the Sun in the form of electromagnetic
     * radiation as measured in the wavelength range of the measuring instrument. The
     * solar irradiance is measured in watt per square meter (W/m2).
     */
    solarRad?: number;

    /**
     * Array of UUID(s) of the UDL data record(s) that are related to this
     * WeatherReport record. See the associated 'srcTyps' array for the specific types
     * of data, positionally corresponding to the UUIDs in this array. The 'srcTyps'
     * and 'srcIds' arrays must match in size. See the corresponding srcTyps array
     * element for the data type of the UUID and use the appropriate API operation to
     * retrieve that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (SENSOR, WEATHERDATA) that are related to this
     * WeatherReport record. See the associated 'srcIds' array for the record UUIDs,
     * positionally corresponding to the record types in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Describes in which direction (if any) that better weather conditions exist.
     * Intended as, but not constrained to, MIL-STD-6016 surrounding weather
     * designations (e.g. NO STATEMENT, BETTER TO NORTH, BETTER TO EAST, BETTER TO
     * SOUTH, BETTER TO WEST).
     */
    surroundingWeather?: string;

    /**
     * The measurement of air temperature in degrees C.
     */
    temperature?: number;

    /**
     * Visual distance in meters.
     */
    visibility?: number;

    /**
     * The change in wind speed between two different altitudes divided by the vertical
     * distance between them, in units of 1/sec.
     */
    vshear?: number;

    /**
     * Amplifies the actual weather being reported. Intended as, but not constrained
     * to, MIL-STD-6016 weather amplification designations (e.g. NO STATEMENT, NO
     * SCATTERED BROKEN MEDIUM CLOUD, SCATTERED BROKEN MEDIUM CLOUDS, GUSTY WINDS AT
     * SERVICE, FOG IN VALLEYS, HIGHER TERRAIN OBSCURED, SURFACE CONDITIONS VARIABLE,
     * SURFACE WIND NE, SURFACE WIND SE, SURFACE WIND SW, SURFACE WIND NW, PRESENCE OF
     * CUMULONIMBUS).
     */
    weatherAmp?: string;

    /**
     * Used in conjunction with actWeather and weatherInt. Intended as, but not
     * constrained to, MIL-STD-6016 actual weather descriptor (e.g. NO STATEMENT,
     * SHALLOW, PATCHES, LOW DRIFTING, BLOWING, SHOWERS, THUNDERSTORMS, SUPERCOOLED).
     */
    weatherDesc?: string;

    /**
     * Identifier of the weather over target, which should remain the same on
     * subsequent Weather Over Target records.
     */
    weatherId?: string;

    /**
     * Weather Intensity. Used in conjunction with actWeather and weatherDesc. Intended
     * as, but not constrained to, MIL-STD-6016 weather intensity (e.g. NO STATEMENT,
     * LIGHT, MODERATE, HEAVY, IN VICINITY).
     */
    weatherInt?: string;

    /**
     * The perceived temperature in degrees C.
     */
    windChill?: number;

    /**
     * Covariance matrix, in knots and second based units. The array values represent
     * the lower triangular half of the covariance matrix. The size of the covariance
     * matrix is 2x2. The covariance elements are position dependent within the array
     * with values ordered as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y
     *
     * x&nbsp;&nbsp;&nbsp;&nbsp;1
     *
     * y&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;3
     *
     * The cov array should contain only the lower left triangle values from top left
     * down to bottom right, in order.
     */
    windCov?: Array<number>;

    /**
     * Direction the wind is blowing, in degrees clockwise from true north.
     */
    windDir?: number;

    /**
     * Average wind direction over a 1 minute period, in degrees clockwise from true
     * north.
     */
    windDirAvg?: number;

    /**
     * Wind direction corresponding to the peak wind speed during a 1 minute period, in
     * degrees clockwise from true north.
     */
    windDirPeak?: number;

    /**
     * Wind direction corresponding to the peak wind speed during a 10 minute period,
     * in degrees clockwise from true north.
     */
    windDirPeak10?: number;

    /**
     * Expresses the max gust speed of the wind, in meters/second.
     */
    windGust?: number;

    /**
     * Expresses the max gust speed of the wind recorded in a 10 minute period, in
     * meters/second.
     */
    windGust10?: number;

    /**
     * Expresses the speed of the wind in meters/second.
     */
    windSpd?: number;

    /**
     * Average wind speed over a 1 minute period, in meters/second.
     */
    windSpdAvg?: number;

    /**
     * Boolean describing whether or not the wind direction and/or speed is variable.
     */
    windVar?: boolean;
  }
}

WeatherReport.History = History;

export declare namespace WeatherReport {
  export {
    type WeatherReportListResponse as WeatherReportListResponse,
    type WeatherReportCountResponse as WeatherReportCountResponse,
    type WeatherReportQueryhelpResponse as WeatherReportQueryhelpResponse,
    type WeatherReportTupleResponse as WeatherReportTupleResponse,
    type WeatherReportListResponsesOffsetPage as WeatherReportListResponsesOffsetPage,
    type WeatherReportCreateParams as WeatherReportCreateParams,
    type WeatherReportListParams as WeatherReportListParams,
    type WeatherReportCountParams as WeatherReportCountParams,
    type WeatherReportGetParams as WeatherReportGetParams,
    type WeatherReportTupleParams as WeatherReportTupleParams,
    type WeatherReportUnvalidatedPublishParams as WeatherReportUnvalidatedPublishParams,
  };

  export {
    History as History,
    type WeatherReportFull as WeatherReportFull,
    type HistoryCountResponse as HistoryCountResponse,
    type WeatherReportFullsOffsetPage as WeatherReportFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
