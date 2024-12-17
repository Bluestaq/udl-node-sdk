// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfieldslotconsumptions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airfieldslotconsumptions.create({
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

  test('create: required and optional params', async () => {
    const response = await client.airfieldslotconsumptions.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      endTime: '2019-12-27T18:11:19.117Z',
      idAirfieldSlot: 'idAirfieldSlot',
      numAircraft: 0,
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
      id: 'id',
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

  test('list', async () => {
    const responsePromise = client.airfieldslotconsumptions.list();
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
    await expect(client.airfieldslotconsumptions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.airfieldslotconsumptions.count();
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
    await expect(client.airfieldslotconsumptions.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.airfieldslotconsumptions.queryhelp();
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
    await expect(
      client.airfieldslotconsumptions.queryhelp({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });
});
