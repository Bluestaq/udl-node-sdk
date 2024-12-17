// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aisObjects', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aisObjects.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
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
    const response = await client.aisObjects.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
        id: 'id',
        antennaRefDimensions: [0],
        avgSpeed: 0,
        callSign: 'callSign',
        cargoType: 'cargoType',
        course: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        currentPortGUID: 'currentPortGUID',
        currentPortLOCODE: 'currentPortLOCODE',
        destination: 'destination',
        destinationETA: '2019-12-27T18:11:19.117Z',
        distanceToGo: 0,
        distanceTravelled: 0,
        draught: 0,
        engagedIn: 'engagedIn',
        etaCalculated: '2019-12-27T18:11:19.117Z',
        etaUpdated: '2019-12-27T18:11:19.117Z',
        idTrack: 'idTrack',
        idVessel: 'idVessel',
        imon: 0,
        lastPortGUID: 'lastPortGUID',
        lastPortLOCODE: 'lastPortLOCODE',
        lat: 0,
        length: 0,
        lon: 0,
        maxSpeed: 0,
        mmsi: 0,
        navStatus: 'navStatus',
        nextPortGUID: 'nextPortGUID',
        nextPortLOCODE: 'nextPortLOCODE',
        origin: 'origin',
        origNetwork: 'origNetwork',
        posDeviceType: 'posDeviceType',
        posHiAccuracy: true,
        posHiLatency: true,
        rateOfTurn: 0,
        shipDescription: 'shipDescription',
        shipName: 'shipName',
        shipType: 'shipType',
        sourceDL: 'sourceDL',
        specialCraft: 'specialCraft',
        specialManeuver: true,
        speed: 0,
        trueHeading: 0,
        vesselFlag: 'vesselFlag',
        width: 0,
      },
    ]);
  });
});
