// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary, { toFile } from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v2', () => {
  test('update: only required params', async () => {
    const responsePromise = client.scs.v2.update({ path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.scs.v2.update({
      path: 'path',
      id: 'id',
      attachment: {
        author: 'author',
        content: 'content',
        content_length: 0,
        content_type: 'content_type',
        date: 'date',
        keywords: 'keywords',
        language: 'language',
        title: 'title',
      },
      classificationMarking: 'U',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      data: 'data',
      description: 'A description of the updated folder.',
      fileName: 'fileName',
      filePath: 'filePath',
      keywords: 'keywords',
      parentPath: 'parentPath',
      pathType: 'pathType',
      readAcl: 'user.id1,group.id1',
      size: 0,
      tags: ['TAG1', 'TAG2'],
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
      writeAcl: 'user.id1,group.id1',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.scs.v2.list({ path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.scs.v2.list({ path: 'path' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.scs.v2.delete({ path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.scs.v2.delete({ path: 'path' });
  });

  test('copy: only required params', async () => {
    const responsePromise = client.scs.v2.copy({ fromPath: 'fromPath', toPath: 'toPath' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('copy: required and optional params', async () => {
    const response = await client.scs.v2.copy({ fromPath: 'fromPath', toPath: 'toPath' });
  });

  test('fileUpload: only required params', async () => {
    const responsePromise = client.scs.v2.fileUpload({
      classificationMarking: 'classificationMarking',
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
    const response = await client.scs.v2.fileUpload({
      classificationMarking: 'classificationMarking',
      path: 'path',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
      description: 'description',
      tags: 'tags',
    });
  });

  test('folderCreate: only required params', async () => {
    const responsePromise = client.scs.v2.folderCreate({ path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('folderCreate: required and optional params', async () => {
    const response = await client.scs.v2.folderCreate({
      path: 'path',
      id: 'id',
      attachment: {
        author: 'author',
        content: 'content',
        content_length: 0,
        content_type: 'content_type',
        date: 'date',
        keywords: 'keywords',
        language: 'language',
        title: 'title',
      },
      classificationMarking: 'U',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      data: 'data',
      description: 'My first folder',
      fileName: 'fileName',
      filePath: 'filePath',
      keywords: 'keywords',
      parentPath: 'parentPath',
      pathType: 'pathType',
      readAcl: 'user.id1,group.id1',
      size: 0,
      tags: ['TAG1', 'TAG2'],
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
      writeAcl: 'user.id1,group.id1',
    });
  });

  test('move: only required params', async () => {
    const responsePromise = client.scs.v2.move({ fromPath: 'fromPath', toPath: 'toPath' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('move: required and optional params', async () => {
    const response = await client.scs.v2.move({ fromPath: 'fromPath', toPath: 'toPath' });
  });
});
