// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource onorbitdetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbitdetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOnOrbit: 'REF-ONORBIT-ID',
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
    const response = await client.onorbitdetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOnOrbit: 'REF-ONORBIT-ID',
      source: 'Bluestaq',
      id: 'ONORBITDETAILS-ID',
      additionalMass: 10.23,
      adeptRadius: 10.23,
      bolDeltaV: 1000.1,
      bolFuelMass: 10.23,
      busCrossSection: 10.23,
      busType: 'A2100',
      colaRadius: 10.23,
      crossSection: 10.23,
      currentMass: 500,
      deltaVUnc: 50.1,
      depEstMasses: [20, 21],
      depMassUncs: [10, 5],
      depNames: ['GOES-18A', 'GOES-18B'],
      driftRate: 1.23,
      dryMass: 10.23,
      estDeltaVDuration: 10.23,
      fuelRemaining: 10.23,
      geoSlot: 90.23,
      lastObSource: 'THIRD_PARTY_DATASOURCE',
      lastObTime: '2021-01-01T01:01:01.123456Z',
      launchMass: 10.23,
      launchMassMax: 15.23,
      launchMassMin: 5.23,
      maneuverable: false,
      maxDeltaV: 10.23,
      maxRadius: 10.23,
      missionTypes: ['Weather', 'Space Weather'],
      numDeployable: 2,
      numMission: 2,
      origin: 'THIRD_PARTY_DATASOURCE',
      rcs: 10.23,
      rcsMax: 15.23,
      rcsMean: 10.23,
      rcsMin: 5.23,
      refSource: 'Wikipedia',
      solarArrayArea: 10.23,
      totalMassUnc: 50.1,
      vismag: 10.23,
      vismagMax: 15.23,
      vismagMean: 10.23,
      vismagMin: 5.23,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.onorbitdetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOnOrbit: 'REF-ONORBIT-ID',
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
    const response = await client.onorbitdetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idOnOrbit: 'REF-ONORBIT-ID',
      source: 'Bluestaq',
      body_id: 'ONORBITDETAILS-ID',
      additionalMass: 10.23,
      adeptRadius: 10.23,
      bolDeltaV: 1000.1,
      bolFuelMass: 10.23,
      busCrossSection: 10.23,
      busType: 'A2100',
      colaRadius: 10.23,
      crossSection: 10.23,
      currentMass: 500,
      deltaVUnc: 50.1,
      depEstMasses: [20, 21],
      depMassUncs: [10, 5],
      depNames: ['GOES-18A', 'GOES-18B'],
      driftRate: 1.23,
      dryMass: 10.23,
      estDeltaVDuration: 10.23,
      fuelRemaining: 10.23,
      geoSlot: 90.23,
      lastObSource: 'THIRD_PARTY_DATASOURCE',
      lastObTime: '2021-01-01T01:01:01.123456Z',
      launchMass: 10.23,
      launchMassMax: 15.23,
      launchMassMin: 5.23,
      maneuverable: false,
      maxDeltaV: 10.23,
      maxRadius: 10.23,
      missionTypes: ['Weather', 'Space Weather'],
      numDeployable: 2,
      numMission: 2,
      origin: 'THIRD_PARTY_DATASOURCE',
      rcs: 10.23,
      rcsMax: 15.23,
      rcsMean: 10.23,
      rcsMin: 5.23,
      refSource: 'Wikipedia',
      solarArrayArea: 10.23,
      totalMassUnc: 50.1,
      vismag: 10.23,
      vismagMax: 15.23,
      vismagMean: 10.23,
      vismagMin: 5.23,
    });
  });

  test('list', async () => {
    const responsePromise = client.onorbitdetails.list();
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
      client.onorbitdetails.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.onorbitdetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.onorbitdetails.get('id');
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
      client.onorbitdetails.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });
});
