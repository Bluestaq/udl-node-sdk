// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfieldSlots', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airfieldSlots.create({
      airfieldName: 'airfieldName',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
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
    const response = await client.airfieldSlots.create({
      airfieldName: 'airfieldName',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
      source: 'source',
      id: 'id',
      acSlotCat: 'acSlotCat',
      altAirfieldId: 'altAirfieldId',
      capacity: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      endTime: 'endTime',
      icao: 'icao',
      idAirfield: 'idAirfield',
      minSeparation: 0,
      notes: 'notes',
      origin: 'origin',
      origNetwork: 'origNetwork',
      sourceDL: 'sourceDL',
      startTime: 'startTime',
      type: 'type',
    });
  });

  test('list', async () => {
    const responsePromise = client.airfieldSlots.list();
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
    await expect(client.airfieldSlots.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
