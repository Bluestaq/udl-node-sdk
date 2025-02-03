// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sensor', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sensor.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
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
      dataMode: 'REAL',
      sensorName: 'SENSOR_NAME',
      source: 'some.user',
      active: true,
      afId: 'AF-ID',
      asrType: 'SENSOR_TYPE',
      dataControl: 'observations',
      entity: {
        classificationMarking: 'U',
        dataMode: 'REAL',
        name: 'Example name',
        source: 'Bluestaq',
        type: 'AIRCRAFT',
        countryCode: 'US',
        idEntity: 'ENTITY-ID',
        idLocation: 'LOCATION-ID',
        idOnOrbit: 'ONORBIT-ID',
        idOperatingUnit: 'OPERATINGUNIT-ID',
        location: {
          classificationMarking: 'U',
          dataMode: 'REAL',
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
          dataMode: 'REAL',
          satNo: 1,
          source: 'Bluestaq',
          altName: 'Alternate Name',
          category: 'Unknown',
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
          objectType: 'ROCKET BODY',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        origin: 'THIRD_PARTY_DATASOURCE',
        ownerType: 'Commercial',
        taskable: false,
        urls: ['URL1', 'URL2'],
      },
      idEntity: 'ENTITY-ID',
      idSensor: 'SENSOR-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      sensorcharacteristics: [
        {
          classificationMarking: 'U',
          dataMode: 'REAL',
          idSensor: 'SENSOR-ID',
          source: 'Bluestaq',
          id: 'SENSORCHARACTERISTICS-ID',
          acceptSampleRanges: [3.01, 3.02],
          aperture: 2.23,
          asrScanRate: 20.23,
          azAngs: [135.1, 45.2],
          azimuthRate: 10.23,
          band: 'BAND',
          beamOrder: ['vb1', 'ob1'],
          beamQty: 2,
          boresight: 20.23,
          boresightOffAngle: 20.23,
          critShear: 47.1,
          delayGates: [690.2, 690.3],
          description: 'PROFILER DATA - PROFILE/SOUNDER DATA FROM PRIMARY WINDS SOURCE',
          elAngs: [75.3, 75.4],
          elevationRateGeolm: 10.23,
          equipmentType: 'PS',
          fanBeamWidth: 3.1,
          fft: 4096,
          fgpCrit: 5,
          focalPoint: 20.23,
          hFOV: 20.23,
          hResPixels: 1000,
          k: 1.4,
          leftClockAngle: 20.23,
          leftGeoBeltLimit: 20.23,
          location: 'KENNEDY SPACE CENTER, FL',
          magDec: 45.23,
          magnitudeLimit: 20.23,
          maxDeviationAngle: 20.23,
          maxObservableRange: 20.23,
          maxRangeLimit: 20.23,
          minRangeLimit: 20.23,
          minSignalNoiseRatio: 20.23,
          negativeRangeRateLimit: 20.23,
          numIntegratedPulses: 10,
          positiveRangeRateLimit: 20.23,
          prf: 20.23,
          probFalseAlarm: 0.5,
          pulseRepPeriods: [153.8, 153.9],
          radarFrequency: 20.23,
          radarMessageFormat: 'DATA_FORMAT',
          radarMUR: 20.23,
          radarPulseWidths: [20.23, 20.33],
          radioFrequency: 20.23,
          rangeGates: [51, 52],
          rangeSpacings: [690.2, 690.3],
          reqRecords: [0, 1],
          rightClockAngle: 20.23,
          rightGeoBeltLimit: 20.23,
          runMeanCodes: [0, 5],
          siteCode: '07',
          specAvgSpectraNums: [3, 4],
          systemNoiseTemperature: 3.5,
          taskableRange: 20.23,
          tempMedFiltCodes: [3, 4],
          testNumber: '02022',
          totRecNums: [5, 2],
          towerHeight: 20.23,
          trackAngle: 1.23,
          transmitPower: 20.23,
          trueNorthCorrector: 10,
          trueTilt: 20.23,
          vertBeamFlag: false,
          vertGateSpacings: [149.1, 149.2],
          vertGateWidths: [149.1, 149.2],
          vFOV: 20.23,
          vResPixels: 1000,
          z1MaxRange: 50.23,
          z1MinRange: 20.23,
          z2MaxRange: 50.23,
          z2MinRange: 20.23,
        },
      ],
      sensorlimitsCollection: [
        {
          classificationMarking: 'U',
          dataMode: 'REAL',
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
      sensorObservationType: { id: 'x', type: '5' },
      sensorStats: [
        {
          classificationMarking: 'U',
          dataMode: 'REAL',
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
      dataMode: 'REAL',
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
      dataMode: 'REAL',
      sensorName: 'SENSOR_NAME',
      source: 'some.user',
      active: true,
      afId: 'AF-ID',
      asrType: 'SENSOR_TYPE',
      dataControl: 'observations',
      entity: {
        classificationMarking: 'U',
        dataMode: 'REAL',
        name: 'Example name',
        source: 'Bluestaq',
        type: 'AIRCRAFT',
        countryCode: 'US',
        idEntity: 'ENTITY-ID',
        idLocation: 'LOCATION-ID',
        idOnOrbit: 'ONORBIT-ID',
        idOperatingUnit: 'OPERATINGUNIT-ID',
        location: {
          classificationMarking: 'U',
          dataMode: 'REAL',
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
          dataMode: 'REAL',
          satNo: 1,
          source: 'Bluestaq',
          altName: 'Alternate Name',
          category: 'Unknown',
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
          objectType: 'ROCKET BODY',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        origin: 'THIRD_PARTY_DATASOURCE',
        ownerType: 'Commercial',
        taskable: false,
        urls: ['URL1', 'URL2'],
      },
      idEntity: 'ENTITY-ID',
      idSensor: 'SENSOR-ID',
      origin: 'THIRD_PARTY_DATASOURCE',
      sensorcharacteristics: [
        {
          classificationMarking: 'U',
          dataMode: 'REAL',
          idSensor: 'SENSOR-ID',
          source: 'Bluestaq',
          id: 'SENSORCHARACTERISTICS-ID',
          acceptSampleRanges: [3.01, 3.02],
          aperture: 2.23,
          asrScanRate: 20.23,
          azAngs: [135.1, 45.2],
          azimuthRate: 10.23,
          band: 'BAND',
          beamOrder: ['vb1', 'ob1'],
          beamQty: 2,
          boresight: 20.23,
          boresightOffAngle: 20.23,
          critShear: 47.1,
          delayGates: [690.2, 690.3],
          description: 'PROFILER DATA - PROFILE/SOUNDER DATA FROM PRIMARY WINDS SOURCE',
          elAngs: [75.3, 75.4],
          elevationRateGeolm: 10.23,
          equipmentType: 'PS',
          fanBeamWidth: 3.1,
          fft: 4096,
          fgpCrit: 5,
          focalPoint: 20.23,
          hFOV: 20.23,
          hResPixels: 1000,
          k: 1.4,
          leftClockAngle: 20.23,
          leftGeoBeltLimit: 20.23,
          location: 'KENNEDY SPACE CENTER, FL',
          magDec: 45.23,
          magnitudeLimit: 20.23,
          maxDeviationAngle: 20.23,
          maxObservableRange: 20.23,
          maxRangeLimit: 20.23,
          minRangeLimit: 20.23,
          minSignalNoiseRatio: 20.23,
          negativeRangeRateLimit: 20.23,
          numIntegratedPulses: 10,
          positiveRangeRateLimit: 20.23,
          prf: 20.23,
          probFalseAlarm: 0.5,
          pulseRepPeriods: [153.8, 153.9],
          radarFrequency: 20.23,
          radarMessageFormat: 'DATA_FORMAT',
          radarMUR: 20.23,
          radarPulseWidths: [20.23, 20.33],
          radioFrequency: 20.23,
          rangeGates: [51, 52],
          rangeSpacings: [690.2, 690.3],
          reqRecords: [0, 1],
          rightClockAngle: 20.23,
          rightGeoBeltLimit: 20.23,
          runMeanCodes: [0, 5],
          siteCode: '07',
          specAvgSpectraNums: [3, 4],
          systemNoiseTemperature: 3.5,
          taskableRange: 20.23,
          tempMedFiltCodes: [3, 4],
          testNumber: '02022',
          totRecNums: [5, 2],
          towerHeight: 20.23,
          trackAngle: 1.23,
          transmitPower: 20.23,
          trueNorthCorrector: 10,
          trueTilt: 20.23,
          vertBeamFlag: false,
          vertGateSpacings: [149.1, 149.2],
          vertGateWidths: [149.1, 149.2],
          vFOV: 20.23,
          vResPixels: 1000,
          z1MaxRange: 50.23,
          z1MinRange: 20.23,
          z2MaxRange: 50.23,
          z2MinRange: 20.23,
        },
      ],
      sensorlimitsCollection: [
        {
          classificationMarking: 'U',
          dataMode: 'REAL',
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
      sensorObservationType: { id: 'x', type: '5' },
      sensorStats: [
        {
          classificationMarking: 'U',
          dataMode: 'REAL',
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

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sensor.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sensor.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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

  test('count: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sensor.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sensor.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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

  test('queryhelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sensor.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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
    const response = await client.sensor.tuple({ columns: 'columns' });
  });
});
