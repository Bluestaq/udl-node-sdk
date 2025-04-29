// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource globalatmosphericmodel', () => {
  test('retrieve', async () => {
    const responsePromise = client.globalatmosphericmodel.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.globalatmosphericmodel.retrieve(
        'id',
        { firstResult: 0, maxResult: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count: only required params', async () => {
    const responsePromise = client.globalatmosphericmodel.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.globalatmosphericmodel.count({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('getFile: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.globalatmosphericmodel.getFile(
        'id',
        { firstResult: 0, maxResult: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('query: only required params', async () => {
    const responsePromise = client.globalatmosphericmodel.query({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.globalatmosphericmodel.query({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.globalatmosphericmodel.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.globalatmosphericmodel.tuple({
      columns: 'columns',
      ts: '2019-12-27T18:11:19.117Z',
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
    const response = await client.globalatmosphericmodel.tuple({
      columns: 'columns',
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.globalatmosphericmodel.unvalidatedPublish({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      ts: '2024-03-01T11:45:00.123Z',
      type: 'Global Total Electron Density',
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
    const response = await client.globalatmosphericmodel.unvalidatedPublish({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      ts: '2024-03-01T11:45:00.123Z',
      type: 'Global Total Electron Density',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      cadence: 10,
      endAlt: 90.125,
      endLat: -88.75,
      endLon: -177.5,
      filename: 'glotec_elecden.geojson',
      filesize: 2097152,
      numAlt: 35,
      numLat: 72,
      numLon: 72,
      origin: 'THIRD_PARTY_DATASOURCE',
      reportTime: '2024-08-21T21:54:35.123Z',
      startAlt: 8553.163773,
      startLat: 88.75,
      startLon: 177.5,
      state: 'PREDICTED',
      stepLat: 2.5,
      stepLon: 5.5,
    });
  });
});
