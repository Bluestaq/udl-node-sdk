// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analyticImagery', () => {
  test('create: only required params', async () => {
    const responsePromise = client.analyticImagery.create({
      classificationMarking: 'classificationMarking',
      content: 'content',
      dataMode: 'dataMode',
      description: 'description',
      filename: 'filename',
      filesize: 0,
      imageType: 'imageType',
      msgTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
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
      classificationMarking: 'classificationMarking',
      content: 'content',
      dataMode: 'dataMode',
      description: 'description',
      filename: 'filename',
      filesize: 0,
      imageType: 'imageType',
      msgTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      id: 'id',
      agjson: 'agjson',
      andims: 0,
      annLims: [[0]],
      annText: ['string'],
      area: 'area',
      asrid: 0,
      atext: 'atext',
      atype: 'atype',
      checksumValue: 'checksumValue',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      dataStart: '2019-12-27T18:11:19.117Z',
      dataStop: '2019-12-27T18:11:19.117Z',
      imageSetId: 'imageSetId',
      imageSetLength: 0,
      imgHeight: 0,
      imgWidth: 0,
      keywords: ['string'],
      origin: 'origin',
      origNetwork: 'origNetwork',
      satId: ['string'],
      satIdConf: [0],
      sequenceId: 0,
      sourceDL: 'sourceDL',
      srcIds: ['string'],
      srcTyps: ['string'],
      tags: ['string'],
      transactionId: 'transactionId',
      xUnits: 'xUnits',
      yUnits: 'yUnits',
      zUnits: 'zUnits',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.analyticImagery.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.analyticImagery.retrieve({ path_id: 'id', body_id: 'id' });
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
