// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';
import { KafkaOffsetPage, PagePromise } from '../core/pagination';

export class SecureMessaging extends APIResource {
  /**
   * Retrieve the details of the specified topic or data type.
   */
  describeTopic(
    topic: string,
    query: SecureMessagingDescribeTopicParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TopicDetails> {
    return this._client.get(path`/sm/describeTopic/${topic}`, { query, ...options });
  }

  /**
   * Returns the current/latest offset for the passed topic name.
   */
  getLatestOffset(
    topic: string,
    query: SecureMessagingGetLatestOffsetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/sm/getLatestOffset/${topic}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a set of messages from the given topic at the given offset. See Help >
   * Secure Messaging API on Storefront for more details on how to use getMessages.
   */
  getMessages(
    offset: number,
    params: SecureMessagingGetMessagesParams,
    options?: RequestOptions,
  ): PagePromise<KafkaOffsetPage<object>, object> {
    const { topic, ...query } = params;
    return this._client.getAPIList(
      path`/sm/getMessages/${topic}/${offset}`,
      KafkaOffsetPage.withPathFn<object>((nextOffset) => path`/sm/getMessages/${topic}/${nextOffset}`),
      {
        query,
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      },
    );
  }

  /**
   * Retrieve the list of available secure messaging topics or data types available.
   */
  listTopics(options?: RequestOptions): APIPromise<SecureMessagingListTopicsResponse> {
    return this._client.get('/sm/listTopics', options);
  }
}

export interface TopicDetails {
  /**
   * A description of the data content of this topic.
   */
  description?: string;

  /**
   * The maximum (latest) kafka offset for this topic.
   */
  maxPos?: number;

  /**
   * The minimum (oldest) kafka offset for this topic.
   */
  minPos?: number;

  /**
   * The name of the topic in kafka.
   */
  topic?: string;

  /**
   * The UDL schema that the objects in this topic apply to.
   */
  udlOpenAPISchema?: string;
}

export type SecureMessagingListTopicsResponse = Array<TopicDetails>;

export interface SecureMessagingDescribeTopicParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SecureMessagingGetLatestOffsetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SecureMessagingGetMessagesParams {
  /**
   * Path param: The topic from which messages are to be retrieved.
   */
  topic: string;

  /**
   * Query param:
   */
  firstResult?: number;

  /**
   * Query param:
   */
  maxResults?: number;
}

export declare namespace SecureMessaging {
  export {
    type TopicDetails as TopicDetails,
    type SecureMessagingListTopicsResponse as SecureMessagingListTopicsResponse,
    type SecureMessagingDescribeTopicParams as SecureMessagingDescribeTopicParams,
    type SecureMessagingGetLatestOffsetParams as SecureMessagingGetLatestOffsetParams,
    type SecureMessagingGetMessagesParams as SecureMessagingGetMessagesParams,
  };
}
