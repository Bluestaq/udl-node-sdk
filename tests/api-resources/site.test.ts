// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource site', () => {
  test('create: only required params', async () => {
    const responsePromise = client.site.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Site Name',
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
    const response = await client.site.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Site Name',
      source: 'Bluestaq',
      id: 'SITE-ID',
      activity: 'OCC',
      airDefArea: 'AL006',
      allegiance: 'OTHR',
      altAllegiance: 'HL',
      beNumber: '0427RT1030',
      catCode: '20345',
      catText: 'Radar Facility, General',
      classRating: '1',
      condition: 'RDY',
      conditionAvail: 'A',
      coord: '340000000N0430000000E',
      coordDatum: 'WGS',
      coordDerivAcc: 12.345,
      elevMsl: 123.45,
      elevMslConfLvl: 50,
      elevMslDerivAcc: 12.34,
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
      eval: 7,
      faa: 'FAA1',
      fpa: 'EOB',
      functPrimary: 'JG',
      geoArea: 'E2',
      geoidalMslSep: 12.34,
      grade: 5,
      iata: 'AAA',
      icao: 'ICA1',
      ident: 'FRIEND',
      idEntity: 'ENTITY-ID',
      idParentSite: 'ID-Parent-Site',
      lzUsage: 'AF',
      maxRunwayLength: 1000,
      milGrid: '4QFJ12345678',
      milGridSys: 'UTM',
      msnPrimary: 'AA',
      msnPrimarySpec: 'AB',
      notes: 'Example Notes',
      nucCap: 'A',
      operStatus: 'OPR',
      origin: 'THIRD_PARTY_DATASOURCE',
      origLzId: 'ORIG-LZ-ID',
      origSiteID: 'ORIG-SITE-ID',
      osuffix: 'BB002',
      pin: '25200',
      polSubdiv: 'IZO7',
      popArea: true,
      popAreaProx: 12.345,
      recStatus: 'A',
      referenceDoc: 'Provider Reference Documentation',
      resProd: 'RT',
      reviewDate: '2008-06-10',
      runways: 5,
      symCode: 'SOGPU----------',
      type: 'AIRBASE',
      usage: 'MILITARY',
      utm: '19P4390691376966',
      vegHt: 3,
      vegType: 'FR',
      wac: '0427',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.site.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Site Name',
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
    const response = await client.site.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Site Name',
      source: 'Bluestaq',
      body_id: 'SITE-ID',
      activity: 'OCC',
      airDefArea: 'AL006',
      allegiance: 'OTHR',
      altAllegiance: 'HL',
      beNumber: '0427RT1030',
      catCode: '20345',
      catText: 'Radar Facility, General',
      classRating: '1',
      condition: 'RDY',
      conditionAvail: 'A',
      coord: '340000000N0430000000E',
      coordDatum: 'WGS',
      coordDerivAcc: 12.345,
      elevMsl: 123.45,
      elevMslConfLvl: 50,
      elevMslDerivAcc: 12.34,
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
      eval: 7,
      faa: 'FAA1',
      fpa: 'EOB',
      functPrimary: 'JG',
      geoArea: 'E2',
      geoidalMslSep: 12.34,
      grade: 5,
      iata: 'AAA',
      icao: 'ICA1',
      ident: 'FRIEND',
      idEntity: 'ENTITY-ID',
      idParentSite: 'ID-Parent-Site',
      lzUsage: 'AF',
      maxRunwayLength: 1000,
      milGrid: '4QFJ12345678',
      milGridSys: 'UTM',
      msnPrimary: 'AA',
      msnPrimarySpec: 'AB',
      notes: 'Example Notes',
      nucCap: 'A',
      operStatus: 'OPR',
      origin: 'THIRD_PARTY_DATASOURCE',
      origLzId: 'ORIG-LZ-ID',
      origSiteID: 'ORIG-SITE-ID',
      osuffix: 'BB002',
      pin: '25200',
      polSubdiv: 'IZO7',
      popArea: true,
      popAreaProx: 12.345,
      recStatus: 'A',
      referenceDoc: 'Provider Reference Documentation',
      resProd: 'RT',
      reviewDate: '2008-06-10',
      runways: 5,
      symCode: 'SOGPU----------',
      type: 'AIRBASE',
      usage: 'MILITARY',
      utm: '19P4390691376966',
      vegHt: 3,
      vegType: 'FR',
      wac: '0427',
    });
  });

  test('list', async () => {
    const responsePromise = client.site.list();
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
    await expect(client.site.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.site.count();
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
    await expect(client.site.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.site.get('id');
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
    await expect(client.site.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.site.queryhelp();
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
    await expect(client.site.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.site.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.site.tuple({ columns: 'columns' });
  });
});
