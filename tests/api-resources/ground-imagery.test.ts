// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource groundImagery', () => {
  test('create: only required params', async () => {
    const responsePromise = client.groundImagery.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      filename: 'filename',
      imageTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
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
    const response = await client.groundImagery.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      filename: 'filename',
      imageTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      id: 'id',
      checksumValue: 'checksumValue',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      filesize: 0,
      format: 'format',
      idSensor: 'idSensor',
      keywords: ['string'],
      name: 'name',
      notes: 'notes',
      origin: 'origin',
      origNetwork: 'origNetwork',
      origSensorId: 'origSensorId',
      region: 'region',
      regionGeoJSON: 'regionGeoJSON',
      regionNDims: 0,
      regionSRid: 0,
      regionText: 'regionText',
      regionType: 'regionType',
      sourceDL: 'sourceDL',
      subjectId: 'subjectId',
      tags: ['string'],
      transactionId: 'transactionId',
    });
  });
});
