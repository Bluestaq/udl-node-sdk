// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource radarobservation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.radarobservation.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      obTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.radarobservation.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      obTime: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      id: 'RADAROBSERVATION-ID',
      azimuth: 45.23,
      azimuthBias: 45.23,
      azimuthRate: 1.23,
      azimuthUnc: 45.23,
      beam: 1.23,
      declination: 10.23,
      descriptor: 'descriptor',
      doppler: 10.23,
      dopplerUnc: 1.23,
      elevation: 45.23,
      elevationBias: 1.23,
      elevationRate: 1.23,
      elevationUnc: 1.23,
      idSensor: 'SENSOR-ID',
      obPosition: 'FIRST',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      origSensorId: 'ORIGSENSOR-ID',
      orthogonalRcs: 1.23,
      orthogonalRcsUnc: 10.23,
      ra: 1.23,
      range: 100.23,
      rangeAccel: 10.23,
      rangeAccelUnc: 1.23,
      rangeBias: 1.23,
      rangeRate: 1.23,
      rangeRateUnc: 0.5,
      rangeUnc: 1.23,
      rawFileURI: 'rawFileURI',
      rcs: 100.23,
      rcsUnc: 1.23,
      satNo: 1,
      senReferenceFrame: 'J2000',
      senx: 45.23,
      seny: 40.23,
      senz: 35.23,
      snr: 0.5,
      tags: ['TAG1', 'TAG2'],
      taskId: 'TASK-ID',
      timingBias: 1.23,
      trackId: 'TRACK-ID',
      transactionId: 'TRANSACTION-ID',
      uct: true,
      x: 50.23,
      xvel: 1.23,
      y: 50.23,
      yvel: 5.23,
      z: 50.23,
      zvel: 5.23,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.radarobservation.list({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.radarobservation.list({ obTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.radarobservation.count({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.radarobservation.count({ obTime: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.radarobservation.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        obTime: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
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
    const response = await client.radarobservation.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        obTime: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
        id: 'RADAROBSERVATION-ID',
        azimuth: 45.23,
        azimuthBias: 45.23,
        azimuthRate: 1.23,
        azimuthUnc: 45.23,
        beam: 1.23,
        declination: 10.23,
        descriptor: 'descriptor',
        doppler: 10.23,
        dopplerUnc: 1.23,
        elevation: 45.23,
        elevationBias: 1.23,
        elevationRate: 1.23,
        elevationUnc: 1.23,
        idSensor: 'SENSOR-ID',
        obPosition: 'FIRST',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        origSensorId: 'ORIGSENSOR-ID',
        orthogonalRcs: 1.23,
        orthogonalRcsUnc: 10.23,
        ra: 1.23,
        range: 100.23,
        rangeAccel: 10.23,
        rangeAccelUnc: 1.23,
        rangeBias: 1.23,
        rangeRate: 1.23,
        rangeRateUnc: 0.5,
        rangeUnc: 1.23,
        rawFileURI: 'rawFileURI',
        rcs: 100.23,
        rcsUnc: 1.23,
        satNo: 1,
        senReferenceFrame: 'J2000',
        senx: 45.23,
        seny: 40.23,
        senz: 35.23,
        snr: 0.5,
        tags: ['TAG1', 'TAG2'],
        taskId: 'TASK-ID',
        timingBias: 1.23,
        trackId: 'TRACK-ID',
        transactionId: 'TRANSACTION-ID',
        uct: true,
        x: 50.23,
        xvel: 1.23,
        y: 50.23,
        yvel: 5.23,
        z: 50.23,
        zvel: 5.23,
      },
    ]);
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.radarobservation.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        obTime: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
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

  test('fileCreate: required and optional params', async () => {
    const response = await client.radarobservation.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        obTime: '2018-01-01T16:00:00.123456Z',
        source: 'Bluestaq',
        id: 'RADAROBSERVATION-ID',
        azimuth: 45.23,
        azimuthBias: 45.23,
        azimuthRate: 1.23,
        azimuthUnc: 45.23,
        beam: 1.23,
        declination: 10.23,
        descriptor: 'descriptor',
        doppler: 10.23,
        dopplerUnc: 1.23,
        elevation: 45.23,
        elevationBias: 1.23,
        elevationRate: 1.23,
        elevationUnc: 1.23,
        idSensor: 'SENSOR-ID',
        obPosition: 'FIRST',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        origSensorId: 'ORIGSENSOR-ID',
        orthogonalRcs: 1.23,
        orthogonalRcsUnc: 10.23,
        ra: 1.23,
        range: 100.23,
        rangeAccel: 10.23,
        rangeAccelUnc: 1.23,
        rangeBias: 1.23,
        rangeRate: 1.23,
        rangeRateUnc: 0.5,
        rangeUnc: 1.23,
        rawFileURI: 'rawFileURI',
        rcs: 100.23,
        rcsUnc: 1.23,
        satNo: 1,
        senReferenceFrame: 'J2000',
        senx: 45.23,
        seny: 40.23,
        senz: 35.23,
        snr: 0.5,
        tags: ['TAG1', 'TAG2'],
        taskId: 'TASK-ID',
        timingBias: 1.23,
        trackId: 'TRACK-ID',
        transactionId: 'TRANSACTION-ID',
        uct: true,
        x: 50.23,
        xvel: 1.23,
        y: 50.23,
        yvel: 5.23,
        z: 50.23,
        zvel: 5.23,
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.radarobservation.get('id');
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
    await expect(client.radarobservation.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.radarobservation.queryhelp();
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
    await expect(client.radarobservation.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.radarobservation.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.radarobservation.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
