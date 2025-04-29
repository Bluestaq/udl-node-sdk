// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource featureassessment', () => {
  test('create: only required params', async () => {
    const responsePromise = client.featureassessment.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      featureTs: '2024-06-22T17:53:06.123Z',
      featureUoM: 'MHz',
      idAnalyticImagery: 'fa1509ae-c19d-432e-9542-e5d1e0f47bc3',
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
    const response = await client.featureassessment.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      featureTs: '2024-06-22T17:53:06.123Z',
      featureUoM: 'MHz',
      idAnalyticImagery: 'fa1509ae-c19d-432e-9542-e5d1e0f47bc3',
      source: 'Bluestaq',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      agjson: '{"type":"Point","coordinates":[52.23486096929749 16.191937138595005]}',
      andims: 1,
      annLims: [
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
      ],
      annText: ['rec1', 'rec2'],
      area: 'POINT(52.23486096929749 16.191937138595005)',
      asrid: 4326,
      assessment: 'Vessel bigger than other small fishing boats commonly found along the coastline',
      atext: 'POINT(52.23486096929749 16.191937138595005)',
      atype: 'POINT',
      confidence: 0.85,
      externalId: '2024-06-22-17-53-05_UMBRA-05_GEC',
      featureArray: [1227.6, 1575.42],
      featureBool: true,
      featureString: 'TRANSMITTING FREQUENCIES',
      featureStringArray: ['String1', 'String2'],
      featureValue: 1227.6,
      heading: 97.1,
      height: 7.25,
      length: 10.54,
      name: 'HEADING',
      origin: 'THIRD_PARTY_DATASOURCE',
      speed: 0.1,
      srcIds: ['b008c63b-ad89-4493-80e0-77bc982bef77', '3565a6dd-654e-4969-89e0-ee7c51ab1e1b'],
      srcTs: ['2025-02-24T16:27:18.471Z', '2025-02-24T16:29:31.000000Z'],
      srcTyps: ['SAR', 'AIS'],
      tags: ['TAG1', 'TAG2'],
      transactionId: 'c3bdef1f-5a4f-4716-bee4-7a1e0ec7d37d',
      type: 'VESSEL',
      width: 3.74,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.featureassessment.retrieve('id');
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
      client.featureassessment.retrieve(
        'id',
        { firstResult: 0, maxResult: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count: only required params', async () => {
    const responsePromise = client.featureassessment.count({ idAnalyticImagery: 'idAnalyticImagery' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.featureassessment.count({
      idAnalyticImagery: 'idAnalyticImagery',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.featureassessment.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          featureTs: '2024-06-22T17:53:06.123Z',
          featureUoM: 'MHz',
          idAnalyticImagery: 'fa1509ae-c19d-432e-9542-e5d1e0f47bc3',
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
    const response = await client.featureassessment.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          featureTs: '2024-06-22T17:53:06.123Z',
          featureUoM: 'MHz',
          idAnalyticImagery: 'fa1509ae-c19d-432e-9542-e5d1e0f47bc3',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          agjson: '{"type":"Point","coordinates":[52.23486096929749 16.191937138595005]}',
          andims: 1,
          annLims: [
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
          ],
          annText: ['rec1', 'rec2'],
          area: 'POINT(52.23486096929749 16.191937138595005)',
          asrid: 4326,
          assessment: 'Vessel bigger than other small fishing boats commonly found along the coastline',
          atext: 'POINT(52.23486096929749 16.191937138595005)',
          atype: 'POINT',
          confidence: 0.85,
          externalId: '2024-06-22-17-53-05_UMBRA-05_GEC',
          featureArray: [1227.6, 1575.42],
          featureBool: true,
          featureString: 'TRANSMITTING FREQUENCIES',
          featureStringArray: ['String1', 'String2'],
          featureValue: 1227.6,
          heading: 97.1,
          height: 7.25,
          length: 10.54,
          name: 'HEADING',
          origin: 'THIRD_PARTY_DATASOURCE',
          speed: 0.1,
          srcIds: ['b008c63b-ad89-4493-80e0-77bc982bef77', '3565a6dd-654e-4969-89e0-ee7c51ab1e1b'],
          srcTs: ['2025-02-24T16:27:18.471Z', '2025-02-24T16:29:31.000000Z'],
          srcTyps: ['SAR', 'AIS'],
          tags: ['TAG1', 'TAG2'],
          transactionId: 'c3bdef1f-5a4f-4716-bee4-7a1e0ec7d37d',
          type: 'VESSEL',
          width: 3.74,
        },
      ],
    });
  });

  test('query: only required params', async () => {
    const responsePromise = client.featureassessment.query({ idAnalyticImagery: 'idAnalyticImagery' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.featureassessment.query({
      idAnalyticImagery: 'idAnalyticImagery',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.featureassessment.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.featureassessment.tuple({
      columns: 'columns',
      idAnalyticImagery: 'idAnalyticImagery',
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
    const response = await client.featureassessment.tuple({
      columns: 'columns',
      idAnalyticImagery: 'idAnalyticImagery',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.featureassessment.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          featureTs: '2024-06-22T17:53:06.123Z',
          featureUoM: 'MHz',
          idAnalyticImagery: 'fa1509ae-c19d-432e-9542-e5d1e0f47bc3',
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
    const response = await client.featureassessment.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          featureTs: '2024-06-22T17:53:06.123Z',
          featureUoM: 'MHz',
          idAnalyticImagery: 'fa1509ae-c19d-432e-9542-e5d1e0f47bc3',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          agjson: '{"type":"Point","coordinates":[52.23486096929749 16.191937138595005]}',
          andims: 1,
          annLims: [
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
          ],
          annText: ['rec1', 'rec2'],
          area: 'POINT(52.23486096929749 16.191937138595005)',
          asrid: 4326,
          assessment: 'Vessel bigger than other small fishing boats commonly found along the coastline',
          atext: 'POINT(52.23486096929749 16.191937138595005)',
          atype: 'POINT',
          confidence: 0.85,
          externalId: '2024-06-22-17-53-05_UMBRA-05_GEC',
          featureArray: [1227.6, 1575.42],
          featureBool: true,
          featureString: 'TRANSMITTING FREQUENCIES',
          featureStringArray: ['String1', 'String2'],
          featureValue: 1227.6,
          heading: 97.1,
          height: 7.25,
          length: 10.54,
          name: 'HEADING',
          origin: 'THIRD_PARTY_DATASOURCE',
          speed: 0.1,
          srcIds: ['b008c63b-ad89-4493-80e0-77bc982bef77', '3565a6dd-654e-4969-89e0-ee7c51ab1e1b'],
          srcTs: ['2025-02-24T16:27:18.471Z', '2025-02-24T16:29:31.000000Z'],
          srcTyps: ['SAR', 'AIS'],
          tags: ['TAG1', 'TAG2'],
          transactionId: 'c3bdef1f-5a4f-4716-bee4-7a1e0ec7d37d',
          type: 'VESSEL',
          width: 3.74,
        },
      ],
    });
  });
});
