// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sensormaintenance', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sensormaintenance.create({
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
    const response = await client.sensormaintenance.create({
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
    const responsePromise = client.sensormaintenance.update('id', {
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
    const response = await client.sensormaintenance.update('id', {
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
    const responsePromise = client.sensormaintenance.list();
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
      client.sensormaintenance.list(
        { endTime: '2019-12-27T18:11:19.117Z', startTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sensormaintenance.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.sensormaintenance.count();
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
      client.sensormaintenance.count(
        { endTime: '2019-12-27T18:11:19.117Z', startTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.sensormaintenance.createBulk({
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
    const response = await client.sensormaintenance.createBulk({
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
    const responsePromise = client.sensormaintenance.current();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.sensormaintenance.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.sensormaintenance.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.sensormaintenance.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.sensormaintenance.tuple({
      columns: 'columns',
      endTime: '2019-12-27T18:11:19.117Z',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
