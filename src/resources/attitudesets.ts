// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class Attitudesets extends APIResource {
  /**
   * Service operation to get a single AttitudeSet record by its unique ID passed as
   * a path parameter.
   */
  retrieve(
    id: string,
    query: AttitudesetRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.AttitudesetFull> {
    return this._client.get(path`/udl/attitudeset/${id}`, { query, ...options });
  }
}

export interface AttitudesetRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace Attitudesets {
  export { type AttitudesetRetrieveParams as AttitudesetRetrieveParams };
}
