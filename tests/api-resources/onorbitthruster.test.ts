// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onorbitthruster', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbitthruster.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEngine: 'ENGINE-ID',
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
    const response = await client.onorbitthruster.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEngine: 'ENGINE-ID',
      idOnOrbit: 'ONORBIT-ID',
      source: 'Bluestaq',
      id: 'ONORBITTHRUSTER-ID',
      engine: {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'ENGINE_VARIANT1',
        source: 'Bluestaq',
        id: 'ENGINE-ID',
        origin: 'THIRD_PARTY_DATASOURCE',
      },
      origin: 'THIRD_PARTY_DATASOURCE',
      quantity: 10,
      type: 'Hydrazine REA',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.onorbitthruster.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEngine: 'ENGINE-ID',
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
    const response = await client.onorbitthruster.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEngine: 'ENGINE-ID',
      idOnOrbit: 'ONORBIT-ID',
      source: 'Bluestaq',
      body_id: 'ONORBITTHRUSTER-ID',
      engine: {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'ENGINE_VARIANT1',
        source: 'Bluestaq',
        id: 'ENGINE-ID',
        origin: 'THIRD_PARTY_DATASOURCE',
      },
      origin: 'THIRD_PARTY_DATASOURCE',
      quantity: 10,
      type: 'Hydrazine REA',
    });
  });

  test('list', async () => {
    const responsePromise = client.onorbitthruster.list();
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
      client.onorbitthruster.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.onorbitthruster.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.onorbitthruster.get('id');
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
      client.onorbitthruster.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });
});
