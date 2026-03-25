// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource starCatalog', () => {
  test('create: only required params', async () => {
    const responsePromise = client.starCatalog.create({
      astrometryOrigin: 'GA',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'TEST',
      dec: 21.8,
      ra: 14.43,
      source: 'Bluestaq',
      starEpoch: 2018.864,
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
      astrometryOrigin: 'GA',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'TEST',
      dec: 21.8,
      ra: 14.43,
      source: 'Bluestaq',
      starEpoch: 2018.864,
      aavsoVsxId: 2387137,
      abgmag: 11.24,
      abgmagOrigin: 'PS',
      abgmagUnc: 0.023,
      abimag: 11.24,
      abimagOrigin: 'GA',
      abimagUnc: 0.023,
      abrmag: 11.24,
      abrmagOrigin: 'SK',
      abrmagUnc: 0.023,
      abymag: 11.24,
      abymagOrigin: 'AP',
      abymagUnc: 0.023,
      abzmag: 11.24,
      abzmagOrigin: 'AP',
      abzmagUnc: 0.023,
      allWISEccInd: '0000',
      allWISEId: 'WISEA J152743.04+624823.6',
      allWISEnaInd: 1,
      allWISEphQualInd: 'AAAA',
      apassId: '175-0082419',
      astrometricExcessNoise: 921.2857,
      astrometricExcessNoiseSig: 194326670,
      bmag: 27.004,
      bmagOrigin: 'AP',
      bmagUnc: 9.999,
      bpmag: 0.04559,
      bpmagUnc: 0.2227,
      carrascoCatId: 1244,
      catVersion: '1.23 DR3',
      catWise2020Id: '3584p196_b0-084425',
      decUnc: 40.996,
      ducatiCatId: 'AB ORI',
      gaiadr3CatId: 89012345678901,
      gmag: 0.0046,
      gmagUnc: 0.00292,
      gncCatId: 12345,
      healpixIndex: 196607,
      hipCatId: 12345,
      hmag: 12.126,
      hmagOrigin: 'UL',
      hmagUnc: 5.722,
      imag: 22.46249,
      imagOrigin: 'HI',
      imagUnc: 1.2000417,
      jmag: 9.515,
      jmagOrigin: 'TP',
      jmagUnc: 7.559,
      kmag: 13.545,
      kmagOrigin: 'UC',
      kmagUnc: 0.052,
      morphologyInd: 5,
      multFlag: true,
      multiplicity: '2',
      neighborDec: 89.99,
      neighborDistance: 201.406,
      neighborFlag: false,
      neighborId: 2456,
      neighborRa: 359.99,
      nonSingleStar: '7',
      numNeighbors: 519,
      origin: 'THIRD_PARTY_DATASOURCE',
      panStarrsId: 215993386231483000,
      parallax: -6.8,
      parallaxUnc: 82.35,
      pmdec: -970.1003,
      pmdecUnc: 1.22,
      pmra: 1000.45,
      pmraUnc: 5.6,
      pmUncFlag: false,
      posUncFlag: false,
      ps1astrometryCorrectionFlag: 7,
      ps1ObjInfoFlag: 2005196800,
      ps1QualityFlag: 239,
      raUnc: 509.466,
      rmag: 22.657284,
      rmagOrigin: 'GA',
      rmagUnc: 0.053,
      rpmag: 8.0047,
      rpmagUnc: 1.233,
      ruwe: 116.016365,
      sdaCatId: 3015023687,
      sgmag: 28.663515,
      sgmagUnc: 2.3097522,
      shift: 4.548,
      shiftFlag: false,
      shiftFWHM1: 0.157,
      shiftFWHM6: 1.065,
      skyMapperId: 505176683,
      twoMASSId: 'A1B2C3D4E5',
      twoMassPHQualInd: 'AAAA',
      twoMassReadFlag: '111',
      twoMassXscId: '5000540',
      tychoDscId: 9537000661,
      uhsId: 460074663768,
      ukidssGCSId: 442466709194,
      ukidssGPSId: 439491265503,
      ukidssLASId: 433883403451,
      varFlag: true,
      variability: '1',
      vhsId: 473820608583,
      vmag: 25.829414,
      vmagOrigin: 'CR',
      vmagUnc: 2.055,
      w1mag: 15.782,
      w1magOrigin: 'CA',
      w1magUnc: 0.042,
      w1sat: 0.993,
      w2mag: 16.523,
      w2magOrigin: 'CA',
      w2magUnc: 0.021,
      w2sat: 0.962,
      w3mag: 11.541,
      w3magOrigin: 'AL',
      w3magUnc: 0.159,
      w3sat: 0.999,
      w4mag: 9.007,
      w4magOrigin: 'AL',
      w4magUnc: 0.468,
      w4sat: 0.523,
      wdsCatId: '155506',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.starCatalog.update('id', {
      astrometryOrigin: 'GA',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'TEST',
      dec: 21.8,
      ra: 14.43,
      source: 'Bluestaq',
      starEpoch: 2018.864,
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
      astrometryOrigin: 'GA',
      classificationMarking: 'U',
      csId: 12345,
      dataMode: 'TEST',
      dec: 21.8,
      ra: 14.43,
      source: 'Bluestaq',
      starEpoch: 2018.864,
      aavsoVsxId: 2387137,
      abgmag: 11.24,
      abgmagOrigin: 'PS',
      abgmagUnc: 0.023,
      abimag: 11.24,
      abimagOrigin: 'GA',
      abimagUnc: 0.023,
      abrmag: 11.24,
      abrmagOrigin: 'SK',
      abrmagUnc: 0.023,
      abymag: 11.24,
      abymagOrigin: 'AP',
      abymagUnc: 0.023,
      abzmag: 11.24,
      abzmagOrigin: 'AP',
      abzmagUnc: 0.023,
      allWISEccInd: '0000',
      allWISEId: 'WISEA J152743.04+624823.6',
      allWISEnaInd: 1,
      allWISEphQualInd: 'AAAA',
      apassId: '175-0082419',
      astrometricExcessNoise: 921.2857,
      astrometricExcessNoiseSig: 194326670,
      bmag: 27.004,
      bmagOrigin: 'AP',
      bmagUnc: 9.999,
      bpmag: 0.04559,
      bpmagUnc: 0.2227,
      carrascoCatId: 1244,
      catVersion: '1.23 DR3',
      catWise2020Id: '3584p196_b0-084425',
      decUnc: 40.996,
      ducatiCatId: 'AB ORI',
      gaiadr3CatId: 89012345678901,
      gmag: 0.0046,
      gmagUnc: 0.00292,
      gncCatId: 12345,
      healpixIndex: 196607,
      hipCatId: 12345,
      hmag: 12.126,
      hmagOrigin: 'UL',
      hmagUnc: 5.722,
      imag: 22.46249,
      imagOrigin: 'HI',
      imagUnc: 1.2000417,
      jmag: 9.515,
      jmagOrigin: 'TP',
      jmagUnc: 7.559,
      kmag: 13.545,
      kmagOrigin: 'UC',
      kmagUnc: 0.052,
      morphologyInd: 5,
      multFlag: true,
      multiplicity: '2',
      neighborDec: 89.99,
      neighborDistance: 201.406,
      neighborFlag: false,
      neighborId: 2456,
      neighborRa: 359.99,
      nonSingleStar: '7',
      numNeighbors: 519,
      origin: 'THIRD_PARTY_DATASOURCE',
      panStarrsId: 215993386231483000,
      parallax: -6.8,
      parallaxUnc: 82.35,
      pmdec: -970.1003,
      pmdecUnc: 1.22,
      pmra: 1000.45,
      pmraUnc: 5.6,
      pmUncFlag: false,
      posUncFlag: false,
      ps1astrometryCorrectionFlag: 7,
      ps1ObjInfoFlag: 2005196800,
      ps1QualityFlag: 239,
      raUnc: 509.466,
      rmag: 22.657284,
      rmagOrigin: 'GA',
      rmagUnc: 0.053,
      rpmag: 8.0047,
      rpmagUnc: 1.233,
      ruwe: 116.016365,
      sdaCatId: 3015023687,
      sgmag: 28.663515,
      sgmagUnc: 2.3097522,
      shift: 4.548,
      shiftFlag: false,
      shiftFWHM1: 0.157,
      shiftFWHM6: 1.065,
      skyMapperId: 505176683,
      twoMASSId: 'A1B2C3D4E5',
      twoMassPHQualInd: 'AAAA',
      twoMassReadFlag: '111',
      twoMassXscId: '5000540',
      tychoDscId: 9537000661,
      uhsId: 460074663768,
      ukidssGCSId: 442466709194,
      ukidssGPSId: 439491265503,
      ukidssLASId: 433883403451,
      varFlag: true,
      variability: '1',
      vhsId: 473820608583,
      vmag: 25.829414,
      vmagOrigin: 'CR',
      vmagUnc: 2.055,
      w1mag: 15.782,
      w1magOrigin: 'CA',
      w1magUnc: 0.042,
      w1sat: 0.993,
      w2mag: 16.523,
      w2magOrigin: 'CA',
      w2magUnc: 0.021,
      w2sat: 0.962,
      w3mag: 11.541,
      w3magOrigin: 'AL',
      w3magUnc: 0.159,
      w3sat: 0.999,
      w4mag: 9.007,
      w4magOrigin: 'AL',
      w4magUnc: 0.468,
      w4sat: 0.523,
      wdsCatId: '155506',
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
        {
          dec: 0,
          firstResult: 0,
          maxResults: 0,
          ra: 0,
        },
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
        {
          dec: 0,
          firstResult: 0,
          maxResults: 0,
          ra: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.starCatalog.createBulk({
      body: [
        {
          astrometryOrigin: 'GA',
          classificationMarking: 'U',
          csId: 12345,
          dataMode: 'TEST',
          dec: 21.8,
          ra: 14.43,
          source: 'Bluestaq',
          starEpoch: 2018.864,
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
          astrometryOrigin: 'GA',
          classificationMarking: 'U',
          csId: 12345,
          dataMode: 'TEST',
          dec: 21.8,
          ra: 14.43,
          source: 'Bluestaq',
          starEpoch: 2018.864,
          aavsoVsxId: 2387137,
          abgmag: 11.24,
          abgmagOrigin: 'PS',
          abgmagUnc: 0.023,
          abimag: 11.24,
          abimagOrigin: 'GA',
          abimagUnc: 0.023,
          abrmag: 11.24,
          abrmagOrigin: 'SK',
          abrmagUnc: 0.023,
          abymag: 11.24,
          abymagOrigin: 'AP',
          abymagUnc: 0.023,
          abzmag: 11.24,
          abzmagOrigin: 'AP',
          abzmagUnc: 0.023,
          allWISEccInd: '0000',
          allWISEId: 'WISEA J152743.04+624823.6',
          allWISEnaInd: 1,
          allWISEphQualInd: 'AAAA',
          apassId: '175-0082419',
          astrometricExcessNoise: 921.2857,
          astrometricExcessNoiseSig: 194326670,
          bmag: 27.004,
          bmagOrigin: 'AP',
          bmagUnc: 9.999,
          bpmag: 0.04559,
          bpmagUnc: 0.2227,
          carrascoCatId: 1244,
          catVersion: '1.23 DR3',
          catWise2020Id: '3584p196_b0-084425',
          decUnc: 40.996,
          ducatiCatId: 'AB ORI',
          gaiadr3CatId: 89012345678901,
          gmag: 0.0046,
          gmagUnc: 0.00292,
          gncCatId: 12345,
          healpixIndex: 196607,
          hipCatId: 12345,
          hmag: 12.126,
          hmagOrigin: 'UL',
          hmagUnc: 5.722,
          imag: 22.46249,
          imagOrigin: 'HI',
          imagUnc: 1.2000417,
          jmag: 9.515,
          jmagOrigin: 'TP',
          jmagUnc: 7.559,
          kmag: 13.545,
          kmagOrigin: 'UC',
          kmagUnc: 0.052,
          morphologyInd: 5,
          multFlag: true,
          multiplicity: '2',
          neighborDec: 89.99,
          neighborDistance: 201.406,
          neighborFlag: false,
          neighborId: 2456,
          neighborRa: 359.99,
          nonSingleStar: '7',
          numNeighbors: 519,
          origin: 'THIRD_PARTY_DATASOURCE',
          panStarrsId: 215993386231483000,
          parallax: -6.8,
          parallaxUnc: 82.35,
          pmdec: -970.1003,
          pmdecUnc: 1.22,
          pmra: 1000.45,
          pmraUnc: 5.6,
          pmUncFlag: false,
          posUncFlag: false,
          ps1astrometryCorrectionFlag: 7,
          ps1ObjInfoFlag: 2005196800,
          ps1QualityFlag: 239,
          raUnc: 509.466,
          rmag: 22.657284,
          rmagOrigin: 'GA',
          rmagUnc: 0.053,
          rpmag: 8.0047,
          rpmagUnc: 1.233,
          ruwe: 116.016365,
          sdaCatId: 3015023687,
          sgmag: 28.663515,
          sgmagUnc: 2.3097522,
          shift: 4.548,
          shiftFlag: false,
          shiftFWHM1: 0.157,
          shiftFWHM6: 1.065,
          skyMapperId: 505176683,
          twoMASSId: 'A1B2C3D4E5',
          twoMassPHQualInd: 'AAAA',
          twoMassReadFlag: '111',
          twoMassXscId: '5000540',
          tychoDscId: 9537000661,
          uhsId: 460074663768,
          ukidssGCSId: 442466709194,
          ukidssGPSId: 439491265503,
          ukidssLASId: 433883403451,
          varFlag: true,
          variability: '1',
          vhsId: 473820608583,
          vmag: 25.829414,
          vmagOrigin: 'CR',
          vmagUnc: 2.055,
          w1mag: 15.782,
          w1magOrigin: 'CA',
          w1magUnc: 0.042,
          w1sat: 0.993,
          w2mag: 16.523,
          w2magOrigin: 'CA',
          w2magUnc: 0.021,
          w2sat: 0.962,
          w3mag: 11.541,
          w3magOrigin: 'AL',
          w3magUnc: 0.159,
          w3sat: 0.999,
          w4mag: 9.007,
          w4magOrigin: 'AL',
          w4magUnc: 0.468,
          w4sat: 0.523,
          wdsCatId: '155506',
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
          astrometryOrigin: 'GA',
          classificationMarking: 'U',
          csId: 12345,
          dataMode: 'TEST',
          dec: 21.8,
          ra: 14.43,
          source: 'Bluestaq',
          starEpoch: 2018.864,
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
          astrometryOrigin: 'GA',
          classificationMarking: 'U',
          csId: 12345,
          dataMode: 'TEST',
          dec: 21.8,
          ra: 14.43,
          source: 'Bluestaq',
          starEpoch: 2018.864,
          aavsoVsxId: 2387137,
          abgmag: 11.24,
          abgmagOrigin: 'PS',
          abgmagUnc: 0.023,
          abimag: 11.24,
          abimagOrigin: 'GA',
          abimagUnc: 0.023,
          abrmag: 11.24,
          abrmagOrigin: 'SK',
          abrmagUnc: 0.023,
          abymag: 11.24,
          abymagOrigin: 'AP',
          abymagUnc: 0.023,
          abzmag: 11.24,
          abzmagOrigin: 'AP',
          abzmagUnc: 0.023,
          allWISEccInd: '0000',
          allWISEId: 'WISEA J152743.04+624823.6',
          allWISEnaInd: 1,
          allWISEphQualInd: 'AAAA',
          apassId: '175-0082419',
          astrometricExcessNoise: 921.2857,
          astrometricExcessNoiseSig: 194326670,
          bmag: 27.004,
          bmagOrigin: 'AP',
          bmagUnc: 9.999,
          bpmag: 0.04559,
          bpmagUnc: 0.2227,
          carrascoCatId: 1244,
          catVersion: '1.23 DR3',
          catWise2020Id: '3584p196_b0-084425',
          decUnc: 40.996,
          ducatiCatId: 'AB ORI',
          gaiadr3CatId: 89012345678901,
          gmag: 0.0046,
          gmagUnc: 0.00292,
          gncCatId: 12345,
          healpixIndex: 196607,
          hipCatId: 12345,
          hmag: 12.126,
          hmagOrigin: 'UL',
          hmagUnc: 5.722,
          imag: 22.46249,
          imagOrigin: 'HI',
          imagUnc: 1.2000417,
          jmag: 9.515,
          jmagOrigin: 'TP',
          jmagUnc: 7.559,
          kmag: 13.545,
          kmagOrigin: 'UC',
          kmagUnc: 0.052,
          morphologyInd: 5,
          multFlag: true,
          multiplicity: '2',
          neighborDec: 89.99,
          neighborDistance: 201.406,
          neighborFlag: false,
          neighborId: 2456,
          neighborRa: 359.99,
          nonSingleStar: '7',
          numNeighbors: 519,
          origin: 'THIRD_PARTY_DATASOURCE',
          panStarrsId: 215993386231483000,
          parallax: -6.8,
          parallaxUnc: 82.35,
          pmdec: -970.1003,
          pmdecUnc: 1.22,
          pmra: 1000.45,
          pmraUnc: 5.6,
          pmUncFlag: false,
          posUncFlag: false,
          ps1astrometryCorrectionFlag: 7,
          ps1ObjInfoFlag: 2005196800,
          ps1QualityFlag: 239,
          raUnc: 509.466,
          rmag: 22.657284,
          rmagOrigin: 'GA',
          rmagUnc: 0.053,
          rpmag: 8.0047,
          rpmagUnc: 1.233,
          ruwe: 116.016365,
          sdaCatId: 3015023687,
          sgmag: 28.663515,
          sgmagUnc: 2.3097522,
          shift: 4.548,
          shiftFlag: false,
          shiftFWHM1: 0.157,
          shiftFWHM6: 1.065,
          skyMapperId: 505176683,
          twoMASSId: 'A1B2C3D4E5',
          twoMassPHQualInd: 'AAAA',
          twoMassReadFlag: '111',
          twoMassXscId: '5000540',
          tychoDscId: 9537000661,
          uhsId: 460074663768,
          ukidssGCSId: 442466709194,
          ukidssGPSId: 439491265503,
          ukidssLASId: 433883403451,
          varFlag: true,
          variability: '1',
          vhsId: 473820608583,
          vmag: 25.829414,
          vmagOrigin: 'CR',
          vmagUnc: 2.055,
          w1mag: 15.782,
          w1magOrigin: 'CA',
          w1magUnc: 0.042,
          w1sat: 0.993,
          w2mag: 16.523,
          w2magOrigin: 'CA',
          w2magUnc: 0.021,
          w2sat: 0.962,
          w3mag: 11.541,
          w3magOrigin: 'AL',
          w3magUnc: 0.159,
          w3sat: 0.999,
          w4mag: 9.007,
          w4magOrigin: 'AL',
          w4magUnc: 0.468,
          w4sat: 0.523,
          wdsCatId: '155506',
        },
      ],
    });
  });
});
