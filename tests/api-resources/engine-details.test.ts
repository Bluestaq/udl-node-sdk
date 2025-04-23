// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource engineDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.engineDetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEngine: 'ENGINE-ID',
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
    const response = await client.engineDetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEngine: 'ENGINE-ID',
      source: 'Bluestaq',
      id: 'ENGINEDETAILS-ID',
      burnTime: 1.1,
      chamberPressure: 1.1,
      characteristicType: 'Electric',
      cycleType: 'Pressure Fed',
      family: 'ENGINE_TYPE1',
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      maxFirings: 5,
      notes: 'Example notes',
      nozzleExpansionRatio: 1.1,
      origin: 'THIRD_PARTY_DATASOURCE',
      oxidizer: 'Liquid Oxygen',
      propellant: 'Liquid',
      seaLevelThrust: 1.1,
      specificImpulse: 1.1,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      vacuumThrust: 1.1,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.engineDetails.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.engineDetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEngine: 'ENGINE-ID',
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
    const response = await client.engineDetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idEngine: 'ENGINE-ID',
      source: 'Bluestaq',
      body_id: 'ENGINEDETAILS-ID',
      burnTime: 1.1,
      chamberPressure: 1.1,
      characteristicType: 'Electric',
      cycleType: 'Pressure Fed',
      family: 'ENGINE_TYPE1',
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      maxFirings: 5,
      notes: 'Example notes',
      nozzleExpansionRatio: 1.1,
      origin: 'THIRD_PARTY_DATASOURCE',
      oxidizer: 'Liquid Oxygen',
      propellant: 'Liquid',
      seaLevelThrust: 1.1,
      specificImpulse: 1.1,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      vacuumThrust: 1.1,
    });
  });

  test('delete', async () => {
    const responsePromise = client.engineDetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
