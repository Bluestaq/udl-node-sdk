// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource status', () => {
  test('create: only required params', async () => {
    const responsePromise = client.status.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      idEntity: 'ENTITY-ID',
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
    const response = await client.status.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      idEntity: 'ENTITY-ID',
      source: 'Bluestaq',
      id: 'STATUS-ID',
      declassificationDate: '2021-01-01T01:02:02.123Z',
      declassificationString: 'U',
      derivedFrom: 'SOME_SOURCE',
      notes: 'Example Notes',
      opsCap: 'FMC',
      origin: 'THIRD_PARTY_DATASOURCE',
      state: 'UNKNOWN',
      subStatusCollection: [
        {
          classificationMarking: 'U',
          dataMode: 'REAL',
          notes: 'Sample Notes',
          source: 'Bluestaq',
          status: 'FMC',
          statusId: 'REF-STATUS-ID',
          type: 'mwCap',
          id: 'SUBSTATUS-ID',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
      ],
      sysCap: 'FMC',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.status.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      idEntity: 'ENTITY-ID',
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
    const response = await client.status.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      idEntity: 'ENTITY-ID',
      source: 'Bluestaq',
      body_id: 'STATUS-ID',
      declassificationDate: '2021-01-01T01:02:02.123Z',
      declassificationString: 'U',
      derivedFrom: 'SOME_SOURCE',
      notes: 'Example Notes',
      opsCap: 'FMC',
      origin: 'THIRD_PARTY_DATASOURCE',
      state: 'UNKNOWN',
      subStatusCollection: [
        {
          classificationMarking: 'U',
          dataMode: 'REAL',
          notes: 'Sample Notes',
          source: 'Bluestaq',
          status: 'FMC',
          statusId: 'REF-STATUS-ID',
          type: 'mwCap',
          id: 'SUBSTATUS-ID',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
      ],
      sysCap: 'FMC',
    });
  });

  test('list', async () => {
    const responsePromise = client.status.list();
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
    await expect(client.status.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.status.delete('id');
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
    await expect(client.status.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.status.count();
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
    await expect(client.status.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.status.get('id');
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
    await expect(client.status.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('getByEntityId', async () => {
    const responsePromise = client.status.getByEntityId('idEntity');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getByEntityId: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.status.getByEntityId('idEntity', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('getByEntityType', async () => {
    const responsePromise = client.status.getByEntityType('entityType');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getByEntityType: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.status.getByEntityType('entityType', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.status.queryhelp();
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
    await expect(client.status.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.status.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.status.tuple({ columns: 'columns' });
  });
});
