// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Dataowner extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<DataownerRetrieveResponse> {
    return this._client.get('/udl/dataowner', options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/dataowner/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * Information pertaining to UDL data owners.
 */
export interface DataownerAbridged {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Description of this data owner.
   */
  description: string;

  /**
   * The name of the data owner.
   */
  doName: string;

  /**
   * Unique identifier of the contact for this data owner.
   */
  idContact: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Boolean indicating if the data owner is coming soon or not yet available.
   */
  comingSoon?: boolean;

  /**
   * Optional control required to access this data type from this owner.
   */
  control?: string;

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
   * Type of data this data owner owns (e.g. EPHEMERIS, IMAGERY, MANEUVER, etc.).
   */
  dataType?: string;

  /**
   * Boolean indicating if the data owner is enabled (if not enabled, they should not
   * appear on the data products screen on the storefront).
   */
  enabled?: boolean;

  /**
   * Type of organization which this data owner belongs to (e.g. Commercial,
   * Government, Academic, Consortium, etc.).
   */
  ownerType?: string;

  /**
   * Organization name for the data provider.
   */
  provider?: string;
}

export type DataownerRetrieveResponse = Array<DataownerAbridged>;

export type DataownerCountResponse = string;

export declare namespace Dataowner {
  export {
    type DataownerAbridged as DataownerAbridged,
    type DataownerRetrieveResponse as DataownerRetrieveResponse,
    type DataownerCountResponse as DataownerCountResponse,
  };
}
