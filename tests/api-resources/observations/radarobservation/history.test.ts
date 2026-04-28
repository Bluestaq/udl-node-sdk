// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource history', () => {
  test('list: only required params', async () => {
    const responsePromise = client.observations.radarobservation.history.list({
      obTime: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.observations.radarobservation.history.list({
      obTime: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('aodr: only required params', async () => {
    const responsePromise = client.observations.radarobservation.history.aodr({
      obTime: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('aodr: required and optional params', async () => {
    const response = await client.observations.radarobservation.history.aodr({
      obTime: '2019-12-27T18:11:19.117Z',
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
      notification: 'notification',
      outputDelimiter: 'outputDelimiter',
      outputFormat: 'outputFormat',
    });
  });

  test('count: only required params', async () => {
    const responsePromise = client.observations.radarobservation.history.count({
      obTime: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.observations.radarobservation.history.count({
      obTime: '2019-12-27T18:11:19.117Z',
      firstResult: 0,
      maxResults: 0,
    });
  });
});
