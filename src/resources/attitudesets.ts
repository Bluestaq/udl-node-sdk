// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Attitudesets extends APIResource {
  /**
   * Service operation to get a single AttitudeSet record by its unique ID passed as
   * a path parameter.
   */
  retrieve(
    params: AttitudesetRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AttitudesetFull> {
    const { path_id, body_id } = params;
    return this._client.get(`/udl/attitudeset/${path_id}`, options);
  }
}

export interface AttitudesetRetrieveParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the AttitudeSet to find.
   */
  body_id: string;
}

export declare namespace Attitudesets {
  export { type AttitudesetRetrieveParams as AttitudesetRetrieveParams };
}
