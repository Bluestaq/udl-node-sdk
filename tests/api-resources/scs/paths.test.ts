// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary, { toFile } from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paths', () => {
  test('create: only required params', async () => {
    const responsePromise = client.scs.paths.create({
      id: 'id',
      classificationMarking: 'classificationMarking',
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

  test('create: required and optional params', async () => {
    const response = await client.scs.paths.create({
      id: 'id',
      classificationMarking: 'classificationMarking',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
      description: 'description',
      overwrite: true,
      tags: 'tags',
    });
  });
});
