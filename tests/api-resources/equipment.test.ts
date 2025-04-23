// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource equipment', () => {
  test('create: only required params', async () => {
    const responsePromise = client.equipment.create({
      classificationMarking: 'U',
      countryCode: 'IQ',
      dataMode: 'TEST',
      lat: 39.019242,
      lon: -104.251659,
      source: 'Bluestaq',
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
    const response = await client.equipment.create({
      classificationMarking: 'U',
      countryCode: 'IQ',
      dataMode: 'TEST',
      lat: 39.019242,
      lon: -104.251659,
      source: 'Bluestaq',
      id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      airDefArea: 'AL006',
      allegiance: 'OTHR',
      altAllegiance: 'HL',
      altCountryCode: 'IZ',
      altEqpId: 'ORIG-EQP-ID',
      classRating: '1',
      condition: 'RDY',
      conditionAvail: 'A',
      coord: '340000000N0430000000E',
      coordDatum: 'WGS',
      coordDerivAcc: 12.345,
      elevMsl: 123.45,
      elevMslConfLvl: 50,
      elevMslDerivAcc: 12.34,
      eqpCode: 'X12345',
      eqpIdNum: '001',
      eval: 7,
      fpa: 'NOB',
      function: 'OCC',
      functPrimary: 'JG',
      geoidalMslSep: 12.34,
      ident: 'FRIEND',
      idOperatingUnit: 'UNIT-ID',
      idParentEquipment: 'PARENT-EQUIPMENT-ID',
      idSite: 'SITE-ID',
      locReason: 'GR',
      milGrid: '4QFJ12345678',
      milGridSys: 'UTM',
      nomen: 'AMPHIBIOUS WARFARE SHIP',
      operAreaPrimary: 'Territorial Sea',
      operStatus: 'OPR',
      origin: 'THIRD_PARTY_DATASOURCE',
      polSubdiv: 'IZ07',
      qtyOH: 7,
      recStatus: 'A',
      referenceDoc: 'Provider Reference Documentation',
      resProd: 'RT',
      reviewDate: '2008-06-10',
      seqNum: 5,
      srcIds: ['SRC_ID_1'],
      srcTyps: ['AIRCRAFT'],
      symCode: 'SOGPU----------',
      utm: '19P4390691376966',
      wac: '0427',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.equipment.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.equipment.update('id', {
      classificationMarking: 'U',
      countryCode: 'IQ',
      dataMode: 'TEST',
      lat: 39.019242,
      lon: -104.251659,
      source: 'Bluestaq',
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
    const response = await client.equipment.update('id', {
      classificationMarking: 'U',
      countryCode: 'IQ',
      dataMode: 'TEST',
      lat: 39.019242,
      lon: -104.251659,
      source: 'Bluestaq',
      body_id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      airDefArea: 'AL006',
      allegiance: 'OTHR',
      altAllegiance: 'HL',
      altCountryCode: 'IZ',
      altEqpId: 'ORIG-EQP-ID',
      classRating: '1',
      condition: 'RDY',
      conditionAvail: 'A',
      coord: '340000000N0430000000E',
      coordDatum: 'WGS',
      coordDerivAcc: 12.345,
      elevMsl: 123.45,
      elevMslConfLvl: 50,
      elevMslDerivAcc: 12.34,
      eqpCode: 'X12345',
      eqpIdNum: '001',
      eval: 7,
      fpa: 'NOB',
      function: 'OCC',
      functPrimary: 'JG',
      geoidalMslSep: 12.34,
      ident: 'FRIEND',
      idOperatingUnit: 'UNIT-ID',
      idParentEquipment: 'PARENT-EQUIPMENT-ID',
      idSite: 'SITE-ID',
      locReason: 'GR',
      milGrid: '4QFJ12345678',
      milGridSys: 'UTM',
      nomen: 'AMPHIBIOUS WARFARE SHIP',
      operAreaPrimary: 'Territorial Sea',
      operStatus: 'OPR',
      origin: 'THIRD_PARTY_DATASOURCE',
      polSubdiv: 'IZ07',
      qtyOH: 7,
      recStatus: 'A',
      referenceDoc: 'Provider Reference Documentation',
      resProd: 'RT',
      reviewDate: '2008-06-10',
      seqNum: 5,
      srcIds: ['SRC_ID_1'],
      srcTyps: ['AIRCRAFT'],
      symCode: 'SOGPU----------',
      utm: '19P4390691376966',
      wac: '0427',
    });
  });

  test('list', async () => {
    const responsePromise = client.equipment.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.equipment.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.equipment.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.equipment.createBulk({
      body: [
        {
          classificationMarking: 'U',
          countryCode: 'IQ',
          dataMode: 'TEST',
          lat: 39.019242,
          lon: -104.251659,
          source: 'Bluestaq',
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
    const response = await client.equipment.createBulk({
      body: [
        {
          classificationMarking: 'U',
          countryCode: 'IQ',
          dataMode: 'TEST',
          lat: 39.019242,
          lon: -104.251659,
          source: 'Bluestaq',
          id: '0167f577-e06c-358e-85aa-0a07a730bdd0',
          airDefArea: 'AL006',
          allegiance: 'OTHR',
          altAllegiance: 'HL',
          altCountryCode: 'IZ',
          altEqpId: 'ORIG-EQP-ID',
          classRating: '1',
          condition: 'RDY',
          conditionAvail: 'A',
          coord: '340000000N0430000000E',
          coordDatum: 'WGS',
          coordDerivAcc: 12.345,
          elevMsl: 123.45,
          elevMslConfLvl: 50,
          elevMslDerivAcc: 12.34,
          eqpCode: 'X12345',
          eqpIdNum: '001',
          eval: 7,
          fpa: 'NOB',
          function: 'OCC',
          functPrimary: 'JG',
          geoidalMslSep: 12.34,
          ident: 'FRIEND',
          idOperatingUnit: 'UNIT-ID',
          idParentEquipment: 'PARENT-EQUIPMENT-ID',
          idSite: 'SITE-ID',
          locReason: 'GR',
          milGrid: '4QFJ12345678',
          milGridSys: 'UTM',
          nomen: 'AMPHIBIOUS WARFARE SHIP',
          operAreaPrimary: 'Territorial Sea',
          operStatus: 'OPR',
          origin: 'THIRD_PARTY_DATASOURCE',
          polSubdiv: 'IZ07',
          qtyOH: 7,
          recStatus: 'A',
          referenceDoc: 'Provider Reference Documentation',
          resProd: 'RT',
          reviewDate: '2008-06-10',
          seqNum: 5,
          srcIds: ['SRC_ID_1'],
          srcTyps: ['AIRCRAFT'],
          symCode: 'SOGPU----------',
          utm: '19P4390691376966',
          wac: '0427',
        },
      ],
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.equipment.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.equipment.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.equipment.tuple({ columns: 'columns' });
  });
});
