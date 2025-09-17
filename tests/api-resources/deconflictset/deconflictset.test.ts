// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deconflictset', () => {
  test('create: only required params', async () => {
    const responsePromise = client.deconflictset.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      eventStartTime: '2023-09-27T20:49:37.812Z',
      numWindows: 250001,
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
    const response = await client.deconflictset.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      eventStartTime: '2023-09-27T20:49:37.812Z',
      numWindows: 250001,
      source: 'Bluestaq',
      id: '123dd511-8ba5-47d3-9909-836149f87434',
      calculationEndTime: '2023-09-25T20:00:00.123Z',
      calculationId: '3856c0a0-585f-4232-af5d-93bad320fac6',
      calculationStartTime: '2023-09-25T18:00:00.123Z',
      deconflictWindows: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          eventStartTime: '2023-09-27T20:49:37.812Z',
          source: 'Bluestaq',
          startTime: '2023-07-19T00:00:00.001Z',
          stopTime: '2023-07-19T04:20:34.257Z',
          id: '123dd511-8ba5-47d3-9909-836149f87434',
          angleOfEntry: 0.65,
          angleOfExit: 0.65,
          entryCoords: [-191500.74728263554, -987729.0529358581, 6735105.853234725],
          eventType: 'LASER',
          exitCoords: [-361767.9896431379, -854021.6371921108, 6746208.020741149],
          origin: 'THIRD_PARTY_DATASOURCE',
          target: '41715',
          targetType: 'VICTIM',
          victim: '55914',
          windowType: 'CLOSED',
        },
      ],
      errors: ['ERROR1', 'ERROR2'],
      eventEndTime: '2023-09-28T20:49:37.812Z',
      eventType: 'LASER',
      idLaserDeconflictRequest: '026dd511-8ba5-47d3-9909-836149f87686',
      origin: 'THIRD_PARTY_DATASOURCE',
      referenceFrame: 'J2000',
      tags: ['TAG1', 'TAG2'],
      transactionId: 'TRANSACTION-ID',
      warnings: ['WARNING1', 'WARNING2'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.deconflictset.list({ eventStartTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.deconflictset.list({
      eventStartTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.deconflictset.count({ eventStartTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.deconflictset.count({
      eventStartTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('get', async () => {
    const responsePromise = client.deconflictset.get('id');
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
      client.deconflictset.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.deconflictset.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.deconflictset.tuple({
      columns: 'columns',
      eventStartTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.deconflictset.tuple({
      columns: 'columns',
      eventStartTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.deconflictset.unvalidatedPublish({
      classificationMarking: 'U',
      dataMode: 'TEST',
      eventStartTime: '2023-09-27T20:49:37.812Z',
      numWindows: 250001,
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

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.deconflictset.unvalidatedPublish({
      classificationMarking: 'U',
      dataMode: 'TEST',
      eventStartTime: '2023-09-27T20:49:37.812Z',
      numWindows: 250001,
      source: 'Bluestaq',
      id: '123dd511-8ba5-47d3-9909-836149f87434',
      calculationEndTime: '2023-09-25T20:00:00.123Z',
      calculationId: '3856c0a0-585f-4232-af5d-93bad320fac6',
      calculationStartTime: '2023-09-25T18:00:00.123Z',
      deconflictWindows: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          eventStartTime: '2023-09-27T20:49:37.812Z',
          source: 'Bluestaq',
          startTime: '2023-07-19T00:00:00.001Z',
          stopTime: '2023-07-19T04:20:34.257Z',
          id: '123dd511-8ba5-47d3-9909-836149f87434',
          angleOfEntry: 0.65,
          angleOfExit: 0.65,
          entryCoords: [-191500.74728263554, -987729.0529358581, 6735105.853234725],
          eventType: 'LASER',
          exitCoords: [-361767.9896431379, -854021.6371921108, 6746208.020741149],
          origin: 'THIRD_PARTY_DATASOURCE',
          target: '41715',
          targetType: 'VICTIM',
          victim: '55914',
          windowType: 'CLOSED',
        },
      ],
      errors: ['ERROR1', 'ERROR2'],
      eventEndTime: '2023-09-28T20:49:37.812Z',
      eventType: 'LASER',
      idLaserDeconflictRequest: '026dd511-8ba5-47d3-9909-836149f87686',
      origin: 'THIRD_PARTY_DATASOURCE',
      referenceFrame: 'J2000',
      tags: ['TAG1', 'TAG2'],
      transactionId: 'TRANSACTION-ID',
      warnings: ['WARNING1', 'WARNING2'],
    });
  });
});
