// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rfEmitter', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rfEmitter.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'RF_NAME',
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
    const response = await client.rfEmitter.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'RF_NAME',
      source: 'Bluestaq',
      id: 'ad88770b-d824-443f-bdce-5f9e3fa500a9',
      entity: {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'Example name',
        source: 'Bluestaq',
        type: 'ONORBIT',
        countryCode: 'US',
        idEntity: 'ENTITY-ID',
        idLocation: 'LOCATION-ID',
        idOnOrbit: 'ONORBIT-ID',
        idOperatingUnit: 'OPERATINGUNIT-ID',
        location: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          name: 'Example location',
          source: 'Bluestaq',
          altitude: 10.23,
          countryCode: 'US',
          idLocation: 'LOCATION-ID',
          lat: 45.23,
          lon: 179.1,
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        onOrbit: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          satNo: 1,
          source: 'Bluestaq',
          altName: 'Alternate Name',
          category: 'Lunar',
          commonName: 'Example common name',
          constellation: 'Big Dipper',
          countryCode: 'US',
          decayDate: '2018-01-01T16:00:00.123Z',
          idOnOrbit: 'ONORBIT-ID',
          intlDes: '2021123ABC',
          launchDate: '2018-01-01',
          launchSiteId: 'LAUNCHSITE-ID',
          lifetimeYears: 10,
          missionNumber: 'Expedition 1',
          objectType: 'PAYLOAD',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        origin: 'THIRD_PARTY_DATASOURCE',
        ownerType: 'Commercial',
        taskable: false,
        urls: ['URL1', 'URL2'],
      },
      extSysId: 'EXTSYS-ID',
      idEntity: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      origin: 'THIRD_PARTY_DATASOURCE',
      subtype: 'BLOCK_1',
      type: 'TYPE_OF_EMITTER',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.rfEmitter.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'RF_NAME',
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
    const response = await client.rfEmitter.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'RF_NAME',
      source: 'Bluestaq',
      body_id: 'ad88770b-d824-443f-bdce-5f9e3fa500a9',
      entity: {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'Example name',
        source: 'Bluestaq',
        type: 'ONORBIT',
        countryCode: 'US',
        idEntity: 'ENTITY-ID',
        idLocation: 'LOCATION-ID',
        idOnOrbit: 'ONORBIT-ID',
        idOperatingUnit: 'OPERATINGUNIT-ID',
        location: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          name: 'Example location',
          source: 'Bluestaq',
          altitude: 10.23,
          countryCode: 'US',
          idLocation: 'LOCATION-ID',
          lat: 45.23,
          lon: 179.1,
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        onOrbit: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          satNo: 1,
          source: 'Bluestaq',
          altName: 'Alternate Name',
          category: 'Lunar',
          commonName: 'Example common name',
          constellation: 'Big Dipper',
          countryCode: 'US',
          decayDate: '2018-01-01T16:00:00.123Z',
          idOnOrbit: 'ONORBIT-ID',
          intlDes: '2021123ABC',
          launchDate: '2018-01-01',
          launchSiteId: 'LAUNCHSITE-ID',
          lifetimeYears: 10,
          missionNumber: 'Expedition 1',
          objectType: 'PAYLOAD',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        origin: 'THIRD_PARTY_DATASOURCE',
        ownerType: 'Commercial',
        taskable: false,
        urls: ['URL1', 'URL2'],
      },
      extSysId: 'EXTSYS-ID',
      idEntity: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      origin: 'THIRD_PARTY_DATASOURCE',
      subtype: 'BLOCK_1',
      type: 'TYPE_OF_EMITTER',
    });
  });

  test('list', async () => {
    const responsePromise = client.rfEmitter.list();
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
      client.rfEmitter.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.rfEmitter.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.rfEmitter.count();
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
      client.rfEmitter.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.rfEmitter.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rfEmitter.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.rfEmitter.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.rfEmitter.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.rfEmitter.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });
});
