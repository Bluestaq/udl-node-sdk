// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource obscorrelation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.observations.obscorrelation.create({
      classificationMarking: 'U',
      corrType: 'OBSERVATION',
      dataMode: 'TEST',
      msgTs: '2021-01-01T01:01:01.123Z',
      obId: 'e69c6734-30a1-4c4f-8fe2-7187e7012e8c',
      obType: 'EO',
      referenceOrbitId: '21826de2-5639-4c2a-b68f-30b67753b983',
      referenceOrbitType: 'ELSET',
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
    const response = await client.observations.obscorrelation.create({
      classificationMarking: 'U',
      corrType: 'OBSERVATION',
      dataMode: 'TEST',
      msgTs: '2021-01-01T01:01:01.123Z',
      obId: 'e69c6734-30a1-4c4f-8fe2-7187e7012e8c',
      obType: 'EO',
      referenceOrbitId: '21826de2-5639-4c2a-b68f-30b67753b983',
      referenceOrbitType: 'ELSET',
      source: 'Bluestaq',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      algorithmCorrType: 'ROTAS',
      altCatalog: 'CATALOG',
      altNamespace: '18SDS',
      altObjectId: '26900',
      altUct: false,
      astat: 2,
      corrQuality: 0.96,
      idParentCorrelation: 'ID-PARENT-CORRELATION',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      satNo: 12100,
      tags: ['TAG1', 'TAG2'],
      trackId: 'TRACK-ID',
      transactionId: 'TRANSACTION-ID',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.observations.obscorrelation.retrieve('id');
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
      client.observations.obscorrelation.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.observations.obscorrelation.list({ msgTs: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.observations.obscorrelation.list({
      msgTs: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.observations.obscorrelation.count({ msgTs: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.observations.obscorrelation.count({
      msgTs: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.observations.obscorrelation.createBulk({
      body: [
        {
          classificationMarking: 'U',
          corrType: 'OBSERVATION',
          dataMode: 'TEST',
          msgTs: '2021-01-01T01:01:01.123Z',
          obId: 'e69c6734-30a1-4c4f-8fe2-7187e7012e8c',
          obType: 'EO',
          referenceOrbitId: '21826de2-5639-4c2a-b68f-30b67753b983',
          referenceOrbitType: 'ELSET',
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
    const response = await client.observations.obscorrelation.createBulk({
      body: [
        {
          classificationMarking: 'U',
          corrType: 'OBSERVATION',
          dataMode: 'TEST',
          msgTs: '2021-01-01T01:01:01.123Z',
          obId: 'e69c6734-30a1-4c4f-8fe2-7187e7012e8c',
          obType: 'EO',
          referenceOrbitId: '21826de2-5639-4c2a-b68f-30b67753b983',
          referenceOrbitType: 'ELSET',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          algorithmCorrType: 'ROTAS',
          altCatalog: 'CATALOG',
          altNamespace: '18SDS',
          altObjectId: '26900',
          altUct: false,
          astat: 2,
          corrQuality: 0.96,
          idParentCorrelation: 'ID-PARENT-CORRELATION',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          satNo: 12100,
          tags: ['TAG1', 'TAG2'],
          trackId: 'TRACK-ID',
          transactionId: 'TRANSACTION-ID',
        },
      ],
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.observations.obscorrelation.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.observations.obscorrelation.tuple({
      columns: 'columns',
      msgTs: '2019-12-27T18:11:19.117Z',
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
    const response = await client.observations.obscorrelation.tuple({
      columns: 'columns',
      msgTs: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.observations.obscorrelation.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          corrType: 'OBSERVATION',
          dataMode: 'TEST',
          msgTs: '2021-01-01T01:01:01.123Z',
          obId: 'e69c6734-30a1-4c4f-8fe2-7187e7012e8c',
          obType: 'EO',
          referenceOrbitId: '21826de2-5639-4c2a-b68f-30b67753b983',
          referenceOrbitType: 'ELSET',
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
    const response = await client.observations.obscorrelation.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          corrType: 'OBSERVATION',
          dataMode: 'TEST',
          msgTs: '2021-01-01T01:01:01.123Z',
          obId: 'e69c6734-30a1-4c4f-8fe2-7187e7012e8c',
          obType: 'EO',
          referenceOrbitId: '21826de2-5639-4c2a-b68f-30b67753b983',
          referenceOrbitType: 'ELSET',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          algorithmCorrType: 'ROTAS',
          altCatalog: 'CATALOG',
          altNamespace: '18SDS',
          altObjectId: '26900',
          altUct: false,
          astat: 2,
          corrQuality: 0.96,
          idParentCorrelation: 'ID-PARENT-CORRELATION',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          satNo: 12100,
          tags: ['TAG1', 'TAG2'],
          trackId: 'TRACK-ID',
          transactionId: 'TRANSACTION-ID',
        },
      ],
    });
  });
});
