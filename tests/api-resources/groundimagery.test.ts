// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource groundimagery', () => {
  test('create: only required params', async () => {
    const responsePromise = client.groundimagery.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      filename: 'Example file name',
      imageTime: '2021-01-01T01:01:01.123456Z',
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
    const response = await client.groundimagery.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      filename: 'Example file name',
      imageTime: '2021-01-01T01:01:01.123456Z',
      source: 'Bluestaq',
      id: 'GROUNDIMAGERY-ID',
      checksumValue: '120EA8A25E5D487BF68B5F7096440019',
      filesize: 0,
      format: 'PNG',
      idSensor: 'SENSOR-ID',
      keywords: ['KEYWORD1', 'KEYWORD2'],
      name: 'Example name',
      notes: 'Example notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      origSensorId: 'ORIGSENSOR-ID',
      region:
        'POLYGON((26.156175339112 67.3291113966927,26.0910220642717 67.2580009640721,26.6637992964562 67.1795862381682,26.730115808233 67.2501237475598,26.156175339112 67.3291113966927))',
      regionGeoJSON:
        '{"type":"Polygon","coordinates":[[[67.3291113966927,26.156175339112],[67.2580009640721,26.091022064271],[67.1795862381682,26.6637992964562],[67.2501237475598,26.730115808233],[67.3291113966927,26.156175339112]]]}',
      regionNDims: 2,
      regionSRid: 4326,
      regionText:
        'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      regionType: 'Polygon',
      subjectId: 'SUBJECT-ID',
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      transactionId: '37bdef1f-5a4f-4776-bee4-7a1e0ec7d35a',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.groundimagery.list({ imageTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.groundimagery.list({ imageTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.groundimagery.count({ imageTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.groundimagery.count({ imageTime: '2019-12-27T18:11:19.117Z' });
  });

  test('get', async () => {
    const responsePromise = client.groundimagery.get('id');
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
    await expect(client.groundimagery.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('getFile: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.groundimagery.getFile('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.groundimagery.queryhelp();
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
    await expect(client.groundimagery.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.groundimagery.tuple({
      columns: 'columns',
      imageTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.groundimagery.tuple({
      columns: 'columns',
      imageTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
