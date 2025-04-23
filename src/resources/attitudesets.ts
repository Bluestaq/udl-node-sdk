// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Attitudesets extends APIResource {
  /**
   * Service operation to get a single AttitudeSet record by its unique ID passed as
   * a path parameter.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.AttitudesetFull> {
    return this._client.get(path`/udl/attitudeset/${id}`, options);
  }
}
