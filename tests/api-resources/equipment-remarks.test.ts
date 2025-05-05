// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource equipmentRemarks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.equipmentRemarks.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEquipment: 'EQUIPMENT-ID',
      source: 'Bluestaq',
      text: 'This is a remark',
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
    const response = await client.equipmentRemarks.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEquipment: 'EQUIPMENT-ID',
      source: 'Bluestaq',
      text: 'This is a remark',
      id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      altRmkId: '123456ABC',
      code: 'M',
      name: 'Remark name',
      origin: 'THIRD_PARTY_DATASOURCE',
      type: 'Restriction',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.equipmentRemarks.retrieve('id');
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
      client.equipmentRemarks.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.equipmentRemarks.list();
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
      client.equipmentRemarks.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.equipmentRemarks.count();
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
      client.equipmentRemarks.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.equipmentRemarks.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idEquipment: 'EQUIPMENT-ID',
          source: 'Bluestaq',
          text: 'This is a remark',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.equipmentRemarks.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idEquipment: 'EQUIPMENT-ID',
          source: 'Bluestaq',
          text: 'This is a remark',
          id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
          altRmkId: '123456ABC',
          code: 'M',
          name: 'Remark name',
          origin: 'THIRD_PARTY_DATASOURCE',
          type: 'Restriction',
        },
      ],
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.equipmentRemarks.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.equipmentRemarks.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.equipmentRemarks.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
