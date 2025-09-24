// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary, { toFile } from 'unified-data-library';

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
      sendNotification: true,
      id: '/my-folder/',
      attachment: {
        author: 'John.Doe',
        content_length: 0,
        content_type: 'text/plain',
        date: '2025-07-03T16:27:57.970Z',
        keywords: 'keywords',
        language: 'en',
        title: 'title',
      },
      classificationMarking: 'U',
      createdAt: '2025-07-03T16:27:57.970Z',
      createdBy: 'John.Doe',
      deleteOn: 0,
      description: 'A description of the updated folder.',
      filename: 'my-folder',
      filePath: '/my-folder/sub-folder/',
      keywords: 'keywords',
      parentPath: '/',
      pathType: 'file',
      readAcl: 'user.id1,group.id1',
      size: 0,
      tags: ['TAG1', 'TAG2'],
      updatedAt: '2025-07-03T16:27:57.970Z',
      updatedBy: 'John.Doe',
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
    const response = await client.scs.v2.list({
      path: 'path',
      firstResult: 0,
      maxResults: 0,
      order: 'order',
      searchAfter: 'searchAfter',
      size: 0,
      sort: 'sort',
    });
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
    const responsePromise = client.scs.v2.fileUpload(
      await toFile(Buffer.from('# my file contents'), 'README.md'),
      { classificationMarking: 'classificationMarking', path: 'path' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fileUpload: required and optional params', async () => {
    const response = await client.scs.v2.fileUpload(
      await toFile(Buffer.from('# my file contents'), 'README.md'),
      {
        classificationMarking: 'classificationMarking',
        path: 'path',
        deleteAfter: 'deleteAfter',
        description: 'description',
        overwrite: true,
        sendNotification: true,
        tags: 'tags',
      },
    );
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
      sendNotification: true,
      id: '/my-folder/',
      attachment: {
        author: 'John.Doe',
        content_length: 0,
        content_type: 'text/plain',
        date: '2025-07-03T16:27:57.970Z',
        keywords: 'keywords',
        language: 'en',
        title: 'title',
      },
      classificationMarking: 'U',
      createdAt: '2025-07-03T16:27:57.970Z',
      createdBy: 'John.Doe',
      deleteOn: 0,
      description: 'My first folder',
      filename: 'my-folder',
      filePath: '/my-folder/sub-folder/',
      keywords: 'keywords',
      parentPath: '/',
      pathType: 'file',
      readAcl: 'user.id1,group.id1',
      size: 0,
      tags: ['TAG1', 'TAG2'],
      updatedAt: '2025-07-03T16:27:57.970Z',
      updatedBy: 'John.Doe',
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

  test('search', async () => {
    const responsePromise = client.scs.v2.search({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
