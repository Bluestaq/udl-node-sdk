// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ClassificationMarkings extends APIResource {
  /**
   * Returns a list of all classification markings appropriate to the current user.
   *
   * @example
   * ```ts
   * const classificationMarkings =
   *   await client.scs.classificationMarkings.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ClassificationMarkingListResponse> {
    return this._client.get('/scs/getClassificationMarkings', options);
  }
}

export type ClassificationMarkingListResponse = Array<string>;

export declare namespace ClassificationMarkings {
  export { type ClassificationMarkingListResponse as ClassificationMarkingListResponse };
}
