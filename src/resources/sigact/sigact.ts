// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/sigact/history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from 'bluestaq@unified-data-library/resources/sigact/history';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { type Uploadable } from 'bluestaq@unified-data-library/core/uploads';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { multipartFormRequestOptions } from 'bluestaq@unified-data-library/internal/uploads';

export class Sigact extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: SigactListParams,
    options?: RequestOptions,
  ): PagePromise<SigactListResponsesOffsetPage, SigactListResponse> {
    return this._client.getAPIList('/udl/sigact', OffsetPage<SigactListResponse>, { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: SigactCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/sigact/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * SigAct records as a POST body and ingest into the database. Requires specific
   * roles, please contact the UDL team to gain access. This operation is not
   * intended to be used for automated feeds into UDL...data providers should contact
   * the UDL team for instructions on setting up a permanent feed through an
   * alternate mechanism.
   */
  createBulk(params: SigactCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/sigact/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<SigactQueryhelpResponse> {
    return this._client.get('/udl/sigact/queryhelp', options);
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
  tuple(query: SigactTupleParams, options?: RequestOptions): APIPromise<SigactTupleResponse> {
    return this._client.get('/udl/sigact/tuple', { query, ...options });
  }

  /**
   * Upload a text file with its metadata. This operation bypasses the length
   * constraints of the `eventDescription` field.
   *
   * The request body requires a zip file containing exactly two files:\
   * 1\) A file with the `.json` file extension whose content conforms to the `SigAct_Ingest`
   * schema.\
   * 2\) A UTF-8 encoded file with the `.txt` file extension.
   *
   * The JSON and text files will be associated with each other via the `id` field.
   * Query the metadata via `GET /udl/sigact` and use `GET /udl/sigact/getFile/{id}`
   * to retrieve the text file.
   *
   * This operation only accepts application/zip media. The application/json request
   * body is documented to provide a convenient reference to the ingest schema.
   *
   * This operation is intended to be used for automated feeds into UDL. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   */
  uploadZip(body: SigactUploadZipParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/filedrop/udl-sigact-text',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export type SigactListResponsesOffsetPage = OffsetPage<SigactListResponse>;

/**
 * Provides information on the dates, actors, locations, fatalities, and types of
 * all reported political violence and protest events across the world.
 */
export interface SigactListResponse {
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
  relatedDocs?: Array<SigactListResponse.RelatedDoc>;

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

export namespace SigactListResponse {
  export interface RelatedDoc {
    /**
     * List of data sources related to this document.
     */
    dataSourceRefs?: Array<RelatedDoc.DataSourceRef>;

    /**
     * The document id of the related document.
     */
    documentId?: string;
  }

  export namespace RelatedDoc {
    export interface DataSourceRef {
      /**
       * Data source id.
       */
      dataSourceId?: string;

      /**
       * end position.
       */
      endPosition?: string;

      /**
       * paragraph number.
       */
      paragraphNumber?: string;

      /**
       * sentence number.
       */
      sentenceNumber?: string;

      /**
       * start position.
       */
      startPosition?: string;
    }
  }
}

export type SigactCountResponse = string;

export interface SigactQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<SigactQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace SigactQueryhelpResponse {
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

export type SigactTupleResponse = Array<SigactTupleResponse.SigactTupleResponseItem>;

export namespace SigactTupleResponse {
  /**
   * Provides information on the dates, actors, locations, fatalities, and types of
   * all reported political violence and protest events across the world.
   */
  export interface SigactTupleResponseItem {
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
    relatedDocs?: Array<SigactTupleResponseItem.RelatedDoc>;

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

  export namespace SigactTupleResponseItem {
    export interface RelatedDoc {
      /**
       * List of data sources related to this document.
       */
      dataSourceRefs?: Array<RelatedDoc.DataSourceRef>;

      /**
       * The document id of the related document.
       */
      documentId?: string;
    }

    export namespace RelatedDoc {
      export interface DataSourceRef {
        /**
         * Data source id.
         */
        dataSourceId?: string;

        /**
         * end position.
         */
        endPosition?: string;

        /**
         * paragraph number.
         */
        paragraphNumber?: string;

        /**
         * sentence number.
         */
        sentenceNumber?: string;

        /**
         * start position.
         */
        startPosition?: string;
      }
    }
  }
}

export interface SigactListParams extends OffsetPageParams {
  /**
   * Date of the report or filing. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reportDate: string;
}

export interface SigactCountParams {
  /**
   * Date of the report or filing. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reportDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SigactCreateBulkParams {
  body: Array<SigactCreateBulkParams.Body>;
}

export namespace SigactCreateBulkParams {
  /**
   * Provides information on the dates, actors, locations, fatalities, and types of
   * all reported political violence and protest events across the world.
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
     * The province in which this event occurred.
     */
    province?: string;

    /**
     * Related document ids.
     */
    relatedDocs?: Array<Body.RelatedDoc>;

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

  export namespace Body {
    export interface RelatedDoc {
      /**
       * List of data sources related to this document.
       */
      dataSourceRefs?: Array<RelatedDoc.DataSourceRef>;

      /**
       * The document id of the related document.
       */
      documentId?: string;
    }

    export namespace RelatedDoc {
      export interface DataSourceRef {
        /**
         * Data source id.
         */
        dataSourceId?: string;

        /**
         * end position.
         */
        endPosition?: string;

        /**
         * paragraph number.
         */
        paragraphNumber?: string;

        /**
         * sentence number.
         */
        sentenceNumber?: string;

        /**
         * start position.
         */
        startPosition?: string;
      }
    }
  }
}

export interface SigactTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Date of the report or filing. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reportDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SigactUploadZipParams {
  /**
   * Zip file containing files described in the specification
   */
  file: Uploadable;
}

Sigact.History = History;

export declare namespace Sigact {
  export {
    type SigactListResponse as SigactListResponse,
    type SigactCountResponse as SigactCountResponse,
    type SigactQueryhelpResponse as SigactQueryhelpResponse,
    type SigactTupleResponse as SigactTupleResponse,
    type SigactListResponsesOffsetPage as SigactListResponsesOffsetPage,
    type SigactListParams as SigactListParams,
    type SigactCountParams as SigactCountParams,
    type SigactCreateBulkParams as SigactCreateBulkParams,
    type SigactTupleParams as SigactTupleParams,
    type SigactUploadZipParams as SigactUploadZipParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
