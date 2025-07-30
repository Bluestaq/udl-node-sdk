// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rfEmitterDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rfEmitterDetails.create({
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
    const response = await client.rfEmitterDetails.create({
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
    const responsePromise = client.rfEmitterDetails.update('id', {
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
    const response = await client.rfEmitterDetails.update('id', {
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
    const responsePromise = client.rfEmitterDetails.list();
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
      client.rfEmitterDetails.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.rfEmitterDetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.rfEmitterDetails.count();
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
      client.rfEmitterDetails.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.rfEmitterDetails.get('id');
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
      client.rfEmitterDetails.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.rfEmitterDetails.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.rfEmitterDetails.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.rfEmitterDetails.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
