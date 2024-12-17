// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource effectresponses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.effectresponses.create([
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

  test('create: required and optional params', async () => {
    const response = await client.filedrop.effectresponses.create([
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
});
