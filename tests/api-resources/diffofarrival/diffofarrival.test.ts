// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource diffofarrival', () => {
  test('create: only required params', async () => {
    const responsePromise = client.diffofarrival.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
      },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.diffofarrival.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        id: 'id',
        bandwidth: 0,
        collectionMode: 'collectionMode',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        deltaRange: 0,
        deltaRangeRate: 0,
        deltaRangeRateUnc: 0,
        deltaRangeUnc: 0,
        descriptor: 'descriptor',
        fdoa: 0,
        fdoaUnc: 0,
        frequency: 0,
        idOnOrbit: 'idOnOrbit',
        idSensor1: 'idSensor1',
        idSensor2: 'idSensor2',
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        origSensorId1: 'origSensorId1',
        origSensorId2: 'origSensorId2',
        rawFileURI: 'rawFileURI',
        satNo: 0,
        sen2alt: 0,
        sen2lat: 0,
        sen2lon: 0,
        senalt: 0,
        senlat: 0,
        senlon: 0,
        sensor1Delay: 0,
        sensor2Delay: 0,
        snr: 0,
        sourceDL: 'sourceDL',
        tags: ['string'],
        taskId: 'taskId',
        tdoa: 0,
        tdoaUnc: 0,
        transactionId: 'transactionId',
        uct: true,
      },
    ]);
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.diffofarrival.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.diffofarrival.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('queryhelp', async () => {
    const responsePromise = client.diffofarrival.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.diffofarrival.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.diffofarrival.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.diffofarrival.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
