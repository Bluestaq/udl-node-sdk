// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource itemTrackings', () => {
  test('create: only required params', async () => {
    const responsePromise = client.itemTrackings.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      scanCode: 'ABC1234',
      scannerId: '2051M',
      source: 'Bluestaq',
      ts: '2023-03-21T14:22:00.123Z',
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
    const response = await client.itemTrackings.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      scanCode: 'ABC1234',
      scannerId: '2051M',
      source: 'Bluestaq',
      ts: '2023-03-21T14:22:00.123Z',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      dvCode: 'DV-4',
      idItem: '36054487-bcba-6e2d-4f3b-9f25738b2639',
      keys: ['tapeColor', 'hazmat'],
      lat: 45.23,
      lon: 179.1,
      notes: 'Example notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      scanType: 'TRANSIT',
      scGenTool: 'bID',
      type: 'CARGO',
      values: ['yellow', 'false'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.itemTrackings.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.itemTrackings.list({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('delete', async () => {
    const responsePromise = client.itemTrackings.delete('id');
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
    await expect(client.itemTrackings.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count: only required params', async () => {
    const responsePromise = client.itemTrackings.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.itemTrackings.count({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.itemTrackings.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        scanCode: 'ABC1234',
        scannerId: '2051M',
        source: 'Bluestaq',
        ts: '2023-03-21T14:22:00.123Z',
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
    const response = await client.itemTrackings.fileCreate([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        scanCode: 'ABC1234',
        scannerId: '2051M',
        source: 'Bluestaq',
        ts: '2023-03-21T14:22:00.123Z',
        id: '026dd511-8ba5-47d3-9909-836149f87686',
        dvCode: 'DV-4',
        idItem: '36054487-bcba-6e2d-4f3b-9f25738b2639',
        keys: ['tapeColor', 'hazmat'],
        lat: 45.23,
        lon: 179.1,
        notes: 'Example notes',
        origin: 'THIRD_PARTY_DATASOURCE',
        scanType: 'TRANSIT',
        scGenTool: 'bID',
        type: 'CARGO',
        values: ['yellow', 'false'],
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.itemTrackings.get('id');
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
    await expect(client.itemTrackings.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.itemTrackings.queryhelp();
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
    await expect(client.itemTrackings.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.itemTrackings.tuple({
      columns: 'columns',
      ts: '2019-12-27T18:11:19.117Z',
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
    const response = await client.itemTrackings.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
  });
});
