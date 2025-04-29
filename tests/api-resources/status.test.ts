// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource status', () => {
  test('create: only required params', async () => {
    const responsePromise = client.status.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
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
      dataMode: 'TEST',
      idEntity: 'ENTITY-ID',
      source: 'Bluestaq',
      id: 'STATUS-ID',
      declassificationDate: '2021-01-01T01:02:02.123Z',
      declassificationString: 'U',
      derivedFrom: 'SOME_SOURCE',
      notes: 'Example Notes',
      opsCap: 'FMC',
      origin: 'THIRD_PARTY_DATASOURCE',
      state: 'ACTIVE',
      subStatusCollection: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          notes: 'Sample Notes',
          source: 'Bluestaq',
          status: 'FMC',
          statusId: 'REF-STATUS-ID',
          type: 'mdCap',
          id: 'SUBSTATUS-ID',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
      ],
      sysCap: 'FMC',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.status.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
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
    const response = await client.status.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEntity: 'ENTITY-ID',
      source: 'Bluestaq',
      body_id: 'STATUS-ID',
      declassificationDate: '2021-01-01T01:02:02.123Z',
      declassificationString: 'U',
      derivedFrom: 'SOME_SOURCE',
      notes: 'Example Notes',
      opsCap: 'FMC',
      origin: 'THIRD_PARTY_DATASOURCE',
      state: 'ACTIVE',
      subStatusCollection: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          notes: 'Sample Notes',
          source: 'Bluestaq',
          status: 'FMC',
          statusId: 'REF-STATUS-ID',
          type: 'mdCap',
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

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.status.list({ firstResult: 0, maxResult: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
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

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.status.count({ firstResult: 0, maxResult: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
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

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.status.get('id', { firstResult: 0, maxResult: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('getByEntityID', async () => {
    const responsePromise = client.status.getByEntityID('idEntity');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getByEntityID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.status.getByEntityID(
        'idEntity',
        { firstResult: 0, maxResult: 0 },
        { path: '/_stainless_unknown_path' },
      ),
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

  test('getByEntityType: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.status.getByEntityType(
        'entityType',
        { firstResult: 0, maxResult: 0 },
        { path: '/_stainless_unknown_path' },
      ),
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
    const response = await client.status.tuple({ columns: 'columns', firstResult: 0, maxResult: 0 });
  });
});
