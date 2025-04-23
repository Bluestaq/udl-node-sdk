// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource port', () => {
  test('create: only required params', async () => {
    const responsePromise = client.port.create({
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
    const response = await client.port.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      avgDuration: 41.1,
      countryCode: 'US',
      externalId: 'fe4ad5dc-0128-4ce8-b09c-0b404322025e',
      harborSize: 160.1,
      harborType: 'COASTAL NATURAL',
      idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
      lat: 45.23,
      locode: 'CAVAN',
      lon: 179.1,
      maxDraught: 18.1,
      origin: 'THIRD_PARTY_DATASOURCE',
      pilotReqd: true,
      portName: 'Vancouver',
      shelter: 'EXCELLENT',
      tideRange: 4.1,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.port.update('id', {
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

  test('update: required and optional params', async () => {
    const response = await client.port.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      source: 'Bluestaq',
      body_id: '026dd511-8ba5-47d3-9909-836149f87686',
      avgDuration: 41.1,
      countryCode: 'US',
      externalId: 'fe4ad5dc-0128-4ce8-b09c-0b404322025e',
      harborSize: 160.1,
      harborType: 'COASTAL NATURAL',
      idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
      lat: 45.23,
      locode: 'CAVAN',
      lon: 179.1,
      maxDraught: 18.1,
      origin: 'THIRD_PARTY_DATASOURCE',
      pilotReqd: true,
      portName: 'Vancouver',
      shelter: 'EXCELLENT',
      tideRange: 4.1,
    });
  });

  test('list', async () => {
    const responsePromise = client.port.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.port.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.port.createBulk({
      body: [{ classificationMarking: 'U', dataMode: 'TEST', source: 'Bluestaq' }],
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
    const response = await client.port.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          avgDuration: 41.1,
          countryCode: 'US',
          externalId: 'fe4ad5dc-0128-4ce8-b09c-0b404322025e',
          harborSize: 160.1,
          harborType: 'COASTAL NATURAL',
          idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
          lat: 45.23,
          locode: 'CAVAN',
          lon: 179.1,
          maxDraught: 18.1,
          origin: 'THIRD_PARTY_DATASOURCE',
          pilotReqd: true,
          portName: 'Vancouver',
          shelter: 'EXCELLENT',
          tideRange: 4.1,
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.port.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.port.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.port.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.port.tuple({ columns: 'columns' });
  });
});
