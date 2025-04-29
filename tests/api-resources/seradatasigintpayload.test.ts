// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource seradatasigintpayload', () => {
  test('create: only required params', async () => {
    const responsePromise = client.seradatasigintpayload.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
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
    const response = await client.seradatasigintpayload.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
      id: 'SERADATASIGINTPAYLOAD-ID',
      frequencyCoverage: '1.1 to 3.3',
      groundStationLocations: 'groundStationLocations',
      groundStations: 'groundStations',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idSensor: '0c5ec9c0-10cd-1d35-c46b-3764c4d76e13',
      interceptParameters: 'interceptParameters',
      manufacturerOrgId: 'manufacturerOrgId',
      name: 'Sensor Name',
      notes: 'Sample Notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      positionalAccuracy: 'positionalAccuracy',
      swathWidth: 1.23,
      type: 'Comint',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.seradatasigintpayload.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
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
    const response = await client.seradatasigintpayload.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
      body_id: 'SERADATASIGINTPAYLOAD-ID',
      frequencyCoverage: '1.1 to 3.3',
      groundStationLocations: 'groundStationLocations',
      groundStations: 'groundStations',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idSensor: '0c5ec9c0-10cd-1d35-c46b-3764c4d76e13',
      interceptParameters: 'interceptParameters',
      manufacturerOrgId: 'manufacturerOrgId',
      name: 'Sensor Name',
      notes: 'Sample Notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      positionalAccuracy: 'positionalAccuracy',
      swathWidth: 1.23,
      type: 'Comint',
    });
  });

  test('list', async () => {
    const responsePromise = client.seradatasigintpayload.list();
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
      client.seradatasigintpayload.list(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.seradatasigintpayload.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.seradatasigintpayload.count();
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
      client.seradatasigintpayload.count(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.seradatasigintpayload.get('id');
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
      client.seradatasigintpayload.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.seradatasigintpayload.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.seradatasigintpayload.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.seradatasigintpayload.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
