// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource itemTrackings', () => {
  test('create: only required params', async () => {
    const responsePromise = client.itemTrackings.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        scanCode: 'scanCode',
        scannerId: 'scannerId',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
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
    const response = await client.itemTrackings.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        scanCode: 'scanCode',
        scannerId: 'scannerId',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
        id: 'id',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        dvCode: 'dvCode',
        idItem: 'idItem',
        keys: ['string'],
        lat: 0,
        lon: 0,
        notes: 'notes',
        origin: 'origin',
        origNetwork: 'origNetwork',
        scanType: 'scanType',
        scGenTool: 'scGenTool',
        sourceDL: 'sourceDL',
        type: 'type',
        values: ['string'],
      },
    ]);
  });
});
