// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eop', () => {
  test('create: only required params', async () => {
    const responsePromise = client.eop.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      eopDate: '2018-01-01T16:00:00.123Z',
      source: 'Bluestaq',
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
    const response = await client.eop.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      eopDate: '2018-01-01T16:00:00.123Z',
      source: 'Bluestaq',
      id: 'EOP-ID',
      dEpsilon: -0.917,
      dEpsilonB: -1.7,
      dEpsilonUnc: 0.165,
      dPSI: -10.437,
      dPSIB: -9.9,
      dPSIUnc: 0.507,
      dX: -0.086,
      dXB: 0.129,
      dXUnc: 0.202,
      dY: 0.13,
      dYB: -0.653,
      dYUnc: 0.165,
      lod: 1.8335,
      lodUnc: 0.0201,
      nutationState: 'I',
      origin: 'THIRD_PARTY_DATASOURCE',
      polarMotionState: 'I',
      polarMotionX: 0.182987,
      polarMotionXB: 0.1824,
      polarMotionXUnc: 0.000672,
      polarMotionY: 0.168775,
      polarMotionYB: 0.1679,
      polarMotionYUnc: 0.000345,
      precessionNutationStd: 'IAU1980',
      rawFileURI: 'Example URI',
      ut1UTC: -0.1251659,
      ut1UTCB: -0.1253,
      ut1UTCState: 'I',
      ut1UTCUnc: 0.0000207,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.eop.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.eop.retrieve('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.eop.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      eopDate: '2018-01-01T16:00:00.123Z',
      source: 'Bluestaq',
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
    const response = await client.eop.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      eopDate: '2018-01-01T16:00:00.123Z',
      source: 'Bluestaq',
      body_id: 'EOP-ID',
      dEpsilon: -0.917,
      dEpsilonB: -1.7,
      dEpsilonUnc: 0.165,
      dPSI: -10.437,
      dPSIB: -9.9,
      dPSIUnc: 0.507,
      dX: -0.086,
      dXB: 0.129,
      dXUnc: 0.202,
      dY: 0.13,
      dYB: -0.653,
      dYUnc: 0.165,
      lod: 1.8335,
      lodUnc: 0.0201,
      nutationState: 'I',
      origin: 'THIRD_PARTY_DATASOURCE',
      polarMotionState: 'I',
      polarMotionX: 0.182987,
      polarMotionXB: 0.1824,
      polarMotionXUnc: 0.000672,
      polarMotionY: 0.168775,
      polarMotionYB: 0.1679,
      polarMotionYUnc: 0.000345,
      precessionNutationStd: 'IAU1980',
      rawFileURI: 'Example URI',
      ut1UTC: -0.1251659,
      ut1UTCB: -0.1253,
      ut1UTCState: 'I',
      ut1UTCUnc: 0.0000207,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.eop.list({ eopDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.eop.list({
      eopDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('delete', async () => {
    const responsePromise = client.eop.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: only required params', async () => {
    const responsePromise = client.eop.count({ eopDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.eop.count({
      eopDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('listTuple: only required params', async () => {
    const responsePromise = client.eop.listTuple({ columns: 'columns', eopDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listTuple: required and optional params', async () => {
    const response = await client.eop.listTuple({
      columns: 'columns',
      eopDate: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('queryhelp', async () => {
    const responsePromise = client.eop.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
