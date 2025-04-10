// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rfemitterdetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rfemitterdetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idRFEmitter: 'RFEMITTER-ID',
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
    const response = await client.rfemitterdetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idRFEmitter: 'RFEMITTER-ID',
      source: 'Bluestaq',
      id: 'RFEMITTERDETAILS-ID',
      alternateFacilityName: 'ALTERNATE_FACILITY_NAME',
      altName: 'ALTERNATE_NAME',
      antennaDiameter: 20.23,
      antennaSize: [1.1, 2.2],
      barrageNoiseBandwidth: 5.23,
      description: 'DESCRIPTION',
      designator: 'DESIGNATOR',
      dopplerNoise: 10.23,
      drfmInstantaneousBandwidth: 20.23,
      family: 'FAMILY',
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      notes: 'NOTES',
      numBits: 256,
      numChannels: 10,
      origin: 'THIRD_PARTY_DATASOURCE',
      productionFacilityLocationId: 'PRODUCTIONFACILITYLOCATION-ID',
      productionFacilityName: 'PRODUCTION_FACILITY',
      receiverBandwidth: 15.23,
      receiverSensitivity: 10.23,
      receiverType: 'RECEIVER_TYPE',
      secondaryNotes: 'MORE_NOTES',
      systemSensitivityEnd: 150.23,
      systemSensitivityStart: 50.23,
      transmitPower: 100.23,
      transmitterBandwidth: 0.125,
      transmitterFrequency: 105.9,
      urls: ['TAG1', 'TAG2'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.rfemitterdetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idRFEmitter: 'RFEMITTER-ID',
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
    const response = await client.rfemitterdetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idRFEmitter: 'RFEMITTER-ID',
      source: 'Bluestaq',
      body_id: 'RFEMITTERDETAILS-ID',
      alternateFacilityName: 'ALTERNATE_FACILITY_NAME',
      altName: 'ALTERNATE_NAME',
      antennaDiameter: 20.23,
      antennaSize: [1.1, 2.2],
      barrageNoiseBandwidth: 5.23,
      description: 'DESCRIPTION',
      designator: 'DESIGNATOR',
      dopplerNoise: 10.23,
      drfmInstantaneousBandwidth: 20.23,
      family: 'FAMILY',
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      notes: 'NOTES',
      numBits: 256,
      numChannels: 10,
      origin: 'THIRD_PARTY_DATASOURCE',
      productionFacilityLocationId: 'PRODUCTIONFACILITYLOCATION-ID',
      productionFacilityName: 'PRODUCTION_FACILITY',
      receiverBandwidth: 15.23,
      receiverSensitivity: 10.23,
      receiverType: 'RECEIVER_TYPE',
      secondaryNotes: 'MORE_NOTES',
      systemSensitivityEnd: 150.23,
      systemSensitivityStart: 50.23,
      transmitPower: 100.23,
      transmitterBandwidth: 0.125,
      transmitterFrequency: 105.9,
      urls: ['TAG1', 'TAG2'],
    });
  });

  test('list', async () => {
    const responsePromise = client.rfemitterdetails.list();
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
    await expect(client.rfemitterdetails.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.rfemitterdetails.delete('id');
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
    await expect(client.rfemitterdetails.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.rfemitterdetails.count();
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
    await expect(client.rfemitterdetails.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.rfemitterdetails.get('id');
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
    await expect(client.rfemitterdetails.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.rfemitterdetails.queryhelp();
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
    await expect(client.rfemitterdetails.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.rfemitterdetails.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.rfemitterdetails.tuple({ columns: 'columns' });
  });
});
