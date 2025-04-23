// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onorbitbattery', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbitbattery.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idBattery: 'BATTERY-ID',
      idOnOrbit: 'ONORBIT-ID',
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
    const response = await client.onorbitbattery.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idBattery: 'BATTERY-ID',
      idOnOrbit: 'ONORBIT-ID',
      source: 'Bluestaq',
      id: 'ONORBITBATTERY-ID',
      battery: {
        dataMode: 'TEST',
        name: 'JAK-BATTERY-1479',
        source: 'Bluestaq',
        id: 'BATTERY-ID',
        origin: 'THIRD_PARTY_DATASOURCE',
      },
      origin: 'THIRD_PARTY_DATASOURCE',
      quantity: 5,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.onorbitbattery.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idBattery: 'BATTERY-ID',
      idOnOrbit: 'ONORBIT-ID',
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
    const response = await client.onorbitbattery.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idBattery: 'BATTERY-ID',
      idOnOrbit: 'ONORBIT-ID',
      source: 'Bluestaq',
      body_id: 'ONORBITBATTERY-ID',
      battery: {
        dataMode: 'TEST',
        name: 'JAK-BATTERY-1479',
        source: 'Bluestaq',
        id: 'BATTERY-ID',
        origin: 'THIRD_PARTY_DATASOURCE',
      },
      origin: 'THIRD_PARTY_DATASOURCE',
      quantity: 5,
    });
  });

  test('list', async () => {
    const responsePromise = client.onorbitbattery.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.onorbitbattery.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.onorbitbattery.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
