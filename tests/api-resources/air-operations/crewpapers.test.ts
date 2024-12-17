// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary, { toFile } from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource crewpapers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airOperations.crewpapers.create({
      aircraftSortieIds: 'aircraftSortieIds',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
      classificationMarking: 'U',
      paperStatus: 'paperStatus',
      papersVersion: '1.1',
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
    const response = await client.airOperations.crewpapers.create({
      aircraftSortieIds: 'aircraftSortieIds',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
      classificationMarking: 'U',
      paperStatus: 'paperStatus',
      papersVersion: '1.1',
    });
  });

  test('unpublish: only required params', async () => {
    const responsePromise = client.airOperations.crewpapers.unpublish({ ids: 'ids' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unpublish: required and optional params', async () => {
    const response = await client.airOperations.crewpapers.unpublish({ ids: 'ids' });
  });
});
