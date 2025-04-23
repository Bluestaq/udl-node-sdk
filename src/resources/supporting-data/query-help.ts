// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class QueryHelp extends APIResource {
  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/dataowner/queryhelp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
