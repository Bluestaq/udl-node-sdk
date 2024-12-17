// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource h3geo', () => {
  test('create: only required params', async () => {
    const responsePromise = client.h3geo.create({
      cells: [
        {
          cellId: 'cellId',
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          source: 'source',
        },
      ],
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      numCells: 0,
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
    const response = await client.h3geo.create({
      cells: [
        {
          cellId: 'cellId',
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          source: 'source',
          id: 'id',
          altMean: 0,
          altSigma: 0,
          anomScoreInterference: 0,
          anomScoreSpoofing: 0,
          coverage: 0,
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBy: 'createdBy',
          idH3Geo: 'idH3Geo',
          origin: 'origin',
          origNetwork: 'origNetwork',
          rpmMax: 0,
          rpmMean: 0,
          rpmMedian: 0,
          rpmMin: 0,
          rpmSigma: 0,
          sourceDL: 'sourceDL',
        },
      ],
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      numCells: 0,
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
      id: 'id',
      centerFreq: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      endTime: '2019-12-27T18:11:19.117Z',
      origin: 'origin',
      origNetwork: 'origNetwork',
      resolution: 0,
      sourceDL: 'sourceDL',
      tags: ['string'],
      type: 'type',
    });
  });
});
