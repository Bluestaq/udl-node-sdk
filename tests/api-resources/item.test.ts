// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource item', () => {
  test('create: only required params', async () => {
    const responsePromise = client.item.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      scanCode: '12345ABCD',
      source: 'Bluestaq',
      type: 'CARGO',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.item.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      scanCode: '12345ABCD',
      source: 'Bluestaq',
      type: 'CARGO',
      id: '22f1f6da-a568-655a-ea37-76d013d04853',
      accSysKeys: ['System key1', 'System key2'],
      accSysNotes: 'Accepting System Notes',
      accSystem: 'Accepting System',
      accSysValues: ['System value1', 'System value2'],
      airdrop: true,
      altDataFormat: 'Alt Data Format',
      cargoType: 'PALLET',
      centerlineOffset: 3.1,
      cg: 112.014,
      commodityCode: '2304116',
      commoditySys: 'STCC',
      container: true,
      departure: 'CHS',
      destination: 'RMS',
      dvCode: 'DV-2',
      fs: 412.1,
      hazCodes: [1.1, 1.2],
      height: 1.1,
      idAirLoadPlan: '1038c389-d38e-270f-51cc-6a12e905abe8',
      itemContains: ['2UJ8843K', '745YV1T65'],
      keys: ['key1', 'key2'],
      lastArrDate: '2023-03-13',
      length: 1.1,
      moment: 4000.1,
      name: 'Product Name',
      netExpWt: 51.437,
      notes: 'Example notes',
      numPalletPos: 2,
      origin: 'THIRD_PARTY_DATASOURCE',
      productCode: '530500234',
      productSys: 'NSN',
      receivingBranch: 'Air Force',
      receivingUnit: '50 SBN',
      scGenTool: 'bID',
      tcn: 'M1358232245912XXX',
      uln: 'T01ME01',
      values: ['value1', 'value2'],
      volume: 7.8902,
      weight: 5443.335,
      weightTS: '2023-03-13T16:06:00.123Z',
      width: 1.1,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.item.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      scanCode: '12345ABCD',
      source: 'Bluestaq',
      type: 'CARGO',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.item.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      scanCode: '12345ABCD',
      source: 'Bluestaq',
      type: 'CARGO',
      body_id: '22f1f6da-a568-655a-ea37-76d013d04853',
      accSysKeys: ['System key1', 'System key2'],
      accSysNotes: 'Accepting System Notes',
      accSystem: 'Accepting System',
      accSysValues: ['System value1', 'System value2'],
      airdrop: true,
      altDataFormat: 'Alt Data Format',
      cargoType: 'PALLET',
      centerlineOffset: 3.1,
      cg: 112.014,
      commodityCode: '2304116',
      commoditySys: 'STCC',
      container: true,
      departure: 'CHS',
      destination: 'RMS',
      dvCode: 'DV-2',
      fs: 412.1,
      hazCodes: [1.1, 1.2],
      height: 1.1,
      idAirLoadPlan: '1038c389-d38e-270f-51cc-6a12e905abe8',
      itemContains: ['2UJ8843K', '745YV1T65'],
      keys: ['key1', 'key2'],
      lastArrDate: '2023-03-13',
      length: 1.1,
      moment: 4000.1,
      name: 'Product Name',
      netExpWt: 51.437,
      notes: 'Example notes',
      numPalletPos: 2,
      origin: 'THIRD_PARTY_DATASOURCE',
      productCode: '530500234',
      productSys: 'NSN',
      receivingBranch: 'Air Force',
      receivingUnit: '50 SBN',
      scGenTool: 'bID',
      tcn: 'M1358232245912XXX',
      uln: 'T01ME01',
      values: ['value1', 'value2'],
      volume: 7.8902,
      weight: 5443.335,
      weightTS: '2023-03-13T16:06:00.123Z',
      width: 1.1,
    });
  });

  test('list', async () => {
    const responsePromise = client.item.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.item.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.item.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.item.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.item.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.item.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.item.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.item.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.item.queryhelp();
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
    await expect(client.item.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.item.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.item.tuple({ columns: 'columns' });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.item.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        scanCode: '12345ABCD',
        source: 'Bluestaq',
        type: 'CARGO',
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

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.item.unvalidatedPublish([
      {
        classificationMarking: 'U',
        dataMode: 'TEST',
        scanCode: '12345ABCD',
        source: 'Bluestaq',
        type: 'CARGO',
        id: '22f1f6da-a568-655a-ea37-76d013d04853',
        accSysKeys: ['System key1', 'System key2'],
        accSysNotes: 'Accepting System Notes',
        accSystem: 'Accepting System',
        accSysValues: ['System value1', 'System value2'],
        airdrop: true,
        altDataFormat: 'Alt Data Format',
        cargoType: 'PALLET',
        centerlineOffset: 3.1,
        cg: 112.014,
        commodityCode: '2304116',
        commoditySys: 'STCC',
        container: true,
        departure: 'CHS',
        destination: 'RMS',
        dvCode: 'DV-2',
        fs: 412.1,
        hazCodes: [1.1, 1.2],
        height: 1.1,
        idAirLoadPlan: '1038c389-d38e-270f-51cc-6a12e905abe8',
        itemContains: ['2UJ8843K', '745YV1T65'],
        keys: ['key1', 'key2'],
        lastArrDate: '2023-03-13',
        length: 1.1,
        moment: 4000.1,
        name: 'Product Name',
        netExpWt: 51.437,
        notes: 'Example notes',
        numPalletPos: 2,
        origin: 'THIRD_PARTY_DATASOURCE',
        productCode: '530500234',
        productSys: 'NSN',
        receivingBranch: 'Air Force',
        receivingUnit: '50 SBN',
        scGenTool: 'bID',
        tcn: 'M1358232245912XXX',
        uln: 'T01ME01',
        values: ['value1', 'value2'],
        volume: 7.8902,
        weight: 5443.335,
        weightTS: '2023-03-13T16:06:00.123Z',
        width: 1.1,
      },
    ]);
  });
});
