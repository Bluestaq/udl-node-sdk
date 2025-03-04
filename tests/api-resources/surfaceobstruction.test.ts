// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource surfaceobstruction', () => {
  test('create: only required params', async () => {
    const responsePromise = client.surfaceobstruction.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.surfaceobstruction.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
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
      surfaceEndLat: 46.757211,
      surfaceEndLon: -67.759494,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.surfaceobstruction.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
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
    const response = await client.surfaceobstruction.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
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
      surfaceEndLat: 46.757211,
      surfaceEndLon: -67.759494,
    });
  });

  test('list', async () => {
    const responsePromise = client.surfaceobstruction.list();
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
    await expect(client.surfaceobstruction.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.surfaceobstruction.delete('id');
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
    await expect(
      client.surfaceobstruction.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.surfaceobstruction.count();
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
    await expect(client.surfaceobstruction.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.surfaceobstruction.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        idSurface: 'be831d39-1822-da9f-7ace-6cc5643397dc',
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
    const response = await client.surfaceobstruction.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
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
        surfaceEndLat: 46.757211,
        surfaceEndLon: -67.759494,
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.surfaceobstruction.get('id');
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
    await expect(client.surfaceobstruction.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.surfaceobstruction.queryhelp();
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
    await expect(client.surfaceobstruction.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.surfaceobstruction.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.surfaceobstruction.tuple({ columns: 'columns' });
  });
});
