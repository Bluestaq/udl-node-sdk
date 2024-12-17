// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aircraftStatuses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aircraftStatuses.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idAircraft: 'idAircraft',
      source: 'source',
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
    const response = await client.aircraftStatuses.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idAircraft: 'idAircraft',
      source: 'source',
      id: 'id',
      additionalSys: ['string'],
      airToAirStatus: 'airToAirStatus',
      airToGroundStatus: 'airToGroundStatus',
      alphaStatusCode: 'alphaStatusCode',
      altAircraftId: 'altAircraftId',
      contaminationStatus: 'contaminationStatus',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      currentICAO: 'currentICAO',
      currentState: 'currentState',
      earliestTAEndTime: '2019-12-27T18:11:19.117Z',
      etic: '2019-12-27T18:11:19.117Z',
      flightPhase: 'flightPhase',
      fuel: 0,
      fuelFunction: 'fuelFunction',
      fuelStatus: 'fuelStatus',
      geoLoc: 'geoLoc',
      groundStatus: 'groundStatus',
      gunCapable: true,
      gunRdsMax: 0,
      gunRdsMin: 0,
      gunRdsType: 'gunRdsType',
      idAirfield: 'idAirfield',
      idPOI: 'idPOI',
      inventory: ['string'],
      inventoryMax: [0],
      inventoryMin: [0],
      lastInspectionDate: '2019-12-27T18:11:19.117Z',
      lastUpdatedBy: 'lastUpdatedBy',
      maintPoc: 'maintPoc',
      maintPriority: 'maintPriority',
      maintStatus: 'maintStatus',
      maintStatusDriver: 'maintStatusDriver',
      maintStatusUpdate: '2019-12-27T18:11:19.117Z',
      missionReadiness: 'missionReadiness',
      mxRemark: 'mxRemark',
      nextICAO: 'nextICAO',
      notes: 'notes',
      origin: 'origin',
      origNetwork: 'origNetwork',
      parkLocation: 'parkLocation',
      parkLocationSystem: 'parkLocationSystem',
      previousICAO: 'previousICAO',
      sourceDL: 'sourceDL',
      taStartTime: '2019-12-27T18:11:19.117Z',
      troubleshootEtic: '2019-12-27T18:11:19.117Z',
      unavailableSys: ['string'],
    });
  });

  test('list', async () => {
    const responsePromise = client.aircraftStatuses.list();
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
    await expect(client.aircraftStatuses.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.aircraftStatuses.count();
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
    await expect(client.aircraftStatuses.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.aircraftStatuses.queryhelp();
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
    await expect(client.aircraftStatuses.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
