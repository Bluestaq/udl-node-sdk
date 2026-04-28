// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class User extends APIResource {
  /**
   * Retrieve authentication details for the current user
   */
  auth(options?: RequestOptions): APIPromise<UserAuthResponse> {
    return this._client.get('/basicAuth', options);
  }
}

export interface UserAuthResponse {
  /**
   * Authentication status
   */
  auth: boolean;

  /**
   * List of user roles
   */
  roles: Array<string>;

  /**
   * Subject identifier
   */
  sub: string;
}

export declare namespace User {
  export { type UserAuthResponse as UserAuthResponse };
}
