// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource navigationalobstruction', () => {
  test('create: only required params', async () => {
    const responsePromise = client.navigationalobstruction.create({
      classificationMarking: 'U',
      cycleDate: '2024-06-13',
      dataMode: 'TEST',
      obstacleId: '359655',
      obstacleType: 'V',
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
    const response = await client.navigationalobstruction.create({
      classificationMarking: 'U',
      cycleDate: '2024-06-13',
      dataMode: 'TEST',
      obstacleId: '359655',
      obstacleType: 'V',
      source: 'Bluestaq',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      actDelCode: 'A',
      airacCycle: 2406,
      baseAiracCycle: 2405,
      baselineCutoffDate: '2024-04-23',
      boundNELat: 29.1,
      boundNELon: 99.1,
      boundSWLat: -44.1,
      boundSWLon: -144.1,
      countryCode: 'US',
      cutoffDate: '2024-05-21',
      dataSetRemarks: 'Data set remarks',
      deletingOrg: 'ACME',
      derivingOrg: 'ACME',
      directivityCode: 2,
      elevation: 840.1,
      elevationAcc: 17.1,
      externalId: 'OU812',
      facc: 'AT040',
      featureCode: '540',
      featureDescription: 'Powerline Pylon, General',
      featureName: 'PYLON',
      featureType: '540',
      heightAGL: 314.1,
      heightAGLAcc: 30.1,
      heightMSL: 1154.1,
      heightMSLAcc: 34.1,
      horizAcc: 8.1,
      horizDatumCode: 'WGS-84',
      initRecordDate: '1991-03-28',
      keys: ['key1', 'key2'],
      lightingCode: 'U',
      lineNELat: 49.000584,
      lineNELon: -122.197891,
      linesFilename: 'lines.txt',
      lineSWLat: 48.507027,
      lineSWLon: -122.722946,
      minHeightAGL: 20.1,
      multObs: 'S',
      nextCycleDate: '2024-07-11',
      numLines: 45993,
      numObs: 1,
      numPoints: 21830590,
      obstacleRemarks: 'Obstacle remarks',
      origId: 'L0000002289',
      origin: 'THIRD_PARTY_DATASOURCE',
      ownerCountryCode: 'US',
      pointLat: 46.757211,
      pointLon: -67.759494,
      pointsFilename: 'points.txt',
      processCode: 'OT',
      producer: 'ACME',
      provinceCode: '23',
      quality: '0',
      revDate: '2020-02-26',
      segEndPoint: 359655,
      segNum: 1,
      segStartPoint: 359655,
      sourceDate: '2016-04-01',
      surfaceMatCode: 'U',
      transactionCode: 'V',
      validationCode: 3,
      values: ['value1', 'value2'],
      vectorsFilename: 'vectors.txt',
      wac: '262',
      wacINNR: '0409-00039',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.navigationalobstruction.update('id', {
      classificationMarking: 'U',
      cycleDate: '2024-06-13',
      dataMode: 'TEST',
      obstacleId: '359655',
      obstacleType: 'V',
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
    const response = await client.navigationalobstruction.update('id', {
      classificationMarking: 'U',
      cycleDate: '2024-06-13',
      dataMode: 'TEST',
      obstacleId: '359655',
      obstacleType: 'V',
      source: 'Bluestaq',
      body_id: '026dd511-8ba5-47d3-9909-836149f87686',
      actDelCode: 'A',
      airacCycle: 2406,
      baseAiracCycle: 2405,
      baselineCutoffDate: '2024-04-23',
      boundNELat: 29.1,
      boundNELon: 99.1,
      boundSWLat: -44.1,
      boundSWLon: -144.1,
      countryCode: 'US',
      cutoffDate: '2024-05-21',
      dataSetRemarks: 'Data set remarks',
      deletingOrg: 'ACME',
      derivingOrg: 'ACME',
      directivityCode: 2,
      elevation: 840.1,
      elevationAcc: 17.1,
      externalId: 'OU812',
      facc: 'AT040',
      featureCode: '540',
      featureDescription: 'Powerline Pylon, General',
      featureName: 'PYLON',
      featureType: '540',
      heightAGL: 314.1,
      heightAGLAcc: 30.1,
      heightMSL: 1154.1,
      heightMSLAcc: 34.1,
      horizAcc: 8.1,
      horizDatumCode: 'WGS-84',
      initRecordDate: '1991-03-28',
      keys: ['key1', 'key2'],
      lightingCode: 'U',
      lineNELat: 49.000584,
      lineNELon: -122.197891,
      linesFilename: 'lines.txt',
      lineSWLat: 48.507027,
      lineSWLon: -122.722946,
      minHeightAGL: 20.1,
      multObs: 'S',
      nextCycleDate: '2024-07-11',
      numLines: 45993,
      numObs: 1,
      numPoints: 21830590,
      obstacleRemarks: 'Obstacle remarks',
      origId: 'L0000002289',
      origin: 'THIRD_PARTY_DATASOURCE',
      ownerCountryCode: 'US',
      pointLat: 46.757211,
      pointLon: -67.759494,
      pointsFilename: 'points.txt',
      processCode: 'OT',
      producer: 'ACME',
      provinceCode: '23',
      quality: '0',
      revDate: '2020-02-26',
      segEndPoint: 359655,
      segNum: 1,
      segStartPoint: 359655,
      sourceDate: '2016-04-01',
      surfaceMatCode: 'U',
      transactionCode: 'V',
      validationCode: 3,
      values: ['value1', 'value2'],
      vectorsFilename: 'vectors.txt',
      wac: '262',
      wacINNR: '0409-00039',
    });
  });

  test('list', async () => {
    const responsePromise = client.navigationalobstruction.list();
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
    await expect(client.navigationalobstruction.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.navigationalobstruction.list(
        { cycleDate: 'cycleDate', obstacleId: 'obstacleId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.navigationalobstruction.count();
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
    await expect(client.navigationalobstruction.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.navigationalobstruction.count(
        { cycleDate: 'cycleDate', obstacleId: 'obstacleId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk', async () => {
    const responsePromise = client.navigationalobstruction.createBulk();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.navigationalobstruction.createBulk({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.navigationalobstruction.createBulk(
        [
          {
            classificationMarking: 'U',
            cycleDate: '2024-06-13',
            dataMode: 'TEST',
            obstacleId: '359655',
            obstacleType: 'V',
            source: 'Bluestaq',
            id: '026dd511-8ba5-47d3-9909-836149f87686',
            actDelCode: 'A',
            airacCycle: 2406,
            baseAiracCycle: 2405,
            baselineCutoffDate: '2024-04-23',
            boundNELat: 29.1,
            boundNELon: 99.1,
            boundSWLat: -44.1,
            boundSWLon: -144.1,
            countryCode: 'US',
            cutoffDate: '2024-05-21',
            dataSetRemarks: 'Data set remarks',
            deletingOrg: 'ACME',
            derivingOrg: 'ACME',
            directivityCode: 2,
            elevation: 840.1,
            elevationAcc: 17.1,
            externalId: 'OU812',
            facc: 'AT040',
            featureCode: '540',
            featureDescription: 'Powerline Pylon, General',
            featureName: 'PYLON',
            featureType: '540',
            heightAGL: 314.1,
            heightAGLAcc: 30.1,
            heightMSL: 1154.1,
            heightMSLAcc: 34.1,
            horizAcc: 8.1,
            horizDatumCode: 'WGS-84',
            initRecordDate: '1991-03-28',
            keys: ['key1', 'key2'],
            lightingCode: 'U',
            lineNELat: 49.000584,
            lineNELon: -122.197891,
            linesFilename: 'lines.txt',
            lineSWLat: 48.507027,
            lineSWLon: -122.722946,
            minHeightAGL: 20.1,
            multObs: 'S',
            nextCycleDate: '2024-07-11',
            numLines: 45993,
            numObs: 1,
            numPoints: 21830590,
            obstacleRemarks: 'Obstacle remarks',
            origId: 'L0000002289',
            origin: 'THIRD_PARTY_DATASOURCE',
            ownerCountryCode: 'US',
            pointLat: 46.757211,
            pointLon: -67.759494,
            pointsFilename: 'points.txt',
            processCode: 'OT',
            producer: 'ACME',
            provinceCode: '23',
            quality: '0',
            revDate: '2020-02-26',
            segEndPoint: 359655,
            segNum: 1,
            segStartPoint: 359655,
            sourceDate: '2016-04-01',
            surfaceMatCode: 'U',
            transactionCode: 'V',
            validationCode: 3,
            values: ['value1', 'value2'],
            vectorsFilename: 'vectors.txt',
            wac: '262',
            wacINNR: '0409-00039',
          },
        ],
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.navigationalobstruction.get('id');
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
    await expect(
      client.navigationalobstruction.get('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.navigationalobstruction.queryhelp();
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
    await expect(
      client.navigationalobstruction.queryhelp({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.navigationalobstruction.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.navigationalobstruction.tuple({
      columns: 'columns',
      cycleDate: 'cycleDate',
      obstacleId: 'obstacleId',
    });
  });
});
