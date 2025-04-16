// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onboardnavigation', () => {
  test('list: only required params', async () => {
    const responsePromise = client.onboardnavigation.list({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.onboardnavigation.list({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.onboardnavigation.count({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.onboardnavigation.count({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.onboardnavigation.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        source: 'Bluestaq',
        startTime: '2021-07-20T01:02:03.123456Z',
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
    const response = await client.onboardnavigation.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        source: 'Bluestaq',
        startTime: '2021-07-20T01:02:03.123456Z',
        id: 'ONBOARD-NAVIGATION-ID',
        deltaPos: [[1.1, 2.2, 3.3]],
        endTime: '2021-07-20T01:02:03.123456Z',
        esId: 'EPHEMERISSET-ID',
        idStateVector: 'STATE-VECTOR-ID',
        mag: [[1.1, 2.2, 3.3]],
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        referenceFrame: 'J2000',
        satNo: 101,
        starCatLoadTime: '2021-07-21T01:02:03.123Z',
        starCatName: 'STAR-CAT-NAME',
        starTracker: [[1.1, 2.2, 3.3]],
        sunSensor: [[1.1, 2.2, 3.3]],
        ts: ['2021-07-21T01:02:03.120003Z'],
      },
    ]);
  });

  test('queryhelp', async () => {
    const responsePromise = client.onboardnavigation.queryhelp();
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
    await expect(client.onboardnavigation.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.onboardnavigation.tuple({
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
    const response = await client.onboardnavigation.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.onboardnavigation.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        source: 'Bluestaq',
        startTime: '2021-07-20T01:02:03.123456Z',
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
    const response = await client.onboardnavigation.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        source: 'Bluestaq',
        startTime: '2021-07-20T01:02:03.123456Z',
        id: 'ONBOARD-NAVIGATION-ID',
        deltaPos: [[1.1, 2.2, 3.3]],
        endTime: '2021-07-20T01:02:03.123456Z',
        esId: 'EPHEMERISSET-ID',
        idStateVector: 'STATE-VECTOR-ID',
        mag: [[1.1, 2.2, 3.3]],
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        referenceFrame: 'J2000',
        satNo: 101,
        starCatLoadTime: '2021-07-21T01:02:03.123Z',
        starCatName: 'STAR-CAT-NAME',
        starTracker: [[1.1, 2.2, 3.3]],
        sunSensor: [[1.1, 2.2, 3.3]],
        ts: ['2021-07-21T01:02:03.120003Z'],
      },
    ]);
  });
});
