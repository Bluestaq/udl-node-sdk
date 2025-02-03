// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource solararraydetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.solararraydetails.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.solararraydetails.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const responsePromise = client.solararraydetails.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.solararraydetails.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const responsePromise = client.solararraydetails.list();
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
    await expect(client.solararraydetails.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.solararraydetails.list(
        { classificationMarking: 'classificationMarking', dataMode: 'dataMode', source: 'source' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.solararraydetails.delete('id');
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
    await expect(client.solararraydetails.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.solararraydetails.get('id');
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
    await expect(client.solararraydetails.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
