// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'bluestaq@unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aviationRiskManagement', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aviationRiskManagement.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
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
    const response = await client.aviationRiskManagement.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
      source: 'Bluestaq',
      id: '026dd511-8ba5-47d3-9909-836149f87686',
      aviationRiskManagementWorksheetRecord: [
        {
          missionDate: '2024-11-25',
          aircraftMDS: 'E-2C HAWKEYE',
          approvalPending: true,
          approved: false,
          aviationRiskManagementWorksheetScore: [
            {
              approvalDate: '2024-11-01T16:00:00.123Z',
              approvedBy: 'John Smith',
              approvedCode: 0,
              aviationRiskManagementSortie: [
                {
                  extSortieId: 'MB014313032022407540',
                  idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
                  legNum: 100,
                  sortieScore: 3,
                },
              ],
              extScoreId: 'BM022301191649232740',
              riskCategory: 'Crew/Aircraft',
              riskDescription: 'Upgrade training',
              riskKey: '26',
              riskName: 'Crew Qualification',
              score: 1,
              scoreRemark: 'Worksheet score remark.',
            },
          ],
          dispositionComments: 'Disposition comment.',
          extRecordId: 'B022401191649232716',
          itinerary: 'RJTY-PGUA-RJTY',
          lastUpdatedAt: '2024-11-02T16:00:00.123Z',
          remarks: 'Worksheet record remark.',
          severityLevel: 0,
          submissionDate: '2024-11-01T16:00:00.123Z',
          tierNumber: 2,
          totalScore: 11,
          userId: 'TIER0SCORING',
        },
      ],
      extMissionId: 'MCD04250106123509230',
      missionNumber: 'LVM134412001',
      orgId: '50000002',
      origin: 'THIRD_PARTY_DATASOURCE',
      unitId: '63',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.aviationRiskManagement.retrieve('id');
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
      client.aviationRiskManagement.retrieve(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.aviationRiskManagement.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
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
    const response = await client.aviationRiskManagement.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
      source: 'Bluestaq',
      body_id: '026dd511-8ba5-47d3-9909-836149f87686',
      aviationRiskManagementWorksheetRecord: [
        {
          missionDate: '2024-11-25',
          aircraftMDS: 'E-2C HAWKEYE',
          approvalPending: true,
          approved: false,
          aviationRiskManagementWorksheetScore: [
            {
              approvalDate: '2024-11-01T16:00:00.123Z',
              approvedBy: 'John Smith',
              approvedCode: 0,
              aviationRiskManagementSortie: [
                {
                  extSortieId: 'MB014313032022407540',
                  idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
                  legNum: 100,
                  sortieScore: 3,
                },
              ],
              extScoreId: 'BM022301191649232740',
              riskCategory: 'Crew/Aircraft',
              riskDescription: 'Upgrade training',
              riskKey: '26',
              riskName: 'Crew Qualification',
              score: 1,
              scoreRemark: 'Worksheet score remark.',
            },
          ],
          dispositionComments: 'Disposition comment.',
          extRecordId: 'B022401191649232716',
          itinerary: 'RJTY-PGUA-RJTY',
          lastUpdatedAt: '2024-11-02T16:00:00.123Z',
          remarks: 'Worksheet record remark.',
          severityLevel: 0,
          submissionDate: '2024-11-01T16:00:00.123Z',
          tierNumber: 2,
          totalScore: 11,
          userId: 'TIER0SCORING',
        },
      ],
      extMissionId: 'MCD04250106123509230',
      missionNumber: 'LVM134412001',
      orgId: '50000002',
      origin: 'THIRD_PARTY_DATASOURCE',
      unitId: '63',
    });
  });

  test('delete', async () => {
    const responsePromise = client.aviationRiskManagement.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: only required params', async () => {
    const responsePromise = client.aviationRiskManagement.count({ idMission: 'idMission' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: required and optional params', async () => {
    const response = await client.aviationRiskManagement.count({
      idMission: 'idMission',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.aviationRiskManagement.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
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
    const response = await client.aviationRiskManagement.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          aviationRiskManagementWorksheetRecord: [
            {
              missionDate: '2024-11-25',
              aircraftMDS: 'E-2C HAWKEYE',
              approvalPending: true,
              approved: false,
              aviationRiskManagementWorksheetScore: [
                {
                  approvalDate: '2024-11-01T16:00:00.123Z',
                  approvedBy: 'John Smith',
                  approvedCode: 0,
                  aviationRiskManagementSortie: [
                    {
                      extSortieId: 'MB014313032022407540',
                      idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
                      legNum: 100,
                      sortieScore: 3,
                    },
                  ],
                  extScoreId: 'BM022301191649232740',
                  riskCategory: 'Crew/Aircraft',
                  riskDescription: 'Upgrade training',
                  riskKey: '26',
                  riskName: 'Crew Qualification',
                  score: 1,
                  scoreRemark: 'Worksheet score remark.',
                },
              ],
              dispositionComments: 'Disposition comment.',
              extRecordId: 'B022401191649232716',
              itinerary: 'RJTY-PGUA-RJTY',
              lastUpdatedAt: '2024-11-02T16:00:00.123Z',
              remarks: 'Worksheet record remark.',
              severityLevel: 0,
              submissionDate: '2024-11-01T16:00:00.123Z',
              tierNumber: 2,
              totalScore: 11,
              userId: 'TIER0SCORING',
            },
          ],
          extMissionId: 'MCD04250106123509230',
          missionNumber: 'LVM134412001',
          orgId: '50000002',
          origin: 'THIRD_PARTY_DATASOURCE',
          unitId: '63',
        },
      ],
    });
  });

  test('query: only required params', async () => {
    const responsePromise = client.aviationRiskManagement.query({ idMission: 'idMission' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.aviationRiskManagement.query({
      idMission: 'idMission',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('queryHelp', async () => {
    const responsePromise = client.aviationRiskManagement.queryHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.aviationRiskManagement.tuple({
      columns: 'columns',
      idMission: 'idMission',
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
    const response = await client.aviationRiskManagement.tuple({
      columns: 'columns',
      idMission: 'idMission',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.aviationRiskManagement.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
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
    const response = await client.aviationRiskManagement.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
          source: 'Bluestaq',
          id: '026dd511-8ba5-47d3-9909-836149f87686',
          aviationRiskManagementWorksheetRecord: [
            {
              missionDate: '2024-11-25',
              aircraftMDS: 'E-2C HAWKEYE',
              approvalPending: true,
              approved: false,
              aviationRiskManagementWorksheetScore: [
                {
                  approvalDate: '2024-11-01T16:00:00.123Z',
                  approvedBy: 'John Smith',
                  approvedCode: 0,
                  aviationRiskManagementSortie: [
                    {
                      extSortieId: 'MB014313032022407540',
                      idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
                      legNum: 100,
                      sortieScore: 3,
                    },
                  ],
                  extScoreId: 'BM022301191649232740',
                  riskCategory: 'Crew/Aircraft',
                  riskDescription: 'Upgrade training',
                  riskKey: '26',
                  riskName: 'Crew Qualification',
                  score: 1,
                  scoreRemark: 'Worksheet score remark.',
                },
              ],
              dispositionComments: 'Disposition comment.',
              extRecordId: 'B022401191649232716',
              itinerary: 'RJTY-PGUA-RJTY',
              lastUpdatedAt: '2024-11-02T16:00:00.123Z',
              remarks: 'Worksheet record remark.',
              severityLevel: 0,
              submissionDate: '2024-11-01T16:00:00.123Z',
              tierNumber: 2,
              totalScore: 11,
              userId: 'TIER0SCORING',
            },
          ],
          extMissionId: 'MCD04250106123509230',
          missionNumber: 'LVM134412001',
          orgId: '50000002',
          origin: 'THIRD_PARTY_DATASOURCE',
          unitId: '63',
        },
      ],
    });
  });
});
