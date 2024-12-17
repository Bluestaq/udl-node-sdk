// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eventEvolution', () => {
  test('create: only required params', async () => {
    const responsePromise = client.eventEvolution.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      eventId: 'eventId',
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
      summary: 'summary',
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
    const response = await client.eventEvolution.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      eventId: 'eventId',
      source: 'source',
      startTime: '2019-12-27T18:11:19.117Z',
      summary: 'summary',
      id: 'id',
      agjson: 'agjson',
      andims: 0,
      area: 'area',
      asrid: 0,
      atext: 'atext',
      atype: 'atype',
      category: 'category',
      countryCode: 'countryCode',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      dataDescription: 'dataDescription',
      endTime: '2019-12-27T18:11:19.117Z',
      geoAdminLevel1: 'geoAdminLevel1',
      geoAdminLevel2: 'geoAdminLevel2',
      geoAdminLevel3: 'geoAdminLevel3',
      origin: 'origin',
      origNetwork: 'origNetwork',
      redact: true,
      srcIds: ['string'],
      srcTyps: ['string'],
      status: 'status',
      tags: ['string'],
      url: ['string'],
    });
  });

  test('list', async () => {
    const responsePromise = client.eventEvolution.list();
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
    await expect(client.eventEvolution.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.eventEvolution.list(
        { eventId: 'eventId', startTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.eventEvolution.count();
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
    await expect(client.eventEvolution.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.eventEvolution.count(
        { eventId: 'eventId', startTime: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.eventEvolution.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        eventId: 'eventId',
        source: 'source',
        startTime: '2019-12-27T18:11:19.117Z',
        summary: 'summary',
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
    const response = await client.eventEvolution.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        eventId: 'eventId',
        source: 'source',
        startTime: '2019-12-27T18:11:19.117Z',
        summary: 'summary',
        id: 'id',
        agjson: 'agjson',
        andims: 0,
        area: 'area',
        asrid: 0,
        atext: 'atext',
        atype: 'atype',
        category: 'category',
        countryCode: 'countryCode',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        dataDescription: 'dataDescription',
        endTime: '2019-12-27T18:11:19.117Z',
        geoAdminLevel1: 'geoAdminLevel1',
        geoAdminLevel2: 'geoAdminLevel2',
        geoAdminLevel3: 'geoAdminLevel3',
        origin: 'origin',
        origNetwork: 'origNetwork',
        redact: true,
        srcIds: ['string'],
        srcTyps: ['string'],
        status: 'status',
        tags: ['string'],
        url: ['string'],
      },
    ]);
  });
});
