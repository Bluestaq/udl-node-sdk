// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tracks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.tracks.create([
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
    const response = await client.filedrop.tracks.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
        id: 'id',
        alt: 0,
        asset: 'asset',
        assetNat: 'assetNat',
        callSign: 'callSign',
        cntct: 'cntct',
        course: 0,
        cov: [0],
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        ecefAcc: [0],
        ecefPos: [0],
        ecefVel: [0],
        eNUPos: [0],
        eNUVel: [0],
        env: 'env',
        envConf: 0,
        errEllp: [0],
        hdng: 0,
        identAmp: 'identAmp',
        identCred: 0,
        identRel: 0,
        jSeries: 'jSeries',
        lat: 0,
        lcAcc: [0],
        lco: [0],
        lcPos: [0],
        lcs: [0],
        lcVel: [0],
        lon: 0,
        m1: 0,
        m1v: 0,
        m2: 0,
        m2v: 0,
        m3a: 0,
        m3av: 0,
        modType: 'modType',
        msgTs: '2019-12-27T18:11:19.117Z',
        msnId: 'msnId',
        multiSource: true,
        objAct: 'objAct',
        objId: 'objId',
        objIdent: 'objIdent',
        objNat: 'objNat',
        objPlat: 'objPlat',
        objSpec: 'objSpec',
        objType: 'objType',
        origin: 'origin',
        origNetwork: 'origNetwork',
        sen: 'sen',
        senQual: 'senQual',
        sourceDL: 'sourceDL',
        spd: 0,
        srcIds: ['string'],
        srcTyps: ['string'],
        strength: 0,
        tags: ['string'],
        trkConf: 0,
        trkId: 'trkId',
        trkItmId: 'trkItmId',
        trkNum: 'trkNum',
        trkPtType: 'trkPtType',
        trkQual: 0,
        trkStat: 'trkStat',
      },
    ]);
  });
});
