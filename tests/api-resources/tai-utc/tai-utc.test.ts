// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource taiUtc', () => {
  test('create: only required params', async () => {
    const responsePromise = client.taiUtc.create({
      adjustmentDate: '2017-01-01T00:00:00.123Z',
      classificationMarking: 'U',
      dataMode: 'TEST',
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
    const response = await client.taiUtc.create({
      adjustmentDate: '2017-01-01T00:00:00.123Z',
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      id: 'TAIUTC-ID',
      multiplicationFactor: 0.001296,
      origin: 'THIRD_PARTY_DATASOURCE',
      rawFileURI: '/TAI/2019/01/22/4318471007562436-tai-utc.dat',
      taiUTC: 1.422818,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.taiUtc.update('id', {
      adjustmentDate: '2017-01-01T00:00:00.123Z',
      classificationMarking: 'U',
      dataMode: 'TEST',
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
    const response = await client.taiUtc.update('id', {
      adjustmentDate: '2017-01-01T00:00:00.123Z',
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      body_id: 'TAIUTC-ID',
      multiplicationFactor: 0.001296,
      origin: 'THIRD_PARTY_DATASOURCE',
      rawFileURI: '/TAI/2019/01/22/4318471007562436-tai-utc.dat',
      taiUTC: 1.422818,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.taiUtc.list({ adjustmentDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.taiUtc.list({
      adjustmentDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('delete', async () => {
    const responsePromise = client.taiUtc.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: only required params', async () => {
    const responsePromise = client.taiUtc.count({ adjustmentDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.taiUtc.count({
      adjustmentDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('get', async () => {
    const responsePromise = client.taiUtc.get('id');
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
      client.taiUtc.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.taiUtc.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.taiUtc.tuple({
      adjustmentDate: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.taiUtc.tuple({
      adjustmentDate: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
