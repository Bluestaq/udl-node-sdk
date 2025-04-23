// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sarobservation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sarobservation.create({
      classificationMarking: 'U',
      collectionEnd: '2023-04-22T17:38:10.201770Z',
      collectionStart: '2023-04-22T17:35:00.123456Z',
      dataMode: 'TEST',
      sarMode: 'SPOTLIGHT',
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
    const response = await client.sarobservation.create({
      classificationMarking: 'U',
      collectionEnd: '2023-04-22T17:38:10.201770Z',
      collectionStart: '2023-04-22T17:35:00.123456Z',
      dataMode: 'TEST',
      sarMode: 'SPOTLIGHT',
      source: 'Bluestaq',
      id: 'SAROBSERVATION-ID',
      agjson:
        '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
      andims: 3,
      area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      asrid: 3,
      atext:
        'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
      atype: 'POLYGON',
      azimuthAngle: 285.4481793,
      centerTime: '2023-04-22T17:36:35.100885Z',
      collectionId: 'COLLECTION-ID',
      continuousSpotAngle: 45.1,
      coordSys: 'ECEF',
      detectionEnd: '2023-07-08T17:35:20.772190Z',
      detectionId: 'DETECTION-ID',
      detectionStart: '2023-07-08T17:35:01.615396Z',
      dwellTime: 79.156794,
      externalId: 'EXTERNAL-ID',
      farRange: 34.1,
      grazeAngle: 45.1,
      groundResolutionProjection: 0.5,
      idSensor: '36036-1L',
      incidenceAngle: 45.1,
      looksAzimuth: 2,
      looksRange: 1,
      multilookNumber: 5,
      nearRange: 12.1,
      obDirection: 'RIGHT',
      operatingBand: 'L',
      operatingFreq: 2345.6,
      orbitState: 'ASCENDING',
      origin: 'THIRD_PARTY_DATASOURCE',
      origObjectId: '36036',
      origSensorId: 'SMOS-1L',
      pulseBandwidth: 500.1,
      pulseDuration: 0.000011,
      resolutionAzimuth: 0.123,
      resolutionRange: 0.123,
      rxPolarization: 'H',
      satNo: 36036,
      senalt: 1.1,
      senlatEnd: 45.1,
      senlatStart: 45.1,
      senlonEnd: 179.1,
      senlonStart: 179.1,
      senvelx: 1.1,
      senvely: 1.1,
      senvelz: 1.1,
      slantRange: 60.1,
      snr: 10.1,
      spacingAzimuth: 0.123,
      spacingRange: 0.123,
      squintAngle: 1.2,
      srcIds: ['f7e01cd4-626b-441f-a423-17b160eb78ba', '223833c4-be0d-4fdb-a2e4-325a48eccced'],
      srcTyps: ['ESID', 'GROUNDIMAGE'],
      swathLength: 12.1,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      targetposx: 50.23,
      targetposy: 50.23,
      targetposz: 50.23,
      transactionId: 'TRANSACTION-ID',
      txPolarization: 'H',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.sarobservation.list({ collectionStart: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.sarobservation.list({ collectionStart: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.sarobservation.count({ collectionStart: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.sarobservation.count({ collectionStart: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.sarobservation.createBulk({
      body: [
        {
          classificationMarking: 'U',
          collectionEnd: '2023-04-22T17:38:10.201770Z',
          collectionStart: '2023-04-22T17:35:00.123456Z',
          dataMode: 'TEST',
          sarMode: 'SPOTLIGHT',
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
    const response = await client.sarobservation.createBulk({
      body: [
        {
          classificationMarking: 'U',
          collectionEnd: '2023-04-22T17:38:10.201770Z',
          collectionStart: '2023-04-22T17:35:00.123456Z',
          dataMode: 'TEST',
          sarMode: 'SPOTLIGHT',
          source: 'Bluestaq',
          id: 'SAROBSERVATION-ID',
          agjson:
            '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
          andims: 3,
          area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          asrid: 3,
          atext:
            'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          atype: 'POLYGON',
          azimuthAngle: 285.4481793,
          centerTime: '2023-04-22T17:36:35.100885Z',
          collectionId: 'COLLECTION-ID',
          continuousSpotAngle: 45.1,
          coordSys: 'ECEF',
          detectionEnd: '2023-07-08T17:35:20.772190Z',
          detectionId: 'DETECTION-ID',
          detectionStart: '2023-07-08T17:35:01.615396Z',
          dwellTime: 79.156794,
          externalId: 'EXTERNAL-ID',
          farRange: 34.1,
          grazeAngle: 45.1,
          groundResolutionProjection: 0.5,
          idSensor: '36036-1L',
          incidenceAngle: 45.1,
          looksAzimuth: 2,
          looksRange: 1,
          multilookNumber: 5,
          nearRange: 12.1,
          obDirection: 'RIGHT',
          operatingBand: 'L',
          operatingFreq: 2345.6,
          orbitState: 'ASCENDING',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: '36036',
          origSensorId: 'SMOS-1L',
          pulseBandwidth: 500.1,
          pulseDuration: 0.000011,
          resolutionAzimuth: 0.123,
          resolutionRange: 0.123,
          rxPolarization: 'H',
          satNo: 36036,
          senalt: 1.1,
          senlatEnd: 45.1,
          senlatStart: 45.1,
          senlonEnd: 179.1,
          senlonStart: 179.1,
          senvelx: 1.1,
          senvely: 1.1,
          senvelz: 1.1,
          slantRange: 60.1,
          snr: 10.1,
          spacingAzimuth: 0.123,
          spacingRange: 0.123,
          squintAngle: 1.2,
          srcIds: ['f7e01cd4-626b-441f-a423-17b160eb78ba', '223833c4-be0d-4fdb-a2e4-325a48eccced'],
          srcTyps: ['ESID', 'GROUNDIMAGE'],
          swathLength: 12.1,
          tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
          targetposx: 50.23,
          targetposy: 50.23,
          targetposz: 50.23,
          transactionId: 'TRANSACTION-ID',
          txPolarization: 'H',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.sarobservation.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.sarobservation.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.sarobservation.tuple({
      collectionStart: '2019-12-27T18:11:19.117Z',
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
    const response = await client.sarobservation.tuple({
      collectionStart: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.sarobservation.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          collectionEnd: '2023-04-22T17:38:10.201770Z',
          collectionStart: '2023-04-22T17:35:00.123456Z',
          dataMode: 'TEST',
          sarMode: 'SPOTLIGHT',
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
    const response = await client.sarobservation.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          collectionEnd: '2023-04-22T17:38:10.201770Z',
          collectionStart: '2023-04-22T17:35:00.123456Z',
          dataMode: 'TEST',
          sarMode: 'SPOTLIGHT',
          source: 'Bluestaq',
          id: 'SAROBSERVATION-ID',
          agjson:
            '{"type":"Polygon","coordinates":[ [ [ 67.3291113966927, 26.156175339112 ], [ 67.2580009640721, 26.091022064271 ], [ 67.1795862381682, 26.6637992964562 ], [ 67.2501237475598, 26.730115808233 ], [ 67.3291113966927, 26.156175339112 ] ] ] }',
          andims: 3,
          area: 'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          asrid: 3,
          atext:
            'POLYGON((67.3291113966927 26.156175339112,67.2580009640721 26.091022064271,67.1795862381682 26.6637992964562,67.2501237475598 26.730115808233,67.3291113966927 26.156175339112))',
          atype: 'POLYGON',
          azimuthAngle: 285.4481793,
          centerTime: '2023-04-22T17:36:35.100885Z',
          collectionId: 'COLLECTION-ID',
          continuousSpotAngle: 45.1,
          coordSys: 'ECEF',
          detectionEnd: '2023-07-08T17:35:20.772190Z',
          detectionId: 'DETECTION-ID',
          detectionStart: '2023-07-08T17:35:01.615396Z',
          dwellTime: 79.156794,
          externalId: 'EXTERNAL-ID',
          farRange: 34.1,
          grazeAngle: 45.1,
          groundResolutionProjection: 0.5,
          idSensor: '36036-1L',
          incidenceAngle: 45.1,
          looksAzimuth: 2,
          looksRange: 1,
          multilookNumber: 5,
          nearRange: 12.1,
          obDirection: 'RIGHT',
          operatingBand: 'L',
          operatingFreq: 2345.6,
          orbitState: 'ASCENDING',
          origin: 'THIRD_PARTY_DATASOURCE',
          origObjectId: '36036',
          origSensorId: 'SMOS-1L',
          pulseBandwidth: 500.1,
          pulseDuration: 0.000011,
          resolutionAzimuth: 0.123,
          resolutionRange: 0.123,
          rxPolarization: 'H',
          satNo: 36036,
          senalt: 1.1,
          senlatEnd: 45.1,
          senlatStart: 45.1,
          senlonEnd: 179.1,
          senlonStart: 179.1,
          senvelx: 1.1,
          senvely: 1.1,
          senvelz: 1.1,
          slantRange: 60.1,
          snr: 10.1,
          spacingAzimuth: 0.123,
          spacingRange: 0.123,
          squintAngle: 1.2,
          srcIds: ['f7e01cd4-626b-441f-a423-17b160eb78ba', '223833c4-be0d-4fdb-a2e4-325a48eccced'],
          srcTyps: ['ESID', 'GROUNDIMAGE'],
          swathLength: 12.1,
          tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
          targetposx: 50.23,
          targetposy: 50.23,
          targetposz: 50.23,
          transactionId: 'TRANSACTION-ID',
          txPolarization: 'H',
        },
      ],
    });
  });
});
