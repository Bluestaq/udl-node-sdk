// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  test('create: only required params', async () => {
    const responsePromise = client.entities.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Example name',
      source: 'Bluestaq',
      type: 'ONORBIT',
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
    const response = await client.entities.create({
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
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.entities.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.entities.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Example name',
      source: 'Bluestaq',
      type: 'ONORBIT',
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
    const response = await client.entities.update('id', {
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
    });
  });

  test('list', async () => {
    const responsePromise = client.entities.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.entities.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.entities.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getAllTypes', async () => {
    const responsePromise = client.entities.getAllTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryHelp', async () => {
    const responsePromise = client.entities.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.entities.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.entities.tuple({ columns: 'columns' });
  });
});
