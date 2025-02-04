// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource seradataearlywarning', () => {
  test('create: only required params', async () => {
    const responsePromise = client.seradataearlywarning.create({
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
    const response = await client.seradataearlywarning.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
      id: 'SERADATAEARLYWARNING-ID',
      bestResolution: 1.23,
      earthPointing: true,
      frequencyLimits: 'frequencyLimits',
      groundStationLocations: 'groundStationLocations',
      groundStations: 'groundStations',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idIR: 'idIR',
      manufacturerOrgId: 'manufacturerOrgId',
      missileLaunchPhaseDetectionAbility: 'missileLaunchPhaseDetectionAbility',
      name: 'Infra red telescope',
      origin: 'THIRD_PARTY_DATASOURCE',
      partnerSpacecraftId: 'partnerSpacecraftId',
      payloadNotes: 'Sample Notes',
      spectralBands: 'Infra-Red',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.seradataearlywarning.update('id', {
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
    const response = await client.seradataearlywarning.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
      id: 'SERADATAEARLYWARNING-ID',
      bestResolution: 1.23,
      earthPointing: true,
      frequencyLimits: 'frequencyLimits',
      groundStationLocations: 'groundStationLocations',
      groundStations: 'groundStations',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idIR: 'idIR',
      manufacturerOrgId: 'manufacturerOrgId',
      missileLaunchPhaseDetectionAbility: 'missileLaunchPhaseDetectionAbility',
      name: 'Infra red telescope',
      origin: 'THIRD_PARTY_DATASOURCE',
      partnerSpacecraftId: 'partnerSpacecraftId',
      payloadNotes: 'Sample Notes',
      spectralBands: 'Infra-Red',
    });
  });

  test('list', async () => {
    const responsePromise = client.seradataearlywarning.list();
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
    await expect(client.seradataearlywarning.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.seradataearlywarning.delete('id');
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
      client.seradataearlywarning.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.seradataearlywarning.count();
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
    await expect(client.seradataearlywarning.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.seradataearlywarning.get('id');
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
    await expect(client.seradataearlywarning.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.seradataearlywarning.queryhelp();
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
    await expect(client.seradataearlywarning.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.seradataearlywarning.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.seradataearlywarning.tuple({ columns: 'columns' });
  });
});
