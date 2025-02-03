// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orbitdetermination', () => {
  test('create: only required params', async () => {
    const responsePromise = client.orbitdetermination.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      endTime: '2023-08-28T15:20:21.247192Z',
      initialOD: false,
      method: 'BLS',
      source: 'Bluestaq',
      startTime: '2023-08-28T11:20:21.247192Z',
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
    const response = await client.orbitdetermination.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      endTime: '2023-08-28T15:20:21.247192Z',
      initialOD: false,
      method: 'BLS',
      source: 'Bluestaq',
      startTime: '2023-08-28T11:20:21.247192Z',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      acceptedObIds: ['EOOBSERVATION-ID1', 'RADAROBSERVATION-ID1'],
      acceptedObTyps: ['EO', 'RADAR'],
      agomEst: false,
      agomModel: 'RandomWalk',
      aprioriElset: {
        classificationMarking: 'U',
        dataMode: 'REAL',
        epoch: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
        agom: 0.0126,
        algorithm: 'Example algorithm',
        apogee: 1.1,
        argOfPerigee: 1.1,
        ballisticCoeff: 0.00815,
        bStar: 1.1,
        descriptor: 'Example description',
        eccentricity: 0.333,
        ephemType: 1,
        idElset: 'ELSET-ID',
        idOrbitDetermination: '026dd511-8ba5-47d3-9909-836149f87686',
        inclination: 45.1,
        meanAnomaly: 179.1,
        meanMotion: 1.1,
        meanMotionDDot: 1.1,
        meanMotionDot: 1.1,
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        perigee: 1.1,
        period: 1.1,
        raan: 1.1,
        rawFileURI: 'Example URI',
        revNo: 111,
        satNo: 12,
        semiMajorAxis: 1.1,
        sourcedData: ['OBSERVATION_UUID1', 'OBSERVATION_UUID2'],
        sourcedDataTypes: ['EO', 'RADAR'],
        tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
        transactionId: 'TRANSACTION-ID',
        uct: false,
      },
      aprioriIdElset: '80e544b7-6a17-4554-8abf-7301e98f8e5d',
      aprioriIdStateVector: '6e291992-8ae3-4592-bb0f-055715bf4803',
      aprioriStateVector: {
        classificationMarking: 'U',
        dataMode: 'REAL',
        epoch: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
        actualODSpan: 3.5,
        algorithm: 'SAMPLE_ALGORITHM',
        alt1ReferenceFrame: 'TEME',
        alt2ReferenceFrame: 'EFG/TDR',
        area: 5.065,
        bDot: 1.23,
        cmOffset: 1.23,
        cov: [1.1, 2.2],
        covMethod: 'CALCULATED',
        covReferenceFrame: 'J2000',
        descriptor: 'descriptor',
        dragArea: 4.739,
        dragCoeff: 0.0224391269775,
        dragModel: 'JAC70',
        edr: 1.23,
        eqCov: [1.1, 2.2],
        errorControl: 1.23,
        fixedStep: true,
        geopotentialModel: 'EGM-96',
        iau1980Terms: 4,
        idOrbitDetermination: '026dd511-8ba5-47d3-9909-836149f87686',
        idStateVector: 'STATEVECTOR-ID',
        integratorMode: 'integratorMode',
        inTrackThrust: true,
        lastObEnd: '2022-11-09T11:20:21.247192Z',
        lastObStart: '2022-11-09T11:20:21.247192Z',
        leapSecondTime: '2021-01-01T01:01:01.123Z',
        lunarSolar: true,
        mass: 164.5,
        obsAvailable: 376,
        obsUsed: 374,
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        partials: 'ANALYTIC',
        pedigree: 'CONJUNCTION',
        polarMotionX: 1.23,
        polarMotionY: 1.23,
        posUnc: 0.333399744452,
        rawFileURI: 'rawFileURI',
        recODSpan: 3.5,
        referenceFrame: 'J2000',
        residualsAcc: 99.5,
        revNo: 7205,
        rms: 0.991,
        satNo: 12,
        sigmaPosUVW: [1.23, 4.56],
        sigmaVelUVW: [1.23, 4.56],
        solarFluxAPAvg: 1.23,
        solarFluxF10: 1.23,
        solarFluxF10Avg: 1.23,
        solarRadPress: true,
        solarRadPressCoeff: 0.0244394,
        solidEarthTides: true,
        sourcedData: ['DATA1', 'DATA2'],
        sourcedDataTypes: ['EO'],
        srpArea: 4.311,
        stepMode: 'AUTO',
        stepSize: 1.23,
        stepSizeSelection: 'AUTO',
        tags: ['TAG1', 'TAG2'],
        taiUtc: 1.23,
        thrustAccel: 1.23,
        tracksAvail: 163,
        tracksUsed: 163,
        transactionId: 'transactionId',
        uct: true,
        ut1Rate: 1.23,
        ut1Utc: 1.23,
        velUnc: 0.000004,
        xaccel: -2.12621392,
        xpos: -1118.577381,
        xposAlt1: -1145.688502,
        xposAlt2: -1456.915926,
        xvel: -4.25242784,
        xvelAlt1: -4.270832252,
        xvelAlt2: -1.219814294,
        yaccel: 2.645553717,
        ypos: 3026.231084,
        yposAlt1: 3020.729572,
        yposAlt2: -2883.540406,
        yvel: 5.291107434,
        yvelAlt1: 5.27074276,
        yvelAlt2: -6.602080212,
        zaccel: -1.06310696,
        zpos: 6167.831808,
        zposAlt1: 6165.55187,
        zposAlt2: 6165.55187,
        zvel: -3.356493869,
        zvelAlt1: -3.365155181,
        zvelAlt2: -3.365155181,
      },
      ballisticCoeffEst: false,
      ballisticCoeffModel: 'GaussMarkov',
      bestPassWrms: 0.975,
      edr: 1.23,
      effectiveFrom: '2023-08-28T11:20:21.247192Z',
      effectiveUntil: '2023-08-30T08:15:00.123456Z',
      errorGrowthRate: 1.23,
      firstPassWrms: 0.985,
      fitSpan: 0.6,
      lastObEnd: '2023-08-28T11:20:21.247192Z',
      lastObStart: '2023-08-28T11:20:21.247192Z',
      methodSource: 'ASW',
      numIterations: 8,
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      previousWrms: 1.02,
      rejectedObIds: ['DIFFOFARRIVAL-ID2', 'RFOBSERVATION-ID2'],
      rejectedObTyps: ['DOA', 'RF'],
      rmsConvergenceCriteria: 0.001,
      satNo: 54741,
      sensorIds: ['SENSOR-ID1', 'SENSOR-ID2'],
      timeSpan: 3.5,
      wrms: 0.991,
    });
  });

  test('list', async () => {
    const responsePromise = client.orbitdetermination.list();
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
    await expect(client.orbitdetermination.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orbitdetermination.list(
        { idOnOrbit: 'idOnOrbit', startTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.orbitdetermination.count();
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
    await expect(client.orbitdetermination.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orbitdetermination.count(
        { idOnOrbit: 'idOnOrbit', startTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.orbitdetermination.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        endTime: '2023-08-28T15:20:21.247192Z',
        initialOD: false,
        method: 'BLS',
        source: 'Bluestaq',
        startTime: '2023-08-28T11:20:21.247192Z',
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
    const response = await client.orbitdetermination.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        endTime: '2023-08-28T15:20:21.247192Z',
        initialOD: false,
        method: 'BLS',
        source: 'Bluestaq',
        startTime: '2023-08-28T11:20:21.247192Z',
        id: '026dd511-8ba5-47d3-9909-836149f87686',
        acceptedObIds: ['EOOBSERVATION-ID1', 'RADAROBSERVATION-ID1'],
        acceptedObTyps: ['EO', 'RADAR'],
        agomEst: false,
        agomModel: 'RandomWalk',
        aprioriElset: {
          classificationMarking: 'U',
          dataMode: 'REAL',
          epoch: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          agom: 0.0126,
          algorithm: 'Example algorithm',
          apogee: 1.1,
          argOfPerigee: 1.1,
          ballisticCoeff: 0.00815,
          bStar: 1.1,
          descriptor: 'Example description',
          eccentricity: 0.333,
          ephemType: 1,
          idElset: 'ELSET-ID',
          idOrbitDetermination: '026dd511-8ba5-47d3-9909-836149f87686',
          inclination: 45.1,
          meanAnomaly: 179.1,
          meanMotion: 1.1,
          meanMotionDDot: 1.1,
          meanMotionDot: 1.1,
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          perigee: 1.1,
          period: 1.1,
          raan: 1.1,
          rawFileURI: 'Example URI',
          revNo: 111,
          satNo: 12,
          semiMajorAxis: 1.1,
          sourcedData: ['OBSERVATION_UUID1', 'OBSERVATION_UUID2'],
          sourcedDataTypes: ['EO', 'RADAR'],
          tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
          transactionId: 'TRANSACTION-ID',
          uct: false,
        },
        aprioriIdElset: '80e544b7-6a17-4554-8abf-7301e98f8e5d',
        aprioriIdStateVector: '6e291992-8ae3-4592-bb0f-055715bf4803',
        aprioriStateVector: {
          classificationMarking: 'U',
          dataMode: 'REAL',
          epoch: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          actualODSpan: 3.5,
          algorithm: 'SAMPLE_ALGORITHM',
          alt1ReferenceFrame: 'TEME',
          alt2ReferenceFrame: 'EFG/TDR',
          area: 5.065,
          bDot: 1.23,
          cmOffset: 1.23,
          cov: [1.1, 2.2],
          covMethod: 'CALCULATED',
          covReferenceFrame: 'J2000',
          descriptor: 'descriptor',
          dragArea: 4.739,
          dragCoeff: 0.0224391269775,
          dragModel: 'JAC70',
          edr: 1.23,
          eqCov: [1.1, 2.2],
          errorControl: 1.23,
          fixedStep: true,
          geopotentialModel: 'EGM-96',
          iau1980Terms: 4,
          idOrbitDetermination: '026dd511-8ba5-47d3-9909-836149f87686',
          idStateVector: 'STATEVECTOR-ID',
          integratorMode: 'integratorMode',
          inTrackThrust: true,
          lastObEnd: '2022-11-09T11:20:21.247192Z',
          lastObStart: '2022-11-09T11:20:21.247192Z',
          leapSecondTime: '2021-01-01T01:01:01.123Z',
          lunarSolar: true,
          mass: 164.5,
          obsAvailable: 376,
          obsUsed: 374,
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          partials: 'ANALYTIC',
          pedigree: 'CONJUNCTION',
          polarMotionX: 1.23,
          polarMotionY: 1.23,
          posUnc: 0.333399744452,
          rawFileURI: 'rawFileURI',
          recODSpan: 3.5,
          referenceFrame: 'J2000',
          residualsAcc: 99.5,
          revNo: 7205,
          rms: 0.991,
          satNo: 12,
          sigmaPosUVW: [1.23, 4.56],
          sigmaVelUVW: [1.23, 4.56],
          solarFluxAPAvg: 1.23,
          solarFluxF10: 1.23,
          solarFluxF10Avg: 1.23,
          solarRadPress: true,
          solarRadPressCoeff: 0.0244394,
          solidEarthTides: true,
          sourcedData: ['DATA1', 'DATA2'],
          sourcedDataTypes: ['EO'],
          srpArea: 4.311,
          stepMode: 'AUTO',
          stepSize: 1.23,
          stepSizeSelection: 'AUTO',
          tags: ['TAG1', 'TAG2'],
          taiUtc: 1.23,
          thrustAccel: 1.23,
          tracksAvail: 163,
          tracksUsed: 163,
          transactionId: 'transactionId',
          uct: true,
          ut1Rate: 1.23,
          ut1Utc: 1.23,
          velUnc: 0.000004,
          xaccel: -2.12621392,
          xpos: -1118.577381,
          xposAlt1: -1145.688502,
          xposAlt2: -1456.915926,
          xvel: -4.25242784,
          xvelAlt1: -4.270832252,
          xvelAlt2: -1.219814294,
          yaccel: 2.645553717,
          ypos: 3026.231084,
          yposAlt1: 3020.729572,
          yposAlt2: -2883.540406,
          yvel: 5.291107434,
          yvelAlt1: 5.27074276,
          yvelAlt2: -6.602080212,
          zaccel: -1.06310696,
          zpos: 6167.831808,
          zposAlt1: 6165.55187,
          zposAlt2: 6165.55187,
          zvel: -3.356493869,
          zvelAlt1: -3.365155181,
          zvelAlt2: -3.365155181,
        },
        ballisticCoeffEst: false,
        ballisticCoeffModel: 'GaussMarkov',
        bestPassWrms: 0.975,
        edr: 1.23,
        effectiveFrom: '2023-08-28T11:20:21.247192Z',
        effectiveUntil: '2023-08-30T08:15:00.123456Z',
        errorGrowthRate: 1.23,
        firstPassWrms: 0.985,
        fitSpan: 0.6,
        lastObEnd: '2023-08-28T11:20:21.247192Z',
        lastObStart: '2023-08-28T11:20:21.247192Z',
        methodSource: 'ASW',
        numIterations: 8,
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        previousWrms: 1.02,
        rejectedObIds: ['DIFFOFARRIVAL-ID2', 'RFOBSERVATION-ID2'],
        rejectedObTyps: ['DOA', 'RF'],
        rmsConvergenceCriteria: 0.001,
        satNo: 54741,
        sensorIds: ['SENSOR-ID1', 'SENSOR-ID2'],
        timeSpan: 3.5,
        wrms: 0.991,
      },
    ]);
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.orbitdetermination.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        endTime: '2023-08-28T15:20:21.247192Z',
        initialOD: false,
        method: 'BLS',
        source: 'Bluestaq',
        startTime: '2023-08-28T11:20:21.247192Z',
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

  test('fileCreate: required and optional params', async () => {
    const response = await client.orbitdetermination.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        endTime: '2023-08-28T15:20:21.247192Z',
        initialOD: false,
        method: 'BLS',
        source: 'Bluestaq',
        startTime: '2023-08-28T11:20:21.247192Z',
        id: '026dd511-8ba5-47d3-9909-836149f87686',
        acceptedObIds: ['EOOBSERVATION-ID1', 'RADAROBSERVATION-ID1'],
        acceptedObTyps: ['EO', 'RADAR'],
        agomEst: false,
        agomModel: 'RandomWalk',
        aprioriElset: {
          classificationMarking: 'U',
          dataMode: 'REAL',
          epoch: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          agom: 0.0126,
          algorithm: 'Example algorithm',
          apogee: 1.1,
          argOfPerigee: 1.1,
          ballisticCoeff: 0.00815,
          bStar: 1.1,
          descriptor: 'Example description',
          eccentricity: 0.333,
          ephemType: 1,
          idElset: 'ELSET-ID',
          idOrbitDetermination: '026dd511-8ba5-47d3-9909-836149f87686',
          inclination: 45.1,
          meanAnomaly: 179.1,
          meanMotion: 1.1,
          meanMotionDDot: 1.1,
          meanMotionDot: 1.1,
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          perigee: 1.1,
          period: 1.1,
          raan: 1.1,
          rawFileURI: 'Example URI',
          revNo: 111,
          satNo: 12,
          semiMajorAxis: 1.1,
          sourcedData: ['OBSERVATION_UUID1', 'OBSERVATION_UUID2'],
          sourcedDataTypes: ['EO', 'RADAR'],
          tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
          transactionId: 'TRANSACTION-ID',
          uct: false,
        },
        aprioriIdElset: '80e544b7-6a17-4554-8abf-7301e98f8e5d',
        aprioriIdStateVector: '6e291992-8ae3-4592-bb0f-055715bf4803',
        aprioriStateVector: {
          classificationMarking: 'U',
          dataMode: 'REAL',
          epoch: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          actualODSpan: 3.5,
          algorithm: 'SAMPLE_ALGORITHM',
          alt1ReferenceFrame: 'TEME',
          alt2ReferenceFrame: 'EFG/TDR',
          area: 5.065,
          bDot: 1.23,
          cmOffset: 1.23,
          cov: [1.1, 2.2],
          covMethod: 'CALCULATED',
          covReferenceFrame: 'J2000',
          descriptor: 'descriptor',
          dragArea: 4.739,
          dragCoeff: 0.0224391269775,
          dragModel: 'JAC70',
          edr: 1.23,
          eqCov: [1.1, 2.2],
          errorControl: 1.23,
          fixedStep: true,
          geopotentialModel: 'EGM-96',
          iau1980Terms: 4,
          idOrbitDetermination: '026dd511-8ba5-47d3-9909-836149f87686',
          idStateVector: 'STATEVECTOR-ID',
          integratorMode: 'integratorMode',
          inTrackThrust: true,
          lastObEnd: '2022-11-09T11:20:21.247192Z',
          lastObStart: '2022-11-09T11:20:21.247192Z',
          leapSecondTime: '2021-01-01T01:01:01.123Z',
          lunarSolar: true,
          mass: 164.5,
          obsAvailable: 376,
          obsUsed: 374,
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          partials: 'ANALYTIC',
          pedigree: 'CONJUNCTION',
          polarMotionX: 1.23,
          polarMotionY: 1.23,
          posUnc: 0.333399744452,
          rawFileURI: 'rawFileURI',
          recODSpan: 3.5,
          referenceFrame: 'J2000',
          residualsAcc: 99.5,
          revNo: 7205,
          rms: 0.991,
          satNo: 12,
          sigmaPosUVW: [1.23, 4.56],
          sigmaVelUVW: [1.23, 4.56],
          solarFluxAPAvg: 1.23,
          solarFluxF10: 1.23,
          solarFluxF10Avg: 1.23,
          solarRadPress: true,
          solarRadPressCoeff: 0.0244394,
          solidEarthTides: true,
          sourcedData: ['DATA1', 'DATA2'],
          sourcedDataTypes: ['EO'],
          srpArea: 4.311,
          stepMode: 'AUTO',
          stepSize: 1.23,
          stepSizeSelection: 'AUTO',
          tags: ['TAG1', 'TAG2'],
          taiUtc: 1.23,
          thrustAccel: 1.23,
          tracksAvail: 163,
          tracksUsed: 163,
          transactionId: 'transactionId',
          uct: true,
          ut1Rate: 1.23,
          ut1Utc: 1.23,
          velUnc: 0.000004,
          xaccel: -2.12621392,
          xpos: -1118.577381,
          xposAlt1: -1145.688502,
          xposAlt2: -1456.915926,
          xvel: -4.25242784,
          xvelAlt1: -4.270832252,
          xvelAlt2: -1.219814294,
          yaccel: 2.645553717,
          ypos: 3026.231084,
          yposAlt1: 3020.729572,
          yposAlt2: -2883.540406,
          yvel: 5.291107434,
          yvelAlt1: 5.27074276,
          yvelAlt2: -6.602080212,
          zaccel: -1.06310696,
          zpos: 6167.831808,
          zposAlt1: 6165.55187,
          zposAlt2: 6165.55187,
          zvel: -3.356493869,
          zvelAlt1: -3.365155181,
          zvelAlt2: -3.365155181,
        },
        ballisticCoeffEst: false,
        ballisticCoeffModel: 'GaussMarkov',
        bestPassWrms: 0.975,
        edr: 1.23,
        effectiveFrom: '2023-08-28T11:20:21.247192Z',
        effectiveUntil: '2023-08-30T08:15:00.123456Z',
        errorGrowthRate: 1.23,
        firstPassWrms: 0.985,
        fitSpan: 0.6,
        lastObEnd: '2023-08-28T11:20:21.247192Z',
        lastObStart: '2023-08-28T11:20:21.247192Z',
        methodSource: 'ASW',
        numIterations: 8,
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        previousWrms: 1.02,
        rejectedObIds: ['DIFFOFARRIVAL-ID2', 'RFOBSERVATION-ID2'],
        rejectedObTyps: ['DOA', 'RF'],
        rmsConvergenceCriteria: 0.001,
        satNo: 54741,
        sensorIds: ['SENSOR-ID1', 'SENSOR-ID2'],
        timeSpan: 3.5,
        wrms: 0.991,
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.orbitdetermination.get('id');
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
    await expect(client.orbitdetermination.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.orbitdetermination.queryhelp();
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
    await expect(client.orbitdetermination.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.orbitdetermination.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.orbitdetermination.tuple({
      columns: 'columns',
      idOnOrbit: 'idOnOrbit',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
