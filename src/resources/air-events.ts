// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AirEvents extends APIResource {
  /**
   * Service operation to delete an airevent record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(params: AirEventDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id } = params;
    return this._client.delete(`/udl/airevent/${path_id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AirEventDeleteParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the airevent to delete.
   */
  body_id: string;
}

export declare namespace AirEvents {
  export { type AirEventDeleteParams as AirEventDeleteParams };
}
