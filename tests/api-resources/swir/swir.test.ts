// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource swir', () => {
  test('create: only required params', async () => {
    const responsePromise = client.swir.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      ts: '2021-01-01T01:01:01.123456Z',
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
    const response = await client.swir.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      ts: '2021-01-01T01:01:01.123456Z',
      id: 'SWIR-ID',
      absFluxes: [1.23, 4.56],
      badWave: 'Example Comments',
      fluxRatios: [1.23, 4.56],
      lat: 70.55208,
      locationName: 'AeroTel',
      lon: 81.18191,
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'WildBlue-1',
      ratioWavelengths: [1.23, 4.56],
      satNo: 25544,
      solarPhaseAngle: 1.23,
      wavelengths: [1.23, 4.56],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.swir.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.swir.list({ ts: '2019-12-27T18:11:19.117Z', firstResult: 0, maxResult: 0 });
  });

  test('count: only required params', async () => {
    const responsePromise = client.swir.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.swir.count({
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.swir.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-01-01T01:01:01.123456Z',
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
    const response = await client.swir.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2021-01-01T01:01:01.123456Z',
          id: 'SWIR-ID',
          absFluxes: [1.23, 4.56],
          badWave: 'Example Comments',
          fluxRatios: [1.23, 4.56],
          lat: 70.55208,
          locationName: 'AeroTel',
          lon: 81.18191,
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'WildBlue-1',
          ratioWavelengths: [1.23, 4.56],
          satNo: 25544,
          solarPhaseAngle: 1.23,
          wavelengths: [1.23, 4.56],
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.swir.get('id');
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
      client.swir.get('id', { firstResult: 0, maxResult: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.swir.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.swir.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.swir.tuple({
      columns: 'columns',
      ts: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });
});
