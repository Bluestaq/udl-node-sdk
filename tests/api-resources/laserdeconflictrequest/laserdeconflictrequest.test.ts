// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource laserdeconflictrequest', () => {
  test('create: only required params', async () => {
    const responsePromise = client.laserdeconflictrequest.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      endDate: '2023-07-20T00:00:00.123Z',
      idLaserEmitters: ['2346c0a0-585f-4232-af5d-93bad320fdc0', '4446c0a0-585f-4232-af5d-93bad320fbb1'],
      numTargets: 25,
      requestId: '3856c0a0-585f-4232-af5d-93bad320fac6',
      requestTs: '2023-07-15T12:30:30.123Z',
      source: 'Bluestaq',
      startDate: '2023-07-19T00:00:00.123Z',
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
    const response = await client.laserdeconflictrequest.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      endDate: '2023-07-20T00:00:00.123Z',
      idLaserEmitters: ['2346c0a0-585f-4232-af5d-93bad320fdc0', '4446c0a0-585f-4232-af5d-93bad320fbb1'],
      numTargets: 25,
      requestId: '3856c0a0-585f-4232-af5d-93bad320fac6',
      requestTs: '2023-07-15T12:30:30.123Z',
      source: 'Bluestaq',
      startDate: '2023-07-19T00:00:00.123Z',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      centerlineAzimuth: 20.3,
      centerlineElevation: 19.434,
      defaultCHA: 2.5,
      enableDSS: true,
      fixedPoints: [{ latitude: -10.18, longitude: -179.98, height: -18.13 }],
      geopotentialModel: 'WGS84',
      laserDeconflictTargets: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          azimuth: 27.91,
          azimuthEnd: 90.5,
          azimuthIncrement: 1.5,
          azimuthStart: 60.5,
          centerlineAzimuth: 11.02,
          centerlineElevation: 1.68,
          declination: 10.23,
          elevation: 17.09,
          elevationEnd: 88.05,
          elevationIncrement: 0.5,
          elevationStart: 67.05,
          fixedPoints: [{ latitude: -10.18, longitude: -179.98, height: -18.13 }],
          idLaserDeconflictRequest: '026dd511-8ba5-47d3-9909-836149f87686',
          lengthCenterline: 369.79,
          lengthLeftRight: 20.23,
          lengthUpDown: 28.67,
          maximumHeight: 0.5,
          minimumHeight: 0.25,
          origin: 'THIRD_PARTY_DATASOURCE',
          ra: 11.93,
          solarSystemBody: 'MARS',
          starNumber: 3791,
          targetNumber: 100,
          targetObjectNo: 46852,
        },
      ],
      laserSystemName: 'HEL-1',
      lengthCenterline: 79.35,
      lengthLeftRight: 56.23,
      lengthUpDown: 22.6,
      maximumHeight: 440.3,
      minimumHeight: 0.5,
      missionName: 'USSF LP 18-1 Test Laser',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      platformLocationName: 'Vandenberg',
      platformLocationType: 'FIXED_POINT',
      programId: 'performance_test_llh-sat',
      propagator: 'GP',
      protectList: [1234, 5678],
      satNo: 46852,
      sourceEnabled: false,
      status: 'REQUESTED',
      tags: ['TAG1', 'TAG2'],
      targetEnabled: true,
      targetType: 'BOX_CENTERPOINT_LINE',
      transactionId: 'TRANSACTION-ID',
      treatEarthAs: 'VICTIM',
      useFieldOfRegard: true,
      victimEnabled: true,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.laserdeconflictrequest.list({ startDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.laserdeconflictrequest.list({
      startDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.laserdeconflictrequest.count({ startDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.laserdeconflictrequest.count({
      startDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('get', async () => {
    const responsePromise = client.laserdeconflictrequest.get('id');
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
      client.laserdeconflictrequest.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.laserdeconflictrequest.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.laserdeconflictrequest.tuple({
      columns: 'columns',
      startDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.laserdeconflictrequest.tuple({
      columns: 'columns',
      startDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.laserdeconflictrequest.unvalidatedPublish({
      classificationMarking: 'U',
      dataMode: 'TEST',
      endDate: '2023-07-20T00:00:00.123Z',
      idLaserEmitters: ['2346c0a0-585f-4232-af5d-93bad320fdc0', '4446c0a0-585f-4232-af5d-93bad320fbb1'],
      numTargets: 25,
      requestId: '3856c0a0-585f-4232-af5d-93bad320fac6',
      requestTs: '2023-07-15T12:30:30.123Z',
      source: 'Bluestaq',
      startDate: '2023-07-19T00:00:00.123Z',
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
    const response = await client.laserdeconflictrequest.unvalidatedPublish({
      classificationMarking: 'U',
      dataMode: 'TEST',
      endDate: '2023-07-20T00:00:00.123Z',
      idLaserEmitters: ['2346c0a0-585f-4232-af5d-93bad320fdc0', '4446c0a0-585f-4232-af5d-93bad320fbb1'],
      numTargets: 25,
      requestId: '3856c0a0-585f-4232-af5d-93bad320fac6',
      requestTs: '2023-07-15T12:30:30.123Z',
      source: 'Bluestaq',
      startDate: '2023-07-19T00:00:00.123Z',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      centerlineAzimuth: 20.3,
      centerlineElevation: 19.434,
      defaultCHA: 2.5,
      enableDSS: true,
      fixedPoints: [{ latitude: -10.18, longitude: -179.98, height: -18.13 }],
      geopotentialModel: 'WGS84',
      laserDeconflictTargets: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          azimuth: 27.91,
          azimuthEnd: 90.5,
          azimuthIncrement: 1.5,
          azimuthStart: 60.5,
          centerlineAzimuth: 11.02,
          centerlineElevation: 1.68,
          declination: 10.23,
          elevation: 17.09,
          elevationEnd: 88.05,
          elevationIncrement: 0.5,
          elevationStart: 67.05,
          fixedPoints: [{ latitude: -10.18, longitude: -179.98, height: -18.13 }],
          idLaserDeconflictRequest: '026dd511-8ba5-47d3-9909-836149f87686',
          lengthCenterline: 369.79,
          lengthLeftRight: 20.23,
          lengthUpDown: 28.67,
          maximumHeight: 0.5,
          minimumHeight: 0.25,
          origin: 'THIRD_PARTY_DATASOURCE',
          ra: 11.93,
          solarSystemBody: 'MARS',
          starNumber: 3791,
          targetNumber: 100,
          targetObjectNo: 46852,
        },
      ],
      laserSystemName: 'HEL-1',
      lengthCenterline: 79.35,
      lengthLeftRight: 56.23,
      lengthUpDown: 22.6,
      maximumHeight: 440.3,
      minimumHeight: 0.5,
      missionName: 'USSF LP 18-1 Test Laser',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      platformLocationName: 'Vandenberg',
      platformLocationType: 'FIXED_POINT',
      programId: 'performance_test_llh-sat',
      propagator: 'GP',
      protectList: [1234, 5678],
      satNo: 46852,
      sourceEnabled: false,
      status: 'REQUESTED',
      tags: ['TAG1', 'TAG2'],
      targetEnabled: true,
      targetType: 'BOX_CENTERPOINT_LINE',
      transactionId: 'TRANSACTION-ID',
      treatEarthAs: 'VICTIM',
      useFieldOfRegard: true,
      victimEnabled: true,
    });
  });
});
