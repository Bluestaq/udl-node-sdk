// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stateVectors', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.stateVectors.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        epoch: '2019-12-27T18:11:19.117Z',
        source: 'source',
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
    const response = await client.filedrop.stateVectors.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        epoch: '2019-12-27T18:11:19.117Z',
        source: 'source',
        actualODSpan: 0,
        algorithm: 'algorithm',
        alt1ReferenceFrame: 'alt1ReferenceFrame',
        alt2ReferenceFrame: 'alt2ReferenceFrame',
        area: 0,
        bDot: 0,
        cmOffset: 0,
        cov: [0],
        covMethod: 'covMethod',
        covReferenceFrame: 'covReferenceFrame',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        descriptor: 'descriptor',
        dragArea: 0,
        dragCoeff: 0,
        dragModel: 'dragModel',
        edr: 0,
        eqCov: [0],
        errorControl: 0,
        fixedStep: true,
        geopotentialModel: 'geopotentialModel',
        iau1980Terms: 0,
        idOnOrbit: 'idOnOrbit',
        idOrbitDetermination: 'idOrbitDetermination',
        idStateVector: 'idStateVector',
        integratorMode: 'integratorMode',
        inTrackThrust: true,
        lastObEnd: '2019-12-27T18:11:19.117Z',
        lastObStart: '2019-12-27T18:11:19.117Z',
        leapSecondTime: '2019-12-27T18:11:19.117Z',
        lunarSolar: true,
        mass: 0,
        obsAvailable: 0,
        obsUsed: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        partials: 'partials',
        pedigree: 'pedigree',
        polarMotionX: 0,
        polarMotionY: 0,
        posUnc: 0,
        rawFileURI: 'rawFileURI',
        recODSpan: 0,
        referenceFrame: 'referenceFrame',
        residualsAcc: 0,
        revNo: 0,
        rms: 0,
        satNo: 0,
        sigmaPosUVW: [0],
        sigmaVelUVW: [0],
        solarFluxAPAvg: 0,
        solarFluxF10: 0,
        solarFluxF10Avg: 0,
        solarRadPress: true,
        solarRadPressCoeff: 0,
        solidEarthTides: true,
        sourcedData: ['string'],
        sourcedDataTypes: ['string'],
        sourceDL: 'sourceDL',
        srpArea: 0,
        stepMode: 'stepMode',
        stepSize: 0,
        stepSizeSelection: 'stepSizeSelection',
        tags: ['string'],
        taiUtc: 0,
        thrustAccel: 0,
        tracksAvail: 0,
        tracksUsed: 0,
        transactionId: 'transactionId',
        uct: true,
        ut1Rate: 0,
        ut1Utc: 0,
        velUnc: 0,
        xaccel: 0,
        xpos: 0,
        xposAlt1: 0,
        xposAlt2: 0,
        xvel: 0,
        xvelAlt1: 0,
        xvelAlt2: 0,
        yaccel: 0,
        ypos: 0,
        yposAlt1: 0,
        yposAlt2: 0,
        yvel: 0,
        yvelAlt1: 0,
        yvelAlt2: 0,
        zaccel: 0,
        zpos: 0,
        zposAlt1: 0,
        zposAlt2: 0,
        zvel: 0,
        zvelAlt1: 0,
        zvelAlt2: 0,
      },
    ]);
  });
});
