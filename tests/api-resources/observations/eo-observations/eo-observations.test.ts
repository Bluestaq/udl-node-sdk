// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eoObservations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.observations.eoObservations.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      obTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.observations.eoObservations.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      obTime: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      id: 'EOOBSERVATION-ID',
      azimuth: 1.1,
      azimuthBias: 1.1,
      azimuthMeasured: true,
      azimuthRate: 1.1,
      azimuthUnc: 1.1,
      bgIntensity: 1.1,
      collectMethod: 'AUTOTRACK',
      corrQuality: 1.1,
      declination: 1.1,
      declinationBias: 1.1,
      declinationMeasured: true,
      declinationRate: 1.1,
      declinationUnc: 1.1,
      descriptor: 'PROVIDED_DATA1',
      elevation: 1.1,
      elevationBias: 1.1,
      elevationMeasured: true,
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
      fovCountUCT: 2,
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
      raMeasured: true,
      range: 1.1,
      rangeBias: 1.1,
      rangeMeasured: true,
      rangeRate: 1.1,
      rangeRateMeasured: true,
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
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.observations.eoObservations.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.observations.eoObservations.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.observations.eoObservations.list({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.observations.eoObservations.list({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.observations.eoObservations.count({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.observations.eoObservations.count({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.observations.eoObservations.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.observations.eoObservations.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          id: 'EOOBSERVATION-ID',
          azimuth: 1.1,
          azimuthBias: 1.1,
          azimuthMeasured: true,
          azimuthRate: 1.1,
          azimuthUnc: 1.1,
          bgIntensity: 1.1,
          collectMethod: 'AUTOTRACK',
          corrQuality: 1.1,
          declination: 1.1,
          declinationBias: 1.1,
          declinationMeasured: true,
          declinationRate: 1.1,
          declinationUnc: 1.1,
          descriptor: 'PROVIDED_DATA1',
          elevation: 1.1,
          elevationBias: 1.1,
          elevationMeasured: true,
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
          fovCountUCT: 2,
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
          raMeasured: true,
          range: 1.1,
          rangeBias: 1.1,
          rangeMeasured: true,
          rangeRate: 1.1,
          rangeRateMeasured: true,
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
      convertToJ2K: true,
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.observations.eoObservations.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.observations.eoObservations.tuple({
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
    const response = await client.observations.eoObservations.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.observations.eoObservations.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
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

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.observations.eoObservations.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          id: 'EOOBSERVATION-ID',
          azimuth: 1.1,
          azimuthBias: 1.1,
          azimuthMeasured: true,
          azimuthRate: 1.1,
          azimuthUnc: 1.1,
          bgIntensity: 1.1,
          collectMethod: 'AUTOTRACK',
          corrQuality: 1.1,
          declination: 1.1,
          declinationBias: 1.1,
          declinationMeasured: true,
          declinationRate: 1.1,
          declinationUnc: 1.1,
          descriptor: 'PROVIDED_DATA1',
          elevation: 1.1,
          elevationBias: 1.1,
          elevationMeasured: true,
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
          fovCountUCT: 2,
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
          raMeasured: true,
          range: 1.1,
          rangeBias: 1.1,
          rangeMeasured: true,
          rangeRate: 1.1,
          rangeRateMeasured: true,
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
    });
  });
});
