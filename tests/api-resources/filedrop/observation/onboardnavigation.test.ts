// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onboardnavigation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.observation.onboardnavigation.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        startTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.filedrop.observation.onboardnavigation.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        startTime: '2019-12-27T18:11:19.117Z',
        id: 'id',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        deltaPos: [[0]],
        endTime: '2019-12-27T18:11:19.117Z',
        esId: 'esId',
        idOnOrbit: 'idOnOrbit',
        idStateVector: 'idStateVector',
        mag: [[0]],
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        referenceFrame: 'referenceFrame',
        satNo: 0,
        starCatLoadTime: '2019-12-27T18:11:19.117Z',
        starCatName: 'starCatName',
        starTracker: [[0]],
        sunSensor: [[0]],
        ts: ['2019-12-27T18:11:19.117Z'],
      },
    ]);
  });
});
