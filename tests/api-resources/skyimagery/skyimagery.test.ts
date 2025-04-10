// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource skyimagery', () => {
  test('list: only required params', async () => {
    const responsePromise = client.skyimagery.list({ expStartTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.skyimagery.list({ expStartTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.skyimagery.count({ expStartTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.skyimagery.count({ expStartTime: '2019-12-27T18:11:19.117Z' });
  });

  test('fileGet: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.skyimagery.fileGet('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.skyimagery.get('id');
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
    await expect(client.skyimagery.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.skyimagery.queryhelp();
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
    await expect(client.skyimagery.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.skyimagery.tuple({
      columns: 'columns',
      expStartTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.skyimagery.tuple({
      columns: 'columns',
      expStartTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('uploadZip: only required params', async () => {
    const responsePromise = client.skyimagery.uploadZip({
      classificationMarking: 'U',
      dataMode: 'TEST',
      expStartTime: '2021-01-01T01:01:01.123456Z',
      imageType: 'imageType',
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

  test('uploadZip: required and optional params', async () => {
    const response = await client.skyimagery.uploadZip({
      classificationMarking: 'U',
      dataMode: 'TEST',
      expStartTime: '2021-01-01T01:01:01.123456Z',
      imageType: 'imageType',
      source: 'Bluestaq',
      id: 'SKYIMAGERY-ID',
      annotationKey: 'annotationKey',
      calibrationKey: 'calibrationKey',
      description: 'description',
      eoObservations: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          id: 'EOOBSERVATION-ID',
          azimuth: 1.1,
          azimuthBias: 1.1,
          azimuthRate: 1.1,
          azimuthUnc: 1.1,
          bgIntensity: 1.1,
          collectMethod: 'AUTOTRACK',
          corrQuality: 1.1,
          declination: 1.1,
          declinationBias: 1.1,
          declinationRate: 1.1,
          declinationUnc: 1.1,
          descriptor: 'PROVIDED_DATA1',
          elevation: 1.1,
          elevationBias: 1.1,
          elevationRate: 1.1,
          elevationUnc: 1.1,
          eoobservationDetails: {
            acalCrPixX: 123.2,
            acalCrPixY: 123.2,
            acalCrValX: 123.2,
            acalCrValY: 123.2,
            acalNumStars: 123,
            backgroundSignal: 4134.1,
            backgroundSignalUnc: 123.2,
            binningHoriz: 12,
            binningVert: 14,
            ccdObjPosX: 123.3,
            ccdObjPosY: 321.4,
            ccdObjWidth: 133.2,
            ccdTemp: 123.4,
            centroidColumn: 0.5,
            centroidRow: 0.1,
            classificationMarking: 'U',
            colorCoeffs: [1.1, 2.1, 3.1],
            columnVariance: 0.1,
            currentNeutralDensityFilterNum: 3,
            currentSpectralFilterNum: 23,
            dataMode: 'TEST',
            declinationCov: 123.2,
            distFromStreakCenter: [-127.153, -126.153, -125.153],
            does: 123.2,
            extinctionCoeffs: [1.1, 2.1, 3.1],
            extinctionCoeffsUnc: [1.1, 2.1, 3.1],
            gain: 234.2,
            idEOObservation: 'EOOBSERVATION-ID',
            ifov: 0.2,
            magInstrumental: 123.3,
            magInstrumentalUnc: 123.3,
            neutralDensityFilterNames: ['numNeutralDensityFilters1', 'numNeutralDensityFilters2'],
            neutralDensityFilterTransmissions: [1.1, 2.1, 3.1],
            neutralDensityFilterTransmissionsUnc: [1.1, 2.1, 3.1],
            numCatalogStars: 123,
            numCorrelatedStars: 123,
            numDetectedStars: 123,
            numNeutralDensityFilters: 12,
            numSpectralFilters: 10,
            objSunRange: 123.2,
            obTime: '2018-01-01T16:00:00.123456Z',
            opticalCrossSection: 123.3,
            opticalCrossSectionUnc: 123.3,
            pcalNumStars: 23,
            peakApertureCount: 123.2,
            peakBackgroundCount: 321,
            phaseAngBisect: 123.2,
            pixelArrayHeight: 23,
            pixelArrayWidth: 12,
            pixelMax: 256,
            pixelMin: 12,
            predictedAzimuth: 10.1,
            predictedDeclination: 10.1,
            predictedDeclinationUnc: 123.2,
            predictedElevation: 10.1,
            predictedRa: 10.1,
            predictedRaUnc: 123.2,
            raCov: 123.2,
            raDeclinationCov: 123.2,
            rowColCov: 0.01,
            rowVariance: 0.1,
            snrEst: 13.4,
            solarDiskFrac: 123.2,
            source: 'Bluestaq',
            spectralFilters: ['Keyword1', 'Keyword2'],
            spectralFilterSolarMag: [1.1, 2.1, 3.1],
            spectralZMFL: [1.1, 2.1, 3.1],
            sunAzimuth: 10.1,
            sunElevation: 10.1,
            sunStatePosX: 123.3,
            sunStatePosY: 123.3,
            sunStatePosZ: 123.3,
            sunStateVelX: 123.3,
            sunStateVelY: 123.3,
            sunStateVelZ: 123.3,
            surfBrightness: [21.01, 21.382, 21.725],
            surfBrightnessUnc: [0.165, 0.165, 0.165],
            timesUnc: 13.1,
            toes: 123.2,
            zeroPoints: [1.1, 2.1, 3.1],
            zeroPointsUnc: [1.1, 2.1, 3.1],
          },
          expDuration: 1.1,
          fovCount: 1,
          geoalt: 1.1,
          geolat: 1.1,
          geolon: 1.1,
          georange: 1.1,
          idSensor: 'SENSOR-ID',
          idSkyImagery: 'SKYIMAGERY-ID',
          intensity: 1.1,
          losUnc: 1.1,
          losx: 1.1,
          losxvel: 1.1,
          losy: 1.1,
          losyvel: 1.1,
          losz: 1.1,
          loszvel: 1.1,
          mag: 1.1,
          magNormRange: 1.1,
          magUnc: 1.1,
          netObjSig: 1.1,
          netObjSigUnc: 1.1,
          obPosition: 'FIRST',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          origSensorId: 'ORIGSENSOR-ID',
          penumbra: false,
          primaryExtinction: 1.1,
          primaryExtinctionUnc: 1.1,
          ra: 1.1,
          raBias: 1.1,
          range: 1.1,
          rangeBias: 1.1,
          rangeRate: 1.1,
          rangeRateUnc: 1.1,
          rangeUnc: 1.1,
          raRate: 1.1,
          raUnc: 1.1,
          rawFileURI: 'Example URI',
          referenceFrame: 'J2000',
          satNo: 5,
          senalt: 1.1,
          senlat: 45.1,
          senlon: 179.1,
          senQuat: [0.4492, 0.02, 0.8765, 0.2213],
          senReferenceFrame: 'J2000',
          senvelx: 1.1,
          senvely: 1.1,
          senvelz: 1.1,
          senx: 1.1,
          seny: 1.1,
          senz: 1.1,
          shutterDelay: 1.1,
          skyBkgrnd: 1.1,
          solarDecAngle: 1.1,
          solarEqPhaseAngle: 1.1,
          solarPhaseAngle: 1.1,
          tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
          taskId: 'TASK-ID',
          timingBias: 1.1,
          trackId: 'TRACK-ID',
          transactionId: 'TRANSACTION-ID',
          uct: false,
          umbra: false,
          zeroptd: 1.1,
          zeroPtdUnc: 1.1,
        },
      ],
      expEndTime: '2021-01-01T01:01:01.123456Z',
      filename: 'filename.jpg',
      filesize: 371945,
      frameFOVHeight: 21.23,
      frameFOVWidth: 21.23,
      frameHeightPixels: 1,
      frameWidthPixels: 1,
      idAttitudeSet: 'd039ba29-52f4-4839-8a8f-e85fa416aec5',
      idSensor: '420',
      idSOISet: '531093d0-e9b0-475b-687aeeefefd9',
      imageSetId: 'imageSetId',
      imageSetLength: 9,
      imageSourceInfo: 'imageSourceInfo',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'X15-23452',
      origSensorId: 'origSensorId',
      pixelBitDepth: 1,
      pixelFOVHeight: 321.123,
      pixelFOVWidth: 321.123,
      satNo: 25544,
      senalt: 14.483619321,
      senlat: -33.283048,
      senlon: 149.372549,
      senQuat: [0.03, 0.02, 0.01, 0.012],
      senQuatDot: [0.03, 0.02, 0.01, 0.012],
      senx: 14.52,
      seny: 32.41,
      senz: 376.12,
      sequenceId: 1,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      topLeftStartAz: 146.321,
      topLeftStartEl: 146.321,
      topLeftStopAz: 3.7,
      topLeftStopEl: 34.233,
      transactionId: 'a7bdef1f-5a4f-4716-bee4-7a1e0ec7d35a',
    });
  });
});
