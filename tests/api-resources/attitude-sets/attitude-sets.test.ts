// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attitudeSets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.attitudeSets.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      endTime: '2019-12-27T18:11:19.117Z',
      frame1: 'frame1',
      frame2: 'frame2',
      numPoints: 0,
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
      type: 'type',
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
    const response = await client.attitudeSets.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      endTime: '2019-12-27T18:11:19.117Z',
      frame1: 'frame1',
      frame2: 'frame2',
      numPoints: 0,
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
      type: 'type',
      id: 'id',
      asRef: ['string'],
      attitudeList: [
        {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          source: 'source',
          ts: '2019-12-27T18:11:19.117Z',
          id: 'id',
          asId: 'asId',
          coningAngle: 0,
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBy: 'createdBy',
          declination: 0,
          idOnOrbit: 'idOnOrbit',
          motionType: 'motionType',
          origin: 'origin',
          origNetwork: 'origNetwork',
          origObjectId: 'origObjectId',
          precPeriod: 0,
          q1: 0,
          q1Dot: 0,
          q2: 0,
          q2Dot: 0,
          q3: 0,
          q3Dot: 0,
          qc: 0,
          qcDot: 0,
          ra: 0,
          satNo: 0,
          spinPeriod: 0,
          xAngle: [0],
          xRate: [0],
          yAngle: [0],
          yRate: [0],
          zAngle: [0],
          zRate: [0],
        },
      ],
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      esId: 'esId',
      eulerRotSeq: 'eulerRotSeq',
      idOnOrbit: 'idOnOrbit',
      idSensor: 'idSensor',
      interpolator: 'interpolator',
      interpolatorDegree: 0,
      notes: 'notes',
      origin: 'origin',
      origNetwork: 'origNetwork',
      origObjectId: 'origObjectId',
      origSensorId: 'origSensorId',
      precAngleInit: 0,
      satNo: 0,
      spinAngleInit: 0,
      stepSize: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.attitudeSets.list({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.attitudeSets.list({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.attitudeSets.count({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.attitudeSets.count({ startTime: '2019-12-27T18:11:19.117Z' });
  });

  test('queryHelp', async () => {
    const responsePromise = client.attitudeSets.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryHelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.attitudeSets.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.attitudeSets.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.attitudeSets.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
