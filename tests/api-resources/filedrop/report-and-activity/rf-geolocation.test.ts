// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rfGeolocation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.reportAndActivity.rfGeolocation.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        orderId: 'orderId',
        receivedTs: '2019-12-27T18:11:19.117Z',
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
    const response = await client.filedrop.reportAndActivity.rfGeolocation.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        orderId: 'orderId',
        receivedTs: '2019-12-27T18:11:19.117Z',
        source: 'source',
        startTime: '2019-12-27T18:11:19.117Z',
        id: 'id',
        agjson: 'agjson',
        algVersion: 'algVersion',
        andims: 0,
        area: 'area',
        asrid: 0,
        atext: 'atext',
        atype: 'atype',
        centerFreq: 0,
        confArea: 0,
        confOrientation: 0,
        confSemiMajor: 0,
        confSemiMinor: 0,
        constellation: 'constellation',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        createdTs: '2019-12-27T18:11:19.117Z',
        detectAlt: 0,
        detectLat: 0,
        detectLon: 0,
        endTime: '2019-12-27T18:11:19.117Z',
        externalId: 'externalId',
        idOnOrbit: 'idOnOrbit',
        idRFEmitter: 'idRFEmitter',
        maxFreq: 0,
        minFreq: 0,
        numBursts: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        origRFEmitterId: 'origRFEmitterId',
        passGroupId: 'passGroupId',
        satNo: 0,
        signalOfInterest: 'signalOfInterest',
        sourceDL: 'sourceDL',
        tags: ['string'],
      },
    ]);
  });
});
