// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calibration', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sensor.calibration.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSensor: '09f2c68c-5e24-4b72-9cc8-ba9b1efa82f0',
      source: 'Bluestaq',
      startTime: '2018-01-01T16:00:00.123Z',
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
    const response = await client.sensor.calibration.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idSensor: '09f2c68c-5e24-4b72-9cc8-ba9b1efa82f0',
      source: 'Bluestaq',
      startTime: '2018-01-01T16:00:00.123Z',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      azRaAccelBias: 0.0123,
      azRaAccelSigma: 0.0123,
      azRaBias: 0.327883,
      azRaBiasRate: 0.123,
      azRaMean: 0.083222,
      azRaRms: 0.605333,
      azRaSigmaRate: 0.123,
      calAngleRef: 'AZEL',
      calTrackMode: 'INTRA_TRACK',
      calType: 'OPERATIONAL',
      confidenceNoiseBias: 0.001477,
      duration: 14.125,
      ecr: [352815.1, -5852915.3, 3255189],
      elDecAccelBias: 0.0123,
      elDecAccelSigma: 0.0123,
      elDecBias: 0.012555,
      elDecBiasRate: 0.123,
      elDecMean: 0.004025,
      elDecRms: 0.080505,
      elDecSigmaRate: 0.123,
      endTime: '2018-01-14T16:00:00.123Z',
      numAzRaObs: 339,
      numElDecObs: 339,
      numObs: 341,
      numPhotoObs: 77,
      numRangeObs: 341,
      numRangeRateObs: 341,
      numRcsObs: 325,
      numTimeObs: 307,
      numTracks: 85,
      origin: 'THIRD_PARTY_DATASOURCE',
      photoBias: 0.123,
      photoSigma: 0.0123,
      rangeAccelBias: 0.123,
      rangeAccelSigma: 0.0123,
      rangeBias: 0.024777,
      rangeRateBias: 0.105333,
      rangeRateRms: 0.000227,
      rangeRateSigma: 0.000321,
      rangeRms: 0.0123,
      rangeSigma: 0.042644,
      rcsBias: 0.123,
      rcsSigma: 0.0123,
      refTargets: ['xx', 'yy', 'zz'],
      refType: 'SLR',
      senType: 'PHASED ARRAY',
      timeBias: 0.000372,
      timeBiasSigma: 15.333212,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.sensor.calibration.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sensor.calibration.retrieve(
        'id',
        { firstResult: 0, maxResult: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count: only required params', async () => {
    const responsePromise = client.sensor.calibration.count({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.sensor.calibration.count({
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.sensor.calibration.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSensor: '09f2c68c-5e24-4b72-9cc8-ba9b1efa82f0',
          source: 'Bluestaq',
          startTime: '2018-01-01T16:00:00.123Z',
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
    const response = await client.sensor.calibration.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSensor: '09f2c68c-5e24-4b72-9cc8-ba9b1efa82f0',
          source: 'Bluestaq',
          startTime: '2018-01-01T16:00:00.123Z',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          azRaAccelBias: 0.0123,
          azRaAccelSigma: 0.0123,
          azRaBias: 0.327883,
          azRaBiasRate: 0.123,
          azRaMean: 0.083222,
          azRaRms: 0.605333,
          azRaSigmaRate: 0.123,
          calAngleRef: 'AZEL',
          calTrackMode: 'INTRA_TRACK',
          calType: 'OPERATIONAL',
          confidenceNoiseBias: 0.001477,
          duration: 14.125,
          ecr: [352815.1, -5852915.3, 3255189],
          elDecAccelBias: 0.0123,
          elDecAccelSigma: 0.0123,
          elDecBias: 0.012555,
          elDecBiasRate: 0.123,
          elDecMean: 0.004025,
          elDecRms: 0.080505,
          elDecSigmaRate: 0.123,
          endTime: '2018-01-14T16:00:00.123Z',
          numAzRaObs: 339,
          numElDecObs: 339,
          numObs: 341,
          numPhotoObs: 77,
          numRangeObs: 341,
          numRangeRateObs: 341,
          numRcsObs: 325,
          numTimeObs: 307,
          numTracks: 85,
          origin: 'THIRD_PARTY_DATASOURCE',
          photoBias: 0.123,
          photoSigma: 0.0123,
          rangeAccelBias: 0.123,
          rangeAccelSigma: 0.0123,
          rangeBias: 0.024777,
          rangeRateBias: 0.105333,
          rangeRateRms: 0.000227,
          rangeRateSigma: 0.000321,
          rangeRms: 0.0123,
          rangeSigma: 0.042644,
          rcsBias: 0.123,
          rcsSigma: 0.0123,
          refTargets: ['xx', 'yy', 'zz'],
          refType: 'SLR',
          senType: 'PHASED ARRAY',
          timeBias: 0.000372,
          timeBiasSigma: 15.333212,
        },
      ],
    });
  });

  test('query: only required params', async () => {
    const responsePromise = client.sensor.calibration.query({ startTime: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.sensor.calibration.query({
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.sensor.calibration.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.sensor.calibration.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.sensor.calibration.tuple({
      columns: 'columns',
      startTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.sensor.calibration.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSensor: '09f2c68c-5e24-4b72-9cc8-ba9b1efa82f0',
          source: 'Bluestaq',
          startTime: '2018-01-01T16:00:00.123Z',
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
    const response = await client.sensor.calibration.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idSensor: '09f2c68c-5e24-4b72-9cc8-ba9b1efa82f0',
          source: 'Bluestaq',
          startTime: '2018-01-01T16:00:00.123Z',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          azRaAccelBias: 0.0123,
          azRaAccelSigma: 0.0123,
          azRaBias: 0.327883,
          azRaBiasRate: 0.123,
          azRaMean: 0.083222,
          azRaRms: 0.605333,
          azRaSigmaRate: 0.123,
          calAngleRef: 'AZEL',
          calTrackMode: 'INTRA_TRACK',
          calType: 'OPERATIONAL',
          confidenceNoiseBias: 0.001477,
          duration: 14.125,
          ecr: [352815.1, -5852915.3, 3255189],
          elDecAccelBias: 0.0123,
          elDecAccelSigma: 0.0123,
          elDecBias: 0.012555,
          elDecBiasRate: 0.123,
          elDecMean: 0.004025,
          elDecRms: 0.080505,
          elDecSigmaRate: 0.123,
          endTime: '2018-01-14T16:00:00.123Z',
          numAzRaObs: 339,
          numElDecObs: 339,
          numObs: 341,
          numPhotoObs: 77,
          numRangeObs: 341,
          numRangeRateObs: 341,
          numRcsObs: 325,
          numTimeObs: 307,
          numTracks: 85,
          origin: 'THIRD_PARTY_DATASOURCE',
          photoBias: 0.123,
          photoSigma: 0.0123,
          rangeAccelBias: 0.123,
          rangeAccelSigma: 0.0123,
          rangeBias: 0.024777,
          rangeRateBias: 0.105333,
          rangeRateRms: 0.000227,
          rangeRateSigma: 0.000321,
          rangeRms: 0.0123,
          rangeSigma: 0.042644,
          rcsBias: 0.123,
          rcsSigma: 0.0123,
          refTargets: ['xx', 'yy', 'zz'],
          refType: 'SLR',
          senType: 'PHASED ARRAY',
          timeBias: 0.000372,
          timeBiasSigma: 15.333212,
        },
      ],
    });
  });
});
