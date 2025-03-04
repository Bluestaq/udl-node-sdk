// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stage', () => {
  test('create: only required params', async () => {
    const responsePromise = client.stage.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      idEngine: 'ENGINE-ID',
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
    const response = await client.stage.create({
      classificationMarking: 'U',
      dataMode: 'REAL',
      idEngine: 'ENGINE-ID',
      idLaunchVehicle: 'LAUNCHVEHICLE-ID',
      source: 'Bluestaq',
      id: 'STAGE-ID',
      avionicsNotes: 'Sample Notes',
      burnTime: 256.3,
      controlThruster1: 'controlThruster1',
      controlThruster2: 'controlThruster2',
      diameter: 3.95,
      length: 25.13,
      mainEngineThrustSeaLevel: 733.4,
      mainEngineThrustVacuum: 733.4,
      manufacturerOrgId: '5feed5d7-d131-57e5-a3fd-acc173bca736',
      mass: 9956.1,
      notes: 'Sample Notes',
      numBurns: 1,
      numControlThruster1: 1,
      numControlThruster2: 1,
      numEngines: 1,
      numStageElements: 2,
      numVernier: 3,
      origin: 'THIRD_PARTY_DATASOURCE',
      photoURLs: ['photoURL'],
      restartable: true,
      reusable: true,
      stageNumber: 2,
      tags: ['TAG1', 'TAG2'],
      thrustSeaLevel: 733.4,
      thrustVacuum: 733.4,
      type: 'Electrostatic Ion',
      vernier: 'vernier',
      vernierBurnTime: 1.1,
      vernierNumBurns: 4,
      vernierThrustSeaLevel: 4.1,
      vernierThrustVacuum: 3.2,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.stage.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      idEngine: 'ENGINE-ID',
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
    const response = await client.stage.update('id', {
      classificationMarking: 'U',
      dataMode: 'REAL',
      idEngine: 'ENGINE-ID',
      idLaunchVehicle: 'LAUNCHVEHICLE-ID',
      source: 'Bluestaq',
      body_id: 'STAGE-ID',
      avionicsNotes: 'Sample Notes',
      burnTime: 256.3,
      controlThruster1: 'controlThruster1',
      controlThruster2: 'controlThruster2',
      diameter: 3.95,
      length: 25.13,
      mainEngineThrustSeaLevel: 733.4,
      mainEngineThrustVacuum: 733.4,
      manufacturerOrgId: '5feed5d7-d131-57e5-a3fd-acc173bca736',
      mass: 9956.1,
      notes: 'Sample Notes',
      numBurns: 1,
      numControlThruster1: 1,
      numControlThruster2: 1,
      numEngines: 1,
      numStageElements: 2,
      numVernier: 3,
      origin: 'THIRD_PARTY_DATASOURCE',
      photoURLs: ['photoURL'],
      restartable: true,
      reusable: true,
      stageNumber: 2,
      tags: ['TAG1', 'TAG2'],
      thrustSeaLevel: 733.4,
      thrustVacuum: 733.4,
      type: 'Electrostatic Ion',
      vernier: 'vernier',
      vernierBurnTime: 1.1,
      vernierNumBurns: 4,
      vernierThrustSeaLevel: 4.1,
      vernierThrustVacuum: 3.2,
    });
  });

  test('list', async () => {
    const responsePromise = client.stage.list();
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
    await expect(client.stage.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.stage.delete('id');
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
    await expect(client.stage.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.stage.count();
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
    await expect(client.stage.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.stage.get('id');
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
    await expect(client.stage.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('queryhelp', async () => {
    const responsePromise = client.stage.queryhelp();
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
    await expect(client.stage.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.stage.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.stage.tuple({ columns: 'columns' });
  });
});
