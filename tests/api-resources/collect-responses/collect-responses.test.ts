// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource collectResponses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.collectResponses.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idRequest: 'idRequest',
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
    const response = await client.collectResponses.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idRequest: 'idRequest',
      source: 'source',
      id: 'id',
      actualEndTime: '2019-12-27T18:11:19.117Z',
      actualStartTime: '2019-12-27T18:11:19.117Z',
      altEndTime: '2019-12-27T18:11:19.117Z',
      altStartTime: '2019-12-27T18:11:19.117Z',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      errCode: 'errCode',
      externalId: 'externalId',
      idOnOrbit: 'idOnOrbit',
      idPlan: 'idPlan',
      idSensor: 'idSensor',
      notes: 'notes',
      origin: 'origin',
      origNetwork: 'origNetwork',
      origObjectId: 'origObjectId',
      origSensorId: 'origSensorId',
      satNo: 0,
      srcIds: ['string'],
      srcTyps: ['string'],
      status: 'status',
      tags: ['string'],
      taskId: 'taskId',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.collectResponses.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.collectResponses.retrieve({ path_id: 'id', body_id: 'id' });
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
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        idRequest: 'idRequest',
        source: 'source',
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
    const response = await client.collectResponses.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        idRequest: 'idRequest',
        source: 'source',
        id: 'id',
        actualEndTime: '2019-12-27T18:11:19.117Z',
        actualStartTime: '2019-12-27T18:11:19.117Z',
        altEndTime: '2019-12-27T18:11:19.117Z',
        altStartTime: '2019-12-27T18:11:19.117Z',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        errCode: 'errCode',
        externalId: 'externalId',
        idOnOrbit: 'idOnOrbit',
        idPlan: 'idPlan',
        idSensor: 'idSensor',
        notes: 'notes',
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        origSensorId: 'origSensorId',
        satNo: 0,
        srcIds: ['string'],
        srcTyps: ['string'],
        status: 'status',
        tags: ['string'],
        taskId: 'taskId',
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
});
