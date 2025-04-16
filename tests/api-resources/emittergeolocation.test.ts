// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emittergeolocation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.emittergeolocation.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      signalOfInterestType: 'RF',
      source: 'Bluestaq',
      startTime: '2024-05-31T21:12:12.123456Z',
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
    const response = await client.emittergeolocation.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      signalOfInterestType: 'RF',
      source: 'Bluestaq',
      startTime: '2024-05-31T21:12:12.123456Z',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      agjson:
        '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
      algVersion: 'v1.0-3-gps_nb_3ball',
      andims: 3,
      area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      asrid: 3,
      atext:
        'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      atype: 'MultiPolygon',
      centerFreq: 1575.42,
      cluster: 'CONSTELLATION1-F',
      confArea: 81577480.056,
      constellation: 'HawkEye360',
      createdTs: '2024-05-31T23:06:18.123456Z',
      detectAlt: 123.456,
      detectLat: 41.172,
      detectLon: 37.019,
      endTime: '2024-05-31T21:16:15.123456Z',
      errEllp: [1.23, 2.34, 3.45],
      externalId: '780180925',
      idRFEmitter: '026dd511-8ba5-47d3-9909-836149f87686',
      idSensor: 'OCULUSA',
      maxFreq: 1575.42,
      minFreq: 1575.42,
      numBursts: 17,
      orderId: '155240',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      origRFEmitterId: '12345678',
      origSensorId: 'ORIGSENSOR-ID',
      passGroupId: '80fd25a8-8b41-448d-888a-91c9dfcd940b',
      receivedTs: '2024-05-31T21:16:58.123456Z',
      satNo: 101,
      signalOfInterest: 'GPS',
      tags: ['TAG1', 'TAG2'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.emittergeolocation.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emittergeolocation.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.emittergeolocation.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emittergeolocation.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count: only required params', async () => {
    const responsePromise = client.emittergeolocation.count({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.emittergeolocation.count({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.emittergeolocation.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        signalOfInterestType: 'RF',
        source: 'Bluestaq',
        startTime: '2024-05-31T21:12:12.123456Z',
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

  test('createBulk: required and optional params', async () => {
    const response = await client.emittergeolocation.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        signalOfInterestType: 'RF',
        source: 'Bluestaq',
        startTime: '2024-05-31T21:12:12.123456Z',
        id: '026dd511-8ba5-47d3-9909-836149f87686',
        agjson:
          '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
        algVersion: 'v1.0-3-gps_nb_3ball',
        andims: 3,
        area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        asrid: 3,
        atext:
          'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        atype: 'MultiPolygon',
        centerFreq: 1575.42,
        cluster: 'CONSTELLATION1-F',
        confArea: 81577480.056,
        constellation: 'HawkEye360',
        createdTs: '2024-05-31T23:06:18.123456Z',
        detectAlt: 123.456,
        detectLat: 41.172,
        detectLon: 37.019,
        endTime: '2024-05-31T21:16:15.123456Z',
        errEllp: [1.23, 2.34, 3.45],
        externalId: '780180925',
        idRFEmitter: '026dd511-8ba5-47d3-9909-836149f87686',
        idSensor: 'OCULUSA',
        maxFreq: 1575.42,
        minFreq: 1575.42,
        numBursts: 17,
        orderId: '155240',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        origRFEmitterId: '12345678',
        origSensorId: 'ORIGSENSOR-ID',
        passGroupId: '80fd25a8-8b41-448d-888a-91c9dfcd940b',
        receivedTs: '2024-05-31T21:16:58.123456Z',
        satNo: 101,
        signalOfInterest: 'GPS',
        tags: ['TAG1', 'TAG2'],
      },
    ]);
  });

  test('query: only required params', async () => {
    const responsePromise = client.emittergeolocation.query({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.emittergeolocation.query({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('queryHelp', async () => {
    const responsePromise = client.emittergeolocation.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryHelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.emittergeolocation.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.emittergeolocation.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.emittergeolocation.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.emittergeolocation.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        signalOfInterestType: 'RF',
        source: 'Bluestaq',
        startTime: '2024-05-31T21:12:12.123456Z',
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

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.emittergeolocation.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        signalOfInterestType: 'RF',
        source: 'Bluestaq',
        startTime: '2024-05-31T21:12:12.123456Z',
        id: '026dd511-8ba5-47d3-9909-836149f87686',
        agjson:
          '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
        algVersion: 'v1.0-3-gps_nb_3ball',
        andims: 3,
        area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        asrid: 3,
        atext:
          'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        atype: 'MultiPolygon',
        centerFreq: 1575.42,
        cluster: 'CONSTELLATION1-F',
        confArea: 81577480.056,
        constellation: 'HawkEye360',
        createdTs: '2024-05-31T23:06:18.123456Z',
        detectAlt: 123.456,
        detectLat: 41.172,
        detectLon: 37.019,
        endTime: '2024-05-31T21:16:15.123456Z',
        errEllp: [1.23, 2.34, 3.45],
        externalId: '780180925',
        idRFEmitter: '026dd511-8ba5-47d3-9909-836149f87686',
        idSensor: 'OCULUSA',
        maxFreq: 1575.42,
        minFreq: 1575.42,
        numBursts: 17,
        orderId: '155240',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        origRFEmitterId: '12345678',
        origSensorId: 'ORIGSENSOR-ID',
        passGroupId: '80fd25a8-8b41-448d-888a-91c9dfcd940b',
        receivedTs: '2024-05-31T21:16:58.123456Z',
        satNo: 101,
        signalOfInterest: 'GPS',
        tags: ['TAG1', 'TAG2'],
      },
    ]);
  });
});
