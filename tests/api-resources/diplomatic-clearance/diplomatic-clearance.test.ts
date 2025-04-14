// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource diplomaticClearance', () => {
  test('create: only required params', async () => {
    const responsePromise = client.diplomaticClearance.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      firstDepDate: '2024-01-01T01:01:01.123Z',
      idMission: '0dba1363-2d09-49fa-a784-4bb4cbb1674a',
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
    const response = await client.diplomaticClearance.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      firstDepDate: '2024-01-01T01:01:01.123Z',
      idMission: '0dba1363-2d09-49fa-a784-4bb4cbb1674a',
      source: 'Bluestaq',
      id: '25059135-4afc-45c2-b78b-d6e843dbd96d',
      apacsId: '1083034',
      diplomaticClearanceDetails: [
        {
          action: 'O',
          altCountryCode: 'IZ',
          clearanceId: 'MFMW225662GHQ',
          clearanceRemark: 'Clearance remarks',
          clearedCallSign: 'FALCN09',
          countryCode: 'NL',
          countryName: 'NETHERLANDS',
          entryNET: '2024-01-01T01:01:01.123Z',
          entryPoint: 'LOMOS',
          exitNLT: '2024-01-01T01:01:01.123Z',
          exitPoint: 'BUDOP',
          externalClearanceId: 'aa714f4d52a37ab1a00b21af9566e379',
          idSortie: '207010e0-f97d-431c-8c00-7e46acfef0f5',
          legNum: 825,
          profile: 'T LAND/OFLY IATA COMPLIANT CARGO 23',
          reqICAO: true,
          reqPoint: true,
          routeString: 'DCT DOH P430 BAYAN/M062F150 P430 RAMKI',
          sequenceNum: 3,
          status: 'IN WORK',
          validDesc: 'CY2023',
          validEndTime: '2024-01-01T01:01:01.123Z',
          validStartTime: '2024-01-01T01:01:01.123Z',
          windowRemark: 'Period remarks',
        },
      ],
      diplomaticClearanceRemarks: [
        {
          date: '2024-01-01T01:01:01.123Z',
          gdssRemarkId: 'GDSSREMARK-ID',
          text: 'Example mission remarks.',
          user: 'John Doe',
        },
      ],
      dipWorksheetName: 'G2-939911-AC',
      docDeadline: '2024-01-01T01:01:01.123Z',
      externalWorksheetId: '990ae849089e3d6cad69655324176bb6',
      origin: 'THIRD_PARTY_DATASOURCE',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.diplomaticClearance.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.diplomaticClearance.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.diplomaticClearance.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      firstDepDate: '2024-01-01T01:01:01.123Z',
      idMission: '0dba1363-2d09-49fa-a784-4bb4cbb1674a',
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
    const response = await client.diplomaticClearance.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      firstDepDate: '2024-01-01T01:01:01.123Z',
      idMission: '0dba1363-2d09-49fa-a784-4bb4cbb1674a',
      source: 'Bluestaq',
      body_id: '25059135-4afc-45c2-b78b-d6e843dbd96d',
      apacsId: '1083034',
      diplomaticClearanceDetails: [
        {
          action: 'O',
          altCountryCode: 'IZ',
          clearanceId: 'MFMW225662GHQ',
          clearanceRemark: 'Clearance remarks',
          clearedCallSign: 'FALCN09',
          countryCode: 'NL',
          countryName: 'NETHERLANDS',
          entryNET: '2024-01-01T01:01:01.123Z',
          entryPoint: 'LOMOS',
          exitNLT: '2024-01-01T01:01:01.123Z',
          exitPoint: 'BUDOP',
          externalClearanceId: 'aa714f4d52a37ab1a00b21af9566e379',
          idSortie: '207010e0-f97d-431c-8c00-7e46acfef0f5',
          legNum: 825,
          profile: 'T LAND/OFLY IATA COMPLIANT CARGO 23',
          reqICAO: true,
          reqPoint: true,
          routeString: 'DCT DOH P430 BAYAN/M062F150 P430 RAMKI',
          sequenceNum: 3,
          status: 'IN WORK',
          validDesc: 'CY2023',
          validEndTime: '2024-01-01T01:01:01.123Z',
          validStartTime: '2024-01-01T01:01:01.123Z',
          windowRemark: 'Period remarks',
        },
      ],
      diplomaticClearanceRemarks: [
        {
          date: '2024-01-01T01:01:01.123Z',
          gdssRemarkId: 'GDSSREMARK-ID',
          text: 'Example mission remarks.',
          user: 'John Doe',
        },
      ],
      dipWorksheetName: 'G2-939911-AC',
      docDeadline: '2024-01-01T01:01:01.123Z',
      externalWorksheetId: '990ae849089e3d6cad69655324176bb6',
      origin: 'THIRD_PARTY_DATASOURCE',
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

  test('delete', async () => {
    const responsePromise = client.diplomaticClearance.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.diplomaticClearance.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
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
        classificationMarking: 'U',
        dataMode: 'TEST',
        firstDepDate: '2024-01-01T01:01:01.123Z',
        idMission: '0dba1363-2d09-49fa-a784-4bb4cbb1674a',
        source: 'Bluestaq',
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
        classificationMarking: 'U',
        dataMode: 'TEST',
        firstDepDate: '2024-01-01T01:01:01.123Z',
        idMission: '0dba1363-2d09-49fa-a784-4bb4cbb1674a',
        source: 'Bluestaq',
        id: '25059135-4afc-45c2-b78b-d6e843dbd96d',
        apacsId: '1083034',
        diplomaticClearanceDetails: [
          {
            action: 'O',
            altCountryCode: 'IZ',
            clearanceId: 'MFMW225662GHQ',
            clearanceRemark: 'Clearance remarks',
            clearedCallSign: 'FALCN09',
            countryCode: 'NL',
            countryName: 'NETHERLANDS',
            entryNET: '2024-01-01T01:01:01.123Z',
            entryPoint: 'LOMOS',
            exitNLT: '2024-01-01T01:01:01.123Z',
            exitPoint: 'BUDOP',
            externalClearanceId: 'aa714f4d52a37ab1a00b21af9566e379',
            idSortie: '207010e0-f97d-431c-8c00-7e46acfef0f5',
            legNum: 825,
            profile: 'T LAND/OFLY IATA COMPLIANT CARGO 23',
            reqICAO: true,
            reqPoint: true,
            routeString: 'DCT DOH P430 BAYAN/M062F150 P430 RAMKI',
            sequenceNum: 3,
            status: 'IN WORK',
            validDesc: 'CY2023',
            validEndTime: '2024-01-01T01:01:01.123Z',
            validStartTime: '2024-01-01T01:01:01.123Z',
            windowRemark: 'Period remarks',
          },
        ],
        diplomaticClearanceRemarks: [
          {
            date: '2024-01-01T01:01:01.123Z',
            gdssRemarkId: 'GDSSREMARK-ID',
            text: 'Example mission remarks.',
            user: 'John Doe',
          },
        ],
        dipWorksheetName: 'G2-939911-AC',
        docDeadline: '2024-01-01T01:01:01.123Z',
        externalWorksheetId: '990ae849089e3d6cad69655324176bb6',
        origin: 'THIRD_PARTY_DATASOURCE',
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
