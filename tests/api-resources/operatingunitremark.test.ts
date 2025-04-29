// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operatingunitremark', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operatingunitremark.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOperatingUnit: 'OperatingUnit-ID',
      source: 'some.user',
      text: 'This is a remark',
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
    const response = await client.operatingunitremark.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOperatingUnit: 'OperatingUnit-ID',
      source: 'some.user',
      text: 'This is a remark',
      id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      altRmkId: '123456ABC',
      code: 'M',
      name: 'Remark name',
      origin: 'THIRD_PARTY_DATASOURCE',
      type: 'Restriction',
    });
  });

  test('list', async () => {
    const responsePromise = client.operatingunitremark.list();
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
      client.operatingunitremark.list({ firstResult: 0, maxResult: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.operatingunitremark.count();
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
      client.operatingunitremark.count(
        { firstResult: 0, maxResult: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.operatingunitremark.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idOperatingUnit: 'OperatingUnit-ID',
          source: 'some.user',
          text: 'This is a remark',
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
    const response = await client.operatingunitremark.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idOperatingUnit: 'OperatingUnit-ID',
          source: 'some.user',
          text: 'This is a remark',
          id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
          altRmkId: '123456ABC',
          code: 'M',
          name: 'Remark name',
          origin: 'THIRD_PARTY_DATASOURCE',
          type: 'Restriction',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.operatingunitremark.get('id');
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
      client.operatingunitremark.get(
        'id',
        { firstResult: 0, maxResult: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.operatingunitremark.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.operatingunitremark.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.operatingunitremark.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResult: 0,
    });
  });
});
