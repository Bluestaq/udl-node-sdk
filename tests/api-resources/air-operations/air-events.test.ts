// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unifieddatalibrary from 'unifieddatalibrary';
import { Response } from 'node-fetch';

const client = new Unifieddatalibrary({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource airEvents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.airOperations.airEvents.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        type: 'type',
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
    const response = await client.airOperations.airEvents.create([
      {
        classificationMarking: 'classificationMarking',
        dataMode: 'dataMode',
        source: 'source',
        type: 'type',
        id: 'id',
        actualArrTime: '2019-12-27T18:11:19.117Z',
        actualDepTime: '2019-12-27T18:11:19.117Z',
        arct: '2019-12-27T18:11:19.117Z',
        arEventType: 'arEventType',
        arrPurpose: 'arrPurpose',
        arTrackId: 'arTrackId',
        arTrackName: 'arTrackName',
        baseAlt: 0,
        cancelled: true,
        createdAt: '2019-12-27T18:11:19.117Z',
        createdBy: 'createdBy',
        depPurpose: 'depPurpose',
        estArrTime: '2019-12-27T18:11:19.117Z',
        estDepTime: '2019-12-27T18:11:19.117Z',
        externalAirEventId: 'externalAirEventId',
        externalARTrackId: 'externalARTrackId',
        idMission: 'idMission',
        idSortie: 'idSortie',
        legNum: 0,
        location: 'location',
        numTankers: 0,
        origin: 'origin',
        origNetwork: 'origNetwork',
        plannedArrTime: '2019-12-27T18:11:19.117Z',
        plannedDepTime: '2019-12-27T18:11:19.117Z',
        priority: 'priority',
        receivers: [
          {
            altReceiverMissionId: 'altReceiverMissionId',
            amcReceiverMissionId: 'amcReceiverMissionId',
            externalReceiverId: 'externalReceiverId',
            fuelOn: 0,
            idReceiverAirfield: 'idReceiverAirfield',
            idReceiverMission: 'idReceiverMission',
            idReceiverSortie: 'idReceiverSortie',
            numRecAircraft: 0,
            packageId: 'packageId',
            receiverCallSign: 'receiverCallSign',
            receiverCellPosition: 0,
            receiverCoord: 'receiverCoord',
            receiverDeliveryMethod: 'receiverDeliveryMethod',
            receiverDeployedICAO: 'receiverDeployedICAO',
            receiverExercise: 'receiverExercise',
            receiverFuelType: 'receiverFuelType',
            receiverLegNum: 0,
            receiverMDS: 'receiverMDS',
            receiverOwner: 'receiverOwner',
            receiverPOC: 'receiverPOC',
            recOrg: 'recOrg',
            sequenceNum: 'sequenceNum',
          },
        ],
        remarks: [
          {
            date: '2019-12-27T18:11:19.117Z',
            externalRemarkId: 'externalRemarkId',
            text: 'text',
            user: 'user',
          },
        ],
        revTrack: true,
        rzct: '2019-12-27T18:11:19.117Z',
        rzPoint: 'rzPoint',
        rzType: 'rzType',
        shortTrack: true,
        sourceDL: 'sourceDL',
        statusCode: 'statusCode',
        tankers: [
          {
            altTankerMissionId: 'altTankerMissionId',
            amcTankerMissionId: 'amcTankerMissionId',
            dualRole: true,
            externalTankerId: 'externalTankerId',
            fuelOff: 0,
            idTankerAirfield: 'idTankerAirfield',
            idTankerMission: 'idTankerMission',
            idTankerSortie: 'idTankerSortie',
            tankerCallSign: 'tankerCallSign',
            tankerCellPosition: 0,
            tankerCoord: 'tankerCoord',
            tankerDeliveryMethod: 'tankerDeliveryMethod',
            tankerDeployedICAO: 'tankerDeployedICAO',
            tankerFuelType: 'tankerFuelType',
            tankerLegNum: 0,
            tankerMDS: 'tankerMDS',
            tankerOwner: 'tankerOwner',
            tankerPOC: 'tankerPOC',
          },
        ],
        trackTime: 0,
        updatedAt: '2019-12-27T18:11:19.117Z',
        updatedBy: 'updatedBy',
      },
    ]);
  });
});
