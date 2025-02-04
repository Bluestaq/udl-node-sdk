// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vessel', () => {
  test('create: only required params', async () => {
    const responsePromise = client.vessel.create({
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
    const response = await client.vessel.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      altVesselId: '590b5194fc32e75dd00682ba',
      callsign: 'V2OZ',
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
      firstSeen: '2018-01-01T16:00:00.123Z',
      hullNum: 'A30081',
      idEntity: 'ENTITY-ID',
      idOrganization: '0147f777-w09a-835f-85aa-0a07a730fgg0',
      imon: 9566356,
      length: 511.1,
      maxDraught: 21.1,
      maxSpeed: 32.5,
      mmsi: '416450000',
      numBlades: 4,
      numShafts: 3,
      origin: 'THIRD_PARTY_DATASOURCE',
      propType: 'Diesel',
      sconum: 'B45524',
      status: 'In Service/Commission',
      sternType: 'Cruiser',
      vesselBuilder: 'Samsung Heavy Inds - Geoje',
      vesselClass: 'Nimitz',
      vesselDescription: 'Search and Rescue Vessel',
      vesselFlag: 'United States',
      vesselName: 'DORNUM',
      vesselType: 'Passenger',
      vslWt: 3423.76,
      width: 24.1,
      yearBuilt: '2014',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.vessel.update('id', {
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
    const response = await client.vessel.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      source: 'Bluestaq',
      id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      altVesselId: '590b5194fc32e75dd00682ba',
      callsign: 'V2OZ',
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
      firstSeen: '2018-01-01T16:00:00.123Z',
      hullNum: 'A30081',
      idEntity: 'ENTITY-ID',
      idOrganization: '0147f777-w09a-835f-85aa-0a07a730fgg0',
      imon: 9566356,
      length: 511.1,
      maxDraught: 21.1,
      maxSpeed: 32.5,
      mmsi: '416450000',
      numBlades: 4,
      numShafts: 3,
      origin: 'THIRD_PARTY_DATASOURCE',
      propType: 'Diesel',
      sconum: 'B45524',
      status: 'In Service/Commission',
      sternType: 'Cruiser',
      vesselBuilder: 'Samsung Heavy Inds - Geoje',
      vesselClass: 'Nimitz',
      vesselDescription: 'Search and Rescue Vessel',
      vesselFlag: 'United States',
      vesselName: 'DORNUM',
      vesselType: 'Passenger',
      vslWt: 3423.76,
      width: 24.1,
      yearBuilt: '2014',
    });
  });

  test('list', async () => {
    const responsePromise = client.vessel.list();
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
    await expect(client.vessel.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.vessel.count();
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
    await expect(client.vessel.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.vessel.createBulk([
      { classificationMarking: 'U', dataMode: 'REAL', source: 'Bluestaq' },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.vessel.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        source: 'Bluestaq',
        id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
        altVesselId: '590b5194fc32e75dd00682ba',
        callsign: 'V2OZ',
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
        firstSeen: '2018-01-01T16:00:00.123Z',
        hullNum: 'A30081',
        idEntity: 'ENTITY-ID',
        idOrganization: '0147f777-w09a-835f-85aa-0a07a730fgg0',
        imon: 9566356,
        length: 511.1,
        maxDraught: 21.1,
        maxSpeed: 32.5,
        mmsi: '416450000',
        numBlades: 4,
        numShafts: 3,
        origin: 'THIRD_PARTY_DATASOURCE',
        propType: 'Diesel',
        sconum: 'B45524',
        status: 'In Service/Commission',
        sternType: 'Cruiser',
        vesselBuilder: 'Samsung Heavy Inds - Geoje',
        vesselClass: 'Nimitz',
        vesselDescription: 'Search and Rescue Vessel',
        vesselFlag: 'United States',
        vesselName: 'DORNUM',
        vesselType: 'Passenger',
        vslWt: 3423.76,
        width: 24.1,
        yearBuilt: '2014',
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.vessel.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.vessel.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.vessel.queryhelp();
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
    await expect(client.vessel.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.vessel.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.vessel.tuple({ columns: 'columns' });
  });
});
