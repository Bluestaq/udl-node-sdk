// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource passiveRadarObservation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.observations.passiveRadarObservation.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      obTime: '2023-01-24T23:35:26.518152Z',
      source: 'Bluestaq',
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
    const response = await client.observations.passiveRadarObservation.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      obTime: '2023-01-24T23:35:26.518152Z',
      source: 'Bluestaq',
      id: 'bdcacfb0-3c47-4bd0-9d6c-9fa7d2c4fbb0',
      accel: 1.23,
      accelUnc: 0.1,
      alt: 478.056378,
      azimuth: 134.5,
      azimuthBias: 0.123,
      azimuthRate: 0.5,
      azimuthUnc: 0.5,
      bistaticRange: 754.8212,
      bistaticRangeAccel: 1.23,
      bistaticRangeAccelUnc: 0.1,
      bistaticRangeBias: 2.34,
      bistaticRangeRate: -0.30222,
      bistaticRangeRateUnc: 0.123,
      bistaticRangeUnc: 5.1,
      coning: 60.1,
      coningUnc: 0.5,
      declination: 10.23,
      delay: 0.00505820232809312,
      delayBias: 0.00000123,
      delayUnc: 0.0000031,
      descriptor: 'Descriptor',
      doppler: -101.781641000597,
      dopplerUnc: 0.2,
      elevation: 76.1,
      elevationBias: 0.123,
      elevationRate: 0.5,
      elevationUnc: 0.5,
      extObservationId: '26892',
      idRFEmitter: 'RED_CLIFFS_3ABCRN',
      idSensor: 'OCULUSA',
      idSensorRefReceiver: 'OculusRef1',
      lat: -35.1181763996856,
      lon: 139.613567052763,
      obPosition: 'FIRST',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      origSensorId: 'ORIGSENSOR-ID',
      orthogonalRcs: 10.23,
      orthogonalRcsUnc: 1.23,
      ra: 1.23,
      rcs: 100.23,
      rcsUnc: 1.23,
      satNo: 40699,
      snr: 17.292053,
      tags: ['TAG1', 'TAG2'],
      taskId: 'TASK-ID',
      timingBias: 1.23,
      tof: 0.00592856674135648,
      tofBias: 0.00000123,
      tofUnc: 0.0000031,
      trackId: '12212',
      transactionId: 'TRANSACTION-ID',
      uct: false,
      xvel: 1.23,
      yvel: 3.21,
      zvel: 3.12,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.observations.passiveRadarObservation.list({
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

  test('list: required and optional params', async () => {
    const response = await client.observations.passiveRadarObservation.list({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.observations.passiveRadarObservation.count({
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

  test('count: required and optional params', async () => {
    const response = await client.observations.passiveRadarObservation.count({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.observations.passiveRadarObservation.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2023-01-24T23:35:26.518152Z',
          source: 'Bluestaq',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.observations.passiveRadarObservation.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2023-01-24T23:35:26.518152Z',
          source: 'Bluestaq',
          id: 'bdcacfb0-3c47-4bd0-9d6c-9fa7d2c4fbb0',
          accel: 1.23,
          accelUnc: 0.1,
          alt: 478.056378,
          azimuth: 134.5,
          azimuthBias: 0.123,
          azimuthRate: 0.5,
          azimuthUnc: 0.5,
          bistaticRange: 754.8212,
          bistaticRangeAccel: 1.23,
          bistaticRangeAccelUnc: 0.1,
          bistaticRangeBias: 2.34,
          bistaticRangeRate: -0.30222,
          bistaticRangeRateUnc: 0.123,
          bistaticRangeUnc: 5.1,
          coning: 60.1,
          coningUnc: 0.5,
          declination: 10.23,
          delay: 0.00505820232809312,
          delayBias: 0.00000123,
          delayUnc: 0.0000031,
          descriptor: 'Descriptor',
          doppler: -101.781641000597,
          dopplerUnc: 0.2,
          elevation: 76.1,
          elevationBias: 0.123,
          elevationRate: 0.5,
          elevationUnc: 0.5,
          extObservationId: '26892',
          idRFEmitter: 'RED_CLIFFS_3ABCRN',
          idSensor: 'OCULUSA',
          idSensorRefReceiver: 'OculusRef1',
          lat: -35.1181763996856,
          lon: 139.613567052763,
          obPosition: 'FIRST',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          origSensorId: 'ORIGSENSOR-ID',
          orthogonalRcs: 10.23,
          orthogonalRcsUnc: 1.23,
          ra: 1.23,
          rcs: 100.23,
          rcsUnc: 1.23,
          satNo: 40699,
          snr: 17.292053,
          tags: ['TAG1', 'TAG2'],
          taskId: 'TASK-ID',
          timingBias: 1.23,
          tof: 0.00592856674135648,
          tofBias: 0.00000123,
          tofUnc: 0.0000031,
          trackId: '12212',
          transactionId: 'TRANSACTION-ID',
          uct: false,
          xvel: 1.23,
          yvel: 3.21,
          zvel: 3.12,
        },
      ],
    });
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.observations.passiveRadarObservation.fileCreate({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2023-01-24T23:35:26.518152Z',
          source: 'Bluestaq',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fileCreate: required and optional params', async () => {
    const response = await client.observations.passiveRadarObservation.fileCreate({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2023-01-24T23:35:26.518152Z',
          source: 'Bluestaq',
          id: 'bdcacfb0-3c47-4bd0-9d6c-9fa7d2c4fbb0',
          accel: 1.23,
          accelUnc: 0.1,
          alt: 478.056378,
          azimuth: 134.5,
          azimuthBias: 0.123,
          azimuthRate: 0.5,
          azimuthUnc: 0.5,
          bistaticRange: 754.8212,
          bistaticRangeAccel: 1.23,
          bistaticRangeAccelUnc: 0.1,
          bistaticRangeBias: 2.34,
          bistaticRangeRate: -0.30222,
          bistaticRangeRateUnc: 0.123,
          bistaticRangeUnc: 5.1,
          coning: 60.1,
          coningUnc: 0.5,
          declination: 10.23,
          delay: 0.00505820232809312,
          delayBias: 0.00000123,
          delayUnc: 0.0000031,
          descriptor: 'Descriptor',
          doppler: -101.781641000597,
          dopplerUnc: 0.2,
          elevation: 76.1,
          elevationBias: 0.123,
          elevationRate: 0.5,
          elevationUnc: 0.5,
          extObservationId: '26892',
          idRFEmitter: 'RED_CLIFFS_3ABCRN',
          idSensor: 'OCULUSA',
          idSensorRefReceiver: 'OculusRef1',
          lat: -35.1181763996856,
          lon: 139.613567052763,
          obPosition: 'FIRST',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          origSensorId: 'ORIGSENSOR-ID',
          orthogonalRcs: 10.23,
          orthogonalRcsUnc: 1.23,
          ra: 1.23,
          rcs: 100.23,
          rcsUnc: 1.23,
          satNo: 40699,
          snr: 17.292053,
          tags: ['TAG1', 'TAG2'],
          taskId: 'TASK-ID',
          timingBias: 1.23,
          tof: 0.00592856674135648,
          tofBias: 0.00000123,
          tofUnc: 0.0000031,
          trackId: '12212',
          transactionId: 'TRANSACTION-ID',
          uct: false,
          xvel: 1.23,
          yvel: 3.21,
          zvel: 3.12,
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.observations.passiveRadarObservation.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.observations.passiveRadarObservation.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.observations.passiveRadarObservation.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.observations.passiveRadarObservation.tuple({
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
    const response = await client.observations.passiveRadarObservation.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
