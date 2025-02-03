// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource seradataopticalpayload', () => {
  test('create: only required params', async () => {
    const responsePromise = client.seradataopticalpayload.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
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
    const response = await client.seradataopticalpayload.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
      id: 'SERADATAOPTICALPAYLOAD-ID',
      bestResolution: 1.23,
      fieldOfRegard: 1.23,
      fieldOfView: 1.23,
      groundStationLocations: 'groundStationLocations',
      groundStations: 'groundStations',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idSensor: 'idSensor',
      imagingPayloadCategory: 'Infrared',
      manufacturerOrgId: 'manufacturerOrgId',
      name: 'TOURNESOL',
      notes: 'Sample Notes',
      numberOfFilmReturnCanisters: 1,
      origin: 'THIRD_PARTY_DATASOURCE',
      pointingMethod: 'Spacecraft',
      recorderSize: '1024',
      spectralBand: 'Green',
      spectralFrequencyLimits: '0.51',
      swathWidth: 1.23,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.seradataopticalpayload.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
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
    const response = await client.seradataopticalpayload.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
      body_id: 'SERADATAOPTICALPAYLOAD-ID',
      bestResolution: 1.23,
      fieldOfRegard: 1.23,
      fieldOfView: 1.23,
      groundStationLocations: 'groundStationLocations',
      groundStations: 'groundStations',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idSensor: 'idSensor',
      imagingPayloadCategory: 'Infrared',
      manufacturerOrgId: 'manufacturerOrgId',
      name: 'TOURNESOL',
      notes: 'Sample Notes',
      numberOfFilmReturnCanisters: 1,
      origin: 'THIRD_PARTY_DATASOURCE',
      pointingMethod: 'Spacecraft',
      recorderSize: '1024',
      spectralBand: 'Green',
      spectralFrequencyLimits: '0.51',
      swathWidth: 1.23,
    });
  });

  test('list', async () => {
    const responsePromise = client.seradataopticalpayload.list();
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
    await expect(client.seradataopticalpayload.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.seradataopticalpayload.delete('id');
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
      client.seradataopticalpayload.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.seradataopticalpayload.count();
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
    await expect(client.seradataopticalpayload.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.seradataopticalpayload.get('id');
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
    await expect(
      client.seradataopticalpayload.get('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.seradataopticalpayload.queryhelp();
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
    await expect(
      client.seradataopticalpayload.queryhelp({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.seradataopticalpayload.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.seradataopticalpayload.tuple({ columns: 'columns' });
  });
});
