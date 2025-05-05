// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource launchDetection', () => {
  test('create: only required params', async () => {
    const responsePromise = client.launchDetection.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      messageType: 'Example-Msg-Type',
      observationLatitude: 45.23,
      observationLongitude: 1.23,
      observationTime: '2018-01-01T16:00:00.123Z',
      sequenceNumber: 5,
      source: 'Bluestaq',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.launchDetection.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      messageType: 'Example-Msg-Type',
      observationLatitude: 45.23,
      observationLongitude: 1.23,
      observationTime: '2018-01-01T16:00:00.123Z',
      sequenceNumber: 5,
      source: 'Bluestaq',
      id: 'LAUNCHDETECTION-ID',
      descriptor: 'Example descriptor',
      eventId: 'EVENT-ID',
      highZenithAzimuth: false,
      inclination: 1.23,
      launchAzimuth: 1.23,
      launchLatitude: 1.23,
      launchLongitude: 1.23,
      launchTime: '2018-01-01T16:00:00.123Z',
      observationAltitude: 1.23,
      origin: 'THIRD_PARTY_DATASOURCE',
      raan: 1.23,
      stereoFlag: false,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.launchDetection.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      messageType: 'Example-Msg-Type',
      observationLatitude: 45.23,
      observationLongitude: 1.23,
      observationTime: '2018-01-01T16:00:00.123Z',
      sequenceNumber: 5,
      source: 'Bluestaq',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.launchDetection.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      messageType: 'Example-Msg-Type',
      observationLatitude: 45.23,
      observationLongitude: 1.23,
      observationTime: '2018-01-01T16:00:00.123Z',
      sequenceNumber: 5,
      source: 'Bluestaq',
      body_id: 'LAUNCHDETECTION-ID',
      descriptor: 'Example descriptor',
      eventId: 'EVENT-ID',
      highZenithAzimuth: false,
      inclination: 1.23,
      launchAzimuth: 1.23,
      launchLatitude: 1.23,
      launchLongitude: 1.23,
      launchTime: '2018-01-01T16:00:00.123Z',
      observationAltitude: 1.23,
      origin: 'THIRD_PARTY_DATASOURCE',
      raan: 1.23,
      stereoFlag: false,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
    });
  });

  test('list', async () => {
    const responsePromise = client.launchDetection.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.launchDetection.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.launchDetection.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.launchDetection.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.launchDetection.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.launchDetection.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.launchDetection.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.launchDetection.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.launchDetection.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.launchDetection.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
