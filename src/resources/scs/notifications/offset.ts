// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * These endpoints provide the ability to subscribe to SCS Event Notifications for file upload/update and folder creation events within a specific folder in the Secure Content Store. A user must be authorized to view the file/folder for which a notification was created in order to retrieve that notification.
 */
export class Offset extends APIResource {
  /**
   * Retrieve the min and max offsets of the SCS Event Notification Kafka topic.
   *
   * @example
   * ```ts
   * const offset = await client.scs.notifications.offset.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<OffsetGetResponse> {
    return this._client.get('/scs/notifications/offsets', options);
  }

  /**
   * Returns the current/latest offset for the SCS Event Notification Kafka topic.
   *
   * @example
   * ```ts
   * await client.scs.notifications.offset.getLatest();
   * ```
   */
  getLatest(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/scs/notifications/getLatestOffset', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OffsetGetResponse {
  /**
   * The maximum (latest) Kafka offset for this topic.
   */
  maxOffset?: number;

  /**
   * The minimum (oldest) Kafka offset for this topic.
   */
  minOffset?: number;
}

export declare namespace Offset {
  export { type OffsetGetResponse as OffsetGetResponse };
}
