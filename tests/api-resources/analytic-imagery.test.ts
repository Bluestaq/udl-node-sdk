// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analyticImagery', () => {
  test('create: only required params', async () => {
    const responsePromise = client.analyticImagery.create({
      classificationMarking: 'U',
      content: 'CONTOUR',
      dataMode: 'REAL',
      description: 'Image description',
      filename: 'IMAGE-NAME',
      filesize: 7654321,
      imageType: 'JPG',
      msgTime: '2018-01-01T16:00:00.123Z',
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
    const response = await client.analyticImagery.create({
      classificationMarking: 'U',
      content: 'CONTOUR',
      dataMode: 'REAL',
      description: 'Image description',
      filename: 'IMAGE-NAME',
      filesize: 7654321,
      imageType: 'JPG',
      msgTime: '2018-01-01T16:00:00.123Z',
      source: 'Bluestaq',
      id: 'ANALYTIC-IMAGERY-ID',
      agjson:
        '{"type":"Polygon","coordinates":[[[67.3291113966927,26.156175339112],[67.2580009640721,26.091022064271],[67.1795862381682,26.6637992964562],[67.2501237475598,26.730115808233],[67.3291113966927,26.156175339112]]]}',
      andims: 2,
      annLims: [
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
      ],
      annText: ['rec1', 'rec2'],
      area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      asrid: 4326,
      atext:
        'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      atype: 'POLYGON',
      dataStart: '2018-01-01T16:00:00.123Z',
      dataStop: '2018-01-01T16:00:00.123Z',
      imageSetId: 'IMAGE-IDS',
      imageSetLength: 123,
      imgHeight: 123,
      imgWidth: 123,
      keywords: ['Key1', 'Key2'],
      origin: 'ORIGIN',
      satId: ['12004', '12005'],
      satIdConf: [0.98, 0.22],
      sequenceId: 123,
      srcIds: ['DOA_ID', 'DWELL_ID'],
      srcTyps: ['MTI', 'POI'],
      tags: ['TAG1', 'TAG2'],
      transactionId: 'a7bdef1f-5a4f-4716-bee4-7a1e0ec7d35a',
      xUnits: 'pixels',
      yUnits: 'pixels',
      zUnits: 'pixels',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.analyticImagery.retrieve('id');
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
    await expect(client.analyticImagery.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.analyticImagery.list({ msgTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.analyticImagery.list({ msgTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.analyticImagery.count({ msgTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.analyticImagery.count({ msgTime: '2019-12-27T18:11:19.117Z' });
  });

  test('fileGet: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.analyticImagery.fileGet('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('history: only required params', async () => {
    const responsePromise = client.analyticImagery.history({ msgTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('history: required and optional params', async () => {
    const response = await client.analyticImagery.history({
      msgTime: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
    });
  });

  test('historyAodr: only required params', async () => {
    const responsePromise = client.analyticImagery.historyAodr({ msgTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('historyAodr: required and optional params', async () => {
    const response = await client.analyticImagery.historyAodr({
      msgTime: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
      notification: 'notification',
      outputDelimiter: 'outputDelimiter',
      outputFormat: 'outputFormat',
    });
  });

  test('historyCount: only required params', async () => {
    const responsePromise = client.analyticImagery.historyCount({ msgTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('historyCount: required and optional params', async () => {
    const response = await client.analyticImagery.historyCount({ msgTime: '2019-12-27T18:11:19.117Z' });
  });

  test('queryhelp', async () => {
    const responsePromise = client.analyticImagery.queryhelp();
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
    await expect(client.analyticImagery.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.analyticImagery.tuple({
      columns: 'columns',
      msgTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.analyticImagery.tuple({
      columns: 'columns',
      msgTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
