// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import { History, HistoryAodrParams } from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * These services provide operations for posting and querying Star Catalog data. The Star Catalog model is a representation of astronomical data and photometric data for stars. Astronomical data includes positional information, proper motions, parallaxes and their respective uncertainties. Photometric data contains optical and near-infrared magnitudes, and their uncertainties across multiple bandpasses. Note: Multiple source catalogs may contribute to a single record.
 */
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
   *   astrometryOrigin: 'GA',
   *   classificationMarking: 'U',
   *   csId: 12345,
   *   dataMode: 'TEST',
   *   dec: 21.8,
   *   ra: 14.43,
   *   source: 'Bluestaq',
   *   starEpoch: 2018.864,
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
   *   astrometryOrigin: 'GA',
   *   classificationMarking: 'U',
   *   csId: 12345,
   *   dataMode: 'TEST',
   *   dec: 21.8,
   *   ra: 14.43,
   *   source: 'Bluestaq',
   *   starEpoch: 2018.864,
   * });
   * ```
   */
  update(id: string, body: StarCatalogUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/starcatalog/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (`/udl/<datatype>/queryhelp`) for more details on valid/required query parameter
   * information.
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
   * queryhelp operation (`/udl/<datatype>/queryhelp`) for more details on
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
   *       astrometryOrigin: 'GA',
   *       classificationMarking: 'U',
   *       csId: 12345,
   *       dataMode: 'TEST',
   *       dec: 21.8,
   *       ra: 14.43,
   *       source: 'Bluestaq',
   *       starEpoch: 2018.864,
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
   * const response = await client.starCatalog.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<StarCatalogQueryhelpResponse> {
    return this._client.get('/udl/starcatalog/queryhelp', options);
  }

  /**
   * Service operation to dynamically query data and only return specified
   * columns/fields. Requested columns are specified by the 'columns' query parameter
   * and should be a comma separated list of valid fields for the specified data
   * type. classificationMarking is always returned. See the queryhelp operation
   * (`/udl/<datatype>/queryhelp`) for more details on valid/required query parameter
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
   *       astrometryOrigin: 'GA',
   *       classificationMarking: 'U',
   *       csId: 12345,
   *       dataMode: 'TEST',
   *       dec: 21.8,
   *       ra: 14.43,
   *       source: 'Bluestaq',
   *       starEpoch: 2018.864,
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
   * Originating astrometric catalog for this object (GA (GAIA), HI (HIPPARCOS), UB
   * (USNOBSC), AL, AP, CA, CR, DU, FK6_I, FK6_III, PS, SK, TD, TP, TX, UC, UL, UH,
   * UP, VH, VS, WD).
   */
  astrometryOrigin: string;

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The ID of this object in the specific catalog associated with this record. This
   * field will either contain the value in the gncCatId or sdaCatId field.
   */
  csId: number;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL: Data collected or produced that pertains to real-world objects, events,
   * and analysis.
   *
   * TEST: Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE: Data pertaining to a government or military exercise. The data may
   * include both real and simulated data.
   *
   * SIMULATED: Synthetic data generated by a model to mimic real-world datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

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
   * The American Association of Variable Star Observers (AAVSO) Variable Star Index
   * (VSX) (VX) object ID of this object.
   */
  aavsoVsxId?: number;

  /**
   * Optical AB g magnitude.
   */
  abgmag?: number;

  /**
   * Catalog of origin of optical AB g magnitude.
   */
  abgmagOrigin?: string;

  /**
   * Uncertainty of optical AB g magnitude.
   */
  abgmagUnc?: number;

  /**
   * Optical AB i magnitude.
   */
  abimag?: number;

  /**
   * Catalog of origin of optical AB i magnitude.
   */
  abimagOrigin?: string;

  /**
   * Uncertainty of optical AB i magnitude.
   */
  abimagUnc?: number;

  /**
   * Optical AB r magnitude.
   */
  abrmag?: number;

  /**
   * Catalog of origin of optical AB r magnitude.
   */
  abrmagOrigin?: string;

  /**
   * Uncertainty of optical AB r magnitude.
   */
  abrmagUnc?: number;

  /**
   * Optical AB y magnitude.
   */
  abymag?: number;

  /**
   * Catalog of origin of optical AB y magnitude.
   */
  abymagOrigin?: string;

  /**
   * Uncertainty of optical AB y magnitude.
   */
  abymagUnc?: number;

  /**
   * Optical AB z magnitude.
   */
  abzmag?: number;

  /**
   * Catalog of origin of optical AB z magnitude.
   */
  abzmagOrigin?: string;

  /**
   * Uncertainty of optical AB z magnitude.
   */
  abzmagUnc?: number;

  /**
   * Contamination and confusion indicator in AllWISE.
   */
  allWISEccInd?: string;

  /**
   * The designation of this object in the All Wide-field Infrared Survey Explorer
   * (AllWISE) catalog (AL).
   */
  allWISEId?: string;

  /**
   * Active deblending indicator in AllWISE.
   */
  allWISEnaInd?: number;

  /**
   * Photometric quality indicator in AllWISE.
   */
  allWISEphQualInd?: string;

  /**
   * The American Association of Variable Star Observers (AAVSO) Photometric All-Sky
   * Survey (APASS) (AP) name of this object.
   */
  apassId?: string;

  /**
   * Astrometric excess noise in the Gaia catalog measured in milliarcseconds.
   */
  astrometricExcessNoise?: number;

  /**
   * Astrometric excess noise sigma in Gaia.
   */
  astrometricExcessNoiseSig?: number;

  /**
   * Optical Johnson B magnitude measured in magnitudes.
   */
  bmag?: number;

  /**
   * Catalog of origin of optical Johnson B magnitude (AP, CR, HI).
   */
  bmagOrigin?: string;

  /**
   * Uncertainty of optical Johnson B magnitude measured in magnitudes.
   */
  bmagUnc?: number;

  /**
   * Gaia optical photometric Bp-band in the Vega scale measured in magnitudes.
   */
  bpmag?: number;

  /**
   * Gaia optical Bp-band uncertainty in the Vega scale measured in magnitudes.
   */
  bpmagUnc?: number;

  /**
   * The Carrasco catalog (CR) identifier of this object.
   */
  carrascoCatId?: number;

  /**
   * The version of the catalog associated with this object.
   */
  catVersion?: string;

  /**
   * The CatWISE2020 (CA) catalog source ID of this object.
   */
  catWise2020Id?: string;

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
   * The Ducati catalog (DU) name of this object.
   */
  ducatiCatId?: string;

  /**
   * The source ID of this object in the Gaia DR3 Catalog (GA).
   */
  gaiadr3CatId?: number;

  /**
   * Gaia optical photometric G-band in the Vega scale measured in magnitudes.
   */
  gmag?: number;

  /**
   * Gaia optical photometric G-band uncertainty in the Vega scale measured in
   * magnitudes.
   */
  gmagUnc?: number;

  /**
   * The ID of this object in the Guidance and Navigation Control (GNC) Catalog. If
   * this field is populated it shall match the csId field.
   */
  gncCatId?: number;

  /**
   * The Healpix index. Consumers should contact the provider for details on the
   * indexing scheme.
   */
  healpixIndex?: number;

  /**
   * The HIP ID of this object in the Hipparcos Catalog (HI).
   */
  hipCatId?: number;

  /**
   * Near-infrared photometric H-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  hmag?: number;

  /**
   * Near-infrared photometric H-band catalog of origin in the Vega scale (TP, UC,
   * UL, UP, VH).
   */
  hmagOrigin?: string;

  /**
   * Near-infrared photometric H-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  hmagUnc?: number;

  /**
   * Optical Johnson I magnitude measured in magnitudes.
   */
  imag?: number;

  /**
   * Catalog of origin of optical Johnson I magnitude (CR, GA, HI).
   */
  imagOrigin?: string;

  /**
   * Uncertainty of optical Johnson I magnitude measured in magnitudes.
   */
  imagUnc?: number;

  /**
   * Near-infrared photometric J-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  jmag?: number;

  /**
   * Near-infrared photometric J-band catalog of origin in the Vega scale (TP, UH,
   * UL, UP, VH).
   */
  jmagOrigin?: string;

  /**
   * Near-infrared photometric J-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  jmagUnc?: number;

  /**
   * Near-infrared photometric K-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  kmag?: number;

  /**
   * Near-infrared photometric K-band catalog of origin in the Vega scale (TP, UC,
   * UH, UL, UP, VH).
   */
  kmagOrigin?: string;

  /**
   * Near-infrared photometric K-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  kmagUnc?: number;

  /**
   * Morphology indicator. Consumers should contact the provider for details on the
   * specifications.
   */
  morphologyInd?: number;

  /**
   * Flag indicating that this is a multiple object source.
   */
  multFlag?: boolean;

  /**
   * Identifier indicating multiplicity is detected. Consumers should contact the
   * provider for details on the specifications.
   */
  multiplicity?: string;

  /**
   * Dec of nearest neighbor measured in degrees.
   */
  neighborDec?: number;

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
   * RA of nearest neighbor measured in degrees.
   */
  neighborRa?: number;

  /**
   * Identifier indicating the source is a non-single star in gaia (additional
   * information is available in non-single star tables. Consumers should contact the
   * provider for details on the specifications).
   */
  nonSingleStar?: string;

  /**
   * Number of neighbors.
   */
  numNeighbors?: number;

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
   * The Panoramic Survey Telescope and Rapid Response System (Pan-STARRS) (PS)
   * object ID.
   */
  panStarrsId?: number;

  /**
   * Absolute stellar parallax of the source, in milliarcseconds.
   */
  parallax?: number;

  /**
   * Uncertainty of the stellar parallax, in milliarcseconds.
   */
  parallaxUnc?: number;

  /**
   * Proper motion in declination of the source, in milliarcseconds per year, at the
   * reference epoch.
   */
  pmdec?: number;

  /**
   * Uncertainty of proper motion in declination, in milliarcseconds per year.
   */
  pmdecUnc?: number;

  /**
   * Proper motion in right ascension of the source, in milliarcseconds per year, at
   * the reference epoch.
   */
  pmra?: number;

  /**
   * Uncertainty of proper motion in right ascension, in milliarcseconds per year.
   */
  pmraUnc?: number;

  /**
   * Flag indicating that the proper motion uncertainty in either ra or dec is
   * greater than 10 milliarcseconds per year.
   */
  pmUncFlag?: boolean;

  /**
   * Flag indicating that the position uncertainty in either ra or dec is greater
   * than 100 milliarcseconds.
   */
  posUncFlag?: boolean;

  /**
   * Astrometry correction flag in Pan-STARRS.
   */
  ps1astrometryCorrectionFlag?: number;

  /**
   * Object information flag in Pan-STARRS.
   */
  ps1ObjInfoFlag?: number;

  /**
   * Quality flag in Pan-STARRS.
   */
  ps1QualityFlag?: number;

  /**
   * Uncertainty of the right ascension of the source, in milliarcseconds, at the
   * reference epoch.
   */
  raUnc?: number;

  /**
   * Optical Johnson R magnitude measured in magnitudes.
   */
  rmag?: number;

  /**
   * Catalog of origin of the Optical Johnson R magnitude (CR, GA).
   */
  rmagOrigin?: string;

  /**
   * Uncertainty of the Optical Johnson R magnitude measured in magnitudes.
   */
  rmagUnc?: number;

  /**
   * Gaia optical Rp-band in the Vega scale measured in magnitudes.
   */
  rpmag?: number;

  /**
   * Gaia optical photometric Rp-band uncertainty in the Vega scale measured in
   * magnitudes.
   */
  rpmagUnc?: number;

  /**
   * RUWE in Gaia.
   */
  ruwe?: number;

  /**
   * The ID of this object in the Space Domain Awareness (SDA) Catalog. If this field
   * is populated it shall match the csId field.
   */
  sdaCatId?: number;

  /**
   * Original G magnitude if the source is in Gaia, otherwise the magnitude is
   * converted from other photometric passbands, when possible, measured in
   * magnitudes.
   */
  sgmag?: number;

  /**
   * Uncertainty of sgmag measured in magnitudes.
   */
  sgmagUnc?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds.
   */
  shift?: number;

  /**
   * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
   */
  shiftFlag?: boolean;

  /**
   * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
   * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of one
   * arcsecond.
   */
  shiftFWHM1?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
   * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of six
   * arcseconds.
   */
  shiftFWHM6?: number;

  /**
   * The SkyMapper (SK) catalog object ID.
   */
  skyMapperId?: number;

  /**
   * The designation of this object in the Two Micron All Sky Survey (2MASS) Point
   * Source Catalog (TP).
   */
  twoMASSId?: string;

  /**
   * Photometric (PH) quality indicator in 2MASS PSC.
   */
  twoMassPHQualInd?: string;

  /**
   * Read flag in 2MASS PSC.
   */
  twoMassReadFlag?: string;

  /**
   * The Two Micron All Sky Survey (2MASS) Extended Source Catalog (XSC) (TX)
   * designation of this object.
   */
  twoMassXscId?: string;

  /**
   * The Tycho Double Star Catalog (TD) identifier (specified as Tycho-2 ID) of this
   * object.
   */
  tychoDscId?: number;

  /**
   * The United Kingdom Infrared Telescope (UKIRT) Hemispheric Survey (UHS) (UH)
   * source ID of this object.
   */
  uhsId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Clusters Survey
   * (GCS) (UC) source ID of this object.
   */
  ukidssGCSId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Plane Survey (GPS)
   * (UP) source ID of this object.
   */
  ukidssGPSId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Large Area Survey (LAS)
   * (UL) source ID of this object.
   */
  ukidssLASId?: number;

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
   * Flag indicating that the source exhibits variable magnitude.
   */
  varFlag?: boolean;

  /**
   * Identifier indicating variability is present in the photometric data. Consumers
   * should contact the provider for details on the specifications.
   */
  variability?: string;

  /**
   * The Visible and Infrared Survey Telescope for Astronomy (VISTA) Hemisphere
   * Survey (VHS) (VS) source ID of this object.
   */
  vhsId?: number;

  /**
   * Optical Johnson V magnitude measured in magnitudes.
   */
  vmag?: number;

  /**
   * Catalog of origin of Optical Johnson V magnitude (AP, CR, DU, GA, HI).
   */
  vmagOrigin?: string;

  /**
   * Uncertainty of the Optical Johnson V magnitude measured in magnitudes.
   */
  vmagUnc?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w1mag?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) catalog of origin in the Vega
   * system (AL, CA).
   */
  w1magOrigin?: string;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w1magUnc?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) saturated pixel fraction in the
   * Vega system.
   */
  w1sat?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w2mag?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) catalog of origin in the Vega
   * system (AL, CA).
   */
  w2magOrigin?: string;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w2magUnc?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) saturated pixel fraction in the
   * Vega system.
   */
  w2sat?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w3mag?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) catalog of origin in the Vega
   * system (AL).
   */
  w3magOrigin?: string;

  /**
   * Mid-infrared photometric W3-band (12 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w3magUnc?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) saturated pixel fraction in the
   * Vega system.
   */
  w3sat?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w4mag?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) catalog of origin in the Vega
   * system (AL).
   */
  w4magOrigin?: string;

  /**
   * Mid-infrared photometric W4-band (22 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w4magUnc?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) saturated pixel fraction in the
   * Vega system.
   */
  w4sat?: number;

  /**
   * The Washington Double Star Catalog (WD) identifier of this object.
   */
  wdsCatId?: string;
}

export type StarCatalogCountResponse = string;

/**
 * The star catalog provides the position, proper motion, parallax, and photometric
 * magnitudes at various bandpasses of a star.
 */
export interface StarCatalogGetResponse {
  /**
   * Originating astrometric catalog for this object (GA (GAIA), HI (HIPPARCOS), UB
   * (USNOBSC), AL, AP, CA, CR, DU, FK6_I, FK6_III, PS, SK, TD, TP, TX, UC, UL, UH,
   * UP, VH, VS, WD).
   */
  astrometryOrigin: string;

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The ID of this object in the specific catalog associated with this record. This
   * field will either contain the value in the gncCatId or sdaCatId field.
   */
  csId: number;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL: Data collected or produced that pertains to real-world objects, events,
   * and analysis.
   *
   * TEST: Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE: Data pertaining to a government or military exercise. The data may
   * include both real and simulated data.
   *
   * SIMULATED: Synthetic data generated by a model to mimic real-world datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

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
   * The American Association of Variable Star Observers (AAVSO) Variable Star Index
   * (VSX) (VX) object ID of this object.
   */
  aavsoVsxId?: number;

  /**
   * Optical AB g magnitude.
   */
  abgmag?: number;

  /**
   * Catalog of origin of optical AB g magnitude.
   */
  abgmagOrigin?: string;

  /**
   * Uncertainty of optical AB g magnitude.
   */
  abgmagUnc?: number;

  /**
   * Optical AB i magnitude.
   */
  abimag?: number;

  /**
   * Catalog of origin of optical AB i magnitude.
   */
  abimagOrigin?: string;

  /**
   * Uncertainty of optical AB i magnitude.
   */
  abimagUnc?: number;

  /**
   * Optical AB r magnitude.
   */
  abrmag?: number;

  /**
   * Catalog of origin of optical AB r magnitude.
   */
  abrmagOrigin?: string;

  /**
   * Uncertainty of optical AB r magnitude.
   */
  abrmagUnc?: number;

  /**
   * Optical AB y magnitude.
   */
  abymag?: number;

  /**
   * Catalog of origin of optical AB y magnitude.
   */
  abymagOrigin?: string;

  /**
   * Uncertainty of optical AB y magnitude.
   */
  abymagUnc?: number;

  /**
   * Optical AB z magnitude.
   */
  abzmag?: number;

  /**
   * Catalog of origin of optical AB z magnitude.
   */
  abzmagOrigin?: string;

  /**
   * Uncertainty of optical AB z magnitude.
   */
  abzmagUnc?: number;

  /**
   * Contamination and confusion indicator in AllWISE.
   */
  allWISEccInd?: string;

  /**
   * The designation of this object in the All Wide-field Infrared Survey Explorer
   * (AllWISE) catalog (AL).
   */
  allWISEId?: string;

  /**
   * Active deblending indicator in AllWISE.
   */
  allWISEnaInd?: number;

  /**
   * Photometric quality indicator in AllWISE.
   */
  allWISEphQualInd?: string;

  /**
   * The American Association of Variable Star Observers (AAVSO) Photometric All-Sky
   * Survey (APASS) (AP) name of this object.
   */
  apassId?: string;

  /**
   * Astrometric excess noise in the Gaia catalog measured in milliarcseconds.
   */
  astrometricExcessNoise?: number;

  /**
   * Astrometric excess noise sigma in Gaia.
   */
  astrometricExcessNoiseSig?: number;

  /**
   * Optical Johnson B magnitude measured in magnitudes.
   */
  bmag?: number;

  /**
   * Catalog of origin of optical Johnson B magnitude (AP, CR, HI).
   */
  bmagOrigin?: string;

  /**
   * Uncertainty of optical Johnson B magnitude measured in magnitudes.
   */
  bmagUnc?: number;

  /**
   * Gaia optical photometric Bp-band in the Vega scale measured in magnitudes.
   */
  bpmag?: number;

  /**
   * Gaia optical Bp-band uncertainty in the Vega scale measured in magnitudes.
   */
  bpmagUnc?: number;

  /**
   * The Carrasco catalog (CR) identifier of this object.
   */
  carrascoCatId?: number;

  /**
   * The version of the catalog associated with this object.
   */
  catVersion?: string;

  /**
   * The CatWISE2020 (CA) catalog source ID of this object.
   */
  catWise2020Id?: string;

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
   * The Ducati catalog (DU) name of this object.
   */
  ducatiCatId?: string;

  /**
   * The source ID of this object in the Gaia DR3 Catalog (GA).
   */
  gaiadr3CatId?: number;

  /**
   * Gaia optical photometric G-band in the Vega scale measured in magnitudes.
   */
  gmag?: number;

  /**
   * Gaia optical photometric G-band uncertainty in the Vega scale measured in
   * magnitudes.
   */
  gmagUnc?: number;

  /**
   * The ID of this object in the Guidance and Navigation Control (GNC) Catalog. If
   * this field is populated it shall match the csId field.
   */
  gncCatId?: number;

  /**
   * The Healpix index. Consumers should contact the provider for details on the
   * indexing scheme.
   */
  healpixIndex?: number;

  /**
   * The HIP ID of this object in the Hipparcos Catalog (HI).
   */
  hipCatId?: number;

  /**
   * Near-infrared photometric H-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  hmag?: number;

  /**
   * Near-infrared photometric H-band catalog of origin in the Vega scale (TP, UC,
   * UL, UP, VH).
   */
  hmagOrigin?: string;

  /**
   * Near-infrared photometric H-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  hmagUnc?: number;

  /**
   * Optical Johnson I magnitude measured in magnitudes.
   */
  imag?: number;

  /**
   * Catalog of origin of optical Johnson I magnitude (CR, GA, HI).
   */
  imagOrigin?: string;

  /**
   * Uncertainty of optical Johnson I magnitude measured in magnitudes.
   */
  imagUnc?: number;

  /**
   * Near-infrared photometric J-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  jmag?: number;

  /**
   * Near-infrared photometric J-band catalog of origin in the Vega scale (TP, UH,
   * UL, UP, VH).
   */
  jmagOrigin?: string;

  /**
   * Near-infrared photometric J-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  jmagUnc?: number;

  /**
   * Near-infrared photometric K-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  kmag?: number;

  /**
   * Near-infrared photometric K-band catalog of origin in the Vega scale (TP, UC,
   * UH, UL, UP, VH).
   */
  kmagOrigin?: string;

  /**
   * Near-infrared photometric K-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  kmagUnc?: number;

  /**
   * Morphology indicator. Consumers should contact the provider for details on the
   * specifications.
   */
  morphologyInd?: number;

  /**
   * Flag indicating that this is a multiple object source.
   */
  multFlag?: boolean;

  /**
   * Identifier indicating multiplicity is detected. Consumers should contact the
   * provider for details on the specifications.
   */
  multiplicity?: string;

  /**
   * Dec of nearest neighbor measured in degrees.
   */
  neighborDec?: number;

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
   * RA of nearest neighbor measured in degrees.
   */
  neighborRa?: number;

  /**
   * Identifier indicating the source is a non-single star in gaia (additional
   * information is available in non-single star tables. Consumers should contact the
   * provider for details on the specifications).
   */
  nonSingleStar?: string;

  /**
   * Number of neighbors.
   */
  numNeighbors?: number;

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
   * The Panoramic Survey Telescope and Rapid Response System (Pan-STARRS) (PS)
   * object ID.
   */
  panStarrsId?: number;

  /**
   * Absolute stellar parallax of the source, in milliarcseconds.
   */
  parallax?: number;

  /**
   * Uncertainty of the stellar parallax, in milliarcseconds.
   */
  parallaxUnc?: number;

  /**
   * Proper motion in declination of the source, in milliarcseconds per year, at the
   * reference epoch.
   */
  pmdec?: number;

  /**
   * Uncertainty of proper motion in declination, in milliarcseconds per year.
   */
  pmdecUnc?: number;

  /**
   * Proper motion in right ascension of the source, in milliarcseconds per year, at
   * the reference epoch.
   */
  pmra?: number;

  /**
   * Uncertainty of proper motion in right ascension, in milliarcseconds per year.
   */
  pmraUnc?: number;

  /**
   * Flag indicating that the proper motion uncertainty in either ra or dec is
   * greater than 10 milliarcseconds per year.
   */
  pmUncFlag?: boolean;

  /**
   * Flag indicating that the position uncertainty in either ra or dec is greater
   * than 100 milliarcseconds.
   */
  posUncFlag?: boolean;

  /**
   * Astrometry correction flag in Pan-STARRS.
   */
  ps1astrometryCorrectionFlag?: number;

  /**
   * Object information flag in Pan-STARRS.
   */
  ps1ObjInfoFlag?: number;

  /**
   * Quality flag in Pan-STARRS.
   */
  ps1QualityFlag?: number;

  /**
   * Uncertainty of the right ascension of the source, in milliarcseconds, at the
   * reference epoch.
   */
  raUnc?: number;

  /**
   * Optical Johnson R magnitude measured in magnitudes.
   */
  rmag?: number;

  /**
   * Catalog of origin of the Optical Johnson R magnitude (CR, GA).
   */
  rmagOrigin?: string;

  /**
   * Uncertainty of the Optical Johnson R magnitude measured in magnitudes.
   */
  rmagUnc?: number;

  /**
   * Gaia optical Rp-band in the Vega scale measured in magnitudes.
   */
  rpmag?: number;

  /**
   * Gaia optical photometric Rp-band uncertainty in the Vega scale measured in
   * magnitudes.
   */
  rpmagUnc?: number;

  /**
   * RUWE in Gaia.
   */
  ruwe?: number;

  /**
   * The ID of this object in the Space Domain Awareness (SDA) Catalog. If this field
   * is populated it shall match the csId field.
   */
  sdaCatId?: number;

  /**
   * Original G magnitude if the source is in Gaia, otherwise the magnitude is
   * converted from other photometric passbands, when possible, measured in
   * magnitudes.
   */
  sgmag?: number;

  /**
   * Uncertainty of sgmag measured in magnitudes.
   */
  sgmagUnc?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds.
   */
  shift?: number;

  /**
   * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
   */
  shiftFlag?: boolean;

  /**
   * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
   * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of one
   * arcsecond.
   */
  shiftFWHM1?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
   * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of six
   * arcseconds.
   */
  shiftFWHM6?: number;

  /**
   * The SkyMapper (SK) catalog object ID.
   */
  skyMapperId?: number;

  /**
   * The designation of this object in the Two Micron All Sky Survey (2MASS) Point
   * Source Catalog (TP).
   */
  twoMASSId?: string;

  /**
   * Photometric (PH) quality indicator in 2MASS PSC.
   */
  twoMassPHQualInd?: string;

  /**
   * Read flag in 2MASS PSC.
   */
  twoMassReadFlag?: string;

  /**
   * The Two Micron All Sky Survey (2MASS) Extended Source Catalog (XSC) (TX)
   * designation of this object.
   */
  twoMassXscId?: string;

  /**
   * The Tycho Double Star Catalog (TD) identifier (specified as Tycho-2 ID) of this
   * object.
   */
  tychoDscId?: number;

  /**
   * The United Kingdom Infrared Telescope (UKIRT) Hemispheric Survey (UHS) (UH)
   * source ID of this object.
   */
  uhsId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Clusters Survey
   * (GCS) (UC) source ID of this object.
   */
  ukidssGCSId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Plane Survey (GPS)
   * (UP) source ID of this object.
   */
  ukidssGPSId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Large Area Survey (LAS)
   * (UL) source ID of this object.
   */
  ukidssLASId?: number;

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
   * Flag indicating that the source exhibits variable magnitude.
   */
  varFlag?: boolean;

  /**
   * Identifier indicating variability is present in the photometric data. Consumers
   * should contact the provider for details on the specifications.
   */
  variability?: string;

  /**
   * The Visible and Infrared Survey Telescope for Astronomy (VISTA) Hemisphere
   * Survey (VHS) (VS) source ID of this object.
   */
  vhsId?: number;

  /**
   * Optical Johnson V magnitude measured in magnitudes.
   */
  vmag?: number;

  /**
   * Catalog of origin of Optical Johnson V magnitude (AP, CR, DU, GA, HI).
   */
  vmagOrigin?: string;

  /**
   * Uncertainty of the Optical Johnson V magnitude measured in magnitudes.
   */
  vmagUnc?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w1mag?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) catalog of origin in the Vega
   * system (AL, CA).
   */
  w1magOrigin?: string;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w1magUnc?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) saturated pixel fraction in the
   * Vega system.
   */
  w1sat?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w2mag?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) catalog of origin in the Vega
   * system (AL, CA).
   */
  w2magOrigin?: string;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w2magUnc?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) saturated pixel fraction in the
   * Vega system.
   */
  w2sat?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w3mag?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) catalog of origin in the Vega
   * system (AL).
   */
  w3magOrigin?: string;

  /**
   * Mid-infrared photometric W3-band (12 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w3magUnc?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) saturated pixel fraction in the
   * Vega system.
   */
  w3sat?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w4mag?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) catalog of origin in the Vega
   * system (AL).
   */
  w4magOrigin?: string;

  /**
   * Mid-infrared photometric W4-band (22 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w4magUnc?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) saturated pixel fraction in the
   * Vega system.
   */
  w4sat?: number;

  /**
   * The Washington Double Star Catalog (WD) identifier of this object.
   */
  wdsCatId?: string;
}

export interface StarCatalogQueryhelpResponse {
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

export type StarCatalogTupleResponse = Array<StarCatalogTupleResponse.StarCatalogTupleResponseItem>;

export namespace StarCatalogTupleResponse {
  /**
   * The star catalog provides the position, proper motion, parallax, and photometric
   * magnitudes at various bandpasses of a star.
   */
  export interface StarCatalogTupleResponseItem {
    /**
     * Originating astrometric catalog for this object (GA (GAIA), HI (HIPPARCOS), UB
     * (USNOBSC), AL, AP, CA, CR, DU, FK6_I, FK6_III, PS, SK, TD, TP, TX, UC, UL, UH,
     * UP, VH, VS, WD).
     */
    astrometryOrigin: string;

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * The ID of this object in the specific catalog associated with this record. This
     * field will either contain the value in the gncCatId or sdaCatId field.
     */
    csId: number;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL: Data collected or produced that pertains to real-world objects, events,
     * and analysis.
     *
     * TEST: Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE: Data pertaining to a government or military exercise. The data may
     * include both real and simulated data.
     *
     * SIMULATED: Synthetic data generated by a model to mimic real-world datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

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
     * The American Association of Variable Star Observers (AAVSO) Variable Star Index
     * (VSX) (VX) object ID of this object.
     */
    aavsoVsxId?: number;

    /**
     * Optical AB g magnitude.
     */
    abgmag?: number;

    /**
     * Catalog of origin of optical AB g magnitude.
     */
    abgmagOrigin?: string;

    /**
     * Uncertainty of optical AB g magnitude.
     */
    abgmagUnc?: number;

    /**
     * Optical AB i magnitude.
     */
    abimag?: number;

    /**
     * Catalog of origin of optical AB i magnitude.
     */
    abimagOrigin?: string;

    /**
     * Uncertainty of optical AB i magnitude.
     */
    abimagUnc?: number;

    /**
     * Optical AB r magnitude.
     */
    abrmag?: number;

    /**
     * Catalog of origin of optical AB r magnitude.
     */
    abrmagOrigin?: string;

    /**
     * Uncertainty of optical AB r magnitude.
     */
    abrmagUnc?: number;

    /**
     * Optical AB y magnitude.
     */
    abymag?: number;

    /**
     * Catalog of origin of optical AB y magnitude.
     */
    abymagOrigin?: string;

    /**
     * Uncertainty of optical AB y magnitude.
     */
    abymagUnc?: number;

    /**
     * Optical AB z magnitude.
     */
    abzmag?: number;

    /**
     * Catalog of origin of optical AB z magnitude.
     */
    abzmagOrigin?: string;

    /**
     * Uncertainty of optical AB z magnitude.
     */
    abzmagUnc?: number;

    /**
     * Contamination and confusion indicator in AllWISE.
     */
    allWISEccInd?: string;

    /**
     * The designation of this object in the All Wide-field Infrared Survey Explorer
     * (AllWISE) catalog (AL).
     */
    allWISEId?: string;

    /**
     * Active deblending indicator in AllWISE.
     */
    allWISEnaInd?: number;

    /**
     * Photometric quality indicator in AllWISE.
     */
    allWISEphQualInd?: string;

    /**
     * The American Association of Variable Star Observers (AAVSO) Photometric All-Sky
     * Survey (APASS) (AP) name of this object.
     */
    apassId?: string;

    /**
     * Astrometric excess noise in the Gaia catalog measured in milliarcseconds.
     */
    astrometricExcessNoise?: number;

    /**
     * Astrometric excess noise sigma in Gaia.
     */
    astrometricExcessNoiseSig?: number;

    /**
     * Optical Johnson B magnitude measured in magnitudes.
     */
    bmag?: number;

    /**
     * Catalog of origin of optical Johnson B magnitude (AP, CR, HI).
     */
    bmagOrigin?: string;

    /**
     * Uncertainty of optical Johnson B magnitude measured in magnitudes.
     */
    bmagUnc?: number;

    /**
     * Gaia optical photometric Bp-band in the Vega scale measured in magnitudes.
     */
    bpmag?: number;

    /**
     * Gaia optical Bp-band uncertainty in the Vega scale measured in magnitudes.
     */
    bpmagUnc?: number;

    /**
     * The Carrasco catalog (CR) identifier of this object.
     */
    carrascoCatId?: number;

    /**
     * The version of the catalog associated with this object.
     */
    catVersion?: string;

    /**
     * The CatWISE2020 (CA) catalog source ID of this object.
     */
    catWise2020Id?: string;

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
     * The Ducati catalog (DU) name of this object.
     */
    ducatiCatId?: string;

    /**
     * The source ID of this object in the Gaia DR3 Catalog (GA).
     */
    gaiadr3CatId?: number;

    /**
     * Gaia optical photometric G-band in the Vega scale measured in magnitudes.
     */
    gmag?: number;

    /**
     * Gaia optical photometric G-band uncertainty in the Vega scale measured in
     * magnitudes.
     */
    gmagUnc?: number;

    /**
     * The ID of this object in the Guidance and Navigation Control (GNC) Catalog. If
     * this field is populated it shall match the csId field.
     */
    gncCatId?: number;

    /**
     * The Healpix index. Consumers should contact the provider for details on the
     * indexing scheme.
     */
    healpixIndex?: number;

    /**
     * The HIP ID of this object in the Hipparcos Catalog (HI).
     */
    hipCatId?: number;

    /**
     * Near-infrared photometric H-band magnitude in the Vega scale measured in
     * magnitudes.
     */
    hmag?: number;

    /**
     * Near-infrared photometric H-band catalog of origin in the Vega scale (TP, UC,
     * UL, UP, VH).
     */
    hmagOrigin?: string;

    /**
     * Near-infrared photometric H-band magnitude uncertainty in the Vega scale
     * measured in magnitudes.
     */
    hmagUnc?: number;

    /**
     * Optical Johnson I magnitude measured in magnitudes.
     */
    imag?: number;

    /**
     * Catalog of origin of optical Johnson I magnitude (CR, GA, HI).
     */
    imagOrigin?: string;

    /**
     * Uncertainty of optical Johnson I magnitude measured in magnitudes.
     */
    imagUnc?: number;

    /**
     * Near-infrared photometric J-band magnitude in the Vega scale measured in
     * magnitudes.
     */
    jmag?: number;

    /**
     * Near-infrared photometric J-band catalog of origin in the Vega scale (TP, UH,
     * UL, UP, VH).
     */
    jmagOrigin?: string;

    /**
     * Near-infrared photometric J-band magnitude uncertainty in the Vega scale
     * measured in magnitudes.
     */
    jmagUnc?: number;

    /**
     * Near-infrared photometric K-band magnitude in the Vega scale measured in
     * magnitudes.
     */
    kmag?: number;

    /**
     * Near-infrared photometric K-band catalog of origin in the Vega scale (TP, UC,
     * UH, UL, UP, VH).
     */
    kmagOrigin?: string;

    /**
     * Near-infrared photometric K-band magnitude uncertainty in the Vega scale
     * measured in magnitudes.
     */
    kmagUnc?: number;

    /**
     * Morphology indicator. Consumers should contact the provider for details on the
     * specifications.
     */
    morphologyInd?: number;

    /**
     * Flag indicating that this is a multiple object source.
     */
    multFlag?: boolean;

    /**
     * Identifier indicating multiplicity is detected. Consumers should contact the
     * provider for details on the specifications.
     */
    multiplicity?: string;

    /**
     * Dec of nearest neighbor measured in degrees.
     */
    neighborDec?: number;

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
     * RA of nearest neighbor measured in degrees.
     */
    neighborRa?: number;

    /**
     * Identifier indicating the source is a non-single star in gaia (additional
     * information is available in non-single star tables. Consumers should contact the
     * provider for details on the specifications).
     */
    nonSingleStar?: string;

    /**
     * Number of neighbors.
     */
    numNeighbors?: number;

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
     * The Panoramic Survey Telescope and Rapid Response System (Pan-STARRS) (PS)
     * object ID.
     */
    panStarrsId?: number;

    /**
     * Absolute stellar parallax of the source, in milliarcseconds.
     */
    parallax?: number;

    /**
     * Uncertainty of the stellar parallax, in milliarcseconds.
     */
    parallaxUnc?: number;

    /**
     * Proper motion in declination of the source, in milliarcseconds per year, at the
     * reference epoch.
     */
    pmdec?: number;

    /**
     * Uncertainty of proper motion in declination, in milliarcseconds per year.
     */
    pmdecUnc?: number;

    /**
     * Proper motion in right ascension of the source, in milliarcseconds per year, at
     * the reference epoch.
     */
    pmra?: number;

    /**
     * Uncertainty of proper motion in right ascension, in milliarcseconds per year.
     */
    pmraUnc?: number;

    /**
     * Flag indicating that the proper motion uncertainty in either ra or dec is
     * greater than 10 milliarcseconds per year.
     */
    pmUncFlag?: boolean;

    /**
     * Flag indicating that the position uncertainty in either ra or dec is greater
     * than 100 milliarcseconds.
     */
    posUncFlag?: boolean;

    /**
     * Astrometry correction flag in Pan-STARRS.
     */
    ps1astrometryCorrectionFlag?: number;

    /**
     * Object information flag in Pan-STARRS.
     */
    ps1ObjInfoFlag?: number;

    /**
     * Quality flag in Pan-STARRS.
     */
    ps1QualityFlag?: number;

    /**
     * Uncertainty of the right ascension of the source, in milliarcseconds, at the
     * reference epoch.
     */
    raUnc?: number;

    /**
     * Optical Johnson R magnitude measured in magnitudes.
     */
    rmag?: number;

    /**
     * Catalog of origin of the Optical Johnson R magnitude (CR, GA).
     */
    rmagOrigin?: string;

    /**
     * Uncertainty of the Optical Johnson R magnitude measured in magnitudes.
     */
    rmagUnc?: number;

    /**
     * Gaia optical Rp-band in the Vega scale measured in magnitudes.
     */
    rpmag?: number;

    /**
     * Gaia optical photometric Rp-band uncertainty in the Vega scale measured in
     * magnitudes.
     */
    rpmagUnc?: number;

    /**
     * RUWE in Gaia.
     */
    ruwe?: number;

    /**
     * The ID of this object in the Space Domain Awareness (SDA) Catalog. If this field
     * is populated it shall match the csId field.
     */
    sdaCatId?: number;

    /**
     * Original G magnitude if the source is in Gaia, otherwise the magnitude is
     * converted from other photometric passbands, when possible, measured in
     * magnitudes.
     */
    sgmag?: number;

    /**
     * Uncertainty of sgmag measured in magnitudes.
     */
    sgmagUnc?: number;

    /**
     * Photocentric shift caused by neighbors, in arcseconds.
     */
    shift?: number;

    /**
     * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
     */
    shiftFlag?: boolean;

    /**
     * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
     * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of one
     * arcsecond.
     */
    shiftFWHM1?: number;

    /**
     * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
     * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of six
     * arcseconds.
     */
    shiftFWHM6?: number;

    /**
     * The SkyMapper (SK) catalog object ID.
     */
    skyMapperId?: number;

    /**
     * The designation of this object in the Two Micron All Sky Survey (2MASS) Point
     * Source Catalog (TP).
     */
    twoMASSId?: string;

    /**
     * Photometric (PH) quality indicator in 2MASS PSC.
     */
    twoMassPHQualInd?: string;

    /**
     * Read flag in 2MASS PSC.
     */
    twoMassReadFlag?: string;

    /**
     * The Two Micron All Sky Survey (2MASS) Extended Source Catalog (XSC) (TX)
     * designation of this object.
     */
    twoMassXscId?: string;

    /**
     * The Tycho Double Star Catalog (TD) identifier (specified as Tycho-2 ID) of this
     * object.
     */
    tychoDscId?: number;

    /**
     * The United Kingdom Infrared Telescope (UKIRT) Hemispheric Survey (UHS) (UH)
     * source ID of this object.
     */
    uhsId?: number;

    /**
     * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Clusters Survey
     * (GCS) (UC) source ID of this object.
     */
    ukidssGCSId?: number;

    /**
     * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Plane Survey (GPS)
     * (UP) source ID of this object.
     */
    ukidssGPSId?: number;

    /**
     * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Large Area Survey (LAS)
     * (UL) source ID of this object.
     */
    ukidssLASId?: number;

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
     * Flag indicating that the source exhibits variable magnitude.
     */
    varFlag?: boolean;

    /**
     * Identifier indicating variability is present in the photometric data. Consumers
     * should contact the provider for details on the specifications.
     */
    variability?: string;

    /**
     * The Visible and Infrared Survey Telescope for Astronomy (VISTA) Hemisphere
     * Survey (VHS) (VS) source ID of this object.
     */
    vhsId?: number;

    /**
     * Optical Johnson V magnitude measured in magnitudes.
     */
    vmag?: number;

    /**
     * Catalog of origin of Optical Johnson V magnitude (AP, CR, DU, GA, HI).
     */
    vmagOrigin?: string;

    /**
     * Uncertainty of the Optical Johnson V magnitude measured in magnitudes.
     */
    vmagUnc?: number;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w1mag?: number;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) catalog of origin in the Vega
     * system (AL, CA).
     */
    w1magOrigin?: string;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w1magUnc?: number;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) saturated pixel fraction in the
     * Vega system.
     */
    w1sat?: number;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w2mag?: number;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) catalog of origin in the Vega
     * system (AL, CA).
     */
    w2magOrigin?: string;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w2magUnc?: number;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) saturated pixel fraction in the
     * Vega system.
     */
    w2sat?: number;

    /**
     * Mid-infrared photometric W3-band (12 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w3mag?: number;

    /**
     * Mid-infrared photometric W3-band (12 microns) catalog of origin in the Vega
     * system (AL).
     */
    w3magOrigin?: string;

    /**
     * Mid-infrared photometric W3-band (12 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w3magUnc?: number;

    /**
     * Mid-infrared photometric W3-band (12 microns) saturated pixel fraction in the
     * Vega system.
     */
    w3sat?: number;

    /**
     * Mid-infrared photometric W4-band (22 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w4mag?: number;

    /**
     * Mid-infrared photometric W4-band (22 microns) catalog of origin in the Vega
     * system (AL).
     */
    w4magOrigin?: string;

    /**
     * Mid-infrared photometric W4-band (22 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w4magUnc?: number;

    /**
     * Mid-infrared photometric W4-band (22 microns) saturated pixel fraction in the
     * Vega system.
     */
    w4sat?: number;

    /**
     * The Washington Double Star Catalog (WD) identifier of this object.
     */
    wdsCatId?: string;
  }
}

export interface StarCatalogCreateParams {
  /**
   * Originating astrometric catalog for this object (GA (GAIA), HI (HIPPARCOS), UB
   * (USNOBSC), AL, AP, CA, CR, DU, FK6_I, FK6_III, PS, SK, TD, TP, TX, UC, UL, UH,
   * UP, VH, VS, WD).
   */
  astrometryOrigin: string;

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The ID of this object in the specific catalog associated with this record. This
   * field will either contain the value in the gncCatId or sdaCatId field.
   */
  csId: number;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL: Data collected or produced that pertains to real-world objects, events,
   * and analysis.
   *
   * TEST: Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE: Data pertaining to a government or military exercise. The data may
   * include both real and simulated data.
   *
   * SIMULATED: Synthetic data generated by a model to mimic real-world datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

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
   * The American Association of Variable Star Observers (AAVSO) Variable Star Index
   * (VSX) (VX) object ID of this object.
   */
  aavsoVsxId?: number;

  /**
   * Optical AB g magnitude.
   */
  abgmag?: number;

  /**
   * Catalog of origin of optical AB g magnitude.
   */
  abgmagOrigin?: string;

  /**
   * Uncertainty of optical AB g magnitude.
   */
  abgmagUnc?: number;

  /**
   * Optical AB i magnitude.
   */
  abimag?: number;

  /**
   * Catalog of origin of optical AB i magnitude.
   */
  abimagOrigin?: string;

  /**
   * Uncertainty of optical AB i magnitude.
   */
  abimagUnc?: number;

  /**
   * Optical AB r magnitude.
   */
  abrmag?: number;

  /**
   * Catalog of origin of optical AB r magnitude.
   */
  abrmagOrigin?: string;

  /**
   * Uncertainty of optical AB r magnitude.
   */
  abrmagUnc?: number;

  /**
   * Optical AB y magnitude.
   */
  abymag?: number;

  /**
   * Catalog of origin of optical AB y magnitude.
   */
  abymagOrigin?: string;

  /**
   * Uncertainty of optical AB y magnitude.
   */
  abymagUnc?: number;

  /**
   * Optical AB z magnitude.
   */
  abzmag?: number;

  /**
   * Catalog of origin of optical AB z magnitude.
   */
  abzmagOrigin?: string;

  /**
   * Uncertainty of optical AB z magnitude.
   */
  abzmagUnc?: number;

  /**
   * Contamination and confusion indicator in AllWISE.
   */
  allWISEccInd?: string;

  /**
   * The designation of this object in the All Wide-field Infrared Survey Explorer
   * (AllWISE) catalog (AL).
   */
  allWISEId?: string;

  /**
   * Active deblending indicator in AllWISE.
   */
  allWISEnaInd?: number;

  /**
   * Photometric quality indicator in AllWISE.
   */
  allWISEphQualInd?: string;

  /**
   * The American Association of Variable Star Observers (AAVSO) Photometric All-Sky
   * Survey (APASS) (AP) name of this object.
   */
  apassId?: string;

  /**
   * Astrometric excess noise in the Gaia catalog measured in milliarcseconds.
   */
  astrometricExcessNoise?: number;

  /**
   * Astrometric excess noise sigma in Gaia.
   */
  astrometricExcessNoiseSig?: number;

  /**
   * Optical Johnson B magnitude measured in magnitudes.
   */
  bmag?: number;

  /**
   * Catalog of origin of optical Johnson B magnitude (AP, CR, HI).
   */
  bmagOrigin?: string;

  /**
   * Uncertainty of optical Johnson B magnitude measured in magnitudes.
   */
  bmagUnc?: number;

  /**
   * Gaia optical photometric Bp-band in the Vega scale measured in magnitudes.
   */
  bpmag?: number;

  /**
   * Gaia optical Bp-band uncertainty in the Vega scale measured in magnitudes.
   */
  bpmagUnc?: number;

  /**
   * The Carrasco catalog (CR) identifier of this object.
   */
  carrascoCatId?: number;

  /**
   * The version of the catalog associated with this object.
   */
  catVersion?: string;

  /**
   * The CatWISE2020 (CA) catalog source ID of this object.
   */
  catWise2020Id?: string;

  /**
   * Uncertainty of the declination of the source, in milliarcseconds, at the
   * reference epoch.
   */
  decUnc?: number;

  /**
   * The Ducati catalog (DU) name of this object.
   */
  ducatiCatId?: string;

  /**
   * The source ID of this object in the Gaia DR3 Catalog (GA).
   */
  gaiadr3CatId?: number;

  /**
   * Gaia optical photometric G-band in the Vega scale measured in magnitudes.
   */
  gmag?: number;

  /**
   * Gaia optical photometric G-band uncertainty in the Vega scale measured in
   * magnitudes.
   */
  gmagUnc?: number;

  /**
   * The ID of this object in the Guidance and Navigation Control (GNC) Catalog. If
   * this field is populated it shall match the csId field.
   */
  gncCatId?: number;

  /**
   * The Healpix index. Consumers should contact the provider for details on the
   * indexing scheme.
   */
  healpixIndex?: number;

  /**
   * The HIP ID of this object in the Hipparcos Catalog (HI).
   */
  hipCatId?: number;

  /**
   * Near-infrared photometric H-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  hmag?: number;

  /**
   * Near-infrared photometric H-band catalog of origin in the Vega scale (TP, UC,
   * UL, UP, VH).
   */
  hmagOrigin?: string;

  /**
   * Near-infrared photometric H-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  hmagUnc?: number;

  /**
   * Optical Johnson I magnitude measured in magnitudes.
   */
  imag?: number;

  /**
   * Catalog of origin of optical Johnson I magnitude (CR, GA, HI).
   */
  imagOrigin?: string;

  /**
   * Uncertainty of optical Johnson I magnitude measured in magnitudes.
   */
  imagUnc?: number;

  /**
   * Near-infrared photometric J-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  jmag?: number;

  /**
   * Near-infrared photometric J-band catalog of origin in the Vega scale (TP, UH,
   * UL, UP, VH).
   */
  jmagOrigin?: string;

  /**
   * Near-infrared photometric J-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  jmagUnc?: number;

  /**
   * Near-infrared photometric K-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  kmag?: number;

  /**
   * Near-infrared photometric K-band catalog of origin in the Vega scale (TP, UC,
   * UH, UL, UP, VH).
   */
  kmagOrigin?: string;

  /**
   * Near-infrared photometric K-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  kmagUnc?: number;

  /**
   * Morphology indicator. Consumers should contact the provider for details on the
   * specifications.
   */
  morphologyInd?: number;

  /**
   * Flag indicating that this is a multiple object source.
   */
  multFlag?: boolean;

  /**
   * Identifier indicating multiplicity is detected. Consumers should contact the
   * provider for details on the specifications.
   */
  multiplicity?: string;

  /**
   * Dec of nearest neighbor measured in degrees.
   */
  neighborDec?: number;

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
   * RA of nearest neighbor measured in degrees.
   */
  neighborRa?: number;

  /**
   * Identifier indicating the source is a non-single star in gaia (additional
   * information is available in non-single star tables. Consumers should contact the
   * provider for details on the specifications).
   */
  nonSingleStar?: string;

  /**
   * Number of neighbors.
   */
  numNeighbors?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The Panoramic Survey Telescope and Rapid Response System (Pan-STARRS) (PS)
   * object ID.
   */
  panStarrsId?: number;

  /**
   * Absolute stellar parallax of the source, in milliarcseconds.
   */
  parallax?: number;

  /**
   * Uncertainty of the stellar parallax, in milliarcseconds.
   */
  parallaxUnc?: number;

  /**
   * Proper motion in declination of the source, in milliarcseconds per year, at the
   * reference epoch.
   */
  pmdec?: number;

  /**
   * Uncertainty of proper motion in declination, in milliarcseconds per year.
   */
  pmdecUnc?: number;

  /**
   * Proper motion in right ascension of the source, in milliarcseconds per year, at
   * the reference epoch.
   */
  pmra?: number;

  /**
   * Uncertainty of proper motion in right ascension, in milliarcseconds per year.
   */
  pmraUnc?: number;

  /**
   * Flag indicating that the proper motion uncertainty in either ra or dec is
   * greater than 10 milliarcseconds per year.
   */
  pmUncFlag?: boolean;

  /**
   * Flag indicating that the position uncertainty in either ra or dec is greater
   * than 100 milliarcseconds.
   */
  posUncFlag?: boolean;

  /**
   * Astrometry correction flag in Pan-STARRS.
   */
  ps1astrometryCorrectionFlag?: number;

  /**
   * Object information flag in Pan-STARRS.
   */
  ps1ObjInfoFlag?: number;

  /**
   * Quality flag in Pan-STARRS.
   */
  ps1QualityFlag?: number;

  /**
   * Uncertainty of the right ascension of the source, in milliarcseconds, at the
   * reference epoch.
   */
  raUnc?: number;

  /**
   * Optical Johnson R magnitude measured in magnitudes.
   */
  rmag?: number;

  /**
   * Catalog of origin of the Optical Johnson R magnitude (CR, GA).
   */
  rmagOrigin?: string;

  /**
   * Uncertainty of the Optical Johnson R magnitude measured in magnitudes.
   */
  rmagUnc?: number;

  /**
   * Gaia optical Rp-band in the Vega scale measured in magnitudes.
   */
  rpmag?: number;

  /**
   * Gaia optical photometric Rp-band uncertainty in the Vega scale measured in
   * magnitudes.
   */
  rpmagUnc?: number;

  /**
   * RUWE in Gaia.
   */
  ruwe?: number;

  /**
   * The ID of this object in the Space Domain Awareness (SDA) Catalog. If this field
   * is populated it shall match the csId field.
   */
  sdaCatId?: number;

  /**
   * Original G magnitude if the source is in Gaia, otherwise the magnitude is
   * converted from other photometric passbands, when possible, measured in
   * magnitudes.
   */
  sgmag?: number;

  /**
   * Uncertainty of sgmag measured in magnitudes.
   */
  sgmagUnc?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds.
   */
  shift?: number;

  /**
   * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
   */
  shiftFlag?: boolean;

  /**
   * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
   * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of one
   * arcsecond.
   */
  shiftFWHM1?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
   * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of six
   * arcseconds.
   */
  shiftFWHM6?: number;

  /**
   * The SkyMapper (SK) catalog object ID.
   */
  skyMapperId?: number;

  /**
   * The designation of this object in the Two Micron All Sky Survey (2MASS) Point
   * Source Catalog (TP).
   */
  twoMASSId?: string;

  /**
   * Photometric (PH) quality indicator in 2MASS PSC.
   */
  twoMassPHQualInd?: string;

  /**
   * Read flag in 2MASS PSC.
   */
  twoMassReadFlag?: string;

  /**
   * The Two Micron All Sky Survey (2MASS) Extended Source Catalog (XSC) (TX)
   * designation of this object.
   */
  twoMassXscId?: string;

  /**
   * The Tycho Double Star Catalog (TD) identifier (specified as Tycho-2 ID) of this
   * object.
   */
  tychoDscId?: number;

  /**
   * The United Kingdom Infrared Telescope (UKIRT) Hemispheric Survey (UHS) (UH)
   * source ID of this object.
   */
  uhsId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Clusters Survey
   * (GCS) (UC) source ID of this object.
   */
  ukidssGCSId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Plane Survey (GPS)
   * (UP) source ID of this object.
   */
  ukidssGPSId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Large Area Survey (LAS)
   * (UL) source ID of this object.
   */
  ukidssLASId?: number;

  /**
   * Flag indicating that the source exhibits variable magnitude.
   */
  varFlag?: boolean;

  /**
   * Identifier indicating variability is present in the photometric data. Consumers
   * should contact the provider for details on the specifications.
   */
  variability?: string;

  /**
   * The Visible and Infrared Survey Telescope for Astronomy (VISTA) Hemisphere
   * Survey (VHS) (VS) source ID of this object.
   */
  vhsId?: number;

  /**
   * Optical Johnson V magnitude measured in magnitudes.
   */
  vmag?: number;

  /**
   * Catalog of origin of Optical Johnson V magnitude (AP, CR, DU, GA, HI).
   */
  vmagOrigin?: string;

  /**
   * Uncertainty of the Optical Johnson V magnitude measured in magnitudes.
   */
  vmagUnc?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w1mag?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) catalog of origin in the Vega
   * system (AL, CA).
   */
  w1magOrigin?: string;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w1magUnc?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) saturated pixel fraction in the
   * Vega system.
   */
  w1sat?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w2mag?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) catalog of origin in the Vega
   * system (AL, CA).
   */
  w2magOrigin?: string;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w2magUnc?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) saturated pixel fraction in the
   * Vega system.
   */
  w2sat?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w3mag?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) catalog of origin in the Vega
   * system (AL).
   */
  w3magOrigin?: string;

  /**
   * Mid-infrared photometric W3-band (12 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w3magUnc?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) saturated pixel fraction in the
   * Vega system.
   */
  w3sat?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w4mag?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) catalog of origin in the Vega
   * system (AL).
   */
  w4magOrigin?: string;

  /**
   * Mid-infrared photometric W4-band (22 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w4magUnc?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) saturated pixel fraction in the
   * Vega system.
   */
  w4sat?: number;

  /**
   * The Washington Double Star Catalog (WD) identifier of this object.
   */
  wdsCatId?: string;
}

export interface StarCatalogUpdateParams {
  /**
   * Originating astrometric catalog for this object (GA (GAIA), HI (HIPPARCOS), UB
   * (USNOBSC), AL, AP, CA, CR, DU, FK6_I, FK6_III, PS, SK, TD, TP, TX, UC, UL, UH,
   * UP, VH, VS, WD).
   */
  astrometryOrigin: string;

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The ID of this object in the specific catalog associated with this record. This
   * field will either contain the value in the gncCatId or sdaCatId field.
   */
  csId: number;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL: Data collected or produced that pertains to real-world objects, events,
   * and analysis.
   *
   * TEST: Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE: Data pertaining to a government or military exercise. The data may
   * include both real and simulated data.
   *
   * SIMULATED: Synthetic data generated by a model to mimic real-world datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

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
   * The American Association of Variable Star Observers (AAVSO) Variable Star Index
   * (VSX) (VX) object ID of this object.
   */
  aavsoVsxId?: number;

  /**
   * Optical AB g magnitude.
   */
  abgmag?: number;

  /**
   * Catalog of origin of optical AB g magnitude.
   */
  abgmagOrigin?: string;

  /**
   * Uncertainty of optical AB g magnitude.
   */
  abgmagUnc?: number;

  /**
   * Optical AB i magnitude.
   */
  abimag?: number;

  /**
   * Catalog of origin of optical AB i magnitude.
   */
  abimagOrigin?: string;

  /**
   * Uncertainty of optical AB i magnitude.
   */
  abimagUnc?: number;

  /**
   * Optical AB r magnitude.
   */
  abrmag?: number;

  /**
   * Catalog of origin of optical AB r magnitude.
   */
  abrmagOrigin?: string;

  /**
   * Uncertainty of optical AB r magnitude.
   */
  abrmagUnc?: number;

  /**
   * Optical AB y magnitude.
   */
  abymag?: number;

  /**
   * Catalog of origin of optical AB y magnitude.
   */
  abymagOrigin?: string;

  /**
   * Uncertainty of optical AB y magnitude.
   */
  abymagUnc?: number;

  /**
   * Optical AB z magnitude.
   */
  abzmag?: number;

  /**
   * Catalog of origin of optical AB z magnitude.
   */
  abzmagOrigin?: string;

  /**
   * Uncertainty of optical AB z magnitude.
   */
  abzmagUnc?: number;

  /**
   * Contamination and confusion indicator in AllWISE.
   */
  allWISEccInd?: string;

  /**
   * The designation of this object in the All Wide-field Infrared Survey Explorer
   * (AllWISE) catalog (AL).
   */
  allWISEId?: string;

  /**
   * Active deblending indicator in AllWISE.
   */
  allWISEnaInd?: number;

  /**
   * Photometric quality indicator in AllWISE.
   */
  allWISEphQualInd?: string;

  /**
   * The American Association of Variable Star Observers (AAVSO) Photometric All-Sky
   * Survey (APASS) (AP) name of this object.
   */
  apassId?: string;

  /**
   * Astrometric excess noise in the Gaia catalog measured in milliarcseconds.
   */
  astrometricExcessNoise?: number;

  /**
   * Astrometric excess noise sigma in Gaia.
   */
  astrometricExcessNoiseSig?: number;

  /**
   * Optical Johnson B magnitude measured in magnitudes.
   */
  bmag?: number;

  /**
   * Catalog of origin of optical Johnson B magnitude (AP, CR, HI).
   */
  bmagOrigin?: string;

  /**
   * Uncertainty of optical Johnson B magnitude measured in magnitudes.
   */
  bmagUnc?: number;

  /**
   * Gaia optical photometric Bp-band in the Vega scale measured in magnitudes.
   */
  bpmag?: number;

  /**
   * Gaia optical Bp-band uncertainty in the Vega scale measured in magnitudes.
   */
  bpmagUnc?: number;

  /**
   * The Carrasco catalog (CR) identifier of this object.
   */
  carrascoCatId?: number;

  /**
   * The version of the catalog associated with this object.
   */
  catVersion?: string;

  /**
   * The CatWISE2020 (CA) catalog source ID of this object.
   */
  catWise2020Id?: string;

  /**
   * Uncertainty of the declination of the source, in milliarcseconds, at the
   * reference epoch.
   */
  decUnc?: number;

  /**
   * The Ducati catalog (DU) name of this object.
   */
  ducatiCatId?: string;

  /**
   * The source ID of this object in the Gaia DR3 Catalog (GA).
   */
  gaiadr3CatId?: number;

  /**
   * Gaia optical photometric G-band in the Vega scale measured in magnitudes.
   */
  gmag?: number;

  /**
   * Gaia optical photometric G-band uncertainty in the Vega scale measured in
   * magnitudes.
   */
  gmagUnc?: number;

  /**
   * The ID of this object in the Guidance and Navigation Control (GNC) Catalog. If
   * this field is populated it shall match the csId field.
   */
  gncCatId?: number;

  /**
   * The Healpix index. Consumers should contact the provider for details on the
   * indexing scheme.
   */
  healpixIndex?: number;

  /**
   * The HIP ID of this object in the Hipparcos Catalog (HI).
   */
  hipCatId?: number;

  /**
   * Near-infrared photometric H-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  hmag?: number;

  /**
   * Near-infrared photometric H-band catalog of origin in the Vega scale (TP, UC,
   * UL, UP, VH).
   */
  hmagOrigin?: string;

  /**
   * Near-infrared photometric H-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  hmagUnc?: number;

  /**
   * Optical Johnson I magnitude measured in magnitudes.
   */
  imag?: number;

  /**
   * Catalog of origin of optical Johnson I magnitude (CR, GA, HI).
   */
  imagOrigin?: string;

  /**
   * Uncertainty of optical Johnson I magnitude measured in magnitudes.
   */
  imagUnc?: number;

  /**
   * Near-infrared photometric J-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  jmag?: number;

  /**
   * Near-infrared photometric J-band catalog of origin in the Vega scale (TP, UH,
   * UL, UP, VH).
   */
  jmagOrigin?: string;

  /**
   * Near-infrared photometric J-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  jmagUnc?: number;

  /**
   * Near-infrared photometric K-band magnitude in the Vega scale measured in
   * magnitudes.
   */
  kmag?: number;

  /**
   * Near-infrared photometric K-band catalog of origin in the Vega scale (TP, UC,
   * UH, UL, UP, VH).
   */
  kmagOrigin?: string;

  /**
   * Near-infrared photometric K-band magnitude uncertainty in the Vega scale
   * measured in magnitudes.
   */
  kmagUnc?: number;

  /**
   * Morphology indicator. Consumers should contact the provider for details on the
   * specifications.
   */
  morphologyInd?: number;

  /**
   * Flag indicating that this is a multiple object source.
   */
  multFlag?: boolean;

  /**
   * Identifier indicating multiplicity is detected. Consumers should contact the
   * provider for details on the specifications.
   */
  multiplicity?: string;

  /**
   * Dec of nearest neighbor measured in degrees.
   */
  neighborDec?: number;

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
   * RA of nearest neighbor measured in degrees.
   */
  neighborRa?: number;

  /**
   * Identifier indicating the source is a non-single star in gaia (additional
   * information is available in non-single star tables. Consumers should contact the
   * provider for details on the specifications).
   */
  nonSingleStar?: string;

  /**
   * Number of neighbors.
   */
  numNeighbors?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The Panoramic Survey Telescope and Rapid Response System (Pan-STARRS) (PS)
   * object ID.
   */
  panStarrsId?: number;

  /**
   * Absolute stellar parallax of the source, in milliarcseconds.
   */
  parallax?: number;

  /**
   * Uncertainty of the stellar parallax, in milliarcseconds.
   */
  parallaxUnc?: number;

  /**
   * Proper motion in declination of the source, in milliarcseconds per year, at the
   * reference epoch.
   */
  pmdec?: number;

  /**
   * Uncertainty of proper motion in declination, in milliarcseconds per year.
   */
  pmdecUnc?: number;

  /**
   * Proper motion in right ascension of the source, in milliarcseconds per year, at
   * the reference epoch.
   */
  pmra?: number;

  /**
   * Uncertainty of proper motion in right ascension, in milliarcseconds per year.
   */
  pmraUnc?: number;

  /**
   * Flag indicating that the proper motion uncertainty in either ra or dec is
   * greater than 10 milliarcseconds per year.
   */
  pmUncFlag?: boolean;

  /**
   * Flag indicating that the position uncertainty in either ra or dec is greater
   * than 100 milliarcseconds.
   */
  posUncFlag?: boolean;

  /**
   * Astrometry correction flag in Pan-STARRS.
   */
  ps1astrometryCorrectionFlag?: number;

  /**
   * Object information flag in Pan-STARRS.
   */
  ps1ObjInfoFlag?: number;

  /**
   * Quality flag in Pan-STARRS.
   */
  ps1QualityFlag?: number;

  /**
   * Uncertainty of the right ascension of the source, in milliarcseconds, at the
   * reference epoch.
   */
  raUnc?: number;

  /**
   * Optical Johnson R magnitude measured in magnitudes.
   */
  rmag?: number;

  /**
   * Catalog of origin of the Optical Johnson R magnitude (CR, GA).
   */
  rmagOrigin?: string;

  /**
   * Uncertainty of the Optical Johnson R magnitude measured in magnitudes.
   */
  rmagUnc?: number;

  /**
   * Gaia optical Rp-band in the Vega scale measured in magnitudes.
   */
  rpmag?: number;

  /**
   * Gaia optical photometric Rp-band uncertainty in the Vega scale measured in
   * magnitudes.
   */
  rpmagUnc?: number;

  /**
   * RUWE in Gaia.
   */
  ruwe?: number;

  /**
   * The ID of this object in the Space Domain Awareness (SDA) Catalog. If this field
   * is populated it shall match the csId field.
   */
  sdaCatId?: number;

  /**
   * Original G magnitude if the source is in Gaia, otherwise the magnitude is
   * converted from other photometric passbands, when possible, measured in
   * magnitudes.
   */
  sgmag?: number;

  /**
   * Uncertainty of sgmag measured in magnitudes.
   */
  sgmagUnc?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds.
   */
  shift?: number;

  /**
   * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
   */
  shiftFlag?: boolean;

  /**
   * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
   * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of one
   * arcsecond.
   */
  shiftFWHM1?: number;

  /**
   * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
   * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of six
   * arcseconds.
   */
  shiftFWHM6?: number;

  /**
   * The SkyMapper (SK) catalog object ID.
   */
  skyMapperId?: number;

  /**
   * The designation of this object in the Two Micron All Sky Survey (2MASS) Point
   * Source Catalog (TP).
   */
  twoMASSId?: string;

  /**
   * Photometric (PH) quality indicator in 2MASS PSC.
   */
  twoMassPHQualInd?: string;

  /**
   * Read flag in 2MASS PSC.
   */
  twoMassReadFlag?: string;

  /**
   * The Two Micron All Sky Survey (2MASS) Extended Source Catalog (XSC) (TX)
   * designation of this object.
   */
  twoMassXscId?: string;

  /**
   * The Tycho Double Star Catalog (TD) identifier (specified as Tycho-2 ID) of this
   * object.
   */
  tychoDscId?: number;

  /**
   * The United Kingdom Infrared Telescope (UKIRT) Hemispheric Survey (UHS) (UH)
   * source ID of this object.
   */
  uhsId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Clusters Survey
   * (GCS) (UC) source ID of this object.
   */
  ukidssGCSId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Plane Survey (GPS)
   * (UP) source ID of this object.
   */
  ukidssGPSId?: number;

  /**
   * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Large Area Survey (LAS)
   * (UL) source ID of this object.
   */
  ukidssLASId?: number;

  /**
   * Flag indicating that the source exhibits variable magnitude.
   */
  varFlag?: boolean;

  /**
   * Identifier indicating variability is present in the photometric data. Consumers
   * should contact the provider for details on the specifications.
   */
  variability?: string;

  /**
   * The Visible and Infrared Survey Telescope for Astronomy (VISTA) Hemisphere
   * Survey (VHS) (VS) source ID of this object.
   */
  vhsId?: number;

  /**
   * Optical Johnson V magnitude measured in magnitudes.
   */
  vmag?: number;

  /**
   * Catalog of origin of Optical Johnson V magnitude (AP, CR, DU, GA, HI).
   */
  vmagOrigin?: string;

  /**
   * Uncertainty of the Optical Johnson V magnitude measured in magnitudes.
   */
  vmagUnc?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w1mag?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) catalog of origin in the Vega
   * system (AL, CA).
   */
  w1magOrigin?: string;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w1magUnc?: number;

  /**
   * Mid-infrared photometric W1-band (3.4 microns) saturated pixel fraction in the
   * Vega system.
   */
  w1sat?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w2mag?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) catalog of origin in the Vega
   * system (AL, CA).
   */
  w2magOrigin?: string;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w2magUnc?: number;

  /**
   * Mid-infrared photometric W2-band (4.6 microns) saturated pixel fraction in the
   * Vega system.
   */
  w2sat?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w3mag?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) catalog of origin in the Vega
   * system (AL).
   */
  w3magOrigin?: string;

  /**
   * Mid-infrared photometric W3-band (12 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w3magUnc?: number;

  /**
   * Mid-infrared photometric W3-band (12 microns) saturated pixel fraction in the
   * Vega system.
   */
  w3sat?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) magnitude in the Vega system
   * measured in magnitudes.
   */
  w4mag?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) catalog of origin in the Vega
   * system (AL).
   */
  w4magOrigin?: string;

  /**
   * Mid-infrared photometric W4-band (22 microns) magnitude uncertainty in the Vega
   * system measured in magnitudes.
   */
  w4magUnc?: number;

  /**
   * Mid-infrared photometric W4-band (22 microns) saturated pixel fraction in the
   * Vega system.
   */
  w4sat?: number;

  /**
   * The Washington Double Star Catalog (WD) identifier of this object.
   */
  wdsCatId?: string;
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
     * Originating astrometric catalog for this object (GA (GAIA), HI (HIPPARCOS), UB
     * (USNOBSC), AL, AP, CA, CR, DU, FK6_I, FK6_III, PS, SK, TD, TP, TX, UC, UL, UH,
     * UP, VH, VS, WD).
     */
    astrometryOrigin: string;

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * The ID of this object in the specific catalog associated with this record. This
     * field will either contain the value in the gncCatId or sdaCatId field.
     */
    csId: number;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL: Data collected or produced that pertains to real-world objects, events,
     * and analysis.
     *
     * TEST: Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE: Data pertaining to a government or military exercise. The data may
     * include both real and simulated data.
     *
     * SIMULATED: Synthetic data generated by a model to mimic real-world datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

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
     * The American Association of Variable Star Observers (AAVSO) Variable Star Index
     * (VSX) (VX) object ID of this object.
     */
    aavsoVsxId?: number;

    /**
     * Optical AB g magnitude.
     */
    abgmag?: number;

    /**
     * Catalog of origin of optical AB g magnitude.
     */
    abgmagOrigin?: string;

    /**
     * Uncertainty of optical AB g magnitude.
     */
    abgmagUnc?: number;

    /**
     * Optical AB i magnitude.
     */
    abimag?: number;

    /**
     * Catalog of origin of optical AB i magnitude.
     */
    abimagOrigin?: string;

    /**
     * Uncertainty of optical AB i magnitude.
     */
    abimagUnc?: number;

    /**
     * Optical AB r magnitude.
     */
    abrmag?: number;

    /**
     * Catalog of origin of optical AB r magnitude.
     */
    abrmagOrigin?: string;

    /**
     * Uncertainty of optical AB r magnitude.
     */
    abrmagUnc?: number;

    /**
     * Optical AB y magnitude.
     */
    abymag?: number;

    /**
     * Catalog of origin of optical AB y magnitude.
     */
    abymagOrigin?: string;

    /**
     * Uncertainty of optical AB y magnitude.
     */
    abymagUnc?: number;

    /**
     * Optical AB z magnitude.
     */
    abzmag?: number;

    /**
     * Catalog of origin of optical AB z magnitude.
     */
    abzmagOrigin?: string;

    /**
     * Uncertainty of optical AB z magnitude.
     */
    abzmagUnc?: number;

    /**
     * Contamination and confusion indicator in AllWISE.
     */
    allWISEccInd?: string;

    /**
     * The designation of this object in the All Wide-field Infrared Survey Explorer
     * (AllWISE) catalog (AL).
     */
    allWISEId?: string;

    /**
     * Active deblending indicator in AllWISE.
     */
    allWISEnaInd?: number;

    /**
     * Photometric quality indicator in AllWISE.
     */
    allWISEphQualInd?: string;

    /**
     * The American Association of Variable Star Observers (AAVSO) Photometric All-Sky
     * Survey (APASS) (AP) name of this object.
     */
    apassId?: string;

    /**
     * Astrometric excess noise in the Gaia catalog measured in milliarcseconds.
     */
    astrometricExcessNoise?: number;

    /**
     * Astrometric excess noise sigma in Gaia.
     */
    astrometricExcessNoiseSig?: number;

    /**
     * Optical Johnson B magnitude measured in magnitudes.
     */
    bmag?: number;

    /**
     * Catalog of origin of optical Johnson B magnitude (AP, CR, HI).
     */
    bmagOrigin?: string;

    /**
     * Uncertainty of optical Johnson B magnitude measured in magnitudes.
     */
    bmagUnc?: number;

    /**
     * Gaia optical photometric Bp-band in the Vega scale measured in magnitudes.
     */
    bpmag?: number;

    /**
     * Gaia optical Bp-band uncertainty in the Vega scale measured in magnitudes.
     */
    bpmagUnc?: number;

    /**
     * The Carrasco catalog (CR) identifier of this object.
     */
    carrascoCatId?: number;

    /**
     * The version of the catalog associated with this object.
     */
    catVersion?: string;

    /**
     * The CatWISE2020 (CA) catalog source ID of this object.
     */
    catWise2020Id?: string;

    /**
     * Uncertainty of the declination of the source, in milliarcseconds, at the
     * reference epoch.
     */
    decUnc?: number;

    /**
     * The Ducati catalog (DU) name of this object.
     */
    ducatiCatId?: string;

    /**
     * The source ID of this object in the Gaia DR3 Catalog (GA).
     */
    gaiadr3CatId?: number;

    /**
     * Gaia optical photometric G-band in the Vega scale measured in magnitudes.
     */
    gmag?: number;

    /**
     * Gaia optical photometric G-band uncertainty in the Vega scale measured in
     * magnitudes.
     */
    gmagUnc?: number;

    /**
     * The ID of this object in the Guidance and Navigation Control (GNC) Catalog. If
     * this field is populated it shall match the csId field.
     */
    gncCatId?: number;

    /**
     * The Healpix index. Consumers should contact the provider for details on the
     * indexing scheme.
     */
    healpixIndex?: number;

    /**
     * The HIP ID of this object in the Hipparcos Catalog (HI).
     */
    hipCatId?: number;

    /**
     * Near-infrared photometric H-band magnitude in the Vega scale measured in
     * magnitudes.
     */
    hmag?: number;

    /**
     * Near-infrared photometric H-band catalog of origin in the Vega scale (TP, UC,
     * UL, UP, VH).
     */
    hmagOrigin?: string;

    /**
     * Near-infrared photometric H-band magnitude uncertainty in the Vega scale
     * measured in magnitudes.
     */
    hmagUnc?: number;

    /**
     * Optical Johnson I magnitude measured in magnitudes.
     */
    imag?: number;

    /**
     * Catalog of origin of optical Johnson I magnitude (CR, GA, HI).
     */
    imagOrigin?: string;

    /**
     * Uncertainty of optical Johnson I magnitude measured in magnitudes.
     */
    imagUnc?: number;

    /**
     * Near-infrared photometric J-band magnitude in the Vega scale measured in
     * magnitudes.
     */
    jmag?: number;

    /**
     * Near-infrared photometric J-band catalog of origin in the Vega scale (TP, UH,
     * UL, UP, VH).
     */
    jmagOrigin?: string;

    /**
     * Near-infrared photometric J-band magnitude uncertainty in the Vega scale
     * measured in magnitudes.
     */
    jmagUnc?: number;

    /**
     * Near-infrared photometric K-band magnitude in the Vega scale measured in
     * magnitudes.
     */
    kmag?: number;

    /**
     * Near-infrared photometric K-band catalog of origin in the Vega scale (TP, UC,
     * UH, UL, UP, VH).
     */
    kmagOrigin?: string;

    /**
     * Near-infrared photometric K-band magnitude uncertainty in the Vega scale
     * measured in magnitudes.
     */
    kmagUnc?: number;

    /**
     * Morphology indicator. Consumers should contact the provider for details on the
     * specifications.
     */
    morphologyInd?: number;

    /**
     * Flag indicating that this is a multiple object source.
     */
    multFlag?: boolean;

    /**
     * Identifier indicating multiplicity is detected. Consumers should contact the
     * provider for details on the specifications.
     */
    multiplicity?: string;

    /**
     * Dec of nearest neighbor measured in degrees.
     */
    neighborDec?: number;

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
     * RA of nearest neighbor measured in degrees.
     */
    neighborRa?: number;

    /**
     * Identifier indicating the source is a non-single star in gaia (additional
     * information is available in non-single star tables. Consumers should contact the
     * provider for details on the specifications).
     */
    nonSingleStar?: string;

    /**
     * Number of neighbors.
     */
    numNeighbors?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The Panoramic Survey Telescope and Rapid Response System (Pan-STARRS) (PS)
     * object ID.
     */
    panStarrsId?: number;

    /**
     * Absolute stellar parallax of the source, in milliarcseconds.
     */
    parallax?: number;

    /**
     * Uncertainty of the stellar parallax, in milliarcseconds.
     */
    parallaxUnc?: number;

    /**
     * Proper motion in declination of the source, in milliarcseconds per year, at the
     * reference epoch.
     */
    pmdec?: number;

    /**
     * Uncertainty of proper motion in declination, in milliarcseconds per year.
     */
    pmdecUnc?: number;

    /**
     * Proper motion in right ascension of the source, in milliarcseconds per year, at
     * the reference epoch.
     */
    pmra?: number;

    /**
     * Uncertainty of proper motion in right ascension, in milliarcseconds per year.
     */
    pmraUnc?: number;

    /**
     * Flag indicating that the proper motion uncertainty in either ra or dec is
     * greater than 10 milliarcseconds per year.
     */
    pmUncFlag?: boolean;

    /**
     * Flag indicating that the position uncertainty in either ra or dec is greater
     * than 100 milliarcseconds.
     */
    posUncFlag?: boolean;

    /**
     * Astrometry correction flag in Pan-STARRS.
     */
    ps1astrometryCorrectionFlag?: number;

    /**
     * Object information flag in Pan-STARRS.
     */
    ps1ObjInfoFlag?: number;

    /**
     * Quality flag in Pan-STARRS.
     */
    ps1QualityFlag?: number;

    /**
     * Uncertainty of the right ascension of the source, in milliarcseconds, at the
     * reference epoch.
     */
    raUnc?: number;

    /**
     * Optical Johnson R magnitude measured in magnitudes.
     */
    rmag?: number;

    /**
     * Catalog of origin of the Optical Johnson R magnitude (CR, GA).
     */
    rmagOrigin?: string;

    /**
     * Uncertainty of the Optical Johnson R magnitude measured in magnitudes.
     */
    rmagUnc?: number;

    /**
     * Gaia optical Rp-band in the Vega scale measured in magnitudes.
     */
    rpmag?: number;

    /**
     * Gaia optical photometric Rp-band uncertainty in the Vega scale measured in
     * magnitudes.
     */
    rpmagUnc?: number;

    /**
     * RUWE in Gaia.
     */
    ruwe?: number;

    /**
     * The ID of this object in the Space Domain Awareness (SDA) Catalog. If this field
     * is populated it shall match the csId field.
     */
    sdaCatId?: number;

    /**
     * Original G magnitude if the source is in Gaia, otherwise the magnitude is
     * converted from other photometric passbands, when possible, measured in
     * magnitudes.
     */
    sgmag?: number;

    /**
     * Uncertainty of sgmag measured in magnitudes.
     */
    sgmagUnc?: number;

    /**
     * Photocentric shift caused by neighbors, in arcseconds.
     */
    shift?: number;

    /**
     * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
     */
    shiftFlag?: boolean;

    /**
     * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
     * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of one
     * arcsecond.
     */
    shiftFWHM1?: number;

    /**
     * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
     * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of six
     * arcseconds.
     */
    shiftFWHM6?: number;

    /**
     * The SkyMapper (SK) catalog object ID.
     */
    skyMapperId?: number;

    /**
     * The designation of this object in the Two Micron All Sky Survey (2MASS) Point
     * Source Catalog (TP).
     */
    twoMASSId?: string;

    /**
     * Photometric (PH) quality indicator in 2MASS PSC.
     */
    twoMassPHQualInd?: string;

    /**
     * Read flag in 2MASS PSC.
     */
    twoMassReadFlag?: string;

    /**
     * The Two Micron All Sky Survey (2MASS) Extended Source Catalog (XSC) (TX)
     * designation of this object.
     */
    twoMassXscId?: string;

    /**
     * The Tycho Double Star Catalog (TD) identifier (specified as Tycho-2 ID) of this
     * object.
     */
    tychoDscId?: number;

    /**
     * The United Kingdom Infrared Telescope (UKIRT) Hemispheric Survey (UHS) (UH)
     * source ID of this object.
     */
    uhsId?: number;

    /**
     * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Clusters Survey
     * (GCS) (UC) source ID of this object.
     */
    ukidssGCSId?: number;

    /**
     * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Plane Survey (GPS)
     * (UP) source ID of this object.
     */
    ukidssGPSId?: number;

    /**
     * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Large Area Survey (LAS)
     * (UL) source ID of this object.
     */
    ukidssLASId?: number;

    /**
     * Flag indicating that the source exhibits variable magnitude.
     */
    varFlag?: boolean;

    /**
     * Identifier indicating variability is present in the photometric data. Consumers
     * should contact the provider for details on the specifications.
     */
    variability?: string;

    /**
     * The Visible and Infrared Survey Telescope for Astronomy (VISTA) Hemisphere
     * Survey (VHS) (VS) source ID of this object.
     */
    vhsId?: number;

    /**
     * Optical Johnson V magnitude measured in magnitudes.
     */
    vmag?: number;

    /**
     * Catalog of origin of Optical Johnson V magnitude (AP, CR, DU, GA, HI).
     */
    vmagOrigin?: string;

    /**
     * Uncertainty of the Optical Johnson V magnitude measured in magnitudes.
     */
    vmagUnc?: number;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w1mag?: number;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) catalog of origin in the Vega
     * system (AL, CA).
     */
    w1magOrigin?: string;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w1magUnc?: number;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) saturated pixel fraction in the
     * Vega system.
     */
    w1sat?: number;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w2mag?: number;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) catalog of origin in the Vega
     * system (AL, CA).
     */
    w2magOrigin?: string;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w2magUnc?: number;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) saturated pixel fraction in the
     * Vega system.
     */
    w2sat?: number;

    /**
     * Mid-infrared photometric W3-band (12 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w3mag?: number;

    /**
     * Mid-infrared photometric W3-band (12 microns) catalog of origin in the Vega
     * system (AL).
     */
    w3magOrigin?: string;

    /**
     * Mid-infrared photometric W3-band (12 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w3magUnc?: number;

    /**
     * Mid-infrared photometric W3-band (12 microns) saturated pixel fraction in the
     * Vega system.
     */
    w3sat?: number;

    /**
     * Mid-infrared photometric W4-band (22 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w4mag?: number;

    /**
     * Mid-infrared photometric W4-band (22 microns) catalog of origin in the Vega
     * system (AL).
     */
    w4magOrigin?: string;

    /**
     * Mid-infrared photometric W4-band (22 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w4magUnc?: number;

    /**
     * Mid-infrared photometric W4-band (22 microns) saturated pixel fraction in the
     * Vega system.
     */
    w4sat?: number;

    /**
     * The Washington Double Star Catalog (WD) identifier of this object.
     */
    wdsCatId?: string;
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
     * Originating astrometric catalog for this object (GA (GAIA), HI (HIPPARCOS), UB
     * (USNOBSC), AL, AP, CA, CR, DU, FK6_I, FK6_III, PS, SK, TD, TP, TX, UC, UL, UH,
     * UP, VH, VS, WD).
     */
    astrometryOrigin: string;

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * The ID of this object in the specific catalog associated with this record. This
     * field will either contain the value in the gncCatId or sdaCatId field.
     */
    csId: number;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL: Data collected or produced that pertains to real-world objects, events,
     * and analysis.
     *
     * TEST: Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE: Data pertaining to a government or military exercise. The data may
     * include both real and simulated data.
     *
     * SIMULATED: Synthetic data generated by a model to mimic real-world datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

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
     * The American Association of Variable Star Observers (AAVSO) Variable Star Index
     * (VSX) (VX) object ID of this object.
     */
    aavsoVsxId?: number;

    /**
     * Optical AB g magnitude.
     */
    abgmag?: number;

    /**
     * Catalog of origin of optical AB g magnitude.
     */
    abgmagOrigin?: string;

    /**
     * Uncertainty of optical AB g magnitude.
     */
    abgmagUnc?: number;

    /**
     * Optical AB i magnitude.
     */
    abimag?: number;

    /**
     * Catalog of origin of optical AB i magnitude.
     */
    abimagOrigin?: string;

    /**
     * Uncertainty of optical AB i magnitude.
     */
    abimagUnc?: number;

    /**
     * Optical AB r magnitude.
     */
    abrmag?: number;

    /**
     * Catalog of origin of optical AB r magnitude.
     */
    abrmagOrigin?: string;

    /**
     * Uncertainty of optical AB r magnitude.
     */
    abrmagUnc?: number;

    /**
     * Optical AB y magnitude.
     */
    abymag?: number;

    /**
     * Catalog of origin of optical AB y magnitude.
     */
    abymagOrigin?: string;

    /**
     * Uncertainty of optical AB y magnitude.
     */
    abymagUnc?: number;

    /**
     * Optical AB z magnitude.
     */
    abzmag?: number;

    /**
     * Catalog of origin of optical AB z magnitude.
     */
    abzmagOrigin?: string;

    /**
     * Uncertainty of optical AB z magnitude.
     */
    abzmagUnc?: number;

    /**
     * Contamination and confusion indicator in AllWISE.
     */
    allWISEccInd?: string;

    /**
     * The designation of this object in the All Wide-field Infrared Survey Explorer
     * (AllWISE) catalog (AL).
     */
    allWISEId?: string;

    /**
     * Active deblending indicator in AllWISE.
     */
    allWISEnaInd?: number;

    /**
     * Photometric quality indicator in AllWISE.
     */
    allWISEphQualInd?: string;

    /**
     * The American Association of Variable Star Observers (AAVSO) Photometric All-Sky
     * Survey (APASS) (AP) name of this object.
     */
    apassId?: string;

    /**
     * Astrometric excess noise in the Gaia catalog measured in milliarcseconds.
     */
    astrometricExcessNoise?: number;

    /**
     * Astrometric excess noise sigma in Gaia.
     */
    astrometricExcessNoiseSig?: number;

    /**
     * Optical Johnson B magnitude measured in magnitudes.
     */
    bmag?: number;

    /**
     * Catalog of origin of optical Johnson B magnitude (AP, CR, HI).
     */
    bmagOrigin?: string;

    /**
     * Uncertainty of optical Johnson B magnitude measured in magnitudes.
     */
    bmagUnc?: number;

    /**
     * Gaia optical photometric Bp-band in the Vega scale measured in magnitudes.
     */
    bpmag?: number;

    /**
     * Gaia optical Bp-band uncertainty in the Vega scale measured in magnitudes.
     */
    bpmagUnc?: number;

    /**
     * The Carrasco catalog (CR) identifier of this object.
     */
    carrascoCatId?: number;

    /**
     * The version of the catalog associated with this object.
     */
    catVersion?: string;

    /**
     * The CatWISE2020 (CA) catalog source ID of this object.
     */
    catWise2020Id?: string;

    /**
     * Uncertainty of the declination of the source, in milliarcseconds, at the
     * reference epoch.
     */
    decUnc?: number;

    /**
     * The Ducati catalog (DU) name of this object.
     */
    ducatiCatId?: string;

    /**
     * The source ID of this object in the Gaia DR3 Catalog (GA).
     */
    gaiadr3CatId?: number;

    /**
     * Gaia optical photometric G-band in the Vega scale measured in magnitudes.
     */
    gmag?: number;

    /**
     * Gaia optical photometric G-band uncertainty in the Vega scale measured in
     * magnitudes.
     */
    gmagUnc?: number;

    /**
     * The ID of this object in the Guidance and Navigation Control (GNC) Catalog. If
     * this field is populated it shall match the csId field.
     */
    gncCatId?: number;

    /**
     * The Healpix index. Consumers should contact the provider for details on the
     * indexing scheme.
     */
    healpixIndex?: number;

    /**
     * The HIP ID of this object in the Hipparcos Catalog (HI).
     */
    hipCatId?: number;

    /**
     * Near-infrared photometric H-band magnitude in the Vega scale measured in
     * magnitudes.
     */
    hmag?: number;

    /**
     * Near-infrared photometric H-band catalog of origin in the Vega scale (TP, UC,
     * UL, UP, VH).
     */
    hmagOrigin?: string;

    /**
     * Near-infrared photometric H-band magnitude uncertainty in the Vega scale
     * measured in magnitudes.
     */
    hmagUnc?: number;

    /**
     * Optical Johnson I magnitude measured in magnitudes.
     */
    imag?: number;

    /**
     * Catalog of origin of optical Johnson I magnitude (CR, GA, HI).
     */
    imagOrigin?: string;

    /**
     * Uncertainty of optical Johnson I magnitude measured in magnitudes.
     */
    imagUnc?: number;

    /**
     * Near-infrared photometric J-band magnitude in the Vega scale measured in
     * magnitudes.
     */
    jmag?: number;

    /**
     * Near-infrared photometric J-band catalog of origin in the Vega scale (TP, UH,
     * UL, UP, VH).
     */
    jmagOrigin?: string;

    /**
     * Near-infrared photometric J-band magnitude uncertainty in the Vega scale
     * measured in magnitudes.
     */
    jmagUnc?: number;

    /**
     * Near-infrared photometric K-band magnitude in the Vega scale measured in
     * magnitudes.
     */
    kmag?: number;

    /**
     * Near-infrared photometric K-band catalog of origin in the Vega scale (TP, UC,
     * UH, UL, UP, VH).
     */
    kmagOrigin?: string;

    /**
     * Near-infrared photometric K-band magnitude uncertainty in the Vega scale
     * measured in magnitudes.
     */
    kmagUnc?: number;

    /**
     * Morphology indicator. Consumers should contact the provider for details on the
     * specifications.
     */
    morphologyInd?: number;

    /**
     * Flag indicating that this is a multiple object source.
     */
    multFlag?: boolean;

    /**
     * Identifier indicating multiplicity is detected. Consumers should contact the
     * provider for details on the specifications.
     */
    multiplicity?: string;

    /**
     * Dec of nearest neighbor measured in degrees.
     */
    neighborDec?: number;

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
     * RA of nearest neighbor measured in degrees.
     */
    neighborRa?: number;

    /**
     * Identifier indicating the source is a non-single star in gaia (additional
     * information is available in non-single star tables. Consumers should contact the
     * provider for details on the specifications).
     */
    nonSingleStar?: string;

    /**
     * Number of neighbors.
     */
    numNeighbors?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The Panoramic Survey Telescope and Rapid Response System (Pan-STARRS) (PS)
     * object ID.
     */
    panStarrsId?: number;

    /**
     * Absolute stellar parallax of the source, in milliarcseconds.
     */
    parallax?: number;

    /**
     * Uncertainty of the stellar parallax, in milliarcseconds.
     */
    parallaxUnc?: number;

    /**
     * Proper motion in declination of the source, in milliarcseconds per year, at the
     * reference epoch.
     */
    pmdec?: number;

    /**
     * Uncertainty of proper motion in declination, in milliarcseconds per year.
     */
    pmdecUnc?: number;

    /**
     * Proper motion in right ascension of the source, in milliarcseconds per year, at
     * the reference epoch.
     */
    pmra?: number;

    /**
     * Uncertainty of proper motion in right ascension, in milliarcseconds per year.
     */
    pmraUnc?: number;

    /**
     * Flag indicating that the proper motion uncertainty in either ra or dec is
     * greater than 10 milliarcseconds per year.
     */
    pmUncFlag?: boolean;

    /**
     * Flag indicating that the position uncertainty in either ra or dec is greater
     * than 100 milliarcseconds.
     */
    posUncFlag?: boolean;

    /**
     * Astrometry correction flag in Pan-STARRS.
     */
    ps1astrometryCorrectionFlag?: number;

    /**
     * Object information flag in Pan-STARRS.
     */
    ps1ObjInfoFlag?: number;

    /**
     * Quality flag in Pan-STARRS.
     */
    ps1QualityFlag?: number;

    /**
     * Uncertainty of the right ascension of the source, in milliarcseconds, at the
     * reference epoch.
     */
    raUnc?: number;

    /**
     * Optical Johnson R magnitude measured in magnitudes.
     */
    rmag?: number;

    /**
     * Catalog of origin of the Optical Johnson R magnitude (CR, GA).
     */
    rmagOrigin?: string;

    /**
     * Uncertainty of the Optical Johnson R magnitude measured in magnitudes.
     */
    rmagUnc?: number;

    /**
     * Gaia optical Rp-band in the Vega scale measured in magnitudes.
     */
    rpmag?: number;

    /**
     * Gaia optical photometric Rp-band uncertainty in the Vega scale measured in
     * magnitudes.
     */
    rpmagUnc?: number;

    /**
     * RUWE in Gaia.
     */
    ruwe?: number;

    /**
     * The ID of this object in the Space Domain Awareness (SDA) Catalog. If this field
     * is populated it shall match the csId field.
     */
    sdaCatId?: number;

    /**
     * Original G magnitude if the source is in Gaia, otherwise the magnitude is
     * converted from other photometric passbands, when possible, measured in
     * magnitudes.
     */
    sgmag?: number;

    /**
     * Uncertainty of sgmag measured in magnitudes.
     */
    sgmagUnc?: number;

    /**
     * Photocentric shift caused by neighbors, in arcseconds.
     */
    shift?: number;

    /**
     * Flag indicating that the photocentric shift is greater than 50 milliarcseconds.
     */
    shiftFlag?: boolean;

    /**
     * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
     * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of one
     * arcsecond.
     */
    shiftFWHM1?: number;

    /**
     * Photocentric shift caused by neighbors, in arcseconds. This value is constrained
     * to a Point Spread Function (PSF) with Full Width at Half Maximum (FWHM) of six
     * arcseconds.
     */
    shiftFWHM6?: number;

    /**
     * The SkyMapper (SK) catalog object ID.
     */
    skyMapperId?: number;

    /**
     * The designation of this object in the Two Micron All Sky Survey (2MASS) Point
     * Source Catalog (TP).
     */
    twoMASSId?: string;

    /**
     * Photometric (PH) quality indicator in 2MASS PSC.
     */
    twoMassPHQualInd?: string;

    /**
     * Read flag in 2MASS PSC.
     */
    twoMassReadFlag?: string;

    /**
     * The Two Micron All Sky Survey (2MASS) Extended Source Catalog (XSC) (TX)
     * designation of this object.
     */
    twoMassXscId?: string;

    /**
     * The Tycho Double Star Catalog (TD) identifier (specified as Tycho-2 ID) of this
     * object.
     */
    tychoDscId?: number;

    /**
     * The United Kingdom Infrared Telescope (UKIRT) Hemispheric Survey (UHS) (UH)
     * source ID of this object.
     */
    uhsId?: number;

    /**
     * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Clusters Survey
     * (GCS) (UC) source ID of this object.
     */
    ukidssGCSId?: number;

    /**
     * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Galactic Plane Survey (GPS)
     * (UP) source ID of this object.
     */
    ukidssGPSId?: number;

    /**
     * The United Kingdom Infrared Deep Sky Survey (UKIDSS) Large Area Survey (LAS)
     * (UL) source ID of this object.
     */
    ukidssLASId?: number;

    /**
     * Flag indicating that the source exhibits variable magnitude.
     */
    varFlag?: boolean;

    /**
     * Identifier indicating variability is present in the photometric data. Consumers
     * should contact the provider for details on the specifications.
     */
    variability?: string;

    /**
     * The Visible and Infrared Survey Telescope for Astronomy (VISTA) Hemisphere
     * Survey (VHS) (VS) source ID of this object.
     */
    vhsId?: number;

    /**
     * Optical Johnson V magnitude measured in magnitudes.
     */
    vmag?: number;

    /**
     * Catalog of origin of Optical Johnson V magnitude (AP, CR, DU, GA, HI).
     */
    vmagOrigin?: string;

    /**
     * Uncertainty of the Optical Johnson V magnitude measured in magnitudes.
     */
    vmagUnc?: number;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w1mag?: number;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) catalog of origin in the Vega
     * system (AL, CA).
     */
    w1magOrigin?: string;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w1magUnc?: number;

    /**
     * Mid-infrared photometric W1-band (3.4 microns) saturated pixel fraction in the
     * Vega system.
     */
    w1sat?: number;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w2mag?: number;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) catalog of origin in the Vega
     * system (AL, CA).
     */
    w2magOrigin?: string;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w2magUnc?: number;

    /**
     * Mid-infrared photometric W2-band (4.6 microns) saturated pixel fraction in the
     * Vega system.
     */
    w2sat?: number;

    /**
     * Mid-infrared photometric W3-band (12 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w3mag?: number;

    /**
     * Mid-infrared photometric W3-band (12 microns) catalog of origin in the Vega
     * system (AL).
     */
    w3magOrigin?: string;

    /**
     * Mid-infrared photometric W3-band (12 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w3magUnc?: number;

    /**
     * Mid-infrared photometric W3-band (12 microns) saturated pixel fraction in the
     * Vega system.
     */
    w3sat?: number;

    /**
     * Mid-infrared photometric W4-band (22 microns) magnitude in the Vega system
     * measured in magnitudes.
     */
    w4mag?: number;

    /**
     * Mid-infrared photometric W4-band (22 microns) catalog of origin in the Vega
     * system (AL).
     */
    w4magOrigin?: string;

    /**
     * Mid-infrared photometric W4-band (22 microns) magnitude uncertainty in the Vega
     * system measured in magnitudes.
     */
    w4magUnc?: number;

    /**
     * Mid-infrared photometric W4-band (22 microns) saturated pixel fraction in the
     * Vega system.
     */
    w4sat?: number;

    /**
     * The Washington Double Star Catalog (WD) identifier of this object.
     */
    wdsCatId?: string;
  }
}

StarCatalog.History = History;

export declare namespace StarCatalog {
  export {
    type StarCatalogListResponse as StarCatalogListResponse,
    type StarCatalogCountResponse as StarCatalogCountResponse,
    type StarCatalogGetResponse as StarCatalogGetResponse,
    type StarCatalogQueryhelpResponse as StarCatalogQueryhelpResponse,
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
