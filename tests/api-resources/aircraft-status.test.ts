// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aircraftStatus', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.aircraftStatus.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.aircraftStatus.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.aircraftStatus.update({
      path_id: 'id',
      body_id: 'id',
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

  test('update: required and optional params', async () => {
    const response = await client.aircraftStatus.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idAircraft: 'idAircraft',
      source: 'source',
      body_id: 'id',
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

  test('delete: only required params', async () => {
    const responsePromise = client.aircraftStatus.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.aircraftStatus.delete({ path_id: 'id', body_id: 'id' });
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.aircraftStatus.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.aircraftStatus.tuple({ columns: 'columns' });
  });
});
