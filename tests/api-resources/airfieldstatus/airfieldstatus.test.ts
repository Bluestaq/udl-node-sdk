// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfieldstatus', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airfieldstatus.create({
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
    const response = await client.airfieldstatus.create({
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

  test('list', async () => {
    const responsePromise = client.airfieldstatus.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.airfieldstatus.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.airfieldstatus.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
