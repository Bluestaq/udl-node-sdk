// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource objectOfInterest', () => {
  test('create: only required params', async () => {
    const responsePromise = client.objectOfInterest.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOnOrbit: 'REF-ONORBIT-ID',
      sensorTaskingStartTime: '2021-01-01T01:01:01.123Z',
      source: 'Bluestaq',
      statusDate: '2021-01-01T01:01:01.123Z',
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
    const response = await client.objectOfInterest.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOnOrbit: 'REF-ONORBIT-ID',
      sensorTaskingStartTime: '2021-01-01T01:01:01.123Z',
      source: 'Bluestaq',
      statusDate: '2021-01-01T01:01:01.123Z',
      id: 'OBJECTOFINTEREST-ID',
      affectedObjects: ['AFFECTEDOBJECT1-ID', 'AFFECTEDOBJECT2-ID'],
      apogee: 123.4,
      argOfPerigee: 123.4,
      bStar: 123.4,
      deltaTs: [1.1, 2.2, 3.3],
      deltaVs: [1.1, 2.2, 3.3],
      description: 'Example description',
      eccentricity: 123.4,
      elsetEpoch: '2021-01-01T01:01:01.123456Z',
      inclination: 123.4,
      lastObTime: '2021-01-01T01:01:01.123456Z',
      meanAnomaly: 123.4,
      meanMotion: 123.4,
      meanMotionDDot: 123.4,
      meanMotionDot: 123.4,
      missedObTime: '2021-01-01T01:01:01.123456Z',
      name: 'Example_name',
      origin: 'THIRD_PARTY_DATASOURCE',
      perigee: 123.4,
      period: 123.4,
      priority: 7,
      raan: 123.4,
      revNo: 123,
      satNo: 12,
      semiMajorAxis: 123.4,
      sensorTaskingStopTime: '2021-01-01T01:01:01.123Z',
      status: 'OPEN',
      svEpoch: '2021-01-01T01:01:01.123456Z',
      x: 123.4,
      xvel: 123.4,
      y: 123.4,
      yvel: 123.4,
      z: 123.4,
      zvel: 123.4,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.objectOfInterest.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOnOrbit: 'REF-ONORBIT-ID',
      sensorTaskingStartTime: '2021-01-01T01:01:01.123Z',
      source: 'Bluestaq',
      statusDate: '2021-01-01T01:01:01.123Z',
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
    const response = await client.objectOfInterest.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOnOrbit: 'REF-ONORBIT-ID',
      sensorTaskingStartTime: '2021-01-01T01:01:01.123Z',
      source: 'Bluestaq',
      statusDate: '2021-01-01T01:01:01.123Z',
      body_id: 'OBJECTOFINTEREST-ID',
      affectedObjects: ['AFFECTEDOBJECT1-ID', 'AFFECTEDOBJECT2-ID'],
      apogee: 123.4,
      argOfPerigee: 123.4,
      bStar: 123.4,
      deltaTs: [1.1, 2.2, 3.3],
      deltaVs: [1.1, 2.2, 3.3],
      description: 'Example description',
      eccentricity: 123.4,
      elsetEpoch: '2021-01-01T01:01:01.123456Z',
      inclination: 123.4,
      lastObTime: '2021-01-01T01:01:01.123456Z',
      meanAnomaly: 123.4,
      meanMotion: 123.4,
      meanMotionDDot: 123.4,
      meanMotionDot: 123.4,
      missedObTime: '2021-01-01T01:01:01.123456Z',
      name: 'Example_name',
      origin: 'THIRD_PARTY_DATASOURCE',
      perigee: 123.4,
      period: 123.4,
      priority: 7,
      raan: 123.4,
      revNo: 123,
      satNo: 12,
      semiMajorAxis: 123.4,
      sensorTaskingStopTime: '2021-01-01T01:01:01.123Z',
      status: 'OPEN',
      svEpoch: '2021-01-01T01:01:01.123456Z',
      x: 123.4,
      xvel: 123.4,
      y: 123.4,
      yvel: 123.4,
      z: 123.4,
      zvel: 123.4,
    });
  });

  test('list', async () => {
    const responsePromise = client.objectOfInterest.list();
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
      client.objectOfInterest.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.objectOfInterest.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.objectOfInterest.count();
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
      client.objectOfInterest.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.objectOfInterest.get('id');
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
      client.objectOfInterest.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.objectOfInterest.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.objectOfInterest.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.objectOfInterest.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
