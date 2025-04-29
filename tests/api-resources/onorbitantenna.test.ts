// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onorbitantenna', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbitantenna.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAntenna: 'ANTENNA-ID',
      idOnOrbit: 'ONORBIT-ID',
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
    const response = await client.onorbitantenna.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAntenna: 'ANTENNA-ID',
      idOnOrbit: 'ONORBIT-ID',
      source: 'Bluestaq',
      id: 'ONORBITANTENNA-ID',
      antenna: {
        dataMode: 'TEST',
        name: 'IRIDIUM NEXT 121-ANTENNA-10075',
        source: 'Bluestaq',
        id: 'ANTENNA-ID',
        origin: 'THIRD_PARTY_DATASOURCE',
      },
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.onorbitantenna.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAntenna: 'ANTENNA-ID',
      idOnOrbit: 'ONORBIT-ID',
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
    const response = await client.onorbitantenna.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAntenna: 'ANTENNA-ID',
      idOnOrbit: 'ONORBIT-ID',
      source: 'Bluestaq',
      body_id: 'ONORBITANTENNA-ID',
      antenna: {
        dataMode: 'TEST',
        name: 'IRIDIUM NEXT 121-ANTENNA-10075',
        source: 'Bluestaq',
        id: 'ANTENNA-ID',
        origin: 'THIRD_PARTY_DATASOURCE',
      },
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('list', async () => {
    const responsePromise = client.onorbitantenna.list();
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
      client.onorbitantenna.list({ firstResult: 0, maxResult: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.onorbitantenna.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.onorbitantenna.get('id');
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
      client.onorbitantenna.get('id', { firstResult: 0, maxResult: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });
});
