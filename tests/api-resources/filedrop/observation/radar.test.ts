// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource radar', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.observation.radar.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.filedrop.observation.radar.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        id: 'id',
        azimuth: 0,
        azimuthBias: 0,
        azimuthRate: 0,
        azimuthUnc: 0,
        beam: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        declination: 0,
        descriptor: 'descriptor',
        doppler: 0,
        dopplerUnc: 0,
        elevation: 0,
        elevationBias: 0,
        elevationRate: 0,
        elevationUnc: 0,
        idOnOrbit: 'idOnOrbit',
        idSensor: 'idSensor',
        obPosition: 'obPosition',
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        origSensorId: 'origSensorId',
        orthogonalRcs: 0,
        orthogonalRcsUnc: 0,
        ra: 0,
        range: 0,
        rangeAccel: 0,
        rangeAccelUnc: 0,
        rangeBias: 0,
        rangeRate: 0,
        rangeRateUnc: 0,
        rangeUnc: 0,
        rawFileURI: 'rawFileURI',
        rcs: 0,
        rcsUnc: 0,
        satNo: 0,
        senReferenceFrame: 'senReferenceFrame',
        senx: 0,
        seny: 0,
        senz: 0,
        snr: 0,
        sourceDL: 'sourceDL',
        tags: ['string'],
        taskId: 'taskId',
        timingBias: 0,
        trackId: 'trackId',
        transactionId: 'transactionId',
        type: 'type',
        uct: true,
        x: 0,
        xvel: 0,
        y: 0,
        yvel: 0,
        z: 0,
        zvel: 0,
      },
    ]);
  });
});
