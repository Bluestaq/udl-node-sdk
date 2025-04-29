// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aircraftStatuses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aircraftStatuses.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAircraft: '29232269-e4c2-45c9-aa21-039a33209340',
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
    const response = await client.aircraftStatuses.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAircraft: '29232269-e4c2-45c9-aa21-039a33209340',
      source: 'Bluestaq',
      id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      additionalSys: ['ATOMS', 'TUDL', 'BLOS1'],
      airToAirStatus: 'OPERATIONAL',
      airToGroundStatus: 'OPERATIONAL',
      alphaStatusCode: 'A2',
      altAircraftId: 'ORIG-AIRCRAFT-ID',
      contaminationStatus: 'CLEAR',
      currentICAO: 'KCHS',
      currentState: 'AVAILABLE',
      earliestTAEndTime: '2022-01-01T16:00:00.123Z',
      etic: '2022-01-01T16:00:00.123Z',
      flightPhase: 'Landing',
      fuel: 10,
      fuelFunction: 'Burn',
      fuelStatus: 'DELIVERED',
      geoLoc: 'AJJY',
      groundStatus: 'ALERT',
      gunCapable: true,
      gunRdsMax: 550,
      gunRdsMin: 150,
      gunRdsType: '7.62 MM',
      idAirfield: 'b89430e3-97d9-408c-9c89-fd3840c4b84d',
      idPOI: '0e52f081-a2e3-4b73-b822-88b882232691',
      inventory: ['AIM-9 SIDEWINDER', 'AIM-120 AMRAAM'],
      inventoryMax: [2, 2],
      inventoryMin: [1, 2],
      lastInspectionDate: '2024-09-09T16:00:00.123Z',
      lastUpdatedBy: 'some.user',
      maintPoc: 'PSUP NIGHT SHIFT 800-555-4412',
      maintPriority: '1',
      maintStatus: 'maintenance status',
      maintStatusDriver: 'SCREW STUCK IN LEFT NLG TIRE',
      maintStatusUpdate: '2022-01-01T16:00:00.123Z',
      missionReadiness: 'ABLE',
      mxRemark: 'COM2 INOP',
      nextICAO: 'PHNL',
      notes: 'Some notes for aircraft A',
      origin: 'THIRD_PARTY_DATASOURCE',
      parkLocation: 'B1',
      parkLocationSystem: 'GDSS',
      previousICAO: 'EGLL',
      taStartTime: '2022-01-01T16:00:00.123Z',
      troubleshootEtic: '2022-01-01T16:00:00.123Z',
      unavailableSys: ['CMDS', 'AOC'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.aircraftStatuses.retrieve('id');
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
      client.aircraftStatuses.retrieve(
        'id',
        { firstResult: 0, maxResult: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.aircraftStatuses.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAircraft: '29232269-e4c2-45c9-aa21-039a33209340',
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

  test('update: required and optional params', async () => {
    const response = await client.aircraftStatuses.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAircraft: '29232269-e4c2-45c9-aa21-039a33209340',
      source: 'Bluestaq',
      body_id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      additionalSys: ['ATOMS', 'TUDL', 'BLOS1'],
      airToAirStatus: 'OPERATIONAL',
      airToGroundStatus: 'OPERATIONAL',
      alphaStatusCode: 'A2',
      altAircraftId: 'ORIG-AIRCRAFT-ID',
      contaminationStatus: 'CLEAR',
      currentICAO: 'KCHS',
      currentState: 'AVAILABLE',
      earliestTAEndTime: '2022-01-01T16:00:00.123Z',
      etic: '2022-01-01T16:00:00.123Z',
      flightPhase: 'Landing',
      fuel: 10,
      fuelFunction: 'Burn',
      fuelStatus: 'DELIVERED',
      geoLoc: 'AJJY',
      groundStatus: 'ALERT',
      gunCapable: true,
      gunRdsMax: 550,
      gunRdsMin: 150,
      gunRdsType: '7.62 MM',
      idAirfield: 'b89430e3-97d9-408c-9c89-fd3840c4b84d',
      idPOI: '0e52f081-a2e3-4b73-b822-88b882232691',
      inventory: ['AIM-9 SIDEWINDER', 'AIM-120 AMRAAM'],
      inventoryMax: [2, 2],
      inventoryMin: [1, 2],
      lastInspectionDate: '2024-09-09T16:00:00.123Z',
      lastUpdatedBy: 'some.user',
      maintPoc: 'PSUP NIGHT SHIFT 800-555-4412',
      maintPriority: '1',
      maintStatus: 'maintenance status',
      maintStatusDriver: 'SCREW STUCK IN LEFT NLG TIRE',
      maintStatusUpdate: '2022-01-01T16:00:00.123Z',
      missionReadiness: 'ABLE',
      mxRemark: 'COM2 INOP',
      nextICAO: 'PHNL',
      notes: 'Some notes for aircraft A',
      origin: 'THIRD_PARTY_DATASOURCE',
      parkLocation: 'B1',
      parkLocationSystem: 'GDSS',
      previousICAO: 'EGLL',
      taStartTime: '2022-01-01T16:00:00.123Z',
      troubleshootEtic: '2022-01-01T16:00:00.123Z',
      unavailableSys: ['CMDS', 'AOC'],
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

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.aircraftStatuses.list({ firstResult: 0, maxResult: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.aircraftStatuses.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.aircraftStatuses.count({ firstResult: 0, maxResult: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
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

  test('tuple: only required params', async () => {
    const responsePromise = client.aircraftStatuses.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.aircraftStatuses.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResult: 0,
    });
  });
});
