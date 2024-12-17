// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rf', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.observation.rf.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        type: 'type',
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
    const response = await client.filedrop.observation.rf.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        type: 'type',
        id: 'id',
        antennaName: 'antennaName',
        azimuth: 0,
        azimuthRate: 0,
        azimuthUnc: 0,
        bandwidth: 0,
        baudRate: 0,
        baudRates: [0],
        bitErrorRate: 0,
        carrierStandard: 'carrierStandard',
        channel: 0,
        chipRates: [0],
        codeFills: ['string'],
        codeLengths: [0],
        codeTaps: ['string'],
        collectionMode: 'collectionMode',
        confidence: 0,
        confidences: [0],
        constellationXPoints: [0],
        constellationYPoints: [0],
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        descriptor: 'descriptor',
        detectionStatus: 'detectionStatus',
        detectionStatuses: ['string'],
        eirp: 0,
        elevation: 0,
        elevationRate: 0,
        elevationUnc: 0,
        elnot: 'elnot',
        endFrequency: 0,
        frequencies: [0],
        frequency: 0,
        frequencyShift: 0,
        idOnOrbit: 'idOnOrbit',
        idSensor: 'idSensor',
        incoming: true,
        innerCodingRate: 0,
        maxPSD: 0,
        minPSD: 0,
        modulation: 'modulation',
        noisePwrDensity: 0,
        nominalBandwidth: 0,
        nominalEirp: 0,
        nominalFrequency: 0,
        nominalPowerOverNoise: 0,
        nominalSnr: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        origSensorId: 'origSensorId',
        outerCodingRate: 0,
        peak: true,
        pgri: 0,
        pnOrders: [0],
        polarity: 0,
        polarityType: 'polarityType',
        powerOverNoise: 0,
        powers: [0],
        range: 0,
        rangeRate: 0,
        rangeRateUnc: 0,
        rangeUnc: 0,
        rawFileURI: 'rawFileURI',
        referenceLevel: 0,
        relativeCarrierPower: 0,
        relativeNoiseFloor: 0,
        resolutionBandwidth: 0,
        satNo: 0,
        senalt: 0,
        senlat: 0,
        senlon: 0,
        signalIds: ['string'],
        snr: 0,
        snrs: [0],
        sourceDL: 'sourceDL',
        spectrumAnalyzerPower: 0,
        startFrequency: 0,
        switchPoint: 0,
        symbolToNoiseRatio: 0,
        tags: ['string'],
        taskId: 'taskId',
        telemetryIds: ['string'],
        trackId: 'trackId',
        trackRange: 0,
        transactionId: 'transactionId',
        transmitFilterRollOff: 0,
        transmitFilterType: 'transmitFilterType',
        transponder: 'transponder',
        uct: true,
        url: 'url',
        videoBandwidth: 0,
      },
    ]);
  });
});
