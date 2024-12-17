// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfieldstatus', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airfieldstatus.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idAirfield: 'idAirfield',
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
    const response = await client.airfieldstatus.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idAirfield: 'idAirfield',
      source: 'source',
      id: 'id',
      altAirfieldId: 'altAirfieldId',
      arffCat: 'arffCat',
      cargoMOG: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      fleetServiceMOG: 0,
      fuelMOG: 0,
      fuelQtys: [0],
      fuelTypes: ['string'],
      gseTime: 0,
      medCap: 'medCap',
      message: 'message',
      mheQtys: [0],
      mheTypes: ['string'],
      mxMOG: 0,
      narrowParkingMOG: 0,
      narrowWorkingMOG: 0,
      numCOG: 0,
      operatingMOG: 0,
      origin: 'origin',
      origNetwork: 'origNetwork',
      passengerServiceMOG: 0,
      priFreq: 0,
      priRwyNum: 'priRwyNum',
      rwyCondReading: 0,
      rwyFrictionFactor: 0,
      rwyMarkings: ['string'],
      slotTypesReq: ['string'],
      sourceDL: 'sourceDL',
      wideParkingMOG: 0,
      wideWorkingMOG: 0,
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
