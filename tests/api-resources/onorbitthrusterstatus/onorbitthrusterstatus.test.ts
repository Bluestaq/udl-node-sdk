// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onorbitthrusterstatus', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbitthrusterstatus.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOnorbitThruster: 'ff7dc909-e8b4-4a54-8529-1963d4e9b353',
      source: 'Bluestaq',
      statusTime: '2024-01-01T16:00:00.123Z',
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
    const response = await client.onorbitthrusterstatus.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOnorbitThruster: 'ff7dc909-e8b4-4a54-8529-1963d4e9b353',
      source: 'Bluestaq',
      statusTime: '2024-01-01T16:00:00.123Z',
      id: 'af103c-1f917dc-002c1bd',
      estDeltaV: 10.1,
      fuelMass: 100.1,
      fuelMassUnc: 10.1,
      isp: 300.1,
      maxDeltaV: 100.1,
      minDeltaV: 0.1,
      name: 'REA1',
      operational: true,
      origin: 'THIRD_PARTY_DATASOURCE',
      propMassAvg: 907.6,
      propMassMax: 2333.3,
      propMassMedian: 200.1,
      propMassMin: 0.1,
      thrustMax: 22.1,
      totalDeltaV: 100.1,
    });
  });

  test('list', async () => {
    const responsePromise = client.onorbitthrusterstatus.list();
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
      client.onorbitthrusterstatus.list(
        { idOnorbitThruster: 'idOnorbitThruster', statusTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.onorbitthrusterstatus.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.onorbitthrusterstatus.count();
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
      client.onorbitthrusterstatus.count(
        { idOnorbitThruster: 'idOnorbitThruster', statusTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.onorbitthrusterstatus.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idOnorbitThruster: 'ff7dc909-e8b4-4a54-8529-1963d4e9b353',
          source: 'Bluestaq',
          statusTime: '2024-01-01T16:00:00.123Z',
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
    const response = await client.onorbitthrusterstatus.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idOnorbitThruster: 'ff7dc909-e8b4-4a54-8529-1963d4e9b353',
          source: 'Bluestaq',
          statusTime: '2024-01-01T16:00:00.123Z',
          id: 'af103c-1f917dc-002c1bd',
          estDeltaV: 10.1,
          fuelMass: 100.1,
          fuelMassUnc: 10.1,
          isp: 300.1,
          maxDeltaV: 100.1,
          minDeltaV: 0.1,
          name: 'REA1',
          operational: true,
          origin: 'THIRD_PARTY_DATASOURCE',
          propMassAvg: 907.6,
          propMassMax: 2333.3,
          propMassMedian: 200.1,
          propMassMin: 0.1,
          thrustMax: 22.1,
          totalDeltaV: 100.1,
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.onorbitthrusterstatus.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.onorbitthrusterstatus.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.onorbitthrusterstatus.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.onorbitthrusterstatus.tuple({
      columns: 'columns',
      idOnorbitThruster: 'idOnorbitThruster',
      statusTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
