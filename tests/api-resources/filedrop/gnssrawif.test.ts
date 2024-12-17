// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gnssrawif', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.gnssrawif.create({
      centerFreq: [0],
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      endTime: '2019-12-27T18:11:19.117Z',
      fileName: 'fileName',
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.filedrop.gnssrawif.create({
      centerFreq: [0],
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      endTime: '2019-12-27T18:11:19.117Z',
      fileName: 'fileName',
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
      id: 'id',
      bitDepth: 0,
      boresight: [0],
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      dataRate: 0,
      diffCodeBias: [0],
      endAlt: 0,
      endLat: 0,
      endLon: 0,
      esId: 'esId',
      eventId: 'eventId',
      fileSize: 0,
      idOnOrbit: 'idOnOrbit',
      ifFreq: [0],
      origin: 'origin',
      origNetwork: 'origNetwork',
      origObjectId: 'origObjectId',
      postFourier: ['string'],
      quat: [0],
      receiver: 'receiver',
      sampleRate: [0],
      sampleType: 'sampleType',
      satNo: 0,
      sequenceID: 0,
      setId: 'setId',
      setLength: 0,
      srcIds: ['string'],
      srcTyps: ['string'],
      startAlt: 0,
      startIndex: 0,
      startLat: 0,
      startLon: 0,
      tags: ['string'],
    });
  });
});
