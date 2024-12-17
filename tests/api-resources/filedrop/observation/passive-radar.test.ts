// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource passiveRadar', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.observation.passiveRadar.create([
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
    const response = await client.filedrop.observation.passiveRadar.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        id: 'id',
        accel: 0,
        accelUnc: 0,
        alt: 0,
        azimuth: 0,
        azimuthBias: 0,
        azimuthRate: 0,
        azimuthUnc: 0,
        bistaticRange: 0,
        bistaticRangeAccel: 0,
        bistaticRangeAccelUnc: 0,
        bistaticRangeBias: 0,
        bistaticRangeRate: 0,
        bistaticRangeRateUnc: 0,
        bistaticRangeUnc: 0,
        coning: 0,
        coningUnc: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        declination: 0,
        delay: 0,
        delayBias: 0,
        delayUnc: 0,
        descriptor: 'descriptor',
        doppler: 0,
        dopplerUnc: 0,
        elevation: 0,
        elevationBias: 0,
        elevationRate: 0,
        elevationUnc: 0,
        extObservationId: 'extObservationId',
        idOnOrbit: 'idOnOrbit',
        idRFEmitter: 'idRFEmitter',
        idSensor: 'idSensor',
        idSensorRefReceiver: 'idSensorRefReceiver',
        lat: 0,
        lon: 0,
        obPosition: 'obPosition',
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        origSensorId: 'origSensorId',
        orthogonalRcs: 0,
        orthogonalRcsUnc: 0,
        ra: 0,
        rcs: 0,
        rcsUnc: 0,
        satNo: 0,
        snr: 0,
        sourceDL: 'sourceDL',
        tags: ['string'],
        taskId: 'taskId',
        timingBias: 0,
        tof: 0,
        tofBias: 0,
        tofUnc: 0,
        trackId: 'trackId',
        transactionId: 'transactionId',
        type: 'type',
        uct: true,
        xvel: 0,
        yvel: 0,
        zvel: 0,
      },
    ]);
  });
});
