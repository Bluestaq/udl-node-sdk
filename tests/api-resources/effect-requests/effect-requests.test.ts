// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource effectRequests', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.effectRequests.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.effectRequests.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.effectRequests.count({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.effectRequests.count({ createdAt: '2019-12-27' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.effectRequests.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        effectList: ['string'],
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

  test('createBulk: required and optional params', async () => {
    const response = await client.effectRequests.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        effectList: ['string'],
        source: 'source',
        id: 'id',
        context: 'context',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        deadlineType: 'deadlineType',
        endTime: '2019-12-27T18:11:19.117Z',
        externalRequestId: 'externalRequestId',
        metricTypes: ['string'],
        metricWeights: [0],
        modelClass: 'modelClass',
        origin: 'origin',
        origNetwork: 'origNetwork',
        priority: 'priority',
        startTime: '2019-12-27T18:11:19.117Z',
        state: 'state',
        targetSrcId: 'targetSrcId',
        targetSrcType: 'targetSrcType',
      },
    ]);
  });

  test('historyCount: only required params', async () => {
    const responsePromise = client.effectRequests.historyCount({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('historyCount: required and optional params', async () => {
    const response = await client.effectRequests.historyCount({ createdAt: '2019-12-27' });
  });

  test('queryHelp', async () => {
    const responsePromise = client.effectRequests.queryHelp();
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
    await expect(client.effectRequests.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.effectRequests.tuple({ columns: 'columns', createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.effectRequests.tuple({ columns: 'columns', createdAt: '2019-12-27' });
  });
});
