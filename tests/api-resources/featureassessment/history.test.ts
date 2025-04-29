// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource history', () => {
  test('count: only required params', async () => {
    const responsePromise = client.featureassessment.history.count({
      idAnalyticImagery: 'idAnalyticImagery',
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
    const response = await client.featureassessment.history.count({
      idAnalyticImagery: 'idAnalyticImagery',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('query: only required params', async () => {
    const responsePromise = client.featureassessment.history.query({
      idAnalyticImagery: 'idAnalyticImagery',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.featureassessment.history.query({
      idAnalyticImagery: 'idAnalyticImagery',
      columns: 'columns',
      firstResult: 0,
      maxResult: 0,
    });
  });

  test('writeAodr: only required params', async () => {
    const responsePromise = client.featureassessment.history.writeAodr({
      idAnalyticImagery: 'idAnalyticImagery',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('writeAodr: required and optional params', async () => {
    const response = await client.featureassessment.history.writeAodr({
      idAnalyticImagery: 'idAnalyticImagery',
      columns: 'columns',
      firstResult: 0,
      maxResult: 0,
      notification: 'notification',
      outputDelimiter: 'outputDelimiter',
      outputFormat: 'outputFormat',
    });
  });
});
