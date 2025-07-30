// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource surfaceObstruction', () => {
  test('create: only required params', async () => {
    const responsePromise = client.surfaceObstruction.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSurface: 'be831d39-1822-da9f-7ace-6cc5643397dc',
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
    const response = await client.surfaceObstruction.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSurface: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      source: 'Bluestaq',
      id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      advisoryRequired: ['C20', 'C17'],
      approvalRequired: ['C20', 'C17'],
      distanceFromCenterLine: 17.8,
      distanceFromEdge: 15.8,
      distanceFromThreshold: 19.5,
      idNavigationalObstruction: 'a2831d39-1822-da9f-7ace-6cc5643397da',
      obstructionDesc: 'PYLON',
      obstructionHeight: 35.25,
      obstructionSideCode: 'F',
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.surfaceObstruction.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSurface: 'be831d39-1822-da9f-7ace-6cc5643397dc',
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

  test('update: required and optional params', async () => {
    const response = await client.surfaceObstruction.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSurface: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      source: 'Bluestaq',
      body_id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
      advisoryRequired: ['C20', 'C17'],
      approvalRequired: ['C20', 'C17'],
      distanceFromCenterLine: 17.8,
      distanceFromEdge: 15.8,
      distanceFromThreshold: 19.5,
      idNavigationalObstruction: 'a2831d39-1822-da9f-7ace-6cc5643397da',
      obstructionDesc: 'PYLON',
      obstructionHeight: 35.25,
      obstructionSideCode: 'F',
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('list', async () => {
    const responsePromise = client.surfaceObstruction.list();
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
      client.surfaceObstruction.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.surfaceObstruction.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.surfaceObstruction.count();
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
      client.surfaceObstruction.count(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.surfaceObstruction.get('id');
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
      client.surfaceObstruction.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.surfaceObstruction.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.surfaceObstruction.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.surfaceObstruction.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.surfaceObstruction.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSurface: 'be831d39-1822-da9f-7ace-6cc5643397dc',
          source: 'Bluestaq',
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

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.surfaceObstruction.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSurface: 'be831d39-1822-da9f-7ace-6cc5643397dc',
          source: 'Bluestaq',
          id: 'be831d39-1822-da9f-7ace-6cc5643397dc',
          advisoryRequired: ['C20', 'C17'],
          approvalRequired: ['C20', 'C17'],
          distanceFromCenterLine: 17.8,
          distanceFromEdge: 15.8,
          distanceFromThreshold: 19.5,
          idNavigationalObstruction: 'a2831d39-1822-da9f-7ace-6cc5643397da',
          obstructionDesc: 'PYLON',
          obstructionHeight: 35.25,
          obstructionSideCode: 'F',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
      ],
    });
  });
});
