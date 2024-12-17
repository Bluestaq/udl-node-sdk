// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  test('create: only required params', async () => {
    const responsePromise = client.items.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        scanCode: 'scanCode',
        source: 'source',
        type: 'type',
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
    const response = await client.items.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        scanCode: 'scanCode',
        source: 'source',
        type: 'type',
        id: 'id',
        accSysKeys: ['string'],
        accSysNotes: 'accSysNotes',
        accSystem: 'accSystem',
        accSysValues: ['string'],
        airdrop: true,
        altDataFormat: 'altDataFormat',
        cargoType: 'cargoType',
        centerlineOffset: 0,
        cg: 0,
        commodityCode: 'commodityCode',
        commoditySys: 'commoditySys',
        container: true,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        departure: 'departure',
        destination: 'destination',
        dvCode: 'dvCode',
        fs: 0,
        hazCodes: [0],
        height: 0,
        idAirLoadPlan: 'idAirLoadPlan',
        itemContains: ['string'],
        keys: ['string'],
        lastArrDate: '2019-12-27',
        length: 0,
        moment: 0,
        name: 'name',
        netExpWt: 0,
        notes: 'notes',
        numPalletPos: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        productCode: 'productCode',
        productSys: 'productSys',
        receivingBranch: 'receivingBranch',
        receivingUnit: 'receivingUnit',
        scGenTool: 'scGenTool',
        sourceDL: 'sourceDL',
        tcn: 'tcn',
        uln: 'uln',
        values: ['string'],
        volume: 0,
        weight: 0,
        weightTS: '2019-12-27T18:11:19.117Z',
        width: 0,
      },
    ]);
  });
});
