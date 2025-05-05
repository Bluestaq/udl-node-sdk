// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource seraDataEarlyWarning', () => {
  test('create: only required params', async () => {
    const responsePromise = client.seraDataEarlyWarning.create({
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
    const response = await client.seraDataEarlyWarning.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
      id: 'SERADATAEARLYWARNING-ID',
      bestResolution: 1.23,
      earthPointing: true,
      frequencyLimits: 'frequencyLimits',
      groundStationLocations: 'groundStationLocations',
      groundStations: 'groundStations',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idIR: 'idIR',
      manufacturerOrgId: 'manufacturerOrgId',
      missileLaunchPhaseDetectionAbility: 'missileLaunchPhaseDetectionAbility',
      name: 'Infra red telescope',
      origin: 'THIRD_PARTY_DATASOURCE',
      partnerSpacecraftId: 'partnerSpacecraftId',
      payloadNotes: 'Sample Notes',
      spectralBands: 'Infra-Red',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.seraDataEarlyWarning.update('id', {
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
    const response = await client.seraDataEarlyWarning.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      spacecraftId: 'spacecraftId',
      body_id: 'SERADATAEARLYWARNING-ID',
      bestResolution: 1.23,
      earthPointing: true,
      frequencyLimits: 'frequencyLimits',
      groundStationLocations: 'groundStationLocations',
      groundStations: 'groundStations',
      hostedForCompanyOrgId: 'hostedForCompanyOrgId',
      idIR: 'idIR',
      manufacturerOrgId: 'manufacturerOrgId',
      missileLaunchPhaseDetectionAbility: 'missileLaunchPhaseDetectionAbility',
      name: 'Infra red telescope',
      origin: 'THIRD_PARTY_DATASOURCE',
      partnerSpacecraftId: 'partnerSpacecraftId',
      payloadNotes: 'Sample Notes',
      spectralBands: 'Infra-Red',
    });
  });

  test('list', async () => {
    const responsePromise = client.seraDataEarlyWarning.list();
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
      client.seraDataEarlyWarning.list(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.seraDataEarlyWarning.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.seraDataEarlyWarning.count();
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
      client.seraDataEarlyWarning.count(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.seraDataEarlyWarning.get('id');
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
      client.seraDataEarlyWarning.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.seraDataEarlyWarning.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.seraDataEarlyWarning.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.seraDataEarlyWarning.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
