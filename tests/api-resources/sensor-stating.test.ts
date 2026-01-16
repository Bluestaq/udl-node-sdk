// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sensorStating', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sensorStating.create({
      classificationMarking: 'U',
      sensorName: 'SENSOR_NAME',
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
    const response = await client.sensorStating.create({
      classificationMarking: 'U',
      sensorName: 'SENSOR_NAME',
      source: 'Bluestaq',
      id: 'ad88770b-d824-443f-bdce-5f9e3fa500a9',
      altitude: 157.543,
      lat: 48.6732,
      locationCountry: 'UA',
      lon: 22.8455,
      ownerCountry: 'UA',
      sensorNumber: 1234,
      sensorObservationType: '5',
      sensorType: 'Space Borne',
      shortName: 'SNR-1',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.sensorStating.update('id', {
      classificationMarking: 'U',
      sensorName: 'SENSOR_NAME',
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
    const response = await client.sensorStating.update('id', {
      classificationMarking: 'U',
      sensorName: 'SENSOR_NAME',
      source: 'Bluestaq',
      body_id: 'ad88770b-d824-443f-bdce-5f9e3fa500a9',
      altitude: 157.543,
      lat: 48.6732,
      locationCountry: 'UA',
      lon: 22.8455,
      ownerCountry: 'UA',
      sensorNumber: 1234,
      sensorObservationType: '5',
      sensorType: 'Space Borne',
      shortName: 'SNR-1',
    });
  });

  test('list', async () => {
    const responsePromise = client.sensorStating.list();
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
      client.sensorStating.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sensorStating.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.sensorStating.createBulk({
      body: [
        {
          classificationMarking: 'U',
          sensorName: 'SENSOR_NAME',
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

  test('createBulk: required and optional params', async () => {
    const response = await client.sensorStating.createBulk({
      body: [
        {
          classificationMarking: 'U',
          sensorName: 'SENSOR_NAME',
          source: 'Bluestaq',
          id: 'ad88770b-d824-443f-bdce-5f9e3fa500a9',
          altitude: 157.543,
          lat: 48.6732,
          locationCountry: 'UA',
          lon: 22.8455,
          ownerCountry: 'UA',
          sensorNumber: 1234,
          sensorObservationType: '5',
          sensorType: 'Space Borne',
          shortName: 'SNR-1',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.sensorStating.get('id');
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
      client.sensorStating.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.sensorStating.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
