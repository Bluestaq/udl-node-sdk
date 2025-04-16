// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource poi', () => {
  test('create: only required params', async () => {
    const responsePromise = client.poi.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'POI_NAME',
      poiid: 'POI-ID',
      source: 'Bluestaq',
      ts: '2020-01-01T16:00:00.123456Z',
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
    const response = await client.poi.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'POI_NAME',
      poiid: 'POI-ID',
      source: 'Bluestaq',
      ts: '2020-01-01T16:00:00.123456Z',
      id: 'POI-ID',
      activity: 'TRAINING',
      agjson:
        '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
      alt: 5.23,
      andims: 3,
      area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      asrid: 3,
      asset: 'PLATFORM_NAME',
      atext:
        'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      atype: 'Type1',
      az: 45.23,
      beNumber: '0427RT1030',
      ce: 10.23,
      cntct: 'Contact Info',
      conf: 0.5,
      desc: 'Description of the object',
      el: 45.23,
      elle: [125.5, 85.1, 125.75],
      env: 'SURFACE',
      groups: ['GROUP1', 'GROUP2'],
      how: 'h-g-i-g-o',
      ident: 'FRIEND',
      idWeatherReport: ['WEATHER-EVENT-ID1', 'WEATHER-EVENT-ID2'],
      lat: 45.23,
      le: 10.23,
      lon: 45.23,
      msnid: 'MSN-ID',
      orientation: 45.23,
      origin: 'THIRD_PARTY_DATASOURCE',
      plat: 'COMBAT_VEHICLE',
      pps: 'BDA',
      pri: 2,
      spec: 'LIGHT_TANK',
      srcIds: ['ID1', 'ID2'],
      srcTyps: ['TYPE1', 'TYPE2'],
      stale: '2020-01-01T16:00:00.123456Z',
      start: '2020-01-01T16:00:00.123456Z',
      tags: ['TAG1', 'TAG2'],
      transactionId: 'TRANSACTION-ID',
      trkid: 'TRK-ID',
      type: 'a-h-G',
      urls: ['URL1', 'URL2'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.poi.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.poi.list({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.poi.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.poi.count({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.poi.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'POI_NAME',
        poiid: 'POI-ID',
        source: 'Bluestaq',
        ts: '2020-01-01T16:00:00.123456Z',
      },
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
    const response = await client.poi.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'POI_NAME',
        poiid: 'POI-ID',
        source: 'Bluestaq',
        ts: '2020-01-01T16:00:00.123456Z',
        id: 'POI-ID',
        activity: 'TRAINING',
        agjson:
          '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
        alt: 5.23,
        andims: 3,
        area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        asrid: 3,
        asset: 'PLATFORM_NAME',
        atext:
          'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        atype: 'Type1',
        az: 45.23,
        beNumber: '0427RT1030',
        ce: 10.23,
        cntct: 'Contact Info',
        conf: 0.5,
        desc: 'Description of the object',
        el: 45.23,
        elle: [125.5, 85.1, 125.75],
        env: 'SURFACE',
        groups: ['GROUP1', 'GROUP2'],
        how: 'h-g-i-g-o',
        ident: 'FRIEND',
        idWeatherReport: ['WEATHER-EVENT-ID1', 'WEATHER-EVENT-ID2'],
        lat: 45.23,
        le: 10.23,
        lon: 45.23,
        msnid: 'MSN-ID',
        orientation: 45.23,
        origin: 'THIRD_PARTY_DATASOURCE',
        plat: 'COMBAT_VEHICLE',
        pps: 'BDA',
        pri: 2,
        spec: 'LIGHT_TANK',
        srcIds: ['ID1', 'ID2'],
        srcTyps: ['TYPE1', 'TYPE2'],
        stale: '2020-01-01T16:00:00.123456Z',
        start: '2020-01-01T16:00:00.123456Z',
        tags: ['TAG1', 'TAG2'],
        transactionId: 'TRANSACTION-ID',
        trkid: 'TRK-ID',
        type: 'a-h-G',
        urls: ['URL1', 'URL2'],
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.poi.get('id');
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
    await expect(client.poi.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.poi.queryhelp();
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
    await expect(client.poi.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.poi.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.poi.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.poi.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'POI_NAME',
        poiid: 'POI-ID',
        source: 'Bluestaq',
        ts: '2020-01-01T16:00:00.123456Z',
      },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.poi.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'POI_NAME',
        poiid: 'POI-ID',
        source: 'Bluestaq',
        ts: '2020-01-01T16:00:00.123456Z',
        id: 'POI-ID',
        activity: 'TRAINING',
        agjson:
          '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
        alt: 5.23,
        andims: 3,
        area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        asrid: 3,
        asset: 'PLATFORM_NAME',
        atext:
          'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
        atype: 'Type1',
        az: 45.23,
        beNumber: '0427RT1030',
        ce: 10.23,
        cntct: 'Contact Info',
        conf: 0.5,
        desc: 'Description of the object',
        el: 45.23,
        elle: [125.5, 85.1, 125.75],
        env: 'SURFACE',
        groups: ['GROUP1', 'GROUP2'],
        how: 'h-g-i-g-o',
        ident: 'FRIEND',
        idWeatherReport: ['WEATHER-EVENT-ID1', 'WEATHER-EVENT-ID2'],
        lat: 45.23,
        le: 10.23,
        lon: 45.23,
        msnid: 'MSN-ID',
        orientation: 45.23,
        origin: 'THIRD_PARTY_DATASOURCE',
        plat: 'COMBAT_VEHICLE',
        pps: 'BDA',
        pri: 2,
        spec: 'LIGHT_TANK',
        srcIds: ['ID1', 'ID2'],
        srcTyps: ['TYPE1', 'TYPE2'],
        stale: '2020-01-01T16:00:00.123456Z',
        start: '2020-01-01T16:00:00.123456Z',
        tags: ['TAG1', 'TAG2'],
        transactionId: 'TRANSACTION-ID',
        trkid: 'TRK-ID',
        type: 'a-h-G',
        urls: ['URL1', 'URL2'],
      },
    ]);
  });
});
