// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource udlSar', () => {
  test('create: only required params', async () => {
    const responsePromise = client.udlSar.create([
      {
        classificationMarking: 'classificationMarking',
        collectionEnd: '2019-12-27T18:11:19.117Z',
        collectionStart: '2019-12-27T18:11:19.117Z',
        dataMode: 'dataMode',
        sarMode: 'sarMode',
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
    const response = await client.udlSar.create([
      {
        classificationMarking: 'classificationMarking',
        collectionEnd: '2019-12-27T18:11:19.117Z',
        collectionStart: '2019-12-27T18:11:19.117Z',
        dataMode: 'dataMode',
        sarMode: 'sarMode',
        source: 'source',
        id: 'id',
        agjson: 'agjson',
        andims: 0,
        area: 'area',
        asrid: 0,
        atext: 'atext',
        atype: 'atype',
        centerTime: '2019-12-27T18:11:19.117Z',
        collectionId: 'collectionId',
        continuousSpotAngle: 0,
        coordSys: 'coordSys',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        detectionEnd: '2019-12-27T18:11:19.117Z',
        detectionId: 'detectionId',
        detectionStart: '2019-12-27T18:11:19.117Z',
        dwellTime: 0,
        externalId: 'externalId',
        farRange: 0,
        grazeAngle: 0,
        idOnOrbit: 'idOnOrbit',
        idSensor: 'idSensor',
        incidenceAngle: 0,
        looksAzimuth: 0,
        looksRange: 0,
        nearRange: 0,
        obDirection: 'obDirection',
        operatingBand: 'operatingBand',
        operatingFreq: 0,
        orbitState: 'orbitState',
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        origSensorId: 'origSensorId',
        pulseBandwidth: 0,
        pulseDuration: 0,
        resolutionAzimuth: 0,
        resolutionRange: 0,
        rxPolarization: 'rxPolarization',
        satNo: 0,
        senalt: 0,
        senlatEnd: 0,
        senlatStart: 0,
        senlonEnd: 0,
        senlonStart: 0,
        senvelx: 0,
        senvely: 0,
        senvelz: 0,
        slantRange: 0,
        snr: 0,
        sourceDL: 'sourceDL',
        spacingAzimuth: 0,
        spacingRange: 0,
        squintAngle: 0,
        srcIds: ['string'],
        srcTyps: ['string'],
        swathLength: 0,
        tags: ['string'],
        targetposx: 0,
        targetposy: 0,
        targetposz: 0,
        transactionId: 'transactionId',
        txPolarization: 'txPolarization',
      },
    ]);
  });
});
