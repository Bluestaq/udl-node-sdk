// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attitudeSets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.attitudeSets.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      endTime: '2022-07-07T18:00:00.654321Z',
      frame1: 'SCBODY',
      frame2: 'J2000',
      numPoints: 120,
      source: 'Bluestaq',
      startTime: '2022-07-07T16:00:00.123456Z',
      type: 'AEM',
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
      classificationMarking: 'U',
      dataMode: 'REAL',
      endTime: '2022-07-07T18:00:00.654321Z',
      frame1: 'SCBODY',
      frame2: 'J2000',
      numPoints: 120,
      source: 'Bluestaq',
      startTime: '2022-07-07T16:00:00.123456Z',
      type: 'AEM',
      id: 'ATTITUDESET-ID',
      asRef: ['2ea97de6-4680-4767-a07e-35d16398ef60'],
      attitudeList: [
        {
          classificationMarking: 'U',
          dataMode: 'REAL',
          source: 'Bluestaq',
          ts: '2022-03-07T14:51:39.653043Z',
          id: 'ATTITUDEDATA-ID',
          asId: '773c9887-e931-42eb-8155-f0fbd227b235',
          coningAngle: 0.1,
          declination: 0.799,
          motionType: 'PROSOL_MOTION',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'D6593',
          precPeriod: 36.1,
          q1: 0.0312,
          q1Dot: 0.0043,
          q2: 0.7854,
          q2Dot: 0.06,
          q3: 0.3916,
          q3Dot: 0.499,
          qc: 0.4783,
          qcDot: 0.011,
          ra: -173.75,
          satNo: 41947,
          spinPeriod: 0.1,
          xAngle: [139.753],
          xRate: [0.105],
          yAngle: [25.066],
          yRate: [0.032],
          zAngle: [-53.368],
          zRate: [0.022],
        },
      ],
      esId: '60f7a241-b7be-48d8-acf3-786670af53f9',
      eulerRotSeq: '123',
      idSensor: 'a7e99418-b6d6-29ab-e767-440a989cce26',
      interpolator: 'LINEAR',
      interpolatorDegree: 2,
      notes: 'Notes for this attitude set',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'D6593',
      origSensorId: 'ORIGSENSOR-ID',
      precAngleInit: 30.5,
      satNo: 41947,
      spinAngleInit: 25.5,
      stepSize: 60,
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

  test('fileCreate: only required params', async () => {
    const responsePromise = client.attitudeSets.fileCreate({
      classificationMarking: 'U',
      dataMode: 'REAL',
      endTime: '2022-07-07T18:00:00.654321Z',
      frame1: 'SCBODY',
      frame2: 'J2000',
      numPoints: 120,
      source: 'Bluestaq',
      startTime: '2022-07-07T16:00:00.123456Z',
      type: 'AEM',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fileCreate: required and optional params', async () => {
    const response = await client.attitudeSets.fileCreate({
      classificationMarking: 'U',
      dataMode: 'REAL',
      endTime: '2022-07-07T18:00:00.654321Z',
      frame1: 'SCBODY',
      frame2: 'J2000',
      numPoints: 120,
      source: 'Bluestaq',
      startTime: '2022-07-07T16:00:00.123456Z',
      type: 'AEM',
      id: 'ATTITUDESET-ID',
      asRef: ['2ea97de6-4680-4767-a07e-35d16398ef60'],
      attitudeList: [
        {
          classificationMarking: 'U',
          dataMode: 'REAL',
          source: 'Bluestaq',
          ts: '2022-03-07T14:51:39.653043Z',
          id: 'ATTITUDEDATA-ID',
          asId: '773c9887-e931-42eb-8155-f0fbd227b235',
          coningAngle: 0.1,
          declination: 0.799,
          motionType: 'PROSOL_MOTION',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'D6593',
          precPeriod: 36.1,
          q1: 0.0312,
          q1Dot: 0.0043,
          q2: 0.7854,
          q2Dot: 0.06,
          q3: 0.3916,
          q3Dot: 0.499,
          qc: 0.4783,
          qcDot: 0.011,
          ra: -173.75,
          satNo: 41947,
          spinPeriod: 0.1,
          xAngle: [139.753],
          xRate: [0.105],
          yAngle: [25.066],
          yRate: [0.032],
          zAngle: [-53.368],
          zRate: [0.022],
        },
      ],
      esId: '60f7a241-b7be-48d8-acf3-786670af53f9',
      eulerRotSeq: '123',
      idSensor: 'a7e99418-b6d6-29ab-e767-440a989cce26',
      interpolator: 'LINEAR',
      interpolatorDegree: 2,
      notes: 'Notes for this attitude set',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'D6593',
      origSensorId: 'ORIGSENSOR-ID',
      precAngleInit: 30.5,
      satNo: 41947,
      spinAngleInit: 25.5,
      stepSize: 60,
    });
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
