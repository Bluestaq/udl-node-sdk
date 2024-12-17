// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfieldStatus', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.airfieldStatus.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.airfieldStatus.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.airfieldStatus.update({
      path_id: 'id',
      body_id: 'id',
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

  test('update: required and optional params', async () => {
    const response = await client.airfieldStatus.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idAirfield: 'idAirfield',
      source: 'source',
      body_id: 'id',
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

  test('delete: only required params', async () => {
    const responsePromise = client.airfieldStatus.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.airfieldStatus.delete({ path_id: 'id', body_id: 'id' });
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
    const response = await client.airfieldStatus.tuple({ columns: 'columns' });
  });
});
