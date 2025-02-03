// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Attitudesets extends APIResource {
  /**
   * Service operation to get a single AttitudeSet record by its unique ID passed as
   * a path parameter.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.AttitudesetFull> {
    return this._client.get(`/udl/attitudeset/${id}`, options);
  }
}
