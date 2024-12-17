// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource poi', () => {
  test('create: only required params', async () => {
    const responsePromise = client.filedrop.reportAndActivity.poi.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        name: 'name',
        poiid: 'poiid',
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
    const response = await client.filedrop.reportAndActivity.poi.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        name: 'name',
        poiid: 'poiid',
        source: 'source',
        ts: '2019-12-27T18:11:19.117Z',
        id: 'id',
        activity: 'activity',
        agjson: 'agjson',
        alt: 0,
        andims: 0,
        area: 'area',
        asrid: 0,
        asset: 'asset',
        atext: 'atext',
        atype: 'atype',
        az: 0,
        beNumber: 'beNumber',
        ce: 0,
        cntct: 'cntct',
        conf: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        desc: 'desc',
        el: 0,
        elle: [0],
        env: 'env',
        groups: ['string'],
        how: 'how',
        ident: 'ident',
        idWeatherReport: ['string'],
        lat: 0,
        le: 0,
        lon: 0,
        msnid: 'msnid',
        orientation: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        plat: 'plat',
        pps: 'pps',
        pri: 0,
        sourceDL: 'sourceDL',
        spec: 'spec',
        srcIds: ['string'],
        srcTyps: ['string'],
        stale: '2019-12-27T18:11:19.117Z',
        start: '2019-12-27T18:11:19.117Z',
        tags: ['string'],
        transactionId: 'transactionId',
        trkid: 'trkid',
        type: 'type',
        urls: ['string'],
      },
    ]);
  });
});
