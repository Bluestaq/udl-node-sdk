// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eventEvolution', () => {
  test('create: only required params', async () => {
    const responsePromise = client.eventEvolution.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      eventId: 'EVENT_ID',
      source: 'Bluestaq',
      startTime: '2021-12-02T16:00:00.123Z',
      summary: 'Example summary of the event.',
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
    const response = await client.eventEvolution.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      eventId: 'EVENT_ID',
      source: 'Bluestaq',
      startTime: '2021-12-02T16:00:00.123Z',
      summary: 'Example summary of the event.',
      id: 'EVENT_EVOL_ID',
      agjson:
        '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
      andims: 2,
      area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      asrid: 4326,
      atext:
        'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      atype: 'POLYGON',
      category: 'PROTEST',
      countryCode: 'US',
      dataDescription: 'Description of relationship between srcTyps and srcIds',
      endTime: '2021-12-03T16:00:00.123Z',
      geoAdminLevel1: 'Colorado',
      geoAdminLevel2: 'El Paso County',
      geoAdminLevel3: 'Colorado Springs',
      origin: 'THIRD_PARTY_DATASOURCE',
      redact: false,
      srcIds: ['SRC_ID_1', 'SRC_ID_2'],
      srcTyps: ['AIS', 'CONJUNCTION'],
      status: 'UNKNOWN',
      tags: ['TAG1', 'TAG2'],
      url: ['URL1', 'URL2'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.eventEvolution.retrieve('id');
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
      client.eventEvolution.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.eventEvolution.list();
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
      client.eventEvolution.list(
        {
          eventId: 'eventId',
          firstResult: 0,
          maxResults: 0,
          startTime: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.eventEvolution.count();
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
      client.eventEvolution.count(
        {
          eventId: 'eventId',
          firstResult: 0,
          maxResults: 0,
          startTime: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.eventEvolution.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          eventId: 'EVENT_ID',
          source: 'Bluestaq',
          startTime: '2021-12-02T16:00:00.123Z',
          summary: 'Example summary of the event.',
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
    const response = await client.eventEvolution.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          eventId: 'EVENT_ID',
          source: 'Bluestaq',
          startTime: '2021-12-02T16:00:00.123Z',
          summary: 'Example summary of the event.',
          id: 'EVENT_EVOL_ID',
          agjson:
            '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
          andims: 2,
          area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          asrid: 4326,
          atext:
            'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          atype: 'POLYGON',
          category: 'PROTEST',
          countryCode: 'US',
          dataDescription: 'Description of relationship between srcTyps and srcIds',
          endTime: '2021-12-03T16:00:00.123Z',
          geoAdminLevel1: 'Colorado',
          geoAdminLevel2: 'El Paso County',
          geoAdminLevel3: 'Colorado Springs',
          origin: 'THIRD_PARTY_DATASOURCE',
          redact: false,
          srcIds: ['SRC_ID_1', 'SRC_ID_2'],
          srcTyps: ['AIS', 'CONJUNCTION'],
          status: 'UNKNOWN',
          tags: ['TAG1', 'TAG2'],
          url: ['URL1', 'URL2'],
        },
      ],
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.eventEvolution.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.eventEvolution.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.eventEvolution.tuple({
      columns: 'columns',
      eventId: 'eventId',
      firstResult: 0,
      maxResults: 0,
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.eventEvolution.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          eventId: 'EVENT_ID',
          source: 'Bluestaq',
          startTime: '2021-12-02T16:00:00.123Z',
          summary: 'Example summary of the event.',
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
    const response = await client.eventEvolution.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          eventId: 'EVENT_ID',
          source: 'Bluestaq',
          startTime: '2021-12-02T16:00:00.123Z',
          summary: 'Example summary of the event.',
          id: 'EVENT_EVOL_ID',
          agjson:
            '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
          andims: 2,
          area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          asrid: 4326,
          atext:
            'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          atype: 'POLYGON',
          category: 'PROTEST',
          countryCode: 'US',
          dataDescription: 'Description of relationship between srcTyps and srcIds',
          endTime: '2021-12-03T16:00:00.123Z',
          geoAdminLevel1: 'Colorado',
          geoAdminLevel2: 'El Paso County',
          geoAdminLevel3: 'Colorado Springs',
          origin: 'THIRD_PARTY_DATASOURCE',
          redact: false,
          srcIds: ['SRC_ID_1', 'SRC_ID_2'],
          srcTyps: ['AIS', 'CONJUNCTION'],
          status: 'UNKNOWN',
          tags: ['TAG1', 'TAG2'],
          url: ['URL1', 'URL2'],
        },
      ],
    });
  });
});
