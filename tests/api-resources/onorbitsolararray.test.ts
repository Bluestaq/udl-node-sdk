// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onorbitsolararray', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbitsolararray.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      idOnOrbit: 'ONORBIT-ID',
      idSolarArray: 'SOLARARRAY-ID',
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
    const response = await client.onorbitsolararray.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      idOnOrbit: 'ONORBIT-ID',
      idSolarArray: 'SOLARARRAY-ID',
      source: 'Bluestaq',
      id: 'ONORBITSOLARARRAY-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      quantity: 10,
      solarArray: {
        dataMode: 'REAL',
        name: 'Solar1',
        source: 'Bluestaq',
        id: 'SOLARARRAY-ID',
        origin: 'THIRD_PARTY_DATASOURCE',
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.onorbitsolararray.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      idOnOrbit: 'ONORBIT-ID',
      idSolarArray: 'SOLARARRAY-ID',
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
    const response = await client.onorbitsolararray.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      idOnOrbit: 'ONORBIT-ID',
      idSolarArray: 'SOLARARRAY-ID',
      source: 'Bluestaq',
      id: 'ONORBITSOLARARRAY-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      quantity: 10,
      solarArray: {
        dataMode: 'REAL',
        name: 'Solar1',
        source: 'Bluestaq',
        id: 'SOLARARRAY-ID',
        origin: 'THIRD_PARTY_DATASOURCE',
      },
    });
  });

  test('list', async () => {
    const responsePromise = client.onorbitsolararray.list();
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
    await expect(client.onorbitsolararray.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.onorbitsolararray.delete('id');
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
    await expect(client.onorbitsolararray.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.onorbitsolararray.get('id');
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
    await expect(client.onorbitsolararray.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
