// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfieldslotconsumption', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.airfieldslotconsumption.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.airfieldslotconsumption.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.airfieldslotconsumption.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      endTime: '2019-12-27T18:11:19.117Z',
      idAirfieldSlot: 'idAirfieldSlot',
      numAircraft: 0,
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.airfieldslotconsumption.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      endTime: '2019-12-27T18:11:19.117Z',
      idAirfieldSlot: 'idAirfieldSlot',
      numAircraft: 0,
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
      body_id: 'id',
      altArrSortieId: 'altArrSortieId',
      altDepSortieId: 'altDepSortieId',
      appComment: 'appComment',
      appInitials: 'appInitials',
      appOrg: 'appOrg',
      callSigns: ['string'],
      consumer: 'consumer',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      idArrSortie: 'idArrSortie',
      idDepSortie: 'idDepSortie',
      missionId: 'missionId',
      occAircraftMDS: 'occAircraftMDS',
      occStartTime: '2019-12-27T18:11:19.117Z',
      occTailNumber: 'occTailNumber',
      occupied: true,
      origin: 'origin',
      origNetwork: 'origNetwork',
      reqComment: 'reqComment',
      reqInitials: 'reqInitials',
      reqOrg: 'reqOrg',
      resAircraftMDS: 'resAircraftMDS',
      resMissionId: 'resMissionId',
      resReason: 'resReason',
      resTailNumber: 'resTailNumber',
      resType: 'resType',
      sourceDL: 'sourceDL',
      status: 'status',
      targetTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.airfieldslotconsumption.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.airfieldslotconsumption.delete({ path_id: 'id', body_id: 'id' });
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.airfieldslotconsumption.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.airfieldslotconsumption.tuple({ columns: 'columns' });
  });
});
