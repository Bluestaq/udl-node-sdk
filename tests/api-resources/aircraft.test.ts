// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aircraft', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aircraft.create({
      aircraftMDS: 'E-2C HAWKEYE',
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.aircraft.create({
      aircraftMDS: 'E-2C HAWKEYE',
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      category: 'M',
      command: 'HQACC',
      cruiseSpeed: 915,
      dtd: '005',
      entity: {
        classificationMarking: 'U',
        dataMode: 'REAL',
        name: 'Example name',
        source: 'Bluestaq',
        type: 'AIRCRAFT',
        countryCode: 'US',
        idEntity: 'ENTITY-ID',
        idLocation: 'LOCATION-ID',
        idOnOrbit: 'ONORBIT-ID',
        idOperatingUnit: 'OPERATINGUNIT-ID',
        location: {
          classificationMarking: 'U',
          dataMode: 'REAL',
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
          dataMode: 'REAL',
          satNo: 1,
          source: 'Bluestaq',
          altName: 'Alternate Name',
          category: 'Unknown',
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
          objectType: 'ROCKET BODY',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        origin: 'THIRD_PARTY_DATASOURCE',
        ownerType: 'Commercial',
        taskable: false,
        urls: ['URL1', 'URL2'],
      },
      idEntity: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      maxSpeed: 2655.1,
      minReqRunwayFt: 3000,
      minReqRunwayM: 1000,
      nominalTATime: 500,
      notes: 'Notes for this aircraft',
      origin: 'THIRD_PARTY_DATASOURCE',
      owner: '437AW',
      serialNumber: '7007187',
      tailNumber: 'N702JG',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.aircraft.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.aircraft.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.aircraft.update('id', {
      aircraftMDS: 'E-2C HAWKEYE',
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.aircraft.update('id', {
      aircraftMDS: 'E-2C HAWKEYE',
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      body_id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      category: 'M',
      command: 'HQACC',
      cruiseSpeed: 915,
      dtd: '005',
      entity: {
        classificationMarking: 'U',
        dataMode: 'REAL',
        name: 'Example name',
        source: 'Bluestaq',
        type: 'AIRCRAFT',
        countryCode: 'US',
        idEntity: 'ENTITY-ID',
        idLocation: 'LOCATION-ID',
        idOnOrbit: 'ONORBIT-ID',
        idOperatingUnit: 'OPERATINGUNIT-ID',
        location: {
          classificationMarking: 'U',
          dataMode: 'REAL',
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
          dataMode: 'REAL',
          satNo: 1,
          source: 'Bluestaq',
          altName: 'Alternate Name',
          category: 'Unknown',
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
          objectType: 'ROCKET BODY',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        origin: 'THIRD_PARTY_DATASOURCE',
        ownerType: 'Commercial',
        taskable: false,
        urls: ['URL1', 'URL2'],
      },
      idEntity: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      maxSpeed: 2655.1,
      minReqRunwayFt: 3000,
      minReqRunwayM: 1000,
      nominalTATime: 500,
      notes: 'Notes for this aircraft',
      origin: 'THIRD_PARTY_DATASOURCE',
      owner: '437AW',
      serialNumber: '7007187',
      tailNumber: 'N702JG',
    });
  });

  test('list', async () => {
    const responsePromise = client.aircraft.list();
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
    await expect(client.aircraft.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.aircraft.count();
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
    await expect(client.aircraft.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.aircraft.queryhelp();
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
    await expect(client.aircraft.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tupleQuery: only required params', async () => {
    const responsePromise = client.aircraft.tupleQuery({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tupleQuery: required and optional params', async () => {
    const response = await client.aircraft.tupleQuery({ columns: 'columns' });
  });
});
