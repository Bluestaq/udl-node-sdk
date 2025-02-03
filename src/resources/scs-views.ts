// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class ScsViews extends APIResource {
  /**
   * Return a single file to view in browser.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/scs/view/${id}`, { ...options, __binaryResponse: true });
  }
}
