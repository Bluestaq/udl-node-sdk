// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

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
      rwyCondReading: 23,
      rwyFrictionFactor: 10,
      rwyMarkings: ['Aiming Point', 'Threshold'],
      slotTypesReq: ['PARKING', 'WORKING', 'LANDING'],
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

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.airfieldstatus.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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

  test('count: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.airfieldstatus.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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

  test('queryhelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.airfieldstatus.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
