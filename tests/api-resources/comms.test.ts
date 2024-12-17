// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource comms', () => {
  test('create: only required params', async () => {
    const responsePromise = client.comms.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
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

  test('create: required and optional params', async () => {
    const response = await client.comms.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      name: 'name',
      source: 'source',
      id: 'id',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      description: 'description',
      entity: {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        name: 'name',
        source: 'source',
        type: 'type',
        countryCode: 'countryCode',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        idEntity: 'idEntity',
        idLocation: 'idLocation',
        idOnOrbit: 'idOnOrbit',
        idOperatingUnit: 'idOperatingUnit',
        location: {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          name: 'name',
          source: 'source',
          altitude: 0,
          countryCode: 'countryCode',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBy: 'createdBy',
          idLocation: 'idLocation',
          lat: 0,
          lon: 0,
          origin: 'origin',
          origNetwork: 'origNetwork',
        },
        onOrbit: {
          classificationMarking: 'classificationMarking',
          dataMode: 'dataMode',
          satNo: 0,
          source: 'source',
          altName: 'altName',
          category: 'category',
          commonName: 'commonName',
          constellation: 'constellation',
          countryCode: 'countryCode',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBy: 'createdBy',
          decayDate: '2019-12-27T18:11:19.117Z',
          idOnOrbit: 'idOnOrbit',
          intlDes: 'intlDes',
          launchDate: '2019-12-27',
          launchSiteId: 'launchSiteId',
          lifetimeYears: 0,
          missionNumber: 'missionNumber',
          objectType: 'objectType',
          origin: 'origin',
          origNetwork: 'origNetwork',
        },
        origin: 'origin',
        origNetwork: 'origNetwork',
        ownerType: 'ownerType',
        taskable: true,
        urls: ['string'],
      },
      idEntity: 'idEntity',
      origin: 'origin',
      origNetwork: 'origNetwork',
    });
  });

  test('list', async () => {
    const responsePromise = client.comms.list();
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
    await expect(client.comms.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('count', async () => {
    const responsePromise = client.comms.count();
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
    await expect(client.comms.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });
});
