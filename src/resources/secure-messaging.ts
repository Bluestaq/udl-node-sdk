// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class SecureMessaging extends APIResource {
  /**
   * Retrieve the details of the specified topic or data type.
   */
  describeTopic(
    pathTopic: string,
    query: SecureMessagingDescribeTopicParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopicDetails> {
    return this._client.get(`/sm/describeTopic/${pathTopic}`, { query, ...options });
  }

  /**
   * Returns the current/latest offset for the passed topic name.
   */
  getLatestOffset(
    pathTopic: string,
    query: SecureMessagingGetLatestOffsetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get(`/sm/getLatestOffset/${pathTopic}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a set of messages from the given topic at the given offset. See Help >
   * Secure Messaging API on Storefront for more details on how to use getMessages.
   */
  getMessages(
    pathTopic: string,
    pathOffset: string,
    query: SecureMessagingGetMessagesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get(`/sm/getMessages/${pathTopic}/${pathOffset}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve the list of available secure messaging topics or data types available.
   */
  listTopics(options?: Core.RequestOptions): Core.APIPromise<SecureMessagingListTopicsResponse> {
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
  /**
   * The topic to be described.
   */
  query_topic: string;
}

export interface SecureMessagingGetLatestOffsetParams {
  /**
   * The topic name to return the latest offset.
   */
  query_topic: string;
}

export interface SecureMessagingGetMessagesParams {
  /**
   * The message offset.
   */
  query_offset: number;

  /**
   * The topic from which messages are to be retrieved.
   */
  query_topic: string;
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
