// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Groups extends APIResource {
  /**
   * Returns a list of all available groups for ACL UIs
   *
   * @example
   * ```ts
   * const groups = await client.scs.groups.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<GroupListResponse> {
    return this._client.get('/scs/groups', options);
  }
}

export type GroupListResponse = Array<string>;

export declare namespace Groups {
  export { type GroupListResponse as GroupListResponse };
}
