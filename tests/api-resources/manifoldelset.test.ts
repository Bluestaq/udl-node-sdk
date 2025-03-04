// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource manifoldelset', () => {
  test('create: only required params', async () => {
    const responsePromise = client.manifoldelset.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
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
      dataMode: 'REAL',
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
      dataMode: 'REAL',
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
      dataMode: 'REAL',
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

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.manifoldelset.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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

  test('createBulk', async () => {
    const responsePromise = client.manifoldelset.createBulk();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.manifoldelset.createBulk({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('createBulk: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.manifoldelset.createBulk(
        [
          {
            classificationMarking: 'U',
            dataMode: 'REAL',
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
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
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

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.manifoldelset.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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

  test('queryhelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.manifoldelset.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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
