// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sortieppr', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sortieppr.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
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
    const response = await client.sortieppr.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
      source: 'Bluestaq',
      id: 'SORTIEPPR-ID',
      endTime: '2024-01-01T01:01:01.123Z',
      externalId: 'aa714f4d52a37ab1a00b21af9566e379',
      grantor: 'SMITH',
      number: '07-21-07W',
      origin: 'THIRD_PARTY_DATASOURCE',
      remarks: 'PPR remark',
      requestor: 'jsmith1',
      startTime: '2024-01-01T01:01:01.123Z',
      type: 'M',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.sortieppr.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
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
    const response = await client.sortieppr.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
      source: 'Bluestaq',
      body_id: 'SORTIEPPR-ID',
      endTime: '2024-01-01T01:01:01.123Z',
      externalId: 'aa714f4d52a37ab1a00b21af9566e379',
      grantor: 'SMITH',
      number: '07-21-07W',
      origin: 'THIRD_PARTY_DATASOURCE',
      remarks: 'PPR remark',
      requestor: 'jsmith1',
      startTime: '2024-01-01T01:01:01.123Z',
      type: 'M',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.sortieppr.list({ idSortie: 'idSortie' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.sortieppr.list({ idSortie: 'idSortie', firstResult: 0, maxResults: 0 });
  });

  test('delete', async () => {
    const responsePromise = client.sortieppr.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: only required params', async () => {
    const responsePromise = client.sortieppr.count({ idSortie: 'idSortie' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.sortieppr.count({ idSortie: 'idSortie', firstResult: 0, maxResults: 0 });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.sortieppr.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
          source: 'Bluestaq',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.sortieppr.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
          source: 'Bluestaq',
          id: 'SORTIEPPR-ID',
          endTime: '2024-01-01T01:01:01.123Z',
          externalId: 'aa714f4d52a37ab1a00b21af9566e379',
          grantor: 'SMITH',
          number: '07-21-07W',
          origin: 'THIRD_PARTY_DATASOURCE',
          remarks: 'PPR remark',
          requestor: 'jsmith1',
          startTime: '2024-01-01T01:01:01.123Z',
          type: 'M',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.sortieppr.get('id');
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
      client.sortieppr.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.sortieppr.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.sortieppr.tuple({ columns: 'columns', idSortie: 'idSortie' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.sortieppr.tuple({
      columns: 'columns',
      idSortie: 'idSortie',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.sortieppr.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
          source: 'Bluestaq',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.sortieppr.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
          source: 'Bluestaq',
          id: 'SORTIEPPR-ID',
          endTime: '2024-01-01T01:01:01.123Z',
          externalId: 'aa714f4d52a37ab1a00b21af9566e379',
          grantor: 'SMITH',
          number: '07-21-07W',
          origin: 'THIRD_PARTY_DATASOURCE',
          remarks: 'PPR remark',
          requestor: 'jsmith1',
          startTime: '2024-01-01T01:01:01.123Z',
          type: 'M',
        },
      ],
    });
  });
});
