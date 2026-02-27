// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { EopFullsOffsetPage } from '../shared';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * This service provides operations for manipulation and querying of earth orientation parameter (EOP) data. Earth Orientation Parameters (EOP) are produced by the IERS (International Earth Rotation and Reference Systems Service). Earth Orientation Parameters describe the irregularities of the earth's rotation. Technically, they are the parameters which provide the rotation of the ITRS (International Terrestrial Reference System) to the ICRS (International Celestial Reference System) as a function of time. Universal time -- Universal time (UT1) is the time of the earth clock, which performs one revolution in about 24h. It is practically proportional to the sidereal time. The excess revolution time is called length of day (LOD). Coordinates of the pole -- x and y are the coordinates of the Celestial Ephemeris Pole (CEP) relative to the IRP, the IERS Reference Pole. The CEP differs from the instantaneous rotation axis by quasi-diurnal terms with amplitudes under 0.01" (see Seidelmann, 1982). The x-axis is in the direction of the ITRF zero-meridian; the y-axis is in the direction 90 degrees West longitude. Celestial pole offsets -- Celestial pole offsets are described in the IAU Precession and Nutation models. The observed differences with respect to the conventional celestial pole position defined by the models are monitored and reported by the IERS. IERS Bulletins A and B provide current information on the Earth's orientation in the IERS Reference System. This includes Universal Time, coordinates of the terrestrial pole, and celestial pole offsets. Bulletin A gives an advanced solution updated weekly; the standard solution is given monthly in Bulletin B. Fields suffixed with ''B'' are Bulletin B values. All solutions are continuous within their respective uncertainties. Bulletin A is issued by the IERS Rapid Service/Prediction Centre at the U.S. Naval Observatory, Washington, DC and Bulletin B is issued by the IERS Earth Orientation Centre at the Paris Observatory. IERS Bulletin A reports the latest determinations for polar motion, UT1-UTC, and nutation offsets at daily intervals based on a combination of contributed analysis results using data from Very Long Baseline Interferometry (VLBI), Satellite Laser Ranging (SLR), Global Positioning System (GPS) satellites, and Lunar Laser Ranging (LLR). Predictions for variations a year into the future are also provided. Meteorological predictions of variations in Atmospheric Angular Momentum (AAM) are used to aid in the prediction of near-term UT1-UTC changes. This publication is prepared by the IERS Rapid Service/Prediction Center.
 */
export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const eopFull of client.eop.history.list({
   *   eopDate: '2019-12-27T18:11:19.117Z',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: HistoryListParams, options?: RequestOptions): PagePromise<EopFullsOffsetPage, Shared.EopFull> {
    return this._client.getAPIList('/udl/eop/history', OffsetPage<Shared.EopFull>, { query, ...options });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   *
   * @example
   * ```ts
   * await client.eop.history.aodr({
   *   eopDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  aodr(query: HistoryAodrParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/eop/history/aodr', {
      query,
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
   * const response = await client.eop.history.count({
   *   eopDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: HistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/eop/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryCountResponse = string;

export interface HistoryListParams extends OffsetPageParams {
  /**
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eopDate: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryAodrParams {
  /**
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eopDate: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * optional, notification method for the created file link. When omitted, EMAIL is
   * assumed. Current valid values are: EMAIL, SMS.
   */
  notification?: string;

  /**
   * optional, field delimiter when the created file is not JSON. Must be a single
   * character chosen from this set: (',', ';', ':', '|'). When omitted, "," is used.
   * It is strongly encouraged that your field delimiter be a character unlikely to
   * occur within the data.
   */
  outputDelimiter?: string;

  /**
   * optional, output format for the file. When omitted, JSON is assumed. Current
   * valid values are: JSON and CSV.
   */
  outputFormat?: string;
}

export interface HistoryCountParams {
  /**
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eopDate: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace History {
  export {
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}

export { type EopFullsOffsetPage };
