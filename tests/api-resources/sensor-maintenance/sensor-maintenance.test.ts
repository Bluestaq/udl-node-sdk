// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sensorMaintenance', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sensorMaintenance.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      endTime: '2018-01-01T16:00:00.123456Z',
      siteCode: 'site01',
      source: 'Bluestaq',
      startTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.sensorMaintenance.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      endTime: '2018-01-01T16:00:00.123456Z',
      siteCode: 'site01',
      source: 'Bluestaq',
      startTime: '2018-01-01T16:00:00.123456Z',
      id: 'SENSORMAINTENANCE-ID',
      activity: 'Activity Description',
      approver: 'approver',
      changer: 'changer',
      duration: '128:16:52',
      eowId: 'eowId',
      equipStatus: 'FMC',
      idSensor: 'idSensor',
      impactedFaces: 'impactedFaces',
      lineNumber: 'lineNumber',
      mdOpsCap: 'R',
      mwOpsCap: 'G',
      origin: 'THIRD_PARTY_DATASOURCE',
      priority: 'low',
      recall: '128:16:52',
      rel: 'rel',
      remark: 'Remarks',
      requestor: 'requestor',
      resource: 'resource',
      rev: 'rev',
      ssOpsCap: 'Y',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.sensorMaintenance.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      endTime: '2018-01-01T16:00:00.123456Z',
      siteCode: 'site01',
      source: 'Bluestaq',
      startTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.sensorMaintenance.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      endTime: '2018-01-01T16:00:00.123456Z',
      siteCode: 'site01',
      source: 'Bluestaq',
      startTime: '2018-01-01T16:00:00.123456Z',
      body_id: 'SENSORMAINTENANCE-ID',
      activity: 'Activity Description',
      approver: 'approver',
      changer: 'changer',
      duration: '128:16:52',
      eowId: 'eowId',
      equipStatus: 'FMC',
      idSensor: 'idSensor',
      impactedFaces: 'impactedFaces',
      lineNumber: 'lineNumber',
      mdOpsCap: 'R',
      mwOpsCap: 'G',
      origin: 'THIRD_PARTY_DATASOURCE',
      priority: 'low',
      recall: '128:16:52',
      rel: 'rel',
      remark: 'Remarks',
      requestor: 'requestor',
      resource: 'resource',
      rev: 'rev',
      ssOpsCap: 'Y',
    });
  });

  test('list', async () => {
    const responsePromise = client.sensorMaintenance.list();
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
      client.sensorMaintenance.list(
        {
          endTime: '2019-12-27T18:11:19.117Z',
          firstResult: 0,
          maxResults: 0,
          startTime: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sensorMaintenance.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.sensorMaintenance.count();
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
      client.sensorMaintenance.count(
        {
          endTime: '2019-12-27T18:11:19.117Z',
          firstResult: 0,
          maxResults: 0,
          startTime: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.sensorMaintenance.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          endTime: '2018-01-01T16:00:00.123456Z',
          siteCode: 'site01',
          source: 'Bluestaq',
          startTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.sensorMaintenance.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          endTime: '2018-01-01T16:00:00.123456Z',
          siteCode: 'site01',
          source: 'Bluestaq',
          startTime: '2018-01-01T16:00:00.123456Z',
          id: 'SENSORMAINTENANCE-ID',
          activity: 'Activity Description',
          approver: 'approver',
          changer: 'changer',
          duration: '128:16:52',
          eowId: 'eowId',
          equipStatus: 'FMC',
          idSensor: 'idSensor',
          impactedFaces: 'impactedFaces',
          lineNumber: 'lineNumber',
          mdOpsCap: 'R',
          mwOpsCap: 'G',
          origin: 'THIRD_PARTY_DATASOURCE',
          priority: 'low',
          recall: '128:16:52',
          rel: 'rel',
          remark: 'Remarks',
          requestor: 'requestor',
          resource: 'resource',
          rev: 'rev',
          ssOpsCap: 'Y',
        },
      ],
      origin: 'origin',
      source: 'source',
    });
  });

  test('current', async () => {
    const responsePromise = client.sensorMaintenance.current();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('current: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sensorMaintenance.current(
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.sensorMaintenance.get('id');
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
      client.sensorMaintenance.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.sensorMaintenance.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.sensorMaintenance.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.sensorMaintenance.tuple({
      columns: 'columns',
      endTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
