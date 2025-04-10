// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource launchevent', () => {
  test('create: only required params', async () => {
    const responsePromise = client.launchevent.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      msgCreateDate: '2020-01-01T00:00:00.123Z',
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
    const response = await client.launchevent.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      msgCreateDate: '2020-01-01T00:00:00.123Z',
      source: 'Bluestaq',
      id: 'LAUNCHEVENT-ID',
      beNumber: 'ENC-123',
      declassificationDate: '2021-01-01T01:02:02.123Z',
      declassificationString: 'Example Declassification',
      derivedFrom: 'Example source',
      launchDate: '2020-01-01T00:00:00.123Z',
      launchFacilityName: 'Example launch facility name',
      launchFailureCode: 'Example failure code',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      oSuffix: 'oSuffix',
      satNo: 12,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.launchevent.list({ msgCreateDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.launchevent.list({ msgCreateDate: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.launchevent.count({ msgCreateDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.launchevent.count({ msgCreateDate: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.launchevent.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        msgCreateDate: '2020-01-01T00:00:00.123Z',
        source: 'Bluestaq',
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
    const response = await client.launchevent.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        msgCreateDate: '2020-01-01T00:00:00.123Z',
        source: 'Bluestaq',
        id: 'LAUNCHEVENT-ID',
        beNumber: 'ENC-123',
        declassificationDate: '2021-01-01T01:02:02.123Z',
        declassificationString: 'Example Declassification',
        derivedFrom: 'Example source',
        launchDate: '2020-01-01T00:00:00.123Z',
        launchFacilityName: 'Example launch facility name',
        launchFailureCode: 'Example failure code',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        oSuffix: 'oSuffix',
        satNo: 12,
      },
    ]);
  });

  test('createBulkV2: only required params', async () => {
    const responsePromise = client.launchevent.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        msgCreateDate: '2020-01-01T00:00:00.123Z',
        source: 'Bluestaq',
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

  test('createBulkV2: required and optional params', async () => {
    const response = await client.launchevent.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        msgCreateDate: '2020-01-01T00:00:00.123Z',
        source: 'Bluestaq',
        id: 'LAUNCHEVENT-ID',
        beNumber: 'ENC-123',
        declassificationDate: '2021-01-01T01:02:02.123Z',
        declassificationString: 'Example Declassification',
        derivedFrom: 'Example source',
        launchDate: '2020-01-01T00:00:00.123Z',
        launchFacilityName: 'Example launch facility name',
        launchFailureCode: 'Example failure code',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        oSuffix: 'oSuffix',
        satNo: 12,
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.launchevent.get('id');
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
    await expect(client.launchevent.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.launchevent.queryhelp();
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
    await expect(client.launchevent.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.launchevent.tuple({
      columns: 'columns',
      msgCreateDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.launchevent.tuple({
      columns: 'columns',
      msgCreateDate: '2019-12-27T18:11:19.117Z',
    });
  });
});
