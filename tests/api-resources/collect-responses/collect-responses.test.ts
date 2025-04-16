// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource collectResponses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.collectResponses.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idRequest: 'REF-REQUEST-ID',
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
    const response = await client.collectResponses.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idRequest: 'REF-REQUEST-ID',
      source: 'Bluestaq',
      id: 'COLLECTRESPONSE-ID',
      actualEndTime: '2018-01-01T18:00:00.123456Z',
      actualStartTime: '2018-01-01T16:00:00.123456Z',
      altEndTime: '2018-01-01T18:00:00.123456Z',
      altStartTime: '2018-01-01T16:00:00.123456Z',
      errCode: 'ERROR CODE',
      externalId: 'EXTERNAL-ID',
      idPlan: 'REF-PLAN-ID',
      idSensor: 'REF-SENSOR-ID',
      notes: 'Example notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      origSensorId: 'ORIGSENSOR-ID',
      satNo: 101,
      srcIds: ['DOA_ID', 'DWELL_ID'],
      srcTyps: ['DOA', 'DWELL'],
      status: 'ACCEPTED',
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      taskId: 'TASK-ID',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.collectResponses.retrieve('id');
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
    await expect(
      client.collectResponses.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.collectResponses.list({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.collectResponses.list({ createdAt: '2019-12-27' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.collectResponses.count({ createdAt: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.collectResponses.count({ createdAt: '2019-12-27' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.collectResponses.createBulk([
      { classificationMarking: 'U', dataMode: 'TEST', idRequest: 'REF-REQUEST-ID', source: 'Bluestaq' },
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
    const response = await client.collectResponses.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        idRequest: 'REF-REQUEST-ID',
        source: 'Bluestaq',
        id: 'COLLECTRESPONSE-ID',
        actualEndTime: '2018-01-01T18:00:00.123456Z',
        actualStartTime: '2018-01-01T16:00:00.123456Z',
        altEndTime: '2018-01-01T18:00:00.123456Z',
        altStartTime: '2018-01-01T16:00:00.123456Z',
        errCode: 'ERROR CODE',
        externalId: 'EXTERNAL-ID',
        idPlan: 'REF-PLAN-ID',
        idSensor: 'REF-SENSOR-ID',
        notes: 'Example notes',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        origSensorId: 'ORIGSENSOR-ID',
        satNo: 101,
        srcIds: ['DOA_ID', 'DWELL_ID'],
        srcTyps: ['DOA', 'DWELL'],
        status: 'ACCEPTED',
        tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
        taskId: 'TASK-ID',
      },
    ]);
  });

  test('queryHelp', async () => {
    const responsePromise = client.collectResponses.queryHelp();
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
    await expect(client.collectResponses.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.collectResponses.unvalidatedPublish([
      { classificationMarking: 'U', dataMode: 'TEST', idRequest: 'REF-REQUEST-ID', source: 'Bluestaq' },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.collectResponses.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        idRequest: 'REF-REQUEST-ID',
        source: 'Bluestaq',
        id: 'COLLECTRESPONSE-ID',
        actualEndTime: '2018-01-01T18:00:00.123456Z',
        actualStartTime: '2018-01-01T16:00:00.123456Z',
        altEndTime: '2018-01-01T18:00:00.123456Z',
        altStartTime: '2018-01-01T16:00:00.123456Z',
        errCode: 'ERROR CODE',
        externalId: 'EXTERNAL-ID',
        idPlan: 'REF-PLAN-ID',
        idSensor: 'REF-SENSOR-ID',
        notes: 'Example notes',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'ORIGOBJECT-ID',
        origSensorId: 'ORIGSENSOR-ID',
        satNo: 101,
        srcIds: ['DOA_ID', 'DWELL_ID'],
        srcTyps: ['DOA', 'DWELL'],
        status: 'ACCEPTED',
        tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
        taskId: 'TASK-ID',
      },
    ]);
  });
});
