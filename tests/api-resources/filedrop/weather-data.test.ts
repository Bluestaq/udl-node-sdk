// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource weatherData', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.weatherData.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
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

  test('create: required and optional params', async () => {
    const response = await client.filedrop.weatherData.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        obTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        id: 'id',
        angleOrientation: 0,
        avgRefPwr: 0,
        avgTxPwr: 0,
        checksum: 0,
        coIntegs: [0],
        consRecs: [0],
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        doppVels: [0],
        fileCreation: '2019-12-27T18:11:19.117Z',
        firstGuessAvgs: [0],
        idSensor: 'idSensor',
        interpulsePeriods: [0],
        lightDetSensors: [0],
        lightEventNum: 0,
        noiseLvls: [0],
        numElements: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        origSensorId: 'origSensorId',
        posConfidence: 0,
        qcValue: 0,
        sectorNum: 0,
        semiMajorAxis: 0,
        semiMinorAxis: 0,
        sigPwrs: [0],
        sigStrength: 0,
        snrs: [0],
        specAvgs: [0],
        specWidths: [0],
        srcIds: ['string'],
        srcTyps: ['string'],
        tdAvgSampleNums: [0],
        termAlt: 0,
      },
    ]);
  });
});
