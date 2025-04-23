// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource launchvehicledetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.launchvehicledetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idLaunchVehicle: 'LAUNCHVEHICLE-ID',
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
    const response = await client.launchvehicledetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idLaunchVehicle: 'LAUNCHVEHICLE-ID',
      source: 'Bluestaq',
      id: 'LAUNCHVEHICLEDETAILS-ID',
      attitudeAccuracy: 10.23,
      category: 'Example-category',
      deploymentRotationRate: 10.23,
      diameter: 10.23,
      estLaunchPrice: 10.23,
      estLaunchPriceTypical: 10.23,
      fairingExternalDiameter: 10.23,
      fairingInternalDiameter: 10.23,
      fairingLength: 10.23,
      fairingMass: 10.23,
      fairingMaterial: 'Example-fairing-material',
      fairingName: 'Example-fairing-name',
      fairingNotes: 'Example notes',
      family: 'Example-family',
      geoPayloadMass: 10.23,
      gtoInj3SigAccuracyApogeeMargin: 10.23,
      gtoInj3SigAccuracyApogeeTarget: 10.23,
      gtoInj3SigAccuracyInclinationMargin: 10.23,
      gtoInj3SigAccuracyInclinationTarget: 10.23,
      gtoInj3SigAccuracyPerigeeMargin: 10.23,
      gtoInj3SigAccuracyPerigeeTarget: 10.23,
      gtoPayloadMass: 10.23,
      launchMass: 10.23,
      launchPrefix: 'AX011',
      length: 10.23,
      leoPayloadMass: 10.23,
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      maxAccelLoad: 10.23,
      maxAcousticLevel: 10.23,
      maxAcousticLevelRange: 10.23,
      maxFairingPressureChange: 10.23,
      maxFlightShockForce: 10.23,
      maxFlightShockFreq: 10.23,
      maxPayloadFreqLat: 10.23,
      maxPayloadFreqLon: 10.23,
      minorVariant: 'Example-minor-variant',
      notes: 'Example notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      oxidizer: 'Bromine',
      payloadNotes: 'Example notes',
      payloadSeparationRate: 10.23,
      propellant: 'Nitrogen',
      soundPressureLevel: 10.23,
      sourceURL: 'Example URL',
      ssoPayloadMass: 10.23,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      variant: 'Example-variant',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.launchvehicledetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idLaunchVehicle: 'LAUNCHVEHICLE-ID',
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
    const response = await client.launchvehicledetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idLaunchVehicle: 'LAUNCHVEHICLE-ID',
      source: 'Bluestaq',
      body_id: 'LAUNCHVEHICLEDETAILS-ID',
      attitudeAccuracy: 10.23,
      category: 'Example-category',
      deploymentRotationRate: 10.23,
      diameter: 10.23,
      estLaunchPrice: 10.23,
      estLaunchPriceTypical: 10.23,
      fairingExternalDiameter: 10.23,
      fairingInternalDiameter: 10.23,
      fairingLength: 10.23,
      fairingMass: 10.23,
      fairingMaterial: 'Example-fairing-material',
      fairingName: 'Example-fairing-name',
      fairingNotes: 'Example notes',
      family: 'Example-family',
      geoPayloadMass: 10.23,
      gtoInj3SigAccuracyApogeeMargin: 10.23,
      gtoInj3SigAccuracyApogeeTarget: 10.23,
      gtoInj3SigAccuracyInclinationMargin: 10.23,
      gtoInj3SigAccuracyInclinationTarget: 10.23,
      gtoInj3SigAccuracyPerigeeMargin: 10.23,
      gtoInj3SigAccuracyPerigeeTarget: 10.23,
      gtoPayloadMass: 10.23,
      launchMass: 10.23,
      launchPrefix: 'AX011',
      length: 10.23,
      leoPayloadMass: 10.23,
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      maxAccelLoad: 10.23,
      maxAcousticLevel: 10.23,
      maxAcousticLevelRange: 10.23,
      maxFairingPressureChange: 10.23,
      maxFlightShockForce: 10.23,
      maxFlightShockFreq: 10.23,
      maxPayloadFreqLat: 10.23,
      maxPayloadFreqLon: 10.23,
      minorVariant: 'Example-minor-variant',
      notes: 'Example notes',
      origin: 'THIRD_PARTY_DATASOURCE',
      oxidizer: 'Bromine',
      payloadNotes: 'Example notes',
      payloadSeparationRate: 10.23,
      propellant: 'Nitrogen',
      soundPressureLevel: 10.23,
      sourceURL: 'Example URL',
      ssoPayloadMass: 10.23,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      variant: 'Example-variant',
    });
  });

  test('list', async () => {
    const responsePromise = client.launchvehicledetails.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.launchvehicledetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.launchvehicledetails.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
