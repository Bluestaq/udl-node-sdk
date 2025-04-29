// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource soiobservationset', () => {
  test('create: only required params', async () => {
    const responsePromise = client.soiobservationset.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      numObs: 1,
      source: 'Bluestaq',
      startTime: '2018-01-01T16:00:00.123456Z',
      type: 'OPTICAL',
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
    const response = await client.soiobservationset.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      numObs: 1,
      source: 'Bluestaq',
      startTime: '2018-01-01T16:00:00.123456Z',
      type: 'OPTICAL',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      binningHoriz: 2,
      binningVert: 2,
      brightnessVarianceChangeDetected: true,
      calibrations: [
        {
          calBgIntensity: 1.1,
          calExtinctionCoeff: 0.2,
          calExtinctionCoeffMaxUnc: 0.19708838,
          calExtinctionCoeffUnc: 0.06474939,
          calNumCorrelatedStars: 1,
          calNumDetectedStars: 1,
          calSkyBg: 30086.25,
          calSpectralFilterSolarMag: 19.23664587,
          calTime: '2023-01-02T16:00:00.123Z',
          calType: 'PRE',
          calZeroPoint: 25.15682157,
        },
      ],
      calibrationType: 'ALL SKY',
      changeConf: 'MEDIUM',
      changeDetected: true,
      collectionDensityConf: 'MEDIUM',
      collectionId: 'b5133288-ab63-4b15-81f6-c7eec0cdb0c0',
      collectionMode: 'RATE TRACK',
      corrQuality: 0.327,
      endTime: '2018-01-01T16:00:00.123456Z',
      gain: 234.2,
      idElset: 'REF-ELSET-ID',
      idSensor: 'SENSOR-ID',
      losDeclinationEnd: 1.1,
      losDeclinationStart: 1.1,
      msgCreateDate: '2022-07-07T16:00:00.123Z',
      numSpectralFilters: 10,
      opticalSOIObservationList: [
        {
          obStartTime: '2018-01-01T16:00:00.888456Z',
          currentSpectralFilterNum: 0,
          declinations: [-0.45, -0.45, -0.45],
          expDuration: 0.455,
          extinctionCoeffs: [0.32, 0.32, 0.32],
          extinctionCoeffsUnc: [0.06, 0.06, 0.06],
          intensities: [1.1, 1.1, 1.1],
          intensityTimes: [
            '2018-01-01T16:00:00.888456Z',
            '2018-01-01T16:00:00.898456Z',
            '2018-01-01T16:00:00.998456Z',
          ],
          localSkyBgs: [100625.375, 100625.375, 100625.375],
          localSkyBgsUnc: [0.065, 0.065, 0.065],
          numCorrelatedStars: [3, 3, 3],
          numDetectedStars: [6, 6, 6],
          percentSats: [0.1, 0.2, 1],
          raRates: [0, 0, 0],
          ras: [107.4, 107.4, 107.4],
          skyBgs: [100625.375, 100625.375, 100625.375],
          zeroPoints: [24.711, 24.711, 24.711],
        },
      ],
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      origSensorId: 'ORIGSENSOR-ID',
      percentSatThreshold: 0.1,
      periodicityChangeDetected: true,
      periodicityDetectionConf: 'MEDIUM',
      periodicitySamplingConf: 'MEDIUM',
      pixelArrayHeight: 32,
      pixelArrayWidth: 32,
      pixelMax: 16383,
      pixelMin: 0,
      pointingAngleAzEnd: 1.1,
      pointingAngleAzStart: 1.1,
      pointingAngleElEnd: 1.1,
      pointingAngleElStart: 1.1,
      polarAngleEnd: 1.1,
      polarAngleStart: 1.1,
      radarSOIObservationList: [
        {
          obStartTime: '2018-01-01T16:00:00.888456Z',
          aspectAngles: [4.278, 4.278, 4.278],
          azimuthBiases: [45.23, 45.23, 45.23],
          azimuthRates: [-1.481, -1.481, -1.481],
          azimuths: [278.27, 278.27, 278.27],
          beta: -89.97,
          centerFrequency: 160047.0625,
          crossRangeRes: [11.301, 11.301, 11.301],
          deltaTimes: [0.005, 0.005, 0.005],
          doppler2XRs: [5644.27, 5644.27, 5644.27],
          elevationBiases: [1.23, 1.23, 1.23],
          elevationRates: [-0.074, -0.074, -0.074],
          elevations: [70.85, 70.85, 70.85],
          idAttitudeSet: '99a0de63-b38f-4d81-b057',
          idStateVector: '99a0de63-b38f-4d81-b057',
          integrationAngles: [8.594, 8.594, 8.594],
          kappa: 103.04,
          peakAmplitudes: [33.1, 33.1, 33.1],
          polarizations: ['H', 'L', 'V'],
          projAngVels: [0.166, 0.166, 0.166],
          pulseBandwidth: 24094.12,
          rangeAccels: [0.12, 0.01, 0.2],
          rangeBiases: [1.23, 1.23, 1.23],
          rangeRates: [0.317, 0.317, 0.317],
          ranges: [877.938, 877.938, 877.938],
          rcsErrorEsts: [0.01, 0.003, 0.001],
          rcsValues: [12.34, 26.11, 43.21],
          rspaces: [0.006, 0.006, 0.006],
          spectralWidths: [23.45, 20.57, 12.21],
          tovs: ['2018-01-01T16:00:00.888456Z', '2018-01-01T16:00:00.888456Z', '2018-01-01T16:00:00.888456Z'],
          xaccel: [-0.075, -0.74, -0.4],
          xpos: [-1118.577381, -1118.577381, -1118.577381],
          xspaces: [0.006, 0.006, 0.006],
          xvel: [-4.25242784, -4.25242784, -4.25242784],
          yaccel: [-0.007, 0.003, 0.1],
          ypos: [3026.231084, 3026.231084, 3026.231084],
          yvel: [5.291107434, 5.291107434, 5.291107434],
          zaccel: [0.1, 0.2, 0.3],
          zpos: [6167.831808, 6167.831808, 6167.831808],
          zvel: [-3.356493869, -3.356493869, -3.356493869],
        },
      ],
      referenceFrame: 'J2000',
      satelliteName: 'TITAN 3C TRANSTAGE R/B',
      satNo: 101,
      senalt: 1.1,
      senlat: 45.1,
      senlon: 179.1,
      senReferenceFrame: 'J2000',
      sensorAsId: '026dd511-8ba5-47d3-9909-836149f87686',
      senvelx: 1.1,
      senvely: 1.1,
      senvelz: 1.1,
      senx: 1.1,
      seny: 1.1,
      senz: 1.1,
      softwareVersion: 'GSV99/17-1',
      solarMag: -26.91,
      solarPhaseAngleBrightnessChangeDetected: true,
      spectralFilters: ['Keyword1', 'Keyword2'],
      starCatName: 'SSTRC5',
      tags: ['TAG1', 'TAG2'],
      transactionId: 'TRANSACTION-ID',
      uct: true,
      validCalibrations: 'BOTH',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.soiobservationset.list({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.soiobservationset.list({
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.soiobservationset.count({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.soiobservationset.count({
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.soiobservationset.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          numObs: 1,
          source: 'Bluestaq',
          startTime: '2018-01-01T16:00:00.123456Z',
          type: 'OPTICAL',
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
    const response = await client.soiobservationset.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          numObs: 1,
          source: 'Bluestaq',
          startTime: '2018-01-01T16:00:00.123456Z',
          type: 'OPTICAL',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          binningHoriz: 2,
          binningVert: 2,
          brightnessVarianceChangeDetected: true,
          calibrations: [
            {
              calBgIntensity: 1.1,
              calExtinctionCoeff: 0.2,
              calExtinctionCoeffMaxUnc: 0.19708838,
              calExtinctionCoeffUnc: 0.06474939,
              calNumCorrelatedStars: 1,
              calNumDetectedStars: 1,
              calSkyBg: 30086.25,
              calSpectralFilterSolarMag: 19.23664587,
              calTime: '2023-01-02T16:00:00.123Z',
              calType: 'PRE',
              calZeroPoint: 25.15682157,
            },
          ],
          calibrationType: 'ALL SKY',
          changeConf: 'MEDIUM',
          changeDetected: true,
          collectionDensityConf: 'MEDIUM',
          collectionId: 'b5133288-ab63-4b15-81f6-c7eec0cdb0c0',
          collectionMode: 'RATE TRACK',
          corrQuality: 0.327,
          endTime: '2018-01-01T16:00:00.123456Z',
          gain: 234.2,
          idElset: 'REF-ELSET-ID',
          idSensor: 'SENSOR-ID',
          losDeclinationEnd: 1.1,
          losDeclinationStart: 1.1,
          msgCreateDate: '2022-07-07T16:00:00.123Z',
          numSpectralFilters: 10,
          opticalSOIObservationList: [
            {
              obStartTime: '2018-01-01T16:00:00.888456Z',
              currentSpectralFilterNum: 0,
              declinations: [-0.45, -0.45, -0.45],
              expDuration: 0.455,
              extinctionCoeffs: [0.32, 0.32, 0.32],
              extinctionCoeffsUnc: [0.06, 0.06, 0.06],
              intensities: [1.1, 1.1, 1.1],
              intensityTimes: [
                '2018-01-01T16:00:00.888456Z',
                '2018-01-01T16:00:00.898456Z',
                '2018-01-01T16:00:00.998456Z',
              ],
              localSkyBgs: [100625.375, 100625.375, 100625.375],
              localSkyBgsUnc: [0.065, 0.065, 0.065],
              numCorrelatedStars: [3, 3, 3],
              numDetectedStars: [6, 6, 6],
              percentSats: [0.1, 0.2, 1],
              raRates: [0, 0, 0],
              ras: [107.4, 107.4, 107.4],
              skyBgs: [100625.375, 100625.375, 100625.375],
              zeroPoints: [24.711, 24.711, 24.711],
            },
          ],
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          origSensorId: 'ORIGSENSOR-ID',
          percentSatThreshold: 0.1,
          periodicityChangeDetected: true,
          periodicityDetectionConf: 'MEDIUM',
          periodicitySamplingConf: 'MEDIUM',
          pixelArrayHeight: 32,
          pixelArrayWidth: 32,
          pixelMax: 16383,
          pixelMin: 0,
          pointingAngleAzEnd: 1.1,
          pointingAngleAzStart: 1.1,
          pointingAngleElEnd: 1.1,
          pointingAngleElStart: 1.1,
          polarAngleEnd: 1.1,
          polarAngleStart: 1.1,
          radarSOIObservationList: [
            {
              obStartTime: '2018-01-01T16:00:00.888456Z',
              aspectAngles: [4.278, 4.278, 4.278],
              azimuthBiases: [45.23, 45.23, 45.23],
              azimuthRates: [-1.481, -1.481, -1.481],
              azimuths: [278.27, 278.27, 278.27],
              beta: -89.97,
              centerFrequency: 160047.0625,
              crossRangeRes: [11.301, 11.301, 11.301],
              deltaTimes: [0.005, 0.005, 0.005],
              doppler2XRs: [5644.27, 5644.27, 5644.27],
              elevationBiases: [1.23, 1.23, 1.23],
              elevationRates: [-0.074, -0.074, -0.074],
              elevations: [70.85, 70.85, 70.85],
              idAttitudeSet: '99a0de63-b38f-4d81-b057',
              idStateVector: '99a0de63-b38f-4d81-b057',
              integrationAngles: [8.594, 8.594, 8.594],
              kappa: 103.04,
              peakAmplitudes: [33.1, 33.1, 33.1],
              polarizations: ['H', 'L', 'V'],
              projAngVels: [0.166, 0.166, 0.166],
              pulseBandwidth: 24094.12,
              rangeAccels: [0.12, 0.01, 0.2],
              rangeBiases: [1.23, 1.23, 1.23],
              rangeRates: [0.317, 0.317, 0.317],
              ranges: [877.938, 877.938, 877.938],
              rcsErrorEsts: [0.01, 0.003, 0.001],
              rcsValues: [12.34, 26.11, 43.21],
              rspaces: [0.006, 0.006, 0.006],
              spectralWidths: [23.45, 20.57, 12.21],
              tovs: [
                '2018-01-01T16:00:00.888456Z',
                '2018-01-01T16:00:00.888456Z',
                '2018-01-01T16:00:00.888456Z',
              ],
              xaccel: [-0.075, -0.74, -0.4],
              xpos: [-1118.577381, -1118.577381, -1118.577381],
              xspaces: [0.006, 0.006, 0.006],
              xvel: [-4.25242784, -4.25242784, -4.25242784],
              yaccel: [-0.007, 0.003, 0.1],
              ypos: [3026.231084, 3026.231084, 3026.231084],
              yvel: [5.291107434, 5.291107434, 5.291107434],
              zaccel: [0.1, 0.2, 0.3],
              zpos: [6167.831808, 6167.831808, 6167.831808],
              zvel: [-3.356493869, -3.356493869, -3.356493869],
            },
          ],
          referenceFrame: 'J2000',
          satelliteName: 'TITAN 3C TRANSTAGE R/B',
          satNo: 101,
          senalt: 1.1,
          senlat: 45.1,
          senlon: 179.1,
          senReferenceFrame: 'J2000',
          sensorAsId: '026dd511-8ba5-47d3-9909-836149f87686',
          senvelx: 1.1,
          senvely: 1.1,
          senvelz: 1.1,
          senx: 1.1,
          seny: 1.1,
          senz: 1.1,
          softwareVersion: 'GSV99/17-1',
          solarMag: -26.91,
          solarPhaseAngleBrightnessChangeDetected: true,
          spectralFilters: ['Keyword1', 'Keyword2'],
          starCatName: 'SSTRC5',
          tags: ['TAG1', 'TAG2'],
          transactionId: 'TRANSACTION-ID',
          uct: true,
          validCalibrations: 'BOTH',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.soiobservationset.get('id');
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
      client.soiobservationset.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.soiobservationset.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.soiobservationset.tuple({
      columns: 'columns',
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

  test('tuple: required and optional params', async () => {
    const response = await client.soiobservationset.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.soiobservationset.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          numObs: 1,
          source: 'Bluestaq',
          startTime: '2018-01-01T16:00:00.123456Z',
          type: 'OPTICAL',
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

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.soiobservationset.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          numObs: 1,
          source: 'Bluestaq',
          startTime: '2018-01-01T16:00:00.123456Z',
          type: 'OPTICAL',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          binningHoriz: 2,
          binningVert: 2,
          brightnessVarianceChangeDetected: true,
          calibrations: [
            {
              calBgIntensity: 1.1,
              calExtinctionCoeff: 0.2,
              calExtinctionCoeffMaxUnc: 0.19708838,
              calExtinctionCoeffUnc: 0.06474939,
              calNumCorrelatedStars: 1,
              calNumDetectedStars: 1,
              calSkyBg: 30086.25,
              calSpectralFilterSolarMag: 19.23664587,
              calTime: '2023-01-02T16:00:00.123Z',
              calType: 'PRE',
              calZeroPoint: 25.15682157,
            },
          ],
          calibrationType: 'ALL SKY',
          changeConf: 'MEDIUM',
          changeDetected: true,
          collectionDensityConf: 'MEDIUM',
          collectionId: 'b5133288-ab63-4b15-81f6-c7eec0cdb0c0',
          collectionMode: 'RATE TRACK',
          corrQuality: 0.327,
          endTime: '2018-01-01T16:00:00.123456Z',
          gain: 234.2,
          idElset: 'REF-ELSET-ID',
          idSensor: 'SENSOR-ID',
          losDeclinationEnd: 1.1,
          losDeclinationStart: 1.1,
          msgCreateDate: '2022-07-07T16:00:00.123Z',
          numSpectralFilters: 10,
          opticalSOIObservationList: [
            {
              obStartTime: '2018-01-01T16:00:00.888456Z',
              currentSpectralFilterNum: 0,
              declinations: [-0.45, -0.45, -0.45],
              expDuration: 0.455,
              extinctionCoeffs: [0.32, 0.32, 0.32],
              extinctionCoeffsUnc: [0.06, 0.06, 0.06],
              intensities: [1.1, 1.1, 1.1],
              intensityTimes: [
                '2018-01-01T16:00:00.888456Z',
                '2018-01-01T16:00:00.898456Z',
                '2018-01-01T16:00:00.998456Z',
              ],
              localSkyBgs: [100625.375, 100625.375, 100625.375],
              localSkyBgsUnc: [0.065, 0.065, 0.065],
              numCorrelatedStars: [3, 3, 3],
              numDetectedStars: [6, 6, 6],
              percentSats: [0.1, 0.2, 1],
              raRates: [0, 0, 0],
              ras: [107.4, 107.4, 107.4],
              skyBgs: [100625.375, 100625.375, 100625.375],
              zeroPoints: [24.711, 24.711, 24.711],
            },
          ],
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          origSensorId: 'ORIGSENSOR-ID',
          percentSatThreshold: 0.1,
          periodicityChangeDetected: true,
          periodicityDetectionConf: 'MEDIUM',
          periodicitySamplingConf: 'MEDIUM',
          pixelArrayHeight: 32,
          pixelArrayWidth: 32,
          pixelMax: 16383,
          pixelMin: 0,
          pointingAngleAzEnd: 1.1,
          pointingAngleAzStart: 1.1,
          pointingAngleElEnd: 1.1,
          pointingAngleElStart: 1.1,
          polarAngleEnd: 1.1,
          polarAngleStart: 1.1,
          radarSOIObservationList: [
            {
              obStartTime: '2018-01-01T16:00:00.888456Z',
              aspectAngles: [4.278, 4.278, 4.278],
              azimuthBiases: [45.23, 45.23, 45.23],
              azimuthRates: [-1.481, -1.481, -1.481],
              azimuths: [278.27, 278.27, 278.27],
              beta: -89.97,
              centerFrequency: 160047.0625,
              crossRangeRes: [11.301, 11.301, 11.301],
              deltaTimes: [0.005, 0.005, 0.005],
              doppler2XRs: [5644.27, 5644.27, 5644.27],
              elevationBiases: [1.23, 1.23, 1.23],
              elevationRates: [-0.074, -0.074, -0.074],
              elevations: [70.85, 70.85, 70.85],
              idAttitudeSet: '99a0de63-b38f-4d81-b057',
              idStateVector: '99a0de63-b38f-4d81-b057',
              integrationAngles: [8.594, 8.594, 8.594],
              kappa: 103.04,
              peakAmplitudes: [33.1, 33.1, 33.1],
              polarizations: ['H', 'L', 'V'],
              projAngVels: [0.166, 0.166, 0.166],
              pulseBandwidth: 24094.12,
              rangeAccels: [0.12, 0.01, 0.2],
              rangeBiases: [1.23, 1.23, 1.23],
              rangeRates: [0.317, 0.317, 0.317],
              ranges: [877.938, 877.938, 877.938],
              rcsErrorEsts: [0.01, 0.003, 0.001],
              rcsValues: [12.34, 26.11, 43.21],
              rspaces: [0.006, 0.006, 0.006],
              spectralWidths: [23.45, 20.57, 12.21],
              tovs: [
                '2018-01-01T16:00:00.888456Z',
                '2018-01-01T16:00:00.888456Z',
                '2018-01-01T16:00:00.888456Z',
              ],
              xaccel: [-0.075, -0.74, -0.4],
              xpos: [-1118.577381, -1118.577381, -1118.577381],
              xspaces: [0.006, 0.006, 0.006],
              xvel: [-4.25242784, -4.25242784, -4.25242784],
              yaccel: [-0.007, 0.003, 0.1],
              ypos: [3026.231084, 3026.231084, 3026.231084],
              yvel: [5.291107434, 5.291107434, 5.291107434],
              zaccel: [0.1, 0.2, 0.3],
              zpos: [6167.831808, 6167.831808, 6167.831808],
              zvel: [-3.356493869, -3.356493869, -3.356493869],
            },
          ],
          referenceFrame: 'J2000',
          satelliteName: 'TITAN 3C TRANSTAGE R/B',
          satNo: 101,
          senalt: 1.1,
          senlat: 45.1,
          senlon: 179.1,
          senReferenceFrame: 'J2000',
          sensorAsId: '026dd511-8ba5-47d3-9909-836149f87686',
          senvelx: 1.1,
          senvely: 1.1,
          senvelz: 1.1,
          senx: 1.1,
          seny: 1.1,
          senz: 1.1,
          softwareVersion: 'GSV99/17-1',
          solarMag: -26.91,
          solarPhaseAngleBrightnessChangeDetected: true,
          spectralFilters: ['Keyword1', 'Keyword2'],
          starCatName: 'SSTRC5',
          tags: ['TAG1', 'TAG2'],
          transactionId: 'TRANSACTION-ID',
          uct: true,
          validCalibrations: 'BOTH',
        },
      ],
    });
  });
});
