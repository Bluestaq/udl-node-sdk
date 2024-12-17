// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eops', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.eops.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.eops.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.eops.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      eopDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.eops.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      eopDate: '2019-12-27T18:11:19.117Z',
      source: 'source',
      body_id: 'id',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      dEpsilon: 0,
      dEpsilonB: 0,
      dEpsilonUnc: 0,
      dPSI: 0,
      dPSIB: 0,
      dPSIUnc: 0,
      dX: 0,
      dXB: 0,
      dXUnc: 0,
      dY: 0,
      dYB: 0,
      dYUnc: 0,
      lod: 0,
      lodUnc: 0,
      nutationState: 'nutationState',
      origin: 'origin',
      origNetwork: 'origNetwork',
      polarMotionState: 'polarMotionState',
      polarMotionX: 0,
      polarMotionXB: 0,
      polarMotionXUnc: 0,
      polarMotionY: 0,
      polarMotionYB: 0,
      polarMotionYUnc: 0,
      precessionNutationStd: 'precessionNutationStd',
      rawFileURI: 'rawFileURI',
      ut1UTC: 0,
      ut1UTCB: 0,
      ut1UTCState: 'ut1UTCState',
      ut1UTCUnc: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.eops.list({ columns: 'columns', eopDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.eops.list({ columns: 'columns', eopDate: '2019-12-27T18:11:19.117Z' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.eops.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.eops.delete({ path_id: 'id', body_id: 'id' });
  });
});
