// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource solarArrayDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.solarArrayDetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
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
    const response = await client.solarArrayDetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSolarArray: 'SOLARARRAY-ID',
      source: 'Bluestaq',
      id: 'SOLARARRAYDETAILS-ID',
      area: 123.4,
      description: 'Example notes',
      junctionTechnology: 'Triple',
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      span: 123.4,
      tags: ['TAG1', 'TAG2'],
      technology: 'Ga-As',
      type: 'U Shaped',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.solarArrayDetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
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
    const response = await client.solarArrayDetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSolarArray: 'SOLARARRAY-ID',
      source: 'Bluestaq',
      body_id: 'SOLARARRAYDETAILS-ID',
      area: 123.4,
      description: 'Example notes',
      junctionTechnology: 'Triple',
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      span: 123.4,
      tags: ['TAG1', 'TAG2'],
      technology: 'Ga-As',
      type: 'U Shaped',
    });
  });

  test('list', async () => {
    const responsePromise = client.solarArrayDetails.list();
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
      client.solarArrayDetails.list(
        {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          firstResult: 0,
          maxResults: 0,
          source: 'source',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.solarArrayDetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.solarArrayDetails.get('id');
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
      client.solarArrayDetails.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });
});
