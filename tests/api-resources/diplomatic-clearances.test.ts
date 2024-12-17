// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource diplomaticClearances', () => {
  test('create: only required params', async () => {
    const responsePromise = client.diplomaticClearances.create([
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

  test('create: required and optional params', async () => {
    const response = await client.diplomaticClearances.create([
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
});
