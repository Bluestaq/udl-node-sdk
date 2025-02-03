// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Groups extends APIResource {
  /**
   * Returns a list of all available groups for ACL UIs
   */
  list(options?: Core.RequestOptions): Core.APIPromise<GroupListResponse> {
    return this._client.get('/scs/groups', options);
  }
}

export type GroupListResponse = Array<string>;

export declare namespace Groups {
  export { type GroupListResponse as GroupListResponse };
}
