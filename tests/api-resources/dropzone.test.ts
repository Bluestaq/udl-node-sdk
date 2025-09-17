// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dropzone', () => {
  test('create: only required params', async () => {
    const responsePromise = client.dropzone.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      lat: 33.54,
      lon: -117.162,
      name: 'Viper DZ',
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
    const response = await client.dropzone.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      lat: 33.54,
      lon: -117.162,
      name: 'Viper DZ',
      source: 'Bluestaq',
      id: '3f28f60b-3a50-2aef-ac88-8e9d0e39912b',
      altCountryCode: 'USA',
      altCountryName: 'United States of America',
      approvalDate: '2018-01-05T16:00:00.123Z',
      code: 'DZ',
      countryCode: 'US',
      countryName: 'United States',
      expirationDate: '2022-12-09T16:00:00.123Z',
      extIdentifier: '1001',
      idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
      lastUpdate: '2022-11-07T18:44:41.123Z',
      length: 549.1,
      majcom: 'United States Northern Command',
      nearestLoc: 'March AFB',
      operationalApprovalDate: '2018-01-05T16:00:00.123Z',
      origin: 'THIRD_PARTY_DATASOURCE',
      pointName: 'CENTER POINT',
      radius: 495.1,
      recertDate: '2022-07-05T16:00:00.123Z',
      remark: 'The text of the remark.',
      stateAbbr: 'CA',
      stateName: 'CALIFORNIA',
      surveyDate: '2017-12-09T16:00:00.123Z',
      width: 549.1,
      zarId: '1001',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.dropzone.retrieve('id');
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
      client.dropzone.retrieve('id', { firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.dropzone.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      lat: 33.54,
      lon: -117.162,
      name: 'Viper DZ',
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
    const response = await client.dropzone.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      lat: 33.54,
      lon: -117.162,
      name: 'Viper DZ',
      source: 'Bluestaq',
      body_id: '3f28f60b-3a50-2aef-ac88-8e9d0e39912b',
      altCountryCode: 'USA',
      altCountryName: 'United States of America',
      approvalDate: '2018-01-05T16:00:00.123Z',
      code: 'DZ',
      countryCode: 'US',
      countryName: 'United States',
      expirationDate: '2022-12-09T16:00:00.123Z',
      extIdentifier: '1001',
      idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
      lastUpdate: '2022-11-07T18:44:41.123Z',
      length: 549.1,
      majcom: 'United States Northern Command',
      nearestLoc: 'March AFB',
      operationalApprovalDate: '2018-01-05T16:00:00.123Z',
      origin: 'THIRD_PARTY_DATASOURCE',
      pointName: 'CENTER POINT',
      radius: 495.1,
      recertDate: '2022-07-05T16:00:00.123Z',
      remark: 'The text of the remark.',
      stateAbbr: 'CA',
      stateName: 'CALIFORNIA',
      surveyDate: '2017-12-09T16:00:00.123Z',
      width: 549.1,
      zarId: '1001',
    });
  });

  test('list', async () => {
    const responsePromise = client.dropzone.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dropzone.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.dropzone.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count', async () => {
    const responsePromise = client.dropzone.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dropzone.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.dropzone.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          lat: 33.54,
          lon: -117.162,
          name: 'Viper DZ',
          source: 'Bluestaq',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBulk: required and optional params', async () => {
    const response = await client.dropzone.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          lat: 33.54,
          lon: -117.162,
          name: 'Viper DZ',
          source: 'Bluestaq',
          id: '3f28f60b-3a50-2aef-ac88-8e9d0e39912b',
          altCountryCode: 'USA',
          altCountryName: 'United States of America',
          approvalDate: '2018-01-05T16:00:00.123Z',
          code: 'DZ',
          countryCode: 'US',
          countryName: 'United States',
          expirationDate: '2022-12-09T16:00:00.123Z',
          extIdentifier: '1001',
          idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
          lastUpdate: '2022-11-07T18:44:41.123Z',
          length: 549.1,
          majcom: 'United States Northern Command',
          nearestLoc: 'March AFB',
          operationalApprovalDate: '2018-01-05T16:00:00.123Z',
          origin: 'THIRD_PARTY_DATASOURCE',
          pointName: 'CENTER POINT',
          radius: 495.1,
          recertDate: '2022-07-05T16:00:00.123Z',
          remark: 'The text of the remark.',
          stateAbbr: 'CA',
          stateName: 'CALIFORNIA',
          surveyDate: '2017-12-09T16:00:00.123Z',
          width: 549.1,
          zarId: '1001',
        },
      ],
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.dropzone.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.dropzone.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.dropzone.tuple({ columns: 'columns', firstResult: 0, maxResults: 0 });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.dropzone.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          lat: 33.54,
          lon: -117.162,
          name: 'Viper DZ',
          source: 'Bluestaq',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unvalidatedPublish: required and optional params', async () => {
    const response = await client.dropzone.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          lat: 33.54,
          lon: -117.162,
          name: 'Viper DZ',
          source: 'Bluestaq',
          id: '3f28f60b-3a50-2aef-ac88-8e9d0e39912b',
          altCountryCode: 'USA',
          altCountryName: 'United States of America',
          approvalDate: '2018-01-05T16:00:00.123Z',
          code: 'DZ',
          countryCode: 'US',
          countryName: 'United States',
          expirationDate: '2022-12-09T16:00:00.123Z',
          extIdentifier: '1001',
          idSite: 'a150b3ee-884b-b9ac-60a0-6408b4b16088',
          lastUpdate: '2022-11-07T18:44:41.123Z',
          length: 549.1,
          majcom: 'United States Northern Command',
          nearestLoc: 'March AFB',
          operationalApprovalDate: '2018-01-05T16:00:00.123Z',
          origin: 'THIRD_PARTY_DATASOURCE',
          pointName: 'CENTER POINT',
          radius: 495.1,
          recertDate: '2022-07-05T16:00:00.123Z',
          remark: 'The text of the remark.',
          stateAbbr: 'CA',
          stateName: 'CALIFORNIA',
          surveyDate: '2017-12-09T16:00:00.123Z',
          width: 549.1,
          zarId: '1001',
        },
      ],
    });
  });
});
