// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orbitTrack', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.track.orbitTrack.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        lat: 0,
        lon: 0,
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
    const response = await client.filedrop.track.orbitTrack.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        lat: 0,
        lon: 0,
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
        id: 'id',
        alt: 0,
        amplification: 'amplification',
        angElev: 0,
        aouData: [0],
        aouType: 'aouType',
        callSign: 'callSign',
        charlieLine: 'charlieLine',
        chXRef: 'chXRef',
        cntnmnt: 0,
        countryCode: 'countryCode',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        decay: 0,
        dummy: true,
        feint: true,
        hq: true,
        idElset: 'idElset',
        identAmp: 'identAmp',
        idOnOrbit: 'idOnOrbit',
        iff: 'iff',
        installation: true,
        objectType: 'objectType',
        objIdent: 'objIdent',
        origin: 'origin',
        origNetwork: 'origNetwork',
        origObjectId: 'origObjectId',
        rdfRF: 0,
        reduced: true,
        reinforced: true,
        rptNum: 'rptNum',
        satNo: 0,
        satStatus: 'satStatus',
        spd: 0,
        taskForce: true,
        trackSensors: [
          {
            az: 0,
            range: 0,
            minRangeLimit: 0,
            missionNumber: 'missionNumber',
            sensorFOVType: 'sensorFOVType',
            sensorName: 'sensorName',
            sensorNumber: 0,
          },
        ],
        trkId: 'trkId',
        vehType: 'vehType',
        xref: 'xref',
      },
    ]);
  });
});
