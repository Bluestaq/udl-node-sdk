// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Ephemerides extends APIResource {
  /**
   * Service operation to post/store Ephemeris data. This operation is intended to be
   * used for automated feeds into UDL. The payload is in Ephemeris format as
   * described by the "Flight Safety Handbook" published by 18th Space Command. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * **Example:**
   * /filedrop/ephem?classification=U&dataMode=TEST&source=Bluestaq&satNo=25544&ephemFormatType=NASA&hasMnvr=false&type=ROUTINE&category=EXTERNAL&origin=NASA&tags=tag1,tag2
   */
  create(params: EphemerideCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/ephem', {
      body: body,
      ...options,
      headers: { 'Content-Type': 'text/plain', Accept: '*/*', ...options?.headers },
    });
  }
}

export interface EphemerideCreateParams {
  body: string;

  /**
   * Ephemeris category.
   */
  category: string;

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classification: string;

  /**
   * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
   */
  dataMode: string;

  /**
   * Ephemeris format as documented in Flight Safety Handbook.
   */
  ephemFormatType: string;

  /**
   * Boolean indicating whether maneuver(s) are incorporated into the ephemeris.
   */
  hasMnvr: boolean;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo: number;

  /**
   * Source of the Ephemeris data.
   */
  source: string;

  /**
   * Ephemeris type.
   */
  type: string;

  /**
   * Optional origin of the Ephemeris.
   */
  origin?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: string;
}

export declare namespace Ephemerides {
  export { type EphemerideCreateParams as EphemerideCreateParams };
}
