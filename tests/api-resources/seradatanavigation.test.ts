// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource seradatanavigation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.seradatanavigation.create({
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
    const response = await client.seradatanavigation.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
      id: 'SERADATANAVIGATION-ID',
      areaCoverage: 'Worldwide',
      clockType: 'Rubidium',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idNavigation: 'idNavigation',
      locationAccuracy: 1.23,
      manufacturerOrgId: 'manufacturerOrgId',
      modeFrequency: '1234',
      modes: 'Military',
      name: 'WAAS GEO-5',
      notes: 'Sample Notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      partnerSpacecraftId: 'partnerSpacecraftId',
      payloadType: 'WAAS',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.seradatanavigation.update('id', {
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
    const response = await client.seradatanavigation.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
      body_id: 'SERADATANAVIGATION-ID',
      areaCoverage: 'Worldwide',
      clockType: 'Rubidium',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idNavigation: 'idNavigation',
      locationAccuracy: 1.23,
      manufacturerOrgId: 'manufacturerOrgId',
      modeFrequency: '1234',
      modes: 'Military',
      name: 'WAAS GEO-5',
      notes: 'Sample Notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      partnerSpacecraftId: 'partnerSpacecraftId',
      payloadType: 'WAAS',
    });
  });

  test('list', async () => {
    const responsePromise = client.seradatanavigation.list();
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
      client.seradatanavigation.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.seradatanavigation.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.seradatanavigation.count();
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
      client.seradatanavigation.count(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.seradatanavigation.get('id');
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
      client.seradatanavigation.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.seradatanavigation.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.seradatanavigation.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.seradatanavigation.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
