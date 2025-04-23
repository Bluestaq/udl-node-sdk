// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource manifoldelset', () => {
  test('create: only required params', async () => {
    const responsePromise = client.manifoldelset.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      epoch: '2021-01-01T01:01:01.123456Z',
      idManifold: 'REF-MANIFOLD-ID',
      source: 'Bluestaq',
      tmpSatNo: 10,
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
    const response = await client.manifoldelset.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      epoch: '2021-01-01T01:01:01.123456Z',
      idManifold: 'REF-MANIFOLD-ID',
      source: 'Bluestaq',
      tmpSatNo: 10,
      id: 'MANIFOLDELSET-ID',
      apogee: 10.23,
      argOfPerigee: 10.23,
      bStar: 10.23,
      eccentricity: 0.5,
      inclination: 90.23,
      meanAnomaly: 10.23,
      meanMotion: 10.23,
      meanMotionDDot: 10.23,
      meanMotionDot: 10.23,
      origin: 'THIRD_PARTY_DATASOURCE',
      perigee: 10.23,
      period: 10.23,
      raan: 10.23,
      revNo: 123,
      semiMajorAxis: 10.23,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.manifoldelset.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      epoch: '2021-01-01T01:01:01.123456Z',
      idManifold: 'REF-MANIFOLD-ID',
      source: 'Bluestaq',
      tmpSatNo: 10,
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
    const response = await client.manifoldelset.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      epoch: '2021-01-01T01:01:01.123456Z',
      idManifold: 'REF-MANIFOLD-ID',
      source: 'Bluestaq',
      tmpSatNo: 10,
      body_id: 'MANIFOLDELSET-ID',
      apogee: 10.23,
      argOfPerigee: 10.23,
      bStar: 10.23,
      eccentricity: 0.5,
      inclination: 90.23,
      meanAnomaly: 10.23,
      meanMotion: 10.23,
      meanMotionDDot: 10.23,
      meanMotionDot: 10.23,
      origin: 'THIRD_PARTY_DATASOURCE',
      perigee: 10.23,
      period: 10.23,
      raan: 10.23,
      revNo: 123,
      semiMajorAxis: 10.23,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.manifoldelset.list({ epoch: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.manifoldelset.list({ epoch: '2019-12-27T18:11:19.117Z' });
  });

  test('delete', async () => {
    const responsePromise = client.manifoldelset.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: only required params', async () => {
    const responsePromise = client.manifoldelset.count({ epoch: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.manifoldelset.count({ epoch: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.manifoldelset.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          epoch: '2021-01-01T01:01:01.123456Z',
          idManifold: 'REF-MANIFOLD-ID',
          source: 'Bluestaq',
          tmpSatNo: 10,
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
    const response = await client.manifoldelset.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          epoch: '2021-01-01T01:01:01.123456Z',
          idManifold: 'REF-MANIFOLD-ID',
          source: 'Bluestaq',
          tmpSatNo: 10,
          id: 'MANIFOLDELSET-ID',
          apogee: 10.23,
          argOfPerigee: 10.23,
          bStar: 10.23,
          eccentricity: 0.5,
          inclination: 90.23,
          meanAnomaly: 10.23,
          meanMotion: 10.23,
          meanMotionDDot: 10.23,
          meanMotionDot: 10.23,
          origin: 'THIRD_PARTY_DATASOURCE',
          perigee: 10.23,
          period: 10.23,
          raan: 10.23,
          revNo: 123,
          semiMajorAxis: 10.23,
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.manifoldelset.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.manifoldelset.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.manifoldelset.tuple({
      columns: 'columns',
      epoch: '2019-12-27T18:11:19.117Z',
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
    const response = await client.manifoldelset.tuple({
      columns: 'columns',
      epoch: '2019-12-27T18:11:19.117Z',
    });
  });
});
