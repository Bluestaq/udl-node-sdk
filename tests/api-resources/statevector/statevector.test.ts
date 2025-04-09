// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource statevector', () => {
  test('create: only required params', async () => {
    const responsePromise = client.statevector.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      epoch: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.statevector.create({
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
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.statevector.list({ epoch: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.statevector.list({ epoch: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.statevector.count({ epoch: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.statevector.count({ epoch: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk', async () => {
    const responsePromise = client.statevector.createBulk();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.statevector.createBulk({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('createBulk: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.statevector.createBulk(
        [
          {
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
        ],
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulkV2: only required params', async () => {
    const responsePromise = client.statevector.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        epoch: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
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
    const response = await client.statevector.createBulkV2([
      {
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
    ]);
  });

  test('get', async () => {
    const responsePromise = client.statevector.get('id');
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
    await expect(client.statevector.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.statevector.queryhelp();
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
    await expect(client.statevector.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.statevector.tuple({
      columns: 'columns',
      epoch: '2019-12-27T18:11:19.117Z',
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
    const response = await client.statevector.tuple({
      columns: 'columns',
      epoch: '2019-12-27T18:11:19.117Z',
    });
  });
});
