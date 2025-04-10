// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rfobservation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rfobservation.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      obTime: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      type: 'RF',
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
    const response = await client.rfobservation.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      obTime: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      type: 'RF',
      id: 'RFOBSERVATION-ID',
      antennaName: 'Antenna1',
      azimuth: 10.1,
      azimuthRate: 1.1,
      azimuthUnc: 2.1,
      bandwidth: 10.1,
      baudRate: 10.1,
      baudRates: [1.1, 2.2],
      bitErrorRate: 10.1,
      carrierStandard: 'DVB-S2',
      channel: 10,
      chipRates: [1.1, 2.2],
      codeFills: ['TAG1', 'TAG2'],
      codeLengths: [1.1, 2.2],
      codeTaps: ['TAG1', 'TAG2'],
      collectionMode: 'SURVEY',
      confidence: 10.1,
      confidences: [1.1, 2.2],
      constellationXPoints: [1.1, 2.2],
      constellationYPoints: [1.1, 2.2],
      descriptor: 'descriptor',
      detectionStatus: 'DETECTED',
      detectionStatuses: ['DETECTED'],
      eirp: 10.1,
      elevation: 10.1,
      elevationRate: 10.1,
      elevationUnc: 10.1,
      elnot: 'Ex. ELINT',
      endFrequency: 10.1,
      frequencies: [1.1, 2.2],
      frequency: 10.1,
      frequencyShift: 10.1,
      idSensor: 'SENSOR-ID',
      incoming: false,
      innerCodingRate: 7,
      maxPSD: 10.1,
      minPSD: 10.1,
      modulation: 'Auto',
      noisePwrDensity: 10.1,
      nominalBandwidth: 10.1,
      nominalEirp: 10.1,
      nominalFrequency: 10.1,
      nominalPowerOverNoise: 10.1,
      nominalSnr: 10.1,
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIG-OBJECT-ID',
      origSensorId: 'ORIG-SENSOR-ID',
      outerCodingRate: 4,
      peak: false,
      pgri: 10.1,
      pnOrders: [1, 2],
      polarity: 10.1,
      polarityType: 'H',
      powerOverNoise: 10.1,
      powers: [1.1, 2.2],
      range: 10.1,
      rangeRate: 10.1,
      rangeRateUnc: 10.1,
      rangeUnc: 10.1,
      rawFileURI: 'Example URI',
      referenceLevel: 10.1,
      relativeCarrierPower: 10.1,
      relativeNoiseFloor: 10.1,
      resolutionBandwidth: 10.1,
      satNo: 32258,
      senalt: 10.1,
      senlat: 45.2,
      senlon: 80.3,
      signalIds: ['ID1', 'ID2'],
      snr: 10.1,
      snrs: [1.1, 2.2],
      spectrumAnalyzerPower: 10.1,
      startFrequency: 10.1,
      switchPoint: 10,
      symbolToNoiseRatio: 10.1,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      taskId: 'TASK-ID',
      telemetryIds: ['ID1', 'ID2'],
      trackId: 'TRACK-ID',
      trackRange: 10.1,
      transactionId: 'TRANSACTION-ID',
      transmitFilterRollOff: 10.1,
      transmitFilterType: 'RRC',
      transponder: 'TRANSPONDER-A',
      uct: false,
      url: 'https://some-url',
      videoBandwidth: 10.1,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.rfobservation.list({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.rfobservation.list({ obTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.rfobservation.count({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.rfobservation.count({ obTime: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.rfobservation.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        obTime: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
        type: 'RF',
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

  test('createBulk: required and optional params', async () => {
    const response = await client.rfobservation.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        obTime: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
        type: 'RF',
        id: 'RFOBSERVATION-ID',
        antennaName: 'Antenna1',
        azimuth: 10.1,
        azimuthRate: 1.1,
        azimuthUnc: 2.1,
        bandwidth: 10.1,
        baudRate: 10.1,
        baudRates: [1.1, 2.2],
        bitErrorRate: 10.1,
        carrierStandard: 'DVB-S2',
        channel: 10,
        chipRates: [1.1, 2.2],
        codeFills: ['TAG1', 'TAG2'],
        codeLengths: [1.1, 2.2],
        codeTaps: ['TAG1', 'TAG2'],
        collectionMode: 'SURVEY',
        confidence: 10.1,
        confidences: [1.1, 2.2],
        constellationXPoints: [1.1, 2.2],
        constellationYPoints: [1.1, 2.2],
        descriptor: 'descriptor',
        detectionStatus: 'DETECTED',
        detectionStatuses: ['DETECTED'],
        eirp: 10.1,
        elevation: 10.1,
        elevationRate: 10.1,
        elevationUnc: 10.1,
        elnot: 'Ex. ELINT',
        endFrequency: 10.1,
        frequencies: [1.1, 2.2],
        frequency: 10.1,
        frequencyShift: 10.1,
        idSensor: 'SENSOR-ID',
        incoming: false,
        innerCodingRate: 7,
        maxPSD: 10.1,
        minPSD: 10.1,
        modulation: 'Auto',
        noisePwrDensity: 10.1,
        nominalBandwidth: 10.1,
        nominalEirp: 10.1,
        nominalFrequency: 10.1,
        nominalPowerOverNoise: 10.1,
        nominalSnr: 10.1,
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIG-OBJECT-ID',
        origSensorId: 'ORIG-SENSOR-ID',
        outerCodingRate: 4,
        peak: false,
        pgri: 10.1,
        pnOrders: [1, 2],
        polarity: 10.1,
        polarityType: 'H',
        powerOverNoise: 10.1,
        powers: [1.1, 2.2],
        range: 10.1,
        rangeRate: 10.1,
        rangeRateUnc: 10.1,
        rangeUnc: 10.1,
        rawFileURI: 'Example URI',
        referenceLevel: 10.1,
        relativeCarrierPower: 10.1,
        relativeNoiseFloor: 10.1,
        resolutionBandwidth: 10.1,
        satNo: 32258,
        senalt: 10.1,
        senlat: 45.2,
        senlon: 80.3,
        signalIds: ['ID1', 'ID2'],
        snr: 10.1,
        snrs: [1.1, 2.2],
        spectrumAnalyzerPower: 10.1,
        startFrequency: 10.1,
        switchPoint: 10,
        symbolToNoiseRatio: 10.1,
        tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
        taskId: 'TASK-ID',
        telemetryIds: ['ID1', 'ID2'],
        trackId: 'TRACK-ID',
        trackRange: 10.1,
        transactionId: 'TRANSACTION-ID',
        transmitFilterRollOff: 10.1,
        transmitFilterType: 'RRC',
        transponder: 'TRANSPONDER-A',
        uct: false,
        url: 'https://some-url',
        videoBandwidth: 10.1,
      },
    ]);
  });

  test('createBulkV2: only required params', async () => {
    const responsePromise = client.rfobservation.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        obTime: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
        type: 'RF',
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

  test('createBulkV2: required and optional params', async () => {
    const response = await client.rfobservation.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        obTime: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
        type: 'RF',
        id: 'RFOBSERVATION-ID',
        antennaName: 'Antenna1',
        azimuth: 10.1,
        azimuthRate: 1.1,
        azimuthUnc: 2.1,
        bandwidth: 10.1,
        baudRate: 10.1,
        baudRates: [1.1, 2.2],
        bitErrorRate: 10.1,
        carrierStandard: 'DVB-S2',
        channel: 10,
        chipRates: [1.1, 2.2],
        codeFills: ['TAG1', 'TAG2'],
        codeLengths: [1.1, 2.2],
        codeTaps: ['TAG1', 'TAG2'],
        collectionMode: 'SURVEY',
        confidence: 10.1,
        confidences: [1.1, 2.2],
        constellationXPoints: [1.1, 2.2],
        constellationYPoints: [1.1, 2.2],
        descriptor: 'descriptor',
        detectionStatus: 'DETECTED',
        detectionStatuses: ['DETECTED'],
        eirp: 10.1,
        elevation: 10.1,
        elevationRate: 10.1,
        elevationUnc: 10.1,
        elnot: 'Ex. ELINT',
        endFrequency: 10.1,
        frequencies: [1.1, 2.2],
        frequency: 10.1,
        frequencyShift: 10.1,
        idSensor: 'SENSOR-ID',
        incoming: false,
        innerCodingRate: 7,
        maxPSD: 10.1,
        minPSD: 10.1,
        modulation: 'Auto',
        noisePwrDensity: 10.1,
        nominalBandwidth: 10.1,
        nominalEirp: 10.1,
        nominalFrequency: 10.1,
        nominalPowerOverNoise: 10.1,
        nominalSnr: 10.1,
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIG-OBJECT-ID',
        origSensorId: 'ORIG-SENSOR-ID',
        outerCodingRate: 4,
        peak: false,
        pgri: 10.1,
        pnOrders: [1, 2],
        polarity: 10.1,
        polarityType: 'H',
        powerOverNoise: 10.1,
        powers: [1.1, 2.2],
        range: 10.1,
        rangeRate: 10.1,
        rangeRateUnc: 10.1,
        rangeUnc: 10.1,
        rawFileURI: 'Example URI',
        referenceLevel: 10.1,
        relativeCarrierPower: 10.1,
        relativeNoiseFloor: 10.1,
        resolutionBandwidth: 10.1,
        satNo: 32258,
        senalt: 10.1,
        senlat: 45.2,
        senlon: 80.3,
        signalIds: ['ID1', 'ID2'],
        snr: 10.1,
        snrs: [1.1, 2.2],
        spectrumAnalyzerPower: 10.1,
        startFrequency: 10.1,
        switchPoint: 10,
        symbolToNoiseRatio: 10.1,
        tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
        taskId: 'TASK-ID',
        telemetryIds: ['ID1', 'ID2'],
        trackId: 'TRACK-ID',
        trackRange: 10.1,
        transactionId: 'TRANSACTION-ID',
        transmitFilterRollOff: 10.1,
        transmitFilterType: 'RRC',
        transponder: 'TRANSPONDER-A',
        uct: false,
        url: 'https://some-url',
        videoBandwidth: 10.1,
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.rfobservation.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.rfobservation.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.rfobservation.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.rfobservation.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.rfobservation.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.rfobservation.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
