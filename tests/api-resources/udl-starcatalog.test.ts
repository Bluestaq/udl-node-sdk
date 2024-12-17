// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource udlStarcatalog', () => {
  test('create: only required params', async () => {
    const responsePromise = client.udlStarcatalog.create([
      {
        astrometryOrigin: 'astrometryOrigin',
        classificationMarking: 'classificationMarking',
        csId: 0,
        dataMode: 'dataMode',
        dec: 0,
        ra: 0,
        source: 'source',
        starEpoch: 0,
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
    const response = await client.udlStarcatalog.create([
      {
        astrometryOrigin: 'astrometryOrigin',
        classificationMarking: 'classificationMarking',
        csId: 0,
        dataMode: 'dataMode',
        dec: 0,
        ra: 0,
        source: 'source',
        starEpoch: 0,
        id: 'id',
        bpmag: 0,
        bpmagUnc: 0,
        catVersion: 'catVersion',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        decUnc: 0,
        gaiadr3CatId: 0,
        gmag: 0,
        gmagUnc: 0,
        gncCatId: 0,
        hipCatId: 0,
        hmag: 0,
        hmagUnc: 0,
        jmag: 0,
        jmagUnc: 0,
        kmag: 0,
        kmagUnc: 0,
        multFlag: true,
        neighborDistance: 0,
        neighborFlag: true,
        neighborId: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        parallax: 0,
        parallaxUnc: 0,
        pmdec: 0,
        pmdecUnc: 0,
        pmra: 0,
        pmraUnc: 0,
        pmUncFlag: true,
        posUncFlag: true,
        raUnc: 0,
        rpmag: 0,
        rpmagUnc: 0,
        shift: 0,
        shiftFlag: true,
        updatedAt: '2019-12-27T18:11:19.117Z',
        updatedBy: 'updatedBy',
        varFlag: true,
      },
    ]);
  });
});
