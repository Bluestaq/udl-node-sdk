// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource effectResponses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.effectResponses.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      source: 'source',
      type: 'type',
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
    const response = await client.effectResponses.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      source: 'source',
      type: 'type',
      id: 'id',
      actionsList: [
        {
          actionActorSrcId: 'actionActorSrcId',
          actionActorSrcType: 'actionActorSrcType',
          actionEndTime: '2019-12-27T18:11:19.117Z',
          actionId: 'actionId',
          actionMetrics: [
            { domainValue: 0, metricType: 'metricType', provenance: 'provenance', relativeValue: 0 },
          ],
          actionStartTime: '2019-12-27T18:11:19.117Z',
          actorInterceptAlt: 0,
          actorInterceptLat: 0,
          actorInterceptLon: 0,
          effector: 'effector',
          summary: 'summary',
          targetSrcId: 'targetSrcId',
          targetSrcType: 'targetSrcType',
          totEndTime: '2019-12-27T18:11:19.117Z',
          totStartTime: '2019-12-27T18:11:19.117Z',
          weaponInterceptAlt: 0,
          weaponInterceptLat: 0,
          weaponInterceptLon: 0,
        },
      ],
      actorSrcId: 'actorSrcId',
      actorSrcType: 'actorSrcType',
      coaMetrics: [{ domainValue: 0, metricType: 'metricType', provenance: 'provenance', relativeValue: 0 }],
      collateralDamageEst: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      decisionDeadline: '2019-12-27T18:11:19.117Z',
      externalActions: ['string'],
      externalRequestId: 'externalRequestId',
      idEffectRequest: 'idEffectRequest',
      munitionId: 'munitionId',
      munitionType: 'munitionType',
      origin: 'origin',
      origNetwork: 'origNetwork',
      probabilityOfKill: 0,
      redTargetSrcId: 'redTargetSrcId',
      redTargetSrcType: 'redTargetSrcType',
      redTimeToOverhead: '2019-12-27T18:11:19.117Z',
      shotsRequired: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.effectResponses.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.effectResponses.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.effectResponses.list({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.effectResponses.list({ createdAt: '2019-12-27' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.effectResponses.count({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.effectResponses.count({ createdAt: '2019-12-27' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.effectResponses.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        type: 'type',
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
    const response = await client.effectResponses.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        type: 'type',
        id: 'id',
        actionsList: [
          {
            actionActorSrcId: 'actionActorSrcId',
            actionActorSrcType: 'actionActorSrcType',
            actionEndTime: '2019-12-27T18:11:19.117Z',
            actionId: 'actionId',
            actionMetrics: [
              { domainValue: 0, metricType: 'metricType', provenance: 'provenance', relativeValue: 0 },
            ],
            actionStartTime: '2019-12-27T18:11:19.117Z',
            actorInterceptAlt: 0,
            actorInterceptLat: 0,
            actorInterceptLon: 0,
            effector: 'effector',
            summary: 'summary',
            targetSrcId: 'targetSrcId',
            targetSrcType: 'targetSrcType',
            totEndTime: '2019-12-27T18:11:19.117Z',
            totStartTime: '2019-12-27T18:11:19.117Z',
            weaponInterceptAlt: 0,
            weaponInterceptLat: 0,
            weaponInterceptLon: 0,
          },
        ],
        actorSrcId: 'actorSrcId',
        actorSrcType: 'actorSrcType',
        coaMetrics: [
          { domainValue: 0, metricType: 'metricType', provenance: 'provenance', relativeValue: 0 },
        ],
        collateralDamageEst: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        decisionDeadline: '2019-12-27T18:11:19.117Z',
        externalActions: ['string'],
        externalRequestId: 'externalRequestId',
        idEffectRequest: 'idEffectRequest',
        munitionId: 'munitionId',
        munitionType: 'munitionType',
        origin: 'origin',
        origNetwork: 'origNetwork',
        probabilityOfKill: 0,
        redTargetSrcId: 'redTargetSrcId',
        redTargetSrcType: 'redTargetSrcType',
        redTimeToOverhead: '2019-12-27T18:11:19.117Z',
        shotsRequired: 0,
      },
    ]);
  });

  test('queryHelp', async () => {
    const responsePromise = client.effectResponses.queryHelp();
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
    await expect(client.effectResponses.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.effectResponses.tuple({ columns: 'columns', createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.effectResponses.tuple({ columns: 'columns', createdAt: '2019-12-27' });
  });
});
