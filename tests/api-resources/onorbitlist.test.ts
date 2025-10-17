// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onorbitlist', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbitlist.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'HRR-SATELLITES',
      onOrbitListItems: [{}],
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
    const response = await client.onorbitlist.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'HRR-SATELLITES',
      onOrbitListItems: [
        {
          clearingBoxCrossTrack: 1.25,
          clearingBoxInTrack: 1.25,
          clearingRadius: 1.25,
          commonName: 'VANGUARD 1',
          countryCode: 'USA',
          expiredOn: '2024-07-12T00:00:00.000Z',
          freqMins: 300.25,
          monitoringType: 'REVISIT_RATE',
          objectId: '5',
          orbitRegime: 'LEO',
          origObjectId: 'ORIGOBJECT-ID',
          payloadPriority: 2.5,
          rank: 3,
          urgency: 5.1,
        },
      ],
      source: 'Bluestaq',
      id: 'ONORBITLIST-ID',
      defaultRevisitRateMins: 15.3,
      description: 'DESCRIPTION_OF_LIST',
      listPriority: 1.1,
      namespace: '18SDS',
      origin: 'THIRD_PARTY_DATASOURCE',
      tags: ['TAG1', 'TAG2'],
      transactionId: 'TRANSACTION-ID',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.onorbitlist.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'HRR-SATELLITES',
      onOrbitListItems: [{}],
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
    const response = await client.onorbitlist.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'HRR-SATELLITES',
      onOrbitListItems: [
        {
          clearingBoxCrossTrack: 1.25,
          clearingBoxInTrack: 1.25,
          clearingRadius: 1.25,
          commonName: 'VANGUARD 1',
          countryCode: 'USA',
          expiredOn: '2024-07-12T00:00:00.000Z',
          freqMins: 300.25,
          monitoringType: 'REVISIT_RATE',
          objectId: '5',
          orbitRegime: 'LEO',
          origObjectId: 'ORIGOBJECT-ID',
          payloadPriority: 2.5,
          rank: 3,
          urgency: 5.1,
        },
      ],
      source: 'Bluestaq',
      body_id: 'ONORBITLIST-ID',
      defaultRevisitRateMins: 15.3,
      description: 'DESCRIPTION_OF_LIST',
      listPriority: 1.1,
      namespace: '18SDS',
      origin: 'THIRD_PARTY_DATASOURCE',
      tags: ['TAG1', 'TAG2'],
      transactionId: 'TRANSACTION-ID',
    });
  });

  test('list', async () => {
    const responsePromise = client.onorbitlist.list();
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
      client.onorbitlist.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.onorbitlist.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.onorbitlist.count();
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
      client.onorbitlist.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.onorbitlist.get('id');
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
      client.onorbitlist.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.onorbitlist.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.onorbitlist.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.onorbitlist.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });
});
