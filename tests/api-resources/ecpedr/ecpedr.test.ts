// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ecpedr', () => {
  test('create: only required params', async () => {
    const responsePromise = client.ecpedr.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      ecpedrMeasurements: [{ obType: 'FLUX', obUoM: '#/MeV/cm^2/sr/s' }],
      obTime: '2025-03-13T17:00:00.123456Z',
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
    const response = await client.ecpedr.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      ecpedrMeasurements: [
        {
          obType: 'FLUX',
          obUoM: '#/MeV/cm^2/sr/s',
          chanEnergyHigh: 0.003495,
          chanEnergyLow: 58.4,
          chanId: 'H05E',
          chanType: 'INTEGRAL',
          chanUnit: 'keV',
          msgNumber: 21,
          obValue: 31473.9,
          species: 'ELECTRON',
        },
      ],
      obTime: '2025-03-13T17:00:00.123456Z',
      source: 'Bluestaq',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      genSystem: 'cpuch2.aero.org',
      genTime: '2025-03-13T18:00:00.123Z',
      idSensor: 'REACH-101',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'WSF-M SV1',
      origSensorId: 'CEASE-3',
      satNo: 101,
      senPos: [5893.74, 1408.8, 3899.38],
      senReferenceFrame: 'TEME',
      tags: ['TAG1', 'TAG2'],
      transactionId: 'TRANSACTION-ID',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.ecpedr.list({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.ecpedr.list({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.ecpedr.count({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.ecpedr.count({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.ecpedr.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          ecpedrMeasurements: [{ obType: 'FLUX', obUoM: '#/MeV/cm^2/sr/s' }],
          obTime: '2025-03-13T17:00:00.123456Z',
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
    const response = await client.ecpedr.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          ecpedrMeasurements: [
            {
              obType: 'FLUX',
              obUoM: '#/MeV/cm^2/sr/s',
              chanEnergyHigh: 0.003495,
              chanEnergyLow: 58.4,
              chanId: 'H05E',
              chanType: 'INTEGRAL',
              chanUnit: 'keV',
              msgNumber: 21,
              obValue: 31473.9,
              species: 'ELECTRON',
            },
          ],
          obTime: '2025-03-13T17:00:00.123456Z',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          genSystem: 'cpuch2.aero.org',
          genTime: '2025-03-13T18:00:00.123Z',
          idSensor: 'REACH-101',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'WSF-M SV1',
          origSensorId: 'CEASE-3',
          satNo: 101,
          senPos: [5893.74, 1408.8, 3899.38],
          senReferenceFrame: 'TEME',
          tags: ['TAG1', 'TAG2'],
          transactionId: 'TRANSACTION-ID',
        },
      ],
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.ecpedr.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.ecpedr.tuple({ columns: 'columns', obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.ecpedr.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.ecpedr.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          ecpedrMeasurements: [{ obType: 'FLUX', obUoM: '#/MeV/cm^2/sr/s' }],
          obTime: '2025-03-13T17:00:00.123456Z',
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
    const response = await client.ecpedr.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          ecpedrMeasurements: [
            {
              obType: 'FLUX',
              obUoM: '#/MeV/cm^2/sr/s',
              chanEnergyHigh: 0.003495,
              chanEnergyLow: 58.4,
              chanId: 'H05E',
              chanType: 'INTEGRAL',
              chanUnit: 'keV',
              msgNumber: 21,
              obValue: 31473.9,
              species: 'ELECTRON',
            },
          ],
          obTime: '2025-03-13T17:00:00.123456Z',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          genSystem: 'cpuch2.aero.org',
          genTime: '2025-03-13T18:00:00.123Z',
          idSensor: 'REACH-101',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'WSF-M SV1',
          origSensorId: 'CEASE-3',
          satNo: 101,
          senPos: [5893.74, 1408.8, 3899.38],
          senReferenceFrame: 'TEME',
          tags: ['TAG1', 'TAG2'],
          transactionId: 'TRANSACTION-ID',
        },
      ],
    });
  });
});
