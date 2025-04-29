// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource effectResponses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.effectResponses.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      type: 'COA',
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
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      type: 'COA',
      id: 'EFFECTRESPONSE-ID',
      actionsList: [
        {
          actionActorSrcId: 'ACTIONACTORSRC-ID',
          actionActorSrcType: 'AIRCRAFT',
          actionEndTime: '2021-01-01T00:00:00.123456Z',
          actionId: 'ACTION-ID',
          actionMetrics: [
            {
              domainValue: 10.1,
              metricType: 'GoalAchievement',
              provenance: 'Example metric',
              relativeValue: 10.1,
            },
          ],
          actionStartTime: '2021-01-01T00:00:00.123456Z',
          actorInterceptAlt: 1.1,
          actorInterceptLat: 45.1,
          actorInterceptLon: 180.1,
          effector: 'SENSOR1',
          summary: 'Example summary',
          targetSrcId: 'TARGETSRC-ID',
          targetSrcType: 'POI',
          totEndTime: '2021-01-01T00:00:00.123456Z',
          totStartTime: '2021-01-01T00:00:00.123456Z',
          weaponInterceptAlt: 1.1,
          weaponInterceptLat: 45.1,
          weaponInterceptLon: 180.1,
        },
      ],
      actorSrcId: 'RC-ID',
      actorSrcType: 'AIRCRAFT',
      coaMetrics: [
        {
          domainValue: 10.1,
          metricType: 'GoalAchievement',
          provenance: 'Example metric',
          relativeValue: 10.1,
        },
      ],
      collateralDamageEst: 0.5,
      decisionDeadline: '2021-01-01T00:00:00.123456Z',
      externalActions: ['ACTION1', 'ACTION2'],
      externalRequestId: 'EXTERNALREQUEST-ID',
      idEffectRequest: 'EFFECTREQUEST-ID',
      munitionId: 'MUNITION-ID',
      munitionType: 'Dummy',
      origin: 'THIRD_PARTY_DATASOURCE',
      probabilityOfKill: 0.7,
      redTargetSrcId: 'REDTARGETSRC-ID',
      redTargetSrcType: 'POI',
      redTimeToOverhead: '2021-01-01T00:00:00.123456Z',
      shotsRequired: 10,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.effectResponses.retrieve('id');
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
      client.effectResponses.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
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
    const response = await client.effectResponses.list({
      createdAt: '2019-12-27',
      firstResult: 0,
      maxResults: 0,
    });
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
    const response = await client.effectResponses.count({
      createdAt: '2019-12-27',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.effectResponses.createBulk({
      body: [{ classificationMarking: 'U', dataMode: 'TEST', source: 'Bluestaq', type: 'COA' }],
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
    const response = await client.effectResponses.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          type: 'COA',
          id: 'EFFECTRESPONSE-ID',
          actionsList: [
            {
              actionActorSrcId: 'ACTIONACTORSRC-ID',
              actionActorSrcType: 'AIRCRAFT',
              actionEndTime: '2021-01-01T00:00:00.123456Z',
              actionId: 'ACTION-ID',
              actionMetrics: [
                {
                  domainValue: 10.1,
                  metricType: 'GoalAchievement',
                  provenance: 'Example metric',
                  relativeValue: 10.1,
                },
              ],
              actionStartTime: '2021-01-01T00:00:00.123456Z',
              actorInterceptAlt: 1.1,
              actorInterceptLat: 45.1,
              actorInterceptLon: 180.1,
              effector: 'SENSOR1',
              summary: 'Example summary',
              targetSrcId: 'TARGETSRC-ID',
              targetSrcType: 'POI',
              totEndTime: '2021-01-01T00:00:00.123456Z',
              totStartTime: '2021-01-01T00:00:00.123456Z',
              weaponInterceptAlt: 1.1,
              weaponInterceptLat: 45.1,
              weaponInterceptLon: 180.1,
            },
          ],
          actorSrcId: 'RC-ID',
          actorSrcType: 'AIRCRAFT',
          coaMetrics: [
            {
              domainValue: 10.1,
              metricType: 'GoalAchievement',
              provenance: 'Example metric',
              relativeValue: 10.1,
            },
          ],
          collateralDamageEst: 0.5,
          decisionDeadline: '2021-01-01T00:00:00.123456Z',
          externalActions: ['ACTION1', 'ACTION2'],
          externalRequestId: 'EXTERNALREQUEST-ID',
          idEffectRequest: 'EFFECTREQUEST-ID',
          munitionId: 'MUNITION-ID',
          munitionType: 'Dummy',
          origin: 'THIRD_PARTY_DATASOURCE',
          probabilityOfKill: 0.7,
          redTargetSrcId: 'REDTARGETSRC-ID',
          redTargetSrcType: 'POI',
          redTimeToOverhead: '2021-01-01T00:00:00.123456Z',
          shotsRequired: 10,
        },
      ],
    });
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
    const response = await client.effectResponses.tuple({
      columns: 'columns',
      createdAt: '2019-12-27',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.effectResponses.unvalidatedPublish({
      body: [{ classificationMarking: 'U', dataMode: 'TEST', source: 'Bluestaq', type: 'COA' }],
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
    const response = await client.effectResponses.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          type: 'COA',
          id: 'EFFECTRESPONSE-ID',
          actionsList: [
            {
              actionActorSrcId: 'ACTIONACTORSRC-ID',
              actionActorSrcType: 'AIRCRAFT',
              actionEndTime: '2021-01-01T00:00:00.123456Z',
              actionId: 'ACTION-ID',
              actionMetrics: [
                {
                  domainValue: 10.1,
                  metricType: 'GoalAchievement',
                  provenance: 'Example metric',
                  relativeValue: 10.1,
                },
              ],
              actionStartTime: '2021-01-01T00:00:00.123456Z',
              actorInterceptAlt: 1.1,
              actorInterceptLat: 45.1,
              actorInterceptLon: 180.1,
              effector: 'SENSOR1',
              summary: 'Example summary',
              targetSrcId: 'TARGETSRC-ID',
              targetSrcType: 'POI',
              totEndTime: '2021-01-01T00:00:00.123456Z',
              totStartTime: '2021-01-01T00:00:00.123456Z',
              weaponInterceptAlt: 1.1,
              weaponInterceptLat: 45.1,
              weaponInterceptLon: 180.1,
            },
          ],
          actorSrcId: 'RC-ID',
          actorSrcType: 'AIRCRAFT',
          coaMetrics: [
            {
              domainValue: 10.1,
              metricType: 'GoalAchievement',
              provenance: 'Example metric',
              relativeValue: 10.1,
            },
          ],
          collateralDamageEst: 0.5,
          decisionDeadline: '2021-01-01T00:00:00.123456Z',
          externalActions: ['ACTION1', 'ACTION2'],
          externalRequestId: 'EXTERNALREQUEST-ID',
          idEffectRequest: 'EFFECTREQUEST-ID',
          munitionId: 'MUNITION-ID',
          munitionType: 'Dummy',
          origin: 'THIRD_PARTY_DATASOURCE',
          probabilityOfKill: 0.7,
          redTargetSrcId: 'REDTARGETSRC-ID',
          redTargetSrcType: 'POI',
          redTimeToOverhead: '2021-01-01T00:00:00.123456Z',
          shotsRequired: 10,
        },
      ],
    });
  });
});
