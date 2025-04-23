// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operatingunit', () => {
  test('create: only required params', async () => {
    const responsePromise = client.operatingunit.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'SOME_NAME',
      source: 'some.user',
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
    const response = await client.operatingunit.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'SOME_NAME',
      source: 'some.user',
      airDefArea: 'AL006',
      allegiance: 'OTHR',
      altAllegiance: 'HL',
      altCountryCode: 'IZ',
      altOperatingUnitId: '32100000000021',
      classRating: '1',
      condition: 'RDY',
      conditionAvail: 'A',
      coord: '340000000N0430000000E',
      coordDatum: 'WGS',
      coordDerivAcc: 12.345,
      countryCode: 'IQ',
      deployStatus: 'ND',
      description: 'Description of unit',
      divCat: '5',
      echelon: 'SHIP',
      echelonTier: '68',
      elevMsl: 123.45,
      elevMslConfLvl: 50,
      elevMslDerivAcc: 12.34,
      eval: 7,
      flagFlown: 'IZ',
      fleetId: 'A',
      force: 'NV',
      forceName: 'FORCE-NAME',
      fpa: 'EOB',
      functRole: 'MIL',
      geoidalMslSep: 12.34,
      idContact: 'CONTACT-ID',
      ident: 'FRIEND',
      idLocation: 'LOCATION-ID',
      idOperatingUnit: 'OPERATINGUNIT-ID',
      idOrganization: 'ORGANIZATION-ID',
      lat: 45.23,
      locName: 'LOCATION_NAME',
      locReason: 'GR',
      lon: 179.1,
      masterUnit: true,
      milGrid: '4QFJ12345678',
      milGridSys: 'UTM',
      msnPrimary: 'W6',
      msnPrimarySpecialty: 'QK',
      operStatus: 'OPR',
      origin: 'THIRD_PARTY_DATASOURCE',
      polSubdiv: 'IZ07',
      recStatus: 'A',
      referenceDoc: 'Provider Reference Documentation',
      resProd: 'RT',
      reviewDate: '2008-06-10',
      stylizedUnit: true,
      symCode: 'SOGPU----------',
      unitIdentifier: 'AZXAZ12345',
      utm: '19P4390691376966',
      wac: '0427',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.operatingunit.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'SOME_NAME',
      source: 'some.user',
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
    const response = await client.operatingunit.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'SOME_NAME',
      source: 'some.user',
      airDefArea: 'AL006',
      allegiance: 'OTHR',
      altAllegiance: 'HL',
      altCountryCode: 'IZ',
      altOperatingUnitId: '32100000000021',
      classRating: '1',
      condition: 'RDY',
      conditionAvail: 'A',
      coord: '340000000N0430000000E',
      coordDatum: 'WGS',
      coordDerivAcc: 12.345,
      countryCode: 'IQ',
      deployStatus: 'ND',
      description: 'Description of unit',
      divCat: '5',
      echelon: 'SHIP',
      echelonTier: '68',
      elevMsl: 123.45,
      elevMslConfLvl: 50,
      elevMslDerivAcc: 12.34,
      eval: 7,
      flagFlown: 'IZ',
      fleetId: 'A',
      force: 'NV',
      forceName: 'FORCE-NAME',
      fpa: 'EOB',
      functRole: 'MIL',
      geoidalMslSep: 12.34,
      idContact: 'CONTACT-ID',
      ident: 'FRIEND',
      idLocation: 'LOCATION-ID',
      idOperatingUnit: 'OPERATINGUNIT-ID',
      idOrganization: 'ORGANIZATION-ID',
      lat: 45.23,
      locName: 'LOCATION_NAME',
      locReason: 'GR',
      lon: 179.1,
      masterUnit: true,
      milGrid: '4QFJ12345678',
      milGridSys: 'UTM',
      msnPrimary: 'W6',
      msnPrimarySpecialty: 'QK',
      operStatus: 'OPR',
      origin: 'THIRD_PARTY_DATASOURCE',
      polSubdiv: 'IZ07',
      recStatus: 'A',
      referenceDoc: 'Provider Reference Documentation',
      resProd: 'RT',
      reviewDate: '2008-06-10',
      stylizedUnit: true,
      symCode: 'SOGPU----------',
      unitIdentifier: 'AZXAZ12345',
      utm: '19P4390691376966',
      wac: '0427',
    });
  });

  test('list', async () => {
    const responsePromise = client.operatingunit.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.operatingunit.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.operatingunit.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.operatingunit.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryhelp', async () => {
    const responsePromise = client.operatingunit.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.operatingunit.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.operatingunit.tuple({ columns: 'columns' });
  });
});
