// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource starCatalog', () => {
  test('create: only required params', async () => {
    const responsePromise = client.starCatalog.create({
      astrometryOrigin: 'GAIADR3',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'TEST',
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
    const response = await client.starCatalog.create({
      astrometryOrigin: 'GAIADR3',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'TEST',
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
    const responsePromise = client.starCatalog.update('id', {
      astrometryOrigin: 'GAIADR3',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'TEST',
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
    const response = await client.starCatalog.update('id', {
      astrometryOrigin: 'GAIADR3',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'TEST',
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
    const responsePromise = client.starCatalog.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.starCatalog.list(
        { dec: 0, firstResult: 0, maxResults: 0, ra: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.starCatalog.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.starCatalog.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.starCatalog.count(
        { dec: 0, firstResult: 0, maxResults: 0, ra: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.starCatalog.createBulk({
      body: [
        {
          astrometryOrigin: 'GAIADR3',
          classificationMarking: 'U',
          csId: 12345,
          dataMode: 'TEST',
          dec: 21.8,
          ra: 14.43,
          source: 'Bluestaq',
          starEpoch: 2016,
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.starCatalog.createBulk({
      body: [
        {
          astrometryOrigin: 'GAIADR3',
          classificationMarking: 'U',
          csId: 12345,
          dataMode: 'TEST',
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
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.starCatalog.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.starCatalog.get('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.starCatalog.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.starCatalog.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.starCatalog.tuple({
      columns: 'columns',
      dec: 0,
      firstResult: 0,
      maxResults: 0,
      ra: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.starCatalog.unvalidatedPublish({
      body: [
        {
          astrometryOrigin: 'GAIADR3',
          classificationMarking: 'U',
          csId: 12345,
          dataMode: 'TEST',
          dec: 21.8,
          ra: 14.43,
          source: 'Bluestaq',
          starEpoch: 2016,
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.starCatalog.unvalidatedPublish({
      body: [
        {
          astrometryOrigin: 'GAIADR3',
          classificationMarking: 'U',
          csId: 12345,
          dataMode: 'TEST',
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
      ],
    });
  });
});
