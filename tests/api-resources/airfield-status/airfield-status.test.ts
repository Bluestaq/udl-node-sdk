// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfieldStatus', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airfieldStatus.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAirfield: '3136498f-2969-3535-1432-e984b2e2e686',
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
    const response = await client.airfieldStatus.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAirfield: '3136498f-2969-3535-1432-e984b2e2e686',
      source: 'Bluestaq',
      id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      altAirfieldId: 'AIRFIELD-ID',
      approvedBy: 'John Smith',
      approvedDate: '2024-01-01T16:00:00.123Z',
      arffCat: 'FAA-A',
      cargoMOG: 8,
      fleetServiceMOG: 4,
      fuelMOG: 9,
      fuelQtys: [263083.6, 286674.9, 18143.69],
      fuelTypes: ['JP-8', 'Jet A', 'AVGAS'],
      gseTime: 10,
      medCap: 'Large Field Hospital',
      message: 'Status message about the airfield.',
      mheQtys: [1, 3, 1],
      mheTypes: ['30k', 'AT', '60k'],
      mxMOG: 3,
      narrowParkingMOG: 5,
      narrowWorkingMOG: 4,
      numCOG: 2,
      operatingMOG: 4,
      origin: 'THIRD_PARTY_DATASOURCE',
      passengerServiceMOG: 5,
      priFreq: 123.45,
      priRwyNum: '35R',
      reviewedBy: 'Jane Doe',
      reviewedDate: '2024-01-01T00:00:00.123Z',
      rwyCondReading: 23,
      rwyFrictionFactor: 10,
      rwyMarkings: ['Aiming Point', 'Threshold'],
      slotTypesReq: ['PARKING', 'WORKING', 'LANDING'],
      surveyDate: '2023-01-01T12:00:00.123Z',
      wideParkingMOG: 7,
      wideWorkingMOG: 3,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.airfieldStatus.retrieve('id');
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
      client.airfieldStatus.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.airfieldStatus.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAirfield: '3136498f-2969-3535-1432-e984b2e2e686',
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
    const response = await client.airfieldStatus.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAirfield: '3136498f-2969-3535-1432-e984b2e2e686',
      source: 'Bluestaq',
      body_id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      altAirfieldId: 'AIRFIELD-ID',
      approvedBy: 'John Smith',
      approvedDate: '2024-01-01T16:00:00.123Z',
      arffCat: 'FAA-A',
      cargoMOG: 8,
      fleetServiceMOG: 4,
      fuelMOG: 9,
      fuelQtys: [263083.6, 286674.9, 18143.69],
      fuelTypes: ['JP-8', 'Jet A', 'AVGAS'],
      gseTime: 10,
      medCap: 'Large Field Hospital',
      message: 'Status message about the airfield.',
      mheQtys: [1, 3, 1],
      mheTypes: ['30k', 'AT', '60k'],
      mxMOG: 3,
      narrowParkingMOG: 5,
      narrowWorkingMOG: 4,
      numCOG: 2,
      operatingMOG: 4,
      origin: 'THIRD_PARTY_DATASOURCE',
      passengerServiceMOG: 5,
      priFreq: 123.45,
      priRwyNum: '35R',
      reviewedBy: 'Jane Doe',
      reviewedDate: '2024-01-01T00:00:00.123Z',
      rwyCondReading: 23,
      rwyFrictionFactor: 10,
      rwyMarkings: ['Aiming Point', 'Threshold'],
      slotTypesReq: ['PARKING', 'WORKING', 'LANDING'],
      surveyDate: '2023-01-01T12:00:00.123Z',
      wideParkingMOG: 7,
      wideWorkingMOG: 3,
    });
  });

  test('list', async () => {
    const responsePromise = client.airfieldStatus.list();
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
      client.airfieldStatus.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.airfieldStatus.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.airfieldStatus.count();
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
      client.airfieldStatus.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.airfieldStatus.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.airfieldStatus.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.airfieldStatus.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });
});
