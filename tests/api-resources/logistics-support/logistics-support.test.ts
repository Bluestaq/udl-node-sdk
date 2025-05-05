// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unified-data-library';

const client = new Unifieddatalibrary({
  password: 'My Password',
  username: 'My Username',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logisticsSupport', () => {
  test('create: only required params', async () => {
    const responsePromise = client.logisticsSupport.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      rptCreatedTime: '2023-07-13T13:47:00.123Z',
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
    const response = await client.logisticsSupport.create({
      classificationMarking: 'U',
      dataMode: 'TEST',
      rptCreatedTime: '2023-07-13T13:47:00.123Z',
      source: 'Bluestaq',
      id: 'LOGISTICS-SUPPORT-DETAILS UUID',
      aircraftMDS: 'CO17A',
      currICAO: 'KCOS',
      etic: '2023-07-13T13:47:00.123Z',
      etmc: '2023-07-13T13:47:00.123Z',
      extSystemId: 'GDSSBL012307131347070165',
      logisticAction: 'WA',
      logisticsDiscrepancyInfos: [
        {
          closureTime: '2023-07-17T10:30:00.123Z',
          discrepancyInfo: 'PILOT WINDSHIELD PANEL ASSY CRACKED, AND ARCING REQ R2 IAW 56.11.10',
          jcn: '231942400',
          jobStTime: '2023-07-17T10:30:00.123Z',
        },
      ],
      logisticsRecordId: 'L62017',
      logisticsRemarks: [
        { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
      ],
      logisticsSupportItems: [
        {
          cannibalized: true,
          deployPlanNumber: 'T89003',
          description: 'HOIST ADAPTER KIT',
          itemLastChangedDate: '2023-07-17T19:04:00.123Z',
          jobControlNumber: '231942400',
          logisticsParts: [
            {
              figureNumber: '3',
              indexNumber: '4',
              locationVerifier: 'JANE DOE',
              logisticsStocks: [
                {
                  quantity: 4,
                  sourceICAO: 'PHIK',
                  stockCheckTime: '2023-07-13T13:47:00.123Z',
                  stockPOC: 'SMITH, JOHN J',
                },
              ],
              measurementUnitCode: 'EA',
              nationalStockNumber: '5310-00-045-3299',
              partNumber: 'MS35338-42',
              requestVerifier: 'JOHN SMITH',
              supplyDocumentNumber: 'J223FU31908300',
              technicalOrderText: '1C-17A-4',
              workUnitCode: '5611UU001',
            },
          ],
          logisticsRemarks: [
            { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
          ],
          logisticsSpecialties: [
            {
              firstName: 'JOHN',
              last4Ssn: '9999',
              lastName: 'SMITH',
              rankCode: 'MAJ',
              roleTypeCode: 'TC',
              skillLevel: 3,
              specialty: 'ELEN',
            },
          ],
          quantity: 1,
          readyTime: '2023-07-17T19:04:00.123Z',
          receivedTime: '2023-07-17T19:04:00.123Z',
          recoveryRequestTypeCode: 'E',
          redeployPlanNumber: 'T89003',
          redeployShipmentUnitId: 'X400LA31949108',
          requestNumber: '89208',
          resupportFlag: true,
          shipmentUnitId: 'FB44273196X501XXX',
          siPOC: 'SMITH, JOHN J',
          sourceICAO: 'PHIK',
        },
      ],
      logisticsTransportationPlans: [
        {
          actDepTime: '2023-07-14T19:37:00.123Z',
          aircraftStatus: 'NMCMU',
          approxArrTime: '2023-07-14T20:37:00.123Z',
          cancelledDate: '2023-07-14T20:37:00.123Z',
          closedDate: '2023-07-14T20:37:00.123Z',
          coordinator: 'SMITH, JOHN',
          coordinatorUnit: 'TACC',
          destinationICAO: 'YBCS',
          duration: '086:20',
          estArrTime: '2023-07-15T14:25:00.123Z',
          estDepTime: '2023-07-15T14:25:00.123Z',
          lastChangedDate: '2023-07-14T20:37:00.123Z',
          logisticMasterRecordId: 'L62126',
          logisticsSegments: [
            {
              arrivalICAO: 'YBCS',
              departureICAO: 'PHIK',
              extMissionId: '2001101RF01202307062205',
              idMission: 'EXAMPLE-UUID',
              itin: 200,
              missionNumber: 'TAM308901196',
              missionType: 'SAAM',
              modeCode: 'A',
              segActArrTime: '2023-07-17T19:20:00.123Z',
              segActDepTime: '2023-07-17T19:20:00.123Z',
              segAircraftMDS: 'B7772E',
              segEstArrTime: '2023-07-17T19:20:00.123Z',
              segEstDepTime: '2023-07-17T19:20:00.123Z',
              segmentNumber: 3,
              segTailNumber: 'N819AX',
            },
          ],
          logisticsTransportationPlansRemarks: [
            { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
          ],
          majcom: 'HQAMC',
          missionChange: false,
          numEnrouteStops: 4,
          numTransLoads: 3,
          originICAO: 'KATL',
          planDefinition: 'DEPLOY',
          plansNumber: 'T89002',
          serialNumber: '9009209',
          statusCode: 'N',
          tpAircraftMDS: 'C17A',
          tpTailNumber: '99209',
        },
      ],
      maintStatusCode: 'NMCMU',
      mcTime: '2023-07-13T13:47:00.123Z',
      meTime: '2023-07-13T13:47:00.123Z',
      origin: 'THIRD_PARTY_DATASOURCE',
      owner: 'EXAMPLE_OWNER',
      reopenFlag: true,
      rptClosedTime: '2023-07-13T13:47:00.123Z',
      suppICAO: 'KCOS',
      tailNumber: '99290',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.logisticsSupport.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      rptCreatedTime: '2023-07-13T13:47:00.123Z',
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
    const response = await client.logisticsSupport.update('id', {
      classificationMarking: 'U',
      dataMode: 'TEST',
      rptCreatedTime: '2023-07-13T13:47:00.123Z',
      source: 'Bluestaq',
      body_id: 'LOGISTICS-SUPPORT-DETAILS UUID',
      aircraftMDS: 'CO17A',
      currICAO: 'KCOS',
      etic: '2023-07-13T13:47:00.123Z',
      etmc: '2023-07-13T13:47:00.123Z',
      extSystemId: 'GDSSBL012307131347070165',
      logisticAction: 'WA',
      logisticsDiscrepancyInfos: [
        {
          closureTime: '2023-07-17T10:30:00.123Z',
          discrepancyInfo: 'PILOT WINDSHIELD PANEL ASSY CRACKED, AND ARCING REQ R2 IAW 56.11.10',
          jcn: '231942400',
          jobStTime: '2023-07-17T10:30:00.123Z',
        },
      ],
      logisticsRecordId: 'L62017',
      logisticsRemarks: [
        { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
      ],
      logisticsSupportItems: [
        {
          cannibalized: true,
          deployPlanNumber: 'T89003',
          description: 'HOIST ADAPTER KIT',
          itemLastChangedDate: '2023-07-17T19:04:00.123Z',
          jobControlNumber: '231942400',
          logisticsParts: [
            {
              figureNumber: '3',
              indexNumber: '4',
              locationVerifier: 'JANE DOE',
              logisticsStocks: [
                {
                  quantity: 4,
                  sourceICAO: 'PHIK',
                  stockCheckTime: '2023-07-13T13:47:00.123Z',
                  stockPOC: 'SMITH, JOHN J',
                },
              ],
              measurementUnitCode: 'EA',
              nationalStockNumber: '5310-00-045-3299',
              partNumber: 'MS35338-42',
              requestVerifier: 'JOHN SMITH',
              supplyDocumentNumber: 'J223FU31908300',
              technicalOrderText: '1C-17A-4',
              workUnitCode: '5611UU001',
            },
          ],
          logisticsRemarks: [
            { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
          ],
          logisticsSpecialties: [
            {
              firstName: 'JOHN',
              last4Ssn: '9999',
              lastName: 'SMITH',
              rankCode: 'MAJ',
              roleTypeCode: 'TC',
              skillLevel: 3,
              specialty: 'ELEN',
            },
          ],
          quantity: 1,
          readyTime: '2023-07-17T19:04:00.123Z',
          receivedTime: '2023-07-17T19:04:00.123Z',
          recoveryRequestTypeCode: 'E',
          redeployPlanNumber: 'T89003',
          redeployShipmentUnitId: 'X400LA31949108',
          requestNumber: '89208',
          resupportFlag: true,
          shipmentUnitId: 'FB44273196X501XXX',
          siPOC: 'SMITH, JOHN J',
          sourceICAO: 'PHIK',
        },
      ],
      logisticsTransportationPlans: [
        {
          actDepTime: '2023-07-14T19:37:00.123Z',
          aircraftStatus: 'NMCMU',
          approxArrTime: '2023-07-14T20:37:00.123Z',
          cancelledDate: '2023-07-14T20:37:00.123Z',
          closedDate: '2023-07-14T20:37:00.123Z',
          coordinator: 'SMITH, JOHN',
          coordinatorUnit: 'TACC',
          destinationICAO: 'YBCS',
          duration: '086:20',
          estArrTime: '2023-07-15T14:25:00.123Z',
          estDepTime: '2023-07-15T14:25:00.123Z',
          lastChangedDate: '2023-07-14T20:37:00.123Z',
          logisticMasterRecordId: 'L62126',
          logisticsSegments: [
            {
              arrivalICAO: 'YBCS',
              departureICAO: 'PHIK',
              extMissionId: '2001101RF01202307062205',
              idMission: 'EXAMPLE-UUID',
              itin: 200,
              missionNumber: 'TAM308901196',
              missionType: 'SAAM',
              modeCode: 'A',
              segActArrTime: '2023-07-17T19:20:00.123Z',
              segActDepTime: '2023-07-17T19:20:00.123Z',
              segAircraftMDS: 'B7772E',
              segEstArrTime: '2023-07-17T19:20:00.123Z',
              segEstDepTime: '2023-07-17T19:20:00.123Z',
              segmentNumber: 3,
              segTailNumber: 'N819AX',
            },
          ],
          logisticsTransportationPlansRemarks: [
            { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
          ],
          majcom: 'HQAMC',
          missionChange: false,
          numEnrouteStops: 4,
          numTransLoads: 3,
          originICAO: 'KATL',
          planDefinition: 'DEPLOY',
          plansNumber: 'T89002',
          serialNumber: '9009209',
          statusCode: 'N',
          tpAircraftMDS: 'C17A',
          tpTailNumber: '99209',
        },
      ],
      maintStatusCode: 'NMCMU',
      mcTime: '2023-07-13T13:47:00.123Z',
      meTime: '2023-07-13T13:47:00.123Z',
      origin: 'THIRD_PARTY_DATASOURCE',
      owner: 'EXAMPLE_OWNER',
      reopenFlag: true,
      rptClosedTime: '2023-07-13T13:47:00.123Z',
      suppICAO: 'KCOS',
      tailNumber: '99290',
    });
  });

  test('list', async () => {
    const responsePromise = client.logisticsSupport.list();
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
      client.logisticsSupport.list({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.logisticsSupport.count();
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
      client.logisticsSupport.count({ firstResult: 0, maxResults: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('createBulk: only required params', async () => {
    const responsePromise = client.logisticsSupport.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          rptCreatedTime: '2023-07-13T13:47:00.123Z',
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
    const response = await client.logisticsSupport.createBulk({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          rptCreatedTime: '2023-07-13T13:47:00.123Z',
          source: 'Bluestaq',
          id: 'LOGISTICS-SUPPORT-DETAILS UUID',
          aircraftMDS: 'CO17A',
          currICAO: 'KCOS',
          etic: '2023-07-13T13:47:00.123Z',
          etmc: '2023-07-13T13:47:00.123Z',
          extSystemId: 'GDSSBL012307131347070165',
          logisticAction: 'WA',
          logisticsDiscrepancyInfos: [
            {
              closureTime: '2023-07-17T10:30:00.123Z',
              discrepancyInfo: 'PILOT WINDSHIELD PANEL ASSY CRACKED, AND ARCING REQ R2 IAW 56.11.10',
              jcn: '231942400',
              jobStTime: '2023-07-17T10:30:00.123Z',
            },
          ],
          logisticsRecordId: 'L62017',
          logisticsRemarks: [
            { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
          ],
          logisticsSupportItems: [
            {
              cannibalized: true,
              deployPlanNumber: 'T89003',
              description: 'HOIST ADAPTER KIT',
              itemLastChangedDate: '2023-07-17T19:04:00.123Z',
              jobControlNumber: '231942400',
              logisticsParts: [
                {
                  figureNumber: '3',
                  indexNumber: '4',
                  locationVerifier: 'JANE DOE',
                  logisticsStocks: [
                    {
                      quantity: 4,
                      sourceICAO: 'PHIK',
                      stockCheckTime: '2023-07-13T13:47:00.123Z',
                      stockPOC: 'SMITH, JOHN J',
                    },
                  ],
                  measurementUnitCode: 'EA',
                  nationalStockNumber: '5310-00-045-3299',
                  partNumber: 'MS35338-42',
                  requestVerifier: 'JOHN SMITH',
                  supplyDocumentNumber: 'J223FU31908300',
                  technicalOrderText: '1C-17A-4',
                  workUnitCode: '5611UU001',
                },
              ],
              logisticsRemarks: [
                { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
              ],
              logisticsSpecialties: [
                {
                  firstName: 'JOHN',
                  last4Ssn: '9999',
                  lastName: 'SMITH',
                  rankCode: 'MAJ',
                  roleTypeCode: 'TC',
                  skillLevel: 3,
                  specialty: 'ELEN',
                },
              ],
              quantity: 1,
              readyTime: '2023-07-17T19:04:00.123Z',
              receivedTime: '2023-07-17T19:04:00.123Z',
              recoveryRequestTypeCode: 'E',
              redeployPlanNumber: 'T89003',
              redeployShipmentUnitId: 'X400LA31949108',
              requestNumber: '89208',
              resupportFlag: true,
              shipmentUnitId: 'FB44273196X501XXX',
              siPOC: 'SMITH, JOHN J',
              sourceICAO: 'PHIK',
            },
          ],
          logisticsTransportationPlans: [
            {
              actDepTime: '2023-07-14T19:37:00.123Z',
              aircraftStatus: 'NMCMU',
              approxArrTime: '2023-07-14T20:37:00.123Z',
              cancelledDate: '2023-07-14T20:37:00.123Z',
              closedDate: '2023-07-14T20:37:00.123Z',
              coordinator: 'SMITH, JOHN',
              coordinatorUnit: 'TACC',
              destinationICAO: 'YBCS',
              duration: '086:20',
              estArrTime: '2023-07-15T14:25:00.123Z',
              estDepTime: '2023-07-15T14:25:00.123Z',
              lastChangedDate: '2023-07-14T20:37:00.123Z',
              logisticMasterRecordId: 'L62126',
              logisticsSegments: [
                {
                  arrivalICAO: 'YBCS',
                  departureICAO: 'PHIK',
                  extMissionId: '2001101RF01202307062205',
                  idMission: 'EXAMPLE-UUID',
                  itin: 200,
                  missionNumber: 'TAM308901196',
                  missionType: 'SAAM',
                  modeCode: 'A',
                  segActArrTime: '2023-07-17T19:20:00.123Z',
                  segActDepTime: '2023-07-17T19:20:00.123Z',
                  segAircraftMDS: 'B7772E',
                  segEstArrTime: '2023-07-17T19:20:00.123Z',
                  segEstDepTime: '2023-07-17T19:20:00.123Z',
                  segmentNumber: 3,
                  segTailNumber: 'N819AX',
                },
              ],
              logisticsTransportationPlansRemarks: [
                { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
              ],
              majcom: 'HQAMC',
              missionChange: false,
              numEnrouteStops: 4,
              numTransLoads: 3,
              originICAO: 'KATL',
              planDefinition: 'DEPLOY',
              plansNumber: 'T89002',
              serialNumber: '9009209',
              statusCode: 'N',
              tpAircraftMDS: 'C17A',
              tpTailNumber: '99209',
            },
          ],
          maintStatusCode: 'NMCMU',
          mcTime: '2023-07-13T13:47:00.123Z',
          meTime: '2023-07-13T13:47:00.123Z',
          origin: 'THIRD_PARTY_DATASOURCE',
          owner: 'EXAMPLE_OWNER',
          reopenFlag: true,
          rptClosedTime: '2023-07-13T13:47:00.123Z',
          suppICAO: 'KCOS',
          tailNumber: '99290',
        },
      ],
    });
  });

  test('get', async () => {
    const responsePromise = client.logisticsSupport.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.logisticsSupport.get(
        'id',
        { firstResult: 0, maxResults: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unifieddatalibrary.NotFoundError);
  });

  test('queryhelp', async () => {
    const responsePromise = client.logisticsSupport.queryhelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: only required params', async () => {
    const responsePromise = client.logisticsSupport.tuple({ columns: 'columns' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuple: required and optional params', async () => {
    const response = await client.logisticsSupport.tuple({
      columns: 'columns',
      firstResult: 0,
      maxResults: 0,
    });
  });

  test('unvalidatedPublish: only required params', async () => {
    const responsePromise = client.logisticsSupport.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          rptCreatedTime: '2023-07-13T13:47:00.123Z',
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
    const response = await client.logisticsSupport.unvalidatedPublish({
      body: [
        {
          classificationMarking: 'U',
          dataMode: 'TEST',
          rptCreatedTime: '2023-07-13T13:47:00.123Z',
          source: 'Bluestaq',
          id: 'LOGISTICS-SUPPORT-DETAILS UUID',
          aircraftMDS: 'CO17A',
          currICAO: 'KCOS',
          etic: '2023-07-13T13:47:00.123Z',
          etmc: '2023-07-13T13:47:00.123Z',
          extSystemId: 'GDSSBL012307131347070165',
          logisticAction: 'WA',
          logisticsDiscrepancyInfos: [
            {
              closureTime: '2023-07-17T10:30:00.123Z',
              discrepancyInfo: 'PILOT WINDSHIELD PANEL ASSY CRACKED, AND ARCING REQ R2 IAW 56.11.10',
              jcn: '231942400',
              jobStTime: '2023-07-17T10:30:00.123Z',
            },
          ],
          logisticsRecordId: 'L62017',
          logisticsRemarks: [
            { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
          ],
          logisticsSupportItems: [
            {
              cannibalized: true,
              deployPlanNumber: 'T89003',
              description: 'HOIST ADAPTER KIT',
              itemLastChangedDate: '2023-07-17T19:04:00.123Z',
              jobControlNumber: '231942400',
              logisticsParts: [
                {
                  figureNumber: '3',
                  indexNumber: '4',
                  locationVerifier: 'JANE DOE',
                  logisticsStocks: [
                    {
                      quantity: 4,
                      sourceICAO: 'PHIK',
                      stockCheckTime: '2023-07-13T13:47:00.123Z',
                      stockPOC: 'SMITH, JOHN J',
                    },
                  ],
                  measurementUnitCode: 'EA',
                  nationalStockNumber: '5310-00-045-3299',
                  partNumber: 'MS35338-42',
                  requestVerifier: 'JOHN SMITH',
                  supplyDocumentNumber: 'J223FU31908300',
                  technicalOrderText: '1C-17A-4',
                  workUnitCode: '5611UU001',
                },
              ],
              logisticsRemarks: [
                { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
              ],
              logisticsSpecialties: [
                {
                  firstName: 'JOHN',
                  last4Ssn: '9999',
                  lastName: 'SMITH',
                  rankCode: 'MAJ',
                  roleTypeCode: 'TC',
                  skillLevel: 3,
                  specialty: 'ELEN',
                },
              ],
              quantity: 1,
              readyTime: '2023-07-17T19:04:00.123Z',
              receivedTime: '2023-07-17T19:04:00.123Z',
              recoveryRequestTypeCode: 'E',
              redeployPlanNumber: 'T89003',
              redeployShipmentUnitId: 'X400LA31949108',
              requestNumber: '89208',
              resupportFlag: true,
              shipmentUnitId: 'FB44273196X501XXX',
              siPOC: 'SMITH, JOHN J',
              sourceICAO: 'PHIK',
            },
          ],
          logisticsTransportationPlans: [
            {
              actDepTime: '2023-07-14T19:37:00.123Z',
              aircraftStatus: 'NMCMU',
              approxArrTime: '2023-07-14T20:37:00.123Z',
              cancelledDate: '2023-07-14T20:37:00.123Z',
              closedDate: '2023-07-14T20:37:00.123Z',
              coordinator: 'SMITH, JOHN',
              coordinatorUnit: 'TACC',
              destinationICAO: 'YBCS',
              duration: '086:20',
              estArrTime: '2023-07-15T14:25:00.123Z',
              estDepTime: '2023-07-15T14:25:00.123Z',
              lastChangedDate: '2023-07-14T20:37:00.123Z',
              logisticMasterRecordId: 'L62126',
              logisticsSegments: [
                {
                  arrivalICAO: 'YBCS',
                  departureICAO: 'PHIK',
                  extMissionId: '2001101RF01202307062205',
                  idMission: 'EXAMPLE-UUID',
                  itin: 200,
                  missionNumber: 'TAM308901196',
                  missionType: 'SAAM',
                  modeCode: 'A',
                  segActArrTime: '2023-07-17T19:20:00.123Z',
                  segActDepTime: '2023-07-17T19:20:00.123Z',
                  segAircraftMDS: 'B7772E',
                  segEstArrTime: '2023-07-17T19:20:00.123Z',
                  segEstDepTime: '2023-07-17T19:20:00.123Z',
                  segmentNumber: 3,
                  segTailNumber: 'N819AX',
                },
              ],
              logisticsTransportationPlansRemarks: [
                { lastChanged: '2023-07-17T10:30:00.123Z', remark: 'EXAMPLE REMARK', username: 'JSMITH' },
              ],
              majcom: 'HQAMC',
              missionChange: false,
              numEnrouteStops: 4,
              numTransLoads: 3,
              originICAO: 'KATL',
              planDefinition: 'DEPLOY',
              plansNumber: 'T89002',
              serialNumber: '9009209',
              statusCode: 'N',
              tpAircraftMDS: 'C17A',
              tpTailNumber: '99209',
            },
          ],
          maintStatusCode: 'NMCMU',
          mcTime: '2023-07-13T13:47:00.123Z',
          meTime: '2023-07-13T13:47:00.123Z',
          origin: 'THIRD_PARTY_DATASOURCE',
          owner: 'EXAMPLE_OWNER',
          reopenFlag: true,
          rptClosedTime: '2023-07-13T13:47:00.123Z',
          suppICAO: 'KCOS',
          tailNumber: '99290',
        },
      ],
    });
  });
});
