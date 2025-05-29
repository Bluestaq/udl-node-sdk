// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sensor', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sensor.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      sensorName: 'SENSOR_NAME',
      source: 'some.user',
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
    const response = await client.sensor.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      sensorName: 'SENSOR_NAME',
      source: 'some.user',
      active: true,
      afId: 'AF-ID',
      asrType: 'SENSOR_TYPE',
      dataControl: 'observations',
      entity: {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'Example name',
        source: 'Bluestaq',
        type: 'ONORBIT',
        countryCode: 'US',
        idEntity: 'ENTITY-ID',
        idLocation: 'LOCATION-ID',
        idOnOrbit: 'ONORBIT-ID',
        idOperatingUnit: 'OPERATINGUNIT-ID',
        location: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          name: 'Example location',
          source: 'Bluestaq',
          altitude: 10.23,
          countryCode: 'US',
          idLocation: 'LOCATION-ID',
          lat: 45.23,
          lon: 179.1,
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        onOrbit: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          satNo: 1,
          source: 'Bluestaq',
          altName: 'Alternate Name',
          category: 'Lunar',
          commonName: 'Example common name',
          constellation: 'Big Dipper',
          countryCode: 'US',
          decayDate: '2018-01-01T16:00:00.123Z',
          idOnOrbit: 'ONORBIT-ID',
          intlDes: '2021123ABC',
          launchDate: '2018-01-01',
          launchSiteId: 'LAUNCHSITE-ID',
          lifetimeYears: 10,
          missionNumber: 'Expedition 1',
          objectType: 'PAYLOAD',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        origin: 'THIRD_PARTY_DATASOURCE',
        ownerType: 'Commercial',
        taskable: false,
        terrestrialId: 'TERRESTRIAL-ID',
        urls: ['URL1', 'URL2'],
      },
      idEntity: 'ENTITY-ID',
      idSensor: 'SENSOR-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      sensorcharacteristics: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSensor: 'SENSOR-ID',
          source: 'Bluestaq',
          id: 'SENSORCHARACTERISTICS-ID',
          acceptSampleRanges: [3.01, 3.02],
          analogToDigitalBitSize: 2,
          aperture: 2.23,
          asrScanRate: 20.23,
          atmosReceiverLoss: 0.5,
          atmosTransmissionLoss: 0.5,
          avgAtmosSeeingConditions: 10.23,
          azAngs: [135.1, 45.2],
          azimuthRate: 0.3334,
          backgroundSkyRadiance: 10.23,
          backgroundSkyVisMag: 10.23,
          band: 'BAND',
          bandwidth: 100.23,
          beamOrder: ['vb1', 'ob1'],
          beamQty: 2,
          boresight: 20.23,
          boresightOffAngle: 20.23,
          centerWavelength: 4.56,
          collapsingLoss: 1.23,
          critShear: 47.1,
          darkCurrent: 12.3,
          delayGates: [690.2, 690.3],
          description: 'PROFILER DATA - PROFILE/SOUNDER DATA FROM PRIMARY WINDS SOURCE',
          detectSNR: 2.1,
          dutyCycle: 0.5,
          earthLimbExclHgt: 20.23,
          elAngs: [75.3, 75.4],
          elevationRateGeolm: 0.9555,
          equipmentType: 'PS',
          fanBeamWidth: 3.1,
          fft: 4096,
          fgpCrit: 5,
          filterMismatchFactor: 10.23,
          fNum: 1.23,
          focalPoint: 20.23,
          hFOV: 20.23,
          hResPixels: 1000,
          k: 1.4,
          leftClockAngle: 20.23,
          leftGeoBeltLimit: 20.23,
          location: 'KENNEDY SPACE CENTER, FL',
          loopGain: 150.1,
          lunarExclAngle: 45.2,
          magDec: 45.23,
          magnitudeLimit: 23.5,
          maxDeviationAngle: 20.23,
          maxIntegrationTime: 1.1,
          maxObservableRange: 20.23,
          maxRangeLimit: 4972.1,
          maxWavelength: 7.89,
          minIntegrationTime: 0.3,
          minRangeLimit: 165.1,
          minSignalNoiseRatio: 31.5,
          minWavelength: 1.23,
          negativeRangeRateLimit: -19.25,
          noiseFigure: 10.23,
          nonCoherentIntegratedPulses: 2,
          numIntegratedPulses: 10,
          numIntegrationFrames: 2,
          numOpticalIntegrationModes: 2,
          numWaveforms: 2,
          opticalIntegrationAngularRates: [15.1, 0.1],
          opticalIntegrationFrames: [2.1, 3.1],
          opticalIntegrationPixelBinnings: [2.1, 1.1],
          opticalIntegrationSNRs: [6.1, 6.1],
          opticalIntegrationTimes: [0.3, 1],
          opticalTransmission: 0.5,
          patternAbsorptionLoss: 1.23,
          patternScanLoss: 1.23,
          peakPower: 5000000.1,
          pixelInstantaneousFOV: 10.23,
          pixelWellDepth: 12,
          positiveRangeRateLimit: 19.25,
          prf: 20.23,
          probDetectSNR: 0.5,
          probFalseAlarm: 0.5,
          pulseRepPeriods: [153.8, 153.9],
          quantumEff: 0.5,
          radarFrequency: 45300000000.1,
          radarMessageFormat: 'DATA_FORMAT',
          radarMUR: 20.23,
          radarPulseWidths: [20.23, 20.33],
          radioFrequency: 20.23,
          radomeLoss: 1.23,
          rangeGates: [51, 52],
          rangeSpacings: [690.2, 690.3],
          readNoise: 12,
          receiveGain: 10.2,
          receiveHorizBeamWidth: 75.3,
          receiveLoss: 1.23,
          receiveVertBeamWidth: 75.4,
          refTemp: 3.5,
          reqRecords: [0, 1],
          rightClockAngle: 20.23,
          rightGeoBeltLimit: 20.23,
          runMeanCodes: [0, 5],
          signalProcessingLoss: 1.23,
          siteCode: '07',
          solarExclAngle: 50.5,
          specAvgSpectraNums: [3, 4],
          systemNoiseTemperature: 3.5,
          taskableRange: 20.23,
          tempMedFiltCodes: [3, 4],
          testNumber: '02022',
          totRecNums: [5, 2],
          towerHeight: 20.23,
          trackAngle: 0.043,
          trackSNR: 15.1,
          transmitGain: 32.1,
          transmitHorizBeamWidth: 135.1,
          transmitLoss: 7.1,
          transmitPower: 190000.1,
          transmitVertBeamWidth: 45.2,
          trueNorthCorrector: 10,
          trueTilt: 20.23,
          twilightAngle: 7.5,
          vertBeamFlag: false,
          vertGateSpacings: [149.1, 149.2],
          vertGateWidths: [149.1, 149.2],
          vFOV: 20.23,
          vResPixels: 1000,
          waveformBandwidths: [0.25, 0.25],
          waveformLoopGains: [150.1, 155.1],
          waveformMaxRanges: [2000.1, 2000.1],
          waveformMinRanges: [150.1, 150.1],
          waveformPulseWidths: [100.1, 200.1],
          z1MaxRange: 50.23,
          z1MinRange: 20.23,
          z2MaxRange: 50.23,
          z2MinRange: 20.23,
        },
      ],
      sensorlimitsCollection: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          idSensor: 'SENSORLIMITS-ID',
          idSensorLimits: 'SENSORLIMITS-ID',
          lowerLeftAzimuthLimit: 1.23,
          lowerLeftElevationLimit: 1.23,
          lowerRightAzimuthLimit: 1.23,
          lowerRightElevationLimit: 1.23,
          upperLeftAzimuthLimit: 1.23,
          upperLeftElevationLimit: 1.23,
          upperRightAzimuthLimit: 1.23,
          upperRightElevationLimit: 1.23,
        },
      ],
      sensorNumber: 1234,
      sensorObservationType: { id: '3', type: '5' },
      sensorStats: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSensor: 'idSensor',
          source: 'Bluestaq',
          id: 'SENSORSTATS-ID',
          lastObTime: '2021-01-01T01:01:01.123456Z',
        },
      ],
      sensorType: { id: 12344411, type: 'Space Borne' },
      shortName: 'SNR-1',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.sensor.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      sensorName: 'SENSOR_NAME',
      source: 'some.user',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.sensor.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      sensorName: 'SENSOR_NAME',
      source: 'some.user',
      active: true,
      afId: 'AF-ID',
      asrType: 'SENSOR_TYPE',
      dataControl: 'observations',
      entity: {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'Example name',
        source: 'Bluestaq',
        type: 'ONORBIT',
        countryCode: 'US',
        idEntity: 'ENTITY-ID',
        idLocation: 'LOCATION-ID',
        idOnOrbit: 'ONORBIT-ID',
        idOperatingUnit: 'OPERATINGUNIT-ID',
        location: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          name: 'Example location',
          source: 'Bluestaq',
          altitude: 10.23,
          countryCode: 'US',
          idLocation: 'LOCATION-ID',
          lat: 45.23,
          lon: 179.1,
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        onOrbit: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          satNo: 1,
          source: 'Bluestaq',
          altName: 'Alternate Name',
          category: 'Lunar',
          commonName: 'Example common name',
          constellation: 'Big Dipper',
          countryCode: 'US',
          decayDate: '2018-01-01T16:00:00.123Z',
          idOnOrbit: 'ONORBIT-ID',
          intlDes: '2021123ABC',
          launchDate: '2018-01-01',
          launchSiteId: 'LAUNCHSITE-ID',
          lifetimeYears: 10,
          missionNumber: 'Expedition 1',
          objectType: 'PAYLOAD',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        origin: 'THIRD_PARTY_DATASOURCE',
        ownerType: 'Commercial',
        taskable: false,
        terrestrialId: 'TERRESTRIAL-ID',
        urls: ['URL1', 'URL2'],
      },
      idEntity: 'ENTITY-ID',
      idSensor: 'SENSOR-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      sensorcharacteristics: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSensor: 'SENSOR-ID',
          source: 'Bluestaq',
          id: 'SENSORCHARACTERISTICS-ID',
          acceptSampleRanges: [3.01, 3.02],
          analogToDigitalBitSize: 2,
          aperture: 2.23,
          asrScanRate: 20.23,
          atmosReceiverLoss: 0.5,
          atmosTransmissionLoss: 0.5,
          avgAtmosSeeingConditions: 10.23,
          azAngs: [135.1, 45.2],
          azimuthRate: 0.3334,
          backgroundSkyRadiance: 10.23,
          backgroundSkyVisMag: 10.23,
          band: 'BAND',
          bandwidth: 100.23,
          beamOrder: ['vb1', 'ob1'],
          beamQty: 2,
          boresight: 20.23,
          boresightOffAngle: 20.23,
          centerWavelength: 4.56,
          collapsingLoss: 1.23,
          critShear: 47.1,
          darkCurrent: 12.3,
          delayGates: [690.2, 690.3],
          description: 'PROFILER DATA - PROFILE/SOUNDER DATA FROM PRIMARY WINDS SOURCE',
          detectSNR: 2.1,
          dutyCycle: 0.5,
          earthLimbExclHgt: 20.23,
          elAngs: [75.3, 75.4],
          elevationRateGeolm: 0.9555,
          equipmentType: 'PS',
          fanBeamWidth: 3.1,
          fft: 4096,
          fgpCrit: 5,
          filterMismatchFactor: 10.23,
          fNum: 1.23,
          focalPoint: 20.23,
          hFOV: 20.23,
          hResPixels: 1000,
          k: 1.4,
          leftClockAngle: 20.23,
          leftGeoBeltLimit: 20.23,
          location: 'KENNEDY SPACE CENTER, FL',
          loopGain: 150.1,
          lunarExclAngle: 45.2,
          magDec: 45.23,
          magnitudeLimit: 23.5,
          maxDeviationAngle: 20.23,
          maxIntegrationTime: 1.1,
          maxObservableRange: 20.23,
          maxRangeLimit: 4972.1,
          maxWavelength: 7.89,
          minIntegrationTime: 0.3,
          minRangeLimit: 165.1,
          minSignalNoiseRatio: 31.5,
          minWavelength: 1.23,
          negativeRangeRateLimit: -19.25,
          noiseFigure: 10.23,
          nonCoherentIntegratedPulses: 2,
          numIntegratedPulses: 10,
          numIntegrationFrames: 2,
          numOpticalIntegrationModes: 2,
          numWaveforms: 2,
          opticalIntegrationAngularRates: [15.1, 0.1],
          opticalIntegrationFrames: [2.1, 3.1],
          opticalIntegrationPixelBinnings: [2.1, 1.1],
          opticalIntegrationSNRs: [6.1, 6.1],
          opticalIntegrationTimes: [0.3, 1],
          opticalTransmission: 0.5,
          patternAbsorptionLoss: 1.23,
          patternScanLoss: 1.23,
          peakPower: 5000000.1,
          pixelInstantaneousFOV: 10.23,
          pixelWellDepth: 12,
          positiveRangeRateLimit: 19.25,
          prf: 20.23,
          probDetectSNR: 0.5,
          probFalseAlarm: 0.5,
          pulseRepPeriods: [153.8, 153.9],
          quantumEff: 0.5,
          radarFrequency: 45300000000.1,
          radarMessageFormat: 'DATA_FORMAT',
          radarMUR: 20.23,
          radarPulseWidths: [20.23, 20.33],
          radioFrequency: 20.23,
          radomeLoss: 1.23,
          rangeGates: [51, 52],
          rangeSpacings: [690.2, 690.3],
          readNoise: 12,
          receiveGain: 10.2,
          receiveHorizBeamWidth: 75.3,
          receiveLoss: 1.23,
          receiveVertBeamWidth: 75.4,
          refTemp: 3.5,
          reqRecords: [0, 1],
          rightClockAngle: 20.23,
          rightGeoBeltLimit: 20.23,
          runMeanCodes: [0, 5],
          signalProcessingLoss: 1.23,
          siteCode: '07',
          solarExclAngle: 50.5,
          specAvgSpectraNums: [3, 4],
          systemNoiseTemperature: 3.5,
          taskableRange: 20.23,
          tempMedFiltCodes: [3, 4],
          testNumber: '02022',
          totRecNums: [5, 2],
          towerHeight: 20.23,
          trackAngle: 0.043,
          trackSNR: 15.1,
          transmitGain: 32.1,
          transmitHorizBeamWidth: 135.1,
          transmitLoss: 7.1,
          transmitPower: 190000.1,
          transmitVertBeamWidth: 45.2,
          trueNorthCorrector: 10,
          trueTilt: 20.23,
          twilightAngle: 7.5,
          vertBeamFlag: false,
          vertGateSpacings: [149.1, 149.2],
          vertGateWidths: [149.1, 149.2],
          vFOV: 20.23,
          vResPixels: 1000,
          waveformBandwidths: [0.25, 0.25],
          waveformLoopGains: [150.1, 155.1],
          waveformMaxRanges: [2000.1, 2000.1],
          waveformMinRanges: [150.1, 150.1],
          waveformPulseWidths: [100.1, 200.1],
          z1MaxRange: 50.23,
          z1MinRange: 20.23,
          z2MaxRange: 50.23,
          z2MinRange: 20.23,
        },
      ],
      sensorlimitsCollection: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          idSensor: 'SENSORLIMITS-ID',
          idSensorLimits: 'SENSORLIMITS-ID',
          lowerLeftAzimuthLimit: 1.23,
          lowerLeftElevationLimit: 1.23,
          lowerRightAzimuthLimit: 1.23,
          lowerRightElevationLimit: 1.23,
          upperLeftAzimuthLimit: 1.23,
          upperLeftElevationLimit: 1.23,
          upperRightAzimuthLimit: 1.23,
          upperRightElevationLimit: 1.23,
        },
      ],
      sensorNumber: 1234,
      sensorObservationType: { id: '3', type: '5' },
      sensorStats: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSensor: 'idSensor',
          source: 'Bluestaq',
          id: 'SENSORSTATS-ID',
          lastObTime: '2021-01-01T01:01:01.123456Z',
        },
      ],
      sensorType: { id: 12344411, type: 'Space Borne' },
      shortName: 'SNR-1',
    });
  });

  test('list', async () => {
    const responsePromise = client.sensor.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sensor.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sensor.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.sensor.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sensor.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.sensor.get('id');
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
      client.sensor.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.sensor.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.sensor.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.sensor.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });
});
