// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sgi', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sgi.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      effectiveDate: '2018-01-01T16:00:00.123Z',
      sgiDate: '2018-01-01T16:00:00.123Z',
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
    const response = await client.sgi.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      effectiveDate: '2018-01-01T16:00:00.123Z',
      sgiDate: '2018-01-01T16:00:00.123Z',
      source: 'Bluestaq',
      id: 'SGI-ID',
      analyzerAttenuation: 5.1,
      ap: 1.23,
      apDuration: 3,
      coeffDegree: [1, 2, 3],
      coeffOrder: [1, 2, 3],
      ctce: [1.23, 342.3, 1.32],
      ctci: [1.23, 342.3, 1.32],
      dst: 1.23,
      dtc: 1.23,
      e10: 1.23,
      e54: 1.23,
      f10: 1.23,
      f54: 1.23,
      f81: 1.23,
      frequencies: [25, 25.125, 25.25, 25.375, 25.5, 25.625, 25.75, 25.875],
      gamma: 25,
      idSensor: '57c96c97-e076-48af-a068-73ee2cb37e65',
      kIndex: 1,
      kp: 4.66,
      kpDuration: 3,
      m10: 1.23,
      m54: 1.23,
      mode: 1,
      normFactor: 2.12679e-7,
      observedBaseline: [15, 32, 25, 134, 0, 6, 19, 8],
      origin: 'THIRD_PARTY_DATASOURCE',
      origSensorId: 'ORIGSENSOR-ID',
      powers: [67.1, 65.2, 68.1, 74.3, 68.1, 96.4, 97.3, 68.1],
      precedence: 'R',
      rawFileURI: 'rawFileURI',
      rbDuration: 24,
      rbIndex: 1.02947164506,
      rbRegionCode: 2,
      s10: 1.23,
      s54: 1.23,
      state: 'I',
      stationName: 'Boulder',
      stce: [1.23, 342.3, 1.32],
      stci: [1.23, 342.3, 1.32],
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      transactionId: 'TRANSACTION-ID',
      type: 'JBH09',
      y10: 1.23,
      y54: 1.23,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.sgi.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      effectiveDate: '2018-01-01T16:00:00.123Z',
      sgiDate: '2018-01-01T16:00:00.123Z',
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
    const response = await client.sgi.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      effectiveDate: '2018-01-01T16:00:00.123Z',
      sgiDate: '2018-01-01T16:00:00.123Z',
      source: 'Bluestaq',
      body_id: 'SGI-ID',
      analyzerAttenuation: 5.1,
      ap: 1.23,
      apDuration: 3,
      coeffDegree: [1, 2, 3],
      coeffOrder: [1, 2, 3],
      ctce: [1.23, 342.3, 1.32],
      ctci: [1.23, 342.3, 1.32],
      dst: 1.23,
      dtc: 1.23,
      e10: 1.23,
      e54: 1.23,
      f10: 1.23,
      f54: 1.23,
      f81: 1.23,
      frequencies: [25, 25.125, 25.25, 25.375, 25.5, 25.625, 25.75, 25.875],
      gamma: 25,
      idSensor: '57c96c97-e076-48af-a068-73ee2cb37e65',
      kIndex: 1,
      kp: 4.66,
      kpDuration: 3,
      m10: 1.23,
      m54: 1.23,
      mode: 1,
      normFactor: 2.12679e-7,
      observedBaseline: [15, 32, 25, 134, 0, 6, 19, 8],
      origin: 'THIRD_PARTY_DATASOURCE',
      origSensorId: 'ORIGSENSOR-ID',
      powers: [67.1, 65.2, 68.1, 74.3, 68.1, 96.4, 97.3, 68.1],
      precedence: 'R',
      rawFileURI: 'rawFileURI',
      rbDuration: 24,
      rbIndex: 1.02947164506,
      rbRegionCode: 2,
      s10: 1.23,
      s54: 1.23,
      state: 'I',
      stationName: 'Boulder',
      stce: [1.23, 342.3, 1.32],
      stci: [1.23, 342.3, 1.32],
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      transactionId: 'TRANSACTION-ID',
      type: 'JBH09',
      y10: 1.23,
      y54: 1.23,
    });
  });

  test('list', async () => {
    const responsePromise = client.sgi.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sgi.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sgi.list(
        { effectiveDate: '2019-12-27T18:11:19.117Z', sgiDate: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sgi.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sgi.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.sgi.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sgi.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sgi.count(
        { effectiveDate: '2019-12-27T18:11:19.117Z', sgiDate: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.sgi.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        effectiveDate: '2018-01-01T16:00:00.123Z',
        sgiDate: '2018-01-01T16:00:00.123Z',
        source: 'Bluestaq',
      },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.sgi.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        effectiveDate: '2018-01-01T16:00:00.123Z',
        sgiDate: '2018-01-01T16:00:00.123Z',
        source: 'Bluestaq',
        id: 'SGI-ID',
        analyzerAttenuation: 5.1,
        ap: 1.23,
        apDuration: 3,
        coeffDegree: [1, 2, 3],
        coeffOrder: [1, 2, 3],
        ctce: [1.23, 342.3, 1.32],
        ctci: [1.23, 342.3, 1.32],
        dst: 1.23,
        dtc: 1.23,
        e10: 1.23,
        e54: 1.23,
        f10: 1.23,
        f54: 1.23,
        f81: 1.23,
        frequencies: [25, 25.125, 25.25, 25.375, 25.5, 25.625, 25.75, 25.875],
        gamma: 25,
        idSensor: '57c96c97-e076-48af-a068-73ee2cb37e65',
        kIndex: 1,
        kp: 4.66,
        kpDuration: 3,
        m10: 1.23,
        m54: 1.23,
        mode: 1,
        normFactor: 2.12679e-7,
        observedBaseline: [15, 32, 25, 134, 0, 6, 19, 8],
        origin: 'THIRD_PARTY_DATASOURCE',
        origSensorId: 'ORIGSENSOR-ID',
        powers: [67.1, 65.2, 68.1, 74.3, 68.1, 96.4, 97.3, 68.1],
        precedence: 'R',
        rawFileURI: 'rawFileURI',
        rbDuration: 24,
        rbIndex: 1.02947164506,
        rbRegionCode: 2,
        s10: 1.23,
        s54: 1.23,
        state: 'I',
        stationName: 'Boulder',
        stce: [1.23, 342.3, 1.32],
        stci: [1.23, 342.3, 1.32],
        tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
        transactionId: 'TRANSACTION-ID',
        type: 'JBH09',
        y10: 1.23,
        y54: 1.23,
      },
    ]);
  });

  test('createBulkV2: only required params', async () => {
    const responsePromise = client.sgi.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        effectiveDate: '2018-01-01T16:00:00.123Z',
        sgiDate: '2018-01-01T16:00:00.123Z',
        source: 'Bluestaq',
      },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulkV2: required and optional params', async () => {
    const response = await client.sgi.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        effectiveDate: '2018-01-01T16:00:00.123Z',
        sgiDate: '2018-01-01T16:00:00.123Z',
        source: 'Bluestaq',
        id: 'SGI-ID',
        analyzerAttenuation: 5.1,
        ap: 1.23,
        apDuration: 3,
        coeffDegree: [1, 2, 3],
        coeffOrder: [1, 2, 3],
        ctce: [1.23, 342.3, 1.32],
        ctci: [1.23, 342.3, 1.32],
        dst: 1.23,
        dtc: 1.23,
        e10: 1.23,
        e54: 1.23,
        f10: 1.23,
        f54: 1.23,
        f81: 1.23,
        frequencies: [25, 25.125, 25.25, 25.375, 25.5, 25.625, 25.75, 25.875],
        gamma: 25,
        idSensor: '57c96c97-e076-48af-a068-73ee2cb37e65',
        kIndex: 1,
        kp: 4.66,
        kpDuration: 3,
        m10: 1.23,
        m54: 1.23,
        mode: 1,
        normFactor: 2.12679e-7,
        observedBaseline: [15, 32, 25, 134, 0, 6, 19, 8],
        origin: 'THIRD_PARTY_DATASOURCE',
        origSensorId: 'ORIGSENSOR-ID',
        powers: [67.1, 65.2, 68.1, 74.3, 68.1, 96.4, 97.3, 68.1],
        precedence: 'R',
        rawFileURI: 'rawFileURI',
        rbDuration: 24,
        rbIndex: 1.02947164506,
        rbRegionCode: 2,
        s10: 1.23,
        s54: 1.23,
        state: 'I',
        stationName: 'Boulder',
        stce: [1.23, 342.3, 1.32],
        stci: [1.23, 342.3, 1.32],
        tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
        transactionId: 'TRANSACTION-ID',
        type: 'JBH09',
        y10: 1.23,
        y54: 1.23,
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.sgi.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sgi.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('getSGIDataByEffectiveAsOfDate', async () => {
    const responsePromise = client.sgi.getSGIDataByEffectiveAsOfDate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSGIDataByEffectiveAsOfDate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sgi.getSGIDataByEffectiveAsOfDate({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('getSGIDataByEffectiveAsOfDate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sgi.getSGIDataByEffectiveAsOfDate(
        { effectiveDate: '2019-12-27T18:11:19.117Z', sgiDate: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.sgi.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sgi.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.sgi.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.sgi.tuple({
      columns: 'columns',
      effectiveDate: '2019-12-27T18:11:19.117Z',
      sgiDate: '2019-12-27T18:11:19.117Z',
    });
  });
});
