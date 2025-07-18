// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aircraftStatusRemarks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aircraftStatusRemarks.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAircraftStatus: '388b1f64-ccff-4113-b049-3cf5542c2a42',
      source: 'Bluestaq',
      text: 'Remark text',
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
    const response = await client.aircraftStatusRemarks.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAircraftStatus: '388b1f64-ccff-4113-b049-3cf5542c2a42',
      source: 'Bluestaq',
      text: 'Remark text',
      id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      altRmkId: 'GDSSBL022307131714250077',
      lastUpdatedAt: '2024-01-01T16:00:00.123Z',
      lastUpdatedBy: 'JOHN SMITH',
      name: 'DISCREPANCY - 202297501',
      origin: 'THIRD_PARTY_DATASOURCE',
      timestamp: '2024-01-01T15:00:00.123Z',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.aircraftStatusRemarks.retrieve('id');
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
      client.aircraftStatusRemarks.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.aircraftStatusRemarks.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAircraftStatus: '388b1f64-ccff-4113-b049-3cf5542c2a42',
      source: 'Bluestaq',
      text: 'Remark text',
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
    const response = await client.aircraftStatusRemarks.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAircraftStatus: '388b1f64-ccff-4113-b049-3cf5542c2a42',
      source: 'Bluestaq',
      text: 'Remark text',
      body_id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      altRmkId: 'GDSSBL022307131714250077',
      lastUpdatedAt: '2024-01-01T16:00:00.123Z',
      lastUpdatedBy: 'JOHN SMITH',
      name: 'DISCREPANCY - 202297501',
      origin: 'THIRD_PARTY_DATASOURCE',
      timestamp: '2024-01-01T15:00:00.123Z',
    });
  });

  test('list', async () => {
    const responsePromise = client.aircraftStatusRemarks.list();
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
      client.aircraftStatusRemarks.list(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.aircraftStatusRemarks.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.aircraftStatusRemarks.count();
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
      client.aircraftStatusRemarks.count(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.aircraftStatusRemarks.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.aircraftStatusRemarks.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.aircraftStatusRemarks.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
