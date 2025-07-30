// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource buses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.buses.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Example name',
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
    const response = await client.buses.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Example name',
      source: 'Bluestaq',
      id: 'BUS-ID',
      aocsNotes: 'Example notes',
      avgDryMass: 2879.1,
      avgPayloadMass: 10.1,
      avgPayloadPower: 10.1,
      avgSpacecraftPower: 10.1,
      avgWetMass: 5246.1,
      bodyDimensionX: 10.1,
      bodyDimensionY: 10.1,
      bodyDimensionZ: 10.1,
      busKitDesignerOrgId: 'BUSKITDESIGNERORG-ID',
      countryCode: 'US',
      description: 'Dedicated small spacecraft bus.',
      entity: {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'Example name',
        source: 'Bluestaq',
        type: 'ONORBIT',
        countryCode: 'US',
        idEntity: 'ENTITY-ID',
        idLocation: 'LOCATION-ID',
        idOnOrbit: 'ONORBIT-ID',
        idOperatingUnit: 'OPERATINGUNIT-ID',
        location: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          name: 'Example location',
          source: 'Bluestaq',
          altitude: 10.23,
          countryCode: 'US',
          idLocation: 'LOCATION-ID',
          lat: 45.23,
          lon: 179.1,
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        onOrbit: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          satNo: 1,
          source: 'Bluestaq',
          altName: 'Alternate Name',
          category: 'Lunar',
          commonName: 'Example common name',
          constellation: 'Big Dipper',
          countryCode: 'US',
          decayDate: '2018-01-01T16:00:00.123Z',
          idOnOrbit: 'ONORBIT-ID',
          intlDes: '2021123ABC',
          launchDate: '2018-01-01',
          launchSiteId: 'LAUNCHSITE-ID',
          lifetimeYears: 10,
          missionNumber: 'Expedition 1',
          objectType: 'PAYLOAD',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        origin: 'THIRD_PARTY_DATASOURCE',
        ownerType: 'Commercial',
        taskable: false,
        urls: ['URL1', 'URL2'],
      },
      generic: false,
      idEntity: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      launchEnvelopeDimensionX: 10.1,
      launchEnvelopeDimensionY: 10.1,
      launchEnvelopeDimensionZ: 10.1,
      mainComputerManufacturerOrgId: 'MAINCOMPUTERMANUFACTURERORG-ID',
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      massCategory: 'Nanosatellite',
      maxBOLPowerLower: 10.1,
      maxBOLPowerUpper: 10.1,
      maxBOLStationMass: 10.1,
      maxDryMass: 2900.1,
      maxEOLPowerLower: 10.1,
      maxEOLPowerUpper: 10.1,
      maxLaunchMassLower: 10.1,
      maxLaunchMassUpper: 10.1,
      maxPayloadMass: 10.1,
      maxPayloadPower: 10.1,
      maxSpacecraftPower: 10.1,
      maxWetMass: 5300,
      medianDryMass: 2950.1,
      medianWetMass: 5260.1,
      minDryMass: 2858.1,
      minWetMass: 5192.1,
      numOrbitType: 3,
      oapPayloadPower: 10.1,
      oapSpacecraftPower: 10.1,
      orbitTypes: ['LEO', 'HEO', 'GEO'],
      origin: 'THIRD_PARTY_DATASOURCE',
      payloadDimensionX: 1.1,
      payloadDimensionY: 1.1,
      payloadDimensionZ: 1.1,
      payloadVolume: 1.1,
      powerCategory: 'low power',
      telemetryTrackingManufacturerOrgId: 'TELEMETRYTRACKINGMANUFACTURERORG-ID',
      type: 'Example type',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.buses.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.buses.retrieve('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.buses.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Example name',
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
    const response = await client.buses.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      name: 'Example name',
      source: 'Bluestaq',
      body_id: 'BUS-ID',
      aocsNotes: 'Example notes',
      avgDryMass: 2879.1,
      avgPayloadMass: 10.1,
      avgPayloadPower: 10.1,
      avgSpacecraftPower: 10.1,
      avgWetMass: 5246.1,
      bodyDimensionX: 10.1,
      bodyDimensionY: 10.1,
      bodyDimensionZ: 10.1,
      busKitDesignerOrgId: 'BUSKITDESIGNERORG-ID',
      countryCode: 'US',
      description: 'Dedicated small spacecraft bus.',
      entity: {
        classificationMarking: 'U',
        dataMode: 'TEST',
        name: 'Example name',
        source: 'Bluestaq',
        type: 'ONORBIT',
        countryCode: 'US',
        idEntity: 'ENTITY-ID',
        idLocation: 'LOCATION-ID',
        idOnOrbit: 'ONORBIT-ID',
        idOperatingUnit: 'OPERATINGUNIT-ID',
        location: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          name: 'Example location',
          source: 'Bluestaq',
          altitude: 10.23,
          countryCode: 'US',
          idLocation: 'LOCATION-ID',
          lat: 45.23,
          lon: 179.1,
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        onOrbit: {
          classificationMarking: 'U',
          dataMode: 'TEST',
          satNo: 1,
          source: 'Bluestaq',
          altName: 'Alternate Name',
          category: 'Lunar',
          commonName: 'Example common name',
          constellation: 'Big Dipper',
          countryCode: 'US',
          decayDate: '2018-01-01T16:00:00.123Z',
          idOnOrbit: 'ONORBIT-ID',
          intlDes: '2021123ABC',
          launchDate: '2018-01-01',
          launchSiteId: 'LAUNCHSITE-ID',
          lifetimeYears: 10,
          missionNumber: 'Expedition 1',
          objectType: 'PAYLOAD',
          origin: 'THIRD_PARTY_DATASOURCE',
        },
        origin: 'THIRD_PARTY_DATASOURCE',
        ownerType: 'Commercial',
        taskable: false,
        urls: ['URL1', 'URL2'],
      },
      generic: false,
      idEntity: '0167f577-e06c-358e-85aa-0a07a730bdd0',
      launchEnvelopeDimensionX: 10.1,
      launchEnvelopeDimensionY: 10.1,
      launchEnvelopeDimensionZ: 10.1,
      mainComputerManufacturerOrgId: 'MAINCOMPUTERMANUFACTURERORG-ID',
      manufacturerOrgId: 'MANUFACTURERORG-ID',
      massCategory: 'Nanosatellite',
      maxBOLPowerLower: 10.1,
      maxBOLPowerUpper: 10.1,
      maxBOLStationMass: 10.1,
      maxDryMass: 2900.1,
      maxEOLPowerLower: 10.1,
      maxEOLPowerUpper: 10.1,
      maxLaunchMassLower: 10.1,
      maxLaunchMassUpper: 10.1,
      maxPayloadMass: 10.1,
      maxPayloadPower: 10.1,
      maxSpacecraftPower: 10.1,
      maxWetMass: 5300,
      medianDryMass: 2950.1,
      medianWetMass: 5260.1,
      minDryMass: 2858.1,
      minWetMass: 5192.1,
      numOrbitType: 3,
      oapPayloadPower: 10.1,
      oapSpacecraftPower: 10.1,
      orbitTypes: ['LEO', 'HEO', 'GEO'],
      origin: 'THIRD_PARTY_DATASOURCE',
      payloadDimensionX: 1.1,
      payloadDimensionY: 1.1,
      payloadDimensionZ: 1.1,
      payloadVolume: 1.1,
      powerCategory: 'low power',
      telemetryTrackingManufacturerOrgId: 'TELEMETRYTRACKINGMANUFACTURERORG-ID',
      type: 'Example type',
    });
  });

  test('list', async () => {
    const responsePromise = client.buses.list();
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
      client.buses.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.buses.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.buses.count();
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
      client.buses.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryHelp', async () => {
    const responsePromise = client.buses.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.buses.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.buses.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });
});
