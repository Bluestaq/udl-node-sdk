// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource beamContours', () => {
  test('create: only required params', async () => {
    const responsePromise = client.beamContours.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idBeam: 'idBeam',
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
    const response = await client.beamContours.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idBeam: 'idBeam',
      source: 'source',
      type: 'type',
      id: 'id',
      contourIdx: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      gain: 0,
      geography: 'geography',
      geographyJson: 'geographyJson',
      geographyNdims: 0,
      geographySrid: 0,
      geographyText: 'geographyText',
      geographyType: 'geographyType',
      origin: 'origin',
      origNetwork: 'origNetwork',
      regionName: 'regionName',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.beamContours.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.beamContours.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.beamContours.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idBeam: 'idBeam',
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

  test('update: required and optional params', async () => {
    const response = await client.beamContours.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      idBeam: 'idBeam',
      source: 'source',
      type: 'type',
      body_id: 'id',
      contourIdx: 0,
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      gain: 0,
      geography: 'geography',
      geographyJson: 'geographyJson',
      geographyNdims: 0,
      geographySrid: 0,
      geographyText: 'geographyText',
      geographyType: 'geographyType',
      origin: 'origin',
      origNetwork: 'origNetwork',
      regionName: 'regionName',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.beamContours.list({ idBeam: 'idBeam' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.beamContours.list({ idBeam: 'idBeam' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.beamContours.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.beamContours.delete({ path_id: 'id', body_id: 'id' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.beamContours.count({ idBeam: 'idBeam' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.beamContours.count({ idBeam: 'idBeam' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.beamContours.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        idBeam: 'idBeam',
        source: 'source',
        type: 'type',
      },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.beamContours.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        idBeam: 'idBeam',
        source: 'source',
        type: 'type',
        id: 'id',
        contourIdx: 0,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        gain: 0,
        geography: 'geography',
        geographyJson: 'geographyJson',
        geographyNdims: 0,
        geographySrid: 0,
        geographyText: 'geographyText',
        geographyType: 'geographyType',
        origin: 'origin',
        origNetwork: 'origNetwork',
        regionName: 'regionName',
      },
    ]);
  });

  test('queryHelp', async () => {
    const responsePromise = client.beamContours.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('queryHelp: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.beamContours.queryHelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.beamContours.tuple({ columns: 'columns', idBeam: 'idBeam' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.beamContours.tuple({ columns: 'columns', idBeam: 'idBeam' });
  });
});
