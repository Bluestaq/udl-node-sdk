// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfieldSlotConsumptions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airfieldSlotConsumptions.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAirfieldSlot: '3136498f-2969-3535-1432-e984b2e2e686',
      numAircraft: 1,
      source: 'Bluestaq',
      startTime: '2023-01-01T01:01:01.123Z',
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
    const response = await client.airfieldSlotConsumptions.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAirfieldSlot: '3136498f-2969-3535-1432-e984b2e2e686',
      numAircraft: 1,
      source: 'Bluestaq',
      startTime: '2023-01-01T01:01:01.123Z',
      id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      altArrSortieId: 'ALT-SORTIE-ID',
      altDepSortieId: 'ALT-SORTIE-ID',
      appComment: 'The request was denied due to inoperable fuel pumps.',
      appInitials: 'CB',
      appOrg: 'KCHS/BOPS',
      callSigns: ['RCH123', 'ABC123', 'LLS442'],
      consumer: 'APRON1-230401001',
      endTime: '2023-01-01T01:01:01.123Z',
      idArrSortie: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      idDepSortie: '1e6edeec-72e9-aaec-d33c-51147cb5ffdd',
      missionId: 'AJM123456123',
      occAircraftMDS: 'C017A',
      occStartTime: '2023-01-01T01:01:03.123Z',
      occTailNumber: 'N702JG',
      occupied: true,
      origin: 'THIRD_PARTY_DATASOURCE',
      reqComment: 'Sorry for the late notice.',
      reqInitials: 'CB',
      reqOrg: 'TACC',
      resAircraftMDS: 'C017A',
      resMissionId: 'AJM123456123',
      resReason: 'Maintenance needed',
      resTailNumber: 'N702JG',
      resType: 'M',
      status: 'APPROVED',
      targetTime: '2023-01-01T01:01:01.123Z',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.airfieldSlotConsumptions.retrieve('id');
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
      client.airfieldSlotConsumptions.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.airfieldSlotConsumptions.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAirfieldSlot: '3136498f-2969-3535-1432-e984b2e2e686',
      numAircraft: 1,
      source: 'Bluestaq',
      startTime: '2023-01-01T01:01:01.123Z',
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
    const response = await client.airfieldSlotConsumptions.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAirfieldSlot: '3136498f-2969-3535-1432-e984b2e2e686',
      numAircraft: 1,
      source: 'Bluestaq',
      startTime: '2023-01-01T01:01:01.123Z',
      body_id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      altArrSortieId: 'ALT-SORTIE-ID',
      altDepSortieId: 'ALT-SORTIE-ID',
      appComment: 'The request was denied due to inoperable fuel pumps.',
      appInitials: 'CB',
      appOrg: 'KCHS/BOPS',
      callSigns: ['RCH123', 'ABC123', 'LLS442'],
      consumer: 'APRON1-230401001',
      endTime: '2023-01-01T01:01:01.123Z',
      idArrSortie: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      idDepSortie: '1e6edeec-72e9-aaec-d33c-51147cb5ffdd',
      missionId: 'AJM123456123',
      occAircraftMDS: 'C017A',
      occStartTime: '2023-01-01T01:01:03.123Z',
      occTailNumber: 'N702JG',
      occupied: true,
      origin: 'THIRD_PARTY_DATASOURCE',
      reqComment: 'Sorry for the late notice.',
      reqInitials: 'CB',
      reqOrg: 'TACC',
      resAircraftMDS: 'C017A',
      resMissionId: 'AJM123456123',
      resReason: 'Maintenance needed',
      resTailNumber: 'N702JG',
      resType: 'M',
      status: 'APPROVED',
      targetTime: '2023-01-01T01:01:01.123Z',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.airfieldSlotConsumptions.list({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.airfieldSlotConsumptions.list({
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('delete', async () => {
    const responsePromise = client.airfieldSlotConsumptions.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: only required params', async () => {
    const responsePromise = client.airfieldSlotConsumptions.count({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.airfieldSlotConsumptions.count({
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.airfieldSlotConsumptions.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.airfieldSlotConsumptions.tuple({
      columns: 'columns',
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

  test('tuple: required and optional params', async () => {
    const response = await client.airfieldSlotConsumptions.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
