// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ephemerisSets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.ephemerisSets.create({
      category: 'category',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      numPoints: 0,
      pointEndTime: '2019-12-27T18:11:19.117Z',
      pointStartTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      type: 'type',
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
    const response = await client.ephemerisSets.create({
      category: 'category',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      numPoints: 0,
      pointEndTime: '2019-12-27T18:11:19.117Z',
      pointStartTime: '2019-12-27T18:11:19.117Z',
      source: 'source',
      type: 'type',
      id: 'id',
      bDot: 0,
      centBody: 'centBody',
      comments: 'comments',
      covReferenceFrame: 'covReferenceFrame',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      description: 'description',
      descriptor: 'descriptor',
      dragModel: 'dragModel',
      edr: 0,
      ephemerisList: [
        {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          source: 'source',
          ts: '2019-12-27T18:11:19.117Z',
          xpos: 0,
          xvel: 0,
          ypos: 0,
          yvel: 0,
          zpos: 0,
          zvel: 0,
          id: 'id',
          cov: [0],
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBy: 'createdBy',
          esId: 'esId',
          idOnOrbit: 'idOnOrbit',
          origin: 'origin',
          origObjectId: 'origObjectId',
          xaccel: 0,
          yaccel: 0,
          zaccel: 0,
        },
      ],
      filename: 'filename',
      geopotentialModel: 'geopotentialModel',
      hasAccel: true,
      hasCov: true,
      hasMnvr: true,
      idManeuvers: ['string'],
      idOnOrbit: 'idOnOrbit',
      idStateVector: 'idStateVector',
      integrator: 'integrator',
      interpolation: 'interpolation',
      interpolationDegree: 0,
      lunarSolar: true,
      origin: 'origin',
      origNetwork: 'origNetwork',
      origObjectId: 'origObjectId',
      pedigree: 'pedigree',
      referenceFrame: 'referenceFrame',
      satNo: 0,
      solidEarthTides: true,
      stepSize: 0,
      tags: ['string'],
      transactionId: 'transactionId',
      usableEndTime: '2019-12-27T18:11:19.117Z',
      usableStartTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.ephemerisSets.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.ephemerisSets.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('list', async () => {
    const responsePromise = client.ephemerisSets.list();
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
    await expect(client.ephemerisSets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ephemerisSets.list(
        { pointEndTime: '2019-12-27T18:11:19.117Z', pointStartTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.ephemerisSets.count();
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
    await expect(client.ephemerisSets.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ephemerisSets.count(
        { pointEndTime: '2019-12-27T18:11:19.117Z', pointStartTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('fileRetrieve: required and optional params', async () => {
    const response = await client.ephemerisSets.fileRetrieve({ path_id: 'id', body_id: 'id' });
  });

  test('queryhelp', async () => {
    const responsePromise = client.ephemerisSets.queryhelp();
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
    await expect(client.ephemerisSets.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.ephemerisSets.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.ephemerisSets.tuple({
      columns: 'columns',
      pointEndTime: '2019-12-27T18:11:19.117Z',
      pointStartTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
