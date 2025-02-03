// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource monoradar', () => {
  test('list: only required params', async () => {
    const responsePromise = client.monoradar.list({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.monoradar.list({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.monoradar.count({ ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.monoradar.count({ ts: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.monoradar.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        msgfmt: 'CAT48',
        msgts: '2021-01-01T01:01:01.123456Z',
        msgtyp: 'BCN',
        source: 'Bluestaq',
        ts: '2021-01-01T01:01:01.123456Z',
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
    const response = await client.monoradar.createBulk([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
        msgfmt: 'CAT48',
        msgts: '2021-01-01T01:01:01.123456Z',
        msgtyp: 'BCN',
        source: 'Bluestaq',
        ts: '2021-01-01T01:01:01.123456Z',
        id: 'MONORADAR-ID',
        acp: 100,
        addr: 'ADDR-ID',
        af: true,
        aims: true,
        alt3d: 100.23,
        artsqual: 'QUALITY',
        az: 100.23,
        azdelt: 44.23,
        bcnhits: 12,
        cartpos: [1.2, 2.2],
        cdm: 'CDM',
        code7500: false,
        code7600: false,
        code7700: false,
        faa: true,
        grndspd: 30.23,
        hdng: 30.23,
        idSensor: 'REF-SENSOR-ID',
        m1: 'MISSION_CODE',
        m1g: true,
        m1v: 'M1V',
        m2: 'MILITARY_ID_CODE',
        m2g: true,
        m2v: 'M2V',
        m2xv: 'M2XV',
        m3a: 'AIRCRAFT_ID',
        m3ag: true,
        m3av: 'M3AV',
        m3axv: 'M3AXV',
        m4: 'ID_FRIEND',
        m4d1d2: 'STATUS',
        m4v: 'M4V',
        mah: 'MAH',
        mc: 100.23,
        mcg: true,
        mcv: 'MCV',
        milemrgcy: false,
        mrgrpt: true,
        mscommb: 'MSCOMMB',
        mti: true,
        origin: 'THIRD_PARTY_DATASOURCE',
        origSensorId: 'ORIGSENSOR-ID',
        psrrl: 44.23,
        rad: 'RAD',
        rng: 100.23,
        rngdelt: 44.23,
        sac: 10,
        senalt: 100.23,
        senlat: 45.23,
        senlon: 45.23,
        sic: 40,
        spi: true,
        ssrl: 44.23,
        tags: ['TAG1', 'TAG2'],
        tgtconf: 'CONFIDENCE',
        tgtcorr: 'CORRELATION',
        tgtid: 'TGT-ID',
        tis: 0.4,
        trkelig: 'ELIGIBILITY',
        trknum: 30,
        tti: 'TTI',
        wectc: ['WARNING', 'WARNING'],
      },
    ]);
  });

  test('queryhelp', async () => {
    const responsePromise = client.monoradar.queryhelp();
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
    await expect(client.monoradar.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.monoradar.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.monoradar.tuple({ columns: 'columns', ts: '2019-12-27T18:11:19.117Z' });
  });
});
