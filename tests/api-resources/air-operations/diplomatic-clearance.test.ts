// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource diplomaticClearance', () => {
  test('createBulkV2: only required params', async () => {
    const responsePromise = client.airOperations.diplomaticClearance.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
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

  test('createBulkV2: required and optional params', async () => {
    const response = await client.airOperations.diplomaticClearance.createBulkV2([
      {
        classificationMarking: 'U',
        dataMode: 'REAL',
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
});
