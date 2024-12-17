// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource udlSgi', () => {
  test('create: only required params', async () => {
    const responsePromise = client.udlSgi.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        effectiveDate: '2019-12-27T18:11:19.117Z',
        sgiDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.udlSgi.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        effectiveDate: '2019-12-27T18:11:19.117Z',
        sgiDate: '2019-12-27T18:11:19.117Z',
        source: 'source',
        id: 'id',
        analyzerAttenuation: 0,
        ap: 0,
        apDuration: 0,
        coeffDegree: [0],
        coeffOrder: [0],
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        ctce: [0],
        ctci: [0],
        dst: 0,
        dtc: 0,
        e10: 0,
        e54: 0,
        f10: 0,
        f54: 0,
        f81: 0,
        frequencies: [0],
        gamma: 0,
        idSensor: 'idSensor',
        kIndex: 0,
        kp: 0,
        kpDuration: 0,
        m10: 0,
        m54: 0,
        mode: 0,
        normFactor: 0,
        observedBaseline: [0],
        origin: 'origin',
        origNetwork: 'origNetwork',
        origSensorId: 'origSensorId',
        powers: [0],
        precedence: 'precedence',
        rawFileURI: 'rawFileURI',
        rbDuration: 0,
        rbIndex: 0,
        rbRegionCode: 0,
        s10: 0,
        s54: 0,
        state: 'state',
        stationName: 'stationName',
        stce: [0],
        stci: [0],
        tags: ['string'],
        transactionId: 'transactionId',
        type: 'type',
        y10: 0,
        y54: 0,
      },
    ]);
  });
});
