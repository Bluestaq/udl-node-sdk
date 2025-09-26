// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OffsetAPI from './offset';
import { Offset, OffsetGetResponse } from './offset';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Notifications extends APIResource {
  offset: OffsetAPI.Offset = new OffsetAPI.Offset(this._client);

  /**
   * Returns a list of notifications for items in a specific folder.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const notificationListResponse of client.scs.notifications.list(
   *   'offset',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    offset: string,
    query: NotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NotificationListResponsesOffsetPage, NotificationListResponse> {
    return this._client.getAPIList(path`/scs/notifications/${offset}`, OffsetPage<NotificationListResponse>, {
      query,
      ...options,
    });
  }
}

export type NotificationListResponsesOffsetPage = OffsetPage<NotificationListResponse>;

/**
 * SCS Event Notification
 */
export interface NotificationListResponse {
  actions?: Array<
    | 'ROOT_WRITE'
    | 'UPLOAD_FILE'
    | 'CREATE_FOLDER'
    | 'DOWNLOAD_FILE'
    | 'DOWNLOAD_FOLDER'
    | 'MOVE_RENAME_FILE'
    | 'MOVE_RENAME_FOLDER'
    | 'COPY_FILE'
    | 'COPY_FOLDER'
    | 'UPDATE_FILE'
    | 'UPDATE_FOLDER'
    | 'DELETE_FILE'
    | 'DELETE_FOLDER'
    | 'DELETE_EMPTY_FOLDER'
    | 'CROSS_DOMAIN'
    | 'SEND_NOTIFICATION'
    | 'DELETE_READ_ACL'
    | 'DELETE_WRITE_ACL'
    | 'DELETE_FILE_TAGS'
    | 'DELETE_FOLDER_TAGS'
  >;

  classificationMarking?: string;

  crossDomainTo?: string;

  expires?: string;

  overwrite?: boolean;

  path?: string;

  timestamp?: string;

  user?: string;
}

export interface NotificationListParams extends OffsetPageParams {
  /**
   * Path of the folder to retrieve notification for. Must start and end with /. If
   * no path is specified, all notifications will be returned.
   */
  path?: string;
}

Notifications.Offset = Offset;

export declare namespace Notifications {
  export {
    type NotificationListResponse as NotificationListResponse,
    type NotificationListResponsesOffsetPage as NotificationListResponsesOffsetPage,
    type NotificationListParams as NotificationListParams,
  };

  export { Offset as Offset, type OffsetGetResponse as OffsetGetResponse };
}
