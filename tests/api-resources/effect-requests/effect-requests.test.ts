// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource effectRequests', () => {
  test('create: only required params', async () => {
    const responsePromise = client.effectRequests.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      effectList: ['COVER', 'DECEIVE'],
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
    const response = await client.effectRequests.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      effectList: ['COVER', 'DECEIVE'],
      source: 'Bluestaq',
      id: 'EFFECTREQUEST-ID',
      context: 'Example Notes',
      deadlineType: 'NoLaterThan',
      endTime: '2018-01-01T16:00:00.123456Z',
      externalRequestId: 'EXTERNALREQUEST-ID',
      metricTypes: ['COST', 'RISK'],
      metricWeights: [0.5, 0.6],
      modelClass: 'Preference model',
      origin: 'THIRD_PARTY_DATASOURCE',
      priority: 'LOW',
      startTime: '2018-01-01T16:00:00.123456Z',
      state: 'CREATED',
      targetSrcId: 'TARGETSRC-ID',
      targetSrcType: 'POI',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.effectRequests.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.effectRequests.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.effectRequests.list({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.effectRequests.list({
      createdAt: '2019-12-27',
      firstResult: 0,
      maxResults: 0,
    });
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
    const response = await client.effectRequests.count({
      createdAt: '2019-12-27',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.effectRequests.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          effectList: ['COVER', 'DECEIVE'],
          source: 'Bluestaq',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.effectRequests.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          effectList: ['COVER', 'DECEIVE'],
          source: 'Bluestaq',
          id: 'EFFECTREQUEST-ID',
          context: 'Example Notes',
          deadlineType: 'NoLaterThan',
          endTime: '2018-01-01T16:00:00.123456Z',
          externalRequestId: 'EXTERNALREQUEST-ID',
          metricTypes: ['COST', 'RISK'],
          metricWeights: [0.5, 0.6],
          modelClass: 'Preference model',
          origin: 'THIRD_PARTY_DATASOURCE',
          priority: 'LOW',
          startTime: '2018-01-01T16:00:00.123456Z',
          state: 'CREATED',
          targetSrcId: 'TARGETSRC-ID',
          targetSrcType: 'POI',
        },
      ],
    });
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
    const response = await client.effectRequests.tuple({
      columns: 'columns',
      createdAt: '2019-12-27',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.effectRequests.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          effectList: ['COVER', 'DECEIVE'],
          source: 'Bluestaq',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.effectRequests.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          effectList: ['COVER', 'DECEIVE'],
          source: 'Bluestaq',
          id: 'EFFECTREQUEST-ID',
          context: 'Example Notes',
          deadlineType: 'NoLaterThan',
          endTime: '2018-01-01T16:00:00.123456Z',
          externalRequestId: 'EXTERNALREQUEST-ID',
          metricTypes: ['COST', 'RISK'],
          metricWeights: [0.5, 0.6],
          modelClass: 'Preference model',
          origin: 'THIRD_PARTY_DATASOURCE',
          priority: 'LOW',
          startTime: '2018-01-01T16:00:00.123456Z',
          state: 'CREATED',
          targetSrcId: 'TARGETSRC-ID',
          targetSrcType: 'POI',
        },
      ],
    });
  });
});
