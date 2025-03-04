// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary, { toFile } from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scs', () => {
  test('delete: only required params', async () => {
    const responsePromise = client.scs.delete({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.scs.delete({ id: 'id' });
  });

  test('aggregateDocType', async () => {
    const responsePromise = client.scs.aggregateDocType();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('aggregateDocType: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.scs.aggregateDocType({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('allowableFileExtensions', async () => {
    const responsePromise = client.scs.allowableFileExtensions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('allowableFileExtensions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.scs.allowableFileExtensions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('allowableFileMimes', async () => {
    const responsePromise = client.scs.allowableFileMimes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('allowableFileMimes: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.scs.allowableFileMimes({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('copy: only required params', async () => {
    const responsePromise = client.scs.copy({ id: 'id', targetPath: 'targetPath' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('copy: required and optional params', async () => {
    const response = await client.scs.copy({ id: 'id', targetPath: 'targetPath' });
  });

  test('download: required and optional params', async () => {
    const response = await client.scs.download('body');
  });

  test('fileDownload: required and optional params', async () => {
    const response = await client.scs.fileDownload({ id: 'id' });
  });

  test('fileUpload: only required params', async () => {
    const responsePromise = client.scs.fileUpload({
      classificationMarking: 'classificationMarking',
      fileName: 'fileName',
      path: 'path',
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

  test('fileUpload: required and optional params', async () => {
    const response = await client.scs.fileUpload({
      classificationMarking: 'classificationMarking',
      fileName: 'fileName',
      path: 'path',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
      description: 'description',
      tags: 'tags',
    });
  });

  test('move: only required params', async () => {
    const responsePromise = client.scs.move({ id: 'id', targetPath: 'targetPath' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('move: required and optional params', async () => {
    const response = await client.scs.move({ id: 'id', targetPath: 'targetPath' });
  });

  test('rename: only required params', async () => {
    const responsePromise = client.scs.rename({ id: 'id', newName: 'newName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rename: required and optional params', async () => {
    const response = await client.scs.rename({ id: 'id', newName: 'newName' });
  });

  test('search: only required params', async () => {
    const responsePromise = client.scs.search({ path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.scs.search({
      path: 'path',
      count: 0,
      offset: 0,
      contentCriteria: 'contentCriteria',
      metaDataCriteria: { CREATED_AT: ['< 2022-06-14T07:48:11.302Z'] },
      nonRangeCriteria: { foo: ['string'] },
      rangeCriteria: { foo: ['string'] },
      searchAfter: 'searchAfter',
    });
  });

  test('updateTags: only required params', async () => {
    const responsePromise = client.scs.updateTags({ folder: 'folder', tags: 'tags' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateTags: required and optional params', async () => {
    const response = await client.scs.updateTags({ folder: 'folder', tags: 'tags' });
  });
});
