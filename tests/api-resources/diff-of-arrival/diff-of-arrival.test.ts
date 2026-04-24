// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
});

describe('resource diffOfArrival', () => {
  test('retrieve', async () => {
    const responsePromise = client.diffOfArrival.retrieve('id');
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
    await expect(client.diffOfArrival.retrieve('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.diffOfArrival.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.diffOfArrival.tuple({ columns: 'columns', obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.diffOfArrival.tuple({
    columns: 'columns',
    obTime: '2019-12-27T18:11:19.117Z',
    firstResult: 0,
    maxResults: 0,
  });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.diffOfArrival.unvalidatedPublish({ body: [{
    classificationMarking: 'U',
    dataMode: 'TEST',
    obTime: '2018-01-01T16:00:00.123456Z',
    source: 'Bluestaq',
  }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.diffOfArrival.unvalidatedPublish({ body: [{
    classificationMarking: 'U',
    dataMode: 'TEST',
    obTime: '2018-01-01T16:00:00.123456Z',
    source: 'Bluestaq',
    id: 'DIFFOFARRIVAL-ID',
    azimuth1: 40.9,
    azimuth2: 43.4,
    bandwidth: 500000.1,
    collectionMode: 'SURVEY',
    deltaRange: 1.7,
    deltaRangeRate: 0.018,
    deltaRangeRateUnc: 0.001,
    deltaRangeUnc: 0.2,
    descriptor: 'Example descriptor',
    elevation1: 65.4,
    elevation2: 65.9,
    fdoa: 970.8,
    fdoaUnc: 20.1,
    frequency: 2240000000,
    idSensor1: 'SENSOR1-ID',
    idSensor2: 'SENSOR2-ID',
    origin: 'THIRD_PARTY_DATASOURCE',
    origObjectId: 'ORIGOBJECT-ID',
    origSensorId1: 'ORIGSENSOR1-ID',
    origSensorId2: 'ORIGSENSOR2-ID',
    polarityType: 'V',
    rawFileURI: '/DOA/2026/01/01/filename.txt',
    satNo: 25544,
    sen2alt: 770.1,
    sen2lat: 32.2,
    sen2lon: -110.9,
    senalt: 783.1,
    senlat: 45.1,
    senlon: 120.1,
    sensor1Delay: 0.000004,
    sensor2Delay: 0.000004,
    snr: 18.1,
    tags: ['TAG1', 'TAG2'],
    taskId: 'TASK-ID',
    tdoa: 0.0000136,
    tdoaAmb: 1,
    tdoaUnc: 2e-7,
    transactionId: 'TRANSACTION-ID',
    uct: false,
  }] });
  });
});
