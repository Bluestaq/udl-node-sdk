// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rfgeolocation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rfgeolocation.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      orderId: '155240',
      receivedTs: '2024-05-31T21:16:58.123456Z',
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
    const response = await client.rfgeolocation.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      orderId: '155240',
      receivedTs: '2024-05-31T21:16:58.123456Z',
      source: 'Bluestaq',
      startTime: '2024-05-31T21:12:12.123456Z',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      agjson:
        '{"type":"Polygon","coordinates":[[[67.3291113966927,26.156175339112],[67.2580009640721,26.091022064271],[67.1795862381682,26.6637992964562],[67.2501237475598,26.730115808233],[67.3291113966927,26.156175339112]]]}',
      algVersion: 'v1.0-3-gps_nb_3ball',
      andims: 3,
      area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      asrid: 3,
      atext:
        'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      atype: 'MultiPolygon',
      centerFreq: 1575.42,
      confArea: 81577480.056,
      confOrientation: 89.852,
      confSemiMajor: 9435.896,
      confSemiMinor: 2751.929,
      constellation: 'HawkEye360',
      createdTs: '2024-05-31T23:06:18.123456Z',
      detectAlt: 123.456,
      detectLat: 41.172,
      detectLon: 37.019,
      endTime: '2024-05-31T21:16:15.123456Z',
      externalId: '780180925',
      idRFEmitter: 'RFEMITTER-ID',
      maxFreq: 1575.42,
      minFreq: 1575.42,
      numBursts: 17,
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      origRFEmitterId: 'ORIGRFEMITTER-ID',
      passGroupId: '80fd25a8-8b41-448d-888a-91c9dfcd940b',
      satNo: 101,
      signalOfInterest: 'GPS',
      tags: ['TAG1', 'TAG2'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.rfgeolocation.list({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.rfgeolocation.list({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('delete', async () => {
    const responsePromise = client.rfgeolocation.delete('id');
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
    await expect(client.rfgeolocation.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count: only required params', async () => {
    const responsePromise = client.rfgeolocation.count({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.rfgeolocation.count({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.rfgeolocation.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        orderId: '155240',
        receivedTs: '2024-05-31T21:16:58.123456Z',
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
    const response = await client.rfgeolocation.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        orderId: '155240',
        receivedTs: '2024-05-31T21:16:58.123456Z',
        source: 'Bluestaq',
        startTime: '2024-05-31T21:12:12.123456Z',
        id: '026dd511-8ba5-47d3-9909-836149f87686',
        agjson:
          '{"type":"Polygon","coordinates":[[[67.3291113966927,26.156175339112],[67.2580009640721,26.091022064271],[67.1795862381682,26.6637992964562],[67.2501237475598,26.730115808233],[67.3291113966927,26.156175339112]]]}',
        algVersion: 'v1.0-3-gps_nb_3ball',
        andims: 3,
        area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        asrid: 3,
        atext:
          'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        atype: 'MultiPolygon',
        centerFreq: 1575.42,
        confArea: 81577480.056,
        confOrientation: 89.852,
        confSemiMajor: 9435.896,
        confSemiMinor: 2751.929,
        constellation: 'HawkEye360',
        createdTs: '2024-05-31T23:06:18.123456Z',
        detectAlt: 123.456,
        detectLat: 41.172,
        detectLon: 37.019,
        endTime: '2024-05-31T21:16:15.123456Z',
        externalId: '780180925',
        idRFEmitter: 'RFEMITTER-ID',
        maxFreq: 1575.42,
        minFreq: 1575.42,
        numBursts: 17,
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        origRFEmitterId: 'ORIGRFEMITTER-ID',
        passGroupId: '80fd25a8-8b41-448d-888a-91c9dfcd940b',
        satNo: 101,
        signalOfInterest: 'GPS',
        tags: ['TAG1', 'TAG2'],
      },
    ]);
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.rfgeolocation.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        orderId: '155240',
        receivedTs: '2024-05-31T21:16:58.123456Z',
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

  test('fileCreate: required and optional params', async () => {
    const response = await client.rfgeolocation.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        orderId: '155240',
        receivedTs: '2024-05-31T21:16:58.123456Z',
        source: 'Bluestaq',
        startTime: '2024-05-31T21:12:12.123456Z',
        id: '026dd511-8ba5-47d3-9909-836149f87686',
        agjson:
          '{"type":"Polygon","coordinates":[[[67.3291113966927,26.156175339112],[67.2580009640721,26.091022064271],[67.1795862381682,26.6637992964562],[67.2501237475598,26.730115808233],[67.3291113966927,26.156175339112]]]}',
        algVersion: 'v1.0-3-gps_nb_3ball',
        andims: 3,
        area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        asrid: 3,
        atext:
          'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        atype: 'MultiPolygon',
        centerFreq: 1575.42,
        confArea: 81577480.056,
        confOrientation: 89.852,
        confSemiMajor: 9435.896,
        confSemiMinor: 2751.929,
        constellation: 'HawkEye360',
        createdTs: '2024-05-31T23:06:18.123456Z',
        detectAlt: 123.456,
        detectLat: 41.172,
        detectLon: 37.019,
        endTime: '2024-05-31T21:16:15.123456Z',
        externalId: '780180925',
        idRFEmitter: 'RFEMITTER-ID',
        maxFreq: 1575.42,
        minFreq: 1575.42,
        numBursts: 17,
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        origRFEmitterId: 'ORIGRFEMITTER-ID',
        passGroupId: '80fd25a8-8b41-448d-888a-91c9dfcd940b',
        satNo: 101,
        signalOfInterest: 'GPS',
        tags: ['TAG1', 'TAG2'],
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.rfgeolocation.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.rfgeolocation.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.rfgeolocation.queryhelp();
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
    await expect(client.rfgeolocation.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.rfgeolocation.tuple({
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
    const response = await client.rfgeolocation.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
