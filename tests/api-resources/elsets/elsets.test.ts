// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource elsets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.elsets.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      epoch: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.elsets.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      epoch: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      agom: 0.0126,
      algorithm: 'Example algorithm',
      apogee: 1.1,
      argOfPerigee: 1.1,
      ballisticCoeff: 0.00815,
      bStar: 1.1,
      descriptor: 'Example description',
      eccentricity: 0.333,
      ephemType: 1,
      idElset: 'ELSET-ID',
      idOrbitDetermination: '026dd511-8ba5-47d3-9909-836149f87686',
      inclination: 45.1,
      meanAnomaly: 179.1,
      meanMotion: 1.1,
      meanMotionDDot: 1.1,
      meanMotionDot: 1.1,
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: 'ORIGOBJECT-ID',
      perigee: 1.1,
      period: 1.1,
      raan: 1.1,
      rawFileURI: 'Example URI',
      revNo: 111,
      satNo: 12,
      semiMajorAxis: 1.1,
      sourcedData: ['OBSERVATION_UUID1', 'OBSERVATION_UUID2'],
      sourcedDataTypes: ['RADAR', 'RF'],
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      transactionId: 'TRANSACTION-ID',
      uct: false,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.elsets.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: only required params', async () => {
    const responsePromise = client.elsets.list({ epoch: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.elsets.list({ epoch: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.elsets.count({ epoch: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.elsets.count({ epoch: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.elsets.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          epoch: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.elsets.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          epoch: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          agom: 0.0126,
          algorithm: 'Example algorithm',
          apogee: 1.1,
          argOfPerigee: 1.1,
          ballisticCoeff: 0.00815,
          bStar: 1.1,
          descriptor: 'Example description',
          eccentricity: 0.333,
          ephemType: 1,
          idElset: 'ELSET-ID',
          idOrbitDetermination: '026dd511-8ba5-47d3-9909-836149f87686',
          inclination: 45.1,
          meanAnomaly: 179.1,
          meanMotion: 1.1,
          meanMotionDDot: 1.1,
          meanMotionDot: 1.1,
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          perigee: 1.1,
          period: 1.1,
          raan: 1.1,
          rawFileURI: 'Example URI',
          revNo: 111,
          satNo: 12,
          semiMajorAxis: 1.1,
          sourcedData: ['OBSERVATION_UUID1', 'OBSERVATION_UUID2'],
          sourcedDataTypes: ['RADAR', 'RF'],
          tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
          transactionId: 'TRANSACTION-ID',
          uct: false,
        },
      ],
      dupeCheck: true,
    });
  });

  test('createBulkFromTle: only required params', async () => {
    const responsePromise = client.elsets.createBulkFromTle({
      dataMode: 'dataMode',
      makeCurrent: true,
      source: 'source',
      body: 'body',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulkFromTle: required and optional params', async () => {
    const response = await client.elsets.createBulkFromTle({
      dataMode: 'dataMode',
      makeCurrent: true,
      source: 'source',
      body: 'body',
      autoCreateSats: true,
      control: 'control',
      origin: 'origin',
      tags: 'tags',
    });
  });

  test('queryCurrentElsetHelp', async () => {
    const responsePromise = client.elsets.queryCurrentElsetHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.elsets.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.elsets.tuple({ columns: 'columns', epoch: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.elsets.tuple({ columns: 'columns', epoch: '2019-12-27T18:11:19.117Z' });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.elsets.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          epoch: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.elsets.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          epoch: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          agom: 0.0126,
          algorithm: 'Example algorithm',
          apogee: 1.1,
          argOfPerigee: 1.1,
          ballisticCoeff: 0.00815,
          bStar: 1.1,
          descriptor: 'Example description',
          eccentricity: 0.333,
          ephemType: 1,
          idElset: 'ELSET-ID',
          idOrbitDetermination: '026dd511-8ba5-47d3-9909-836149f87686',
          inclination: 45.1,
          meanAnomaly: 179.1,
          meanMotion: 1.1,
          meanMotionDDot: 1.1,
          meanMotionDot: 1.1,
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: 'ORIGOBJECT-ID',
          perigee: 1.1,
          period: 1.1,
          raan: 1.1,
          rawFileURI: 'Example URI',
          revNo: 111,
          satNo: 12,
          semiMajorAxis: 1.1,
          sourcedData: ['OBSERVATION_UUID1', 'OBSERVATION_UUID2'],
          sourcedDataTypes: ['RADAR', 'RF'],
          tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
          transactionId: 'TRANSACTION-ID',
          uct: false,
        },
      ],
    });
  });
});
