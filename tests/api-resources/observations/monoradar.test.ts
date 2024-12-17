// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource monoradar', () => {
  test('create: only required params', async () => {
    const responsePromise = client.observations.monoradar.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        msgfmt: 'msgfmt',
        msgts: '2019-12-27T18:11:19.117Z',
        msgtyp: 'msgtyp',
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
    const response = await client.observations.monoradar.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        msgfmt: 'msgfmt',
        msgts: '2019-12-27T18:11:19.117Z',
        msgtyp: 'msgtyp',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
        id: 'id',
        acp: 0,
        addr: 'addr',
        af: true,
        aims: true,
        alt3d: 0,
        artsqual: 'artsqual',
        az: 0,
        azdelt: 0,
        bcnhits: 0,
        cartpos: [0],
        cdm: 'cdm',
        code7500: true,
        code7600: true,
        code7700: true,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        faa: true,
        grndspd: 0,
        hdng: 0,
        idSensor: 'idSensor',
        m1: 'm1',
        m1g: true,
        m1v: 'm1v',
        m2: 'm2',
        m2g: true,
        m2v: 'm2v',
        m2xv: 'm2xv',
        m3a: 'm3a',
        m3ag: true,
        m3av: 'm3av',
        m3axv: 'm3axv',
        m4: 'm4',
        m4d1d2: 'm4d1d2',
        m4v: 'm4v',
        mah: 'mah',
        mc: 0,
        mcg: true,
        mcv: 'mcv',
        milemrgcy: true,
        mrgrpt: true,
        mscommb: 'mscommb',
        mti: true,
        origin: 'origin',
        origNetwork: 'origNetwork',
        origSensorId: 'origSensorId',
        psrrl: 0,
        rad: 'rad',
        rng: 0,
        rngdelt: 0,
        sac: 0,
        senalt: 0,
        senlat: 0,
        senlon: 0,
        sic: 0,
        spi: true,
        ssrl: 0,
        tags: ['string'],
        tgtconf: 'tgtconf',
        tgtcorr: 'tgtcorr',
        tgtid: 'tgtid',
        tis: 0,
        trkelig: 'trkelig',
        trknum: 0,
        tti: 'tti',
        wectc: ['string'],
      },
    ]);
  });
});
