// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource weatherdata', () => {
  test('create: only required params', async () => {
    const responsePromise = client.weatherdata.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      obTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.weatherdata.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      obTime: '2018-01-01T16:00:00.123456Z',
      source: 'Bluestaq',
      id: 'WEATHER-DATA-ID',
      angleOrientation: 75.7,
      avgRefPwr: 714.9,
      avgTxPwr: 20.23,
      checksum: 133,
      coIntegs: [4, 3],
      consRecs: [5, 2],
      doppVels: [44.4, 467.3],
      fileCreation: '2018-01-01T16:00:00.123456Z',
      firstGuessAvgs: [16, 1],
      idSensor: '0129f577-e04c-441e-65ca-0a04a750bed9',
      interpulsePeriods: [1000.3, 1000.2],
      lightDetSensors: [11, 28, 190],
      lightEventNum: 9,
      noiseLvls: [58.2, 58.3],
      numElements: 640,
      origin: 'THIRD_PARTY_DATASOURCE',
      origSensorId: 'ORIGSENSOR-ID',
      posConfidence: 0.1,
      qcValue: 4,
      sectorNum: 20,
      semiMajorAxis: 3.4,
      semiMinorAxis: 0.3,
      sigPwrs: [116.5, 121.6],
      sigStrength: 163.7,
      snrs: [14.5, -16.2],
      specAvgs: [4, 3],
      specWidths: [0.3, 0.6],
      srcIds: ['1b23ba93-0957-4654-b5ca-8c3703f3ec57', '32944ee4-0437-4d94-95ce-2f2823ffa001'],
      srcTyps: ['SENSOR', 'WEATHERREPORT'],
      tdAvgSampleNums: [32, 30],
      termAlt: 19505.1,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.weatherdata.list({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.weatherdata.list({ obTime: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.weatherdata.count({ obTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.weatherdata.count({ obTime: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.weatherdata.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.weatherdata.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          id: 'WEATHER-DATA-ID',
          angleOrientation: 75.7,
          avgRefPwr: 714.9,
          avgTxPwr: 20.23,
          checksum: 133,
          coIntegs: [4, 3],
          consRecs: [5, 2],
          doppVels: [44.4, 467.3],
          fileCreation: '2018-01-01T16:00:00.123456Z',
          firstGuessAvgs: [16, 1],
          idSensor: '0129f577-e04c-441e-65ca-0a04a750bed9',
          interpulsePeriods: [1000.3, 1000.2],
          lightDetSensors: [11, 28, 190],
          lightEventNum: 9,
          noiseLvls: [58.2, 58.3],
          numElements: 640,
          origin: 'THIRD_PARTY_DATASOURCE',
          origSensorId: 'ORIGSENSOR-ID',
          posConfidence: 0.1,
          qcValue: 4,
          sectorNum: 20,
          semiMajorAxis: 3.4,
          semiMinorAxis: 0.3,
          sigPwrs: [116.5, 121.6],
          sigStrength: 163.7,
          snrs: [14.5, -16.2],
          specAvgs: [4, 3],
          specWidths: [0.3, 0.6],
          srcIds: ['1b23ba93-0957-4654-b5ca-8c3703f3ec57', '32944ee4-0437-4d94-95ce-2f2823ffa001'],
          srcTyps: ['SENSOR', 'WEATHERREPORT'],
          tdAvgSampleNums: [32, 30],
          termAlt: 19505.1,
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.weatherdata.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.weatherdata.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.weatherdata.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.weatherdata.tuple({
      columns: 'columns',
      obTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.weatherdata.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
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
    const response = await client.weatherdata.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          obTime: '2018-01-01T16:00:00.123456Z',
          source: 'Bluestaq',
          id: 'WEATHER-DATA-ID',
          angleOrientation: 75.7,
          avgRefPwr: 714.9,
          avgTxPwr: 20.23,
          checksum: 133,
          coIntegs: [4, 3],
          consRecs: [5, 2],
          doppVels: [44.4, 467.3],
          fileCreation: '2018-01-01T16:00:00.123456Z',
          firstGuessAvgs: [16, 1],
          idSensor: '0129f577-e04c-441e-65ca-0a04a750bed9',
          interpulsePeriods: [1000.3, 1000.2],
          lightDetSensors: [11, 28, 190],
          lightEventNum: 9,
          noiseLvls: [58.2, 58.3],
          numElements: 640,
          origin: 'THIRD_PARTY_DATASOURCE',
          origSensorId: 'ORIGSENSOR-ID',
          posConfidence: 0.1,
          qcValue: 4,
          sectorNum: 20,
          semiMajorAxis: 3.4,
          semiMinorAxis: 0.3,
          sigPwrs: [116.5, 121.6],
          sigStrength: 163.7,
          snrs: [14.5, -16.2],
          specAvgs: [4, 3],
          specWidths: [0.3, 0.6],
          srcIds: ['1b23ba93-0957-4654-b5ca-8c3703f3ec57', '32944ee4-0437-4d94-95ce-2f2823ffa001'],
          srcTyps: ['SENSOR', 'WEATHERREPORT'],
          tdAvgSampleNums: [32, 30],
          termAlt: 19505.1,
        },
      ],
    });
  });
});
