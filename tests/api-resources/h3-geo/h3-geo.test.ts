// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource h3Geo', () => {
  test('create: only required params', async () => {
    const responsePromise = client.h3Geo.create({
      cells: [
        { cellId: '830b90fffffffff', classificationMarking: 'U', dataMode: 'TEST', source: 'Bluestaq' },
      ],
      classificationMarking: 'U',
      dataMode: 'TEST',
      numCells: 1,
      source: 'Bluestaq',
      startTime: '2024-07-02T00:00:00.123Z',
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
    const response = await client.h3Geo.create({
      cells: [
        {
          cellId: '830b90fffffffff',
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          id: '443fg911-4ab6-3d74-1991-372149d87f89',
          altMean: 450.1,
          altSigma: 400.1,
          anomScoreInterference: 0.125,
          anomScoreSpoofing: 0.125,
          changeScore: 12.34,
          coverage: 8,
          idH3Geo: '026dd511-8ba5-47d3-9909-836149f87686',
          origin: 'THIRD_PARTY_DATASOURCE',
          rpmMax: 50.1,
          rpmMean: 47.953125,
          rpmMedian: 48.375,
          rpmMin: 43.1,
          rpmSigma: 1.23,
        },
      ],
      classificationMarking: 'U',
      dataMode: 'TEST',
      numCells: 1,
      source: 'Bluestaq',
      startTime: '2024-07-02T00:00:00.123Z',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      centerFreq: 1575.42,
      endTime: '2024-07-03T00:00:00.123Z',
      origin: 'THIRD_PARTY_DATASOURCE',
      resolution: 3,
      tags: ['TAG1', 'TAG2'],
      type: 'Cell Towers',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.h3Geo.list({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.h3Geo.list({
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.h3Geo.count({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.h3Geo.count({
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('get', async () => {
    const responsePromise = client.h3Geo.get('id');
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
      client.h3Geo.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.h3Geo.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.h3Geo.tuple({ columns: 'columns', startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.h3Geo.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
