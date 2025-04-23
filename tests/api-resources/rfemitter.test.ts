// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rfemitter', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rfemitter.create({
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
    const response = await client.rfemitter.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'RF_NAME',
      source: 'Bluestaq',
      id: 'RFEMITTER-ID',
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
      idEntity: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      origin: 'THIRD_PARTY_DATASOURCE',
      type: 'TYPE_OF_EMITTER',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.rfemitter.update('id', {
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
    const response = await client.rfemitter.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'RF_NAME',
      source: 'Bluestaq',
      body_id: 'RFEMITTER-ID',
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
      idEntity: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      origin: 'THIRD_PARTY_DATASOURCE',
      type: 'TYPE_OF_EMITTER',
    });
  });

  test('list', async () => {
    const responsePromise = client.rfemitter.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.rfemitter.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.rfemitter.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.rfemitter.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.rfemitter.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.rfemitter.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.rfemitter.tuple({ columns: 'columns' });
  });
});
