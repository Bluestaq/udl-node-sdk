// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sitestatus', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sitestatus.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      idSite: '41e3e554-9790-40b9-bd7b-f30d864dcad8',
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
    const response = await client.sitestatus.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      idSite: '41e3e554-9790-40b9-bd7b-f30d864dcad8',
      source: 'Bluestaq',
      id: 'SITESTATUS-ID',
      cat: 'COLD',
      coldInventory: 1,
      commImpairment: 'commImpairment',
      cpcon: '1',
      eoc: 'COLD',
      fpcon: 'NORMAL',
      hotInventory: 1,
      hpcon: '0',
      instStatus: 'FMC',
      link: ['ATDL', 'IJMS', 'LINK-1'],
      linkStatus: ['AVAILABLE', 'DEGRADED', 'NOT AVAILABLE'],
      missile: ['GMD', 'HARPOON', 'JAVELIN'],
      missileInventory: [5, 10, 100],
      mobileAltId: 'MOBILEALT-ID',
      opsCapability: 'Fully Operational',
      opsImpairment: 'opsImpairment',
      origin: 'THIRD_PARTY_DATASOURCE',
      pes: true,
      poiid: 'd4a91864-6140-4b8d-67cd-45421c75f696',
      radarStatus: ['OPERATIONAL', 'OFF', 'NON-OPERATIONAL'],
      radarSystem: ['ILLUMINATING', 'MODE-4', 'MODE-3'],
      radiateMode: 'Active',
      reportTime: '2021-01-01T01:01:01.123Z',
      samMode: 'Initialization',
      siteType: 'ADOC',
      timeFunction: 'Activation',
      trackId: 'PCM4923-1656174732-4-1-257',
      trackRefL16: 'TrkNm',
      weatherMessage: 'Heavy rain',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.sitestatus.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      idSite: '41e3e554-9790-40b9-bd7b-f30d864dcad8',
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
    const response = await client.sitestatus.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      idSite: '41e3e554-9790-40b9-bd7b-f30d864dcad8',
      source: 'Bluestaq',
      body_id: 'SITESTATUS-ID',
      cat: 'COLD',
      coldInventory: 1,
      commImpairment: 'commImpairment',
      cpcon: '1',
      eoc: 'COLD',
      fpcon: 'NORMAL',
      hotInventory: 1,
      hpcon: '0',
      instStatus: 'FMC',
      link: ['ATDL', 'IJMS', 'LINK-1'],
      linkStatus: ['AVAILABLE', 'DEGRADED', 'NOT AVAILABLE'],
      missile: ['GMD', 'HARPOON', 'JAVELIN'],
      missileInventory: [5, 10, 100],
      mobileAltId: 'MOBILEALT-ID',
      opsCapability: 'Fully Operational',
      opsImpairment: 'opsImpairment',
      origin: 'THIRD_PARTY_DATASOURCE',
      pes: true,
      poiid: 'd4a91864-6140-4b8d-67cd-45421c75f696',
      radarStatus: ['OPERATIONAL', 'OFF', 'NON-OPERATIONAL'],
      radarSystem: ['ILLUMINATING', 'MODE-4', 'MODE-3'],
      radiateMode: 'Active',
      reportTime: '2021-01-01T01:01:01.123Z',
      samMode: 'Initialization',
      siteType: 'ADOC',
      timeFunction: 'Activation',
      trackId: 'PCM4923-1656174732-4-1-257',
      trackRefL16: 'TrkNm',
      weatherMessage: 'Heavy rain',
    });
  });

  test('list', async () => {
    const responsePromise = client.sitestatus.list();
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
    await expect(client.sitestatus.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.sitestatus.delete('id');
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
    await expect(client.sitestatus.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.sitestatus.count();
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
    await expect(client.sitestatus.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.sitestatus.get('id');
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
    await expect(client.sitestatus.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.sitestatus.queryhelp();
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
    await expect(client.sitestatus.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.sitestatus.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.sitestatus.tuple({ columns: 'columns' });
  });
});
