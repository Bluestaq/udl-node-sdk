// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource diplomaticClearance', () => {
  test('create: only required params', async () => {
    const responsePromise = client.diplomaticClearance.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      firstDepDate: '2019-12-27T18:11:19.117Z',
      idMission: 'idMission',
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
    const response = await client.diplomaticClearance.create({
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      firstDepDate: '2019-12-27T18:11:19.117Z',
      idMission: 'idMission',
      source: 'source',
      id: 'id',
      apacsId: 'apacsId',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      diplomaticClearanceDetails: [
        {
          action: 'action',
          altCountryCode: 'altCountryCode',
          clearanceId: 'clearanceId',
          clearanceRemark: 'clearanceRemark',
          clearedCallSign: 'clearedCallSign',
          countryCode: 'countryCode',
          countryName: 'countryName',
          entryNET: '2019-12-27T18:11:19.117Z',
          entryPoint: 'entryPoint',
          exitNLT: '2019-12-27T18:11:19.117Z',
          exitPoint: 'exitPoint',
          externalClearanceId: 'externalClearanceId',
          idSortie: 'idSortie',
          legNum: 0,
          profile: 'profile',
          reqICAO: true,
          reqPoint: true,
          routeString: 'routeString',
          sequenceNum: 0,
          status: 'status',
          validDesc: 'validDesc',
          validEndTime: '2019-12-27T18:11:19.117Z',
          validStartTime: '2019-12-27T18:11:19.117Z',
          windowRemark: 'windowRemark',
        },
      ],
      diplomaticClearanceRemarks: [
        { date: '2019-12-27T18:11:19.117Z', gdssRemarkId: 'gdssRemarkId', text: 'text', user: 'user' },
      ],
      dipWorksheetName: 'dipWorksheetName',
      docDeadline: '2019-12-27T18:11:19.117Z',
      externalWorksheetId: 'externalWorksheetId',
      origin: 'origin',
      origNetwork: 'origNetwork',
      sourceDL: 'sourceDL',
      updatedAt: '2019-12-27T18:11:19.117Z',
      updatedBy: 'updatedBy',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.diplomaticClearance.retrieve({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.diplomaticClearance.retrieve({ path_id: 'id', body_id: 'id' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.diplomaticClearance.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      firstDepDate: '2019-12-27T18:11:19.117Z',
      idMission: 'idMission',
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
    const response = await client.diplomaticClearance.update({
      path_id: 'id',
      body_id: 'id',
      classificationMarking: 'classificationMarking',
      dataMode: 'dataMode',
      firstDepDate: '2019-12-27T18:11:19.117Z',
      idMission: 'idMission',
      source: 'source',
      body_id: 'id',
      apacsId: 'apacsId',
      createdAt: '2019-12-27T18:11:19.117Z',
      createdBy: 'createdBy',
      diplomaticClearanceDetails: [
        {
          action: 'action',
          altCountryCode: 'altCountryCode',
          clearanceId: 'clearanceId',
          clearanceRemark: 'clearanceRemark',
          clearedCallSign: 'clearedCallSign',
          countryCode: 'countryCode',
          countryName: 'countryName',
          entryNET: '2019-12-27T18:11:19.117Z',
          entryPoint: 'entryPoint',
          exitNLT: '2019-12-27T18:11:19.117Z',
          exitPoint: 'exitPoint',
          externalClearanceId: 'externalClearanceId',
          idSortie: 'idSortie',
          legNum: 0,
          profile: 'profile',
          reqICAO: true,
          reqPoint: true,
          routeString: 'routeString',
          sequenceNum: 0,
          status: 'status',
          validDesc: 'validDesc',
          validEndTime: '2019-12-27T18:11:19.117Z',
          validStartTime: '2019-12-27T18:11:19.117Z',
          windowRemark: 'windowRemark',
        },
      ],
      diplomaticClearanceRemarks: [
        { date: '2019-12-27T18:11:19.117Z', gdssRemarkId: 'gdssRemarkId', text: 'text', user: 'user' },
      ],
      dipWorksheetName: 'dipWorksheetName',
      docDeadline: '2019-12-27T18:11:19.117Z',
      externalWorksheetId: 'externalWorksheetId',
      origin: 'origin',
      origNetwork: 'origNetwork',
      sourceDL: 'sourceDL',
      updatedAt: '2019-12-27T18:11:19.117Z',
      updatedBy: 'updatedBy',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.diplomaticClearance.list({ firstDepDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.diplomaticClearance.list({ firstDepDate: '2019-12-27T18:11:19.117Z' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.diplomaticClearance.delete({ path_id: 'id', body_id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.diplomaticClearance.delete({ path_id: 'id', body_id: 'id' });
  });

  test('count: only required params', async () => {
    const responsePromise = client.diplomaticClearance.count({ firstDepDate: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.diplomaticClearance.count({ firstDepDate: '2019-12-27T18:11:19.117Z' });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.diplomaticClearance.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        firstDepDate: '2019-12-27T18:11:19.117Z',
        idMission: 'idMission',
        source: 'source',
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
    const response = await client.diplomaticClearance.createBulk([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        firstDepDate: '2019-12-27T18:11:19.117Z',
        idMission: 'idMission',
        source: 'source',
        id: 'id',
        apacsId: 'apacsId',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        diplomaticClearanceDetails: [
          {
            action: 'action',
            altCountryCode: 'altCountryCode',
            clearanceId: 'clearanceId',
            clearanceRemark: 'clearanceRemark',
            clearedCallSign: 'clearedCallSign',
            countryCode: 'countryCode',
            countryName: 'countryName',
            entryNET: '2019-12-27T18:11:19.117Z',
            entryPoint: 'entryPoint',
            exitNLT: '2019-12-27T18:11:19.117Z',
            exitPoint: 'exitPoint',
            externalClearanceId: 'externalClearanceId',
            idSortie: 'idSortie',
            legNum: 0,
            profile: 'profile',
            reqICAO: true,
            reqPoint: true,
            routeString: 'routeString',
            sequenceNum: 0,
            status: 'status',
            validDesc: 'validDesc',
            validEndTime: '2019-12-27T18:11:19.117Z',
            validStartTime: '2019-12-27T18:11:19.117Z',
            windowRemark: 'windowRemark',
          },
        ],
        diplomaticClearanceRemarks: [
          { date: '2019-12-27T18:11:19.117Z', gdssRemarkId: 'gdssRemarkId', text: 'text', user: 'user' },
        ],
        dipWorksheetName: 'dipWorksheetName',
        docDeadline: '2019-12-27T18:11:19.117Z',
        externalWorksheetId: 'externalWorksheetId',
        origin: 'origin',
        origNetwork: 'origNetwork',
        sourceDL: 'sourceDL',
        updatedAt: '2019-12-27T18:11:19.117Z',
        updatedBy: 'updatedBy',
      },
    ]);
  });

  test('queryhelp', async () => {
    const responsePromise = client.diplomaticClearance.queryhelp();
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
    await expect(client.diplomaticClearance.queryhelp({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unifieddatalibrary.NotFoundError,
    );
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.diplomaticClearance.tuple({
      columns: 'columns',
      firstDepDate: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.diplomaticClearance.tuple({
      columns: 'columns',
      firstDepDate: '2019-12-27T18:11:19.117Z',
    });
  });
});
