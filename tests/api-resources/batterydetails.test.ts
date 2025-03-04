// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batterydetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.batterydetails.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      idBattery: 'BATTERY-ID',
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
    const response = await client.batterydetails.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      idBattery: 'BATTERY-ID',
      source: 'Bluestaq',
      id: 'BATTERYDETAILS-ID',
      capacity: 10.1,
      description: 'example notes',
      dischargeDepth: 0.2,
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      model: '11212',
      origin: 'THIRD_PARTY_DATASOURCE',
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      technology: 'Ni-Cd',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.batterydetails.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.batterydetails.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.batterydetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      idBattery: 'BATTERY-ID',
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
    const response = await client.batterydetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      idBattery: 'BATTERY-ID',
      source: 'Bluestaq',
      body_id: 'BATTERYDETAILS-ID',
      capacity: 10.1,
      description: 'example notes',
      dischargeDepth: 0.2,
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      model: '11212',
      origin: 'THIRD_PARTY_DATASOURCE',
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      technology: 'Ni-Cd',
    });
  });

  test('list', async () => {
    const responsePromise = client.batterydetails.list();
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
    await expect(client.batterydetails.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.batterydetails.delete('id');
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
    await expect(client.batterydetails.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
