// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class QueryHelp extends APIResource {
  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/dataowner/queryhelp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
