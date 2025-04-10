// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ephemerisSets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.ephemerisSets.create({
      category: 'ANALYST',
      classificationMarking: 'U',
      dataMode: 'TEST',
      numPoints: 1,
      pointEndTime: '2018-01-01T16:00:00.123456Z',
      pointStartTime: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      type: 'LAUNCH',
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
    const response = await client.ephemerisSets.create({
      category: 'ANALYST',
      classificationMarking: 'U',
      dataMode: 'TEST',
      numPoints: 1,
      pointEndTime: '2018-01-01T16:00:00.123456Z',
      pointStartTime: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      type: 'LAUNCH',
      id: 'EPHEMERISSET-ID',
      bDot: 1.1,
      centBody: 'Earth',
      comments: 'Example notes',
      covReferenceFrame: 'J2000',
      description: 'Example notes',
      descriptor: 'Example descriptor',
      dragModel: 'JAC70',
      edr: 1.1,
      ephemerisList: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          ts: '2018-01-01T16:00:00.123456Z',
          xpos: 1.1,
          xvel: 1.1,
          ypos: 1.1,
          yvel: 1.1,
          zpos: 1.1,
          zvel: 1.1,
          id: 'EPHEMERIS-ID',
          cov: [0],
          esId: 'ES-ID',
          idOnOrbit: 'ONORBIT-ID',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          xaccel: 1.1,
          yaccel: 1.1,
          zaccel: 1.1,
        },
      ],
      filename: 'Example file name',
      geopotentialModel: 'GEM-T3',
      hasAccel: false,
      hasCov: false,
      hasMnvr: false,
      idManeuvers: ['EXAMPLE_ID1', 'EXAMPLE_ID2'],
      idOnOrbit: 'ONORBIT-ID',
      idStateVector: 'STATEVECTOR-ID',
      integrator: 'COWELL',
      interpolation: 'LINEAR',
      interpolationDegree: 5,
      lunarSolar: false,
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      pedigree: 'PROPAGATED',
      referenceFrame: 'J2000',
      satNo: 2,
      solidEarthTides: false,
      stepSize: 1,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      transactionId: 'TRANSACTION-ID',
      usableEndTime: '2018-01-01T20:50:00.123456Z',
      usableStartTime: '2018-01-01T16:10:00.123456Z',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.ephemerisSets.retrieve('id');
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
    await expect(client.ephemerisSets.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.ephemerisSets.list();
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
    await expect(client.ephemerisSets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ephemerisSets.list(
        { pointEndTime: '2019-12-27T18:11:19.117Z', pointStartTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.ephemerisSets.count();
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
    await expect(client.ephemerisSets.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ephemerisSets.count(
        { pointEndTime: '2019-12-27T18:11:19.117Z', pointStartTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('fileRetrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ephemerisSets.fileRetrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.ephemerisSets.queryhelp();
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
    await expect(client.ephemerisSets.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.ephemerisSets.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.ephemerisSets.tuple({
      columns: 'columns',
      pointEndTime: '2019-12-27T18:11:19.117Z',
      pointStartTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
