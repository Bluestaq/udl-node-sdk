// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logisticsSupports', () => {
  test('create: only required params', async () => {
    const responsePromise = client.logisticsSupports.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        rptCreatedTime: '2019-12-27T18:11:19.117Z',
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
    const response = await client.logisticsSupports.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        rptCreatedTime: '2019-12-27T18:11:19.117Z',
        source: 'source',
        id: 'id',
        aircraftMDS: 'aircraftMDS',
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        currICAO: 'currICAO',
        etic: '2019-12-27T18:11:19.117Z',
        etmc: '2019-12-27T18:11:19.117Z',
        extSystemId: 'extSystemId',
        logisticAction: 'logisticAction',
        logisticsDiscrepancyInfos: [
          {
            closureTime: '2019-12-27T18:11:19.117Z',
            discrepancyInfo: 'discrepancyInfo',
            jcn: 'jcn',
            jobStTime: '2019-12-27T18:11:19.117Z',
          },
        ],
        logisticsRecordId: 'logisticsRecordId',
        logisticsRemarks: [
          { lastChanged: '2019-12-27T18:11:19.117Z', remark: 'remark', username: 'username' },
        ],
        logisticsSupportItems: [
          {
            cannibalized: true,
            deployPlanNumber: 'deployPlanNumber',
            description: 'description',
            itemLastChangedDate: '2019-12-27T18:11:19.117Z',
            jobControlNumber: 'jobControlNumber',
            logisticsParts: [
              {
                figureNumber: 'figureNumber',
                indexNumber: 'indexNumber',
                locationVerifier: 'locationVerifier',
                logisticsStocks: [
                  {
                    quantity: 0,
                    sourceICAO: 'sourceICAO',
                    stockCheckTime: '2019-12-27T18:11:19.117Z',
                    stockPOC: 'stockPOC',
                  },
                ],
                measurementUnitCode: 'measurementUnitCode',
                nationalStockNumber: 'nationalStockNumber',
                partNumber: 'partNumber',
                requestVerifier: 'requestVerifier',
                supplyDocumentNumber: 'supplyDocumentNumber',
                technicalOrderText: 'technicalOrderText',
                workUnitCode: 'workUnitCode',
              },
            ],
            logisticsRemarks: [
              { lastChanged: '2019-12-27T18:11:19.117Z', remark: 'remark', username: 'username' },
            ],
            logisticsSpecialties: [
              {
                firstName: 'firstName',
                last4Ssn: 'last4Ssn',
                lastName: 'lastName',
                rankCode: 'rankCode',
                roleTypeCode: 'roleTypeCode',
                skillLevel: 0,
                specialty: 'specialty',
              },
            ],
            quantity: 0,
            readyTime: '2019-12-27T18:11:19.117Z',
            receivedTime: '2019-12-27T18:11:19.117Z',
            recoveryRequestTypeCode: 'recoveryRequestTypeCode',
            redeployPlanNumber: 'redeployPlanNumber',
            redeployShipmentUnitId: 'redeployShipmentUnitId',
            requestNumber: 'requestNumber',
            resupportFlag: true,
            shipmentUnitId: 'shipmentUnitId',
            siPOC: 'siPOC',
            sourceICAO: 'sourceICAO',
          },
        ],
        logisticsTransportationPlans: [
          {
            actDepTime: '2019-12-27T18:11:19.117Z',
            aircraftStatus: 'aircraftStatus',
            approxArrTime: '2019-12-27T18:11:19.117Z',
            cancelledDate: '2019-12-27T18:11:19.117Z',
            closedDate: '2019-12-27T18:11:19.117Z',
            coordinator: 'coordinator',
            coordinatorUnit: 'coordinatorUnit',
            destinationICAO: 'destinationICAO',
            duration: 'duration',
            estArrTime: '2019-12-27T18:11:19.117Z',
            estDepTime: '2019-12-27T18:11:19.117Z',
            lastChangedDate: '2019-12-27T18:11:19.117Z',
            logisticMasterRecordId: 'logisticMasterRecordId',
            logisticsSegments: [
              {
                arrivalICAO: 'arrivalICAO',
                departureICAO: 'departureICAO',
                extMissionId: 'extMissionId',
                idMission: 'idMission',
                itin: 0,
                missionNumber: 'missionNumber',
                missionType: 'missionType',
                modeCode: 'modeCode',
                segActArrTime: '2019-12-27T18:11:19.117Z',
                segActDepTime: '2019-12-27T18:11:19.117Z',
                segAircraftMDS: 'segAircraftMDS',
                segEstArrTime: '2019-12-27T18:11:19.117Z',
                segEstDepTime: '2019-12-27T18:11:19.117Z',
                segmentNumber: 0,
                segTailNumber: 'segTailNumber',
              },
            ],
            logisticsTransportationPlansRemarks: [
              { lastChanged: '2019-12-27T18:11:19.117Z', remark: 'remark', username: 'username' },
            ],
            majcom: 'majcom',
            missionChange: true,
            numEnrouteStops: 0,
            numTransLoads: 0,
            originICAO: 'originICAO',
            planDefinition: 'planDefinition',
            plansNumber: 'plansNumber',
            serialNumber: 'serialNumber',
            statusCode: 'statusCode',
            tpAircraftMDS: 'tpAircraftMDS',
            tpTailNumber: 'tpTailNumber',
          },
        ],
        maintStatusCode: 'maintStatusCode',
        mcTime: '2019-12-27T18:11:19.117Z',
        meTime: '2019-12-27T18:11:19.117Z',
        origin: 'origin',
        origNetwork: 'origNetwork',
        owner: 'owner',
        reopenFlag: true,
        rptClosedTime: '2019-12-27T18:11:19.117Z',
        suppICAO: 'suppICAO',
        tailNumber: 'tailNumber',
        updatedAt: '2019-12-27T18:11:19.117Z',
        updatedBy: 'updatedBy',
      },
    ]);
  });
});
