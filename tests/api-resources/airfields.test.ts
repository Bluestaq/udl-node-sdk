// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfields', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airfields.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
      source: 'source',
      type: 'type',
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
    const response = await client.airfields.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
      source: 'source',
      type: 'type',
      id: 'id',
      altAirfieldId: 'altAirfieldId',
      city: 'city',
      countryCode: 'countryCode',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      elevFt: 0,
      elevM: 0,
      faa: 'faa',
      geoloc: 'geoloc',
      gmtOffset: 'gmtOffset',
      hostNatCode: 'hostNatCode',
      iata: 'iata',
      icao: 'icao',
      idSite: 'idSite',
      infoURL: 'infoURL',
      lat: 0,
      lon: 0,
      magDec: 0,
      maxRunwayLength: 0,
      miscCodes: 'miscCodes',
      origin: 'origin',
      origNetwork: 'origNetwork',
      regionName: 'regionName',
      runways: 0,
      sourceDL: 'sourceDL',
      state: 'state',
      suitabilityCodes: 'suitabilityCodes',
      wacINNR: 'wacINNR',
      zarId: 'zarId',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.airfields.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.airfields.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.airfields.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
      source: 'source',
      type: 'type',
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
    const response = await client.airfields.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
      source: 'source',
      type: 'type',
      body_id: 'id',
      altAirfieldId: 'altAirfieldId',
      city: 'city',
      countryCode: 'countryCode',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      elevFt: 0,
      elevM: 0,
      faa: 'faa',
      geoloc: 'geoloc',
      gmtOffset: 'gmtOffset',
      hostNatCode: 'hostNatCode',
      iata: 'iata',
      icao: 'icao',
      idSite: 'idSite',
      infoURL: 'infoURL',
      lat: 0,
      lon: 0,
      magDec: 0,
      maxRunwayLength: 0,
      miscCodes: 'miscCodes',
      origin: 'origin',
      origNetwork: 'origNetwork',
      regionName: 'regionName',
      runways: 0,
      sourceDL: 'sourceDL',
      state: 'state',
      suitabilityCodes: 'suitabilityCodes',
      wacINNR: 'wacINNR',
      zarId: 'zarId',
    });
  });

  test('list', async () => {
    const responsePromise = client.airfields.list();
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
    await expect(client.airfields.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.airfields.count();
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
    await expect(client.airfields.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.airfields.queryhelp();
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
    await expect(client.airfields.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.airfields.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.airfields.tuple({ columns: 'columns' });
  });
});
