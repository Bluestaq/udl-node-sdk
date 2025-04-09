// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gnssobservationset', () => {
  test('list: only required params', async () => {
    const responsePromise = client.gnssobservationset.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.gnssobservationset.list({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.gnssobservationset.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.gnssobservationset.count({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.gnssobservationset.createBulk([
      { classificationMarking: 'U', dataMode: 'REAL', source: 'Bluestaq', ts: '2022-01-01T00:00:00.123456Z' },
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
    const response = await client.gnssobservationset.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        source: 'Bluestaq',
        ts: '2022-01-01T00:00:00.123456Z',
        id: 'GNSSObSet-ID',
        agcState: 20,
        alt: 200,
        boresight: [1.23, 3.23],
        esId: 'ES-ID',
        eventId: '2f2205c9-7bc2-4e1a-8416-2f80cc71f64b',
        gDop: 0.33,
        gnssObservationList: [
          {
            agcState: 20,
            gnssSatId: 'GEJ',
            ob: [42.1, 1000, 0.9],
            obsCodeSet: ['S1C', 'C1C', 'C1D'],
            trackingStatus: 0,
          },
        ],
        hDop: 0.03,
        lat: 32.021,
        lon: 125.123,
        markerType: 'SPACEBORNE',
        navigationStatus: 'degraded',
        obsCodes: ['ACL'],
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        outage: 200,
        pDop: 0.002,
        quat: [0.03, 0.02, 0.01, 0.012],
        receiver: 'RECEIVER-ID',
        satNo: 2,
        satPosition: [1625.71954, 6782.15396, -1721.34267],
        satVelocity: [2.03, 0.003, 0.12],
        srcIds: ['SV_ID', 'SV_ID'],
        srcTyps: ['SV', 'SV'],
        tags: ['TAG1', 'TAG2'],
        tDop: 0.05,
        trackingStatus: 0,
        transactionId: 'TRANSACTION-ID',
        vDop: 0.03,
      },
    ]);
  });

  test('createBulkV2: only required params', async () => {
    const responsePromise = client.gnssobservationset.createBulkV2([
      { classificationMarking: 'U', dataMode: 'REAL', source: 'Bluestaq', ts: '2022-01-01T00:00:00.123456Z' },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulkV2: required and optional params', async () => {
    const response = await client.gnssobservationset.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        source: 'Bluestaq',
        ts: '2022-01-01T00:00:00.123456Z',
        id: 'GNSSObSet-ID',
        agcState: 20,
        alt: 200,
        boresight: [1.23, 3.23],
        esId: 'ES-ID',
        eventId: '2f2205c9-7bc2-4e1a-8416-2f80cc71f64b',
        gDop: 0.33,
        gnssObservationList: [
          {
            agcState: 20,
            gnssSatId: 'GEJ',
            ob: [42.1, 1000, 0.9],
            obsCodeSet: ['S1C', 'C1C', 'C1D'],
            trackingStatus: 0,
          },
        ],
        hDop: 0.03,
        lat: 32.021,
        lon: 125.123,
        markerType: 'SPACEBORNE',
        navigationStatus: 'degraded',
        obsCodes: ['ACL'],
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        outage: 200,
        pDop: 0.002,
        quat: [0.03, 0.02, 0.01, 0.012],
        receiver: 'RECEIVER-ID',
        satNo: 2,
        satPosition: [1625.71954, 6782.15396, -1721.34267],
        satVelocity: [2.03, 0.003, 0.12],
        srcIds: ['SV_ID', 'SV_ID'],
        srcTyps: ['SV', 'SV'],
        tags: ['TAG1', 'TAG2'],
        tDop: 0.05,
        trackingStatus: 0,
        transactionId: 'TRANSACTION-ID',
        vDop: 0.03,
      },
    ]);
  });

  test('queryhelp', async () => {
    const responsePromise = client.gnssobservationset.queryhelp();
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
    await expect(client.gnssobservationset.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.gnssobservationset.tuple({
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
    const response = await client.gnssobservationset.tuple({
      columns: 'columns',
      ts: '2019-12-27T18:11:19.117Z',
    });
  });
});
