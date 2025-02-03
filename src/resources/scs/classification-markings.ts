// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ClassificationMarkings extends APIResource {
  /**
   * Returns a list of all classification markings appropriate to the current user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ClassificationMarkingListResponse> {
    return this._client.get('/scs/getClassificationMarkings', options);
  }
}

export type ClassificationMarkingListResponse = Array<string>;

export declare namespace ClassificationMarkings {
  export { type ClassificationMarkingListResponse as ClassificationMarkingListResponse };
}
