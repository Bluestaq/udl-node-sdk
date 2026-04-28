// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource linkStatus', () => {
  test('create: only required params', async () => {
    const responsePromise = client.linkStatus.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      endPoint1Lat: 45.23,
      endPoint1Lon: 80.23,
      endPoint1Name: 'Example endpoint',
      endPoint2Lat: 45.23,
      endPoint2Lon: 80.23,
      endPoint2Name: 'Example description',
      linkName: 'Example description',
      linkStartTime: '2021-01-01T01:01:01.123456Z',
      linkStopTime: '2021-01-01T01:01:01.123456Z',
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
    const response = await client.linkStatus.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      endPoint1Lat: 45.23,
      endPoint1Lon: 80.23,
      endPoint1Name: 'Example endpoint',
      endPoint2Lat: 45.23,
      endPoint2Lon: 80.23,
      endPoint2Name: 'Example description',
      linkName: 'Example description',
      linkStartTime: '2021-01-01T01:01:01.123456Z',
      linkStopTime: '2021-01-01T01:01:01.123456Z',
      source: 'Bluestaq',
      id: 'LINKSTATUS-ID',
      band: 'MIL-KA',
      constellation: 'Fornax',
      dataRate1To2: 10.23,
      dataRate2To1: 10.23,
      idBeam1: 'REF-BEAM1-ID',
      idBeam2: 'REF-BEAM2-ID',
      linkState: 'DEGRADED-WEATHER',
      linkType: 'Example link',
      opsCap: 'Example status',
      origin: 'THIRD_PARTY_DATASOURCE',
      satNo1: 1,
      satNo2: 2,
      snr: 10.1,
      sysCap: 'Example status',
    });
  });

  test('list', async () => {
    const responsePromise = client.linkStatus.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.linkStatus.list(
        {
          createdAt: '2019-12-27',
          firstResult: 0,
          linkStartTime: '2019-12-27T18:11:19.117Z',
          linkStopTime: '2019-12-27T18:11:19.117Z',
          maxResults: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.linkStatus.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.linkStatus.count(
        {
          createdAt: '2019-12-27',
          firstResult: 0,
          linkStartTime: '2019-12-27T18:11:19.117Z',
          linkStopTime: '2019-12-27T18:11:19.117Z',
          maxResults: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.linkStatus.get('id');
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
      client.linkStatus.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.linkStatus.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.linkStatus.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.linkStatus.tuple({
      columns: 'columns',
      createdAt: '2019-12-27',
      firstResult: 0,
      linkStartTime: '2019-12-27T18:11:19.117Z',
      linkStopTime: '2019-12-27T18:11:19.117Z',
      maxResults: 0,
    });
  });
});
