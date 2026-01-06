// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trackRoute', () => {
  test('create: only required params', async () => {
    const responsePromise = client.trackRoute.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      lastUpdateDate: '2024-09-17T16:00:00.123Z',
      source: 'Bluestaq',
      type: 'AIR REFUELING',
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
    const response = await client.trackRoute.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      lastUpdateDate: '2024-09-17T16:00:00.123Z',
      source: 'Bluestaq',
      type: 'AIR REFUELING',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      altitudeBlocks: [
        {
          altitudeSequenceId: 'A1',
          lowerAltitude: 27000.1,
          upperAltitude: 27200.5,
        },
      ],
      apnSetting: '1-3-1',
      apxBeaconCode: '5/1',
      artccMessage: 'OAKLAND CTR/GUAM CERAP',
      creatingOrg: 'HQPAC',
      direction: 'NE',
      effectiveDate: '2024-09-17T16:00:00.123Z',
      externalId: 'GDSSMH121004232315303094',
      lastUsedDate: '2024-09-17T16:00:00.123Z',
      locationTrackId: 'POACHR',
      origin: 'THIRD_PARTY_DATASOURCE',
      poc: [
        {
          office: 'A34',
          phone: '8675309',
          pocName: 'Fred Smith',
          pocOrg: 'HQAF',
          pocSequenceId: 1,
          pocTypeName: 'Originator',
          rank: 'Capt',
          remark: 'POC remark.',
          username: 'fgsmith',
        },
      ],
      priFreq: 357.5,
      receiverTankerCHCode: '31/094',
      regionCode: '5',
      regionName: 'North America',
      reviewDate: '2024-09-16T16:00:00.123Z',
      routePoints: [
        {
          altCountryCode: 'IZ',
          countryCode: 'NL',
          dafifPt: true,
          magDec: 7.35,
          navaid: 'HTO',
          navaidLength: 100.2,
          navaidType: 'VORTAC',
          ptLat: 45.23,
          ptLon: 179.1,
          ptSequenceId: 1,
          ptTypeCode: 'EP',
          ptTypeName: 'ENTRY POINT',
          waypointName: 'KCHS',
        },
      ],
      schedulerOrgName: '97 OSS/OSOS DSN 866-5555',
      schedulerOrgUnit: '612 AOC',
      secFreq: 319.7,
      shortName: 'CH61',
      sic: 'N',
      trackId: 'CH61A',
      trackName: 'CH61 POST',
      typeCode: 'V',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.trackRoute.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      lastUpdateDate: '2024-09-17T16:00:00.123Z',
      source: 'Bluestaq',
      type: 'AIR REFUELING',
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
    const response = await client.trackRoute.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      lastUpdateDate: '2024-09-17T16:00:00.123Z',
      source: 'Bluestaq',
      type: 'AIR REFUELING',
      body_id: '026dd511-8ba5-47d3-9909-836149f87686',
      altitudeBlocks: [
        {
          altitudeSequenceId: 'A1',
          lowerAltitude: 27000.1,
          upperAltitude: 27200.5,
        },
      ],
      apnSetting: '1-3-1',
      apxBeaconCode: '5/1',
      artccMessage: 'OAKLAND CTR/GUAM CERAP',
      creatingOrg: 'HQPAC',
      direction: 'NE',
      effectiveDate: '2024-09-17T16:00:00.123Z',
      externalId: 'GDSSMH121004232315303094',
      lastUsedDate: '2024-09-17T16:00:00.123Z',
      locationTrackId: 'POACHR',
      origin: 'THIRD_PARTY_DATASOURCE',
      poc: [
        {
          office: 'A34',
          phone: '8675309',
          pocName: 'Fred Smith',
          pocOrg: 'HQAF',
          pocSequenceId: 1,
          pocTypeName: 'Originator',
          rank: 'Capt',
          remark: 'POC remark.',
          username: 'fgsmith',
        },
      ],
      priFreq: 357.5,
      receiverTankerCHCode: '31/094',
      regionCode: '5',
      regionName: 'North America',
      reviewDate: '2024-09-16T16:00:00.123Z',
      routePoints: [
        {
          altCountryCode: 'IZ',
          countryCode: 'NL',
          dafifPt: true,
          magDec: 7.35,
          navaid: 'HTO',
          navaidLength: 100.2,
          navaidType: 'VORTAC',
          ptLat: 45.23,
          ptLon: 179.1,
          ptSequenceId: 1,
          ptTypeCode: 'EP',
          ptTypeName: 'ENTRY POINT',
          waypointName: 'KCHS',
        },
      ],
      schedulerOrgName: '97 OSS/OSOS DSN 866-5555',
      schedulerOrgUnit: '612 AOC',
      secFreq: 319.7,
      shortName: 'CH61',
      sic: 'N',
      trackId: 'CH61A',
      trackName: 'CH61 POST',
      typeCode: 'V',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.trackRoute.list({ lastUpdateDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.trackRoute.list({
      lastUpdateDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('delete', async () => {
    const responsePromise = client.trackRoute.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: only required params', async () => {
    const responsePromise = client.trackRoute.count({ lastUpdateDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.trackRoute.count({
      lastUpdateDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.trackRoute.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          lastUpdateDate: '2024-09-17T16:00:00.123Z',
          source: 'Bluestaq',
          type: 'AIR REFUELING',
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
    const response = await client.trackRoute.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          lastUpdateDate: '2024-09-17T16:00:00.123Z',
          source: 'Bluestaq',
          type: 'AIR REFUELING',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          altitudeBlocks: [
            {
              altitudeSequenceId: 'A1',
              lowerAltitude: 27000.1,
              upperAltitude: 27200.5,
            },
          ],
          apnSetting: '1-3-1',
          apxBeaconCode: '5/1',
          artccMessage: 'OAKLAND CTR/GUAM CERAP',
          creatingOrg: 'HQPAC',
          direction: 'NE',
          effectiveDate: '2024-09-17T16:00:00.123Z',
          externalId: 'GDSSMH121004232315303094',
          lastUsedDate: '2024-09-17T16:00:00.123Z',
          locationTrackId: 'POACHR',
          origin: 'THIRD_PARTY_DATASOURCE',
          poc: [
            {
              office: 'A34',
              phone: '8675309',
              pocName: 'Fred Smith',
              pocOrg: 'HQAF',
              pocSequenceId: 1,
              pocTypeName: 'Originator',
              rank: 'Capt',
              remark: 'POC remark.',
              username: 'fgsmith',
            },
          ],
          priFreq: 357.5,
          receiverTankerCHCode: '31/094',
          regionCode: '5',
          regionName: 'North America',
          reviewDate: '2024-09-16T16:00:00.123Z',
          routePoints: [
            {
              altCountryCode: 'IZ',
              countryCode: 'NL',
              dafifPt: true,
              magDec: 7.35,
              navaid: 'HTO',
              navaidLength: 100.2,
              navaidType: 'VORTAC',
              ptLat: 45.23,
              ptLon: 179.1,
              ptSequenceId: 1,
              ptTypeCode: 'EP',
              ptTypeName: 'ENTRY POINT',
              waypointName: 'KCHS',
            },
          ],
          schedulerOrgName: '97 OSS/OSOS DSN 866-5555',
          schedulerOrgUnit: '612 AOC',
          secFreq: 319.7,
          shortName: 'CH61',
          sic: 'N',
          trackId: 'CH61A',
          trackName: 'CH61 POST',
          typeCode: 'V',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.trackRoute.get('id');
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
      client.trackRoute.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.trackRoute.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.trackRoute.tuple({
      columns: 'columns',
      lastUpdateDate: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.trackRoute.tuple({
      columns: 'columns',
      lastUpdateDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.trackRoute.unvalidatedPublish({
      classificationMarking: 'U',
      dataMode: 'TEST',
      lastUpdateDate: '2024-09-17T16:00:00.123Z',
      source: 'Bluestaq',
      type: 'AIR REFUELING',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.trackRoute.unvalidatedPublish({
      classificationMarking: 'U',
      dataMode: 'TEST',
      lastUpdateDate: '2024-09-17T16:00:00.123Z',
      source: 'Bluestaq',
      type: 'AIR REFUELING',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      altitudeBlocks: [
        {
          altitudeSequenceId: 'A1',
          lowerAltitude: 27000.1,
          upperAltitude: 27200.5,
        },
      ],
      apnSetting: '1-3-1',
      apxBeaconCode: '5/1',
      artccMessage: 'OAKLAND CTR/GUAM CERAP',
      creatingOrg: 'HQPAC',
      direction: 'NE',
      effectiveDate: '2024-09-17T16:00:00.123Z',
      externalId: 'GDSSMH121004232315303094',
      lastUsedDate: '2024-09-17T16:00:00.123Z',
      locationTrackId: 'POACHR',
      origin: 'THIRD_PARTY_DATASOURCE',
      poc: [
        {
          office: 'A34',
          phone: '8675309',
          pocName: 'Fred Smith',
          pocOrg: 'HQAF',
          pocSequenceId: 1,
          pocTypeName: 'Originator',
          rank: 'Capt',
          remark: 'POC remark.',
          username: 'fgsmith',
        },
      ],
      priFreq: 357.5,
      receiverTankerCHCode: '31/094',
      regionCode: '5',
      regionName: 'North America',
      reviewDate: '2024-09-16T16:00:00.123Z',
      routePoints: [
        {
          altCountryCode: 'IZ',
          countryCode: 'NL',
          dafifPt: true,
          magDec: 7.35,
          navaid: 'HTO',
          navaidLength: 100.2,
          navaidType: 'VORTAC',
          ptLat: 45.23,
          ptLon: 179.1,
          ptSequenceId: 1,
          ptTypeCode: 'EP',
          ptTypeName: 'ENTRY POINT',
          waypointName: 'KCHS',
        },
      ],
      schedulerOrgName: '97 OSS/OSOS DSN 866-5555',
      schedulerOrgUnit: '612 AOC',
      secFreq: 319.7,
      shortName: 'CH61',
      sic: 'N',
      trackId: 'CH61A',
      trackName: 'CH61 POST',
      typeCode: 'V',
    });
  });
});
