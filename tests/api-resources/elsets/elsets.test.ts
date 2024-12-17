// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource elsets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.elsets.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      epoch: '2019-12-27T18:11:19.117Z',
      source: 'source',
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
    const response = await client.elsets.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      epoch: '2019-12-27T18:11:19.117Z',
      source: 'source',
      agom: 0,
      algorithm: 'algorithm',
      apogee: 0,
      argOfPerigee: 0,
      ballisticCoeff: 0,
      bStar: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      descriptor: 'descriptor',
      eccentricity: 0,
      ephemType: 0,
      idElset: 'idElset',
      idOnOrbit: 'idOnOrbit',
      idOrbitDetermination: 'idOrbitDetermination',
      inclination: 0,
      line1: 'line1',
      line2: 'line2',
      meanAnomaly: 0,
      meanMotion: 0,
      meanMotionDDot: 0,
      meanMotionDot: 0,
      origin: 'origin',
      origNetwork: 'origNetwork',
      origObjectId: 'origObjectId',
      perigee: 0,
      period: 0,
      raan: 0,
      rawFileURI: 'rawFileURI',
      revNo: 0,
      satNo: 0,
      semiMajorAxis: 0,
      sourcedData: ['string'],
      sourcedDataTypes: ['string'],
      sourceDL: 'sourceDL',
      tags: ['string'],
      transactionId: 'transactionId',
      uct: true,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.elsets.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.elsets.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.elsets.list({ epoch: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.elsets.list({ epoch: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.elsets.count({ epoch: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.elsets.count({ epoch: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.elsets.createBulk({
      body: [
        {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          epoch: '2019-12-27T18:11:19.117Z',
          source: 'source',
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
    const response = await client.elsets.createBulk({
      body: [
        {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          epoch: '2019-12-27T18:11:19.117Z',
          source: 'source',
          agom: 0,
          algorithm: 'algorithm',
          apogee: 0,
          argOfPerigee: 0,
          ballisticCoeff: 0,
          bStar: 0,
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBy: 'createdBy',
          descriptor: 'descriptor',
          eccentricity: 0,
          ephemType: 0,
          idElset: 'idElset',
          idOnOrbit: 'idOnOrbit',
          idOrbitDetermination: 'idOrbitDetermination',
          inclination: 0,
          line1: 'line1',
          line2: 'line2',
          meanAnomaly: 0,
          meanMotion: 0,
          meanMotionDDot: 0,
          meanMotionDot: 0,
          origin: 'origin',
          origNetwork: 'origNetwork',
          origObjectId: 'origObjectId',
          perigee: 0,
          period: 0,
          raan: 0,
          rawFileURI: 'rawFileURI',
          revNo: 0,
          satNo: 0,
          semiMajorAxis: 0,
          sourcedData: ['string'],
          sourcedDataTypes: ['string'],
          sourceDL: 'sourceDL',
          tags: ['string'],
          transactionId: 'transactionId',
          uct: true,
        },
      ],
      dupeCheck: true,
    });
  });

  test('createBulkFromTle: only required params', async () => {
    const responsePromise = client.elsets.createBulkFromTle({
      body: 'body',
      dataMode: 'dataMode',
      makeCurrent: true,
      source: 'source',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulkFromTle: required and optional params', async () => {
    const response = await client.elsets.createBulkFromTle({
      body: 'body',
      dataMode: 'dataMode',
      makeCurrent: true,
      source: 'source',
      autoCreateSats: true,
      control: 'control',
      origin: 'origin',
      tags: 'tags',
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.elsets.queryhelp();
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
    await expect(client.elsets.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.elsets.tuple({ columns: 'columns', epoch: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.elsets.tuple({ columns: 'columns', epoch: '2019-12-27T18:11:19.117Z' });
  });
});
