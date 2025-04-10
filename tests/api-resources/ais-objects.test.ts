// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aisObjects', () => {
  test('createBulkV2: only required params', async () => {
    const responsePromise = client.aisObjects.createBulkV2([
      { classificationMarking: 'U', dataMode: 'TEST', source: 'Bluestaq', ts: '2021-02-25T12:00:00.123456Z' },
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
    const response = await client.aisObjects.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        source: 'Bluestaq',
        ts: '2021-02-25T12:00:00.123456Z',
        id: 'AIS-ID',
        antennaRefDimensions: [50.1, 50.1, 20.1, 20.1],
        avgSpeed: 12.1,
        callSign: 'V2OZ',
        cargoType: 'Freight',
        course: 157.1,
        currentPortGUID: '0ABC',
        currentPortLOCODE: 'XF013',
        destination: 'USCLE',
        destinationETA: '2021-02-25T12:00:00.123456Z',
        distanceToGo: 150.5,
        distanceTravelled: 200.3,
        draught: 21.1,
        engagedIn: 'Cargo',
        etaCalculated: '2021-02-25T12:00:00.123456Z',
        etaUpdated: '2021-02-25T12:00:00.123456Z',
        idTrack: 'TRACK-ID',
        idVessel: 'VESSEL-ID',
        imon: 9015462,
        lastPortGUID: '0VAX',
        lastPortLOCODE: 'USSKY',
        lat: 47.758499,
        length: 511.1,
        lon: -5.154223,
        maxSpeed: 13.3,
        mmsi: 304010417,
        navStatus: 'Underway Using Engine',
        nextPortGUID: '0Z8Q',
        nextPortLOCODE: 'USCLE',
        origin: 'THIRD_PARTY_DATASOURCE',
        posDeviceType: 'GPS',
        posHiAccuracy: true,
        posHiLatency: true,
        rateOfTurn: 22.1,
        shipDescription: 'Search and rescue vessels',
        shipName: 'DORNUM',
        shipType: 'Passenger',
        specialCraft: 'Tug',
        specialManeuver: false,
        speed: 10.5,
        trueHeading: 329.1,
        vesselFlag: 'United States',
        width: 24.1,
      },
    ]);
  });
});
