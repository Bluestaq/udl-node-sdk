// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource launchsitedetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.launchsitedetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idLaunchSite: 'LAUNCHSITE-ID',
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
    const response = await client.launchsitedetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idLaunchSite: 'LAUNCHSITE-ID',
      source: 'Bluestaq',
      id: 'LAUNCHSITEDETAILS-ID',
      availableInclinations: [10.23, 10.23, 12.23, 14.23],
      description: 'Example notes',
      idLocation: 'LOCATION-ID',
      launchGroup: 'Example-group-name',
      location: {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'Example location',
        source: 'Bluestaq',
        altitude: 10.23,
        countryCode: 'US',
        idLocation: 'LOCATION-ID',
        lat: 45.23,
        lon: 179.1,
        origin: 'THIRD_PARTY_DATASOURCE',
      },
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.launchsitedetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idLaunchSite: 'LAUNCHSITE-ID',
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
    const response = await client.launchsitedetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idLaunchSite: 'LAUNCHSITE-ID',
      source: 'Bluestaq',
      body_id: 'LAUNCHSITEDETAILS-ID',
      availableInclinations: [10.23, 10.23, 12.23, 14.23],
      description: 'Example notes',
      idLocation: 'LOCATION-ID',
      launchGroup: 'Example-group-name',
      location: {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'Example location',
        source: 'Bluestaq',
        altitude: 10.23,
        countryCode: 'US',
        idLocation: 'LOCATION-ID',
        lat: 45.23,
        lon: 179.1,
        origin: 'THIRD_PARTY_DATASOURCE',
      },
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('list', async () => {
    const responsePromise = client.launchsitedetails.list();
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
    await expect(client.launchsitedetails.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.launchsitedetails.delete('id');
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
    await expect(client.launchsitedetails.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('findBySource: only required params', async () => {
    const responsePromise = client.launchsitedetails.findBySource({ source: 'source' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('findBySource: required and optional params', async () => {
    const response = await client.launchsitedetails.findBySource({ source: 'source' });
  });

  test('get', async () => {
    const responsePromise = client.launchsitedetails.get('id');
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
    await expect(client.launchsitedetails.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
