// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource starcatalog', () => {
  test('create: only required params', async () => {
    const responsePromise = client.starcatalog.create({
      astrometryOrigin: 'GAIADR3',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'REAL',
      dec: 21.8,
      ra: 14.43,
      source: 'Bluestaq',
      starEpoch: 2016,
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
    const response = await client.starcatalog.create({
      astrometryOrigin: 'GAIADR3',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'REAL',
      dec: 21.8,
      ra: 14.43,
      source: 'Bluestaq',
      starEpoch: 2016,
      id: 'STAR-CAT-DATASET-ID',
      bpmag: 0.04559,
      bpmagUnc: 0.2227,
      catVersion: '1.23',
      decUnc: 40.996,
      gaiadr3CatId: 89012345678901,
      gmag: 0.0046,
      gmagUnc: 0.00292,
      gncCatId: 12345,
      hipCatId: 12345,
      hmag: 12.126,
      hmagUnc: 5.722,
      jmag: 9.515,
      jmagUnc: 7.559,
      kmag: 13.545,
      kmagUnc: 0.052,
      multFlag: true,
      neighborDistance: 201.406,
      neighborFlag: false,
      neighborId: 2456,
      origin: 'THIRD_PARTY_DATASOURCE',
      parallax: -6.8,
      parallaxUnc: 82.35,
      pmdec: -970.1003,
      pmdecUnc: 1.22,
      pmra: 1000.45,
      pmraUnc: 5.6,
      pmUncFlag: false,
      posUncFlag: false,
      raUnc: 509.466,
      rpmag: 8.0047,
      rpmagUnc: 1.233,
      shift: 4.548,
      shiftFlag: false,
      varFlag: true,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.starcatalog.update({
      path_id: 'id',
      astrometryOrigin: 'GAIADR3',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'REAL',
      dec: 21.8,
      ra: 14.43,
      source: 'Bluestaq',
      starEpoch: 2016,
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
    const response = await client.starcatalog.update({
      path_id: 'id',
      astrometryOrigin: 'GAIADR3',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'REAL',
      dec: 21.8,
      ra: 14.43,
      source: 'Bluestaq',
      starEpoch: 2016,
      body_id: 'STAR-CAT-DATASET-ID',
      bpmag: 0.04559,
      bpmagUnc: 0.2227,
      catVersion: '1.23',
      decUnc: 40.996,
      gaiadr3CatId: 89012345678901,
      gmag: 0.0046,
      gmagUnc: 0.00292,
      gncCatId: 12345,
      hipCatId: 12345,
      hmag: 12.126,
      hmagUnc: 5.722,
      jmag: 9.515,
      jmagUnc: 7.559,
      kmag: 13.545,
      kmagUnc: 0.052,
      multFlag: true,
      neighborDistance: 201.406,
      neighborFlag: false,
      neighborId: 2456,
      origin: 'THIRD_PARTY_DATASOURCE',
      parallax: -6.8,
      parallaxUnc: 82.35,
      pmdec: -970.1003,
      pmdecUnc: 1.22,
      pmra: 1000.45,
      pmraUnc: 5.6,
      pmUncFlag: false,
      posUncFlag: false,
      raUnc: 509.466,
      rpmag: 8.0047,
      rpmagUnc: 1.233,
      shift: 4.548,
      shiftFlag: false,
      varFlag: true,
    });
  });

  test('list', async () => {
    const responsePromise = client.starcatalog.list();
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
    await expect(client.starcatalog.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.starcatalog.list({ dec: 0, ra: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.starcatalog.delete('id');
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
    await expect(client.starcatalog.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.starcatalog.count();
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
    await expect(client.starcatalog.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.starcatalog.count({ dec: 0, ra: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.starcatalog.createBulk([
      {
        astrometryOrigin: 'GAIADR3',
        classificationMarking: 'U',
        csId: 12345,
        dataMode: 'REAL',
        dec: 21.8,
        ra: 14.43,
        source: 'Bluestaq',
        starEpoch: 2016,
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
    const response = await client.starcatalog.createBulk([
      {
        astrometryOrigin: 'GAIADR3',
        classificationMarking: 'U',
        csId: 12345,
        dataMode: 'REAL',
        dec: 21.8,
        ra: 14.43,
        source: 'Bluestaq',
        starEpoch: 2016,
        id: 'STAR-CAT-DATASET-ID',
        bpmag: 0.04559,
        bpmagUnc: 0.2227,
        catVersion: '1.23',
        decUnc: 40.996,
        gaiadr3CatId: 89012345678901,
        gmag: 0.0046,
        gmagUnc: 0.00292,
        gncCatId: 12345,
        hipCatId: 12345,
        hmag: 12.126,
        hmagUnc: 5.722,
        jmag: 9.515,
        jmagUnc: 7.559,
        kmag: 13.545,
        kmagUnc: 0.052,
        multFlag: true,
        neighborDistance: 201.406,
        neighborFlag: false,
        neighborId: 2456,
        origin: 'THIRD_PARTY_DATASOURCE',
        parallax: -6.8,
        parallaxUnc: 82.35,
        pmdec: -970.1003,
        pmdecUnc: 1.22,
        pmra: 1000.45,
        pmraUnc: 5.6,
        pmUncFlag: false,
        posUncFlag: false,
        raUnc: 509.466,
        rpmag: 8.0047,
        rpmagUnc: 1.233,
        shift: 4.548,
        shiftFlag: false,
        varFlag: true,
      },
    ]);
  });

  test('fileCreate: only required params', async () => {
    const responsePromise = client.starcatalog.fileCreate([
      {
        astrometryOrigin: 'GAIADR3',
        classificationMarking: 'U',
        csId: 12345,
        dataMode: 'REAL',
        dec: 21.8,
        ra: 14.43,
        source: 'Bluestaq',
        starEpoch: 2016,
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

  test('fileCreate: required and optional params', async () => {
    const response = await client.starcatalog.fileCreate([
      {
        astrometryOrigin: 'GAIADR3',
        classificationMarking: 'U',
        csId: 12345,
        dataMode: 'REAL',
        dec: 21.8,
        ra: 14.43,
        source: 'Bluestaq',
        starEpoch: 2016,
        id: 'STAR-CAT-DATASET-ID',
        bpmag: 0.04559,
        bpmagUnc: 0.2227,
        catVersion: '1.23',
        decUnc: 40.996,
        gaiadr3CatId: 89012345678901,
        gmag: 0.0046,
        gmagUnc: 0.00292,
        gncCatId: 12345,
        hipCatId: 12345,
        hmag: 12.126,
        hmagUnc: 5.722,
        jmag: 9.515,
        jmagUnc: 7.559,
        kmag: 13.545,
        kmagUnc: 0.052,
        multFlag: true,
        neighborDistance: 201.406,
        neighborFlag: false,
        neighborId: 2456,
        origin: 'THIRD_PARTY_DATASOURCE',
        parallax: -6.8,
        parallaxUnc: 82.35,
        pmdec: -970.1003,
        pmdecUnc: 1.22,
        pmra: 1000.45,
        pmraUnc: 5.6,
        pmUncFlag: false,
        posUncFlag: false,
        raUnc: 509.466,
        rpmag: 8.0047,
        rpmagUnc: 1.233,
        shift: 4.548,
        shiftFlag: false,
        varFlag: true,
      },
    ]);
  });

  test('get', async () => {
    const responsePromise = client.starcatalog.get('id');
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
    await expect(client.starcatalog.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.starcatalog.queryhelp();
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
    await expect(client.starcatalog.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.starcatalog.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.starcatalog.tuple({ columns: 'columns', dec: 0, ra: 0 });
  });
});
