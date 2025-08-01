// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: HistoryListParams,
    options?: RequestOptions,
  ): PagePromise<HistoryListResponsesOffsetPage, HistoryListResponse> {
    return this._client.getAPIList('/udl/sigact/history', OffsetPage<HistoryListResponse>, {
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
  count(query: HistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/sigact/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryListResponsesOffsetPage = OffsetPage<HistoryListResponse>;

/**
 * Provides information on the dates, actors, locations, fatalities, and types of
 * all reported political violence and protest events across the world.
 */
export interface HistoryListResponse {
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
   * Date of the report or filing.
   */
  reportDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Estimate of the accuracy that this event occurred as described/reported.
   */
  accuracy?: number;

  /**
   * A list of one or more actors involved in the event.
   */
  actors?: Array<string>;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

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
   * This is the average tone of all documents containing one or more mentions of
   * this event during the 15 minute update in which it was first seen. The score
   * ranges from -100 (extremely negative) to +100 (extremely positive). Common
   * values range between -10 and +10, with 0 indicating neutral.
   */
  avgTone?: number;

  /**
   * CAMEO event codes are defined in a three-level taxonomy. For events at level
   * three in the taxonomy, this yields its level two leaf root node. For example,
   * code 0251 (Appeal for easing of administrative sanctions) would yield an
   * EventBaseCode of 025 (Appeal to yield). This makes it possible to aggregate
   * events at various resolutions of specificity. For events at levels two or one,
   * this field will be set to EventCode.
   */
  cameoBaseCode?: string;

  /**
   * This is the raw CAMEO action code describing the action that Actor1 performed
   * upon Actor2. Additional information about Cameo Codes can be obtained from the
   * GDELT project documentation here:
   * https://www.gdeltproject.org/data.html#documentation.
   */
  cameoCode?: string;

  /**
   * Similar to EventBaseCode, this defines the root-level category the event code
   * falls under. For example, code 0251 (Appeal for easing of administrative
   * sanctions) has a root code of 02 (Appeal). This makes it possible to aggregate
   * events at various resolutions of specificity. For events at levels two or one,
   * this field will be set to EventCode.
   */
  cameoRootCode?: string;

  /**
   * MD5 value of the file. The ingest/create operation will automatically generate
   * the value.
   */
  checksumValue?: string;

  /**
   * The city in or near which this event occurred.
   */
  city?: string;

  /**
   * Number of civilians abducted in the activity.
   */
  civAbd?: number;

  /**
   * Number of civilians detained in the activity.
   */
  civDet?: number;

  /**
   * Number of civilians killed in the activity.
   */
  civKIA?: number;

  /**
   * Number of civilians wounded in the activity.
   */
  civWound?: number;

  /**
   * 1 (high) for events where the reporting allows the coder to identify the event
   * in full. That is, events where the individual happening is described by the
   * original source in a sufficiently detailed way as to identify individual
   * incidents, i.e. separate activities of fighting in a single location:
   *
   * 2 (lower) for events where an aggregation of information was already made by the
   * source material that is impossible to undo in the coding process. Such events
   * are described by the original source only as aggregates (totals) of multiple
   * separate activities of fighting spanning over a longer period than a single,
   * clearly defined day.
   */
  clarity?: number;

  /**
   * Number of coalition members abducted in the activity.
   */
  coalAbd?: number;

  /**
   * Number of coalition members detained in the activity.
   */
  coalDet?: number;

  /**
   * Number of coalition members killed in the activity.
   */
  coalKIA?: number;

  /**
   * Number of coalition members wounded in the activity.
   */
  coalWound?: number;

  /**
   * Flag indicating that this attack was of a complex or coordinated nature.
   */
  complexAttack?: boolean;

  /**
   * Estimate of the confidence that this event occurred.
   */
  confidence?: number;

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
   * Time the row was created in the database, auto-populated by the system, example
   * = 2018-01-01T16:00:00.123Z.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * The district in which this event occurred.
   */
  district?: string;

  /**
   * The filename of the document or report.
   */
  documentFilename?: string;

  /**
   * The source of the document or report.
   */
  documentSource?: string;

  /**
   * Number of enemy combatants abducted in the activity.
   */
  enemyAbd?: number;

  /**
   * Number of enemy combatants detained in the activity.
   */
  enemyDet?: number;

  /**
   * Number of enemy combatants killed in the activity.
   */
  enemyKIA?: number;

  /**
   * A description of the event.
   */
  eventDescription?: string;

  /**
   * The approximate end time of the event, in ISO 8601 UTC format.
   */
  eventEnd?: string;

  /**
   * The approximate start time of the event, in ISO 8601 UTC format.
   */
  eventStart?: string;

  /**
   * The type of event (e.g. Military, Natural, Political, Social, etc.).
   */
  eventType?: string;

  /**
   * Size of the associated text file. Units in bytes. If filesize is provided
   * without an associated file, it defaults to 0.
   */
  filesize?: number;

  /**
   * Number of friendlies abducted in the activity.
   */
  friendlyAbd?: number;

  /**
   * Number of friendlies in the activity.
   */
  friendlyDet?: number;

  /**
   * Number of friendlies killed in the activity.
   */
  friendlyKIA?: number;

  /**
   * Number of friendlies wounded in the activity.
   */
  friendlyWound?: number;

  /**
   * Each CAMEO event code is assigned a numeric score from -10 to +10, capturing the
   * theoretical potential impact that type of event will have on the stability of a
   * country. This is known as the Goldstein Scale. NOTE: this score is based on the
   * type of event, not the specifics of the actual event record being recorded thus
   * two riots, one with 10 people and one with 10,000, will both receive the same
   * Goldstein score. This can be aggregated to various levels of time resolution to
   * yield an approximation of the stability of a location over time.
   */
  goldstein?: number;

  /**
   * Flag indicating this SigAct record has an associated txt file stored in the UDL.
   * Retrieve the txt file by using the GET/udl/sigact/getFile/{id} where id is the
   * same as the SigAct record id. The maximum file size for this service is
   * 10,000,000 bytes (10MB). Files exceeding the maximum size will be rejected.
   */
  hasAttachment?: boolean;

  /**
   * Number of Host Nation members abducted in the activity.
   */
  hostNatAbd?: number;

  /**
   * Number of Host Nation members detained in the activity.
   */
  hostNatDet?: number;

  /**
   * Number of Host Nation members killed in the activity.
   */
  hostNatKIA?: number;

  /**
   * Number of Host Nation members wounded in the activity.
   */
  hostNatWound?: number;

  /**
   * Unique identifier assigned to each event record that uniquely identifies it in
   * the master dataset. This ID is provided for convenience of mapping to external
   * systems.
   */
  idNumber?: string;

  /**
   * WGS-84 centroid latitude of the event location, in degrees. -90 to 90 degrees
   * (negative values south of equator).
   */
  lat?: number;

  /**
   * WGS-84 centroid longitude of the event location, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of an milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts:
   *
   * &nbsp;&nbsp;4Q (grid zone designator, GZD)
   *
   * &nbsp;&nbsp;FJ (the 100,000-meter square identifier)
   *
   * &nbsp;&nbsp;12345678 (numerical location; easting is 1234 and northing is 5678,
   * in this case specifying a location with 10 m resolution).
   */
  milgrid?: string;

  /**
   * Notes related to the documents or event.
   */
  notes?: string;

  /**
   * This is the total number of source documents containing one or more mentions of
   * this event during the 15 minute update in which it was first seen. This can be
   * used as a method of assessing the importance of an event: the more discussion of
   * that event, the more likely it is to be significant.
   */
  numArticles?: number;

  /**
   * This is the total number of mentions of this event across all source documents
   * during the 15 minute update in which it was first seen. Multiple references to
   * an event within a single document also contribute to this count. This can be
   * used as a method of assessing the importance of an event: the more discussion of
   * that event, the more likely it is to be significant.
   */
  numMentions?: number;

  /**
   * This is the total number of information sources containing one or more mentions
   * of this event during the 15 minute update in which it was first seen. This can
   * be used as a method of assessing the importance of an event: the more discussion
   * of that event, the more likely it is to be significant.
   */
  numSources?: number;

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
   * The province in which this event occurred.
   */
  province?: string;

  /**
   * Related document ids.
   */
  relatedDocs?: Array<Shared.RelatedDocumentFull>;

  /**
   * The reporting unit.
   */
  repUnit?: string;

  /**
   * The activity the unit was engaged in.
   */
  repUnitActivity?: string;

  /**
   * The reporting unit type.
   */
  repUnitType?: string;

  /**
   * Number of side A members abducted in the activity.
   */
  sideAAbd?: number;

  /**
   * Number of side A members detained in the activity.
   */
  sideADet?: number;

  /**
   * Number of side A members killed in the activity.
   */
  sideAKIA?: number;

  /**
   * Number of side A members wounded in the activity.
   */
  sideAWound?: number;

  /**
   * Number of side B members abducted in the activity.
   */
  sideBAbd?: number;

  /**
   * Number of side B members detained in the activity.
   */
  sideBDet?: number;

  /**
   * Number of side B members killed in the activity.
   */
  sideBKIA?: number;

  /**
   * Number of side B members wounded in the activity.
   */
  sideBWound?: number;

  /**
   * The source language of the significant event using the ISO 639-3, 3 character
   * code definition.
   */
  sourceLanguage?: string;

  /**
   * This field records the URL or citation of the first news report it found this
   * event in. In most cases this is the first report it saw the article in, but due
   * to the timing and flow of news reports through the processing pipeline, this may
   * not always be the very first report, but is at least in the first few reports.
   */
  sourceUrl?: string;

  /**
   * A summary of the event.
   */
  summary?: string;

  /**
   * The name of the target. The target may be an individual, an entity, or a
   * country/region.
   */
  target?: string;

  /**
   * Area in which important military events occur or are progressing. A theater can
   * include the entirety of the airspace, land and sea area that is or that may
   * potentially become involved in war operations.
   */
  theater?: string;

  /**
   * The mode of this attack or event (e.g. Direct Fire, IED Explosion, etc.).
   */
  typeOfAttack?: string;
}

export type HistoryCountResponse = string;

export interface HistoryListParams extends OffsetPageParams {
  /**
   * Date of the report or filing. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reportDate: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryCountParams {
  /**
   * Date of the report or filing. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reportDate: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace History {
  export {
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
