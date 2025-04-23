// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary, { toFile } from 'unifieddatalibrary';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource crewpapers', () => {
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

  test('uploadPdf: only required params', async () => {
    const responsePromise = client.airOperations.crewpapers.uploadPdf({
      aircraftSortieIds: 'aircraftSortieIds',
      classificationMarking: 'x',
      paperStatus: 'PUBLISHED',
      papersVersion: 'x',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadPdf: required and optional params', async () => {
    const response = await client.airOperations.crewpapers.uploadPdf({
      aircraftSortieIds: 'aircraftSortieIds',
      classificationMarking: 'x',
      paperStatus: 'PUBLISHED',
      papersVersion: 'x',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
