// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource launchEvent', () => {
  test('createBulkV2: only required params', async () => {
    const responsePromise = client.launchEvent.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        msgCreateDate: '2020-01-01T00:00:00.123Z',
        source: 'Bluestaq',
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

  test('createBulkV2: required and optional params', async () => {
    const response = await client.launchEvent.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        msgCreateDate: '2020-01-01T00:00:00.123Z',
        source: 'Bluestaq',
        id: 'LAUNCHEVENT-ID',
        beNumber: 'ENC-123',
        declassificationDate: '2021-01-01T01:02:02.123Z',
        declassificationString: 'Example Declassification',
        derivedFrom: 'Example source',
        launchDate: '2020-01-01T00:00:00.123Z',
        launchFacilityName: 'Example launch facility name',
        launchFailureCode: 'Example failure code',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        oSuffix: 'oSuffix',
        satNo: 12,
      },
    ]);
  });
});
