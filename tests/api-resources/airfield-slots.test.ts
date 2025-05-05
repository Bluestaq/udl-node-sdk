// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfieldSlots', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airfieldSlots.create({
      airfieldName: 'USAF Academy AFLD',
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Apron 5',
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
    const response = await client.airfieldSlots.create({
      airfieldName: 'USAF Academy AFLD',
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Apron 5',
      source: 'Bluestaq',
      id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      acSlotCat: 'WIDE',
      altAirfieldId: 'ALT-AIRFIELD-ID',
      capacity: 5,
      endTime: '2359Z',
      icao: 'KCOS',
      idAirfield: '3136498f-2969-3535-1432-e984b2e2e686',
      minSeparation: 7,
      notes: 'Notes for an airfield slot.',
      origin: 'THIRD_PARTY_DATASOURCE',
      startTime: '0000Z',
      type: 'WORKING',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.airfieldSlots.retrieve('id');
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
      client.airfieldSlots.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.airfieldSlots.update('id', {
      airfieldName: 'USAF Academy AFLD',
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Apron 5',
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
    const response = await client.airfieldSlots.update('id', {
      airfieldName: 'USAF Academy AFLD',
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Apron 5',
      source: 'Bluestaq',
      body_id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      acSlotCat: 'WIDE',
      altAirfieldId: 'ALT-AIRFIELD-ID',
      capacity: 5,
      endTime: '2359Z',
      icao: 'KCOS',
      idAirfield: '3136498f-2969-3535-1432-e984b2e2e686',
      minSeparation: 7,
      notes: 'Notes for an airfield slot.',
      origin: 'THIRD_PARTY_DATASOURCE',
      startTime: '0000Z',
      type: 'WORKING',
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

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.airfieldSlots.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.airfieldSlots.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.airfieldSlots.count();
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
      client.airfieldSlots.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.airfieldSlots.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.airfieldSlots.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.airfieldSlots.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });
});
