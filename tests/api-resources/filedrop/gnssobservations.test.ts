// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gnssobservations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.gnssobservations.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
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
    const response = await client.filedrop.gnssobservations.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
        id: 'id',
        agcState: 0,
        alt: 0,
        boresight: [0],
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        esId: 'esId',
        eventId: 'eventId',
        gDop: 0,
        gnssObservationList: [
          { agcState: 0, gnssSatId: 'gnssSatId', ob: [0], obsCodeSet: ['string'], trackingStatus: 0 },
        ],
        hDop: 0,
        idOnOrbit: 'idOnOrbit',
        lat: 0,
        lon: 0,
        markerType: 'markerType',
        navigationStatus: 'navigationStatus',
        obsCodes: ['string'],
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        outage: 0,
        pDop: 0,
        quat: [0],
        receiver: 'receiver',
        satNo: 0,
        satPosition: [0],
        satVelocity: [0],
        srcIds: ['string'],
        srcTyps: ['string'],
        tags: ['string'],
        tDop: 0,
        trackingStatus: 0,
        transactionId: 'transactionId',
        vDop: 0,
      },
    ]);
  });
});
