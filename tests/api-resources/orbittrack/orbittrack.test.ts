// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orbittrack', () => {
  test('list: only required params', async () => {
    const responsePromise = client.orbittrack.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.orbittrack.list({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.orbittrack.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.orbittrack.count({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.orbittrack.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        lat: 19.88550102,
        lon: 46.74596844,
        source: 'Bluestaq',
        ts: '2021-02-25T12:00:00.123456Z',
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

  test('createBulk: required and optional params', async () => {
    const response = await client.orbittrack.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        lat: 19.88550102,
        lon: 46.74596844,
        source: 'Bluestaq',
        ts: '2021-02-25T12:00:00.123456Z',
        id: 'ORBIT_TRACK_ID',
        alt: 585.71,
        amplification: 'A note regarding this spacecraft',
        angElev: 15.2,
        aouData: [34.3, 26.5, 1.2],
        aouType: 'ELLIPSE',
        callSign: 'Charlie',
        charlieLine: '323751332255940400010000003635829600010200072500098205001150',
        chXRef: 'FHKX',
        cntnmnt: 90,
        countryCode: 'US',
        decay: 0.5868,
        dummy: false,
        feint: false,
        hq: false,
        idElset: 'c715a619-8695-44d2-9e7d-effd257b4843',
        identAmp: 'JOKER',
        idOnOrbit: '32375',
        iff: 'ID Mode',
        installation: false,
        objectType: 'DEBRIS',
        objIdent: 'ASSUMED FRIEND',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'L2045',
        rdfRF: 1.5273,
        reduced: false,
        reinforced: false,
        rptNum: '123',
        satNo: 37375,
        satStatus: 'INACTIVE',
        spd: 15.03443,
        taskForce: false,
        trackSensors: [
          {
            az: 90,
            range: 4023.95,
            minRangeLimit: 20.23,
            missionNumber: 'Example Mission',
            sensorFOVType: 'BUTTERFLY',
            sensorName: 'SENSOR_NAME',
            sensorNumber: 1234,
          },
        ],
        trkId: '3668f135-fcba-4630-a43d-e7782e11d988',
        vehType: 'SPACE',
        xref: 'XE',
      },
    ]);
  });

  test('orbitTrack: only required params', async () => {
    const responsePromise = client.orbittrack.orbitTrack([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        lat: 19.88550102,
        lon: 46.74596844,
        source: 'Bluestaq',
        ts: '2021-02-25T12:00:00.123456Z',
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

  test('orbitTrack: required and optional params', async () => {
    const response = await client.orbittrack.orbitTrack([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        lat: 19.88550102,
        lon: 46.74596844,
        source: 'Bluestaq',
        ts: '2021-02-25T12:00:00.123456Z',
        id: 'ORBIT_TRACK_ID',
        alt: 585.71,
        amplification: 'A note regarding this spacecraft',
        angElev: 15.2,
        aouData: [34.3, 26.5, 1.2],
        aouType: 'ELLIPSE',
        callSign: 'Charlie',
        charlieLine: '323751332255940400010000003635829600010200072500098205001150',
        chXRef: 'FHKX',
        cntnmnt: 90,
        countryCode: 'US',
        decay: 0.5868,
        dummy: false,
        feint: false,
        hq: false,
        idElset: 'c715a619-8695-44d2-9e7d-effd257b4843',
        identAmp: 'JOKER',
        idOnOrbit: '32375',
        iff: 'ID Mode',
        installation: false,
        objectType: 'DEBRIS',
        objIdent: 'ASSUMED FRIEND',
        origin: 'THIRD_PARTY_DATASOURCE',
        origObjectId: 'L2045',
        rdfRF: 1.5273,
        reduced: false,
        reinforced: false,
        rptNum: '123',
        satNo: 37375,
        satStatus: 'INACTIVE',
        spd: 15.03443,
        taskForce: false,
        trackSensors: [
          {
            az: 90,
            range: 4023.95,
            minRangeLimit: 20.23,
            missionNumber: 'Example Mission',
            sensorFOVType: 'BUTTERFLY',
            sensorName: 'SENSOR_NAME',
            sensorNumber: 1234,
          },
        ],
        trkId: '3668f135-fcba-4630-a43d-e7782e11d988',
        vehType: 'SPACE',
        xref: 'XE',
      },
    ]);
  });

  test('queryhelp', async () => {
    const responsePromise = client.orbittrack.queryhelp();
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
    await expect(client.orbittrack.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.orbittrack.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.orbittrack.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
  });
});
