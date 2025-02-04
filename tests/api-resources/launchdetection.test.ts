// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource launchdetection', () => {
  test('create: only required params', async () => {
    const responsePromise = client.launchdetection.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.launchdetection.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const responsePromise = client.launchdetection.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.launchdetection.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
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

  test('list', async () => {
    const responsePromise = client.launchdetection.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.launchdetection.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.launchdetection.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.launchdetection.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.launchdetection.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.launchdetection.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.launchdetection.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.launchdetection.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.launchdetection.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.launchdetection.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.launchdetection.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.launchdetection.tuple({ columns: 'columns' });
  });
});
