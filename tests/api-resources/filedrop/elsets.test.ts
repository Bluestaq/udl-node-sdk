// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource elsets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.elsets.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        epoch: '2019-12-27T18:11:19.117Z',
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
    const response = await client.filedrop.elsets.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        epoch: '2019-12-27T18:11:19.117Z',
        source: 'source',
        agom: 0,
        algorithm: 'algorithm',
        apogee: 0,
        argOfPerigee: 0,
        ballisticCoeff: 0,
        bStar: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        descriptor: 'descriptor',
        eccentricity: 0,
        ephemType: 0,
        idElset: 'idElset',
        idOnOrbit: 'idOnOrbit',
        idOrbitDetermination: 'idOrbitDetermination',
        inclination: 0,
        line1: 'line1',
        line2: 'line2',
        meanAnomaly: 0,
        meanMotion: 0,
        meanMotionDDot: 0,
        meanMotionDot: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        perigee: 0,
        period: 0,
        raan: 0,
        rawFileURI: 'rawFileURI',
        revNo: 0,
        satNo: 0,
        semiMajorAxis: 0,
        sourcedData: ['string'],
        sourcedDataTypes: ['string'],
        sourceDL: 'sourceDL',
        tags: ['string'],
        transactionId: 'transactionId',
        uct: true,
      },
    ]);
  });
});
