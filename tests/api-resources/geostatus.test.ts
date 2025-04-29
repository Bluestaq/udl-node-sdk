// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource geostatus', () => {
  test('create: only required params', async () => {
    const responsePromise = client.geostatus.create({
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
    const response = await client.geostatus.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      id: 'GEOSTATUS-ID',
      confidenceLevel: 'Low',
      longitudeMax: 1.01,
      longitudeMin: 180.1,
      longitudeRate: 1.1,
      lostFlag: false,
      objectStatus: 'Active',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      planeChangeStatus: 'Current',
      rawFileURI: 'Example URI',
      relativeEnergy: 1.1,
      satNo: 21,
      sc: 1.1,
      semiAnnualCorrFlag: false,
      ss: 1.1,
      troughType: 'West',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.geostatus.list({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.geostatus.list({ createdAt: '2019-12-27', firstResult: 0, maxResults: 0 });
  });

  test('count: only required params', async () => {
    const responsePromise = client.geostatus.count({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.geostatus.count({ createdAt: '2019-12-27', firstResult: 0, maxResults: 0 });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.geostatus.createBulk({
      body: [{ classificationMarking: 'U', dataMode: 'TEST', source: 'Bluestaq' }],
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
    const response = await client.geostatus.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          id: 'GEOSTATUS-ID',
          confidenceLevel: 'Low',
          longitudeMax: 1.01,
          longitudeMin: 180.1,
          longitudeRate: 1.1,
          lostFlag: false,
          objectStatus: 'Active',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          planeChangeStatus: 'Current',
          rawFileURI: 'Example URI',
          relativeEnergy: 1.1,
          satNo: 21,
          sc: 1.1,
          semiAnnualCorrFlag: false,
          ss: 1.1,
          troughType: 'West',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.geostatus.get('id');
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
      client.geostatus.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.geostatus.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.geostatus.tuple({ columns: 'columns', createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.geostatus.tuple({
      columns: 'columns',
      createdAt: '2019-12-27',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
