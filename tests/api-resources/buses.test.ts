// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource buses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.buses.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
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
    const response = await client.buses.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
      source: 'source',
      id: 'id',
      aocsNotes: 'aocsNotes',
      avgDryMass: 0,
      avgPayloadMass: 0,
      avgPayloadPower: 0,
      avgSpacecraftPower: 0,
      avgWetMass: 0,
      bodyDimensionX: 0,
      bodyDimensionY: 0,
      bodyDimensionZ: 0,
      busKitDesignerOrgId: 'busKitDesignerOrgId',
      countryCode: 'countryCode',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      description: 'description',
      entity: {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        name: 'name',
        source: 'source',
        type: 'type',
        countryCode: 'countryCode',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        idEntity: 'idEntity',
        idLocation: 'idLocation',
        idOnOrbit: 'idOnOrbit',
        idOperatingUnit: 'idOperatingUnit',
        location: {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          name: 'name',
          source: 'source',
          altitude: 0,
          countryCode: 'countryCode',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBy: 'createdBy',
          idLocation: 'idLocation',
          lat: 0,
          lon: 0,
          origin: 'origin',
          origNetwork: 'origNetwork',
        },
        onOrbit: {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          satNo: 0,
          source: 'source',
          altName: 'altName',
          category: 'category',
          commonName: 'commonName',
          constellation: 'constellation',
          countryCode: 'countryCode',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBy: 'createdBy',
          decayDate: '2019-12-27T18:11:19.117Z',
          idOnOrbit: 'idOnOrbit',
          intlDes: 'intlDes',
          launchDate: '2019-12-27',
          launchSiteId: 'launchSiteId',
          lifetimeYears: 0,
          missionNumber: 'missionNumber',
          objectType: 'objectType',
          origin: 'origin',
          origNetwork: 'origNetwork',
        },
        origin: 'origin',
        origNetwork: 'origNetwork',
        ownerType: 'ownerType',
        taskable: true,
        urls: ['string'],
      },
      generic: true,
      idEntity: 'idEntity',
      launchEnvelopeDimensionX: 0,
      launchEnvelopeDimensionY: 0,
      launchEnvelopeDimensionZ: 0,
      mainComputerManufacturerOrgId: 'mainComputerManufacturerOrgId',
      manufacturerOrgId: 'manufacturerOrgId',
      massCategory: 'massCategory',
      maxBOLPowerLower: 0,
      maxBOLPowerUpper: 0,
      maxBOLStationMass: 0,
      maxDryMass: 0,
      maxEOLPowerLower: 0,
      maxEOLPowerUpper: 0,
      maxLaunchMassLower: 0,
      maxLaunchMassUpper: 0,
      maxPayloadMass: 0,
      maxPayloadPower: 0,
      maxSpacecraftPower: 0,
      maxWetMass: 0,
      medianDryMass: 0,
      medianWetMass: 0,
      minDryMass: 0,
      minWetMass: 0,
      numOrbitType: 0,
      oapPayloadPower: 0,
      oapSpacecraftPower: 0,
      orbitTypes: ['string'],
      origin: 'origin',
      origNetwork: 'origNetwork',
      payloadDimensionX: 0,
      payloadDimensionY: 0,
      payloadDimensionZ: 0,
      payloadVolume: 0,
      powerCategory: 'powerCategory',
      telemetryTrackingManufacturerOrgId: 'telemetryTrackingManufacturerOrgId',
      type: 'type',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.buses.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.buses.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.buses.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
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
    const response = await client.buses.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
      source: 'source',
      body_id: 'id',
      aocsNotes: 'aocsNotes',
      avgDryMass: 0,
      avgPayloadMass: 0,
      avgPayloadPower: 0,
      avgSpacecraftPower: 0,
      avgWetMass: 0,
      bodyDimensionX: 0,
      bodyDimensionY: 0,
      bodyDimensionZ: 0,
      busKitDesignerOrgId: 'busKitDesignerOrgId',
      countryCode: 'countryCode',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      description: 'description',
      entity: {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        name: 'name',
        source: 'source',
        type: 'type',
        countryCode: 'countryCode',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        idEntity: 'idEntity',
        idLocation: 'idLocation',
        idOnOrbit: 'idOnOrbit',
        idOperatingUnit: 'idOperatingUnit',
        location: {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          name: 'name',
          source: 'source',
          altitude: 0,
          countryCode: 'countryCode',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBy: 'createdBy',
          idLocation: 'idLocation',
          lat: 0,
          lon: 0,
          origin: 'origin',
          origNetwork: 'origNetwork',
        },
        onOrbit: {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          satNo: 0,
          source: 'source',
          altName: 'altName',
          category: 'category',
          commonName: 'commonName',
          constellation: 'constellation',
          countryCode: 'countryCode',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBy: 'createdBy',
          decayDate: '2019-12-27T18:11:19.117Z',
          idOnOrbit: 'idOnOrbit',
          intlDes: 'intlDes',
          launchDate: '2019-12-27',
          launchSiteId: 'launchSiteId',
          lifetimeYears: 0,
          missionNumber: 'missionNumber',
          objectType: 'objectType',
          origin: 'origin',
          origNetwork: 'origNetwork',
        },
        origin: 'origin',
        origNetwork: 'origNetwork',
        ownerType: 'ownerType',
        taskable: true,
        urls: ['string'],
      },
      generic: true,
      idEntity: 'idEntity',
      launchEnvelopeDimensionX: 0,
      launchEnvelopeDimensionY: 0,
      launchEnvelopeDimensionZ: 0,
      mainComputerManufacturerOrgId: 'mainComputerManufacturerOrgId',
      manufacturerOrgId: 'manufacturerOrgId',
      massCategory: 'massCategory',
      maxBOLPowerLower: 0,
      maxBOLPowerUpper: 0,
      maxBOLStationMass: 0,
      maxDryMass: 0,
      maxEOLPowerLower: 0,
      maxEOLPowerUpper: 0,
      maxLaunchMassLower: 0,
      maxLaunchMassUpper: 0,
      maxPayloadMass: 0,
      maxPayloadPower: 0,
      maxSpacecraftPower: 0,
      maxWetMass: 0,
      medianDryMass: 0,
      medianWetMass: 0,
      minDryMass: 0,
      minWetMass: 0,
      numOrbitType: 0,
      oapPayloadPower: 0,
      oapSpacecraftPower: 0,
      orbitTypes: ['string'],
      origin: 'origin',
      origNetwork: 'origNetwork',
      payloadDimensionX: 0,
      payloadDimensionY: 0,
      payloadDimensionZ: 0,
      payloadVolume: 0,
      powerCategory: 'powerCategory',
      telemetryTrackingManufacturerOrgId: 'telemetryTrackingManufacturerOrgId',
      type: 'type',
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

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.buses.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.buses.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.buses.delete({ path_id: 'id', body_id: 'id' });
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

  test('count: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.buses.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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

  test('queryHelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.buses.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
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
    const response = await client.buses.tuple({ columns: 'columns' });
  });
});
