// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource siteStatus', () => {
  test('create: only required params', async () => {
    const responsePromise = client.siteStatus.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
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
    const response = await client.siteStatus.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSite: '41e3e554-9790-40b9-bd7b-f30d864dcad8',
      source: 'Bluestaq',
      id: 'SITESTATUS-ID',
      cat: 'COLD',
      coldInventory: 1,
      commImpairment: 'commImpairment',
      cpcon: '4',
      eoc: 'WARM',
      fpcon: 'BRAVO',
      hotInventory: 1,
      hpcon: 'CHARLIE',
      instStatus: 'PMC',
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
    const responsePromise = client.siteStatus.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
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
    const response = await client.siteStatus.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSite: '41e3e554-9790-40b9-bd7b-f30d864dcad8',
      source: 'Bluestaq',
      body_id: 'SITESTATUS-ID',
      cat: 'COLD',
      coldInventory: 1,
      commImpairment: 'commImpairment',
      cpcon: '4',
      eoc: 'WARM',
      fpcon: 'BRAVO',
      hotInventory: 1,
      hpcon: 'CHARLIE',
      instStatus: 'PMC',
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
    const responsePromise = client.siteStatus.list();
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
      client.siteStatus.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.siteStatus.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.siteStatus.count();
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
      client.siteStatus.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.siteStatus.get('id');
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
      client.siteStatus.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.siteStatus.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.siteStatus.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.siteStatus.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });
});
