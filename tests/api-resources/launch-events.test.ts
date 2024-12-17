// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource launchEvents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.launchEvents.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        msgCreateDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.launchEvents.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        msgCreateDate: '2019-12-27T18:11:19.117Z',
        source: 'source',
        id: 'id',
        beNumber: 'beNumber',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        declassificationDate: '2019-12-27T18:11:19.117Z',
        declassificationString: 'declassificationString',
        derivedFrom: 'derivedFrom',
        idOnOrbit: 'idOnOrbit',
        launchDate: '2019-12-27T18:11:19.117Z',
        launchFacilityName: 'launchFacilityName',
        launchFailureCode: 'launchFailureCode',
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        oSuffix: 'oSuffix',
        satNo: 0,
      },
    ]);
  });
});
