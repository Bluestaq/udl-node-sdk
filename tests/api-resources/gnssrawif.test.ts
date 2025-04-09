// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gnssrawif', () => {
  test('list: only required params', async () => {
    const responsePromise = client.gnssrawif.list({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.gnssrawif.list({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.gnssrawif.count({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.gnssrawif.count({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('fileGet: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.gnssrawif.fileGet('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.gnssrawif.get('id');
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
    await expect(client.gnssrawif.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.gnssrawif.queryhelp();
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
    await expect(client.gnssrawif.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.gnssrawif.tuple({
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
    const response = await client.gnssrawif.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('uploadZip: only required params', async () => {
    const responsePromise = client.gnssrawif.uploadZip({
      centerFreq: [1227.6, 1575.4],
      classificationMarking: 'U',
      dataMode: 'REAL',
      endTime: '2022-04-09T18:12:28.919768Z',
      fileName: 'somefile.hdf5',
      source: 'Bluestaq',
      startTime: '2022-04-09T18:11:28.919768Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadZip: required and optional params', async () => {
    const response = await client.gnssrawif.uploadZip({
      centerFreq: [1227.6, 1575.4],
      classificationMarking: 'U',
      dataMode: 'REAL',
      endTime: '2022-04-09T18:12:28.919768Z',
      fileName: 'somefile.hdf5',
      source: 'Bluestaq',
      startTime: '2022-04-09T18:11:28.919768Z',
      id: 'GNSSRawIF-ID',
      bitDepth: 8,
      boresight: [0, 1, 0],
      dataRate: 0.205,
      diffCodeBias: [0.0271, 0.0016],
      endAlt: 525.626,
      endLat: 38.922,
      endLon: -104.67,
      esId: '60f7a241-b7be-48d8-acf3-786670af53f9',
      eventId: '2f2205c9-7bc2-4e1a-8416-2f80cc71f64b',
      ifFreq: [4.09, 5.87],
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'L2045',
      postFourier: ['NONE', 'NONE'],
      quat: [0, -0.2734104, 0.1562345, 0.9491246],
      receiver: 'GPS1',
      sampleRate: [8000, 9000],
      sampleType: 'COMPLEX',
      satNo: 32375,
      sequenceID: 1,
      setId: '2b0b1b1a-a3c0-4267-894a-0c40cb84a5af',
      setLength: 7,
      srcIds: ['GNSSSET_ID'],
      srcTyps: ['GNSSSET'],
      startAlt: 525.664,
      startIndex: 2,
      startLat: 38.834,
      startLon: -104.821,
      tags: ['TAG1', 'TAG2'],
    });
  });
});
