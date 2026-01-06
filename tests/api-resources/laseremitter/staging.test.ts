// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource staging', () => {
  test('create: only required params', async () => {
    const responsePromise = client.laseremitter.staging.create({
      classificationMarking: 'U',
      laserName: 'LASER_NAME',
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
    const response = await client.laseremitter.staging.create({
      classificationMarking: 'U',
      laserName: 'LASER_NAME',
      source: 'Bluestaq',
      id: 'ad88770b-d824-443f-bdce-5f9e3fa500a9',
      altitude: 1.57543,
      laserType: 'PULSED',
      lat: 48.6732,
      locationCountry: 'US',
      lon: 22.8455,
      ownerCountry: 'US',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.laseremitter.staging.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.laseremitter.staging.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.laseremitter.staging.update('id', {
      classificationMarking: 'U',
      laserName: 'LASER_NAME',
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
    const response = await client.laseremitter.staging.update('id', {
      classificationMarking: 'U',
      laserName: 'LASER_NAME',
      source: 'Bluestaq',
      body_id: 'ad88770b-d824-443f-bdce-5f9e3fa500a9',
      altitude: 1.57543,
      laserType: 'PULSED',
      lat: 48.6732,
      locationCountry: 'US',
      lon: 22.8455,
      ownerCountry: 'US',
    });
  });

  test('list', async () => {
    const responsePromise = client.laseremitter.staging.list();
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
      client.laseremitter.staging.list(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.laseremitter.staging.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.laseremitter.staging.createBulk({
      body: [
        {
          classificationMarking: 'U',
          laserName: 'LASER_NAME',
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
    const response = await client.laseremitter.staging.createBulk({
      body: [
        {
          classificationMarking: 'U',
          laserName: 'LASER_NAME',
          source: 'Bluestaq',
          id: 'ad88770b-d824-443f-bdce-5f9e3fa500a9',
          altitude: 1.57543,
          laserType: 'PULSED',
          lat: 48.6732,
          locationCountry: 'US',
          lon: 22.8455,
          ownerCountry: 'US',
        },
      ],
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.laseremitter.staging.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
