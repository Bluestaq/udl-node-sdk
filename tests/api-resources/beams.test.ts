// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource beams', () => {
  test('update: only required params', async () => {
    const responsePromise = client.beams.update({
      path_id: 'id',
      body_id: 'id',
      beamName: 'beamName',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
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
    const response = await client.beams.update({
      path_id: 'id',
      body_id: 'id',
      beamName: 'beamName',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      source: 'source',
      body_id: 'id',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      notes: 'notes',
      origin: 'origin',
      origNetwork: 'origNetwork',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.beams.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.beams.delete({ path_id: 'id', body_id: 'id' });
  });
});
