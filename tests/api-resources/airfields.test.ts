// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airfields', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airfields.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      name: 'USAF Academy AFLD',
      source: 'Bluestaq',
      type: 'Commercial',
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
      classificationMarking: 'U',
      dataMode: 'REAL',
      name: 'USAF Academy AFLD',
      source: 'Bluestaq',
      type: 'Commercial',
      id: '3f28f60b-3a50-2aef-ac88-8e9d0e39912b',
      altAirfieldId: '45301',
      city: 'Colorado Springs',
      countryCode: 'US',
      elevFt: 33.562,
      elevM: 10.29,
      faa: 'FAA1',
      geoloc: 'XLSX',
      gmtOffset: '-4:30',
      hostNatCode: 'ZPU',
      iata: 'AAA',
      icao: 'KCOS',
      idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
      infoURL: 'URL Link to the Airfield',
      lat: 45.23,
      lon: 179.1,
      magDec: 7.35,
      maxRunwayLength: 1000,
      miscCodes: 'AMZ',
      origin: 'THIRD_PARTY_DATASOURCE',
      regionName: 'North America',
      runways: 5,
      state: 'Colorado',
      suitabilityCodes: 'ABCDEF',
      wacINNR: '0409-00039',
      zarId: '231',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.airfields.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.airfields.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.airfields.update({
      path_id: 'id',
      classificationMarking: 'U',
      dataMode: 'REAL',
      name: 'USAF Academy AFLD',
      source: 'Bluestaq',
      type: 'Commercial',
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
      classificationMarking: 'U',
      dataMode: 'REAL',
      name: 'USAF Academy AFLD',
      source: 'Bluestaq',
      type: 'Commercial',
      body_id: '3f28f60b-3a50-2aef-ac88-8e9d0e39912b',
      altAirfieldId: '45301',
      city: 'Colorado Springs',
      countryCode: 'US',
      elevFt: 33.562,
      elevM: 10.29,
      faa: 'FAA1',
      geoloc: 'XLSX',
      gmtOffset: '-4:30',
      hostNatCode: 'ZPU',
      iata: 'AAA',
      icao: 'KCOS',
      idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
      infoURL: 'URL Link to the Airfield',
      lat: 45.23,
      lon: 179.1,
      magDec: 7.35,
      maxRunwayLength: 1000,
      miscCodes: 'AMZ',
      origin: 'THIRD_PARTY_DATASOURCE',
      regionName: 'North America',
      runways: 5,
      state: 'Colorado',
      suitabilityCodes: 'ABCDEF',
      wacINNR: '0409-00039',
      zarId: '231',
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
