// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource antennaDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbit.antennaDetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAntenna: 'ANTENNA-ID',
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
    const response = await client.onorbit.antennaDetails.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAntenna: 'ANTENNA-ID',
      source: 'Bluestaq',
      id: 'ANTENNADETAILS-ID',
      beamForming: false,
      beamwidth: 14.1,
      description: 'Description of antenna A',
      diameter: 0.01,
      endFrequency: 3.3,
      gain: 20.1,
      gainTolerance: 5.1,
      manufacturerOrgId: 'MANUFACTUREORG-ID',
      mode: 'TX',
      origin: 'THIRD_PARTY_DATASOURCE',
      polarization: 45.1,
      position: 'Top',
      size: [0.03, 0.05],
      startFrequency: 2.1,
      steerable: false,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      type: 'Reflector',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.onorbit.antennaDetails.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.onorbit.antennaDetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAntenna: 'ANTENNA-ID',
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
    const response = await client.onorbit.antennaDetails.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idAntenna: 'ANTENNA-ID',
      source: 'Bluestaq',
      body_id: 'ANTENNADETAILS-ID',
      beamForming: false,
      beamwidth: 14.1,
      description: 'Description of antenna A',
      diameter: 0.01,
      endFrequency: 3.3,
      gain: 20.1,
      gainTolerance: 5.1,
      manufacturerOrgId: 'MANUFACTUREORG-ID',
      mode: 'TX',
      origin: 'THIRD_PARTY_DATASOURCE',
      polarization: 45.1,
      position: 'Top',
      size: [0.03, 0.05],
      startFrequency: 2.1,
      steerable: false,
      tags: ['PROVIDER_TAG1', 'PROVIDER_TAG2'],
      type: 'Reflector',
    });
  });

  test('list', async () => {
    const responsePromise = client.onorbit.antennaDetails.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.onorbit.antennaDetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
