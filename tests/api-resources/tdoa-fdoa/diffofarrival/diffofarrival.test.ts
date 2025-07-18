// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource diffofarrival', () => {
  test('create: only required params', async () => {
    const responsePromise = client.tdoaFdoa.diffofarrival.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      obTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.tdoaFdoa.diffofarrival.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      obTime: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      id: 'DIFFOFARRIVAL-ID',
      bandwidth: 1.1,
      collectionMode: 'SURVEY',
      deltaRange: 1.1,
      deltaRangeRate: 1.1,
      deltaRangeRateUnc: 1.1,
      deltaRangeUnc: 1.1,
      descriptor: 'Example descriptor',
      fdoa: 1.1,
      fdoaUnc: 1.1,
      frequency: 1.1,
      idSensor1: 'SENSOR1-ID',
      idSensor2: 'SENSOR2-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      origSensorId1: 'ORIGSENSOR1-ID',
      origSensorId2: 'ORIGSENSOR2-ID',
      rawFileURI: 'rawFileURI',
      satNo: 25544,
      sen2alt: 1.1,
      sen2lat: 1.1,
      sen2lon: 1.1,
      senalt: 1.1,
      senlat: 45.1,
      senlon: 120.1,
      sensor1Delay: 1.1,
      sensor2Delay: 1.1,
      snr: 1.1,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      taskId: 'TASK-ID',
      tdoa: 1.1,
      tdoaUnc: 1.1,
      transactionId: 'TRANSACTION-ID',
      uct: false,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.tdoaFdoa.diffofarrival.list({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.tdoaFdoa.diffofarrival.list({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.tdoaFdoa.diffofarrival.count({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.tdoaFdoa.diffofarrival.count({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.tdoaFdoa.diffofarrival.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.tdoaFdoa.diffofarrival.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          id: 'DIFFOFARRIVAL-ID',
          bandwidth: 1.1,
          collectionMode: 'SURVEY',
          deltaRange: 1.1,
          deltaRangeRate: 1.1,
          deltaRangeRateUnc: 1.1,
          deltaRangeUnc: 1.1,
          descriptor: 'Example descriptor',
          fdoa: 1.1,
          fdoaUnc: 1.1,
          frequency: 1.1,
          idSensor1: 'SENSOR1-ID',
          idSensor2: 'SENSOR2-ID',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          origSensorId1: 'ORIGSENSOR1-ID',
          origSensorId2: 'ORIGSENSOR2-ID',
          rawFileURI: 'rawFileURI',
          satNo: 25544,
          sen2alt: 1.1,
          sen2lat: 1.1,
          sen2lon: 1.1,
          senalt: 1.1,
          senlat: 45.1,
          senlon: 120.1,
          sensor1Delay: 1.1,
          sensor2Delay: 1.1,
          snr: 1.1,
          tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
          taskId: 'TASK-ID',
          tdoa: 1.1,
          tdoaUnc: 1.1,
          transactionId: 'TRANSACTION-ID',
          uct: false,
        },
      ],
    });
  });
});
