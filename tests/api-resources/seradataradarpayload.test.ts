// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource seradataradarpayload', () => {
  test('create: only required params', async () => {
    const responsePromise = client.seradataradarpayload.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      spacecraftId: '12345',
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
    const response = await client.seradataradarpayload.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      spacecraftId: '12345',
      id: 'SERADATARADARPAYLOAD-ID',
      bandwidth: 1.23,
      bestResolution: 1.23,
      category: 'SAR',
      constellationInterferometricCapability: 'constellationInterferometricCapability',
      dutyCycle: 'dutyCycle',
      fieldOfRegard: 1.23,
      fieldOfView: 1.23,
      frequency: 1.23,
      frequencyBand: 'X',
      groundStationLocations: '51,42N-44,35E',
      groundStations: 'groundStations',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idSensor: '3c1ee9a0-90ad-1d75-c47b-2414e0a77e53',
      manufacturerOrgId: 'manufacturerOrgId',
      name: 'ALT',
      notes: 'Sample Notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      partnerSpacecraft: 'partnerSpacecraft',
      pointingMethod: 'Spacecraft',
      receivePolarization: 'Lin Dual',
      recorderSize: '256',
      swathWidth: 1.23,
      transmitPolarization: 'Lin Dual',
      waveLength: 1.23,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.seradataradarpayload.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      spacecraftId: '12345',
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
    const response = await client.seradataradarpayload.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      spacecraftId: '12345',
      id: 'SERADATARADARPAYLOAD-ID',
      bandwidth: 1.23,
      bestResolution: 1.23,
      category: 'SAR',
      constellationInterferometricCapability: 'constellationInterferometricCapability',
      dutyCycle: 'dutyCycle',
      fieldOfRegard: 1.23,
      fieldOfView: 1.23,
      frequency: 1.23,
      frequencyBand: 'X',
      groundStationLocations: '51,42N-44,35E',
      groundStations: 'groundStations',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idSensor: '3c1ee9a0-90ad-1d75-c47b-2414e0a77e53',
      manufacturerOrgId: 'manufacturerOrgId',
      name: 'ALT',
      notes: 'Sample Notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      partnerSpacecraft: 'partnerSpacecraft',
      pointingMethod: 'Spacecraft',
      receivePolarization: 'Lin Dual',
      recorderSize: '256',
      swathWidth: 1.23,
      transmitPolarization: 'Lin Dual',
      waveLength: 1.23,
    });
  });

  test('list', async () => {
    const responsePromise = client.seradataradarpayload.list();
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
    await expect(client.seradataradarpayload.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.seradataradarpayload.delete('id');
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
    await expect(
      client.seradataradarpayload.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.seradataradarpayload.count();
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
    await expect(client.seradataradarpayload.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.seradataradarpayload.get('id');
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
    await expect(client.seradataradarpayload.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.seradataradarpayload.queryhelp();
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
    await expect(client.seradataradarpayload.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.seradataradarpayload.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.seradataradarpayload.tuple({ columns: 'columns' });
  });
});
