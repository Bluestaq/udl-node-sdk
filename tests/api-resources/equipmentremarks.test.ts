// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource equipmentremarks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.equipmentremarks.create({
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
    const response = await client.equipmentremarks.create({
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
    const responsePromise = client.equipmentremarks.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.equipmentremarks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.equipmentremarks.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.equipmentremarks.createBulk({
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
    const response = await client.equipmentremarks.createBulk({
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
    const responsePromise = client.equipmentremarks.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.equipmentremarks.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.equipmentremarks.tuple({ columns: 'columns' });
  });
});
