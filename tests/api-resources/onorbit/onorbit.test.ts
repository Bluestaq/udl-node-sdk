// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onorbit', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbit.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      satNo: 1,
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
    const response = await client.onorbit.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      satNo: 1,
      source: 'Bluestaq',
      altName: 'Alternate Name',
      category: 'Lunar',
      commonName: 'Example common name',
      constellation: 'Big Dipper',
      countryCode: 'US',
      decayDate: '2018-01-01T16:00:00.123Z',
      idOnOrbit: 'ONORBIT-ID',
      intlDes: '2021123ABC',
      launchDate: '2018-01-01',
      launchSiteId: 'LAUNCHSITE-ID',
      lifetimeYears: 10,
      missionNumber: 'Expedition 1',
      objectType: 'PAYLOAD',
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.onorbit.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      satNo: 1,
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
    const response = await client.onorbit.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      satNo: 1,
      source: 'Bluestaq',
      altName: 'Alternate Name',
      category: 'Lunar',
      commonName: 'Example common name',
      constellation: 'Big Dipper',
      countryCode: 'US',
      decayDate: '2018-01-01T16:00:00.123Z',
      idOnOrbit: 'ONORBIT-ID',
      intlDes: '2021123ABC',
      launchDate: '2018-01-01',
      launchSiteId: 'LAUNCHSITE-ID',
      lifetimeYears: 10,
      missionNumber: 'Expedition 1',
      objectType: 'PAYLOAD',
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('list', async () => {
    const responsePromise = client.onorbit.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.onorbit.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.onorbit.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.onorbit.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSignature: only required params', async () => {
    const responsePromise = client.onorbit.getSignature({ idOnOrbit: 'idOnOrbit' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSignature: required and optional params', async () => {
    const response = await client.onorbit.getSignature({ idOnOrbit: 'idOnOrbit' });
  });

  test('queryhelp', async () => {
    const responsePromise = client.onorbit.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.onorbit.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.onorbit.tuple({ columns: 'columns' });
  });
});
