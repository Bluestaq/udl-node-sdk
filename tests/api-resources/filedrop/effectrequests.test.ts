// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource effectrequests', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.effectrequests.create([
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

  test('create: required and optional params', async () => {
    const response = await client.filedrop.effectrequests.create([
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
});
