// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onorbitassessment', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbitassessment.create({
      assmtTime: '2025-08-10T02:44:02.000Z',
      classificationMarking: 'U',
      dataMode: 'TEST',
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
    const response = await client.onorbitassessment.create({
      assmtTime: '2025-08-10T02:44:02.000Z',
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      assessment: 'NOMINAL',
      assmtDetails: 'This spacecraft appears to be in a stable, 3-axis controlled state',
      assmtLevel: 'SIGNATURE',
      assmtRotPeriod: 72.5,
      assmtSubType: 'STABLE',
      assmtURL: 'https://unifieddatalibrary.com',
      autoAssmt: false,
      collectionURL: 'https://unifieddatalibrary.com',
      components: ['THRUSTER', 'RWA-2'],
      idOnOrbit: '25544',
      idSensor: '211',
      obDuration: 1.75,
      obTime: '2025-08-09T23:27:55.862Z',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ISS',
      origSensorId: 'ORIGSENSOR-ID',
      satNo: 25544,
      sigDataType: 'PHOTOMETRY',
      srcIds: ['49cf9dcf-e97e-43ed-8e21-22e2bb0e3da6', 'da779fc4-3a37-4caa-a629-289671bc96e8'],
      srcTyps: ['EO', 'SKYIMAGE'],
      tags: ['TAG1', 'TAG2'],
      transactionId: 'TRANSACTION-ID',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.onorbitassessment.list({ assmtTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.onorbitassessment.list({
      assmtTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.onorbitassessment.count({ assmtTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.onorbitassessment.count({
      assmtTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.onorbitassessment.createBulk({
      body: [
        {
          assmtTime: '2025-08-10T02:44:02.000Z',
          classificationMarking: 'U',
          dataMode: 'TEST',
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
    const response = await client.onorbitassessment.createBulk({
      body: [
        {
          assmtTime: '2025-08-10T02:44:02.000Z',
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          assessment: 'NOMINAL',
          assmtDetails: 'This spacecraft appears to be in a stable, 3-axis controlled state',
          assmtLevel: 'SIGNATURE',
          assmtRotPeriod: 72.5,
          assmtSubType: 'STABLE',
          assmtURL: 'https://unifieddatalibrary.com',
          autoAssmt: false,
          collectionURL: 'https://unifieddatalibrary.com',
          components: ['THRUSTER', 'RWA-2'],
          idOnOrbit: '25544',
          idSensor: '211',
          obDuration: 1.75,
          obTime: '2025-08-09T23:27:55.862Z',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ISS',
          origSensorId: 'ORIGSENSOR-ID',
          satNo: 25544,
          sigDataType: 'PHOTOMETRY',
          srcIds: ['49cf9dcf-e97e-43ed-8e21-22e2bb0e3da6', 'da779fc4-3a37-4caa-a629-289671bc96e8'],
          srcTyps: ['EO', 'SKYIMAGE'],
          tags: ['TAG1', 'TAG2'],
          transactionId: 'TRANSACTION-ID',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.onorbitassessment.get('id');
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
      client.onorbitassessment.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.onorbitassessment.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.onorbitassessment.tuple({
      assmtTime: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
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
    const response = await client.onorbitassessment.tuple({
      assmtTime: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.onorbitassessment.unvalidatedPublish({
      body: [
        {
          assmtTime: '2025-08-10T02:44:02.000Z',
          classificationMarking: 'U',
          dataMode: 'TEST',
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
    const response = await client.onorbitassessment.unvalidatedPublish({
      body: [
        {
          assmtTime: '2025-08-10T02:44:02.000Z',
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          assessment: 'NOMINAL',
          assmtDetails: 'This spacecraft appears to be in a stable, 3-axis controlled state',
          assmtLevel: 'SIGNATURE',
          assmtRotPeriod: 72.5,
          assmtSubType: 'STABLE',
          assmtURL: 'https://unifieddatalibrary.com',
          autoAssmt: false,
          collectionURL: 'https://unifieddatalibrary.com',
          components: ['THRUSTER', 'RWA-2'],
          idOnOrbit: '25544',
          idSensor: '211',
          obDuration: 1.75,
          obTime: '2025-08-09T23:27:55.862Z',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ISS',
          origSensorId: 'ORIGSENSOR-ID',
          satNo: 25544,
          sigDataType: 'PHOTOMETRY',
          srcIds: ['49cf9dcf-e97e-43ed-8e21-22e2bb0e3da6', 'da779fc4-3a37-4caa-a629-289671bc96e8'],
          srcTyps: ['EO', 'SKYIMAGE'],
          tags: ['TAG1', 'TAG2'],
          transactionId: 'TRANSACTION-ID',
        },
      ],
    });
  });
});
