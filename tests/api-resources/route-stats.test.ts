// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routeStats', () => {
  test('create: only required params', async () => {
    const responsePromise = client.routeStats.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      locationEnd: 'KCOS',
      locationStart: 'KDEN',
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
    const response = await client.routeStats.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      locationEnd: 'KCOS',
      locationStart: 'KDEN',
      source: 'Bluestaq',
      id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      avgDuration: 47.1,
      avgSpeed: 450.1,
      dataPtsUsed: 6,
      distance: 63.1,
      distUnit: 'Nautical miles',
      firstPt: '2024-01-01T16:00:00.123Z',
      idealDesc: 'Block speed using great circle path',
      idealDuration: 45.1,
      idSiteEnd: '77b5550c-c0f4-47bd-94ce-d71cdaa52f62',
      idSiteStart: '23370387-5e8e-4a74-89db-ad81145aa4df',
      lastPt: '2024-03-31T16:00:00.123Z',
      locationType: 'ICAO',
      maxDuration: 52.1,
      maxSpeed: 470.1,
      minDuration: 42.1,
      minSpeed: 420.1,
      origin: 'THIRD_PARTY_DATASOURCE',
      partialDesc: 'Performance speed using great circle path',
      partialDuration: 38.1,
      speedUnit: 'knots',
      timePeriod: 'Q1',
      vehicleCategory: 'AIRCRAFT',
      vehicleType: 'C-17',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.routeStats.retrieve('id');
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
      client.routeStats.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.routeStats.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      locationEnd: 'KCOS',
      locationStart: 'KDEN',
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
    const response = await client.routeStats.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      locationEnd: 'KCOS',
      locationStart: 'KDEN',
      source: 'Bluestaq',
      body_id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      avgDuration: 47.1,
      avgSpeed: 450.1,
      dataPtsUsed: 6,
      distance: 63.1,
      distUnit: 'Nautical miles',
      firstPt: '2024-01-01T16:00:00.123Z',
      idealDesc: 'Block speed using great circle path',
      idealDuration: 45.1,
      idSiteEnd: '77b5550c-c0f4-47bd-94ce-d71cdaa52f62',
      idSiteStart: '23370387-5e8e-4a74-89db-ad81145aa4df',
      lastPt: '2024-03-31T16:00:00.123Z',
      locationType: 'ICAO',
      maxDuration: 52.1,
      maxSpeed: 470.1,
      minDuration: 42.1,
      minSpeed: 420.1,
      origin: 'THIRD_PARTY_DATASOURCE',
      partialDesc: 'Performance speed using great circle path',
      partialDuration: 38.1,
      speedUnit: 'knots',
      timePeriod: 'Q1',
      vehicleCategory: 'AIRCRAFT',
      vehicleType: 'C-17',
    });
  });

  test('delete', async () => {
    const responsePromise = client.routeStats.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.routeStats.count();
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
      client.routeStats.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.routeStats.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          locationEnd: 'KCOS',
          locationStart: 'KDEN',
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
    const response = await client.routeStats.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          locationEnd: 'KCOS',
          locationStart: 'KDEN',
          source: 'Bluestaq',
          id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
          avgDuration: 47.1,
          avgSpeed: 450.1,
          dataPtsUsed: 6,
          distance: 63.1,
          distUnit: 'Nautical miles',
          firstPt: '2024-01-01T16:00:00.123Z',
          idealDesc: 'Block speed using great circle path',
          idealDuration: 45.1,
          idSiteEnd: '77b5550c-c0f4-47bd-94ce-d71cdaa52f62',
          idSiteStart: '23370387-5e8e-4a74-89db-ad81145aa4df',
          lastPt: '2024-03-31T16:00:00.123Z',
          locationType: 'ICAO',
          maxDuration: 52.1,
          maxSpeed: 470.1,
          minDuration: 42.1,
          minSpeed: 420.1,
          origin: 'THIRD_PARTY_DATASOURCE',
          partialDesc: 'Performance speed using great circle path',
          partialDuration: 38.1,
          speedUnit: 'knots',
          timePeriod: 'Q1',
          vehicleCategory: 'AIRCRAFT',
          vehicleType: 'C-17',
        },
      ],
    });
  });

  test('query', async () => {
    const responsePromise = client.routeStats.query();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.routeStats.query({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryHelp', async () => {
    const responsePromise = client.routeStats.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.routeStats.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.routeStats.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.routeStats.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          locationEnd: 'KCOS',
          locationStart: 'KDEN',
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
    const response = await client.routeStats.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          locationEnd: 'KCOS',
          locationStart: 'KDEN',
          source: 'Bluestaq',
          id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
          avgDuration: 47.1,
          avgSpeed: 450.1,
          dataPtsUsed: 6,
          distance: 63.1,
          distUnit: 'Nautical miles',
          firstPt: '2024-01-01T16:00:00.123Z',
          idealDesc: 'Block speed using great circle path',
          idealDuration: 45.1,
          idSiteEnd: '77b5550c-c0f4-47bd-94ce-d71cdaa52f62',
          idSiteStart: '23370387-5e8e-4a74-89db-ad81145aa4df',
          lastPt: '2024-03-31T16:00:00.123Z',
          locationType: 'ICAO',
          maxDuration: 52.1,
          maxSpeed: 470.1,
          minDuration: 42.1,
          minSpeed: 420.1,
          origin: 'THIRD_PARTY_DATASOURCE',
          partialDesc: 'Performance speed using great circle path',
          partialDuration: 38.1,
          speedUnit: 'knots',
          timePeriod: 'Q1',
          vehicleCategory: 'AIRCRAFT',
          vehicleType: 'C-17',
        },
      ],
    });
  });
});
