// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource engineDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.engineDetails.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idEngine: 'idEngine',
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
    const response = await client.engineDetails.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idEngine: 'idEngine',
      source: 'source',
      id: 'id',
      burnTime: 0,
      chamberPressure: 0,
      characteristicType: 'characteristicType',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      cycleType: 'cycleType',
      family: 'family',
      manufacturerOrgId: 'manufacturerOrgId',
      maxFirings: 0,
      notes: 'notes',
      nozzleExpansionRatio: 0,
      origin: 'origin',
      origNetwork: 'origNetwork',
      oxidizer: 'oxidizer',
      propellant: 'propellant',
      seaLevelThrust: 0,
      specificImpulse: 0,
      tags: ['string'],
      vacuumThrust: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.engineDetails.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.engineDetails.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.engineDetails.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idEngine: 'idEngine',
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
    const response = await client.engineDetails.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idEngine: 'idEngine',
      source: 'source',
      body_id: 'id',
      burnTime: 0,
      chamberPressure: 0,
      characteristicType: 'characteristicType',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      cycleType: 'cycleType',
      family: 'family',
      manufacturerOrgId: 'manufacturerOrgId',
      maxFirings: 0,
      notes: 'notes',
      nozzleExpansionRatio: 0,
      origin: 'origin',
      origNetwork: 'origNetwork',
      oxidizer: 'oxidizer',
      propellant: 'propellant',
      seaLevelThrust: 0,
      specificImpulse: 0,
      tags: ['string'],
      vacuumThrust: 0,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.engineDetails.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.engineDetails.delete({ path_id: 'id', body_id: 'id' });
  });
});
