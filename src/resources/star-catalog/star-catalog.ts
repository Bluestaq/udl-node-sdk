// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import { History, HistoryAodrParams } from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class StarCatalog extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single StarCatalog record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.starCatalog.create({
   *   astrometryOrigin: 'GAIADR3',
   *   classificationMarking: 'U',
   *   csId: 12345,
   *   dataMode: 'TEST',
   *   dec: 21.8,
   *   ra: 14.43,
   *   source: 'Bluestaq',
   *   starEpoch: 2016,
   * });
   * ```
   */
  create(body: StarCatalogCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/starcatalog', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single starcatalog record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.starCatalog.update('id', {
   *   astrometryOrigin: 'GAIADR3',
   *   classificationMarking: 'U',
   *   csId: 12345,
   *   dataMode: 'TEST',
   *   dec: 21.8,
   *   ra: 14.43,
   *   source: 'Bluestaq',
   *   starEpoch: 2016,
   * });
   * ```
   */
  update(pathID: string, body: StarCatalogUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/starcatalog/${pathID}`, {
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
   * for await (const starCatalogListResponse of client.starCatalog.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: StarCatalogListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StarCatalogListResponsesOffsetPage, StarCatalogListResponse> {
    return this._client.getAPIList('/udl/starcatalog', OffsetPage<StarCatalogListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a dataset specified by the passed ID path parameter.
   * A specific role is required to perform this service operation. Please contact
   * the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.starCatalog.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/starcatalog/${id}`, {
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
   * const response = await client.starCatalog.count();
   * ```
   */
  count(query: StarCatalogCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/starcatalog/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * StarCatalog records as a POST body and ingest into the database. This operation
   * is not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.starCatalog.createBulk({
   *   body: [
   *     {
   *       astrometryOrigin: 'GAIADR3',
   *       classificationMarking: 'U',
   *       csId: 12345,
   *       dataMode: 'TEST',
   *       dec: 21.8,
   *       ra: 14.43,
   *       source: 'Bluestaq',
   *       starEpoch: 2016,
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: StarCatalogCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/starcatalog/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single StarCatalog record by its unique ID passed as
   * a path parameter.
   *
   * @example
   * ```ts
   * const starCatalog = await client.starCatalog.get('id');
   * ```
   */
  get(
    id: string,
    query: StarCatalogGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StarCatalogGetResponse> {
    return this._client.get(path`/udl/starcatalog/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * await client.starCatalog.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/starcatalog/queryhelp', {
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
   *
   * @example
   * ```ts
   * const response = await client.starCatalog.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: StarCatalogTupleParams, options?: RequestOptions): APIPromise<StarCatalogTupleResponse> {
    return this._client.get('/udl/starcatalog/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple StarCatalog records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.starCatalog.unvalidatedPublish({
   *   body: [
   *     {
   *       astrometryOrigin: 'GAIADR3',
   *       classificationMarking: 'U',
   *       csId: 12345,
   *       dataMode: 'TEST',
   *       dec: 21.8,
   *       ra: 14.43,
   *       source: 'Bluestaq',
   *       starEpoch: 2016,
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: StarCatalogUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-starcatalog', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type StarCatalogListResponsesOffsetPage = OffsetPage<StarCatalogListResponse>;

/**
 * The star catalog provides the position, proper motion, parallax, and photometric
 * magnitudes at various bandpasses of a star.
 */
export interface StarCatalogListResponse {
  /**
   * Originating astrometric catalog for this object. Enum: [GAIADR3, HIPPARCOS,
   * USNOBSC].
   */
  astrometryOrigin: 'GAIADR3' | 'HIPPARCOS' | 'USNOBSC';

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The ID of this object in the specific catalog associated with this record.
   */
  csId: number;

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
   * Barycentric declination of the source in International Celestial Reference
   * System (ICRS) at the reference epoch, in degrees.
   */
  dec: number;

  /**
   * Barycentric right ascension of the source in the International Celestial
   * Reference System (ICRS) frame at the reference epoch, in degrees.
   */
  ra: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Reference epoch to which the astrometric source parameters are referred,
   * expressed as Julian Year in Barycentric Coordinate Time (TCB).
   */
  starEpoch: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Gaia DR3 optical photometric Bp-band magnitude in the Vega scale.
   */
  bpmag?: number;

  /**
   * Gaia DR3 optical Bp-band magnitude uncertainty in the Vega scale.
   */
  bpmagUnc?: number;

  /**
   * The version of the catalog associated with this object.
   */
  catVersion?: string;

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
   * Uncertainty of the declination of the source, in milliarcseconds, at the
   * reference epoch.
   */
  decUnc?: number;

  /**
   * The ID of this object in the Gaia DR3 Catalog.
   */
  gaiadr3CatId?: number;

  /**
   * Gaia DR3 optical photometric G-band magnitude in the Vega scale.
   */
  gmag?: number;

  /**
   * Gaia DR3 optical photometric G-band magnitude uncertainty in the Vega scale.
   */
  gmagUnc?: number;

  /**
   * The ID of this object in the Guidance and Navagation Control (GNC) Catalog.
   */
  gncCatId?: number;

  /**
   * The ID of this object in the Hipparcos Catalog.
   */
  hipCatId?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric H-band magnitude in the Vega scale.
   */
  hmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric H-band magnitude uncertainty in the Vega scale.
   */
  hmagUnc?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric J-band magnitude in the Vega scale.
   */
  jmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric J-band magnitude uncertainty in the Vega scale.
   */
  jmagUnc?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric K-band magnitude in the Vega scale.
   */
  kmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric K-band magnitude uncertainty in the Vega scale.
   */
  kmagUnc?: number;

  /**
   * Flag indicating that this is a multiple object source.
   */
  multFlag?: boolean;

  /**
   * Distance between source and nearest neighbor, in arcseconds.
   */
  neighborDistance?: number;

  /**
   * Flag indicating that the nearest catalog neighbor is closer than 4.6 arcseconds.
   */
  neighborFlag?: boolean;

  /**
   * The catalog ID of the nearest neighbor to this source.
   */
  neighborId?: number;

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
   * Absolute stellar parallax of the source, in milliarcseconds.
   */
  parallax?: number;

  /**
   * Uncertainty of the stellar parallax, in milliarcseconds.
   */
  parallaxUnc?: number;

  /**
   * Proper motion in declination of the source, in milliarcseconds/year, at the
   * reference epoch.
   */
  pmdec?: number;

  /**
   * Uncertainty of proper motion in declination, in milliarcseconds/year.
   */
  pmdecUnc?: number;

  /**
   * Proper motion in right ascension of the source, in milliarcseconds/year, at the
   * reference epoch.
   */
  pmra?: number;

  /**
   * Uncertainty of proper motion in right ascension, in milliarcseconds/year.
   */
  pmraUnc?: number;

  /**
   * Flag indicating that the proper motion uncertainty in either ra or dec is
   * greater than 10 milliarcseconds/year.
   */
  pmUncFlag?: boolean;

  /**
   * Flag indicating that the position uncertainty in either ra or dec is greater
   * than 100 milliarcseconds.
   */
  posUncFlag?: boolean;

  /**
   * Uncertainty of the right ascension of the source, in milliarcseconds, at the
   * reference epoch.
   */
  raUnc?: number;

  /**
   * Gaia DR3 optical Rp-band magnitude in the Vega scale.
   */
  rpmag?: number;

  /**
   * Gaia DR3 optical photometric Rp-band magnitude uncertainty in the Vega scale.
   */
  rpmagUnc?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds.
   */
  shift?: number;

  /**
   * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
   */
  shiftFlag?: boolean;

  /**
   * Time the row was updated in the database.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database.
   */
  updatedBy?: string;

  /**
   * Flag indicating that the source exhibits variable magnitude.
   */
  varFlag?: boolean;
}

export type StarCatalogCountResponse = string;

/**
 * The star catalog provides the position, proper motion, parallax, and photometric
 * magnitudes at various bandpasses of a star.
 */
export interface StarCatalogGetResponse {
  /**
   * Originating astrometric catalog for this object. Enum: [GAIADR3, HIPPARCOS,
   * USNOBSC].
   */
  astrometryOrigin: 'GAIADR3' | 'HIPPARCOS' | 'USNOBSC';

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The ID of this object in the specific catalog associated with this record.
   */
  csId: number;

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
   * Barycentric declination of the source in International Celestial Reference
   * System (ICRS) at the reference epoch, in degrees.
   */
  dec: number;

  /**
   * Barycentric right ascension of the source in the International Celestial
   * Reference System (ICRS) frame at the reference epoch, in degrees.
   */
  ra: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Reference epoch to which the astrometric source parameters are referred,
   * expressed as Julian Year in Barycentric Coordinate Time (TCB).
   */
  starEpoch: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Gaia DR3 optical photometric Bp-band magnitude in the Vega scale.
   */
  bpmag?: number;

  /**
   * Gaia DR3 optical Bp-band magnitude uncertainty in the Vega scale.
   */
  bpmagUnc?: number;

  /**
   * The version of the catalog associated with this object.
   */
  catVersion?: string;

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
   * Uncertainty of the declination of the source, in milliarcseconds, at the
   * reference epoch.
   */
  decUnc?: number;

  /**
   * The ID of this object in the Gaia DR3 Catalog.
   */
  gaiadr3CatId?: number;

  /**
   * Gaia DR3 optical photometric G-band magnitude in the Vega scale.
   */
  gmag?: number;

  /**
   * Gaia DR3 optical photometric G-band magnitude uncertainty in the Vega scale.
   */
  gmagUnc?: number;

  /**
   * The ID of this object in the Guidance and Navagation Control (GNC) Catalog.
   */
  gncCatId?: number;

  /**
   * The ID of this object in the Hipparcos Catalog.
   */
  hipCatId?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric H-band magnitude in the Vega scale.
   */
  hmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric H-band magnitude uncertainty in the Vega scale.
   */
  hmagUnc?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric J-band magnitude in the Vega scale.
   */
  jmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric J-band magnitude uncertainty in the Vega scale.
   */
  jmagUnc?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric K-band magnitude in the Vega scale.
   */
  kmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric K-band magnitude uncertainty in the Vega scale.
   */
  kmagUnc?: number;

  /**
   * Flag indicating that this is a multiple object source.
   */
  multFlag?: boolean;

  /**
   * Distance between source and nearest neighbor, in arcseconds.
   */
  neighborDistance?: number;

  /**
   * Flag indicating that the nearest catalog neighbor is closer than 4.6 arcseconds.
   */
  neighborFlag?: boolean;

  /**
   * The catalog ID of the nearest neighbor to this source.
   */
  neighborId?: number;

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
   * Absolute stellar parallax of the source, in milliarcseconds.
   */
  parallax?: number;

  /**
   * Uncertainty of the stellar parallax, in milliarcseconds.
   */
  parallaxUnc?: number;

  /**
   * Proper motion in declination of the source, in milliarcseconds/year, at the
   * reference epoch.
   */
  pmdec?: number;

  /**
   * Uncertainty of proper motion in declination, in milliarcseconds/year.
   */
  pmdecUnc?: number;

  /**
   * Proper motion in right ascension of the source, in milliarcseconds/year, at the
   * reference epoch.
   */
  pmra?: number;

  /**
   * Uncertainty of proper motion in right ascension, in milliarcseconds/year.
   */
  pmraUnc?: number;

  /**
   * Flag indicating that the proper motion uncertainty in either ra or dec is
   * greater than 10 milliarcseconds/year.
   */
  pmUncFlag?: boolean;

  /**
   * Flag indicating that the position uncertainty in either ra or dec is greater
   * than 100 milliarcseconds.
   */
  posUncFlag?: boolean;

  /**
   * Uncertainty of the right ascension of the source, in milliarcseconds, at the
   * reference epoch.
   */
  raUnc?: number;

  /**
   * Gaia DR3 optical Rp-band magnitude in the Vega scale.
   */
  rpmag?: number;

  /**
   * Gaia DR3 optical photometric Rp-band magnitude uncertainty in the Vega scale.
   */
  rpmagUnc?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds.
   */
  shift?: number;

  /**
   * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
   */
  shiftFlag?: boolean;

  /**
   * Time the row was updated in the database.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database.
   */
  updatedBy?: string;

  /**
   * Flag indicating that the source exhibits variable magnitude.
   */
  varFlag?: boolean;
}

export type StarCatalogTupleResponse = Array<StarCatalogTupleResponse.StarCatalogTupleResponseItem>;

export namespace StarCatalogTupleResponse {
  /**
   * The star catalog provides the position, proper motion, parallax, and photometric
   * magnitudes at various bandpasses of a star.
   */
  export interface StarCatalogTupleResponseItem {
    /**
     * Originating astrometric catalog for this object. Enum: [GAIADR3, HIPPARCOS,
     * USNOBSC].
     */
    astrometryOrigin: 'GAIADR3' | 'HIPPARCOS' | 'USNOBSC';

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * The ID of this object in the specific catalog associated with this record.
     */
    csId: number;

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
     * Barycentric declination of the source in International Celestial Reference
     * System (ICRS) at the reference epoch, in degrees.
     */
    dec: number;

    /**
     * Barycentric right ascension of the source in the International Celestial
     * Reference System (ICRS) frame at the reference epoch, in degrees.
     */
    ra: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Reference epoch to which the astrometric source parameters are referred,
     * expressed as Julian Year in Barycentric Coordinate Time (TCB).
     */
    starEpoch: number;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Gaia DR3 optical photometric Bp-band magnitude in the Vega scale.
     */
    bpmag?: number;

    /**
     * Gaia DR3 optical Bp-band magnitude uncertainty in the Vega scale.
     */
    bpmagUnc?: number;

    /**
     * The version of the catalog associated with this object.
     */
    catVersion?: string;

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
     * Uncertainty of the declination of the source, in milliarcseconds, at the
     * reference epoch.
     */
    decUnc?: number;

    /**
     * The ID of this object in the Gaia DR3 Catalog.
     */
    gaiadr3CatId?: number;

    /**
     * Gaia DR3 optical photometric G-band magnitude in the Vega scale.
     */
    gmag?: number;

    /**
     * Gaia DR3 optical photometric G-band magnitude uncertainty in the Vega scale.
     */
    gmagUnc?: number;

    /**
     * The ID of this object in the Guidance and Navagation Control (GNC) Catalog.
     */
    gncCatId?: number;

    /**
     * The ID of this object in the Hipparcos Catalog.
     */
    hipCatId?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric H-band magnitude in the Vega scale.
     */
    hmag?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric H-band magnitude uncertainty in the Vega scale.
     */
    hmagUnc?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric J-band magnitude in the Vega scale.
     */
    jmag?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric J-band magnitude uncertainty in the Vega scale.
     */
    jmagUnc?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric K-band magnitude in the Vega scale.
     */
    kmag?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric K-band magnitude uncertainty in the Vega scale.
     */
    kmagUnc?: number;

    /**
     * Flag indicating that this is a multiple object source.
     */
    multFlag?: boolean;

    /**
     * Distance between source and nearest neighbor, in arcseconds.
     */
    neighborDistance?: number;

    /**
     * Flag indicating that the nearest catalog neighbor is closer than 4.6 arcseconds.
     */
    neighborFlag?: boolean;

    /**
     * The catalog ID of the nearest neighbor to this source.
     */
    neighborId?: number;

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
     * Absolute stellar parallax of the source, in milliarcseconds.
     */
    parallax?: number;

    /**
     * Uncertainty of the stellar parallax, in milliarcseconds.
     */
    parallaxUnc?: number;

    /**
     * Proper motion in declination of the source, in milliarcseconds/year, at the
     * reference epoch.
     */
    pmdec?: number;

    /**
     * Uncertainty of proper motion in declination, in milliarcseconds/year.
     */
    pmdecUnc?: number;

    /**
     * Proper motion in right ascension of the source, in milliarcseconds/year, at the
     * reference epoch.
     */
    pmra?: number;

    /**
     * Uncertainty of proper motion in right ascension, in milliarcseconds/year.
     */
    pmraUnc?: number;

    /**
     * Flag indicating that the proper motion uncertainty in either ra or dec is
     * greater than 10 milliarcseconds/year.
     */
    pmUncFlag?: boolean;

    /**
     * Flag indicating that the position uncertainty in either ra or dec is greater
     * than 100 milliarcseconds.
     */
    posUncFlag?: boolean;

    /**
     * Uncertainty of the right ascension of the source, in milliarcseconds, at the
     * reference epoch.
     */
    raUnc?: number;

    /**
     * Gaia DR3 optical Rp-band magnitude in the Vega scale.
     */
    rpmag?: number;

    /**
     * Gaia DR3 optical photometric Rp-band magnitude uncertainty in the Vega scale.
     */
    rpmagUnc?: number;

    /**
     * Photocentric shift caused by neighbors, in arcseconds.
     */
    shift?: number;

    /**
     * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
     */
    shiftFlag?: boolean;

    /**
     * Time the row was updated in the database.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database.
     */
    updatedBy?: string;

    /**
     * Flag indicating that the source exhibits variable magnitude.
     */
    varFlag?: boolean;
  }
}

export interface StarCatalogCreateParams {
  /**
   * Originating astrometric catalog for this object. Enum: [GAIADR3, HIPPARCOS,
   * USNOBSC].
   */
  astrometryOrigin: 'GAIADR3' | 'HIPPARCOS' | 'USNOBSC';

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The ID of this object in the specific catalog associated with this record.
   */
  csId: number;

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
   * Barycentric declination of the source in International Celestial Reference
   * System (ICRS) at the reference epoch, in degrees.
   */
  dec: number;

  /**
   * Barycentric right ascension of the source in the International Celestial
   * Reference System (ICRS) frame at the reference epoch, in degrees.
   */
  ra: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Reference epoch to which the astrometric source parameters are referred,
   * expressed as Julian Year in Barycentric Coordinate Time (TCB).
   */
  starEpoch: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Gaia DR3 optical photometric Bp-band magnitude in the Vega scale.
   */
  bpmag?: number;

  /**
   * Gaia DR3 optical Bp-band magnitude uncertainty in the Vega scale.
   */
  bpmagUnc?: number;

  /**
   * The version of the catalog associated with this object.
   */
  catVersion?: string;

  /**
   * Uncertainty of the declination of the source, in milliarcseconds, at the
   * reference epoch.
   */
  decUnc?: number;

  /**
   * The ID of this object in the Gaia DR3 Catalog.
   */
  gaiadr3CatId?: number;

  /**
   * Gaia DR3 optical photometric G-band magnitude in the Vega scale.
   */
  gmag?: number;

  /**
   * Gaia DR3 optical photometric G-band magnitude uncertainty in the Vega scale.
   */
  gmagUnc?: number;

  /**
   * The ID of this object in the Guidance and Navagation Control (GNC) Catalog.
   */
  gncCatId?: number;

  /**
   * The ID of this object in the Hipparcos Catalog.
   */
  hipCatId?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric H-band magnitude in the Vega scale.
   */
  hmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric H-band magnitude uncertainty in the Vega scale.
   */
  hmagUnc?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric J-band magnitude in the Vega scale.
   */
  jmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric J-band magnitude uncertainty in the Vega scale.
   */
  jmagUnc?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric K-band magnitude in the Vega scale.
   */
  kmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric K-band magnitude uncertainty in the Vega scale.
   */
  kmagUnc?: number;

  /**
   * Flag indicating that this is a multiple object source.
   */
  multFlag?: boolean;

  /**
   * Distance between source and nearest neighbor, in arcseconds.
   */
  neighborDistance?: number;

  /**
   * Flag indicating that the nearest catalog neighbor is closer than 4.6 arcseconds.
   */
  neighborFlag?: boolean;

  /**
   * The catalog ID of the nearest neighbor to this source.
   */
  neighborId?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Absolute stellar parallax of the source, in milliarcseconds.
   */
  parallax?: number;

  /**
   * Uncertainty of the stellar parallax, in milliarcseconds.
   */
  parallaxUnc?: number;

  /**
   * Proper motion in declination of the source, in milliarcseconds/year, at the
   * reference epoch.
   */
  pmdec?: number;

  /**
   * Uncertainty of proper motion in declination, in milliarcseconds/year.
   */
  pmdecUnc?: number;

  /**
   * Proper motion in right ascension of the source, in milliarcseconds/year, at the
   * reference epoch.
   */
  pmra?: number;

  /**
   * Uncertainty of proper motion in right ascension, in milliarcseconds/year.
   */
  pmraUnc?: number;

  /**
   * Flag indicating that the proper motion uncertainty in either ra or dec is
   * greater than 10 milliarcseconds/year.
   */
  pmUncFlag?: boolean;

  /**
   * Flag indicating that the position uncertainty in either ra or dec is greater
   * than 100 milliarcseconds.
   */
  posUncFlag?: boolean;

  /**
   * Uncertainty of the right ascension of the source, in milliarcseconds, at the
   * reference epoch.
   */
  raUnc?: number;

  /**
   * Gaia DR3 optical Rp-band magnitude in the Vega scale.
   */
  rpmag?: number;

  /**
   * Gaia DR3 optical photometric Rp-band magnitude uncertainty in the Vega scale.
   */
  rpmagUnc?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds.
   */
  shift?: number;

  /**
   * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
   */
  shiftFlag?: boolean;

  /**
   * Flag indicating that the source exhibits variable magnitude.
   */
  varFlag?: boolean;
}

export interface StarCatalogUpdateParams {
  /**
   * Originating astrometric catalog for this object. Enum: [GAIADR3, HIPPARCOS,
   * USNOBSC].
   */
  astrometryOrigin: 'GAIADR3' | 'HIPPARCOS' | 'USNOBSC';

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The ID of this object in the specific catalog associated with this record.
   */
  csId: number;

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
   * Barycentric declination of the source in International Celestial Reference
   * System (ICRS) at the reference epoch, in degrees.
   */
  dec: number;

  /**
   * Barycentric right ascension of the source in the International Celestial
   * Reference System (ICRS) frame at the reference epoch, in degrees.
   */
  ra: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Reference epoch to which the astrometric source parameters are referred,
   * expressed as Julian Year in Barycentric Coordinate Time (TCB).
   */
  starEpoch: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Gaia DR3 optical photometric Bp-band magnitude in the Vega scale.
   */
  bpmag?: number;

  /**
   * Gaia DR3 optical Bp-band magnitude uncertainty in the Vega scale.
   */
  bpmagUnc?: number;

  /**
   * The version of the catalog associated with this object.
   */
  catVersion?: string;

  /**
   * Uncertainty of the declination of the source, in milliarcseconds, at the
   * reference epoch.
   */
  decUnc?: number;

  /**
   * The ID of this object in the Gaia DR3 Catalog.
   */
  gaiadr3CatId?: number;

  /**
   * Gaia DR3 optical photometric G-band magnitude in the Vega scale.
   */
  gmag?: number;

  /**
   * Gaia DR3 optical photometric G-band magnitude uncertainty in the Vega scale.
   */
  gmagUnc?: number;

  /**
   * The ID of this object in the Guidance and Navagation Control (GNC) Catalog.
   */
  gncCatId?: number;

  /**
   * The ID of this object in the Hipparcos Catalog.
   */
  hipCatId?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric H-band magnitude in the Vega scale.
   */
  hmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric H-band magnitude uncertainty in the Vega scale.
   */
  hmagUnc?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric J-band magnitude in the Vega scale.
   */
  jmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric J-band magnitude uncertainty in the Vega scale.
   */
  jmagUnc?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric K-band magnitude in the Vega scale.
   */
  kmag?: number;

  /**
   * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
   * photometric K-band magnitude uncertainty in the Vega scale.
   */
  kmagUnc?: number;

  /**
   * Flag indicating that this is a multiple object source.
   */
  multFlag?: boolean;

  /**
   * Distance between source and nearest neighbor, in arcseconds.
   */
  neighborDistance?: number;

  /**
   * Flag indicating that the nearest catalog neighbor is closer than 4.6 arcseconds.
   */
  neighborFlag?: boolean;

  /**
   * The catalog ID of the nearest neighbor to this source.
   */
  neighborId?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Absolute stellar parallax of the source, in milliarcseconds.
   */
  parallax?: number;

  /**
   * Uncertainty of the stellar parallax, in milliarcseconds.
   */
  parallaxUnc?: number;

  /**
   * Proper motion in declination of the source, in milliarcseconds/year, at the
   * reference epoch.
   */
  pmdec?: number;

  /**
   * Uncertainty of proper motion in declination, in milliarcseconds/year.
   */
  pmdecUnc?: number;

  /**
   * Proper motion in right ascension of the source, in milliarcseconds/year, at the
   * reference epoch.
   */
  pmra?: number;

  /**
   * Uncertainty of proper motion in right ascension, in milliarcseconds/year.
   */
  pmraUnc?: number;

  /**
   * Flag indicating that the proper motion uncertainty in either ra or dec is
   * greater than 10 milliarcseconds/year.
   */
  pmUncFlag?: boolean;

  /**
   * Flag indicating that the position uncertainty in either ra or dec is greater
   * than 100 milliarcseconds.
   */
  posUncFlag?: boolean;

  /**
   * Uncertainty of the right ascension of the source, in milliarcseconds, at the
   * reference epoch.
   */
  raUnc?: number;

  /**
   * Gaia DR3 optical Rp-band magnitude in the Vega scale.
   */
  rpmag?: number;

  /**
   * Gaia DR3 optical photometric Rp-band magnitude uncertainty in the Vega scale.
   */
  rpmagUnc?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds.
   */
  shift?: number;

  /**
   * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
   */
  shiftFlag?: boolean;

  /**
   * Flag indicating that the source exhibits variable magnitude.
   */
  varFlag?: boolean;
}

export interface StarCatalogListParams extends OffsetPageParams {
  /**
   * (One or more of fields 'dec, ra' are required.) Barycentric declination of the
   * source in International Celestial Reference System (ICRS) at the reference
   * epoch, in degrees.
   */
  dec?: number;

  /**
   * (One or more of fields 'dec, ra' are required.) Barycentric right ascension of
   * the source in the International Celestial Reference System (ICRS) frame at the
   * reference epoch, in degrees.
   */
  ra?: number;
}

export interface StarCatalogCountParams {
  /**
   * (One or more of fields 'dec, ra' are required.) Barycentric declination of the
   * source in International Celestial Reference System (ICRS) at the reference
   * epoch, in degrees.
   */
  dec?: number;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'dec, ra' are required.) Barycentric right ascension of
   * the source in the International Celestial Reference System (ICRS) frame at the
   * reference epoch, in degrees.
   */
  ra?: number;
}

export interface StarCatalogCreateBulkParams {
  body: Array<StarCatalogCreateBulkParams.Body>;
}

export namespace StarCatalogCreateBulkParams {
  /**
   * The star catalog provides the position, proper motion, parallax, and photometric
   * magnitudes at various bandpasses of a star.
   */
  export interface Body {
    /**
     * Originating astrometric catalog for this object. Enum: [GAIADR3, HIPPARCOS,
     * USNOBSC].
     */
    astrometryOrigin: 'GAIADR3' | 'HIPPARCOS' | 'USNOBSC';

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * The ID of this object in the specific catalog associated with this record.
     */
    csId: number;

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
     * Barycentric declination of the source in International Celestial Reference
     * System (ICRS) at the reference epoch, in degrees.
     */
    dec: number;

    /**
     * Barycentric right ascension of the source in the International Celestial
     * Reference System (ICRS) frame at the reference epoch, in degrees.
     */
    ra: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Reference epoch to which the astrometric source parameters are referred,
     * expressed as Julian Year in Barycentric Coordinate Time (TCB).
     */
    starEpoch: number;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Gaia DR3 optical photometric Bp-band magnitude in the Vega scale.
     */
    bpmag?: number;

    /**
     * Gaia DR3 optical Bp-band magnitude uncertainty in the Vega scale.
     */
    bpmagUnc?: number;

    /**
     * The version of the catalog associated with this object.
     */
    catVersion?: string;

    /**
     * Uncertainty of the declination of the source, in milliarcseconds, at the
     * reference epoch.
     */
    decUnc?: number;

    /**
     * The ID of this object in the Gaia DR3 Catalog.
     */
    gaiadr3CatId?: number;

    /**
     * Gaia DR3 optical photometric G-band magnitude in the Vega scale.
     */
    gmag?: number;

    /**
     * Gaia DR3 optical photometric G-band magnitude uncertainty in the Vega scale.
     */
    gmagUnc?: number;

    /**
     * The ID of this object in the Guidance and Navagation Control (GNC) Catalog.
     */
    gncCatId?: number;

    /**
     * The ID of this object in the Hipparcos Catalog.
     */
    hipCatId?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric H-band magnitude in the Vega scale.
     */
    hmag?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric H-band magnitude uncertainty in the Vega scale.
     */
    hmagUnc?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric J-band magnitude in the Vega scale.
     */
    jmag?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric J-band magnitude uncertainty in the Vega scale.
     */
    jmagUnc?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric K-band magnitude in the Vega scale.
     */
    kmag?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric K-band magnitude uncertainty in the Vega scale.
     */
    kmagUnc?: number;

    /**
     * Flag indicating that this is a multiple object source.
     */
    multFlag?: boolean;

    /**
     * Distance between source and nearest neighbor, in arcseconds.
     */
    neighborDistance?: number;

    /**
     * Flag indicating that the nearest catalog neighbor is closer than 4.6 arcseconds.
     */
    neighborFlag?: boolean;

    /**
     * The catalog ID of the nearest neighbor to this source.
     */
    neighborId?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Absolute stellar parallax of the source, in milliarcseconds.
     */
    parallax?: number;

    /**
     * Uncertainty of the stellar parallax, in milliarcseconds.
     */
    parallaxUnc?: number;

    /**
     * Proper motion in declination of the source, in milliarcseconds/year, at the
     * reference epoch.
     */
    pmdec?: number;

    /**
     * Uncertainty of proper motion in declination, in milliarcseconds/year.
     */
    pmdecUnc?: number;

    /**
     * Proper motion in right ascension of the source, in milliarcseconds/year, at the
     * reference epoch.
     */
    pmra?: number;

    /**
     * Uncertainty of proper motion in right ascension, in milliarcseconds/year.
     */
    pmraUnc?: number;

    /**
     * Flag indicating that the proper motion uncertainty in either ra or dec is
     * greater than 10 milliarcseconds/year.
     */
    pmUncFlag?: boolean;

    /**
     * Flag indicating that the position uncertainty in either ra or dec is greater
     * than 100 milliarcseconds.
     */
    posUncFlag?: boolean;

    /**
     * Uncertainty of the right ascension of the source, in milliarcseconds, at the
     * reference epoch.
     */
    raUnc?: number;

    /**
     * Gaia DR3 optical Rp-band magnitude in the Vega scale.
     */
    rpmag?: number;

    /**
     * Gaia DR3 optical photometric Rp-band magnitude uncertainty in the Vega scale.
     */
    rpmagUnc?: number;

    /**
     * Photocentric shift caused by neighbors, in arcseconds.
     */
    shift?: number;

    /**
     * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
     */
    shiftFlag?: boolean;

    /**
     * Flag indicating that the source exhibits variable magnitude.
     */
    varFlag?: boolean;
  }
}

export interface StarCatalogGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface StarCatalogTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * (One or more of fields 'dec, ra' are required.) Barycentric declination of the
   * source in International Celestial Reference System (ICRS) at the reference
   * epoch, in degrees.
   */
  dec?: number;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'dec, ra' are required.) Barycentric right ascension of
   * the source in the International Celestial Reference System (ICRS) frame at the
   * reference epoch, in degrees.
   */
  ra?: number;
}

export interface StarCatalogUnvalidatedPublishParams {
  body: Array<StarCatalogUnvalidatedPublishParams.Body>;
}

export namespace StarCatalogUnvalidatedPublishParams {
  /**
   * The star catalog provides the position, proper motion, parallax, and photometric
   * magnitudes at various bandpasses of a star.
   */
  export interface Body {
    /**
     * Originating astrometric catalog for this object. Enum: [GAIADR3, HIPPARCOS,
     * USNOBSC].
     */
    astrometryOrigin: 'GAIADR3' | 'HIPPARCOS' | 'USNOBSC';

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * The ID of this object in the specific catalog associated with this record.
     */
    csId: number;

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
     * Barycentric declination of the source in International Celestial Reference
     * System (ICRS) at the reference epoch, in degrees.
     */
    dec: number;

    /**
     * Barycentric right ascension of the source in the International Celestial
     * Reference System (ICRS) frame at the reference epoch, in degrees.
     */
    ra: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Reference epoch to which the astrometric source parameters are referred,
     * expressed as Julian Year in Barycentric Coordinate Time (TCB).
     */
    starEpoch: number;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Gaia DR3 optical photometric Bp-band magnitude in the Vega scale.
     */
    bpmag?: number;

    /**
     * Gaia DR3 optical Bp-band magnitude uncertainty in the Vega scale.
     */
    bpmagUnc?: number;

    /**
     * The version of the catalog associated with this object.
     */
    catVersion?: string;

    /**
     * Uncertainty of the declination of the source, in milliarcseconds, at the
     * reference epoch.
     */
    decUnc?: number;

    /**
     * The ID of this object in the Gaia DR3 Catalog.
     */
    gaiadr3CatId?: number;

    /**
     * Gaia DR3 optical photometric G-band magnitude in the Vega scale.
     */
    gmag?: number;

    /**
     * Gaia DR3 optical photometric G-band magnitude uncertainty in the Vega scale.
     */
    gmagUnc?: number;

    /**
     * The ID of this object in the Guidance and Navagation Control (GNC) Catalog.
     */
    gncCatId?: number;

    /**
     * The ID of this object in the Hipparcos Catalog.
     */
    hipCatId?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric H-band magnitude in the Vega scale.
     */
    hmag?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric H-band magnitude uncertainty in the Vega scale.
     */
    hmagUnc?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric J-band magnitude in the Vega scale.
     */
    jmag?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric J-band magnitude uncertainty in the Vega scale.
     */
    jmagUnc?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric K-band magnitude in the Vega scale.
     */
    kmag?: number;

    /**
     * Two Micron All Sky Survey (2MASS) Point Source Catalog (PSC) near-infrared
     * photometric K-band magnitude uncertainty in the Vega scale.
     */
    kmagUnc?: number;

    /**
     * Flag indicating that this is a multiple object source.
     */
    multFlag?: boolean;

    /**
     * Distance between source and nearest neighbor, in arcseconds.
     */
    neighborDistance?: number;

    /**
     * Flag indicating that the nearest catalog neighbor is closer than 4.6 arcseconds.
     */
    neighborFlag?: boolean;

    /**
     * The catalog ID of the nearest neighbor to this source.
     */
    neighborId?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Absolute stellar parallax of the source, in milliarcseconds.
     */
    parallax?: number;

    /**
     * Uncertainty of the stellar parallax, in milliarcseconds.
     */
    parallaxUnc?: number;

    /**
     * Proper motion in declination of the source, in milliarcseconds/year, at the
     * reference epoch.
     */
    pmdec?: number;

    /**
     * Uncertainty of proper motion in declination, in milliarcseconds/year.
     */
    pmdecUnc?: number;

    /**
     * Proper motion in right ascension of the source, in milliarcseconds/year, at the
     * reference epoch.
     */
    pmra?: number;

    /**
     * Uncertainty of proper motion in right ascension, in milliarcseconds/year.
     */
    pmraUnc?: number;

    /**
     * Flag indicating that the proper motion uncertainty in either ra or dec is
     * greater than 10 milliarcseconds/year.
     */
    pmUncFlag?: boolean;

    /**
     * Flag indicating that the position uncertainty in either ra or dec is greater
     * than 100 milliarcseconds.
     */
    posUncFlag?: boolean;

    /**
     * Uncertainty of the right ascension of the source, in milliarcseconds, at the
     * reference epoch.
     */
    raUnc?: number;

    /**
     * Gaia DR3 optical Rp-band magnitude in the Vega scale.
     */
    rpmag?: number;

    /**
     * Gaia DR3 optical photometric Rp-band magnitude uncertainty in the Vega scale.
     */
    rpmagUnc?: number;

    /**
     * Photocentric shift caused by neighbors, in arcseconds.
     */
    shift?: number;

    /**
     * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
     */
    shiftFlag?: boolean;

    /**
     * Flag indicating that the source exhibits variable magnitude.
     */
    varFlag?: boolean;
  }
}

StarCatalog.History = History;

export declare namespace StarCatalog {
  export {
    type StarCatalogListResponse as StarCatalogListResponse,
    type StarCatalogCountResponse as StarCatalogCountResponse,
    type StarCatalogGetResponse as StarCatalogGetResponse,
    type StarCatalogTupleResponse as StarCatalogTupleResponse,
    type StarCatalogListResponsesOffsetPage as StarCatalogListResponsesOffsetPage,
    type StarCatalogCreateParams as StarCatalogCreateParams,
    type StarCatalogUpdateParams as StarCatalogUpdateParams,
    type StarCatalogListParams as StarCatalogListParams,
    type StarCatalogCountParams as StarCatalogCountParams,
    type StarCatalogCreateBulkParams as StarCatalogCreateBulkParams,
    type StarCatalogGetParams as StarCatalogGetParams,
    type StarCatalogTupleParams as StarCatalogTupleParams,
    type StarCatalogUnvalidatedPublishParams as StarCatalogUnvalidatedPublishParams,
  };

  export { History as History, type HistoryAodrParams as HistoryAodrParams };
}
