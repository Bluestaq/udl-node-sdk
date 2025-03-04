// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class SecureMessaging extends APIResource {
  /**
   * Retrieve the details of the specified topic or data type.
   */
  describeTopic(topic: string, options?: Core.RequestOptions): Core.APIPromise<TopicDetails> {
    return this._client.get(`/sm/describeTopic/${topic}`, options);
  }

  /**
   * Returns the current/latest offset for the passed topic name.
   */
  getLatestOffset(topic: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/sm/getLatestOffset/${topic}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve a set of messages from the given topic at the given offset. See Help >
   * Secure Messaging API on Storefront for more details on how to use getMessages.
   */
  getMessages(topic: string, offset: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/sm/getMessages/${topic}/${offset}`, {
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

export declare namespace SecureMessaging {
  export {
    type TopicDetails as TopicDetails,
    type SecureMessagingListTopicsResponse as SecureMessagingListTopicsResponse,
  };
}
