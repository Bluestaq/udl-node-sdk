// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource surfaceobstructions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.surfaceobstructions.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        idSurface: 'idSurface',
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
    const response = await client.filedrop.surfaceobstructions.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        idSurface: 'idSurface',
        source: 'source',
        id: 'id',
        advisoryRequired: ['string'],
        approvalRequired: ['string'],
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        distanceFromCenterLine: 0,
        distanceFromEdge: 0,
        distanceFromThreshold: 0,
        idNavigationalObstruction: 'idNavigationalObstruction',
        obstructionDesc: 'obstructionDesc',
        obstructionHeight: 0,
        obstructionSideCode: 'obstructionSideCode',
        origin: 'origin',
        origNetwork: 'origNetwork',
        sourceDL: 'sourceDL',
        surfaceEndLat: 0,
        surfaceEndLon: 0,
      },
    ]);
  });
});
