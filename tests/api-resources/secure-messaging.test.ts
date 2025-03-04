// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource secureMessaging', () => {
  test('describeTopic: only required params', async () => {
    const responsePromise = client.secureMessaging.describeTopic('topic', { query_topic: 'topic' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('describeTopic: required and optional params', async () => {
    const response = await client.secureMessaging.describeTopic('topic', { query_topic: 'topic' });
  });

  test('getLatestOffset: only required params', async () => {
    const responsePromise = client.secureMessaging.getLatestOffset('topic', { query_topic: 'topic' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getLatestOffset: required and optional params', async () => {
    const response = await client.secureMessaging.getLatestOffset('topic', { query_topic: 'topic' });
  });

  test('getMessages: only required params', async () => {
    const responsePromise = client.secureMessaging.getMessages('topic', 'offset', {
      query_offset: 0,
      query_topic: 'topic',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getMessages: required and optional params', async () => {
    const response = await client.secureMessaging.getMessages('topic', 'offset', {
      query_offset: 0,
      query_topic: 'topic',
    });
  });

  test('listTopics', async () => {
    const responsePromise = client.secureMessaging.listTopics();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listTopics: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.secureMessaging.listTopics({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
