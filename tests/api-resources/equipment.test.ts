// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource equipment', () => {
  test('create: only required params', async () => {
    const responsePromise = client.equipment.create({
      classificationMarking: 'classificationMarking',
      countryCode: 'countryCode',
      dataMode: 'dataMode',
      lat: 0,
      lon: 0,
      source: 'source',
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
      classificationMarking: 'classificationMarking',
      countryCode: 'countryCode',
      dataMode: 'dataMode',
      lat: 0,
      lon: 0,
      source: 'source',
      id: 'id',
      airDefArea: 'airDefArea',
      allegiance: 'allegiance',
      altAllegiance: 'altAllegiance',
      altCountryCode: 'altCountryCode',
      altEqpId: 'altEqpId',
      classRating: 'classRating',
      condition: 'condition',
      conditionAvail: 'conditionAvail',
      coord: 'coord',
      coordDatum: 'coordDatum',
      coordDerivAcc: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      elevMsl: 0,
      elevMslConfLvl: 0,
      elevMslDerivAcc: 0,
      eqpCode: 'eqpCode',
      eqpIdNum: 'eqpIdNum',
      eval: 0,
      fpa: 'fpa',
      function: 'function',
      functPrimary: 'functPrimary',
      geoidalMslSep: 0,
      ident: 'ident',
      idOperatingUnit: 'idOperatingUnit',
      idParentEquipment: 'idParentEquipment',
      idSite: 'idSite',
      locReason: 'locReason',
      milGrid: 'milGrid',
      milGridSys: 'milGridSys',
      nomen: 'nomen',
      operAreaPrimary: 'operAreaPrimary',
      operStatus: 'operStatus',
      origin: 'origin',
      polSubdiv: 'polSubdiv',
      qtyOH: 0,
      recStatus: 'recStatus',
      referenceDoc: 'referenceDoc',
      resProd: 'resProd',
      reviewDate: '2019-12-27',
      seqNum: 0,
      srcIds: ['string'],
      srcTyps: ['string'],
      symCode: 'symCode',
      utm: 'utm',
      wac: 'wac',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.equipment.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.equipment.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.equipment.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      countryCode: 'countryCode',
      dataMode: 'dataMode',
      lat: 0,
      lon: 0,
      source: 'source',
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
    const response = await client.equipment.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      countryCode: 'countryCode',
      dataMode: 'dataMode',
      lat: 0,
      lon: 0,
      source: 'source',
      body_id: 'id',
      airDefArea: 'airDefArea',
      allegiance: 'allegiance',
      altAllegiance: 'altAllegiance',
      altCountryCode: 'altCountryCode',
      altEqpId: 'altEqpId',
      classRating: 'classRating',
      condition: 'condition',
      conditionAvail: 'conditionAvail',
      coord: 'coord',
      coordDatum: 'coordDatum',
      coordDerivAcc: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      elevMsl: 0,
      elevMslConfLvl: 0,
      elevMslDerivAcc: 0,
      eqpCode: 'eqpCode',
      eqpIdNum: 'eqpIdNum',
      eval: 0,
      fpa: 'fpa',
      function: 'function',
      functPrimary: 'functPrimary',
      geoidalMslSep: 0,
      ident: 'ident',
      idOperatingUnit: 'idOperatingUnit',
      idParentEquipment: 'idParentEquipment',
      idSite: 'idSite',
      locReason: 'locReason',
      milGrid: 'milGrid',
      milGridSys: 'milGridSys',
      nomen: 'nomen',
      operAreaPrimary: 'operAreaPrimary',
      operStatus: 'operStatus',
      origin: 'origin',
      polSubdiv: 'polSubdiv',
      qtyOH: 0,
      recStatus: 'recStatus',
      referenceDoc: 'referenceDoc',
      resProd: 'resProd',
      reviewDate: '2019-12-27',
      seqNum: 0,
      srcIds: ['string'],
      srcTyps: ['string'],
      symCode: 'symCode',
      utm: 'utm',
      wac: 'wac',
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

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.equipment.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.equipment.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.equipment.delete({ path_id: 'id', body_id: 'id' });
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

  test('count: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.equipment.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.equipment.createBulk([
      {
        classificationMarking: 'classificationMarking',
        countryCode: 'countryCode',
        dataMode: 'dataMode',
        lat: 0,
        lon: 0,
        source: 'source',
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
    const response = await client.equipment.createBulk([
      {
        classificationMarking: 'classificationMarking',
        countryCode: 'countryCode',
        dataMode: 'dataMode',
        lat: 0,
        lon: 0,
        source: 'source',
        id: 'id',
        airDefArea: 'airDefArea',
        allegiance: 'allegiance',
        altAllegiance: 'altAllegiance',
        altCountryCode: 'altCountryCode',
        altEqpId: 'altEqpId',
        classRating: 'classRating',
        condition: 'condition',
        conditionAvail: 'conditionAvail',
        coord: 'coord',
        coordDatum: 'coordDatum',
        coordDerivAcc: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        elevMsl: 0,
        elevMslConfLvl: 0,
        elevMslDerivAcc: 0,
        eqpCode: 'eqpCode',
        eqpIdNum: 'eqpIdNum',
        eval: 0,
        fpa: 'fpa',
        function: 'function',
        functPrimary: 'functPrimary',
        geoidalMslSep: 0,
        ident: 'ident',
        idOperatingUnit: 'idOperatingUnit',
        idParentEquipment: 'idParentEquipment',
        idSite: 'idSite',
        locReason: 'locReason',
        milGrid: 'milGrid',
        milGridSys: 'milGridSys',
        nomen: 'nomen',
        operAreaPrimary: 'operAreaPrimary',
        operStatus: 'operStatus',
        origin: 'origin',
        polSubdiv: 'polSubdiv',
        qtyOH: 0,
        recStatus: 'recStatus',
        referenceDoc: 'referenceDoc',
        resProd: 'resProd',
        reviewDate: '2019-12-27',
        seqNum: 0,
        srcIds: ['string'],
        srcTyps: ['string'],
        symCode: 'symCode',
        utm: 'utm',
        wac: 'wac',
      },
    ]);
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

  test('queryHelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.equipment.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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
