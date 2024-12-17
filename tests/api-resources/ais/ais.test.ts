// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ais', () => {
  test('list: only required params', async () => {
    const responsePromise = client.ais.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.ais.list({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.ais.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.ais.count({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.ais.createBulk([
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

  test('createBulk: required and optional params', async () => {
    const response = await client.ais.createBulk([
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

  test('historyCount: only required params', async () => {
    const responsePromise = client.ais.historyCount({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('historyCount: required and optional params', async () => {
    const response = await client.ais.historyCount({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('queryhelp', async () => {
    const responsePromise = client.ais.queryhelp();
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
    await expect(client.ais.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.ais.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.ais.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
  });
});
