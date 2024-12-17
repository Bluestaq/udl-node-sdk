// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource antennaDetails', () => {
  test('create: only required params', async () => {
    const responsePromise = client.onorbit.antennaDetails.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idAntenna: 'idAntenna',
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
    const response = await client.onorbit.antennaDetails.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idAntenna: 'idAntenna',
      source: 'source',
      id: 'id',
      beamForming: true,
      beamwidth: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      description: 'description',
      diameter: 0,
      endFrequency: 0,
      gain: 0,
      gainTolerance: 0,
      manufacturerOrgId: 'manufacturerOrgId',
      mode: 'mode',
      origin: 'origin',
      origNetwork: 'origNetwork',
      polarization: 0,
      position: 'position',
      size: [0],
      startFrequency: 0,
      steerable: true,
      tags: ['string'],
      type: 'type',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.onorbit.antennaDetails.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.onorbit.antennaDetails.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.onorbit.antennaDetails.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idAntenna: 'idAntenna',
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
    const response = await client.onorbit.antennaDetails.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idAntenna: 'idAntenna',
      source: 'source',
      body_id: 'id',
      beamForming: true,
      beamwidth: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      description: 'description',
      diameter: 0,
      endFrequency: 0,
      gain: 0,
      gainTolerance: 0,
      manufacturerOrgId: 'manufacturerOrgId',
      mode: 'mode',
      origin: 'origin',
      origNetwork: 'origNetwork',
      polarization: 0,
      position: 'position',
      size: [0],
      startFrequency: 0,
      steerable: true,
      tags: ['string'],
      type: 'type',
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

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.onorbit.antennaDetails.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.onorbit.antennaDetails.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.onorbit.antennaDetails.delete({ path_id: 'id', body_id: 'id' });
  });
});
